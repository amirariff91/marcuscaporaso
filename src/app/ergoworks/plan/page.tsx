import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  CircleAlert,
  ClipboardCheck,
  Crosshair,
  FileText,
  Layers3,
  LockKeyhole,
  Megaphone,
  Search,
  ShieldCheck,
} from "lucide-react";
import styles from "./plan.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Review Pack",
  description: "Private, confidential campaign review pack for ErgoWorks Consulting.",
  robots: { index: false, follow: false },
};

const readingOrder = [
  [FileText, "/ergoworks/plan/strategy", "Strategy", "The whole plan in one read: the big idea, current-state snapshot, offer, channels, measurement and the 30/60/90 roadmap."],
  [ClipboardCheck, "/ergoworks/plan/decisions", "Decisions", "The open questions only you can answer. Every GO/NO-GO gate that turns this directional plan into a launch brief."],
  [Search, "/ergoworks/plan/audit", "Account audit", "What the existing Search programme is really doing today, and the repairs that come before any new spend."],
  [Layers3, "/ergoworks/plan/media", "Media plan", "Channel roles, budget scenarios, the 90-day media plan and the Search / Meta build sheets."],
  [Crosshair, "/ergoworks/plan/landing-page", "Landing page", "The conversion journey: wireframe, message-matched variants, the two-step form and acceptance criteria."],
  [Megaphone, "/ergoworks/plan/offer", "Offer & creative", "Positioning, the offer ladder and the policy-safe creative briefs for Search and Meta."],
  [BarChart3, "/ergoworks/plan/measurement", "Measurement", "The tracking spec: conversion repair, the offline loop, consent controls and the reconciliation framework."],
] as const;

const decisions = [
  "Is demand-generation funding incremental, reallocated from Search, or deferred?",
  "GO/NO-GO: Approve the free 15-minute Workplace Ergonomics Risk Snapshot as the launch-default offer and dominant CTA — with its full caveat in every placement.",
  "GO/NO-GO: Approve the full ErgoStart / ErgoScale / ErgoCoach / ErgoControl offer ladder, including eligibility and caveats.",
  "CRITICAL: What does ErgoWorks actually issue after training — an accredited certificate, a statement of attainment, or attendance records? This gates the Search test, landing-page copy and publication.",
  "CRITICAL: Are care-sector, online and refresher services supported, and in what approved geography? This gates landing-page modules and negative reconciliation.",
  "Which proof assets are substantiated and approved in writing?",
] as const;

export default function PlanHubPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> Campaign review pack</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private &amp; confidential</div>
        </nav>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Full review pack · How to read this</p>
            <h1>The full campaign pack, one section at a time.</h1>
            <p className={styles.heroCopy}>
              This is the complete ErgoWorks Consulting campaign review — the strategy, the account
              audit, the media plan, the landing-page and creative work, and the measurement spec —
              laid out as pages you can navigate instead of a single long PDF. Prepared for review
              and decision; it authorises planning only.
            </p>
          </div>
          <aside className={styles.summary}>
            <p>What this is</p>
            <h2>An optimisation-and-expansion programme — not a greenfield launch.</h2>
            <ul>
              <li><ArrowRight size={17} /> Improve the existing Search engine</li>
              <li><ArrowRight size={17} /> Add a focused Meta prospecting layer</li>
              <li><ArrowRight size={17} /> Launch a dedicated conversion journey</li>
              <li><ArrowRight size={17} /> Measure qualified pipeline, not soft actions</li>
            </ul>
          </aside>
        </div>
        <a className={styles.scrollCue} href="#reading-order"><ArrowDown size={17} /> Start reading</a>
      </header>

      <section className={styles.idea} id="reading-order">
        <SectionHeading
          label="Reading order"
          title="Seven sections. Read them in order, or jump to what you need."
          copy="Strategy is the fastest way in. Decisions is where your input is required. The remaining five sections are the detailed pack behind each recommendation."
        />
        <div className={styles.roadmap} style={{ gridTemplateColumns: "repeat(auto-fill, minmax(17rem, 1fr))" }}>
          {readingOrder.map(([Icon, href, title, copy], index) => (
            <Link key={href} href={href} className={styles.hubCard}>
              <div className={styles.phaseHead}>
                <span><Icon size={18} /></span>
                <b aria-hidden="true">{String(index + 1).padStart(2, "0")}</b>
              </div>
              <h3>{title}</h3>
              <p className={styles.hubCardCopy}>{copy}</p>
              <span className={styles.hubCardGo}>Open <ArrowRight size={15} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.questionsSection} id="decisions">
        <div>
          <SectionHeading
            label="Your decisions · the short version"
            title="What we need from you before implementation."
            copy="The full list lives in Decisions. These are the ones that unblock everything else."
          />
          <p className={styles.planningOnly}>
            This pack authorises planning only. It does not authorise changes to live advertising,
            website, CRM or tracking systems.
          </p>
          <Link className={styles.pdfLink} href="/ergoworks/plan/decisions" style={{ marginTop: "2rem" }}>
            All decisions <ArrowRight size={15} />
          </Link>
        </div>
        <ol className={styles.questions}>
          {decisions.map((q, i) => (
            <li key={q}><span>{String(i + 1).padStart(2, "0")}</span><p>{q}</p></li>
          ))}
        </ol>
      </section>

      <section className={styles.stateSection} id="before-you-read">
        <div className={styles.stateIntro}>
          <SectionHeading label="Before you read" title="Two things to know." />
          <p>
            The recommendations are deliberately conservative where the numbers are not yet proven,
            and deliberately explicit about compliance because this is a workplace-health category.
          </p>
        </div>
        <div className={styles.stateList}>
          <div>
            <strong>Numbers are directional</strong>
            <span>
              Exact spend, cost-per-lead, campaign identifiers and named parties live in the private PDF pack, not on
              these pages. Here you will see ranges, ratios and relative language — enough to make
              the decisions, without publishing commercial detail.
            </span>
          </div>
          <div>
            <strong>Compliance is baked in</strong>
            <span>
              No claims of guaranteed injury prevention, WHS compliance or claims reduction. The
              Snapshot is always described as preliminary guidance only — not a compliance
              assessment, compliance certification, medical assessment or diagnosis. These are
              Australian legal guardrails, not copy to be softened.
            </span>
          </div>
        </div>
      </section>

      <section className={styles.offerSection} id="compliance">
        <div className={styles.caveat} style={{ marginRight: "auto", marginLeft: "auto", maxWidth: "1200px" }}>
          <ShieldCheck size={20} />
          <p>
            <strong>Compliance note:</strong> every mention of the Workplace Ergonomics Risk Snapshot
            carries the caveat &ldquo;preliminary guidance only — not a compliance assessment,
            compliance certification, medical assessment or diagnosis.&rdquo; Meta creative never
            implies that a viewer or their staff has a health condition.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p><CircleAlert size={13} style={{ verticalAlign: "-2px", marginRight: ".4rem" }} />Confidential · For client review only · Planning authorisation only</p>
      </footer>
    </main>
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
