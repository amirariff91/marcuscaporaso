import {
  HeartPulse,
  Sparkles,
  Activity,
  Building2,
  Smartphone,
  Briefcase,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const audiences = [
  {
    icon: HeartPulse,
    title: "Allied health clinics",
    desc: "Multi-practitioner clinics where every enquiry is a potential ongoing patient.",
  },
  {
    icon: Sparkles,
    title: "Dental, cosmetic & wellness",
    desc: "Dental, cosmetic, aesthetic and wellness practices with high-value treatments.",
  },
  {
    icon: Activity,
    title: "Physio, psychology & massage",
    desc: "Physio, psychology, remedial massage and related hands-on practices.",
  },
  {
    icon: Building2,
    title: "Private health clinics",
    desc: "Private clinics where a missed enquiry is a missed course of care.",
  },
  {
    icon: Smartphone,
    title: "Virtual & mobile health",
    desc: "Virtual clinics and mobile health providers managing demand remotely.",
  },
  {
    icon: Briefcase,
    title: "Coaching & professional services",
    desc: "Coaching, consulting and professional service businesses that book by enquiry.",
  },
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <Reveal as="span" className="text-xs font-semibold tracking-[0.1em] uppercase text-cta">
            Who it&apos;s for
          </Reveal>
          <Reveal as="h2" delay={80} className="text-section font-bold text-fg mt-3">
            Built for businesses where every enquiry matters
          </Reveal>
          <Reveal as="p" delay={160} className="text-muted leading-relaxed mt-5">
            If a single missed or delayed enquiry has real lifetime value, the
            operating layer is where your growth is won or lost.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {audiences.map((a, i) => (
            <Reveal
              as="div"
              key={a.title}
              delay={i * 70}
              className="group rounded-xl bg-bg-raised p-7 border border-border transition-all duration-300 hover:border-cta/30 hover:-translate-y-1 hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.25)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cta/10 transition-all duration-300 group-hover:bg-cta/15 group-hover:scale-110">
                <a.icon size={20} strokeWidth={1.75} className="text-cta" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-fg">{a.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
