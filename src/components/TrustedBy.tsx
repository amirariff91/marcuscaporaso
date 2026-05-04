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

function LogoItem({ client, suffix }: { client: typeof clients[0]; suffix: string }) {
  return (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      title={client.name}
      className="flex-shrink-0 flex items-center opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-300"
    >
      {client.logo ? (
        <Image
          src={client.logo}
          alt={client.name}
          width={client.w ?? 128}
          height={client.h ?? 128}
          className="h-10 w-auto object-contain"
          key={`${client.name}-${suffix}`}
        />
      ) : (
        <span
          className="text-base font-semibold text-muted-2 tracking-wide"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          {client.name}
        </span>
      )}
    </a>
  );
}

export default function TrustedBy() {
  return (
    <section className="border-t border-border py-12 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <p className="text-xs font-semibold tracking-[0.1em] uppercase text-muted-2 text-center">
          Trusted by
        </p>
      </div>

      {/* Marquee — two identical sets side by side for seamless loop */}
      <div className="flex w-full">
        <div
          className="flex items-center gap-14 animate-marquee"
          style={{ width: "max-content" }}
          aria-hidden="false"
        >
          {/* Set A */}
          {clients.map((c) => (
            <LogoItem key={`a-${c.name}`} client={c} suffix="a" />
          ))}
          {/* Set B — exact duplicate, creates the seamless loop */}
          {clients.map((c) => (
            <LogoItem key={`b-${c.name}`} client={c} suffix="b" />
          ))}
        </div>
      </div>
    </section>
  );
}
