import founderPhoto from "../../assets/founder-photo.jpg";
import { qualifications, trackRecord } from "../../data/founder";
import Icon from "../Icon";
import PatternAccent from "../PatternAccent";
import SectionTitle from "../SectionTitle";

export default function FounderCredibility() {
  return (
    <section id="about" className="bg-light-grey py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Led by an Experienced Practitioner"
          title="Facilitated by the Founder of AGCD@E-Academy"
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-2">
            <div className="relative mx-auto max-w-xs">
              <div className="aspect-[4/5] rounded-2xl bg-navy shadow-xl overflow-hidden">
                <img
                  src={founderPhoto}
                  alt="Tshimauswu-Nekhavhambe AGCD, Founder of AGCD@E-Academy"
                  className="h-full w-full object-cover"
                  width={366}
                  height={386}
                />
              </div>
              <span className="absolute -bottom-5 -right-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy shadow-lg">
                <Icon name="compass" className="w-8 h-8" />
              </span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="text-sm font-semibold tracking-[0.18em] uppercase text-broadcast-blue">
              Founder &amp; Lead Facilitator
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-navy text-balance">
              Tshimauswu-Nekhavhambe AGCD
            </h3>
            <PatternAccent className="mt-4" />
            <p className="mt-5 text-base leading-relaxed text-charcoal/75">
              A governance practitioner, hospital CEO, public service leader and
              development consultant whose career spans NGO/NPO governance and
              compliance, hospital management, project and programme
              establishment, strategic planning and risk management across
              South Africa and abroad. This cross-sector experience — as CEO,
              mentor, coach and trainer — shapes every part, module and
              template in this programme.
            </p>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-black/5 p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-broadcast-blue/10 text-broadcast-blue">
                <Icon name="graduationCap" className="w-4.5 h-4.5" />
              </span>
              <h4 className="font-bold text-navy text-sm uppercase tracking-wide">Academic Qualifications</h4>
            </div>
            <ul className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
              {qualifications.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal/75 leading-relaxed">
                  <Icon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-black/5 p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-broadcast-blue/10 text-broadcast-blue">
                <Icon name="briefcase" className="w-4.5 h-4.5" />
              </span>
              <h4 className="font-bold text-navy text-sm uppercase tracking-wide">Positions Held</h4>
            </div>
            <ul className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
              {trackRecord.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal/75 leading-relaxed">
                  <Icon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
