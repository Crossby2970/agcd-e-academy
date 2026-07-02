// Hand-authored line-icon set (no icon library dependency).
// Each entry returns the inner SVG markup for a 24x24 viewBox, stroke-based icon.

const icons = {
  graduationCap: (
    <>
      <path d="M2 8.5 12 4l10 4.5-10 4.5L2 8.5Z" />
      <path d="M6 10.8v4.6c0 1.5 2.7 2.9 6 2.9s6-1.4 6-2.9v-4.6" />
      <path d="M21 8.5v6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.8 9.2-2 5.6-5.6 2 2-5.6 5.6-2Z" />
    </>
  ),
  shieldCheck: (
    <>
      <path d="M12 3.2 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-2.8Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2.5" y="7.5" width="19" height="12" rx="2" />
      <path d="M8.5 7.5V5.8c0-.7.6-1.3 1.3-1.3h4.4c.7 0 1.3.6 1.3 1.3V7.5" />
      <path d="M2.5 12.5h19" />
    </>
  ),
  monitor: (
    <>
      <rect x="2.5" y="4.5" width="19" height="12.5" rx="1.6" />
      <path d="M8.5 20.5h7" />
      <path d="M12 17v3.5" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3.5 13.6 8l4.4 1.6-4.4 1.6L12 15.7l-1.6-4.5L6 9.6 10.4 8 12 3.5Z" />
      <path d="M19 15.5 19.8 18l2.2.8-2.2.8-.8 2.4-.8-2.4-2.2-.8 2.2-.8.8-2.4Z" />
    </>
  ),
  church: (
    <>
      <path d="M12 2.5v3.2M10.4 4.1h3.2" />
      <path d="M6 21.5V10.8L12 6l6 4.8v10.7Z" />
      <path d="M9.8 21.5v-5.2a2.2 2.2 0 0 1 4.4 0v5.2" />
    </>
  ),
  hospital: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  video: (
    <>
      <rect x="2.5" y="5.5" width="13" height="13" rx="1.8" />
      <path d="m15.5 10 6-3.3v10.6l-6-3.3" />
    </>
  ),
  sunrise: (
    <>
      <path d="M12 3.5v4" />
      <path d="m6.5 8.2 1.6 1.6M17.5 8.2l-1.6 1.6" />
      <path d="M3.5 15.5h17" />
      <path d="M6 15.5a6 6 0 0 1 12 0" />
      <path d="M2.5 19h19" />
    </>
  ),
  handshake: (
    <>
      <path d="M2.5 12.5 6 9l3.5 2.4 2-1.6a1.7 1.7 0 0 1 2.3.2l3.7 3.9" />
      <path d="m21.5 12.5-3.2 3.4a1.8 1.8 0 0 1-2.6 0l-3-3" />
      <path d="M9 15.4l1.7 1.7a1.7 1.7 0 0 0 2.4 0" />
    </>
  ),
  chart: (
    <>
      <path d="M3.5 20.5h17" />
      <rect x="5.5" y="12" width="3" height="7" />
      <rect x="10.5" y="8" width="3" height="11" />
      <rect x="15.5" y="4.5" width="3" height="14.5" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4.5" width="14" height="17" rx="1.8" />
      <rect x="9" y="2.8" width="6" height="3" rx="1" />
      <path d="M8.5 11h7M8.5 15h7M8.5 19h4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <circle cx="17.5" cy="9.5" r="2.3" />
      <path d="M15.8 14.8c2.4.2 4.2 1.9 4.2 4.7" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  phone: (
    <>
      <path d="M6.6 3.5h3.1l1.4 4-2 1.6a12.4 12.4 0 0 0 5.8 5.8l1.6-2 4 1.4v3.1c0 1-.9 1.8-1.9 1.7A16.7 16.7 0 0 1 4.9 5.4c-.1-1 .7-1.9 1.7-1.9Z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" />
    </>
  ),
  menu: (
    <>
      <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </>
  ),
  close: (
    <>
      <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
    </>
  ),
  chevronDown: (
    <>
      <path d="m5.5 8.5 6.5 7 6.5-7" />
    </>
  ),
  check: (
    <>
      <path d="m4.5 12.5 5 5 10-10" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4 12h16M13.5 5.5 20 12l-6.5 6.5" />
    </>
  ),
  quote: (
    <>
      <path d="M8.5 6.5c-3 1-4.5 3.2-4.5 6.2 0 2.4 1.6 4 3.6 4S11 15 11 12.9c0-1.7-1-3-2.7-3.2.4-1.4 1.6-2.4 3-2.9L8.5 6.5Z" />
      <path d="M17 6.5c-3 1-4.5 3.2-4.5 6.2 0 2.4 1.6 4 3.6 4s3.4-1.7 3.4-3.8c0-1.7-1-3-2.7-3.2.4-1.4 1.6-2.4 3-2.9L17 6.5Z" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="m10.5 9.5 5 2.5-5 2.5v-5Z" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M7.5 10v6.5M7.5 7.4v.1" />
      <path d="M11.5 16.5V13c0-1.4 1-2.5 2.4-2.5S16 11.6 16 13v3.5" />
      <path d="M11.5 10.3v6.2" />
    </>
  ),
  facebook: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14 8.5h-1.6c-.9 0-1.6.7-1.6 1.6V11h3.2l-.4 2.6h-2.8v6.4" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 6.9v.1" />
    </>
  ),
  tiktok: (
    <>
      <path d="M13 3.5v11.7a3 3 0 1 1-2.3-2.9" />
      <path d="M13 3.5c.4 2.2 2 3.8 4.2 4.1" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0" />
      <path d="M12 17v4.5M9 21.5h6" />
    </>
  ),
};

export default function Icon({ name, className = "w-6 h-6", strokeWidth = 1.8 }) {
  const content = icons[name];
  if (!content) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
