import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site } from "../../content/site.js";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-neutral-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-brand-gold-light shadow-[0_1px_12px_rgba(26,26,26,0.08)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold" onClick={() => setOpen(false)}>
          <Logo className="h-12 w-auto sm:h-14" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative text-sm font-semibold uppercase tracking-[0.14em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-brand-gold after:transition-all after:duration-300 after:content-[''] hover:after:w-full ${
                  isActive
                    ? "text-brand-maroon after:w-full"
                    : "text-neutral-ink/70 hover:text-brand-maroon after:w-0"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-brand-maroon md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-brand-gold-light px-4 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-3">
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 text-base font-semibold uppercase tracking-wider ${
                      isActive ? "text-brand-maroon" : "text-neutral-ink"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
