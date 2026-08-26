import { cn } from '@/lib/cn';
import { siteConfig } from '@/data/site';

interface LogoProps {
  /** 'full' shows the wordmark, 'mark' shows just the monogram tile. */
  variant?: 'full' | 'mark';
  className?: string;
}

/**
 * Wordmark: the name set in the display face, closed by a green underscore —
 * a text cursor, the smallest possible nod to writing code and to teaching it.
 */
export function Logo({ variant = 'full', className }: LogoProps) {
  if (variant === 'mark') {
    return (
      <span
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ink-950 font-display text-lg font-semibold text-ink-25 dark:bg-ink-25 dark:text-ink-950',
          className,
        )}
        aria-hidden="true"
      >
        {siteConfig.initials}
      </span>
    );
  }

  return (
    <span className={cn('inline-flex items-baseline gap-1', className)}>
      <span className="font-display text-xl font-semibold tracking-tight text-content">
        {siteConfig.name}
      </span>
      <span className="h-[3px] w-4 translate-y-[-2px] rounded-full bg-accent" aria-hidden="true" />
    </span>
  );
}
