import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Header } from "@/components/header";
import { WebVerseIcon } from "@/components/verse/icons";
import { ExploreGrid } from "@/app/(dashboard)/dashboard/explore/_components/explore-grid";

export const metadata: Metadata = {
  title: "Explore — WebForm Verse",
  description:
    "Browse public form nodes created by builders across the WebVerse.",
};

export default function PublicExplorePage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-16 text-center md:pt-40 md:pb-20">
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mx-auto mb-6 w-14 animate-web-pulse">
            <WebVerseIcon size={56} />
          </div>

          <p className="mb-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-verse-red">
            <Compass className="h-3 w-3" />
            Explore The WebVerse
          </p>

          <h1 className="font-heading text-4xl font-black leading-[1.05] tracking-tight md:text-5xl">
            Form nodes from across<br />
            <span className="bg-gradient-to-r from-verse-red via-verse-purple to-verse-blue bg-clip-text text-transparent text-glow-red">
              the multiverse.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Public form nodes created by builders everywhere. Find
            inspiration, contribute responses, or build your own.
          </p>

          <div className="mx-auto mt-6 w-32 web-divider" />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/dashboard"
              className="btn-verse flex h-10 items-center gap-2 rounded-lg bg-gradient-to-r from-verse-red to-verse-redHover px-5 font-heading text-[11px] uppercase tracking-[0.12em] text-white shadow-[0_0_20px_rgba(255,23,68,0.3)] hover:shadow-[0_0_30px_rgba(255,23,68,0.4)]"
            >
              Create your own form
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <ExploreGrid />
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#24243A]/60 bg-verse-midnight/60 px-6 py-8 backdrop-blur">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3">
            <WebVerseIcon size={20} />
            <span className="font-heading font-bold tracking-[0.2em] text-verse-red">
              WEBFORM VERSE
            </span>
          </div>
          <p>© {new Date().getFullYear()} WebForm Verse</p>
        </div>
      </footer>
    </div>
  );
}
