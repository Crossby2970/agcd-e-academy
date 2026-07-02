import ContactForm from "./ContactForm";
import Icon from "./Icon";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-light-grey py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's talk about your learning or partnership needs"
          subtitle="Whether you're an individual learner, an organisation seeking customised training, or a funder exploring partnership — we'd like to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <a
              href="mailto:Godfrey.Damler@gmail.com"
              className="flex items-center gap-4 rounded-xl bg-white border border-black/5 p-5 hover:shadow-md transition-shadow"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-broadcast-blue/10 text-broadcast-blue">
                <Icon name="mail" className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/60">Email</p>
                <p className="text-sm font-medium text-navy">Godfrey.Damler@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:+27825586088"
              className="flex items-center gap-4 rounded-xl bg-white border border-black/5 p-5 hover:shadow-md transition-shadow"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-broadcast-blue/10 text-broadcast-blue">
                <Icon name="phone" className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/60">Cell</p>
                <p className="text-sm font-medium text-navy">+27 82 558 6088</p>
              </div>
            </a>
            <a
              href="https://agcdfoundation.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl bg-white border border-black/5 p-5 hover:shadow-md transition-shadow"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-broadcast-blue/10 text-broadcast-blue">
                <Icon name="globe" className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy/60">Website</p>
                <p className="text-sm font-medium text-navy">agcdfoundation.co.za</p>
              </div>
            </a>
          </div>

          <div className="lg:col-span-3 rounded-2xl bg-white border border-black/5 p-6 sm:p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
