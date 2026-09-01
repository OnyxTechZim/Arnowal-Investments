import Button from "../components/shared/Button.jsx";
import Card from "../components/shared/Card.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import SubscribeForm from "../components/shared/SubscribeForm.jsx";
import { conferences } from "../content/conferences.js";

export default function Conferences() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading eyebrow="Convening" title={conferences.intro.heading}>
        {conferences.intro.body}
      </SectionHeading>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="font-heading text-2xl text-brand-maroon">{conferences.format.heading}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-neutral-ink/85">
            {conferences.format.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-brand-maroon">{conferences.audience.heading}</h2>
          <p className="mt-3 leading-relaxed text-neutral-ink/85">{conferences.audience.body}</p>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="font-heading text-2xl text-brand-maroon">{conferences.whyAttend.heading}</h2>
        <ul className="mt-4 space-y-3">
          {conferences.whyAttend.items.map((item) => (
            <li key={item} className="border-l-2 border-brand-gold pl-4 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <SectionHeading title={conferences.events.heading} />
        <p className="mt-4 max-w-3xl border-l-4 border-brand-gold bg-neutral-gray px-4 py-3 text-sm" role="note">
          {conferences.events.notice}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {conferences.events.items.map((event) => (
            <Card key={event.title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{event.status}</p>
              <h3 className="mt-2 font-heading text-xl text-brand-maroon">{event.title}</h3>
              <p className="text-sm text-neutral-ink/70">{event.when}</p>
              <p className="mt-2 text-sm">{event.note}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-xl">
        <SectionHeading title={conferences.subscribe.heading} align="center">
          {conferences.subscribe.body}
        </SectionHeading>
        <div className="mt-8">
          <SubscribeForm source="conferences" />
        </div>
        <div className="mt-6 text-center">
          <Button variant="secondary" to="/services/conferences">
            Hosting as a service
          </Button>
        </div>
      </section>
    </div>
  );
}
