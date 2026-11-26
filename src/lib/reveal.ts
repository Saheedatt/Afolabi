import { useEffect, useRef } from "react";

/**
 * Glide-in on scroll: every `.reveal` inside the returned ref gets `.in` once it scrolls into view.
 * Pass `deps` that change the list's contents (for example the role being shown) so new items are watched.
 */
export function useReveal<T extends HTMLElement>(deps: unknown[] = []) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = [...root.querySelectorAll<HTMLElement>(".reveal:not(.in)")];
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return ref;
}
