import Icon from "./Icon";

const QUICK_LINKS = [
  { label: "Programmes", href: "#programmes" },
  { label: "Learning Pathways", href: "#pathways" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Founder", href: "#founder" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

const ECOSYSTEM_LINKS = ["AGCD Empowerment Consulting", "GOAL Development Foundation"];

// Handle text drawn from source material; hrefs left as "#" until a canonical
// URL per platform is confirmed (several near-duplicate handles were listed).
const SOCIALS = [
  { icon: "youtube", label: "YouTube", handle: "@agcdempowerment", href: "#" },
  { icon: "linkedin", label: "LinkedIn", handle: "AGCD-E-Academy", href: "#" },
  { icon: "facebook", label: "Facebook", handle: "agcdEmpowerment", href: "#" },
  { icon: "instagram", label: "Instagram", handle: "agcdEmpowerment", href: "#" },
  { icon: "tiktok", label: "TikTok", handle: "AGCDEmpowerment", href: "#" },
  { icon: "mic", label: "Podcast", handle: "AGCDEmpowerment", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-heading font-extrabold text-white text-lg">
              AGCD<span className="text-gold">@</span>E-Academy
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Part of the wider AGCD empowerment ecosystem, alongside{" "}
              {ECOSYSTEM_LINKS.join(" and ")}.
            </p>
            <p className="mt-4 font-accent italic text-gold text-base">
              &ldquo;Life is Life &ndash; Live it to the fullest.&rdquo;
            </p>
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
                <a href="mailto:Godfrey.Damler@gmail.com" className="hover:text-gold transition-colors">
                  Godfrey.Damler@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+27825586088" className="hover:text-gold transition-colors">
                  +27 82 558 6088
                </a>
              </li>
              <li>
                <a
                  href="https://agcdfoundation.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  agcdfoundation.co.za
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Follow AGCD</p>
            <div className="flex flex-wrap gap-2.5">
              {SOCIALS.map((s) => (
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

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>&copy; {new Date().getFullYear()} AGCD@E-Academy. All rights reserved.</p>
          <p>Empowering Skills. Building Capacity. Creating Impact.</p>
        </div>
      </div>
    </footer>
  );
}
