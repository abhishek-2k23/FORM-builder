"use client";

import { useId } from "react";

/**
 * Web Structures — five SVG web pattern types used as decorative elements.
 * All strands use white stroke with a glow filter to produce the silk effect.
 *
 * Types:
 *   - corner:         web spreading from a corner
 *   - full-screen:    giant web spanning entire hero background
 *   - connecting:     elastic single strand between two points
 *   - radial:         circular web (frames the central emblem)
 *   - hanging-thread: single vertical thread (pairs with HangingPose)
 */
export type WebType =
  | "corner"
  | "full-screen"
  | "connecting"
  | "radial"
  | "hanging-thread";

interface WebStructureProps {
  type: WebType;
  size?: number;
  opacity?: number;
  glowIntensity?: number;
  className?: string;
  // For "connecting" type
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  width?: number;
  height?: number;
  // For "hanging-thread" type
  threadLength?: number;
}

/**
 * Compute an SVG path with elastic sag for a connecting strand between (x1,y1) and (x2,y2).
 * Sag is perpendicular to the strand axis, simulating gravity pull on a web silk.
 */
export function interpolateStrandPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  sagAmount = 20,
): string {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len === 0) return `M ${x1} ${y1} L ${x2} ${y2}`;
  // Perpendicular unit vector
  const nx = -dy / len;
  const ny = dx / len;
  // Control points: 1/3 and 2/3 along the line, offset by sag perpendicular
  const cp1x = x1 + dx * 0.33 + nx * sagAmount;
  const cp1y = y1 + dy * 0.33 + ny * sagAmount;
  const cp2x = x1 + dx * 0.66 + nx * sagAmount;
  const cp2y = y1 + dy * 0.66 + ny * sagAmount;
  return `M ${x1} ${y1} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${x2} ${y2}`;
}

/**
 * Compute evenly-spaced points on a circle of given radius, used for web ring intersections.
 */
export function computeWebRingPoints(
  centerX: number,
  centerY: number,
  radius: number,
  strandCount: number,
): Array<{ x: number; y: number }> {
  const out: Array<{ x: number; y: number }> = [];
  for (let i = 0; i < strandCount; i++) {
    const angle = (i / strandCount) * Math.PI * 2;
    out.push({
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    });
  }
  return out;
}

export function WebStructure(props: WebStructureProps) {
  switch (props.type) {
    case "corner":
      return <CornerWeb {...props} />;
    case "full-screen":
      return <FullScreenWeb {...props} />;
    case "connecting":
      return <ConnectingStrand {...props} />;
    case "radial":
      return <RadialWeb {...props} />;
    case "hanging-thread":
      return <HangingThread {...props} />;
    default:
      return null;
  }
}

/* ============================================================
   Corner web — fans from top-left corner
   ============================================================ */
function CornerWeb({
  size = 200,
  opacity = 0.6,
  glowIntensity = 0.5,
  className,
}: WebStructureProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const glowId = `corner-glow-${id}`;
  // 7 strands fanning 0°→90° from origin
  const strandAngles = [0, 15, 30, 45, 60, 75, 90];
  const strandLen = 180;
  const ringRadii = [40, 80, 120, 160];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={3 * glowIntensity} />
        </filter>
      </defs>
      <g
        stroke="#FFFFFF"
        strokeWidth="0.9"
        fill="none"
        filter={`url(#${glowId})`}
      >
        {strandAngles.map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = Math.cos(rad) * strandLen;
          const y2 = Math.sin(rad) * strandLen;
          return <line key={angle} x1="0" y1="0" x2={x2} y2={y2} />;
        })}
      </g>
      <g stroke="#FFFFFF" strokeWidth="0.7" fill="none" opacity="0.9">
        {ringRadii.map((r) => (
          <path
            key={r}
            d={`M ${r} 0 A ${r} ${r} 0 0 1 0 ${r}`}
            strokeDasharray="3 3"
          />
        ))}
      </g>
    </svg>
  );
}

/* ============================================================
   Full-screen web — giant web behind hero
   ============================================================ */
function FullScreenWeb({
  size = 1000,
  opacity = 0.12,
  glowIntensity = 0.4,
  className,
}: WebStructureProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const glowId = `fs-glow-${id}`;
  const fadeId = `fs-fade-${id}`;
  const cx = 720;
  const cy = 450;
  const strandCount = 16;
  const ringRadii = [80, 160, 260, 380, 520, 680];

  // Pre-compute slight irregularity offsets (deterministic via seed)
  const irregularity = (seed: number) => {
    const x = Math.sin(seed * 12.9898) * 43758.5453;
    return (x - Math.floor(x)) * 10 - 5;
  };

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <filter id={glowId} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation={2 * glowIntensity} />
        </filter>
        <radialGradient id={fadeId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Center halo */}
      <circle cx={cx} cy={cy} r="80" fill={`url(#${fadeId})`} />

      {/* Radial strands */}
      <g stroke="#FFFFFF" strokeWidth="0.6" filter={`url(#${glowId})`}>
        {Array.from({ length: strandCount }).map((_, i) => {
          const angle = (i / strandCount) * Math.PI * 2;
          const x2 = cx + Math.cos(angle) * 900;
          const y2 = cy + Math.sin(angle) * 900;
          return <line key={i} x1={cx} y1={cy} x2={x2} y2={y2} />;
        })}
      </g>

      {/* Concentric irregular rings */}
      <g stroke="#FFFFFF" strokeWidth="0.55" fill="none">
        {ringRadii.map((r, ringIdx) => {
          // Build polygon with slight per-strand irregularity
          const points = Array.from({ length: strandCount }).map((_, i) => {
            const angle = (i / strandCount) * Math.PI * 2;
            const offset = irregularity(ringIdx * 17 + i);
            const rr = r + offset;
            const x = cx + Math.cos(angle) * rr;
            const y = cy + Math.sin(angle) * rr;
            return `${x},${y}`;
          });
          return (
            <polygon
              key={r}
              points={points.join(" ")}
              opacity={0.85 - ringIdx * 0.05}
            />
          );
        })}
      </g>
    </svg>
  );
}

/* ============================================================
   Connecting strand — single elastic web between two points
   ============================================================ */
function ConnectingStrand({
  x1 = 0,
  y1 = 0,
  x2 = 100,
  y2 = 100,
  width = 100,
  height = 100,
  opacity = 1,
  glowIntensity = 0.6,
  className,
}: WebStructureProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const glowId = `cs-glow-${id}`;
  const path = interpolateStrandPath(x1, y1, x2, y2, 12);
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation={3 * glowIntensity} />
        </filter>
      </defs>
      <path
        d={path}
        stroke="#FFFFFF"
        strokeWidth="1.4"
        fill="none"
        filter={`url(#${glowId})`}
        strokeLinecap="round"
        className="strand-draw"
      />
      <circle cx={x1} cy={y1} r="2.5" fill="#FFFFFF" />
      <circle cx={x2} cy={y2} r="2.5" fill="#FFFFFF" />
    </svg>
  );
}

/* ============================================================
   Radial web — frames the central emblem
   ============================================================ */
function RadialWeb({
  size = 300,
  opacity = 0.25,
  glowIntensity = 0.5,
  className,
}: WebStructureProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const glowId = `rw-glow-${id}`;
  const cx = 150;
  const cy = 150;
  const strandAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  const ringRadii = [30, 60, 90, 120, 145];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      className={className}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation={2.5 * glowIntensity} />
        </filter>
      </defs>
      <g
        stroke="#FFFFFF"
        strokeWidth="0.8"
        fill="none"
        filter={`url(#${glowId})`}
        style={{ transformOrigin: "center", animation: "core-spin 60s linear infinite" }}
      >
        {strandAngles.map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = cx + Math.cos(rad) * 150;
          const y2 = cy + Math.sin(rad) * 150;
          return <line key={angle} x1={cx} y1={cy} x2={x2} y2={y2} />;
        })}
        {ringRadii.map((r) => (
          <circle key={r} cx={cx} cy={cy} r={r} />
        ))}
      </g>
    </svg>
  );
}

/* ============================================================
   Hanging thread — single vertical web silk
   ============================================================ */
function HangingThread({
  threadLength = 300,
  opacity = 1,
  glowIntensity = 0.6,
  className,
}: WebStructureProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const glowId = `ht-glow-${id}`;
  return (
    <svg
      width={40}
      height={threadLength}
      viewBox={`0 0 40 ${threadLength}`}
      className={className}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <filter id={glowId} x="-100%" y="0%" width="300%" height="100%">
          <feGaussianBlur stdDeviation={2 * glowIntensity} />
        </filter>
      </defs>
      {/* Anchor */}
      <circle cx="20" cy="3" r="3" fill="#FFFFFF" filter={`url(#${glowId})`} />
      {/* Strand */}
      <line
        x1="20"
        y1="3"
        x2="20"
        y2={threadLength}
        stroke="#FFFFFF"
        strokeWidth="1.5"
        filter={`url(#${glowId})`}
        strokeLinecap="round"
      />
    </svg>
  );
}
