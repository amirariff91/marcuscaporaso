import { ArrowRight, Phone, Globe, Search, MessageSquare, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import { DIAGNOSTIC_URL } from "@/lib/site";

const sources = [
  { icon: Users, label: "Referrals" },
  { icon: Globe, label: "Website" },
  { icon: Search, label: "Ads & SEO" },
  { icon: Phone, label: "Calls" },
  { icon: MessageSquare, label: "Messages" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Ambient aurora glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-cta/15 blur-[120px] animate-aurora"
      />
      <div className="relative max-w-5xl mx-auto px-6 pb-20 sm:pb-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-14 lg:gap-16">
          {/* Copy */}
          <div className="max-w-xl">
            <Reveal as="div">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-raised/60 px-3 py-1 text-xs font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-cta animate-float" aria-hidden />
                For clinics &amp; service businesses
              </span>
            </Reveal>
            <Reveal as="h1" delay={80} className="text-display font-bold text-fg mt-5 mb-6">
              Turn more of your current enquiries into{" "}
              <span className="text-cta">booked revenue.</span>
            </Reveal>
            <Reveal as="p" delay={160} className="text-base sm:text-lg text-muted leading-relaxed mb-9">
              GrowthOS fixes the operating layer between enquiry, booking,
              follow-up and revenue visibility. Most clinics don&apos;t need more
              leads first — they need to convert more demand.
            </Reveal>
            <Reveal delay={240} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={DIAGNOSTIC_URL}
                className="group relative inline-flex items-center gap-2.5 overflow-hidden bg-cta hover:bg-cta-hover text-white font-semibold px-8 py-4 rounded-sm transition-colors duration-200 text-[0.9375rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-2 w-1/3 -skew-x-12 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:[animation:shimmer_0.9s_ease-out]"
                />
                Run the Diagnostic
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="text-muted hover:text-fg text-sm font-medium transition-colors duration-200 underline underline-offset-4 decoration-muted-2 hover:decoration-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
              >
                Book a call
              </a>
            </Reveal>
          </div>

          {/* Animated enquiry-leak diagram */}
          <Reveal delay={200}>
            <LeakDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LeakDiagram() {
  return (
    <div className="relative rounded-2xl border border-border bg-bg-raised/50 backdrop-blur-sm p-6 sm:p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset]">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-2 mb-6">
        What happens after someone enquires
      </p>

      {/* Demand sources */}
      <div className="flex flex-wrap gap-2 mb-5">
        {sources.map((s) => (
          <span
            key={s.label}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-2.5 py-1 text-xs text-muted"
          >
            <s.icon size={12} strokeWidth={2} className="text-muted-2" />
            {s.label}
          </span>
        ))}
      </div>

      {/* Funnel: flowing demand → split into booked vs leaked */}
      <div className="relative">
        <svg viewBox="0 0 320 140" className="w-full" role="img" aria-label="Enquiries flow into a funnel; most convert to booked revenue while some leak away">
          {/* incoming flows */}
          {[40, 100, 160, 220, 280].map((x, i) => (
            <line
              key={x}
              x1={x}
              y1="4"
              x2="160"
              y2="58"
              className="stroke-cta/40 animate-flow"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
          {/* funnel body */}
          <path
            d="M96 56 L224 56 L184 92 L184 116 L136 116 L136 92 Z"
            className="fill-bg stroke-border"
            strokeWidth="1.5"
          />
          {/* booked outflow (down) */}
          <path d="M160 116 L160 134" className="stroke-cta" strokeWidth="3" strokeLinecap="round" />
          <circle cx="160" cy="134" r="4" className="fill-cta" />
        </svg>

        {/* Leak gap — droplets slipping out the side */}
        <div className="absolute right-3 top-[58%]" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute block h-1.5 w-1.5 rounded-full bg-muted-2/70 animate-leak"
              style={{ left: `${i * 7}px`, animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </div>
      </div>

      {/* Outcome labels */}
      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="inline-flex items-center gap-1.5 text-muted-2">
          <span className="h-1.5 w-1.5 rounded-full bg-muted-2/70" aria-hidden />
          Leaked enquiries
        </span>
        <span className="inline-flex items-center gap-1.5 font-medium text-fg">
          <span className="h-1.5 w-1.5 rounded-full bg-cta" aria-hidden />
          Booked revenue
        </span>
      </div>
    </div>
  );
}
