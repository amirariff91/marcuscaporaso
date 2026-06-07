import { X, Equal } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const stats = [
  { to: 80, suffix: "", label: "Enquiries a month", tone: "fg" as const },
  { to: 10, suffix: "%", label: "Missed or delayed", tone: "fg" as const },
  { to: 8, suffix: "", label: "Warm opportunities at risk", tone: "cta" as const },
];

export default function LeakMath() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-bg-raised p-10 sm:p-14">
          {/* ambient accent */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cta/10 blur-[90px]"
          />
          <div className="relative">
            <span className="text-xs font-semibold tracking-[0.1em] uppercase text-cta">
              The cost of a leak
            </span>
            <h2 className="text-section font-bold text-fg mt-3 max-w-2xl">
              Small workflow gaps compound fast
            </h2>

            {/* the equation */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-stretch gap-4 sm:gap-2">
              {stats.map((s, i) => (
                <div key={s.label} className="contents sm:flex sm:items-center sm:gap-2">
                  <div className="flex-1 rounded-xl bg-bg border border-border px-6 py-7 text-center">
                    <div
                      className={`text-[2.75rem] leading-none font-bold tabular-nums ${
                        s.tone === "cta" ? "text-cta" : "text-fg"
                      }`}
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      <CountUp to={s.to} suffix={s.suffix} />
                    </div>
                    <p className="mt-3 text-xs text-muted-2 leading-snug">{s.label}</p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="flex items-center justify-center text-muted-2" aria-hidden>
                      {i === 0 ? (
                        <X size={18} strokeWidth={2} />
                      ) : (
                        <Equal size={18} strokeWidth={2} />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-9 text-muted leading-relaxed max-w-2xl">
              If a clinic receives 80 enquiries a month and just 10% are missed,
              delayed or poorly followed up, that&apos;s{" "}
              <span className="text-fg font-medium">
                eight warm opportunities at risk
              </span>{" "}
              — before spending another dollar on marketing.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
