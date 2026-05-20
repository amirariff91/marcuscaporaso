import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biosymm Growth Measurement Audit | Week 2",
  description:
    "A Week 2 measurement, Google Ads, analytics tracking, paid media, and Ahrefs audit for Biosymm, ErgoEquip, and Ergoworks Consulting.",
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
      "Measurement truth map and growth audit across clinics, corporate services, ErgoEquip, and Ergoworks Consulting.",
    siteName: "Biosymm Growth Audit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biosymm Growth Measurement Audit",
    description:
      "Week 2 audit covering Ahrefs SEO evidence, Google Ads readiness, tracking governance, and paid media priorities.",
  },
};

const auditDate = "20 May 2026";

const evidence = [
  ["Biosymm", "DR 36", "196 live referring domains", "GTM-57WPM3W8 + GTM-PKLBV4L, GA4 G-6HKPBZ34ML", "Mostly branded/local clinic demand"],
  ["ErgoEquip", "DR 14", "201 live referring domains", "GTM-TSDBG52, GA4 G-V6GPG12LB6, AW-781426384", "High category opportunity if stock, margin and feed quality check out"],
  ["Ergoworks Consulting", "DR 15", "84 live referring domains", "Authenticated CMS review confirms active WordPress lead capture and public tracking", "Active lead-gen site; weak AU organic visibility and outcome mapping still need validation"],
];

const accessNeeds = [
  ["Google Ads", "Correct Marcus/Biosymm account access or export", "Conversion actions, primary/secondary status, auto-tagging, search terms, campaigns, spend, CPA and ROAS."],
  ["GA4 + GTM", "Read access for Biosymm and ErgoEquip", "Event names, conversion flags, ecommerce value, attribution, duplicate tags and source/medium integrity."],
  ["Nookal", "Booking and attendance export", "Booking source, click IDs, appointment status, attendance and revenue where available."],
  ["WooCommerce + Merchant Center", "Sales/feed export", "Purchases, values, product IDs, SKU margin, stock, approvals, disapprovals, shipping and returns settings."],
  ["CRM / sales sheet", "Pipeline stage definitions", "Qualified lead, opportunity, proposal, won/lost, revenue, margin and lost reason."],
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
  ["ergonomic mouse", "5,500", "KD 2", "$0.20", "#32 category page"],
  ["ergonomic keyboard", "3,200", "KD 2", "$0.23", "#23 category page"],
  ["laptop riser", "1,200", "KD 0", "$0.24", "#17"],
  ["laptop stands", "900", "KD 0", "$0.21", "#39"],
  ["sit stand desk", "9,300", "KD 11", "$0.80", "#50"],
  ["ergonomic desk", "700", "KD 6", "—", "#6 blog / #26 category"],
  ["desk foot rest", "500", "KD 0", "$0.31", "#40"],
];

const currentErgoRankings = [
  ["ergonomic keyboard", "3,200", "#23", "Category page", "Rewrite category copy + buying guide + internal links"],
  ["ergonomic mouse", "5,500", "#32", "Category page", "Build comparison content + product schema + Shopping feed alignment"],
  ["laptop riser", "1,200", "#17", "Product/category pages", "Consolidate laptop stand/riser variants into one hub"],
  ["laptop stand foldable", "30", "#4", "Product page", "Defend and expand variants"],
  ["desk foot rest", "500", "#40", "Footrests category", "Add category depth and product comparison table"],
  ["sit stand desk", "9,300", "#50", "Desk pages", "Do not chase broadly until SKU economics are confirmed"],
];

const seoBattlefields = [
  {
    title: "Biosymm local clinic upside is immediate",
    body: "Physio Belmont is already #8 on 200 AU searches/month and sits behind several low-DR local clinics/directories. Belmont, Roxby Downs and Moranbah pages should get refreshed location copy, practitioner/service detail, local FAQs, review proof, Medical/LocalBusiness schema and internal links from relevant service pages.",
  },
  {
    title: "Corporate SEO is a low-competition gap",
    body: "The workplace physiotherapy SERP is weak and fragmented: workplacephysio.com ranks #1 at DR4 and Employ Health ranks #5 at DR18. Build a dedicated workplace physiotherapy / occupational health hub with service pages for injury prevention, onsite physio, pre-employment assessments and workplace ergonomic assessments.",
  },
  {
    title: "ErgoEquip can win before it has authority",
    body: "Ergonomic mouse and keyboard SERPs include shopping/image packs, comparison publishers and retailers. Low-DR ergonomicessentials.com.au ranks top 3/top 9 and ergolink.com.au ranks top 10 for mouse, so the blocker is page quality and merchandising, not only links.",
  },
];

const seoExecution = [
  "Rewrite ErgoEquip keyboard, mouse, laptop stand/riser and footrest category pages around buyer intent: above-the-fold category intro, selection criteria, comparison tables, FAQs, stock/margin-led product ordering and links to best-fit products.",
  "Create supporting comparison/editorial pages: best ergonomic mouse Australia, ergonomic keyboard comparison, laptop riser vs laptop stand, desk foot rest guide, standing desk converter guide. Link each back to the matching category.",
  "For Biosymm, prioritise local clinic page refreshes before broad content: Belmont has 200/month at #8; Moranbah 80/month at #5; Roxby Downs is already #2 and should be defended.",
  "For corporate services, build the workplace physiotherapy cluster because current SERP competitors have low authority. This is the cleanest non-branded B2B organic path across Biosymm and Ergoworks Consulting.",
  "Bring Ergoworks Consulting into acquisition reporting only after its form submissions, calls, emails and thank-you states are mapped to lead owners and qualified outcomes.",
];

const trackingAudit = [
  {
    stream: "Clinics / appointments",
    current: "Biosymm homepage has no forms but many Nookal booking links and 1300 424 679 tel: links. Contact has one form, phone links, multiple mailto routes and more Nookal links.",
    risk: "Booking-click, phone-click and email-click CPA can look efficient while completed bookings, no-shows and attended appointments are unknown.",
    fix: "Keep booking, call and email clicks secondary. Primary only after Nookal or an interim sheet can export completed booking, attended patient, location, source, GCLID/GBRAID/WBRAID and revenue.",
  },
  {
    stream: "Corporate / occupational health",
    current: "Organic visibility is not yet strong for corporate/commercial terms. Lead value is likely high but long-cycle.",
    risk: "Raw enquiries will make paid media look either better or worse than reality because opportunity quality is invisible.",
    fix: "Track qualified lead, opportunity created, proposal sent, won/lost and revenue. Import offline conversions only after match rate is proven.",
  },
  {
    stream: "ErgoEquip ecommerce",
    current: "GA4, GTM and Google Ads tag AW-781426384 are visible. WooCommerce, Contact Form 7, six forms and enquiries@ergoequip.com.au are present.",
    risk: "ROAS can be misleading if purchase value, stock, margin, product feed eligibility and lead forms are not separated.",
    fix: "Primary: purchase with dynamic value. Secondary: add to cart, checkout start, product enquiry. Segment by SKU margin and stock before June push.",
  },
  {
    stream: "Ergoworks Consulting",
    current: "Authenticated CMS review shows an active WordPress lead-gen site with live enquiry, booking, newsletter and webinar forms, public tracking tags, phone/email routes and thank-you-page conversion states.",
    risk: "Tracking exists, but reporting can still be polluted if phone clicks, email clicks, form submits, newsletter signups and thank-you-page hits are treated as equal commercial outcomes.",
    fix: "Keep clicks and newsletter events secondary. Use enquiry and booking forms as lead events only after attribution fields, deduped thank-you tracking, recipient routing and qualified-lead outcomes are confirmed.",
  },
];

const conversionTruthMap = [
  ["Biosymm clinic booking", "Nookal booking completed or attended appointment", "Nookal export / interim sheet", "Primary only when matched to source + click ID", "nookal_booking_completed, appointment_attended"],
  ["Biosymm phone lead", "Qualified call or booked appointment from call", "Call log / call tracking / reception outcome", "Secondary until duration + outcome are captured", "phone_click, qualified_call"],
  ["Biosymm contact form", "Qualified enquiry routed to right clinic/service owner", "Website form + lead routing sheet", "Secondary until accepted/qualified", "form_submit, lead_qualified"],
  ["Corporate / occupational health", "Opportunity created, proposal sent, won revenue", "CRM or interim pipeline sheet", "Primary at qualified opportunity or won revenue", "opportunity_created, proposal_sent, deal_won"],
  ["ErgoEquip ecommerce", "WooCommerce order with revenue, SKU and margin segment", "WooCommerce + GA4 ecommerce + Ads import", "Primary purchase value", "purchase, refund"],
  ["ErgoEquip product enquiry", "Sales-qualified product or bulk-order enquiry", "Contact Form 7 + inbox outcome", "Secondary until qualified", "product_enquiry_submit, product_lead_qualified"],
  ["Ergoworks Consulting", "Qualified enquiry, booking request, webinar lead or sales opportunity", "Gravity Forms + routing/outcome sheet", "Secondary until lead quality and outcomes are verified", "ergoworks_form_submit, booking_request, consulting_lead_qualified"],
];

const trackingHygiene = [
  ["Biosymm GTM cleanup", "Two containers are present", "Audit ownership and firing overlap for GTM-57WPM3W8 and GTM-PKLBV4L. Consolidate or document why both exist before adding conversion tags."],
  ["Google Ads tag", "Not visible on Biosymm public scan", "Do not assume Ads conversion tracking is live. Confirm inside the real Google Ads account and GTM containers."],
  ["Meta pixel", "Not visible on Biosymm or ErgoEquip scans", "Retargeting and Meta CPA reporting will be blind unless a pixel/CAPI path is intentionally added with consent controls."],
  ["Cross-domain booking", "Nookal links send users off-site", "Add outbound click events and verify UTMs, gclid, gbraid and wbraid survive into Nookal or are captured before redirect."],
  ["WooCommerce ecommerce", "ErgoEquip has WooCommerce and Ads tag", "Validate GA4 recommended ecommerce events, purchase value/currency, transaction_id de-duping, refunds and enhanced conversions."],
  ["Ergoworks Consulting tracking", "GTM, GA4, legacy Universal Analytics and Meta Pixel paths are present", "Audit firing rules for duplicate tracking, confirm thank-you-page triggers, and standardise events for phone_click, email_click, enquiry_submit, booking_request and newsletter_signup."],
  ["Ergoworks Consulting forms", "Active Gravity Forms lead capture exists with substantial historical activity", "Confirm notification owners, spam filtering, hidden attribution fields, thank-you redirects and lead outcome capture before importing forms into Ads."],
  ["Ergoworks Consulting WordPress ops", "Admin and plugin hygiene affects measurement trust", "Review least-privilege access, restrict unnecessary high-risk admin capabilities, patch maintenance items and tighten public WordPress exposure."],
  ["GA4 event taxonomy", "Mixed businesses in one reporting story", "Use consistent stream, location, service_type, lead_type, source_system and outcome_stage parameters across events."],
];

const leadRoutingFields = [
  ["identity", "lead_id, created_at, name, phone, email, consent flag"],
  ["source", "landing_page, referrer, utm_source, utm_medium, utm_campaign, utm_content, utm_term, gclid, gbraid, wbraid, fbclid"],
  ["route", "brand, stream, clinic/location, service_type, form_name, Nookal URL or Ergoworks lead path, recipient inbox/person, SLA owner"],
  ["quality", "new/existing customer, lead_type, urgency, fit score, qualified yes/no, disqualification reason"],
  ["outcome", "booking_created, attended, opportunity_created, proposal_sent, won/lost, revenue, margin band, close date"],
];

const croActions = [
  ["Homepage", "No forms; conversion depends on Nookal, phone and CTA clicks", "Use one primary CTA per service stream, add location-aware clinic CTA copy, and track CTA location/text as event parameters."],
  ["Contact page", "One form plus many phone, email and Nookal routes", "Reduce ambiguity by grouping routes by location/service and adding expectation-setting copy: response time, booking path, who receives it."],
  ["Nookal booking", "External booking path creates attribution break", "Add pre-click event tracking and a post-booking outcome import; do not optimise campaigns to outbound clicks alone."],
  ["ErgoEquip product/category pages", "Commercial category upside but current organic positions sit around page 2–4", "Build SKU-led landing pages for high-margin/in-stock categories with trust, delivery, returns, bulk-order and enquiry CTAs above the fold."],
  ["Forms", "ErgoEquip and Biosymm have visible form paths; Ergoworks Consulting has active Gravity Forms lead capture", "Standardise thank-you states, hidden attribution fields and deduping across Contact Form 7 and Gravity Forms. Confirm Ergoworks notification routing before treating submissions as leads."],
];

const googleAdsChecks = [
  ["Conversion actions", "Blocked until account export", "Classify every action: purchase, qualified lead, booking, attended patient, call, micro-action."],
  ["Primary vs secondary", "High risk", "Demote booking clicks, contact clicks, page views, form starts and short calls unless proven commercial outcomes."],
  ["Enhanced conversions", "Need account check", "Enable for lead and purchase actions where privacy-compliant first-party data exists."],
  ["Offline imports", "Missing from public evidence", "Start with weekly CSV/import from Nookal, WooCommerce, CRM or interim sheet."],
  ["Account access", "Real account not visible", "Tools only expose 3246645286 and 4756545876; 4756545876 is the Amir Ariff manager with no client accounts, and 3246645286 cannot be confirmed as Marcus/Biosymm."],
  ["Search term waste", "Needs Google Ads data", "Do not recommend negatives from guesses. Pull last 30 days search terms first."],
];

const merchantCenterChecks = [
  ["Merchant Center", "Confirm account is active and linked to the correct Google Ads account before Shopping or retail PMax."],
  ["WooCommerce feed", "Confirm feed refresh, product IDs, GTIN/MPN/brand where available, prices, availability and landing-page match."],
  ["Approvals", "Review product approvals, disapprovals, warnings, policy issues, shipping, returns, tax, currency and destination settings."],
  ["SKU economics", "Segment high-margin and in-stock SKUs first; do not push broad sit-stand desk demand until margin and supply are confirmed."],
  ["Purchase value", "Validate GA4/Ads purchase value, currency, transaction_id dedupe, refunds and enhanced conversions before ROAS decisions."],
  ["Campaign structure", "Separate Search from Shopping/PMax; split brand, non-brand category, product-brand and remarketing where volume allows."],
];

const paidMediaPlan = [
  {
    title: "Do not scale blended CPA yet",
    body: "The commercial streams are too different. Clinics, corporate services, Ergoworks Consulting and equipment need separate scorecards before budget decisions are safe.",
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
    body: "Local clinic campaigns can be tested for demand, but booking-click CPA should not be treated as patient acquisition CPA until Nookal outcomes and qualified calls are captured.",
  },
];

const weekTwo = [
  "Export Google Ads conversion actions from the real Marcus/Biosymm ad account.",
  "Map every Biosymm, ErgoEquip and Ergoworks form, phone, Nookal link, WooCommerce path, thank-you page and email route to the person/system receiving it.",
  "Confirm Ergoworks Gravity Forms notification owners, hidden attribution fields, thank-you triggers and qualified-lead outcomes for enquiry and booking forms.",
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
            This audit combines Ahrefs, public tracking checks, Google Ads audit criteria, paid media planning and analytics tracking review across Biosymm, ErgoEquip and Ergoworks Consulting.
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
          Ahrefs was used for domain strength, backlinks, top pages, organic keywords and keyword opportunity research. Public crawls checked visible GA4, GTM, Google Ads tags, forms, Nookal links, phone/email routes, WooCommerce and pixel presence. Biosymm shows two GTM containers and one GA4 stream but no visible Google Ads AW tag or Meta pixel. ErgoEquip shows GTM, GA4, AW-781426384, WooCommerce and Contact Form 7. Google Ads account tools were checked, but the accessible accounts available here do not appear to be Marcus/Biosymm’s live ad account.
        </p>
        <p className="mt-5">
          Public checks can confirm visible tags, links, forms and indexable SEO data. They cannot confirm backend conversion settings, hidden server-side events, CRM outcomes, booking completion, attribution integrity or revenue quality without account exports.
        </p>
        <DataTable headers={["Property", "Authority", "Backlinks", "Tracking", "Commercial read"]} rows={evidence} />
      </Section>

      <Section eyebrow="Access blockers" title="The next findings depend on source-of-truth exports.">
        <p>
          This is a pre-access paid media audit. It is safe to validate visible tags, conversion surfaces, SEO demand and paid media readiness. It is not safe to judge spend efficiency, CPA, ROAS, wasted spend, Quality Score, campaign structure or bidding performance until the real ad, analytics, booking and revenue systems are shared.
        </p>
        <p className="mt-5">
          Authenticated CMS review changed the Ergoworks Consulting read: it is not simply an inactive or untracked property. It is an active WordPress acquisition site. The remaining blocker is whether its lead signals are cleanly attributed, routed, deduped and connected to qualified pipeline or revenue outcomes.
        </p>
        <DataTable headers={["System", "Need", "Why it matters"]} rows={accessNeeds} />
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
        <DataTable headers={["Opportunity keyword", "AU volume", "Difficulty", "CPC", "Current evidence"]} rows={ergoKeywords} />
        <DataTable headers={["Current ranking", "AU volume", "Position", "Current URL", "Action"]} rows={currentErgoRankings} />
      </Section>

      <Section eyebrow="SEO battlefields" title="Where the Ahrefs evidence changes the action plan.">
        <div className="grid gap-5 md:grid-cols-3">
          {seoBattlefields.map((item) => <FindingCard key={item.title} title={item.title}><p>{item.body}</p></FindingCard>)}
        </div>
        <div className="mt-8 rounded-3xl border border-border bg-white p-6 shadow-sm">
          <ol className="grid gap-4 text-base leading-7 text-muted md:grid-cols-2">
            {seoExecution.map((item) => <li key={item} className="flex gap-3"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cta" /> <span>{item}</span></li>)}
          </ol>
        </div>
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

      <Section eyebrow="Conversion truth map" title="Every conversion needs a source system, owner and commercial status.">
        <p>
          The immediate risk is not lack of activity; it is treating activity as revenue. The table below defines which actions can safely optimise bidding and which should stay diagnostic until they are matched to business outcomes.
        </p>
        <DataTable headers={["Stream", "Commercial truth", "Source system", "Bidding status", "GA4 event names"]} rows={conversionTruthMap} />
      </Section>

      <Section eyebrow="GTM / GA4 / Nookal / WooCommerce" title="Measurement fixes before campaign scaling.">
        <DataTable headers={["Area", "Observed issue", "Report edit / next action"]} rows={trackingHygiene} />
      </Section>

      <Section eyebrow="Lead routing" title="The interim sheet should be designed for offline conversion imports from day one.">
        <p>
          If Nookal, WooCommerce and CRM exports are not ready this week, use a shared routing sheet as the temporary source of truth. It should capture attribution, routing and outcome fields rather than only name, phone and message.
        </p>
        <DataTable headers={["Field group", "Required fields"]} rows={leadRoutingFields} />
      </Section>

      <Section eyebrow="CRO actions" title="Fix post-click friction that is visible from the scan.">
        <DataTable headers={["Surface", "Evidence", "Action"]} rows={croActions} />
      </Section>

      <Section eyebrow="Google Ads audit lens" title="Major Google Ads optimisation decisions should wait for the real conversion export.">
        <p>
          Using the Google Ads audit checklist: conversion tracking, primary/secondary action hygiene, enhanced conversions, offline imports and search term waste are the first checks. Without the actual Marcus/Biosymm account export, a spend optimisation recommendation would be guesswork.
        </p>
        <DataTable headers={["Check", "Status", "Recommended action"]} rows={googleAdsChecks} />
      </Section>

      <Section eyebrow="ErgoEquip feed readiness" title="Shopping or PMax should not launch until feed, stock and value tracking are proven.">
        <p>
          ErgoEquip has the clearest June paid opportunity, but the right starting point is intent structure and feed hygiene, not scale claims. Search can be built around exact and phrase clusters first; Shopping or retail PMax should wait until product approvals, margin, stock and purchase-value tracking are verified.
        </p>
        <DataTable headers={["Area", "Required check"]} rows={merchantCenterChecks} />
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
