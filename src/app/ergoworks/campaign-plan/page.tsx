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
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Campaign Plan",
  description:
    "A private, directional campaign plan for ErgoWorks Consulting.",
  robots: { index: false, follow: false },
};

const strategy = [
  [Search, "Optimise Search", "Protect proven demand capture, improve query quality and clean the signals guiding bidding."],
  [Sparkles, "Create demand", "Add a focused Meta prospecting layer that reaches workplace decision-makers before they search."],
  [Layers3, "Convert intentionally", "Route each service theme to a dedicated landing-page journey and a clear first step."],
  [BarChart3, "Measure pipeline", "Connect media to qualified opportunities—not newsletter sign-ups and other soft actions."],
] as const;

const offers = [
  ["Entry", "Free 15-minute Workplace Ergonomics Risk Snapshot", "A 15-minute consultant conversation and written three-point summary for one defined workplace-ergonomics question; free, subject to approved fulfilment capacity. Preliminary guidance only—not a compliance assessment, compliance certification, medical assessment or diagnosis."],
  ["Paid entry", "ErgoStart", "A fixed-scope assessment sprint and prioritised actions for a defined site, cohort or issue. Pricing is unconfirmed and must not be advertised until client-approved; scope, inclusions, delivery timing and price are confirmed only in an approved proposal."],
  ["Rollout", "ErgoScale", "A repeatable workflow, implementation plan and reporting for a corporate, multi-site or hybrid programme. Pricing is unconfirmed; coverage, timing and outputs depend on the approved programme scope."],
  ["Capability", "ErgoCoach", "A task-led review, tailored training and supervisor toolkit for a manual-task or train-the-trainer need. Pricing is unconfirmed; format, participants and outputs depend on the approved scope."],
  ["Ongoing", "ErgoControl", "An ErgoAssess subscription or managed retainer, review cadence and reporting for ongoing programme visibility. Pricing is unconfirmed; platform, service level, cadence and outputs depend on the approved scope."],
] as const;

const roadmap = [
  {
    days: "Days 1–30",
    title: "Establish the foundation",
    items: [
      "Separate Consulting goals from Physiotherapy and soft actions.",
      "Confirm CRM, click-ID and offline-conversion design, with Consent Mode v2, default denied, no client- or server-side transmission before consent.",
      "Audit Search terms, structure, creative and destination quality.",
      "Build and QA the landing-page variants and form journey.",
      "Prepare Meta prospecting, but keep it unpublished until the gates pass.",
    ],
  },
  {
    days: "Days 31–60",
    title: "Launch controlled tests",
    items: [
      "Route approved Search themes to message-matched pages.",
      "Launch one consolidated Meta prospecting audience at a viable learning floor.",
      "Test materially different workplace- and role-led creative concepts.",
      "Validate CRM stages, tracking and browser/server deduplication under Consent Mode v2, default denied, no client- or server-side transmission before consent.",
      "Review Search terms and cross-business leakage weekly.",
    ],
  },
  {
    days: "Days 61–90",
    title: "Diagnose and decide",
    items: [
      "Classify Search clusters: retain, repair, insufficient data or candidate test.",
      "Compare Meta concepts without fragmenting the budget.",
      "Reconcile enquiries to qualified leads and proposals.",
      "Set commercial targets only when economics and clean outcomes are known.",
      "Make explicit fund-to-floor or park decisions for PMax and remarketing.",
    ],
  },
] as const;

const gates = [
  ["Claims", "Use controllable outputs. No guarantees of injury prevention, WHS compliance, claim reduction or financial outcomes."],
  ["Privacy", "Obtain Australian privacy and legal approval for Consent Mode v2, default denied, no client- or server-side transmission before consent, plus tracking, remarketing and offline data flows."],
  ["Data", "Do not collect or transmit injury history, symptoms, diagnoses, treatment, claims or other health information."],
  ["Isolation", "Keep Consulting goals, tags, audiences and CRM mappings separate from Physiotherapy and other businesses."],
  ["Proof", "Use reviews, logos, awards and client references only after substantiation and written approval."],
  ["Funding", "PMax and paid remarketing remain parked unless each can meet its own measurement, privacy and viable-delivery floor."],
] as const;

const questions = [
  "Is demand-generation funding incremental, reallocated from Search, or deferred?",
  "GO/NO-GO: Is the free 15-minute Workplace Ergonomics Risk Snapshot approved as the launch-default offer and dominant CTA, with its full caveat in every placement?",
  "GO/NO-GO: Is the complete ErgoStart, ErgoScale, ErgoCoach and ErgoControl offer ladder approved, including its eligibility and caveats?",
  "What exact Snapshot fulfilment promise is approved: owner, eligibility, weekly capacity, format, written three-point summary, turnaround, booking flow and response SLA?",
  "What onsite and remote service geography is approved for the Snapshot and each paid offer?",
  "GO/NO-GO: What qualified-call rule is approved, including minimum connected duration, operating-hours treatment, disposition criteria and exclusions?",
  "Is admin access confirmed for the correct Meta Business Manager, ad account and Dataset/Pixel, including domain verification and AEM authority?",
  "What contract value, delivery margin, close rate and payback define an allowable acquisition cost?",
  "Which CRM will store click IDs, lead stages, opportunity values and records for Consent Mode v2, default denied, no client- or server-side transmission before consent?",
  "What separation is approved between Consulting and Physiotherapy across analytics and advertising?",
  "Can PMax be funded to its viable floor without destabilising Search, or should it remain parked?",
  "Should paid remarketing receive separate viable funding after its gates pass, or remain parked?",
  "Who owns landing-page delivery, hosting and final QA?",
  "Which proof assets are substantiated and approved in writing?",
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

export default function CampaignPlanPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private campaign plan</div>
        </nav>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Directional strategy · 90-day plan</p>
            <h1>Turn established demand into a measurable growth system.</h1>
            <p className={styles.heroCopy}>
              Protect what already works in Search. Add a disciplined demand-generation layer. Give prospects a clearer first step—and measure the pipeline that follows.
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
      </section>

      <section className={styles.stateSection}>
        <div className={styles.stateIntro}>
          <SectionHeading label="Current state" title="A proven engine, close to its present ceiling." />
          <p>The account already captures meaningful commercial intent. The next gain is unlikely to come from simply asking Search to do more of the same.</p>
        </div>
        <div className={styles.stateList}>
          <div><strong>Established Search</strong><span>A mature programme with a useful demand baseline and limited room to expand without better inputs.</span></div>
          <div><strong>Concentrated demand</strong><span>One training service dominates investment, while quality and query evidence still need validation.</span></div>
          <div><strong>Mixed signals</strong><span>Soft actions currently blur the distinction between engagement and genuine Consulting enquiries.</span></div>
          <div><strong>Missing layer</strong><span>No active paid-social engine or dedicated paid-media conversion journey is creating new demand.</span></div>
          <div><strong>Underserved segment</strong><span>Demand research confirmed the core training head and surfaced a sizeable, under-served care-sector training segment as the clearest near-term growth pocket.</span></div>
        </div>
      </section>

      <section className={styles.offerSection}>
        <SectionHeading label="Offer ladder" title="One low-friction entry. A clear path to implementation." copy="The offer system moves the conversation from one defined question to a repeatable workplace programme—without overstating outcomes." />
        <div className={styles.offerLadder}>
          {offers.map(([stage, title, copy], index) => (
            <article key={title}>
              <div className={styles.offerIndex}>{index + 1}</div>
              <div><span>{stage}</span><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
        <div className={styles.caveat}><ShieldCheck size={20} /><p><strong>Snapshot scope:</strong> preliminary guidance only—not a compliance assessment, compliance certification, medical assessment or diagnosis.</p></div>
      </section>

      <section className={styles.channelsSection}>
        <SectionHeading label="Channel roles" title="A 70 / 20 / 10 operating model—with floors before percentages." copy="The split is a directional steady-state model, not an instruction to force underfunded tests. Proven capture stays protected while each new channel earns its role." />
        <div className={styles.allocation} aria-label="Directional channel allocation: 70 percent Search, 20 percent demand generation, 10 percent experiments">
          <div className={styles.searchBar}><strong>70%</strong><span>Search · capture</span></div>
          <div className={styles.metaBar}><strong>20%</strong><span>Meta · pilot to create</span></div>
          <div className={styles.testBar}><strong>10%</strong><span>Test</span></div>
        </div>
        <div className={styles.channelNotes}>
          <article><h3>Search protects intent</h3><p>Clean goals, inspect query quality, restore brand coverage and route each commercial theme to a relevant destination.</p></article>
          <article><h3>Meta pilots demand generation</h3><p>Run a greenfield TOFU pilot with one consolidated prospecting audience and enough delivery to learn. Meta targets the 20% steady-state share only after it earns it; do not fragment a modest test across multiple ad sets.</p></article>
          <article><h3>Experiments earn activation</h3><p>PMax and paid remarketing stay parked until clean measurement, privacy approval, isolated audiences and viable independent funding are in place.</p></article>
        </div>
      </section>

      <section className={styles.lpSection}>
        <div className={styles.lpCopy}>
          <SectionHeading label="Landing-page concept" title="A message-matched route from workplace concern to practical next step." />
          <p>One navigation-reduced landing-page system, with baseline variants for manual handling training, workstation assessment, and hybrid or home-office programmes.</p>
          <ul>
            <li><Check size={17} /> One dominant launch action on every baseline variant: request the free 15-minute Snapshot (preliminary guidance only—not a compliance or medical assessment)</li>
            <li><Check size={17} /> Service-led primary CTA variants only after the baseline, as tests</li>
            <li><Check size={17} /> A short two-step form using non-sensitive business fields</li>
            <li><Check size={17} /> Required enquiry consent separated from optional marketing consent; Consent Mode v2, default denied, no client- or server-side transmission before consent</li>
            <li><Check size={17} /> Clear expectations, source capture and a purposeful thank-you journey</li>
          </ul>
          <div className={styles.inlineCaveat}>The Snapshot provides preliminary guidance only. It is not a compliance assessment, compliance certification, medical assessment or diagnosis.</div>
        </div>
        <div className={styles.lpMock} aria-label="Conceptual landing-page structure">
          <div className={styles.browserTop}><i /><i /><i /><span>Dedicated campaign destination</span></div>
          <div className={styles.mockBody}>
            <div className={styles.mockBrand}>ErgoWorks <span>Consulting</span></div>
            <div className={styles.mockTag}>Workplace ergonomics, made actionable.</div>
            <h3>Get clarity on one workplace ergonomics priority.</h3>
            <p>A short conversation. A written three-point summary. A practical next step.</p>
            <div className={styles.mockButton}>Request the Snapshot <ArrowRight size={16} /></div>
            <small>Preliminary guidance only—not a compliance assessment, compliance certification, medical assessment or diagnosis.</small>
          </div>
        </div>
      </section>

      <section className={styles.measurementSection}>
        <SectionHeading label="Measurement" title="Move the optimisation signal closer to revenue." copy="Upgrade the existing foundation into a clean, privacy-controlled feedback loop. The primary commercial lens becomes qualified pipeline—not raw platform conversions." />
        <div className={styles.pipeline}>
          {["Snapshot request", "Enquiry", "Qualified lead", "Won"].map((item, index) => <div key={item}><span>{index + 1}</span><strong>{item}</strong></div>)}
        </div>
        <div className={styles.measureGrid}>
          <article><Crosshair size={22} /><h3>Clean the objective</h3><p>Keep genuine Consulting enquiries primary. Move newsletters, email clicks and other soft actions out of bidding goals.</p></article>
          <article><Layers3 size={22} /><h3>Close the loop</h3><p>Retain campaign identifiers in the CRM and return qualified-lead and won outcomes to the media platforms. Booked and held remain CRM-only operational statuses.</p></article>
          <article><ShieldCheck size={22} /><h3>Control the data</h3><p>Apply data minimisation, strict separation from health-adjacent activity and Consent Mode v2, default denied, no client- or server-side transmission before consent.</p></article>
        </div>
      </section>

      <section className={styles.roadmapSection}>
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
      </section>

      <section className={styles.gatesSection}>
        <div className={styles.gatesIntro}>
          <CircleAlert size={25} />
          <SectionHeading label="Risks and compliance" title="These are launch gates, not tidy-up tasks." copy="If a gate is not satisfied, the affected campaign, page, form or measurement layer stays off." />
        </div>
        <div className={styles.gatesList}>
          {gates.map(([title, copy]) => <article key={title}><span>{title}</span><p>{copy}</p></article>)}
        </div>
      </section>

      <section className={styles.questionsSection}>
        <div className={styles.questionsIntro}>
          <SectionHeading label="Client decisions" title="What we need to resolve before implementation." copy="Answers to these questions turn a directional plan into a defensible launch brief." />
          <p className={styles.planningOnly}>This plan authorises planning only. It does not authorise changes to live advertising, website, CRM or tracking systems.</p>
        </div>
        <ol className={styles.questions}>
          {questions.map((question, index) => <li key={question}><span>{String(index + 1).padStart(2, "0")}</span><p>{question}</p></li>)}
        </ol>
      </section>

      <footer className={styles.footer}><div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div><p>Confidential · Directional campaign strategy</p></footer>
    </main>
  );
}
