export default function BotanicalAccent({
  color = "#8A9E8A",
  width = 110,
  opacity = 0.6,
}: {
  color?: string;
  width?: number;
  opacity?: number;
}) {
  return (
    <svg
      width={width}
      height={Math.round(width * 0.38)}
      viewBox="0 0 110 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, display: "block" }}
      aria-hidden="true"
    >
      {/* Center stem */}
      <line x1="55" y1="42" x2="55" y2="4" stroke={color} strokeWidth="0.75" />

      {/* Left branch lower */}
      <path d="M55 34 Q44 28 36 26" stroke={color} strokeWidth="0.75" fill="none" />
      <path d="M55 34 Q44 30 38 32" stroke={color} strokeWidth="0.5" fill="none" strokeDasharray="1 2" />

      {/* Left leaf lower */}
      <path d="M55 34 Q46 24 36 26 Q44 30 55 34Z" fill={color} opacity="0.18" />

      {/* Left branch upper */}
      <path d="M55 22 Q46 16 40 14" stroke={color} strokeWidth="0.75" fill="none" />
      <path d="M55 22 Q46 18 42 22" stroke={color} strokeWidth="0.5" fill="none" strokeDasharray="1 2" />

      {/* Left leaf upper */}
      <path d="M55 22 Q47 12 40 14 Q47 18 55 22Z" fill={color} opacity="0.18" />

      {/* Right branch lower */}
      <path d="M55 34 Q66 28 74 26" stroke={color} strokeWidth="0.75" fill="none" />
      <path d="M55 34 Q66 30 72 32" stroke={color} strokeWidth="0.5" fill="none" strokeDasharray="1 2" />

      {/* Right leaf lower */}
      <path d="M55 34 Q64 24 74 26 Q66 30 55 34Z" fill={color} opacity="0.18" />

      {/* Right branch upper */}
      <path d="M55 22 Q64 16 70 14" stroke={color} strokeWidth="0.75" fill="none" />
      <path d="M55 22 Q64 18 68 22" stroke={color} strokeWidth="0.5" fill="none" strokeDasharray="1 2" />

      {/* Right leaf upper */}
      <path d="M55 22 Q63 12 70 14 Q63 18 55 22Z" fill={color} opacity="0.18" />

      {/* Top bud */}
      <circle cx="55" cy="4" r="2" fill={color} opacity="0.45" />
      <circle cx="55" cy="4" r="1" fill={color} opacity="0.7" />

      {/* Fine horizontal rules either side */}
      <line x1="0" y1="38" x2="46" y2="38" stroke={color} strokeWidth="0.5" opacity="0.4" />
      <line x1="64" y1="38" x2="110" y2="38" stroke={color} strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}
