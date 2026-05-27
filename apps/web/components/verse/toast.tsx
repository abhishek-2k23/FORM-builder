"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { CheckCircle2, AlertTriangle, X } from "lucide-react";

type ToastVariant = "success" | "error";

interface Toast {
  id: string;
  variant: ToastVariant;
  title: string;
  message?: string;
}

interface ToastContextValue {
  push: (t: Omit<Toast, "id">) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const push = useCallback(
    (t: Omit<Toast, "id">) => {
      const id = Math.random().toString(36).slice(2);
      setToasts((prev) => [...prev, { ...t, id }]);
      window.setTimeout(() => remove(id), 4000);
    },
    [remove],
  );

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="pointer-events-none fixed bottom-4 right-4 z-[100] flex w-full max-w-sm flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={`pointer-events-auto flex items-start gap-3 rounded-lg border bg-spider-surface/95 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl animate-[toastIn_0.3s_cubic-bezier(0.4,0,0.2,1)] ${
              t.variant === "success"
                ? "border-spider-red/40 shadow-[0_0_20px_rgba(217,4,41,0.1)]"
                : "border-spider-crimson/40 shadow-[0_0_20px_rgba(139,0,0,0.1)]"
            }`}
          >
            {t.variant === "success" ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-spider-red" />
            ) : (
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-spider-crimson" />
            )}
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-spider-white">
                {t.title}
              </p>
              {t.message && (
                <p className="mt-1 text-[11px] leading-relaxed text-spider-silver/60">
                  {t.message}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => remove(t.id)}
              className="text-spider-silver/40 hover:text-spider-white transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes toastIn {
          from { opacity: 0; transform: translateX(20px) scale(0.95); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx;
}
