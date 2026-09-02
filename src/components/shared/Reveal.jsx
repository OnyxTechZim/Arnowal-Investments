import { useEffect, useRef, useState } from "react";

/**
 * Fades/lifts children in when they scroll into view. CSS does the animation
 * (see `.reveal` in index.css); this just toggles the class once. Honours
 * `prefers-reduced-motion` — the CSS keeps content fully visible in that case,
 * so no motion is applied regardless of this component.
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        // Reveal when the element enters view, or if a jump-scroll (End key,
        // scrollbar drag, hash link) has already carried it above the viewport.
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
