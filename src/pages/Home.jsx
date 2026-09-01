import Button from "../components/shared/Button.jsx";
import GlobeMotif from "../components/shared/GlobeMotif.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import ServiceCard from "../components/shared/ServiceCard.jsx";
import SubscribeForm from "../components/shared/SubscribeForm.jsx";
import { home } from "../content/home.js";
import { services } from "../content/services.js";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-neutral-gray clip-angle-br">
        <GlobeMotif className="pointer-events-none absolute -right-10 top-0 h-[28rem] w-[28rem] text-brand-gold/30" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-maroon-dark">{home.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl text-brand-maroon sm:text-6xl">{home.hero.headline}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-ink/80">{home.hero.valueProp}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={home.hero.primaryCta.to}>{home.hero.primaryCta.label}</Button>
            <Button variant="secondary" to={home.hero.secondaryCta.to}>
              {home.hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Practice" title="Five lines of work">
          Each card opens a dedicated page — not a renamed paragraph.
        </SectionHeading>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} title={s.title} summary={s.summary} to={s.path} icon={s.icon} />
          ))}
        </div>
      </section>

      <section className="bg-brand-maroon text-neutral-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading eyebrow="Credibility" title={home.credibility.heading} tone="onDark" />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {home.credibility.items.map((item) => (
              <div key={item.title} className="border-t border-brand-gold pt-4">
                <h3 className="font-heading text-xl text-brand-gold-light">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-white/85">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="border border-brand-gold-light bg-neutral-gray p-8 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-maroon-dark">{home.featuredConference.eyebrow}</p>
          <h2 className="mt-2 font-heading text-3xl text-brand-maroon sm:text-4xl">{home.featuredConference.heading}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-neutral-ink/80">{home.featuredConference.body}</p>
          <div className="mt-6">
            <Button to={home.featuredConference.cta.to}>{home.featuredConference.cta.label}</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-xl px-4 pb-20 sm:px-6">
        <SectionHeading title={home.subscribe.heading} align="center">
          {home.subscribe.body}
        </SectionHeading>
        <div className="mt-8">
          <SubscribeForm source="home" />
        </div>
      </section>
    </>
  );
}
