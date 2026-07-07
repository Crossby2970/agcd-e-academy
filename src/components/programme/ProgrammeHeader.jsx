import { useEffect, useState } from "react";
import Icon from "../Icon";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programme", href: "#glance" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Tools", href: "#tools" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

export default function ProgrammeHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow ${
        scrolled ? "shadow-md" : ""
      } bg-white/95 backdrop-blur border-b border-black/5`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          <a
            href="index.html"
            className="flex items-center gap-2 font-heading font-extrabold text-navy text-lg sm:text-xl"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-broadcast-blue text-white">
              <Icon name="graduationCap" className="w-5 h-5" />
            </span>
            AGCD<span className="text-gold">@</span>E-Academy
          </a>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy/80 hover:text-broadcast-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#register"
              className="rounded-full bg-gold text-navy text-sm font-semibold px-5 py-2.5 hover:brightness-95 transition"
            >
              Register Interest
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-navy"
            aria-expanded={open}
            aria-controls="programme-mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="programme-mobile-menu"
          aria-label="Mobile"
          className="lg:hidden border-t border-black/5 bg-white px-4 pb-6 pt-2"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-navy font-medium hover:bg-light-grey"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-gold text-navy text-sm font-semibold px-5 py-3 text-center hover:brightness-95 transition"
          >
            Register Interest
          </a>
        </nav>
      )}
    </header>
  );
}
