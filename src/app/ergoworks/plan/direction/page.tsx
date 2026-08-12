/*
WHY THIS IS A SERVER COMPONENT, AND MUST STAY ONE
  This page carries the internal account-value ladder and the Decision-table
  owner names. A `"use client"` page would compile that text into a
  /_next/static chunk, which the Basic-auth gate in src/proxy.ts cannot cover
  because its matcher excludes /_next/static. Keep the confidential direction
  note in the gated server-rendered payload.
*/

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  CircleAlert,
  ClipboardCheck,
  LockKeyhole,
  ShieldCheck,
  Target,
  TimerReset,
} from "lucide-react";
import styles from "../plan.module.css";

const CTA = "Request a workplace ergonomics review";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Phase-one direction",
  description: "Private phase-one landing-page direction and build recommendation for ErgoWorks Consulting.",
  robots: { index: false, follow: false },
};

function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: ReactNode }) {
  return (
    <div className={styles.sectionHeading}>
      <p>{label}</p>
      <h2>{title}</h2>
      {copy ? <span>{copy}</span> : null}
    </div>
  );
}

export default function DirectionPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> Phase-one direction</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private &amp; confidential</div>
        </nav>

        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>ErgoWorks Consulting · Phase one · 12 August 2026 · Rev B</p>
            <h1>ErgoWorks phase one — landing-page direction.</h1>
            <p className={styles.heroCopy}>
              <strong>For Marcus, ahead of the Friday review.</strong> This rev B reflects the 12 Aug meeting scope (Sydney proof test, dual brand treatment) and the Oz/Ruth answers, with a four-lens review of Ahrefs keyword data, CRO, Google Ads and positioning. One market, one audience, one entry service, one working offer and one tracked conversion event — with two brand treatments of the same page and a binary launch-readiness gate.
            </p>
          </div>
          <aside className={styles.summary}>
            <p>The direction</p>
            <h2>Run one readable Sydney proof test.</h2>
            <ul>
              <li><Target size={17} /> Sydney only · employers with 100+ total employees</li>
              <li><Check size={17} /> One CTA · one primary conversion</li>
              <li><ShieldCheck size={17} /> Biosymm-led baseline vs ErgoWorks-led comparison</li>
              <li><TimerReset size={17} /> Fri 21 Aug binary readiness gate</li>
            </ul>
          </aside>
        </div>

        <a className={styles.scrollCue} href="#phase-one">
          <ArrowDown size={17} /> Read the approved direction
        </a>
      </header>

      <section className={styles.docSection} id="phase-one">
        <SectionHeading
          label="01 · What phase one is"
          title="One market. One audience. One entry service. One working offer. One tracked conversion event."
          copy="This is the direction note promised for today: what the page is, how the two brand treatments work, what the form asks, how it is measured, and the decisions that unlock the build."
        />

        <div className={styles.stateList} style={{ marginTop: "3rem" }}>
          <div>
            <strong>One market + one audience</strong>
            <span>
              <strong>Sydney only.</strong> The audience is employers with <strong>100+ total employees</strong> and an office, hybrid or home-based workforce. The 20–99 employee profile Ruth described remains a valid broader-market segment — it is deliberately outside this proof test, not written off.
            </span>
          </div>
          <div>
            <strong>One entry service</strong>
            <span>
              An employer-sponsored ergonomic assessment — “foot in the door”, per Oz — solves the immediate issue and creates a credible starting point for broader support. If the need extends, support expands into floor walking, ErgoAssess, train-the-trainer, office-move/fit-out and return-to-office programs, without adding another phase-one CTA.
            </span>
          </div>
          <div>
            <strong>One working offer + CTA</strong>
            <span>
              <strong>Working, not final.</strong> The CTA is <em>{CTA}</em>. Marcus/Greg confirm what the requester actually receives before build. The recommended default is a <strong>written scope before anything is booked</strong>, plus same-day acknowledgement where capacity allows.
            </span>
          </div>
          <div>
            <strong>One tracked conversion event</strong>
            <span>
              <code>employer_enquiry_submitted</code> is the form submit; calls are tracked as a parallel path. <strong>“Qualified” is assigned after contact</strong>, when Ruth’s definition is confirmed — corporate, clear need, decision-maker, budget, timeframe. The business KPI stays “qualified employer enquiry”; the page event does not claim it prematurely.
            </span>
          </div>
        </div>

        <div className={styles.calloutRow} style={{ maxWidth: "none", marginTop: "2.5rem" }}>
          <CircleAlert size={20} />
          <p>
            <strong>Offer boundary.</strong> The free Snapshot is <strong>excluded from both the ads and the LP</strong> unless explicitly re-approved. Its mandated 113-char caveat cannot reliably display in an RSA, and re-adding it on the page splits the offer.
          </p>
        </div>

        <div className={styles.calloutRow} style={{ maxWidth: "none" }}>
          <BarChart3 size={20} />
          <p>
            <strong>Internal account-value ladder — private review pack only.</strong> $700–$2k assessment → $2–6k small rollout → $7–15k medium program → $20–65k+ large program over 12–24 months. This is an internal note and is <strong>never on the public page</strong>.
          </p>
        </div>
      </section>

      <section className={styles.questionsSection} id="brand-test">
        <div>
          <SectionHeading
            label="02 · The brand test"
            title="Two treatments of the same page, designed so the result is readable."
            copy="Same structure, copy skeleton, offer, form and measurement — only the brand layer changes."
          />
          <p className={styles.planningOnly}>
            The working recommendation is a deterministic 50/50 routing to two skins on one production host. The brand split is LP-only; the ads stay identical.
          </p>
        </div>

        <div>
          <div className={styles.roadmap} style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))", marginTop: 0 }}>
            <article>
              <div className={styles.phaseHead}><span><Check size={18} /></span><b>A</b></div>
              <h3>Recommended baseline</h3>
              <p className={styles.hubCardCopy}>
                <strong>Biosymm Workplace Ergonomics</strong>, with “ErgoWorks — our specialist ergonomics capability” as the endorsement line.
              </p>
            </article>
            <article>
              <div className={styles.phaseHead}><span><ArrowRight size={18} /></span><b>B</b></div>
              <h3>Comparison treatment</h3>
              <p className={styles.hubCardCopy}>
                ErgoWorks-led with the Biosymm connection clear.
              </p>
            </article>
          </div>

          <div className={styles.calloutRow} style={{ maxWidth: "none" }}>
            <CircleAlert size={20} />
            <p>
              <strong>Decision 4 remains unapproved.</strong> The descriptor — “ErgoWorks by Biosymm” vs “Powered by Biosymm” (assets received 12 Aug use the latter) — is a brand/entity approval item, not a copy choice. Confirm Biosymm-led as baseline and the ErgoWorks descriptor wording before build.
            </p>
          </div>

          <ol className={styles.questions}>
            <li>
              <span>01</span>
              <p><strong>One production domain.</strong> Both variants use one host — working recommendation: Biosymm’s primary domain, subject to Joel’s routing and lead-ownership confirmation. If A lives on biosymm.com and B on the ErgoWorks site, the test also changes domains, trust signals, page authority and tracking stacks. That is not a brand-response test. Deterministic 50/50 routing to two skins on one host is the clean design.</p>
            </li>
            <li>
              <span>02</span>
              <p><strong>Identical ads for both variants.</strong> The brand split is LP-only. Branded ad variants would add a second test variable and fragment already-thin volume; if branded ads become mandatory later, that is mirrored campaigns, not mixed ad groups.</p>
            </li>
            <li>
              <span>03</span>
              <p><strong>Trust-asset parity.</strong> Both skins must carry equivalent proof. ErgoWorks’ live Google rating — <strong>63 reviews</strong> — is real, usable social proof, but if only Variant B shows it, the test is contaminated by a proof difference. Decide which entity’s trust assets each variant displays before build.</p>
            </li>
            <li>
              <span>04</span>
              <p><strong>One primary conversion action.</strong> Record <code>brand_variant = biosymm_led | ergoworks_led</code> on every lead and every tracked call into the lead tracker. No separate conversion actions per brand.</p>
            </li>
            <li>
              <span>05</span>
              <p><strong>Expectation setting.</strong> Ahrefs AU data (12 Aug) puts addressable Sydney-relevant volume at ~350–450 searches/mo; a modest budget buys roughly 300–450 clicks/mo, most of it individual/self-assessment intent before the 100+ filter. The realistic proof-test read is <strong>single-digit to low-teens enquiries/mo</strong> — directional, not statistical. Readout ladder, agreed in advance: search-term quality → employer enquiry → qualification → discovery/meeting → opportunity → proposal → won account → expansion/revenue, with “insufficient volume” a legitimate outcome.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.docSection} id="page-structure">
        <SectionHeading
          label="03 · The page (both variants)"
          title="A message-matched assessment page, tightened to the new scope."
          copy={<>The visual/IA reference is the existing mockup. <strong>/ergoworks/lp-mockup is superseded.</strong> <a href="/ergoworks/lp">Open the live prototype at /ergoworks/lp</a> (public). The Search ads companion is <code>build/ad-copy-2026-08.md</code> — ErgoWorks-led first draft, Sydney-only; see its 12 Aug review addendum.</>}
        />

        <div className={styles.stateList} style={{ marginTop: "3rem" }}>
          <div>
            <strong>01 · Hero</strong>
            <span>
              Benefit-led, with Sydney in the H1 and the deliverable promise: <em>“Workplace ergonomic assessments in Sydney. With a report your HR team can act on.”</em> + CTA. This report wording is <strong>conditional on Decision 1 confirming the deliverable</strong>; if no report is promised, fall back to the trigger-led hero: <em>“From discomfort complaints to office moves — know what to address next.”</em> Single H1; the promise, not just the problem, earns the scroll to the form.
            </span>
          </div>
          <div>
            <strong>02 · CTA discipline</strong>
            <span>
              <em>{CTA}</em> is a single source of truth, carried <strong>verbatim</strong> into the ads’ description line, the hero button and the form submit. No paraphrasing: “Request a workplace review” drops the one word that matches the query.
            </span>
          </div>
          <div>
            <strong>03 · Employer filter</strong>
            <span>
              “For your team / organisation” is pre-selected on the paid path — the ad already filtered for employer intent, so do not spend a click on re-asking. “For myself” remains available and routes individuals out politely with <strong>no lead event</strong>. Fork-first stays only for non-paid traffic.
            </span>
          </div>
          <div>
            <strong>04 · Problem / trigger section</strong>
            <div className={styles.prose}>
              <p>Oz’s four objections are answered in place, built into the copy rather than a separate FAQ:</p>
              <ul>
                <li><em>“Ergonomics is only needed after injury”</em> → the review is the early-intervention step: “most of what we find is caught before it becomes a claim — that’s the point of a review.”</li>
                <li><strong>Budget</strong> → cost-of-injury framing anchored to the prioritised-findings deliverable: what you get for the money vs what a claim costs.</li>
                <li><em>“We can assess internally”</em> → the differentiator is the prioritised report + record of what was implemented, not the checklist.</li>
                <li><strong>Competing priorities</strong> → one line near the CTA on the cost of not addressing an identified risk.</li>
              </ul>
              <p>Triggers use the client’s own set, grouped: discomfort complaints/reported risks · office relocation, fit-out, redesign or sit-stand rollout · hybrid/home-based rollout · return-to-work &amp; early intervention · workers-comp concern · new WHS initiative or risk review · workforce growth/restructure.</p>
            </div>
          </div>
          <div>
            <strong>05 · How it works</strong>
            <span>
              Ruth’s path, promised honestly: same-day acknowledgement/contact <strong>where Sydney capacity allows</strong> → discovery → written scope, with a proposal within 48–72 hours where applicable → follow-up in 3–5 days. Pair the conditional response promise with the concrete written-scope deliverable so it reads as a commitment, not a caveat.
            </span>
          </div>
          <div>
            <strong>06 · Ecosystem strip</strong>
            <span>
              Use Oz’s client language: floor walking, ErgoAssess, train-the-trainer, office-move support. This is the expansion story, with no extra CTAs. The indicative internal account ladder is $700–$2k assessment → $2–6k small rollout → $7–15k medium program → $20–65k+ large program over 12–24 months; it is <strong>never on the public page</strong>.
            </span>
          </div>
          <div>
            <strong>07 · Proof</strong>
            <span>
              Until approved case studies land: (a) the illustrative sample-report visual, clearly labelled; (b) the live Google rating where the trust-parity rule (§2.3) allows; (c) process-trust as the third pillar — written scope before booking, record of what was implemented. Optional context strips, sourced and non-promissory: the SafeWork NSW hazard-management obligation (context, “not a compliance assessment or certification”) and Safe Work Australia’s national musculoskeletal claim counts (category figures, not an outcome promise). No invented proof, no generic cost-per-injury number.
            </span>
          </div>
          <div>
            <strong>08 · Enquiry form</strong>
            <span>The enquiry form is specified in the next section.</span>
          </div>
          <div>
            <strong>09 · Mobile</strong>
            <span>
              Assume a majority of paid traffic: two-tap path from fork to form; sample report renders as a stacked list, not a table, under 640px; <strong>persistent call button pinned on mobile</strong> — 13 of 17 current lead events are calls, so the call path must be one thumb-reach away.
            </span>
          </div>
        </div>

        <div className={styles.calloutRow} style={{ maxWidth: "none", marginTop: "2.5rem" }}>
          <ClipboardCheck size={20} />
          <div className={styles.prose}>
            <p><strong>Changes vs the current mockup before production:</strong></p>
            <ul>
              <li>Remove the 4-offer switcher.</li>
              <li>Remove sub-100 employee bands.</li>
              <li>Fix the Melbourne/Canberra/Brisbane FAQ — Sydney-only for this programme.</li>
              <li>Replace the free-text “what prompted the review?” field and align the button CTA verbatim.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="form-spec">
        <SectionHeading
          label="04 · The form"
          title="Qualified enough, and privacy-safe."
          copy="Two-step, dropdown-driven, 7 required fields — qualification beyond this happens in the same-day call (Ruth’s model), not by making the form heavier."
        />

        <div className={styles.stateList} style={{ marginTop: "3rem" }}>
          <div>
            <strong>01 · Organisation</strong>
            <span>Required.</span>
          </div>
          <div>
            <strong>02 · Workforce size</strong>
            <span><strong>100–499 / 500+</strong> — no sub-100 escape hatch.</span>
          </div>
          <div>
            <strong>03 · Sydney location(s)</strong>
            <span>Required.</span>
          </div>
          <div>
            <strong>04 · Your role</strong>
            <span>HR / WHS / People &amp; Culture / Injury Management / Facilities / Workplace Experience / Procurement / Operations / Other.</span>
          </div>
          <div>
            <strong>05 · What’s driving this</strong>
            <span>Grouped dropdown per §3.4 triggers.</span>
          </div>
          <div>
            <strong>06 · Work email</strong>
            <span>Required.</span>
          </div>
          <div>
            <strong>07 · Enquiry-processing consent</strong>
            <span><strong>Required.</strong></span>
          </div>
        </div>

        <div className={styles.prose} style={{ marginTop: "2.5rem" }}>
          <h3>Optional and deferred</h3>
          <ul>
            <li><strong>Phone optional</strong> — the pinned call CTA is the phone path; requiring it suppresses form fills.</li>
            <li><strong>Timeframe deferred to the call.</strong></li>
            <li><strong>Marketing consent optional and unchecked.</strong></li>
          </ul>
        </div>

        <div className={styles.calloutRow} style={{ maxWidth: "none" }}>
          <ShieldCheck size={20} />
          <p>
            <strong>Explicitly excluded:</strong> injury descriptions, symptoms, claims detail, employee names — no free text that invites health information into ad platforms.
          </p>
        </div>
      </section>

      <section className={styles.measurementSection} id="measurement-media">
        <SectionHeading
          label="05 · Measurement & media"
          title="One clean primary action, a complete lead spine, and a live routing blocker."
          copy="Form submit is the primary action; calls remain a parallel path because the current signal is call-heavy. The test is only interpretable when attribution, conversion goals and campaign routing are explicit."
        />

        <div className={styles.stateList} style={{ marginTop: "3rem" }}>
          <div>
            <strong>Primary conversion + calls</strong>
            <span>
              Form submit = <code>employer_enquiry_submitted</code>, the single primary action; qualified status is set in the tracker after contact. Calls are tracked as a parallel path <strong>with attribution mechanics specified</strong>: caller → lead ID with <code>brand_variant</code> + source/campaign captured (number-per-variant or call-tracking parameter), otherwise the majority signal is lost to the test.
            </span>
          </div>
          <div>
            <strong>Existing lead tracker</strong>
            <span>
              Every lead lands in the existing lead tracker: lead ID, brand_variant, campaign/ad group, GCLID + UTMs, org, size band, role, driver, owner, qualification status, then stage/value. This needs tracker access + schema — Christine.
            </span>
          </div>
          <div>
            <strong>Conversion-action cleanup</strong>
            <span>
              Pull the exact inventory of the “~20 mixed primaries” from the account first — the last audit documented 16 — then set a campaign-specific goal set for the Sydney test.
            </span>
          </div>
          <div>
            <strong>Cannibalisation — Decision 10</strong>
            <span>
              <strong>Live blocker, not a footnote.</strong> The Sydney test keywords (<code>ergonomic assessment sydney</code>, <code>workplace/office ergonomic assessment</code>, <code>workstation assessment</code>, consultant terms) already run in campaign 700072710 on the same domain, and Google will route each query to one campaign. “Baseline untouched” and “isolated Sydney test” are incompatible without a routing decision. Options: exclude the test terms/Sydney geo from 700072710 for the test window (recommended), or accept the new campaign as additive rather than isolated. This goes to Marcus as Decision 10.
            </span>
          </div>
          <div>
            <strong>Keyword plan</strong>
            <div className={styles.prose}>
              <p>Ahrefs AU, 12 Aug: the drafted set covers essentially the whole addressable market.</p>
              <ul>
                <li>Add plural phrases: <code>“ergonomic assessments”</code>, <code>“workstation assessments”</code>.</li>
                <li>Weight budget to the beachhead + consultant + workplace groups (corporate SERP intent — our site already ranks #3 organically on the beachhead).</li>
                <li>Hold or de-fund the Remote/home-office group (checklist/individual intent, no tracked commercial SERP).</li>
                <li>Build the campaign-level negative list: individual/home, equipment, courses, job-seekers, physio-patient, software/DIY, small-business terms — full list in the ad-copy addendum.</li>
                <li>Negatives cannot enforce company size — the “For 100+ employee teams” ad line, the form bands and the call do that.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.docSection} id="decisions">
        <SectionHeading
          label="06 · Decisions that unlock the build"
          title="Ten decisions, with the owner named beside each one."
          copy="These are the decisions that must be resolved for the phase-one build. Decision 4 is explicitly a brand/entity approval item: the ErgoWorks descriptor wording is not approved by implication."
        />

        <div className={styles.tableScroll}>
          <table>
            <caption>Decisions that unlock the build</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Decision</th>
                <th scope="col">Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" data-label="#">1</th>
                <td data-label="Decision">Confirm CTA “{CTA}” + what the requester receives (recommended: written scope before booking)</td>
                <td data-label="Owner">Marcus/Greg</td>
              </tr>
              <tr>
                <th scope="row" data-label="#">2</th>
                <td data-label="Decision">Production domain + who builds/hosts (working rec: Biosymm primary domain, Joel builds) + two-variant routing mechanism</td>
                <td data-label="Owner">Marcus + Joel</td>
              </tr>
              <tr>
                <th scope="row" data-label="#">3</th>
                <td data-label="Decision">Which entity owns the lead (privacy notice, inbox, phone) for each brand variant</td>
                <td data-label="Owner">Marcus/Greg</td>
              </tr>
              <tr>
                <th scope="row" data-label="#">4</th>
                <td data-label="Decision">Confirm Biosymm-led as baseline + the ErgoWorks descriptor wording; brand split stays LP-only (ads identical)</td>
                <td data-label="Owner">Marcus/Greg + Joel</td>
              </tr>
              <tr>
                <th scope="row" data-label="#">5</th>
                <td data-label="Decision">Initial media budget + daily cap</td>
                <td data-label="Owner">Greg</td>
              </tr>
              <tr>
                <th scope="row" data-label="#">6</th>
                <td data-label="Decision">Lead-tracker access + schema</td>
                <td data-label="Owner">Christine</td>
              </tr>
              <tr>
                <th scope="row" data-label="#">7</th>
                <td data-label="Decision">Sydney weekly capacity + the same-day-response commitment</td>
                <td data-label="Owner">Oz/Ruth</td>
              </tr>
              <tr>
                <th scope="row" data-label="#">8</th>
                <td data-label="Decision">Approved case studies / proof points + trust-asset parity call (§2.3)</td>
                <td data-label="Owner">Christine/team</td>
              </tr>
              <tr>
                <th scope="row" data-label="#">9</th>
                <td data-label="Decision">Privacy/consent requirements for form + tracking</td>
                <td data-label="Owner">Christine (legal)</td>
              </tr>
              <tr>
                <th scope="row" data-label="#">10</th>
                <td data-label="Decision">Cannibalisation routing: carve the test terms/geo out of 700072710, or accept an additive (non-isolated) test</td>
                <td data-label="Owner">Marcus/Greg</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.calloutRow} style={{ maxWidth: "none" }}>
          <CircleAlert size={20} />
          <p><strong>Build-blockers.</strong> Decisions 1–4 + 10 are the build-blockers.</p>
        </div>

        <Link className={styles.pdfLink} href="/ergoworks/plan/decisions">
          Open the full private decision register <ArrowRight size={15} />
        </Link>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="timeline">
        <SectionHeading
          label="07 · Timeline to launch (~14 days)"
          title="The Fri 21 Aug gate is binary."
          copy="The sequence below keeps the build and the launch decision honest: launch only when the stated gates are green, or say exactly what blocks it."
        />

        <div className={styles.stateList} style={{ marginTop: "3rem" }}>
          <div>
            <strong>Fri 14 Aug (Marcus’s session)</strong>
            <span>
              Per Marcus’s own agenda: approve the landing-page structure and messaging, both brand treatments, the enquiry form, campaign scope and budget, lead ownership/follow-up, tracking requirements and launch-readiness dependencies; record remaining proof/privacy/capacity gates. Decisions 1–4 + 10 are the build-blockers.
            </span>
          </div>
          <div>
            <strong>Mon–Tue 17–18</strong>
            <span>Wireframe → two brand skins; form + tracker field map frozen; conversion-action inventory pulled; negative list built.</span>
          </div>
          <div>
            <strong>Wed–Thu 19–20</strong>
            <span>Page build/staging (Joel), Sydney campaign built in draft, end-to-end tracking QA plan.</span>
          </div>
          <div>
            <strong>Fri 21 Aug — launch-readiness gate</strong>
            <span><strong>Binary.</strong> Green only if the conditions below are all met.</span>
          </div>
        </div>

        <div className={styles.calloutRow} style={{ maxWidth: "none", marginTop: "2.5rem" }}>
          <ShieldCheck size={20} />
          <div className={styles.prose}>
            <p><strong>Green only if:</strong></p>
            <ul>
              <li>Page public.</li>
              <li>Offer approved.</li>
              <li>Variants identical except brand (including trust parity).</li>
              <li>Sydney routing decision implemented.</li>
              <li>Conversion goals clean.</li>
              <li>Form → tracker verified with click IDs + brand_variant.</li>
              <li>Call attribution live.</li>
              <li>Privacy cleared.</li>
              <li>Lead owner + SLA confirmed.</li>
            </ul>
          </div>
        </div>

        <div className={styles.stateList} style={{ marginTop: "2.5rem" }}>
          <div>
            <strong>~Mon 24–Wed 26 Aug</strong>
            <span>Launch, or “build complete, launch blocked on X” — <strong>never a soft launch with open gates</strong>.</span>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p><CircleAlert size={13} style={{ verticalAlign: "-2px", marginRight: ".4rem" }} />Confidential · For client review only · Planning authorisation only</p>
      </footer>
    </main>
  );
}
