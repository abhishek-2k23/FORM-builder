import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "@/providers";
import { VerseAtmosphere } from "@/components/verse/atmosphere";
import "./globals.css";

// The whole app sits behind ClerkProvider and a per-request tRPC provider
// chain. None of these compose with build-time static prerendering, so
// opt the root out of static export. Pages that are genuinely public can
// still cache at the request layer.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "WebForm Verse — Spin Smarter Workflows",
  description:
    "Create immersive forms, connect workflows visually, track responses instantly, and automate everything through a powerful web-connected experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#D90429",
          colorBackground: "#111111",
          colorInputBackground: "#0A0A0A",
          colorText: "#F5F5F5",
          colorTextOnPrimaryBackground: "#FFFFFF",
          colorNeutral: "#888888",
          fontFamily: "Satoshi, Inter, system-ui, sans-serif",
        },
        elements: {
          card: "border border-[#282828] bg-[#111111]",
        },
      }}
    >
      <html lang="en" className="dark">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Anton&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          />
        </head>
        <body className="antialiased">
          <VerseAtmosphere />
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
