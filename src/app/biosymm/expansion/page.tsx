import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rockhampton vs Gladstone — Clinic Expansion Research | Biosymm",
  description:
    "Search demand and competitive landscape comparison for Biosymm's next clinic location. One data point for the expansion decision.",
  robots: { index: false, follow: false },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const b2cKeywords = [
  ["physio [city]", "250", "350", "8 / 26", "Local, informational"],
  ["[city] physio", "90", "50", "8 / 26", "Local, informational"],
  ["physiotherapy [city]", "30", "40", "9 / 31", "Local, informational"],
  ["remedial massage [city]", "80", "100", "54 / 1", "Commercial"],
  ["exercise physiology [city]", "40", "0", "— / —", "Local"],
  ["allied health [city]", "40", "0", "2 / —", "Local"],
  ["bulk billing physio [city]", "40", "0", "— / —", "Cost-research"],
  ["pelvic floor physio [city]", "30", "10", "0 / —", "Local"],
  ["sports physio [city]", "10", "0", "— / —", "Local"],
];

const b2bKeywords = [
  ["workplace physio [city]", "0", "0", "—", "—"],
  ["workplace physiotherapy [city]", "0", "0", "—", "—"],
  ["injury management [city]", "0", "0", "—", "—"],
  ["occupational health [city]", "0", "0", "—", "—"],
  ["pre-employment medical [city]", "0", "0", "—", "—"],
  ["workers compensation physio [city]", "0", "0", "—", "—"],
  ["onsite physiotherapy [city]", "0", "0", "—", "—"],
  ["ergonomic assessment [city]", "0", "0", "—", "—"],
];

const rockySERP = [
  ["1", "moverocky.com.au (Movement Improvement)", "Local clinic", "15"],
  ["2", "healthfirstgroup.com.au", "National chain", "29"],
  ["3", "vectorhealth.com.au", "Local clinic", "14"],
  ["4", "AI Overview / PAA block", "—", "—"],
  ["5", "livestrongphysio.com.au", "Local clinic", "9"],
  ["6", "entirelyhealth.com.au", "National chain", "10"],
  ["8", "unitedphysiogroup.com.au", "National chain", "3"],
  ["9", "continence.org.au", "Directory", "74"],
  ["10", "1nspireclinic.au", "Local clinic", "0"],
];

const gladstoneSERP = [
  ["1", "activephysiohealth.com.au", "Local clinic", "13"],
  ["2", "physioandfitness.com.au (Physio & Fitness)", "Local clinic", "16"],
  ["3", "gladstonehandsonphysio.com.au", "Local clinic", "4"],
  ["4", "healthfirstgroup.com.au", "National chain", "29"],
  ["6", "allsortedphysiotherapy.com", "Local clinic", "1"],
  ["7", "cq.health.qld.gov.au (Gladstone Hospital)", "Government", "82"],
  ["9", "healthdirect.gov.au", "Directory", "87"],
  ["10", "physiocall.com.au", "Local clinic", "9"],
];

const competitors = [
  ["Health First Group", "Both", "29", "~3,946 site-wide", "Strong", "Only competitor running paid search. Rocky page: 17 refdomains. Gladstone page: 3 refdomains."],
  ["Physio & Fitness Gladstone", "Gladstone", "16", "1,281", "Strong", "183 referring domains. Owns 'massage gladstone' (1,300/mo). No paid search. Hardest single competitor."],
  ["Movement Improvement", "Rockhampton", "15", "251", "Moderate", "Ranks #1 branded, #2 'physio rockhampton'. Only 9 organic keywords. Beatable in 6–12 months."],
  ["Vector Health", "Rockhampton", "14", "272", "Moderate", "Rocky is actually secondary — top keywords are Yeppoon. 205 refdomains may include low-quality links."],
  ["Entirely Health", "Rockhampton", "10", "835", "Moderate", "Traffic is mostly brand-driven (Rocky + Yeppoon). Weak non-branded SEO."],
  ["Active Physio Health Gladstone", "Gladstone", "13", "156", "Weak", "3,507 backlinks / 281 refdomains at DR 13 — strongly suggests spam links."],
  ["Live Strong Physiotherapy", "Rockhampton", "9", "133", "Weak", "Ranks #4 despite low DR — GMB/proximity signals doing the work."],
  ["Gladstone Hands On Physio", "Gladstone", "4", "146", "Weak", "259 backlinks at DR 4. Ranks #3 on GBP presence alone."],
  ["All Sorted Physiotherapy", "Gladstone", "1", "57", "Weak", "DR essentially zero. Easiest target to displace in either market."],
];

const nationalB2B = [
  ["workplace rehabilitation services", "250", "1", "Informational/commercial"],
  ["workplace injury management services", "200", "—", "Informational/commercial"],
  ["pre-employment medical assessment", "200", "1", "Informational"],
  ["workplace injury management", "150", "1", "Informational/commercial"],
  ["fifo physio", "70", "0", "Commercial/informational"],
  ["corporate physiotherapy", "70", "—", "Informational/commercial"],
  ["workplace physiotherapy", "60", "0", "Informational"],
  ["onsite physiotherapy", "30", "0", "Informational"],
  ["fifo physiotherapy", "30", "—", "Informational"],
  ["mining physiotherapy", "no data", "—", "—"],
  ["pre-employment medical mining QLD", "no data", "—", "—"],
];

const divergencePoints = [
  {
    tension: "Which city wins on search",
    fable: "Rockhampton. Lower keyword difficulty (KD 0–9), weaker incumbents, zero brand entrenchment. A new entrant competes for nearly 100% of demand from day one.",
    gpt: "Gladstone. Roughly 4–5x more physio searches per capita than Rockhampton — a structurally more search-active patient market, even accounting for branded volume.",
  },
  {
    tension: "Gladstone's branded search volume",
    fable: "A moat. The ~1,100/mo of branded competitor searches is not capturable by a new entrant via SEO. Strip it and capturable demand is near parity with Rockhampton.",
    gpt: "Evidence of market health. In an underdeveloped market, branded search would be near zero. Gladstone patients actively search for physio — a new entrant can build brand equity in a proven market.",
  },
  {
    tension: "B2B employer base",
    fable: "Rockhampton is geographically contiguous with the existing Bowen Basin cluster (Moranbah, Blackwater). Warmer relationships, shorter travel time from existing clinics.",
    gpt: "Gladstone's concentration of large industrial employers (Gladstone Ports, QAL alumina refinery, Boyne Smelters, Curtis Island LNG) is exactly the workplace physio profile Biosymm targets. One QAL contract could exceed 12 months of B2C revenue.",
  },
  {
    tension: "B2C volume ceiling",
    fable: "Rockhampton's larger population (~85k vs ~37k) gives more long-tail headroom across condition and service queries beyond the core physio terms.",
    gpt: "Gladstone punches above its population size on per-capita search consistently. Per-capita engagement rate is more predictive of patient conversion than raw population.",
  },
  {
    tension: "Paid search bridge",
    fable: "Not the primary lever for a clinic model at this scale. Organic and GBP should be the focus.",
    gpt: "Gladstone CPCs ($0.80–$1.80) make Google Ads a cost-efficient bridge while SEO matures over 12–18 months. A $2k/mo budget could sustain meaningful lead volume during the ramp-up period.",
  },
  {
    tension: "SEO timeline to top 3",
    fable: "Rockhampton: 6–12 months. The weaker competitive field and lower KD make this achievable with a focused local SEO campaign.",
    gpt: "Gladstone: 12–18 months to displace Physio & Fitness. But paid search reduces the cost of that longer runway, and a 12-month organic timeline is still fast by national standards.",
  },
];

const caveats = [
  { title: "B2B pipeline is the primary decision driver — and search can't see it", body: "Employer density, active tender calendars, WorkCover QLD claim volumes, and existing Biosymm relationships will determine year-1 and year-2 revenue. None of this is visible in Ahrefs." },
  { title: "Ahrefs underestimates small regional AU markets", body: "The platform's clickstream panel is metro-concentrated. For cities under 100k population, true volumes are likely 2–4x these estimates. Cross-validate against Google Keyword Planner with explicit QLD geo-targeting." },
  { title: "Gladstone Park contamination", body: "Gladstone Park is a Melbourne suburb. Some Ahrefs results may refer to it rather than Gladstone QLD — the 1,800/mo total has not been verified with strict QLD targeting and may be overstated." },
  { title: "'Near me' queries not captured", body: "Ahrefs doesn't measure 'physio near me' or unmodified mobile queries, which likely dominate local health search. True demand is a floor estimate." },
  { title: "Local pack drives more bookings than organic rank", body: "GBP review counts, proximity signals, and check-in frequency likely outperform organic positions in both markets. Local pack competitiveness was not fully analysed here." },
  { title: "Staffing feasibility not assessed", body: "The binding constraint in regional clinic expansion is often physio recruitment. Graduate availability and retention rates in each city are absent from this analysis." },
  { title: "SERP snapshots are a single point in time", body: "One query per city. Local SERPs shift with algorithm updates, seasonal GBP changes, and new entrants. The competitive gap may look different by the time a new clinic is operational." },
];

// ── Components ────────────────────────────────────────────────────────────────

function Section({ eyebrow, title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border-subtle py-16 md:py-24">
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {eyebrow && <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cta">{eyebrow}</p>}
        <h2 className="max-w-4xl text-balance text-3xl font-semibold tracking-[-0.03em] text-fg md:text-5xl">{title}</h2>
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
            <tr className="border-b-2 border-border">
              {headers.map((h) => <th key={h} className="px-5 py-4 font-semibold">{h}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle text-muted">
            {rows.map((row, ri) => (
              <tr key={ri} style={ri % 2 !== 0 ? { backgroundColor: "oklch(97% 0.004 80)" } : {}}>
                {row.map((cell, ci) => (
                  <td key={ci} className={ci === 0 ? "px-5 py-3.5 font-semibold text-fg" : "px-5 py-3.5"}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CompetitorTable({ rows }: { rows: string[][] }) {
  const headers = ["Clinic", "City", "DR", "Est. traffic /mo", "Maturity", "Key observation"];
  const maturityClass = (m: string) => {
    if (m === "Strong") return "px-5 py-3.5 font-semibold text-emerald-700";
    if (m === "Moderate") return "px-5 py-3.5 font-semibold text-amber-700";
    return "px-5 py-3.5 font-semibold text-muted-2";
  };
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border text-left text-sm">
          <thead className="bg-bg-raised text-xs uppercase tracking-[0.16em] text-muted-2">
            <tr className="border-b-2 border-border">
              {headers.map((h) => <th key={h} className="px-5 py-4 font-semibold">{h}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle text-muted">
            {rows.map((row, ri) => (
              <tr key={ri} style={ri % 2 !== 0 ? { backgroundColor: "oklch(97% 0.004 80)" } : {}}>
                {row.map((cell, ci) => (
                  <td key={ci} className={
                    ci === 0 ? "px-5 py-3.5 font-semibold text-fg" :
                    ci === 4 ? maturityClass(cell) :
                    "px-5 py-3.5"
                  }>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function VerdictCard({ city, recommendation, model, confidence, summary }: {
  city: "Rockhampton" | "Gladstone";
  recommendation: string;
  model: string;
  confidence: "medium" | "high" | "low";
  summary: string;
}) {
  const isRocky = city === "Rockhampton";
  return (
    <div className={`rounded-3xl border p-6 shadow-sm md:p-8 ${isRocky ? "border-cta/30 bg-cta/5" : "border-amber-300/40 bg-amber-50/60"}`}>
      <div className="flex items-start justify-between gap-4">
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${isRocky ? "text-cta" : "text-amber-600"}`}>{model}</p>
        <span className="shrink-0 rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-muted-2 capitalize">{confidence} confidence</span>
      </div>
      <p className={`mt-4 text-5xl font-semibold tracking-[-0.05em] md:text-6xl ${isRocky ? "text-cta" : "text-amber-700"}`}>{city}</p>
      <p className="mt-2 text-sm font-medium text-muted-2">{recommendation}</p>
      <div className="mt-5 h-px w-full bg-border-subtle" />
      <p className="mt-5 text-sm leading-7 text-muted">{summary}</p>
    </div>
  );
}

function FindingCard({ title, children, accent = false }: { title: string; children: React.ReactNode; accent?: boolean }) {
  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
      <div className={`mb-4 h-0.5 w-8 rounded-full ${accent ? "bg-amber-400" : "bg-cta"}`} />
      <h3 className="text-xl font-semibold tracking-[-0.02em] text-fg">{title}</h3>
      <div className="mt-4 text-sm leading-7 text-muted">{children}</div>
    </div>
  );
}

function MetricCard({ label, value, note, highlight = false }: { label: string; value: string; note: string; highlight?: boolean }) {
  return (
    <div className={`relative rounded-3xl border p-6 shadow-sm ${highlight ? "border-cta/30 bg-cta/5" : "border-border bg-white"}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-2">{label}</p>
      <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-fg md:text-4xl">{value}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{note}</p>
    </div>
  );
}

function CaveatItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-t border-border-subtle pt-6 first:border-t-0 first:pt-0">
      <p className="font-semibold text-fg">{title}</p>
      <p className="mt-2 text-sm leading-7 text-muted">{body}</p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BiosymmExpansionPage() {
  return (
    <main className="min-h-screen bg-bg text-fg">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div className="absolute right-[-8%] top-[-15%] h-[480px] w-[480px] rounded-full bg-cta/8 blur-3xl" />
        <div className="absolute left-[-5%] bottom-[-20%] h-[320px] w-[320px] rounded-full bg-amber-300/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cta">Expansion Research / June 2026</p>
          <h1 className="mt-6 max-w-4xl text-balance text-display font-semibold text-fg">
            Rockhampton or Gladstone. Where does Biosymm expand next?
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-muted">
            Search demand and competitive landscape analysis for Biosymm&apos;s next Central Queensland clinic. One data point, not the full decision.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-fg">
            <span className="rounded-full border border-border bg-white px-4 py-2">Biosymm</span>
            <span className="rounded-full border border-border bg-white px-4 py-2">June 2026</span>
            <span className="rounded-full border border-border bg-white px-4 py-2">Ahrefs · 10 agents · Fable 5 + GPT</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-amber-700">Split verdict</span>
          </div>
        </div>
      </section>

      {/* Key numbers */}
      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-4 md:px-8">
          <MetricCard label="Capturable B2C search" value="~690/mo each" note="Once Gladstone's branded competitor terms are stripped, non-branded demand is near parity in both cities." highlight />
          <MetricCard label="Rocky SERP difficulty" value="KD 0–9" note="Top incumbents are DR 9–15 with thin organic footprints. Realistic top-3 in 6–12 months." />
          <MetricCard label="Gladstone SERP difficulty" value="KD 16–31" note="Physio & Fitness Gladstone holds 1,281 traffic/mo with 183 referring domains — a real incumbent." />
          <MetricCard label="B2B search demand" value="Zero" note="Both cities. Employer contracts are procured via tenders and OHS manager relationships, not Google." />
        </div>
      </section>

      {/* Split verdict */}
      <Section eyebrow="The verdict" title="Two independent models. Two different recommendations.">
        <p>
          Fable 5 ran the primary strategic analysis. An independent GPT red-team stress-tested the findings without seeing the primary view. They disagree — and the disagreement is instructive.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <VerdictCard
            city="Rockhampton"
            model="Primary analysis — Fable 5"
            recommendation="Faster path to B2C organic visibility"
            confidence="medium"
            summary="Strip Gladstone's branded competitor volume (~1,100/mo) and capturable non-branded demand is near parity: roughly 690/mo each. Rockhampton wins decisively on demand-to-difficulty ratio — equal pool at KD 0–9 vs KD 16–31, against a field where the top independent drives only 251 visits/mo. Zero brand entrenchment means a new entrant competes for nearly 100% of demand from day one. Top-3 organic within 6–12 months."
          />
          <div className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-fg text-bg text-xs font-bold tracking-[0.08em]">VS</div>
          <VerdictCard
            city="Gladstone"
            model="Independent stress-test — GPT"
            recommendation="Better structural fit for Biosymm's B2B model"
            confidence="medium"
            summary="Gladstone generates 4–5x more physio searches per capita than Rockhampton — a structurally more search-active patient market. More importantly: Gladstone Ports Corporation, QAL alumina refinery, Boyne Smelters, and Curtis Island LNG are concentrated high-injury-risk employers. A single contract with QAL or Boyne could exceed 12 months of B2C clinic revenue. Low CPCs ($0.80–$1.80) also make paid search a viable bridge while SEO matures."
          />
        </div>
        <div className="mt-8 rounded-[2rem] bg-fg p-8 text-bg md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-50">Where both models agree</p>
          <p className="mt-5 max-w-4xl text-2xl font-semibold leading-snug tracking-[-0.02em] md:text-3xl">
            B2B search volume is zero in both cities. Search data cannot answer Biosymm&apos;s primary question. B2B will be won through direct outreach to OHS managers, LinkedIn, and WorkCover QLD relationships — not SEO.
          </p>
        </div>
      </Section>

      {/* Search volume */}
      <Section eyebrow="Search demand" title="Keyword volumes — B2C and B2B, both cities.">
        <p>
          All volumes are Ahrefs AU estimates with city-level location IDs (Rockhampton: 1000404, Gladstone: 1000364). Treat as conservative floor estimates — Ahrefs underestimates small regional AU markets. The relative comparison is more reliable than absolute numbers.
        </p>
        <p className="mt-3 text-sm font-semibold text-fg">B2C — General physiotherapy &amp; allied health</p>
        <DataTable
          headers={["Keyword", "Rocky /mo", "Gladstone /mo", "KD (Rocky / Glad)", "Intent"]}
          rows={b2cKeywords}
        />
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/60 p-5 text-sm leading-7 text-muted">
          <span className="font-semibold text-fg">Gladstone branded terms (~1,100/mo not shown above):</span> Physio &amp; Fitness (450), Physio and Fitness (200), Active Physio (150), Hands On Physio (60), Hands On Physiotherapy (40). These are existing-clinic navigational searches — not capturable by a new entrant via SEO.
        </div>
        <p className="mt-8 text-sm font-semibold text-fg">B2B / Workplace health — both cities</p>
        <DataTable
          headers={["Keyword", "Rocky /mo", "Gladstone /mo", "KD", "Intent"]}
          rows={b2bKeywords}
        />
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <FindingCard title="The B2B zero result is expected, not damning">
            <p>Employer procurement of workplace physio services doesn&apos;t happen through Google. OHS managers use tenders, WorkSafe networks, and existing supplier relationships. Zero search volume confirms the channel; it says nothing about market size. B2B revenue in either city will be won through direct outreach, not organic rank.</p>
          </FindingCard>
          <FindingCard title="National B2B search pool is ~1,500–2,000/mo" accent>
            <p>The one exception worth a light SEO investment is the &quot;workplace rehabilitation&quot; cluster (~180/mo combined, KD 1–4). A single well-optimised service page here won&apos;t drive the mining pipeline, but it validates authority for WHS managers doing due diligence on a new supplier. Build it regardless of which city is chosen.</p>
          </FindingCard>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4 rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
          <div>
            <p className="text-2xl font-semibold tracking-[-0.03em] text-fg">~690/mo</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-2">Rockhampton B2C</p>
          </div>
          <div className="border-x border-border-subtle">
            <p className="text-2xl font-semibold tracking-[-0.03em] text-fg">~690/mo</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-2">Gladstone capturable B2C</p>
          </div>
          <div>
            <p className="text-2xl font-semibold tracking-[-0.03em] text-fg">0/mo</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-2">B2B — both cities</p>
          </div>
        </div>
      </Section>

      {/* SERP landscape */}
      <Section eyebrow="SERP landscape" title="Who ranks — and how easy are they to displace?">
        <p>
          Both cities have Google local packs present. Competition is low by national standards in both markets. The difference is the strength of the lead incumbent.
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cta">Rockhampton — &quot;physiotherapy rockhampton&quot;</p>
            <p className="mt-2 text-sm text-muted">Competition: <span className="font-semibold text-fg">Low</span> · Local pack: Present</p>
            <DataTable
              headers={["Pos", "Site", "Type", "DR"]}
              rows={rockySERP}
            />
            <p className="mt-4 text-sm leading-7 text-muted">
              Top organic results are independent clinics at DR 9–15. Health First Group (DR 29) is the only multi-location competitor, but its Rocky location page has just 17 referring domains. No major health directory (Healthdirect, HotDoc, HealthEngine) appears in the top 10 — an unworked citation channel.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-600">Gladstone — &quot;physiotherapy gladstone&quot;</p>
            <p className="mt-2 text-sm text-muted">Competition: <span className="font-semibold text-fg">Low-medium</span> · Local pack: Present</p>
            <DataTable
              headers={["Pos", "Site", "Type", "DR"]}
              rows={gladstoneSERP}
            />
            <p className="mt-4 text-sm leading-7 text-muted">
              The government (DR 82) and Healthdirect (DR 87) at positions 7–9 are authority hitchhikers with minimal page-level equity. The real constraint is Physio &amp; Fitness Gladstone (DR 16, 1,281 traffic/mo, 183 refdomains) — the strongest independent in either market.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <FindingCard title="Rocky: top-3 organic in 6–12 months">
            <p>A new clinic targeting DR 20–25 via ~20–40 quality referring domains (local directories, health associations, media) and well-structured service pages could realistically reach positions 1–3 within 6–12 months. GBP optimisation is the parallel fast-win that requires zero DR.</p>
          </FindingCard>
          <FindingCard title="Gladstone: strong but slower at 12–18 months" accent>
            <p>Positions 3–10 are extremely weak (DR 1–13) and highly displaceable. Breaking into positions 1–2 means unseating Physio &amp; Fitness, which has genuine traffic momentum and a real link profile. Realistic top-3: 12–18 months. Low CPCs ($0.80–$1.80) make Google Ads a cost-efficient bridge while SEO compounds.</p>
          </FindingCard>
        </div>
      </Section>

      {/* Competitor profiles */}
      <Section eyebrow="Competitor profiles" title="Digital maturity of every ranked clinic in both markets.">
        <p>
          Domain Rating, estimated monthly organic traffic, and digital maturity assessment for all clinics appearing in the top-10 SERPs for both cities.
        </p>
        <CompetitorTable rows={competitors} />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <FindingCard title="Health First Group is the one competitor to watch">
            <p>DR 29 and the only player running active paid search in either market. But its location pages are thin: 17 refdomains in Rocky, 3 in Gladstone. A focused local SEO campaign can leapfrog both on long-tail queries within the first year.</p>
          </FindingCard>
          <FindingCard title="Gladstone's strongest independent is genuinely strong">
            <p>Physio &amp; Fitness Gladstone has 1,281 traffic/mo, 183 referring domains, and drives volume primarily through &quot;massage gladstone&quot; (1,300/mo). It doesn&apos;t run paid search. To take position 1–2 in Gladstone requires a sustained 12–18 month campaign, not a 3-month burst.</p>
          </FindingCard>
          <FindingCard title="Most competitors are GBP incumbents, not SEO incumbents">
            <p>Several clinics with DR 1–4 hold top-5 positions — driven entirely by Google Business Profile proximity and review signals, not organic SEO. GBP optimisation is the first move in either city, regardless of domain authority.</p>
          </FindingCard>
        </div>
      </Section>

      {/* National B2B */}
      <Section eyebrow="National B2B overlay" title="Mining and FIFO workplace health demand — Australia-wide.">
        <p>
          Total estimated national pool is ~1,500–2,000/mo across all workplace health terms. Mining and FIFO-specific terms return zero data. This is confirmation of the procurement channel, not a market-size signal.
        </p>
        <DataTable
          headers={["Keyword", "National /mo", "KD", "Intent"]}
          rows={nationalB2B}
        />
        <div className="mt-8 rounded-3xl border border-border bg-white p-6 shadow-sm md:p-8">
          <div className="mb-4 h-0.5 w-8 rounded-full bg-cta" />
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-fg">The one national SEO play worth building regardless of city</h3>
          <p className="mt-4 text-sm leading-7 text-muted">
            The &quot;workplace rehabilitation&quot; and &quot;injury management consultant&quot; cluster (~350/mo combined, KD 0–1) is a low-competition national credibility play. A single well-structured service hub won&apos;t drive mining contracts directly, but it validates Biosymm as a legitimate national workplace health provider when OHS managers are doing due diligence. Build it on biosymm.com regardless of which city is chosen.
          </p>
        </div>
      </Section>

      {/* Divergence — centrepiece, inverted section */}
      <section className="border-t border-white/10 bg-fg py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cta">Where the models diverge</p>
          <h2 className="max-w-4xl text-balance text-3xl font-semibold tracking-[-0.03em] text-bg md:text-5xl">
            These are the tensions Marcus should surface with the Biosymm team.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-bg/60 md:text-lg">
            The most useful output of two independent analytical passes isn&apos;t the recommendation; it&apos;s the points of tension. Each item below represents a question the expansion decision hinges on.
          </p>

          {/* Column headers — desktop only */}
          <div className="mt-12 hidden md:grid md:grid-cols-[1fr_2fr_2fr] md:gap-6">
            <div />
            <p className="px-4 text-xs font-semibold uppercase tracking-[0.2em] text-cta">Primary analysis — Fable 5</p>
            <p className="px-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Stress-test — GPT</p>
          </div>

          <div className="mt-4 divide-y divide-bg/10">
            {divergencePoints.map((d, i) => (
              <div key={i} className="grid gap-4 py-6 md:grid-cols-[1fr_2fr_2fr] md:gap-6">
                <p className="text-sm font-semibold text-bg/70 md:pt-1">{d.tension}</p>
                <div className="rounded-2xl bg-cta/15 px-4 py-3.5">
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cta md:hidden">Fable 5</p>
                  <p className="text-sm leading-7 text-bg/80">{d.fable}</p>
                </div>
                <div className="rounded-2xl bg-amber-400/15 px-4 py-3.5">
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-amber-400 md:hidden">GPT</p>
                  <p className="text-sm leading-7 text-bg/80">{d.gpt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pivot findings */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-bg/15 bg-bg/5 p-6">
              <div className="mb-4 h-0.5 w-8 rounded-full bg-cta" />
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-bg">The pivot question: does Biosymm have warm B2B relationships in either city?</h3>
              <p className="mt-4 text-sm leading-7 text-bg/70">If yes for Gladstone employers (QAL, Boyne, Gladstone Ports, Curtis Island LNG operators): choose Gladstone. If the existing Bowen Basin network (Moranbah, Blackwater) extends more naturally to Rockhampton: choose Rocky. No search dataset can answer this. It&apos;s a pipeline question.</p>
            </div>
            <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-6">
              <div className="mb-4 h-0.5 w-8 rounded-full bg-amber-400" />
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-bg">The B2C hedge: Rockhampton is lower risk, Gladstone is higher ceiling</h3>
              <p className="mt-4 text-sm leading-7 text-bg/70">If Biosymm wants to prove a new location quickly with B2C revenue while the B2B pipeline is being built, Rockhampton is the faster, lower-risk path. If the B2B employer opportunity in Gladstone is real and Biosymm can move on it within 6 months of opening, Gladstone&apos;s higher ceiling justifies the harder SEO timeline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Caveats */}
      <Section eyebrow="Limitations" title="What this data cannot tell you.">
        <p>
          Search demand research is one input. Here is what it leaves unanswered — and what should be weighted alongside it.
        </p>
        <div className="mt-8 rounded-3xl border border-border bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {caveats.map((c) => <CaveatItem key={c.title} title={c.title} body={c.body} />)}
          </div>
        </div>
      </Section>

      {/* Footer CTA */}
      <section className="border-t border-border-subtle py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="rounded-[2rem] bg-fg p-8 text-bg md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-50">Next step</p>
            <p className="mt-5 max-w-3xl text-3xl font-semibold leading-snug tracking-[-0.02em] md:text-4xl">
              Search signals point to Rockhampton for B2C ease, Gladstone for B2B upside. The right answer depends on one question: which city does Biosymm have warmer employer relationships in?
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 opacity-70">
              Validate B2B pipeline leads in each city before committing. Once the expansion city is confirmed, the next build is location pages and a workplace health service hub, using the keyword data from this research.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
