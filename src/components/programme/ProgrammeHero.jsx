import Icon from "../Icon";

const TRUST_BADGES = [
  { icon: "clipboard", label: "12-Week Certificate Pathway" },
  { icon: "compass", label: "13 Course Parts" },
  { icon: "graduationCap", label: "62-Module Full Curriculum" },
  { icon: "check", label: "Practical Templates" },
  { icon: "target", label: "Capstone Action Plan" },
  { icon: "users", label: "Optional Mentorship" },
];

function CoursePathwayCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gold/20 blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-8 -right-4 h-32 w-32 rounded-full bg-broadcast-blue/30 blur-2xl" aria-hidden="true" />

      <div className="relative rounded-2xl border border-white/10 bg-navy shadow-2xl overflow-hidden">
        <div className="flex items-center gap-1.5 bg-navy/60 px-4 py-3 border-b border-white/10">
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <span className="ml-3 text-xs text-white/60 font-medium">NPO Institutional Strengthening Action Plan</span>
        </div>

        <div className="p-5 space-y-3">
          <p className="text-white font-heading font-semibold text-sm">Your 12-week pathway</p>
          {[
            { title: "Governance & Compliance", pct: 100 },
            { title: "Finance, M&E & Fundraising", pct: 68 },
            { title: "Risk, Safeguarding & Capstone", pct: 24 },
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

          <div className="flex items-center justify-between rounded-xl bg-gold/15 border border-gold/30 px-3.5 py-3 mt-1">
            <span className="text-gold text-xs font-bold uppercase tracking-wide">Final Output</span>
            <Icon name="sparkles" className="w-4 h-4 text-gold" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProgrammeHero() {
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
              Comprehensive NPO Capacity Building Programme
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] text-navy text-balance">
              Build a Credible, Compliant, Accountable and Sustainable NPO
            </h1>
            <p className="mt-6 text-lg text-charcoal/75 leading-relaxed max-w-xl">
              Join the AGCD@E-Academy Comprehensive NPO Capacity Building Programme
              and strengthen your organization&rsquo;s governance, compliance,
              financial management, fundraising readiness, service delivery, M&amp;E,
              digital systems, risk management and sustainability.
            </p>
            <p className="mt-5 text-base font-semibold text-navy/85 leading-relaxed max-w-xl border-l-4 border-gold pl-4">
              This is not ordinary training. It is a practical institutional
              strengthening journey where learners develop real tools, templates
              and an NPO Institutional Strengthening Action Plan.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold text-navy font-semibold px-7 py-3.5 hover:brightness-95 transition shadow-lg shadow-gold/20"
              >
                Register for the Next Cohort
                <Icon name="arrowRight" className="w-4 h-4" />
              </a>
              <a
                href="#sponsors"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-broadcast-blue text-broadcast-blue font-semibold px-7 py-3.5 hover:bg-broadcast-blue hover:text-white transition"
              >
                Sponsor a Cohort
              </a>
            </div>

            <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
              {TRUST_BADGES.map((b) => (
                <span key={b.label} className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-navy/70">
                  <Icon name={b.icon} className="w-4 h-4 text-gold shrink-0" />
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          <CoursePathwayCard />
        </div>
      </div>
    </section>
  );
}
