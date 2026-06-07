import { Megaphone, Settings, Workflow } from "lucide-react";
import Reveal from "@/components/Reveal";

type Column = {
  title: string;
  description: string;
  icon: typeof Megaphone;
  highlighted: boolean;
};

const columns: Column[] = [
  {
    title: "Agencies",
    description: "Build demand and drive more traffic — then hand it off.",
    icon: Megaphone,
    highlighted: false,
  },
  {
    title: "CRM consultants",
    description: "Configure the tools, but not the operating layer around them.",
    icon: Settings,
    highlighted: false,
  },
  {
    title: "GrowthOS",
    description:
      "Improves what happens after demand arrives: capture, response, booking, follow-up and visibility.",
    icon: Workflow,
    highlighted: true,
  },
];

export default function WhyApart() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal
          as="p"
          className="text-xs font-semibold tracking-[0.1em] uppercase text-cta"
        >
          Why GrowthOS stands apart
        </Reveal>
        <Reveal as="h2" className="text-section font-bold text-fg mt-3">
          Most builders stop where the leak starts
        </Reveal>
        <Reveal
          as="p"
          delay={90}
          className="text-muted leading-relaxed max-w-2xl mt-5"
        >
          Most agencies build demand. Most CRM consultants configure tools.
          GrowthOS improves what happens after demand arrives — we sit between
          marketing, systems and operations.
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          {columns.map((col, i) => {
            const Icon = col.icon;
            return (
              <Reveal as="div" delay={i * 90} key={col.title}>
                <div
                  className={
                    col.highlighted
                      ? "group h-full rounded-xl border border-cta/40 bg-cta/[0.04] ring-1 ring-cta/10 p-6 transition-all duration-300 hover:-translate-y-1"
                      : "group h-full rounded-xl border border-border bg-bg-raised p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-subtle"
                  }
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={
                        col.highlighted
                          ? "inline-flex items-center justify-center rounded-lg border border-cta/30 bg-cta/[0.06] p-2.5"
                          : "inline-flex items-center justify-center rounded-lg border border-border bg-bg p-2.5"
                      }
                    >
                      <Icon
                        strokeWidth={1.75}
                        className={
                          col.highlighted ? "h-5 w-5 text-cta" : "h-5 w-5 text-muted-2"
                        }
                      />
                    </span>
                    {col.highlighted && (
                      <span className="text-[0.625rem] font-semibold tracking-[0.1em] uppercase text-cta">
                        Where we work
                      </span>
                    )}
                  </div>
                  <h3
                    className={
                      col.highlighted
                        ? "text-base font-semibold text-fg mt-5"
                        : "text-base font-semibold text-muted mt-5"
                    }
                  >
                    {col.title}
                  </h3>
                  <p
                    className={
                      col.highlighted
                        ? "text-sm leading-relaxed text-muted mt-2"
                        : "text-sm leading-relaxed text-muted-2 mt-2"
                    }
                  >
                    {col.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
