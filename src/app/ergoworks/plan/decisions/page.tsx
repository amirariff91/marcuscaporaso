import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleAlert,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import styles from "../plan.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Decisions",
  description: "Private decision register for the ErgoWorks Consulting campaign review pack.",
  robots: { index: false, follow: false },
};

type Priority = "Critical" | "High" | "Medium";

type EvidenceRef = {
  id: string;
  label: string;
};

type Gate = {
  id: string;
  priority: Priority;
  owner: string;
  status: string;
  question: string;
  blocks: string;
  evidence?: readonly EvidenceRef[];
};

type Bundle = {
  number: string;
  title: string;
  question: string;
  owners: readonly string[];
  unlocks: string;
  gateIds: readonly string[];
};

const gates: Record<string, Gate> = {
  A1: {
    id: "A1",
    priority: "Critical",
    owner: "Oz and Ruth — senior ergonomics leads",
    status: "Open",
    question:
      "Can each of the six services pass a delivery-capacity and readiness matrix covering owner, scope, geography, weekly capacity, response SLA, quality control, delivery cost, dependencies and escalation? A service that fails stays out of acquisition messaging.",
    blocks: "Which services we can honestly promise; paid acquisition must not point at a service that has not passed the readiness matrix.",
  },
  A2: {
    id: "A2",
    priority: "High",
    owner: "Oz and Ruth — senior ergonomics leads",
    status: "Open",
    question:
      "Is the competitor field complete, and do we genuinely out-deliver the competitors we differentiate against? Confirm the shortlist and any panel or incumbent competitors that could displace us.",
    blocks: "The accuracy of the competitor shortlist and any differentiation claim.",
  },
  A3: {
    id: "A3",
    priority: "High",
    owner: "Oz and Ruth — senior ergonomics leads",
    status: "Open",
    question:
      "What do we issue after training: an accredited certificate, a statement of attainment, an attendance record or another approved record?",
    blocks: "Manual-handling positioning, training copy and publication.",
  },
  A4: {
    id: "A4",
    priority: "High",
    owner: "Oz and Ruth — senior ergonomics leads",
    status: "Open",
    question:
      "Which services are actually delivered where and how, including floor-walk staffing, home-visit geography, office-move capability and onboarding or support? Are care-sector, online and refresher services supported?",
    blocks: "The first-touch model, geography, care/online/refresher modules and targeting.",
  },
  A5: {
    id: "A5",
    priority: "Medium",
    owner: "Oz and Ruth — senior ergonomics leads",
    status: "Open",
    question:
      "What competitor quotes have you observed for assessment, sweep, training and retainer work? These are needed to sanity-check the currently directional pricing bands.",
    blocks: "Pricing bands and the commercial comparison.",
  },
  B1: {
    id: "B1",
    priority: "Critical",
    owner: "Marcus",
    status: "Open",
    question:
      "I need the unit economics per service: average contract value, close rate, gross margin, delivery cost, sales-cycle length and acceptable payback. The observed 30-day media cost is A$274 per strict recorded lead event, or A$222 under the looser event definition; neither is acquisition cost; both are raw-lead sensitivities, not qualified-lead performance or a target CPA.",
    blocks: "The investment case, scaling, affordable qualified-lead cost and bid strategy.",
    evidence: [
      { id: "6a.6", label: "recent spend" },
      { id: "6a.7", label: "recorded lead events" },
      { id: "6a.8", label: "media cost per recorded lead" },
    ],
  },
  B2: {
    id: "B2",
    priority: "Critical",
    owner: "Marcus",
    status: "Open",
    question:
      "I need the attach-rate backfill by organisation: originating problem, first service, employee population, subsequent services, revenue, margin, sales cycle and retention. I will set the minimum expansion rate and account value that justify acquisition. Aggregate equipment-order evidence shows 209 orders, 133 raw organisation strings and 19 repeat organisations, accounting for 53 of 167 company-attributed orders; it does not show that a consulting engagement caused any order.",
    blocks: "Whether the ecosystem thesis is real and whether cross-population acquisition is justified.",
    evidence: [
      { id: "6c.1", label: "order volume" },
      { id: "6c.3", label: "raw organisation strings" },
      { id: "6c.4", label: "aggregate repeat-order counts" },
      { id: "6c.8", label: "equipment-order scope caveat" },
    ],
  },
  B3: {
    id: "B3",
    priority: "Critical",
    owner: "Marcus",
    status: "Open",
    question:
      "I need to know which lead-management system is in use and whether it can store click attribution, consent, an organisation account, service stages and values.",
    blocks: "The measurement spine, offline value feedback and qualified-pipeline reporting.",
  },
  B11: {
    id: "B11",
    priority: "Critical",
    owner: "Marcus",
    status: "Open — partial evidence",
    question:
      "I need to know where equipment gross margin lives. Current evidence shows 531 published catalogue entries with none carrying a populated non-zero cost-of-goods value, so no equipment contribution or lifetime-value figure can yet be produced.",
    blocks: "The margin claim, equipment contribution and any lifetime-value-to-acquisition-cost work.",
    evidence: [{ id: "6c.7", label: "gross-margin evidence" }],
  },
  B12: {
    id: "B12",
    priority: "Critical",
    owner: "Marcus — instrumentation; client input on phone routing",
    status: "Open",
    question:
      "The account records 13 connected-call conversions, but the platform view shows no call that rang out. I need the unconnected-call count and the current phone-routing path from the client; this is the cheapest unknown with the highest option value before I interpret the call funnel.",
    blocks: "The real call-funnel baseline, missed-call recovery and any trustworthy assessment of call-led demand.",
    evidence: [{ id: "6a.7", label: "recorded call conversions" }],
  },
  B13: {
    id: "B13",
    priority: "High",
    owner: "Marcus",
    status: "Open",
    question:
      "Observed baseline check: the latest 30-day spend is A$4,652.53, versus A$42,285.61 over the trailing 12 months (about A$3,524 per month), so the latest 30-day window is about 32% above the trailing average. Is that window representative enough for me to anchor plan ratios to it? These figures are observations, not a target, acquisition cost or proven result.",
    blocks: "Whether the plan's ratios, pacing comparisons and budget interpretation rest on a representative baseline.",
    evidence: [
      { id: "6a.3", label: "trailing annual spend" },
      { id: "6a.6", label: "last-30-day account activity" },
    ],
  },
  B14: {
    id: "B14",
    priority: "High",
    owner: "Marcus",
    status: "Open",
    question:
      "Observed click-to-session gap: 385 ad clicks in 30 days annualise to about 1,155 over 90 days, versus 830 paid-search sessions in first-party analytics — sessions are roughly 28% below clicks. I need to assess whether this represents uncounted leads, attribution or session loss, or a tracking defect; it is not itself a proven result.",
    blocks: "The click-to-session reconciliation, lead-capture completeness and any trustworthy interpretation of paid-search ratios.",
    evidence: [
      { id: "6g.8", label: "click-to-session comparison" },
      { id: "6a.6", label: "last-30-day account activity" },
    ],
  },
  B4: {
    id: "B4",
    priority: "High",
    owner: "Marcus",
    status: "Open",
    question:
      "Which proof assets are substantiated in writing: client names, logos, named enterprise references and outcomes? No unverifiable outcome claim ships.",
    blocks: "Proof modules, landing-page sections, creative and publication.",
  },
  B5: {
    id: "B5",
    priority: "High",
    owner: "Marcus",
    status: "Open",
    question:
      "What exact fulfilment promise can I make for the free 15-minute Workplace Ergonomics Risk Snapshot (proposed, pending the GO/NO-GO at C1): owner, weekly capacity, format, turnaround and response SLA? Copy must promise only what delivery can sustain, and every placement carries the caveat adjacent to the call to action: “Preliminary guidance only—not a compliance assessment, compliance certification, medical assessment or diagnosis.”",
    blocks: "Snapshot wording, availability, pacing and the follow-up workflow.",
  },
  B6: {
    id: "B6",
    priority: "High",
    owner: "Marcus",
    status: "Open",
    question:
      "I need the qualified-corporate-lead rule: organisation, role, workforce or site-size band, problem, location and timeframe. A company email alone is insufficient; corporate buyers must not be rejected because they use a personal email.",
    blocks: "The lead definition, qualification feedback and optimisation target.",
  },
  B7: {
    id: "B7",
    priority: "High",
    owner: "Marcus",
    status: "Open",
    question:
      "I need a vendor-neutral equipment policy. Is supply optional, is any relationship disclosed, is advice documented independently of the product and are client panels accommodated?",
    blocks: "The trust guardrail for equipment advice and cross-sell.",
  },
  B8: {
    id: "B8",
    priority: "High",
    owner: "Marcus",
    status: "Open",
    question:
      "I need to confirm whether the consulting and equipment businesses share a legal entity, customer records or referral fees, and whether an organisation-level join is permissible. Feasibility is not the blocker: 167 of 209 orders carry a billing-company name, while the same organisation appears under variant spellings, so any join must be manually validated rather than automatic.",
    blocks: "Whether organisation-level records may be joined and used in a cross-sell ledger.",
    evidence: [
      { id: "6c.2", label: "organisation attribution" },
      { id: "6c.6", label: "variant-spelling evidence" },
    ],
  },
  B9: {
    id: "B9",
    priority: "High",
    owner: "Marcus",
    status: "Open",
    question:
      "I will not put a competitor paid-ad claim in a client-facing deliverable until the footprint has been verified.",
    blocks: "Client-facing competitor advertising claims.",
  },
  B10: {
    id: "B10",
    priority: "Medium",
    owner: "Marcus",
    status: "Open",
    question:
      "I need the landing-page developer, delivery window, hosting decision and private route for the shareable page.",
    blocks: "The landing-page build schedule, route, hosting, QA and destination mapping.",
  },
  C1: {
    id: "C1",
    priority: "Critical",
    owner: "Client (via Greg)",
    status: "Open",
    question:
      "GO/NO-GO on the offer and routing: approve the free 15-minute Workplace Ergonomics Risk Snapshot as the launch offer, the corporate-gated two-flow and the route for individuals with no lead event. Every placement must carry this caveat adjacent to the call to action: “Preliminary guidance only—not a compliance assessment, compliance certification, medical assessment or diagnosis.”",
    blocks: "The landing-page build, form flow, creative and any launch publication.",
  },
  C2: {
    id: "C2",
    priority: "High",
    owner: "Client (via Greg)",
    status: "Open",
    question:
      "Should paid-social funding be incremental or reallocated, and is access to the correct advertising account and domain-verification controls available? The 20% test cannot proceed without that access decision.",
    blocks: "The paid-social test and its 20% allocation.",
    evidence: [{ id: "6e.1", label: "accessible-account check" }],
  },
  C3: {
    id: "C3",
    priority: "High",
    owner: "Client (via Greg)",
    status: "Open",
    question:
      "What is the buying-centre and procurement reality for target accounts: who owns assessment, hybrid work, moves and furniture, and what panel or incumbent status applies? Repeat purchasing does not evidence that one buyer or one buying centre was involved.",
    blocks: "The cross-sell playbook, target-account maps and service routing.",
  },
  C4: {
    id: "C4",
    priority: "High",
    owner: "Client (via Greg)",
    status: "Open",
    question:
      "What service-geography wording is approved for the Sydney-first launch and for everywhere else? The current public page names Sydney and Melbourne only, so any broader page or ad claim needs an explicit decision.",
    blocks: "Geography targeting, exclusions, landing-page copy, the Canberra treatment and lead routing.",
    evidence: [{ id: "6d.6", label: "current geography commitment" }],
  },
  C5: {
    id: "C5",
    priority: "High",
    owner: "Client (via Greg)",
    status: "Open",
    question:
      "Will the client sign off Australian privacy boundaries before any organisation-level audience or cross-brand data use? Only organisation-level business signals may be recirculated; employee health details must stay out.",
    blocks: "Organisation-level audience recirculation, cross-brand data use and measurement approval.",
  },
  C8: {
    id: "C8",
    priority: "High",
    owner: "Client (via Greg)",
    status: "Open",
    question:
      "Who owns and administers the local business profile, including claiming, verifying, correcting and maintaining it? It is currently the strongest top-five asset on the beachhead term, but no owner is named.",
    blocks: "The organic beachhead and its ownership and maintenance plan.",
    evidence: [
      { id: "6b.1", label: "local-profile search evidence" },
      { id: "6b.2", label: "local-profile attribution caveat" },
    ],
  },
  C9: {
    id: "C9",
    priority: "High",
    owner: "Client (via Greg)",
    status: "Open",
    question:
      "What maximum total media envelope, and what maximum Meta learning loss, is approved? The account spent A$42,286 over the trailing year and currently carries an approximately A$155 daily budget. Neither figure establishes acceptable future spend, and A$700 and A$930 per month are only 20% arithmetic illustrations \u2014 a test-loss cap is a separate decision from a target cost per lead.",
    blocks: "The 70/20/10 allocation and all activation pacing.",
    evidence: [
      { id: "6a.2", label: "current daily budget" },
      { id: "6a.3", label: "trailing annual spend" },
    ],
  },
  C10: {
    id: "C10",
    priority: "High",
    owner: "Client (via Greg)",
    status: "Open",
    question:
      "Keep or drop Canberra/Fyshwick? It is the clearest converting geo-specific signal in the current evidence, while the public page does not mention Canberra.",
    blocks: "Geo targeting and the Canberra decision.",
    evidence: [
      { id: "6a.11", label: "Canberra/Fyshwick conversion evidence" },
      { id: "6d.6", label: "current geography commitment" },
    ],
  },
  C6b: {
    id: "C6b",
    priority: "High",
    owner: "Client (via Greg) and Marcus",
    status: "Open — verification required",
    question:
      "Which tracking-stack facts must be confirmed before measurement work starts: the tag container and its administrator, removal of legacy analytics, the presence of a consent-management platform in the browser, and the analytics and advertising tags that it governs?",
    blocks: "All measurement work until the tagging, analytics and consent sequence are verified.",
    evidence: [
      { id: "6d.1", label: "tag-container evidence" },
      { id: "6d.2", label: "legacy-analytics evidence" },
      { id: "6d.5", label: "consent-platform evidence" },
    ],
  },
  C6: {
    id: "C6",
    priority: "Medium",
    owner: "Client (via Greg)",
    status: "Open",
    question:
      "What is the office-moves scope: the ergonomics workstream for workplace relocation, with what blueprint, liability, pricing and partner model? No generic-relocation acquisition spend should proceed until this is validated.",
    blocks: "Whether office-moves enters any plan or acquisition message.",
  },
  C7: {
    id: "C7",
    priority: "Medium",
    owner: "Client (via Greg)",
    status: "Open",
    question:
      "What level of separation is approved between Consulting and Physiotherapy in the existing advertising and measurement accounts? The current account mixes the two, so isolation is an intended state rather than the present state.",
    blocks: "Conversion cleanup, audience creation, reporting and safe separation.",
    evidence: [
      { id: "6a.9", label: "conversion-action state" },
      { id: "6a.12", label: "mixed-account evidence" },
    ],
  },
  C11: {
    id: "C11",
    priority: "Medium",
    owner: "Client (via Greg)",
    status: "Open",
    question:
      "Who approves the six messaging pillars? They are proposed copy, not approved copy, and four describe services that must first pass the A1 readiness matrix.",
    blocks: "Messaging publication after delivery readiness is proven.",
  },
  C12: {
    id: "C12",
    priority: "Critical",
    owner: "Client (via Greg)",
    status: "Open",
    question:
      "Standing one-line approval ask: may I pause the broad “+manual +handling +certificate” keyword and narrow the campaign-scoped goal set to the approved consulting lead actions? It has spent A$846.56 across 125 clicks for 2 reported conversions in 30 days — 18% of campaign spend, about A$28/day or roughly A$197/week. Every week it stays open carries that observed spend rate. Both changes are reversible and separate from the broader budget-approval decision.",
    blocks: "The ongoing observed spend on one quarantine candidate and any further bidding towards an unapproved goal set.",
    evidence: [
      { id: "6a.10", label: "broad certificate-intent line" },
      { id: "6a.2", label: "campaign settings" },
      { id: "6a.6", label: "last-30-day account activity" },
    ],
  },
  C13: {
    id: "C13",
    priority: "Critical",
    owner: "Client (via Greg)",
    status: "Open",
    question:
      "The contamination is eligible in both directions: all 16 conversion actions are primary at account level and both campaigns run Maximise Conversions, so the enabled physiotherapy campaign is eligible to optimise towards consulting conversions, not only the reverse. What separation and campaign-scoped goal set does the client approve before either campaign continues to optimise across the other campaign's conversions?",
    blocks: "Safe conversion-goal cleanup, campaign separation and any performance reading from this account.",
    evidence: [
      { id: "6a.9", label: "conversion-action state" },
      { id: "6a.12", label: "mixed-account evidence" },
      { id: "6a.14", label: "goal configuration" },
    ],
  },
  C14: {
    id: "C14",
    priority: "High",
    owner: "Client (via Greg)",
    status: "Open",
    question:
      "What maximum absolute amount is the client willing to lose in a controlled test before it stops or revises the test? A maximum test-loss cap is a separate decision from a target cost per lead, and percentage envelope splits are not a substitute. Neither a test-loss cap nor a target cost per lead currently exists.",
    blocks: "The test authorisation, stop or rollback rule and any spend pacing.",
    evidence: [{ id: "6a.3", label: "trailing annual spend" }],
  },
};

const bundles: readonly Bundle[] = [
  {
    number: "01",
    title: "Is this worth funding?",
    question: "Can the economics and account evidence justify investment and the proposed allocation?",
    owners: ["Marcus", "Client (via Greg)"],
    unlocks: "A defensible budget envelope, an investment go/no-go and the cross-population thesis.",
    gateIds: ["B1", "B2", "B11", "B13", "C3", "C9", "C14"],
  },
  {
    number: "02",
    title: "What exactly launches?",
    question: "What offer, service boundaries, geography and message can be approved for launch?",
    owners: ["Client (via Greg)", "Oz and Ruth — senior ergonomics leads"],
    unlocks: "A decided Snapshot route (approved or rejected at C1), service geography, training and office-move scope, and publishable messaging.",
    gateIds: ["C1", "A3", "A4", "C4", "C10", "C6", "C11"],
  },
  {
    number: "03",
    title: "Can we deliver it?",
    question: "Do delivery capacity, proof, qualification and vendor-neutral operations support the promise?",
    owners: ["Oz and Ruth — senior ergonomics leads", "Marcus"],
    unlocks: "A fulfilable offer, substantiated proof, a qualified-lead definition and a vendor-neutral delivery plan.",
    gateIds: ["A1", "A2", "A5", "B4", "B5", "B6", "B7"],
  },
  {
    number: "04",
    title: "Can we measure it safely?",
    question: "Can the data join, consent, privacy and account separation support safe measurement?",
    owners: ["Marcus", "Client (via Greg)"],
    unlocks: "A privacy-safe, separated measurement plan with a valid organisation-level join.",
    gateIds: ["B3", "B12", "B8", "B14", "C13", "C5", "C6b", "C7"],
  },
  {
    number: "05",
    title: "What can be activated now?",
    question: "Which lower-risk activation prerequisites can we close now?",
    owners: ["Client (via Greg)", "Marcus"],
    unlocks: "The reversible paid-search containment, paid-social test, competitor claims, landing-page route and local-profile work that can be activated without waiting on every other gate.",
    gateIds: ["C12", "C2", "B9", "B10", "C8"],
  },
];

const mustBeTrue = [
  {
    text: "The assessment wedge originates organisational accounts, not isolated employee cases, with credible adjacent needs.",
    links: ["B2"],
  },
  {
    text: "The economics justify acquisition: average contract value, margin, close rate, capacity and payback set the qualified-lead and acquisition thresholds.",
    links: ["B1"],
  },
  {
    text: "Measurement connects origin to downstream value without mixing accounts or health data.",
    links: ["B3", "C5", "C13"],
  },
  {
    text: "The channel base survives qualification: Sydney assessment Search still yields corporate pipeline after manual-handling waste and individuals are removed.",
    links: ["B1", "B6", "B12", "C12"],
  },
  {
    text: "The operating model is real: owners, capacity, buyer and procurement maps, privacy and vendor-neutral equipment.",
    links: ["A1", "C3", "B7", "C5"],
  },
] as const;

const bundleLabelStyle = {
  color: "var(--green)",
  fontSize: ".76rem",
  fontWeight: 700,
  letterSpacing: ".04em",
  textTransform: "uppercase" as const,
};

export default function DecisionsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> Campaign decisions</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private decision register</div>
        </nav>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Routed decision register · Revised plan v2 · 25 July 2026</p>
            <h1>Five decisions. Thirty-four gates.</h1>
            <p className={styles.heroCopy}>
              I have put five questions first. Each one holds the underlying gates,
              with their owner, priority, status, blocking consequence and any cited evidence kept
              visible when the gate is opened.
            </p>
          </div>
          <aside className={styles.summary}>
            <p>Register status</p>
            <h2>All 34 gates are open pending evidence or approval.</h2>
            <ul>
              <li><Check size={17} /> Five sponsor-facing decision bundles</li>
              <li><Check size={17} /> Stable anchors for every gate</li>
              <li><Check size={17} /> Evidence links wherever a gate cites a verified item</li>
              <li><Check size={17} /> Each gate expands in place; nothing is hidden behind a control that can fail</li>
            </ul>
          </aside>
        </div>
        <a className={styles.scrollCue} href="#bundles"><ArrowDown size={17} /> Start with the five decisions</a>
      </header>

      <section className={styles.idea} id="bundles">
        <SectionHeading
          label="Sponsor view"
          title="Five questions carry the whole register."
          copy="The bundle is the decision to make. The linked gate IDs are the evidence and owner questions that must be resolved underneath it; they remain in their original priority order within each owner group."
        />
        <div className={styles.roadmap} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))" }}>
          {bundles.map((bundle) => (
            <article key={bundle.number} className={styles.hubCard}>
              <div className={styles.phaseHead}>
                <span>{bundle.number}</span>
                <b aria-hidden="true">{bundle.gateIds.length}</b>
              </div>
              <h3>{bundle.title}</h3>
              <dl style={{ display: "grid", gap: ".8rem", margin: 0 }}>
                <div>
                  <dt style={bundleLabelStyle}>Question answered</dt>
                  <dd className={styles.hubCardCopy} style={{ margin: ".25rem 0 0" }}>{bundle.question}</dd>
                </div>
                <div>
                  <dt style={bundleLabelStyle}>Owner(s)</dt>
                  <dd className={styles.hubCardCopy} style={{ margin: ".25rem 0 0" }}>{bundle.owners.join(" · ")}</dd>
                </div>
                <div>
                  <dt style={bundleLabelStyle}>Unlocks</dt>
                  <dd className={styles.hubCardCopy} style={{ margin: ".25rem 0 0" }}>{bundle.unlocks}</dd>
                </div>
              </dl>
              <div style={{ marginTop: "1.25rem" }}>
                <p style={{ color: "var(--green)", fontSize: ".76rem", fontWeight: 700, letterSpacing: ".04em", margin: "0 0 .45rem", textTransform: "uppercase" }}>
                  Constituent gates
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem .55rem" }}>
                  {bundle.gateIds.map((gateId) => (
                    <a key={gateId} className={styles.hubCardGo} href={`#gate-${gateId}`} style={{ marginTop: 0 }}>
                      {gateId} <ArrowRight size={13} />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.questionsSection} id="must-be-true">
        <div>
          <SectionHeading
            label="The decision test"
            title="Five things must be true before the plan earns a go."
            copy="These are the cross-cutting conditions the recommendation was stress-tested against. They are not extra gates; each points back to the gates that prove or disprove it."
          />
          <p className={styles.planningOnly}>
            This register authorises planning and client review only. It does not authorise changes to
            live advertising, website, lead-management or measurement systems.
          </p>
        </div>
        <ol className={styles.questions}>
          {mustBeTrue.map((item, index) => (
            <li key={item.text}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>
                {item.text}{" "}
                {item.links.map((gateId, linkIndex) => (
                  <span key={gateId}>
                    <a href={`#gate-${gateId}`} style={{ color: "var(--accent)", fontWeight: 700 }}>{gateId}</a>
                    {linkIndex < item.links.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.idea} id="recommendation" style={{ scrollMarginTop: "5.5rem" }}>
        <SectionHeading
          label="Decision resolution · Sydney paid-Search proof test"
          title="Recommendation — run it as a diagnostic-only pilot."
          copy="I recommend NOT green-lighting it 'as currently scoped, before economics, as a proof test'; instead, run a diagnostic-only pilot. A budget cap bounds media spend, not downside; the cheap enabling work can start now, while any media spend waits on a pre-agreed decision rule."
        />

        <div className={styles.roadmap} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))" }}>
          <article className={styles.hubCard}>
            <div className={styles.phaseHead}>
              <span>01</span>
              <b aria-hidden="true">3</b>
            </div>
            <h3>Build now, no spend gate.</h3>
            <ul>
              <li>I will build a dedicated Sydney landing page now, without authorising media spend.</li>
              <li>I will carve the test terms out of campaign 700072710 to isolate the test.</li>
              <li>I will demote soft conversions and separate paid / organic / local and brand / non-brand reporting.</li>
            </ul>
            <div style={{ marginTop: "1.25rem" }}>
              <p style={{ color: "var(--green)", fontSize: ".76rem", fontWeight: 700, letterSpacing: ".04em", margin: "0 0 .45rem", textTransform: "uppercase" }}>
                Relevant gates
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem .55rem" }}>
                <a className={styles.hubCardGo} href="#gate-B10" style={{ marginTop: 0 }}>B10 <ArrowRight size={13} /></a>
                <a className={styles.hubCardGo} href="#gate-C1" style={{ marginTop: 0 }}>C1 <ArrowRight size={13} /></a>
                <a className={styles.hubCardGo} href="#gate-C12" style={{ marginTop: 0 }}>C12 <ArrowRight size={13} /></a>
                <a className={styles.hubCardGo} href="#gate-C13" style={{ marginTop: 0 }}>C13 <ArrowRight size={13} /></a>
                <a className={styles.hubCardGo} href="#gate-C7" style={{ marginTop: 0 }}>C7 <ArrowRight size={13} /></a>
              </div>
            </div>
          </article>

          <article className={styles.hubCard}>
            <div className={styles.phaseHead}>
              <span>02</span>
              <b aria-hidden="true">4</b>
            </div>
            <h3>Gate spend on cheap preconditions.</h3>
            <ul>
              <li>I will agree ACV, margin, close-rate and payback ranges before any media spend.</li>
              <li>I will set a maximum test-loss cap in dollars.</li>
              <li>I will pre-register pass, kill and inconclusive rules.</li>
              <li>I will set the pass bar as an information threshold: beat the current ~A$514 per strict conversion on the same service line.</li>
            </ul>
            <div style={{ marginTop: "1.25rem" }}>
              <p style={{ color: "var(--green)", fontSize: ".76rem", fontWeight: 700, letterSpacing: ".04em", margin: "0 0 .45rem", textTransform: "uppercase" }}>
                Relevant gates
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem .55rem" }}>
                <a className={styles.hubCardGo} href="#gate-B1" style={{ marginTop: 0 }}>B1 <ArrowRight size={13} /></a>
                <a className={styles.hubCardGo} href="#gate-C14" style={{ marginTop: 0 }}>C14 <ArrowRight size={13} /></a>
              </div>
            </div>
          </article>

          <article className={styles.hubCard}>
            <div className={styles.phaseHead}>
              <span>03</span>
              <b aria-hidden="true">2</b>
            </div>
            <h3>Run diagnostic-only; no auto-scale.</h3>
            <ul>
              <li>I will treat the result as directional, not causal, because ErgoWorks already ranks about #3 organically for the beachhead term.</li>
              <li>I will use a geo or time holdout if feasible, and I will not auto-scale from this pilot.</li>
            </ul>
          </article>
        </div>

        <div className={styles.calloutRow} style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto" }}>
          <ShieldCheck size={20} />
          <p><strong>Honest boundary:</strong> a budget cap bounds media spend, not downside — cannibalisation, false confidence from a thin search pool, and the cost of scaling a wrong result all sit outside it. Without a pre-agreed decision rule, any result gets declared promising after the fact.</p>
        </div>

        <p style={{ maxWidth: "1200px", margin: "1.5rem auto 0", color: "var(--muted)", fontSize: ".78rem", lineHeight: 1.6 }}>
          Provenance: stress-tested via an adversarial affirmative/negative debate (two models, two rounds), 17 August 2026.
        </p>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="gate-register">
        <SectionHeading
          label="Progressive disclosure · 34 gates"
          title="Open a gate when you need the decision detail."
          copy="Every gate keeps its original reference. Priority, owner and status are text labels; evidence links point to the traceable evidence register wherever a verified item is cited."
        />
        <div className={styles.calloutRow} style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "1200px" }}>
          <ShieldCheck size={20} />
          <p><strong>Boundary:</strong> the register records decisions and dependencies. It contains no credentials, account identifiers, repository paths, named third-party organisations, or implementation instructions.</p>
        </div>

        {bundles.map((bundle) => (
          <section key={bundle.number} id={`bundle-${bundle.number}`} style={{ scrollMarginTop: "5.5rem", marginTop: "3.5rem" }}>
            <div className={styles.sectionHeading}>
              <p>{bundle.number} · {bundle.title}</p>
              <h2>{bundle.question}</h2>
              <span>{bundle.gateIds.length} constituent gates · {bundle.owners.join(" · ")}</span>
            </div>
            <div className={styles.stateList} style={{ marginTop: "2rem" }}>
              {bundle.gateIds.map((gateId) => {
                const gate = gates[gateId];
                return <GateDetails key={gate.id} gate={gate} />;
              })}
            </div>
          </section>
        ))}
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p><CircleAlert size={13} style={{ verticalAlign: "-2px", marginRight: ".4rem" }} />Confidential · For client review only · Planning authorisation only</p>
      </footer>
    </main>
  );
}

function GateDetails({ gate }: { gate: Gate }) {
  return (
    <div id={`gate-${gate.id}`} style={{ scrollMarginTop: "5.5rem" }}>
      <div>
        <strong>{gate.id}</strong>
        <span style={{ display: "block", marginTop: ".55rem" }}>
          <strong>Priority:</strong> {gate.priority}<br />
          <strong>Owner:</strong> {gate.owner}<br />
          <strong>Status:</strong> {gate.status}
        </span>
      </div>
      <details>
        <summary style={{ cursor: "pointer", lineHeight: 1.5 }}>{gate.question}</summary>
        <div className={styles.prose} style={{ maxWidth: "none", paddingTop: ".85rem" }}>
          <p><strong>Question:</strong> {gate.question}</p>
          <p><strong>What it blocks:</strong> {gate.blocks}</p>
          <EvidenceLinks evidence={gate.evidence} />
        </div>
      </details>
    </div>
  );
}

function EvidenceLinks({ evidence }: { evidence?: readonly EvidenceRef[] }) {
  return (
    <p>
      <strong>Evidence:</strong>{" "}
      {evidence?.length ? evidence.map((item, index) => (
        <span key={item.id}>
          <a href={`/ergoworks/plan/evidence#evidence-${item.id}`}>Evidence {item.id} — {item.label}</a>
          {index < evidence.length - 1 ? ", " : ""}
        </span>
      )) : "No verified evidence is cited for this gate; owner confirmation is required."}
    </p>
  );
}

function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <div className={styles.sectionHeading}>
      <p>{label}</p>
      <h2>{title}</h2>
      {copy ? <span>{copy}</span> : null}
    </div>
  );
}
