import Icon from "./Icon";
import SectionTitle from "./SectionTitle";

const PLACEHOLDERS = [
  { category: "Learner Success Story", role: "[Graduate learner name / role]" },
  { category: "NPO Capacity-Building Success Story", role: "[NPO name / representative]" },
  { category: "Church Empowerment Story", role: "[Church name / leader]" },
  { category: "Public Sector Productivity Story", role: "[Department / official]" },
];

export default function Testimonials() {
  return (
    <section className="bg-light-grey py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Success Stories"
          title="Stories from our learners and partner organisations"
          subtitle="Real testimonials will appear here as learners and partner organisations complete their pathways. The cards below are illustrative placeholders only."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
