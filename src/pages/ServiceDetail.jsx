import { Navigate, useParams } from "react-router-dom";
import Button from "../components/shared/Button.jsx";
import Card from "../components/shared/Card.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import { getServiceBySlug } from "../content/services.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <SectionHeading eyebrow="Service" title={service.title}>
        {service.summary}
      </SectionHeading>

      <section className="mt-12">
        <h2 className="font-heading text-2xl text-brand-maroon">What this covers</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-neutral-ink/85">
          {service.covers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl text-brand-maroon">Who it is for</h2>
        <p className="mt-3 leading-relaxed text-neutral-ink/85">{service.whoFor}</p>
      </section>

      <Card className="mt-10">
        <h2 className="font-heading text-2xl text-brand-maroon">Why ACI</h2>
        <p className="mt-3 leading-relaxed text-neutral-ink/85">{service.whyAci}</p>
      </Card>

      <div className="mt-10">
        <Button to="/contact">{service.cta}</Button>
      </div>
    </div>
  );
}
