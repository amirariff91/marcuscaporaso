const metrics = [
  {
    value: "28%",
    label: "Average CAC reduction",
    detail: "across client engagements",
  },
  {
    value: "4×",
    label: "Qualified pipeline growth",
    detail: "within 90-day sprints",
  },
  {
    value: "90%",
    label: "Manual follow-up automated",
    detail: "end-to-end CRM workflows",
  },
];

export default function Metrics() {
  return (
    <section className="border-t border-[oklch(18%_0.006_160)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="divide-y divide-[oklch(14%_0.005_160)]">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="py-6 grid grid-cols-[1fr_auto] items-baseline gap-8"
            >
              <div>
                <div className="text-sm text-[oklch(60%_0.008_160)]">
                  {m.label}
                </div>
                <div className="text-xs text-[oklch(40%_0.006_160)] mt-0.5">
                  {m.detail}
                </div>
              </div>
              <div
                className="text-2xl font-bold tabular-nums text-[oklch(98%_0.004_100)] tracking-tight"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
