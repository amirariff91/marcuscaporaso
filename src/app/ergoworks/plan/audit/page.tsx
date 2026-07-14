import type { Metadata } from "next";
import {
  ArrowDown,
  BarChart3,
  Check,
  CircleAlert,
  ClipboardCheck,
  Crosshair,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import styles from "../plan.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Account Audit",
  description: "Private, redacted account diagnostic and audit plan for ErgoWorks Consulting.",
  robots: { index: false, follow: false },
};

const baselineRows = [
  ["Google Ads account", "the Ads account"],
  ["GA4 property", "the GA4 property"],
  ["Focus campaign", "the Search campaign"],
  ["Current bidding", "Maximize Conversions, with no target CPA and no portfolio strategy"],
  ["Tracking foundations", "Auto-tagging on; GA4-linked conversions"],
  ["Trailing-12-month scale", "A mature five-figure annual Search program"],
  ["Observed monthly planning range", "The current monthly Search envelope"],
  ["Last 30 days", "Thousands of impressions, hundreds of clicks and a small number of reported conversions"],
  ["Estimated real lead volume", "A modest monthly volume, detailed in the private pack"],
  ["Indicative lead economics", "Detailed in the private PDF pack"],
  ["Account contamination", "16 enabled conversion actions, including Physiotherapy actions outside Consulting scope"],
  ["Missing growth layers", "No paid Meta activity; no dedicated conversion landing page; a paused PMax campaign and a paused remarketing campaign"],
  ["Evidence limitation", "Last-30-day search terms, the full keyword/status/match-type/headline-Quality-Score inventory, 493 negatives and a partial geo signal were pulled on 12 July 2026. Longer history, the negative-list audit, RSA/asset inventory, complete campaign settings, Quality Score components and geo/device performance reports remain outstanding."],
] as const;

const conversionRows = [
  ["Calls from ads", "Higher", "Secondary native proxy; the qualified offline import is the only Primary call signal"],
  ["Make an Enquiry", "Higher", "Primary, subject to validation and spam/internal exclusions"],
  ["Newsletter Sign Up", "Moderate", "Secondary"],
  ["Email Click", "Low", "Secondary"],
  ["Call Forwarding", "Low", "Secondary"],
  ["Other enabled actions, including Physiotherapy actions", "Not attributed in the campaign snapshot", "Remove from Consulting campaign goals or retain only in the correct business scope"],
] as const;

const conversionHierarchy = [
  ["Qualified call", "Unique Consulting-attributed call that meets the client-approved duration and operating-hours conditions and is dispositioned as a legitimate new-business B2B workplace-ergonomics enquiry; exact rule awaiting client approval", "Primary only through the qualified offline import once reliable"],
  ["Qualified lead", "Enquiry or call accepted in the CRM after confirming a business need, organisational fit, valid contact and plausible service scope", "Secondary while validated; future Primary after sufficient clean offline volume"],
  ["Proposal issued", "Qualified opportunity that reaches a documented proposal stage", "Secondary initially; eligible for value-based optimisation later"],
  ["Closed-won", "Signed Consulting engagement with verified revenue or margin", "Secondary initially; future value signal once volume and data quality are sufficient"],
  ["Newsletter Sign Up", "Marketing subscription only", "Secondary"],
  ["Email Click", "Click on an email link without confirmed enquiry", "Secondary"],
  ["Click-to-call", "Click or tap without a connected, qualified conversation", "Secondary"],
  ["Call Forwarding", "Technical call-routing interaction without qualification", "Secondary"],
  ["Local actions", "Directions, local engagement or other soft action", "Secondary"],
  ["Snapshot request (snapshot_request)", "Valid B2B request for the free 15-minute Workplace Ergonomics Risk Snapshot — preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis.", "Primary initially"],
  ["Direct enquiry (direct_enquiry)", "Valid B2B direct-enquiry form submission", "Primary initially"],
] as const;

const cleanupSteps = [
  "Inventory all 16 enabled conversion actions, their source, category, counting method, attribution, lookback window, campaign-goal inclusion and owning business.",
  "Define a campaign-specific Consulting goal set for the Search campaign.",
  "Remove Physiotherapy conversion actions from the Consulting campaign’s optimisation scope. Do not apply account-wide exclusions or negatives that could damage the separate Physiotherapy campaign.",
  "Demote Newsletter Sign Up, Email Click, Call Forwarding, clicks-to-call and local/soft actions from primary to secondary.",
  "Validate Make an Enquiry against actual form submissions and exclude spam, tests and duplicates.",
  "Implement the qualified-call rule and document how call disposition is recorded.",
  "Add offline imports for qualified lead, proposal and closed-won stages using stable click identifiers and CRM records.",
  "Reconcile Google Ads, GA4 and CRM totals before treating the new baseline as clean.",
  "Preserve historical annotations so the reporting discontinuity is visible.",
] as const;

const biddingRows = [
  ["Fewer than 20 clean primary conversions/month, weak or unstable delivery, and no reliable qualified-lead imports", "Test whether Maximize Clicks with a benchmark-based CPC cap can rebuild usable volume, but only after search terms and negatives are reviewed"],
  ["Approximately 20–29 clean conversions/month with stable spend, acceptable query quality and consistent qualified-lead rate", "Retain Maximize Conversions as the incumbent ceiling and monitor; document the variance from the rubric"],
  ["At least 30 clean conversions/month with stable cost per qualified lead over multiple conversion cycles", "Maximize Conversions is supported by the rubric; begin assessing tCPA readiness"],
  ["At least 30 clean conversions/month but volatile lead quality or incomplete offline imports", "Remain on Maximize Conversions; do not introduce tCPA yet"],
  ["More than 50 clean conversions/month with stable qualified-lead economics", "Consider tCPA"],
  ["Reliable revenue or margin values plus sufficient closed-won volume", "Assess tROAS; conversion count alone is insufficient"],
  ["Conversion goals have just changed", "Hold major bid and budget changes until behaviour restabilises and conversion lag has been reviewed"],
] as const;

const killRuleRows = [
  ["Clean cost per qualified lead is at or below T", "At least 14 days, reconciled primary conversions and sufficient clicks", "Maintain; assess incremental capacity"],
  ["Clean cost per qualified lead is above T but below 3T", "At least 14 days and at least 20 clicks", "Diagnose search terms, match types, ads, landing page and lead quality before changing budget"],
  ["Clean cost per qualified lead exceeds 3T", "At least 7 days and at least 20 clicks", "Flag for pause or restructure; do not pause until conversion quality and lag are checked"],
  ["No clean conversions", "Enough delivery for a meaningful diagnostic sample; use at least 50 clicks as a practical floor", "Flag for diagnosis and possible pause"],
  ["Reported economics appear efficient but qualified-lead rate is poor", "CRM dispositions available", "Do not scale; repair targeting, message match or qualification"],
  ["Reported economics appear weak but qualified-lead or proposal rate is strong", "CRM dispositions and downstream value available", "Preserve while evaluating qualified-lead economics and pipeline value"],
] as const;

const scalingRows = [
  ["Cost per qualified lead at or below T for at least two weeks, stable qualified-lead rate, no material conversion lag and evidence of lost impression share to budget", "Increase budget by no more than 20%, then monitor for 3–5 days"],
  ["Cost per qualified lead at or below T but impression share is constrained by rank", "Improve relevance, ads, landing page and Quality Score before adding budget"],
  ["Cost per qualified lead at or below T but conversion volume is fewer than 50 per week", "Treat any increase as a controlled test, not a scale declaration"],
  ["Budget increased by 20% and clean economics deteriorate materially", "Hold or reverse after accounting for conversion lag"],
  ["Conversion definitions have recently changed", "Do not scale until a comparable clean baseline exists"],
] as const;

const pmaxRows = [
  ["Current media envelope at the low end", "5% slice", "10% slice", "50.0% of the envelope would be required to fund the full floor"],
  ["Current media envelope around the midpoint", "5% slice", "10% slice", "35.7% of the envelope would be required to fund the full floor"],
  ["Current media envelope at the high end", "5% slice", "10% slice", "31.9% of the envelope would be required to fund the full floor"],
] as const;

const pmaxDecisionRows = [
  ["GO — fund to floor", "Incremental or deliberately reallocated budget sufficient for the full 30-day floor; clean primary conversions; qualified-lead import operating; dedicated Consulting landing page; verified asset set; brand exclusions; campaign-level negatives; URL expansion controls; audience signals; separate Consulting measurement scope"],
  ["PARK", "Budget remains limited to a 5–10% test slice; conversions remain polluted; offline quality signals are absent; or PMax cannot be isolated from other business and clinical content"],
  ["NO-GO pending audit", "Existing asset groups, URLs, brand exclusions, negatives, search themes, historical search categories or conversion settings reveal cross-business contamination"],
] as const;

const repairRows = [
  ["Brand demand is small, Brand is eligible, and campaign budget is not materially constraining delivery", "Repair and retain as a tightly controlled Brand ad group"],
  ["Brand queries are being matched by non-brand or dynamic-search groups but volume remains minimal", "Repair the ad group, add exact/phrase brand coverage and monitor query routing"],
  ["Brand has meaningful impressions but loses share to budget or rank, or requires different bidding, budget, reporting, negatives or messaging", "Break Brand into its own always-on Search campaign"],
  ["Shared campaign budget repeatedly starves Brand because one service theme consumes delivery", "Break Brand into its own campaign with a protected budget"],
  ["There is no measurable brand search demand after eligibility is confirmed", "Retain a minimal eligible structure and monitor; do not force spend"],
  ["Brand terms overlap with other business, clinical or ambiguous group entities", "Use carefully scoped campaign-level controls; do not apply account-wide negatives"],
] as const;

const audienceSources = [
  "Consulting website visitors, excluding other business and clinical domains or paths.",
  "High-intent service-page visitors.",
  "Dedicated landing-page visitors.",
  "The free 15-minute Workplace Ergonomics Risk Snapshot page and form starters who did not submit — preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis.",
  "Engaged visitors based on meaningful page or session behaviour.",
  "Video viewers and Meta engagers after TOFU activity begins.",
  "Newsletter audiences only where marketing consent permits advertising use.",
  "CRM lists of qualified Consulting leads and clients, subject to lawful use and privacy review.",
  "Customer or qualified-lead seed lists for later lookalike modelling.",
  "Exclusions for submitted leads, active opportunities, current clients, staff, suppliers, other-business customers and clinical patients where appropriate.",
] as const;

const remarketingPrerequisites = [
  "Australian privacy review completed.",
  "CMP plus Consent Mode v2, default denied, with no client- or server-side analytics/advertising transmission before consent implemented and tested.",
  "Enquiry consent separated from optional marketing consent.",
  "Consulting-specific GA4 stream, pixel and GTM scope confirmed.",
  "No health, injury or medical fields included in advertising forms or audience definitions.",
  "Audience membership durations aligned to the B2B sales cycle.",
  "Frequency, reach and audience size monitored.",
  "Creative uses role- and workplace-level language. Meta must not imply a viewer or their staff has a health condition.",
  "The free 15-minute Workplace Ergonomics Risk Snapshot is labelled preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis in every remarketing ad or destination where it is described.",
  "All proof claims and logos receive client sign-off before use.",
] as const;

const workPlan = [
  ["1. Measurement inventory", "Export all conversion actions, campaign goals, GA4 mappings, tag diagnostics and attribution settings", "Clean Consulting optimisation objective"],
  ["2. Business-scope isolation", "Map each campaign, conversion, tag, audience and destination to Consulting, Physiotherapy or legacy activity", "Prevent cross-business optimisation and reporting"],
  ["3. Query and keyword audit", "Review search terms, keywords, match types, negatives, dynamic-search coverage and routing", "Diagnose waste, Manual Handling concentration and Brand non-delivery"],
  ["4. Creative and landing-page audit", "Review RSAs, assets, relevance and destination performance", "Identify message-match and conversion-rate constraints"],
  ["5. Settings audit", "Review geo, schedule, devices, networks, budgets, eligibility and change history", "Identify delivery leakage or starvation"],
  ["6. Clean baseline", "Reconcile Ads, GA4, call records and CRM qualified outcomes", "Establish target CPA and bidding baseline"],
  ["7. Conditional rebalance", "Apply the 3× Kill Rule and 20% Scaling Rule to clean data", "Controlled reallocation without premature pause/scale decisions"],
  ["8. Expansion gate", "Decide Brand breakout, PMax funding and remarketing rebuild", "Add coverage only where measurement and budget are sufficient"],
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

export default function AccountAuditPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private account audit</div>
        </nav>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Appendix E · Existing-account diagnostic</p>
            <h1>Repair the signal before funding expansion.</h1>
            <p className={styles.heroCopy}>
              The account has a mature Search foundation, but its conversion objective is mixed and its expansion pockets are not yet independently funded or measured. Clean the signal first; then make every bid, budget and rebuild decision conditional on qualified pipeline.
            </p>
          </div>
          <aside className={styles.summary}>
            <p>Audit posture</p>
            <h2>A diagnostic plan—not a completed Google Ads audit.</h2>
            <ul>
              <li><Check size={17} /> Repair Consulting conversion goals</li>
              <li><Check size={17} /> Protect proven Search demand</li>
              <li><Check size={17} /> Keep PMax and remarketing gated</li>
              <li><Check size={17} /> Rebalance only on clean evidence</li>
            </ul>
          </aside>
        </div>
        <a className={styles.scrollCue} href="#e1"><ArrowDown size={17} /> Read the baseline</a>
      </header>

      <section className={styles.docSection} id="e1">
        <SectionHeading
          label="E1 · Account baseline and audit boundaries"
          title="A mature Search programme with a clean-up obligation."
          copy="This is an optimisation plan for a mature Search program, not a greenfield launch."
        />
        <div className={styles.prose}>
          <p>
            The evidence was verified as at 12 July 2026 and includes last-30-day search terms, the full keyword/status/match-type/headline-Quality-Score inventory and 493 negatives. A full audit still requires longer history, RSAs/assets, complete campaign settings, Quality Score components and geo/device performance reports. No live-account changes are authorised by this plan.
          </p>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Redacted account baseline</caption>
            <thead><tr><th scope="col">Item</th><th scope="col">Verified baseline</th></tr></thead>
            <tbody>
              {baselineRows.map(([item, baseline]) => <tr key={item}><th scope="row">{item}</th><td>{baseline}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Last-30-day conversion actions</caption>
            <thead><tr><th scope="col">Conversion action</th><th scope="col">Reported volume (directional)</th><th scope="col">Proposed role</th></tr></thead>
            <tbody>
              {conversionRows.map(([action, conversions, role]) => <tr key={action}><th scope="row">{action}</th><td>{conversions}</td><td>{role}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="e2">
        <SectionHeading
          label="E2 · First priority"
          title="Repair the conversion objective before touching bids or budgets."
          copy="Maximize Conversions can only optimise toward the quality of the primary actions it receives."
        />
        <div className={styles.prose}>
          <p>
            No bidding or budget decision should precede conversion cleanup. The Search campaign currently uses Maximize Conversions, so every primary action can influence bidding. Counting newsletter registrations and soft engagement actions as success risks directing spend toward users most likely to take easy actions rather than become qualified Consulting opportunities.
          </p>
          <h3>Proposed Consulting conversion hierarchy</h3>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>From platform action to qualified commercial outcome</caption>
            <thead><tr><th scope="col">Conversion stage</th><th scope="col">Definition</th><th scope="col">Google Ads treatment</th></tr></thead>
            <tbody>
              {conversionHierarchy.map(([stage, definition, treatment]) => <tr key={stage}><th scope="row">{stage}</th><td>{definition}</td><td>{treatment}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p><strong>Offer caveat:</strong> Wherever offered, the free 15-minute Workplace Ergonomics Risk Snapshot must be described as preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis.</p>
        </div>
        <div className={styles.calloutRow}>
          <ClipboardCheck size={20} />
          <p><strong>Awaiting client approval:</strong> a qualified call is a unique inbound call attributable to ErgoWorks Consulting that reaches a human or approved call-handling service, meets the approved minimum connected-duration and operating-hours conditions, and is dispositioned as a legitimate B2B workplace-ergonomics enquiry. It must exclude spam, wrong numbers, job seekers, suppliers, consumer equipment-shopping enquiries, Physiotherapy, clinical or personal-health enquiries, and repeat calls about the same opportunity.</p>
        </div>
        <div className={styles.prose}>
          <p>
            Duration is a screening condition, not proof of qualification. The CRM/call-tracking disposition is authoritative. The exact duration and operating-hours rule remains awaiting client approval. Keep any native duration-based proxy Secondary. Import <code>qualified_call</code> as the only Primary call signal using a stable order ID derived from the CRM opportunity/call record. If a proxy was previously imported in error, retract or restate it with Google Ads conversion adjustments before the qualified import; never count the proxy and qualified import as two conversions for the same call.
          </p>
          <h3>Required conversion-cleanup sequence</h3>
          <ol>
            {cleanupSteps.map((step, index) => <li key={step}>{index + 1}. {step}</li>)}
          </ol>
          <p>
            Changing primary conversions will change Smart Bidding behaviour and reported CPA. Expect a learning and restabilisation period; do not interpret an immediate fall in reported conversions as lost business when easy actions have deliberately been removed.
          </p>
          <h3>Measurement and privacy gate</h3>
          <ul>
            <li>Keep enquiry consent separate from optional marketing consent.</li>
            <li>Under OAIC APP 3, the health-data deny-list is explicit: do not collect injury details, symptoms, diagnoses, treatment, claims or other health information in advertising forms.</li>
            <li>Implement an appropriate CMP and Consent Mode v2, default denied, with no client- or server-side analytics/advertising transmission before consent.</li>
            <li>Complete an Australian privacy review covering GA4, GTM, CRM, Google Ads, Meta Pixel and CAPI.</li>
            <li>Scope tags, streams and containers so Consulting data does not leak into other business or clinical datasets.</li>
            <li>Use only controllable-output claims; do not claim guaranteed injury prevention, assured WHS compliance or quantified claims reductions.</li>
            <li>Treat awards, client logos, a global FMCG client, ASX-listed enterprise clients and a strong public review rating as <strong>client sign-off required</strong> before any paid-media use.</li>
          </ul>
        </div>
      </section>

      <section className={styles.docSection} id="e3">
        <SectionHeading
          label="E3 · Bidding assessment and decision gate"
          title="Let clean outcomes decide the bidding ceiling."
          copy="The rubric is useful as a gate, not as a reason to switch a mature campaign automatically."
        />
        <div className={styles.prose}>
          <h3>Current position</h3>
          <p>
            The Search campaign is verified as using Maximize Conversions with no target CPA. It produced a small number of reported conversions in the last 30 days, of which only a portion appear to be real leads. The current optimisation signal is polluted by newsletter registrations plus soft actions.
          </p>
          <p>The required order is:</p>
          <ol>
            <li>1. Clean conversion goals.</li>
            <li>2. Validate qualified-lead capture and import.</li>
            <li>3. Allow the campaign to restabilise.</li>
            <li>4. Compare bidding strategies using clean outcomes.</li>
            <li>5. Consider tCPA or tROAS only after sufficient volume and stability.</li>
          </ol>
          <h3>Rubric conflict</h3>
          <p>
            The prescribed ads-budget rubric says: below 30 conversions/month, use Maximize Clicks with a CPC cap; between 30 and 50 conversions/month, use Maximize Conversions; and use tCPA only after stable CPA and greater conversion volume.
          </p>
          <p>
            The synthesis nevertheless concludes that Maximize Conversions is the practical ceiling at the current modest monthly real-conversion volume (detailed in the private pack). The live campaign also has established Search history rather than being a new campaign.
          </p>
          <p>
            This conflict should not be resolved by automatically switching a mature campaign to Maximize Clicks. Maximize Clicks optimises traffic volume rather than lead quality and could amplify irrelevant demand before the resolved 30-day search-term evidence and existing negative inventory have been fully audited and extended with longer history.
          </p>
          <h3>Recommended assessment</h3>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Decision gate after conversion cleanup</caption>
            <thead><tr><th scope="col">Condition after cleanup</th><th scope="col">Bidding recommendation</th></tr></thead>
            <tbody>
              {biddingRows.map(([condition, recommendation]) => <tr key={condition}><th scope="row">{condition}</th><td>{recommendation}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <p>
            A CPC cap cannot be responsibly prescribed from the current evidence because keyword-level CPC/performance history and longer-term query distributions were not supplied, although match types and headline Quality Scores are resolved. It should be based on the extended keyword and search-term performance export, not the generic Search benchmark.
          </p>
        </div>
        <div className={styles.calloutRow}>
          <CircleAlert size={20} />
          <p><strong>Do not use ECPC.</strong> It is deprecated and inappropriate here.</p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="e4">
        <SectionHeading
          label="E4 · Spend concentration and conditional rebalancing"
          title="Concentration is a diagnostic question, not proof of waste."
          copy="The 3× Kill Rule and 20% Scaling Rule only activate after clean outcomes, enough observation time and a business-approved target."
        />
        <div className={styles.prose}>
          <p>
            Manual Handling Training represented 49% of the last-30-day Search spend. This concentration is directionally plausible because “manual handling training” is the dominant verified demand term at approximately 2,700 Australian searches per month. Concentration alone is not proof of waste.
          </p>
          <p>
            Ergonomic Office Consulting generated a modest number of reported conversions and the best observed reported cost-per-lead signal. That result is promising, but it is not yet a scale directive because the evidence does not show whether those conversions were genuine enquiries, qualified calls, newsletter registrations or other soft actions. Exact spend and CPA figures are detailed in the private PDF pack.
          </p>
          <h3>Conditional 3× Kill Rule</h3>
          <p>
            The 3× Kill Rule requires a business-approved target CPA. No target CPA or qualified-lead CAC ceiling has been supplied, so no ad group should be labelled for immediate pause from this evidence. Let T equal the approved clean target CPA.
          </p>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>3× Kill Rule — conditional decisions</caption>
            <thead><tr><th scope="col">Diagnostic result</th><th scope="col">Minimum evidence</th><th scope="col">Conditional decision</th></tr></thead>
            <tbody>
              {killRuleRows.map(([result, evidence, decision]) => <tr key={result}><th scope="row">{result}</th><td>{evidence}</td><td>{decision}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <p>
            For Manual Handling Training specifically, the diagnostic must separate query quality and lead quality before reallocation. Its large spend share may reflect genuine market demand, loose matching, weak negatives or some combination of the three. The 12 July keyword pull adds one refinement: <code>manual handling</code> PHRASE at QS=3 is in the rubric’s <strong>fail tier</strong>, while several QS=5 keywords are in its <strong>warning tier</strong>. Diagnose the Quality Score components rather than treating all core keywords alike.
          </p>
          <p>
            Certificate intent also contains two cohorts: clearly individual leakage and a converting corporate/online slice. The term <code>manual handling certificate online australia</code> produced a fractional reported-conversion signal in the evidence set. <strong>Do not blanket-exclude</strong> certificate intent; use the complementary-controls decision table and the client-sign-off-required certificate block.
          </p>
          <p>
            Separately, the generic competitor/generic ad group used 18.7% of spend on a small click and conversion sample. Conversion quality for that group total is unverified. The live keyword pull shows it is not a Dynamic Search Ads group: it holds nine static EXACT keywords—six competitor-keyword entries across four competitors plus three generics. Only the sampled government/competitor-query subset was near-zero converting. The evidence gap is therefore whether the group-level reported conversions represent qualified demand and whether the sampled leakage warrants tighter query controls.
          </p>
          <h3>Conditional 20% Scaling Rule</h3>
          <p>
            Scaling is permitted only after a segment meets its clean target CPA consistently for at least two weeks and shows stable lead quality. The skill rubric also uses at least 50 conversions per week as a full “green light” for scaling; ErgoWorks is far below that threshold at its current modest monthly real-lead volume. This account therefore does not qualify for unconditional scaling under that rule.
          </p>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>20% Scaling Rule — conditional decisions</caption>
            <thead><tr><th scope="col">Condition</th><th scope="col">Decision</th></tr></thead>
            <tbody>
              {scalingRows.map(([condition, decision]) => <tr key={condition}><th scope="row">{condition}</th><td>{decision}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <p>
            The best observed reported signal for Ergonomic Office Consulting makes it the first segment to validate for controlled expansion—not an automatic recipient of more spend.
          </p>
        </div>
      </section>

      <section className={styles.docSection} id="e5">
        <SectionHeading
          label="E5 · Brand ad-group zero-delivery diagnosis"
          title="The Brand problem is paused coverage plus duplicated routing."
          copy="The repair is consolidation: re-enable dedicated Brand coverage and remove the duplicate terms from service groups in one controlled step."
        />
        <div className={styles.prose}>
          <p>
            The Brand ad group delivered zero spend, zero clicks and zero conversions in the last 30 days. Dedicated Brand routing and reporting are absent; service groups currently capture Brand queries.
          </p>
          <h3>Confirmed cause from the live pull</h3>
          <p>
            All three Brand keywords—<code>ergoworks</code> PHRASE, <code>ergoworks</code> EXACT and <code>ergoworks physio</code> PHRASE—are PAUSED (QS=None). No ineligibility, budget-starvation or negative-blocking investigation is required to explain the zero delivery.
          </p>
          <p>
            The same pull adds a structural refinement: all three terms are ENABLED as duplicates inside five non-brand ad groups. Brand queries are therefore not unprotected—they are being captured by whichever service ad group wins the internal auction, served non-brand ads and non-brand landing pages, and reported inside service ad-group metrics. The repair is consolidation, not just re-enablement; a small portion of Manual Handling Training’s reported conversions may currently be brand-query conversions.
          </p>
          <h3>Repair sequence</h3>
          <ol>
            <li>1. Verify an eligible RSA and a correct Consulting destination exist in the existing Brand ad group.</li>
            <li>2. As one controlled consolidation step, re-enable its three Brand terms and remove the duplicated Brand terms from all five service ad groups.</li>
            <li>3. Verify Brand query routing and separate Brand/service metrics, then monitor delivery and spend for a full period.</li>
            <li>4. Only then consider the “break into own campaign” branch of the repair-versus-breakout rule, which still applies once delivery resumes.</li>
          </ol>
          <h3>Repair-versus-breakout rule</h3>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>Brand routing decision matrix</caption>
            <thead><tr><th scope="col">Finding</th><th scope="col">Recommendation</th></tr></thead>
            <tbody>
              {repairRows.map(([finding, recommendation]) => <tr key={finding}><th scope="row">{finding}</th><td>{recommendation}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <p>
            Once delivery resumes, pull Brand search volume, search terms, auction insights, impression share and lost impression share by budget/rank before deciding repair-in-place versus campaign breakout.
          </p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="e6">
        <SectionHeading
          label="E6 · Paused Performance Max decision"
          title="Park PMax until it can be funded and isolated properly."
          copy="A nominal percentage slice is not the same thing as a viable test floor."
        />
        <div className={styles.prose}>
          <p>
            A paused PMax campaign remains outside the active growth engine. The prescribed minimum is a full viable daily floor, not a small percentage allocation. The current media envelope cannot fund that floor from a 5–10% slice without taking a material share of Search funding.
          </p>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>PMax funding test — dollars abstracted</caption>
            <thead><tr><th scope="col">30-day media base</th><th scope="col">5% allocation</th><th scope="col">10% allocation</th><th scope="col">Share required to fund the full floor</th></tr></thead>
            <tbody>
              {pmaxRows.map(([base, five, ten, share]) => <tr key={base}><th scope="row">{base}</th><td>{five}</td><td>{ten}</td><td>{share}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <p>
            A 5–10% PMax slice provides only a small daily allocation and does not meet the full viable floor. Funding the floor from the observed current envelope would consume approximately 31.9%–50.0% of the 30-day media budget.
          </p>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>PMax go / no-go gate</caption>
            <thead><tr><th scope="col">Decision</th><th scope="col">Required conditions</th></tr></thead>
            <tbody>
              {pmaxDecisionRows.map(([decision, conditions]) => <tr key={decision}><th scope="row">{decision}</th><td>{conditions}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.calloutRow}>
          <BarChart3 size={20} />
          <p><strong>Recommendation: PARK PMax</strong> unless it can be funded to the full viable daily floor without destabilising proven Search. Do not reactivate it merely to satisfy a nominal 10% testing allocation.</p>
        </div>
      </section>

      <section className={styles.docSection} id="e7">
        <SectionHeading
          label="E7 · Paused remarketing rebuild"
          title="Rebuild remarketing only after consent and isolation pass."
          copy="The existing configuration should not simply be re-enabled while its audience sources, exclusions and measurement are unknown."
        />
        <div className={styles.prose}>
          <p>
            A paused remarketing campaign can be rebuilt after consent and isolation requirements are satisfied. Start with compatible Consulting intent cohorts and exclude submitted leads, active opportunities and audiences that should not receive these messages.
          </p>
          <h3>Audience sources</h3>
          <ul>{audienceSources.map((source) => <li key={source}>{source}</li>)}</ul>
          <h3>Rebuild prerequisites</h3>
          <ol>{remarketingPrerequisites.map((prerequisite, index) => <li key={prerequisite}>{index + 1}. {prerequisite}</li>)}</ol>
        </div>
        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p><strong>Privacy and platform guardrail:</strong> Meta must not imply a viewer or their staff has a health condition. If audience sizes are insufficient for stable delivery, combine compatible Consulting intent cohorts rather than importing audiences from other business or clinical datasets.</p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="e8">
        <SectionHeading
          label="E8 · Diagnostic work plan"
          title="Eight workstreams turn the evidence into controlled decisions."
          copy="The work plan establishes a clean baseline before any pause, scale, breakout or rebuild decision is made."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Diagnostic work plan</caption>
            <thead><tr><th scope="col">Phase</th><th scope="col">Work</th><th scope="col">Decision enabled</th></tr></thead>
            <tbody>
              {workPlan.map(([phase, work, decision]) => <tr key={phase}><th scope="row">{phase}</th><td>{work}</td><td>{decision}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <p>
            No Google Ads health score should be calculated from the current evidence set. The required 30-day Search Terms Report is available, but longer history and the remaining applicable audit checks and supporting reports are not complete.
          </p>
          <p>
            The next diagnostic pass should retain the resolved Brand cause, the full keyword and match-type pull, the existing negative inventory and the 18.7% generic competitor/generic ad-group finding as starting evidence. It should then reconcile conversion types, downstream qualification, geography, devices, creative, landing pages, settings, bidding history, rank constraints, PMax configuration, remarketing configuration, tracking, consent, target economics and proof permissions.
          </p>
        </div>
        <div className={styles.calloutRow}>
          <Crosshair size={20} />
          <p><strong>Planning boundary:</strong> No live-account changes are authorised by this plan. Expansion remains gated by clean Consulting measurement, Australian privacy approval, business-scope isolation and sufficient funding for the relevant test floor.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p><CircleAlert size={13} style={{ verticalAlign: "-2px", marginRight: ".4rem" }} />Confidential · For client review only</p>
      </footer>
    </main>
  );
}
