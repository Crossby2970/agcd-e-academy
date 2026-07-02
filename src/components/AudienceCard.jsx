import Icon from "./Icon";

export default function AudienceCard({ audience }) {
  return (
    <div className="flex items-start gap-4 rounded-xl bg-white border border-black/5 p-5 hover:border-broadcast-blue/30 hover:shadow-md transition-all">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
        <Icon name={audience.icon} className="w-5 h-5" />
      </span>
      <div>
        <h3 className="font-bold text-navy text-sm leading-snug">{audience.title}</h3>
        <p className="mt-1 text-sm text-charcoal/65 leading-relaxed">{audience.description}</p>
      </div>
    </div>
  );
}
