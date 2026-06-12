import type { LucideIcon } from "lucide-react";
import { WebStructure } from "@/components/verse/web-structures";

interface StatCardProps {
  label: string;
  value: string | number;
  hint?: string;
  icon: LucideIcon;
  loading?: boolean;
  accent?: "orange" | "chakra" | "gold" | "crimson";
}

const accentMap = {
  orange: {
    border: "hover:border-spider-red/40",
    iconBg: "border-spider-red/30 bg-spider-red/10 text-spider-red",
    glow: "group-hover:shadow-[0_0_24px_rgba(217,4,41,0.12)]",
    valueColor: "text-spider-red",
  },
  chakra: {
    border: "hover:border-spider-silver/40",
    iconBg: "border-spider-silver/30 bg-spider-silver/5 text-spider-silver",
    glow: "group-hover:shadow-[0_0_24px_rgba(192,192,192,0.08)]",
    valueColor: "text-spider-silver",
  },
  gold: {
    border: "hover:border-spider-redGlow/40",
    iconBg: "border-spider-redGlow/30 bg-spider-redGlow/10 text-spider-redGlow",
    glow: "group-hover:shadow-[0_0_24px_rgba(255,23,68,0.12)]",
    valueColor: "text-spider-redGlow",
  },
  crimson: {
    border: "hover:border-spider-crimson/40",
    iconBg: "border-spider-crimson/30 bg-spider-crimson/10 text-spider-crimson",
    glow: "group-hover:shadow-[0_0_24px_rgba(139,0,0,0.12)]",
    valueColor: "text-spider-crimson",
  },
} as const;

export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  loading,
  accent = "orange",
}: StatCardProps) {
  const a = accentMap[accent];

  return (
    <div
      className={`glass-card web-corners group relative flex flex-col gap-4 overflow-hidden p-6 transition-all ${a.border} ${a.glow}`}
    >
      {/* Corner web decoration — brightens on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-2 transition-opacity duration-300 opacity-[0.12] group-hover:opacity-[0.3]"
      >
        <WebStructure type="corner" size={80} opacity={0.7} />
      </div>

      <div className="relative flex items-start justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-spider-silver/75">
          {label}
        </p>
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${a.iconBg}`}
        >
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <div className="flex items-baseline gap-2">
        {loading ? (
          <div className="h-8 w-16 animate-pulse rounded bg-[#1A1A1A]" />
        ) : (
          <span
            className={`relative font-heading text-3xl tabular-nums leading-none ${a.valueColor}`}
          >
            {value}
          </span>
        )}
      </div>

      {hint && !loading && (
        <p className="relative text-xs leading-relaxed text-spider-silver/65">
          {hint}
        </p>
      )}
    </div>
  );
}
