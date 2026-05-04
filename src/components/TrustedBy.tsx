import Image from "next/image";

const clients: Array<{
  name: string;
  url: string;
  logo?: string;
  w?: number;
  h?: number;
}> = [
  { name: "IO Energy",              url: "https://ioenergy.com.au",              logo: "/logos/ioenergy.png",          w: 48,  h: 48 },
  { name: "Kiindred",               url: "https://kiindred.co",                  logo: "/logos/kiindred.png",           w: 38,  h: 45 },
  { name: "Archbold Financial",     url: "https://archboldfinancial.com.au",     logo: "/logos/archboldfinancial.png",  w: 128, h: 128 },
  { name: "Creston Health",         url: "https://crestonhealth.com.au",         logo: "/logos/crestonhealth.png",      w: 128, h: 128 },
  { name: "Biosymm",                url: "https://biosymm.com",                  logo: "/logos/biosymm.png",            w: 102, h: 23 },
  { name: "Kiincreators",           url: "https://kiincreators.com",             logo: "/logos/kiincreators.png",       w: 128, h: 128 },
  { name: "University of Adelaide", url: "https://adelaide.edu.au",              logo: "/logos/adelaide.png",           w: 128, h: 128 },
  { name: "Peace & Quiet",          url: "https://peaceandquiet.au" },
];

function LogoSet({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex items-center gap-16 shrink-0 min-w-full justify-around animate-marquee"
      aria-hidden={ariaHidden}
    >
      {clients.map((c) => (
        <a
          key={c.name}
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          title={c.name}
          className="flex-shrink-0 flex items-center opacity-40 grayscale hover:opacity-75 hover:grayscale-0 transition-all duration-300"
        >
          {c.logo ? (
            <Image
              src={c.logo}
              alt={c.name}
              width={c.w ?? 128}
              height={c.h ?? 128}
              className="h-10 w-auto object-contain"
            />
          ) : (
            <span
              className="text-base font-semibold text-muted-2 tracking-wide"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              {c.name}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="border-t border-border py-12">
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <p className="text-xs font-semibold tracking-[0.1em] uppercase text-muted-2 text-center">
          Trusted by
        </p>
      </div>

      {/* Two sets side-by-side, each min-w-full, each animating -100% independently.
          As Set A slides off left, Set B fills in from right — seamless infinite loop. */}
      <div className="flex overflow-hidden">
        <LogoSet />
        <LogoSet ariaHidden />
      </div>
    </section>
  );
}
