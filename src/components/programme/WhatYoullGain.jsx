import { learnerGains } from "../../data/programme/content";
import Icon from "../Icon";
import SectionTitle from "../SectionTitle";

export default function WhatYoullGain() {
  return (
    <section className="bg-light-grey py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="What Learners Will Gain"
          title="Practical Tools, Stronger Systems and a Board-Ready Action Plan"
        />
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {learnerGains.map((gain) => (
            <li key={gain} className="flex items-start gap-3 text-sm sm:text-base text-charcoal/80 leading-relaxed">
              <Icon name="check" className="w-5 h-5 mt-0.5 shrink-0 text-gold" />
              {gain}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
