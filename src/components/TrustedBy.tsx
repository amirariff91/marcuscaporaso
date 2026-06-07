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

// 4 sets — ensures content is always wider than any viewport
const track = [...clients, ...clients, ...clients, ...clients];

function LogoItem({ c }: { c: typeof clients[0] }) {
  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      title={c.name}
      // Decorative, continuously-scrolling social proof — kept out of the tab
      // order and a11y tree (the section heading is the accessible statement)
      // so keyboard users don't land on moving off-screen links.
      tabIndex={-1}
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
  );
}

export default function TrustedBy() {
  return (
    <section className="border-t border-border py-12">
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <p className="text-xs font-semibold tracking-[0.1em] uppercase text-muted-2 text-center">
          Trusted by clinics and service businesses
        </p>
      </div>

      {/* Marquee: one track of natural width (4× logo set).
          Animates translateX(-50%) — moves exactly 2 sets left,
          then snaps back. Logos always fill the viewport with no gaps
          because 4 sets × ~1000px >> any realistic viewport width. */}
      <div className="overflow-hidden" aria-hidden="true">
        <div className="animate-marquee flex gap-16 w-max">
          {track.map((c, i) => (
            <LogoItem key={`${c.name}-${i}`} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
