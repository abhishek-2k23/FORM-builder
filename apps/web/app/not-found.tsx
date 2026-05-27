import Link from "next/link";

/**
 * App-level 404. Kept lean and provider-free so it can render even
 * when upstream contexts (Clerk, tRPC) aren't available.
 */
export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-spider-red">
          404 · Lost in the web
        </p>
        <h1 className="font-heading text-4xl font-black tracking-wide text-spider-white md:text-6xl">
          PAGE NOT FOUND
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-spider-silver/60 md:text-base">
          That strand of the web has snapped. Head back to base and try a
          different route.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-spider-red px-6 font-heading text-xs uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(217,4,41,0.4)] transition-colors hover:bg-spider-redGlow"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
