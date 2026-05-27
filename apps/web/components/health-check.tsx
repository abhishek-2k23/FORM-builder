"use client";

import { trpc } from "@/lib/trpc";

/**
 * Smoke test component that verifies the apps/web -> apps/server tRPC link.
 * Renders nothing in production. Drop it anywhere during dev to confirm wiring.
 */
export function HealthCheck() {
  const { data, error, isLoading } = trpc.health.check.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className="rounded-md border border-spider-silver/20 bg-spider-black/60 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-spider-silver/70">
        API: connecting...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-md border border-spider-red/40 bg-spider-black/80 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-spider-red">
        API: {error.message}
      </div>
    );
  }

  return (
    <div className="rounded-md border border-emerald-500/40 bg-spider-black/80 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-emerald-400">
      API: {data?.status} · uptime {data?.uptime}s
    </div>
  );
}
