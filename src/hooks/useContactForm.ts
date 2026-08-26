import { useCallback, useRef, useState } from 'react';
import { validateField, validateForm } from '@/lib/validation';
import type { ContactFormErrors, ContactFormValues } from '@/lib/validation';

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY_VALUES: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

/** Set VITE_CONTACT_ENDPOINT in .env to connect a provider (see README). */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT ?? '';

export const isContactEndpointConfigured = ENDPOINT.trim().length > 0;

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormValues, boolean>>>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  /** Simple bot trap: a hidden field humans never see, let alone fill in. */
  const honeypot = useRef('');

  const setValue = useCallback(
    (field: keyof ContactFormValues, value: string) => {
      setValues((current) => ({ ...current, [field]: value }));
      // Only re-validate live once the field has been left at least once,
      // so nobody is told their email is wrong while still typing it.
      if (touched[field]) {
        setErrors((current) => ({
          ...current,
          [field]: validateField(field, value),
        }));
      }
    },
    [touched],
  );

  const handleBlur = useCallback(
    (field: keyof ContactFormValues) => {
      setTouched((current) => ({ ...current, [field]: true }));
      setErrors((current) => ({
        ...current,
        [field]: validateField(field, values[field]),
      }));
    },
    [values],
  );

  const setHoneypot = useCallback((value: string) => {
    honeypot.current = value;
  }, []);

  const submit = useCallback(async (): Promise<keyof ContactFormValues | null> => {
    const nextErrors = validateForm(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    const firstInvalid = (Object.keys(nextErrors) as (keyof ContactFormValues)[])[0];
    if (firstInvalid) {
      setStatus('idle');
      return firstInvalid;
    }

    // Pretend success for bots rather than telling them the trap worked.
    if (honeypot.current.trim().length > 0) {
      setStatus('success');
      setStatusMessage('Thanks — your message has been sent.');
      setValues(EMPTY_VALUES);
      return null;
    }

    if (!isContactEndpointConfigured) {
      setStatus('error');
      setStatusMessage(
        'The form is not connected to an email service yet, so this message would not reach anyone. Please use one of the direct contact options instead.',
      );
      return null;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

      setStatus('success');
      setStatusMessage('Thanks — your message has been sent. I will reply as soon as I can.');
      setValues(EMPTY_VALUES);
      setTouched({});
    } catch {
      setStatus('error');
      setStatusMessage(
        'Something went wrong sending that. Please try again, or reach me directly using the options listed.',
      );
    }

    return null;
  }, [values]);

  const reset = useCallback(() => {
    setValues(EMPTY_VALUES);
    setErrors({});
    setTouched({});
    setStatus('idle');
    setStatusMessage('');
  }, []);

  return {
    values,
    errors,
    status,
    statusMessage,
    setValue,
    handleBlur,
    setHoneypot,
    submit,
    reset,
  };
}
