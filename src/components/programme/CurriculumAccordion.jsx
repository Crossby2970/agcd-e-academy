import { useState } from "react";
import curriculum from "../../data/programme/curriculum";
import Icon from "../Icon";
import SectionTitle from "../SectionTitle";

function PartCard({ part, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left"
      >
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-broadcast-blue text-white text-sm font-bold">
          {part.part}
        </span>
        <span className="grow">
          <span className="block font-bold text-navy text-sm sm:text-base">{part.title}</span>
          <span className="block text-xs sm:text-sm text-charcoal/60 mt-0.5">{part.description}</span>
        </span>
        <Icon
          name="chevronDown"
          className={`w-5 h-5 shrink-0 text-broadcast-blue transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <ul className="px-5 sm:px-6 pb-5 pl-[4.25rem] sm:pl-[4.75rem] space-y-2">
          {part.modules.map((m) => (
            <li key={m} className="flex items-start gap-2.5 text-sm text-charcoal/75 leading-relaxed">
              <Icon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
              {m}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CurriculumAccordion() {
  const [openPart, setOpenPart] = useState(1);

  return (
    <section id="curriculum" className="bg-light-grey py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Curriculum Overview"
          title="A Comprehensive Curriculum Covering the Full Institutional Life of an NPO"
          subtitle="13 parts, 62 modules — expand any part to see its modules."
        />
        <div className="space-y-3">
          {curriculum.map((part) => (
            <PartCard
              key={part.part}
              part={part}
              isOpen={openPart === part.part}
              onToggle={() => setOpenPart(openPart === part.part ? null : part.part)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
