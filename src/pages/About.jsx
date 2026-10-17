import Figure from "../components/shared/Figure.jsx";
import LeadershipPortrait from "../components/shared/LeadershipPortrait.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import { about } from "../content/about.js";
import { media } from "../content/media.js";

export default function About() {
  return (
    <div>
      <section className="grid md:grid-cols-2">
        <div className="img-zoom relative min-h-72 md:min-h-128">
          <img
            src={media.boardroom}
            alt="A working session around a boardroom table with a presentation on screen"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center bg-neutral-gray px-4 py-16 sm:px-6 md:px-12 md:py-0">
          <SectionHeading as="h1" eyebrow="About ACI" title={about.intro.heading}>
            {about.intro.body}
          </SectionHeading>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal as="article">
            <h2 className="font-heading text-2xl text-brand-maroon">{about.story.heading}</h2>
            <p className="mt-3 leading-relaxed text-neutral-ink/80">{about.story.body}</p>
          </Reveal>
          <Reveal as="article" delay={90} className="space-y-6">
            <div>
              <h2 className="font-heading text-2xl text-brand-maroon">{about.mission.heading}</h2>
              <p className="mt-3 leading-relaxed text-neutral-ink/80">{about.mission.body}</p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-brand-maroon">{about.vision.heading}</h2>
              <p className="mt-3 leading-relaxed text-neutral-ink/80">{about.vision.body}</p>
            </div>
          </Reveal>
        </div>

        <section className="mt-16">
          <SectionHeading title={about.leadership.heading} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {about.leadership.people.map((person, i) => (
              <Reveal key={person.name} delay={i * 90}>
                <article className="h-full overflow-hidden border border-brand-gold-light bg-neutral-white text-center shadow-[0_8px_24px_rgba(26,26,26,0.08)] transition-shadow hover:shadow-[0_12px_30px_rgba(26,26,26,0.14)]">
                  <div className="h-20 bg-brand-maroon-dark" aria-hidden="true" />
                  <div className="-mt-16 flex justify-center">
                    <LeadershipPortrait name={person.name} variant={i} />
                  </div>
                  <div className="px-6 pb-7 pt-4">
                    <h3 className="font-heading text-xl text-brand-maroon">{person.name}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-gold">{person.role}</p>
                    <span className="gold-rule mx-auto mt-4 block w-16" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-brand-gold-light pt-12">
          <SectionHeading title={about.values.heading}>{about.values.intro}</SectionHeading>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {about.values.items.map((value, i) => (
              <Reveal key={value.title} delay={i * 70}>
                <article className="h-full border-l-4 border-brand-gold bg-neutral-gray p-6 transition-colors hover:bg-brand-gold-light/25">
                  <p className="font-heading text-4xl leading-none text-brand-maroon/25" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-heading text-xl text-brand-maroon">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-ink/80">{value.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-brand-gold-light pt-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal>
              <h2 className="font-heading text-2xl text-brand-maroon">{about.reach.heading}</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-neutral-ink/80">{about.reach.body}</p>
            </Reveal>
            <Reveal delay={90}>
              <Figure src={media.heroSkyline} alt="A city skyline at dusk" ratio="4 / 3" wash />
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}
