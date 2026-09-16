import { Navigate, useParams } from "react-router-dom";
import Button from "../components/shared/Button.jsx";
import Card from "../components/shared/Card.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import { serviceImages } from "../content/media.js";
import { getServiceBySlug } from "../content/services.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  if (!service) {
    return <Navigate to="/services" replace />;
  }
  const image = serviceImages[slug];

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <SectionHeading as="h1" eyebrow="Service" title={service.title}>
        {service.summary}
      </SectionHeading>

      {image ? (
        <div className="img-zoom relative mt-10 border border-brand-gold-light">
          <img
            src={image.src}
            alt={image.alt}
            decoding="async"
            className="block aspect-21/9 w-full object-cover"
          />
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-brand-maroon/10 mix-blend-multiply" />
        </div>
      ) : null}

      <Reveal as="section" className="mt-12">
        <h2 className="font-heading text-2xl text-brand-maroon">What this covers</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-neutral-ink/85">
          {service.covers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className="mt-10">
        <h2 className="font-heading text-2xl text-brand-maroon">Who it is for</h2>
        <p className="mt-3 leading-relaxed text-neutral-ink/85">{service.whoFor}</p>
      </Reveal>

      <Reveal>
        <Card className="mt-10">
          <h2 className="font-heading text-2xl text-brand-maroon">Why ACI</h2>
          <p className="mt-3 leading-relaxed text-neutral-ink/85">{service.whyAci}</p>
        </Card>
      </Reveal>

      <div className="mt-10">
        <Button arrow to="/contact">{service.cta}</Button>
      </div>
    </div>
  );
}
