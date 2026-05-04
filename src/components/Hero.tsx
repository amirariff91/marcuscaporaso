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
            <h1 className="text-display font-bold text-fg mb-8" style={{ fontFamily: "var(--font-barlow)" }}>
              Growth systems for businesses ready to scale.
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-12" style={{ fontFamily: "var(--font-figtree)" }}>
              Revenue, operations and marketing infrastructure for ambitious founders.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href="#booking"
                className="inline-flex items-center gap-2.5 bg-cta hover:bg-cta-hover text-white font-semibold px-8 py-4 rounded-sm transition-colors duration-200 text-[0.9375rem]"
              >
                Book Strategy Call
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a
                href="#methodology"
                className="text-muted hover:text-fg text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 underline underline-offset-4 decoration-muted-2 hover:decoration-muted"
              >
                How It Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
