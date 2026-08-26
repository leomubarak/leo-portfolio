import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently in view.
 * Uses IntersectionObserver rather than scroll maths, so it stays cheap and
 * keeps working when sections change height on smaller screens.
 */
export function useScrollSpy(sectionIds: string[], topOffset = 96): string | null {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // The section closest to the top of the viewport wins.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        // Shrink the observed band to just under the sticky navbar.
        rootMargin: `-${topOffset}px 0px -55% 0px`,
        threshold: 0,
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds, topOffset]);

  return activeId;
}
