export default function SectionHeading({ eyebrow, title, children, align = "left", tone = "onLight", as = "h2" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "onDark" ? "text-neutral-white" : "text-brand-maroon";
  const bodyColor = tone === "onDark" ? "text-neutral-white/85" : "text-neutral-ink/80";
  const Title = as;
  return (
    <header className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${
            tone === "onDark" ? "text-brand-gold-light" : "text-brand-maroon-dark"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Title className={`mt-2 font-heading text-3xl sm:text-4xl ${titleColor}`}>{title}</Title>
      <div className={`gold-rule mt-4 ${align === "center" ? "mx-auto w-32" : "w-24"}`} />
      {children ? <div className={`mt-4 text-base leading-relaxed ${bodyColor}`}>{children}</div> : null}
    </header>
  );
}
