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

const ENDPOINT = '/api/contact';

export const isContactEndpointConfigured = true;

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormValues, boolean>>>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const honeypot = useRef('');

  const setValue = useCallback(
    (field: keyof ContactFormValues, value: string) => {
      setValues((current) => ({ ...current, [field]: value }));

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

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const firstInvalid = (Object.keys(nextErrors) as (keyof ContactFormValues)[])[0];

    if (firstInvalid) {
      setStatus('idle');
      return firstInvalid;
    }

    // Honeypot spam protection
    if (honeypot.current.trim().length > 0) {
      setStatus('success');
      setStatusMessage('Thanks, your message has been sent.');
      setValues(EMPTY_VALUES);
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

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error || `Request failed with status ${response.status}`);
      }

      setStatus('success');
      setStatusMessage('Thanks, your message has been sent. I will reply as soon as I can.');

      setValues(EMPTY_VALUES);
      setTouched({});
    } catch (error) {
      console.error('Contact form error:', error);

      setStatus('error');
      setStatusMessage(
        'Something went wrong sending that. Please try again, or email leomubarak11@gmail.com directly.',
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
