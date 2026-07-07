import { contact, motto, socials } from "../../data/agcd";
import Icon from "../Icon";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programme", href: "#glance" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
  { label: "Register", href: "#register" },
];

export default function ProgrammeFooter() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-heading font-extrabold text-white text-lg">
              AGCD<span className="text-gold">@</span>E-Academy
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Comprehensive NPO Capacity Building Programme — a 12-week
              institutional strengthening pathway for NPOs, NPCs, FBOs and CBOs.
            </p>
            <p className="mt-4 font-accent italic text-gold text-base">&ldquo;{motto}.&rdquo;</p>
          </div>

          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Quick Links</p>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-gold transition-colors">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.cell.replace(/\s/g, "")}`} className="hover:text-gold transition-colors">
                  {contact.cell}
                </a>
              </li>
              <li>South Africa</li>
              <li>
                <a href={contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  agcdfoundation.co.za
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Follow AGCD</p>
            <div className="flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={`${s.label}: ${s.handle}`}
                  title={`${s.label}: ${s.handle}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-navy transition-colors"
                >
                  <Icon name={s.icon} className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/40">Handles shown are provisional — confirm the canonical URL for each before linking live.</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 space-y-3">
          <p className="text-xs text-white/45 leading-relaxed max-w-3xl">
            This is a professional capacity-building course. Accreditation
            status, where applicable, will be stated only once formally
            approved through the relevant quality assurance process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
            <p>&copy; {new Date().getFullYear()} AGCD@E-Academy. All rights reserved.</p>
            <p>Do not only attend training. Build the systems your NPO needs.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
