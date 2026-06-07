import Reveal from "@/components/Reveal";
import {
  Inbox,
  Zap,
  CalendarCheck,
  BellRing,
  Repeat,
  Eye,
  type LucideIcon,
} from "lucide-react";

type Layer = {
  title: string;
  Icon: LucideIcon;
  description: string;
};

const layers: Layer[] = [
  {
    title: "Enquiry capture",
    Icon: Inbox,
    description: "Every enquiry recorded and routed correctly.",
  },
  {
    title: "Response speed",
    Icon: Zap,
    description: "First contact made fast, while intent is high.",
  },
  {
    title: "Booking flow",
    Icon: CalendarCheck,
    description: "A clear path from enquiry to confirmed booking.",
  },
  {
    title: "Follow-up",
    Icon: BellRing,
    description: "Systematic follow-up, not reliant on memory.",
  },
  {
    title: "Retention",
    Icon: Repeat,
    description: "Bring people back instead of letting them lapse.",
  },
  {
    title: "Visibility",
    Icon: Eye,
    description: "See the full journey from demand to revenue.",
  },
];

export default function WhatFixes() {
  return (
    <section id="what-fixes" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal as="p" className="text-xs font-semibold tracking-[0.1em] uppercase text-cta">
          What GrowthOS fixes
        </Reveal>

        <Reveal as="h2" delay={70} className="text-section font-bold text-fg mt-3">
          The operating layer, fixed end to end
        </Reveal>

        <Reveal as="p" delay={140} className="text-muted leading-relaxed max-w-2xl mt-5">
          GrowthOS works across the six layers where enquiries turn into booked,
          tracked revenue.
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {layers.map(({ title, Icon, description }, i) => (
            <Reveal
              key={title}
              as="div"
              delay={i * 70}
              className="group rounded-xl bg-bg-raised p-7 border border-border hover:border-cta/30 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cta/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-cta/15">
                <Icon size={20} strokeWidth={1.75} className="text-cta" />
              </span>
              <h3 className="text-base font-semibold text-fg mt-5">{title}</h3>
              <p className="text-sm text-muted leading-relaxed mt-2">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
