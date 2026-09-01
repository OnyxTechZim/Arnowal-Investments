import { Link } from "react-router-dom";
import { site } from "../../content/site.js";
import { contact } from "../../content/contact.js";
import { services } from "../../content/services.js";
import GlobeMotif from "./GlobeMotif.jsx";
import SubscribeForm from "./SubscribeForm.jsx";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-maroon-dark text-neutral-white">
      <GlobeMotif className="pointer-events-none absolute -right-16 -top-10 h-72 w-72 text-brand-gold/20" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-heading text-2xl">{site.shortName}</p>
          <p className="mt-2 text-sm text-brand-gold-light">{site.legalName}</p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-white/80">{site.tagline}</p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link className="hover:text-brand-gold-light" to={s.path}>
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Contact</h2>
          <p className="mt-3 text-xs uppercase tracking-wide text-brand-gold-light/80">{contact.detailsNotice}</p>
          <ul className="mt-2 space-y-1 text-sm text-neutral-white/85">
            <li>{contact.details.email}</li>
            <li>{contact.details.phone}</li>
            <li>{contact.details.address}</li>
          </ul>
          <ul className="mt-4 flex gap-4 text-sm">
            {site.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-brand-gold-light"
                  aria-label={item.placeholder ? `${item.label} (placeholder link)` : item.label}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Subscribe</h2>
          <p className="mt-3 mb-4 text-sm text-neutral-white/80">Invites and occasional practice notes.</p>
          <div className="mt-4 bg-neutral-white p-4 text-neutral-ink">
            <SubscribeForm source="footer" />
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-4 text-center text-xs text-neutral-white/60">
        © {new Date().getFullYear()} {site.legalName}
      </p>
    </footer>
  );
}
