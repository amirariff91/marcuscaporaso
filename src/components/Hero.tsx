import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col sm:flex-row items-center gap-12 sm:gap-20">
          {/* Text — LEFT on desktop */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-display font-bold text-fg mb-6">
              For complex, high-value service businesses scaling seriously.
            </h1>
            <p className="text-base text-muted leading-relaxed mb-10">
              I embed as your fractional CMO and growth architect. We diagnose
              what&apos;s broken, build the system to fix it, and optimise until
              your numbers move.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href="#booking"
                className="inline-flex items-center gap-2.5 bg-cta hover:bg-cta-hover text-white font-semibold px-8 py-4 rounded-sm transition-colors duration-200 text-[0.9375rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
              >
                Book Strategy Call
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a
                href="#methodology"
                className="text-muted hover:text-fg text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 underline underline-offset-4 decoration-muted-2 hover:decoration-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
              >
                How It Works
              </a>
            </div>
          </div>
          {/* Photo — RIGHT on desktop, stacks on top mobile */}
          <div className="flex-shrink-0 flex flex-col items-start gap-4 order-first sm:order-last">
            <Image
              src="/marcus-caporaso-color.jpg"
              alt="Marcus Caporaso — Fractional CMO & Growth Architect"
              width={260}
              height={390}
              sizes="(max-width: 640px) 192px, 256px"
              className="w-48 sm:w-64 object-cover object-top rounded-sm"
              priority
            />
            <div>
              <p className="text-sm font-semibold text-fg">
                Marcus Caporaso
              </p>
              <p className="text-xs text-muted-2 tracking-wide">
                Fractional CMO &amp; Growth Architect
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
