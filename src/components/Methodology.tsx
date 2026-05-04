import { Search, Layers, Wrench, BarChart2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnose",
    description:
      "We map your entire revenue system: where deals stall, where leads drop off, where your team is spending time that AI or automation should own.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Architect",
    description:
      "A custom growth blueprint built on what actually works for your market. No templates. Systems designed for your offer, your buyer, and your team.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Install",
    description:
      "I work alongside your team to implement. CRM, automation, content systems, paid channels — hands-on until it runs without me.",
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Optimise",
    description:
      "Weekly iteration on what the data shows. A/B tests, pipeline reviews, conversion rate work — compounding improvements every sprint.",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 mb-20">
          <h2
            className="text-section font-bold text-fg"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            How it works.
          </h2>
          <span className="text-sm text-muted-2 sm:ml-6">
            A four-step growth loop
          </span>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr_2fr] gap-6 sm:gap-12 py-10 ${
                i < steps.length - 1 ? "border-b border-border-subtle" : ""
              }`}
            >
              <div
                className="text-sm font-medium text-muted-2 pt-1 tabular-nums"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {step.number}
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <step.icon
                  size={18}
                  className="text-cta mt-0.5 flex-shrink-0"
                  strokeWidth={1.75}
                />
                <h3
                  className="text-lg font-semibold text-fg"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {step.title}
                </h3>
              </div>
              <p className="text-muted leading-relaxed text-sm col-start-2 sm:col-start-3 mt-0 sm:mt-0">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
