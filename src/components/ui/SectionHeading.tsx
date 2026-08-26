import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  /** Must match the parent Section id so aria-labelledby resolves. */
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Right-aligned control on desktop, e.g. a "View all" button. */
  action?: ReactNode;
  align?: 'start' | 'center';
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
  align = 'start',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div
      className={cn(
        'flex flex-col gap-6',
        centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between',
        className,
      )}
    >
      <div className={cn('max-w-2xl', centered && 'mx-auto')}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={`${id}-title`} className="mt-3 text-display-md font-semibold text-content">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-content-muted">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
