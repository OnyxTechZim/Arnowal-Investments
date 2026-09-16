import Card from "../components/shared/Card.jsx";
import Figure from "../components/shared/Figure.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import SubscribeForm from "../components/shared/SubscribeForm.jsx";
import { contact } from "../content/contact.js";
import { media } from "../content/media.js";

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading as="h1" eyebrow="Get in touch" title={contact.heading}>
        {contact.intro}
      </SectionHeading>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <Reveal className="space-y-6">
          <Card>
            <h2 className="font-heading text-2xl text-brand-maroon">Details</h2>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="uppercase tracking-wider text-brand-gold">Email</dt>
                <dd>{contact.details.email}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-wider text-brand-gold">Phone</dt>
                <dd>{contact.details.phone}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-wider text-brand-gold">Address</dt>
                <dd>{contact.details.address}</dd>
              </div>
            </dl>
          </Card>
          <Figure
            src={media.deskWork}
            alt="A focused work session at a studio desk"
            ratio="16 / 9"
            wash
          />
        </Reveal>
        <Reveal as="div" delay={90}>
          <h2 className="font-heading text-2xl text-brand-maroon">{contact.subscribe.heading}</h2>
          <p className="mt-2 mb-6 text-sm leading-relaxed text-neutral-ink/80">{contact.subscribe.body}</p>
          <SubscribeForm source="contact" />
        </Reveal>
      </div>
    </div>
  );
}
