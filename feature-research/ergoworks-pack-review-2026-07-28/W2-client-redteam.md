,
        date: "25 July 2026 pull; trailing 12 months",
        status: "Verified",
        establishes: "The account-expansion thesis still needs a validated join between consulting and store records.",
        doesNotEstablish: "It does not establish consulting-to-equipment attribution or an attach rate.",
      },
    ],
  },
  {
    id: "6d",
    label: "6d · Live site markup",
    source: "www.ergoworksconsulting.com.au",
    records: [
      {
        id: "6d.1",
        claim: "Tag manager",
        value: "GTM-KXGD4GM is present in the live markup.",
        source: "Live site markup",
        date: "25 July 2026",
        status: "Verified",
        establishes: "A tag-manager container is part of the current site delivery path.",
        doesNotEstablish: "It does not establish which tags fire in-browser or whether consent blocks them correctly.",
      },
      {
        id: "6d.2",
        claim: "Legacy analytics",
        value: "UA-530267-5, a Universal Analytics tag, is still present in the initial HTML; whether it executes was not verified.",
        source: "Live site markup",
        date: "25 July 2026",
        status: "Verified",
        establishes: "Legacy analytics residue remains in the initial HTML and needs cleanup consideration.",
        doesNotEstablish: "It does not establish that the tag sends live data or that current GA4 reporting is absent.",
      },
      {
        id: "6d.3",
        claim: "GA4 measurement ID in initial HTML",
        value: "No GA4 measurement ID was found in the initial HTML; GA4 may be injected through the tag manager.",
        source: "Live site markup",
        date: "25 July 2026",
        status: "Interpretation",
        establishes: "The initial HTML alone is insufficient to verify the full analytics implementation.",
        doesNotEstablish: "It does not establish that GA4 is absent.",
      },
      {
        id: "6d.4",
        claim: "Meta pixel in initial HTML",
        value: "No Meta pixel was found in the initial HTML; the tag manager could inject one.",
        source: "Live site markup",
        date: "25 July 2026",
        status: "Interpretation",
        establishes: "The initial HTML supports a cautious Meta setup assumption pending an in-browser check.",
        doesNotEstablish: "It does not establish that no pixel or server-side Meta setup exists.",
      },
      {
        id: "6d.5",
        claim: "Consent-management platform in initial HTML",
        value: "No consent-management platform was found in the initial HTML.",
        source: "Live site markup",
        date: "25 July 2026",
        status: "Interpretation",
        establishes: "The assumed consent sequence still needs an in-browser verification.",
        doesNotEstablish: "It does not establish that consent controls are absent from runtime behaviour.",
      },
      {
        id: "6d.6",
        claim: "Geography commitment",
        value: "The live page names Sydney and Melbourne only; it does not make an Australia-wide commitment.",
        source: "Live site markup",
        date: "25 July 2026",
        status: "Verified",
        establishes: "The live site creates a geography constraint for launch messaging and routing.",
        doesNotEstablish: "It does not establish delivery capacity in either city or the approved future service area.",
      },
    ],
  },
  {
    id: "6e",
    label: "6e · Meta",
    source: "Meta account access check",
    records: [
      {
        id: "6e.1",
        claim: "Accessible Meta stack",
        value: "No ErgoWorks Meta ad account was reachable through the connected access; this means no confirmed accessible stack, not proof that no account exists.",
        source: "Meta",

exec
/bin/zsh -lc "sed -n '400,550p' src/app/ergoworks/plan/evidence/page.tsx" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
        source: "Meta",
        date: "25 July 2026",
        status: "Unverified",
        establishes: "Meta access and recent activity remain unconfirmed from the available account view.",
        doesNotEstablish: "It does not establish that no Meta account, campaign, pixel or dataset exists.",
      },
    ],
  },
  {
    id: "6f",
    label: "6f · Verification record — access checks",
    source: "Verification record",
    records: [
      {
        id: "6f.1",
        claim: "GA4 access status",
        value: "GA4 access was restored and the figures were pulled directly; see 6g for the verified results.",
        source: "GA4 property 316175981",
        date: "25 July 2026",
        status: "Verified",
        establishes: "GA4 is available as a direct source for this evidence cut-off.",
        doesNotEstablish: "It does not establish that every analytics implementation detail is correct; those checks remain separately scoped.",
      },
      {
        id: "6f.2",
        claim: "Microsoft Clarity",
        value: "No usable ErgoWorks Clarity project was available at the 25 July 2026 evidence cut-off.",
        source: "Microsoft Clarity access check",
        date: "25 July 2026",
        status: "Unverified",
        establishes: "Clarity cannot be used as a verified source in this evidence cut.",
        doesNotEstablish: "It does not establish that the business can never provide a usable project or that no other qualitative data exists.",
      },
      {
        id: "6f.3",
        claim: "Competitor paid-advertising footprint",
        value: "Unchecked at the 25 July 2026 evidence cut-off; the Google Ads Transparency Center and Meta Ad Library review remains open.",
        source: "Verification record",
        date: "25 July 2026",
        status: "Unverified",
        establishes: "No claim about a named competitor advertising on a named platform should ship from this record.",
        doesNotEstablish: "It does not establish that competitors are or are not running paid advertising.",
      },
    ],
  },
  {
    id: "6g",
    label: "6g · GA4",
    source: "Property 316175981; Australia/Sydney timezone",
    records: [
      {
        id: "6g.1",
        claim: "Total sessions",
        value: "1,716 sessions.",
        source: "GA4",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",
        status: "Verified",
        establishes: "The first-party session total for the stated period.",
        doesNotEstablish: "It does not establish unique people, qualified visits, or commercial outcomes.",
      },
      {
        id: "6g.2",
        claim: "Sessions by channel",
        value: "Paid Search 830; Organic Search 561; Direct 258; Referral 43; Cross-network 12; AI Assistant 7; Unassigned 5.",
        source: "GA4",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",
        status: "Verified",
        establishes: "The channel mix and the relative weight of paid and organic search in first-party analytics.",
        doesNotEstablish: "It does not establish lead quality, attribution accuracy, or the identity of referral visitors.",
      },
      {
        id: "6g.3",
        claim: "Paid social",
        value: "No Paid Social channel row and no Facebook, Instagram or Meta source in the source/medium breakdown.",
        source: "GA4",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",
        status: "Verified",
        establishes: "There is no verified recent paid-social session activity in this property and period.",
        doesNotEstablish: "It does not establish that no Meta account or historical campaign exists.",
      },
      {
        id: "6g.4",
        claim: "Top source/medium rows",
        value: "google / cpc 830; google / organic 477; direct 258; bing / organic 75; chatgpt.com 14; assorted referrals no higher than 7 each.",
        source: "GA4",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",
        status: "Verified",
        establishes: "The largest first-party source/medium rows behind the channel totals.",
        doesNotEstablish: "It does not establish the quality or intent of any source/medium row.",
      },
      {
        id: "6g.5",
        claim: "Paid dependence quantified",
        value: "Paid Search is 48% of all sessions and outweighs Organic Search 830 to 561.",
        source: "GA4",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",
        status: "Verified",
        establishes: "First-party analytics supports the conclusion that paid Search is currently the larger search source.",
        doesNotEstablish: "It does not establish that paid Search is more profitable or should receive every future growth dollar.",
      },
      {
        id: "6g.6",
        claim: "Organic-volume reconciliation",
        value: "GA4 records about 477 google/organic sessions in 90 days (about 159 per month); this first-party figure is preferred where external estimates differ.",
        source: "GA4",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",
        status: "Verified",
        establishes: "The authoritative first-party organic session figure for this page’s evidence cut.",
        doesNotEstablish: "It does not establish why external models differ or that all organic sessions are commercial visits.",
      },
      {
        id: "6g.7",
        claim: "Workplace referral signal",
        value: "Some referrals came from workplace intranets and collaboration infrastructure; identifying source names are intentionally withheld.",
        source: "GA4",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",
        status: "Verified",
        establishes: "There is a small, real workplace-readership signal in referral traffic.",
        doesNotEstablish: "It does not establish the identity of visiting companies, buying intent, or a scalable channel.",
      },
      {
        id: "6g.8",
        claim: "Click-to-session gap",
        value: "385 ad clicks in 30 days annualise to about 1,155 per 90 days against 830 GA4 Paid Search sessions, or about 72%.",
        source: "Google Ads and GA4",
        date: "25 July 2026 pull; comparison uses the stated 30- and 90-day windows",
        status: "Interpretation",
        establishes: "The scale of the click/session discrepancy is consistent with the need for tracking hygiene work.",
        doesNotEstablish: "It does not prove a single tracking fault, lost users, or invalid advertising traffic.",
      },
    ],
  },
];

const anchorStyle = { scrollMarginTop: "4.5rem" } as const;

export default function EvidencePage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> Evidence register</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private &amp; confidential</div>
        </nav>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Traceability index · Evidence cut-off 25 July 2026</p>
            <h1>What each number can actually support.</h1>
            <p className={styles.heroCopy}>
              I pulled every figure here read-only from live sources. This page is the compact trail
              behind the recommendation: start with the few numbers that drive it, then follow each

exec
/bin/zsh -lc "sed -n '1,220p' src/app/ergoworks/plan/evidence/page.tsx" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  CircleAlert,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import styles from "../plan.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Evidence",
  description: "Private evidence traceability index for the ErgoWorks Consulting review pack.",
  robots: { index: false, follow: false },
};

type EvidenceRecord = {
  id: string;
  claim: string;
  value: string;
  source: string;
  date: string;
  status: "Verified" | "Interpretation" | "Assumption" | "Unverified";
  establishes: string;
  doesNotEstablish: string;
};

const headlineEvidence: EvidenceRecord[] = [
  {
    id: "6a.7",
    claim: "Recorded lead events, last 30 days",
    value: "17 total: 4 form enquiries + 13 phone calls. Counting the phone-click (3) and email-click (1) actions as well gives 21.",
    source: "Google Ads account 9258098368",
    date: "25 July 2026 pull; 30-day window ending 24 July 2026",
    status: "Verified",
    establishes: "In this one 30-day window the recorded mix is phone-led: 13 of 17 events are call conversions. One month is not a stable channel proportion.",
    doesNotEstablish:
      "It does not establish lead qualification, revenue, a stable future call mix, or that every platform conversion is a genuine enquiry.",
  },
  {
    id: "6a.8",
    claim: "Media cost per recorded lead event",
    value: "A$273.68 strict (A$4,652.53 ÷ 17); A$221.55 loose (÷ 21, including the phone-click and email-click actions).",
    source: "Google Ads account 9258098368; derived from 6a.6 and 6a.7",
    date: "25 July 2026 pull; 30-day window ending 24 July 2026",
    status: "Verified",
    establishes: "Descriptive media-cost arithmetic for the stated 30-day window: spend divided by recorded lead events. It is not qualified-lead cost, acquisition cost or a target cost per lead.",
    doesNotEstablish:
      "It does not establish qualified CAC, unit economics, profitability, or a sustainable target CPA.",
  },
  {
    id: "6a.4",
    claim: "Manual-handling spend concentration",
    value:
      "A$17,237.87: 40.8% of campaign spend, or 49.4% of keyword-targeted ad-group spend after excluding the DSA group (A$7,407.69).",
    source: "Google Ads account 9258098368",
    date: "Trailing 12 months to 24 July 2026",
    status: "Verified",
    establishes: "The Manual Handling Training ad group is the dominant spend concentration under both stated denominators.",
    doesNotEstablish:
      "The 49.4% figure is not 49.4% of total campaign spend, and it does not establish that every keyword in the group is inefficient.",
  },
  {
    id: "6a.3",
    claim: "Trailing Search spend",
    value: "A$42,285.61 over 25 July 2025–24 July 2026.",
    source: "Google Ads account 9258098368",
    date: "25 July 2026 pull; trailing 12-month window",
    status: "Verified",
    establishes: "The live account supports the approximate A$40k-per-year Search premise.",
    doesNotEstablish:
      "It does not establish the next budget, the current monthly pace, acceptable spend, or return on spend.",
  },
  {
    id: "6b.1",
    claim: "Organic visibility position",
    value:
      "For “ergonomic assessment sydney”: position 3.8 on the tagged homepage row, 4.3 on the Sydney page, 41.2 on the bare homepage, and 26.1 blended across pages.",
    source: "Google Search Console property for ergoworksconsulting.com.au",
    date: "25 July 2026 pull; 90-day window ending 24 July 2026",
    status: "Verified",
    establishes: "There is a top-five visibility asset in the query/page data, alongside thin broader organic visibility.",
    doesNotEstablish:
      "It does not establish that the tagged row is definitely Business Profile traffic; that attribution remains an inference to confirm.",
  },
  {
    id: "6c.7",
    claim: "Equipment-margin finding",
    value: "531 published products; zero with a populated non-zero cost-of-goods value.",
    source: "ErgoEquip WooCommerce store",
    date: "25 July 2026 pull; trailing 12-month store review",
    status: "Verified",
    establishes: "A usable equipment gross-margin dataset is not currently available.",
    doesNotEstablish:
      "It does not establish actual margin, profitability, or the margin of any individual product or order.",
  },
];

const trailGroups: { id: string; label: string; source: string; records: EvidenceRecord[] }[] = [
  {
    id: "6a",
    label: "6a · Google Ads",
    source: "Account 9258098368; read-only pull",
    records: [
      {
        id: "6a.1",
        claim: "Account identity and settings",
        value: "AUD account, Australia/Sydney timezone, auto-tagging on, and conversion tracking managed in-house.",
        source: "Google Ads",
        date: "25 July 2026",
        status: "Verified",
        establishes: "The account context and tagging state for the evidence below.",
        doesNotEstablish: "It does not establish that the conversion configuration is clean or consulting-only.",
      },
      {
        id: "6a.2",
        claim: "Campaign settings",
        value: "Enabled Search campaign; Maximise Conversions; no target CPA; presence-based geo targeting; A$154.81 daily budget.",
        source: "Google Ads",
        date: "25 July 2026",
        status: "Verified",
        establishes: "The current bidding, geo and budget settings at the evidence cut-off.",
        doesNotEstablish: "It does not establish that the budget is the approved future envelope or that bidding is optimising to qualified leads.",
      },
      {
        id: "6a.5",
        claim: "Ad-group split, trailing 12 months",
        value: "Ergonomic Office Consulting A$8,249.25; Ergonomics Assessments A$7,258.22; DSA A$7,407.69; Workplace Ergonomics A$2,117.56; School Ergonomics A$15.02.",
        source: "Google Ads",
        date: "Trailing 12 months to 24 July 2026",
        status: "Verified",
        establishes: "How campaign spend was distributed across the named ad groups in the period.",
        doesNotEstablish: "It does not establish the quality or profitability of any ad group without CRM and commercial data.",
      },
      {
        id: "6a.6",
        claim: "Last-30-day account activity",
        value: "A$4,652.53 spend; 385 clicks; 22 conversions, or 24 all-conversions.",
        source: "Google Ads",
        date: "25 July 2026 pull; 30-day window ending 24 July 2026",
        status: "Verified",
        establishes: "The spend and platform-reported activity used for the strict cost-per-real-lead calculation.",
        doesNotEstablish: "It does not establish that the 22 conversions are all leads or that clicks became qualified opportunities.",
      },
      {
        id: "6a.9",
        claim: "Conversion-action state",
        value: "All 16 enabled actions remain primary for the goal, including legacy and irrelevant actions; cleanup is still undone.",
        source: "Google Ads",
        date: "25 July 2026; re-confirmed unchanged 28 July 2026",
        status: "Verified",
        establishes: "The account still has a conversion-goal hygiene problem that can distort optimisation.",
        doesNotEstablish: "It does not quantify how much each action distorts bidding or reporting.",
      },
      {
        id: "6a.10",
        claim: "Largest single line item",
        value: "Broad “+manual +handling +certificate”: A$846.56, 125 clicks and 2 conversions in 30 days; 18% of campaign spend.",
        source: "Google Ads",
        date: "25 July 2026 pull; 30-day window ending 24 July 2026",
        status: "Verified",
        establishes: "One certificate-intent line absorbed a material share of current spend and is a quarantine candidate.",
        doesNotEstablish: "It does not establish that the line can never convert or that all certificate intent is unsuitable.",
      },
      {
        id: "6a.11",
        claim: "Canberra/Fyshwick conversion signal",
        value: "“ergonomic office fyshwick” phrase match: 18 clicks, 3 conversions and A$310.29 in the last 30 days.",
        source: "Google Ads",
        date: "25 July 2026 pull; 30-day window ending 24 July 2026",
        status: "Verified",
        establishes: "There is a recent converting geo-specific search signal outside the proposed Sydney-first focus.",
        doesNotEstablish: "It does not establish service capacity, lead quality, or whether the geo should be expanded.",
      },
      {
        id: "6a.12",
        claim: "Account is not consulting-only",
        value: "The account also contains an enabled Physiotherapy campaign and paused equipment campaign shells.",
        source: "Google Ads",
        date: "25 July 2026",
        status: "Verified",
        establishes: "Account-level separation and conversion-goal decisions are a live measurement concern.",
        doesNotEstablish: "It does not establish that the paused campaigns currently spend or that their data is mixed in every report.",
      },
      {
        id: "6a.13",
        claim: "Separate equipment advertising account",
        value: "A separate AUD Australia/Sydney equipment advertising account (8253602680) exists.",
        source: "Google Ads account inventory",
        date: "25 July 2026",
        status: "Verified",
        establishes: "The equipment advertising activity has a separate account context.",
        doesNotEstablish: "It does not establish current activity, profitability, or any consulting-to-equipment attribution.",
      },
      {
        id: "6a.14",
        claim: "Campaign goal configuration and call thresholds",
        value:
          "Both campaigns run Maximise Conversions. The physiotherapy campaign uses the account-default goal set, so every primary action is biddable for it, including the consulting actions; the consulting campaign's biddable goal categories include the physiotherapy web actions. No physiotherapy-action conversions accrued to the consulting campaign in the latest 30-day window. Both consulting call conversion actions count calls from one second.",
        source: "Google Ads account 9258098368; campaign goal and conversion-action pulls",
        date: "28 July 2026",
        status: "Verified",
        establishes:
          "Conversion contamination is mechanically eligible in both directions at goal level; no cross-campaign accrual was observed in the latest window; the recorded call count includes calls as short as one second.",
        doesNotEstablish:
          "It does not establish that cross-campaign conversions have occurred, that either campaign's traffic converts on the other's site, or that recorded calls are genuine enquiries.",
      },
    ],
  },
  {
    id: "6b",
    label: "6b · Google Search Console",
    source: "Property for ergoworksconsulting.com.au; AU",
    records: [
      {
        id: "6b.2",
        claim: "Tagged-row attribution caveat",
        value: "The homepage row tagged with “utm_campaign=maps” is inferred to be Business Profile traffic and still needs confirmation against Business Profile reporting.",
        source: "Google Search Console",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",

codex
The gate register makes the core presentation risk clear: the pack has a strong audit trail, but it often answers “what must be true” without answering “what do you want Greg to say yes to today.” I’ll preserve that distinction in the tables—“answered” where the pack genuinely closes the objection, “partial” where it frames but does not resolve it, and “GAP” where the page needs a new sentence or decision.
Read the memo, decision register, measurement specification, evidence register, Greg’s call notes, and routed ownership questions. Moving from extraction to persona-by-persona red-team mapping.
  ✓ Read the presentation pack and client notes
  → Map persona objections to pages, gates, and evidence
  • Draft red-team tables and room-loss / phrasing guidance
exec
/bin/zsh -lc "rg -n 'id=|evidence-' src/app/ergoworks/plan/evidence/page.tsx | tail -40" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
567:      <section className={styles.docSection} id="headline-evidence">
580:      <section className={`${styles.docSection} ${styles.alt}`} id="full-trail">
590:              <h3 id={`${group.id}-heading`} style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", margin: 0 }}>{group.source}</h3>
597:      <section className={styles.docSection} id="could-not-verify">
613:          <h3><a href="#evidence-6f.1">6f.1 · GA4 access</a></h3>
615:          <h3><a href="#evidence-6f.2">6f.2 · Microsoft Clarity</a></h3>
617:          <h3><a href="#evidence-6f.3">6f.3 · Competitor paid-advertising footprint</a></h3>
622:      <section className={`${styles.docSection} ${styles.alt}`} id="verification-record">
649:    <article id={`evidence-${record.id}`} style={anchorStyle}>
686:            <tr key={record.id} id={`evidence-${record.id}`} style={anchorStyle}>

Persona objections are mapped across all eight presentation stages, with pack coverage classified and pre-emption language drafted. Ready to deliver the red-team output.
  ✓ Read the presentation pack and client notes
  ✓ Map persona objections to pages, gates, and evidence
  ✓ Draft red-team tables and room-loss / phrasing guidance
codex
## Red-team verdict

The pack is analytically credible, but the sponsor-facing ask is still too implicit. Several citations prove that a question is important without answering it. I’ve marked those `GAP` rather than treating an open gate as an answer.

### 1. Current position

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “I said Search spend holds until the new website launches, so what exactly am I funding now?” | **GAP.** Memo [#known](/ergoworks/plan#known) and [#costs](/ergoworks/plan#costs) show the current baseline, but do not reconcile “protect Search” with Greg’s hold instruction. Evidence [6a.2](/ergoworks/plan/evidence#evidence-6a.2), [6a.3](/ergoworks/plan/evidence#evidence-6a.3). | “We are not asking for Search expansion before the new site: ‘protect the base’ means preserve a comparable baseline only if you want continuity, while today’s approval is for page and measurement repair.” |
| Oz / Ruth | “Are we about to market all six services before we know who can deliver them, where, at what capacity and with what quality controls?” | **PARTIAL / GAP.** Memo [#wedge](/ergoworks/plan#wedge) says the six-service ecosystem is not six launch offers; gates A1 and A4 remain open. | “No service enters acquisition until its A1 readiness row has a named owner, scope, geography, capacity, SLA, QC and escalation path.” |

### 2. Problems

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “If the certificate line spent A$846.56 for two reported conversions, are you saying it is bad, or just asking me to trust your judgement?” | **PARTIAL.** Memo [#wrong-now](/ergoworks/plan#wrong-now) and [#next](/ergoworks/plan#next) frame quarantine as reversible; Evidence [6a.10](/ergoworks/plan/evidence#evidence-6a.10), gate C12. It does not prove qualified pipeline loss or gain. | “This is a reversible containment decision, not a verdict on the service: pause the broad line while credential and corporate fit are confirmed.” |
| Oz / Ruth | “When you call this ‘mixed intent’ and a ‘commodity certificate market’, are you implying our training or service quality is the problem?” | **PARTIAL.** The memo says this is a measurement and market-fit problem, not a blanket service verdict; A3 remains open. | “The finding concerns search intent and account configuration, not the quality of your training; we are withholding the claim until the credential and buyer fit are confirmed.” |

### 3. Wedge

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “Why Sydney-first when Canberra/Fyshwick is the clearest converting geo-specific signal, and why not launch the whole ecosystem?” | **PARTIAL / GAP.** Memo [#wedge](/ergoworks/plan#wedge) gives the Sydney interpretation; Evidence [6a.11](/ergoworks/plan/evidence#evidence-6a.11) shows Canberra signal; gates C4 and C10 remain open. There is no explicit Sydney-versus-Canberra comparison. | “Sydney is the proposed stress-test market, while Canberra remains a live exception that will be retained only if qualified pipeline and delivery capacity clear the same gate.” |
| Oz / Ruth | “Who staffs the Sydney assessments, how many can we absorb weekly, and who owns the follow-up if demand arrives?” | **GAP.** Gates A1, A4 and B5 explicitly leave owner, capacity, geography, SLA and fulfilment unresolved. | “The Sydney page cannot go live until the delivery owner, weekly capacity, response SLA, QC and escalation route are written into the readiness matrix.” |

### 4. Recommendation

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “What exactly am I approving: a landing page, a free Snapshot, Search spend, Meta, the ecosystem strategy, or Marcus’s fee?” | **GAP.** Memo [#verdict](/ergoworks/plan#verdict) says planning only; [#costs](/ergoworks/plan#costs) separates the fee; gates C1, C2, C9 and C14 remain open. | “Today’s approval is a bounded proof-test plan and routing decision, not automatic media scale, Meta spend or an implied approval of the separate commercial fee.” |
| Oz / Ruth | “Does the free 15-minute Snapshot create a compliance or service-quality risk, and exactly what must we deliver?” | **PARTIAL / GAP.** The caveat is explicit in Memo [#next](/ergoworks/plan#next) and [#guardrails](/ergoworks/plan#guardrails); gate C1 and fulfilment gate B5 remain open. | “The Snapshot is preliminary guidance only, and its owner, format, turnaround and weekly capacity must be approved before it is offered.” |

### 5. Costs

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “Why are you showing me A$700 or A$930 for Meta when there is no access, no proven CPA and no maximum loss?” | **GAP.** Memo [#costs](/ergoworks/plan#costs) correctly labels both figures as illustrations; gates C9 and C14 are open. Evidence [6a.2](/ergoworks/plan/evidence#evidence-6a.2), [6a.3](/ergoworks/plan/evidence#evidence-6a.3). | “Meta is A$0 until access, consent and qualified-event tracking are ready; you set one total envelope and one absolute test-loss cap before any release.” |
| Oz / Ruth | “If the test works, are we funding demand that the delivery team cannot safely fulfil?” | **GAP.** Delivery cost and capacity are required at A1/B1/B5 but are not supplied. | “Media budget is not permission to create uncapped demand: pacing will stop at the approved delivery capacity and response SLA.” |

### 6. Five decisions

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “Why are there 34 open gates if you asked me to simplify this—what are the five yes/no decisions today?” | **PARTIAL.** [Decisions · Sponsor view](/ergoworks/plan/decisions#bundles) gives five bundles, but all 34 gates remain open and the immediate-versus-later ladder is not explicit; C12 is the only clearly separated immediate ask. | “The five cards are the only sponsor decisions; the 34 gates are the supporting audit trail, with C12 as the one reversible containment action available now.” |
| Oz / Ruth | “Do we actually have veto power to keep a service or claim out of the campaign if delivery reality does not support it?” | **ANSWERED.** Decisions gate A1 says a service that fails readiness stays out of acquisition messaging; D5 A1–A5 routes the market and delivery questions to Oz and Ruth. | “Yes: Oz and Ruth control readiness, geography and credential sign-off, and any service without a fulfilable row stays out of acquisition.” |

### 7. Measurement

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “Will this tell me whether the next dollar produced qualified corporate pipeline and profit, or just give me another dashboard?” | **PARTIAL / GAP.** Measurement [#qualified-path](/ergoworks/plan/measurement#qualified-path), [#account-view](/ergoworks/plan/measurement#account-view) and [#handoff](/ergoworks/plan/measurement#handoff) define the signals, but thresholds depend on B1/B6; margin is blocked at B11 and the loss cap at C14. | “We will report qualified corporate enquiries, qualified calls, CPQL, won consulting value and data discrepancy, and will scale only against thresholds approved at B1 and C14.” |
| Oz / Ruth | “Will worker assessment or health information enter advertising audiences, or will individual cases be treated as corporate leads?” | **ANSWERED.** Measurement [#honest-problem](/ergoworks/plan/measurement#honest-problem), [#qualified-path](/ergoworks/plan/measurement#qualified-path) and [#privacy](/ergoworks/plan/measurement#privacy); gate C5. | “Worker health and assessment data never enters advertising, and the individual route-out creates no lead, audience or marketing event.” |

### 8. Next steps

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “What do you need from me, by when, and when do I see a built page rather than another diagnostic?” | **GAP.** Memo [#next](/ergoworks/plan#next) gives sequence but not a dated owner plan; gate B10 leaves developer, timeline, hosting and route open. Greg’s notes mention a six-week website window, but the pack does not carry it through. | “After the sponsor decisions and B10 build details are confirmed, we build one Sydney page in the six-week website window, with no media expansion before release checks pass.” |
| Oz / Ruth | “What exactly must we provide before launch, and what happens if we cannot support the promise?” | **PARTIAL / GAP.** D5 A1–A5 identifies the questions and owners; the memo does not give deadlines or a visible no-go sequence. | “Oz and Ruth provide the readiness, geography, credential and fulfilment inputs, and any unresolved capacity or quality cell automatically blocks that service from launch.” |

## (d) Three likely room-loss moments

1. **The current-position/problem section becomes an evidence dump.**  
   The 17 events, A$273.68 raw cost, 16 primary actions, 40.8% manual-handling concentration and A$846.56 certificate line can feel like an audit.

   Avoid it with one sponsor-level message: “The account has activity, but we cannot yet distinguish corporate pipeline from mixed platform events.” Keep the numbers as proof, not as the story.

2. **The pack sounds defensively hedged.**  
   Repeated `[Verified]`, `[Interpretation]`, `[Assumption]`, “does not establish” and privacy caveats may make Marcus sound uncertain or legalistic.

   Use the pattern once: “Here is what we know, here is the decision it supports, and here is the one unknown that still gates it.” Move the full caveats to progressive disclosure.

3. **The ask remains unclear at the cost/decision section.**  
   A$700 versus A$930, 70/20/10, separate fee, 34 open gates and no loss cap creates the impression that Greg is being asked to approve a moving target.

   Put a single decision card on the page: “Approve / do not approve the Snapshot and routing; set the total media envelope; set the maximum test loss; approve the reversible certificate pause.” Clearly label everything else as conditional.

## (e) Blame and overselling risks

### Phrases that may sound blaming

- **“The account is spending into mixed intent and counting the wrong things.”**  
  Softer: “The current setup is capturing useful activity, but the commercial signal is mixed and needs separation.”

- **“Conversion contamination.”**  
  Softer: “The account goal set currently includes multiple service lines and soft actions, so performance is not yet safely attributable.”

- **“Certificate-intent burn.”**  
  Softer: “Certificate-intent traffic is a material spend line whose corporate fit and credential wording are not yet confirmed.”

- **“Cleanup is still undone.”**  
  Softer: “Measurement repair remains an outstanding prerequisite.”

- **“The account is not consulting-only.”**  
  Softer: “The current account structure includes multiple service lines, so campaign-level goals need to be separated before performance is interpreted.”

### Phrases that may sound like overselling

- **“The only near-term paid-Search wedge” / “credible corporate entry.”**  
  Softer: “The assessment cluster is the first bounded wedge worth testing, subject to qualification, economics and capacity.”

- **“The six-service ecosystem is the long-term operating model.”**  
  Softer: “The six-service ecosystem is the working expansion hypothesis; launch begins with one service and earns the right to widen.”

- **“Make Meta earn its budget.”**  
  Softer: “Meta is an optional capped experiment released only after access, consent and qualified-event tracking are ready.”

- **“Repeat buyers include large employers and government bodies.”**  
  Softer: “Store data shows repeat equipment buying among some organisations; it does not yet prove consulting cross-sell.”

- **“Each week of delay leaves roughly A$197 exposed.”**  
  Softer: “If we agree this line is not ready for corporate acquisition, pausing it now avoids roughly A$197 per week of observed spend while preserving the option to restore it.”

- **“SHIP-WITH-FIXES.”**  
  Softer: “The plan is ready for client review, with expansion conditional on the five release checks.”
hook: Stop
hook: Stop Completed
tokens used
88,604
## Red-team verdict

The pack is analytically credible, but the sponsor-facing ask is still too implicit. Several citations prove that a question is important without answering it. I’ve marked those `GAP` rather than treating an open gate as an answer.

### 1. Current position

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “I said Search spend holds until the new website launches, so what exactly am I funding now?” | **GAP.** Memo [#known](/ergoworks/plan#known) and [#costs](/ergoworks/plan#costs) show the current baseline, but do not reconcile “protect Search” with Greg’s hold instruction. Evidence [6a.2](/ergoworks/plan/evidence#evidence-6a.2), [6a.3](/ergoworks/plan/evidence#evidence-6a.3). | “We are not asking for Search expansion before the new site: ‘protect the base’ means preserve a comparable baseline only if you want continuity, while today’s approval is for page and measurement repair.” |
| Oz / Ruth | “Are we about to market all six services before we know who can deliver them, where, at what capacity and with what quality controls?” | **PARTIAL / GAP.** Memo [#wedge](/ergoworks/plan#wedge) says the six-service ecosystem is not six launch offers; gates A1 and A4 remain open. | “No service enters acquisition until its A1 readiness row has a named owner, scope, geography, capacity, SLA, QC and escalation path.” |

### 2. Problems

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “If the certificate line spent A$846.56 for two reported conversions, are you saying it is bad, or just asking me to trust your judgement?” | **PARTIAL.** Memo [#wrong-now](/ergoworks/plan#wrong-now) and [#next](/ergoworks/plan#next) frame quarantine as reversible; Evidence [6a.10](/ergoworks/plan/evidence#evidence-6a.10), gate C12. It does not prove qualified pipeline loss or gain. | “This is a reversible containment decision, not a verdict on the service: pause the broad line while credential and corporate fit are confirmed.” |
| Oz / Ruth | “When you call this ‘mixed intent’ and a ‘commodity certificate market’, are you implying our training or service quality is the problem?” | **PARTIAL.** The memo says this is a measurement and market-fit problem, not a blanket service verdict; A3 remains open. | “The finding concerns search intent and account configuration, not the quality of your training; we are withholding the claim until the credential and buyer fit are confirmed.” |

### 3. Wedge

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “Why Sydney-first when Canberra/Fyshwick is the clearest converting geo-specific signal, and why not launch the whole ecosystem?” | **PARTIAL / GAP.** Memo [#wedge](/ergoworks/plan#wedge) gives the Sydney interpretation; Evidence [6a.11](/ergoworks/plan/evidence#evidence-6a.11) shows Canberra signal; gates C4 and C10 remain open. There is no explicit Sydney-versus-Canberra comparison. | “Sydney is the proposed stress-test market, while Canberra remains a live exception that will be retained only if qualified pipeline and delivery capacity clear the same gate.” |
| Oz / Ruth | “Who staffs the Sydney assessments, how many can we absorb weekly, and who owns the follow-up if demand arrives?” | **GAP.** Gates A1, A4 and B5 explicitly leave owner, capacity, geography, SLA and fulfilment unresolved. | “The Sydney page cannot go live until the delivery owner, weekly capacity, response SLA, QC and escalation route are written into the readiness matrix.” |

### 4. Recommendation

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “What exactly am I approving: a landing page, a free Snapshot, Search spend, Meta, the ecosystem strategy, or Marcus’s fee?” | **GAP.** Memo [#verdict](/ergoworks/plan#verdict) says planning only; [#costs](/ergoworks/plan#costs) separates the fee; gates C1, C2, C9 and C14 remain open. | “Today’s approval is a bounded proof-test plan and routing decision, not automatic media scale, Meta spend or an implied approval of the separate commercial fee.” |
| Oz / Ruth | “Does the free 15-minute Snapshot create a compliance or service-quality risk, and exactly what must we deliver?” | **PARTIAL / GAP.** The caveat is explicit in Memo [#next](/ergoworks/plan#next) and [#guardrails](/ergoworks/plan#guardrails); gate C1 and fulfilment gate B5 remain open. | “The Snapshot is preliminary guidance only, and its owner, format, turnaround and weekly capacity must be approved before it is offered.” |

### 5. Costs

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “Why are you showing me A$700 or A$930 for Meta when there is no access, no proven CPA and no maximum loss?” | **GAP.** Memo [#costs](/ergoworks/plan#costs) correctly labels both figures as illustrations; gates C9 and C14 are open. Evidence [6a.2](/ergoworks/plan/evidence#evidence-6a.2), [6a.3](/ergoworks/plan/evidence#evidence-6a.3). | “Meta is A$0 until access, consent and qualified-event tracking are ready; you set one total envelope and one absolute test-loss cap before any release.” |
| Oz / Ruth | “If the test works, are we funding demand that the delivery team cannot safely fulfil?” | **GAP.** Delivery cost and capacity are required at A1/B1/B5 but are not supplied. | “Media budget is not permission to create uncapped demand: pacing will stop at the approved delivery capacity and response SLA.” |

### 6. Five decisions

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “Why are there 34 open gates if you asked me to simplify this—what are the five yes/no decisions today?” | **PARTIAL.** [Decisions · Sponsor view](/ergoworks/plan/decisions#bundles) gives five bundles, but all 34 gates remain open and the immediate-versus-later ladder is not explicit; C12 is the only clearly separated immediate ask. | “The five cards are the only sponsor decisions; the 34 gates are the supporting audit trail, with C12 as the one reversible containment action available now.” |
| Oz / Ruth | “Do we actually have veto power to keep a service or claim out of the campaign if delivery reality does not support it?” | **ANSWERED.** Decisions gate A1 says a service that fails readiness stays out of acquisition messaging; D5 A1–A5 routes the market and delivery questions to Oz and Ruth. | “Yes: Oz and Ruth control readiness, geography and credential sign-off, and any service without a fulfilable row stays out of acquisition.” |

### 7. Measurement

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “Will this tell me whether the next dollar produced qualified corporate pipeline and profit, or just give me another dashboard?” | **PARTIAL / GAP.** Measurement [#qualified-path](/ergoworks/plan/measurement#qualified-path), [#account-view](/ergoworks/plan/measurement#account-view) and [#handoff](/ergoworks/plan/measurement#handoff) define the signals, but thresholds depend on B1/B6; margin is blocked at B11 and the loss cap at C14. | “We will report qualified corporate enquiries, qualified calls, CPQL, won consulting value and data discrepancy, and will scale only against thresholds approved at B1 and C14.” |
| Oz / Ruth | “Will worker assessment or health information enter advertising audiences, or will individual cases be treated as corporate leads?” | **ANSWERED.** Measurement [#honest-problem](/ergoworks/plan/measurement#honest-problem), [#qualified-path](/ergoworks/plan/measurement#qualified-path) and [#privacy](/ergoworks/plan/measurement#privacy); gate C5. | “Worker health and assessment data never enters advertising, and the individual route-out creates no lead, audience or marketing event.” |

### 8. Next steps

| Persona | Hardest question | Existing answer | Pre-emption |
|---|---|---|---|
| Greg | “What do you need from me, by when, and when do I see a built page rather than another diagnostic?” | **GAP.** Memo [#next](/ergoworks/plan#next) gives sequence but not a dated owner plan; gate B10 leaves developer, timeline, hosting and route open. Greg’s notes mention a six-week website window, but the pack does not carry it through. | “After the sponsor decisions and B10 build details are confirmed, we build one Sydney page in the six-week website window, with no media expansion before release checks pass.” |
| Oz / Ruth | “What exactly must we provide before launch, and what happens if we cannot support the promise?” | **PARTIAL / GAP.** D5 A1–A5 identifies the questions and owners; the memo does not give deadlines or a visible no-go sequence. | “Oz and Ruth provide the readiness, geography, credential and fulfilment inputs, and any unresolved capacity or quality cell automatically blocks that service from launch.” |

## (d) Three likely room-loss moments

1. **The current-position/problem section becomes an evidence dump.**  
   The 17 events, A$273.68 raw cost, 16 primary actions, 40.8% manual-handling concentration and A$846.56 certificate line can feel like an audit.

   Avoid it with one sponsor-level message: “The account has activity, but we cannot yet distinguish corporate pipeline from mixed platform events.” Keep the numbers as proof, not as the story.

2. **The pack sounds defensively hedged.**  
   Repeated `[Verified]`, `[Interpretation]`, `[Assumption]`, “does not establish” and privacy caveats may make Marcus sound uncertain or legalistic.

   Use the pattern once: “Here is what we know, here is the decision it supports, and here is the one unknown that still gates it.” Move the full caveats to progressive disclosure.

3. **The ask remains unclear at the cost/decision section.**  
   A$700 versus A$930, 70/20/10, separate fee, 34 open gates and no loss cap creates the impression that Greg is being asked to approve a moving target.

   Put a single decision card on the page: “Approve / do not approve the Snapshot and routing; set the total media envelope; set the maximum test loss; approve the reversible certificate pause.” Clearly label everything else as conditional.

## (e) Blame and overselling risks

### Phrases that may sound blaming

- **“The account is spending into mixed intent and counting the wrong things.”**  
  Softer: “The current setup is capturing useful activity, but the commercial signal is mixed and needs separation.”

- **“Conversion contamination.”**  
  Softer: “The account goal set currently includes multiple service lines and soft actions, so performance is not yet safely attributable.”

- **“Certificate-intent burn.”**  
  Softer: “Certificate-intent traffic is a material spend line whose corporate fit and credential wording are not yet confirmed.”

- **“Cleanup is still undone.”**  
  Softer: “Measurement repair remains an outstanding prerequisite.”

- **“The account is not consulting-only.”**  
  Softer: “The current account structure includes multiple service lines, so campaign-level goals need to be separated before performance is interpreted.”

### Phrases that may sound like overselling

- **“The only near-term paid-Search wedge” / “credible corporate entry.”**  
  Softer: “The assessment cluster is the first bounded wedge worth testing, subject to qualification, economics and capacity.”

- **“The six-service ecosystem is the long-term operating model.”**  
  Softer: “The six-service ecosystem is the working expansion hypothesis; launch begins with one service and earns the right to widen.”

- **“Make Meta earn its budget.”**  
  Softer: “Meta is an optional capped experiment released only after access, consent and qualified-event tracking are ready.”

- **“Repeat buyers include large employers and government bodies.”**  
  Softer: “Store data shows repeat equipment buying among some organisations; it does not yet prove consulting cross-sell.”

- **“Each week of delay leaves roughly A$197 exposed.”**  
  Softer: “If we agree this line is not ready for corporate acquisition, pausing it now avoids roughly A$197 per week of observed spend while preserving the option to restore it.”

- **“SHIP-WITH-FIXES.”**  
  Softer: “The plan is ready for client review, with expansion conditional on the five release checks.”
