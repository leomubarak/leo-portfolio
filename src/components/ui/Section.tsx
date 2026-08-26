import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';

interface SectionProps {
  /** Anchor target used by the navbar, e.g. "projects". */
  id: string;
  children: ReactNode;
  /** 'sunken' tints the band so neighbouring sections separate without a rule. */
  tone?: 'base' | 'sunken';
  /** Set false when the section needs full-bleed content of its own. */
  contained?: boolean;
  className?: string;
}

/** Standard page band: id, vertical rhythm, optional tint, container. */
export function Section({
  id,
  children,
  tone = 'base',
  contained = true,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      // Links the band to its own <h2 id="{id}-title"> for screen readers.
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
