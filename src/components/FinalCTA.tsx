"use client";

import { useEffect, useRef, useCallback } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { DIAGNOSTIC_URL } from "@/lib/site";

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

const points = [
  "Find where your enquiries leak before spending more on leads",
  "A clear, practical view of what happens after someone enquires",
  "No pitch deck, no hard sell",
];

export default function FinalCTA() {
  const pendingOpenRef = useRef(false);

  const handleBookingClick = useCallback(async () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      return;
    }
    if (pendingOpenRef.current) return;
    pendingOpenRef.current = true;
    try {
      await loadCalendlyScript();
      // Fresh reference avoids TS narrowing window.Calendly to `never`
      // after the negative check above.
      const cal = (window as Window & {
        Calendly?: { initPopupWidget: (opts: { url: string }) => void };
      }).Calendly;
      if (cal) {
        cal.initPopupWidget({ url: CALENDLY_URL });
      } else {
        // Widget blocked (ad-blocker / CDN failure) — fall back to the page
        // so the click never silently no-ops.
        window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
      }
    } finally {
      pendingOpenRef.current = false;
    }
  }, []);

  // Preload Calendly after idle so the click-to-open is instant.
  useEffect(() => {
    const t = setTimeout(() => {
      if (!document.getElementById("calendly-script")) {
        loadCalendlyScript();
      }
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-raised p-10 sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-cta/10 blur-[90px]"
          />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.1em] uppercase text-cta">
                Start here
              </span>
              <h2 className="text-section font-bold text-fg mt-3 mb-5">
                Start with the GrowthOS Diagnostic
              </h2>
              <p className="text-muted leading-relaxed">
                See where your current enquiries slip away — then book a call to
                discuss your specific situation.
              </p>
            </div>

            <div className="flex flex-col gap-7 sm:pl-6">
              <ul className="space-y-3 text-sm text-muted-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cta" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={DIAGNOSTIC_URL}
                  className="group inline-flex items-center gap-2.5 bg-cta hover:bg-cta-hover text-white font-semibold px-8 py-4 rounded-sm transition-colors duration-200 text-[0.9375rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
                >
                  Run the Diagnostic
                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
                <button
                  onClick={handleBookingClick}
                  className="inline-flex items-center gap-2 text-muted hover:text-fg text-sm font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
                >
                  <Calendar size={15} strokeWidth={2} />
                  Book a call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
