import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Horizontal snap-scroll row (drag/swipe/trackpad native; arrow buttons for
 * mouse/keyboard). Each child is wrapped in a fixed-width, height-stretched
 * slide. `edgeFadeFrom` should match the section background the carousel
 * sits on (default assumes a white section).
 */
export default function Carousel({
  children,
  itemWidthClass = "w-[82%] sm:w-[46%] lg:w-[31%]",
  ariaLabel,
  edgeFadeFrom = "from-neutral-white",
}) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const updateEdges = () => {
      setAtStart(el.scrollLeft <= 4);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    };
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [children]);

  function scrollByCard(dir) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-carousel-item]");
    const gap = 24;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  const items = Array.isArray(children) ? children : [children];

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="group"
        aria-label={ariaLabel}
        className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {items.map((child, i) => (
          <div key={i} data-carousel-item className={`shrink-0 snap-start ${itemWidthClass}`}>
            {child}
          </div>
        ))}
      </div>

      {!atStart ? (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r ${edgeFadeFrom} to-transparent`}
        />
      ) : null}
      {!atEnd ? (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l ${edgeFadeFrom} to-transparent`}
        />
      ) : null}

      <div className="mt-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          aria-label="Scroll left"
          className="border border-brand-gold-light p-2 text-brand-maroon transition-colors hover:bg-brand-gold-light/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon disabled:opacity-30 disabled:hover:bg-transparent"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          aria-label="Scroll right"
          className="border border-brand-gold-light p-2 text-brand-maroon transition-colors hover:bg-brand-gold-light/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon disabled:opacity-30 disabled:hover:bg-transparent"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
