"use client";

import { useEffect, useRef, useCallback } from "react";
import { Calendar } from "lucide-react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/mjc-growth/strategy-call";

function loadCalendlyScript(): Promise<void> {
  return new Promise((resolve) => {
    if (document.getElementById("calendly-script")) {
      resolve();
      return;
    }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
}

export default function Booking() {
  // useRef instead of module-level var — scoped to this component instance
  const pendingOpenRef = useRef(false);

  // Load script lazily on interaction only — not on page load
  const handleBookingClick = useCallback(async () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      return;
    }
    if (pendingOpenRef.current) return;
    pendingOpenRef.current = true;
    try {
      await loadCalendlyScript();
      const cal = (window as Window & { Calendly?: { initPopupWidget: (opts: { url: string }) => void } }).Calendly;
      if (cal) {
        cal.initPopupWidget({ url: CALENDLY_URL });
      }
    } finally {
      pendingOpenRef.current = false;
    }
  }, []);

  // Preload script after 3s idle — improves click-to-open latency
  // but doesn't block page load
  useEffect(() => {
    const t = setTimeout(() => {
      if (!document.getElementById("calendly-script")) {
        loadCalendlyScript();
      }
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="booking" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="text-section font-bold text-fg mb-6"
            >
              Scale without the chaos.
            </h2>
            <p className="text-muted leading-relaxed">
              A focused 45-minute conversation about your growth goals, current
              constraints, and what a high-impact engagement could look like.
              No obligation.
            </p>
          </div>
          <div className="flex flex-col gap-8 sm:pt-4">
            <div className="space-y-3 text-sm text-muted-2">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-cta" />
                45 minutes via video call
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-cta" />
                You pick the time
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-cta" />
                No pitch deck, no hard sell
              </div>
            </div>
            <button
              onClick={handleBookingClick}
              className="inline-flex items-center gap-2.5 bg-cta hover:bg-cta-hover text-white font-semibold px-8 py-4 rounded-sm transition-colors duration-200 text-[0.9375rem] cursor-pointer self-start focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
            >
              <Calendar size={16} strokeWidth={2} />
              Book a Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
