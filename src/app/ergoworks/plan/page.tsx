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
import styles from "./plan.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Decision memo",
  description: "Private decision memo for the ErgoWorks Consulting revised growth plan.",
  robots: { index: false, follow: false },
};

function EvidenceLink({ id, children }: { id: string; children: ReactNode }) {
  return (
    <Link
      href={`/ergoworks/plan/evidence#evidence-${id}`}
      style={{
        color: "var(--green)",
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

export default function PlanPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> Decision memo</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private &amp; confidential</div>
        </nav>

        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>ErgoWorks Consulting · Revised plan v2 · 25 July 2026</p>
            <h1>Approve a Sydney-first proof test.</h1>
            <p className={styles.heroCopy}>
              <strong>[Interpretation]</strong> I recommend we approve a Sydney-first corporate-assessment test, clean the measurement signal first, protect Search, and make Meta earn its budget.
            </p>
          </div>
          <aside className={styles.summary}>
            <p>The recommendation</p>
            <h2>Extend the existing engine with a narrow, measurable wedge.</h2>
            <ul>
              <li><Target size={17} /> Corporate assessment first</li>
              <li><Check size={17} /> Qualified enquiries and calls only</li>
              <li><ShieldCheck size={17} /> No outcome or compliance promises</li>
              <li><ArrowRight size={17} /> Expansion is earned after proof</li>
            </ul>
          </aside>
        </div>

        <a className={styles.scrollCue} href="#known">
          <ArrowDown size={17} /> Read the verified position
        </a>
      </header>

      <section className={styles.stateSection} id="known">
        <div className={styles.stateIntro}>
          <SectionHeading
            label="What I know · verified position"
            title="The current engine is smaller and noisier than the conversion total suggests."
            copy="I am separating verified account facts from my interpretation. The numbers below are the baseline I would protect while the measurement repair is made."
          />
          <p>
            <strong>[Interpretation]</strong> The evidence supports an optimisation-and-expansion test, not a greenfield launch. Most of the apparent volume is not a clean corporate conversion signal yet.
          </p>
        </div>
        <div className={styles.stateList}>
          <div>
            <strong>Trailing Search spend</strong>
            <span>
              <strong>[Verified]</strong> <EvidenceLink id="6a.3">A$42,285.61</EvidenceLink> over the trailing twelve months to 24 July 2026. The latest 30-day pull shows <EvidenceLink id="6a.6">A$4,652.53</EvidenceLink> of spend.
            </span>
          </div>
          <div>
            <strong>Recorded leads (strict)</strong>
            <span>
              <strong>[Verified]</strong> <EvidenceLink id="6a.7">17 platform-recorded leads</EvidenceLink> — four enquiry-form submissions and 13 call conversions — in the latest 30-day window, before deduplication and CRM qualification.
            </span>
          </div>
          <div>
            <strong>Cost per recorded lead</strong>
            <span>
              <strong>[Verified]</strong> <EvidenceLink id="6a.8">A$273.68</EvidenceLink> on the strict definition. This is raw-lead cost, not qualified-lead performance and not a target CPA.
            </span>
          </div>
          <div>
            <strong>Where leads arrive</strong>
            <span>
              <strong>[Verified]</strong> <EvidenceLink id="6a.7">13 of the 17 recorded leads are call conversions</EvidenceLink>. A form-only landing-page plan would miss most of the current lead path.
            </span>
          </div>
        </div>
      </section>

      <section className={styles.docSection} id="wedge">
        <SectionHeading
          label="Why this wedge"
          title="Start where paid Search has a credible corporate entry."
          copy="[Interpretation] The assessment cluster is the only near-term paid-Search wedge I would test, subject to the qualification and unit-economics gates. It has real demand, a local Sydney opportunity and a service message that can be matched to one page."
        />
        <div className={styles.roadmap}>
          <article>
            <div className={styles.phaseHead}><span><Search size={18} /></span><b>01</b></div>
            <h3>Launch the assessment entry</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Interpretation]</strong> Build one Sydney-first corporate page for workplace and workstation assessment intent. This is the acquisition surface I would test first.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><BarChart3 size={18} /></span><b>02</b></div>
            <h3>Keep the ecosystem as the model</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Interpretation]</strong> The six-service ecosystem is the long-term operating model and narrative, not six launch offers. The wider capability is introduced as how I work, not as a bundle promised on the first click.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><ArrowRight size={18} /></span><b>03</b></div>
            <h3>Earn the next conversation</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Interpretation]</strong> Other services are fed by a real account trigger, the right buyer, consent and delivery capacity through cross-sell, outbound and partnerships. No enquiry automatically qualifies an account for everything.
            </p>
          </article>
        </div>
        <div className={styles.prose} style={{ marginTop: "2rem" }}>
          <p>
            <strong>[Verified]</strong> The equipment store shows <EvidenceLink id="6c.4">19 of 133 organisations reordered, accounting for about 32% of company-attributed orders</EvidenceLink>; <EvidenceLink id="6c.5">repeat buyers include large employers and government bodies</EvidenceLink>. This is evidence that organisations repeat-buy equipment; it does not prove that a consulting engagement caused those orders. I would measure it as associated cross-sell value, not causal revenue.
          </p>
        </div>
      </section>

      <section className={styles.questionsSection} id="wrong-now">
        <div>
          <SectionHeading
            label="What is wrong now"
            title="The account is spending into mixed intent and counting the wrong things."
            copy="I would repair the signal before asking a new page or a new channel to carry more budget."
          />
          <p className={styles.planningOnly}>
            <strong>[Interpretation]</strong> This is a repairable measurement and market-fit problem. I am not recommending a blanket cut that could remove genuine employer demand.
          </p>
        </div>
        <ol className={styles.questions}>
          <li>
            <span>01</span>
            <p>
              <strong>Manual-handling concentration.</strong> <strong>[Verified]</strong> In the trailing twelve months ending 24 July 2026, the manual-handling ad group spent <EvidenceLink id="6a.4">A$17,237.87</EvidenceLink> from <EvidenceLink id="6a.3">A$42,285.61</EvidenceLink> campaign spend: <EvidenceLink id="6a.4">40.8%</EvidenceLink> of campaign spend. The narrower <EvidenceLink id="6a.4">49.4%</EvidenceLink> is only the share of keyword-targeted ad-group spend after the dynamic-search group is excluded; it is not a whole-campaign percentage and not one keyword.
            </p>
          </li>
          <li>
            <span>02</span>
            <p>
              <strong>Certificate-intent burn.</strong> <strong>[Verified]</strong> The broad <code>+manual +handling +certificate</code> line used <EvidenceLink id="6a.10">A$846.56</EvidenceLink> across <EvidenceLink id="6a.10">125 clicks</EvidenceLink> for <EvidenceLink id="6a.10">two reported conversions</EvidenceLink> in the latest 30-day window — <EvidenceLink id="6a.10">18%</EvidenceLink> of campaign spend. <strong>[Interpretation]</strong> It sits in a commodity certificate market. The two reported conversions cannot be confirmed as qualified corporate enquiries from the platform data — enough for a reversible quarantine, not enough to conclude every matched query is unsuitable.
            </p>
          </li>
          <li>
            <span>03</span>
            <p>
              <strong>Conversion contamination.</strong> <strong>[Verified]</strong> <EvidenceLink id="6a.9">All 16 enabled conversion actions remain primary</EvidenceLink>, including soft actions and <EvidenceLink id="6a.12">activity from another service line</EvidenceLink>. <strong>[Interpretation]</strong> The platform total therefore cannot be treated as clean corporate pipeline.
            </p>
          </li>
        </ol>
      </section>

      <section className={styles.offerSection} id="costs">
        <SectionHeading
          label="What it costs"
          title="Protect the base, cap the experiment, price the work."
          copy="I would keep the existing Search base running while the signal is repaired — a continuity decision, not a verdict that the channel is proven — while making every expansion cost visible before approval. The shape is 70% Search, 20% a capped Meta test that has to earn its place, and 10% held in reserve rather than committed to a channel now. Two things are still yours to settle: whether Meta money is incremental or reallocated, and which envelope governs \u2014 the trailing year or the current run rate."
        />
        <div className={styles.roadmap}>
          <article>
            <div className={styles.phaseHead}><span><Search size={18} /></span><b>Search</b></div>
            <h3>Baseline to measure against</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Verified]</strong> The trailing Search baseline is <EvidenceLink id="6a.3">A$42,285.61 per year</EvidenceLink>. The live campaign budget is <EvidenceLink id="6a.2">A$154.81 per day</EvidenceLink>; the latest 30-day spend was <EvidenceLink id="6a.6">A$4,652.53</EvidenceLink>. I would protect the assessment cluster from broad certificate intent while the goals are repaired.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><Target size={18} /></span><b>Meta</b></div>
            <h3>Capped test only</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Assumption] No Meta budget is approved.</strong> A$700 per month and A$930 per month are arithmetic illustrations of 20% of two candidate envelopes — the trailing year and the current run rate — not evidence that either is a viable test budget. Once access, consent, qualified-event tracking and an agreed maximum learning loss are in place, I would approve or reject one capped Sydney test. There is no automatic scale.</p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><CircleDollarSign size={18} /></span><b>Fee</b></div>
            <h3>Professional-services / build fee</h3>
            <p className={styles.hubCardCopy}>
              <strong>Quoted separately.</strong> My fee for this work, what it covers, any ongoing management cost and the payment terms are not part of this plan and are set out in the accompanying commercial note. Please read this recommendation as subject to that.</p>
          </article>
        </div>
        <div className={styles.calloutRow} style={{ marginTop: "2.5rem", maxWidth: "none" }}>
          <CircleAlert size={20} />
          <p>
            <strong>Approval is subject to commercial terms.</strong><br /><span>The media budgets above are what you would spend on advertising. My own fee and scope are quoted separately, so please treat approval of this plan as conditional on agreeing those terms.</span></p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="next">
        <SectionHeading
          label="What happens next"
          title="Resolve the bundles, repair the signal, then run one clean test."
          copy={<>I would sequence the work so that each result remains interpretable. The full decision register is linked below.</>}
        />
        <div className={styles.roadmap}>
          <article>
            <div className={styles.phaseHead}><span><CircleAlert size={18} /></span><b>01</b></div>
            <h3>Contain certificate-intent spend</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Verified]</strong> The broad <code>+manual +handling +certificate</code> keyword spent <EvidenceLink id="6a.10">A$846.56 across 125 clicks for two reported conversions</EvidenceLink> in the latest 30-day window. At that observed pace, each week of delay leaves roughly A$197 of observed spend exposed (A$846.56 ÷ 30 × 7) — an observation, not a target cost per lead, acquisition cost or proven result. <strong>[Interpretation]</strong> I recommend one-line approval to quarantine the keyword immediately at <a href="/ergoworks/plan/decisions#gate-C12">gate C12</a> while the credential question is answered at <a href="/ergoworks/plan/decisions#gate-A3">gate A3</a>. This is reversible and deliberately separate from the broader approval bundle: the containment is worth days, not weeks. The two reported conversions cannot be confirmed as qualified corporate enquiries from the platform data, so this does not conclude that the spend is wasted or that all certificate intent is unsuitable.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><ClipboardCheck size={18} /></span><b>02</b></div>
            <h3>Answer the approval bundle</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Assumption]</strong> Resolve the offer and routing GO/NO-GO, the corporate-versus-individual flow, fulfilment capacity, service geography, proof permissions and the spend envelope. The proposed free 15-minute Workplace Ergonomics Risk Snapshot remains pending client GO/NO-GO — Preliminary guidance only—not a compliance assessment, compliance certification, medical assessment or diagnosis.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><ShieldCheck size={18} /></span><b>03</b></div>
            <h3>Repair the conversion goals</h3>
            <p className={styles.hubCardCopy}>
              <strong>Recommended sequence.</strong> Demote newsletter, email-click and soft local actions; separate other-service activity; deduplicate forms and calls; capture click IDs, consent and organisation stages in the CRM; keep Maximise Conversions without a target CPA until clean qualified data exists.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><PhoneCall size={18} /></span><b>04</b></div>
            <h3>Make the qualified-call path real</h3>
            <p className={styles.hubCardCopy}>
              Because <EvidenceLink id="6a.7">13 of the 17 recorded leads are calls</EvidenceLink> [Verified], call tracking is not optional: capture the call ID and connected duration, apply the hours-and-disposition rule once approved at <a href="/ergoworks/plan/decisions#gate-B6">gate B6</a>, deduplicate against a form from the same organisation, and import <code>qualified_call</code> as the only primary call signal once reliable.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><ArrowRight size={18} /></span><b>05</b></div>
            <h3>Build one Sydney page</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Interpretation]</strong> Only the corporate flow carries a conversion action. Individuals receive a short route-out with useful self-setup guidance, no consult offer, no lead event and no marketing opt-in. Keep the page message-matched to assessment intent and place the caveat beside every Snapshot call to action: Preliminary guidance only—not a compliance assessment, compliance certification, medical assessment or diagnosis.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span><TimerReset size={18} /></span><b>06</b></div>
            <h3>Reassess after clean cycles</h3>
            <p className={styles.hubCardCopy}>
              <strong>[Interpretation]</strong> Judge Search on qualified corporate pipeline and the call path first. Only after conversion goals are clean and stable should the capped Meta test run; judge it on corporate CPQL and pipeline, not cheap early platform results.
            </p>
          </article>
        </div>
        <Link className={styles.pdfLink} href="/ergoworks/plan/decisions" style={{ marginTop: "2.5rem" }}>
          Open the decision register <ArrowRight size={15} />
        </Link>
      </section>

      <section className={styles.questionsSection} id="verdict">
        <div>
          <SectionHeading
            label="Verdict · five must-be-true conditions"
            title="SHIP-WITH-FIXES"
            copy="[Interpretation] I would circulate this plan as the decision memo, but I would not launch new media until the fee, gates and clean measurement sequence are resolved."
          />
          <p className={styles.planningOnly}>
            This memo authorises planning only. It does not authorise changes to live advertising, website, CRM or tracking systems.
          </p>
        </div>
        <ol className={styles.questions}>
          <li>
            <span>01</span>
            <p><strong>[Assumption]</strong> The assessment wedge originates organisational accounts, not isolated employee cases, with credible adjacent needs.</p>
          </li>
          <li>
            <span>02</span>
            <p><strong>[Assumption]</strong> Unit economics justify acquisition: contract value, margin, close rate, delivery cost and payback establish the acceptable CPQL/CAC.</p>
          </li>
          <li>
            <span>03</span>
            <p><strong>[Assumption]</strong> Measurement connects origin to downstream value without mixing accounts or worker health data into advertising audiences.</p>
          </li>
          <li>
            <span>04</span>
            <p><strong>[Assumption]</strong> The channel base survives qualification: Sydney assessment Search still produces corporate pipeline after manual-handling waste and individual traffic are removed, with calls included.</p>
          </li>
          <li>
            <span>05</span>
            <p><strong>[Assumption]</strong> The operating model is real: owners, capacity, buyer and procurement maps, privacy approval and a vendor-neutral equipment policy are all in place.</p>
          </li>
        </ol>
      </section>

      <section className={styles.docSection} id="guardrails">
        <SectionHeading
          label="The honest boundary"
          title="What I will and will not claim."
          copy="The pack is stronger when the commercial opportunity and the unknowns sit beside each other."
        />
        <div className={styles.prose}>
          <p>
            <strong>[Verified]</strong> Equipment margin is not available as a decision input: the store contains <EvidenceLink id="6c.7">531 published catalogue entries with no populated cost-of-goods data</EvidenceLink>. Until a finance source exists, I will report associated cross-sell value separately from advertising performance, not margin, LTV or causal revenue.
          </p>
          <div className={styles.calloutRow}>
            <ShieldCheck size={20} />
            <p>
              <strong>Scope guardrail:</strong> Preliminary guidance only—not a compliance assessment, compliance certification, medical assessment or diagnosis. No page, ad or form should promise guaranteed injury prevention, WHS compliance or a medical outcome. Individual route-out traffic must not become a lead or marketing audience.
            </p>
          </div>
          <p>
            <strong>[Verified]</strong> The full evidence trail is indexed on the evidence page, and the decisions that remain with you are kept in the decision register.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", marginTop: "2rem" }}>
            <Link className={styles.pdfLink} href="/ergoworks/plan/evidence">
              Open evidence <ArrowRight size={15} />
            </Link>
            <Link className={styles.pdfLink} href="/ergoworks/plan/decisions">
              Open decisions <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p><CircleAlert size={13} style={{ verticalAlign: "-2px", marginRight: ".4rem" }} />Confidential · For client review only · Planning authorisation only</p>
      </footer>
    </main>
  );
}
