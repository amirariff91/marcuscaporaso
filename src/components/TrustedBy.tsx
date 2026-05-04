import Image from "next/image";

const clients: Array<{ name: string; logo?: string; size?: number }> = [
  { name: "IO Energy", logo: "/logos/ioenergy.png", size: 48 },
  { name: "Kiindred", logo: "/logos/kiindred.png", size: 38 },
  { name: "Peace & Quiet" }, // favicon too small — text fallback
  { name: "Archbold Financial", logo: "/logos/archboldfinancial.png", size: 128 },
  { name: "Creston Health", logo: "/logos/crestonhealth.png", size: 128 },
  { name: "Biosymm", logo: "/logos/biosymm.png", size: 67 },
  { name: "Kiincreators", logo: "/logos/kiincreators.png", size: 128 },
  { name: "Univ. of Adelaide", logo: "/logos/adelaide.png", size: 128 },
];

export default function TrustedBy() {
  return (
    <section className="border-t border-border py-10">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.1em] uppercase text-muted-2 mb-8 text-center">
          Trusted by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {clients.map((c) =>
            c.logo ? (
              <Image
                key={c.name}
                src={c.logo}
                alt={c.name}
                width={c.size ?? 128}
                height={c.size ?? 128}
                className="h-7 w-auto object-contain opacity-50 grayscale"
                title={c.name}
              />
            ) : (
              <span
                key={c.name}
                className="text-sm font-semibold text-muted-2 tracking-wide whitespace-nowrap"
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
