import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  CircleAlert,
  ClipboardCheck,
  Crosshair,
  FileCheck2,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  Target,
} from "lucide-react";
import styles from "../plan.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Landing Page",
  description: "Private, redacted landing-page wireframe and conversion specification.",
  robots: { index: false, follow: false },
};

const snapshotCaveat =
  "preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis";

const wireframe = [
  ["01", "Stripped header", "Legitimacy without exits", "Logo, Australia-wide workplace-ergonomics line (client sign-off required), optional phone link and one primary CTA; no full navigation, store or physiotherapy links."],
  ["02", "Hero", "Immediate ad relevance", "Exact service phrase in the H1, outcome-led subhead, one dominant CTA, short qualification line and a relevant workplace visual."],
  ["03", "Proof strip", "Reduce uncertainty", "Maximum three verified signals. Every proposed proof asset stays client sign-off required until substantiated and approved."],
  ["04", "Benefit blocks", "Explain controllable outputs", "Visibility, prioritisation and implementation—not guaranteed health, injury, compliance or claims outcomes."],
  ["05", "How it works", "Make delivery concrete", "Three or four steps with clear inputs, activities and buyer deliverables."],
  ["06", "Snapshot offer", "Provide a low-commitment next step", "State scope, recipient, output and the limitation adjacent to every mention."],
  ["07", "Service detail", "Support evidence-seeking buyers", "Variant-specific formats, likely outputs and suitable organisational use cases."],
  ["08", "Proof section", "Answer vendor-risk objections", "Credentials, approved examples, sample deliverables and testimonials only after verification and permission."],
  ["09", "FAQ", "Resolve operational objections", "Cover scope, geography, format, equipment independence, privacy and Snapshot limits."],
  ["10", "Final CTA and form", "Convert qualified interest", "Repeat the dominant CTA, embed the two-step form and explain what happens next."],
  ["11", "Minimal footer", "Provide legal and contact information", "Privacy, terms, business contact and consent-management links; no cross-sell."],
] as const;

const pageRules = [
  "One page variant per intent cluster. Training, assessment, software, physiotherapy and equipment must not compete as simultaneous actions.",
  "Use the exact service phrase from the ad in the H1 and naturally within the first screen. Headline, offer and CTA must meet the 100% message-match standard.",
  "Keep the Snapshot visibly B2B: organisation, workplace, WHS, HR, Facilities and team-size band are the qualifying frame.",
  "Keep the clickable phone number secondary to the form CTA. A sticky CTA is allowed only after the visitor has passed the hero.",
  "Do not collect health or injury narratives, personal-attribute messaging or open text that invites medical information.",
  "Do not claim that the service guarantees injury prevention, ensures WHS compliance, eliminates absenteeism or produces a stated reduction in claims.",
  "Use only controllable promises: defined scope, task review, practical training, documented observations, prioritised actions, manager guidance and implementation tracking.",
  "Keep Consulting analytics, pixels, GA4 stream, GTM scope, audiences and CRM mappings isolated from other business activity and Physiotherapy activity.",
  "Show a CMP without covering the headline, CTA or form; consent controls must not delay form interaction by more than one second. AU privacy review, CMP and consent implementation are pre-launch gates.",
  "Ship every LP variant as noindex,follow with a canonical to the closest existing service page. The review-pack page itself is noindex,nofollow.",
  "Geography is a launch blocker, not a passive sign-off item. Do not claim broader coverage than the live site until coverage is verified; local and national search intent needs a geo decision.",
] as const;

const variants = [
  {
    id: "manual-handling",
    label: "Variant 1 · Manual Handling Training",
    title: "Make manual handling training specific to the work being performed",
    hero: "Manual handling training for Australian workplaces. Connect practical training with the manual tasks, work patterns and control priorities present in the organisation.",
    proof: [
      "Australia-wide delivery — client sign-off required",
      "Named consultant qualifications and memberships — client sign-off required",
      "Approved training or manual-task client example — client sign-off required",
    ],
    benefits: [
      ["Training connected to real workplace tasks", "Scope training around the task categories, equipment, work patterns and operational setting. Buyer receives a defined training scope, agreed audience and documented delivery plan."],
      ["Practical priorities for workers and managers", "Give participants and supervisors a shared language for manual-task factors and practical control options. Tailored materials and any participant records remain client sign-off required."],
      ["A pathway beyond the session", "Where the scope needs more than training, identify task review, control planning, supervisor guidance or follow-up as a clear next step."],
    ],
    gated: [
      ["Certificate-intent reframe", "Corporate certificate-seekers can be routed to organisational scope using approved participant attendance or training-completion-record language. Individual certificate-seekers are routed out politely; no form push."],
      ["Care-sector team training", "Publish only after sector scope, search-negative reconciliation and onsite/remote geography are approved. Never imply that the viewer or a participant has a disability, injury or health condition."],
      ["Online and refresher delivery", "Online capability, programme eligibility, refresher cadence, participant outputs and geography all require client sign-off. Do not promise individual e-learning, credentials or a mandated frequency."],
    ],
    steps: [
      ["Define the tasks and audience", "Confirm workplace, task types, participant groups, constraints and desired outputs."],
      ["Scope the programme", "Agree delivery format, session length, site requirements, content boundaries and any observation inputs."],
      ["Deliver practical training", "After delivery-format and service-scope sign-off, use examples relevant to the work being performed."],
      ["Document next steps", "Provide approved materials and any scoped observations or priority actions; attendance records remain client sign-off required."],
    ],
    faq: [
      ["Is this a generic lifting course?", "No generic promise: content is scoped to the organisation, setting and agreed task categories."],
      ["Can it be delivered onsite or virtually?", "Potentially, but capability, geography and format must be confirmed before publication."],
      ["Do participants receive a certificate?", "Use only client-approved participant attendance or training-completion-record wording; do not imply individual accredited certification."],
      ["Will it ensure WHS compliance or prevent injuries?", "No such guarantee is made. The deliverable is defined training, documented observations and practical recommendations within scope."],
      ["What should the buyer provide?", "Organisation, team-size band, broad workplace need and timeframe—never employee injuries, symptoms, diagnoses or medical histories."],
    ],
    finalTitle: "Make the next step for manual handling training clear",
    finalCopy: "Invite one defined organisational question and return a written three-point summary; the proposal confirms exact inclusions, delivery format and turnaround.",
  },
  {
    id: "assessment",
    label: "Variant 2 · Workstation / Ergonomic Assessment",
    title: "Turn workstation observations into a prioritised action plan",
    hero: "Workstation and workplace ergonomic assessments for WHS, HR and Facilities teams. Define the right assessment scope, document observations and prioritise practical actions across workstations, teams or sites.",
    proof: [
      "Australian workplace focus — client sign-off required",
      "Named assessor qualifications and memberships — client sign-off required",
      "Approved sample report or assessment case study — client sign-off required",
    ],
    benefits: [
      ["Define the right assessment scope", "Clarify whether the need is an individual workstation review, group programme, site project or ongoing workflow. Buyer receives a documented scope aligned to cohort, locations and outputs."],
      ["Prioritise practical actions", "Translate observations into next steps for employees, managers, WHS and Facilities stakeholders, with reporting and implementation responsibilities."],
      ["Create a consistent record", "Use repeatable assessment and reporting documentation to support internal follow-up without representing it as compliance certification."],
    ],
    gated: [
      ["Employee-level outputs", "Do not promise individual reports, risk ratings or sensitive data handling until the exact service scope, privacy workflow and reporting boundaries are approved."],
      ["Delivery and geography", "Onsite or virtual delivery, Australia-wide coverage, scheduling and turnaround remain client sign-off required until verified."],
      ["Equipment recommendations", "Recommendations may be relevant but must be independently justified by the agreed scope; do not make a purchase or equipment-store destination the page action."],
    ],
    steps: [
      ["Confirm the workplace need", "Identify assessment type, cohort, locations, delivery constraints and reporting audience."],
      ["Agree on assessment delivery", "Confirm format, participant communications, scheduling and data-handling boundaries."],
      ["Assess and document", "Record observations, recommendations and action priorities within the approved scope."],
      ["Debrief and follow up", "Provide agreed individual guidance, manager debrief, summary reporting or implementation review."],
    ],
    faq: [
      ["What types of assessment are possible?", "Potential formats include individual workstation, group, onsite, virtual and broader workplace programmes; scope decides the fit."],
      ["Can one employee enquire?", "Potentially, but the advertising pathway is for organisational buyers and must not collect medical or injury detail."],
      ["What will the organisation receive?", "Only approved proposal inclusions should be promised; possible outputs include observations, prioritised actions, summary reporting and a manager debrief."],
      ["Does assessment certify WHS compliance?", "No. It provides scoped observations, documentation and recommendations, not a guarantee or certification of compliance."],
      ["How is employee information handled?", "The advertising form collects organisational contact and qualification data only; employee-level workflows require separate governance."],
    ],
    finalTitle: "Get a clearer assessment scope",
    finalCopy: "Use the first conversation to decide between an individual review, assessment sprint or broader programme before committing to rollout.",
  },
  {
    id: "hybrid",
    label: "Variant 3 · Hybrid / Home-office Ergonomics",
    title: "Build a consistent approach to hybrid and home-office ergonomics",
    hero: "Hybrid and home-office ergonomics for organisations. Define assessment coverage, employee guidance, action priorities and reporting across distributed workforces.",
    proof: [
      "Hybrid, home-office and virtual delivery capability — client sign-off required",
      "Named consultant qualifications — client sign-off required",
      "Approved distributed-workforce example — client sign-off required",
    ],
    benefits: [
      ["Consistent guidance across locations", "Create a defined process for employees working across offices, homes or multiple sites, with agreed workflow and participant communications."],
      ["Prioritised action for workplace teams", "Give WHS, HR and Facilities stakeholders a structured view of observations and follow-up actions, with clear ownership."],
      ["A scalable delivery model", "Combine virtual or onsite methods, structured data collection and manager reporting around workforce size, geography and delivery capacity."],
    ],
    gated: [
      ["Current capability", "The public home-working material may reflect an earlier offer. Do not publish duration, staffing, checklist inclusions or turnaround commitments until current capability is confirmed."],
      ["Virtual, onsite and rollout capacity", "Delivery model, cohort coverage, pilot structure, geography and staged-rollout capacity require client sign-off before launch."],
      ["Employee-level information", "The advertising form must not collect injuries, symptoms, diagnoses, medical histories or free-text health narratives; governed assessment data belongs in a separate workflow."],
    ],
    steps: [
      ["Define coverage", "Confirm cohort, locations, work patterns, stakeholders and desired outputs."],
      ["Design the workflow", "Agree participant communications, assessment format, scheduling, escalation boundaries and reporting."],
      ["Deliver assessments and guidance", "Run approved onsite or virtual activities and provide the agreed employee-level guidance."],
      ["Prioritise organisational follow-up", "Provide summary, action priorities and an implementation-review pathway."],
    ],
    faq: [
      ["Is the programme only for full-time home workers?", "No. It can potentially cover hybrid work, home-office cohorts, return-to-office programmes or mixed locations."],
      ["Are assessments virtual or onsite?", "Either may be appropriate; workforce, location, assessment requirement and scope decide the model."],
      ["Can a pilot precede a larger rollout?", "A pilot may validate workflow, communications and reporting before broader implementation, subject to scope and capacity."],
      ["What can managers receive?", "Possible outputs include participation, completion, recurring observations and prioritised organisational actions without medical or injury details."],
      ["Does the programme guarantee a compliant home-office setup?", "No. It provides defined assessment, guidance and reporting outputs, but does not guarantee or certify compliance."],
    ],
    finalTitle: "Give the hybrid-work programme a clear starting point",
    finalCopy: "Start with one defined home-office, hybrid-work or return-to-office question and use the output to choose a pilot, sprint or broader rollout scope.",
  },
] as const;

const proofRows = [
  ["Hero proof strip", "One credential, one delivery signal and one relevant client output", "Client sign-off required until approval"],
  ["Beside first CTA", "Named consultant or sample deliverable", "Client sign-off required"],
  ["After How it works", "Relevant case study or anonymised action-plan example", "Client sign-off required"],
  ["Beside form", "Privacy reassurance and verified response process", "Client sign-off required for operational wording"],
  ["Final CTA", "Short approved testimonial or verified review statement", "Client sign-off required"],
] as const;

const formStepOne = [
  ["First name", "Text", "Required", "Do not request surname unless CRM matching requires it."],
  ["Work email", "Email", "Required", "Use the email keyboard on mobile and provide inline validation."],
  ["Company / organisation", "Text", "Required", "Supports B2B qualification."],
  ["Role", "Text or structured select", "Required", "WHS/HSE, HR/People, Facilities/Workplace, Operations, Leadership, Procurement or Other."],
] as const;

const formStepTwo = [
  ["Team-size band", "Single select", "Required", "1–25; 26–100; 101–500; 500+"],
  ["Primary need", "Single select", "Required", "Manual handling training; manual-task review; workstation/office assessment; hybrid/home-office programme; return-to-office/workplace project; ongoing assessment/reporting; not sure yet."],
  ["Timeframe", "Single select", "Required", "Exploring options; within 3 months; 3–6 months; more than 6 months."],
  ["Phone number", "Telephone", "Optional", "Include only if consultant phone follow-up is operationally supported; use telephone keyboard on mobile."],
] as const;

const consentRows = [
  ["Required service-enquiry acknowledgement", "Unticked by default; required", "I agree that ErgoWorks may use the details supplied to respond to this enquiry and arrange the requested Snapshot.", "Link the use notice to the privacy collection notice; {caveat}"],
  ["Optional marketing consent", "Unticked by default; optional", "I would also like to receive workplace-ergonomics insights and service updates from ErgoWorks. I can unsubscribe at any time.", "The enquiry must submit when this box is unticked; retain timestamp, notice version and source."],
] as const;

const validationRows = [
  ["Field feedback", "Show inline validation next to the affected field."],
  ["Progressive disclosure", "Preserve completed Step 1 fields when Step 2 validation fails; allow return to Step 1 without data loss."],
  ["Qualification integrity", "Do not use deceptive preselected answers or automatically reject legitimate non-corporate work domains; flag them for qualification."],
  ["Hidden attribution", "Store campaign, variant, form-version and click-ID fields without exposing them as user questions."],
  ["Submission safety", "Prevent duplicate submissions while processing; fire no lead conversion on button click or Step 1 completion."],
  ["Accessibility and confirmation", "Provide an accessible success state and confirmation email; ensure the thank-you state cannot be refreshed to create duplicate conversions."],
  ["Data boundary", "No injury-history fields, pain or symptom questions, diagnosis or treatment history, workers’ compensation status, return-to-work medical details, employee narrative or free-text health prompt."],
] as const;

const ctaOptions = [
  ["Primary Snapshot", "Get my free 15-minute Workplace Ergonomics Risk Snapshot", snapshotCaveat],
  ["Primary Snapshot", "Request a free 15-minute Workplace Ergonomics Risk Snapshot", snapshotCaveat],
  ["Primary Snapshot", "Start with a free 15-minute Workplace Ergonomics Risk Snapshot", snapshotCaveat],
  ["Manual Handling Training", "Scope a manual-handling programme", "High-intent Search test; use only when that exact service action appears in the ad."],
  ["Manual Handling Training", "Discuss training for our workplace", "High-intent Search test; route into the same two-step enquiry flow."],
  ["Assessment", "Request a workplace assessment plan", "Service-specific test; do not present it as the Snapshot unless the adjacent limitation is displayed."],
  ["Assessment", "Scope our workstation assessments", "Service-specific test; keep assessment language in the ad, H1, subhead and CTA."],
  ["Hybrid / Home-office", "Plan a hybrid-work assessment programme", "Service-specific test; retain organisational framing."],
  ["Hybrid / Home-office", "Discuss a home-office rollout", "Service-specific test; use only where delivery scope is approved."],
] as const;

const messageMatchRows = [
  ["Search: manual handling training", "Make manual handling training specific to the work being performed", "Snapshot CTA with adjacent limitation, or the exact service-scope CTA in the ad", "Manual handling training", "Repeat the service phrase, offer and CTA; certificate-intent traffic sees the disqualifier/reframe."],
  ["Search: manual-task programme", "Connect manual-task priorities with practical workplace action", "Service-scope CTA or Snapshot CTA with adjacent limitation", "Manual-task review", "Do not route to a generic training, homepage or equipment destination."],
  ["Search: ergonomic / workstation assessment", "Turn workstation observations into a prioritised action plan", "Snapshot CTA with adjacent limitation, or workplace assessment-plan CTA", "Workstation / office assessment", "Assessment language must appear in ad, H1, subhead and CTA."],
  ["Search: home-office assessment", "Build a consistent approach to hybrid and home-office ergonomics", "Snapshot CTA with adjacent limitation, or home-office rollout CTA", "Hybrid / home-office programme", "Use the home-office variant, not a generic assessment page."],
  ["Meta: manual-task education", "Make manual handling training specific to the work being performed", "Snapshot CTA with adjacent limitation", "Manual handling training", "Creative and page use the same workplace setting and organisational frame."],
  ["Meta: workstation programme", "Turn workstation observations into a prioritised action plan", "Snapshot CTA with adjacent limitation", "Workstation / office assessment", "Avoid personal-condition language in both creative and page."],
  ["Meta: hybrid or distributed workforce", "Build a consistent approach to hybrid and home-office ergonomics", "Snapshot CTA with adjacent limitation", "Hybrid / home-office programme", "Never imply a viewer or their staff has a health condition."],
  ["Manual handling certificate: individual intent", "Certificate disqualifier/reframe block", "Route individuals out politely; no Snapshot push", "None", "Treat exact individual phrasings as negative-keyword candidates."],
  ["Manual handling certificate: mixed or online intent", "Variant 1 with certificate block visible", "Snapshot CTA with adjacent limitation", "Manual handling training", "Treat buyer type as unclassified until CRM classification; participant-record language remains client sign-off required."],
  ["Third-party RTO / competitor terms", "Assessment or Manual Handling variant H1", "Snapshot CTA with adjacent limitation", "Per variant", "No competitor names on-page; generic terms are exclusion candidates, not mapping candidates."],
  ["Canberra or other geo terms", "Assessment variant with geo-dynamic treatment", "Snapshot CTA with adjacent limitation", "Workstation / office assessment", "Gated on intent and conversion-quality checks; no fourth variant until the geo decision is made."],
  ["Remarketing, if reactivated", "Return to the previously viewed service variant", "Preserve the same CTA and limitation", "Preserve prior variant", "Do not send every audience to one generic page."],
] as const;

const performanceRows = [
  ["Largest Contentful Paint", "Under 2.5s", "2.5–4.0s", "Over 4.0s"],
  ["Interaction to Next Paint", "Under 200ms", "200–500ms", "Over 500ms"],
  ["Cumulative Layout Shift", "Under 0.1", "0.1–0.25", "Over 0.25"],
  ["Time to Interactive", "Under 3.0s", "3.0–5.0s", "Over 5.0s"],
  ["Page weight", "Under 2MB", "2–5MB", "Over 5MB"],
] as const;

const eventRows = [
  ["Snapshot request — free 15-minute Workplace Ergonomics Risk Snapshot", "snapshot_request", "CRM-confirmed form submission", "Initial Primary", "Initial website Lead optimisation event"],
  ["Direct enquiry", "direct_enquiry", "CRM-confirmed form submission", "Initial Primary", "Initial website Lead optimisation event"],
  ["Call connected", "call_connected", "Call-tracking platform", "Secondary", "Reporting only"],
  ["Qualified call", "qualified_call", "CRM/call disposition applying the approved qualification rule", "Primary only via qualified import once reliable", "Send through CAPI; optimise only after reliable volume"],
  ["Qualified lead", "lead_qualified", "CRM stage", "Secondary while validated; future Primary", "Future QualifiedLead / conversion-leads signal"],
  ["Proposal", "proposal_sent", "CRM stage", "Secondary", "CAPI reporting / custom audience"],
  ["Won", "closed_won", "Finance-approved CRM stage", "Value-bearing secondary initially", "CAPI value event and audience exclusion"],
] as const;

const testOrder = [
  ["01", "Dedicated message-matched page versus current generic destination", "Test stripped navigation versus 30+ links, Snapshot offer versus bare enquiry form, and certificate block versus none. The control is fast but conversion-weak, not slow."],
  ["02", "Snapshot CTA versus service-specific scope CTA", "Judge qualified-lead and held-conversation outcomes, not raw form fills alone."],
  ["03", "Manual Handling hero copy", "Use a service-phrase and organisational-workplace hypothesis."],
  ["04", "Workstation / Assessment hero copy", "Use an observation-to-action-plan hypothesis."],
  ["05", "Hybrid / Home-office hero copy", "Use a distributed-workforce consistency hypothesis."],
  ["06", "Proof beside hero CTA versus after How it works", "Only verified and permissioned proof is eligible."],
  ["07", "Optional phone field versus no phone field", "Run only if phone follow-up is operationally supported."],
  ["08", "Calendar after submission versus consultant follow-up", "Run only after routing and capacity are approved."],
  ["09", "Two-step form versus shorter single-step control", "Test only after a clean two-step baseline exists."],
] as const;

const acceptanceChecklist = [
  "The ad, H1, offer and CTA match exactly; only one dominant CTA appears throughout each variant.",
  `The Snapshot limitation appears every time the offer is presented: ${snapshotCaveat}.`,
  "No copy guarantees injury prevention, compliance, claims reduction or medical outcomes.",
  "No copy implies that the viewer or an employee has a health condition.",
  "No form field requests injury, symptom, diagnosis or medical information; no injury-history fields are permitted.",
  "Enquiry acknowledgement and optional marketing consent are separate, with marketing unticked by default.",
  "All proof is verified, permissioned and approved; pending proof stays client sign-off required.",
  "No equipment-store, allied-health or Physiotherapy link, tag, audience or conversion contaminates the page.",
  "OAIC APP 3 review, CMP and consent behaviour are approved and tested.",
  "Mobile tap, font, form and banner requirements pass without obscuring the CTA or consent controls.",
  "Performance thresholds pass and the new LP matches or beats the live page’s LCP of 2.0s.",
  "Click IDs and UTMs reach the CRM; Pixel/CAPI events deduplicate correctly.",
  "snapshot_request or direct_enquiry fires once after successful submission; CRM stages support qualified-lead feedback.",
  "Thank-you state, optional calendar path, response wording and delivery-capacity claims are operationally approved.",
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

function SnapshotOffer({ detail, cta }: { detail: string; cta: string }) {
  return (
    <div className={styles.calloutRow}>
      <ShieldCheck size={20} />
      <p>
        <strong>{cta}</strong> {detail} <strong>{snapshotCaveat}.</strong>
      </p>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private landing-page appendix</div>
        </nav>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Appendix A · Landing page system</p>
            <h1>Make every workplace-ergonomics click feel like the right next step.</h1>
            <p className={styles.heroCopy}>
              Three message-matched variants, one low-friction B2B offer, and a two-step qualification path. The design is built to improve qualified pipeline—not to add another generic destination.
            </p>
          </div>
          <aside className={styles.summary}>
            <p>Hero visual · representative only</p>
            <div className={styles.lpMock} aria-label="Browser mock of a message-matched landing page">
              <div className={styles.browserTop}>
                <i aria-hidden="true" /><i aria-hidden="true" /><i aria-hidden="true" />
                <span>message-matched workplace route</span>
              </div>
              <div className={styles.mockBody}>
                <div className={styles.mockBrand}>Ergo<span>Works</span></div>
                <div className={styles.mockTag}>WORKPLACE ERGONOMICS · B2B</div>
                <h3>Make the next step clear.</h3>
                <p>One defined workplace question. A practical path to scope and action.</p>
                <div className={styles.mockButton}>Get the next step <ArrowRight size={16} /></div>
                <small>{snapshotCaveat}.</small>
              </div>
            </div>
          </aside>
        </div>
        <a className={styles.scrollCue} href="#purpose"><ArrowDown size={17} /> Read the conversion objective</a>
      </header>

      <section className={styles.docSection} id="purpose">
        <SectionHeading
          label="Purpose and conversion objective"
          title="One long-form system, three message-matched routes."
          copy="The case for a dedicated landing page is message match, offer and form—not speed. The live destinations are already technically strong; the new system must not regress the baseline while making the next action clearer."
        />
        <div className={styles.prose}>
          <p>
            Build one navigation-reduced landing-page system for paid traffic, with variants for Manual Handling Training, Workstation / Ergonomic Assessment, and Hybrid / Home-office Ergonomics. Each page replaces a generic destination for one intent cluster and keeps the buyer in an organisational frame.
          </p>
          <p>
            The commercial objective is cost per qualified lead, progressing to cost per held consultation and pipeline generated. Newsletter sign-ups, unqualified form completions and other soft actions are not success metrics.
          </p>
          <ul>
            <li>Launch-default CTA: a free 15-minute Workplace Ergonomics Risk Snapshot for one defined organisational workplace question, with a written three-point summary.</li>
            <li>Service-plan-primary variants are post-baseline tests, not the default launch path.</li>
            <li>Proof, geography, delivery format and operational wording remain client sign-off required until verified.</li>
          </ul>
        </div>
        <SnapshotOffer detail="is the low-commitment B2B entry point for one defined workplace question, followed by a written three-point summary. It is" cta="The free 15-minute Workplace Ergonomics Risk Snapshot" />
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="wireframe">
        <SectionHeading
          label="Modular wireframe"
          title="A shared conversion spine, adapted to each intent cluster."
          copy="Only the hero, benefit emphasis, process language, proof selection, FAQs and form defaults change between variants."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Required page modules</caption>
            <thead><tr><th>Order</th><th>Module</th><th>Purpose</th><th>Required execution</th></tr></thead>
            <tbody>
              {wireframe.map(([order, module, purpose, execution]) => (
                <tr key={order}><td>{order}</td><td>{module}</td><td>{purpose}</td><td>{execution}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <h3>Page-level rules</h3>
          <ul>{pageRules.map((rule) => <li key={rule}>{rule}</li>)}</ul>
        </div>
        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p><strong>Compliance frame:</strong> no guaranteed injury prevention, WHS compliance or claims reduction. Meta must not imply a viewer or their staff has a health condition. OAIC APP 3 and consent controls are launch gates.</p>
        </div>
      </section>

      <section className={styles.lpSection} id="variants">
        <div className={styles.lpCopy}>
          <SectionHeading
            label="Three variants"
            title="One offer system, three reasons to start a conversation."
            copy="The executive digest below keeps representative copy blocks and decision gates visible without turning the review page into a production copy deck."
          />
          <p>Every variant repeats the same dominant entry point, keeps the phone link secondary, and puts the qualification question in a B2B workplace context.</p>
          <ul>
            {variants.map((variant) => <li key={variant.id}><Check size={17} /> {variant.label}</li>)}
          </ul>
        </div>
        <div className={styles.lpMock} aria-hidden="true">
          <div className={styles.browserTop}><i /><i /><i /><span>variant → form → CRM</span></div>
          <div className={styles.mockBody}>
            <div className={styles.mockBrand}>Ergo<span>Works</span></div>
            <div className={styles.mockTag}>THREE ROUTES · ONE MEASUREMENT MODEL</div>
            <h3>Match the need. Qualify the next step.</h3>
            <p>Training, assessment or hybrid-work programme language stays aligned from ad to form.</p>
            <div className={styles.mockButton}>Request a conversation <ArrowRight size={16} /></div>
            <small>{snapshotCaveat}.</small>
          </div>
        </div>
      </section>

      {variants.map((variant, index) => (
        <section className={index % 2 === 0 ? styles.docSection : `${styles.docSection} ${styles.alt}`} id={variant.id} key={variant.id}>
          <SectionHeading label={variant.label} title={variant.title} copy={variant.hero} />

          <div className={styles.prose}>
            <h3>Hero and proof strip</h3>
            <p><strong>Representative hero:</strong> “{variant.title}.” The first screen keeps the exact service phrase, one dominant CTA, organisational qualification line and secondary phone link together.</p>
            <ul>{variant.proof.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>

          <div className={styles.stateList}>
            {variant.benefits.map(([title, copy]) => <div key={title}><strong>{title}</strong><span>{copy}</span></div>)}
          </div>

          <div className={styles.gatesSection} style={{ margin: "3rem 0", padding: "2.5rem clamp(1.25rem, 4vw, 3rem)" }}>
            <div className={styles.gatesIntro}>
              <SectionHeading label="Gated modules" title="Publish only what the client has approved." copy="These are production gates, not implied current capabilities." />
            </div>
            <div className={styles.gatesList}>
              {variant.gated.map(([title, copy]) => <article key={title}><span>{title}</span><p>{copy}</p></article>)}
            </div>
          </div>

          <div className={styles.prose}>
            <h3>How it works</h3>
            <p>Representative process language: inputs are confirmed first, the delivery format is scoped, activities stay within the approved boundary, and the buyer receives documented next steps.</p>
          </div>
          <div className={styles.stateList}>
            {variant.steps.map(([title, copy], stepIndex) => <div key={title}><strong>{stepIndex + 1}. {title}</strong><span>{copy}</span></div>)}
          </div>

          <SnapshotOffer detail={variant.finalCopy} cta="Request a free 15-minute Workplace Ergonomics Risk Snapshot" />

          <div className={styles.prose}>
            <h3>FAQ digest</h3>
            <ul>{variant.faq.map(([question, answer]) => <li key={question}><strong>{question}</strong> {answer}</li>)}</ul>
            <h3>Final CTA</h3>
            <p><strong>{variant.finalTitle}.</strong> Repeat the same dominant offer in the final block, show what happens next, and keep any response-time or delivery-capacity wording subject to operational approval.</p>
          </div>
        </section>
      ))}

      <section className={styles.docSection} id="proof">
        <SectionHeading
          label="Proof placement and redaction"
          title="Credibility supports the claim only when the evidence is approved."
          copy="Named proof is abstracted on this review page. The production LP may use the underlying asset only after substantiation, written permission and client sign-off."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Proof placement plan</caption>
            <thead><tr><th>Placement</th><th>Proof needed</th><th>Rule</th></tr></thead>
            <tbody>{proofRows.map(([placement, proof, rule]) => <tr key={placement}><td>{placement}</td><td>{proof}</td><td>{rule}</td></tr>)}</tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <h3>Abstracted proof inventory</h3>
          <ul>
            <li>Consultant names, qualifications, memberships, Australia-wide coverage, customer logos, participant figures, site figures, geographic rollout figures and quantified results — client sign-off required.</li>
            <li>A global FMCG client reference, ASX-listed enterprise-client claim, strong public review rating and recognised corporate awards — client sign-off required.</li>
            <li>Proof must demonstrate credibility, scope and deliverables; it must not imply guaranteed injury prevention, compliance or financial outcomes.</li>
          </ul>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="form">
        <SectionHeading
          label="Two-step form specification"
          title="Progressive disclosure for qualified organisational enquiries."
          copy="The complete flow has seven qualification fields plus separate consent controls. It must optimise for useful organisational context without collecting sensitive health information."
        />
        <div className={styles.calloutRow}>
          <FileCheck2 size={20} />
          <p><strong>Form header:</strong> Request a free 15-minute Workplace Ergonomics Risk Snapshot. For one defined organisational workplace question, with a written three-point summary. <strong>{snapshotCaveat}.</strong><br />Progress: Step 1 of 2 — Your details · Step 2 of 2 — Workplace need.</p>
        </div>

        <div className={styles.tableScroll}>
          <table>
            <caption>Step 1 of 2 — Your details</caption>
            <thead><tr><th>Field</th><th>Type</th><th>Requirement</th><th>Notes</th></tr></thead>
            <tbody>{formStepOne.map(([field, type, requirement, notes]) => <tr key={field}><td>{field}</td><td>{type}</td><td>{requirement}</td><td>{notes}</td></tr>)}</tbody>
          </table>
        </div>
        <p className={styles.prose}>Step CTA: <strong>Continue to workplace details</strong>. Microcopy: “Two short steps. Please provide organisational details only—do not include employee injuries, symptoms, diagnoses or medical information.”</p>

        <div className={styles.tableScroll}>
          <table>
            <caption>Step 2 of 2 — Workplace need</caption>
            <thead><tr><th>Field</th><th>Type</th><th>Requirement</th><th>Options / notes</th></tr></thead>
            <tbody>{formStepTwo.map(([field, type, requirement, options]) => <tr key={field}><td>{field}</td><td>{type}</td><td>{requirement}</td><td>{options}</td></tr>)}</tbody>
          </table>
        </div>

        <div className={styles.tableScroll}>
          <table>
            <caption>Consent controls</caption>
            <thead><tr><th>Control</th><th>State</th><th>Exact copy</th><th>Implementation rule</th></tr></thead>
            <tbody>{consentRows.map(([control, state, copy, rule]) => <tr key={control}><td>{control}</td><td>{state}</td><td>{copy}</td><td>{rule.replace("{caveat}", snapshotCaveat + ".")}</td></tr>)}</tbody>
          </table>
        </div>

        <div className={styles.tableScroll}>
          <table>
            <caption>Validation and interaction</caption>
            <thead><tr><th>Requirement</th><th>Specification</th></tr></thead>
            <tbody>{validationRows.map(([requirement, specification]) => <tr key={requirement}><td>{requirement}</td><td>{specification}</td></tr>)}</tbody>
          </table>
        </div>

        <div className={styles.tableScroll}>
          <table>
            <caption>Submit and thank-you state</caption>
            <thead><tr><th>Moment</th><th>Required copy / behaviour</th></tr></thead>
            <tbody>
              <tr><td>Submit CTA</td><td><strong>Request my free 15-minute Workplace Ergonomics Risk Snapshot</strong><br />{snapshotCaveat}.</td></tr>
              <tr><td>Heading</td><td><strong>Your request has been received</strong></td></tr>
              <tr><td>Confirmation</td><td>Review the organisational details supplied and confirm whether the question is suitable for the free 15-minute Workplace Ergonomics Risk Snapshot. {snapshotCaveat}.</td></tr>
              <tr><td>Primary next step</td><td>Optional calendar selection, if consultant capacity and routing support it.</td></tr>
              <tr><td>Secondary next step</td><td>Confirm that the nominated person will be contacted. Do not automatically subscribe the user to marketing or make a newsletter sign-up the primary action.</td></tr>
            </tbody>
          </table>
        </div>
        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p><strong>Privacy boundary:</strong> OAIC APP 3 applies. No injury-history fields, pain or symptom questions, diagnosis or treatment history, workers’ compensation status, return-to-work medical details, employee name or identifiable employee narrative, or free-text health prompts. Use a separate governed workflow for employee-level assessment or return-to-work information.</p>
        </div>
      </section>

      <section className={styles.channelsSection} id="cta">
        <SectionHeading
          label="CTA language options"
          title="Make the first step concrete without overpromising."
          copy="All Snapshot CTAs require adjacent limitation copy. Service-specific CTA tests use the same two-step enquiry flow but must not be presented as the Snapshot unless that limitation is displayed."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Approved CTA candidates and use</caption>
            <thead><tr><th>Variant / role</th><th>CTA option</th><th>Use / limitation</th></tr></thead>
            <tbody>{ctaOptions.map(([variant, cta, use]) => <tr key={`${variant}-${cta}`}><td>{variant}</td><td>{cta}</td><td>{use === snapshotCaveat ? `${use}.` : use}</td></tr>)}</tbody>
          </table>
        </div>
        <div className={styles.channelNotes}>
          <article><h3>Keep</h3><p>One dominant CTA, a full-width mobile action and the same headline, offer and CTA across ad, page and form.</p></article>
          <article><h3>Avoid</h3><p>Generic “Submit”, “Contact us” and “Learn more” actions, plus language that promises pain relief, injury prevention, compliance, a safer workplace or a stated claims reduction.</p></article>
          <article><h3>Secondary</h3><p>Keep a clickable phone link available only as a secondary action and only when phone follow-up is operationally supported.</p></article>
        </div>
      </section>

      <section className={styles.docSection} id="message-match">
        <SectionHeading
          label="Message match"
          title="The page should feel like the ad continued."
          copy="Target 100% alignment across headline, offer and CTA. Loose thematic relevance is not enough; a generic page would be a weak control, and a mismatch should score zero."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Traffic intent to page treatment</caption>
            <thead><tr><th>Traffic source or intent</th><th>Required H1</th><th>Offer / CTA</th><th>Default form need</th><th>Message-match requirement</th></tr></thead>
            <tbody>{messageMatchRows.map(([source, h1, offer, form, requirement]) => <tr key={source}><td>{source}</td><td>{h1}</td><td>{offer}</td><td>{form}</td><td>{requirement}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className={styles.measurementSection} id="mobile-performance">
        <div className={styles.docSection}>
          <SectionHeading
            label="Mobile and performance"
            title="Protect the conversion path on the smallest screen."
            copy="Mobile-share and professional-services benchmarks are planning inputs, not verified account data. The new LP must match or beat the live page’s LCP of 2.0s."
          />
          <div className={styles.measureGrid}>
            <article><Smartphone size={22} /><h3>Mobile hierarchy</h3><p>Keep H1, core benefit, CTA and Snapshot limitation visible in the first screen where practical. Use visible labels, full-width actions and correct email/phone keyboards.</p></article>
            <article><Target size={22} /><h3>Interaction guardrails</h3><p>Tap targets at least 48 × 48 px with 8 px spacing; no horizontal scrolling, carousels, autoplay, arrival popup or consent banner over the CTA.</p></article>
            <article><BarChart3 size={22} /><h3>Asset discipline</h3><p>Use responsive WebP or AVIF hero assets, ideally under 200KB; preload only critical fonts, lazy-load below-fold images and minimise third-party scripts.</p></article>
          </div>
          <div className={styles.tableScroll}>
            <table>
              <caption>Performance acceptance criteria</caption>
              <thead><tr><th>Metric</th><th>Pass</th><th>Warning</th><th>Fail</th></tr></thead>
              <tbody>{performanceRows.map(([metric, pass, warning, fail]) => <tr key={metric}><td>{metric}</td><td>{pass}</td><td>{warning}</td><td>{fail}</td></tr>)}</tbody>
            </table>
          </div>
          <div className={styles.prose}>
            <p>Prevent the form, proof strip and consent banner from causing layout shifts. QA representative mobile devices and network conditions before switching traffic. These are build acceptance criteria, not a sales argument.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="measurement">
        <SectionHeading
          label="Measurement and attribution"
          title="Optimise toward pipeline, not soft actions."
          copy="Fire a canonical event only after successful server acceptance, preserve attribution across both form steps, and reconcile platform signals to CRM stages."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Event design</caption>
            <thead><tr><th>Funnel stage</th><th>Canonical event</th><th>Source of truth</th><th>Google bidding</th><th>Meta bidding</th></tr></thead>
            <tbody>{eventRows.map(([stage, event, source, google, meta]) => <tr key={event}><td>{stage}</td><td><code>{event}</code></td><td>{source}</td><td>{google}</td><td>{meta}</td></tr>)}</tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <h3>Event rules</h3>
          <ul>
            <li>Newsletter sign-up, email click, page view and form start must not be primary bidding conversions.</li>
            <li>Capture a <code>variant_intent</code> hidden-field signal for certificate-block viewed/clicked behaviour as a secondary signal only—never a bidding conversion.</li>
            <li>Initially, Meta optimises to website Lead from valid <code>snapshot_request</code> and <code>direct_enquiry</code> events only. Snapshot booked and held remain CRM stages, not platform events.</li>
            <li>Fire <code>snapshot_request</code> or <code>direct_enquiry</code> once only, after successful server acceptance—not on button click or Step 1 completion. The thank-you state cannot refresh into a duplicate conversion.</li>
            <li>Use matching <code>event_name</code> and <code>event_id</code> for Pixel/CAPI deduplication; target at least 90% deduplication and EMQ of at least 8.0 once the implementation exists.</li>
          </ul>
          <h3>Attribution fields</h3>
          <p>Capture <code>gclid</code>, <code>gbraid</code>, <code>wbraid</code>, <code>fbclid</code>, Meta <code>_fbc</code> and <code>_fbp</code>, UTM source/medium/campaign/content/term, landing-page variant, form version, referring URL, first-touch and latest-touch timestamps, consent status and notice version. Preserve click IDs across steps and redirects; never put sensitive employee or health information in URLs, data-layer objects or advertising events.</p>
          <h3>Platform and privacy controls</h3>
          <ul>
            <li>Retain Google auto-tagging; use enhanced conversions for leads, offline/CRM outcome import and data-driven attribution.</li>
            <li>Keep Consulting tags, audiences and CRM mappings isolated from equipment, allied-health and Physiotherapy activity.</li>
            <li>Implement a CMP and Consent Mode v2, default denied, with no client- or server-side analytics/advertising transmission before consent, subject to AU privacy review.</li>
            <li>Store enquiry consent separately from optional marketing consent. No injury-history fields or health-data deny-list exceptions are allowed in the advertising path.</li>
          </ul>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Reporting cuts</caption>
            <thead><tr><th>Dimension</th><th>Report</th></tr></thead>
            <tbody>
              <tr><td>Breakdowns</td><td>Page variant, source, campaign, ad group, search theme and lead stage.</td></tr>
              <tr><td>Journey</td><td>Landing-page sessions, form-start rate, Step 1-to-Step 2 continuation and completion rate.</td></tr>
              <tr><td>Quality</td><td>Qualified-lead rate, Snapshot booking/held rate and cost per qualified lead.</td></tr>
              <tr><td>Commercial</td><td>Cost per submitted lead, cost per held conversation, proposal and won pipeline when available.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.roadmapSection} id="testing">
        <div className={styles.docSection}>
          <SectionHeading
            label="Testing order"
            title="Sequence the learning while traffic is limited."
            copy="Judge tests on qualified-lead and held-conversation outcomes where sample size permits. Raw form-fill improvements are insufficient if qualification rate deteriorates."
          />
          <div className={styles.roadmap}>
            {testOrder.map(([number, title, copy]) => (
              <article key={number}>
                <div className={styles.phaseHead}><span>Test {number}</span><b aria-hidden="true">{number}</b></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className={styles.calloutRow}>
            <Crosshair size={20} />
            <p>No absolute pause, kill or scale directive applies until target CPA, qualified-lead definition and a clean conversion baseline are approved. Any broader kill or scale rule remains conditional on those inputs and sufficient comparable data.</p>
          </div>
        </div>
      </section>

      <section className={styles.gatesSection} id="acceptance">
        <div className={styles.gatesIntro}>
          <SectionHeading
            label="Pre-launch acceptance checklist"
            title="A page is ready when the claim, form, consent and measurement all pass."
            copy="This checklist is the release gate for traffic, not a suggestion list."
          />
        </div>
        <div className={styles.gatesList}>
          {acceptanceChecklist.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p><CircleAlert size={13} style={{ verticalAlign: "-2px", marginRight: ".4rem" }} />Confidential · For client review only · Planning authorisation only</p>
      </footer>
    </main>
  );
}
