import { ArrowRight } from "lucide-react";

export default function GrowthOS() {
  const growthosUrl =
    process.env.NEXT_PUBLIC_GROWTHOS_URL ?? "https://growthops.cepathosting.com";

  return (
    <section className="py-24 border-t border-border bg-bg-raised">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.1em] uppercase text-cta mb-4">
              Not ready to talk yet?
            </p>
            <h2
              className="text-section font-bold text-fg mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Diagnose your growth gaps first.
            </h2>
            <p className="text-muted leading-relaxed">
              GrowthOS is a free 8-minute diagnostic that maps your revenue
              system and surfaces the exact levers to pull first. Honest
              analysis, no sales call required.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="space-y-2 text-sm text-muted-2">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-cta" />
                8 minutes to complete
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-cta" />
                Custom report on where your pipeline leaks
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-cta" />
                No account required
              </div>
            </div>
            <a
              href={growthosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-cta hover:bg-cta-hover text-white font-semibold px-8 py-4 rounded-sm transition-colors duration-200 text-[0.9375rem] self-start focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
            >
              Run the free diagnostic
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
