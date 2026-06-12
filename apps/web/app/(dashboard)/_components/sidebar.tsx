"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import {
  LayoutDashboard,
  ScrollText,
  Compass,
  Palette,
  BarChart3,
  LogOut,
  X,
  Zap,
  Settings as SettingsIcon,
} from "lucide-react";
import { TechSuitEmblem } from "@/components/verse/tech-emblem";

interface SidebarProps {
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

const navigation = [
  {
    label: "Command Center",
    href: "/dashboard",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    label: "Form Nodes",
    href: "/dashboard/forms",
    icon: ScrollText,
  },
  {
    label: "Explore",
    href: "/dashboard/explore",
    icon: Compass,
  },
  {
    label: "Themes",
    href: "/dashboard/themes",
    icon: Palette,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: SettingsIcon,
  },
];

export function Sidebar({ mobileOpen, onCloseMobile }: SidebarProps) {
  const pathname = usePathname();
  const { signOut } = useClerk();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[#1A1A1A] bg-spider-black/98 backdrop-blur-xl transition-transform lg:translate-x-0 ${
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Sidebar web edge — vertical white silk thread with node dots */}
      <div className="sidebar-web-edge" aria-hidden />

      {/* Brand */}
      <div className="flex h-16 items-center justify-between border-b border-[#1A1A1A] px-5">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-spider-red/30 bg-spider-black transition-all group-hover:border-spider-red group-hover:shadow-[0_0_20px_rgba(217,4,41,0.4)]">
            <TechSuitEmblem size={22} animate={false} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading text-sm tracking-[0.2em] text-spider-red">
              WEBFORM
            </span>
            <span className="text-[10px] tracking-[0.3em] text-spider-silver/75">
              VERSE
            </span>
          </div>
        </Link>

        <button
          type="button"
          onClick={onCloseMobile}
          className="lg:hidden text-spider-silver/75 hover:text-spider-red"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-6">
        <p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-spider-silver/60">
          Navigation
        </p>

        <ul className="space-y-1.5">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onCloseMobile}
                  className={`group relative flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-all ${
                    active
                      ? "bg-spider-red/10 text-spider-red"
                      : "text-spider-silver/85 hover:bg-[#1A1A1A]/50 hover:text-spider-white"
                  }`}
                >
                  {active && (
                    <span className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-r bg-spider-red shadow-[0_0_8px_#D90429]" />
                  )}
                  <Icon
                    className={`h-4 w-4 transition-colors ${
                      active ? "text-spider-red" : "text-spider-silver/75 group-hover:text-spider-red"
                    }`}
                  />
                  <span className="font-medium tracking-wide">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Status panel */}
      <div className="mx-3 mb-3 rounded-lg border border-[#1A1A1A] bg-spider-dark/80 p-3">
        <div className="flex items-center gap-2">
          <Zap className="h-3.5 w-3.5 text-spider-red" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-spider-red">
            Web Active
          </p>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-spider-silver/75">
          All nodes <span className="text-spider-white">connected</span>.
          Network operational.
        </p>
      </div>

      {/* Sign out */}
      <div className="border-t border-[#1A1A1A] p-3">
        <button
          type="button"
          onClick={() => signOut({ redirectUrl: "/" })}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-spider-silver/75 transition-colors hover:bg-[#1A1A1A]/50 hover:text-spider-red"
        >
          <LogOut className="h-4 w-4" />
          Disconnect
        </button>
      </div>
    </aside>
  );
}
