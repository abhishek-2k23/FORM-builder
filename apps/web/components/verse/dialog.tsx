"use client";

import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
  width?: "sm" | "md" | "lg";
}

const widthMap = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

/**
 * Spider-tech themed modal — black metallic glass panel with red accents.
 */
export function Dialog({
  open,
  onClose,
  title,
  subtitle,
  children,
  width = "md",
}: DialogProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm animate-[fadeIn_0.2s_ease]"
      />

      <div
        className={`glass-card relative z-10 w-full ${widthMap[width]} animate-[slideUp_0.3s_cubic-bezier(0.4,0,0.2,1)]`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg text-spider-silver/50 transition-colors hover:bg-[#1A1A1A] hover:text-spider-red"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-6 md:p-8">
          <div className="mb-6">
            {subtitle && (
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-spider-red">
                {subtitle}
              </p>
            )}
            <h2
              id="dialog-title"
              className="font-heading text-2xl tracking-wide text-spider-white"
            >
              {title}
            </h2>
          </div>

          {children}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

/**
 * Spider-tech text input.
 */
export function VerseInput({
  label,
  hint,
  error,
  className = "",
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-spider-silver/50">
        {label}
      </span>
      <input
        {...rest}
        className={`h-11 rounded-lg border border-[#1A1A1A] bg-spider-black/80 px-4 text-sm text-spider-white placeholder:text-spider-silver/30 transition-all focus:border-spider-red focus:outline-none focus:ring-2 focus:ring-spider-red/20 focus:shadow-[0_0_20px_rgba(217,4,41,0.1)] ${
          error ? "border-spider-red/60" : ""
        } ${className}`}
      />
      {error ? (
        <span className="text-xs text-spider-red">{error}</span>
      ) : hint ? (
        <span className="text-[11px] text-spider-silver/40">{hint}</span>
      ) : null}
    </label>
  );
}

/**
 * Spider-tech textarea.
 */
export function VerseTextarea({
  label,
  hint,
  error,
  className = "",
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  hint?: string;
  error?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-spider-silver/50">
        {label}
      </span>
      <textarea
        {...rest}
        className={`min-h-[88px] rounded-lg border border-[#1A1A1A] bg-spider-black/80 px-4 py-3 text-sm leading-relaxed text-spider-white placeholder:text-spider-silver/30 transition-all focus:border-spider-red focus:outline-none focus:ring-2 focus:ring-spider-red/20 focus:shadow-[0_0_20px_rgba(217,4,41,0.1)] ${
          error ? "border-spider-red/60" : ""
        } ${className}`}
      />
      {error ? (
        <span className="text-xs text-spider-red">{error}</span>
      ) : hint ? (
        <span className="text-[11px] text-spider-silver/40">{hint}</span>
      ) : null}
    </label>
  );
}

// Backward compat exports
export { VerseInput as KonohaInput, VerseTextarea as KonohaTextarea };
