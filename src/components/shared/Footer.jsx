import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { site } from "../../content/site.js";
import { contact } from "../../content/contact.js";
import { services } from "../../content/services.js";
import GlobeMotif from "./GlobeMotif.jsx";
import Logo from "./Logo.jsx";
import SubscribeForm from "./SubscribeForm.jsx";
import { LinkedinIcon, FacebookIcon, InstagramIcon } from "./SocialIcons.jsx";

const socialIcons = {
  linkedin: LinkedinIcon,
  x: X,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-maroon-dark text-neutral-white">
      <GlobeMotif className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 text-brand-gold/10" />
      <div className="relative mx-auto grid max-w-6xl gap-x-8 gap-y-12 px-4 pt-16 sm:px-6 md:grid-cols-2">
        <div>
          <div className="inline-block rounded-sm bg-neutral-white p-3 shadow-[4px_4px_0_0_var(--color-brand-gold)]">
            <Logo className="h-16 w-auto" />
          </div>
          <p className="mt-5 font-heading text-2xl">{site.shortName}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-white/75">{site.tagline}</p>
        </div>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-3">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Quick Links</h2>
            <span className="gold-rule mt-3 block w-8" />
            <ul className="mt-4 space-y-2 text-sm">
              {site.nav.map((item) => (
                <li key={item.to}>
                  <Link className="text-neutral-white/75 transition-colors hover:text-brand-gold-light" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Services</h2>
            <span className="gold-rule mt-3 block w-8" />
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link className="text-neutral-white/75 transition-colors hover:text-brand-gold-light" to={s.path}>
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Contact</h2>
            <span className="gold-rule mt-3 block w-8" />
            <ul className="mt-4 space-y-2 text-sm text-neutral-white/75">
              <li>{contact.details.email}</li>
              <li>{contact.details.phone}</li>
              <li>{contact.details.address}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-6xl border-t border-white/10 px-4 py-10 sm:px-6">
        <div className="max-w-sm py-6 sm:ml-auto sm:py-8">
          <SubscribeForm source="footer" />
        </div>
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 border-t border-white/10 px-4 py-6 text-xs text-neutral-white/50 sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.legalName}
        </p>
        <ul className="flex items-center gap-4">
          {site.social.map((item) => {
            const Icon = socialIcons[item.icon];
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-neutral-white/50 transition-colors hover:text-brand-gold-light"
                  aria-label={item.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
