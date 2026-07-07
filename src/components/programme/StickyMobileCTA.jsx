import { useEffect, useState } from "react";
import Icon from "../Icon";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 400;
      setVisible(window.scrollY > 480 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 px-4 pb-4 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="#register"
        className="flex items-center justify-center gap-2 rounded-full bg-gold text-navy font-semibold px-6 py-3.5 shadow-2xl"
      >
        Register for the Next Cohort
        <Icon name="arrowRight" className="w-4 h-4" />
      </a>
    </div>
  );
}
