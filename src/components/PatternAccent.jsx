// Subtle African-inspired geometric accent line (diamonds), used as a section divider/accent.
export default function PatternAccent({ className = "", color = "text-gold" }) {
  return (
    <svg
      viewBox="0 0 240 16"
      className={`h-4 w-32 ${color} ${className}`}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <path key={i} d={`M${i * 20 + 4} 8 L${i * 20 + 12} 2 L${i * 20 + 20} 8 L${i * 20 + 12} 14 Z`} />
      ))}
    </svg>
  );
}
