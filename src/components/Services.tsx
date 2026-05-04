import { Users, Cpu, Lightbulb, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="text-section font-bold text-fg mb-16"
        >
          Three ways to engage.
        </h2>

        {/* Featured: Fractional Partner — full-width row */}
        <div className="mb-4 rounded-xl bg-bg-raised p-10 sm:p-12 border border-border hover:border-cta/30 transition-colors duration-300">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-3 mb-5">
                <Users size={18} className="text-cta" strokeWidth={1.75} />
                <span className="text-xs font-semibold tracking-[0.1em] uppercase text-cta">
                  Most Requested
                </span>
              </div>
              <h3
              >
                Fractional Partner
              </h3>
              <p className="text-muted leading-relaxed">
                I join your leadership team part-time as your CMO. Own the full
                growth function: strategy, team, channels, budget, and
                execution. Ideal for companies between a junior hire and a
                full-time CMO.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#booking"
                className="inline-flex items-center gap-2.5 bg-cta hover:bg-cta-hover text-white font-semibold px-7 py-3.5 rounded-sm transition-colors duration-200 text-sm whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
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
              className="rounded-xl bg-bg-raised p-8 border border-border hover:border-muted-2 transition-colors duration-300 flex flex-col gap-5"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <service.icon
                    size={16}
                    className="text-muted"
                    strokeWidth={1.75}
                  />
                  <span className="text-xs text-muted-2 tracking-wide">
                    {service.tag}
                  </span>
                </div>
                <h3
                >
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <a
                href="#booking"
                className="mt-auto inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg transition-colors duration-200 font-medium"
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
