"use client";

import { useEffect } from "react";
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
  "https://calendly.com/mjc-growth/strategy";

let pendingOpen = false;

function loadCalendlyScript() {
  if (document.getElementById("calendly-script")) return;
  const script = document.createElement("script");
  script.id = "calendly-script";
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.head.appendChild(script);

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://assets.calendly.com/assets/external/widget.css";
  document.head.appendChild(link);
}

function openCalendly() {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    return;
  }
  if (pendingOpen) return;
  pendingOpen = true;
  loadCalendlyScript();
  const check = setInterval(() => {
    if (window.Calendly) {
      clearInterval(check);
      pendingOpen = false;
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  }, 100);
  setTimeout(() => {
    clearInterval(check);
    pendingOpen = false;
  }, 10_000);
}

export default function Booking() {
  useEffect(() => {
    const t = setTimeout(loadCalendlyScript, 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="booking" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="text-section font-bold text-fg mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
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
              onClick={openCalendly}
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
