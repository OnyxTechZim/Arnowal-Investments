import { Link } from "react-router-dom";
import { site } from "../../content/site.js";
import { contact } from "../../content/contact.js";
import { services } from "../../content/services.js";
import GlobeMotif from "./GlobeMotif.jsx";
import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-maroon-dark text-neutral-white">
      <GlobeMotif className="pointer-events-none absolute -right-16 -top-10 h-72 w-72 text-brand-gold/20" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="inline-block bg-neutral-white p-2">
            <Logo className="h-16 w-auto" />
          </div>
          <p className="mt-4 font-heading text-2xl">{site.shortName}</p>
          <p className="mt-2 text-base text-brand-gold-light">{site.legalName}</p>
          <p className="mt-4 text-base leading-relaxed text-neutral-white/80">{site.tagline}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Services</h2>
          <ul className="mt-3 space-y-2 text-base">
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
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Contact</h2>
          <ul className="mt-2 space-y-1 text-base text-neutral-white/85">
            <li>{contact.details.email}</li>
            <li>{contact.details.phone}</li>
            <li>{contact.details.address}</li>
          </ul>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 border-t border-white/10 px-4 py-6 text-sm text-neutral-white/60 sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.legalName}
        </p>
        <ul className="flex gap-5">
          {site.social.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-neutral-white/60 hover:text-brand-gold-light"
                aria-label={item.placeholder ? `${item.label} (placeholder link)` : item.label}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
