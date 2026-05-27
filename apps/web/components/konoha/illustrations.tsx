/**
 * WebVerse illustrations — futuristic SVG elements.
 * Re-exports and new components for backward compatibility.
 */

export { PortalRing as Sharingan } from "@/components/verse/icons";
export { WebVerseIcon as Rasengan } from "@/components/verse/icons";
export { PortalRing as Headband } from "@/components/verse/icons";
export { WebVerseIcon as HokageRock } from "@/components/verse/icons";
export { WebVerseIcon as Scroll } from "@/components/verse/icons";
export { WebVerseIcon as SageMarks } from "@/components/verse/icons";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

/* Akatsuki cloud — now a generic decorative element */
export function AkatsukiCloud({ size = 60, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      {...rest}
    >
      <circle cx="50" cy="50" r="30" fill="none" stroke="#FF1744" strokeWidth="1" opacity="0.3" />
      <circle cx="50" cy="50" r="20" fill="none" stroke="#2979FF" strokeWidth="0.5" opacity="0.2" />
      <circle cx="50" cy="50" r="4" fill="#FF1744" opacity="0.5" />
    </svg>
  );
}

/* Cloud pattern — now a grid pattern */
export function CloudPattern({ className, opacity = 0.04 }: { className?: string; opacity?: number }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="verse-grid-tile" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="60" stroke="#2979FF" strokeWidth="0.5" />
          <line x1="0" y1="0" x2="60" y2="0" stroke="#2979FF" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="1.5" fill="#FF1744" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#verse-grid-tile)" />
    </svg>
  );
}
