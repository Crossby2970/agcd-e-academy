import Icon from "./Icon";

const CARDS = [
  {
    icon: "compass",
    label: "Vision",
    text: "A world-class empowerment academy — bringing the same calibre of organisational tools and expertise available to large institutions within reach of every mission-driven person and organisation.",
  },
  {
    icon: "globe",
    label: "Mission",
    text: "Empowering the globe through effective, practical training and technology — building governance, financial and digital capacity so organisations of any size can operate with excellence.",
  },
  {
    icon: "users",
    label: "Who We Are",
    text: "A South African training academy drawing on cross-sector experience in governance, financial management, ICT, risk, hospital management, NGO leadership and career coaching — turned into practical courses.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6">
          {CARDS.map((c) => (
            <div key={c.label} className="rounded-2xl bg-light-grey p-6 sm:p-7">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-gold">
                <Icon name={c.icon} className="w-5 h-5" />
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-broadcast-blue">{c.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
