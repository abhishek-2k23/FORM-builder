"use client";

import Link from "next/link";
import { useAuth, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechSuitEmblem } from "@/components/verse/tech-emblem";

export function Header() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1A1A1A]/80 bg-spider-black/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-spider-red/30 bg-spider-black transition-all group-hover:border-spider-red group-hover:shadow-[0_0_20px_rgba(217,4,41,0.4)]">
            <TechSuitEmblem size={26} animate />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading text-base font-bold tracking-[0.2em] text-spider-red">
              WEBFORM
            </span>
            <span className="text-[8px] tracking-[0.3em] text-spider-silver/60">
              VERSE
            </span>
          </div>
        </a>

        {/* Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/explore"
            className="neon-underline text-xs font-medium uppercase tracking-[0.18em] text-spider-silver/70 transition-colors hover:text-spider-red"
          >
            Explore
          </Link>
          <a
            href="/#features"
            className="neon-underline text-xs font-medium uppercase tracking-[0.18em] text-spider-silver/70 transition-colors hover:text-spider-red"
          >
            Features
          </a>
          <a
            href="/#how-it-works"
            className="neon-underline text-xs font-medium uppercase tracking-[0.18em] text-spider-silver/70 transition-colors hover:text-spider-red"
          >
            How It Works
          </a>
          <a
            href="/#demo"
            className="neon-underline text-xs font-medium uppercase tracking-[0.18em] text-spider-silver/70 transition-colors hover:text-spider-red"
          >
            Demo
          </a>
        </nav>

        {/* Auth */}
        <div className="flex min-w-[140px] items-center justify-end gap-3">
          {isLoaded &&
            (isSignedIn ? (
              <>
                <Link href="/dashboard">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-xs uppercase tracking-[0.12em] text-spider-silver/70 hover:text-spider-red"
                  >
                    <LayoutDashboard className="h-3.5 w-3.5" />
                    Dashboard
                  </Button>
                </Link>
                <UserButton appearance={{ elements: { avatarBox: "h-8 w-8 ring-2 ring-spider-red/30 hover:ring-spider-red" } }} />
              </>
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm" className="text-xs uppercase tracking-[0.12em] text-spider-silver/70 hover:text-spider-red">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button
                    size="sm"
                    className="btn-verse font-heading text-xs uppercase tracking-[0.15em] bg-spider-red text-white shadow-[0_0_20px_rgba(217,4,41,0.3)] hover:bg-spider-redGlow"
                  >
                    Get Started
                  </Button>
                </SignUpButton>
              </>
            ))}
        </div>
      </div>
    </header>
  );
}
