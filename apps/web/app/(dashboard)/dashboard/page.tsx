"use client";

import Link from "next/link";
import { ScrollText, Inbox, Radio, TrendingUp, Compass, ArrowRight } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { TechSuitEmblem } from "@/components/verse/tech-emblem";
import { WebStructure } from "@/components/verse/web-structures";
import { StatCard } from "../_components/stat-card";
import { FormsList } from "../_components/forms-list";
import { ExploreSuggestions } from "./explore/_components/explore-grid";

interface FormRow {
  id: string;
  status: "draft" | "published" | "closed" | "archived";
}

export default function DashboardHomePage() {
  const { data: me } = trpc.auth.getMe.useQuery();
  const { data: forms, isLoading } = trpc.forms.list.useQuery();

  const formsArr = (forms ?? []) as FormRow[];
  const total = formsArr.length;
  const published = formsArr.filter((f) => f.status === "published").length;
  const drafts = formsArr.filter((f) => f.status === "draft").length;
  const livePercent = total > 0 ? Math.round((published / total) * 100) : 0;

  const hour = new Date().getHours();
  const greeting =
    hour < 5
      ? "Late night session"
      : hour < 12
        ? "Good morning"
        : hour < 17
          ? "Good afternoon"
          : hour < 21
            ? "Evening shift"
            : "Good evening";

  const firstName = me?.fullName?.split(" ")[0] ?? "Builder";

  return (
    <div className="relative">
      {/* Hero band */}
      <section className="relative mb-10 overflow-hidden rounded-xl border border-[#1A1A1A] bg-spider-dark/80 p-6 md:p-10">
        {/* Background radial web */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 hidden opacity-[0.1] md:block"
        >
          <WebStructure type="radial" size={380} opacity={0.7} />
        </div>
        {/* Corner web */}
        <div className="pointer-events-none absolute left-0 top-0 opacity-[0.18]">
          <WebStructure type="corner" size={120} opacity={0.7} />
        </div>

        <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-spider-red">
              {greeting}
            </p>
            <h1 className="font-heading text-4xl leading-tight md:text-5xl text-spider-white">
              COMMAND CENTER
              <span className="block text-spider-red text-glow-red">
                {firstName}.
              </span>
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-spider-silver/60 md:text-base">
              Monitor your active form nodes, track responses flowing through the
              web, and deploy new forms when your network needs them.
            </p>

            <blockquote className="mt-6 border-l-2 border-spider-red/40 pl-4">
              <p className="text-sm italic text-spider-silver/50">
                &ldquo;Every form is a node. Every response is a signal.
                Every connection makes the web stronger.&rdquo;
              </p>
              <footer className="mt-2 text-[10px] uppercase tracking-[0.25em] text-spider-red/60">
                — WebVerse Philosophy
              </footer>
            </blockquote>
          </div>

          {/* Central emblem hub */}
          <div className="hidden items-center justify-center md:flex">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-spider-red/15 blur-3xl" />
              <TechSuitEmblem size={120} animate />
            </div>
          </div>
        </div>
      </section>

      {/* Stat cards */}
      <section className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-base uppercase tracking-[0.15em] text-spider-white">
            Network Overview
          </h2>
          <span className="text-[10px] uppercase tracking-[0.2em] text-spider-silver/40">
            Live data
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total Nodes"
            value={total}
            icon={ScrollText}
            hint="Active form nodes in your web"
            loading={isLoading}
            accent="orange"
          />
          <StatCard
            label="Responses"
            value={0}
            icon={Inbox}
            hint="Signals captured from the network"
            loading={isLoading}
            accent="chakra"
          />
          <StatCard
            label="Live Nodes"
            value={published}
            icon={Radio}
            hint={drafts > 0 ? `${drafts} still in draft` : "All deployed"}
            loading={isLoading}
            accent="gold"
          />
          <StatCard
            label="Deploy Rate"
            value={`${livePercent}%`}
            icon={TrendingUp}
            hint="Nodes active in the web"
            loading={isLoading}
            accent="crimson"
          />
        </div>
      </section>

      {/* Forms list */}
      <section>
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-base uppercase tracking-[0.15em] text-spider-white">
              Active Nodes
            </h2>
            <p className="mt-1 text-xs text-spider-silver/40">
              Form nodes currently in your network
            </p>
          </div>
        </div>

        <FormsList />
      </section>

      {/* Explore suggestions */}
      <section className="mt-12">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="flex items-center gap-2 font-heading text-base uppercase tracking-[0.15em] text-spider-white">
              <Compass className="h-3.5 w-3.5 text-spider-red" />
              From The Web
            </h2>
            <p className="mt-1 text-xs text-spider-silver/40">
              Public form nodes from other builders
            </p>
          </div>
          <Link
            href="/dashboard/explore"
            className="hidden items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-spider-red hover:text-spider-redGlow sm:flex"
          >
            Explore all
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <ExploreSuggestions limit={3} />
      </section>
    </div>
  );
}
