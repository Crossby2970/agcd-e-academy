import Icon from "./Icon";
import SectionTitle from "./SectionTitle";

const OPPORTUNITIES = [
  { icon: "graduationCap", text: "Sponsor unemployed youth and graduates through a learning pathway" },
  { icon: "shieldCheck", text: "Fund NPO governance and compliance training" },
  { icon: "monitor", text: "Support digital skills development at scale" },
  { icon: "compass", text: "Co-create customised training programmes" },
  { icon: "users", text: "Partner on community empowerment webinars" },
  { icon: "sparkles", text: "Support AI and productivity training for public-benefit organisations" },
  { icon: "chart", text: "Collaborate on research, monitoring and impact evaluation" },
];

export default function PartnerCTA() {
  return (
    <section id="partners" className="bg-broadcast-blue py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          light
          eyebrow="Partnership & Funding"
          title="Partner With AGCD@E-Academy to Build Skills, Strengthen Organizations and Empower Communities"
        />

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {OPPORTUNITIES.map((o) => (
            <div key={o.text} className="flex items-start gap-3 rounded-xl bg-white/10 border border-white/15 p-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold text-navy">
                <Icon name={o.icon} className="w-4.5 h-4.5" />
              </span>
              <p className="text-sm text-white/95 leading-relaxed pt-1.5">{o.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold text-navy font-semibold px-8 py-4 hover:brightness-95 transition shadow-lg"
          >
            Discuss Partnership Opportunities
            <Icon name="arrowRight" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
