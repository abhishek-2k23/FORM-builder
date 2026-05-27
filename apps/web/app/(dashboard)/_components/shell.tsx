"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { Bell, Search, Plus, Menu } from "lucide-react";
import { Sidebar } from "./sidebar";

/**
 * Dashboard shell — spider-tech command center layout.
 */
export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((seg, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    return { label: seg.replace(/-/g, " "), href, last: i === segments.length - 1 };
  });

  return (
    <div className="flex min-h-screen">
      <Sidebar mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}

      <div className="flex min-h-screen flex-1 flex-col lg:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-[#1A1A1A] bg-spider-black/90 px-4 backdrop-blur-xl md:px-6">
          <button
            type="button"
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-[#1A1A1A] text-spider-silver/50 hover:text-spider-red"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="hidden flex-1 items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-spider-silver/50 sm:flex"
          >
            <Link href="/dashboard" className="hover:text-spider-red transition-colors">
              Command Center
            </Link>
            {crumbs.slice(1).map((c) => (
              <span key={c.href} className="flex items-center gap-2">
                <span className="text-[#282828]">/</span>
                {c.last ? (
                  <span className="text-spider-red">{c.label}</span>
                ) : (
                  <Link href={c.href} className="hover:text-spider-red transition-colors">
                    {c.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          <div className="flex-1 sm:hidden" />

          {/* Search */}
          <div className="relative hidden w-72 md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-spider-silver/40" />
            <input
              type="text"
              placeholder="Search the web..."
              className="h-9 w-full rounded-lg border border-[#1A1A1A] bg-spider-dark/80 pl-9 pr-3 text-xs tracking-wide text-spider-white placeholder:text-spider-silver/30 transition-all focus:border-spider-red focus:outline-none focus:ring-2 focus:ring-spider-red/20 focus:shadow-[0_0_20px_rgba(217,4,41,0.1)]"
            />
          </div>

          {/* New form CTA */}
          <Link
            href="/dashboard/forms?new=1"
            className="hidden h-9 items-center gap-2 rounded-lg bg-spider-red px-4 font-heading text-[11px] uppercase tracking-[0.15em] text-white shadow-[0_0_20px_rgba(217,4,41,0.25)] transition-shadow hover:shadow-[0_0_30px_rgba(217,4,41,0.4)] sm:flex"
          >
            <Plus className="h-3.5 w-3.5" />
            New Form
          </Link>

          {/* Bell */}
          <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[#1A1A1A] text-spider-silver/50 transition-colors hover:text-spider-red hover:border-spider-red/30"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-spider-red shadow-[0_0_6px_#D90429]" />
          </button>

          {/* Avatar */}
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-8 w-8 ring-2 ring-spider-red/30 hover:ring-spider-red",
              },
            }}
          />
        </header>

        {/* Content */}
        <main className="flex-1 px-4 py-6 md:px-8 md:py-10">{children}</main>
      </div>
    </div>
  );
}

export { DashboardShell as default };
