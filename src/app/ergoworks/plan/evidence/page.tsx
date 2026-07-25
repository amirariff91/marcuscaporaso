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
    claim: "Real leads, last 30 days",
    value: "17 total: 4 form enquiries + 13 phone calls.",
    source: "Google Ads account 9258098368",
    date: "25 July 2026",
    status: "Verified",
    establishes: "In this one 30-day window the recorded mix is phone-led: 13 of 17 events are call conversions. One month is not a stable channel proportion.",
    doesNotEstablish:
      "It does not establish lead qualification, revenue, a stable future call mix, or that every platform conversion is a genuine enquiry.",
  },
  {
    id: "6a.8",
    claim: "Media cost per recorded lead event",
    value: "A$273.68 strict (A$4,652.53 ÷ 17).",
    source: "Google Ads account 9258098368; derived from 6a.6 and 6a.7",
    date: "25 July 2026",
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
        date: "30 days to 25 July 2026",
        status: "Verified",
        establishes: "The spend and platform-reported activity used for the strict cost-per-real-lead calculation.",
        doesNotEstablish: "It does not establish that the 22 conversions are all leads or that clicks became qualified opportunities.",
      },
      {
        id: "6a.9",
        claim: "Conversion-action state",
        value: "All 16 enabled actions remain primary for the goal, including legacy and irrelevant actions; cleanup is still undone.",
        source: "Google Ads",
        date: "25 July 2026",
        status: "Verified",
        establishes: "The account still has a conversion-goal hygiene problem that can distort optimisation.",
        doesNotEstablish: "It does not quantify how much each action distorts bidding or reporting.",
      },
      {
        id: "6a.10",
        claim: "Largest single line item",
        value: "Broad “+manual +handling +certificate”: A$846.56, 125 clicks and 2 conversions in 30 days; 18% of campaign spend.",
        source: "Google Ads",
        date: "30 days to 25 July 2026",
        status: "Verified",
        establishes: "One certificate-intent line absorbed a material share of current spend and is a quarantine candidate.",
        doesNotEstablish: "It does not establish that the line can never convert or that all certificate intent is unsuitable.",
      },
      {
        id: "6a.11",
        claim: "Canberra/Fyshwick conversion signal",
        value: "“ergonomic office fyshwick” phrase match: 18 clicks, 3 conversions and A$310.29 in the last 30 days.",
        source: "Google Ads",
        date: "30 days to 25 July 2026",
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
        value: "A separate AUD Australia/Sydney equipment advertising account exists.",
        source: "Google Ads account inventory",
        date: "25 July 2026",
        status: "Verified",
        establishes: "The equipment advertising activity has a separate account context.",
        doesNotEstablish: "It does not establish current activity, profitability, or any consulting-to-equipment attribution.",
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
        status: "Interpretation",
        establishes: "The position 3.8 row must not be presented as a confirmed Business Profile result yet.",
        doesNotEstablish: "It does not establish the listing source or its ownership from Search Console alone.",
      },
      {
        id: "6b.3",
        claim: "Head term",
        value: "“ergonomic assessment”: position 57.3, 382 impressions and 0 clicks.",
        source: "Google Search Console",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",
        status: "Verified",
        establishes: "Broad non-location visibility for the head term is weak in the measured period.",
        doesNotEstablish: "It does not establish demand absence, ranking outside the selected window, or why the term received no clicks.",
      },
      {
        id: "6b.4",
        claim: "Non-brand commercial visibility",
        value: "30-day AU top queries are brand-led: “ergoworks” 13 clicks, “ergoassess” 5 and “ergo works” 3; “ergonomic consultant” position 16.6.",
        source: "Google Search Console",
        date: "25 July 2026 pull; 30-day query window",
        status: "Verified",
        establishes: "Current organic clicks are weighted towards existing brand demand rather than broad commercial discovery.",
        doesNotEstablish: "It does not establish brand strength, total demand, or the future effect of SEO work.",
      },
    ],
  },
  {
    id: "6c",
    label: "6c · ErgoEquip equipment store",
    source: "WooCommerce store; read-only review",
    records: [
      {
        id: "6c.1",
        claim: "Orders",
        value: "209 orders: 125 processing and 84 completed; 5 failed orders excluded.",
        source: "WooCommerce store",
        date: "25 July 2026 pull; trailing 12 months",
        status: "Verified",
        establishes: "The order volume used for the organisation-attribution analysis.",
        doesNotEstablish: "It does not establish net revenue, margin, customer value, or consulting demand.",
      },
      {
        id: "6c.2",
        claim: "Organisation attribution",
        value: "167 of 209 orders (79.9%) carry a billing-company value; 42 do not.",
        source: "WooCommerce store",
        date: "25 July 2026 pull; trailing 12 months",
        status: "Verified",
        establishes: "Most orders have a company-attribution field available for analysis.",
        doesNotEstablish: "It does not establish that each billing-company value is a canonical organisation identity.",
      },
      {
        id: "6c.3",
        claim: "Distinct organisations",
        value: "133 distinct organisations before manual normalisation of raw billing strings.",
        source: "WooCommerce store",
        date: "25 July 2026 pull; trailing 12 months",
        status: "Verified",
        establishes: "The raw organisation count behind the repeat-order finding.",
        doesNotEstablish: "It does not establish the final deduplicated organisation count after validation.",
      },
      {
        id: "6c.4",
        claim: "Repeat organisations",
        value: "19 of 133 organisations reordered (~14%), accounting for 53 of 167 company-attributed orders (~32%).",
        source: "WooCommerce store",
        date: "25 July 2026 pull; trailing 12 months",
        status: "Verified",
        establishes: "Repeat equipment buying exists in the raw store data and is concentrated among a minority of organisations.",
        doesNotEstablish: "It does not establish why they reordered, whether they are consulting clients, or whether the rate survives normalisation.",
      },
      {
        id: "6c.5",
        claim: "Repeat-buyer aggregate",
        value: "The repeat set is characterised as large employers and government bodies; 209 orders, 133 distinct organisations, 19 reordering (~14%), and 53 of 167 company-attributed orders (~32%).",
        source: "WooCommerce store",
        date: "25 July 2026 pull; trailing 12 months",
        status: "Verified",
        establishes: "The aggregate shape of repeat equipment buying without naming any buyer.",
        doesNotEstablish: "It does not establish consulting cross-sell, procurement authority, or the identity of any organisation.",
      },
      {
        id: "6c.6",
        claim: "Billing-name fragmentation",
        value: "The same organisation appears under variant spellings, which is why the join must be manually validated.",
        source: "WooCommerce store",
        date: "25 July 2026 pull; trailing 12 months",
        status: "Verified",
        establishes: "The raw repeat count is provisional until organisation names are normalised and checked.",
        doesNotEstablish: "It does not establish the corrected repeat rate or identify any organisation.",
      },
      {
        id: "6c.8",
        claim: "Scope caveat",
        value: "The analysis describes equipment-order behaviour only; it does not evidence that a consulting engagement caused an order.",
        source: "WooCommerce store",
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
        value: "UA-530267-5, a Universal Analytics tag, is still present as dead code.",
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
        date: "25 July 2026",
        status: "Unverified",
        establishes: "Meta access and recent activity remain unconfirmed from the available account view.",
        doesNotEstablish: "It does not establish that no Meta account, campaign, pixel or dataset exists.",
      },
    ],
  },
  {
    id: "6f",
    label: "6f · Could not verify this pass",
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
        value: "No usable ErgoWorks Clarity project was available in this pass.",
        source: "Microsoft Clarity access check",
        date: "25 July 2026",
        status: "Unverified",
        establishes: "Clarity cannot be used as a verified source in this evidence cut.",
        doesNotEstablish: "It does not establish that the business can never provide a usable project or that no other qualitative data exists.",
      },
      {
        id: "6f.3",
        claim: "Competitor paid-advertising footprint",
        value: "Unchecked in this pass; the Google Ads Transparency Center and Meta Ad Library review remains open.",
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
              record to its source, date, status and boundary.
            </p>
          </div>
          <aside className={styles.summary}>
            <p>How to use this page</p>
            <h2>Read the boundary as carefully as the number.</h2>
            <ul>
              <li><ArrowRight size={17} /> Verified is a pulled or directly derived figure</li>
              <li><ArrowRight size={17} /> Interpretation marks a bounded reading of evidence</li>
              <li><ArrowRight size={17} /> Unverified items stay out of the claim set</li>
            </ul>
          </aside>
        </div>
        <a className={styles.scrollCue} href="#headline-evidence"><ArrowDown size={17} /> Start with headline evidence</a>
      </header>

      <section className={styles.docSection} id="headline-evidence">
        <SectionHeading
          label="The headline evidence"
          title="Six records carry most of the recommendation."
          copy="These are the live findings I would put in front of a decision-maker first. Every card states the useful conclusion and the conclusion it cannot carry."
        />
        <div className={styles.roadmap} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))" }}>
          {headlineEvidence.map((record) => (
            <HeadlineCard key={record.id} record={record} />
          ))}
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="full-trail">
        <SectionHeading
          label="The full trail"
          title="The supporting records, kept in source order."
          copy="The IDs below are the remaining records after the headline set. Use them in the memo and decisions pages; they are deliberately not dynamically renumbered or sorted."
        />
        {trailGroups.map((group) => (
          <section key={group.id} aria-labelledby={`${group.id}-heading`} style={{ marginTop: "4rem" }}>
            <div className={styles.sectionHeading}>
              <p>{group.label}</p>
              <h3 id={`${group.id}-heading`} style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", margin: 0 }}>{group.source}</h3>
            </div>
            <EvidenceTable records={group.records} caption={`${group.label} · ${group.source}`} />
          </section>
        ))}
      </section>

      <section className={styles.docSection} id="could-not-verify">
        <SectionHeading
          label="What could not be verified"
          title="The unchecked edges stay visible."
          copy="I have not converted an access gap or an unperformed check into a fact. These items remain decisions or follow-up work."
        />
        <div className={styles.calloutRow}>
          <CircleAlert size={20} />
          <p>
            <strong>Competitor paid advertising is unchecked.</strong> The paid-advertising footprint
            was not verified in this pass, so no claim that a named competitor is or is not advertising
            on a named platform belongs in the plan yet. GA4 access was restored and its figures are
            pulled directly. That is not evidence of competitor activity.
          </p>
        </div>
        <div className={styles.prose} style={{ marginTop: "2rem" }}>
          <h3><a href="#evidence-6f.1">6f.1 · GA4 access</a></h3>
          <p>Resolved for this evidence cut-off. The figures are pulled directly and recorded under §6g.</p>
          <h3><a href="#evidence-6f.2">6f.2 · Microsoft Clarity</a></h3>
          <p>No usable project was available in this pass, so it is not a verified source.</p>
          <h3><a href="#evidence-6f.3">6f.3 · Competitor paid-advertising footprint</a></h3>
          <p>Unchecked. The advertising libraries remain an open follow-up; no competitor paid-ad claim ships from this record.</p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="verification-record">
        <SectionHeading
          label="The verification record"
          title="The plan was adversarially stress-tested."
          copy="An independent adversarial review checked the revised set against the live evidence, disclosure boundaries and internal consistency."
        />
        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p>
            <strong>Verdict: SHIP-WITH-FIXES.</strong> The liability and citation layers hold, while
            residual items are routed as decisions or follow-up work: competitor paid advertising,
            Business Profile confirmation, legacy baseline corrections and the substantive commercial
            gates. The live account work was read-only throughout.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p><CircleAlert size={13} style={{ verticalAlign: "-2px", marginRight: ".4rem" }} />Confidential · For client review only</p>
      </footer>
    </main>
  );
}

function HeadlineCard({ record }: { record: EvidenceRecord }) {
  return (
    <article id={`evidence-${record.id}`} style={anchorStyle}>
      <div className={styles.phaseHead}>
        <span>{record.status}</span>
        <b>{record.id}</b>
      </div>
      <h3>{record.claim}</h3>
      <p style={{ color: "var(--ink)", fontWeight: 700, lineHeight: 1.5 }}>{record.value}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))", gap: "1rem", marginTop: "1.5rem", fontSize: ".82rem" }}>
        <MetaItem label="Source" value={record.source} />
        <MetaItem label="Date" value={record.date} />
        <MetaItem label="Status" value={record.status} />
      </div>
      <div style={{ borderTop: "1px solid var(--line)", marginTop: "1.5rem", paddingTop: "1rem", display: "grid", gap: ".85rem", fontSize: ".88rem", lineHeight: 1.55 }}>
        <p><strong>Establishes:</strong> {record.establishes}</p>
        <p><strong>Does not establish:</strong> {record.doesNotEstablish}</p>
      </div>
    </article>
  );
}

function EvidenceTable({ records, caption }: { records: EvidenceRecord[]; caption: string }) {
  return (
    <div className={styles.tableScroll}>
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Evidence</th>
            <th scope="col">Value</th>
            <th scope="col">Source</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Boundary</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id} id={`evidence-${record.id}`} style={anchorStyle}>
              <td data-label="Evidence"><strong>{record.id}</strong><br />{record.claim}</td>
              <td data-label="Value">{record.value}</td>
              <td data-label="Source">{record.source}</td>
              <td data-label="Date">{record.date}</td>
              <td data-label="Status"><strong>{record.status}</strong></td>
              <td data-label="Boundary"><strong>Establishes:</strong> {record.establishes}<br /><br /><strong>Does not establish:</strong> {record.doesNotEstablish}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <strong style={{ display: "block", color: "var(--ink)", fontSize: ".72rem", textTransform: "uppercase", letterSpacing: ".06em" }}>{label}</strong>
      <span style={{ display: "block", marginTop: ".25rem", overflowWrap: "anywhere" }}>{value}</span>
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
