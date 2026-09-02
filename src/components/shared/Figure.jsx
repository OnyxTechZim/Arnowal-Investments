/**
 * Framed image with the brand's border treatment, a slow zoom-on-hover, and
 * an optional maroon wash + caption. `ratio` is any CSS aspect-ratio string.
 */
export default function Figure({
  src,
  alt,
  caption,
  ratio = "4 / 3",
  wash = false,
  priority = false,
  className = "",
}) {
  return (
    <figure className={`img-zoom relative border border-brand-gold-light bg-neutral-gray ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="block w-full object-cover"
        style={{ aspectRatio: ratio }}
      />
      {wash ? (
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-brand-maroon/10 mix-blend-multiply" />
      ) : null}
      {caption ? (
        <figcaption className="bg-neutral-white px-3 py-2 text-xs uppercase tracking-wider text-neutral-ink/60">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
