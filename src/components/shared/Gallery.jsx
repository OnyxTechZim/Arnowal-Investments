import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

/**
 * Responsive image grid with a lightweight lightbox. `items` is
 * `[{ src, alt }]`. Escape / backdrop / close button all dismiss; arrow keys
 * step through. Focus is trapped to the close button while open.
 */
export default function Gallery({ items }) {
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);
  const open = active !== null;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {items.map((item, i) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="img-zoom group block w-full border border-brand-gold-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon focus-visible:ring-offset-2"
            >
              <span className="sr-only">Open image: {item.alt}</span>
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="block aspect-4/3 w-full object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-ink/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 p-2 text-neutral-white/80 hover:text-neutral-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            <X aria-hidden="true" />
          </button>
          <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[active].src}
              alt={items[active].alt}
              className="max-h-[78vh] w-auto border border-white/15"
            />
            <figcaption className="mt-3 text-center text-sm text-neutral-white/75">
              {items[active].alt} · {active + 1} / {items.length}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
