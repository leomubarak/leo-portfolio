export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

/**
 * Deliberately permissive: it catches typos like a missing @ or a trailing
 * comma without rejecting valid addresses that a stricter pattern would.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const FIELD_LIMITS = {
  name: 80,
  email: 120,
  subject: 120,
  message: 2000,
} as const;

const MESSAGE_MINIMUM = 10;

/** Validates one field. Returns undefined when the value is acceptable. */
export function validateField(field: keyof ContactFormValues, value: string): string | undefined {
  const trimmed = value.trim();

  switch (field) {
    case 'name':
      if (!trimmed) return 'Please enter your name.';
      if (trimmed.length < 2) return 'That looks too short — please enter your full name.';
      if (trimmed.length > FIELD_LIMITS.name)
        return `Please keep this under ${FIELD_LIMITS.name} characters.`;
      return undefined;

    case 'email':
      if (!trimmed) return 'Please enter your email address.';
      if (!EMAIL_PATTERN.test(trimmed)) return 'That does not look like a complete email address.';
      if (trimmed.length > FIELD_LIMITS.email)
        return `Please keep this under ${FIELD_LIMITS.email} characters.`;
      return undefined;

    case 'subject':
      if (!trimmed) return 'Please add a subject.';
      if (trimmed.length > FIELD_LIMITS.subject)
        return `Please keep this under ${FIELD_LIMITS.subject} characters.`;
      return undefined;

    case 'message':
      if (!trimmed) return 'Please write a message.';
      if (trimmed.length < MESSAGE_MINIMUM)
        return `A little more detail would help — at least ${MESSAGE_MINIMUM} characters.`;
      if (trimmed.length > FIELD_LIMITS.message)
        return `Please keep this under ${FIELD_LIMITS.message} characters.`;
      return undefined;

    default:
      return undefined;
  }
}

export function validateForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  (Object.keys(values) as (keyof ContactFormValues)[]).forEach((field) => {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  });

  return errors;
}
