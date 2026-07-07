import { solutionFeatures, solutionFlow } from "../../data/programme/content";
import Icon from "../Icon";
import SectionTitle from "../SectionTitle";

export default function SolutionSection() {
  return (
    <section className="bg-light-grey py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="The AGCD@E-Academy Approach"
          title="AGCD@E-Academy Provides a Practical Institutional Strengthening Solution"
          subtitle="The programme combines structured learning with real deliverables — not certificates for attendance alone."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {solutionFeatures.map((f) => (
            <div key={f} className="flex items-center gap-2.5 rounded-xl bg-white border border-black/5 p-4">
              <Icon name="check" className="w-4 h-4 text-gold shrink-0" />
              <span className="text-sm font-semibold text-navy">{f}</span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-navy px-6 py-8 sm:px-10 sm:py-10 overflow-x-auto">
          <p className="text-center text-white/60 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            The Learning Loop
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-3 min-w-max mx-auto">
            {solutionFlow.map((step, i) => (
              <div key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="rounded-full bg-gold text-navy text-xs sm:text-sm font-bold px-3.5 py-2 sm:px-5 sm:py-2.5 whitespace-nowrap">
                  {step}
                </span>
                {i < solutionFlow.length - 1 && (
                  <Icon name="arrowRight" className="w-4 h-4 text-white/40 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
