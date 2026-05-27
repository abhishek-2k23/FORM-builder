/**
 * WebVerse character silhouettes — futuristic abstract figures
 * used as decorative elements in the dashboard.
 */

type CharProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

/* ------------------------------------------------------------------
   Cyber Figure — used as dashboard decoration (replaces Itachi)
   ------------------------------------------------------------------ */
export function ItachiSilhouette({ size = 220, ...rest }: CharProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 240"
      fill="none"
      aria-hidden="true"
      {...rest}
    >
      <defs>
        <linearGradient id="cyber-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a3a" />
          <stop offset="100%" stopColor="#0a0a1a" />
        </linearGradient>
        <linearGradient id="cyber-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1744" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2979FF" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Body silhouette */}
      <path
        d="M40 240 L 40 160 Q 40 130, 60 120 L 60 90 Q 100 60, 140 90 L 140 120 Q 160 130, 160 160 L 160 240 Z"
        fill="url(#cyber-body)"
      />

      {/* Circuit lines on body */}
      <path d="M70 150 L 70 200 L 90 200" stroke="#FF1744" strokeWidth="0.8" opacity="0.3" />
      <path d="M130 150 L 130 200 L 110 200" stroke="#2979FF" strokeWidth="0.8" opacity="0.3" />
      <path d="M80 170 L 120 170" stroke="#AA00FF" strokeWidth="0.5" opacity="0.2" />

      {/* Head */}
      <ellipse cx="100" cy="85" rx="32" ry="36" fill="#0a0a1a" />

      {/* Visor / helmet */}
      <path
        d="M68 75 Q 65 55, 80 48 L 100 44 L 120 48 Q 135 55, 132 75 L 128 85 Q 115 80, 100 80 Q 85 80, 72 85 Z"
        fill="#12122A"
        stroke="#24243A"
        strokeWidth="1"
      />

      {/* Glowing visor line */}
      <path
        d="M75 82 Q 100 78, 125 82"
        stroke="url(#cyber-glow)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Eye glow dots */}
      <circle cx="88" cy="82" r="2" fill="#FF1744" opacity="0.8" />
      <circle cx="112" cy="82" r="2" fill="#2979FF" opacity="0.8" />

      {/* Shoulder nodes */}
      <circle cx="60" cy="130" r="3" fill="#FF1744" opacity="0.4" />
      <circle cx="140" cy="130" r="3" fill="#2979FF" opacity="0.4" />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Tech Figure — masked profile (replaces Kakashi)
   ------------------------------------------------------------------ */
export function KakashiSilhouette({ size = 200, ...rest }: CharProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 240"
      fill="none"
      aria-hidden="true"
      {...rest}
    >
      <defs>
        <linearGradient id="tech-vest" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a3a" />
          <stop offset="100%" stopColor="#0a0a1a" />
        </linearGradient>
      </defs>

      {/* Body */}
      <path
        d="M50 240 L 50 170 Q 50 150, 70 145 L 70 130 Q 100 110, 130 130 L 130 145 Q 150 150, 150 170 L 150 240 Z"
        fill="url(#tech-vest)"
      />

      {/* Circuit accents */}
      <path d="M65 180 L 65 210 L 80 210" stroke="#00E5FF" strokeWidth="0.7" opacity="0.3" />
      <path d="M135 180 L 135 210 L 120 210" stroke="#AA00FF" strokeWidth="0.7" opacity="0.3" />

      {/* Head */}
      <ellipse cx="100" cy="80" rx="34" ry="38" fill="#0a0a1a" />

      {/* Angular hair/helmet */}
      <path
        d="M65 70 Q 60 40, 80 35 L 100 30 L 120 35 Q 140 40, 138 75 L 130 60 Q 115 55, 100 58 Q 85 55, 70 62 Z"
        fill="#24243A"
      />

      {/* Face mask */}
      <path
        d="M70 90 Q 70 115, 100 118 Q 130 115, 130 90"
        fill="#12122A"
        stroke="#24243A"
        strokeWidth="0.5"
      />

      {/* Single glowing eye */}
      <circle cx="115" cy="82" r="3" fill="#00E5FF" opacity="0.8" />
      <circle cx="115" cy="82" r="6" fill="none" stroke="#00E5FF" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Builder Figure — energetic profile (replaces Naruto)
   ------------------------------------------------------------------ */
export function NarutoSilhouette({ size = 200, ...rest }: CharProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 240"
      fill="none"
      aria-hidden="true"
      {...rest}
    >
      {/* Body with gradient */}
      <path
        d="M50 240 L 50 170 Q 50 150, 75 142 L 75 125 Q 100 105, 125 125 L 125 142 Q 150 150, 150 170 L 150 240 Z"
        fill="#FF1744"
        opacity="0.8"
      />

      {/* Dark accent stripes */}
      <rect x="50" y="175" width="100" height="3" fill="#0a0a1a" opacity="0.6" />
      <rect x="78" y="135" width="44" height="6" fill="#0a0a1a" opacity="0.4" />

      {/* Head */}
      <ellipse cx="100" cy="80" rx="34" ry="38" fill="#0a0a1a" />

      {/* Spiky angular hair */}
      <path
        d="M62 70 L 58 40 L 74 50 L 84 32 L 94 44 L 100 26 L 106 44 L 116 32 L 126 50 L 142 40 L 138 75 L 128 60 Q 100 55, 72 60 Z"
        fill="#24243A"
      />

      {/* Face */}
      <path d="M72 86 Q 72 116, 100 120 Q 128 116, 128 86" fill="#d4c4b0" opacity="0.3" />

      {/* Glowing eyes */}
      <circle cx="86" cy="92" r="2.5" fill="#FF1744" opacity="0.8" />
      <circle cx="114" cy="92" r="2.5" fill="#FF1744" opacity="0.8" />

      {/* Energy lines */}
      <path d="M68 92 L 78 92" stroke="#FF1744" strokeWidth="0.8" opacity="0.4" />
      <path d="M68 96 L 76 96" stroke="#FF1744" strokeWidth="0.8" opacity="0.3" />
      <path d="M122 92 L 132 92" stroke="#FF1744" strokeWidth="0.8" opacity="0.4" />
      <path d="M124 96 L 132 96" stroke="#FF1744" strokeWidth="0.8" opacity="0.3" />

      {/* Headband */}
      <rect x="64" y="58" width="72" height="10" fill="#12122A" stroke="#24243A" strokeWidth="0.5" />
      <rect x="92" y="56" width="16" height="14" fill="#24243A" stroke="#FF1744" strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}
