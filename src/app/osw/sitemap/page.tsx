import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OSWA Rebuild: Final Sitemap & Page Architecture",
  description: "Final 33-page sitemap for the Obesity Surgery WA website rebuild. Organised by intent: acquisition, related procedures, cost/finance, trust, and local pages.",
  alternates: { canonical: "https://osw.marcuscaporaso.com/sitemap" },
  robots: { index: false, follow: false },
};

const coreAcquisition = [
  { slug: "/", title: "Home", keyword: "obesity surgery wa (brand)", intent: "Hub", priority: "P0", note: "Brand hub — routes to all clusters; does NOT target 'weight loss surgery perth' (that's the hub below)" },
  { slug: "/weight-loss-surgery-perth", title: "Weight Loss Surgery Perth", keyword: "weight loss surgery perth", intent: "Hub", priority: "P0" },
  { slug: "/bariatric-surgery-perth", title: "Bariatric Surgery Perth", keyword: "bariatric surgery perth", intent: "Hub", priority: "P0" },
  { slug: "/gastric-sleeve-perth", title: "Gastric Sleeve Perth", keyword: "gastric sleeve perth", intent: "Procedure", priority: "P0" },
  { slug: "/gastric-bypass-perth", title: "Gastric Bypass Perth", keyword: "gastric bypass surgery perth", intent: "Procedure", priority: "P0" },
  { slug: "/mini-gastric-bypass", title: "Mini Gastric Bypass Perth", keyword: "mini gastric bypass perth", intent: "Procedure", priority: "P1" },
  { slug: "/gastric-band", title: "Gastric Band Surgery Perth", keyword: "gastric band surgery perth", intent: "Procedure", priority: "P1" },
  { slug: "/revision-bariatric-surgery", title: "Revision Bariatric Surgery", keyword: "revision bariatric surgery perth", intent: "Procedure", priority: "P1" },
  { slug: "/weight-loss-medication", title: "Weight Loss Medication Perth", keyword: "weight loss medication perth", intent: "Service", priority: "P1" },
  { slug: "/non-surgical-weight-loss", title: "Non-Surgical Weight Loss Perth", keyword: "non surgical weight loss perth", intent: "Service", priority: "P1" },
  { slug: "/bariatric-dietitian-perth", title: "Bariatric Dietitian Perth", keyword: "bariatric dietitian perth", intent: "Service", priority: "P1", note: "Allied-health hub — also covers exercise physiology (no standalone search demand, so folded in here rather than a separate page)" },
  { slug: "/am-i-eligible", title: "Am I Eligible for Weight Loss Surgery?", keyword: "weight loss surgery eligibility", intent: "Qualify", priority: "P0", note: "Medical eligibility (BMI, comorbidities) — moved out of finance per client; activation page, low organic volume" },
];

// Related & post-surgery procedures bariatric patients commonly need later (client-requested, high importance).
// SEO is secondary here — these earn topical depth / E-E-A-T; abdominoplasty MUST stay reconstructive, not cosmetic (AHPRA).
const relatedProcedures = [
  { slug: "/hiatus-hernia-repair", title: "Hiatus Hernia Repair", keyword: "hiatus hernia surgery cost", intent: "Procedure", priority: "P1", note: "Vol 150, KD 0 — national focus + Perth section (Perth-localised demand ~0)" },
  { slug: "/gallbladder-removal-perth", title: "Gallbladder Removal (Laparoscopic Cholecystectomy)", keyword: "gallbladder removal perth", intent: "Procedure", priority: "P1", note: "Common after rapid weight loss; thin Perth demand (~30/mo) — E-E-A-T value, not a traffic play" },
  { slug: "/post-weight-loss-skin-removal", title: "Excess Skin Removal After Weight Loss (Panniculectomy)", keyword: "excess skin removal after weight loss perth", intent: "Procedure", priority: "P1", note: "Reconstructive framing only — NO cosmetic terms (tummy tuck/abdominoplasty) in title/meta/alt/anchors per AHPRA; no before/after, no testimonials" },
];

const moneyPages = [
  { slug: "/gastric-sleeve-cost-perth", title: "Gastric Sleeve Cost Perth", keyword: "gastric sleeve cost perth", intent: "Cost", priority: "P0", note: "KD 0, vol 200 — biggest easy win" },
  { slug: "/weight-loss-surgery-cost-perth", title: "Weight Loss Surgery Cost Perth", keyword: "weight loss surgery perth cost", intent: "Cost", priority: "P0", note: "KD 0, vol 90 — currently #1" },
  { slug: "/medicare-private-health-cover", title: "Medicare & Private Health Cover", keyword: "medicare weight loss surgery australia", intent: "Finance", priority: "P0", note: "High anxiety query; now also absorbs payment-plans content + redirect" },
  { slug: "/super-access-weight-loss-surgery", title: "Super Access for Weight Loss Surgery", keyword: "using super for weight loss surgery perth", intent: "Finance", priority: "P0", note: "Currently #1 for this term" },
  { slug: "/book-consultation", title: "Book a Consultation", keyword: "bariatric consultation perth", intent: "Convert", priority: "P0", note: "Primary conversion page" },
];

const trustPages = [
  { slug: "/surgeons", title: "Our Bariatric Surgeons Perth", keyword: "best bariatric surgeon perth", intent: "Trust", priority: "P0", note: "KD 48, vol 150 — needs strong E-E-A-T" },
  { slug: "/dietitians", title: "Our Bariatric Dietitians", keyword: "bariatric dietitian perth", intent: "Trust", priority: "P1", note: "" },
  { slug: "/hospitals-locations", title: "Hospitals & Clinic Locations", keyword: "bariatric surgery murdoch subiaco", intent: "Local", priority: "P0", note: "Murdoch + Subiaco + Booragoon + Mandurah" },
  { slug: "/patient-journey", title: "Your Weight Loss Surgery Journey", keyword: "what to expect bariatric surgery perth", intent: "Trust", priority: "P1", note: "Referral → Surgery → Aftercare" },
  { slug: "/risks-complications", title: "Bariatric Surgery Risks & Complications", keyword: "complications of bariatric surgery", intent: "Trust", priority: "P1", note: "AHPRA-required honest content" },
  { slug: "/results-expectations", title: "Results & What to Expect", keyword: "gastric sleeve results perth", intent: "Trust", priority: "P1", note: "" },
  { slug: "/gp-referral", title: "GP Referral Information", keyword: "refer patient bariatric surgery perth", intent: "Referrer", priority: "P0", note: "Separate conversion track for doctors" },
  { slug: "/faqs", title: "Weight Loss Surgery FAQs Perth", keyword: "weight loss surgery faq perth", intent: "Trust", priority: "P1", note: "FAQ schema for AI Overviews" },
];

const localPages = [
  { slug: "/weight-loss-surgery-murdoch", title: "Weight Loss Surgery Murdoch", keyword: "bariatric surgery murdoch", intent: "Local", priority: "P1" },
  { slug: "/weight-loss-surgery-subiaco", title: "Weight Loss Surgery Subiaco", keyword: "bariatric surgery subiaco", intent: "Local", priority: "P1" },
  { slug: "/weight-loss-surgery-booragoon", title: "Weight Loss Surgery Booragoon", keyword: "bariatric surgery booragoon", intent: "Local", priority: "P1" },
  { slug: "/weight-loss-surgery-mandurah", title: "Weight Loss Surgery Mandurah", keyword: "bariatric surgery mandurah", intent: "Local", priority: "P2" },
  { slug: "/weight-loss-surgery-perth-cbd", title: "Weight Loss Surgery Perth CBD", keyword: "bariatric surgery perth cbd", intent: "Local", priority: "P2" },
];

// Canonical site navigation for the dev build — maps the 33-page architecture above
// into the actual header menus + footer columns. This is the "what goes in the nav bar"
// view; the groups above are the SEO-intent view. Source of truth mirrored in
// docs/oswa/oswa-navigation-map.csv (sheet-ready for the dev).
const headerNav: { menu: string; items: { label: string; slug: string; note?: string }[] }[] = [
  {
    menu: "Treatments ▾",
    items: [
      { label: "Weight Loss Surgery Perth", slug: "/weight-loss-surgery-perth", note: "Start here — overview" },
      { label: "Bariatric Surgery (compare all)", slug: "/bariatric-surgery-perth", note: "Surgical hub" },
      { label: "Gastric Sleeve", slug: "/gastric-sleeve-perth" },
      { label: "Gastric Bypass", slug: "/gastric-bypass-perth" },
      { label: "Mini Gastric Bypass", slug: "/mini-gastric-bypass" },
      { label: "Gastric Band", slug: "/gastric-band" },
      { label: "Revision Surgery", slug: "/revision-bariatric-surgery" },
      { label: "Non-Surgical Weight Loss", slug: "/non-surgical-weight-loss", note: "incl. GLP-1 medical weight management" },
      { label: "Weight Loss Medication", slug: "/weight-loss-medication" },
      { label: "Bariatric Dietitian", slug: "/bariatric-dietitian-perth" },
      { label: "Hiatus Hernia Repair", slug: "/hiatus-hernia-repair", note: "Related procedure" },
      { label: "Gallbladder Removal", slug: "/gallbladder-removal-perth", note: "Related procedure" },
      { label: "Excess Skin Removal", slug: "/post-weight-loss-skin-removal", note: "Related — reconstructive framing only" },
    ],
  },
  {
    menu: "Costs & Funding ▾",
    items: [
      { label: "Gastric Sleeve Cost", slug: "/gastric-sleeve-cost-perth" },
      { label: "Weight Loss Surgery Cost", slug: "/weight-loss-surgery-cost-perth" },
      { label: "Medicare & Private Health", slug: "/medicare-private-health-cover" },
      { label: "Super Access", slug: "/super-access-weight-loss-surgery" },
    ],
  },
  {
    menu: "Our Team ▾",
    items: [
      { label: "Our Surgeons", slug: "/surgeons" },
      { label: "Our Dietitians", slug: "/dietitians", note: "Not yet built" },
      { label: "Your Journey", slug: "/patient-journey", note: "Not yet built" },
      { label: "Risks & Complications", slug: "/risks-complications", note: "Not yet built" },
      { label: "Results & Expectations", slug: "/results-expectations", note: "Not yet built" },
      { label: "FAQs", slug: "/faqs" },
    ],
  },
  {
    menu: "Locations ▾",
    items: [
      { label: "Hospitals & Clinics", slug: "/hospitals-locations", note: "Hospital identity unverified" },
      { label: "Murdoch", slug: "/weight-loss-surgery-murdoch", note: "Not yet built" },
      { label: "Subiaco", slug: "/weight-loss-surgery-subiaco", note: "Not yet built" },
      { label: "Booragoon", slug: "/weight-loss-surgery-booragoon", note: "Not yet built" },
      { label: "Mandurah", slug: "/weight-loss-surgery-mandurah", note: "Not yet built" },
      { label: "Perth CBD", slug: "/weight-loss-surgery-perth-cbd", note: "Not yet built" },
    ],
  },
];

// Always-visible top-level items (no dropdown) + the persistent CTA/utility set.
const headerStandalone = [
  { label: "Am I Eligible?", slug: "/am-i-eligible", kind: "link" },
  { label: "For GPs", slug: "/gp-referral", kind: "utility" },
  { label: "Call (08) 9332 0066", slug: "tel:0893320066", kind: "phone" },
  { label: "Book a Consultation", slug: "/book-consultation", kind: "cta" },
];

const footerColumns: { title: string; items: string[] }[] = [
  {
    title: "Treatments",
    items: [
      "Weight Loss Surgery Perth", "Bariatric Surgery", "Gastric Sleeve", "Gastric Bypass",
      "Mini Gastric Bypass", "Gastric Band", "Revision Surgery", "Non-Surgical Weight Loss",
      "Weight Loss Medication", "Bariatric Dietitian",
    ],
  },
  {
    title: "Related & Costs",
    items: [
      "Hiatus Hernia Repair", "Gallbladder Removal", "Excess Skin Removal",
      "Gastric Sleeve Cost", "Weight Loss Surgery Cost", "Medicare & Private Health", "Super Access",
    ],
  },
  {
    title: "About",
    items: ["Our Surgeons", "Our Dietitians", "Your Journey", "Risks & Complications", "Results & Expectations", "FAQs", "Am I Eligible?"],
  },
  {
    title: "Locations & Contact",
    items: ["Hospitals & Clinics", "Murdoch", "Subiaco", "Booragoon", "Mandurah", "Book a Consultation", "GP Referral", "Phone (08) 9332 0066"],
  },
];

const priorityColors: Record<string, string> = {
  P0: "bg-emerald-400/20 text-emerald-300 border-emerald-400/30",
  P1: "bg-blue-400/10 text-blue-300 border-blue-400/20",
  P2: "bg-white/5 text-slate-400 border-white/10",
};

const intentColors: Record<string, string> = {
  Hub: "text-purple-300",
  Procedure: "text-emerald-300",
  Service: "text-cyan-300",
  Cost: "text-amber-300",
  Finance: "text-orange-300",
  Qualify: "text-rose-300",
  Convert: "text-pink-300",
  Trust: "text-blue-300",
  Local: "text-teal-300",
  Referrer: "text-violet-300",
};

function PageRow({
  slug,
  title,
  keyword,
  intent,
  priority,
  note,
  contentSlug,
}: {
  slug: string;
  title: string;
  keyword: string;
  intent: string;
  priority: string;
  note?: string;
  contentSlug?: string;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-white/5 py-3 last:border-0 md:flex-row md:items-center md:gap-4">
      <div className="flex items-center gap-3 md:w-52 md:shrink-0">
        <span className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${priorityColors[priority]}`}>
          {priority}
        </span>
        <code className="text-xs text-slate-500">{slug}</code>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="mt-0.5 text-xs text-slate-500">{keyword}</p>
        {note && <p className="mt-0.5 text-xs text-emerald-400/80 italic">{note}</p>}
      </div>
      <div className="flex items-center gap-3">
        <span className={`text-xs font-medium ${intentColors[intent] || "text-slate-400"}`}>
          {intent}
        </span>
        {contentSlug && (
          <Link
            href={`/osw/content/${contentSlug}`}
            className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-slate-400 transition-colors hover:border-emerald-400/30 hover:text-emerald-300"
          >
            View page →
          </Link>
        )}
      </div>
    </div>
  );
}

function PageGroup({
  title,
  eyebrow,
  note,
  pages,
  contentSlugs,
}: {
  title: string;
  eyebrow: string;
  note: string;
  pages: Array<{ slug: string; title: string; keyword: string; intent: string; priority: string; note?: string }>;
  contentSlugs?: Record<string, string>;
}) {
  return (
    <section className="border-t border-white/10 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">{eyebrow}</p>
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">{title}</h2>
          <p className="text-sm text-slate-500">{note}</p>
        </div>
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.02] p-4 md:p-6">
          {pages.map((page) => (
            <PageRow
              key={page.slug}
              {...page}
              contentSlug={contentSlugs?.[page.slug]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OswSitemapPage() {
  return (
    <main className="min-h-screen bg-[#071112] text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-emerald-300">
            Final page architecture
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
            33 pages built around patient intent.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Every URL in this architecture maps to a specific patient intent: procedure research, cost discovery, trust building, or conversion. No page is a placeholder — each one has a clear job.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { label: "P0 — Launch critical", className: priorityColors.P0 },
              { label: "P1 — Phase 2 build", className: priorityColors.P1 },
              { label: "P2 — Phase 3", className: priorityColors.P2 },
            ].map(({ label, className }) => (
              <div key={label} className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${className}`}>
                {label}
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {[
              { label: "Total pages", value: "33" },
              { label: "Launch critical (P0)", value: "14" },
              { label: "Phase 2 (P1)", value: "17" },
              { label: "Current site pages", value: "~18" },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{value}</p>
                <p className="mt-1 text-xs text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageGroup
        eyebrow="Group 1 of 5"
        title="Core acquisition pages"
        note="12 pages — procedure hubs, service & qualification pages"
        pages={coreAcquisition}
        contentSlugs={{
          "/gastric-sleeve-perth": "gastric-sleeve-perth",
          "/gastric-bypass-perth": "gastric-bypass-perth",
          "/bariatric-surgery-perth": "bariatric-surgery-perth",
          "/weight-loss-surgery-perth": "weight-loss-surgery-perth",
          "/mini-gastric-bypass": "mini-gastric-bypass",
          "/gastric-band": "gastric-band",
          "/revision-bariatric-surgery": "revision-bariatric-surgery",
          "/weight-loss-medication": "weight-loss-medication",
          "/non-surgical-weight-loss": "non-surgical-weight-loss",
          "/bariatric-dietitian-perth": "bariatric-dietitian-perth",
          "/am-i-eligible": "am-i-eligible",
        }}
      />

      <PageGroup
        eyebrow="Group 2 of 5"
        title="Related & post-surgery procedures"
        note="3 pages — procedures bariatric patients commonly need later"
        pages={relatedProcedures}
        contentSlugs={{
          "/hiatus-hernia-repair": "hiatus-hernia-repair",
          "/gallbladder-removal-perth": "gallbladder-removal-perth",
          "/post-weight-loss-skin-removal": "post-weight-loss-skin-removal",
        }}
      />

      <PageGroup
        eyebrow="Group 3 of 5"
        title="High-intent money pages"
        note="5 pages — cost, finance, and booking"
        pages={moneyPages}
        contentSlugs={{
          "/gastric-sleeve-cost-perth": "gastric-sleeve-cost-perth",
          "/weight-loss-surgery-cost-perth": "weight-loss-surgery-cost-perth",
          "/medicare-private-health-cover": "medicare-private-health-cover",
          "/super-access-weight-loss-surgery": "super-access-weight-loss-surgery",
          "/book-consultation": "book-consultation",
        }}
      />

      <PageGroup
        eyebrow="Group 4 of 5"
        title="Trust and E-E-A-T pages"
        note="8 pages — surgeon proof, patient journey, referrer pathway"
        pages={trustPages}
        contentSlugs={{
          "/surgeons": "surgeons",
          "/hospitals-locations": "hospitals-locations",
          "/gp-referral": "gp-referral",
          "/faqs": "faqs",
        }}
      />

      <PageGroup
        eyebrow="Group 5 of 5"
        title="Local area pages"
        note="5 pages — Murdoch, Subiaco, Booragoon, Mandurah, Perth CBD"
        pages={localPages}
      />

      <section className="border-t border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
            For the dev
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
              Site navigation
            </h2>
            <p className="text-sm text-slate-500">
              How the pages above map to the actual menu bar &amp; footer
            </p>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            The five groups above organise pages by <span className="text-slate-300">SEO intent</span>. This
            section is the <span className="text-slate-300">build view</span> — exactly what goes in the header
            menus and footer columns. Header pattern:{" "}
            <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-xs text-emerald-200">
              Logo · Treatments ▾ · Costs &amp; Funding ▾ · Our Team ▾ · Locations ▾ · Am I Eligible? · For GPs · Phone · [Book a Consultation]
            </code>
          </p>

          {/* Header menus */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {headerNav.map((menu) => (
              <div key={menu.menu} className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
                <p className="mb-3 text-sm font-semibold text-white">{menu.menu}</p>
                <ul className="flex flex-col gap-1.5">
                  {menu.items.map((item) => (
                    <li key={item.slug} className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-sm">
                      <span className="text-slate-200">{item.label}</span>
                      <code className="text-xs text-slate-500">{item.slug}</code>
                      {item.note && <span className="text-xs italic text-emerald-400/70">— {item.note}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Standalone / persistent */}
          <div className="mt-4 flex flex-wrap gap-3 rounded-3xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
            <span className="w-full text-sm font-semibold text-white md:w-auto md:pr-2">Always visible:</span>
            {headerStandalone.map((item) => (
              <span
                key={item.slug}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${
                  item.kind === "cta"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200 font-medium"
                    : "border-white/10 text-slate-300"
                }`}
              >
                {item.label}
                <code className="text-[10px] text-slate-500">{item.slug}</code>
              </span>
            ))}
          </div>

          {/* Footer columns */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold text-white">Footer columns</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {footerColumns.map((col) => (
                <div key={col.title} className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">{col.title}</p>
                  <ul className="flex flex-col gap-1 text-sm text-slate-300">
                    {col.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs italic text-slate-500">
              Footer base row: AHPRA registration numbers · RACS / hospital accreditations · legal disclaimer.
              &ldquo;Not yet built&rdquo; items in the menus above are P1/P2 pages in the architecture that still need briefs/pages.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">URL migration rule</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-emerald-50/90">
              Every current URL must map to a specific new URL before launch. Preserve slug where possible.
              Direct 301 to the nearest matching intent page where slugs change.
              Never redirect multiple old pages to the homepage — each redirect must carry link equity to the right new page.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { old: "/gastric-sleeve", new: "/gastric-sleeve-perth", action: "301 redirect" },
                { old: "/fees", new: "/gastric-sleeve-cost-perth", action: "301 redirect" },
                { old: "/medication.pdf", new: "/weight-loss-medication", action: "301 redirect" },
                { old: "/payment-plans-bariatric-surgery", new: "/medicare-private-health-cover", action: "301 redirect" },
              ].map((row) => (
                <div key={row.old} className="rounded-2xl bg-black/20 p-3 text-xs">
                  <code className="text-slate-500">{row.old}</code>
                  <div className="my-1 text-emerald-400">↓ {row.action}</div>
                  <code className="text-white">{row.new}</code>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
