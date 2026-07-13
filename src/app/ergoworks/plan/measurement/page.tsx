import type { Metadata } from "next";
import {
  ArrowDown,
  Check,
  ClipboardCheck,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import styles from "../plan.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Measurement",
  description:
    "Private, redacted tracking and measurement upgrade specification for ErgoWorks Consulting.",
  robots: { index: false, follow: false },
};

const funnelSteps = ["Snapshot / enquiry / call", "Lead record", "Qualified lead", "Proposal", "Won"] as const;

const biddingRows = [
  ["Snapshot request", "snapshot_request", "CRM-confirmed form submission", "Initial Primary", "Initial website Lead event"],
  ["Direct enquiry", "direct_enquiry", "CRM-confirmed form submission", "Initial Primary", "Initial website Lead event"],
  ["Call connected", "call_connected", "Call-tracking platform", "Secondary", "Reporting only"],
  ["Qualified call", "qualified_call", "CRM / call disposition (W-Audit rule)", "Primary only via qualified import once reliable", "Send via CAPI; optimise only after reliable volume"],
  ["Qualified lead", "lead_qualified", "CRM stage", "Secondary while validated; future Primary", "Future qualified-lead optimisation signal"],
  ["Proposal", "proposal_sent", "CRM stage", "Secondary", "CAPI reporting / custom audience"],
  ["Won", "closed_won", "CRM finance-approved stage", "Value-bearing secondary initially", "CAPI value event and audience exclusion"],
] as const;

const eventRows = [
  ["snapshot_request", "Valid B2B Snapshot form accepted and CRM lead created", "GA4, Google Ads, Meta, CRM", "Primary initially"],
  ["direct_enquiry", "Valid general Consulting enquiry accepted and CRM lead created", "GA4, Google Ads, Meta, CRM", "Primary initially"],
  ["call_connected", "Dynamically tracked inbound call connects", "CRM, GA4 observation", "Secondary"],
  ["qualified_call", "Call passes the approved W-Audit rule and CRM disposition", "Google Data Manager, Meta CAPI, CRM", "Primary when reliable"],
  ["lead_qualified", "CRM marks a lead as a legitimate commercial fit", "Google Data Manager, Meta CAPI, CRM", "Future optimisation event"],
  ["proposal_sent", "A priced proposal is issued", "Google Data Manager, Meta CAPI, CRM", "Secondary"],
  ["closed_won", "Finance/CRM confirms a won engagement", "Google Data Manager, Meta CAPI, CRM", "Revenue outcome"],
  ["newsletter_signup", "Separate marketing subscription completed (marketing consent only)", "GA4 and approved marketing system", "Secondary only"],
] as const;

const acceptanceRows = [
  ["sGTM custom domain", "Active", "Configured, not active", "Not configured"],
  ["CAPI implementation", "CAPI Gateway active", "Manual CAPI", "Pixel only"],
  ["Meta EMQ for lead events", "≥ 8.0", "6.0–7.9", "< 6.0"],
  ["Browser/server deduplication", "≥ 90%", "70–89%", "< 70%"],
  ["Server/client hit ratio", "80–120%", "50–79% or > 120% pending diagnosis", "< 50%"],
  ["Match-parameter completeness", "6+ applicable parameters", "4–5", "< 4"],
  ["Hash convention", "Documented and verified", "Documented, unverified", "Inconsistent"],
  ["Offline import latency", "< 24h", "24–72h", "> 72h"],
  ["End-to-end validation", "All canonical launch events pass", "Partial coverage", "A Primary event fails"],
] as const;

const kpiRows = [
  ["Cost per qualified lead", "Media spend ÷ unique CRM-qualified leads", "Primary channel KPI"],
  ["Raw CPL", "Media spend ÷ valid Snapshot requests, direct enquiries and connected lead calls", "Entry-stage efficiency"],
  ["Qualified-lead rate", "Qualified leads ÷ valid raw leads", "Lead-quality diagnostic"],
  ["CAC", "Total attributable acquisition cost ÷ closed-won customers", "Commercial efficiency"],
  ["Target qualified CPL", "Target CAC × qualified-lead-to-won rate", "Maximum affordable qualified-lead cost"],
  ["Platform-to-CRM discrepancy", "(Platform conversions − matched CRM conversions) ÷ CRM conversions", "Tracking diagnostic"],
  ["Upload success rate", "Accepted offline events ÷ eligible events", "Pipeline health"],
] as const;

const consentSequence = [
  "The CMP loads first and establishes default consent states.",
  "Apply Consent Mode v2, default denied, with no client- or server-side analytics/advertising transmission before consent — including denied defaults for analytics_storage, ad_storage, ad_user_data and ad_personalization.",
  "No analytics, advertising, Pixel, CAPI, Enhanced Conversions, audience or call-tracking tag may transmit data before the required consent is recorded.",
  "Consent updates propagate to both web GTM and the server container.",
  "The server container rejects advertising events that lack the required consent evidence.",
  "Withdrawal of consent stops future processing and triggers the approved deletion/suppression workflow.",
] as const;

const denyList = [
  "Injury descriptions or history; pain, symptoms, diagnosis, disability or treatment information",
  "Workers’ compensation, insurance or claim details; medical or Physiotherapy appointment information",
  "Return-to-work case notes or employee health records; names or details of affected employees",
  "Free-text enquiry content; call recordings, transcripts or summaries",
  "Raw email, phone, name or postal address; sensitive URL parameters, query strings, fragments or page titles",
  "Physiotherapy, occupational-health or other-business identifiers/events in the Consulting dataset",
  "Passwords, tokens, financial-account information or government identifiers",
  "Any sensitive field merely transformed with SHA-256",
] as const;

const checklist = [
  "Campaign-specific Google conversion goals documented",
  "Newsletter, email clicks and raw call actions made Secondary for Consulting",
  "Physiotherapy actions excluded from the Consulting Search campaign",
  "Consulting-only GA4 stream or equivalent enforced isolation verified",
  "Dedicated Meta Pixel/Dataset created for ErgoWorks Consulting",
  "First-party tagging subdomain active",
  "Conversion Linker tested with GCLID, GBRAID and WBRAID",
  "CMP blocks all unconsented client and server transmissions",
  "Enquiry and marketing consent stored separately",
  "Snapshot caveat shown beside every Snapshot conversion point",
  "Form schema contains no health, injury or claim fields",
  "Server allowlist and deny list enforced",
  "Pixel and CAPI event names and IDs match; deduplication, EMQ and hit ratios pass",
  "Google Data Manager and Meta CAPI qualified/won test imports accepted",
  "Call rule matches the account-audit / W-Audit definition",
  "No tags fire on Physiotherapy or other-business properties",
  "DDA and conversion windows verified; CRM reconciliation report approved",
  "Australian legal/privacy approval recorded",
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

export default function MeasurementPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private tracking spec</div>
        </nav>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Appendix C · Tracking &amp; measurement</p>
            <h1>Move the optimisation signal closer to revenue.</h1>
            <p className={styles.heroCopy}>
              This upgrades the existing measurement stack rather than rebuilding it. Clean the
              conversion objective, close a privacy-controlled offline loop to qualified pipeline,
              and gate every activation on consent and Australian legal approval. No live-account
              changes are authorised by this plan.
            </p>
          </div>
          <aside className={styles.summary}>
            <p>Measurement posture</p>
            <h2>Qualified pipeline is the commercial lens — not raw platform conversions.</h2>
            <ul>
              <li><Check size={17} /> Repair and isolate the Consulting objective</li>
              <li><Check size={17} /> Return qualified outcomes to the platforms</li>
              <li><Check size={17} /> Consent Mode v2, default denied</li>
              <li><Check size={17} /> Legal/privacy sign-off before launch</li>
            </ul>
          </aside>
        </div>
        <a className={styles.scrollCue} href="#funnel"><ArrowDown size={17} /> The canonical funnel</a>
      </header>

      <section className={styles.measurementSection} id="funnel">
        <SectionHeading
          label="Canonical funnel &amp; bidding map"
          title="One funnel. Three lead-entry paths. The same CRM stages."
          copy="Snapshot requests, direct enquiries and calls are alternative entry points; each then progresses through the same qualification, proposal and won stages."
        />
        <div className={styles.pipeline}>
          {funnelSteps.map((item, index) => <div key={item}><span>{index + 1}</span><strong>{item}</strong></div>)}
        </div>
        <div className={styles.tableScroll} style={{ maxWidth: "1100px", margin: "2.5rem auto 0" }}>
          <table>
            <caption>Funnel stage → canonical event → bidding treatment</caption>
            <thead><tr><th scope="col">Stage</th><th scope="col">Event</th><th scope="col">Source of truth</th><th scope="col">Google</th><th scope="col">Meta</th></tr></thead>
            <tbody>
              {biddingRows.map(([stage, ev, src, g, m]) => <tr key={ev}><th scope="row">{stage}</th><td><code>{ev}</code></td><td>{src}</td><td>{g}</td><td>{m}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.calloutRow} style={{ marginLeft: "auto", marginRight: "auto" }}>
          <ShieldCheck size={20} />
          <p><strong>Snapshot caveat:</strong> the free 15-minute Workplace Ergonomics Risk Snapshot is preliminary guidance only — not a compliance assessment, compliance certification, medical assessment or diagnosis. This caveat must appear beside every Snapshot form, ad description and confirmation flow.</p>
        </div>
      </section>

      <section className={styles.docSection} id="repair">
        <SectionHeading
          label="C2–C3 · Conversion-action repair"
          title="Bid to cleaned leads, not to soft actions."
          copy="Initially the Search campaign keeps Maximize Conversions with no target CPA, bidding only to cleaned Snapshot requests, direct enquiries and qualified calls."
        />
        <div className={styles.prose}>
          <p>
            The current reporting total is inflated by native call clicks, newsletter registrations
            and email clicks. Newsletter is presently counted as Primary and no offline qualified-lead
            import exists. Demote soft actions to Secondary, validate enquiry forms against real
            submissions, exclude the separate Physiotherapy actions from the Consulting campaign goals,
            and import qualified-lead, proposal and won outcomes from the CRM using stable click
            identifiers.
          </p>
          <h3>Bidding transition rule</h3>
          <ul>
            <li>Keep Maximize Conversions with no tCPA until conversion actions are clean.</li>
            <li>Move the campaign goal toward <code>lead_qualified</code> only once the event is deduplicated, timely, consistently defined and producing a stable volume of clean qualified conversions per month. Until then, tCPA/tROAS is premature.</li>
            <li>Move Meta toward CRM-qualified-lead optimisation only after the event arrives reliably with acceptable match quality — not on a forced fixed threshold.</li>
            <li>Use <code>closed_won</code> for value calibration and CAC reporting once deal volume and upload consistency are adequate.</li>
          </ul>
          <p>Snapshot &ldquo;booked&rdquo; and &ldquo;held&rdquo; are CRM stages only, never platform events.</p>
        </div>
        <div className={styles.calloutRow}>
          <ClipboardCheck size={20} />
          <p><strong>Awaiting client approval:</strong> a qualified call is a unique inbound call attributable to ErgoWorks Consulting that reaches a human or approved call-handling service, meets the approved minimum connected-duration and operating-hours conditions, and is dispositioned as a legitimate B2B workplace-ergonomics enquiry — excluding spam, wrong numbers, job seekers, suppliers, consumer equipment enquiries, Physiotherapy/clinical/personal-health enquiries and repeat calls about the same opportunity. Duration is a screening condition, not proof of qualification.</p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="architecture">
        <SectionHeading
          label="C4 · Target architecture &amp; isolation"
          title="A first-party, consent-gated pipeline — walled off from the other businesses."
        />
        <div className={styles.prose}>
          <p>
            Consent is established by the CMP before any measurement tag fires. A web GTM container
            with Consulting-scoped triggers forwards eligible GA4 and advertising events to a
            server-side GTM container on a first-party tagging subdomain, which applies privacy
            filters before dispatching GA4, Google Ads Enhanced Conversions and Meta CAPI. Forms,
            calls and calendar events create a CRM lead record carrying click IDs, event IDs and
            consent evidence, and the CRM drives the offline uploads.
          </p>
          <h3>Required isolation</h3>
          <ul>
            <li>Use a dedicated ErgoWorks Consulting Meta Pixel/Dataset; never reuse another business&rsquo;s dataset.</li>
            <li>Use a dedicated Consulting GA4 web stream, or enforce hostname/data-stream filters if the property must remain shared.</li>
            <li>Apply campaign-specific conversion goals to the Consulting Search campaign, never account-default goals that include Physiotherapy.</li>
            <li>Test that events from the separate Physiotherapy website and the other businesses cannot enter the Consulting dataset, CRM pipeline or platform uploads.</li>
          </ul>
        </div>
      </section>

      <section className={styles.docSection} id="events">
        <SectionHeading
          label="C5–C6 · Event spec &amp; matching discipline"
          title="Canonical events, identical across browser, server and CRM."
          copy="Names stay identical everywhere; every custom event carries a schema_version. Aim for at least six applicable, consented Meta match parameters on lead events."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Canonical event specification (business meaning only)</caption>
            <thead><tr><th scope="col">Event</th><th scope="col">Trigger / meaning</th><th scope="col">Destinations</th><th scope="col">Bidding status</th></tr></thead>
            <tbody>
              {eventRows.map(([ev, meaning, dest, status]) => <tr key={ev}><th scope="row"><code>{ev}</code></th><td>{meaning}</td><td>{dest}</td><td>{status}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className={styles.prose}>
          <h3>Hashing rules</h3>
          <ul>
            <li>Hash PII (email, phone, name, address fields) with SHA-256 before it leaves the controlled server environment; never send plain values.</li>
            <li>Never double-hash; use one documented normalisation convention across web, CRM, Google and Meta.</li>
            <li>Hashing is a matching control, not anonymisation and not permission to upload sensitive data.</li>
            <li>Never place PII in URLs, third-party-visible data-layer keys, GA4 parameters, campaign names or event names.</li>
          </ul>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="offline">
        <SectionHeading
          label="C7–C8 · Offline loop &amp; quality gates"
          title="Return qualified and won outcomes — fast, deduplicated, consented."
          copy="Enhanced Conversions for Leads via Google Data Manager; website lead events plus CRM stages via Meta CAPI (preferably CAPI Gateway) with matching event IDs and timestamps."
        />
        <div className={styles.tableScroll}>
          <table>
            <caption>Server-side acceptance thresholds</caption>
            <thead><tr><th scope="col">Measure</th><th scope="col">Pass</th><th scope="col">Warning</th><th scope="col">Fail / launch blocker</th></tr></thead>
            <tbody>
              {acceptanceRows.map(([m, pass, warn, fail]) => <tr key={m}><th scope="row">{m}</th><td>{pass}</td><td>{warn}</td><td>{fail}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.questionsSection} id="consent">
        <div>
          <SectionHeading
            label="C9–C10 · Consent &amp; Australian privacy controls"
            title="Default denied. Nothing transmits before consent."
            copy="The stricter ErgoWorks rule governs over the assigned methodology’s advanced-mode preference. Behavioural-modelling recovery must not be assumed — the verified Search volume is well below the platform’s modelling threshold."
          />
          <p className={styles.planningOnly}>
            Enquiry-processing consent (to respond to a specific request) is kept separate from
            optional, unchecked marketing consent. No ad form may request injury history, symptoms,
            diagnosis, treatment, workers&rsquo; compensation details, claim status or other health
            information.
          </p>
        </div>
        <ol className={styles.questions}>
          {consentSequence.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}
        </ol>
      </section>

      <section className={styles.docSection} id="denylist">
        <SectionHeading
          label="Deny list · data that must never be sent"
          title="Hashing does not make health, injury or claim data acceptable."
        />
        <div className={styles.prose}>
          <ul>
            {denyList.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p><strong>Mandatory launch gate:</strong> before any Pixel, CAPI, Enhanced Conversions, CRM audience or offline-upload workflow is activated, Australian legal/privacy review must approve the full CRM-to-platform field mapping, consent wording, event/identifier list, call-tracking practices, retention periods and server-log contents. Failure to obtain this approval blocks launch.</p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="attribution">
        <SectionHeading
          label="C11–C13 · Attribution &amp; KPIs"
          title="Data-driven attribution; qualified-lead economics as the commercial truth."
          copy="Report platform-attributed, GA4-attributed and CRM-sourced outcomes separately — do not force them to reconcile as if they share windows and models."
        />
        <div className={styles.prose}>
          <p>
            Use Data-Driven Attribution for eligible Google Ads conversion actions and GA4 reporting;
            avoid rule-based models. Start with a provisional 30-day Google click window for B2B lead
            generation and review conversion lag quarterly, extending toward 60–90 days only if CRM
            evidence requires it. Treat Meta view-through conversions as directional, not proof of
            incrementality. The primary optimisation KPI is <strong>cost per qualified lead</strong>.
            No target CAC or scale threshold is committed until average contract value, contribution
            margin, qualification rate and close rate are verified.
          </p>
        </div>
        <div className={styles.tableScroll}>
          <table>
            <caption>KPI &amp; reconciliation framework</caption>
            <thead><tr><th scope="col">KPI</th><th scope="col">Formula</th><th scope="col">Use</th></tr></thead>
            <tbody>
              {kpiRows.map(([kpi, formula, use]) => <tr key={kpi}><th scope="row">{kpi}</th><td>{formula}</td><td>{use}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.docSection} id="checklist">
        <SectionHeading
          label="C14 · Validation &amp; launch checklist"
          title="What must be true before anything goes live."
        />
        <div className={styles.prose}>
          <ul>
            {checklist.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p>
            These are implementation and data-quality commitments — not promised reductions in CPL,
            claims or injury outcomes. Exact figures, account identifiers and conversion-lag
            distributions live in the private PDF pack and the account data itself, not on this page.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p>Confidential · Tracking &amp; measurement specification · Planning authorisation only</p>
      </footer>
    </main>
  );
}
