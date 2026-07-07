import { capstoneComponents } from "../../data/programme/content";
import Icon from "../Icon";
import PatternAccent from "../PatternAccent";

export default function CapstoneSection() {
  return (
    <section className="bg-navy py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-[0.18em] uppercase text-gold">Capstone Project</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white text-balance max-w-2xl mx-auto">
            Your Final Output: NPO Institutional Strengthening Action Plan
          </h2>
          <PatternAccent color="text-gold/70" className="mt-4 mx-auto" />
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capstoneComponents.map((c) => (
              <div key={c} className="flex items-start gap-2.5 rounded-xl bg-white/5 p-3.5">
                <Icon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <span className="text-sm text-white/90 leading-relaxed">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
