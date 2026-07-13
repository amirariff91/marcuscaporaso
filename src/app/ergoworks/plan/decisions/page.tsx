import type { Metadata } from "next";
import {
  ArrowDown,
  Check,
  CircleAlert,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import styles from "../plan.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Decisions",
  description: "Private decision record for the ErgoWorks Consulting campaign review pack.",
  robots: { index: false, follow: false },
};

type Question = {
  priority: "Critical" | "High" | "Medium";
  question: string;
  why: string;
  blocks: string;
  redacted?: boolean;
};

type DecisionRecord = {
  question: string;
  answer: string;
  why: string;
  blocks: string;
  redacted?: boolean;
};

const questions: Question[] = [
  {
    priority: "Critical",
    question:
      "Is Meta’s minimum 30-day funding requirement added on top of the existing Search budget, or reallocated from it?",
    why:
      "Search has a mature five-figure annual history and an observed current monthly range. Reallocation reduces proven demand capture; incremental funding produces a cleaner Meta baseline.",
    blocks: "Final choice between the lower and preferred 30-day budget scenarios.",
    redacted: true,
  },
  {
    priority: "Critical",
    question:
      "Can PMax receive its required viable daily floor without destabilising Search?",
    why:
      "A 5–10% test slice at the current run-rate does not meet the required floor. PMax must be funded properly or parked.",
    blocks: "PMax relaunch planning and the final channel allocation.",
    redacted: true,
  },
  {
    priority: "Critical",
    question:
      "GO/NO-GO: Does the client approve the free 15-minute Workplace Ergonomics Risk Snapshot as the launch-default offer and dominant CTA, with the adjacent “preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis” caveat in every placement?",
    why:
      "The offer and caveat govern all baseline Search, Meta and landing-page variants.",
    blocks: "Campaign copy, creative, form and landing-page launch.",
  },
  {
    priority: "Critical",
    question:
      "GO/NO-GO: Does the client approve the complete ErgoStart → ErgoScale / ErgoCoach → ErgoControl offer ladder, including the eligibility and caveats in the canonical offer registry?",
    why:
      "The ladder names and packages are proposed, not yet approved commercial products.",
    blocks: "Offer naming, routing, creative and sales handoff.",
  },
  {
    priority: "Critical",
    question:
      "What exact Snapshot fulfilment promise is approved: consultant owner, eligibility, weekly capacity, 15-minute format, written three-point-summary template, turnaround, booking flow and response SLA? The Snapshot is preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis.",
    why: "Copy must promise only what operations can consistently deliver.",
    blocks: "Final Snapshot wording, availability, pacing and follow-up workflow.",
  },
  {
    priority: "Critical",
    question:
      "What exact service geography is approved for the Snapshot and each paid offer, including remote versus onsite limits? The Snapshot is preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis.",
    why:
      "“Australia-wide” and location-specific messaging cannot be published without confirmed coverage — and the live evidence has sharpened this into a launch blocker: the live site commits to Sydney and Melbourne only, while a recent search-terms pull spans Canberra, Sydney, Brisbane and national/“near me” terms. The evidence includes a single converting geo term; the other geo terms appear in the pull but did not convert. The LP cannot claim broader coverage than the live site until verified; if coverage is Sydney/Melbourne-only, the Canberra spend needs a geo decision (keep, geo-modify or exclude), not just copy.",
    blocks:
      "Geo targeting, exclusions, landing-page copy, the geo-dynamic Canberra treatment, the Canberra candidate ad group and lead routing.",
    redacted: true,
  },
  {
    priority: "Critical",
    question:
      "What does ErgoWorks actually issue after training: an accredited certificate, a statement of attainment, participant attendance records, participant training-completion records, or another output?",
    why:
      "Certificate/course buyer type is UNCLASSIFIED, and programme action-status records are not participant credentials. Accreditation and participant-record claims require direct evidence and client sign-off.",
    blocks:
      "Certificate Search test, certificate LP block and FAQ, organisational qualification, final ad copy and publication.",
  },
  {
    priority: "Critical",
    question:
      "Are care-sector, online and refresher services actually supported; if so, in what onsite/remote format and approved service geography?",
    why:
      "Keyword demand verifies interest, not delivery capability. The live aged-care/disability/healthcare negatives also conflict with the proposed care build.",
    blocks:
      "Care/online/refresher LP modules, care-sector negative reconciliation, geo labels and targeting, Search creative and publication.",
  },
  {
    priority: "Critical",
    question:
      "GO/NO-GO: What exact qualified-call rule does the client approve, including minimum connected duration, operating-hours treatment, disposition criteria and exclusions?",
    why:
      "The native proxy remains Secondary; the deduplicated qualified import is the only Primary call signal.",
    blocks: "Call tracking, CRM disposition, offline import and bidding.",
  },
  {
    priority: "Critical",
    question:
      "Do we have admin access to the correct Meta Business Manager, ad account and Dataset/Pixel, plus authority to verify the approved campaign domain and configure domain verification/AEM?",
    why:
      "Ownership and access are required before an isolated Meta build can be verified or launched.",
    blocks: "Meta setup, Pixel/CAPI, domain verification, AEM and launch QA.",
  },
  {
    priority: "Critical",
    question:
      "What are average contract value, contribution/delivery margin, qualified-lead-to-won rate and acceptable payback?",
    why:
      "These determine an affordable CAC, target CPQL and real target CPA. Raw revenue alone is insufficient.",
    blocks: "Commercial target CPA, 3× Kill Rule, budget scaling, tCPA/tROAS assessment and ROI planning.",
  },
  {
    priority: "Critical",
    question:
      "Which CRM is in use, and can it store click IDs, consent records, lead stages and values?",
    why:
      "Google and Meta need reliable offline quality signals so optimisation can move from raw forms toward qualified leads, proposals and won work.",
    blocks: "Offline conversion imports, Google Data Manager, Meta CAPI feedback, CPQL reporting and closed-loop attribution.",
  },
  {
    priority: "Critical",
    question:
      "What level of separation is approved for Consulting versus Physiotherapy? Options include campaign-specific goals within the existing Ads account, a dedicated GA4 data stream/property, separate GTM scope, and a separate Meta Pixel/Dataset.",
    why:
      "The Google Ads account mixes Consulting and Physiotherapy. Health-adjacent data increases privacy and optimisation risk. Separation must not damage the Physiotherapy campaign through account-wide controls.",
    blocks: "Conversion cleanup, audience creation, GTM/GA4 architecture, Meta launch, remarketing and reliable reporting.",
    redacted: true,
  },
  {
    priority: "High",
    question:
      "Should paid remarketing receive a separate viable budget after audience creation, or remain parked?",
    why:
      "Remarketing should not share or dilute PMax’s floor. Its value depends on isolated audience size, privacy approval, frequency control and incremental contribution.",
    blocks: "Display/Meta retargeting activation, creative volume and audience architecture.",
  },
  {
    priority: "High",
    question:
      "How many free 15-minute Workplace Ergonomics Risk Snapshots can ErgoWorks deliver each week, and who owns response and follow-up? The Snapshot is preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis.",
    why:
      "Meta may generate uneven lead flow. Slow response or insufficient delivery capacity would damage prospect experience and make channel results difficult to interpret.",
    blocks: "Meta pacing, form scheduling, service-area limits, follow-up SLA and scale decisions.",
  },
  {
    priority: "High",
    question:
      "Which proof assets are substantiated and approved in writing for paid-media use? Specifically: reviews and rating, client logos, awards, a global FMCG client, and ASX-listed enterprise client claims.",
    why:
      "These items remain client sign-off required and cannot be treated as usable evidence until their accuracy, wording and permissions are confirmed.",
    blocks: "Final ad copy, landing-page proof sections, creative production and approval.",
  },
  {
    priority: "High",
    question:
      "Is the designated landing-page developer confirmed, what is the delivery window, and where will the page be hosted?",
    why:
      "The dedicated page is a dependency for message match, form design, consent controls, event tracking and paid-traffic routing.",
    blocks: "Build schedule, technical specification, launch date, QA ownership and Search/Meta destination mapping.",
  },
  {
    priority: "Medium",
    question:
      "What route or future subdomain should host the private shareable campaign page?",
    why:
      "A stable location is needed for client review and future handoff without mixing the Consulting project with other client workstreams or unrelated site routes.",
    blocks: "Shareable-page implementation, access model, URL mapping and future maintenance.",
  },
];

const decisionRecord: DecisionRecord[] = [
  {
    question: "Approved 30-day media envelope",
    answer: "Lower scenario / preferred scenario / higher scenario / other",
    why: "The funding envelope determines how much proven Search demand capture can be protected while expansion is tested.",
    blocks: "Final budget scenario and channel allocation.",
    redacted: true,
  },
  {
    question: "Meta funding",
    answer: "On top / reallocated / deferred",
    why: "Reallocation reduces proven demand capture; incremental funding produces a cleaner Meta baseline.",
    blocks: "Meta launch funding and final channel allocation.",
  },
  {
    question: "PMax",
    answer: "Fund to the viable daily floor after gates / park",
    why: "A 5–10% test slice at the current run-rate does not meet the required floor. PMax must be funded properly or parked.",
    blocks: "PMax relaunch planning and the final channel allocation.",
    redacted: true,
  },
  {
    question: "Snapshot launch offer",
    answer: "Approve / reject / revise; approved caveat. The Snapshot is preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis.",
    why: "The offer and caveat govern all baseline Search, Meta and landing-page variants.",
    blocks: "Campaign copy, creative, form and landing-page launch.",
  },
  {
    question: "Offer ladder",
    answer: "Approve / reject / revise names, eligibility and caveats",
    why: "The ladder names and packages are proposed, not yet approved commercial products.",
    blocks: "Offer naming, routing, creative and sales handoff.",
  },
  {
    question: "Snapshot fulfilment",
    answer: "The Snapshot is preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis. Record owner, eligibility, weekly capacity, format, written summary, turnaround, booking flow and SLA.",
    why: "Copy must promise only what operations can consistently deliver.",
    blocks: "Final Snapshot wording, availability, pacing and follow-up workflow.",
  },
  {
    question: "Service geography",
    answer: "Approved onsite and remote coverage by offer",
    why: "Coverage determines which geo claims, targeting rules, exclusions and lead routes can be published.",
    blocks: "Geo targeting, exclusions, landing-page copy, the Canberra treatment and lead routing.",
  },
  {
    question: "Training credential / records",
    answer: "Accredited certificate / statement of attainment / participant attendance record / participant training-completion record / other; approved wording and evidence",
    why: "Accreditation and participant-record claims require direct evidence and client sign-off.",
    blocks: "Certificate Search test, certificate LP block and FAQ, organisational qualification, final ad copy and publication.",
  },
  {
    question: "Care, online and refresher scope",
    answer: "Supported services, delivery formats and approved geography; negative-reconciliation approval",
    why: "Keyword demand verifies interest, not delivery capability.",
    blocks: "Care/online/refresher LP modules, negative reconciliation, geo labels, targeting and publication.",
  },
  {
    question: "Qualified-call rule",
    answer: "Approved duration, hours, disposition and exclusions",
    why: "The deduplicated qualified import is the only Primary call signal.",
    blocks: "Call tracking, CRM disposition, offline import and bidding.",
  },
  {
    question: "Meta access",
    answer: "Business Manager, ad account, Dataset/Pixel, domain verification and AEM access confirmed / missing",
    why: "Ownership and access are required before an isolated Meta build can be verified or launched.",
    blocks: "Meta setup, Pixel/CAPI, domain verification, AEM and launch QA.",
  },
  {
    question: "Paid remarketing",
    answer: "Separately fund after gates / park",
    why: "Remarketing depends on isolated audience size, privacy approval, frequency control and incremental contribution.",
    blocks: "Display/Meta retargeting activation, creative volume and audience architecture.",
  },
  {
    question: "Commercial target",
    answer: "Approved CAC, target CPQL and payback period",
    why: "Contract value, margin, close rate and payback determine affordable acquisition targets.",
    blocks: "Target CPA, Kill Rule, budget scaling, tCPA/tROAS assessment and ROI planning.",
  },
  {
    question: "CRM",
    answer: "Platform, owner and integration capability",
    why: "Reliable CRM fields are required to return qualified-lead and won outcomes to media platforms.",
    blocks: "Offline conversion imports, Meta CAPI feedback, CPQL reporting and closed-loop attribution.",
  },
  {
    question: "Consulting / Physiotherapy separation",
    answer: "Approved Ads, GA4, GTM and Meta scope",
    why: "Health-adjacent data increases privacy and optimisation risk; separation must not damage Physiotherapy through account-wide controls.",
    blocks: "Conversion cleanup, audience creation, GTM/GA4 architecture, Meta launch, remarketing and reliable reporting.",
  },
  {
    question: "Snapshot capacity",
    answer: "The Snapshot is preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis. Record requests per week, service geography and response SLA.",
    why: "Slow response or insufficient delivery capacity would damage prospect experience and make channel results difficult to interpret.",
    blocks: "Meta launch volume, pacing, service-area limits, follow-up SLA and scale decisions.",
  },
  {
    question: "Proof",
    answer: "Approved assets and prohibited/unsubstantiated assets",
    why: "Reviews, logos, awards and client references require source evidence, permissions and client sign-off required before use.",
    blocks: "Final ad copy, landing-page proof sections, creative production and approval.",
  },
  {
    question: "Landing-page delivery",
    answer: "Designated developer, host, route and target date",
    why: "The dedicated page is a dependency for message match, form design, consent controls, event tracking and paid-traffic routing.",
    blocks: "Build schedule, technical specification, launch date, QA ownership and destination mapping.",
  },
  {
    question: "Shareable page",
    answer: "Approved subdomain or path",
    why: "A stable location is needed for client review and future handoff.",
    blocks: "Private campaign-page implementation, access model, URL mapping and future maintenance.",
  },
];

const dataRequired = [
  [
    "Commercial economics",
    "Average contract value, contribution/delivery margin, qualification rate, close rate and acceptable payback",
    "CAC ceiling, target CPQL, target CPA and value-based bidding",
  ],
  [
    "CRM capability",
    "CRM name, field schema, API/integration options, data owner and consent storage",
    "Offline conversion loop and CPQL reporting",
  ],
  [
    "Separation architecture",
    "Client decision plus current GA4 stream, GTM container and Meta Dataset inventory",
    "Consulting/Physiotherapy de-mixing",
  ],
  [
    "PMax viability",
    "Approved incremental/reallocated budget and full historical PMax configuration",
    "Fund-to-floor versus park",
  ],
  [
    "Remarketing viability",
    "Audience sizes, approved funding, consent status and historical campaign configuration",
    "Rebuild versus park",
  ],
  [
    "Snapshot operations",
    "The Snapshot is preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis. Weekly delivery capacity, booking availability, follow-up owner and SLA",
    "Meta launch volume and pacing",
  ],
  [
    "Proof permissions",
    "Source evidence and written usage approval for reviews, logos, awards, a global FMCG client and ASX-listed enterprise client claims",
    "Reviews, logos, awards and client-proof usage",
  ],
  [
    "Landing-page delivery",
    "Designated developer confirmation, hosting decision, implementation estimate and QA owner",
    "LP build and channel launch",
  ],
  [
    "Shareable-page mapping",
    "Approved future subdomain or path and access requirements",
    "Private campaign-plan page",
  ],
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

export default function DecisionsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> Campaign decisions</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private decision record</div>
        </nav>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Decision gate · Before implementation</p>
            <h1>The decisions only you can make.</h1>
            <p className={styles.heroCopy}>
              The plan is directional until the open questions below are answered. Resolve the critical gates first, record the approved boundaries, and keep any unassessed input visible before implementation begins.
            </p>
          </div>
          <aside className={styles.summary}>
            <p>A private decision record</p>
            <h2>Turn recommendations into a launch brief the business can stand behind.</h2>
            <ul>
              <li><Check size={17} /> Resolve Critical gates first</li>
              <li><Check size={17} /> Record caveats, proof and geography</li>
              <li><Check size={17} /> Keep missing inputs explicit</li>
              <li><Check size={17} /> Authorise planning before implementation</li>
            </ul>
          </aside>
        </div>
        <a className={styles.scrollCue} href="#open-questions"><ArrowDown size={17} /> Start with the gates</a>
      </header>

      <section className={styles.questionsSection} id="open-questions">
        <div>
          <SectionHeading
            label="Critical → High → Medium"
            title="Resolve the gates in order."
            copy="These are the questions that turn a directional plan into a defensible launch brief. The priority is the order in which the decision record should be completed."
          />
          <p className={styles.planningOnly}>
            This plan authorises planning only. It does not authorise changes to live advertising, website, CRM or tracking systems.
          </p>
        </div>
        <ol className={styles.questions}>
          {questions.map((item, index) => (
            <li key={item.question}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>
                <strong>{item.priority}</strong> {item.question}
                {item.redacted ? <>{" "}{/* redacted: exact value in private pack */}</> : null}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.docSection} id="decision-record">
        <SectionHeading
          label="Decision record to complete"
          title="Write down the answer, the reason and the dependency."
          copy="Use this record in the review conversation. The required answer is kept with each question so an approval is specific enough to hand into implementation."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Question · Why it matters · What it blocks</caption>
            <thead>
              <tr>
                <th scope="col">Question</th>
                <th scope="col">Why it matters</th>
                <th scope="col">What it blocks</th>
              </tr>
            </thead>
            <tbody>
              {decisionRecord.map((row) => (
                <tr key={row.question}>
                  <td>
                    <strong>{row.question}</strong>
                    <br />
                    <span>Required answer: {row.answer}</span>
                    {row.redacted ? <>{" "}{/* redacted: exact value in private pack */}</> : null}
                  </td>
                  <td>{row.why}</td>
                  <td>{row.blocks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="data-required">
        <SectionHeading
          label="Not assessed / data required before implementation"
          title="Keep the unknowns visible."
          copy="These inputs are not safe to infer from platform data or keyword demand. They remain explicit work items before the affected build, launch or optimisation decision."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Not assessed / data required before implementation</caption>
            <thead>
              <tr>
                <th scope="col">Area not assessed</th>
                <th scope="col">Required input</th>
                <th scope="col">Decision or work blocked</th>
              </tr>
            </thead>
            <tbody>
              {dataRequired.map(([area, input, blocked]) => (
                <tr key={area}>
                  <td><strong>{area}</strong></td>
                  <td>{input}</td>
                  <td>{blocked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.docSection} id="compliance">
        <SectionHeading
          label="Compliance and evidence gates"
          title="Keep the guardrails attached to the decision."
          copy="The page, form, creative and measurement choices stay inside these boundaries until the required evidence and approvals are recorded."
        />
        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p>
            <strong>Snapshot scope:</strong> preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis. No claims of guaranteed injury prevention, WHS compliance or claims reduction. OAIC APP 3: no injury, symptom, diagnosis, treatment, claim or other health fields in advertising forms. Consent Mode v2, default denied, with no client- or server-side analytics/advertising transmission before consent. Meta must not imply a viewer or their staff has a health condition.
          </p>
        </div>
        <div className={styles.calloutRow}>
          <CircleAlert size={20} />
          <p>
            <strong>Proof and operations:</strong> Use reviews, logos, awards and client references only after substantiation and written approval. These items remain client sign-off required and cannot be treated as usable evidence until their accuracy, wording and permissions are confirmed. The offer must promise only what operations can consistently deliver.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p>Confidential · For client review only</p>
      </footer>
    </main>
  );
}
