import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  CircleAlert,
  CircleDollarSign,
  ClipboardCheck,
  LockKeyhole,
  PhoneCall,
  Search,
  ShieldCheck,
  Target,
  TimerReset,
} from "lucide-react";
import styles from "../plan/plan.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Campaign plan",
  description:
    "The ErgoWorks Consulting revised growth plan, presented as a walkthrough: current position, the recommendation, and the five decisions it needs.",
  robots: { index: false, follow: false },
};

function EvidenceLink({ id, children, light }: { id: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={`/ergoworks/plan/evidence#evidence-${id}`}
      style={{
        color: light ? "#d9f45b" : "var(--green)",
        fontWeight: 700,
        textDecorationThickness: "1px",
        textUnderlineOffset: "0.18em",
      }}
    >
      {children}
    </Link>
  );
}

function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: ReactNode }) {
  return (
    <div className={styles.sectionHeading}>
      <p>{label}</p>
      <h2>{title}</h2>
      {copy ? <span>{copy}</span> : null}
    </div>
  );
}

const illustrativeStyle = {
  border: "1.5px dashed var(--line)",
  borderRadius: ".5rem",
  padding: "1.25rem 1.5rem",
  fontSize: ".95rem",
  lineHeight: 1.6,
} as const;

export default function CampaignPlanPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> Campaign plan</div>
          <div className={styles.private}><LockKeyhole size={14} /> Client walkthrough · detail sits in the private pack</div>
        </nav>

        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>ErgoWorks Consulting · Revised plan v2 · figures re-verified 28 July 2026</p>
            <h1>One clean test. Five decisions.</h1>
            <p className={styles.heroCopy}>
              <strong>[Interpretation]</strong> I recommend we extend the engine you already have with one
              narrow, measurable Sydney corporate-assessment test — repair the measurement signal first,
              protect Search, and let paid social earn its place. This page is the walkthrough; every
              observed figure links to its evidence record in the private pack, and derived arithmetic is
              shown with its working.
            </p>
          </div>
          <aside className={styles.summary}>
            <p>How to read this page</p>
            <h2>What we know, the decision it supports, the unknown that gates it.</h2>
            <ul>
              <li><Check size={17} /> [Verified] is a figure pulled from a live source</li>
              <li><Check size={17} /> [Interpretation] is my bounded reading of it</li>
              <li><Check size={17} /> [Assumption] still needs your input or approval</li>
              <li><ArrowRight size={17} /> About 18 minutes end to end</li>
            </ul>
          </aside>
        </div>

        <a className={styles.scrollCue} href="#position">
          <ArrowDown size={17} /> Start with where you are
        </a>
      </header>

      <section className={styles.stateSection} id="position">
        <div className={styles.stateIntro}>
          <SectionHeading
            label="01 · Where you are"
            title="A real Search base — but the conversion total is not yet a pipeline number."
            copy="There is a working acquisition base worth protecting. What it does not yet give us is a clean count of qualified corporate demand."
          />
          <p>
            <strong>[Interpretation]</strong> The platform reports more conversions than there are lead
            events: <EvidenceLink id="6a.6">22 conversions in the window</EvidenceLink> against{" "}
            <EvidenceLink id="6a.7">17 recorded lead events</EvidenceLink> — a gap consistent with soft and
            unrelated actions still counting. That gap is the measurement problem in one sentence.
          </p>
        </div>
        <div className={styles.stateList}>
          <div>
            <strong>Trailing-year Search spend</strong>
            <span>
              <strong>[Verified]</strong> <EvidenceLink id="6a.3">A$42,285.61</EvidenceLink> over the twelve
              months to 24 July 2026 — about A$3,524 per month on average. The latest 30-day window spent{" "}
              <EvidenceLink id="6a.6">A$4,652.53</EvidenceLink>, roughly 32% above that average.
            </span>
          </div>
          <div>
            <strong>Recorded lead events, latest 30 days</strong>
            <span>
              <strong>[Verified]</strong> <EvidenceLink id="6a.7">17 events: 4 enquiry forms and 13 phone calls</EvidenceLink>.
              Calls dominate — any plan that only counts forms misses most of the current lead path.
            </span>
          </div>
          <div>
            <strong>Cost per recorded lead</strong>
            <span>
              <strong>[Verified]</strong> <EvidenceLink id="6a.8">A$273.68 strict, A$221.55 loose</EvidenceLink>.
              This is raw media cost per recorded event — not qualified-lead cost, and not a target.
            </span>
          </div>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="spend">
        <SectionHeading
          label="02 · What the spend is buying"
          title="The signal is mixed — and that is repairable."
          copy="The current setup captures useful activity, but the commercial signal is mixed and needs separation before it can steer budget. This is a configuration problem, not a verdict on any service."
        />
        <div className={styles.roadmap}>
          <article>
            <div className={styles.phaseHead}><span><BarChart3 size={18} /></span><b>01</b></div>
            <h3>Spend concentration</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Verified]</strong> Manual-handling training activity took{" "}
              <EvidenceLink id="6a.4">A$17,237.87 — 40.8% of campaign spend</EvidenceLink> over the trailing
              year. <strong>[Interpretation]</strong> Some of it may be genuine employer demand, which is why
              the repair narrows it rather than cutting it.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><Search size={18} /></span><b>02</b></div>
            <h3>Certificate-seeker intent</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Verified]</strong> One broad certificate-intent keyword took{" "}
              <EvidenceLink id="6a.10">A$846.56 across 125 clicks for two reported conversions</EvidenceLink>{" "}
              in 30 days — 18% of that window&rsquo;s spend, or about 2% of the{" "}
              <EvidenceLink id="6a.3">trailing-year total</EvidenceLink>. Its corporate fit is not yet
              confirmed.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><ClipboardCheck size={18} /></span><b>03</b></div>
            <h3>Goal hygiene</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Verified]</strong> <EvidenceLink id="6a.9">All 16 enabled conversion actions are primary</EvidenceLink>,
              and the account <EvidenceLink id="6a.12">includes a second service line&rsquo;s campaign</EvidenceLink>.
              <strong> [Interpretation]</strong> Until they are separated, the total is not a clean basis for
              attributing performance to consulting.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.docSection} id="wedge">
        <SectionHeading
          label="03 · The opportunity"
          title="A focused corporate-assessment wedge, tested in Sydney first."
          copy="[Interpretation] The assessment cluster is the first bounded wedge worth testing — subject to the qualification, economics and capacity gates. It is not a claim that the wider market is proven."
        />
        <div className={styles.stateList}>
          <div>
            <strong>Search already carries the load</strong>
            <span>
              <strong>[Verified]</strong> Paid Search is <EvidenceLink id="6g.5">48% of all site sessions — 830 of 1,716 — ahead of organic at 561</EvidenceLink>.
              <strong> [Interpretation]</strong> It is currently the largest single source of visits, which is
              why the base is protected while the test runs.
            </span>
          </div>
          <div>
            <strong>A visibility asset to build on</strong>
            <span>
              <strong>[Verified]</strong> On the Sydney assessment query, <EvidenceLink id="6b.1">two of our rows sit at positions 3.8 and 4.3</EvidenceLink>{" "}
              while the bare homepage averages 41.2. <strong>[Interpretation]</strong> The top row is inferred
              to be the Business Profile listing — <EvidenceLink id="6b.2">still to be confirmed</EvidenceLink>.
            </span>
          </div>
          <div>
            <strong>A quiet corporate signal</strong>
            <span>
              <strong>[Verified]</strong> <EvidenceLink id="6g.7">Some referral visits arrive from workplace intranets and collaboration tools</EvidenceLink> —
              a small, real sign that workplaces are already reading, without naming any organisation.
            </span>
          </div>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="recommendation">
        <SectionHeading
          label="04 · The recommendation"
          title="Extend, don&rsquo;t pivot."
          copy="[Interpretation] The six-service ecosystem is the working expansion hypothesis, not six launch offers. Launch begins with one service and earns the right to widen."
        />
        <div className={styles.roadmap}>
          <article>
            <div className={styles.phaseHead}><span><Target size={18} /></span><b>01</b></div>
            <h3>One entry offer</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Interpretation]</strong> One Sydney-first corporate page for workplace and workstation
              assessment intent, with a corporate flow that carries the conversion action and an individual
              flow that is routed out with useful guidance and no lead event.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><BarChart3 size={18} /></span><b>02</b></div>
            <h3>Ecosystem retained</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Verified]</strong> The equipment store shows <EvidenceLink id="6c.4">19 of 133 organisations reordered — about 32% of company-attributed orders</EvidenceLink>.
              <strong> [Verified]</strong> That establishes repeat buying, <EvidenceLink id="6c.8">not that consulting caused any order</EvidenceLink> —
              so cross-population is measured as associated value, never claimed as causal revenue.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><ArrowRight size={18} /></span><b>03</b></div>
            <h3>Expansion is earned</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Interpretation]</strong> Other services are fed by real account triggers, the right
              buyer, consent and delivery capacity — through cross-sell, outbound and partnerships. No
              enquiry automatically qualifies an account for everything.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.docSection} id="costs">
        <SectionHeading
          label="05 · What it costs"
          title="Observed spend is verified. Proposed budgets are illustrations until you set them."
          copy={<>To honour the existing instruction that Search spend holds until the new website launches: nothing here asks for Search expansion. Today&rsquo;s approvals are measurement repair, one page build, and the decision framework below. My own fee is quoted separately and this plan is conditional on those terms.</>}
        />
        <div className={styles.stateList}>
          <div>
            <strong>Verified anchors</strong>
            <span>
              <strong>[Verified]</strong> Trailing year <EvidenceLink id="6a.3">A$42,285.61</EvidenceLink> (≈A$3,524/month average) ·
              latest 30 days <EvidenceLink id="6a.6">A$4,652.53</EvidenceLink> (≈32% above that average) ·
              live daily budget <EvidenceLink id="6a.2">A$154.81</EvidenceLink>, which annualises to roughly
              A$56,500 — closer to the recent pace than the trailing year. Which envelope governs is
              explicitly your decision.
            </span>
          </div>
          <div>
            <strong>The proposed shape</strong>
            <span>
              <strong>[Interpretation]</strong> 70% Search (protected base) · 20% one capped paid-social test
              that launches only after the conversion signal is clean · 10% held in reserve rather than
              fragmented. The split is a planning shape, not measured performance.
            </span>
          </div>
        </div>
        <div style={{ ...illustrativeStyle, marginTop: "2rem" }}>
          <p style={{ margin: 0 }}>
            <strong>Illustrations only — not recommendations.</strong> 20% of the trailing-year envelope is
            about A$700/month; 20% of the latest 30-day pace is about A$930/month; the 10% reserve would be
            roughly A$350–A$465/month on the same two anchors. A maximum test loss is a separate decision:
            at those paces, one, two or three months of paid-social testing caps at roughly
            A$700/1,400/2,100 or A$930/1,860/2,790. The actual envelope, and the loss cap, are yours to
            set — including a number that appears on neither line.
          </p>
        </div>
        <div className={styles.calloutRow} style={{ marginTop: "2rem", maxWidth: "none" }}>
          <CircleDollarSign size={20} />
          <p>
            <strong>The missing arithmetic is named, not hidden.</strong><br />
            <span>
              Breakeven lead cost = (average contract value × margin − delivery cost) × close rate, over an
              agreed payback period. The observed A$273.68 per recorded lead cannot be judged good or bad
              until those inputs exist — that is decision bundle 1 below, not a footnote.
            </span>
          </p>
        </div>
      </section>

      <section className={styles.questionsSection} id="ask-now">
        <div>
          <SectionHeading
            label="06 · The one immediate ask"
            title="A reversible containment, separate from everything else."
            copy="[Interpretation] If we agree this line is not ready for corporate acquisition, pausing it now avoids the running spend while preserving the option to restore it. It is a containment decision, not a verdict on the training service."
          />
          <p className={styles.planningOnly}>
            The ask, in one line: may I pause the one broad certificate-intent keyword and narrow the
            campaign&rsquo;s goal set to the approved consulting lead actions? Both changes are reversible.
          </p>
        </div>
        <ol className={styles.questions}>
          <li>
            <span>01</span>
            <p>
              <strong>[Verified]</strong> The line spent <EvidenceLink id="6a.10" light>A$846.56 for two reported conversions</EvidenceLink> in
              30 days. <strong>[Interpretation]</strong> Those two cannot be confirmed as qualified corporate
              enquiries from platform data alone.
            </p>
          </li>
          <li>
            <span>02</span>
            <p>
              <strong>[Interpretation]</strong> The cost of waiting, at the observed pace: about A$197 in a
              week, A$395 in a fortnight, A$847 in a month. The pause itself adds no media spend and is
              reversible; waiting leaves the observed run rate in place.
            </p>
          </li>
          <li>
            <span>03</span>
            <p>
              <strong>[Interpretation]</strong> For scale: that ~A$847 per 30 days is the same order of
              magnitude as the entire illustrative paid-social test. Pausing it does not fund the test — the
              envelope decision stands on its own — but it shows the two numbers live in the same range.
            </p>
          </li>
        </ol>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="decisions">
        <SectionHeading
          label="07 · The five decisions"
          title="Five questions carry the whole plan. Everything else is audit trail."
          copy={<>The private register holds 34 supporting gates; you do not need to read them to decide. These five cards are the decisions. Each links to its full detail in the pack.</>}
        />
        <div className={styles.roadmap} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))" }}>
          <article className={styles.hubCard}>
            <div className={styles.phaseHead}><span>01</span><b><CircleDollarSign size={18} /></b></div>
            <h3>Is this worth funding?</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Assumption]</strong> I need contract value, close rate, margin and delivery cost to turn{" "}
              <EvidenceLink id="6a.8">A$273.68 per recorded lead</EvidenceLink> into a verdict — plus your
              envelope and an absolute test-loss cap.
            </p>
            <a className={styles.hubCardGo} href="/ergoworks/plan/decisions#bundle-01">Open the detail <ArrowRight size={13} /></a>
          </article>
          <article className={styles.hubCard}>
            <div className={styles.phaseHead}><span>02</span><b><Target size={18} /></b></div>
            <h3>What exactly launches?</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Assumption]</strong> The free 15-minute Snapshot and the two-flow routing remain
              proposed until your GO/NO-GO. <strong>[Verified]</strong> The live site{" "}
              <EvidenceLink id="6d.6">names Sydney and Melbourne only</EvidenceLink>, while{" "}
              <EvidenceLink id="6a.11">a Canberra line still converts</EvidenceLink> — geography wording is
              yours to settle.
            </p>
            <a className={styles.hubCardGo} href="/ergoworks/plan/decisions#bundle-02">Open the detail <ArrowRight size={13} /></a>
          </article>
          <article className={styles.hubCard}>
            <div className={styles.phaseHead}><span>03</span><b><ClipboardCheck size={18} /></b></div>
            <h3>Can we deliver it?</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Assumption]</strong> Oz and Ruth confirm the promise before buyers see it: owner,
              weekly capacity, response SLA and quality control per service. A service that fails the
              readiness check stays out of acquisition messaging — that veto is real.
            </p>
            <a className={styles.hubCardGo} href="/ergoworks/plan/decisions#bundle-03">Open the detail <ArrowRight size={13} /></a>
          </article>
          <article className={styles.hubCard}>
            <div className={styles.phaseHead}><span>04</span><b><ShieldCheck size={18} /></b></div>
            <h3>Can we measure it safely?</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Verified]</strong> Both campaigns can currently optimise towards each other&rsquo;s
              conversions (<EvidenceLink id="6a.14">goal configuration</EvidenceLink>), and calls count from
              one second. <strong>[Interpretation]</strong> Separation, consent and the qualified-call rule
              come before any performance reading.
            </p>
            <a className={styles.hubCardGo} href="/ergoworks/plan/decisions#bundle-04">Open the detail <ArrowRight size={13} /></a>
          </article>
          <article className={styles.hubCard}>
            <div className={styles.phaseHead}><span>05</span><b><TimerReset size={18} /></b></div>
            <h3>What can be prepared now?</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Interpretation]</strong> The reversible containment above, the landing-page route and
              owner, Business Profile ownership, and the paid-social access decision —{" "}
              <EvidenceLink id="6g.3">no verified recent paid-social activity appears in the analytics</EvidenceLink>,
              so that test would start cold.
            </p>
            <a className={styles.hubCardGo} href="/ergoworks/plan/decisions#bundle-05">Open the detail <ArrowRight size={13} /></a>
          </article>
        </div>
      </section>

      <section className={styles.docSection} id="measurement">
        <SectionHeading
          label="08 · The measurement promise"
          title="Qualified pipeline, honestly counted."
          copy="[Interpretation] I will measure a clean path from qualified enquiry or call, through CRM qualification, to won consulting work — and report equipment activity as associated value, never blended into advertising return."
        />
        <div className={styles.roadmap}>
          <article>
            <div className={styles.phaseHead}><span><PhoneCall size={18} /></span><b>01</b></div>
            <h3>Calls are first-class</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Verified]</strong> <EvidenceLink id="6a.7">13 of the 17 recorded leads are calls</EvidenceLink>,
              so call tracking with connected duration and a CRM disposition is mandatory — the recorded call
              count is not yet a verified count of genuine enquiries.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><ClipboardCheck size={18} /></span><b>02</b></div>
            <h3>The CRM decides</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Interpretation]</strong> Qualification lives in the CRM, not the ad platform: one
              qualified corporate enquiry signal, one qualified-call signal, soft actions demoted, and the
              second service line separated before any performance claim.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><ShieldCheck size={18} /></span><b>03</b></div>
            <h3>Hard boundaries</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Verified]</strong> <EvidenceLink id="6c.7">No usable equipment margin data exists yet</EvidenceLink>,
              so no margin-derived claims ship. <strong>Design rule:</strong> worker health and assessment
              information must never enter advertising audiences, and the individual route-out is built to
              fire no lead event.
            </p>
          </article>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="next">
        <SectionHeading
          label="09 · What happens next"
          title="Contain, repair, build, test — in that order."
          copy="[Interpretation] Run out of order, the results become much harder to read. Sequenced, each step makes the next one readable."
        />
        <div className={styles.roadmap}>
          <article>
            <div className={styles.phaseHead}><span><CircleAlert size={18} /></span><b>01</b></div>
            <h3>Contain</h3>
            <p className={styles.hubCardCopy}>
              Log the reversible quarantine decision and stop the observed bleed while the credential
              question is answered.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><ShieldCheck size={18} /></span><b>02</b></div>
            <h3>Repair</h3>
            <p className={styles.hubCardCopy}>
              Clean the conversion goals, separate the service lines, make the qualified-call path real, and
              clear the privacy and tracking-stack checks.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><Search size={18} /></span><b>03</b></div>
            <h3>Build</h3>
            <p className={styles.hubCardCopy}>
              One Sydney corporate-assessment page, two flows, message-matched — built inside the new-website
              window once the offer and routing are approved.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><BarChart3 size={18} /></span><b>04</b></div>
            <h3>Test</h3>
            <p className={styles.hubCardCopy}>
              Judge Search on qualified corporate pipeline first; only then release the capped paid-social
              test, judged on the same standard — never on cheap early platform results.
            </p>
          </article>
        </div>
        <div className={styles.calloutRow} style={{ marginTop: "2.5rem", maxWidth: "none" }}>
          <Check size={20} />
          <p>
            <strong>What I need from this room.</strong><br />
            <span>
              One reversible approval (the containment above) · a GO/NO-GO on the offer and routing · your
              media envelope and maximum test loss · the commercial inputs for the funding verdict · and
              named owners for delivery readiness. Everything else stays conditional until those land.
            </span>
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", marginTop: "2rem" }}>
          <Link className={styles.pdfLink} href="/ergoworks/plan">
            Open the full decision memo <ArrowRight size={15} />
          </Link>
          <Link className={styles.pdfLink} href="/ergoworks/plan/evidence">
            Open the evidence register <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p>
          <CircleAlert size={13} style={{ verticalAlign: "-2px", marginRight: ".4rem" }} />
          Prepared by Marcus Caporaso · figures verified against live sources to 28 July 2026 · planning
          authorisation only — no live-account change is made by this plan
        </p>
      </footer>
    </main>
  );
}
