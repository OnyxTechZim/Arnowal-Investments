import Button from "../components/shared/Button.jsx";
import Carousel from "../components/shared/Carousel.jsx";
import GlobeMotif from "../components/shared/GlobeMotif.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import ServiceCard from "../components/shared/ServiceCard.jsx";
import { home } from "../content/home.js";
import { media, serviceImages } from "../content/media.js";
import { services } from "../content/services.js";

export default function Home() {
  // Renders the last sentence of the headline in the gold accent — two-tone
  // treatment borrowed from the reference sites (Plan.md design-inspiration
  // pass), applied to existing copy rather than new hardcoded text.
  const headlineParts = home.hero.headline.trim().split(/(?<=\.)\s+/);
  const headlineLead = headlineParts.length > 1 ? headlineParts.slice(0, -1).join(" ") + " " : "";
  const headlineAccent = headlineParts.length > 1 ? headlineParts[headlineParts.length - 1] : headlineParts[0];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-maroon-dark text-neutral-white clip-angle-br">
        <img
          src={media.heroSkyline}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-55"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-brand-maroon-dark via-brand-maroon-dark/92 to-brand-maroon-dark/25"
        />
        <GlobeMotif className="pointer-events-none absolute -right-10 top-4 -z-10 h-104 w-104 text-brand-gold/25" />
        <div className="hero-rise mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="text-base font-semibold uppercase tracking-[0.28em] text-brand-gold-light">{home.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl leading-[1.05] sm:text-6xl">
            {headlineLead}
            <span className="text-brand-gold-light">{headlineAccent}</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-neutral-white/85">{home.hero.valueProp}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="light" arrow to={home.hero.primaryCta.to} className="py-4!">{home.hero.primaryCta.label}</Button>
            <Button variant="outlineLight" to={home.hero.secondaryCta.to} className="py-4!">
              {home.hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-gold-light bg-neutral-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:grid-cols-3">
          {home.atAGlance.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 80}
              className={`text-center sm:text-left ${i > 0 ? "sm:border-l sm:border-brand-gold-light sm:pl-8" : ""}`}
            >
              <p className="font-heading text-4xl text-brand-maroon">{item.stat}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-ink/60">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <Reveal as="div">
          <SectionHeading eyebrow="Practice" title="Five lines of work">
            Advisory, people, control, marketing, and convening — each with its own dedicated page.
          </SectionHeading>
        </Reveal>
        <div className="mt-12">
          <Carousel ariaLabel="ACI service lines" autoPlay>
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60} className="h-full">
                <ServiceCard title={s.title} summary={s.summary} to={s.path} icon={s.icon} image={serviceImages[s.slug]} />
              </Reveal>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-brand-maroon text-neutral-white">
        <img
          src={media.teamHands}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10"
        />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <Reveal>
            <SectionHeading eyebrow="Credibility" title={home.credibility.heading} tone="onDark" />
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {home.credibility.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="border-t border-brand-gold pt-4">
                <h3 className="font-heading text-xl text-brand-gold-light">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-white/85">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-24 pb-28 sm:px-6 sm:pt-32 sm:pb-36">
        <div className="grid items-stretch gap-8 border border-brand-gold-light bg-neutral-gray md:grid-cols-2">
          <Reveal className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-maroon-dark">{home.featuredConference.eyebrow}</p>
            <h2 className="mt-2 font-heading text-3xl text-brand-maroon sm:text-4xl">{home.featuredConference.heading}</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-neutral-ink/80">{home.featuredConference.body}</p>
            <div className="mt-6">
              <Button arrow to={home.featuredConference.cta.to}>{home.featuredConference.cta.label}</Button>
            </div>
          </Reveal>
          <div className="img-zoom relative min-h-64 border-t border-brand-gold-light md:border-l md:border-t-0">
            <img
              src={media.conferenceHall}
              alt="A speaker on stage in front of a full conference hall"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
