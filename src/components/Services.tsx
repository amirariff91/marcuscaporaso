import { Users, Cpu, Lightbulb, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-[oklch(18%_0.006_160)]">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="text-section font-bold text-[oklch(98%_0.004_100)] mb-16"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Three ways to engage.
        </h2>

        {/* Featured: Fractional Partner — full-width row */}
        <div className="mb-4 rounded-xl bg-[oklch(10%_0.004_160)] p-10 sm:p-12 border border-[oklch(18%_0.006_160)] hover:border-[oklch(67%_0.18_162)]/30 transition-colors duration-300">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-3 mb-5">
                <Users size={18} className="text-[oklch(67%_0.18_162)]" strokeWidth={1.75} />
                <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[oklch(67%_0.18_162)]">
                  Most Requested
                </span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-[oklch(98%_0.004_100)] mb-4"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Fractional Partner
              </h3>
              <p className="text-[oklch(52%_0.008_160)] leading-relaxed">
                I join your leadership team part-time as your CMO. Own the full
                growth function: strategy, team, channels, budget, and
                execution. Ideal for companies between a junior hire and a
                full-time CMO.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#booking"
                className="inline-flex items-center gap-2.5 bg-[oklch(67%_0.18_162)] hover:bg-[oklch(58%_0.18_162)] text-white font-semibold px-7 py-3.5 rounded-sm transition-colors duration-200 text-sm whitespace-nowrap"
              >
                Book a Strategy Call
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Secondary: two-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              icon: Cpu,
              title: "GrowthOS Sprint",
              tag: "90-day intensive",
              description:
                "A structured engagement to diagnose, design, and install your core growth system. CRM, automation, content engine, and paid channels — fully operational by the end.",
            },
            {
              icon: Lightbulb,
              title: "Advisory",
              tag: "Strategic only",
              description:
                "Monthly strategy sessions for founders and growth leaders who have a team but need senior thinking on positioning, channel mix, and growth architecture.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-xl bg-[oklch(10%_0.004_160)] p-8 border border-[oklch(18%_0.006_160)] hover:border-[oklch(22%_0.006_160)] transition-colors duration-300 flex flex-col gap-5"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <service.icon
                    size={16}
                    className="text-[oklch(45%_0.006_160)]"
                    strokeWidth={1.75}
                  />
                  <span className="text-xs text-[oklch(35%_0.006_160)] tracking-wide">
                    {service.tag}
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold text-[oklch(98%_0.004_100)] mb-3"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {service.title}
                </h3>
                <p className="text-[oklch(45%_0.006_160)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <a
                href="#booking"
                className="mt-auto inline-flex items-center gap-1.5 text-sm text-[oklch(52%_0.008_160)] hover:text-[oklch(80%_0.006_160)] transition-colors duration-200 font-medium"
              >
                Get in touch
                <ArrowRight size={13} strokeWidth={2} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
