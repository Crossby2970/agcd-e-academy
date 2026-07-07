import { accreditationDisclaimer, certificateTypes } from "../../data/programme/content";
import Icon from "../Icon";
import SectionTitle from "../SectionTitle";

export default function CertificatesSection() {
  return (
    <section className="bg-light-grey py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Certificates"
          title="Certificate Options Based on Participation, Completion and Competence"
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {certificateTypes.map((c) => (
            <div key={c.name} className="rounded-2xl bg-white border border-black/5 p-6 flex items-start gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-broadcast-blue/10 text-broadcast-blue">
                <Icon name="graduationCap" className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-bold text-navy text-sm">{c.name}</h3>
                <p className="mt-1.5 text-sm text-charcoal/70 leading-relaxed">{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border-2 border-navy/15 bg-white px-6 py-6 sm:px-8">
          <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed italic">{accreditationDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
