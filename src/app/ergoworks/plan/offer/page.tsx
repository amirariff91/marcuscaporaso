import type { Metadata } from "next";
import {
  ArrowDown,
  Check,
  CircleAlert,
  ClipboardCheck,
  FileText,
  Layers3,
  LockKeyhole,
  Megaphone,
  Search,
  ShieldCheck,
} from "lucide-react";
import styles from "../plan.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Offer & Creative",
  description:
    "A private offer, messaging and creative brief for ErgoWorks Consulting.",
  robots: { index: false, follow: false },
};

const snapshotCaveat =
  "preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis";

const creativeJobs = [
  ["01", "Improve message match", "Make the existing Search demand path clearer, more relevant and more useful to organisational buyers."],
  ["02", "Create demand", `Introduce the Workplace Ergonomics Risk Snapshot and implementation pathway through a disciplined Meta demand-generation layer; every mention carries ${snapshotCaveat}.`],
  ["03", "Make action tangible", "Move buyers from a visible workplace issue to prioritised action and evidence of implementation."],
] as const;

const positioningStages = [
  ["See the risk", "What needs attention?", "Establish a consistent view of workstation, hybrid-work or manual-task priorities.", "Defined scope, observations and prioritised findings"],
  ["Act on priorities", "What should happen next?", "Translate findings into practical controls, training, equipment guidance and manager actions.", "Documented action plan, responsibilities and recommended next steps"],
  ["Prove implementation", "How do we show progress?", "Establish repeatable workflows, action-status records and programme reporting.", "Coverage, action status and implementation evidence"],
] as const;

const buyerPriorities = [
  ["WHS / HSE", "Visibility, prioritisation and evidence of action", "Consistent assessment approach, practical controls and documented implementation", "Anonymised action plan, programme coverage and professional credentials"],
  ["HR / People & Culture", "Employee support, hybrid consistency and manageable rollout", "Clear employee journey, scalable communications and defined follow-up", "Completion rates, rollout example and employee guidance sample"],
  ["Facilities / Workplace Experience", "Workspace, equipment and fitout decisions", "Prioritised workspace recommendations and documented design inputs", "Sample workspace brief, multi-site example and before/after workflow"],
  ["Operations / Risk", "Manual-task consistency and supervisor capability", "Task-led review, tailored training and repeatable internal capability", "Training outline, supervisor toolkit and implementation records"],
] as const;

const triggers = [
  ["Workers-compensation cost pressure", "Leaders need clearer visibility into ergonomic priorities and actions.", "Prioritised controls and implementation reporting"],
  ["Return-to-office or hybrid change", "Work settings and employee support may be inconsistent across locations.", "A repeatable office-and-home programme"],
  ["Office fitout or relocation", "Workspace decisions need practical ergonomic input before implementation.", "A documented workspace and equipment brief"],
  ["WHS audit or internal review", "Teams need organised evidence of what was reviewed and acted upon.", "Defined findings, owners and action-status records"],
  ["Recurring discomfort complaints", "Repeated workplace concerns can be difficult to triage consistently.", "A structured pathway for reviewing workplace factors and identifying next steps"],
] as const;

const differentiation = [
  "Consulting expertise for defining and prioritising the issue.",
  "Productised delivery rather than open-ended assessment activity.",
  "Training and internal capability for practical follow-through.",
  "ErgoAssess-enabled workflows for ongoing visibility.",
  "Australia-wide applicability, subject to confirmation of delivery coverage before publishing.",
] as const;

const offers = [
  ["Entry", "Free 15-minute Workplace Ergonomics Risk Snapshot", `B2B organisational buyer with one defined workplace-ergonomics question; a 15-minute consultant conversation and written three-point summary, free subject to approved fulfilment capacity. ${snapshotCaveat}.`],
  ["Paid entry", "ErgoStart", "A fixed-scope assessment sprint and prioritised actions for a defined site, cohort or issue. Pricing is unconfirmed and must not be advertised until client-approved; scope, inclusions, delivery timing and price are confirmed only in an approved proposal."],
  ["Rollout", "ErgoScale", "A repeatable workflow, implementation plan and reporting for a corporate, multi-site or hybrid programme. Pricing is unconfirmed; coverage, timing and outputs depend on the approved programme scope."],
  ["Capability", "ErgoCoach", "A task-led review, tailored training and supervisor toolkit for a manual-task or train-the-trainer need. Pricing is unconfirmed; format, participants and outputs depend on the approved scope."],
  ["Ongoing", "ErgoControl", "An ErgoAssess subscription or managed retainer, review cadence and reporting for ongoing programme visibility. Pricing is unconfirmed; platform, service level, cadence and outputs depend on the approved scope."],
  ["Awareness", "WHS Ergonomic Self-Audit Checklist", "A practical manager checklist for reviewing workplace-ergonomics processes, workstation support and manual-task practices. It is a planning aid only and not a compliance assessment, medical assessment, diagnosis or certification."],
  ["Scenario", "Absenteeism / injury-cost ROI calculator", "A scenario builder using organisation-level assumptions such as headcount, approximate absence days and programme coverage. Every result is an estimate based on user-entered assumptions, with a sensitivity range. For planning purposes only; not financial, compliance or medical advice."],
] as const;

const paidOfferDetails = [
  {
    title: "ErgoStart — fixed-scope assessment sprint",
    copy: "Move from a defined workplace issue to a prioritised action plan with a fixed scope and clear deliverables.",
    items: [
      "Agreed number and type of assessments.",
      "Standardised findings and priority summary.",
      "Practical control and equipment recommendations.",
      "Individual guidance where appropriate.",
      "Manager debrief, defined delivery timeframe and documented next-step options.",
    ],
  },
  {
    title: "ErgoScale — corporate or hybrid rollout",
    copy: "Create consistent coverage across teams and locations, then show what was reviewed, prioritised and implemented.",
    items: [
      "Programme scoping and cohort definition.",
      "Employee and manager communications.",
      "Consistent assessment workflow.",
      "Site, team or programme-level priority summary.",
      "Remediation plan with assigned actions, completion reporting and scheduled review.",
    ],
  },
  {
    title: "ErgoCoach — manual-task and train-the-trainer programme",
    copy: "Start with the task, translate findings into practical controls, and equip supervisors to reinforce the approach.",
    items: [
      "Task observation and worker consultation.",
      "Review of force, repetition, posture and workflow factors.",
      "Practical control recommendations and training tailored to actual tasks.",
      "Supervisor or internal-trainer toolkit.",
      "Attendance or competency records, with defined refresh and review cadence.",
    ],
  },
  {
    title: "ErgoControl — ErgoAssess subscription or managed retainer",
    copy: "Maintain an ongoing view of programme coverage, priority actions and follow-through.",
    items: [
      "ErgoAssess onboarding and configuration.",
      "Participant invitations and completion support.",
      "Risk and action reporting with an agreed escalation workflow.",
      "New-starter or periodic reassessment process.",
      "Quarterly review with WHS, HR or Facilities and optional consultant support.",
    ],
  },
] as const;

const matrixRows = [
  ["Manual tasks", "Match manual handling training intent; lead with task-specific training and practical controls.", "If your team performs manual tasks, start with the work—not a generic lifting lecture.", "Manual Handling Training hero first; explain the review-to-training pathway.", "Operations / WHS thought leadership on task-led programmes."],
  ["Care-sector manual handling", "Dedicated sector-themed Search ads for organisational training buyers; scope and geography gated.", "Not a standalone Meta launch concept. If considered later, address care-sector organisations and workplace processes only; never imply that the viewer or any individual has a disability or health condition.", "Care-sector module within the Manual Handling variant using workplace language, defined team scope and supervisor follow-through.", "Potential named-account angle only after service scope, buyer list and LinkedIn economics are approved."],
  ["Risk visibility", "Workplace ergonomics priorities, made clear.", "Show scattered issues becoming a three-point priority list.", "Lead with See the risk and show defined outputs.", "Document ad: A practical framework for ergonomic risk visibility."],
  ["Actionability", "Move from findings to practical action.", "Carousel from issue → priority → owner → follow-through.", "Detail the action plan, responsibilities and manager debrief.", "Target organisations undergoing workplace change."],
  ["Implementation evidence", "Track actions and programme coverage.", "Dashboard or reporting concept without unverified results.", "Explain action-status records, reporting and ErgoAssess workflow; participant attendance or training-completion records remain client-sign-off-gated.", "Executive message around governance and implementation visibility."],
  ["Certificate / course mixed intent", "Search-only, Exact/Phrase: qualify organisational buyers and route to the gated certificate block. Buyer type is UNCLASSIFIED; do not publish until accreditation and participant outputs are confirmed.", "N/A — excluded from Meta.", "Certificate disqualifier/reframe block; client sign-off required on the approved participant-output wording.", "Not applicable."],
  ["Hybrid / return-to-office", "Plan consistent office and home-work support.", "If your team works across locations, consistency needs a repeatable process.", "Hybrid variant with office/home workflow.", "HR and Workplace Experience ABM for return-to-office programmes."],
  ["Fitout / workplace change", "Ergonomic input for workplace planning.", "Blueprint-to-action visual focused on workspace decisions.", "Facilities variant with documented workspace brief.", "Facilities and workplace-design account targeting."],
  [`Snapshot entry offer — ${snapshotCaveat}`, `Match commercial searches with the dominant baseline CTA; ${snapshotCaveat}.`, `Introduce a one-issue, 15-minute B2B offer as the dominant baseline CTA with the same adjacent caveat: ${snapshotCaveat}.`, `Make the Snapshot the dominant CTA with the same adjacent caveat: ${snapshotCaveat}.`, `Use only for selected accounts after LinkedIn economics are validated and carry the same adjacent caveat: ${snapshotCaveat}.`],
  ["Individual certificate-seeker", "Google Search only: route to organic educational content or the LP certificate disqualifier block; individual phrasings are negative candidates.", "N/A — do not target. Certificate intent is never a Meta audience or creative angle.", "Certificate disqualifier/reframe block on the Manual Handling variant.", "Not applicable."],
  ["Online / flexible delivery", "Search-only themed RSA set with organisational framing for distributed or hybrid schedules; never use individual credential framing.", "Do not port to Meta. It blends with individual-intent traffic, and the Meta word ban remains unchanged.", "Flexible online team delivery named as a module within the Manual Handling variant; qualify organisation, team scope and delivery format.", "Not applicable."],
  ["Ongoing control / refresher", "Match refresher intent with a defined team review and refresh cadence; connect to ErgoControl without implying a mandated frequency.", "Show the journey from one-off activity to an organised programme only after the broader baseline is established.", "Explain recurring review, refresher and managed-retainer pathways; cadence and outputs remain scope-dependent.", "Software/workflow document ad for large named accounts."],
] as const;

const searchThemes = [
  ["Manual Handling Training", "Manual Handling Training · Training Built Around Tasks · Practical Training for Teams · Review Tasks Before Training · Tailored Workplace Training · Equip Supervisors to Act · Manual Task Programme · Workplace Training Australia · Practical Controls & Training · Manual Handling Online · Refresher Training for Teams", "Review real tasks, identify priorities and tailor practical training for the workplace. Give supervisors a structured approach, practical tools and implementation records."],
  ["Care-sector manual handling", "Care-Sector Team Training · Aged Care Team Training · Healthcare Team Training · Disability Support Training · Manual Handling for Teams · Task-Led Care Training · Support Worker Training · Plan Team Training", "Plan practical manual-handling training for care-sector teams and supervisors. Review workplace tasks, define priorities and tailor training for your organisation."],
  ["Certificate / course mixed intent", "Workplace Training for Teams · Plan Team Manual Training · Organisational Training Scope · Ask About Training Records — only after participant-record sign-off", "Plan workplace manual-handling training for a defined team, site and organisational need. Individual credential seekers are redirected; organisational scope and outputs must be confirmed."],
  ["Workplace ergonomic assessment", "Workplace Ergonomic Review · Prioritise Workplace Actions · Ergonomic Assessment Plan · Workstation Assessment · Clear Ergonomic Priorities · Practical Workplace Guidance · Defined Scope & Deliverables · Plan Your Next Ergonomic Step · Office & Hybrid Assessments · Australia-Wide Support — client sign-off required", "Turn workplace observations into prioritised actions and a documented next-step plan. Support WHS, HR and Facilities teams with consistent assessments and practical guidance."],
  ["Implementation and ErgoAssess", "Track Ergonomic Actions · Manage Programme Coverage · ErgoAssess for Workplaces · Show Implementation Progress · Consistent Assessment Workflow · Ongoing Ergonomic Reporting · Programme Visibility · From Assessment to Action", "Organise assessment workflows, priority actions and programme reporting in one process. Build repeatable coverage for new starters, hybrid teams or multi-site programmes."],
] as const;

const searchAssets = [
  ["Sitelinks", "Manual Handling Training · Workplace Assessments · Hybrid Work Programmes · ErgoAssess · How It Works · Request a Scope"],
  ["Callouts", "Defined Deliverables · Practical Action Plans · B2B Workplace Support · Office & Hybrid Options · Task-Led Training · Implementation Reporting"],
  ["Structured snippet", "Services: Manual Task Training, Workstation Assessments, Hybrid Programmes, ErgoAssess"],
  [`Snapshot asset — ${snapshotCaveat}`, `Free 15-Min Risk Snapshot · One Issue. Three Priorities. · Clarify Your Next Step · B2B Ergonomics Snapshot. Adjacent disclosure: ${snapshotCaveat}.`],
] as const;

const metaRules = [
  "Address organisational processes, teams and workplace decisions.",
  "Use constructions such as “If your team is reviewing…” rather than implying a condition.",
  "Never ask “Do you have back pain?” or state that a viewer or employee is injured, unwell or in pain.",
  "Never infer disability, health status, medical history or workers-compensation status.",
  "Never guarantee injury prevention, compliance, claim reduction or financial savings.",
  "Avoid employee-level health or injury fields in lead forms.",
  "Use separate enquiry consent and optional marketing consent.",
  "Pass AU privacy review before pixel, CAPI, CRM or campaign activation.",
  `The only permitted occurrence of "certificate" or "certification" in Meta creative is inside the mandatory Snapshot caveat: “Preliminary guidance only—not a compliance assessment, compliance certification, medical assessment or diagnosis.” That sanctioned negative caveat is required wherever the Snapshot appears and is not a violation of this rule. Never use certificate/certification as a hook, offer, audience signal or benefit, including when referencing client-sign-off-gated participant attendance or training-completion records. This avoids attracting individual certificate-seeker intent that contaminates a corporate-buyer prospecting audience. This is a positioning and contamination rule, not a claimed Meta review trigger.`,
] as const;

const metaConcepts = [
  {
    number: "01",
    title: "Start with the task",
    hook: "If your team needs manual handling training, start with the actual tasks — not a generic lecture.",
    narrative: "Observe the task → identify practical priorities → tailor controls and training → equip supervisors to follow through.",
    formats: "15-second vertical video; 4:5 static with Training should start with the task; five-card carousel covering the four steps plus CTA.",
    cta: `Request the free 15-minute Workplace Ergonomics Risk Snapshot. ${snapshotCaveat}.`,
  },
  {
    number: "02",
    title: "Three questions leaders need answered",
    hook: "What needs attention? What happens next? How will progress be recorded?",
    narrative: "See the risk → act on priorities → prove implementation.",
    formats: "Three-card carousel; 4:5 process diagram; 15-second consultant-to-camera video with captions.",
    cta: `Request the free 15-minute Workplace Ergonomics Risk Snapshot. ${snapshotCaveat}.`,
  },
  {
    number: "03",
    title: "Hybrid consistency",
    hook: "If your team works across locations, workplace support needs a repeatable process.",
    narrative: "Show office, home and manager views feeding into one consistent assessment and action workflow.",
    formats: "Split-screen 9:16 video; 4:5 static process map; carousel: office → home → actions → reporting.",
    cta: `Request the free 15-minute Workplace Ergonomics Risk Snapshot. ${snapshotCaveat}.`,
  },
  {
    number: "04",
    title: "Fitout decisions",
    hook: "Workplace plans are easier to act on when ergonomic priorities are documented early.",
    narrative: "Translate floor plan or workspace concept into a defined review, prioritised recommendations and implementation brief.",
    formats: "Blueprint-to-action animated video; annotated workspace static; carousel showing review → prioritise → brief → implement.",
    cta: `Request the free 15-minute Workplace Ergonomics Risk Snapshot. ${snapshotCaveat}.`,
  },
  {
    number: "05",
    title: `Workplace Ergonomics Risk Snapshot — ${snapshotCaveat}`,
    hook: "One workplace issue. Fifteen minutes. Three written priorities.",
    narrative: `If your team is reviewing its workplace ergonomics priorities — a workstation assessment, a manual-task programme — request a free 15-minute B2B Snapshot and receive a written three-point summary. ${snapshotCaveat}.`,
    formats: "4:5 static with One issue → three priorities; 15-second consultant video describing the scope and exclusion; three-card carousel: bring one issue → discuss it for 15 minutes → receive a written three-point summary.",
    cta: `Request the free Snapshot. ${snapshotCaveat}.`,
  },
  {
    number: "06",
    title: "From one-off activity to programme visibility",
    hook: "An assessment is a starting point. Implementation needs a repeatable workflow.",
    narrative: "Show assessment activity moving into priority actions, owners, completion and review through ErgoControl / ErgoAssess.",
    formats: "Workflow animation; dashboard-style static using approved product imagery; carousel showing the programme lifecycle.",
    cta: `Request the free 15-minute Workplace Ergonomics Risk Snapshot. ${snapshotCaveat}.`,
  },
] as const;

const fatigueRules = [
  "Review Meta creative every 14–21 days.",
  "Refresh or broaden the concept pool if prospecting frequency exceeds 5.0.",
  "Refresh or reassess audience size if retargeting frequency exceeds 12.0.",
  "Treat a CTR decline greater than 20% over 14 days as a creative-fatigue failure.",
  "Do not claim fatigue unless actual trend data meets the threshold.",
  "Maintain at least five genuinely different concepts rather than producing superficial variants.",
] as const;

const lpHeroDirections = [
  ["Manual Handling Training", "Manual Handling Training Built Around the Work", "Review the task, identify practical priorities and give supervisors a programme they can apply."],
  ["Workstation and ergonomic assessment", "Turn Workplace Ergonomic Findings Into Prioritised Action", "Give WHS, HR and Facilities teams a clear view of what needs attention and what should happen next."],
  ["Hybrid programme", "Create a Consistent Ergonomics Process Across Office and Home", "Establish a repeatable approach to assessment, employee guidance, priority actions and follow-through."],
] as const;

const proofRows = [
  ["Named consultant qualifications", "Credibility near CTA and process", "Data and permission required"],
  ["Professional memberships", "WHS / HR buyer reassurance", "Data and permission required"],
  ["Anonymised sample report", "Demonstrate deliverable quality", "Client approval required"],
  ["Anonymised action plan", "Demonstrate implementation path", "Client approval required"],
  ["Programme coverage or completion data", "Show operating scale without outcome promises", "Evidence and methodology required"],
  ["Customer logos", "Reassurance near relevant offer", "client sign-off required"],
  ["A global FMCG client name or testimonial", "ErgoScale / ErgoControl proof", "client sign-off required"],
  ["Enterprise-scale client claim", "Enterprise scale proof", "client sign-off required"],
  ["Strong public review rating", "General trust proof", "client sign-off required"],
  ["Awards", "Credibility strip", "client sign-off required"],
  ["Product screenshots", "Explain ErgoAssess workflow", "Current approved assets required"],
  ["Quantified injury, claims or cost reduction", "Not recommended without robust substantiation and legal review", "Do not use in launch creative"],
] as const;

const productionPriorities = [
  ["1", "Manual Handling Training RSA set and matched landing-page hero", "Improve the dominant existing demand path"],
  ["2", "Dedicated landing-page modules and compliant entry-offer blocks", "Replace generic-page message mismatch"],
  ["3", "Five genuinely distinct Meta concepts across static, video and carousel", "Establish demand-generation coverage"],
  ["4", "Entry-offer consultant video, static and carousel", "Test the low-friction B2B entry offer"],
  ["5", "Anonymised report, action-plan and workflow assets", "Make the implementation pathway tangible"],
  ["6", "Hybrid and fitout variants", "Expand organisational trigger coverage"],
  ["7", "ErgoControl / ErgoAssess workflow creative", "Support higher-value ongoing programmes"],
  ["8", "Future LinkedIn document and Thought Leader assets", "Enable a gated ABM pilot"],
] as const;

const complianceRows = [
  ["Claims", "No guarantee of injury prevention, WHS compliance, claim reduction or quantified financial outcome."],
  [`Snapshot — ${snapshotCaveat}`, `Every description states that it is B2B-only, covers one issue, includes a written three-point summary, and carries: ${snapshotCaveat}.`],
  ["Meta policy", "No personal-condition implications or health-status targeting. Meta must not imply a viewer or their staff has a health condition."],
  ["Forms", "No injury, diagnosis, symptom, disability or other employee-health fields."],
  ["OAIC APP 3", "No injury, symptom, diagnosis, treatment, claim or other health fields in advertising forms."],
  ["Health-data deny-list", "Do not collect or transmit injury history, symptoms, diagnoses, treatment, claims or other health information."],
  ["Consent", "Enquiry consent separated from optional marketing consent."],
  ["Privacy", "AU privacy review completed before launch."],
  ["Tracking", "CMP plus Consent Mode v2, default denied, with no client- or server-side analytics/advertising transmission before consent configured before activation."],
  ["Data isolation", "Consulting tracking and reporting separated from Physiotherapy, ErgoEquip and Biosymm."],
  ["Negatives", "Consulting exclusions applied at campaign level, not account-wide."],
  ["Proof", "Every customer logo, award, named client reference, enterprise-scale claim and strong public review rating receives client sign-off required."],
  ["Measurement", "Qualified-lead baseline established before interpreting creative cost-per-lead."],
  ["Creative QA", "Copy, crop, captions, safe zones, CTA and landing-page message match checked on mobile."],
  ["Account changes", "Marcus approves all changes before any live implementation."],
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

export default function OfferCreativePage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
          <div className={styles.private}><LockKeyhole size={14} /> Offer &amp; creative brief</div>
        </nav>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Appendix D · Offer &amp; creative</p>
            <h1>Make the path from workplace risk to action unmistakably clear.</h1>
            <p className={styles.heroCopy}>
              A single implementation story connects Search demand, Meta awareness, a low-friction B2B entry offer and the programme evidence buyers need to keep moving.
            </p>
          </div>
          <aside className={styles.summary}>
            <p>Creative brief</p>
            <h2>Position the work around priorities, follow-through and evidence.</h2>
            <ul>
              <li><Check size={17} /> Protect high-intent Search demand</li>
              <li><Check size={17} /> Create qualified organisational demand</li>
              <li><Check size={17} /> Make the offer ladder concrete</li>
              <li><Check size={17} /> Gate every claim, proof asset and launch</li>
            </ul>
          </aside>
        </div>
        <a className={styles.scrollCue} href="#strategic-role"><ArrowDown size={17} /> Read the brief</a>
      </header>

      <section className={styles.idea} id="strategic-role">
        <SectionHeading
          label="Strategic role"
          title="Creative has three jobs in an existing demand engine."
          copy="ErgoWorks is not starting from zero. Search captures existing demand; Meta must create demand that does not yet exist. The creative system has to make the implementation pathway visible without turning controllable outputs into promises."
        />
        <div className={styles.strategyFlow}>
          {creativeJobs.map(([number, title, copy]) => (
            <article key={number}>
              <div className={styles.strategyIcon}><Megaphone size={21} /></div>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
          <article>
            <div className={styles.strategyIcon}><ShieldCheck size={21} /></div>
            <span>04</span>
            <h3>Stay gated</h3>
            <p>No campaign, creative, landing page, pixel, form or live account should change until client approval, measurement repair and the pre-launch privacy gate are complete.</p>
          </article>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="positioning">
        <SectionHeading
          label="Positioning"
          title="See the risk. Act on the priorities. Prove implementation."
          copy="Position ErgoWorks as the workplace-ergonomics implementation partner for organisations that need to turn scattered concerns into a clear, practical and trackable programme."
        />
        <div className={styles.prose}>
          <h3>Core position</h3>
          <p>See the risk. Act on the priorities. Prove implementation.</p>
          <p>The commercial story is not “buy an assessment.” It is a path from risk visibility to prioritised action and implementation evidence across workstations, hybrid workplaces and manual tasks.</p>
          <div className={styles.calloutRow}><ShieldCheck size={20} /><span>This positioning does not promise injury prevention, WHS compliance, medical outcomes, reduced claims, or a quantified financial result.</span></div>
          <h3>Positioning statement</h3>
          <p>For WHS/HSE, HR/People &amp; Culture and Facilities teams that need a practical way to manage workplace-ergonomics priorities, ErgoWorks provides a defined path from risk visibility to prioritised action and implementation evidence—across workstations, hybrid workplaces and manual tasks.</p>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>See → Act → Prove</caption>
            <thead><tr><th>Stage</th><th>Buyer question</th><th>ErgoWorks answer</th><th>Controllable output</th></tr></thead>
            <tbody>{positioningStages.map(([stage, question, answer, output]) => <tr key={stage}><td>{stage}</td><td>{question}</td><td>{answer}</td><td>{output}</td></tr>)}</tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <h3>Buyer priorities</h3>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Buyer-specific emphasis and proof after verification</caption>
            <thead><tr><th>Buyer</th><th>Primary concern</th><th>Positioning emphasis</th><th>Useful proof after verification</th></tr></thead>
            <tbody>{buyerPriorities.map(([buyer, concern, emphasis, proof]) => <tr key={buyer}><td>{buyer}</td><td>{concern}</td><td>{emphasis}</td><td>{proof}</td></tr>)}</tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <h3>Trigger-to-outcome framing</h3>
          <p>The trigger can describe an organisational situation. It must not turn into a personal-health inference in Meta creative.</p>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Safe problem framing and outcome to sell</caption>
            <thead><tr><th>Trigger</th><th>Safe problem framing</th><th>Outcome to sell</th></tr></thead>
            <tbody>{triggers.map(([trigger, framing, outcome]) => <tr key={trigger}><td>{trigger}</td><td>{framing}</td><td>{outcome}</td></tr>)}</tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <p>“Discomfort complaints” may describe an organisational trigger. Meta ads must not infer that the person viewing the ad, or their employees, has a health condition.</p>
          <h3>Differentiation</h3>
          <ul>{differentiation.map((item) => <li key={item}>{item}</li>)}</ul>
          <p>Any use of awards, customer logos, a global FMCG client name, an enterprise-scale claim, a strong public review rating, named-company results or similar proof is <strong>client sign-off required</strong>.</p>
        </div>
      </section>

      <section className={styles.offerSection} id="offer">
        <SectionHeading
          label="Canonical offer registry"
          title="One low-friction entry, four ways to deepen the programme."
          copy="The offer names, eligibility, fulfilment promise and ladder remain client sign-off required before launch. The ladder moves from one defined workplace question to a repeatable programme without overstating outcomes."
        />
        <div className={styles.offerLadder}>
          {offers.map(([stage, title, copy], index) => (
            <article key={title}>
              <div className={styles.offerIndex}>{index + 1}</div>
              <div><span>{stage}</span><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
        <div className={styles.calloutRow}><ShieldCheck size={20} /><span>Every description of the Workplace Ergonomics Risk Snapshot carries: <strong>{snapshotCaveat}.</strong></span></div>
        <div className={styles.prose}>
          <h3>Primary entry offer</h3>
          <p><strong>Free 15-minute Workplace Ergonomics Risk Snapshot.</strong> A B2B-only conversation covering one defined workplace, workstation, hybrid-work or manual-task issue, followed by a written three-point summary of observations, priorities and a recommended next step. <strong>{snapshotCaveat}.</strong></p>
          <h3>Scope controls</h3>
          <ul>
            <li>Available only to organisations and workplace decision-makers.</li>
            <li>Limited to one clearly defined issue.</li>
            <li>Delivered through a 15-minute consultant conversation and a written three-point summary.</li>
            <li>Does not provide a statutory determination, medical opinion or formal assessment.</li>
            <li>Does not guarantee injury prevention, WHS compliance, reduced claims or financial savings.</li>
            <li>Capacity, eligibility, delivery method, response time and service geography require client confirmation before launch.</li>
          </ul>
          <h3>CTA copy block</h3>
          <p><strong>Request a free 15-minute Workplace Ergonomics Risk Snapshot.</strong> Bring one workplace-ergonomics issue. Receive a written three-point summary and a recommended next step. B2B only. <strong>{snapshotCaveat}.</strong></p>
          <p><strong>Short-form disclosure:</strong> B2B only. One issue. Includes a written three-point summary. <strong>{snapshotCaveat}.</strong> Keep this disclosure visible beside the CTA or form wherever space permits; it must not be hidden solely in terms and conditions.</p>
        </div>
        <div className={styles.stateList}>
          {paidOfferDetails.map((offer) => (
            <div key={offer.title}>
              <strong>{offer.title}</strong>
              <span>{offer.copy}<br /><br />{offer.items.join(" ")}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="messaging">
        <SectionHeading
          label="Messaging architecture"
          title="One narrative, adapted to the buyer’s question and the channel’s job."
          copy="Workplace-ergonomics programmes create value when teams can see the priorities, act consistently and document implementation."
        />
        <div className={styles.prose}>
          <h3>Message hierarchy</h3>
          <ol>
            <li>Training-intent demand head: Manual Handling Training.</li>
            <li>Strategic reframe: Start with the task, not a generic training lecture.</li>
            <li>Broader pathway: Workstation, hybrid-work and workplace-ergonomics priorities.</li>
            <li>Implementation promise: Prioritised actions, defined responsibilities and action-status evidence.</li>
            <li>Low-friction entry: B2B-only Workplace Ergonomics Risk Snapshot; {snapshotCaveat}.</li>
            <li>Ongoing capability: ErgoAssess-supported programme visibility.</li>
          </ol>
          <h3>Demand anchor</h3>
          <p>Manual handling training remains the current spend anchor and largest verified training-intent demand head at 2,700 Australian searches per month. Research also identifies an approximately 3,400-searches-per-month mixed-intent certificate/course pool and an approximately 780-searches-per-month care-sector opportunity. The training ad group represented 49% of Consulting Search spend in the last 30 days; the two expansion pockets remain gated and are not verified service fit.</p>
          <p>The term should lead Search message development and serve as an accessible entry point in Meta creative, while the landing page connects training to the wider path:</p>
          <p><strong>Review the task → identify priorities → tailor controls and training → record implementation.</strong></p>
          <p>The figures are search-demand estimates, not account impression forecasts.</p>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Messaging matrix by angle and channel</caption>
            <thead><tr><th>Angle</th><th>Google Search</th><th>Meta demand generation</th><th>Dedicated landing page</th><th>Future LinkedIn ABM</th></tr></thead>
            <tbody>{matrixRows.map(([angle, search, meta, lp, linkedin]) => <tr key={angle}><td>{angle}</td><td>{search}</td><td>{meta}</td><td>{lp}</td><td>{linkedin}</td></tr>)}</tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <h3>Channel-ready entry-offer copy</h3>
          <p><strong>Google Search:</strong> Free 15-Min Risk Snapshot. Discuss one workplace-ergonomics issue and receive a written three-point summary. B2B only. <strong>{snapshotCaveat}.</strong></p>
          <p><strong>Meta:</strong> If your team is reviewing a workplace-ergonomics issue, start with one clear next step. Request a free 15-minute B2B Risk Snapshot and receive a written three-point summary. <strong>{snapshotCaveat}.</strong></p>
          <p><strong>Landing page:</strong> Bring one workplace, workstation, hybrid-work or manual-task issue. In 15 minutes, an ErgoWorks consultant will help clarify the issue and follow up with a written three-point summary. B2B only. <strong>{snapshotCaveat}.</strong></p>
          <p><strong>Future LinkedIn:</strong> Give your WHS, HR or Facilities team a clearer starting point. Request a free 15-minute Workplace Ergonomics Risk Snapshot for one defined organisational issue and receive a written three-point summary. B2B only. <strong>{snapshotCaveat}.</strong></p>
        </div>
      </section>

      <section className={styles.channelsSection} id="search">
        <SectionHeading
          label="Google Search creative brief"
          title="Tighten relevance inside the existing Consulting Search engine."
          copy="Improve message match while preserving clear separation from Physiotherapy, ErgoEquip and consumer intent. These concepts are a production brief, not an audit of current creative."
        />
        <div className={styles.channelNotes}>
          <article><Search size={22} /><h3>Objective</h3><p>Protect demand capture, route each service theme to a relevant destination and qualify organisational buyers.</p></article>
          <article><ClipboardCheck size={22} /><h3>Evidence boundary</h3><p>The supplied evidence snapshot does not include longer search-term history, current RSAs, complete settings, Quality Score components or geo/device reports.</p></article>
          <article><Layers3 size={22} /><h3>Structure</h3><p>Use campaign-level negatives after reviewing actual search terms. Do not apply Consulting exclusions account-wide because the shared account also contains Physiotherapy.</p></article>
        </div>
        <div className={styles.prose}>
          <h3>Ad-group themes</h3>
          <ul>
            <li>Manual Handling Training.</li>
            <li>Manual Handling — Care Sector, gated by sector scope, negatives and geography.</li>
            <li>Certificate / Course — Mixed Intent, Search-only, Exact/Phrase and gated.</li>
            <li>Manual Handling — Online Delivery, Search-only.</li>
            <li>Manual Handling — Refresher.</li>
            <li>Ergonomic Office Consulting.</li>
            <li>Ergonomic Assessments, with Core informational intent separated from Geo and Remote groups.</li>
            <li>Workplace Ergonomics.</li>
            <li>Brand protection.</li>
            <li>ErgoAssess / ongoing programme management only if supported by consulting-intent query evidence; do not use SaaS-intent software terms as positive keywords.</li>
          </ul>
          <h3>RSA construction rules</h3>
          <ul>
            <li>Create at least 8 unique headlines and 3 descriptions per ad group.</li>
            <li>Aim for 12–15 genuinely distinct headlines where message quality permits.</li>
            <li>Keep headlines to 30 characters and descriptions to 90 characters.</li>
            <li>Use Good or Excellent Ad Strength as a diagnostic.</li>
            <li>Use minimal, strategic pinning; if pinning is necessary, provide two or three variants for each pinned position.</li>
            <li>Leave headline position three unpinned and do not pin all positions.</li>
            <li>Add at least four sitelinks and four callouts, plus structured snippets and relevant image assets.</li>
            <li>Maintain close keyword, ad and landing-page message match.</li>
            <li>Refresh or formally reassess Search creative every 8–12 weeks.</li>
            <li>Investigate creative or message-match deterioration if Quality Score drops by two or more points; Quality Score itself is a diagnosis flag, not a business KPI.</li>
          </ul>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>RSA angle library</caption>
            <thead><tr><th>Theme</th><th>Headline themes</th><th>Description themes</th></tr></thead>
            <tbody>{searchThemes.map(([theme, headlines, descriptions]) => <tr key={theme}><td>{theme}</td><td>{headlines}</td><td>{descriptions}</td></tr>)}</tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <h3>Guarded Search themes</h3>
          <p>The care-sector RSA set must not publish until sector scope is confirmed, the live aged-care, disability and healthcare negatives are reconciled, and onsite or remote geography is approved. It must qualify an organisational buyer and must not imply that the viewer or any individual has a disability, injury or health condition.</p>
          <p>The certificate/course set is Search-only, Exact/Phrase and gated. Do not publish until the approved participant-output wording is confirmed and signed off. Individual credential seekers are redirected; this theme is excluded from Meta.</p>
          <p>Online delivery is Search-only, with organisational framing for distributed or hybrid schedules. Never port it to Meta and do not use individual credential language. Refresher intent can connect to ErgoControl without implying that a particular cadence is mandated.</p>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Search asset themes</caption>
            <thead><tr><th>Asset type</th><th>Recommended assets</th></tr></thead>
            <tbody>{searchAssets.map(([type, assets]) => <tr key={type}><td>{type}</td><td>{assets}</td></tr>)}</tbody>
          </table>
        </div>
        <div className={styles.calloutRow}><ShieldCheck size={20} /><span><strong>Entry-offer asset rule:</strong> if the platform format cannot display the Snapshot caveat clearly and adjacent to the offer within the ad, do not mention or describe the Snapshot in that ad. A destination-page caveat does not cure an unqualified ad placement. Every Snapshot mention here carries: <strong>{snapshotCaveat}.</strong></span></div>
      </section>

      <section className={styles.docSection} id="meta">
        <SectionHeading
          label="Meta demand-generation creative brief"
          title="Create qualified awareness among organisational buyers."
          copy="Meta should not be optimised around cheap raw leads. The intended conversion is a qualified B2B enquiry or entry-offer request, supported by a clean measurement baseline and offline qualification feedback."
        />
        <div className={styles.prose}>
          <h3>Policy-safe messaging rules</h3>
          <ul>{metaRules.map((rule) => <li key={rule}>{rule}</li>)}</ul>
        </div>
        <div className={styles.calloutRow}><ShieldCheck size={20} /><span><strong>Mandatory guardrail:</strong> Meta must not imply a viewer or their staff has a health condition. Never guarantee injury prevention, compliance, claim reduction or financial savings.</span></div>
        <div className={styles.prose}>
          <h3>Launch creative architecture</h3>
          <p>Use at least five genuinely distinct creatives per ad set across at least three formats. The starting mix should include static image, short video and carousel. Collection is not necessary unless the offer structure and destination justify it.</p>
          <p>Minor colour or headline variations do not constitute distinct concepts. Concepts must differ in angle, visual story and value proposition.</p>
        </div>
        <div className={styles.roadmap}>
          {metaConcepts.map((concept) => (
            <article key={concept.number}>
              <div className={styles.phaseHead}><span>{concept.number}</span><b aria-hidden="true">{concept.number}</b></div>
              <h3>{concept.title}</h3>
              <p><strong>Hook:</strong> {concept.hook}</p>
              <p><strong>Narrative:</strong> {concept.narrative}</p>
              <p><strong>Formats:</strong> {concept.formats}</p>
              <p><strong>Baseline CTA:</strong> {concept.cta}</p>
            </article>
          ))}
        </div>
        <div className={styles.prose}>
          <h3>Gated post-baseline service-led CTA tests</h3>
          <p>Only after the entry-offer baseline has sufficient clean volume and qualified-lead evidence may service-led primary CTAs be tested against it. Use organisational framing and one applicable service CTA per test: request a manual-task programme scope; explore the implementation pathway; request a hybrid-work programme scope; discuss a workplace or fitout review; or explore ongoing programme management. These are post-baseline test variants, not launch creative, and must not be presented as simultaneous competing CTAs within an entry-offer execution.</p>
          <h3>Production specifications</h3>
          <ul>
            <li>Keep headlines below 40 characters, preferably within 27–40.</li>
            <li>Keep primary text below 125 characters where the required entry-offer caveat is not involved; the caveat takes precedence over brevity.</li>
            <li>Produce Feed creative at 1080 × 1350, 4:5; Stories/Reels at 1080 × 1920, 9:16; and carousel cards at 1080 × 1080, 1:1.</li>
            <li>Keep critical elements within the central 900 × 1000 px universal safe area for vertical adaptations.</li>
            <li>Keep essential Reels content away from the bottom 35%.</li>
            <li>Use H.264 video, AAC audio and MP4 delivery. Add captions to every video.</li>
            <li>Keep Stories/Reels concepts to 15 seconds maximum and Feed video to 30 seconds maximum for the initial set.</li>
            <li>Mention ErgoWorks within the first five seconds or at the performance CTA.</li>
            <li>Test Advantage+ Creative enhancements through controlled splits; do not assume automatic variations preserve regulated wording or caveats.</li>
          </ul>
          <h3>Refresh and fatigue rules</h3>
          <ul>{fatigueRules.map((rule) => <li key={rule}>{rule}</li>)}</ul>
          <p>These are operational diagnosis rules, not immediate pause or scale instructions. Decisions remain conditional until clean conversion tracking and a target cost per qualified lead are established.</p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="landing-page">
        <SectionHeading
          label="Dedicated landing-page message brief"
          title="Replace generic service pages with one modular, message-matched destination."
          copy="The page should support Manual Handling Training, workstation and ergonomic assessment, and hybrid or home-office programmes. Manual Handling Training is the first variant because it is the 2,700-searches-per-month Australian demand head and represented 49% of Consulting Search spend in the last 30 days."
        />
        <div className={styles.prose}>
          <h3>Page role and gated modules</h3>
          <p>Prepare care-sector, flexible online-team and refresher or recurring-programme modules, but do not publish them until the client confirms the service, delivery format and approved geography. The care module also requires reconciliation of the live aged-care, disability and healthcare negatives. The online module is Search-only and must never be used as a Meta angle. Refresher cadence, participant outputs and recurring-service framing remain client-sign-off-dependent.</p>
          <h3>Core structure</h3>
          <ol>
            <li>Intent-matched hero.</li>
            <li>Buyer-specific problem framing.</li>
            <li>See → Act → Prove outcome pathway.</li>
            <li>Relevant service or programme.</li>
            <li>Verified proof.</li>
            <li>Defined process and deliverables.</li>
            <li>Compliant entry-offer block with the adjacent caveat: {snapshotCaveat}.</li>
            <li>Two-step qualification form.</li>
            <li>Privacy and consent controls.</li>
            <li>FAQ and final CTA.</li>
          </ol>
          <h3>Hero directions</h3>
        </div>
        <div className={styles.stateList}>
          {lpHeroDirections.map(([variant, headline, copy]) => <div key={variant}><strong>{variant}</strong><span><strong>{headline}</strong><br />{copy}<br /><br /><strong>Primary CTA:</strong> Request a free 15-minute Workplace Ergonomics Risk Snapshot. <strong>{snapshotCaveat}.</strong></span></div>)}
        </div>
        <div className={styles.prose}>
          <h3>Post-baseline service-plan-primary tests</h3>
          <p>The service-plan-primary variants—Request a Training Plan, Request an Assessment Plan and Request a Hybrid Programme Scope—are not launch defaults. Test them only after each matching entry-offer-primary baseline has at least 30 valid lead-entry conversions and two complete conversion-lag cycles. Allocate traffic 50/50 within one intent-matched variant, change only the CTA hierarchy, and run for at least 14 days unless a compliance or tracking failure requires an earlier stop.</p>
          <p>Adopt a service-plan-primary variant only if it improves CRM-qualified-lead rate with no more than a 20% deterioration in cost per qualified lead; otherwise retain the entry-offer-primary baseline. Booked/held remain CRM stages, not platform events.</p>
          <h3>Form requirements</h3>
          <p><strong>Step one:</strong> First name, work email, company and role.</p>
          <p><strong>Step two:</strong> Team-size band, organisational need, timeframe and optional phone number.</p>
          <p><strong>Do not collect:</strong> injury details, diagnoses, pain or symptom information, disability or medical history, or workers-compensation case information.</p>
          <p>The form must separate consent required to respond to the enquiry from optional consent to receive future marketing.</p>
        </div>
        <div className={styles.calloutRow}><ShieldCheck size={20} /><span>The page, CMP, Consent Mode v2, default denied, with no client- or server-side analytics/advertising transmission before consent, Meta Pixel/CAPI plan, GA4 stream and GTM scope require AU privacy review before launch. Consulting data must remain isolated from Physiotherapy, ErgoEquip and Biosymm.</span></div>
      </section>

      <section className={styles.measurementSection} id="linkedin">
        <SectionHeading
          label="Future LinkedIn ABM brief"
          title="A later test for named accounts, not an initial dependency."
          copy="Consider LinkedIn only when contract value, target-account quality, sales capacity and budget justify the platform’s higher cost."
        />
        <div className={styles.measureGrid}>
          <article><Layers3 size={22} /><h3>Potential audiences</h3><p>Named-account lists; WHS/HSE; HR / People &amp; Culture; Facilities and Workplace Experience; Operations and Risk; and organisations undergoing consolidation, fitout, return-to-office or hybrid change.</p></article>
          <article><Megaphone size={22} /><h3>Recommended concepts</h3><p>Thought Leader Ad from a verified ErgoWorks expert; document ad on risk visibility to implementation evidence; single-image programme brief; short consultant video; and named-account fitout or hybrid-work message.</p></article>
          <article><ClipboardCheck size={22} /><h3>Launch conditions</h3><p>Allocate at least 30% of its test budget to Thought Leader Ads, test at least two formats, include video, refresh creative every 4–6 weeks, keep a professional operational tone and avoid unverified proof and personal-health implications.</p></article>
        </div>
        <div className={styles.calloutRow}><ShieldCheck size={20} /><span>Obtain <strong>client sign-off required</strong> before using any customer name, logo, testimonial, award, enterprise-scale claim, global FMCG client reference or strong public review rating.</span></div>
        <div className={styles.prose}>
          <h3>LinkedIn entry-offer copy</h3>
          <p>Give your WHS, HR or Facilities team a clearer starting point. Request a free 15-minute Workplace Ergonomics Risk Snapshot for one defined organisational issue and receive a written three-point summary. B2B only. <strong>{snapshotCaveat}.</strong></p>
        </div>
      </section>

      <section className={styles.docSection} id="proof">
        <SectionHeading
          label="Proof framework and approval status"
          title="Make implementation tangible without publishing unverified proof."
          copy="Use evidence of deliverables, coverage and workflow first. Every named proof asset, customer reference and quantified outcome remains gated until substantiated and approved."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Proof framework</caption>
            <thead><tr><th>Proof type</th><th>Proposed use</th><th>Status</th></tr></thead>
            <tbody>{proofRows.map(([type, use, status]) => <tr key={type}><td>{type}</td><td>{use}</td><td>{status}</td></tr>)}</tbody>
          </table>
        </div>
        <div className={styles.calloutRow}><ShieldCheck size={20} /><span>Customer logos, awards, named client references, enterprise-scale claims, strong public review ratings and quantified outcomes are <strong>client sign-off required</strong>. Quantified injury, claims or cost reduction is not recommended without robust substantiation and legal review.</span></div>
      </section>

      <section className={styles.roadmapSection} id="production">
        <SectionHeading
          label="Creative production priorities"
          title="Build the message system in the order buyers will experience it."
          copy="Do not begin with dozens of cosmetic variations. Each concept should differ in hook, buyer problem, visual mechanism and offer."
        />
        <div className={styles.roadmap}>
          {productionPriorities.map(([number, asset, purpose]) => (
            <article key={number}>
              <div className={styles.phaseHead}><span>Priority {number}</span><b aria-hidden="true">{number}</b></div>
              <h3>{asset}</h3>
              <p>{purpose}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.gatesSection} id="compliance">
        <div className={styles.gatesIntro}>
          <CircleAlert size={25} />
          <SectionHeading
            label="Compliance and pre-launch approval"
            title="These are launch gates, not tidy-up tasks."
            copy="If a gate is not satisfied, the affected creative, page, form or measurement layer stays off."
          />
          <p className={styles.planningOnly}>This brief authorises planning only. It does not authorise changes to live advertising, the website, CRM or tracking systems.</p>
        </div>
        <div className={styles.gatesList}>
          {complianceRows.map(([gate, requirement]) => <article key={gate}><span>{gate}</span><p>{requirement}</p></article>)}
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="data-required">
        <SectionHeading
          label="Not assessed / data required before implementation"
          title="The brief is ready for approval, not for unverified activation."
          copy="The supplied evidence supports conditional creative direction. Final build decisions still require live settings, asset, service-scope, proof, privacy and qualified-lead validation."
        />
        <div className={styles.prose}>
          <ul>
            <li>Export all active Search ads and assets by ad group; current RSAs, assets, pinning and Ad Strength are not included in the evidence snapshot.</li>
            <li>Complete the remaining 90-day query-history review before final restructuring.</li>
            <li>Export keyword-level Quality Score components and campaign settings covering geo, device, schedule, network and audiences.</li>
            <li>Classify certificate-term conversions before treating any planning economics as corporate-lead economics.</li>
            <li>Audit any future lookalike seed pool for individual or job-seeker enquiries misfiled as corporate leads.</li>
            <li>Establish asset-level CTR, CVR and time-series creative baselines; assess fatigue only after sufficient live delivery.</li>
            <li>Complete Meta account, audience, creative inventory, entry-offer operations, offer pricing and proof validation.</li>
            <li>Confirm landing-page technical ownership, build path, page-speed baseline and QA plan.</li>
            <li>Agree a clean primary conversion set, offline qualification loop, target cost per qualified lead and CAC ceiling.</li>
            <li>Complete Australian privacy review and document Consulting separation from Physiotherapy, ErgoEquip and Biosymm.</li>
            <li>Validate the LinkedIn account universe, economics and sales follow-up capacity before an ABM pilot.</li>
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p><FileText size={13} style={{ verticalAlign: "-2px", marginRight: ".4rem" }} />Confidential · For client review only</p>
      </footer>
    </main>
  );
}
