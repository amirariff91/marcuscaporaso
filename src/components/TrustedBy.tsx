const clients = [
  { name: "IO Energy", domain: "ioenergy.com.au" },
  { name: "Kiindred", domain: "kiindred.co" },
  { name: "Peace & Quiet", domain: "peaceandquiet.au" },
  { name: "Archbold Financial", domain: "archboldfinancial.com.au" },
  { name: "Creston Health", domain: "crestonhealth.com.au" },
  { name: "Biosymm", domain: "biosymm.com" },
  { name: "Kiincreators", domain: "kiincreators.com" },
  { name: "Univ. of Adelaide", domain: "adelaide.edu.au" },
];

export default function TrustedBy() {
  return (
    <section className="border-t border-border py-10">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.1em] uppercase text-muted-2 mb-8 text-center">
          Trusted by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {clients.map((c) => (
            <span
              key={c.domain}
              className="text-sm font-semibold text-muted-2 tracking-wide whitespace-nowrap"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
