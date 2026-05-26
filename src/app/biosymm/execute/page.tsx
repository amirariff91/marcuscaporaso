import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ErgoEquip EOFY Paid Media Execution Plan | Biosymm Group",
  description:
    "A June 2026 EOFY paid media execution plan for ErgoEquip: Google Search, Shopping/PMax, CRO readiness, tracking, budget, product prioritisation, and scale triggers.",
  alternates: {
    canonical: "https://biosymm.marcuscaporaso.com/execute",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "article",
    url: "https://biosymm.marcuscaporaso.com/execute",
    title: "ErgoEquip EOFY Paid Media Execution Plan",
    description:
      "A practical EOFY sprint plan for moving selected ErgoEquip stock through high-intent Google Search and SKU-filtered Shopping/PMax.",
    siteName: "Biosymm Growth Audit",
  },
  twitter: {
    card: "summary_large_image",
    title: "ErgoEquip EOFY Paid Media Execution Plan",
    description:
      "Search-led EOFY execution plan covering demand, budget, bidding, CRO readiness, tracking, competitors, and scale rules.",
  },
};

const searchDemandRows = [
  ["laptop stand", "15,000/mo", "$0.30", "0", "✓"],
  ["monitor stand", "9,900/mo", "$0.25", "0", "✓"],
  ["ergonomic mouse", "5,300/mo", "$0.20", "2", "✓"],
  ["ergonomic keyboard", "3,000/mo", "$0.25", "5", "✓"],
  ["laptop riser", "1,000/mo", "$0.25", "0", "✓"],
  ["ergonomic workstation", "250/mo", "$1.50", "24", "—"],
  ["logitech k380", "700/mo", "Branded", "—", "—"],
  ["logitech m240", "450/mo", "Branded", "—", "—"],
  ["penguin mouse", "70/mo", "Niche", "—", "—"],
];

const successRows = [
  ["Warehouse stock moved", "Primary commercial outcome", "Report units sold by SKU, starting stock, ending stock, and whether paid spend moved the priority stock."],
  ["Revenue and AOV", "Primary commercial outcome", "Judge revenue, average order value, units per order, and sale order value after the 25% discount is understood."],
  ["Margin-adjusted ROAS", "Decision metric", "Use ROAS only after SKU margin comfort is confirmed; do not optimise to a generic ROAS target without margin context."],
  ["Team / workplace enquiries", "Secondary commercial signal", "Track bulk quote, phone and email actions separately so larger workplace orders are visible without treating every click as a purchase."],
  ["Campaign positioning", "EOFY Ergonomic Workstation Sale", "Use clear Australian EOFY language: selected warehouse stock, 25% off selected products, workplace-ready equipment, and purchase before 30 June."],
];

const budgetRows = [
  ["Lean test", "$1,500", "Lower-risk option, but limited learning and limited ability to move meaningful stock."],
  ["Recommended sprint", "$3,000", "Recommended June budget. Fund Product Intent Search and Standard Shopping/SKU-filtered PMax first, with reserve for days 8–21."],
  ["Scale ceiling", "$5,000", "Conditional only. Use if tracking, search terms, feed parity, stock movement and margin-adjusted returns are holding."],
  ["Phase 1: launch validation", "1–7 June / $600–$750", "Confirm tracking, search terms, landing-page clarity, product interest, feed price parity and stock sync."],
  ["Phase 2: optimisation", "8–21 June / $1,350–$1,500", "Shift spend toward products, keywords and audiences showing traction."],
  ["Phase 3: EOFY urgency", "22–30 June / $750–$900", "Focus on proven areas, add urgency and reduce exploratory spend."],
];

const optimisationRows = [
  ["Increase spend", "Clean search terms, tracked purchases/enquiries, strong AOV, high-stock products moving, and ROAS above margin-adjusted break-even."],
  ["Reduce spend", "Generic EOFY traffic dominates, low-stock products absorb Shopping/PMax spend, clicks do not become carts, or discount logic confuses users."],
  ["Pause immediately", "Out-of-stock products, unclear sale pages, feed/page price mismatch, irrelevant search terms, or SKUs selling down too quickly without exclusions ready."],
  ["Week 1 cadence", "Review search terms, conversion tracking, Merchant Center issues and stock levels daily during the first 7 days."],
];

const campaignStructureRows = [
  ["Product Intent Search", "$1,300–$1,500", "Primary launch campaign. Exact and phrase ad groups for laptop stands/risers, ergonomic keyboards, ergonomic mice, and monitor/workstation accessories."],
  ["Standard Shopping / SKU-filtered PMax", "$1,100–$1,300", "Secondary visual product capture. Prefer Standard Shopping where available; if PMax is used, include EOFY sale SKUs only."],
  ["Workplace / team buyer", "Fold into Search initially", "Use as a tightly controlled ad group first, not a separate underfunded campaign unless budget or volume justifies it."],
  ["Remarketing", "Build first; activate when eligible", "Create audiences from day one. Activate only once audience minimums are met: 100+ Display users or 1,000+ Search users."],
  ["Optimisation reserve", "$300–$500", "Hold back budget for days 8–21 and shift it into clean search terms, converting SKUs, and products with stock depth."],
];

const biddingRows = [
  ["Product Search", "Manual CPC or Maximise Clicks with a strict CPC cap", "No tCPA/tROAS at launch. Use exact and phrase match while search terms, offer visibility, and purchase tracking are validated."],
  ["Shopping / PMax", "Manual CPC for Standard Shopping. If PMax is used, Maximise Conversions without a target", "Standard Shopping gives the cleanest SKU control. PMax should remain tightly filtered to EOFY sale products and avoid hard targets early."],
  ["Switch trigger: 15+ purchases", "Move toward Maximise Conversions", "Only after purchase tracking, revenue value, transaction ID, and duplicate-counting checks are clean."],
  ["Switch trigger: 30+ purchases", "tCPA becomes viable", "Use only when enough stable purchase data exists and the target is not tighter than the recent baseline."],
  ["Switch trigger: 50+ purchases", "Stable automation / value bidding", "Best threshold for more durable tCPA or value-based bidding, provided margin and SKU stock constraints are still visible."],
];

const trackingRows = [
  ["GA4 purchase event with revenue", "Must verify", "Confirm purchase fires after confirmed order with value, currency, transaction_id, and item data."],
  ["Google Ads primary conversion = purchase only", "Must configure", "Keep add to cart, begin checkout, phone, email, and quote interactions secondary until their commercial value is proven."],
  ["No duplicate counting: GA4 import vs native tag", "Must verify", "Use one primary purchase action. Mark duplicates secondary or disable them for bidding."],
  ["Enhanced Conversions: hashed email", "Must enable", "Enable and verify for purchase where privacy-compliant checkout data is available."],
  ["Merchant Center feed: sale_price + sale_price_effective_date", "Must add", "Set sale fields for the EOFY window ending 30 June and ensure annotations are eligible where possible."],
  ["Feed/page price parity", "Must verify", "Ad, feed, product page, cart, and checkout pricing must match the 25% offer logic."],
  ["Stock sync and out-of-stock exclusion", "Must configure", "Exclude out-of-stock, zero-stock, and fulfilment-risk products before they spend."],
  ["Phone/email click tracking", "Secondary only", "Useful for team-order signals, but not equal to ecommerce purchases."],
  ["Add to cart / begin checkout", "Secondary only", "Use as diagnostic and early intent signals, not primary bidding goals."],
];

const productRows = [
  ["Numberslide Keyboard", "161 units", "Low direct product-name demand", "Category-led only. Explain the slide-out number pad benefit rather than relying on name search."],
  ["CRICKET", "140 units", "Low direct product-name demand", "Category-led only. Use laptop stand/riser intent and bundle/workstation framing."],
  ["Logitech K380", "131 units", "700/mo AU branded search", "Strong Shopping candidate, especially as a bundle component rather than standalone price fight."],
  ["ViewRiser Laptop Stand", "126 units", "15,000/mo parent term", "Hero Shopping candidate for laptop stand demand if sale price and stock sync are clean."],
  ["Tablet Riser", "60 units", "Low confirmed direct search", "Category-led only. Keep paid exposure cautious unless bundled or attached to relevant stand/riser demand."],
  ["Penguin Mouse range", "Multiple variants", "70/mo branded; 5,300/mo category", "Strong Shopping candidate with ambidextrous and ergonomic support positioning."],
];

const decisionRows = [
  ["Final EOFY sale page URL", "Needed before campaign build and final URL QA."],
  ["Final product list and discount logic", "Confirm which SKUs carry the 25% offer and how the discount appears before checkout."],
  ["SKU margins after 25% discount", "Set margin-adjusted breakeven ROAS and decide which products can absorb paid clicks."],
  ["Stock priorities and shipping constraints", "Define which high-stock products should receive spend and which low-stock products should be excluded."],
  ["Standard Shopping availability vs PMax-only", "Determines the level of feed control, launch budget, and governance required."],
  ["Bulk order CTA approval", "Needed for workplace buyers and larger EOFY procurement enquiries."],
  ["Approved June budget option", "Choose $1.5k lean test, $3k recommended sprint, or $5k scale ceiling."],
  ["Owned channel approval", "Confirm email signatures, clinics, internal promotion, direct customer outreach, and organic posts."],
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

export default function BiosymmExecutePage() {
  return (
    <main className="min-h-screen bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div className="absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-cta/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cta">ErgoEquip / EOFY execution plan</p>
          <h1 className="mt-6 max-w-5xl text-display font-semibold text-fg">ErgoEquip EOFY sprint. $3k. 30 days. Move the right stock.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-muted">
            A Search-led, SKU-led paid media plan for the June 2026 EOFY window: capture high-intent Australian demand, protect budget while tracking and feed quality are verified, and scale only when the right products start moving profitably.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-fg">
            <span className="rounded-full border border-border bg-white px-4 py-2">Prepared for Biosymm Group</span>
            <span className="rounded-full border border-border bg-white px-4 py-2">Campaign window: 1–30 June 2026</span>
            <span className="rounded-full border border-border bg-white px-4 py-2">Recommended budget: $3,000</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-4 md:px-8">
          <MetricCard label="Search demand" value="34,000+/mo" note="Combined AU demand across laptop stand, monitor stand, ergonomic mouse, ergonomic keyboard and laptop riser terms." status="good" />
          <MetricCard label="Hero SKUs" value="823 units" note="Sale stock across 24 products, with priority around Numberslide, CRICKET, K380, ViewRiser, Tablet Riser and Penguin Mouse variants." status="good" />
          <MetricCard label="Recommended budget" value="$3,000" note="Enough for a controlled June sprint, with a $5,000 ceiling only if the first 7–10 days show clean traction." status="warning" />
          <MetricCard label="Campaign readiness" value="Not yet" note="Landing page, 25% offer visibility, tracking, sale_price feed fields and stock sync need launch QA." status="critical" />
        </div>
      </section>

      <Section eyebrow="Executive recommendation" title="Run a focused EOFY sales sprint, not a broad awareness campaign.">
        <p>
          The job is to move selected ErgoEquip warehouse stock before 30 June by capturing people already searching for ergonomic workstation products. Google Search should be the primary channel. Standard Shopping, or a tightly SKU-filtered PMax setup where Standard Shopping is unavailable, should support visual product discovery. Meta and LinkedIn paid should stay out of the launch plan.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          <FindingCard title="Search first"><p>Fund product-intent Search properly because it gives the fastest control over Australian buyers looking for laptop stands, ergonomic keyboards, mice and workstation accessories.</p></FindingCard>
          <FindingCard title="Shopping second"><p>Use Standard Shopping for sale SKUs where available; use PMax only as a tightly SKU-filtered fallback. The campaign should not leak into the full catalogue, low-stock products or non-sale pages.</p></FindingCard>
          <FindingCard title="No broad paid social"><p>Do not add Meta or LinkedIn paid for launch. Owned channels can support the sprint without creating another paid optimisation problem.</p></FindingCard>
          <FindingCard title="Scale with evidence"><p>Start at $3,000. Move toward $5,000 only when purchases, revenue, search-term quality, feed parity and stock movement are all holding.</p></FindingCard>
        </div>
      </Section>

      <Section eyebrow="Success measures and positioning" title="Judge the sprint on stock movement, revenue and qualified workplace demand.">
        <p>
          The campaign should not be judged on traffic volume alone. The executive question for the end of June is whether the campaign moved the right stock at an acceptable cost, while giving Australian workplace buyers a clear EOFY reason to act before 30 June.
        </p>
        <DataTable headers={["Measure", "Role", "How to use it"]} rows={successRows} />
      </Section>

      <Section eyebrow="Search demand landscape" title="The demand is broad and category-led, not product-name-led.">
        <p>
          The strongest Australian search demand sits in plain-language category terms. That suits Search and Shopping, but it means ads and landing pages need to explain the ergonomic benefit clearly instead of relying on internal or niche product names.
        </p>
        <DataTable headers={["AU keyword", "Volume", "CPC", "KD", "Shopping SERP"]} rows={searchDemandRows} />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <FindingCard title="Category demand is strong"><p>Laptop stand, monitor stand, ergonomic mouse, ergonomic keyboard and laptop riser terms add up to 34,200 monthly searches, or 34,000+ rounded. Direct product-name demand for Numberslide and CRICKET is weak, so paid traffic should be category-led.</p></FindingCard>
          <FindingCard title="Shopping is viable"><p>Shopping SERP features are present on the top category terms. This makes a SKU-filtered Shopping layer useful once Merchant Center sale prices, stock and page parity are clean.</p></FindingCard>
          <FindingCard title="Organic can follow paid"><p>Low keyword difficulty across the main product terms creates an organic opportunity alongside the paid sprint: stronger category pages, guides, internal links and product schema can compound beyond June.</p></FindingCard>
        </div>
      </Section>

      <Section eyebrow="Campaign structure" title="Launch with two core paid campaigns, then add layers only when they qualify.">
        <p>
          A $3,000 budget can work, but it should not be split into too many underpowered campaigns. The cleanest launch structure is Product Intent Search plus Standard Shopping or tightly controlled SKU-filtered PMax, with workplace buyer intent folded into Search and remarketing audiences built from day one.
        </p>
        <DataTable headers={["Component", "Launch allocation", "Execution rule"]} rows={campaignStructureRows} />
      </Section>

      <Section eyebrow="Budget, phasing and optimisation" title="Approve $3k, phase the spend, and only reallocate into evidence.">
        <p>
          The $3,000 June sprint is the recommended option. The $5,000 plan should stay a scale ceiling, not the default. Budget should be phased through launch validation, optimisation and final EOFY urgency, with daily week-one checks on tracking, search terms, Merchant Center issues and stock.
        </p>
        <DataTable headers={["Item", "Budget / timing", "Operating rule"]} rows={budgetRows} />
        <DataTable headers={["Rule", "Trigger"]} rows={optimisationRows} />
      </Section>

      <Section eyebrow="Bidding strategy" title="Use controlled bidding until purchase data is strong enough to automate.">
        <p>
          The campaign window is short and conversion volume may be immature. Avoid tCPA and tROAS at launch. Controlled CPC or capped-click bidding protects the first week while search terms, tracking, offer visibility, feed parity and stock movement are validated.
        </p>
        <DataTable headers={["Campaign / trigger", "Recommended bid approach", "Operating rule"]} rows={biddingRows} />
      </Section>

      <Section eyebrow="Landing page readiness" title="Current paid media readiness is 5/10.">
        <p>
          ErgoEquip has a working WooCommerce store and a live EOFY category page, but the campaign promise is not yet visible enough for cold paid traffic. The core gap is message match: if ads promise 25% off selected EOFY products, the landing page, product cards, product pages, cart and checkout must immediately confirm the offer.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <FindingCard title="Must fix: build a real EOFY landing experience"><p>The current EOFY page behaves like a default WooCommerce category archive. It needs a dedicated hero, 25% messaging, sale dates, urgency/countdown, product-card CTAs, and a trust/support bar.</p></FindingCard>
          <FindingCard title="Must fix: make the 25% offer visible"><p>The 25% discount was not visible in rendered product-page content. Ads, feed prices and landing pages must match before sale claims are used.</p></FindingCard>
          <FindingCard title="Must fix: show savings proof"><p>Add was/now pricing, sale badges, savings amounts, and product-card sale treatment where legally and technically valid.</p></FindingCard>
          <FindingCard title="Must fix: reduce checkout friction"><p>“Ship to different address” is checked by default, exposing a second full address form and making checkout feel much longer.</p></FindingCard>
          <FindingCard title="Must fix: add a homepage entry point"><p>The homepage has no EOFY CTA or campaign entry point. Add a banner or hero CTA so direct and owned-channel visitors can find the sale.</p></FindingCard>
          <FindingCard title="Tracking evidence is present"><p>GTM, GA4, Google Ads tags and WooCommerce ecommerce events were observed. Do not expose tag or account IDs in the client-facing version; purchase and revenue still need live QA before scaling.</p></FindingCard>
        </div>
        <div className="mt-8 rounded-3xl border border-border bg-white p-6 shadow-sm">
          <p className="font-semibold text-fg">Nice-to-have improvements before or during launch.</p>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted md:grid-cols-2">
            <li>Team/bulk order CTA for workplace buyers.</li>
            <li>Phone number in the header, not footer only.</li>
            <li>Shipping estimate or clearer shipping guidance earlier in the flow.</li>
            <li>Payment-method clarity if footer icons imply PayPal but checkout shows Stripe card only.</li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="Tracking and attribution" title="Make purchase the only primary conversion and keep everything else diagnostic.">
        <p>
          Before spend ramps, the setup needs one clean purchase conversion with revenue, item data and no duplicate counting. Team-order actions should be tracked, but initially kept secondary so Google does not optimise toward low-quality clicks instead of stock movement.
        </p>
        <DataTable headers={["Checklist item", "Status", "Action"]} rows={trackingRows} />
      </Section>

      <Section eyebrow="Competitive landscape" title="The market is crowded, but the EOFY peripheral gap is real.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          <FindingCard title="Officeworks is live"><p>Officeworks already has EOFY visibility and strong delivery/pickup messaging, including fast collection, delivery thresholds and broad workspace essentials positioning.</p></FindingCard>
          <FindingCard title="Amazon anchors low"><p>Amazon AU and marketplace alternatives create much lower price anchors on commodity laptop stands, mice and peripherals, often with high review volume.</p></FindingCard>
          <FindingCard title="Contour owns pain intent"><p>Contour Design is using smarter RSI and pain-led paid search positioning, which raises the bar for Penguin Mouse and ergonomic mouse copy.</p></FindingCard>
          <FindingCard title="Specialist EOFY gap"><p>No strong AU specialist pattern was observed for “ergonomic peripheral EOFY sale”. That creates a positioning gap for keyboards, mice and laptop-workstation bundles.</p></FindingCard>
          <FindingCard title="Furniture dominates EOFY Shopping"><p>FlexiSpot and furniture players dominate EOFY Shopping activity for chairs and desks, not ergonomic peripherals. ErgoEquip should avoid fighting chair/desk EOFY head-on.</p></FindingCard>
        </div>
      </Section>

      <Section eyebrow="Product prioritisation" title="Paid spend should follow stock depth and search alignment, not the full catalogue.">
        <p>
          The sale has 823 units across 24 products, but the paid opportunity is concentrated in a smaller set of high-stock hero products. Low-stock and zero-stock products should be excluded or treated as on-site upsells, not paid priorities.
        </p>
        <DataTable headers={["Hero product", "Stock", "Search demand alignment", "Paid priority"]} rows={productRows} />
      </Section>

      <Section eyebrow="Scale triggers" title="Move from $3k to $5k only when the evidence is clean.">
        <p>
          Scaling should be a response to verified traction, not the default plan. If the first 7–10 days show purchases, clean queries, price parity and stock movement on the right SKUs, increase budgets gradually into the winners.
        </p>
        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
          <ol className="grid gap-4 text-base leading-7 text-muted md:grid-cols-2">
            {["3–5 tracked purchases or qualified team enquiries for cautious scale; 8–10 for stronger scale confidence.", "Blended ROAS at or above margin-adjusted breakeven, or within 20% with strong stock movement.", "At least 80% of Search spend going to relevant or acceptable terms.", "Feed/page price parity holding across advertised SKUs.", "No stock-outs or fulfilment risk on hero SKUs.", "Then scale to $5k in 20–30% steps with 2–3 days of stabilisation between meaningful changes."].map((item, idx) => (
              <li key={item} className="flex items-start gap-3"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cta text-xs font-bold text-white">{idx + 1}</span><span>{item}</span></li>
            ))}
          </ol>
        </div>
      </Section>

      <Section eyebrow="Decisions needed" title="Biosymm needs to confirm the launch inputs before spend starts.">
        <p>
          These decisions unlock the campaign build, feed setup, landing-page QA, tracking configuration, and budget pacing. Without them, the paid sprint risks optimising traffic before the commercial constraints are clear.
        </p>
        <DataTable headers={["Decision", "Why it matters"]} rows={decisionRows} />
      </Section>

      <Section eyebrow="Bottom line" title="The sprint is viable if the execution gap closes first.">
        <div className="rounded-[2rem] bg-fg p-8 text-bg md:p-10">
          <p className="max-w-4xl text-3xl font-semibold leading-[1.2] tracking-[-0.02em] md:text-5xl md:leading-[1.1]">
            The demand is there. The stock is there. The gap is between the brief and the landing page. Fix offer visibility, tracking, and feed — then this sprint has a genuine shot at moving stock profitably.
          </p>
        </div>
      </Section>
    </main>
  );
}
