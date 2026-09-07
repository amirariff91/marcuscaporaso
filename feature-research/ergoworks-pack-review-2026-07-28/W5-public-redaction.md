tring, Gate> = {
    45	  A1: {
    46	    id: "A1",
    47	    priority: "Critical",
    48	    owner: "Oz and Ruth — senior ergonomics leads",
    49	    status: "Open",
    50	    question:
    51	      "Can each of the six services pass a delivery-capacity and readiness matrix covering owner, scope, geography, weekly capacity, response SLA, quality control, delivery cost, dependencies and escalation? A service that fails stays out of acquisition messaging.",
    52	    blocks: "Which services we can honestly promise; paid acquisition must not point at a service that has not passed the readiness matrix.",
    53	  },
    54	  A2: {
    55	    id: "A2",
    56	    priority: "High",
    57	    owner: "Oz and Ruth — senior ergonomics leads",
    58	    status: "Open",
    59	    question:
    60	      "Is the competitor field complete, and do we genuinely out-deliver the competitors we differentiate against? Confirm the shortlist and any panel or incumbent competitors that could displace us.",
    61	    blocks: "The accuracy of the competitor shortlist and any differentiation claim.",
    62	  },
    63	  A3: {
    64	    id: "A3",
    65	    priority: "High",
    66	    owner: "Oz and Ruth — senior ergonomics leads",
    67	    status: "Open",
    68	    question:
    69	      "What do we issue after training: an accredited certificate, a statement of attainment, an attendance record or another approved record?",
    70	    blocks: "Manual-handling positioning, training copy and publication.",
    71	  },
    72	  A4: {
    73	    id: "A4",
    74	    priority: "High",
    75	    owner: "Oz and Ruth — senior ergonomics leads",
    76	    status: "Open",
    77	    question:
    78	      "Which services are actually delivered where and how, including floor-walk staffing, home-visit geography, office-move capability and onboarding or support? Are care-sector, online and refresher services supported?",
    79	    blocks: "The first-touch model, geography, care/online/refresher modules and targeting.",
    80	  },
    81	  A5: {
    82	    id: "A5",
    83	    priority: "Medium",
    84	    owner: "Oz and Ruth — senior ergonomics leads",
    85	    status: "Open",
    86	    question:
    87	      "What competitor quotes have you observed for assessment, sweep, training and retainer work? These are needed to sanity-check the currently directional pricing bands.",
    88	    blocks: "Pricing bands and the commercial comparison.",
    89	  },
    90	  B1: {
    91	    id: "B1",
    92	    priority: "Critical",
    93	    owner: "Marcus",
    94	    status: "Open",
    95	    question:
    96	      "I need the unit economics per service: average contract value, close rate, gross margin, delivery cost, sales-cycle length and acceptable payback. The observed 30-day media cost is A$274 per strict recorded lead event, or A$222 under the looser event definition; neither is acquisition cost; both are raw-lead sensitivities, not qualified-lead performance or a target CPA.",
    97	    blocks: "The investment case, scaling, affordable qualified-lead cost and bid strategy.",
    98	    evidence: [
    99	      { id: "6a.6", label: "recent spend" },
   100	      { id: "6a.7", label: "recorded lead events" },
   101	      { id: "6a.8", label: "media cost per recorded lead" },
   102	    ],
   103	  },
   104	  B2: {
   105	    id: "B2",
   106	    priority: "Critical",
   107	    owner: "Marcus",
   108	    status: "Open",
   109	    question:
   110	      "I need the attach-rate backfill by organisation: originating problem, first service, employee population, subsequent services, revenue, margin, sales cycle and retention. I will set the minimum expansion rate and account value that justify acquisition. Aggregate equipment-order evidence shows 209 orders, 133 raw organisation strings and 19 repeat organisations, accounting for 53 of 167 company-attributed orders; it does not show that a consulting engagement caused any order.",
   111	    blocks: "Whether the ecosystem thesis is real and whether cross-population acquisition is justified.",
   112	    evidence: [
   113	      { id: "6c.1", label: "order volume" },
   114	      { id: "6c.3", label: "raw organisation strings" },
   115	      { id: "6c.4", label: "aggregate repeat-order counts" },
   116	      { id: "6c.8", label: "equipment-order scope caveat" },
   117	    ],
   118	  },
   119	  B3: {
   120	    id: "B3",
   121	    priority: "Critical",
   122	    owner: "Marcus",
   123	    status: "Open",
   124	    question:
   125	      "I need to know which lead-management system is in use and whether it can store click attribution, consent, an organisation account, service stages and values.",
   126	    blocks: "The measurement spine, offline value feedback and qualified-pipeline reporting.",
   127	  },
   128	  B11: {
   129	    id: "B11",
   130	    priority: "Critical",
   131	    owner: "Marcus",
   132	    status: "Open — partial evidence",
   133	    question:
   134	      "I need to know where equipment gross margin lives. Current evidence shows 531 published products with none carrying a populated non-zero cost-of-goods value, so no equipment contribution or lifetime-value figure can yet be produced.",
   135	    blocks: "The margin claim, equipment contribution and any lifetime-value-to-acquisition-cost work.",
   136	    evidence: [{ id: "6c.7", label: "gross-margin evidence" }],
   137	  },
   138	  B12: {
   139	    id: "B12",
   140	    priority: "Critical",
   141	    owner: "Marcus — instrumentation; client input on phone routing",
   142	    status: "Open",
   143	    question:
   144	      "The account records 13 connected-call conversions, but the platform view shows no call that rang out. I need the unconnected-call count and the current phone-routing path from the client; this is the cheapest unknown with the highest option value before I interpret the call funnel.",
   145	    blocks: "The real call-funnel baseline, missed-call recovery and any trustworthy assessment of call-led demand.",
   146	    evidence: [{ id: "6a.7", label: "recorded call conversions" }],
   147	  },
   148	  B13: {
   149	    id: "B13",
   150	    priority: "High",
   151	    owner: "Marcus",
   152	    status: "Open",
   153	    question:
   154	      "Observed baseline check: the latest 30-day spend is A$4,652.53, versus A$42,285.61 over the trailing 12 months (about A$3,524 per month), so the latest 30-day window is about 32% above the trailing average. Is that window representative enough for me to anchor plan ratios to it? These figures are observations, not a target, acquisition cost or proven result.",
   155	    blocks: "Whether the plan's ratios, pacing comparisons and budget interpretation rest on a representative baseline.",
   156	    evidence: [
   157	      { id: "6a.3", label: "trailing annual spend" },
   158	      { id: "6a.6", label: "last-30-day account activity" },
   159	    ],
   160	  },
   161	  B14: {
   162	    id: "B14",
   163	    priority: "High",
   164	    owner: "Marcus",
   165	    status: "Open",
   166	    question:
   167	      "Observed click-to-session gap: 385 ad clicks in 30 days annualise to about 1,155 over 90 days, versus 830 paid-search sessions in first-party analytics — sessions are roughly 28% below clicks. I need to assess whether this represents uncounted leads, attribution or session loss, or a tracking defect; it is not itself a proven result.",
   168	    blocks: "The click-to-session reconciliation, lead-capture completeness and any trustworthy interpretation of paid-search ratios.",
   169	    evidence: [
   170	      { id: "6g.8", label: "click-to-session comparison" },
   171	      { id: "6a.6", label: "last-30-day account activity" },
   172	    ],
   173	  },
   174	  B4: {
   175	    id: "B4",
   176	    priority: "High",
   177	    owner: "Marcus",
   178	    status: "Open",
   179	    question:
   180	      "Which proof assets are substantiated in writing: client names, logos, named enterprise references and outcomes? No unverifiable outcome claim ships.",
   181	    blocks: "Proof modules, landing-page sections, creative and publication.",
   182	  },
   183	  B5: {
   184	    id: "B5",
   185	    priority: "High",
   186	    owner: "Marcus",
   187	    status: "Open",
   188	    question:
   189	      "What exact fulfilment promise can I make for the free 15-minute Workplace Ergonomics Risk Snapshot (proposed, pending the GO/NO-GO at C1): owner, weekly capacity, format, turnaround and response SLA? Copy must promise only what delivery can sustain, and every placement carries the caveat adjacent to the call to action: “Preliminary guidance only—not a compliance assessment, compliance certification, medical assessment or diagnosis.”",
   190	    blocks: "Snapshot wording, availability, pacing and the follow-up workflow.",
   191	  },
   192	  B6: {
   193	    id: "B6",
   194	    priority: "High",
   195	    owner: "Marcus",
   196	    status: "Open",
   197	    question:
   198	      "I need the qualified-corporate-lead rule: organisation, role, workforce or site-size band, problem, location and timeframe. A company email alone is insufficient; corporate buyers must not be rejected because they use a personal email.",
   199	    blocks: "The lead definition, qualification feedback and optimisation target.",
   200	  },
   201	  B7: {
   202	    id: "B7",
   203	    priority: "High",
   204	    owner: "Marcus",
   205	    status: "Open",
   206	    question:
   207	      "I need a vendor-neutral equipment policy. Is supply optional, is any relationship disclosed, is advice documented independently of the product and are client panels accommodated?",
   208	    blocks: "The trust guardrail for equipment advice and cross-sell.",
   209	  },
   210	  B8: {
   211	    id: "B8",
   212	    priority: "High",
   213	    owner: "Marcus",
   214	    status: "Open",
   215	    question:
   216	      "I need to confirm whether the consulting and equipment businesses share a legal entity, customer records or referral fees, and whether an organisation-level join is permissible. Feasibility is not the blocker: 167 of 209 orders carry a billing-company name, while the same organisation appears under variant spellings, so any join must be manually validated rather than automatic.",
   217	    blocks: "Whether organisation-level records may be joined and used in a cross-sell ledger.",
   218	    evidence: [
   219	      { id: "6c.2", label: "organisation attribution" },
   220	      { id: "6c.6", label: "variant-spelling evidence" },
   221	    ],
   222	  },
   223	  B9: {
   224	    id: "B9",
   225	    priority: "High",
   226	    owner: "Marcus",
   227	    status: "Open",
   228	    question:
   229	      "I will not put a competitor paid-ad claim in a client-facing deliverable until the footprint has been verified.",
   230	    blocks: "Client-facing competitor advertising claims.",
   231	  },
   232	  B10: {
   233	    id: "B10",
   234	    priority: "Medium",
   235	    owner: "Marcus",
   236	    status: "Open",
   237	    question:
   238	      "I need the landing-page developer, delivery window, hosting decision and private route for the shareable page.",
   239	    blocks: "The landing-page build schedule, route, hosting, QA and destination mapping.",
   240	  },
   241	  C1: {
   242	    id: "C1",
   243	    priority: "Critical",
   244	    owner: "Client (via Greg)",
   245	    status: "Open",
   246	    question:
   247	      "GO/NO-GO on the offer and routing: approve the free 15-minute Workplace Ergonomics Risk Snapshot as the launch offer, the corporate-gated two-flow and the route for individuals with no lead event. Every placement must carry this caveat adjacent to the call to action: “Preliminary guidance only—not a compliance assessment, compliance certification, medical assessment or diagnosis.”",
   248	    blocks: "The landing-page build, form flow, creative and any launch publication.",
   249	  },
   250	  C2: {
   251	    id: "C2",
   252	    priority: "High",
   253	    owner: "Client (via Greg)",
   254	    status: "Open",
   255	    question:
   256	      "Should paid-social funding be incremental or reallocated, and is access to the correct advertising account and domain-verification controls available? The 20% test cannot proceed without that access decision.",
   257	    blocks: "The paid-social test and its 20% allocation.",
   258	    evidence: [{ id: "6e.1", label: "accessible-account check" }],
   259	  },
   260	  C3: {
     1	import type { Metadata } from "next";
     2	import type { ReactNode } from "react";
     3	import {
     4	  ArrowDown,
     5	  Check,
     6	  CircleAlert,
     7	  LockKeyhole,
     8	  ShieldCheck,
     9	} from "lucide-react";
    10	import styles from "../plan.module.css";
    11	
    12	export const metadata: Metadata = {
    13	  title: "ErgoWorks Consulting — Measurement",
    14	  description:
    15	    "Private sponsor summary and implementation specification for consent-gated CRM and conversion measurement.",
    16	  robots: { index: false, follow: false },
    17	};
    18	
    19	const spineRows = [
    20	  [
    21	    "Account (employer)",
    22	    <><code>organisation_account_id</code> per legal entity; sites, business unit, buying-centre contacts, panel/incumbent status and renewal date.</>,
    23	    "The single canonical join key. It is manually validated before an account is joined across stacks.",
    24	  ],
    25	  [
    26	    "Lead",
    27	    <><code>lead_id</code>; <code>organisation_account_id</code>; first-touch service; source, channel and campaign; Google click identifiers or the Meta click identifier; consent flags; created date; and, for calls, call id, connected duration and CRM disposition.</>,
    28	    "CRM is the system of record, not the ad platform.",
    29	  ],
    30	  [
    31	    "Call attempt",
    32	    <><code>call_id</code>; attempt timestamp; connection status; connected duration; missed reason (ring-out, abandoned, out-of-hours or voicemail); answer timestamp; callback requested, completed and timestamp; callback SLA result; and CRM disposition.</>,
    33	    "I retain connected and unconnected attempts together so answer rate, missed-call recovery and callback performance can be reconciled with the connected-call conversion count.",
    34	  ],
    35	  [
    36	    "Opportunity / stage",
    37	    "Service line; enquiry, qualified and won stages; contract value; start date and end date.",
    38	    "A won consulting engagement is the outcome returned through the offline loop.",
    39	  ],
    40	  [
    41	    "Equipment order",
    42	    <><code>order_id</code>; <code>organisation_account_id</code>; order value; and nullable gross margin.</>,
    43	    "Held in the equipment stack and joined only in the internal account view.",
    44	  ],
    45	  [
    46	    "Worker data",
    47	    "Assessment and health information kept separate from the employer account and sales records.",
    48	    "Never merged into marketing audiences or ad-platform records.",
    49	  ],
    50	] as const;
    51	
    52	const platformRows = [
    53	  [
    54	    "Qualified corporate enquiry",
    55	    "Primary consulting signal. It is a qualified enquiry, not a raw form-fill and not a newsletter sign-up.",
    56	    "Consulting ad platforms after the consent and conversion gates are cleared.",
    57	  ],
    58	  [
    59	    <><code>qualified_call</code></>,
    60	    "The only primary call signal. Call id, connected duration and CRM disposition are required; the CRM disposition is authoritative and calls are deduplicated against form submissions from the same organisation.",
    61	    <>Import through the qualified-call path in Appendix C §7 and §12. The rule itself is the client’s to set and is still open at <a href="/ergoworks/plan/decisions#gate-B6">gate B6</a>.</>,
    62	  ],
    63	  [
    64	    "Unconnected and missed call attempts",
    65	    "I capture every attempted call, not only calls that connect: ring-out, abandoned, out-of-hours and voicemail, with timestamp, outcome, callback request, callback completion and callback SLA. These are diagnostic and recovery records, not primary conversions.",
    66	    <>Reconcile attempt count, answer rate and missed-call recovery against connected-call conversions and CRM disposition under the call-funnel and recovery rule at <a href="/ergoworks/plan/decisions#gate-B12">gate B12</a>, before any call signal is promoted under the qualification rule at <a href="/ergoworks/plan/decisions#gate-B6">gate B6</a>.</>,
    67	  ],
    68	  [
    69	    "Won consulting engagement",
    70	    "Offline conversion import, using the retained click identifier and the CRM-confirmed won stage. Consulting contract value may be included when approved.",
    71	    "Consulting ad platforms for outcome learning and reporting; not equipment revenue.",
    72	  ],
    73	  [
    74	    "Newsletter and raw actions",
    75	    "Not primary conversion signals. Newsletter, soft clicks and raw form activity remain diagnostic or secondary until the CRM confirms commercial qualification.",
    76	    <>The live account still has <EvidenceLink id="6a.9">16 enabled actions marked primary</EvidenceLink>; cleanup is not complete.</>,
    77	  ],
    78	  [
    79	    "Equipment revenue",
    80	    "Never imported into the consulting ad account. It stays in the equipment stack and the internal account-level view.",
    81	    "No blended consulting-plus-equipment ROAS from any ad account.",
    82	  ],
    83	  [
    84	    "Worker health or assessment data",
    85	    "Never sent to an ad platform, audience or customer-match list, even if transformed or hashed.",
    86	    "Excluded by the privacy boundary.",
    87	  ],
    88	  [
    89	    "Individual-flow route-out",
    90	    "The route-out fires no lead or advertising event. Individuals are not turned into a corporate lead by the measurement layer.",
    91	    "No platform destination.",
    92	  ],
    93	] as const;
    94	
    95	const guardrailRows = [
    96	  [
    97	    "Collection notices",
    98	    "Keep assessment delivery, account management, service cross-sell and equipment marketing purposes distinct. Consent is granular, not bundled.",
    99	  ],
   100	  [
   101	    "Health and assessment information",
   102	    "Purpose-limited and separated from sales and marketing. It does not build ad audiences or marketing lists.",
   103	  ],
   104	  [
   105	    "Access",
   106	    "Use role-based access so clinical or assessment records cannot become sales or advertising inputs.",
   107	  ],
   108	  [
   109	    "Suppression",
   110	    "Apply purpose limitation and suppression to any recirculated lead. Withdrawal stops future processing and follows the approved deletion workflow.",
   111	  ],
   112	] as const;
   113	
   114	const sequenceRows = [
   115	  [
   116	    "0 · Privacy and tracking-stack gates",
   117	    <>Clear Australian privacy sign-off at <a href="/ergoworks/plan/decisions#gate-C5">gate C5</a>. Confirm the tag-manager container, consent platform and legacy analytics tag at <a href="/ergoworks/plan/decisions#gate-C6b">gate C6b</a>. No CRM audience, cross-brand join or offline upload is built before this step.</>,
   118	  ],
   119	  [
   120	    "1 · Conversion action repair",
   121	    <>Set one qualified corporate enquiry as primary, add the qualified-call path, demote newsletter and soft actions account-wide, and exclude physiotherapy actions from the Consulting campaign with campaign-specific goals — the physiotherapy campaign's goal set is defined in the same step, so neither campaign optimises towards the other's actions. The current mixed state is documented at <a href="/ergoworks/plan/evidence#evidence-6a.9">evidence 6a.9</a>.</>,
   122	  ],
   123	  [
   124	    "2 · CRM spine",
   125	    <>Choose the CRM at <a href="/ergoworks/plan/decisions#gate-B3">gate B3</a>; then implement <code>organisation_account_id</code>, click-ID capture, call capture, service stages and consent records.</>,
   126	  ],
   127	  [
   128	    "3 · Won-lead offline loop",
   129	    "Import won consulting engagements only after identifiers, consent evidence, deduplication and timing are tested. This is the Appendix C §7 loop, not a live change authorised by this page.",
   130	  ],
   131	  [
   132	    "4 · Internal account-level view",
   133	    <>Join consulting outcomes and equipment orders on manually validated <code>organisation_account_id</code>, subject to the legal-entity and record-permission decision at <a href="/ergoworks/plan/decisions#gate-B8">gate B8</a>.</>,
   134	  ],
   135	  [
   136	    "5 · Reporting",
   137	    <>Report associated cross-sell value, attach rates and account-level outcomes separately from platform ROAS. Do not call it LTV until <a href="/ergoworks/plan/decisions#gate-B1">gate B1</a> supplies the required economics.</>,
   138	  ],
   139	] as const;
   140	
   141	function EvidenceLink({ id, children }: { id: string; children: ReactNode }) {
   142	  return <a href={`/ergoworks/plan/evidence#evidence-${id}`}>{children}</a>;
   143	}
   144	
   145	function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: ReactNode }) {
   146	  return (
   147	    <div className={styles.sectionHeading}>
   148	      <p>{label}</p>
   149	      <h2>{title}</h2>
   150	      {copy ? <span>{copy}</span> : null}
   151	    </div>
   152	  );
   153	}
   154	
   155	export default function MeasurementPage() {
   156	  return (
   157	    <main className={styles.page}>
   158	      <header className={styles.hero}>
   159	        <nav className={styles.nav} aria-label="Document information">
   160	          <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
   161	          <div className={styles.private}><LockKeyhole size={14} /> Private implementation specification</div>
   162	        </nav>
   163	
   164	        <div className={styles.heroGrid}>
   165	          <div>
   166	            <p className={styles.kicker}>Cross-population measurement · Revised plan v2 · 25 July 2026</p>
   167	            <h1>Measure the account we actually earn.</h1>
   168	            <p className={styles.heroCopy}>
   169	              I am not promising that one lead qualifies an account for every service. I am specifying
   170	              an internal, consent-controlled view of what a qualified consulting lead actually opens,
   171	              while keeping platform bidding, privacy and account boundaries honest.
   172	            </p>
   173	          </div>
   174	
   175	          <aside className={styles.summary}>
   176	            <p>Sponsor summary</p>
   177	            <h2>Approve the boundary before the build.</h2>
   178	            <ul>
   179	              <li><Check size={17} /> Qualified corporate enquiries and qualified calls are the commercial signals.</li>
   180	              <li><Check size={17} /> Equipment value is reported internally, never blended into platform ROAS.</li>

codex
Audited [page.tsx](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx). No blocker-level leak found, but these major issues should be fixed before publication.

| line | issue | severity | suggested fix |
|---|---|---|---|
| 149–151, 299 | Identifies the unnamed second service line as manual-handling training. | major | Use “the non-consulting service line” / “that service line”. |
| 107–109, 122–132, 310–311, 344–346, 407–409 | Platform-recorded events are repeatedly labelled “leads”, despite not being deduplicated, qualified enquiries. | major | Consistently say “platform-recorded lead events”; retain the qualification caveat. |
| 186–187 | “The business is paid-dependent” overstates evidence showing only 48% of sessions from Paid Search. | major | Say “Paid Search is currently the largest search source, so I would protect it while the test runs.” |
| 386–389 | “No social activity exists” is stronger than the gated evidence, which supports only no verified recent activity. | major | Say “I found no verified recent paid-social activity to inherit.” |
| 219–221 | “A corporate flow that converts” implies a guaranteed outcome. | major | Say “a corporate flow whose qualified conversion performance we can measure.” |
| 273–278 | A media-spend cap is described as a “maximum test loss”. | major | Use “maximum paid-media exposure” or “media-spend cap” unless total loss is defined. |
| 78–79, 288, 336–337, 344–348, 365–367, 488–489 | Exposes internal pack/process language: “evidence record”, “audit trail”, “supporting gates”, “decision bundle”, “verdict”, “certify”, and “veto”. | major | Keep the protected links, but use client-facing language such as “supporting detail”, “funding decision”, and “confirm”. |
| 249, 444–445, 452–453 | “Existing instruction”, “approvals”, “quarantine”, “credential question”, and “tracking-stack checks” expose internal operational process/tooling. | major | Rephrase as plain actions: “I am not asking for additional Search spend at this stage”, “pause the activity under review”, and “confirm privacy and measurement safeguards”. |
| 73, 498–499 | “Re-verified” and “verified against live sources” reveal review mechanics. | minor | Use “Information current to 28 July 2026.” |
| 318–319 | “Approving costs nothing” is an unnecessarily absolute financial claim. | minor | Say “The pause itself does not add media spend; waiting leaves the observed run rate in place.” |
| 437 | “Every result becomes uninterpretable” is over-absolute. | minor | Say “Results become harder to interpret if we run this out of order.” |

### Passed checks

- Metadata retains `noindex, nofollow`.
- No account IDs, credentials, exact keyword text, or ad-group names appear on the public page.
- No competitors, named enterprises, or other client organisations are named.
- Aggregate spend and lead figures are present, with the main issue being labelling rather than inclusion.
- Equipment activity is described generically and its relationship to consulting is explicitly non-causal.
- The gated `/ergoworks/plan/*` routes are protected by Basic Auth in `src/proxy.ts`.
hook: Stop
hook: Stop Completed
tokens used
104,020
Audited [page.tsx](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx). No blocker-level leak found, but these major issues should be fixed before publication.

| line | issue | severity | suggested fix |
|---|---|---|---|
| 149–151, 299 | Identifies the unnamed second service line as manual-handling training. | major | Use “the non-consulting service line” / “that service line”. |
| 107–109, 122–132, 310–311, 344–346, 407–409 | Platform-recorded events are repeatedly labelled “leads”, despite not being deduplicated, qualified enquiries. | major | Consistently say “platform-recorded lead events”; retain the qualification caveat. |
| 186–187 | “The business is paid-dependent” overstates evidence showing only 48% of sessions from Paid Search. | major | Say “Paid Search is currently the largest search source, so I would protect it while the test runs.” |
| 386–389 | “No social activity exists” is stronger than the gated evidence, which supports only no verified recent activity. | major | Say “I found no verified recent paid-social activity to inherit.” |
| 219–221 | “A corporate flow that converts” implies a guaranteed outcome. | major | Say “a corporate flow whose qualified conversion performance we can measure.” |
| 273–278 | A media-spend cap is described as a “maximum test loss”. | major | Use “maximum paid-media exposure” or “media-spend cap” unless total loss is defined. |
| 78–79, 288, 336–337, 344–348, 365–367, 488–489 | Exposes internal pack/process language: “evidence record”, “audit trail”, “supporting gates”, “decision bundle”, “verdict”, “certify”, and “veto”. | major | Keep the protected links, but use client-facing language such as “supporting detail”, “funding decision”, and “confirm”. |
| 249, 444–445, 452–453 | “Existing instruction”, “approvals”, “quarantine”, “credential question”, and “tracking-stack checks” expose internal operational process/tooling. | major | Rephrase as plain actions: “I am not asking for additional Search spend at this stage”, “pause the activity under review”, and “confirm privacy and measurement safeguards”. |
| 73, 498–499 | “Re-verified” and “verified against live sources” reveal review mechanics. | minor | Use “Information current to 28 July 2026.” |
| 318–319 | “Approving costs nothing” is an unnecessarily absolute financial claim. | minor | Say “The pause itself does not add media spend; waiting leaves the observed run rate in place.” |
| 437 | “Every result becomes uninterpretable” is over-absolute. | minor | Say “Results become harder to interpret if we run this out of order.” |

### Passed checks

- Metadata retains `noindex, nofollow`.
- No account IDs, credentials, exact keyword text, or ad-group names appear on the public page.
- No competitors, named enterprises, or other client organisations are named.
- Aggregate spend and lead figures are present, with the main issue being labelling rather than inclusion.
- Equipment activity is described generically and its relationship to consulting is explicitly non-causal.
- The gated `/ergoworks/plan/*` routes are protected by Basic Auth in `src/proxy.ts`.
