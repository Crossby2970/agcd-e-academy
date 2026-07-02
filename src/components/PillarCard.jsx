import Icon from "./Icon";

export default function PillarCard({ pillar }) {
  return (
    <div className="group flex flex-col rounded-2xl bg-white border border-black/5 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-broadcast-blue/10 text-broadcast-blue group-hover:bg-broadcast-blue group-hover:text-white transition-colors">
        <Icon name={pillar.icon} className="w-6 h-6" />
      </span>
      <h3 className="mt-5 text-base font-bold text-navy leading-snug">{pillar.name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold">{pillar.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{pillar.description}</p>
    </div>
  );
}
