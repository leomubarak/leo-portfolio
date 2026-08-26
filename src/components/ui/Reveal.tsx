import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { REVEAL_OFFSET, revealViewport, transitions } from '@/lib/motion';

interface RevealProps {
  children: ReactNode;
  /** Seconds to wait after the element enters the viewport. */
  delay?: number;
  className?: string;
}

/**
 * Scroll reveal used by every section. With reduced motion switched on it
 * renders the content plainly — no fade, no offset, no delay.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: REVEAL_OFFSET }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ ...transitions.entrance, delay }}
    >
      {children}
    </motion.div>
  );
}
