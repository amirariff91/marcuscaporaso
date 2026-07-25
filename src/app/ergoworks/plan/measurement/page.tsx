import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  ArrowDown,
  Check,
  CircleAlert,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import styles from "../plan.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Measurement",
  description:
    "Private sponsor summary and implementation specification for consent-gated CRM and conversion measurement.",
  robots: { index: false, follow: false },
};

const spineRows = [
  [
    "Account (employer)",
    <><code>organisation_account_id</code> per legal entity; sites, business unit, buying-centre contacts, panel/incumbent status and renewal date.</>,
    "The single canonical join key. It is manually validated before an account is joined across stacks.",
  ],
  [
    "Lead",
    <><code>lead_id</code>; <code>organisation_account_id</code>; first-touch service; source, channel and campaign; Google click identifiers or the Meta click identifier; consent flags; created date; and, for calls, call id, connected duration and CRM disposition.</>,
    "CRM is the system of record, not the ad platform.",
  ],
  [
    "Opportunity / stage",
    "Service line; enquiry, qualified and won stages; contract value; start date and end date.",
    "A won consulting engagement is the outcome returned through the offline loop.",
  ],
  [
    "Equipment order",
    <><code>order_id</code>; <code>organisation_account_id</code>; order value; and nullable gross margin.</>,
    "Held in the equipment stack and joined only in the internal account view.",
  ],
  [
    "Worker data",
    "Assessment and health information kept separate from the employer account and sales records.",
    "Never merged into marketing audiences or ad-platform records.",
  ],
] as const;

const platformRows = [
  [
    "Qualified corporate enquiry",
    "Primary consulting signal. It is a qualified enquiry, not a raw form-fill and not a newsletter sign-up.",
    "Consulting ad platforms after the consent and conversion gates are cleared.",
  ],
  [
    <><code>qualified_call</code></>,
    "The only primary call signal. Call id, connected duration and CRM disposition are required; the CRM disposition is authoritative and calls are deduplicated against form submissions from the same organisation.",
    <>Import through the qualified-call path in Appendix C §7 and §12. The rule itself is the client’s to set and is still open at <a href="/ergoworks/plan/decisions#gate-B6">gate B6</a>.</>,
  ],
  [
    "Won consulting engagement",
    "Offline conversion import, using the retained click identifier and the CRM-confirmed won stage. Consulting contract value may be included when approved.",
    "Consulting ad platforms for outcome learning and reporting; not equipment revenue.",
  ],
  [
    "Newsletter and raw actions",
    "Not primary conversion signals. Newsletter, soft clicks and raw form activity remain diagnostic or secondary until the CRM confirms commercial qualification.",
    <>The live account still has <EvidenceLink id="6a.9">16 enabled actions marked primary</EvidenceLink>; cleanup is not complete.</>,
  ],
  [
    "Equipment revenue",
    "Never imported into the consulting ad account. It stays in the equipment stack and the internal account-level view.",
    "No blended consulting-plus-equipment ROAS from any ad account.",
  ],
  [
    "Worker health or assessment data",
    "Never sent to an ad platform, audience or customer-match list, even if transformed or hashed.",
    "Excluded by the privacy boundary.",
  ],
  [
    "Individual-flow route-out",
    "The route-out fires no lead or advertising event. Individuals are not turned into a corporate lead by the measurement layer.",
    "No platform destination.",
  ],
] as const;

const guardrailRows = [
  [
    "Collection notices",
    "Keep assessment delivery, account management, service cross-sell and equipment marketing purposes distinct. Consent is granular, not bundled.",
  ],
  [
    "Health and assessment information",
    "Purpose-limited and separated from sales and marketing. It does not build ad audiences or marketing lists.",
  ],
  [
    "Access",
    "Use role-based access so clinical or assessment records cannot become sales or advertising inputs.",
  ],
  [
    "Suppression",
    "Apply purpose limitation and suppression to any recirculated lead. Withdrawal stops future processing and follows the approved deletion workflow.",
  ],
] as const;

const sequenceRows = [
  [
    "0 · Privacy and tracking-stack gates",
    <>Clear Australian privacy sign-off at <a href="/ergoworks/plan/decisions#gate-C5">gate C5</a>. Confirm the tag-manager container, consent platform and legacy analytics tag at <a href="/ergoworks/plan/decisions#gate-C6b">gate C6b</a>. No CRM audience, cross-brand join or offline upload is built before this step.</>,
  ],
  [
    "1 · Conversion action repair",
    <>Set one qualified corporate enquiry as primary, add the qualified-call path, demote newsletter and soft actions, and remove physiotherapy actions from the Consulting goal set. The current mixed state is documented at <a href="/ergoworks/plan/evidence#evidence-6a.9">evidence 6a.9</a>.</>,
  ],
  [
    "2 · CRM spine",
    <>Choose the CRM at <a href="/ergoworks/plan/decisions#gate-B3">gate B3</a>; then implement <code>organisation_account_id</code>, click-ID capture, call capture, service stages and consent records.</>,
  ],
  [
    "3 · Won-lead offline loop",
    "Import won consulting engagements only after identifiers, consent evidence, deduplication and timing are tested. This is the Appendix C §7 loop, not a live change authorised by this page.",
  ],
  [
    "4 · Internal account-level view",
    <>Join consulting outcomes and equipment orders on manually validated <code>organisation_account_id</code>, subject to the legal-entity and record-permission decision at <a href="/ergoworks/plan/decisions#gate-B8">gate B8</a>.</>,
  ],
  [
    "5 · Reporting",
    <>Report associated cross-sell value, attach rates and account-level outcomes separately from platform ROAS. Do not call it LTV until <a href="/ergoworks/plan/decisions#gate-B1">gate B1</a> supplies the required economics.</>,
  ],
] as const;

function EvidenceLink({ id, children }: { id: string; children: ReactNode }) {
  return <a href={`/ergoworks/plan/evidence#evidence-${id}`}>{children}</a>;
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

export default function MeasurementPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private implementation specification</div>
        </nav>

        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Cross-population measurement · Revised plan v2 · 25 July 2026</p>
            <h1>Measure the account we actually earn.</h1>
            <p className={styles.heroCopy}>
              I am not promising that one lead qualifies an account for every service. I am specifying
              an internal, consent-controlled view of what a qualified consulting lead actually opens,
              while keeping platform bidding, privacy and account boundaries honest.
            </p>
          </div>

          <aside className={styles.summary}>
            <p>Sponsor summary</p>
            <h2>Approve the boundary before the build.</h2>
            <ul>
              <li><Check size={17} /> Qualified corporate enquiries and qualified calls are the commercial signals.</li>
              <li><Check size={17} /> Equipment value is reported internally, never blended into platform ROAS.</li>
              <li><Check size={17} /> Privacy and tracking-stack gates come before CRM or cross-brand work.</li>
              <li><Check size={17} /> Gross margin is unavailable, so every margin-derived report is blocked.</li>
            </ul>
          </aside>
        </div>

        <a className={styles.scrollCue} href="#honest-problem"><ArrowDown size={17} /> Read the boundary first</a>
      </header>

      <section className={styles.docSection} id="honest-problem">
        <SectionHeading
          label="Sponsor summary · [Interpretation]"
          title="The diagram is a hypothesis, not a promise."
          copy="The measurement job is to test cross-population value after the fact, not to turn a consulting enquiry into a claim about an entire organisation."
        />

        <div className={styles.prose}>
          <p>
            The ecosystem diagram implies that one lead qualifies the account for every service, with
            equipment sales sitting underneath all of them. I do not promise that to a prospect. The
            honest internal question is narrower: what value is associated with the services a lead
            actually opens, and what equipment activity is later associated with the same organisation?
          </p>
          <p>
            That value belongs in an internal account-level view, reported separately from platform
            ROAS. I will never present blended consulting-plus-equipment ROAS out of an ad account;
            the platforms optimise to qualified consulting outcomes, while the internal view is used
            for strategy and pricing.
          </p>
        </div>

        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p>
            <strong>[Verified] Privacy boundary:</strong> individual workers&rsquo; assessment and health
            information stays separate from the employer account and is not used for marketing. The
            cross-population view can only use permitted organisation-level business records.
          </p>
        </div>

        <div className={styles.stateList}>
          <div>
            <strong>Intended model</strong>
            <span>
              The Consulting stack and the equipment-store stack are separate, with no cross-firing
              tags and no merged audiences. The join happens only in the internal account view.
            </span>
          </div>
          <div>
            <strong>Present state</strong>
            <span>
              <strong>[Verified]</strong> Account <EvidenceLink id="6a.12">9258098368</EvidenceLink> is not
              consulting-only: it currently runs an enabled physiotherapy campaign and holds paused
              equipment-store campaign shells. Isolation is the intended governance model, not a fact
              I am claiming today.
            </span>
          </div>
          <div>
            <strong>Separate equipment account</strong>
            <span>
              <strong>[Verified]</strong> A separate equipment account is recorded at <EvidenceLink id="6a.13">8253602680</EvidenceLink>.
              The separation and the permitted relationship between the businesses still require the
              decision at <a href="/ergoworks/plan/decisions#gate-B8">gate B8</a>.
            </span>
          </div>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="sequence">
        <SectionHeading
          label="Approval sequence · gates first"
          title="Privacy and tracking-stack checks precede CRM work."
          copy="This is a specification only. I am not authorising a tag, import, audience or CRM-field change until the first gate is cleared."
        />

        <div className={styles.stateList}>
          {sequenceRows.map(([step, detail]) => (
            <div key={step}>
              <strong>{step}</strong>
              <span>{detail}</span>
            </div>
          ))}
        </div>

        <div className={styles.calloutRow}>
          <CircleAlert size={20} />
          <p>
            <strong>Gate 0 is a hard stop.</strong> The live markup records tag-manager container
            <EvidenceLink id="6d.1">GTM-KXGD4GM</EvidenceLink>, a legacy analytics tag <EvidenceLink id="6d.2">UA-530267-5</EvidenceLink>,
            and no consent-management platform in the initial markup <EvidenceLink id="6d.5">(evidence 6d.5)</EvidenceLink>.
            Confirm the active consent path and remove the legacy tag under the approved tracking-stack
            decision before any CRM audience, cross-brand join or offline upload.
          </p>
        </div>
      </section>

      <section className={styles.docSection} id="crm-spine">
        <SectionHeading
          label="Implementation specification · CRM spine"
          title="One canonical join key, used consistently."
          copy={<>The CRM is the source of truth. The canonical join key is <code>organisation_account_id</code>; I do not use a second account-key name for this design.</>}
        />

        <div className={styles.tableScroll}>
          <table>
            <caption>Minimum records and controls</caption>
            <thead>
              <tr><th scope="col">Object</th><th scope="col">Minimum fields</th><th scope="col">Control</th></tr>
            </thead>
            <tbody>
              {spineRows.map(([object, fields, control]) => (
                <tr key={typeof object === "string" ? object : "worker-data"}>
                  <th scope="row" data-label="Object">{object}</th>
                  <td data-label="Minimum fields">{fields}</td>
                  <td data-label="Control">{control}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.prose}>
          <p>
            <strong>[Interpretation]</strong> The join is not automatic name matching. The same organisation
            appears under variant spellings, so any shared organisation record must be manually
            validated before it enters the cross-sell ledger. Whether the two businesses share a legal
            entity, customer records or referral arrangements remains a permissibility decision at
            <a href="/ergoworks/plan/decisions#gate-B8"> gate B8</a>.
          </p>
        </div>

        <div className={styles.calloutRow}>
          <CircleAlert size={20} />
          <p>
            <strong>GATE — gross margin is unavailable.</strong> <strong>[Verified]</strong> The store has
            <EvidenceLink id="6c.7">531 published products and zero with a populated non-zero cost-of-goods value</EvidenceLink>.
            Margin must come from a finance source or remain empty. All contribution, margin-derived
            LTV and margin-based cross-sell reporting stays blocked until <a href="/ergoworks/plan/decisions#gate-B11">gate B11</a> is
            resolved. This is a release gate, not a footnote.
          </p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="qualified-path">
        <SectionHeading
          label="Platform boundary · Appendix C §§7, 10, 11 and 12"
          title="Send qualified consulting outcomes. Keep the rest out."
          copy="The allowlist, offline loop, attribution rules and call-tracking rules are specified in Appendix C. The rows below are the cross-population boundary that implementation must enforce."
        />

        <div className={styles.tableScroll}>
          <table>
            <caption>What may flow to the consulting ad platforms</caption>
            <thead>
              <tr><th scope="col">Signal</th><th scope="col">Rule</th><th scope="col">Destination / status</th></tr>
            </thead>
            <tbody>
              {platformRows.map(([signal, rule, destination]) => (
                <tr key={typeof signal === "string" ? signal : "qualified-call"}>
                  <th scope="row" data-label="Signal">{signal}</th>
                  <td data-label="Rule">{rule}</td>
                  <td data-label="Destination / status">{destination}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.prose}>
          <h3>The qualified-call path is mandatory</h3>
          <p>
            <strong>[Verified]</strong> <EvidenceLink id="6a.7">13 of the 17 recorded lead events in the latest 30-day window are phone calls</EvidenceLink>.
            A form-only design would miss most of the current pipeline. Every call record therefore
            needs a call id, connected duration and CRM disposition. The connected-duration screen is
            not proof of qualification: the CRM disposition is authoritative. Dedupe the call against
            any form submission from the same organisation, and import <code>qualified_call</code> as the
            only primary call signal. The definition is the client’s to approve and remains open at
            <a href="/ergoworks/plan/decisions#gate-B6"> gate B6</a>.
          </p>
          <p>
            The won-engagement import is the only offline outcome this page proposes. Retain the
            applicable click identifier and consent evidence, deduplicate client and server delivery,
            and import only after the Appendix C §7 tests pass. The equipment order remains in its own
            stack and in the internal account view; it does not become a consulting conversion.
          </p>
        </div>

        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p>
            <strong>Hard boundary:</strong> a worker&rsquo;s health or assessment record never enters an ad
            platform, and the individual route-out fires no event. No event is created merely because
            someone is not eligible for the corporate flow.
          </p>
        </div>
      </section>

      <section className={styles.docSection} id="account-view">
        <SectionHeading
          label="Internal account-level view · Appendix C §11"
          title="Associated value is useful only when it stays honest."
          copy="The internal view is where I measure cross-population behaviour. It is not an ad-account ROAS view and it is not causal attribution."
        />

        <div className={styles.roadmap}>
          <article>
            <div className={styles.phaseHead}><span>01 · Origin</span><b>01</b></div>
            <h3>Start with the organisation</h3>
            <p className={styles.hubCardCopy}>
              Key the record to <code>organisation_account_id</code>, retain the first-touch service,
              source and campaign, and record the manually validated join decision.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span>02 · Outcomes</span><b>02</b></div>
            <h3>Roll up what happened</h3>
            <p className={styles.hubCardCopy}>
              Sum won consulting contract value, equipment order value and renewal status. Leave gross
              margin nullable until a finance source exists.
            </p>
          </article>
          <article>
            <div className={styles.phaseHead}><span>03 · Report</span><b>03</b></div>
            <h3>Call it associated value</h3>
            <p className={styles.hubCardCopy}>
              Report associated cross-sell value and attach rates separately from platform ROAS. Do not
              call it causal, incremental revenue or LTV before the required commercial inputs exist.
            </p>
          </article>
        </div>

        <div className={styles.prose}>
          <p>
            <strong>[Verified]</strong> The store evidence records repeat equipment buying, including
            <EvidenceLink id="6c.4">19 repeat organisations from 133 raw organisation strings</EvidenceLink>.
            That establishes equipment-order behaviour only. It does not show that a consulting
            engagement caused any order; the cross-sell ledger must record the originating consulting
            lead or opportunity, first-touch source, equipment order or quote id, date, revenue and
            gross margin where available.
          </p>
          <p>
            <strong>[Interpretation]</strong> Until gross margin, average contract value, close rate and
            retention inputs exist, this view can report associated revenue but not LTV:CAC or a margin
            conclusion. Those unit-economics inputs are held at <a href="/ergoworks/plan/decisions#gate-B1">gate B1</a>;
            margin has the separate hard stop at <a href="/ergoworks/plan/decisions#gate-B11">gate B11</a>.
          </p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="privacy">
        <SectionHeading
          label="Consent and privacy · Appendix C §9"
          title="The privacy boundary is part of the measurement design."
          copy="Australian privacy sign-off is required before any CRM audience or cross-brand join. Organisation-level business signals do not make employee health information available for marketing."
        />

        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p>
            <strong>Privacy sign-off precedes activation.</strong> No CRM audience, cross-brand data use,
            customer match, recirculated lead or offline upload is built before the approved Australian
            privacy decision at <a href="/ergoworks/plan/decisions#gate-C5">gate C5</a>.
          </p>
        </div>

        <div className={styles.tableScroll}>
          <table>
            <caption>Required controls before recirculation</caption>
            <thead>
              <tr><th scope="col">Control</th><th scope="col">Implementation rule</th></tr>
            </thead>
            <tbody>
              {guardrailRows.map(([control, rule]) => (
                <tr key={control}>
                  <th scope="row" data-label="Control">{control}</th>
                  <td data-label="Implementation rule">{rule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.prose}>
          <h3>Consent sequence</h3>
          <ul>
            <li>The consent-management platform establishes the default consent state before measurement transmission.</li>
            <li>Consent Mode uses default denied states for analytics storage, ad storage, ad-user-data and ad-personalisation until the required consent is recorded.</li>
            <li>No analytics, advertising, server-side, audience or call-tracking transmission occurs before the required consent evidence is available.</li>
            <li>Consent updates propagate to the web and server tagging layers; the server layer rejects advertising events without the required evidence.</li>
            <li>Withdrawal stops future processing and triggers the approved deletion or suppression workflow.</li>
          </ul>
        </div>
      </section>

      <section className={styles.docSection} id="handoff">
        <SectionHeading
          label="Implementation hand-off · Appendix C §§7, 9, 10, 11, 12 and 13"
          title="The specification is complete when the boundaries are testable."
          copy="Appendix C remains the detailed implementation reference. This page carries the decisions that must be visible to both the sponsor and the person building the CRM and tracking flow."
        />

        <div className={styles.prose}>
          <p>
            <strong>Appendix C map:</strong> §7 offline conversion loop; §9 consent and privacy; §10
            platform allowlist; §11 attribution; §12 call tracking; and §13 KPI framework.
          </p>
          <h3>Acceptance conditions</h3>
          <ul>
            <li>The Consulting conversion goal <strong>must no longer include</strong> newsletter, raw soft actions, physiotherapy or other-business actions. This is an acceptance condition, not a completed step — the current mixed state is linked at <a href="/ergoworks/plan/evidence#evidence-6a.9">evidence 6a.9</a>.</li>
            <li><strong>[Interpretation]</strong> The CRM stores <code>organisation_account_id</code>, click identifiers, call id, connected duration, CRM disposition, service stages, values and consent records.</li>
            <li><strong>[Interpretation]</strong> <code>qualified_call</code> is the only primary call signal, with CRM disposition authoritative and form deduplication tested.</li>
            <li><strong>[Interpretation]</strong> Won consulting imports pass the Appendix C §7 offline loop; equipment revenue, worker health data and individual route-out events are rejected by the allowlist.</li>
            <li><strong>[Interpretation]</strong> The internal account view uses manually validated <code>organisation_account_id</code>, is labelled associated cross-sell value, and is kept separate from platform ROAS.</li>
            <li><strong>GATE</strong> Gross-margin-derived reporting remains disabled until <a href="/ergoworks/plan/decisions#gate-B11">gate B11</a> supplies a finance source or approved store cost data.</li>
            <li><strong>GATE</strong> Australian privacy approval and tracking-stack confirmation are recorded before CRM audiences, cross-brand joins or offline imports begin.</li>
          </ul>

          <h3>Reporting vocabulary</h3>
          <p>
            Use the Appendix C §13 KPI framework for qualified-lead cost, raw lead cost, qualified-lead
            rate, CAC, platform-to-CRM discrepancy and upload health. Describe equipment outcomes as
            <strong> associated cross-sell value</strong>, never as causal or incremental revenue. Keep
            every account-level figure separate from platform ROAS.
          </p>
          <p>
            Status labels on this page are explicit: <strong>[Verified]</strong> means checked against a
            dated source; <strong>[Interpretation]</strong> means my reading of the evidence; and
            <strong>[Assumption]</strong> means a working belief still requiring a source or decision.
            This page contains no live-account authorisation.
          </p>
        </div>

        <div className={styles.calloutRow}>
          <CircleAlert size={20} />
          <p>
            <strong>Release rule:</strong> If consent, isolation, the qualified-call definition, CRM
            identity, won-import validation or gross-margin source is unresolved, stop at that gate and
            report the limitation. The missing data is part of the result.
          </p>
        </div>
      </section>
    </main>
  );
}
