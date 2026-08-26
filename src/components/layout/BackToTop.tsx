import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useHasScrolled } from '@/hooks/useHasScrolled';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { duration, easing } from '@/lib/motion';

export function BackToTop() {
  const visible = useHasScrolled(800);
  const reducedMotion = usePrefersReducedMotion();

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: reducedMotion ? 'auto' : 'smooth',
            })
          }
          aria-label="Back to top"
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.9 }}
          transition={{
            duration: reducedMotion ? 0 : duration.fast,
            ease: easing.soft,
          }}
          className="fixed right-5 bottom-5 z-40 inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface-raised text-content-muted shadow-lifted transition-colors hover:border-line-strong hover:text-content md:right-8 md:bottom-8"
        >
          <ArrowUp size={18} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
