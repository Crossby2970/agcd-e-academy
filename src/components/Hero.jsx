import Icon from "./Icon";

const TRUST_ITEMS = [
  "Online training",
  "Governance empowerment",
  "Digital productivity",
  "Career readiness",
  "NPO excellence",
];

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gold/20 blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-8 -right-4 h-32 w-32 rounded-full bg-broadcast-blue/20 blur-2xl" aria-hidden="true" />

      <div className="relative rounded-2xl border border-white/10 bg-navy shadow-2xl overflow-hidden">
        <div className="flex items-center gap-1.5 bg-navy/60 px-4 py-3 border-b border-white/10">
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="ml-3 text-xs text-white/60 font-medium">AGCD@E-Academy — Learner Dashboard</span>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-heading font-semibold text-sm">Welcome back</p>
              <p className="text-white/50 text-xs">Continue your learning pathway</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 text-gold text-xs font-semibold px-3 py-1">
              <Icon name="sparkles" className="w-3.5 h-3.5" /> 3 badges
            </span>
          </div>

          {[
            { title: "NPO Governance & Compliance", pct: 72 },
            { title: "Microsoft 365 Productivity", pct: 45 },
          ].map((c) => (
            <div key={c.title} className="rounded-xl bg-white/5 p-3.5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white text-xs font-semibold">{c.title}</p>
                <span className="text-gold text-xs font-semibold">{c.pct}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full bg-gold" style={{ width: `${c.pct}%` }} />
              </div>
            </div>
          ))}

          <div className="grid grid-cols-3 gap-2 pt-1">
            {["graduationCap", "shieldCheck", "sparkles"].map((icon) => (
              <div key={icon} className="flex flex-col items-center justify-center rounded-xl bg-white/5 py-3 text-gold">
                <Icon name={icon} className="w-6 h-6" />
                <span className="mt-1 text-[10px] text-white/60 font-medium">Badge</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-light-grey to-white">
      <div
        className="absolute inset-0 bg-pattern-dots text-broadcast-blue/[0.06] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-broadcast-blue/10 text-broadcast-blue text-xs font-semibold uppercase tracking-wider px-4 py-2">
              Empowering Skills. Building Capacity. Creating Impact.
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] text-navy text-balance">
              AGCD@E-Academy: Empowering Skills for Work, Leadership and Impact
            </h1>
            <p className="mt-6 text-lg text-charcoal/75 leading-relaxed max-w-xl">
              A practical online academy equipping young graduates, unemployed
              individuals, public officials, NPO leaders, churches and
              organisations with digital, governance, leadership and
              productivity skills that translate directly into work.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#programmes"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold text-navy font-semibold px-7 py-3.5 hover:brightness-95 transition shadow-lg shadow-gold/20"
              >
                Explore Programmes
                <Icon name="arrowRight" className="w-4 h-4" />
              </a>
              <a
                href="#partners"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-broadcast-blue text-broadcast-blue font-semibold px-7 py-3.5 hover:bg-broadcast-blue hover:text-white transition"
              >
                Request Partnership
              </a>
            </div>

            <p className="mt-8 text-sm font-medium text-navy/70 flex flex-wrap gap-x-2 gap-y-1">
              {TRUST_ITEMS.map((item, i) => (
                <span key={item} className="inline-flex items-center">
                  {item}
                  {i < TRUST_ITEMS.length - 1 && <span className="mx-2 text-gold">•</span>}
                </span>
              ))}
            </p>
          </div>

          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
