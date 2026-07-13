import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Ban,
  Check,
  CircleAlert,
  ClipboardCheck,
  Crosshair,
  Globe2,
  Layers3,
  LockKeyhole,
  Megaphone,
  Search,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import styles from "../plan.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Media Plan",
  description: "Private, redacted media plan and build sheets for ErgoWorks Consulting.",
  robots: { index: false, follow: false },
};

const SNAPSHOT_CAVEAT =
  "preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis";

const funnelRows = [
  [
    `Snapshot request — ${SNAPSHOT_CAVEAT}`,
    "snapshot_request",
    "CRM-confirmed form submission",
    "Initial Primary",
    "Initial website Lead optimisation event",
  ],
  [
    "Direct enquiry",
    "direct_enquiry",
    "CRM-confirmed form submission",
    "Initial Primary",
    "Initial website Lead optimisation event",
  ],
  ["Call connected", "call_connected", "Call-tracking platform", "Secondary", "Reporting only"],
  [
    "Qualified call",
    "qualified_call",
    "CRM/call disposition applying the approved qualification rule",
    "Primary only via qualified import once reliable",
    "Send through CAPI; optimise only after reliable volume",
  ],
  [
    "Qualified lead",
    "lead_qualified",
    "CRM stage",
    "Secondary while validated; future Primary",
    "Future qualified-lead optimisation signal",
  ],
  ["Proposal", "proposal_sent", "CRM stage", "Secondary", "CAPI reporting and custom audience"],
  [
    "Won",
    "closed_won",
    "CRM finance-approved stage",
    "Value-bearing secondary initially",
    "CAPI value event and audience exclusion",
  ],
] as const;

const channelRows = [
  [
    "Proven — 70%",
    "Google Search",
    "Preserve and improve mature demand capture; strengthen Manual Handling Training, care-sector, online/refresher, assessment and consultant coverage; establish Brand protection.",
    "The existing programme produces a useful real-lead baseline. Verified Australian demand includes manual handling training at 2,700 searches/month, a care-sector cluster around 780 searches/month, and a certificate/course head around 3,400+ searches/month whose buyer type remains unclassified.",
  ],
  [
    "Greenfield TOFU pilot — target ~20% steady-state share once earned",
    "Meta",
    "Create demand among organisational buyers; educate, qualify and retarget traffic into a dedicated conversion landing page.",
    "Use organisational messaging, creative qualification, interests, qualified-lead lookalikes and retargeting—not job-title targeting. Meta earns the steady-state share only after showing promise.",
  ],
  [
    "Testing — 10%",
    "PMax plus remarketing",
    "Evaluate incremental reach only after measurement and landing-page remediation.",
    "The platforms have independent delivery requirements, so a normal 10% slice is insufficient at the current Search baseline. Keep both experiments parked until their gates pass.",
  ],
  [
    "Unfunded future pilot",
    "LinkedIn ABM",
    "Reach named accounts using professional targeting when economics justify the premium.",
    "No share of the current media plan; entry criteria apply.",
  ],
] as const;

const coreKeywords = [
  ["manual handling training", "2,700", "22", "Head — Exact + Phrase"],
  ["ergonomic assessment", "400", "0", "Assessment — Core; informational flag"],
  ["ergonomic consultant", "200", "26", "Ergonomic Consultant — Exact + Phrase"],
  ["manual handling training sydney", "200", "15", "Manual Handling Training — Sydney"],
  ["home office ergonomic assessment", "100", "Not available", "Home Office Assessment"],
  ["office ergonomic assessment", "70", "0", "Ergonomic Assessment — Office"],
  ["workplace ergonomic assessment", "60", "2", "Ergonomic Assessment — Workplace"],
  ["workstation assessment", "50", "Not available", "Workstation Assessment"],
  ["ergonomic assessment software", "40", "Not available", "Exclusion candidate; software/SaaS intent"],
  ["train the trainer manual handling", "10", "Not available", "Manual Handling — Train the Trainer"],
] as const;

const budgetScenarios = [
  [
    "Scenario 1",
    "Current-budget reallocation",
    "Protect the existing Search baseline; absorb the controlled Meta test within the current envelope.",
    "One consolidated prospecting ad set at the independent delivery floor.",
    "PMax and paid remarketing parked.",
    "Use only when total media must remain flat; establish the clean baseline before expanding.",
  ],
  [
    "Scenario 2",
    "Minimum-viable Meta added on top",
    "Protect the existing Search run-rate.",
    "One consolidated prospecting ad set above both platform sufficiency checks.",
    "PMax and paid remarketing parked.",
    "Preferred minimum launch scenario; do not fragment the Meta test.",
  ],
  [
    "Scenario 3",
    "Minimum-viable Meta plus PMax at its floor",
    "Protect the existing Search baseline while funding the test layer.",
    "One consolidated prospecting ad set at the independent delivery floor.",
    "PMax receives its independent floor; paid remarketing remains parked.",
    "Use only after measurement, privacy and landing-page gates pass.",
  ],
] as const;

const roadmap = [
  {
    days: "Days 1–30",
    title: "Foundation and controlled build",
    items: [
      "Inventory enabled conversion actions; isolate Consulting goals; demote newsletter and inappropriate soft actions.",
      "Implement Consent Mode v2, default denied, with no client- or server-side analytics/advertising transmission before consent; keep enquiry and marketing consent separate.",
      "Complete the Australian privacy review and keep health or injury fields out of advertising forms.",
      "Prepare the dedicated, navigation-reduced landing page, two-step form and message-matched variants.",
      "Audit the existing 493 negatives, pull RSAs and settings, and repair Brand routing in place before restructuring.",
      "Create the isolated Meta scope and one consolidated prospecting build; keep Meta, PMax and remarketing unpublished or parked until gates pass.",
    ],
  },
  {
    days: "Days 31–60",
    title: "Launch and baseline establishment",
    items: [
      "Launch approved Search routing with tightly themed Exact/Phrase coverage; retain Maximize Conversions while the clean baseline forms.",
      "Launch one consolidated Meta website-lead prospecting ad set under Scenario 1 or 2; use valid snapshot_request and direct_enquiry events only.",
      "Enable Advantage+ placements, build visitor and engagement pools, and record delivery, CTR, form-start and lead-entry baselines without declaring winners prematurely.",
      "Validate GCLID, GBRAID, WBRAID, FBCLID and UTM capture, then reconcile source identifiers and lead stages in the CRM.",
      "Review copy and form behaviour against Australian and Meta policy; every Snapshot placement carries the adjacent caveat.",
    ],
  },
  {
    days: "Days 61–90",
    title: "Diagnose, consolidate and decide",
    items: [
      "Assign every active Search cluster a diagnosis: retain, repair, insufficient data or candidate test.",
      "Compare Meta creative concepts and audience delivery without fragmenting the budget; inspect fatigue and audience overlap.",
      "Evaluate PMax readiness against the gate table and make a written activate-or-park decision.",
      "Replace the assumption-based Snapshot-request planning anchor with clean observed event data reconciled to qualified-lead outcomes.",
      "Set commercial targets only when economics, delivery capacity and clean outcomes are known; do not make unconditional pause or scale decisions.",
    ],
  },
] as const;

const searchGroups = [
  [
    "Manual Handling Training — Head",
    "[manual handling training]",
    '"manual handling training"',
    "Task-based workplace manual-handling training; organisational scope.",
  ],
  [
    "Manual Handling Training — Sydney",
    "[manual handling training sydney]",
    '"manual handling training sydney"',
    "Sydney delivery and workplace-program scoping.",
  ],
  [
    "Manual Handling — Train the Trainer",
    "[train the trainer manual handling]",
    '"train the trainer manual handling"',
    "Supervisor/internal-trainer programme and implementation toolkit.",
  ],
  [
    "Care-Sector — Manual Handling",
    "See the Ahrefs-verified Exact rows below.",
    "See the Ahrefs-verified Phrase rows below.",
    "GATED: do not build or publish until sector scope, negatives and onsite/remote geography are approved.",
  ],
  [
    "Certificate / Course — Mixed Intent",
    "[manual handling certificate], [manual handling course], plus approved gated variants",
    "Phrase counterparts of approved Exact terms",
    "Search-only; buyer type UNCLASSIFIED. Organisational qualification and a gated certificate block are required. Excluded from Meta.",
  ],
  [
    "Manual Handling — Online Delivery",
    "See the Ahrefs-verified Exact rows below.",
    "See the Ahrefs-verified Phrase rows below.",
    "Search-only flexible-delivery framing for organisational and distributed teams; never port to Meta.",
  ],
  [
    "Manual Handling — Refresher",
    "See the Ahrefs-verified Exact rows below.",
    "See the Ahrefs-verified Phrase rows below.",
    "Repeat/annual training intent; connect cadence to the managed-retainer pathway without making compliance claims.",
  ],
  [
    "Ergonomic Assessment — Core",
    "[ergonomic assessment]",
    '"ergonomic assessment"',
    "Keep separate query and qualified-lead reporting because the bare term is flagged informational.",
  ],
  [
    "Ergonomic Assessment — Workplace",
    "[workplace ergonomic assessment]",
    '"workplace ergonomic assessment"',
    "Organisational risk visibility and assessment rollout.",
  ],
  [
    "Ergonomic Assessment — Office",
    "[office ergonomic assessment]",
    '"office ergonomic assessment"',
    "Office and workstation assessment scope.",
  ],
  [
    "Workstation Assessment",
    "[workstation assessment]",
    '"workstation assessment"',
    "Workplace workstation assessment plan.",
  ],
  [
    "Home Office Assessment",
    "[home office ergonomic assessment]",
    '"home office ergonomic assessment"',
    "Corporate hybrid/home-office assessment rollout.",
  ],
  [
    "Ergonomic Consultant",
    "[ergonomic consultant]",
    '"ergonomic consultant"',
    "Consultant-led workplace programme scoping.",
  ],
  [
    "Assessment — Geo",
    "[ergonomic assessment melbourne], [ergonomic assessment sydney], [ergonomic assessment perth], [ergonomic assessment canberra]",
    "Phrase counterparts of the four Exact terms",
    "Commercial-intent geo group; route to a dedicated assessment variant and measure qualified leads before scale.",
  ],
  [
    "Assessment — Remote",
    "[online ergonomic workstation assessment], [online ergonomic assessment]",
    "Phrase counterparts of the two Exact terms",
    "Remote/WFH assessment scope for organisational buyers; separate from software/SaaS intent.",
  ],
  [
    "Ergonomic Assessment — Canberra (candidate, gated)",
    "[ergonomic office canberra]",
    '"ergonomic office [suburb]"',
    "Use only after the query's equipment/showroom intent and conversion type are verified.",
  ],
] as const;

const expansionRows = [
  ["Care Sector", "[manual handling training for aged care workers]", '"manual handling training for aged care workers"', "150", "15"],
  ["Care Sector", "[manual handling training aged care]", '"manual handling training aged care"', "150", "15"],
  ["Care Sector", "[aged care manual handling training]", '"aged care manual handling training"', "150", "36"],
  ["Care Sector", "[manual handling training for healthcare workers]", '"manual handling training for healthcare workers"', "100", "29"],
  ["Care Sector", "[manual handling training for disability support workers]", '"manual handling training for disability support workers"', "100", "14"],
  ["Care Sector", "[manual handling training for support workers]", '"manual handling training for support workers"', "70", "26"],
  ["Care Sector", "[manual handling aged care training]", '"manual handling aged care training"', "60", "0"],
  ["Online Delivery", "[manual handling training online]", '"manual handling training online"', "150", "—"],
  ["Online Delivery", "[online manual handling training]", '"online manual handling training"', "80", "—"],
  ["Online Delivery", "[manual handling online training]", '"manual handling online training"', "60", "—"],
  ["Refresher", "[manual handling refresher training]", '"manual handling refresher training"', "100", "—"],
  ["Refresher", "[manual handling training refresher]", '"manual handling training refresher"', "60", "—"],
] as const;

const geographyRows = [
  ["manual handling training sydney", "200", "Retain Exact + Phrase subject to normal query review."],
  ["manual handling training near me", "350", "Candidate only when location targeting uses Presence and service coverage is truthful."],
  ["manual handling training perth", "200", "Hold from publication pending geography sign-off."],
  ["manual handling training adelaide", "150", "Hold from publication pending geography sign-off."],
  ["manual handling training canberra", "100", "Hold from publication; do not infer serviceability from the separate assessment signal."],
  ["manual handling training darwin", "80", "Hold from publication pending geography sign-off."],
  ["manual handling training brisbane", "50", "Hold from publication pending geography sign-off."],
] as const;

const assessmentRows = [
  ["ergonomic assessment", "400", "0", "Core group; informational flag and separate qualified-lead reporting."],
  ["ergonomic assessment melbourne", "150", "0", "Geo group and dedicated assessment landing-page variant."],
  ["ergonomic assessment sydney", "100", "0", "Geo group and dedicated assessment landing-page variant."],
  ["ergonomic assessment perth", "100", "—", "Publication blocked pending service-coverage sign-off."],
  ["ergonomic assessment canberra", "30", "—", "Publication blocked pending service-coverage sign-off."],
  ["online ergonomic workstation assessment", "90", "—", "Remote group; organisational WFH/workstation framing."],
  ["online ergonomic assessment", "60", "—", "Remote group; organisational framing and query review."],
] as const;

const rsaRows = [
  ["RSAs", "At least three active RSAs per ad group."],
  ["Headlines", "At least eight genuinely distinct headlines per RSA."],
  ["Descriptions", "At least three descriptions per RSA."],
  ["Pinning", "Minimal; use only where a required disclaimer or message-match element must remain visible."],
  ["Sitelinks", "At least four relevant Consulting-only sitelinks."],
  ["Callouts", "At least four approved, controllable-output callouts."],
  ["Other assets", "Structured snippets and image assets only after rights and policy approval."],
  ["Landing pages", "Dedicated, message-matched page variant; no routing to sibling businesses or unrelated pages."],
  ["Snapshot wording", `Any RSA, asset or destination mentioning the free 15-minute Workplace Ergonomics Risk Snapshot must state: “${SNAPSHOT_CAVEAT}.”`],
  ["Proof", "Awards, logos, global FMCG references, ASX-listed enterprise-client proof and strong public review ratings are client sign-off required before use."],
] as const;

const negativeRows = [
  [
    "DIY / informational",
    '"diy", "assignment", "essay", "student", "university", "tafe", plus specific irrelevant free-template or definition queries',
    "Use evidence-backed Exact or Phrase negatives. Do not exclude training, course, checklist, assessment tool or free categorically without query evidence.",
  ],
  ["Jobs", '"jobs", "job vacancy", "career", "salary", "resume"', "Consulting campaign-level negatives."],
  [
    "Equipment-product bleed",
    '"buy ergonomic chair", "officeworks", "ikea", "bunnings", "standing desk for sale", plus specific shopping queries',
    "Do not block generic ergonomic-equipment language without confirming service irrelevance.",
  ],
  [
    "Third-party RTO & competitor terms",
    "Competitor A/B/C/D and other verified competitor-conquesting queries",
    "Campaign-level only; the competitor list is redacted here and must be reconciled against actual Search Terms Reports.",
  ],
  [
    "Physiotherapy de-mix",
    '"physiotherapist", "physio near me", and specific treatment, clinic or appointment queries',
    "Consulting campaign-level only; never apply account-wide because the shared account includes an active Physiotherapy campaign.",
  ],
  [
    "Consumer / medical",
    "Specific patient-treatment, diagnosis or symptom-treatment queries found in the report",
    "Do not broadly exclude terms such as pain until actual queries and conversion paths are reviewed.",
  ],
  [
    "CPR / first-aid bundle — conditional",
    '"cpr" only if the service is not delivered or partnered; retain/review existing first-aid controls rather than duplicating them',
    "Hold any new negative until service scope is confirmed and an actual irrelevant query validates the match type.",
  ],
  [
    "Vehicle ergonomics",
    "[driver ergonomic assessment] if an actual irrelevant query appears",
    "Audit the existing broad car control and retain or narrow exact vehicle controls; do not add duplicates.",
  ],
  [
    "Assessment software / SaaS",
    "[ergonomic assessment software] after Search Terms Report confirmation",
    "Narrow candidate only; audit broad software controls for overblocking and do not run it as a positive consulting keyword.",
  ],
  [
    "Free manual-handling variants",
    'No duplicate addition while "free" broad remains live; evidence-backed Exact/Phrase replacements only',
    "Audit routing and duplication because the approved Snapshot uses free language.",
  ],
  [
    "Regulator / government informational",
    '"work safe australia", "safe work", "safework", "workforce australia", "high risk work licence"',
    "Exact/Phrase campaign-level negatives after evidence review; audit existing worksafe coverage first.",
  ],
  [
    "Existing 493-negative audit",
    "Review all existing campaign-level and ad-group-level negatives",
    "Check care-sector, online, refresher and certificate conflicts; overblocking from generic broad terms; redundancy; and stale person/name negatives.",
  ],
] as const;

const certificateRows = [
  ["manual handling certificate", "2,800", "39", "Commercial + transactional demand head; buyer type unclassified."],
  ["manual handling course", "600", "30", "Same certificate/course parent-topic pool; buyer type unclassified."],
  ["manual handling certificate online", "150", "43", "Mixed online/certificate intent; Search-only and organisational qualification required."],
  ["accredited manual handling training", "60", "37", "Keyword-visible accreditation question; never imply accreditation without evidence and sign-off."],
] as const;

const certificateOptions = [
  [
    "A — dedicated Certificate / Course mixed-intent split (recommended, gated trial)",
    "Search-only Exact + Phrase coverage with organisational qualification and a gated certificate landing-page block. Do not build or publish until the client confirms whether it issues an accredited certificate, statement of attainment, or participant attendance/training-completion records. Excluded from Meta.",
    "The pool is material, but buyer type remains UNCLASSIFIED. Gate on landing-page evidence, accreditation and participant-record evidence, plus client sign-off.",
  ],
  [
    "B — exact-negative individual phrasings (can coexist with A)",
    "Use Exact negatives only on clearly individual searches such as personal-validity, personal-card or individual-accreditation phrasings.",
    "Blocks selected individual queries without blanket-excluding broader corporate or online certificate demand.",
  ],
] as const;

const pmaxRows = [
  ["Delivery floor", "Independent platform floor must be funded", "Fails the flat and Meta-only scenarios; candidate only in the scenario that clears its floor"],
  ["Primary goals", "Genuine Consulting leads only; newsletter and soft actions excluded", "Not yet verified clean"],
  ["Qualified-lead feedback", "CRM stages imported through an approved workflow", "Not available"],
  ["Landing page", `Dedicated conversion page with the approved Snapshot caveat: “${SNAPSHOT_CAVEAT}.”`, "Proposed, not live"],
  ["Brand protection", "Campaign-level brand exclusion decision documented", "Not assessed"],
  ["Product / physio isolation", "Campaign negatives, URL exclusions and conversion scope prevent bleed", "Not assessed"],
  ["Final URL expansion", "Disabled or tightly controlled with Consulting-only include/exclude rules", "Not assessed"],
  ["Search themes", "Manual Handling Training, workplace ergonomic assessment, office/workstation assessment and ergonomic consultant", "Proposed only"],
  ["Assets", "Approved text, image and video assets with no unverified proof", "Refer to the approved creative brief"],
  ["Incrementality", "PMax contribution distinguishable from existing Search and remarketing", "Measurement design required"],
] as const;

const remarketingAudiences = [
  "Consulting-site visitors",
  "Dedicated landing-page visitors",
  "Service-page visitors",
  "Form starters who did not submit",
  "Approved video viewers and social engagers",
  `Snapshot page visitors — ${SNAPSHOT_CAVEAT}`,
  "Existing leads and customers for exclusion",
] as const;

const metaStructureRows = [
  ["Business scope", "Dedicated Consulting Pixel/Dataset, verified domain and Consulting-only GA4/GTM scope."],
  ["Campaign", "Placeholder prospecting campaign name only; replace approved geo tokens after service-geography sign-off and before build."],
  ["Objective", "Leads using the website conversion location."],
  ["Budget method", "One consolidated ad set initially; ABO during controlled testing, with CBO considered only after multiple proven ad sets can each meet sufficiency requirements."],
  ["Optimisation event", "Initially website Lead from valid snapshot_request and direct_enquiry events only; migrate toward qualified-lead optimisation when CRM volume and CAPI feedback are reliable."],
  ["Placements", "Advantage+ placements, monitored by placement; include Threads only as an observable placement, not a separate budget."],
  ["Exclusions", "Submitted leads, current clients and customer lists where appropriate; exclude known sibling-business and Physiotherapy audiences."],
  ["Retargeting", "Build audiences from launch; keep paid retargeting parked until it can independently meet audience, privacy, creative and delivery requirements."],
] as const;

const metaAudienceRows = [
  [
    "Broad / creative-qualified",
    "Approved service geography only; broad adult organisational audience; creative and landing-page language identify WHS, HR, Facilities, Operations and workplace-program relevance.",
    "Initial consolidated prospecting. Australia-wide and city expansions are gated behind service-geography sign-off.",
  ],
  [
    "Interests",
    "Limited, non-fragmented set around workplace safety, WHS, HR, occupational health, facilities and workplace management, subject to availability.",
    "Audience suggestion/test layer.",
  ],
  [
    "Qualified-lead lookalikes",
    "Consent-compatible lists of qualified leads, held consultations or closed-won customers; test 1%, then 3% and 5% only when seed quality and size are sufficient.",
    "Future scaling.",
  ],
  [
    "Negative-audience layer",
    "Exclude Search visitors from certificate/individual-intent and third-party RTO & competitor terms from any Meta lookalike seed list.",
    "Protect seed purity; do not seed lookalikes from blended converters that may contain individual or job-seeker profiles.",
  ],
  [
    "Website retargeting",
    "Consulting visitors, relevant service-page visitors, form starters and Snapshot visitors with the adjacent caveat.",
    "Build from launch; fund later.",
  ],
  ["Engagement retargeting", "Approved video viewers and social engagers.", "Build from launch; fund later."],
  [
    "Exclusions",
    "Submitted leads, current clients, unrelated sister-brand users and inappropriate employee/patient audiences.",
    "Prospecting hygiene.",
  ],
] as const;

const linkedinRows = [
  ["Account strategy", "Approved named-account list with priority industries and account owners."],
  ["Economics", "Average contract value, contribution margin, close rate and maximum qualified-lead CPA support the premium media costs."],
  ["Budget", "Incremental funding is approved rather than taken from minimum-viable Meta or PMax."],
  ["Conversion capacity", "Credible path to a meaningful monthly conversion volume, or an explicitly designed ABM measurement framework using account engagement and pipeline."],
  ["Sales process", "Documented follow-up owner and service-level agreement."],
  ["Content", "Approved thought-leadership asset and landing page relevant to WHS, HR, Facilities or Operations buyers."],
  ["Measurement", "Insight Tag/CAPI scope, CRM capture and consent/privacy approval."],
  ["Search / Meta maturity", "Clean qualified-lead baseline exists and the pilot will not compromise proven Search or minimum-viable Meta learning."],
] as const;

const dataGates = [
  ["Clean conversion baseline", "Current reported conversions mix newsletter and soft actions; allow at least one clean post-remediation baseline before commercial decisions."],
  ["Service geography", "Confirm location targets, exclusions, presence setting and qualified-lead location data before publishing geo expansions."],
  ["Search evidence", "Pull the longer-history Search Terms Report, keyword performance, network settings, assets, Quality Score components and change history."],
  ["Commercial economics", "Confirm average contract value, margin, close rate, sales-cycle length, delivery cost and Snapshot fulfilment capacity."],
  ["Privacy and data", "Approve CMP, consent categories, retention, Pixel/Dataset scope, CRM audience use and offline-import design under OAIC APP 3."],
  ["Creative and proof", "Approve the required formats, message diversity, rights and any proof claims; client sign-off is required before publication."],
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

export default function MediaPlanPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private media plan</div>
        </nav>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Appendix B · Redacted media plan</p>
            <h1>Protect the engine. Test the next layer with discipline.</h1>
            <p className={styles.heroCopy}>
              A practical build sheet for an established Search programme: keep proven demand capture clean, create a controlled Meta learning layer, and park every experiment that cannot yet clear its measurement, privacy or delivery gates.
            </p>
          </div>
          <aside className={styles.summary}>
            <p>What this page covers</p>
            <h2>Relative scenarios, keyword architecture and launch gates.</h2>
            <ul>
              <li><Search size={17} /> Search remains the revenue engine</li>
              <li><Megaphone size={17} /> Meta starts as one consolidated prospecting test</li>
              <li><ShieldCheck size={17} /> Compliance and privacy gates stay adjacent to activation</li>
              <li><Ban size={17} /> PMax, remarketing and LinkedIn remain gated</li>
            </ul>
          </aside>
        </div>
        <a className={styles.scrollCue} href="#basis"><ArrowDown size={17} /> Read the basis</a>
      </header>

      <section className={styles.docSection} id="basis">
        <SectionHeading
          label="Planning basis and guardrails"
          title="An optimisation and expansion plan—not a greenfield launch."
          copy="The existing Search programme has a useful demand baseline. The work is to de-mix the signals, protect qualified intent, add a disciplined demand-generation layer and make every new test earn its place."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Verified planning baseline · relative presentation</caption>
            <thead><tr><th scope="col">Item</th><th scope="col">Planning basis</th></tr></thead>
            <tbody>
              <tr><td>Existing Search</td><td>Mature Consulting demand capture with Maximize Conversions and no target CPA while remediation proceeds.</td></tr>
              <tr><td>Recent delivery</td><td>Thousands of impressions, hundreds of clicks and a small number of reported conversions in the last 30 days; a modest real-lead volume is the working operational estimate.</td></tr>
              <tr><td>Paid social</td><td>No paid social baseline; the Meta layer is greenfield and must establish its own clean event baseline.</td></tr>
              <tr><td>Landing page</td><td>Paid traffic currently reaches generic service pages; a dedicated, message-matched destination is required.</td></tr>
              <tr><td>Parked experiments</td><td>PMax and Display remarketing remain parked until measurement, privacy, audience and delivery gates pass.</td></tr>
              <tr><td>Measurement issue</td><td>Newsletter and soft actions are included among primary or reported conversions; qualified-lead imports are not yet available.</td></tr>
              <tr><td>Shared-account risk</td><td>Consulting and Physiotherapy coexist in one advertising environment and require campaign-level isolation.</td></tr>
            </tbody>
          </table>
        </div>
        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p><strong>Planning only:</strong> these are proposed recommendations. This page does not authorise changes to live advertising, website, CRM or tracking systems.</p>
        </div>
        <div className={styles.prose}>
          <h3>Mandatory pre-launch conditions</h3>
          <ul>
            <li>Demote newsletter signup and inappropriate soft actions from primary optimisation.</li>
            <li>Isolate Consulting conversion goals, reporting, audiences and campaign negatives from Physiotherapy.</li>
            <li>Use dedicated Consulting Pixel/Dataset and properly scoped GA4/GTM implementation, separate from sibling businesses.</li>
            <li>Implement a CMP and Consent Mode v2, default denied, with no client- or server-side analytics/advertising transmission before consent, with separate enquiry and marketing consent.</li>
            <li>Complete an Australian privacy review before activating the landing page, Meta Pixel/CAPI, CRM audiences or offline conversion uploads.</li>
            <li>Do not collect injury details, symptoms, diagnoses, treatment, claims or other health information in advertising forms.</li>
            <li>Use controllable-output claims only. No guaranteed injury prevention, WHS compliance or claims reduction.</li>
            <li>Any awards, logos, global FMCG references, ASX-listed enterprise-client proof or strong public review rating remains client sign-off required before it enters ads or landing pages.</li>
            <li>Wherever offered, the free 15-minute Workplace Ergonomics Risk Snapshot must carry the adjacent statement: “{SNAPSHOT_CAVEAT}.” If the format cannot carry it, that format must not mention the Snapshot.</li>
          </ul>
        </div>
        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p><strong>Data control:</strong> OAIC APP 3 applies. Collect only the minimum information needed for the stated function. Meta must not imply a viewer or their staff has a health condition.</p>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Canonical funnel and bidding map</caption>
            <thead><tr><th scope="col">Funnel stage</th><th scope="col">Canonical event</th><th scope="col">Source of truth</th><th scope="col">Google treatment</th><th scope="col">Meta treatment</th></tr></thead>
            <tbody>
              {funnelRows.map(([stage, event, source, google, meta]) => (
                <tr key={event}><td>{stage}</td><td><code>{event}</code></td><td>{source}</td><td>{google}</td><td>{meta}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.prose}>Booked and held Snapshot stages remain CRM stages only, not platform events. Initially, Meta optimises to website Lead generated by valid <code>snapshot_request</code> and <code>direct_enquiry</code> events only; every mention of the Snapshot on this page carries: “{SNAPSHOT_CAVEAT}.”</p>
      </section>

      <section className={styles.channelsSection} id="channels">
        <SectionHeading
          label="Proposed channel roles"
          title="The 70 / 20 / 10 framework is an overlay, not a mandate."
          copy="The relative model describes the intended operating shape once each channel earns its role. Platform delivery requirements and clean commercial signals come first."
        />
        <div className={styles.allocation} aria-label="Directional channel allocation: 70 percent Search, 20 percent demand generation, 10 percent experiments">
          <div className={styles.searchBar}><strong>70%</strong><span>Search · capture</span></div>
          <div className={styles.metaBar}><strong>20%</strong><span>Meta · create</span></div>
          <div className={styles.testBar}><strong>10%</strong><span>Test</span></div>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Relative channel operating model</caption>
            <thead><tr><th scope="col">Overlay</th><th scope="col">Channel</th><th scope="col">Role</th><th scope="col">Evidence and constraint</th></tr></thead>
            <tbody>
              {channelRows.map(([overlay, channel, role, evidence]) => (
                <tr key={channel}><td>{overlay}</td><td>{channel}</td><td>{role}</td><td>{evidence}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.channelNotes}>
          <article><h3>Search protects intent</h3><p>Clean goals, inspect query quality, restore Brand coverage and route each commercial theme to a relevant destination.</p></article>
          <article><h3>Meta pilots demand generation</h3><p>Use organisational messaging and one consolidated prospecting audience with enough delivery to learn. Do not fragment a modest test across multiple ad sets.</p></article>
          <article><h3>Experiments earn activation</h3><p>PMax and paid remarketing stay parked until clean measurement, privacy approval, isolated audiences and viable independent funding are in place.</p></article>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="budget">
        <SectionHeading
          label="Budget scenarios"
          title="Choose the relative operating shape; keep exact figures in the private pack."
          copy="Every scenario protects Search first, gives Meta a single controlled learning path, and keeps experiments separate until their floors and gates are independently defensible."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Scenario comparison · no monetary figures published</caption>
            <thead><tr><th scope="col">Scenario</th><th scope="col">Model</th><th scope="col">Search floor</th><th scope="col">Meta test</th><th scope="col">Experiments</th><th scope="col">Decision</th></tr></thead>
            <tbody>
              {budgetScenarios.map(([scenario, model, search, meta, experiments, decision]) => (
                <tr key={scenario}><td>{scenario}</td><td>{model}</td><td>{search}</td><td>{meta}</td><td>{experiments}</td><td>{decision}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <h3>Operating rules across all three scenarios</h3>
          <ul>
            <li>Meta begins with one consolidated prospecting ad set. Build retargeting audiences, but do not fragment the live test.</li>
            <li>PMax and paid remarketing never share an experimental floor; the PMax test must stand on its own before remarketing is funded.</li>
            <li>Do not apply target CPA bidding, unconditional pause decisions or scale decisions while the conversion baseline is blended or commercial economics are unknown.</li>
            <li>Replace assumption-based event-level planning anchors with observed Snapshot-request data, then with qualified-lead and contribution-margin evidence. Every Snapshot mention carries: “{SNAPSHOT_CAVEAT}.”</li>
          </ul>
        </div>
      </section>

      <section className={styles.roadmapSection} id="roadmap">
        <SectionHeading
          label="Proposed 90-day media plan"
          title="Foundation first. Controlled launch second. Scale decisions last."
          copy="Committed KPIs are measurable leading indicators. Lead, qualified-lead, CPA and revenue outcomes establish baselines during this period rather than serving as commitments."
        />
        <div className={styles.roadmap}>
          {roadmap.map((phase, index) => (
            <article key={phase.days}>
              <div className={styles.phaseHead}><span>{phase.days}</span><b aria-hidden="true">0{index + 1}</b></div>
              <h3>{phase.title}</h3>
              <ul>{phase.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Conditional diagnosis thresholds</caption>
            <thead><tr><th scope="col">Signal</th><th scope="col">Minimum evidence</th><th scope="col">Diagnosis—not automatic instruction</th></tr></thead>
            <tbody>
              <tr><td>CPA above 3× an approved target</td><td>At least seven days and 20 clicks</td><td>Flag for pause review; inspect query intent, tracking, landing page and lead quality first.</td></tr>
              <tr><td>No conversions</td><td>At least 50 clicks or a meaningful delivery sample</td><td>Flag for diagnosis; do not pause solely on low-volume early data.</td></tr>
              <tr><td>Creative CTR materially below benchmark</td><td>At least 1,000 impressions</td><td>Flag creative for rebuild or replacement.</td></tr>
              <tr><td>Meta prospecting frequency</td><td>Seven-day frequency 3–5</td><td>Warning; inspect audience size and creative fatigue.</td></tr>
              <tr><td>Meta prospecting frequency</td><td>Seven-day frequency above 5</td><td>Fail diagnosis; do not assume budget alone is the cause.</td></tr>
              <tr><td>Creative fatigue</td><td>CTR decline greater than 20% across 14 days</td><td>Refresh candidate, subject to sufficient impressions.</td></tr>
              <tr><td>Search Quality Score</td><td>5–6 warning; below 5 fail</td><td>Diagnose relevance, expected CTR and landing-page experience.</td></tr>
              <tr><td>Search CTR</td><td>6.66% pass; 3–6.66% warning; below 3% fail</td><td>Apply only after comparable, clean campaign segmentation.</td></tr>
              <tr><td>Search CVR</td><td>7.52% pass; 3–7.52% warning; below 3% fail</td><td>Use real primary conversions, not the current blended total.</td></tr>
              <tr><td>Search CPC</td><td>Use qualitative keyword-level review</td><td>Diagnose by intent and qualified-lead value; do not publish monetary thresholds.</td></tr>
            </tbody>
          </table>
        </div>
        <div className={styles.calloutRow}>
          <CircleAlert size={20} />
          <p>No campaign qualifies for a scale decision until performance is below an approved target for at least two weeks, stable and supported by sufficient conversion evidence.</p>
        </div>
      </section>

      <section className={styles.docSection} id="search-build">
        <SectionHeading
          label="Google Search build sheet"
          title="Tight thematic groups. Exact and Phrase first."
          copy="The final build must be reconciled against the existing keyword, match-type and Search Terms Report inventory. The evidence does not support deleting or replacing current ad groups blindly. Broad match is outside this plan; any future Broad experiment requires separate approval."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Verified Australian demand indicators · volume and KD only</caption>
            <thead><tr><th scope="col">AU keyword</th><th scope="col">Monthly volume</th><th scope="col">KD</th><th scope="col">Ad-group structure</th></tr></thead>
            <tbody>
              {coreKeywords.map(([keyword, volume, kd, group]) => (
                <tr key={keyword}><td><code>{keyword}</code></td><td>{volume}</td><td>{kd}</td><td>{group}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.prose}>The software term is retained as a verification row because it was in the original snapshot, but its intent is software/SaaS and it is an exclusion candidate—not a positive consulting keyword—unless later Search Terms Report evidence proves relevant intent.</p>
        <div className={styles.tableScroll}>
          <table>
            <caption>Proposed campaign and ad-group map</caption>
            <thead><tr><th scope="col">Proposed group</th><th scope="col">Exact-match keywords</th><th scope="col">Phrase-match keywords</th><th scope="col">Landing-page message</th></tr></thead>
            <tbody>
              <tr><td>Existing non-brand Consulting demand capture</td><td>Existing inventory; reconcile before changes</td><td>Existing inventory; reconcile before changes</td><td>Optimise the existing campaign; do not rebuild blindly.</td></tr>
              <tr><td>Brand routing</td><td>Repair existing Brand terms in place</td><td>Remove confirmed service-group duplicates</td><td>Verify eligible RSA, Consulting destination and separate Brand/service metrics for a full observation period.</td></tr>
              <tr><td>Incremental cross-network test</td><td>Not applicable</td><td>Not applicable</td><td>Keep PMax paused until its independent floor and all gates pass.</td></tr>
              <tr><td>Competitor Conquesting</td><td>Competitor A/B/C/D and other verified third-party RTO &amp; competitor terms</td><td>Only approved Exact/Phrase terms after query review</td><td>A mis-labelled ad group targeting competitor terms; reassess whether the terms merit a separate line or should fold into the existing structure. No unsupported comparison, pricing or competitor claims.</td></tr>
              {searchGroups.map(([group, exact, phrase, message]) => (
                <tr key={group}><td>{group}</td><td><code>{exact}</code></td><td><code>{phrase}</code></td><td>{message}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <h3>Brand handling — atomic repair gate</h3>
          <p>Repair the existing Brand ad group in place, verify its eligible RSA and Consulting destination, re-enable its paused terms and remove confirmed service-group duplicates from the service ad groups. Then verify Brand query routing and separate Brand/service metrics for a full observation period before considering a standalone Brand campaign.</p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="expansion">
        <SectionHeading
          label="Ahrefs expansion rows"
          title="Expand only where intent, service scope and geography agree."
          copy="Every row enters Exact and Phrase only. Volumes are Australian average monthly searches from the verified pull; a dash means the source did not report a KD value, not zero."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Manual Handling expansion rows · no CPC column published</caption>
            <thead><tr><th scope="col">Cluster</th><th scope="col">Exact keyword</th><th scope="col">Phrase keyword</th><th scope="col">AU vol/mo</th><th scope="col">KD</th></tr></thead>
            <tbody>
              {expansionRows.map(([cluster, exact, phrase, volume, kd]) => (
                <tr key={exact}><td>{cluster}</td><td><code>{exact}</code></td><td><code>{phrase}</code></td><td>{volume}</td><td>{kd}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.calloutRow}>
          <Target size={20} />
          <p><strong>Care-sector blocker:</strong> the current negative inventory contains controls that would block much of the care-sector set. Reconcile and narrow those negatives after confirming service scope; do not publish the group while the conflict remains.</p>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Assessment intent and remote expansion</caption>
            <thead><tr><th scope="col">Assessment keyword</th><th scope="col">AU vol/mo</th><th scope="col">KD</th><th scope="col">Structure and bid discipline</th></tr></thead>
            <tbody>
              {assessmentRows.map(([keyword, volume, kd, treatment]) => (
                <tr key={keyword}><td><code>{keyword}</code></td><td>{volume}</td><td>{kd}</td><td>{treatment}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <p>The care-sector set is the cleanest corporate-fit cluster in the verified dataset; online and refresher rows remain Search-only. Recurring-purchase signal is not evidence of a mandated cadence. Any cadence or recurring-service claim remains scope- and client-sign-off-dependent.</p>
          <p>Sydney and Melbourne are high-value assessment terms. Tight Exact/Phrase structure and qualified-lead measurement are required before any budget increase. Canberra recommendations remain conditional: the existing office and suburb-level terms need the underlying ad and conversion type checked because equipment/showroom intent is possible and the observed conversion sample is thin.</p>
        </div>
      </section>

      <section className={styles.docSection} id="geography">
        <SectionHeading
          label="Geography coverage"
          title="Verified demand is not proof of serviceability."
          copy="Current live-site coverage is narrower than the national research pool. Publication outside the approved footprint remains a launch blocker until serviceability is confirmed and the destination states the coverage accurately."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Manual Handling geo terms · publication gated</caption>
            <thead><tr><th scope="col">Keyword</th><th scope="col">AU vol/mo</th><th scope="col">Build / publication treatment</th></tr></thead>
            <tbody>
              {geographyRows.map(([keyword, volume, treatment]) => (
                <tr key={keyword}><td><code>{keyword}</code></td><td>{volume}</td><td>{treatment}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.calloutRow}>
          <Globe2 size={20} />
          <p>Do not infer city-level bid modifiers from Ahrefs volume or national Search Terms Report appearances. Require the Google geo-performance report, clean conversion goals and qualified-lead location data first.</p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="rsa-negatives">
        <SectionHeading
          label="RSA requirements and negative themes"
          title="Creative structure and query control are one system."
          copy="The account already has a large negative inventory. Audit it for overblocking, staleness and gaps before adding anything new; apply all controls to Consulting campaigns only, never account-wide."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Proposed RSA and asset requirements</caption>
            <thead><tr><th scope="col">Component</th><th scope="col">Requirement</th></tr></thead>
            <tbody>
              {rsaRows.map(([component, requirement]) => <tr key={component}><td>{component}</td><td>{requirement}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Proposed campaign-level negative themes</caption>
            <thead><tr><th scope="col">Theme</th><th scope="col">Candidates</th><th scope="col">Control</th></tr></thead>
            <tbody>
              {negativeRows.map(([theme, candidates, control]) => <tr key={theme}><td>{theme}</td><td><code>{candidates}</code></td><td>{control}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <h3>Negative-match discipline</h3>
          <ul>
            <li>Use Exact negatives for specific irrelevant searches and Phrase negatives for clearly irrelevant intent patterns.</li>
            <li>Do not use speculative broad-match negatives.</li>
            <li>Validate every new candidate against actual Search Terms Reports, especially around certificate-intent, regulator queries, care-sector conflicts and equipment bleed.</li>
            <li>Never make account-wide changes while Consulting and Physiotherapy share the advertising environment.</li>
          </ul>
        </div>
      </section>

      <section className={styles.docSection} id="certificate">
        <SectionHeading
          label="Certificate-intent decision table"
          title="Do not blanket-exclude a material but unclassified pool."
          copy={`Certificate and course queries are not uniformly waste, but buyer type remains UNCLASSIFIED. Test only with organisational qualification and a client-approved answer to what training records are actually issued. Any Snapshot mention remains adjacent to: “${SNAPSHOT_CAVEAT}.”`}
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Verified certificate / course demand · volume and KD only</caption>
            <thead><tr><th scope="col">Verified term</th><th scope="col">AU vol/mo</th><th scope="col">KD</th><th scope="col">Planning implication</th></tr></thead>
            <tbody>
              {certificateRows.map(([term, volume, kd, implication]) => <tr key={term}><td><code>{term}</code></td><td>{volume}</td><td>{kd}</td><td>{implication}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Complementary controls</caption>
            <thead><tr><th scope="col">Option</th><th scope="col">Mechanics</th><th scope="col">Trade-off</th></tr></thead>
            <tbody>
              {certificateOptions.map(([option, mechanics, tradeoff]) => <tr key={option}><td>{option}</td><td>{mechanics}</td><td>{tradeoff}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.calloutRow}>
          <ClipboardCheck size={20} />
          <p>Before any certificate, accreditation or participant-record term can publish, the client must confirm what it provides. Absent that evidence, do not bid on accreditation intent and do not imply equivalence. Meta never targets certificate intent.</p>
        </div>
        <div className={styles.prose}>
          <h3>Search bidding decision</h3>
          <p>Keep Maximize Conversions with no target CPA while measurement is repaired and a clean baseline develops. Remove inappropriate primary signals, observe a clean minimum 30-day baseline, consider target CPA only after at least 30 clean conversions per month and stable qualified-lead economics, and consider target ROAS only after reliable revenue or contribution values and more than 50 appropriate conversions per month.</p>
        </div>
      </section>

      <section className={styles.docSection} id="pmax">
        <SectionHeading
          label="PMax evaluation"
          title="Park the experiment until it can be judged incrementally."
          copy="PMax is not a substitute for Search repair. It activates only when the independent delivery floor, clean goals, dedicated landing page, isolation controls and incrementality design are all ready."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Proposed PMax evaluation sheet</caption>
            <thead><tr><th scope="col">Gate</th><th scope="col">Required condition</th><th scope="col">Current planning status</th></tr></thead>
            <tbody>
              {pmaxRows.map(([gate, condition, status]) => <tr key={gate}><td>{gate}</td><td>{condition}</td><td>{status}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.calloutRow}>
          <CircleAlert size={20} />
          <p>If any mandatory gate fails, keep PMax parked. An activation decision must be written, funded independently, and measured against existing Search and Meta rather than credited with blended platform conversions.</p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="remarketing">
        <SectionHeading
          label="Remarketing decision"
          title="Build the audiences first; fund the media later."
          copy="Paid remarketing remains parked initially. Audience construction, consent, frequency control, creative approval and clean conversion tracking must all be in place before activation."
        />
        <div className={styles.prose}>
          <ul>{remarketingAudiences.map((audience) => <li key={audience}>{audience}</li>)}</ul>
          <p>Activate only when audience size is sufficient, frequency can be controlled, creative is approved, conversion tracking is clean and remarketing has funding separate from PMax’s independent floor. Do not mix sibling-business or Physiotherapy audiences into Consulting remarketing.</p>
        </div>
      </section>

      <section className={styles.docSection} id="meta">
        <SectionHeading
          label="Meta build sheet"
          title="One consolidated prospecting build, qualified by creative."
          copy="Meta is greenfield. The first job is to establish clean website-lead learning with organisational messaging, privacy-safe data and enough creative diversity to diagnose the channel without fragmenting delivery."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Proposed account and campaign structure</caption>
            <thead><tr><th scope="col">Level</th><th scope="col">Proposed build</th></tr></thead>
            <tbody>{metaStructureRows.map(([level, build]) => <tr key={level}><td>{level}</td><td>{build}</td></tr>)}</tbody>
          </table>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Audience strategy</caption>
            <thead><tr><th scope="col">Audience</th><th scope="col">Proposed construction</th><th scope="col">Use</th></tr></thead>
            <tbody>{metaAudienceRows.map(([audience, construction, use]) => <tr key={audience}><td>{audience}</td><td>{construction}</td><td>{use}</td></tr>)}</tbody>
          </table>
        </div>
        <div className={styles.calloutRow}>
          <Users size={20} />
          <p>Audience language must describe organisational processes without implying that the viewer or a specific person has a medical condition. Meta must not imply a viewer or their staff has a health condition.</p>
        </div>
        <div className={styles.prose}>
          <h3>Meta budget and learning design</h3>
          <ul>
            <li>Scenarios 1–3 all use one prospecting ad set at the independent delivery floor; no split across interests, broad, lookalike and retargeting ad sets at launch.</li>
            <li>The event-level learning check is provisional and assumption-based; it is not independently assessable until a real post-cleanup CPA exists.</li>
            <li>Future scaling may consider a geo-weighted or ACT-specific ad set only once volume supports a second ad set independently meeting the platform floor.</li>
            <li>Build retargeting audiences from launch, but keep a separate paid retargeting ad set parked until it can independently meet budget, audience and privacy requirements.</li>
          </ul>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Meta launch-quality requirements</caption>
            <thead><tr><th scope="col">Requirement</th><th scope="col">Launch standard</th></tr></thead>
            <tbody>
              <tr><td>Creative count</td><td>At least five creatives in the launch ad set.</td></tr>
              <tr><td>Format diversity</td><td>At least three materially different formats where production permits.</td></tr>
              <tr><td>Concept diversity</td><td>Concepts differ in angle, format, visual treatment, hook and headline—not merely minor variants.</td></tr>
              <tr><td>Diversity score</td><td>Pre-launch creative-diversity score of at least 8/10 under the concept, format, visual, hook and headline rubric.</td></tr>
              <tr><td>Video</td><td>No more than 15 seconds for Stories/Reels and no more than 30 seconds for Feed.</td></tr>
              <tr><td>Copy length</td><td>Headlines under 40 characters and primary text under 125 characters where practical.</td></tr>
              <tr><td>Fatigue review</td><td>Review every 14 days; CTR decline greater than 20% is a diagnosis flag, subject to sufficient delivery.</td></tr>
              <tr><td>Frequency</td><td>Aim for prospecting seven-day frequency below 3.0.</td></tr>
              <tr><td>Snapshot offer</td><td>The free 15-minute Workplace Ergonomics Risk Snapshot must be B2B-only, limited in scope and accompanied by: “{SNAPSHOT_CAVEAT}.”</td></tr>
              <tr><td>Proof</td><td>Do not use awards, logos, global FMCG references, ASX-listed enterprise-client proof or strong public review ratings unless cleared as client sign-off required before publication.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="linkedin">
        <SectionHeading
          label="LinkedIn ABM entry criteria · unfunded"
          title="Earn the premium after Search and Meta are measurable."
          copy="LinkedIn is not part of the current 70 / 20 / 10 operating model. A future pilot requires all criteria below, incremental funding and a measurement framework that can connect account engagement to pipeline."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Future pilot entry criteria</caption>
            <thead><tr><th scope="col">Entry criterion</th><th scope="col">Required evidence</th></tr></thead>
            <tbody>{linkedinRows.map(([criterion, evidence]) => <tr key={criterion}><td>{criterion}</td><td>{evidence}</td></tr>)}</tbody>
          </table>
        </div>
        <div className={styles.calloutRow}>
          <Crosshair size={20} />
          <p>Do not take funding from minimum-viable Meta or PMax, and do not compromise proven Search while the qualified-lead baseline is still forming.</p>
        </div>
      </section>

      <section className={styles.docSection} id="gates">
        <SectionHeading
          label="Data required before implementation"
          title="The remaining work is evidence, not more channel ideas."
          copy="These gates determine whether a proposed row can move from research into a live build, and whether a result can support a commercial decision."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Open implementation gates</caption>
            <thead><tr><th scope="col">Missing evidence</th><th scope="col">Why it matters</th></tr></thead>
            <tbody>{dataGates.map(([missing, why]) => <tr key={missing}><td>{missing}</td><td>{why}</td></tr>)}</tbody>
          </table>
        </div>
        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p>Every Snapshot placement must keep the caveat adjacent: “{SNAPSHOT_CAVEAT}.” No guarantee of injury prevention, WHS compliance or claims reduction is permitted.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p>Confidential · For client review only</p>
      </footer>
    </main>
  );
}
