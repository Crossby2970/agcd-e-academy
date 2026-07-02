import Icon from "./Icon";
import SectionTitle from "./SectionTitle";

const CHALLENGES = [
  {
    icon: "briefcase",
    title: "The Employability Gap",
    description:
      "Young graduates and unemployed individuals often leave education without the practical, workplace-ready skills employers expect from day one.",
  },
  {
    icon: "shieldCheck",
    title: "The Governance Gap",
    description:
      "Many NGOs, NPOs, FBOs, CBOs and community organisations need stronger governance, fundraising, financial management, compliance and reporting capacity to remain credible and fundable.",
  },
  {
    icon: "chart",
    title: "The Productivity Gap",
    description:
      "Public and private institutions alike need digital productivity, project management, leadership and monitoring-and-evaluation skills to deliver services efficiently.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why AGCD@E-Academy"
          title="Closing the gap between potential and practical skill"
          subtitle="Across South Africa and beyond, capable people and committed organisations are held back by the same three gaps — AGCD@E-Academy exists to close them."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHALLENGES.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-black/5 bg-light-grey p-7 hover:shadow-lg transition-shadow"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-broadcast-blue text-white">
                <Icon name={c.icon} className="w-6 h-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy">{c.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-charcoal/70">{c.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-navy px-7 py-6 sm:px-10 sm:py-8 text-center">
          <p className="text-white text-base sm:text-lg font-medium max-w-3xl mx-auto">
            AGCD@E-Academy turns these gaps into structured learning pathways —
            practical, role-based and built for real organisational impact.
          </p>
        </div>
      </div>
    </section>
  );
}
