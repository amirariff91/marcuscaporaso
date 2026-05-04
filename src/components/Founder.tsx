import Image from "next/image";

export default function Founder() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-12 sm:gap-20 items-start">
          <div className="max-w-xl">
            <h2
              className="text-section font-bold text-fg mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Marcus Caporaso
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Marcus works with founders to fix messy growth through sharper
              systems, strategy and execution. He doesn&apos;t present decks
              and disappear — he embeds with your team and owns outcomes.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              He has worked across healthcare, professional services, and
              founder-led brands — delivering 28% CAC reductions, 4× pipeline
              growth, and fully automated revenue operations for businesses
              between $2M and $50M.
            </p>
            <p className="text-sm text-muted-2">
              Results can be anonymised on request.
            </p>
          </div>
          <div>
            <Image
              src="/marcus-caporaso.png"
              alt="Marcus Caporaso"
              width={160}
              height={160}
              sizes="(max-width: 640px) 144px, 160px"
              className="w-36 h-36 sm:w-40 sm:h-40 object-cover object-top grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
