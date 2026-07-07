import { problemPoints } from "../../data/programme/content";
import Icon from "../Icon";
import SectionTitle from "../SectionTitle";

export default function ProblemSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="The Reality Many NPOs Face"
          title="Many NPOs Serve Communities with Passion, but Without Strong Internal Systems"
          subtitle="Passion keeps organisations going, but without the systems below it becomes harder to stay credible, compliant and fundable."
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {problemPoints.map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-xl bg-light-grey p-4">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-navy">
                <Icon name="shieldCheck" className="w-4 h-4" />
              </span>
              <p className="text-sm font-medium text-charcoal/80 leading-relaxed pt-1">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
