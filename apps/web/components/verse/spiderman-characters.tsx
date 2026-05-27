"use client";

import { useId } from "react";

/**
 * Spider-Man Character Silhouettes — five abstract poses.
 * All shapes are solid red/black silhouettes — no face details, no logos,
 * pure body-shape silhouettes recognizable by pose alone.
 *
 * Poses:
 *   - web-shooter: crouching, arm extended shooting web upward-right
 *   - hanging:     upside-down, arms slightly out, web strand above
 *   - crawling:    on all fours, body low, limbs spread
 *   - swinging:    mid-swing, body arched, one arm up
 *   - standing:    standing tall, arms slightly out, heroic
 */
export type SpiderPose =
  | "web-shooter"
  | "hanging"
  | "crawling"
  | "swinging"
  | "standing";

interface SpiderManCharacterProps {
  pose: SpiderPose;
  size?: number;
  color?: string;
  shadowColor?: string;
  className?: string;
  animate?: boolean;
}

const ANIM_CLASS: Record<SpiderPose, string> = {
  "web-shooter": "animate-shooter-lean",
  hanging: "animate-hanging-sway",
  crawling: "animate-crawl-breathe",
  swinging: "animate-swing-arc",
  standing: "animate-hero-breathe",
};

export function SpiderManCharacter({
  pose,
  size = 200,
  color = "#D90429",
  shadowColor = "#8B0000",
  className,
  animate = true,
}: SpiderManCharacterProps) {
  const reactId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const gradId = `sm-grad-${reactId}`;
  const glowId = `sm-glow-${reactId}`;
  const accentId = `sm-accent-${reactId}`;

  const animClass = animate ? ANIM_CLASS[pose] : "";
  const composedClass = [className, animClass].filter(Boolean).join(" ");
  const aspectH = (size * 300) / 200; // viewBox is 200×300

  return (
    <svg
      width={size}
      height={aspectH}
      viewBox="0 0 200 300"
      className={composedClass}
      aria-hidden="true"
      style={{ transformOrigin: "center" }}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={shadowColor} />
        </linearGradient>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={accentId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1744" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>

      {pose === "web-shooter" && (
        <WebShooterShape gradId={gradId} accentId={accentId} glowId={glowId} />
      )}
      {pose === "hanging" && (
        <HangingShape gradId={gradId} accentId={accentId} glowId={glowId} />
      )}
      {pose === "crawling" && (
        <CrawlingShape gradId={gradId} accentId={accentId} glowId={glowId} />
      )}
      {pose === "swinging" && (
        <SwingingShape gradId={gradId} accentId={accentId} glowId={glowId} />
      )}
      {pose === "standing" && (
        <StandingShape gradId={gradId} accentId={accentId} glowId={glowId} />
      )}
    </svg>
  );
}

interface ShapeProps {
  gradId: string;
  accentId: string;
  glowId: string;
}

/* ============================================================
   Pose 1: Web Shooter — crouching, arm extended upward-right
   ============================================================ */
function WebShooterShape({ gradId, accentId, glowId }: ShapeProps) {
  const fill = `url(#${gradId})`;
  return (
    <g>
      <ellipse cx="100" cy="220" rx="60" ry="10" fill={`url(#${glowId})`} />
      {/* Trailing leg (back) */}
      <path
        d="M 110 180 Q 145 195 165 215 L 158 222 Q 138 205 105 195 Z"
        fill={fill}
      />
      {/* Front leg bent */}
      <path
        d="M 90 180 Q 75 195 70 220 L 62 220 L 60 230 L 88 230 Q 92 205 100 192 Z"
        fill={fill}
      />
      {/* Torso — tilted forward */}
      <path
        d="M 70 130 Q 60 155 80 185 L 110 188 Q 130 175 125 145 L 105 122 Q 85 120 70 130 Z"
        fill={fill}
      />
      {/* Spine accent */}
      <path
        d="M 90 145 Q 100 158 105 175"
        stroke={`url(#${accentId})`}
        strokeWidth="1.2"
        fill="none"
        opacity="0.55"
      />
      {/* Left arm braced on knee */}
      <path
        d="M 78 155 Q 70 172 82 185 L 90 180 Q 84 168 88 158 Z"
        fill={fill}
      />
      {/* Right arm extended upward-right (web shooter) */}
      <path
        d="M 118 138 Q 145 110 175 80 L 182 88 Q 158 115 130 150 Z"
        fill={fill}
      />
      {/* Wrist/web shooter accent */}
      <circle cx="178" cy="84" r="4" fill={`url(#${accentId})`} />
      {/* Web shoot strand */}
      <path
        d="M 178 84 Q 188 70 196 56"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      >
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="1.4s"
          repeatCount="indefinite"
        />
      </path>
      <circle cx="196" cy="56" r="2.2" fill="#FFFFFF" opacity="0.9" />
      {/* Head — angular */}
      <path
        d="M 102 100 Q 88 100 86 118 Q 88 132 105 130 Q 120 128 120 112 Q 118 100 102 100 Z"
        fill={fill}
      />
      {/* Eye accents */}
      <path
        d="M 95 114 Q 92 118 96 122 Q 102 121 102 116 Z"
        fill="#FFFFFF"
        opacity="0.85"
      />
      <path
        d="M 110 113 Q 116 113 116 119 Q 113 122 108 119 Z"
        fill="#FFFFFF"
        opacity="0.85"
      />
    </g>
  );
}

/* ============================================================
   Pose 2: Hanging — upside down
   ============================================================ */
function HangingShape({ gradId, accentId, glowId }: ShapeProps) {
  const fill = `url(#${gradId})`;
  return (
    <g>
      {/* Web anchor (top of svg) */}
      <circle cx="100" cy="6" r="3" fill="#FFFFFF" opacity="0.95" />
      {/* Web strand from top to feet */}
      <line
        x1="100"
        y1="6"
        x2="100"
        y2="50"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        opacity="0.8"
      />
      {/* Feet up — upper part of body */}
      <path
        d="M 88 48 Q 86 40 92 32 L 96 32 L 100 48 Z"
        fill={fill}
      />
      <path
        d="M 112 48 Q 114 40 108 32 L 104 32 L 100 48 Z"
        fill={fill}
      />
      {/* Legs (going down from feet) */}
      <path
        d="M 92 48 Q 88 78 82 110 L 98 112 Q 100 80 100 48 Z"
        fill={fill}
      />
      <path
        d="M 108 48 Q 112 78 118 110 L 102 112 Q 100 80 100 48 Z"
        fill={fill}
      />
      {/* Inverted torso (waist near top, shoulders near bottom) */}
      <path
        d="M 78 110 Q 70 145 78 178 L 122 178 Q 130 145 122 110 Z"
        fill={fill}
      />
      {/* Spine accent */}
      <line
        x1="100"
        y1="115"
        x2="100"
        y2="170"
        stroke={`url(#${accentId})`}
        strokeWidth="1"
        opacity="0.5"
      />
      {/* Arms hanging down (which is now upward toward feet — bent and out) */}
      <path
        d="M 78 168 Q 56 200 50 230 L 62 232 Q 70 205 88 178 Z"
        fill={fill}
      />
      <path
        d="M 122 168 Q 144 200 150 230 L 138 232 Q 130 205 112 178 Z"
        fill={fill}
      />
      {/* Hands */}
      <circle cx="56" cy="231" r="5" fill={fill} />
      <circle cx="144" cy="231" r="5" fill={fill} />
      {/* Head — at the bottom */}
      <ellipse cx="100" cy="200" rx="18" ry="20" fill={fill} />
      {/* Inverted eye accents */}
      <path
        d="M 92 196 Q 88 200 92 204 Q 98 203 98 198 Z"
        fill="#FFFFFF"
        opacity="0.85"
      />
      <path
        d="M 108 196 Q 112 200 108 204 Q 102 203 102 198 Z"
        fill="#FFFFFF"
        opacity="0.85"
      />
      {/* Drop glow */}
      <ellipse cx="100" cy="220" rx="22" ry="3" fill={`url(#${glowId})`} />
    </g>
  );
}

/* ============================================================
   Pose 3: Crawling — on all fours
   ============================================================ */
function CrawlingShape({ gradId, accentId, glowId }: ShapeProps) {
  const fill = `url(#${gradId})`;
  return (
    <g>
      <ellipse cx="100" cy="225" rx="80" ry="6" fill={`url(#${glowId})`} />
      {/* Back-left leg, spread wide */}
      <path
        d="M 80 178 Q 50 195 30 220 L 38 226 Q 58 205 92 188 Z"
        fill={fill}
      />
      {/* Back-right leg, spread wide */}
      <path
        d="M 120 178 Q 150 195 170 220 L 162 226 Q 142 205 108 188 Z"
        fill={fill}
      />
      {/* Body — horizontal torso */}
      <path
        d="M 70 165 Q 65 185 80 198 L 120 198 Q 135 185 130 165 Q 122 152 100 152 Q 78 152 70 165 Z"
        fill={fill}
      />
      {/* Spine accent */}
      <path
        d="M 80 178 Q 100 175 120 178"
        stroke={`url(#${accentId})`}
        strokeWidth="1.2"
        fill="none"
        opacity="0.55"
      />
      {/* Front-left arm, planted */}
      <path
        d="M 78 158 Q 50 158 30 178 L 38 186 Q 58 170 90 168 Z"
        fill={fill}
      />
      {/* Front-right arm, planted */}
      <path
        d="M 122 158 Q 150 158 170 178 L 162 186 Q 142 170 110 168 Z"
        fill={fill}
      />
      {/* Hands at corners */}
      <circle cx="32" cy="180" r="5" fill={fill} />
      <circle cx="168" cy="180" r="5" fill={fill} />
      <circle cx="34" cy="222" r="5" fill={fill} />
      <circle cx="166" cy="222" r="5" fill={fill} />
      {/* Head — raised, looking forward */}
      <path
        d="M 90 130 Q 78 132 78 148 Q 80 160 100 160 Q 120 160 122 148 Q 122 132 110 130 Z"
        fill={fill}
      />
      {/* Eye accents */}
      <path
        d="M 88 142 Q 84 146 88 150 Q 94 149 94 144 Z"
        fill="#FFFFFF"
        opacity="0.85"
      />
      <path
        d="M 112 142 Q 116 146 112 150 Q 106 149 106 144 Z"
        fill="#FFFFFF"
        opacity="0.85"
      />
    </g>
  );
}

/* ============================================================
   Pose 4: Swinging — mid-swing, body arched diagonally
   ============================================================ */
function SwingingShape({ gradId, accentId, glowId }: ShapeProps) {
  const fill = `url(#${gradId})`;
  return (
    <g transform="rotate(-12 100 150)">
      {/* Web strand from top */}
      <line
        x1="155"
        y1="0"
        x2="120"
        y2="80"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        opacity="0.85"
      />
      {/* Right arm raised, gripping web */}
      <path
        d="M 116 90 Q 130 60 152 32 L 160 38 Q 142 64 126 96 Z"
        fill={fill}
      />
      <circle cx="155" cy="34" r="4" fill={`url(#${accentId})`} />
      {/* Head */}
      <ellipse cx="105" cy="100" rx="15" ry="17" fill={fill} />
      {/* Eyes */}
      <path
        d="M 96 98 Q 92 102 96 106 Q 102 105 102 100 Z"
        fill="#FFFFFF"
        opacity="0.9"
      />
      <path
        d="M 112 98 Q 116 102 112 106 Q 108 105 108 100 Z"
        fill="#FFFFFF"
        opacity="0.9"
      />
      {/* Arched torso */}
      <path
        d="M 88 112 Q 70 140 80 175 L 122 178 Q 142 150 126 116 Z"
        fill={fill}
      />
      {/* Spine accent */}
      <path
        d="M 95 130 Q 105 150 110 168"
        stroke={`url(#${accentId})`}
        strokeWidth="1.2"
        fill="none"
        opacity="0.55"
      />
      {/* Left arm trailing back */}
      <path
        d="M 92 122 Q 60 138 38 160 L 46 168 Q 70 152 100 142 Z"
        fill={fill}
      />
      {/* Trailing legs */}
      <path
        d="M 86 168 Q 60 198 38 230 L 50 235 Q 72 208 100 180 Z"
        fill={fill}
      />
      <path
        d="M 114 168 Q 90 200 70 240 L 82 244 Q 104 215 128 184 Z"
        fill={fill}
      />
      {/* Motion glow trail */}
      <ellipse cx="60" cy="220" rx="40" ry="5" fill={`url(#${glowId})`} opacity="0.7" />
    </g>
  );
}

/* ============================================================
   Pose 5: Standing — heroic upright stance
   ============================================================ */
function StandingShape({ gradId, accentId, glowId }: ShapeProps) {
  const fill = `url(#${gradId})`;
  return (
    <g>
      <ellipse cx="100" cy="280" rx="55" ry="6" fill={`url(#${glowId})`} />
      {/* Legs */}
      <path
        d="M 86 175 Q 78 220 76 270 L 96 270 Q 100 220 100 175 Z"
        fill={fill}
      />
      <path
        d="M 114 175 Q 122 220 124 270 L 104 270 Q 100 220 100 175 Z"
        fill={fill}
      />
      {/* Boots */}
      <path
        d="M 72 268 L 100 268 L 100 280 L 72 280 Z"
        fill={fill}
      />
      <path
        d="M 100 268 L 128 268 L 128 280 L 100 280 Z"
        fill={fill}
      />
      {/* Torso — V-shape */}
      <path
        d="M 76 110 Q 66 145 86 178 L 114 178 Q 134 145 124 110 Q 116 100 100 100 Q 84 100 76 110 Z"
        fill={fill}
      />
      {/* Chest accent line */}
      <path
        d="M 100 118 L 100 165"
        stroke={`url(#${accentId})`}
        strokeWidth="1.2"
        opacity="0.55"
      />
      <path
        d="M 88 130 Q 100 124 112 130"
        stroke={`url(#${accentId})`}
        strokeWidth="1"
        fill="none"
        opacity="0.45"
      />
      {/* Left arm — slightly out */}
      <path
        d="M 78 116 Q 60 140 56 180 L 68 184 Q 76 150 90 128 Z"
        fill={fill}
      />
      {/* Right arm — slightly out */}
      <path
        d="M 122 116 Q 140 140 144 180 L 132 184 Q 124 150 110 128 Z"
        fill={fill}
      />
      {/* Hands */}
      <circle cx="62" cy="184" r="5" fill={fill} />
      <circle cx="138" cy="184" r="5" fill={fill} />
      {/* Head */}
      <ellipse cx="100" cy="78" rx="20" ry="22" fill={fill} />
      {/* Eyes — heroic */}
      <path
        d="M 88 74 Q 82 80 88 86 Q 96 84 96 78 Z"
        fill="#FFFFFF"
        opacity="0.9"
      />
      <path
        d="M 112 74 Q 118 80 112 86 Q 104 84 104 78 Z"
        fill="#FFFFFF"
        opacity="0.9"
      />
    </g>
  );
}

/* ============================================================
   Aliases — named exports for direct use
   ============================================================ */
export function WebShooterPose(
  props: Omit<SpiderManCharacterProps, "pose">,
) {
  return <SpiderManCharacter pose="web-shooter" {...props} />;
}
export function HangingPose(props: Omit<SpiderManCharacterProps, "pose">) {
  return <SpiderManCharacter pose="hanging" {...props} />;
}
export function CrawlingPose(props: Omit<SpiderManCharacterProps, "pose">) {
  return <SpiderManCharacter pose="crawling" {...props} />;
}
export function SwingingPose(props: Omit<SpiderManCharacterProps, "pose">) {
  return <SpiderManCharacter pose="swinging" {...props} />;
}
export function StandingPose(props: Omit<SpiderManCharacterProps, "pose">) {
  return <SpiderManCharacter pose="standing" {...props} />;
}
