import founderPhoto from "../assets/founder-photo.jpg";
import { qualifications, trackRecord } from "../data/founder";
import Icon from "./Icon";
import PatternAccent from "./PatternAccent";

function CredentialList({ title, items, icon }) {
  return (
    <div className="rounded-2xl bg-white border border-black/5 p-6 sm:p-7">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-broadcast-blue/10 text-broadcast-blue">
          <Icon name={icon} className="w-4.5 h-4.5" />
        </span>
        <h3 className="font-bold text-navy text-sm uppercase tracking-wide">{title}</h3>
      </div>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal/75 leading-relaxed">
            <Icon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FounderProfile() {
  return (
    <section id="founder" className="bg-light-grey py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
              Founder
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy text-balance">
              Founded by Tshimauswu-Nekhavhambe AGCD
            </h2>
            <PatternAccent className="mt-4" />

            <p className="mt-5 text-base leading-relaxed text-charcoal/75">
              Tshimauswu-Nekhavhambe AGCD is a governance practitioner, public
              service leader, development consultant and empowerment advocate
              with experience spanning NGO/NPO governance, public
              administration, hospital management, project management,
              strategic planning and risk management. As a mentor, coach and
              trainer, he brings this cross-sector experience into practical
              capacity-building — including training in Microsoft and Google
              productivity tools and AI-enabled organisational development —
              designed to help people and institutions perform at their best.
            </p>

            <blockquote className="mt-7 border-l-4 border-gold pl-5">
              <p className="font-accent italic text-xl sm:text-2xl text-navy leading-snug">
                &ldquo;Empowerment begins when knowledge is transformed into
                practical action.&rdquo;
              </p>
            </blockquote>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <a href="mailto:Godfrey.Damler@gmail.com" className="flex items-center gap-2 font-medium text-navy hover:text-broadcast-blue">
                <Icon name="mail" className="w-4 h-4 text-broadcast-blue" />
                Godfrey.Damler@gmail.com
              </a>
              <a href="tel:+27825586088" className="flex items-center gap-2 font-medium text-navy hover:text-broadcast-blue">
                <Icon name="phone" className="w-4 h-4 text-broadcast-blue" />
                +27 82 558 6088
              </a>
              <a
                href="https://agcdfoundation.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium text-navy hover:text-broadcast-blue"
              >
                <Icon name="globe" className="w-4 h-4 text-broadcast-blue" />
                agcdfoundation.co.za
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          <CredentialList title="Academic Qualifications" items={qualifications} icon="graduationCap" />
          <CredentialList title="Selected Professional Engagements" items={trackRecord} icon="briefcase" />
        </div>
      </div>
    </section>
  );
}
