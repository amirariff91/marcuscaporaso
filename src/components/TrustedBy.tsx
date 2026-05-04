"use client";

import { useState } from "react";

const clients = [
  { name: "IO Energy", domain: "ioenergy.com.au" },
  { name: "Kiindred", domain: "kiindred.co" },
  { name: "Peace & Quiet", domain: "peaceandquiet.au" },
  { name: "Archbold Financial", domain: "archboldfinancial.com.au" },
  { name: "Creston Health", domain: "crestonhealth.com.au" },
  { name: "Biosymm", domain: "biosymm.com" },
  { name: "Kiincreators", domain: "kiincreators.com" },
  { name: "University of Adelaide", domain: "adelaide.edu.au" },
];

function ClientLogo({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="text-sm font-semibold text-muted-2 tracking-wide whitespace-nowrap"
        style={{ fontFamily: "var(--font-barlow)" }}
      >
        {name}
      </span>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={name}
      title={name}
      height={28}
      className="h-7 w-auto object-contain opacity-50 grayscale hover:opacity-70 transition-opacity duration-200"
      onError={() => setFailed(true)}
    />
  );
}

export default function TrustedBy() {
  return (
    <section className="border-t border-border py-10">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.1em] uppercase text-muted-2 mb-8 text-center">
          Trusted by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {clients.map((c) => (
            <ClientLogo key={c.domain} name={c.name} domain={c.domain} />
          ))}
        </div>
      </div>
    </section>
  );
}
