import Icon from "./Icon";

const METRICS = [
  { icon: "graduationCap", value: "[X]", label: "Learners to be trained" },
  { icon: "shieldCheck", value: "[X]", label: "Organisations to be supported" },
  { icon: "compass", value: "[X]", label: "Training pathways to be developed" },
  { icon: "handshake", value: "[X]", label: "Strategic partners to be mobilised" },
  { icon: "users", value: "[X]", label: "Communities to be empowered" },
];

export default function ImpactMetrics() {
  return (
    <section className="bg-white py-16 sm:py-20 border-y border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">Our Planned Impact</h2>
          <p className="mt-2 text-sm text-charcoal/60 max-w-xl">
            These are forward-looking programme targets, not achieved
            statistics — figures will be replaced with real data as cohorts
            launch and partnerships are confirmed.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
          {METRICS.map((m) => (
            <div key={m.label} className="flex flex-col items-center text-center rounded-2xl bg-light-grey p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-broadcast-blue/10 text-broadcast-blue mb-3">
                <Icon name={m.icon} className="w-5 h-5" />
              </span>
              <p className="text-3xl font-extrabold text-navy">{m.value}</p>
              <span className="mt-1 inline-block rounded-full bg-gold/20 text-gold text-[10px] font-bold uppercase tracking-wide px-2 py-0.5">
                Target
              </span>
              <p className="mt-2 text-xs font-medium text-charcoal/65 leading-snug">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
