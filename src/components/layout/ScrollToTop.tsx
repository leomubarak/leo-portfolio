import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Routers keep the scroll position between pages; visitors do not expect that.
 * Jumps to the top on route change, and handles fragment links (/#contact)
 * that arrive from another page.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior,
      });
      return;
    }

    // The target page may still be animating in, so look for the element for
    // a few frames before giving up rather than assuming it is already there.
    let frame = 0;
    let raf = 0;

    const findTarget = () => {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (frame < 40) {
        frame += 1;
        raf = requestAnimationFrame(findTarget);
      }
    };

    raf = requestAnimationFrame(findTarget);
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);

  return null;
}
