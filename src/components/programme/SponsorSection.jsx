import { sponsorBenefits, sponsorPackages, sponsorPackagesNote } from "../../data/programme/content";
import Icon from "../Icon";
import SectionTitle from "../SectionTitle";

export default function SponsorSection() {
  return (
    <section id="sponsors" className="bg-broadcast-blue py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          light
          eyebrow="Sponsor &amp; Partner"
          title="Sponsor a Cohort and Strengthen NPOs Serving Communities"
          subtitle="Corporate CSI partners, foundations, donors, municipalities, government departments and development partners can sponsor NPOs through a full cohort, a district or sector cohort, or a board masterclass."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {sponsorPackages.map((p) => (
            <div key={p.name} className="rounded-2xl bg-white p-6 flex flex-col">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-broadcast-blue/10 text-broadcast-blue">
                <Icon name={p.icon} className="w-5 h-5" />
              </span>
              <h3 className="mt-4 font-bold text-navy text-sm">{p.name}</h3>
              <p className="mt-2 text-sm text-charcoal/70 leading-relaxed grow">{p.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-white/80 text-sm mb-12 max-w-2xl mx-auto">{sponsorPackagesNote}</p>

        <p className="text-center text-gold text-xs font-semibold uppercase tracking-[0.18em] mb-5">
          What Sponsors Receive
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {sponsorBenefits.map((b) => (
            <div key={b} className="flex items-start gap-3 rounded-xl bg-white/10 border border-white/15 p-4">
              <Icon name="chart" className="w-4.5 h-4.5 mt-0.5 shrink-0 text-gold" />
              <span className="text-sm text-white/95 leading-relaxed">{b}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#register"
            className="inline-flex items-center gap-2 rounded-full bg-gold text-navy font-semibold px-8 py-4 hover:brightness-95 transition shadow-lg"
          >
            Request Sponsor / Partnership Information
            <Icon name="arrowRight" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
