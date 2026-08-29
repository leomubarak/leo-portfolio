import type { ChangeEvent } from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/cn';

interface FieldProps {
  id: string;
  label: string;
  value: string;
  error?: string;
  required?: boolean;
  maxLength?: number;
  placeholder?: string;
  type?: 'text' | 'email';
  autoComplete?: string;
  multiline?: boolean;
  rows?: number;
  onChange: (value: string) => void;
  onBlur: () => void;
}

const controlClasses = (hasError: boolean) =>
  cn(
    'w-full rounded-xl border bg-surface px-4 py-3 text-sm text-content',
    'placeholder:text-content-subtle',
    'transition-colors duration-200',
    hasError ? 'border-red-600 dark:border-red-400' : 'border-field-border hover:border-content-subtle',
  );

export function Field({
  id,
  label,
  value,
  error,
  required = false,
  maxLength,
  placeholder,
  type = 'text',
  autoComplete,
  multiline = false,
  rows = 6,
  onChange,
  onBlur,
}: FieldProps) {
  const errorId = `${id}-error`;
  const hasError = Boolean(error);

  const shared = {
    id,
    name: id,
    value,
    required,
    maxLength,
    placeholder,
    autoComplete,
    'aria-invalid': hasError,
    'aria-describedby': hasError ? errorId : undefined,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(event.target.value),
    onBlur,
    className: controlClasses(hasError),
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-content">
        {label}
        {required && <span className="ml-1 text-accent" aria-hidden="true">*</span>}
      </label>
      <div className="mt-2">
        {multiline ? (
          <textarea {...shared} rows={rows} className={cn(shared.className, 'resize-y')} />
        ) : (
          <input {...shared} type={type} />
        )}
      </div>
      {hasError && (
        <p id={errorId} className="mt-2 flex items-start gap-1.5 text-xs text-red-600 dark:text-red-400">
          <AlertCircle size={14} className="mt-px shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

export function HoneypotField({ onChange }: { onChange: (value: string) => void }) {
  return (
    <div className="sr-only" aria-hidden="true">
      <label htmlFor="website">Leave this field empty</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}
