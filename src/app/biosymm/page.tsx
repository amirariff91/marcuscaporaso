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

const auditDate = "26 May 2026";

const evidence = [
  ["Biosymm", "DR 36", "196 live referring domains", "GTM-57WPM3W8 + GTM-PKLBV4L, GA4 G-6HKPBZ34ML", "Mostly branded/local clinic demand"],
  ["ErgoEquip", "DR 14", "201 live referring domains", "GTM-TSDBG52, GA4 G-V6GPG12LB6, AW-781426384", "High category opportunity if stock, margin and feed quality check out"],
  ["Ergoworks Consulting", "DR 15", "84 live referring domains", "Authenticated CMS review confirms active WordPress lead capture and public tracking", "Active lead-gen site; weak AU organic visibility and outcome mapping still need validation"],
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

const growthStreamScorecard = [
  ["Ergonomics / Manual Handling", "Corporate services and consulting lead gen", "High — lowest competition SERP", "Qualified consulting enquiry or opportunity created", "Map Ergoworks form submissions to qualified outcomes; validate phone/email routing"],
  ["Clinics", "Volume patient acquisition across 8 locations", "High — demand exists, tracking incomplete", "Completed booking or attended appointment (not click)", "Confirm Nookal booking export with source + click ID; promote top booking events to primary conversions"],
  ["ErgoEquip", "Ecommerce revenue generation", "High — only verified revenue stream", "Purchase value, ROAS, repeat order rate", "Confirm SKU economics (margin, stock) before scaling; validate feed + Shopping approval status"],
  ["Corporate Services", "B2B pipeline — longest cycle, highest value", "Medium — build measurement before scaling", "Opportunity created, proposal sent, won revenue", "Create pipeline CRM or interim sheet; import offline conversions only after match rate proven"],
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
  ["Homepage", "17 Nookal external booking links; no clear primary CTA hierarchy; H1 is company-focused not outcome-focused", "Establish one primary CTA per service stream. Add outcome-focused copy above the fold. Wrap Nookal links in tracked click events so booking intent is measurable before the off-site jump."],
  ["Contact page", "One form plus many phone, email and Nookal routes", "Reduce ambiguity by grouping routes by location/service and adding expectation-setting copy: response time, booking path, who receives it."],
  ["Nookal booking", "External booking path creates attribution break — gclid/utm likely lost at redirect", "Add pre-click event tracking and a post-booking outcome import; do not optimise campaigns to outbound clicks alone."],
  ["Landing pages for paid", "Agency flagged: keywords must appear on landing pages; QS suffering as a result", "The pages ads land on must contain the target keyword in H1, body, and meta title. For physio clinic ads, each location page needs localised keyword content."],
  ["ErgoEquip product/category pages", "Commercial category upside but current organic positions sit around page 2–4", "Build SKU-led landing pages for high-margin/in-stock categories with trust, delivery, returns, bulk-order and enquiry CTAs above the fold."],
  ["Forms", "ErgoEquip and Biosymm have visible form paths; Ergoworks Consulting has active Gravity Forms lead capture", "Standardise thank-you states, hidden attribution fields and deduping across Contact Form 7 and Gravity Forms. Confirm Ergoworks notification routing before treating submissions as leads."],
];

const googleAdsChecks = [
  ["Conversion actions", "Blocked until account export", "Classify every action: purchase, qualified lead, booking, attended patient, call, micro-action."],
  ["Primary vs secondary", "High risk", "Demote booking clicks, contact clicks, page views, form starts and short calls unless proven commercial outcomes."],
  ["Enhanced conversions", "Need account check", "Enable for lead and purchase actions where privacy-compliant first-party data exists. Critical for AU healthcare with Consent Mode v2."],
  ["Consent Mode v2", "Status unknown", "AU healthcare context: verify Consent Mode v2 is implemented. Required for Enhanced Conversions and for retaining modelled data post-consent denial."],
  ["Offline imports", "Missing from public evidence", "Start with weekly CSV/import from Nookal, WooCommerce, CRM or interim sheet."],
  ["Account access", "Real account not visible", "Tools only expose 3246645286 and 4756545876; 4756545876 is the Amir Ariff manager with no client accounts, and 3246645286 cannot be confirmed as Marcus/Biosymm."],
  ["Search term waste", "Needs Google Ads data", "Do not recommend negatives from guesses. Pull last 30 days search terms first."],
  ["Brand/non-brand split", "Unknown", "Confirm whether brand (biosymm) and non-brand (physio belmont, workplace physio) campaigns are separated. Blended CPA hides true non-brand cost."],
  ["Quality Score", "Agency flagged — needs improvement", "Agency stated QS needs improvement and keywords must appear on landing pages. Homepage H1 has zero target keywords — direct fix needed."],
];

const merchantCenterChecks = [
  ["Merchant Center", "Confirm account is active and linked to the correct Google Ads account before scaled Shopping or retail PMax."],
  ["WooCommerce feed", "Confirm feed refresh, product IDs, GTIN/MPN/brand where available, prices, availability and landing-page match."],
  ["Approvals", "Review product approvals, disapprovals, warnings, policy issues, shipping, returns, tax, currency and destination settings."],
  ["SKU economics", "Segment high-margin and in-stock SKUs first; do not push broad sit-stand desk demand until margin and supply are confirmed."],
  ["Purchase value", "Validate GA4/Ads purchase value, currency, transaction_id dedupe, refunds and enhanced conversions before ROAS decisions."],
  ["Campaign structure", "Separate Search from Shopping/PMax; split brand, non-brand category, product-brand and remarketing where volume allows. Shopping or PMax should not be scaled further until feed, stock, margin and purchase tracking are proven — some PMax activity is already live."],
];

const decisionsRequired = [
  ["Google Ads account access or export (conversion actions, campaigns, spend)", "Greg / Marcus", "Cannot validate CPA, Quality Score, search terms, or conversion classification without the real account"],
  ["Nookal booking export with source and click ID fields", "Greg / Christine", "Required to confirm whether booking clicks convert to completed, attended appointments — and at what rate per clinic"],
  ["WooCommerce SKU-level margin and stock data", "Christine", "Required before scaling ErgoEquip spend beyond current budget — do not push categories with thin margin or low stock"],
  ["Ergoworks Consulting lead routing confirmation", "Christine / Ergoworks team", "Which person/inbox receives each Gravity Forms notification? Are qualified leads currently tracked separately from spam and newsletters?"],
  ["Pipeline stage definitions for corporate services", "Greg", "What counts as a qualified lead, opportunity, proposal, and won deal? Needed to set up offline conversion imports."],
  ["Confirmation of Consent Mode v2 status for AU healthcare", "Marcus / Dev", "Required for Enhanced Conversions and retaining modelled data in GA4 post-consent denial"],
];

const weekTwo = [
  "Gain access to the real Marcus/Biosymm Google Ads account and export all conversion actions with primary/secondary status.",
  "Map every Biosymm, ErgoEquip, and Ergoworks form, phone number, Nookal link, WooCommerce path, thank-you page, and email route to the person or system receiving it.",
  "Promote the top Biosymm booking events (book_now_button_click_sr, phone_click_sr) to GA4 key events and Google Ads primary conversion actions.",
  "Confirm Nookal UTM and click-ID preservation — do booking links retain source data across the redirect?",
  "Confirm Ergoworks Gravity Forms notification routing, hidden attribution fields, thank-you triggers, and qualified-lead outcome capture.",
  "Confirm WooCommerce purchase values, product feed health, stock, and margin by SKU category.",
  "Build a stream-level scorecard tracking clinics, corporate services, ErgoEquip, and Ergoworks separately — no more blended CPA.",
  "Recalculate CPA by stream using only confirmed commercial outcomes before changing any budget allocation.",
  "Set up an interim offline lead outcome sheet if Nookal, WooCommerce, or CRM exports are not ready within 7 days.",
];

function Section({ eyebrow, title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border-subtle py-16 md:py-24">
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
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
        <table className="min-w-full divide-y divide-border text-left text-sm">
          <thead className="bg-bg-raised text-xs uppercase tracking-[0.16em] text-muted-2">
            <tr className="border-b-2 border-border">{headers.map((header) => <th key={header} className="px-5 py-4 font-semibold">{header}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-border-subtle text-muted">
            {rows.map((row, rowIndex) => (
              <tr key={row.join("-")} style={rowIndex % 2 !== 0 ? { backgroundColor: "oklch(97% 0.004 80)" } : {}}>
                {row.map((cell, index) => (
                  <td key={`${cell}-${index}`} className={index === 0 ? "px-5 py-3.5 font-semibold text-fg" : "px-5 py-3.5"}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MetricCard({ label, value, note, status }: { label: string; value: string; note: string; status?: "good" | "warning" | "critical" | "neutral" }) {
  const dot = status === "critical" ? "bg-red-500" : status === "warning" ? "bg-amber-400" : status === "good" ? "bg-cta" : null;
  return (
    <div className="relative rounded-3xl border border-border bg-white p-6 shadow-sm">
      {dot && <span className={`absolute right-5 top-5 h-2.5 w-2.5 rounded-full ${dot}`} />}
      <p className="text-sm uppercase tracking-[0.18em] text-muted-2">{label}</p>
      <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-fg">{value}</p>
      <p className="mt-4 text-sm leading-6 text-muted">{note}</p>
    </div>
  );
}

function FindingCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
      <div className="mb-4 h-0.5 w-8 rounded-full bg-cta" />
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
            This is a growth operating audit. It identifies which revenue streams deserve attention, what measurement gaps are blocking confident budget decisions, and what actions happen next.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-fg">
            <span className="rounded-full border border-border bg-white px-4 py-2">Prepared for Marcus</span>
            <span className="rounded-full border border-border bg-white px-4 py-2">Audit date: {auditDate}</span>
            <span className="rounded-full border border-border bg-white px-4 py-2">Client: Biosymm Group</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-4 md:px-8">
          <MetricCard label="Core call" value="Separate streams" note="Blended CPA is not decision-grade until true outcomes are separated by stream." status="warning" />
          <MetricCard label="Biosymm SEO" value="DR 36" note="Strongest asset, but organic traffic skews branded/local/recruitment." status="good" />
          <MetricCard label="ErgoEquip SEO" value="DR 14" note="Low current traffic, but category keywords have strong AU demand and low difficulty." status="warning" />
          <MetricCard label="Tracking risk" value="High" note="Custom booking click events exist per clinic (335 book_now fires in 28d) but none are classified as primary conversions yet." status="critical" />
        </div>
      </section>

      <Section eyebrow="Executive thesis" title="Three streams. One tracking revenue. Two are not.">
        <p>
          Biosymm Group operates across four commercial streams: clinics, ergonomics/manual handling consulting, equipment (ErgoEquip), and corporate services (Ergoworks Consulting). The single most important finding is that ErgoEquip is the only stream with confirmed revenue tracking — $2.72x ROAS and $29 CPA on real WooCommerce purchase data. Every other stream&apos;s reported CPA is based on clicks and form submissions, not completed bookings, attended appointments, or qualified pipeline.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <FindingCard title="ErgoEquip: the only verified revenue stream">
            <p>$29 CPA. 2.72x ROAS. $10,741 revenue tracked over 6 months. WooCommerce + GA4 purchase events + Google Ads tag. This is the benchmark every other stream should be measured against.</p>
          </FindingCard>
          <FindingCard title="Biosymm Search: $83 CPA is a signal, not a verdict">
            <p>The previous agency flagged landing page quality and missing SEO as the blockers — not the campaigns. The reported CPA is based on booking clicks, not completed bookings or attended patients. Fix the measurement foundation before adjusting budget or bids.</p>
          </FindingCard>
          <FindingCard title="Ergoworks Consulting: active but unmapped">
            <p>An authenticated CMS review confirmed Ergoworks is a live WordPress acquisition site with Gravity Forms, GTM, GA4, and Facebook Pixel — not a placeholder. The gap is not tracking presence; it is outcome mapping. Enquiry forms, booking requests, and webinar leads are not yet connected to qualified pipeline or revenue.</p>
          </FindingCard>
        </div>
        <p className="mt-8">
          The growth operating audit is built on this: do not scale blended CPA. Separate the streams, prove the measurement for each, then make budget decisions stream by stream.
        </p>
      </Section>

      <Section eyebrow="What the data shows" title="GA4, Ahrefs, and public crawl findings across all three properties.">
        <p>
          GA4 data for the last 28 days (23 Apr – 20 May 2026) is sourced directly from the Biosymm GA4 property (G-6HKPBZ34ML) via authenticated account access. Ahrefs and public crawl checks add the SEO, tag, form, Nookal, WooCommerce and Ergoworks Consulting context.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          <MetricCard label="Active users" value="2,182" note="Last 28 days" status="good" />
          <MetricCard label="Sessions" value="2,798" note="Across all channels" status="good" />
          <MetricCard label="Avg session" value="2m 11s" note="Site is engaging once users land" status="good" />
          <MetricCard label="Bounce rate" value="9.9%" note="Low — users are exploring the site" status="good" />
        </div>
        <DataTable
          headers={["Channel", "Sessions", "Users", "Avg Session", "Bounce Rate"]}
          rows={[
            ["Organic Search", "1,039 (37%)", "747", "3m 32s", "11.8%"],
            ["Cross-network (Ads)", "730 (26%)", "611", "1m 07s", "4.7%"],
            ["Direct", "730 (26%)", "658", "55s", "9.2%"],
            ["Referral", "256 (9%)", "143", "3m 34s", "14.1%"],
            ["Unassigned", "36 (1%)", "31", "14s", "52.8% ⚠"],
            ["Organic Social", "14 (<1%)", "13", "42s", "0%"],
          ]}
        />
        <DataTable
          headers={["Commercial event", "Fires (28d)", "Users"]}
          rows={[
            ["Book Now — main CTA", "335", "154"],
            ["Phone click", "184", "137"],
            ["Book → Moranbah", "85", "58"],
            ["Form started", "41", "36"],
            ["Book → Roxby Downs", "34", "22"],
            ["Form submitted", "31", "21"],
            ["Book → Emerald", "30", "23"],
            ["Book → Blackwater", "17", "9"],
            ["Book → Mackay", "14", "12"],
            ["Contact Us click", "13", "12"],
            ["Email click", "13", "13"],
            ["Book → Bunbury", "3", "3"],
            ["Book → Ooralea", "3", "3"],
          ]}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <FindingCard title="Custom booking events exist — not set as conversions">
            <p>Biosymm already has 13 location-specific booking click events firing. book_now_button_click_sr alone fired 335 times from 154 users in 28 days. None are set as GA4 key events or Google Ads primary conversion actions. Promoting the top booking events to primary conversions is the single highest-leverage tracking fix before scaling spend.</p>
          </FindingCard>
          <FindingCard title="Unassigned channel is a red flag">
            <p>36 sessions with 52.8% bounce and 14s avg session — the worst quality traffic of any channel. Almost certainly UTM-stripped or mis-tagged links. Investigate GTM tag firing order and ensure all campaign links preserve UTMs before increasing Ads budgets.</p>
          </FindingCard>
          <FindingCard title="Google Ads landing quality is strong">
            <p>Cross-network (Ads) has the lowest bounce rate of any channel at 4.7% and 1m 07s avg session. Ads are reaching relevant audiences and landing pages are working. CPA cannot be calculated until booking events are promoted to primary conversions — but the signals are positive.</p>
          </FindingCard>
        </div>
        <DataTable headers={["Property", "Authority", "Referring Domains", "Tracking", "Commercial read"]} rows={evidence} />
        <DataTable headers={["Keyword", "AU volume", "Position", "Est. traffic", "Intent"]} rows={biosymmKeywords} />
        <DataTable headers={["Opportunity keyword", "AU volume", "Difficulty", "CPC", "Current evidence"]} rows={ergoKeywords} />
        <div className="mt-8">
          <FindingCard title="Ahrefs confirms DR 36 and DR 14 — Biosymm has earned trust; ErgoEquip has category upside.">
            <p>Biosymm&apos;s organic rankings are real but mostly branded, local clinic, and recruitment terms. The corporate SEO gap is the largest untapped opportunity. ErgoEquip ranks pages 2–4 for ergonomic mouse (5,500/mo) and keyboard (3,200/mo) — strong upside at low difficulty, provided stock, margin, and feed readiness are confirmed first.</p>
          </FindingCard>
        </div>
      </Section>

      <Section eyebrow="Measurement gaps" title="Why current CPA numbers are not decision-grade.">
        <p>
          Reported CPA across Biosymm&apos;s streams is based on a mix of booking clicks, form submissions, phone clicks, and email clicks. These are signals of intent — not confirmed commercial outcomes. Until each stream has a primary conversion tied to a real booking, attended appointment, qualified lead, or purchase, budget decisions based on CPA are unreliable.
        </p>
        <DataTable headers={["Stream", "Commercial truth", "Source system", "Bidding status", "GA4 event names"]} rows={conversionTruthMap} />
        <DataTable headers={["Area", "Observed issue", "Report edit / next action"]} rows={trackingHygiene} />
        <div className="mt-8">
          <p className="font-semibold text-fg">Lead routing map — design the interim sheet for offline conversion imports from day one.</p>
          <p className="mt-3">
            If Nookal, WooCommerce and CRM exports are not ready this week, use a shared routing sheet as the temporary source of truth. It should capture attribution, routing and outcome fields rather than only name, phone and message.
          </p>
        </div>
        <DataTable headers={["Field group", "Required fields"]} rows={leadRoutingFields} />
        <div className="mt-10">
          <p className="font-semibold text-fg">Google Ads checks — major optimisation decisions should wait for the real conversion export.</p>
          <p className="mt-3">
            Conversion tracking, primary/secondary action hygiene, enhanced conversions, offline imports and search term waste are the first checks. Without the actual Marcus/Biosymm account export, a spend optimisation recommendation would be guesswork.
          </p>
        </div>
        <DataTable headers={["Check", "Status", "Recommended action"]} rows={googleAdsChecks} />
      </Section>

      <Section eyebrow="Stream-level diagnosis" title="Each stream has a different role, a different measurement gap, and a different next action.">
        <DataTable headers={["Stream", "Role", "Priority", "Key metric", "Next action"]} rows={growthStreamScorecard} />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {trackingAudit.map((item) => (
            <FindingCard key={item.stream} title={item.stream}>
              <p><strong className="text-fg">Current:</strong> {item.current}</p>
              <p className="mt-3"><strong className="text-fg">Risk:</strong> {item.risk}</p>
              <p className="mt-3"><strong className="text-fg">Fix:</strong> {item.fix}</p>
            </FindingCard>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {seoBattlefields.map((item) => <FindingCard key={item.title} title={item.title}><p>{item.body}</p></FindingCard>)}
        </div>
        <div className="mt-8 rounded-3xl border border-border bg-white p-6 shadow-sm">
          <ol className="grid gap-4 text-base leading-7 text-muted md:grid-cols-2">
            {seoExecution.map((item, idx) => <li key={item} className="flex gap-3 items-start"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cta text-xs font-bold text-white">{idx + 1}</span> <span>{item}</span></li>)}
          </ol>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <FindingCard title="H1 has zero target keywords — easy fix">
            <p>Current homepage H1: &quot;Australia-wide. Technology enabled. Workplace focused.&quot; Not a single keyword Google can use to rank the page for commercial terms. A simple rewrite to something like &quot;Workplace Physiotherapy Across Australia&quot; sends an immediate signal. 15-minute change, direct ranking impact on corporate terms.</p>
          </FindingCard>
          <FindingCard title="Location pages are fragmented">
            <p>Only /belmont-clinic/ and /roxby-downs-clinic/ exist in the sitemap. /roxby-downs/, /moranbah/, /locations/ all return 404. The Ahrefs data shows Moranbah and Roxby Downs ranking #2–5 — these pages are leaving local traffic on the table due to inconsistent URL structure.</p>
          </FindingCard>
          <FindingCard title="Schema markup needs verification">
            <p>No schema detected in static HTML. WordPress with Yoast typically injects JSON-LD via JavaScript — a browser render is needed to confirm. If LocalBusiness and MedicalBusiness schema are missing, Google can&apos;t surface rich results for clinic locations. Quick Yoast config check.</p>
          </FindingCard>
        </div>
        <DataTable headers={["Current ranking", "AU volume", "Position", "Current URL", "Action"]} rows={currentErgoRankings} />
        <DataTable headers={["Surface", "Evidence", "Action"]} rows={croActions} />
        <div className="mt-10">
          <p className="font-semibold text-fg">ErgoEquip feed readiness — Shopping or PMax should not be scaled further until feed, stock, margin and purchase tracking are proven.</p>
          <p className="mt-3">
            ErgoEquip has the clearest June paid opportunity, but the right starting point is intent structure and feed hygiene, not broad scale claims. Search can be built around exact and phrase clusters first; Shopping or retail PMax should remain constrained until product approvals, margin, stock and purchase-value tracking are verified.
          </p>
        </div>
        <DataTable headers={["Area", "Required check"]} rows={merchantCenterChecks} />
      </Section>

      <Section eyebrow="Decisions required" title="What Greg and Christine need to provide.">
        <p>
          The audit has reached the limit of what public crawls, Ahrefs, and GA4 can answer. The next layer of analysis — and the ability to make confident budget decisions — depends on inputs from the Biosymm team.
        </p>
        <DataTable headers={["Decision / input", "From", "Why it unblocks"]} rows={decisionsRequired} />
      </Section>

      <Section eyebrow="7–14 day plan" title="What happens in the next two weeks.">
        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
          <ol className="grid gap-4 text-base leading-7 text-muted md:grid-cols-2">
            {weekTwo.map((item, idx) => <li key={item} className="flex items-start gap-3"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cta text-xs font-bold text-white">{idx + 1}</span><span>{item}</span></li>)}
          </ol>
        </div>
      </Section>

      <Section eyebrow="30-day success" title="What good looks like in 30 days.">
        <p>
          Success at day 30 is not a lower CPA number. It is a trustworthy CPA number — one that reflects completed bookings, attended patients, qualified pipeline, and real ecommerce revenue.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <FindingCard title="Clinics: CPA tied to bookings, not clicks">
            <p>At least one clinic location has a confirmed path from ad click → Nookal booking → attended appointment, with source and click ID preserved. Booking-click CPA is retired as a primary metric.</p>
          </FindingCard>
          <FindingCard title="ErgoEquip: SKU-led spend with proven ROAS">
            <p>The June ErgoEquip push uses only in-stock, margin-positive, feed-approved SKUs. Purchase value is validated in GA4 and Google Ads. ROAS is calculated from real WooCommerce order data.</p>
          </FindingCard>
          <FindingCard title="Ergoworks: enquiries mapped to qualified outcomes">
            <p>Gravity Forms submissions are separated into qualified enquiries, booking requests, newsletter signups, and webinar leads. Notification routing is confirmed. At least one offline conversion import is in place.</p>
          </FindingCard>
          <FindingCard title="Corporate: pipeline stage definitions agreed">
            <p>Greg and Christine have confirmed what counts as a qualified lead, opportunity, and won deal. An interim CRM or pipeline sheet is live. Corporate CPA is based on opportunity created, not raw form submissions.</p>
          </FindingCard>
        </div>
        <div className="mt-10 rounded-[2rem] bg-fg p-8 text-bg md:p-10">
          <p className="max-w-4xl text-3xl font-semibold leading-[1.2] tracking-[-0.02em] md:text-5xl md:leading-[1.1]">
            Build the conversion truth map and lead routing map first. Then demote micro-actions so reported CPA reflects completed bookings, qualified leads, ecommerce purchases, opportunities and revenue — not clicks that merely look busy.
          </p>
        </div>
      </Section>
    </main>
  );
}
