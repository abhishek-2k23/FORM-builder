"use client";

/**
 * Global error boundary.
 * Sits OUTSIDE the root layout, so it cannot reach ClerkProvider, the
 * tRPC provider, or QueryClientProvider. Keep it dependency-free.
 *
 * https://nextjs.org/docs/app/api-reference/file-conventions/error#global-errortsx
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#f5f5f5",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#D90429",
              marginBottom: 16,
            }}
          >
            System Error
          </p>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              margin: "0 0 12px",
              letterSpacing: "0.02em",
            }}
          >
            Something broke.
          </h1>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "rgba(245,245,245,0.6)",
              margin: "0 0 24px",
            }}
          >
            An unexpected error occurred. Try again, and if it keeps happening
            let us know.
          </p>
          {error.digest ? (
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(245,245,245,0.35)",
                marginBottom: 24,
              }}
            >
              Ref: {error.digest}
            </p>
          ) : null}
          <button
            type="button"
            onClick={reset}
            style={{
              background: "#D90429",
              color: "#fff",
              border: 0,
              padding: "12px 24px",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
