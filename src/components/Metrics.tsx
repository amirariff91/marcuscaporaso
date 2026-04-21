const metrics = [
  {
    value: "28%",
    label: "Cost Reduction",
    description: "Average CAC reduction across client engagements",
  },
  {
    value: "4×",
    label: "Lead Growth",
    description: "Qualified pipeline within 90-day sprints",
  },
  {
    value: "90%",
    label: "CRM Automation",
    description: "Of manual follow-up workflows automated end-to-end",
  },
];

export default function Metrics() {
  return (
    <section className="border-t border-[oklch(18%_0.006_160)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[oklch(18%_0.006_160)]">
          {metrics.map((m) => (
            <div key={m.label} className="py-14 sm:px-10 first:pl-0 last:pr-0">
              <div
                className="text-[clamp(3.5rem,7vw,5.5rem)] font-bold leading-none tracking-tighter text-[oklch(98%_0.004_100)] mb-3"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {m.value}
              </div>
              <div className="text-xs font-semibold tracking-[0.12em] uppercase text-[oklch(67%_0.18_162)] mb-2">
                {m.label}
              </div>
              <div className="text-sm text-[oklch(45%_0.006_160)] leading-relaxed max-w-[26ch]">
                {m.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
