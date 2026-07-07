import weeklyPathway from "../../data/programme/weeklyPathway";
import Icon from "../Icon";
import SectionTitle from "../SectionTitle";

export default function WeeklyTimeline() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Your 12-Week Certificate Pathway" title="Week by Week, From Orientation to Action Plan" />

        <ol className="relative border-l-2 border-broadcast-blue/20 pl-8 space-y-7">
          {weeklyPathway.map((w) => (
            <li key={w.week} className="relative">
              <span className="absolute -left-[2.55rem] top-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-broadcast-blue text-white text-xs font-bold">
                {w.week}
              </span>
              <p className="text-sm sm:text-base font-semibold text-navy leading-snug pt-1">{w.focus}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex items-center gap-3 rounded-2xl bg-gold/15 border border-gold/30 px-6 py-5">
          <Icon name="sparkles" className="w-6 h-6 text-gold shrink-0" />
          <p className="text-navy font-bold text-sm sm:text-base">
            Final Output: NPO Institutional Strengthening Action Plan
          </p>
        </div>
      </div>
    </section>
  );
}
