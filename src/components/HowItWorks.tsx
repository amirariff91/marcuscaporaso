import Reveal from "@/components/Reveal";
import { DIAGNOSTIC_URL } from "@/lib/site";
import {
  ClipboardList,
  SearchCheck,
  ListChecks,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type Step = {
  number: string;
  Icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "01",
    Icon: ClipboardList,
    title: "Complete the diagnostic",
    description:
      "Answer a short set of questions about your current enquiry flow.",
  },
  {
    number: "02",
    Icon: SearchCheck,
    title: "See where it leaks",
    description:
      "Get a clear view of where enquiries are slipping away across capture, response, booking, follow-up and visibility.",
  },
  {
    number: "03",
    Icon: ListChecks,
    title: "Get practical next steps",
    description:
      "Walk away with specific, prioritised actions you can act on immediately.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal as="p" className="text-xs font-semibold tracking-[0.1em] uppercase text-cta">
          How it works
        </Reveal>

        <Reveal as="h2" delay={70} className="text-section font-bold text-fg mt-3">
          Three steps to clarity
        </Reveal>

        <Reveal as="p" delay={140} className="text-muted leading-relaxed max-w-2xl mt-5">
          Before buying more leads, find exactly where your current enquiries are
          leaking.
        </Reveal>

        <div className="relative mt-14">
          {/* Connecting line — draws in when scrolled into view, full line if
              motion/JS is off (see .draw-line in globals.css). Desktop only. */}
          <Reveal
            as="div"
            className="pointer-events-none absolute inset-x-0 top-9 z-0 hidden sm:block"
          >
            <svg
              width="100%"
              height="2"
              viewBox="0 0 100 2"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="block h-0.5 w-full"
            >
              <line
                x1="0"
                y1="1"
                x2="100"
                y2="1"
                stroke="var(--cta)"
                strokeOpacity="0.4"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                className="draw-line"
              />
            </svg>
          </Reveal>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map(({ number, Icon, title, description }, i) => (
              <Reveal
                key={number}
                as="div"
                delay={i * 120}
                className="rounded-xl bg-bg-raised p-7 border border-border"
              >
                <span
                  className="block text-3xl font-bold tabular-nums text-cta"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {number}
                </span>
                <Icon size={24} strokeWidth={1.75} className="text-cta mt-5" />
                <h3 className="text-lg font-semibold text-fg mt-5">{title}</h3>
                <p className="text-sm text-muted leading-relaxed mt-2">
                  {description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal as="div" delay={360} className="mt-14 text-center">
          <p className="text-muted leading-relaxed max-w-2xl mx-auto">
            Run the diagnostic and get a clearer view of what happens after someone
            enquires.
          </p>
          <a
            href={DIAGNOSTIC_URL}
            className="group inline-flex items-center gap-2.5 bg-cta hover:bg-cta-hover text-white font-semibold px-8 py-4 rounded-sm transition-colors duration-200 text-[0.9375rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg mt-6"
          >
            Run the Diagnostic
            <ArrowRight
              size={16}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
