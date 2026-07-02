import Icon from "./Icon";

export default function PathwayCard({ pathway }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
      <h3 className="text-lg font-bold text-navy">{pathway.title}</h3>
      <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
        <span className="font-semibold text-broadcast-blue">Who it's for: </span>
        {pathway.audience}
      </p>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-navy/60 mb-2">Skills Gained</p>
        <ul className="flex flex-wrap gap-2">
          {pathway.skills.map((s) => (
            <li key={s} className="rounded-full bg-broadcast-blue/10 text-broadcast-blue text-xs font-medium px-3 py-1">
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 grow">
        <p className="text-xs font-semibold uppercase tracking-wide text-navy/60 mb-2">Suggested Modules</p>
        <ul className="space-y-1.5">
          {pathway.modules.map((m) => (
            <li key={m} className="flex items-start gap-2 text-sm text-charcoal/75">
              <Icon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
              {m}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-5 pt-4 border-t border-black/5 text-xs text-charcoal/55 italic">{pathway.certNote}</p>
    </div>
  );
}
