import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/shared/ContactForm.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import { contact } from "../content/contact.js";

const detailItems = [
  { Icon: Phone, text: contact.details.phone },
  { Icon: Mail, text: contact.details.email },
  { Icon: MapPin, text: contact.details.address },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h1 className="font-heading text-4xl text-brand-maroon sm:text-5xl">{contact.heading}</h1>
          <p className="mt-4 max-w-md leading-relaxed text-neutral-ink/80">{contact.intro}</p>
          <ul className="mt-8 space-y-4">
            {detailItems.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-brand-gold-light text-brand-maroon">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={90}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
