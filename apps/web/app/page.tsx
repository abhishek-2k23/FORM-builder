import { SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import {
  ArrowRight,
  CheckCircle2,
  Workflow,
  Zap,
  Eye,
  GitBranch,
  BarChart3,
  Plug,
  Play,
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { NodeDot } from "@/components/verse/icons";
import { TechSuitEmblem } from "@/components/verse/tech-emblem";
import {
  WebShooterPose,
  HangingPose,
  CrawlingPose,
  SwingingPose,
  StandingPose,
} from "@/components/verse/spiderman-characters";
import { WebStructure } from "@/components/verse/web-structures";
import { NetworkStatus } from "@/components/verse/network-status";

const highlights = [
  "Free tier — 100 responses/month",
  "Launch in under 60 seconds",
  "No credit card required",
];

const features = [
  {
    icon: Workflow,
    title: "Connect Every Node",
    description:
      "Drag, drop, and connect form fields in a web-based canvas. Watch your workflow network grow with every connection.",
  },
  {
    icon: GitBranch,
    title: "Spin Intelligent Workflows",
    description:
      "Create conditional branches that adapt in real-time. Every logic path is a strand in your intelligent web.",
  },
  {
    icon: Eye,
    title: "Track Every Signal",
    description:
      "Watch responses flow through your web live. Every submission lights up a node in your connected network.",
  },
  {
    icon: Zap,
    title: "Build Faster Through The Web",
    description:
      "Connect forms to actions. When a response arrives, trigger webhooks, emails, or downstream workflows instantly.",
  },
  {
    icon: BarChart3,
    title: "Your Network. Your Control.",
    description:
      "Analytics that reveal patterns across your entire form network. See the big picture from your command center.",
  },
  {
    icon: Plug,
    title: "Integration Portals",
    description:
      "Open connections to Slack, Notion, Sheets, Zapier, and hundreds more. Your web extends everywhere.",
  },
];

const steps = [
  {
    num: "01",
    title: "Spin Your Form",
    description:
      "Start with a blank canvas or choose a template. Drag fields, set logic, and watch your form materialize as a connected node in the web.",
  },
  {
    num: "02",
    title: "Connect The Strands",
    description:
      "Link forms together with workflow strands. Add automation triggers, conditional paths, and integration portals to your network.",
  },
  {
    num: "03",
    title: "Trap Responses",
    description:
      "Publish to the web. Watch responses get captured in real-time with powerful analytics flowing through every strand.",
  },
];

export default async function HomePage() {
  const { userId } = await auth();
  const isSignedIn = !!userId;

  return (
    <div className="relative min-h-screen text-foreground">
      <Header />
      <NetworkStatus />

      {/* ==================================================================
          HERO — Cinematic spider-tech header with web-shooter Spider-Man
          ================================================================== */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        {/* Giant full-screen white web background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 animate-web-spread-in"
        >
          <WebStructure type="full-screen" opacity={0.18} glowIntensity={0.5} />
        </div>

        {/* Floating accent nodes */}
        <div className="absolute left-[8%] top-[28%] animate-node-float opacity-30">
          <NodeDot size={14} color="#D90429" />
        </div>
        <div
          className="absolute right-[20%] top-[18%] animate-node-float opacity-25"
          style={{ animationDelay: "1s" }}
        >
          <NodeDot size={10} color="#FF1744" />
        </div>
        <div
          className="absolute left-[25%] bottom-[22%] animate-node-float opacity-25"
          style={{ animationDelay: "2s" }}
        >
          <NodeDot size={9} color="#D90429" />
        </div>

        <div className="relative z-10 container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left — copy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-spider-red to-transparent" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-spider-red">
                The Web That Powers Your Forms
              </span>
            </div>

            <h1 className="font-heading text-5xl font-black leading-[1.0] tracking-wide md:text-6xl lg:text-[5.5rem]">
              <span className="block text-spider-white">SPIN SMARTER</span>
              <span className="block text-spider-red text-glow-red">WORKFLOWS.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-spider-silver/70 md:text-lg">
              Create immersive forms, connect workflows visually, track responses
              instantly, and automate everything through a powerful web-connected
              experience.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {isSignedIn ? (
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="btn-verse gap-2 bg-spider-red font-heading text-base uppercase tracking-[0.15em] text-white shadow-[0_0_30px_rgba(217,4,41,0.4)] hover:bg-spider-redGlow hover:shadow-[0_0_50px_rgba(217,4,41,0.6)]"
                  >
                    Start Building
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    className="btn-verse gap-2 bg-spider-red font-heading text-base uppercase tracking-[0.15em] text-white shadow-[0_0_30px_rgba(217,4,41,0.4)] hover:bg-spider-redGlow hover:shadow-[0_0_50px_rgba(217,4,41,0.6)]"
                  >
                    Start Building
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </SignUpButton>
              )}

              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-[#282828] bg-transparent font-heading text-base uppercase tracking-[0.15em] text-spider-silver hover:border-spider-red hover:text-spider-red hover:shadow-[0_0_20px_rgba(217,4,41,0.2)]"
              >
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-spider-silver/50"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-spider-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Spider-Man visual composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative h-[480px] w-full max-w-[480px]">
              {/* Radial web framing the emblem */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60">
                <WebStructure type="radial" size={340} opacity={0.35} />
              </div>

              {/* Central tech-suit emblem */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <TechSuitEmblem size={140} animate />
              </div>

              {/* Form cards orbiting the emblem */}
              <div className="absolute left-[6%] top-[10%] animate-node-float">
                <FormCardMini title="Contact Form" />
              </div>
              <div
                className="absolute right-[18%] top-[18%] animate-node-float"
                style={{ animationDelay: "1.5s" }}
              >
                <FormCardMini title="Survey" />
              </div>
              <div
                className="absolute left-[3%] bottom-[22%] animate-node-float"
                style={{ animationDelay: "0.8s" }}
              >
                <FormCardMini title="Registration" />
              </div>
              <div
                className="absolute left-[28%] bottom-[6%] animate-node-float"
                style={{ animationDelay: "2.2s" }}
              >
                <FormCardMini title="Feedback" />
              </div>

              {/* SVG connecting white strands from cards to emblem */}
              <svg
                className="absolute inset-0 h-full w-full pointer-events-none"
                viewBox="0 0 480 480"
                aria-hidden
              >
                <defs>
                  <filter
                    id="hero-strand-glow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="2" />
                  </filter>
                </defs>
                <g
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                  fill="none"
                  filter="url(#hero-strand-glow)"
                  strokeLinecap="round"
                >
                  <path
                    d="M 70 75 C 130 130 180 180 240 240"
                    className="strand-draw strand-draw-staggered-1"
                  />
                  <path
                    d="M 380 110 C 330 160 290 200 240 240"
                    className="strand-draw strand-draw-staggered-2"
                  />
                  <path
                    d="M 50 360 C 110 320 180 280 240 240"
                    className="strand-draw strand-draw-staggered-3"
                  />
                  <path
                    d="M 200 440 C 215 380 230 310 240 240"
                    className="strand-draw strand-draw-staggered-4"
                  />
                </g>
              </svg>

              {/* Web-shooter Spider-Man on right edge */}
              <div className="absolute -right-2 top-[40%] -translate-y-1/2">
                <WebShooterPose size={170} animate />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          DIVIDER
          ================================================================== */}
      <div className="container mx-auto px-6">
        <div className="web-divider" />
      </div>

      {/* ==================================================================
          PROBLEM — Hanging Spider-Man on disconnected web threads
          ================================================================== */}
      <section className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — Hanging Spider-Man visual */}
          <div className="relative flex h-[400px] items-start justify-center">
            <WebStructure
              type="hanging-thread"
              threadLength={120}
              className="absolute top-0 left-1/2 -translate-x-1/2"
              glowIntensity={0.7}
            />
            <div className="absolute top-[80px] left-1/2 -translate-x-1/2">
              <HangingPose size={200} animate />
            </div>

            {/* Disconnected (broken) web fragments */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 400 400"
              aria-hidden
            >
              <g stroke="#FFFFFF" strokeWidth="0.8" opacity="0.25" fill="none">
                <path d="M 30 80 L 110 100" strokeDasharray="4 8" />
                <path d="M 350 90 L 280 110" strokeDasharray="4 8" />
                <path d="M 50 320 L 130 290" strokeDasharray="4 8" />
                <path d="M 380 350 L 290 310" strokeDasharray="4 8" />
              </g>
            </svg>
          </div>

          {/* Right — Problem copy */}
          <div className="flex flex-col gap-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-spider-silver/60">
              The Problem
            </p>
            <h2 className="font-heading text-3xl tracking-wide md:text-5xl text-spider-white">
              TRADITIONAL FORMS ARE{" "}
              <span className="text-spider-red text-glow-red">DISCONNECTED.</span>
            </h2>
            <p className="text-base leading-relaxed text-spider-silver/60 md:text-lg">
              Static forms sit alone. No connections. No intelligence. No automation.
              You build one, then another, then another — each isolated, each
              requiring manual work to extract value. Your data lives in silos,
              hanging by a thread.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================
          SOLUTION — Swinging Spider-Man with connecting strands
          ================================================================== */}
      <section className="relative z-10 container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — Solution copy */}
          <div className="order-2 flex flex-col gap-5 lg:order-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-spider-red">
              The Solution
            </p>
            <h2 className="font-heading text-3xl tracking-wide md:text-5xl text-spider-white">
              EVERY FORM CONNECTED{" "}
              <span className="text-spider-red text-glow-red">THROUGH THE WEB.</span>
            </h2>
            <p className="text-base leading-relaxed text-spider-silver/60 md:text-lg">
              WebForm Verse connects every form into a living network. Responses
              trigger automations. Forms link to workflows. Analytics span your
              entire web. Everything is connected through glowing strands of
              intelligence.
            </p>
          </div>

          {/* Right — Swinging Spider-Man visual */}
          <div className="order-1 relative flex h-[420px] items-center justify-center lg:order-2">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 400 420"
              aria-hidden
            >
              <defs>
                <filter
                  id="solution-glow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="2" />
                </filter>
              </defs>
              <g
                stroke="#FFFFFF"
                strokeWidth="1.3"
                fill="none"
                filter="url(#solution-glow)"
                strokeLinecap="round"
              >
                <path
                  d="M 60 100 C 140 140 180 220 200 300"
                  className="strand-draw strand-draw-staggered-1"
                />
                <path
                  d="M 340 110 C 280 170 240 240 220 300"
                  className="strand-draw strand-draw-staggered-2"
                />
                <path
                  d="M 80 340 C 140 320 180 310 200 300"
                  className="strand-draw strand-draw-staggered-3"
                />
              </g>
            </svg>

            <div className="relative">
              <SwingingPose size={240} animate />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          DIVIDER
          ================================================================== */}
      <div className="container mx-auto px-6">
        <div className="web-divider" />
      </div>

      {/* ==================================================================
          FEATURES — web-connected grid with crawling Spider-Man
          ================================================================== */}
      <section
        id="features"
        className="relative z-10 container mx-auto px-6 py-24"
      >
        <div className="mb-14 grid grid-cols-1 items-end gap-6 md:grid-cols-2">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-spider-red">
              Capabilities
            </p>
            <h2 className="font-heading text-3xl tracking-wide md:text-5xl text-spider-white">
              EVERY NODE IN YOUR <span className="text-spider-red">WEB.</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-spider-silver/60 md:text-right md:text-base">
            Six powerful modules. Infinite connections. Each one a node in your
            intelligent workflow network.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, idx) => (
            <article
              key={title}
              className="node-card web-corners group relative flex flex-col gap-4 overflow-hidden p-6"
            >
              {/* Corner web decoration */}
              <div className="pointer-events-none absolute -right-2 -top-2 transition-opacity duration-300 opacity-30 group-hover:opacity-60">
                <WebStructure type="corner" size={90} opacity={0.7} />
              </div>

              <div className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-spider-red/30 bg-spider-black text-spider-red transition-all group-hover:border-spider-red group-hover:shadow-[0_0_20px_rgba(217,4,41,0.3)]">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="font-heading text-lg tracking-wide text-spider-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-spider-silver/60">
                {description}
              </p>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-6 right-6 h-px opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-r from-transparent via-spider-red to-transparent" />

              {/* Index badge */}
              <span className="absolute right-6 top-6 font-heading text-xs tracking-[0.2em] text-spider-silver/30">
                0{idx + 1}
              </span>
            </article>
          ))}
        </div>

        {/* Crawling Spider-Man between rows */}
        <div className="pointer-events-none mt-12 flex items-center justify-center opacity-90">
          <CrawlingPose size={170} animate />
        </div>
      </section>

      {/* ==================================================================
          HOW IT WORKS — three steps with connecting strands
          ================================================================== */}
      <section
        id="how-it-works"
        className="relative z-10 border-y border-[#1A1A1A] bg-spider-black/60 px-6 py-24 backdrop-blur-sm overflow-hidden"
      >
        {/* Background full-screen web at low opacity */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-200px] top-1/2 -translate-y-1/2 opacity-[0.05]"
        >
          <WebStructure type="radial" size={700} opacity={0.4} />
        </div>

        <div className="relative container mx-auto">
          <div className="mb-16 text-center">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-spider-red">
              How It Works
            </p>
            <h2 className="font-heading text-3xl tracking-wide md:text-5xl text-spider-white">
              THREE STEPS TO YOUR{" "}
              <span className="text-spider-red text-glow-red">NETWORK.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connecting strand SVG behind the steps */}
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <filter
                  id="steps-glow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="1.5" />
                </filter>
              </defs>
              <path
                d="M 200 60 C 350 30 450 90 600 60 C 750 30 850 90 1000 60"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                fill="none"
                filter="url(#steps-glow)"
                opacity="0.45"
                className="strand-draw"
              />
            </svg>

            <ol className="relative grid gap-10 md:grid-cols-3">
              {steps.map(({ num, title, description }, i) => (
                <li
                  key={num}
                  className="relative flex flex-col gap-4 border-l border-[#1A1A1A] pl-6"
                >
                  <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-spider-red bg-spider-black">
                    <span className="h-2 w-2 rounded-full bg-spider-red shadow-[0_0_8px_#D90429]" />
                  </span>
                  <span className="font-heading text-5xl text-spider-red/20 leading-none">
                    {num}
                  </span>
                  <h3 className="font-heading text-xl tracking-wide text-spider-white">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-spider-silver/60">
                    {description}
                  </p>
                  {i < steps.length - 1 && (
                    <NodeDot
                      size={10}
                      color="#D90429"
                      className="absolute -bottom-6 left-[-5px] opacity-40"
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ==================================================================
          DEMO CTA — Standing Spider-Man + radial web background
          ================================================================== */}
      <section id="demo" className="relative z-10 container mx-auto px-6 py-24">
        <div className="glass-card web-corners relative overflow-hidden p-10 md:p-16">
          {/* Radial web background */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 opacity-[0.08]"
          >
            <WebStructure type="radial" size={620} opacity={0.6} />
          </div>
          {/* Corner webs */}
          <div className="pointer-events-none absolute left-0 top-0">
            <WebStructure type="corner" size={140} opacity={0.25} />
          </div>

          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-spider-red">
                Live Experience
              </p>
              <h2 className="font-heading text-3xl tracking-wide leading-tight md:text-5xl text-spider-white">
                SEE THE
                <span className="text-spider-red text-glow-red"> WEB</span> IN ACTION.
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-spider-silver/60 md:text-base">
                Experience the connected form builder firsthand. Create a form,
                connect it to a workflow, and watch responses get trapped in your
                web in real-time.
              </p>
              <div>
                <Link href="/naruto">
                  <Button
                    size="lg"
                    className="btn-verse gap-2 bg-spider-red font-heading text-base uppercase tracking-[0.15em] text-white shadow-[0_0_30px_rgba(217,4,41,0.4)]"
                  >
                    Try the Demo
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-full bg-spider-red/10 blur-3xl animate-web-pulse" />
                <StandingPose size={260} animate />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          FINAL CTA
          ================================================================== */}
      <section className="relative z-10 container mx-auto px-6 pb-24 pt-8 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-4 inline-block">
            <TechSuitEmblem size={64} animate />
          </div>
          <h2 className="font-heading text-4xl tracking-wide md:text-5xl text-spider-red text-glow-red">
            BUILD YOUR WORKFLOW NETWORK.
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-spider-silver/50">
            Start spinning your first form today
          </p>
          <div className="mt-6 flex justify-center">
            {isSignedIn ? (
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="btn-verse gap-2 bg-spider-red font-heading text-base uppercase tracking-[0.15em] text-white shadow-[0_0_40px_rgba(217,4,41,0.5)]"
                >
                  Open Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <SignUpButton mode="modal">
                <Button
                  size="lg"
                  className="btn-verse gap-2 bg-spider-red font-heading text-base uppercase tracking-[0.15em] text-white shadow-[0_0_40px_rgba(217,4,41,0.5)]"
                >
                  Start Building Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </SignUpButton>
            )}
          </div>
        </div>
      </section>

      {/* ==================================================================
          FOOTER
          ================================================================== */}
      <footer className="relative z-10 border-t border-[#1A1A1A] bg-spider-black/80 px-6 py-8 backdrop-blur">
        {/* Bottom corner webs */}
        <div className="pointer-events-none absolute bottom-0 left-0 opacity-[0.18]">
          <WebStructure type="corner" size={140} opacity={0.6} />
        </div>
        <div
          className="pointer-events-none absolute bottom-0 right-0 opacity-[0.18]"
          style={{ transform: "scaleX(-1)" }}
        >
          <WebStructure type="corner" size={140} opacity={0.6} />
        </div>

        <div className="relative container mx-auto flex flex-col items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-spider-silver/50 md:flex-row">
          <div className="flex items-center gap-3">
            <TechSuitEmblem size={22} animate={false} />
            <span className="font-heading tracking-[0.25em] text-spider-red">
              WEBFORM VERSE
            </span>
          </div>
          <p>&copy; {new Date().getFullYear()} WebForm Verse</p>
          <nav className="flex gap-5">
            <a href="#" className="hover:text-spider-red transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-spider-red transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-spider-red transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

/* Mini form card for the hero visual */
function FormCardMini({ title }: { title: string }) {
  return (
    <div className="rounded-lg border border-spider-red/25 bg-spider-black/90 px-3 py-2 backdrop-blur-xl text-[10px] font-medium tracking-wide text-spider-silver/85 shadow-[0_0_15px_rgba(217,4,41,0.12)]">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-spider-red shadow-[0_0_6px_#D90429]" />
        {title}
      </div>
    </div>
  );
}
