import Reveal from "../components/shared/Reveal.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import ServiceCard from "../components/shared/ServiceCard.jsx";
import { serviceImages } from "../content/media.js";
import { services } from "../content/services.js";

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading as="h1" eyebrow="Services" title="The practice, by line">
          Five dedicated pages. Choose a line — the copy is written for that work, not swapped nouns.
        </SectionHeading>
      </Reveal>
      <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 70} className="flex">
            <ServiceCard
              title={s.title}
              summary={s.summary}
              to={s.path}
              icon={s.icon}
              image={serviceImages[s.slug]}
              headingLevel="h2"
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
