import SectionHeading from "../components/shared/SectionHeading.jsx";
import ServiceCard from "../components/shared/ServiceCard.jsx";
import { services } from "../content/services.js";

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading eyebrow="Services" title="The practice, by line">
        Five dedicated pages. Choose a line — the copy is written for that work, not swapped nouns.
      </SectionHeading>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.slug} title={s.title} summary={s.summary} to={s.path} icon={s.icon} />
        ))}
      </div>
    </div>
  );
}
