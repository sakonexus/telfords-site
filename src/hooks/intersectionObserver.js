import { useEffect, useState } from 'react';

export function useSectionObserver(
  ref,
  { threshold = 0.5, sectionId, emitEvent = false } = {}
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        setIsVisible(visible);

        if (emitEvent && sectionId) {
          window.dispatchEvent(
            new CustomEvent('sectionVisible', {
              detail: { id: sectionId, visible },
            })
          );
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, threshold, emitEvent, sectionId]);

  return isVisible;
}
