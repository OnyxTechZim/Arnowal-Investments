import { Link } from "react-router-dom";
import { ClipboardCheck, Compass, Globe, Megaphone, Users } from "lucide-react";

const icons = {
  compass: Compass,
  users: Users,
  "clipboard-check": ClipboardCheck,
  megaphone: Megaphone,
  globe: Globe,
};

export default function ServiceCard({ title, summary, to, icon, image, headingLevel = "h3" }) {
  const Icon = icons[icon] ?? Compass;
  const Heading = headingLevel;
  return (
    <Link
      to={to}
      className="group flex h-full flex-col border border-brand-gold-light bg-neutral-white shadow-[4px_4px_0_0_var(--color-brand-maroon)] transition-shadow hover:shadow-[7px_7px_0_0_var(--color-brand-maroon)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-maroon focus-visible:ring-offset-2"
    >
      {image ? (
        <div className="img-zoom relative">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className="block aspect-16/10 w-full object-cover"
          />
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-brand-maroon/10 mix-blend-multiply" />
          <span className="absolute -bottom-4 left-5 inline-flex bg-neutral-white p-2 shadow-sm ring-1 ring-brand-gold-light">
            <Icon className="h-6 w-6 text-brand-gold" aria-hidden="true" strokeWidth={1.5} />
          </span>
        </div>
      ) : (
        <Icon className="mx-6 mt-6 h-7 w-7 text-brand-gold" aria-hidden="true" strokeWidth={1.5} />
      )}
      <div className="flex flex-1 flex-col p-6 pt-8">
        <Heading className="font-heading text-xl text-brand-maroon">{title}</Heading>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-ink/80">{summary}</p>
        <span className="mt-5 inline-flex text-sm font-semibold uppercase tracking-wider text-brand-maroon underline decoration-brand-gold underline-offset-4 group-hover:text-brand-maroon-dark">
          Read more
          <span className="sr-only"> about {title}</span>
        </span>
      </div>
    </Link>
  );
}
