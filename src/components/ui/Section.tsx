import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';

interface SectionProps {
  id: string;
  children: ReactNode;
  tone?: 'base' | 'sunken';
  contained?: boolean;
  className?: string;
}

export function Section({ id, children, tone = 'base', contained = true, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        'section-y scroll-mt-24',
        tone === 'sunken' && 'border-y border-line bg-surface-sunken',
        className,
      )}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
