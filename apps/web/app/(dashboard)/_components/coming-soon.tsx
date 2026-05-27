import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";
import {
  ItachiSilhouette,
  KakashiSilhouette,
  NarutoSilhouette,
} from "@/components/konoha/characters";

interface ComingSoonProps {
  title: string;
  subtitle: string;
  description: string;
  character?: "itachi" | "kakashi" | "naruto";
}

const charMap = {
  itachi: ItachiSilhouette,
  kakashi: KakashiSilhouette,
  naruto: NarutoSilhouette,
};

/**
 * Themed placeholder for routes still under construction.
 */
export function ComingSoon({
  title,
  subtitle,
  description,
  character = "itachi",
}: ComingSoonProps) {
  const Char = charMap[character];

  return (
    <div className="relative">
      <div className="glass-card relative overflow-hidden p-8 md:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-4 opacity-[0.12]"
        >
          <Char size={320} />
        </div>

        <div className="relative max-w-2xl">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-verse-cyan">
            {subtitle}
          </p>
          <h1 className="font-heading text-3xl font-black md:text-4xl">{title}</h1>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-verse-yellow/30 bg-verse-yellow/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-verse-yellow">
            <Wrench className="h-3 w-3" />
            Under Construction
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>

          <Link
            href="/dashboard"
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-verse-red hover:text-verse-redHover transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Return to Command Center
          </Link>
        </div>
      </div>
    </div>
  );
}
