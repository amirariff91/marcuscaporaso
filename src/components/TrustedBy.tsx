import Image from "next/image";

const clients: Array<{ name: string; logo?: string; w?: number; h?: number }> = [
  { name: "IO Energy",             logo: "/logos/ioenergy.png",          w: 48,  h: 48 },
  { name: "Kiindred",              logo: "/logos/kiindred.png",           w: 38,  h: 45 },
  { name: "Archbold Financial",    logo: "/logos/archboldfinancial.png",  w: 128, h: 128 },
  { name: "Creston Health",        logo: "/logos/crestonhealth.png",      w: 128, h: 128 },
  { name: "Biosymm",               logo: "/logos/biosymm.png",            w: 102, h: 23 },
  { name: "Kiincreators",          logo: "/logos/kiincreators.png",       w: 128, h: 128 },
  { name: "University of Adelaide",logo: "/logos/adelaide.png",           w: 128, h: 128 },
  { name: "Peace & Quiet" },
];

// Duplicate for seamless marquee loop
const doubled = [...clients, ...clients];

export default function TrustedBy() {
  return (
    <section className="border-t border-border py-12 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-6">
        <p className="text-xs font-semibold tracking-[0.1em] uppercase text-muted-2 text-center">
          Trusted by
        </p>
      </div>

      {/* Scrolling marquee */}
      <div className="relative flex">
        <div className="flex items-center gap-14 animate-marquee whitespace-nowrap">
          {doubled.map((c, i) =>
            c.logo ? (
              <Image
                key={`${c.name}-${i}`}
                src={c.logo}
                alt={c.name}
                width={c.w ?? 128}
                height={c.h ?? 128}
                className="h-10 w-auto object-contain opacity-40 grayscale flex-shrink-0"
                title={c.name}
              />
            ) : (
              <span
                key={`${c.name}-${i}`}
                className="text-base font-semibold text-muted-2 tracking-wide flex-shrink-0"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {c.name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
