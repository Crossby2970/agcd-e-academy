import Icon from "./Icon";
import SectionTitle from "./SectionTitle";

const VALUES = [
  { icon: "briefcase", text: "Practical skills for work readiness" },
  { icon: "monitor", text: "Digital productivity competence" },
  { icon: "shieldCheck", text: "Improved governance and accountability" },
  { icon: "handshake", text: "Stronger fundraising and proposal-writing capacity" },
  { icon: "chart", text: "Better financial management and compliance" },
  { icon: "target", text: "Improved project and programme delivery" },
  { icon: "sparkles", text: "Confident use of Microsoft, Google and AI tools" },
  { icon: "compass", text: "Enhanced leadership, confidence and organisational performance" },
];

export default function ValueProposition() {
  return (
    <section className="relative bg-navy py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots text-white/[0.05] pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          light
          eyebrow="Value Proposition"
          title="What learners and organisations gain"
          subtitle="Every course, pathway and coaching engagement is designed around a single test: does it change what you can do on Monday morning?"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v) => (
            <div
              key={v.text}
              className="rounded-xl bg-white/5 border border-white/10 p-5 flex flex-col gap-3 hover:bg-white/10 transition-colors"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-navy">
                <Icon name={v.icon} className="w-5 h-5" />
              </span>
              <p className="text-sm font-medium text-white/90 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
