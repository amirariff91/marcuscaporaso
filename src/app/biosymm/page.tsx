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
  ["Biosymm", "DR 36", "196 live referring domains", "GA4 and GTM present; container ownership and firing review required", "Mostly branded/local clinic demand"],
  ["ErgoEquip", "DR 14", "201 live referring domains", "GA4, GTM, and Google Ads tagging present; ecommerce tracking validation required", "High category opportunity if stock, margin and feed quality check out"],
  ["Ergoworks Consulting", "DR 15", "84 live referring domains", "Lead capture and public tracking confirmed; outcome mapping still required", "Active lead-gen site; weak AU organic visibility and outcome mapping still need validation"],
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
  [
    "Ergonomics / Manual Handling",
    "Corporate consulting lead generation",
    "High — lowest-competition SERP",
    "Qualified consulting enquiry or opportunity",
    "Tie Ergoworks forms to qualified outcomes; confirm phone and email routing"
  ],
  [
    "Clinics",
    "Patient acquisition across 8 locations",
    "High — demand exists; tracking is incomplete",
    "Completed booking or attended appointment",
    "Confirm Nookal export for source and click ID; promote verified bookings to primary conversions"
  ],
  [
    "ErgoEquip",
    "Ecommerce revenue growth",
    "High — only verified revenue stream",
    "Purchase value, ROAS, repeat order rate",
    "Confirm margin, stock, feed status, and Shopping approvals before scaling"
  ],
  [
    "Corporate Services",
    "High-value B2B pipeline",
    "Medium — measurement first, scale second",
    "Opportunity created, proposal sent, won revenue",
    "Create CRM or interim pipeline sheet; import offline conversions after match rate is proven"
  ]
];

const seoBattlefields = [
  {
    "title": "Local clinic SEO is the fastest near-term upside",
    "body": "Belmont already ranks #8 for a 200/month clinic query, with low-DR competitors above it. Refresh the location page around appointment intent, suburb relevance, practitioner trust, and clear booking paths before adding new content volume."
  },
  {
    "title": "Corporate SEO is a low-competition opening",
    "body": "The corporate SERP is winnable: workplacephysio.com is DR4 at #1 and Employ Health is DR18 at #5. Biosymm should build a focused occupational health hub that connects service proof, employer outcomes, and enquiry capture."
  },
  {
    "title": "ErgoEquip can win commercial terms before authority catches up",
    "body": "Low-DR competitors such as ergonomicessentials.com.au are already ranking in commercial categories, which points to a content and page-quality gap rather than an authority-only problem. The blocker is execution: stronger category pages, SKU coverage, and purchase-value tracking."
  }
];

const seoExecution = [
  "Refresh priority clinic pages first: Belmont, Moranbah #2-5 opportunities, and other locations with visible demand.",
  "Build one occupational health hub for corporate buyers, then support it with service pages for workplace physiotherapy, manual handling, ergonomics, and injury prevention.",
  "Rework ErgoEquip category pages around commercial intent, including sit-stand desk terms with 9,300 searches, ergonomic chairs, accessories, and product-led comparisons.",
  "Align every paid-search landing page to its target keyword cluster to improve relevance, Quality Score, and conversion clarity.",
  "Add internal links from homepage, service pages, location pages, and product/category pages so priority pages receive authority and user flow."
];

const trackingAudit = [
  {
    "stream": "Clinic demand is visible, but patient outcomes are not yet tracked",
    "current": "The Biosymm homepage has no form path, but it does carry many Nookal booking links and 1300 424 679 tel: links. The contact page adds one form, phone links, multiple mailto routes, and more Nookal links.",
    "risk": "Click-based CPA can look healthy while the real patient outcome is still unknown. Booking clicks, phone clicks, and email clicks do not confirm completed bookings, no-shows, or attended appointments.",
    "fix": "Keep booking, call, and email clicks as secondary signals. Use primary conversions only when Nookal or an interim sheet can export completed booking, attended patient, location, source, GCLID/GBRAID/WBRAID, and revenue."
  },
  {
    "stream": "Corporate leads need pipeline tracking before paid scale",
    "current": "Organic visibility is still light for corporate and commercial terms. Lead value is likely high, but the sales cycle is longer and quality varies by enquiry type.",
    "risk": "Raw enquiries will distort paid-media decisions. Without opportunity quality, spend can appear stronger or weaker than the actual pipeline warrants.",
    "fix": "Track qualified lead, opportunity created, proposal sent, won/lost, and revenue. Import offline conversions once match rate is proven and the pipeline stages are reliable."
  },
  {
    "stream": "ErgoEquip can scale only where revenue, margin, and stock align",
    "current": "GA4, GTM, and Google Ads tagging are present. WooCommerce, product enquiry forms, and lead capture paths are confirmed.",
    "risk": "ROAS can mislead if purchase value, stock, margin, feed eligibility, and lead-form activity are blended into one performance view.",
    "fix": "Use purchase with dynamic value as the primary conversion. Keep add to cart, checkout start, and product enquiry secondary. Segment by SKU margin and stock before the June push."
  },
  {
    "stream": "Ergoworks forms are active, but lead quality is not yet visible",
    "current": "A detailed site review shows an active lead-generation property with live enquiry, booking, newsletter, and webinar forms; public tracking; phone and email routes; and post-submit conversion states.",
    "risk": "Tracking is present, but reporting can still be polluted if phone clicks, email clicks, form submits, newsletter signups, and thank-you-page hits are treated as equal commercial outcomes.",
    "fix": "Keep clicks and newsletter events secondary. Use enquiry and booking forms as lead events once attribution fields, deduped thank-you tracking, recipient routing, and qualified-lead outcomes are confirmed."
  }
];

const conversionTruthMap = [
  [
    "Biosymm clinic booking",
    "Completed Nookal booking or attended appointment",
    "Nookal booking completed or attended appointment",
    "Primary only after source match and click ID capture",
    "nookal_booking_completed, appointment_attended"
  ],
  [
    "Biosymm phone lead",
    "Qualified call or appointment booked from call",
    "Call log / call tracking / reception outcome",
    "Secondary until call duration and outcome are captured",
    "phone_click, qualified_call"
  ],
  [
    "Biosymm contact form",
    "Qualified enquiry routed to the right clinic or service owner",
    "Website form + lead routing sheet",
    "Secondary until accepted and qualified",
    "form_submit, lead_qualified"
  ],
  [
    "Corporate / occupational health",
    "Opportunity created, proposal sent or won revenue",
    "CRM or interim pipeline sheet",
    "Primary from qualified opportunity; strongest at won revenue",
    "opportunity_created, proposal_sent, deal_won"
  ],
  [
    "ErgoEquip ecommerce",
    "WooCommerce order with revenue, SKU and margin segment",
    "WooCommerce + GA4 ecommerce + Ads import",
    "Primary purchase value",
    "purchase, refund"
  ],
  [
    "ErgoEquip product enquiry",
    "Sales-qualified product or bulk-order enquiry",
    "Contact Form 7 + inbox outcome",
    "Secondary until sales-qualified",
    "product_enquiry_submit, product_lead_qualified"
  ],
  [
    "Ergoworks Consulting",
    "Qualified enquiry, booking request, webinar lead or sales opportunity",
    "Gravity Forms + routing/outcome sheet",
    "Secondary until lead quality and outcomes are verified",
    "ergoworks_form_submit, booking_request, consulting_lead_qualified"
  ]
];

const trackingHygiene = [
  ["Biosymm GTM cleanup", "Two containers are present", "Audit ownership and firing overlap across both GTM containers. Consolidate or document why both exist before adding conversion tags."],
  ["Google Ads tag", "Not visible on Biosymm public scan", "Do not assume Ads conversion tracking is live. Confirm inside the real Google Ads account and GTM containers."],
  ["Meta pixel", "Not visible on Biosymm or ErgoEquip scans", "Retargeting and Meta CPA reporting will be blind unless a pixel/CAPI path is intentionally added with consent controls."],
  ["Cross-domain booking", "Nookal links send users off-site", "Add outbound click events and verify UTMs, gclid, gbraid and wbraid survive into Nookal or are captured before redirect."],
  ["WooCommerce ecommerce", "ErgoEquip has WooCommerce and Ads tag", "Validate GA4 recommended ecommerce events, purchase value/currency, transaction_id de-duping, refunds and enhanced conversions."],
  ["Ergoworks Consulting tracking", "Multiple analytics and advertising tracking paths are present", "Audit firing rules for duplicate tracking, confirm thank-you-page triggers, and standardise event naming for calls, emails, enquiries, bookings, and newsletter signups."],
  ["Ergoworks Consulting forms", "Active lead capture with significant historical activity", "Confirm routing, attribution capture, post-submit states, and lead outcome tracking before importing form submissions into Ads."],
  ["Ergoworks Consulting site governance", "Site governance affects measurement reliability", "Review access controls, plugin maintenance, and tracking governance so measurement remains reliable."],
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
  [
    "Homepage",
    "17 Nookal external booking links; no clear CTA hierarchy; H1 is company-led rather than outcome-led",
    "Set one primary CTA per service stream, supported by secondary paths for calls, email, and booking clicks"
  ],
  [
    "Contact page",
    "One form sits beside many phone, email, and Nookal routes",
    "Group contact routes by intent: book a clinic appointment, enquire about workplace services, contact ErgoEquip, or speak to the right location"
  ],
  [
    "Nookal booking",
    "External booking path creates an attribution break; gclid/utm is likely lost at redirect",
    "Track pre-click intent now, then capture source, click ID, location, booking status, and revenue through Nookal or an interim export"
  ],
  [
    "Landing pages for paid",
    "Landing-page keyword alignment appears to be affecting Quality Score and paid-search relevance",
    "Build or refresh landing pages so each ad group has matching keyword language, proof, CTA, and conversion path"
  ],
  [
    "ErgoEquip product/category pages",
    "Commercial categories have upside, but current organic positions sit around page 2–4",
    "Create SKU-led and category-led landing pages with margin-aware prioritisation, stock visibility, proof, FAQs, and strong internal links"
  ],
  [
    "Forms",
    "ErgoEquip and Biosymm have visible form paths; Ergoworks has active Gravity Forms",
    "Standardise thank-you states, hidden attribution fields, deduplication, recipient routing, and qualified-lead review across all form paths"
  ]
];

const googleAdsChecks = [
  ["Conversion actions", "Pending account review", "Classify every action: purchase, qualified lead, booking, attended patient, call, micro-action."],
  ["Primary vs secondary", "High risk", "Demote booking clicks, contact clicks, page views, form starts and short calls unless proven commercial outcomes."],
  ["Enhanced conversions", "Pending account review", "Enable for lead and purchase actions where privacy-compliant first-party data exists. Critical for AU healthcare with Consent Mode v2."],
  ["Consent Mode v2", "Requires verification", "Verify consent implementation and Consent Mode v2 where applicable. It improves modelled reporting alongside Enhanced Conversions, especially where consent controls are active."],
  ["Offline imports", "Not yet verified", "Start with weekly CSV/import from Nookal, WooCommerce, CRM or interim sheet."],
  ["Account access", "Pending correct access", "Confirm access to the correct Biosymm Google Ads account to review campaigns, conversion actions, search terms, and optimisation settings."],
  ["Search term waste", "Needs Google Ads data", "Review the last 30 days of search terms before recommending negative keywords or query exclusions."],
  ["Brand/non-brand split", "Unknown", "Confirm whether brand (biosymm) and non-brand (physio belmont, workplace physio) campaigns are separated. Blended CPA hides true non-brand cost."],
  ["Quality Score", "Landing-page relevance needs review", "Improve alignment between ad-group keywords, landing-page headings, body copy, and conversion paths to lift Quality Score and reduce wasted spend."],
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
  [
    "Provide Google Ads account access or an export showing campaigns, spend, conversion actions, and primary/secondary conversion settings.",
    "Biosymm / Marcus",
    "This lets us confirm which enquiries and bookings Google is optimising toward, what each stream is actually costing, and whether reported CPA reflects commercial outcomes rather than lighter touchpoints."
  ],
  [
    "Provide a Nookal booking export that includes source, campaign, and click ID fields where available.",
    "Greg / Christine",
    "This connects ad activity to real appointments, so we can see whether booking clicks become completed or attended bookings and compare performance by clinic."
  ],
  [
    "Provide WooCommerce SKU-level margin, stock, and revenue data for ErgoEquip.",
    "Christine",
    "This shows which product categories can support more paid traffic, so budget can favour in-stock, margin-positive products rather than simply higher-click categories."
  ],
  [
    "Confirm where each Ergoworks Consulting form enquiry is sent and how qualified enquiries are separated from spam, newsletters, and general contact messages.",
    "Christine / Ergoworks team",
    "This clarifies who owns each enquiry and whether consulting leads can be measured as real sales opportunities, not just form submissions."
  ],
  [
    "Agree the pipeline definitions for corporate services: qualified lead, opportunity, proposal, and won deal.",
    "Greg",
    "This gives the team a shared commercial language and allows offline conversion tracking to reflect the stages that matter to revenue."
  ],
  [
    "Confirm whether Consent Mode v2 is correctly implemented for Australian healthcare traffic.",
    "Marcus / Dev",
    "This helps protect GA4 and Google Ads measurement quality, including Enhanced Conversions and modelled reporting where consent is limited."
  ]
];

const weekTwo = [
  "Access the correct Biosymm Google Ads account and export all conversion actions, including primary/secondary status.",
  "Map every Biosymm, ErgoEquip, and Ergoworks form, phone number, Nookal link, WooCommerce path, thank-you page, and email destination.",
  "Configure the strongest Biosymm booking and phone-click signals as GA4 key events and Google Ads secondary conversions first. Promote to primary only once matched to completed bookings, qualified calls, or attended appointments.",
  "Test whether Nookal booking links preserve UTMs and click IDs through the redirect and booking flow.",
  "Verify Ergoworks form routing, attribution capture, post-submit tracking, and qualified-lead outcome capture.",
  "Validate WooCommerce purchase values, product feed status, stock availability, and margin by SKU category.",
  "Build separate scorecards for clinics, corporate services, ErgoEquip, and Ergoworks so CPA is no longer blended across streams.",
  "Recalculate CPA by stream using confirmed commercial outcomes before recommending budget shifts.",
  "Create an interim offline outcome sheet if Nookal, WooCommerce, or CRM exports are not available within 7 days."
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
          <h1 className="mt-6 max-w-5xl text-display font-semibold text-fg">Biosymm has demand. Now it needs numbers it can trust.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-muted">
            This audit separates Biosymm’s growth streams, shows where measurement is blocking confident budget decisions, and defines the next move for each stream.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-fg">
            <span className="rounded-full border border-border bg-white px-4 py-2">Prepared for Biosymm Group</span>
            <span className="rounded-full border border-border bg-white px-4 py-2">Audit date: {auditDate}</span>
            <span className="rounded-full border border-border bg-white px-4 py-2">Client: Biosymm Group</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-4 md:px-8">
          <MetricCard label="Core call" value="Separate streams" note="Do not judge growth on blended CPA. Clinics, corporate services, ErgoEquip, and Ergoworks Consulting need separate measurement before budget decisions can be trusted." status="critical" />
          <MetricCard label="Biosymm SEO" value="DR 36" note="The domain has authority to build from, but performance must be assessed by service line and conversion quality, not aggregate traffic alone." status="good" />
          <MetricCard label="ErgoEquip SEO" value="DR 14" note="ErgoEquip has weaker authority, yet paid data shows commercial traction with $29 CPA, 2.72x ROAS, and $10,741 in revenue." status="good" />
          <MetricCard label="Tracking risk" value="High" note="335 book_now fires and a reported $83 CPA are useful signals, but the conversion path is not yet clean enough to guide scaling decisions." status="critical" />
        </div>
      </section>

      <Section eyebrow="Executive thesis" title="Four growth streams. Only one is clearly tied to revenue.">
        <p>
          Biosymm has growth potential across four commercial streams: clinics, corporate and occupational health, ErgoEquip ecommerce, and Ergoworks Consulting. The constraint is not demand. It is measurement separation. Until each stream is measured separately, blended CPA will keep hiding where budget is working and where it is not.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <FindingCard title="ErgoEquip is the verified revenue stream">
            <p>ErgoEquip is the clearest commercial proof point in the current data. It has recorded $10,741 in revenue, $29 CPA, and 2.72x ROAS. That does not mean it should receive unlimited spend. It means this stream has the strongest evidence base and should be managed as its own ecommerce growth engine, with separate SEO, paid media, and margin-led budget decisions.</p>
          </FindingCard>
          <FindingCard title="Biosymm Search needs cleaner proof">
            <p>Biosymm Search is showing intent, but the current $83 CPA is a signal, not a verdict. The 335 book_now fires suggest meaningful demand, yet the tracking does not prove which bookings are valuable, which services they relate to, or which campaigns are creating qualified opportunities. This stream should not be scaled or cut on the current blended number. It needs validated conversion tracking and service-line reporting first.</p>
          </FindingCard>
          <FindingCard title="Ergoworks Consulting is active but unmapped">
            <p>Ergoworks Consulting appears to be commercially active, but it is not yet mapped clearly enough in the growth model. Its audience, conversion path, offer structure, and reporting need to be separated from the broader Biosymm ecosystem. Without that separation, consulting demand risks being hidden inside aggregate site and campaign performance.</p>
          </FindingCard>
        </div>
        <p className="mt-8">
          The recommendation is clear: stop using blended CPA as the growth signal. Separate the streams, prove what each one is producing, then move budget based on real outcomes.
        </p>
      </Section>

      <Section eyebrow="What the data shows" title="GA4, Ahrefs, and public crawl findings across all three properties.">
        <p>
          GA4 data covers the last 28 days, 23 Apr – 20 May 2026, sourced from the Biosymm analytics property. Ahrefs and public crawl checks add SEO, tag, form, Nookal, WooCommerce and Ergoworks Consulting context.
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
          <FindingCard title="Booking intent is visible, but not yet conversion-ready">
            <p>GA4 recorded 335 book_now events from 154 users. These are strong intent signals, but none are configured as key events. Until bookings are matched to a completed or attended Nookal outcome, this should not be treated as commercial conversion data.</p>
          </FindingCard>
          <FindingCard title="Unassigned traffic needs attribution cleanup">
            <p>Unassigned delivered 36 sessions with a 52.8% bounce rate and 14s average session duration. That points to missing or inconsistent tagging, not a channel to optimise against. Fix source, medium and campaign capture before using this data for budget decisions.</p>
          </FindingCard>
          <FindingCard title="Google Ads landing engagement is strong">
            <p>Google Ads traffic shows a 4.7% bounce rate and 1m 07s average session duration. Landing quality is not the immediate constraint. The larger gap is proving which high-intent visits become bookings, qualified leads or revenue.</p>
          </FindingCard>
        </div>
        <DataTable headers={["Property", "Authority", "Referring Domains", "Tracking", "Commercial read"]} rows={evidence} />
        <DataTable headers={["Keyword", "AU volume", "Position", "Est. traffic", "Intent"]} rows={biosymmKeywords} />
        <DataTable headers={["Opportunity keyword", "AU volume", "Difficulty", "CPC", "Current evidence"]} rows={ergoKeywords} />
        <div className="mt-8">
          <FindingCard title="Ahrefs confirms earned authority and ErgoEquip upside">
            <p>Ahrefs reports DR 36 for Biosymm and DR 14 for ErgoEquip. Biosymm has already earned trust and ranks for branded demand. ErgoEquip has category upside, with relevant terms sitting on pages 2–4 and needing focused content, internal links and product-level authority.</p>
          </FindingCard>
        </div>
      </Section>

      <Section eyebrow="Measurement gaps" title="Why current CPA numbers are not decision-grade.">
        <p>
          Current CPA reporting blends booking clicks, form submissions, phone clicks and email clicks. These are intent signals, not confirmed commercial outcomes. Until each stream has a primary conversion tied to a real booking, attended appointment, qualified lead or purchase, CPA should be treated as directional only.
        </p>
        <DataTable headers={["Stream", "Commercial truth", "Source system", "Bidding status", "GA4 event names"]} rows={conversionTruthMap} />
        <DataTable headers={["Area", "Observed issue", "Report edit / next action"]} rows={trackingHygiene} />
        <div className="mt-8">
          <p className="font-semibold text-fg">Lead routing map — design the interim sheet for offline conversion imports from day one.</p>
          <p className="mt-3">
            If Nookal, WooCommerce and CRM exports are not ready this week, use a shared routing sheet as the interim source of truth. It should capture attribution, routing owner, lead status and commercial outcome — not just name, phone and message.
          </p>
        </div>
        <DataTable headers={["Field group", "Required fields"]} rows={leadRoutingFields} />
        <div className="mt-10">
          <p className="font-semibold text-fg">Google Ads checks — major optimisation decisions should wait for the real conversion export.</p>
          <p className="mt-3">
            Start with conversion tracking, primary/secondary action hygiene, enhanced conversions, offline imports and search term waste. A complete Google Ads account export is required before making spend optimisation recommendations. The immediate priority is to separate intent signals from outcomes Google can safely optimise toward. Note this: platform-reported CPA is almost always inflated. Compare Google Ads data against GA4 and calculate blended cost per acquisition across streams before trusting any single-platform number.
          </p>
        </div>
        <DataTable headers={["Check", "Status", "Recommended action"]} rows={googleAdsChecks} />
      </Section>

      <Section eyebrow="Stream-level diagnosis" title="Each growth stream needs its own job, metric, and next move.">
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
          <FindingCard title="H1s need to carry search intent, not just brand positioning">
            <p>The current H1, “Australia-wide. Technology enabled. Workplace focused.”, is clear positioning but contains zero priority keywords. Key pages should keep the brand message while adding the query language buyers actually use.</p>
          </FindingCard>
          <FindingCard title="Location architecture needs cleanup before more local SEO is added">
            <p>Some location signals are fragmented, with /roxby-downs/ and /moranbah/ returning 404. Priority clinic and regional pages should resolve cleanly, link consistently, and support both patient booking and local relevance.</p>
          </FindingCard>
          <FindingCard title="Schema markup should be verified at template level">
            <p>Static HTML did not show schema markup. Before assuming it is absent sitewide, verify rendered output and templates, then add the relevant LocalBusiness, MedicalBusiness, Product, Breadcrumb, and FAQ schema where appropriate.</p>
          </FindingCard>
        </div>
        <DataTable headers={["Current ranking", "AU volume", "Position", "Current URL", "Action"]} rows={currentErgoRankings} />
        <DataTable headers={["Surface", "Evidence", "Action"]} rows={croActions} />
        <div className="mt-10">
          <p className="font-semibold text-fg">ErgoEquip feed readiness — Shopping or PMax should not be scaled further until feed, stock, margin and purchase tracking are proven.</p>
          <p className="mt-3">
            ErgoEquip is the clearest June paid opportunity, but the right starting point is intent structure and feed hygiene, not broad scale. Build Search around exact and phrase clusters first. Shopping or retail PMax should stay constrained until product approvals, margin, stock, and purchase-value tracking are confirmed.
          </p>
        </div>
        <DataTable headers={["Area", "Required check"]} rows={merchantCenterChecks} />
      </Section>

      <Section eyebrow="Decisions required" title="What Greg and Christine need to provide.">
        <p>
          To make the next budget call safely, we need to connect marketing activity to real outcomes: attended appointments, qualified enquiries, ecommerce revenue, and corporate pipeline. The following inputs will determine where budget can be scaled with confidence.
        </p>
        <DataTable headers={["Decision / input", "From", "Why it unblocks"]} rows={decisionsRequired} />
      </Section>

      <Section eyebrow="7–14 day plan" title="Priority actions for the next 7–14 days">
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
          <FindingCard title="Clinics: CPA reflects real patient bookings">
            <p>The clinic view connects each ad click to the Nookal booking path and, where available, attended appointments. Booking-click CPA is replaced or clearly separated from CPA based on confirmed patient outcomes.</p>
          </FindingCard>
          <FindingCard title="ErgoEquip: spend follows profitable SKUs">
            <p>Paid spend is guided by WooCommerce revenue, product feed approval, stock availability, and SKU-level margin. ROAS reporting reflects real purchases, with priority given to products that are available and commercially sensible to scale.</p>
          </FindingCard>
          <FindingCard title="Ergoworks: enquiries tied to qualified outcomes">
            <p>Gravity Forms enquiries are separated by type, routed to the right owner, and tracked through to qualified lead outcomes. Offline imports or an interim outcome process make consulting performance visible beyond the form submit.</p>
          </FindingCard>
          <FindingCard title="Corporate: pipeline stages are agreed and measurable">
            <p>Greg and Christine have confirmed what counts as a qualified lead, opportunity, proposal, and won deal. An interim CRM or outcome sheet is live, so corporate demand can be measured against pipeline quality and revenue potential.</p>
          </FindingCard>
        </div>
        <div className="mt-10 rounded-[2rem] bg-fg p-8 text-bg md:p-10">
          <p className="max-w-4xl text-3xl font-semibold leading-[1.2] tracking-[-0.02em] md:text-5xl md:leading-[1.1]">
            Biosymm does not need less growth ambition. It needs cleaner proof. Separate the streams, connect spend to real outcomes, and scale only what is genuinely creating revenue.
          </p>
        </div>
      </Section>
    </main>
  );
}
