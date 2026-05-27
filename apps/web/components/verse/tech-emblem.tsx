"use client";

import { useId } from "react";

/**
 * Tech-Suit Emblem — angular tech-suit chest spider with animated chrome
 * sweep and pulsing red energy core. Replaces WebVerseIcon as primary brand mark.
 *
 * Renders an outer chrome ring, 8 angular spider legs, an inner hexagonal body,
 * a radial red energy core (pulsing), and an animated chrome sweep overlay.
 *
 * Each instance uses unique gradient/filter IDs (via useId) to avoid clashes
 * when multiple emblems render on the same page.
 */
interface TechSuitEmblemProps {
  size?: number;
  animate?: boolean;
  className?: string;
}

export function TechSuitEmblem({
  size = 100,
  animate = true,
  className,
}: TechSuitEmblemProps) {
  const reactId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const chromeId = `tse-chrome-${reactId}`;
  const coreId = `tse-core-${reactId}`;
  const sweepId = `tse-sweep-${reactId}`;
  const glowId = `tse-glow-${reactId}`;
  const innerGlowId = `tse-innerglow-${reactId}`;

  // 8 angular spider legs at 0/45/90/135/180/225/270/315
  const legAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  const cx = 100;
  const cy = 100;
  const innerR = 28;
  const outerR = 86;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={chromeId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#808080" />
        </linearGradient>
        <radialGradient id={coreId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6B7E" stopOpacity="1" />
          <stop offset="40%" stopColor="#FF1744" stopOpacity="1" />
          <stop offset="100%" stopColor="#D90429" stopOpacity="1" />
        </radialGradient>
        <linearGradient id={sweepId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          {animate && (
            <animate
              attributeName="x1"
              values="-100%;200%"
              dur="3s"
              repeatCount="indefinite"
            />
          )}
          {animate && (
            <animate
              attributeName="x2"
              values="0%;300%"
              dur="3s"
              repeatCount="indefinite"
            />
          )}
        </linearGradient>
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <radialGradient id={innerGlowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF1744" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#D90429" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer red glow halo */}
      <circle cx={cx} cy={cy} r="92" fill={`url(#${innerGlowId})`} />

      {/* Outer chrome ring */}
      <circle
        cx={cx}
        cy={cy}
        r="90"
        fill="none"
        stroke={`url(#${chromeId})`}
        strokeWidth="1.5"
        opacity="0.85"
      />
      <circle
        cx={cx}
        cy={cy}
        r="78"
        fill="none"
        stroke={`url(#${chromeId})`}
        strokeWidth="0.8"
        opacity="0.45"
      />

      {/* Spider legs — 8 sharp, angular bent paths */}
      {legAngles.map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = cx + Math.cos(rad) * innerR;
        const y1 = cy + Math.sin(rad) * innerR;
        const x2 = cx + Math.cos(rad) * outerR;
        const y2 = cy + Math.sin(rad) * outerR;
        // Bent midpoint for angular look (60% along the leg, offset perpendicular)
        const t = 0.6;
        const baseX = x1 + (x2 - x1) * t;
        const baseY = y1 + (y2 - y1) * t;
        const perpAngle = rad + Math.PI / 2;
        const bend = i % 2 === 0 ? 8 : -8;
        const bx = baseX + Math.cos(perpAngle) * bend;
        const by = baseY + Math.sin(perpAngle) * bend;
        return (
          <g key={angle}>
            <path
              d={`M ${x1} ${y1} L ${bx} ${by} L ${x2} ${y2}`}
              stroke={`url(#${chromeId})`}
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
            {/* tiny inner shine on each leg */}
            <circle cx={bx} cy={by} r="1.2" fill="#E0E0E0" opacity="0.6" />
          </g>
        );
      })}

      {/* Hexagonal inner body */}
      <polygon
        points="100,68 128,84 128,116 100,132 72,116 72,84"
        fill="#0A0A0A"
        stroke={`url(#${chromeId})`}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <polygon
        points="100,76 121,87 121,113 100,124 79,113 79,87"
        fill="none"
        stroke="#D90429"
        strokeWidth="0.5"
        opacity="0.5"
      />

      {/* Red energy core — pulsing */}
      <g filter={`url(#${glowId})`}>
        <circle cx={cx} cy={cy} r="18" fill={`url(#${coreId})`} opacity="0.5">
          {animate && (
            <animate
              attributeName="r"
              values="16;22;16"
              dur="2s"
              repeatCount="indefinite"
            />
          )}
        </circle>
      </g>
      <circle cx={cx} cy={cy} r="13" fill={`url(#${coreId})`}>
        {animate && (
          <animate
            attributeName="r"
            values="11;15;11"
            dur="2s"
            repeatCount="indefinite"
          />
        )}
        {animate && (
          <animate
            attributeName="opacity"
            values="0.85;1;0.85"
            dur="2s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      {/* Core highlight */}
      <circle cx={cx - 3.5} cy={cy - 3.5} r="3" fill="#FFFFFF" opacity="0.55" />

      {/* Chrome sweep overlay — clipped to outer chrome ring */}
      <circle
        cx={cx}
        cy={cy}
        r="90"
        fill={`url(#${sweepId})`}
        opacity="0.35"
        pointerEvents="none"
      />
    </svg>
  );
}
