import Icon from "../Icon";
import SectionTitle from "../SectionTitle";

const PLACEHOLDERS = [
  { category: "NPO Governance Success Story", role: "[NPO name / board representative]" },
  { category: "Sponsor Impact Story", role: "[Sponsor / partner organisation]" },
  { category: "Learner Success Story", role: "[Learner name / role]" },
];

export default function SuccessStoriesPlaceholder() {
  return (
    <section className="bg-light-grey py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Success Stories"
          title="Stories from NPOs, Learners and Sponsors"
          subtitle="Real testimonials will appear here as cohorts complete the programme and success stories are documented, as part of alumni support. The cards below are illustrative placeholders only."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLACEHOLDERS.map((t) => (
            <div key={t.category} className="rounded-2xl bg-white border-2 border-dashed border-navy/15 p-6 flex flex-col">
              <Icon name="quote" className="w-7 h-7 text-gold" />
              <p className="mt-4 text-sm text-charcoal/50 italic leading-relaxed grow">
                Placeholder — quote to be added once this success story is
                collected and permission to publish is confirmed.
              </p>
              <div className="mt-5 pt-4 border-t border-black/5">
                <p className="text-xs font-bold uppercase tracking-wide text-broadcast-blue">{t.category}</p>
                <p className="mt-1 text-xs text-charcoal/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
