import { ArrowRight } from "lucide-react";

export default function GrowthOS() {
  const growthosUrl =
    process.env.NEXT_PUBLIC_GROWTHOS_URL ?? "https://growthops.cepathosting.com";

  return (
    <section className="py-24 border-t border-[oklch(18%_0.006_160)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-20 items-start">
          <div>
            <h2
              className="text-section font-bold text-[oklch(98%_0.004_100)] mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Don&apos;t know where to start?
            </h2>
            <p className="text-[oklch(52%_0.008_160)] leading-relaxed">
              GrowthOS is a free diagnostic tool that maps your current growth
              system and surfaces the biggest leverage points. Honest analysis,
              no sales call.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-6 sm:pt-4">
            <p className="text-sm text-[oklch(45%_0.006_160)] leading-relaxed">
              Takes 8 minutes. You get a report showing where your pipeline
              is leaking and which levers to pull first.
            </p>
            <a
              href={growthosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[oklch(67%_0.18_162)] hover:bg-[oklch(58%_0.18_162)] text-white font-semibold px-8 py-4 rounded-sm transition-colors duration-200 text-[0.9375rem] self-start"
            >
              Diagnose your growth gaps
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
