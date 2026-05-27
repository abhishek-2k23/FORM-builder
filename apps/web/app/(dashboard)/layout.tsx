import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { DashboardShell } from "./_components/shell";

/**
 * (dashboard) route group — protected.
 * Anyone hitting /dashboard, /dashboard/forms etc. without being signed
 * in is bounced to the homepage.
 */

// Dashboard pages are per-user and rely on tRPC client hooks running inside
// the React Query / tRPC providers. Force dynamic rendering so Next doesn't
// try to statically prerender them at build time (which would call
// useContext on a null provider tree).
export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (!userId) {
    redirect("/");
  }

  return <DashboardShell>{children}</DashboardShell>;
}
