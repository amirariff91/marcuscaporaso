import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  CircleAlert,
  Crosshair,
  Layers3,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import styles from "../plan.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Strategy",
  description: "Private, redacted growth strategy for ErgoWorks Consulting.",
  robots: { index: false, follow: false },
};

const snapshotCaveat =
  "preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis";

const strategy = [
  [Search, "Optimise Search", "Protect established demand capture, improve query quality and clean the signals guiding bidding."],
  [Sparkles, "Create demand", "Add a focused Meta prospecting layer that reaches workplace decision-makers before they search."],
  [Layers3, "Convert intentionally", "Route each service theme to a dedicated landing-page journey and a clear first step."],
  [BarChart3, "Measure pipeline", "Connect media to qualified opportunities—not newsletters and other soft actions."],
] as const;

const offers = [
  [
    "Entry",
    "Free 15-minute Workplace Ergonomics Risk Snapshot",
    "B2B organisational buyer with one defined workplace-ergonomics question; capacity and service geography require approval.",
    "15-minute consultant conversation and written three-point summary; free, subject to approved fulfilment capacity.",
    snapshotCaveat,
  ],
  [
    "Paid entry",
    "ErgoStart",
    "Defined site, cohort or issue.",
    "Fixed-scope assessment sprint and prioritised actions; pricing is unconfirmed and must not be advertised until client-approved.",
    "Scope, inclusions, delivery timing and price are confirmed only in an approved proposal.",
  ],
  [
    "Rollout",
    "ErgoScale",
    "Corporate, multi-site or hybrid programme.",
    "Repeatable workflow, implementation plan and reporting; pricing is unconfirmed.",
    "Coverage, timing and outputs depend on the approved programme scope.",
  ],
  [
    "Capability",
    "ErgoCoach",
    "Manual-task or train-the-trainer need.",
    "Task-led review, tailored training and supervisor toolkit; pricing is unconfirmed.",
    "Format, participants and outputs depend on the approved scope.",
  ],
  [
    "Ongoing",
    "ErgoControl",
    "Organisation requiring ongoing programme visibility.",
    "ErgoAssess subscription or managed retainer, review cadence and reporting; pricing is unconfirmed.",
    "Platform, service level, cadence and outputs depend on the approved scope.",
  ],
] as const;

const accountSignals = [
  [
    "Established Search",
    "A mature Google Search programme using Maximize Conversions with no target CPA; auto-tagging and GA4-linked conversions are already in place.",
  ],
  [
    "Concentrated demand",
    "Manual Handling Training is the current anchor at 49% of last-30-day Search spend. The largest verified TRAINING term is approximately 2,700 Australian searches per month.",
  ],
  [
    "Mixed signals",
    "Reported conversions include calls and enquiries alongside newsletter sign-ups, email clicks and call forwarding. Soft actions currently overstate genuine Consulting demand, and no qualified-lead or closed-won import exists.",
  ],
  [
    "Missing layer",
    "There has been no paid-social activity in the recent GA4 view. Paid traffic still lands on generic WordPress service pages, with no dedicated paid-media conversion journey.",
  ],
  [
    "Gated expansion",
    "Research identifies an approximately 3,400-searches-per-month mixed-intent certificate/course pool and an approximately 780-searches-per-month care-sector opportunity. Both are directional estimates—not forecasts or verified service fit.",
  ],
  [
    "Partial geography signal",
    "One geo-specific term shows a 26% CTR signal, but matched-location reports and conversion quality remain unverified; no city-level decision is ready.",
  ],
] as const;

const searchGroups = [
  ["Manual Handling Training", "49% of Search spend", "Demand anchor; query and lead quality remain unverified."],
  ["Competitor / generic group", "18.7% of Search spend", "Nine static EXACT terms; sampled third-party RTO/competitor terms were near-zero converting, but total quality is unverified."],
  ["Ergonomic Office Consulting", "Directional group", "Validate conversion quality before expansion."],
  ["Ergonomics Assessments", "Directional group", "Diagnose after conversion cleanup."],
  ["Workplace Ergonomics", "Insufficient evidence", "Not enough evidence for a directional decision."],
  ["Brand", "No recent delivery", "Three dedicated Brand terms are paused and duplicated across five service groups; repair in place before any breakout decision."],
] as const;

const budgetScenarios = [
  ["Flat-budget reallocation", "Protect current Search baseline", "Minimum viable pilot", "Parked", "Parked", "Flat media envelope", "Use only if total media must remain flat."],
  ["Minimum Meta on top", "Protect current Search baseline", "Minimum viable pilot", "Parked", "Parked", "Incremental social layer", "Preferred minimum launch scenario."],
  ["Meta plus funded PMax", "Protect current Search baseline", "Minimum viable pilot", "Funded to standalone floor", "Parked", "Expanded test envelope", "Only after every PMax gate passes."],
] as const;

const platformFloors = [
  ["Meta", "Viable daily floor", "Keep the initial budget in one consolidated prospecting ad set."],
  ["PMax", "Standalone viable floor", "A nominal 5–10% allocation is not viable at the current run-rate; fund to floor or park."],
  ["Paid remarketing", "Separate viable budget plus sufficient audience", "Build isolated audiences first; park paid delivery initially."],
] as const;

const conversionHierarchy = [
  ["Valid Consulting enquiry", "Primary initially."],
  ["Qualified new-business Consulting call", "Primary only when qualification rules can be enforced or reconciled."],
  ["Valid B2B Workplace Ergonomics Risk Snapshot request", `${snapshotCaveat}; primary initially.`],
  ["CRM-qualified lead", "Primary offline import once reliable."],
  ["Proposal and closed-won", "Downstream and value signals as volume and data quality permit."],
  ["Newsletter, email click, click-to-call, call forwarding and local actions", "Secondary."],
  ["Physiotherapy actions", "Excluded from Consulting campaign goals."],
] as const;

const biddingDecisions = [
  ["Fewer than 20 clean conversions per month with weak delivery and no qualified-lead imports", "Consider a controlled Maximize Clicks test only after query review and with an evidence-based CPC cap."],
  ["Approximately 20–29 clean conversions per month with stable query and lead quality", "Retain Maximize Conversions and document the rubric variance."],
  ["At least 30 clean conversions per month with stable CPA", "Maximize Conversions is supported; assess tCPA readiness."],
  ["More than 50 clean conversions per month with stable qualified-lead CPA", "Consider tCPA."],
  ["Reliable margin values and sufficient closed-won volume", "Assess tROAS."],
] as const;

const roadmap = [
  {
    days: "Days 1–30",
    title: "Establish the foundation",
    items: [
      "Inventory enabled conversion actions and assign each to Consulting, Physiotherapy or another scope.",
      "Create the approved Consulting conversion-goal hierarchy; demote newsletters and soft actions.",
      "Confirm CRM, click-ID capture, call qualification and offline-upload design.",
      "Complete Australian privacy/legal review, CMP and consent design.",
      "Build and QA the dedicated landing-page variants and two-step form.",
      "Extend Search evidence, audit the existing negative inventory, repair Brand routing and keep PMax and paid remarketing parked.",
      "Prepare one isolated Meta prospecting build, but keep it unpublished until the gates pass.",
      "Committed leading indicators: approved goal map; zero newsletter primaries; test-event reconciliation; privacy approval; landing-page/form QA passed; at least 30 days of search terms reviewed.",
    ],
  },
  {
    days: "Days 31–60",
    title: "Launch controlled tests",
    items: [
      "Route approved Search themes to their relevant landing-page variants.",
      "Retain Maximize Conversions while the clean baseline forms.",
      "Launch one consolidated Meta website-lead prospecting ad set under the approved relative budget scenario.",
      "Use at least three materially distinct formats and five approved creatives.",
      `Optimise initially to valid low-friction offer requests; every placement that names the Workplace Ergonomics Risk Snapshot must state: ${snapshotCaveat}.`,
      "Validate click-ID, UTM, CRM-stage, Pixel/CAPI and deduplication flows.",
      "Build Consulting-only retargeting audiences without activating a separately underfunded ad set; review search terms weekly.",
      "Committed leading indicators: approved destination coverage; minimum Meta delivery floor; delivery, CTR, form-start and offer-request baselines; identifiers retained; no known cross-business bleed left unclassified.",
    ],
  },
  {
    days: "Days 61–90",
    title: "Diagnose and decide",
    items: [
      "Assign each Search cluster a status: retain, repair, insufficient data or candidate test.",
      "Compare Meta concepts and formats without fragmenting the budget.",
      "Replace provisional acquisition assumptions with observed low-friction offer-request data.",
      "Reconcile raw leads to CRM-qualified leads and proposals.",
      "Complete the commercial target-CPA worksheet or mark it not assessable.",
      "Issue written PMax fund-to-floor or park and separate paid-remarketing rebuild or park decisions.",
      "Propose any budget increase in increments no greater than 20%, followed by 3–5 days of observation and conversion-lag review.",
    ],
  },
] as const;

const gates = [
  ["Claims", "No guaranteed injury prevention, assured WHS compliance, quantified claims reduction or guaranteed financial outcome. Use controllable outputs only."],
  ["Snapshot description", `Every placement must state: ${snapshotCaveat}.`],
  ["OAIC APP 3", "No injury, symptom, diagnosis, treatment, claim or other health fields in advertising forms."],
  ["Meta personal attributes", "Use workplace- and role-level language. Meta must not imply a viewer or their staff has a health condition."],
  ["Consent", "Required enquiry consent must be separate from optional, unchecked marketing consent."],
  ["Privacy", "Consent Mode v2, default denied, with no client- or server-side analytics/advertising transmission before consent. CMP, pixel/CAPI field mapping, call tracking and CRM uploads require Australian privacy/legal approval."],
  ["Sensitive data", "No free-text enquiry content, medical data, call content or Physiotherapy data may be sent to advertising platforms—even hashed."],
  ["Proof", "Reviews, logos, awards, a strong public review rating, a global FMCG client reference and ASX-listed enterprise-client claims remain client sign-off required wherever proposed."],
  ["Isolation", "Campaign-level controls and Consulting-specific measurement scope must prevent ErgoEquip, Biosymm and Physiotherapy contamination."],
  ["PMax", "Clean goals, offline loop, dedicated landing page, verified assets, URL controls, exclusions and standalone viable funding; otherwise it remains parked."],
  ["Remarketing", "Privacy approval, sufficient isolated audiences, approved creative, frequency controls and separate viable funding; otherwise it remains parked."],
] as const;

const openDecisions = [
  "Is demand-generation funding incremental, reallocated from Search, or deferred?",
  `Is the low-friction Workplace Ergonomics Risk Snapshot — ${snapshotCaveat} — approved as the launch-default offer and dominant CTA?`,
  `What fulfilment capacity, response time, owner and approved service geography apply to the Workplace Ergonomics Risk Snapshot — ${snapshotCaveat}?`,
  "What does ErgoWorks issue after training: an accredited certificate, a statement of attainment, or participant attendance or training-completion records?",
  "Are care-sector, online and refresher services supported, and in what approved onsite or remote geography?",
  "What average contract value, delivery margin and close rate define allowable CAC and target CPQL?",
  "Which CRM will hold click IDs, consent and lead-stage outcomes?",
  "How far should Consulting and Physiotherapy be separated across Ads, GA4, GTM and Meta?",
  "Should PMax and paid remarketing be funded properly or remain parked?",
  "Which proof assets are substantiated and approved in writing?",
  "Who owns landing-page development and where will it be hosted?",
  "What future route should host the private shareable campaign page?",
] as const;

const notAssessed = [
  ["Search queries and competitor/generic-group terms", "Last 90 days plus trailing 12 months; the last-30-day pull is resolved.", "Longer-history query-quality diagnosis and evidence-based controls."],
  ["Keyword and negative history", "Trailing-12-month keyword performance plus audit of the resolved 493-negative inventory.", "Structure, routing, overblocking and overlap decisions."],
  ["RSAs, assets and Quality Score components", "Current and recent creative history; expected CTR, ad relevance and landing-page experience.", "Relevance, eligibility and landing-page diagnosis."],
  ["Geography, devices and campaign settings", "Geo/device performance plus location targets, presence, networks and complete settings.", "Leakage, presence, device and network decisions."],
  ["Brand post-repair evidence", "Query demand, impression share, lost share and auction insights after in-place consolidation.", "Retain repaired ad group versus campaign breakout."],
  ["Conversion configuration", "All enabled actions and campaign-specific goal mappings.", "Clean Consulting bidding objective."],
  ["Call outcomes", "Duration plus business-purpose dispositions.", "Qualified-call validation."],
  ["CRM pipeline", "Qualified, proposal, won, revenue and contribution-margin stages joined to click IDs.", "Target CPQL, CAC and value-bidding readiness."],
  ["PMax history and controls", "Assets, search categories, themes, URLs, exclusions, goals and historical outcomes.", "Fund-to-floor versus park decision."],
  ["Remarketing configuration", "Audience sources, size, duration, exclusions, frequency and history.", "Rebuild versus park decision."],
  ["Privacy and consent", "CMP, collection notices, vendor flows, retention and legal approval.", "Pre-launch approval."],
  ["Proof permissions", "Substantiation and written approval for reviews, logos, awards, global FMCG references and ASX-listed enterprise-client claims.", "Paid-media proof usage."],
  ["Commercial economics", "Average contract value, delivery margin, close rates and acceptable payback.", "Real target CPA and conditional kill/scale thresholds."],
  ["Delivery capacity", `Volume, response time and follow-up ownership for the Workplace Ergonomics Risk Snapshot — ${snapshotCaveat}.`, "Safe pacing and lead handling."],
] as const;

function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <div className={styles.sectionHeading}>
      <p>{label}</p>
      <h2>{title}</h2>
      {copy ? <span>{copy}</span> : null}
    </div>
  );
}

export default function StrategyPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private strategy</div>
        </nav>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Directional strategy · 90-day plan</p>
            <h1>Turn established demand into a measurable growth system.</h1>
            <p className={styles.heroCopy}>
              Protect what already works in Search. Add a disciplined demand-generation layer. Give prospects a clearer first step—and measure the qualified pipeline that follows.
            </p>
          </div>
          <aside className={styles.summary}>
            <p>Executive summary</p>
            <h2>This is an optimisation and expansion programme—not a greenfield launch.</h2>
            <ul>
              <li><Check size={17} /> Improve the existing Search engine</li>
              <li><Check size={17} /> Add focused Meta prospecting</li>
              <li><Check size={17} /> Launch a dedicated conversion journey</li>
              <li><Check size={17} /> Optimise toward qualified pipeline</li>
            </ul>
          </aside>
        </div>
        <a className={styles.scrollCue} href="#idea"><ArrowDown size={17} /> The recommendation</a>
      </header>

      <section className={styles.idea} id="idea">
        <SectionHeading label="The big idea" title="See the risk. Act on the priorities. Prove implementation." copy="A practical pathway replaces the isolated assessment: capture demand, create demand, convert it deliberately, then feed real outcomes back into the system." />
        <div className={styles.strategyFlow}>
          {strategy.map(([Icon, title, copy], index) => (
            <article key={title}>
              <div className={styles.strategyIcon}><Icon size={21} /></div>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              {index < strategy.length - 1 ? <ArrowRight className={styles.flowArrow} size={18} /> : null}
            </article>
          ))}
        </div>
        <div className={styles.docSection}>
          <div className={styles.prose}>
            <p>ErgoWorks should sell a practical implementation path rather than an isolated assessment. Search remains the proven demand-capture engine; Meta adds the top-of-funnel reach the current programme lacks; the landing page connects both to a coherent commercial journey.</p>
            <ul>
              <li>Reach WHS/HSE, HR/People &amp; Culture, Facilities and Operations buyers before they search.</li>
              <li>Introduce a defined, low-commitment first step for cold prospects.</li>
              <li>Evaluate PMax and remarketing only when properly funded, isolated and measurable.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.stateSection} id="state">
        <div className={styles.stateIntro}>
          <SectionHeading label="Current-state snapshot" title="A proven engine with gated expansion pockets." copy="The verified baseline is useful for direction, not permission to make unconditional pause, restructure or scale decisions." />
          <p>Account identifiers, hostnames and exact dollar figures are intentionally abstracted. The qualitative structure, ratios and evidence limits remain visible so the next decisions are grounded without publishing private account detail.</p>
        </div>
        <div>
          <div className={styles.stateList}>
            {accountSignals.map(([title, copy]) => <div key={title}><strong>{title}</strong><span>{copy}</span></div>)}
          </div>
          <div className={styles.tableScroll}>
            <table>
              <caption>Search concentration and structure</caption>
              <thead><tr><th>Ad group</th><th>Relative signal</th><th>Interpretation</th></tr></thead>
              <tbody>
                {searchGroups.map(([group, signal, interpretation]) => <tr key={group}><td>{group}</td><td>{signal}</td><td>{interpretation}</td></tr>)}
              </tbody>
            </table>
          </div>
          <div className={styles.calloutRow}><CircleAlert size={20} /><p>Scope limitation: available evidence includes recent search terms, the keyword inventory with match types and statuses, headline Quality Scores, the existing negative inventory and a partial geography signal. Longer history, creative, settings, Quality Score components and geo/device reports remain required. Consulting goals, tags, audiences and campaign controls must stay isolated from Physiotherapy.</p></div>
        </div>
      </section>

      <section className={styles.offerSection} id="offer">
        <SectionHeading label="Offer & positioning" title="One low-friction entry. A clear path to implementation." copy="The offer system moves the conversation from one defined question to a repeatable workplace programme—without overstating outcomes." />
        <div className={styles.prose}>
          <h3>Core position</h3>
          <p>Position ErgoWorks as the workplace-ergonomics implementation partner that helps organisations establish visibility over priorities, translate findings into practical actions and responsibilities, and create repeatable implementation and reporting evidence.</p>
          <p>The promise is controllable outputs—not guaranteed injury prevention, assured WHS compliance, claims reductions or medical outcomes.</p>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Canonical offer registry — client approval required before launch</caption>
            <thead><tr><th>Stage</th><th>Offer</th><th>Eligibility / best fit</th><th>Deliverable and pricing status</th><th>Required caveat</th></tr></thead>
            <tbody>
              {offers.map(([stage, title, eligibility, deliverable, caveat]) => <tr key={title}><td>{stage}</td><td><strong>{title}</strong>{title === "Free 15-minute Workplace Ergonomics Risk Snapshot" ? <><br /><small>{snapshotCaveat}.</small></> : null}</td><td>{eligibility}</td><td>{deliverable}</td><td>{caveat}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.calloutRow}><ShieldCheck size={20} /><p><strong>Snapshot scope:</strong> The Workplace Ergonomics Risk Snapshot is {snapshotCaveat}. Offer names, eligibility, fulfilment promise and the ladder remain client sign-off required.</p></div>
      </section>

      <section className={styles.channelsSection} id="channels">
        <SectionHeading label="Channel & budget at a glance" title="A 70 / 20 / 10 operating model—with floors before percentages." copy="The split is a directional steady-state model, not an instruction to force underfunded tests. Proven capture stays protected while each new channel earns its role." />
        <div className={styles.allocation} aria-label="Directional channel allocation: 70 percent Search, 20 percent demand generation, 10 percent experiments">
          <div className={styles.searchBar}><strong>70%</strong><span>Search · capture</span></div>
          <div className={styles.metaBar}><strong>20%</strong><span>Meta · pilot to create</span></div>
          <div className={styles.testBar}><strong>10%</strong><span>Test</span></div>
        </div>
        <div className={styles.channelNotes}>
          <article><h3>Search protects intent</h3><p>Clean goals, inspect query quality, restore Brand coverage and route each commercial theme to a relevant destination.</p></article>
          <article><h3>Meta pilots demand generation</h3><p>Run one consolidated prospecting audience with enough delivery to learn. Do not fragment a modest test across multiple ad sets.</p></article>
          <article><h3>Experiments earn activation</h3><p>PMax and paid remarketing stay parked until clean measurement, privacy approval, isolated audiences and viable independent funding are in place.</p></article>
        </div>
        <div className={styles.docSection}>
          <div className={styles.tableScroll}>
            <table>
              <caption>Relative budget scenarios · 30-day planning period</caption>
              <thead><tr><th>Scenario</th><th>Search</th><th>Meta</th><th>PMax</th><th>Remarketing</th><th>Total</th><th>Recommendation</th></tr></thead>
              <tbody>
                {budgetScenarios.map(([scenario, search, meta, pmax, remarketing, total, recommendation]) => <tr key={scenario}><td><strong>{scenario}</strong></td><td>{search}</td><td>{meta}</td><td>{pmax}</td><td>{remarketing}</td><td>{total}</td><td>{recommendation}</td></tr>)}
              </tbody>
            </table>
          </div>
          {/* redacted: exact scenario values in private pack */}
          <div className={styles.tableScroll}>
            <table>
              <caption>Platform floors and implications</caption>
              <thead><tr><th>Channel</th><th>Planning floor</th><th>Implication</th></tr></thead>
              <tbody>{platformFloors.map(([channel, floor, implication]) => <tr key={channel}><td>{channel}</td><td>{floor}</td><td>{implication}</td></tr>)}</tbody>
            </table>
          </div>
          <div className={styles.prose}>
            <p>The provisional Meta acquisition assumption is not observed performance or a commercial target; replace it with observed low-friction offer-request data. PMax should be funded to its standalone floor or parked. At the current run-rate, that floor would consume approximately 31.9–50.0% of the monthly envelope. Paid remarketing should not share PMax’s testing allocation.</p>
          </div>
        </div>
      </section>

      <section className={styles.lpSection} id="lp">
        <div className={styles.lpCopy}>
          <SectionHeading label="Landing-page concept" title="A message-matched route from workplace concern to practical next step." />
          <p>Build one dedicated, navigation-reduced landing-page system on an approved ErgoWorks Consulting destination, with baseline variants led by Manual Handling Training, Workstation and Ergonomic Assessment, and Hybrid or Home-office programmes.</p>
          <ul>
            <li><Check size={17} /> One dominant launch action on every baseline variant: request the free 15-minute Workplace Ergonomics Risk Snapshot — {snapshotCaveat}.</li>
            <li><Check size={17} /> Service-plan-primary variants only after the baseline, as tests.</li>
            <li><Check size={17} /> A short two-step form: business contact details followed by non-sensitive qualification fields such as team-size band, service need, location and timeframe.</li>
            <li><Check size={17} /> No injury history, symptoms, diagnoses, treatment, claim details or other health information.</li>
            <li><Check size={17} /> Required enquiry consent separated from optional, unchecked marketing consent; Consent Mode v2, default denied, no client- or server-side transmission before consent.</li>
            <li><Check size={17} /> Clear expectations, source/click-ID capture, mobile-first performance and a purposeful thank-you journey.</li>
            <li><Check size={17} /> Proof only after substantiation and written client approval.</li>
          </ul>
        </div>
        <div className={styles.lpMock} aria-label="Conceptual landing-page structure">
          <div className={styles.browserTop}><i /><i /><i /><span>Approved campaign destination</span></div>
          <div className={styles.mockBody}>
            <div className={styles.mockBrand}>ErgoWorks <span>Consulting</span></div>
            <div className={styles.mockTag}>Workplace ergonomics, made actionable.</div>
            <h3>Get clarity on one workplace ergonomics priority.</h3>
            <p>A short conversation. A written three-point summary. A practical next step.</p>
            <div className={styles.mockButton}>Request the Snapshot <ArrowRight size={16} /></div>
            <small>{snapshotCaveat}.</small>
          </div>
        </div>
      </section>

      <section className={styles.measurementSection} id="measurement">
        <SectionHeading label="Measurement approach" title="Move the optimisation signal closer to revenue." copy="Upgrade the existing GA4-linked foundation into a clean, privacy-controlled feedback loop. The primary commercial lens becomes qualified pipeline—not raw platform conversions." />
        <div className={styles.pipeline}>
          {["Workplace Ergonomics Risk Snapshot request", "Enquiry", "Qualified lead", "Won"].map((item, index) => <div key={item}><span>{index + 1}</span><strong>{item}</strong>{index === 0 ? <small>{snapshotCaveat}.</small> : null}</div>)}
        </div>
        <div className={styles.measureGrid}>
          <article><Crosshair size={22} /><h3>Clean the objective</h3><p>Keep genuine Consulting enquiries and valid B2B offer requests primary initially. Move newsletters, email clicks and other soft actions out of bidding goals.</p></article>
          <article><Layers3 size={22} /><h3>Close the loop</h3><p>Preserve auto-tagging and the GA4 link; use a Conversion Linker, capture GCLID, GBRAID, WBRAID, FBCLID and UTMs in the CRM, and return qualified-lead, proposal and closed-won outcomes through Google Data Manager and Meta CAPI.</p></article>
          <article><ShieldCheck size={22} /><h3>Control the data</h3><p>Apply data minimisation, strict separation from health-adjacent activity and Consent Mode v2, default denied, no client- or server-side transmission before consent.</p></article>
        </div>
        <div className={styles.docSection}>
          <div className={styles.tableScroll}>
            <table>
              <caption>Conversion hierarchy</caption>
              <thead><tr><th>Stage</th><th>Treatment</th></tr></thead>
              <tbody>{conversionHierarchy.map(([stage, treatment]) => <tr key={stage}><td>{stage}</td><td>{treatment}</td></tr>)}</tbody>
            </table>
          </div>
          <div className={styles.prose}>
            <h3>Operating commitments</h3>
            <ul>
              <li>Document and test 100% of approved Primary actions; exclude Physiotherapy actions from Consulting goals.</li>
              <li>Capture CRM lead IDs and event IDs on valid lead records; reconcile platform data to CRM weekly.</li>
              <li>Implement server-side GTM on an approved first-party domain and keep Consulting separate through tightly scoped GA4, Meta, GTM, audience and CRM mappings.</li>
              <li>Target offline-event latency below 24 hours where operationally possible; treat 24–72 hours as a warning range.</li>
              <li>Use matching browser/server event_id values for deduplication, Data-Driven Attribution where eligible, and at least six applicable Meta match parameters on eligible events.</li>
              <li>Maintain Meta lead-event EMQ of at least 8.0, browser/server deduplication of at least 90%, and a server/client hit ratio between 80% and 120%.</li>
              <li>Detect zero sensitive-data events or parameters in testing.</li>
            </ul>
            <p>The primary commercial KPI is cost per qualified lead (CPQL). Raw CPL remains an entry-stage diagnostic. CAC and target CPQL cannot be set until contract value, contribution margin and stage-conversion rates are verified.</p>
            <h3>Methodology decision</h3>
            <p>Retain Maximize Conversions while conversion pollution is repaired and the clean baseline forms; do not automatically switch to Maximize Clicks during repair. Reassess against the evidence:</p>
          </div>
          <div className={styles.tableScroll}>
            <table>
              <caption>Clean post-remediation bidding decisions</caption>
              <thead><tr><th>Condition</th><th>Decision</th></tr></thead>
              <tbody>{biddingDecisions.map(([condition, decision]) => <tr key={condition}><td>{condition}</td><td>{decision}</td></tr>)}</tbody>
            </table>
          </div>
          <div className={styles.calloutRow}><ShieldCheck size={20} /><p>Consent Mode v2, default denied, with no client- or server-side analytics/advertising transmission before consent, must be implemented through an approved CMP. Do not use ECPC.</p></div>
        </div>
      </section>

      <section className={styles.roadmapSection} id="roadmap">
        <SectionHeading label="30 / 60 / 90 roadmap" title="Foundation first. Controlled launch second. Scale decisions last." />
        <div className={styles.roadmap}>
          {roadmap.map((phase, index) => (
            <article key={phase.days}>
              <div className={styles.phaseHead}><span>{phase.days}</span><b aria-hidden="true">0{index + 1}</b></div>
              <h3>{phase.title}</h3>
              <ul>{phase.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className={styles.docSection}>
          <div className={styles.prose}>
            <p>No segment receives an unconditional kill or scale label during the first 90 days. The 3× Kill Rule requires an approved clean target CPA, and any 12-month lead, CPA or revenue trajectory remains an assumption-labelled scenario—not a commitment.</p>
          </div>
        </div>
      </section>

      <section className={styles.gatesSection} id="risks">
        <div className={styles.gatesIntro}>
          <CircleAlert size={25} />
          <SectionHeading label="Risks & compliance gates" title="These are launch gates, not tidy-up tasks." copy="If a gate is not satisfied, the affected campaign, page, form or measurement layer stays off." />
        </div>
        <div className={styles.gatesList}>
          {gates.map(([title, copy]) => <article key={title}><span>{title}</span><p>{copy}</p></article>)}
        </div>
      </section>

      <section className={styles.questionsSection} id="decisions">
        <div className={styles.questionsIntro}>
          <SectionHeading label="Open decisions" title="What we need to resolve before implementation." copy="This is the short list. The Decisions page carries the complete question set and GO/NO-GO detail." />
          <p className={styles.planningOnly}>This plan authorises planning only. It does not authorise changes to live advertising, website, CRM or tracking systems.</p>
        </div>
        <ol className={styles.questions}>
          {openDecisions.map((question, index) => <li key={question}><span>{String(index + 1).padStart(2, "0")}</span><p>{question}</p></li>)}
        </ol>
      </section>

      <section className={styles.docSection} id="not-assessed">
        <SectionHeading label="Not assessed / data required" title="What must be resolved before implementation." copy="These evidence gaps keep the plan directional and define the next diagnostic pulls." />
        <div className={styles.tableScroll}>
          <table>
            <caption>Data and decisions required</caption>
            <thead><tr><th>Area</th><th>Data or decision required</th><th>What it enables</th></tr></thead>
            <tbody>{notAssessed.map(([area, required, enables]) => <tr key={area}><td>{area}</td><td>{required}</td><td>{enables}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <footer className={styles.footer}><div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div><p>Confidential · For client review only</p></footer>
    </main>
  );
}
