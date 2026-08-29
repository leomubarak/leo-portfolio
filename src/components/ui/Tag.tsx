import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type TagTone = 'neutral' | 'accent' | 'outline';

const tones: Record<TagTone, string> = {
  neutral: 'border-transparent bg-surface-sunken text-content-muted',
  accent: 'border-transparent bg-accent-soft text-accent',
  outline: 'border-line-strong bg-transparent text-content-muted',
};

interface TagProps {
  children: ReactNode;
  tone?: TagTone;
  dot?: boolean;
  className?: string;
}

export function Tag({ children, tone = 'neutral', dot = false, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1',
        'font-mono text-[11px] leading-none tracking-wide',
        tones[tone],
        className,
      )}
    >
      {dot && (
        <span
          className={cn('size-1.5 rounded-full', tone === 'accent' ? 'bg-accent' : 'bg-content-subtle')}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
