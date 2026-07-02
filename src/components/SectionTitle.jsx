import PatternAccent from "./PatternAccent";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <div className={`flex flex-col ${alignClass} gap-4 mb-12`}>
      {eyebrow && (
        <span
          className={`text-sm font-semibold tracking-[0.18em] uppercase ${
            light ? "text-gold" : "text-broadcast-blue"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold text-balance max-w-3xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <PatternAccent color={light ? "text-gold/70" : "text-gold"} />
      {subtitle && (
        <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${light ? "text-white/85" : "text-charcoal/75"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
