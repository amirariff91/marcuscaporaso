import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biosymm Growth Measurement Audit | Week 2",
  description:
    "A Week 2 measurement, Google Ads, analytics tracking, paid media, and Ahrefs audit for Biosymm, ErgoEquip, and ErgoConsulting.",
  alternates: {
    canonical: "https://biosymm.marcuscaporaso.com/",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "article",
    url: "https://biosymm.marcuscaporaso.com/",
    title: "Biosymm Growth Measurement Audit",
    description:
      "Measurement truth map and growth audit across clinics, corporate services, ErgoEquip, and ErgoConsulting.",
    siteName: "Biosymm Growth Audit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biosymm Growth Measurement Audit",
    description:
      "Week 2 audit covering Ahrefs SEO evidence, Google Ads readiness, tracking gaps, and paid media priorities.",
  },
};

const auditDate = "20 May 2026";

const evidence = [
  ["Biosymm", "DR 36", "196 live referring domains", "GA4 + GTM visible", "Mostly branded/local clinic demand"],
  ["ErgoEquip", "DR 14", "201 live referring domains", "GA4 + Google Ads tag visible", "High category upside, low current traffic"],
  ["ErgoConsulting", "DR 15", "84 live referring domains", "No public GA/GTM/forms found", "No AU organic keywords found"],
];

const biosymmKeywords = [
  ["biosymm", "300", "#1", "204", "Branded"],
  ["physio roxby downs", "20", "#2", "10", "Local clinic"],
  ["remedial massage belmont", "80", "#4", "9", "Local clinic"],
  ["fifo physio jobs", "150", "#6", "8", "Recruitment"],
  ["physio belmont", "200", "#8", "7", "Local clinic"],
  ["moranbah physio", "80", "#5", "6", "Local clinic"],
  ["soter analytics", "30", "#4", "3", "Partner/branded"],
];

const ergoKeywords = [
  ["ergonomic chair", "15,000", "KD 1", "4,700", "Commercial"],
  ["laptop stand", "15,000", "KD 0", "4,800", "Commercial"],
  ["ergonomic mouse", "5,300", "KD 2", "1,200", "Commercial + transactional"],
  ["ergonomic keyboard", "3,000", "KD 2", "700", "Commercial + transactional"],
  ["standing desk converter", "800", "KD 0", "350", "Commercial"],
  ["adjustable laptop stand", "500", "KD 0", "6,200", "Transactional"],
];

const currentErgoRankings = [
  ["ergonomic keyboard", "3,200", "#23", "Category page", "Priority SEO + Shopping landing page"],
  ["ergonomic mouse", "5,500", "#32", "Category page", "Priority SEO + Shopping landing page"],
  ["laptop stand foldable", "30", "#4", "Product page", "Defend and expand variants"],
  ["penguin mouse", "70", "#10", "Product page", "Defend brand/product intent"],
  ["ergonomic workstation products", "30", "#10", "Homepage", "Build collection/hub page"],
];

const trackingAudit = [
  {
    stream: "Clinics / appointments",
    current: "Biosymm has Nookal booking links, phone numbers, contact page and email routes.",
    risk: "Booking clicks can be counted as conversions even when no booking or attended appointment happened.",
    fix: "Keep booking clicks secondary. Use completed booking or attended patient as the primary outcome once Nookal can export source, GCLID/GBRAID/WBRAID, status and revenue.",
  },
  {
    stream: "Corporate / occupational health",
    current: "Organic visibility is not yet strong for corporate/commercial terms. Lead value is likely high but long-cycle.",
    risk: "Raw enquiries will make paid media look either better or worse than reality because opportunity quality is invisible.",
    fix: "Track qualified lead, opportunity created, proposal sent, won/lost and revenue. Import offline conversions only after match rate is proven.",
  },
  {
    stream: "ErgoEquip ecommerce",
    current: "GA4 and Google Ads tag are visible. WooCommerce and Contact Form 7 are present.",
    risk: "ROAS can be misleading if purchase value, stock, margin, product feed eligibility and lead forms are not separated.",
    fix: "Primary: purchase with dynamic value. Secondary: add to cart, checkout start, product enquiry. Segment by SKU margin and stock before June push.",
  },
  {
    stream: "ErgoConsulting",
    current: "Public site appears placeholder-like with no visible analytics, forms or AU organic keywords.",
    risk: "Treating this as an acquisition property will muddy reporting.",
    fix: "Decide: rebuild, redirect, or retire. If kept active, install one clean GTM/GA4 setup and a single qualified lead path.",
  },
];

const googleAdsChecks = [
  ["Conversion actions", "Blocked until account export", "Classify every action: purchase, qualified lead, booking, attended patient, call, micro-action."],
  ["Primary vs secondary", "High risk", "Demote booking clicks, contact clicks, page views, form starts and short calls unless proven commercial outcomes."],
  ["Enhanced conversions", "Need account check", "Enable for lead and purchase actions where privacy-compliant first-party data exists."],
  ["Offline imports", "Missing from public evidence", "Start with weekly CSV/import from Nookal, WooCommerce, CRM or interim sheet."],
  ["Auto-tagging", "Accessible account checked was not Marcus", "Need Marcus/Biosymm Google Ads account access; current accessible accounts appear unrelated to this audit."],
  ["Search term waste", "Needs Google Ads data", "Do not recommend negatives from guesses. Pull last 30 days search terms first."],
];

const paidMediaPlan = [
  {
    title: "Do not scale blended CPA yet",
    body: "The commercial streams are too different. Clinics, corporate, consulting and equipment need separate scorecards before budget decisions are safe.",
  },
  {
    title: "June ErgoEquip push should be SKU-led",
    body: "Use only confirmed in-stock, high-margin, feed-approved products. Start with ergonomic mouse, ergonomic keyboard, laptop stand and standing desk converter clusters.",
  },
  {
    title: "Corporate demand needs outcome imports",
    body: "For corporate services, optimise to qualified opportunity and won revenue. Raw forms will over-reward cheap low-fit leads.",
  },
  {
    title: "Clinic campaigns can move faster",
    body: "Local clinic demand has short feedback loops, but only if Nookal outcomes and call quality are captured beyond click-level events.",
  },
];

const weekTwo = [
  "Export Google Ads conversion actions from the real Marcus/Biosymm ad account.",
  "Map every form, phone, Nookal link, WooCommerce path and email route to the person/system receiving it.",
  "Mark true outcomes as primary; demote micro-actions to secondary or diagnostic only.",
  "Build a stream-level scorecard: clinics, corporate, consultancy, equipment.",
  "Confirm Nookal UTM/click-ID preservation and booking/attendance export.",
  "Confirm WooCommerce purchase values, feed health, stock and margin by SKU.",
  "Set an interim offline outcome sheet if CRM/Nookal/Woo exports are not ready.",
  "Recalculate CPA by stream using only true outcomes before changing budget allocation.",
];

function Section({ eyebrow, title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border-subtle py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cta">{eyebrow}</p> : null}
        <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-fg md:text-5xl">{title}</h2>
        <div className="mt-8 text-base leading-8 text-muted md:text-lg">{children}</div>
      </div>
    </section>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border-subtle text-left text-sm">
          <thead className="bg-bg-raised text-xs uppercase tracking-[0.16em] text-muted-2">
            <tr>{headers.map((header) => <th key={header} className="px-5 py-4 font-semibold">{header}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-border-subtle text-muted">
            {rows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell, index) => (
                  <td key={`${cell}-${index}`} className={index === 0 ? "px-5 py-4 font-semibold text-fg" : "px-5 py-4"}>{cell}</td>
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
    <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
      <p className="text-sm uppercase tracking-[0.18em] text-muted-2">{label}</p>
      <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-fg">{value}</p>
      <p className="mt-4 text-sm leading-6 text-muted">{note}</p>
    </div>
  );
}

function FindingCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold tracking-[-0.02em] text-fg">{title}</h3>
      <div className="mt-4 text-sm leading-7 text-muted">{children}</div>
    </div>
  );
}

export default function BiosymmAuditPage() {
  return (
    <main className="min-h-screen bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div className="absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-cta/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cta">Client audit / Week 2</p>
          <h1 className="mt-6 max-w-5xl text-display font-semibold text-fg">Biosymm needs measurement truth before budget truth.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-muted">
            This audit combines Ahrefs, public tracking checks, Google Ads audit criteria, paid media planning and analytics tracking review across Biosymm, ErgoEquip and ErgoConsulting.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-fg">
            <span className="rounded-full border border-border bg-white px-4 py-2">Prepared for Marcus</span>
            <span className="rounded-full border border-border bg-white px-4 py-2">Audit date: {auditDate}</span>
            <span className="rounded-full border border-border bg-white px-4 py-2">Noindex client report</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-4 md:px-8">
          <MetricCard label="Core call" value="Do not scale yet" note="Blended CPA is not decision-grade until true outcomes are separated by stream." />
          <MetricCard label="Biosymm SEO" value="DR 36" note="Strongest asset, but organic traffic skews branded/local/recruitment." />
          <MetricCard label="ErgoEquip SEO" value="DR 14" note="Low current traffic, but category keywords have strong AU demand and low difficulty." />
          <MetricCard label="Tracking risk" value="High" note="Micro-actions can pollute bidding if treated as primary conversions." />
        </div>
      </section>

      <Section eyebrow="Evidence base" title="What was checked">
        <p>
          Ahrefs was used for domain strength, backlinks, top pages, organic keywords and keyword opportunity research. Public crawls checked visible GA4, GTM, Google Ads tags, forms, Nookal links, phone/email routes, WooCommerce and pixel presence. Google Ads account tools were checked, but the accessible accounts available here do not appear to be Marcus/Biosymm’s live ad account.
        </p>
        <DataTable headers={["Property", "Authority", "Backlinks", "Tracking", "Commercial read"]} rows={evidence} />
      </Section>

      <Section eyebrow="Ahrefs / SEO" title="Biosymm has trust, but search demand is mostly not corporate yet.">
        <DataTable headers={["Keyword", "AU volume", "Position", "Est. traffic", "Intent"]} rows={biosymmKeywords} />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <FindingCard title="Clinic pages are doing the work"><p>Roxby Downs, Belmont and Moranbah pages rank for local clinic demand. These can support local campaigns if booking outcomes are tracked cleanly.</p></FindingCard>
          <FindingCard title="Recruitment traffic is mixed in"><p>FIFO physio terms are visible. Useful for hiring, but they should not be read as patient or corporate acquisition.</p></FindingCard>
          <FindingCard title="Corporate SEO is underbuilt"><p>Workplace physiotherapy and occupational health terms exist, but the current ranking profile does not yet show strong corporate acquisition depth.</p></FindingCard>
        </div>
      </Section>

      <Section eyebrow="ErgoEquip / SEO + paid search" title="ErgoEquip’s June opportunity is category-led, not generic brand-led.">
        <p>
          Ahrefs shows current rankings at positions 23–32 for high-volume ergonomic keyboard and mouse terms. That is the clearest combined SEO and paid search opportunity, provided stock, margin and feed eligibility are confirmed first.
        </p>
        <DataTable headers={["Opportunity keyword", "AU volume", "Difficulty", "Traffic potential", "Intent"]} rows={ergoKeywords} />
        <DataTable headers={["Current ranking", "AU volume", "Position", "Current URL", "Action"]} rows={currentErgoRankings} />
      </Section>

      <Section eyebrow="Analytics tracking" title="The conversion architecture must separate signals from outcomes.">
        <div className="grid gap-5 md:grid-cols-2">
          {trackingAudit.map((item) => (
            <FindingCard key={item.stream} title={item.stream}>
              <p><strong className="text-fg">Current:</strong> {item.current}</p>
              <p className="mt-3"><strong className="text-fg">Risk:</strong> {item.risk}</p>
              <p className="mt-3"><strong className="text-fg">Fix:</strong> {item.fix}</p>
            </FindingCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Google Ads audit lens" title="Google Ads optimisation should wait for the real conversion export.">
        <p>
          Using the Google Ads audit checklist: conversion tracking, primary/secondary action hygiene, enhanced conversions, offline imports and search term waste are the first checks. Without the actual Marcus/Biosymm account export, a spend optimisation recommendation would be guesswork.
        </p>
        <DataTable headers={["Check", "Status", "Recommended action"]} rows={googleAdsChecks} />
      </Section>

      <Section eyebrow="Paid media strategy" title="Budget decisions should follow the stream scorecard.">
        <div className="grid gap-5 md:grid-cols-2">
          {paidMediaPlan.map((item) => <FindingCard key={item.title} title={item.title}><p>{item.body}</p></FindingCard>)}
        </div>
      </Section>

      <Section eyebrow="Week 2 execution" title="The practical checklist for Marcus">
        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
          <ol className="grid gap-4 text-base leading-7 text-muted md:grid-cols-2">
            {weekTwo.map((item) => <li key={item} className="flex gap-3"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cta" /> <span>{item}</span></li>)}
          </ol>
        </div>
      </Section>

      <Section eyebrow="Bottom line" title="One job this week: make CPA commercial, not cosmetic.">
        <div className="rounded-[2rem] bg-fg p-8 text-bg md:p-10">
          <p className="max-w-4xl text-2xl font-semibold leading-9 tracking-[-0.02em] md:text-4xl md:leading-[1.15]">
            Build the conversion truth map and lead routing map first. Then demote micro-actions so reported CPA reflects completed bookings, qualified leads, ecommerce purchases, opportunities and revenue — not clicks that merely look busy.
          </p>
        </div>
      </Section>
    </main>
  );
}
