import { useState } from "react";
import { programmeFaqs } from "../../data/programme/content";
import Icon from "../Icon";
import SectionTitle from "../SectionTitle";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-black/10 py-2">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="font-semibold text-navy text-base">{item.q}</span>
        <Icon
          name="chevronDown"
          className={`w-5 h-5 shrink-0 text-broadcast-blue transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && <p className="pb-4 text-sm leading-relaxed text-charcoal/70 pr-8">{item.a}</p>}
    </div>
  );
}

export default function ProgrammeFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-light-grey py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="rounded-2xl bg-white border border-black/5 px-6 sm:px-8">
          {programmeFaqs.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
