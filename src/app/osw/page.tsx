import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obesity Surgery WA Rebuild Audit | SEO, Content & Growth Plan",
  description:
    "A rebuild audit for Obesity Surgery WA covering SEO visibility, technical performance, content architecture, conversion UX, and growth opportunities.",
  alternates: {
    canonical: "https://osw.marcuscaporaso.com/",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "article",
    url: "https://osw.marcuscaporaso.com/",
    title: "Obesity Surgery WA Rebuild Audit",
    description:
      "SEO, technical, content, UX, and growth audit for the Obesity Surgery WA website rebuild.",
    siteName: "OSW Rebuild Audit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obesity Surgery WA Rebuild Audit",
    description:
      "SEO, technical, content, UX, and growth audit for the Obesity Surgery WA website rebuild.",
  },
};

const organicKeywords = [
  ["gastric bypass surgery perth", "200", "#2", "65", "$101"],
  ["bariatric surgery perth", "150", "#2", "59", "$99"],
  ["bariatric surgeons perth", "150", "#2", "48", "$95"],
  ["gastric sleeve perth", "100", "#2", "46", "$136"],
  ["weight loss surgery perth", "250", "#3", "38", "$132"],
  ["best bariatric surgeon perth", "150", "#4", "17", "$86"],
  ["gastric sleeve cost perth", "200", "#8", "9", "$82"],
  ["weight loss surgery perth cost", "90", "#1", "8", "$90"],
];

const topPages = [
  ["Homepage", "371", "$37,256", "gastric bypass surgery perth", "#2"],
  ["Gastric sleeve", "56", "$7,512", "gastric sleeve perth", "#2"],
  ["Fees", "56", "$4,284", "lap band surgery perth cost", "#3"],
  ["Gastric band", "47", "$4,096", "gastric band surgery perth", "#2"],
  ["Dietitian", "28", "$749", "gastric bypass post op diet", "#5"],
  ["Mini gastric bypass", "16", "$1,190", "mini bypass", "#9"],
  ["Contact", "15", "$1,496", "perth weight loss clinic", "#9"],
  ["Weight loss surgery", "14", "$1,524", "using super for weight loss surgery perth", "#1"],
];

const opportunityKeywords = [
  ["weight loss surgery perth", "250", "KD 40", "Local/commercial", "Core service hub"],
  ["gastric bypass surgery perth", "200", "KD 32", "Local/commercial", "Procedure page + FAQ"],
  ["gastric sleeve cost perth", "200", "KD 0", "Cost/research", "Dedicated cost page"],
  ["bariatric surgery perth", "150", "KD 38", "Local/commercial", "Main bariatric hub"],
  ["best bariatric surgeon perth", "150", "KD 48", "Trust/comparison", "Surgeon proof page"],
  ["weight loss surgery perth cost", "90", "KD 0", "Cost/research", "Finance + Medicare guide"],
  ["gastric sleeve payment plan perth", "30", "KD 0", "Finance", "Payment options page"],
  ["using super for weight loss surgery perth", "30", "KD 0", "Finance", "Super access explainer"],
];

const crawlPages = [
  ["Homepage", "235.8 KB", "1,189", "18", "3"],
  ["Gastric sleeve", "193.0 KB", "3,099", "8", "0"],
  ["Weight loss surgery", "191.4 KB", "2,634", "7", "0"],
  ["About", "208.2 KB", "2,122", "21", "1"],
  ["Fees", "211.4 KB", "1,163", "7", "0"],
  ["Contact", "185.4 KB", "738", "9", "1"],
];

const roadmap = [
  {
    phase: "Phase 1 — Preserve and protect current rankings",
    items: [
      "Map every current URL to a rebuild URL before launch, including PDFs that currently attract traffic.",
      "Keep strong pages indexable: homepage, gastric sleeve, fees, gastric band, weight loss surgery, medication, dietitian, and contact.",
      "Write 301 redirects for changed slugs and benchmark the current top 25 keywords before release.",
      "Rebuild titles, H1s, meta descriptions, schema, and internal links before migration rather than after launch.",
    ],
  },
  {
    phase: "Phase 2 — Build the commercial landing architecture",
    items: [
      "Create clean hubs for Weight Loss Surgery Perth, Bariatric Surgery Perth, Gastric Sleeve Perth, Gastric Bypass Perth, Costs & Finance, and Best Bariatric Surgeon Perth.",
      "Split cost intent into a transparent, medically careful cost pathway: fees, Medicare/private health, super access, payment plans, and questions to ask.",
      "Give each procedure page an above-the-fold booking path, eligibility cues, recovery expectations, risks, alternatives, FAQs, and surgeon/team proof.",
      "Use comparison blocks to help anxious patients decide between sleeve, bypass, band, balloon, medication, and non-surgical pathways.",
    ],
  },
  {
    phase: "Phase 3 — Increase conversion trust",
    items: [
      "Move from brochure copy to decision support: outcomes, process, risks, hospital locations, team credentials, and next-step clarity.",
      "Make phone, referral, and consultation CTAs persistent across mobile and desktop.",
      "Add GP/referrer pathway, patient pathway, and self-assessment pathway as separate conversion tracks.",
      "Use reviews, accreditations, hospital affiliations, surgeon profiles, dietitian support, and aftercare process as trust assets.",
    ],
  },
  {
    phase: "Phase 4 — Install growth loops",
    items: [
      "Capture high-intent visitors with cost guide, eligibility checklist, and consultation prep resources.",
      "Retarget procedure and cost-page visitors with education-led ads rather than hard-sell medical claims.",
      "Build local landing pages for Murdoch, Subiaco, Booragoon, Mandurah, and Perth where clinically accurate and useful.",
      "Use call tracking, form source tracking, GA4 events, and CRM attribution to identify which keywords produce consults, not just traffic.",
    ],
  },
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {eyebrow ? (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
          {title}
        </h2>
        <div className="mt-8 text-base leading-8 text-slate-300 md:text-lg">{children}</div>
      </div>
    </section>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10 text-left text-sm">
          <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.16em] text-slate-400">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-5 py-4 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-slate-200">
            {rows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell, index) => (
                  <td
                    key={`${cell}-${index}`}
                    className={index === 0 ? "px-5 py-4 font-medium text-white" : "px-5 py-4"}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MetricCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20">
      <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white">{value}</p>
      <p className="mt-4 text-sm leading-6 text-slate-400">{note}</p>
    </div>
  );
}

function FindingCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
      <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{title}</h3>
      <div className="mt-4 text-sm leading-7 text-slate-300">{children}</div>
    </div>
  );
}

export default function OSWAuditPage() {
  return (
    <main className="min-h-screen bg-[#071112] text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-300">
              Obesity Surgery WA rebuild audit
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.055em] text-white md:text-7xl">
              Keep the rankings. Fix the trust gap. Turn the rebuild into a patient acquisition system.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              Obesity Surgery WA already has valuable organic visibility in Perth bariatric search. The rebuild should not be treated as a design refresh. It should be a controlled migration plus a new growth architecture for high-intent patients, referrers, and finance-led searches.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            <MetricCard label="Ahrefs DR" value="10" note="Low authority, but still ranking because the market is local and intent-specific." />
            <MetricCard label="Live backlinks" value="703" note="From 211 referring domains. Preserve link equity during migration." />
            <MetricCard label="Homepage traffic" value="371" note="Estimated AU organic visits/month, mostly commercial bariatric terms." />
            <MetricCard label="Observed load" value="28.7s" note="Browser navigation timing to full load; DOMContentLoaded at about 7.4s." />
          </div>
        </div>
      </section>

      <Section eyebrow="Executive diagnosis" title="The site is winning rankings despite being underbuilt as a conversion system.">
        <div className="grid gap-5 md:grid-cols-3">
          <FindingCard title="SEO base is real">
            OSW ranks top 3 for valuable Perth bariatric terms including gastric bypass surgery perth, bariatric surgery perth, bariatric surgeons perth, gastric sleeve perth, and weight loss surgery perth. This is worth protecting before any visual rebuild goes live.
          </FindingCard>
          <FindingCard title="Commercial gaps are obvious">
            Cost and finance searches are active, but the fees experience is thin and visually weak. Queries like gastric sleeve cost perth, weight loss surgery perth cost, payment plan, super access, and no-gap searches deserve their own structured journey.
          </FindingCard>
          <FindingCard title="UX does not match the stakes">
            The current WordPress build feels dated, heavy, and brochure-like. Patients making a high-anxiety medical decision need clearer trust signals, surgeon proof, aftercare process, risk explanations, and next-step confidence.
          </FindingCard>
        </div>
      </Section>

      <Section eyebrow="Organic visibility" title="Current rankings are concentrated in a few pages, so migration risk is high.">
        <p>
          Ahrefs shows the homepage carrying most commercial visibility. That creates risk: if the rebuild changes the homepage semantics, internal links, headings, or URL handling, OSW can lose rankings that are currently doing the acquisition work.
        </p>
        <DataTable
          headers={["Keyword", "Volume", "Position", "Traffic", "CPC"]}
          rows={organicKeywords}
        />
        <p className="mt-8">
          The opportunity is not just more content. It is cleaner intent matching. Procedure pages should answer procedure intent. Cost pages should answer cost and finance intent. Trust pages should answer surgeon choice. The current site blends these jobs together, which limits both rankings and conversion.
        </p>
      </Section>

      <Section eyebrow="Pages to protect" title="These URLs should be treated as migration assets, not old pages to replace casually.">
        <DataTable
          headers={["Page", "Traffic", "Traffic value", "Top keyword", "Best position"]}
          rows={topPages}
        />
        <div className="mt-8 rounded-3xl border border-amber-300/20 bg-amber-300/10 p-6 text-amber-50">
          <p className="font-semibold">Migration rule:</p>
          <p className="mt-2 text-sm leading-7 text-amber-100/90">
            Preserve URLs where possible. Where a URL changes, use a direct 301 to the closest matching new page. Do not redirect every old page to the homepage. PDF assets with existing traffic should either remain available, be redirected to equivalent resources, or be replaced with better HTML pages that preserve the same intent.
          </p>
        </div>
      </Section>

      <Section eyebrow="Keyword opportunity" title="The rebuild should be organised around patient intent, not the old menu structure.">
        <DataTable
          headers={["Opportunity", "Volume", "Difficulty", "Intent", "Rebuild response"]}
          rows={opportunityKeywords}
        />
      </Section>

      <Section eyebrow="SERP read" title="Competitors are beatable, but they are clearer on specific intents.">
        <div className="grid gap-5 md:grid-cols-2">
          <FindingCard title="Weight loss surgery Perth">
            OSW ranks #3 organically behind Perth Weight Loss Surgery. The SERP has a local pack and People Also Ask, so the new page needs local proof, FAQ schema, and explicit answers on cost, BMI, Medicare, vomiting after bypass, and eligibility.
          </FindingCard>
          <FindingCard title="Gastric sleeve cost Perth">
            OSW ranks #8 via the fees page while competitors have pages explicitly titled around gastric sleeve costs. This is the biggest easy structural win: create a dedicated, medically careful cost page instead of burying the answer in generic fees.
          </FindingCard>
          <FindingCard title="Best bariatric surgeon Perth">
            OSW ranks #4. The result includes local pack and discussion results from Reddit/Facebook, which means people are looking for social proof and trust. The rebuild needs stronger practitioner profiles, reviews, hospital affiliations, and referral credibility.
          </FindingCard>
          <FindingCard title="AI overview exposure">
            Cost and medication queries trigger AI Overview features. Content needs concise, source-like answer blocks, definitions, eligibility summaries, and FAQ structures that can be cited by AI search while remaining medically compliant.
          </FindingCard>
        </div>
      </Section>

      <Section eyebrow="Technical audit" title="The site responds quickly at server level, but the browser experience is heavy.">
        <p>
          A lightweight crawl of key pages showed successful 200 responses, clean canonical tags, indexable sitemap/robots, and generally complete metadata. The problem is front-end weight and experience quality. Browser timing on the homepage showed full load at roughly 28.7 seconds, DOMContentLoaded around 7.4 seconds, 96 resources, about 1.96 MB transfer, and unusually large CSS transfer around 1.2 MB.
        </p>
        <DataTable
          headers={["Page", "HTML bytes", "Words", "Images", "Forms"]}
          rows={crawlPages}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <FindingCard title="WordPress payload bloat">
            The homepage HTML decoded body was about 235 KB. Most crawled pages were between 145 KB and 211 KB. That points to page-builder markup and plugin weight, not just image size.
          </FindingCard>
          <FindingCard title="CSS/JS opportunity">
            Browser resource timing showed about 1.2 MB CSS and 735 KB JS transferred on the homepage. A modern rebuild should ship far less code, reduce render-blocking assets, and prioritise above-the-fold content.
          </FindingCard>
          <FindingCard title="SEO hygiene is decent">
            Robots.txt points to a sitemap, pages have canonicals, titles, H1s, meta descriptions, and alt text is mostly present. This is a rebuild advantage: the new site can preserve the SEO basics while improving architecture.
          </FindingCard>
          <FindingCard title="Known page issue">
            The fees page returned an empty H1 and three images without alt text in the crawl. That matters because fees/cost is one of the most commercially valuable rebuild sections.
          </FindingCard>
        </div>
      </Section>

      <Section eyebrow="Content architecture" title="Recommended rebuild sitemap">
        <div className="grid gap-5 md:grid-cols-2">
          <FindingCard title="Core acquisition pages">
            Home; Weight Loss Surgery Perth; Bariatric Surgery Perth; Gastric Sleeve Perth; Gastric Bypass Perth; Mini Gastric Bypass; Gastric Band; Revision Surgery; Weight Loss Medication; Non-surgical Weight Loss; Bariatric Dietitian.
          </FindingCard>
          <FindingCard title="High-intent money pages">
            Gastric Sleeve Cost Perth; Weight Loss Surgery Cost Perth; Medicare & Private Health; Super Access for Surgery; Payment Plans; Eligibility Checklist; Book a Consultation.
          </FindingCard>
          <FindingCard title="Trust and E-E-A-T pages">
            Surgeons; Dietitians; Hospitals & Locations; Patient Journey; Risks & Complications; Results & Expectations; GP Referral Information; FAQs.
          </FindingCard>
          <FindingCard title="Local pages">
            Perth, Murdoch, Subiaco, Booragoon, Mandurah. These should be useful location pages with hospital/practice details, not thin doorway pages.
          </FindingCard>
        </div>
      </Section>

      <Section eyebrow="Growth hacker lens" title="Turn search traffic into compounding patient demand.">
        <div className="grid gap-5 md:grid-cols-3">
          <FindingCard title="Activation">
            Replace generic contact CTAs with segmented next steps: Am I eligible?, What will it cost?, Talk to the clinic, Refer a patient. Each CTA should match the page intent.
          </FindingCard>
          <FindingCard title="Capture">
            Build lead magnets that answer painful questions: cost guide, eligibility checklist, GP referral checklist, first appointment prep, and procedure comparison guide.
          </FindingCard>
          <FindingCard title="Nurture">
            Patients often research for weeks. Add email/SMS follow-up for downloaded guides, consultation reminders, FAQ education, and post-consult next steps.
          </FindingCard>
          <FindingCard title="Retarget">
            Retarget cost-page and procedure-page visitors with education-led ads: financing, eligibility, aftercare, and surgeon trust. Avoid aggressive medical claims.
          </FindingCard>
          <FindingCard title="Referral loop">
            Give GPs a fast referral page, downloadable patient handouts, and a simple pathway to send patients to the right surgeon/team.
          </FindingCard>
          <FindingCard title="Measurement">
            Track calls, form submissions, guide downloads, referral submissions, consultation starts, and page-level assisted conversions. Traffic alone is not the growth metric.
          </FindingCard>
        </div>
      </Section>

      <Section eyebrow="Roadmap" title="Priority rebuild plan">
        <div className="space-y-5">
          {roadmap.map((phase) => (
            <div key={phase.phase} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{phase.phase}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Final recommendation" title="Build a fast, medically credible acquisition site — not just a prettier brochure.">
        <p>
          OSW has enough authority and existing visibility to win more of the Perth bariatric market, but the rebuild must be disciplined. Preserve current organic assets, create clearer pages for the highest-value intents, upgrade trust proof, and instrument every meaningful conversion path. If done properly, the new site can protect existing rankings while expanding into cost, finance, surgeon-choice, medication, and local-intent searches.
        </p>
        <div className="mt-10 rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-7">
          <p className="text-xl font-semibold tracking-[-0.02em] text-white">Immediate next action</p>
          <p className="mt-3 text-sm leading-7 text-emerald-50/90">
            Before design starts, create the URL migration map and final page architecture. That single document will prevent avoidable ranking loss and give copy, UX, development, and tracking one shared rebuild blueprint.
          </p>
        </div>
      </Section>
    </main>
  );
}
