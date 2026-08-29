import { useEffect, useState } from 'react';

export function useHasScrolled(offset = 8): boolean {
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const update = () => setHasScrolled(window.scrollY > offset);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [offset]);
  return hasScrolled;
}
