import { Link } from "react-router-dom";
import { ClipboardCheck, Compass, Globe, Megaphone, Users } from "lucide-react";
import Card from "./Card.jsx";

const icons = {
  compass: Compass,
  users: Users,
  "clipboard-check": ClipboardCheck,
  megaphone: Megaphone,
  globe: Globe,
};

export default function ServiceCard({ title, summary, to, icon }) {
  const Icon = icons[icon] ?? Compass;
  return (
    <Card className="flex h-full flex-col">
      <Icon className="h-7 w-7 text-brand-gold" aria-hidden="true" strokeWidth={1.5} />
      <h3 className="mt-4 font-heading text-xl text-brand-maroon">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-ink/80">{summary}</p>
      <Link
        to={to}
        className="mt-5 inline-flex text-sm font-semibold uppercase tracking-wider text-brand-maroon underline decoration-brand-gold underline-offset-4 hover:text-brand-maroon-dark"
      >
        Read more
        <span className="sr-only"> about {title}</span>
      </Link>
    </Card>
  );
}
