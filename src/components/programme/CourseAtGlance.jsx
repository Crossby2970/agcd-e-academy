import { courseFacts } from "../../data/programme/content";
import SectionTitle from "../SectionTitle";

export default function CourseAtGlance() {
  return (
    <section id="glance" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Course at a Glance" title="Everything You Need to Know, at a Glance" />
        <dl className="grid sm:grid-cols-2 gap-4">
          {courseFacts.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-black/5 bg-light-grey p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-broadcast-blue mb-1.5">
                {fact.label}
              </dt>
              <dd className="text-sm font-semibold text-navy leading-relaxed">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
