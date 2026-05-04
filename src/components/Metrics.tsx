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
    <section className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="divide-y divide-border-subtle">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="py-6 grid grid-cols-[1fr_auto] items-baseline gap-8"
            >
              <div>
                <div className="text-sm text-muted">
                  {m.label}
                </div>
                <div className="text-xs text-muted-2 mt-0.5">
                  {m.detail}
                </div>
              </div>
              <div
                className="text-2xl font-bold tabular-nums text-fg tracking-tight"
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
