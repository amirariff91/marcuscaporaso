import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center gap-12 sm:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0">
            <Image
              src="/marcus-caporaso.png"
              alt="Marcus Caporaso"
              width={200}
              height={200}
              sizes="(max-width: 640px) 160px, 192px"
              className="w-40 h-40 sm:w-48 sm:h-48 object-cover object-top grayscale"
              priority
            />
          </div>
          {/* Text */}
          <div className="max-w-2xl">
            <p className="text-[oklch(52%_0.008_160)] text-sm font-medium mb-8 tracking-wide">
              Marcus Caporaso
            </p>
            <h1 className="text-display font-bold text-[oklch(98%_0.004_100)] mb-8" style={{ fontFamily: "var(--font-barlow)" }}>
              For complex, high-value service businesses scaling seriously.
            </h1>
            <p className="text-lg text-[oklch(60%_0.008_160)] leading-relaxed mb-12" style={{ fontFamily: "var(--font-figtree)" }}>
              I embed as your fractional CMO and growth architect. We diagnose
              what&apos;s broken, build the system to fix it, and optimise until
              your numbers move.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href="#booking"
                className="inline-flex items-center gap-2.5 bg-[oklch(67%_0.18_162)] hover:bg-[oklch(58%_0.18_162)] text-white font-semibold px-8 py-4 rounded-sm transition-colors duration-200 text-[0.9375rem]"
              >
                Book a Strategy Call
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a
                href="#methodology"
                className="text-[oklch(60%_0.008_160)] hover:text-[oklch(80%_0.006_160)] text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 underline underline-offset-4 decoration-[oklch(30%_0.006_160)] hover:decoration-[oklch(60%_0.008_160)]"
              >
                See how it works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
