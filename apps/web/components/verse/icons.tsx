/**
 * WebForm Verse — Spider-Tech SVG icons and visual elements.
 * Spider core emblem, web structures, node dots, and brand marks.
 */

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * Spider-Core Emblem — the central chest-tech reactor symbol.
 * Angular spider-tech design with metallic chrome edges and glowing red core.
 * Used as logo, watermark, loading screen center, and dashboard hub.
 */
export function WebVerseIcon({
  size = 40,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF1744" stopOpacity="0.4" />
          <stop offset="40%" stopColor="#D90429" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D90429" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="chrome-edge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#808080" />
        </linearGradient>
        <linearGradient id="red-energy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1744" />
          <stop offset="100%" stopColor="#D90429" />
        </linearGradient>
      </defs>
      {/* Outer glow */}
      <circle cx="50" cy="50" r="48" fill="url(#core-glow)" />
      {/* Chrome outer ring */}
      <circle cx="50" cy="50" r="42" fill="none" stroke="url(#chrome-edge)" strokeWidth="1.5" opacity="0.7" />
      {/* Spider legs — 8 angular strands radiating from center */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 50 + Math.cos(rad) * 12;
        const y1 = 50 + Math.sin(rad) * 12;
        const x2 = 50 + Math.cos(rad) * 38;
        const y2 = 50 + Math.sin(rad) * 38;
        // Bent leg midpoint
        const midAngle = rad + 0.15;
        const mx = 50 + Math.cos(midAngle) * 26;
        const my = 50 + Math.sin(midAngle) * 26;
        return (
          <path
            key={angle}
            d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
            stroke="url(#chrome-edge)"
            strokeWidth="1.2"
            fill="none"
            opacity="0.6"
          />
        );
      })}
      {/* Inner web rings */}
      <circle cx="50" cy="50" r="20" fill="none" stroke="#D90429" strokeWidth="0.5" opacity="0.3" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="#D90429" strokeWidth="0.4" opacity="0.2" />
      {/* Central spider body — angular diamond */}
      <path
        d="M50 38 L58 50 L50 62 L42 50 Z"
        fill="#111"
        stroke="url(#chrome-edge)"
        strokeWidth="1.5"
      />
      {/* Red energy core */}
      <circle cx="50" cy="50" r="6" fill="url(#red-energy)">
        <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* Core highlight */}
      <circle cx="48" cy="48" r="2" fill="#fff" opacity="0.4" />
      {/* Outer node dots */}
      {[0, 72, 144, 216, 288].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 50 + Math.cos(rad) * 38;
        const cy = 50 + Math.sin(rad) * 38;
        return (
          <g key={angle}>
            <circle cx={cx} cy={cy} r="2" fill="#D90429" />
            <circle cx={cx} cy={cy} r="2" fill="none" stroke="#D90429" strokeWidth="0.5" opacity="0.4">
              <animate attributeName="r" values="2;4;2" dur="3s" begin={`${angle / 400}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" begin={`${angle / 400}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Spider Web Structure — large decorative web pattern.
 */
export function SpiderWebPattern({
  size = 400,
  className,
}: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="web-fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D90429" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#D90429" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Radial strands */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const x2 = 200 + Math.cos(angle) * 190;
        const y2 = 200 + Math.sin(angle) * 190;
        return (
          <line
            key={i}
            x1="200" y1="200" x2={x2} y2={y2}
            stroke="#D90429"
            strokeWidth="0.5"
            opacity={0.15 + (i % 2) * 0.05}
          />
        );
      })}
      {/* Concentric web rings */}
      {[40, 80, 120, 160, 190].map((r) => (
        <circle
          key={r}
          cx="200" cy="200" r={r}
          fill="none"
          stroke="#D90429"
          strokeWidth="0.4"
          opacity={0.12 - r * 0.0003}
          strokeDasharray="4 8"
        />
      ))}
      {/* Center glow */}
      <circle cx="200" cy="200" r="60" fill="url(#web-fade)" />
    </svg>
  );
}

/**
 * Connection node — glowing dot used for workflow nodes.
 */
export function NodeDot({
  size = 12,
  color = "#D90429",
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`node-glow-${color.replace("#", "")}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill={`url(#node-glow-${color.replace("#", "")})`} />
      <circle cx="12" cy="12" r="4" fill={color} />
      <circle cx="12" cy="12" r="2" fill="#fff" opacity="0.5" />
    </svg>
  );
}

/**
 * Portal ring — kept for backward compat.
 */
export function PortalRing({
  size = 80,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="portal-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D90429" />
          <stop offset="50%" stopColor="#8B0000" />
          <stop offset="100%" stopColor="#D90429" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="54" fill="none" stroke="url(#portal-grad-1)" strokeWidth="1.5" opacity="0.4" strokeDasharray="6 4" />
      <circle cx="60" cy="60" r="42" fill="none" stroke="#D90429" strokeWidth="1" opacity="0.25" strokeDasharray="3 5" />
      <circle cx="60" cy="60" r="28" fill="none" stroke="#D90429" strokeWidth="0.6" opacity="0.15" />
      <circle cx="60" cy="60" r="4" fill="#D90429" opacity="0.6" />
    </svg>
  );
}

/**
 * Hex node — kept for backward compat.
 */
export function HexNode({
  size = 48,
  color = "#D90429",
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="24,2 44,14 44,34 24,46 4,34 4,14"
        fill="none"
        stroke={color}
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}

/**
 * Web strand connector.
 */
export function WebStrand({
  size = 200,
  className,
}: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={4}
      viewBox={`0 0 ${size} 4`}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="web-strand-grad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="30%" stopColor="#D90429" />
          <stop offset="50%" stopColor="#FF1744" />
          <stop offset="70%" stopColor="#D90429" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <line x1="0" y1="2" x2={size} y2="2" stroke="url(#web-strand-grad)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
