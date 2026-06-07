import { EyeOff, Clock, PhoneOff, SearchX } from "lucide-react";
import Reveal from "@/components/Reveal";

const leaks = [
  {
    icon: EyeOff,
    label: "Missed",
    note: "No record of who reached out",
  },
  {
    icon: Clock,
    label: "Delayed",
    note: "First reply comes too late to win",
  },
  {
    icon: PhoneOff,
    label: "Poorly followed up",
    note: "One attempt, then silence",
  },
  {
    icon: SearchX,
    label: "Untracked",
    note: "No way to see what converts",
  },
];

export default function Problem() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          <Reveal
            as="span"
            className="block text-xs font-semibold tracking-[0.1em] uppercase text-cta"
          >
            The operating layer between demand and revenue
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-5 text-section font-bold text-fg"
          >
            Growth often leaks after the enquiry
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="mt-6 text-muted leading-relaxed"
          >
            Demand arrives through referrals, website traffic, ads, SEO, calls,
            emails and messages. But enquiries leak when they&rsquo;re missed,
            delayed, poorly followed up or not tracked at all.
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {leaks.map((leak, i) => {
            const Icon = leak.icon;
            return (
              <Reveal
                key={leak.label}
                delay={i * 80}
                className="group bg-bg-raised p-6 hover:bg-bg transition-colors duration-300"
              >
                <Icon
                  size={18}
                  strokeWidth={1.75}
                  className="text-cta transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <p className="mt-4 text-sm font-medium text-fg">{leak.label}</p>
                <p className="mt-1.5 text-xs text-muted-2 leading-relaxed">
                  {leak.note}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
