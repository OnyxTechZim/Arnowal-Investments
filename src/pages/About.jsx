import Card from "../components/shared/Card.jsx";
import Figure from "../components/shared/Figure.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import { about } from "../content/about.js";
import { media } from "../content/media.js";

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading as="h1" eyebrow="About ACI" title={about.intro.heading}>
        {about.intro.body}
      </SectionHeading>

      <Reveal className="mt-12">
        <Figure
          src={media.boardroom}
          alt="A working session around a boardroom table with a presentation on screen"
          ratio="21 / 9"
          wash
          caption="Advisory, people, control, story, and the room — kept in one conversation."
        />
      </Reveal>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
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
        <p className="mt-4 max-w-3xl border-l-4 border-brand-gold bg-neutral-gray px-4 py-3 text-sm" role="note">
          {about.leadership.notice}
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {about.leadership.people.map((person, i) => (
            <Reveal key={i} delay={i * 90}>
              <Card>
                <div className="mb-4 flex h-28 items-center justify-center bg-neutral-gray text-xs uppercase tracking-wider text-neutral-ink/50">
                  [Photo to be supplied]
                </div>
                <h3 className="font-heading text-xl text-brand-maroon">{person.name}</h3>
                <p className="text-sm text-brand-gold">{person.role}</p>
                <p className="mt-2 text-sm leading-relaxed">{person.bio}</p>
              </Card>
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
            <Figure
              src={media.heroSkyline}
              alt="A city skyline at dusk"
              ratio="4 / 3"
              wash
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
