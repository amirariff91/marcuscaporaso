import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowDown,
  CircleAlert,
  ExternalLink,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CTA } from "../../lp/copy";
import plan from "../plan.module.css";
import styles from "./ads.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Search ad preview",
  description:
    "Private preview of the proposed Sydney Search ads (illustrative RSA compositions). Draft only — nothing is live.",
  robots: { index: false, follow: false },
};

/* ────────────────────────────────────────────────────────────────────────
   All copy below is DRAFT and lives in this SERVER component only. It must
   never move into a client module: /_next/static is ungated, so client-
   bundled constants would be readable without the plan password.
   Source of truth: docs/ergoworks-consulting/build/ad-copy-2026-08.md
   (the 2026-08-12 addendum's two-group collapse), with the addendum's own
   required edits applied (CTA line, 100+ qualifier). Char counts are
   computed at render from the strings — the doc's stated counts have five
   off-by-one errors, so nothing here trusts them. */

const HEADLINE_MAX = 30;
const DESC_MAX = 90;
const RSA_HEADLINE_CAP = 15; // Google max assets per RSA
const RSA_DESC_CAP = 4;
const PROJECT_MIN_HEADLINES = 8; // build rule, ad-copy doc line 45
const PROJECT_MIN_DESCS = 3;
const BUSINESS_NAME_MAX = 25; // Google business-name asset cap

const len = (s: string) => [...s].length;

type Asset = { text: string; conditional?: boolean };

type AdGroup = {
  id: string;
  keywords: { exact: string[]; phrase: string[] };
  headlines: Asset[];
  descriptions: Asset[];
};

// Deliverable-conditional assets (gated on Decision 1 — what the requester
// actually receives). Flagged amber until Marcus confirms the deliverable.
const CORE: AdGroup = {
  id: "Assessment-Core_Sydney",
  keywords: {
    exact: [
      "[ergonomic assessment sydney]",
      "[office ergonomic assessment]",
      "[workstation assessment]",
      "[workplace ergonomic assessment]",
    ],
    phrase: [
      '"ergonomic assessment sydney"',
      '"office ergonomic assessment"',
      '"workstation assessment"',
      '"workplace ergonomic assessment"',
      '"ergonomic assessments"',
      '"workstation assessments"',
    ],
  },
  headlines: [
    { text: "Ergonomic Assessments Sydney" },
    { text: "Sydney Workplace Ergonomics" },
    { text: "Request an ergonomics review" },
    { text: "For 100+ employee teams" },
    { text: "For Sydney HR & WHS Teams" },
    { text: "Office Ergonomic Assessment" },
    { text: "Workplace Ergonomic Reviews" },
    { text: "Workstation Assessments" },
    { text: "Consultant-Led Assessments" },
    { text: "Assess, Prioritise, Act" },
    { text: "Ergonomics For Employers" },
    { text: "For Teams, Not One Desk" },
    { text: "A Report Your Team Can Use", conditional: true },
    { text: "Findings You Can Action", conditional: true },
    { text: "Assessed By A Consultant" },
  ],
  descriptions: [
    { text: "Request a workplace ergonomics review for your Sydney team." },
    {
      text: "Workplace ergonomic assessments for Sydney teams, with a prioritised report HR can act on.",
      conditional: true,
    },
    { text: "We assess the workstation, prioritise what matters and record what we recommend." },
    { text: "For organisations, not individuals. Tell us the issue and we will scope the review." },
  ],
};

const CONSULTANT: AdGroup = {
  id: "Consultant_Sydney",
  keywords: {
    exact: ["[ergonomic consultant]"],
    phrase: ['"ergonomic consultant"'],
  },
  headlines: [
    { text: "Ergonomic Consultants Sydney" },
    { text: "A Sydney Ergonomics Partner" },
    { text: "Request an ergonomics review" },
    { text: "For 100+ employee teams" },
    { text: "Consultant-Led, Not Software" },
    { text: "For Desk And Hybrid Teams" },
    { text: "Ergonomics For Employers" },
    { text: "We Work To Your Priorities" },
    { text: "Practical, Not Theoretical" },
    { text: "Scope The Right Programme", conditional: true },
    { text: "Start With One Issue" },
    { text: "Sydney Workplace Ergonomics" },
  ],
  descriptions: [
    { text: "Request a workplace ergonomics review for your Sydney team." },
    { text: "A Sydney ergonomics consultancy for desk-based and hybrid workforces." },
    { text: "Start with the workplace issue you have. We scope an appropriate next step." },
    {
      text: "Consultant-led assessment and implementation planning for organisations.",
      conditional: true,
    },
  ],
};

// The live, ENABLED national ad this test replaces (Google Ads ad 356166378123,
// ad group "Ergonomic Office Consulting", final URL ergoworksconsulting.com.au).
const LIVE_BEFORE = {
  business: "Ergoworks Consulting",
  displayUrl: "www.ergoworksconsulting.com.au",
  headlines: ["Ergonomic Assessment", "Ergonomics Consultant", "Award Winning Ergo Company"],
  descriptions: [
    "Our National Team Provides Ergonomic Assessments, Training & Ergo Products.",
    "Range Of Consulting Services That Helps Your Staff To Improve Their Productivity.",
  ],
};

// Demand evidence (verified 2026-08-17). Ahrefs = AU database; Google = AU
// account-level (low-spend → banded/conservative). Both are estimates, not an
// auction forecast.
const DEMAND: { kw: string; ahrefs: string; google: string; note: string }[] = [
  { kw: "ergonomic assessment sydney", ahrefs: "100", google: "20 (banded)", note: "commercial + local + transactional" },
  { kw: "ergonomic consultant", ahrefs: "200", google: "40", note: 'parent topic = competitor "dohrmann consulting"' },
  { kw: "ergonomic assessments (phrase)", ahrefs: "150", google: "480", note: "commercial; added per addendum" },
  { kw: "workplace ergonomic assessment", ahrefs: "60", google: "70", note: "org-risk framing" },
  { kw: "office ergonomic assessment", ahrefs: "70", google: "10", note: "high top-of-page bid (~A$43)" },
  { kw: "workstation assessment", ahrefs: "50", google: "30", note: "low competition" },
  { kw: "ergonomic assessment (bare)", ahrefs: "400", google: "—", note: "HELD OUT — flagged informational" },
  { kw: "ergonomic chair sydney", ahrefs: "70", google: "—", note: "negative-keyword candidate (equipment)" },
];

function QaChip({ value, max }: { value: number; max: number }) {
  const ok = value <= max;
  return (
    <span className={ok ? styles.chipOk : styles.chipWarn}>
      {value}/{max}
    </span>
  );
}

/** One Google "Sponsored" result card. Headlines/descriptions passed in are the
 *  specific combination being illustrated — Google assembles these dynamically
 *  and does not guarantee any given asset (or extension) shows. */
function SerpCard({
  business,
  displayUrl,
  headlines,
  descriptions,
  sitelinks,
  callouts,
  snippet,
  variant = "desktop",
  pendingIdentity,
}: {
  business: string;
  displayUrl: string;
  headlines: string[];
  descriptions: string[];
  sitelinks?: string[];
  callouts?: string[];
  snippet?: { header: string; values: string[] };
  variant?: "desktop" | "mobile";
  pendingIdentity?: boolean;
}) {
  return (
    <div className={`${styles.serp} ${variant === "mobile" ? styles.serpMobile : ""}`}>
      <div className={styles.serpTop}>
        <span className={styles.sponsored}>Sponsored</span>
        <span className={styles.serpBiz}>{business}</span>
      </div>
      <div className={styles.serpUrl}>
        {displayUrl}
        {pendingIdentity ? <span className={styles.pendingTag}> · destination pending</span> : null}
      </div>
      <div className={styles.serpTitle}>{headlines.join(" | ")}</div>
      <div className={styles.serpDesc}>{descriptions.join(" ")}</div>
      {snippet ? (
        <div className={styles.serpSnippet}>
          <strong>{snippet.header}:</strong> {snippet.values.join(" · ")}
        </div>
      ) : null}
      {sitelinks?.length ? (
        <ul className={styles.serpSitelinks}>
          {sitelinks.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      ) : null}
      {callouts?.length ? <div className={styles.serpCallouts}>{callouts.join(" · ")}</div> : null}
    </div>
  );
}

function AssetTable({ group }: { group: AdGroup }) {
  const hCount = group.headlines.length;
  const dCount = group.descriptions.length;
  const hDupes = new Set(
    group.headlines.map((a) => a.text.toLowerCase()).filter((t, i, arr) => arr.indexOf(t) !== i),
  );
  const dDupes = new Set(
    group.descriptions.map((a) => a.text.toLowerCase()).filter((t, i, arr) => arr.indexOf(t) !== i),
  );
  return (
    <div className={plan.tableScroll}>
      <table>
        <caption>
          {group.id} — {hCount} headlines / {dCount} descriptions ·{" "}
          <QaChip value={hCount} max={RSA_HEADLINE_CAP} /> headlines,{" "}
          <QaChip value={dCount} max={RSA_DESC_CAP} /> descriptions vs Google caps ·{" "}
          {hCount >= PROJECT_MIN_HEADLINES && dCount >= PROJECT_MIN_DESCS ? (
            <span className={styles.chipOk}>meets 8H/3D build rule</span>
          ) : (
            <span className={styles.chipWarn}>below 8H/3D build rule</span>
          )}
          {hDupes.size || dDupes.size ? (
            <span className={styles.chipWarn}> duplicate asset detected</span>
          ) : null}
        </caption>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Asset text</th>
            <th scope="col">Chars</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {group.headlines.map((a, i) => (
            <tr key={`h${i}`}>
              <td data-label="Type">H{i + 1}</td>
              <td data-label="Asset text">{a.text}</td>
              <td data-label="Chars">
                <QaChip value={len(a.text)} max={HEADLINE_MAX} />
              </td>
              <td data-label="Status">
                {a.conditional ? (
                  <span className={styles.chipCond}>pending Decision 1</span>
                ) : (
                  <span className={styles.chipMuted}>ok</span>
                )}
              </td>
            </tr>
          ))}
          {group.descriptions.map((a, i) => (
            <tr key={`d${i}`}>
              <td data-label="Type">D{i + 1}</td>
              <td data-label="Asset text">{a.text}</td>
              <td data-label="Chars">
                <QaChip value={len(a.text)} max={DESC_MAX} />
              </td>
              <td data-label="Status">
                {a.conditional ? (
                  <span className={styles.chipCond}>pending Decision 1</span>
                ) : (
                  <span className={styles.chipMuted}>ok</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// "Prioritised reporting" dropped: it promises the Decision-1 deliverable, which is unconfirmed.
const CALLOUTS = ["Consultant-led", "Desk & hybrid teams", "For organisations", "Sydney-based"];
// "Home-office assessments" dropped (reintroduces held-out Remote intent); "Implementation
// planning" / "Programme reviews" dropped (deliverable claims conditional on Decision 1).
const SNIPPET = {
  header: "Service catalog",
  values: ["Workstation assessments", "Office assessments", "Site-wide reviews"],
};
const SITELINKS = ["How it works", "What an assessment covers", "Who we work with", "Request a review"];

function GroupSection({ group, blurb }: { group: AdGroup; blurb: ReactNode }) {
  const richH = group.headlines.slice(0, 3).map((a) => a.text);
  const richD = group.descriptions.slice(0, 2).map((a) => a.text);
  const minH = group.headlines.slice(0, 3).map((a) => a.text);
  const minD = group.descriptions.slice(0, 1).map((a) => a.text);
  return (
    <section className={plan.docSection}>
      <h2 className={styles.groupTitle}>{group.id}</h2>
      <p className={styles.groupBlurb}>{blurb}</p>
      <p className={styles.kwLine}>
        <strong>Exact:</strong> {group.keywords.exact.join("  ")} &nbsp;·&nbsp;{" "}
        <strong>Phrase:</strong> {group.keywords.phrase.join("  ")}
      </p>

      <p className={styles.illustrative}>
        <Sparkles size={14} /> Illustrative possible combinations — a real RSA assembles headlines
        and descriptions dynamically; not every asset (or extension) shows on any given query.
        Sitelinks are proposed labels only, with no final URLs yet.
      </p>

      <div className={styles.cardRow}>
        <figure className={styles.cardFig}>
          <figcaption>Asset-rich (desktop)</figcaption>
          <SerpCard
            business="Business name pending"
            displayUrl="ergonomics.example.com.au/sydney"
            headlines={richH}
            descriptions={richD}
            sitelinks={SITELINKS}
            callouts={CALLOUTS}
            snippet={SNIPPET}
            pendingIdentity
          />
        </figure>
        <figure className={styles.cardFig}>
          <figcaption>Asset-rich (mobile)</figcaption>
          <SerpCard
            business="Business name pending"
            displayUrl="ergonomics.example.com.au/sydney"
            headlines={richH}
            descriptions={richD}
            sitelinks={SITELINKS}
            callouts={CALLOUTS}
            snippet={SNIPPET}
            variant="mobile"
            pendingIdentity
          />
        </figure>
        <figure className={styles.cardFig}>
          <figcaption>Minimal (no extensions)</figcaption>
          <SerpCard
            business="Business name pending"
            displayUrl="ergonomics.example.com.au/sydney"
            headlines={minH}
            descriptions={minD}
            pendingIdentity
          />
        </figure>
      </div>

      <AssetTable group={group} />
    </section>
  );
}

export default function AdsPage() {
  return (
    <main className={plan.page}>
      <header className={plan.hero}>
        <nav className={plan.nav} aria-label="Document information">
          <div className={plan.wordmark}>
            <span>EW</span> Search ad preview
          </div>
          <div className={plan.private}>
            <LockKeyhole size={14} /> Private &amp; confidential
          </div>
        </nav>
        <div className={plan.heroGrid}>
          <div>
            <p className={plan.kicker}>ErgoWorks Consulting · Sydney proof test · Preview</p>
            <h1>The ads, as Google would show them.</h1>
            <p className={plan.heroCopy}>
              A preview of the proposed Sydney Search ads so you can react to the wording before
              anything is built. These are <strong>illustrative compositions</strong> from the draft
              copy — nothing has been created, edited or enabled in the live Google Ads account.
            </p>
          </div>
          <aside className={plan.summary}>
            <p>Status</p>
            <h2>Draft — pending the open client decisions.</h2>
            <ul>
              <li>
                <ShieldCheck size={17} /> No live-account changes
              </li>
              <li>
                <CircleAlert size={17} /> Offer &amp; brand descriptor not yet approved
              </li>
              <li>
                <Sparkles size={17} /> Two ad groups, identical ads for both LP skins
              </li>
            </ul>
          </aside>
        </div>
        <a className={plan.scrollCue} href="#before-after">
          <ArrowDown size={17} /> See the shift from today&apos;s ads
        </a>
      </header>

      {/* Before → after */}
      <section className={plan.docSection} id="before-after">
        <div className={plan.sectionHeading}>
          <p>Before → after</p>
          <h2>From national and generic to Sydney and specific.</h2>
          <span>
            Today&apos;s live, enabled ad promotes a national service on the general website. The
            proposed test speaks to Sydney employer teams and points at a dedicated page. One
            caveat: every proposed term already runs in the live campaign (700072710) on the same
            domain, so a clean, isolated test needs those terms carved out of the baseline
            (the cannibalisation gate in the decision register) — otherwise Google decides which
            campaign serves each query.
          </span>
        </div>
        <p className={styles.illustrative}>
          <Sparkles size={14} /> Both cards are illustrative RSA compositions. The live ad is real,
          but the combination of headlines and descriptions shown is one of many Google may
          assemble — neither card should be read as the exact ad that will serve.
        </p>
        <div className={styles.beforeAfter}>
          <figure className={styles.cardFig}>
            <figcaption>Live today (national)</figcaption>
            <SerpCard
              business={LIVE_BEFORE.business}
              displayUrl={LIVE_BEFORE.displayUrl}
              headlines={LIVE_BEFORE.headlines}
              descriptions={LIVE_BEFORE.descriptions}
            />
          </figure>
          <figure className={styles.cardFig}>
            <figcaption>Proposed (Sydney, this test)</figcaption>
            <SerpCard
              business="Business name pending"
              displayUrl="ergonomics.example.com.au/sydney"
              headlines={CORE.headlines.slice(0, 3).map((a) => a.text)}
              descriptions={CORE.descriptions.slice(0, 2).map((a) => a.text)}
              callouts={CALLOUTS}
              pendingIdentity
            />
          </figure>
        </div>
      </section>

      <GroupSection
        group={CORE}
        blurb="The assessment beachhead: Sydney, office, workplace and workstation assessment intent, collapsed into one themed group per the 12-Aug addendum."
      />
      <GroupSection
        group={CONSULTANT}
        blurb="Consultant-led programme scoping for employers who search for a partner rather than a one-off assessment."
      />

      {/* Demand evidence */}
      <section className={`${plan.docSection} ${plan.alt}`} id="demand">
        <div className={plan.sectionHeading}>
          <p>Demand &amp; cost</p>
          <h2>Small, high-intent, budget-capped.</h2>
          <span>
            Volumes are estimates (Ahrefs AU database; Google figures are account-level and banded
            because the account is low-spend) — not an auction forecast. Live account CPC is
            A$13.18, so A$1.5–2k/mo buys roughly 114–152 clicks, not the 300–450 the earlier note
            assumed. This click range is a rough planning expectation, not a forecast: how many
            become qualified enquiries depends on an enquiry rate we have not yet measured, so treat
            any monthly-enquiry figure as indicative only.
          </span>
        </div>
        <div className={plan.tableScroll}>
          <table>
            <caption>AU search demand for the test terms — verified 2026-08-17. Google account volumes are banded and low-fidelity (the account is low-spend), so all Google figures should be read as approximate.</caption>
            <thead>
              <tr>
                <th scope="col">Keyword</th>
                <th scope="col">Ahrefs vol/mo</th>
                <th scope="col">Google vol/mo</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {DEMAND.map((d) => (
                <tr key={d.kw}>
                  <td data-label="Keyword">{d.kw}</td>
                  <td data-label="Ahrefs vol/mo">{d.ahrefs}</td>
                  <td data-label="Google vol/mo">{d.google}</td>
                  <td data-label="Notes">{d.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Constraints & decisions */}
      <section className={plan.docSection} id="constraints">
        <div className={plan.sectionHeading}>
          <p>Why the ads look like this</p>
          <h2>The constraints behind the copy.</h2>
        </div>
        <div className={plan.calloutRow}>
          <ShieldCheck size={20} />
          <p>
            <strong>The free 15-minute Snapshot is not advertised.</strong> Its mandated caveat is
            113 characters and an RSA description caps at 90, with no guarantee a second line shows —
            so the ads use the review-request CTA instead:{" "}
            <em>&ldquo;{CTA}&rdquo;</em> (37 chars, so it lives verbatim in a description line, never
            a headline).
          </p>
        </div>
        <div className={plan.calloutRow}>
          <CircleAlert size={20} />
          <p>
            <strong>Identity and domain are pending.</strong> The display URL and business name
            above are placeholders. The brand split is <strong>landing-page only</strong> — ads are
            identical for both skins. If a brand name is ever shown in-ad, note{" "}
            <em>&ldquo;Biosymm Workplace Ergonomics&rdquo;</em> is 28 characters, over Google&apos;s{" "}
            {BUSINESS_NAME_MAX}-character business-name cap.
          </p>
        </div>
        <div className={plan.calloutRow}>
          <CircleAlert size={20} />
          <p>
            <strong>Amber assets are deliverable-conditional.</strong> Any &ldquo;report&rdquo; /
            &ldquo;implementation plan&rdquo; / &ldquo;findings&rdquo; line depends on what the
            requester actually receives (Decision 1). If the written report is confirmed, they stay;
            if not, swap to the safe stand-ins before build.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", marginTop: "1.5rem" }}>
          <Link className={plan.pdfLink} href="/ergoworks/plan/direction">
            Approved direction <ExternalLink size={14} />
          </Link>
          <Link className={plan.pdfLink} href="/ergoworks/plan/decisions">
            Decision register <ExternalLink size={14} />
          </Link>
        </div>
      </section>

      <footer className={plan.footer}>
        <div className={plan.wordmark}>
          <span>EW</span> ErgoWorks Consulting
        </div>
        <p>
          <CircleAlert size={13} style={{ verticalAlign: "-2px", marginRight: ".4rem" }} />
          Confidential · Draft ad preview · Nothing created in Google Ads account 9258098368
        </p>
      </footer>
    </main>
  );
}
