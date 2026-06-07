import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Founder() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start gap-10 sm:gap-14">
          <Reveal className="flex-shrink-0">
            <Image
              src="/marcus-caporaso-color.jpg"
              alt="Marcus Caporaso — creator of GrowthOS"
              width={260}
              height={390}
              sizes="(max-width: 640px) 160px, 220px"
              className="w-40 sm:w-56 object-cover object-top rounded-xl border border-border"
            />
          </Reveal>
          <div className="max-w-2xl">
            <Reveal as="span" className="text-xs font-semibold tracking-[0.1em] uppercase text-cta">
              The operator behind it
            </Reveal>
            <Reveal as="h2" delay={80} className="text-section font-bold text-fg mt-3 mb-6">
              Created by Marcus Caporaso
            </Reveal>
            <Reveal as="p" delay={160} className="text-muted leading-relaxed mb-6">
              GrowthOS was created by Marcus Caporaso, a growth and operations
              strategist with deep experience across founder-led businesses, paid
              media, funnel architecture, CRM, conversion systems, reporting and
              commercial operations.
            </Reveal>
            <Reveal as="p" delay={220} className="text-muted leading-relaxed">
              The thesis is simple: most businesses don&apos;t have a demand
              problem, they have a conversion problem. GrowthOS is the system for
              fixing what happens after the enquiry.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
