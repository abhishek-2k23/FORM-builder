"use client";

import { useEffect, useState } from "react";
import { Wifi, WifiOff } from "lucide-react";

/**
 * Floating network status indicator.
 */
export function NetworkStatus() {
  const [online, setOnline] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const goOnline = () => {
      setOnline(true);
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    };
    const goOffline = () => {
      setOnline(false);
      setShow(true);
    };

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-[100] flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium backdrop-blur-xl transition-all ${
        online
          ? "border-spider-red/30 bg-spider-surface/90 text-spider-red shadow-[0_0_15px_rgba(217,4,41,0.1)]"
          : "border-spider-crimson/40 bg-spider-surface/90 text-spider-crimson shadow-[0_0_15px_rgba(139,0,0,0.1)]"
      }`}
    >
      {online ? (
        <>
          <Wifi className="h-3.5 w-3.5" />
          <span>Connected to the Web</span>
        </>
      ) : (
        <>
          <WifiOff className="h-3.5 w-3.5" />
          <span>Connection lost — reconnecting...</span>
        </>
      )}
    </div>
  );
}
