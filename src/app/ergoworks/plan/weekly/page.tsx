import type { Metadata } from "next";
import { ArrowDown, Check, CircleAlert, LockKeyhole, ShieldCheck } from "lucide-react";
import styles from "../plan.module.css";
import { knownGaps, leadDefinitions, weeks } from "./data";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Weekly report",
  description: "Private weekly operating update for ErgoWorks Consulting.",
  robots: { index: false, follow: false },
};

function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <div className={styles.sectionHeading}>
      <p>{label}</p>
      <h2>{title}</h2>
      {copy ? <span>{copy}</span> : null}
    </div>
  );
}

export default function WeeklyUpdatePage() {
  const week = weeks[weeks.length - 1];

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private &amp; confidential</div>
        </nav>

        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Weekly update · Our analyst&apos;s snapshot · {week.generated}</p>
            <h1>Week ending {week.ending}</h1>
            <p className={styles.heroCopy}>
              A six-line operating snapshot: what was recorded, what remains approximate, and what we do next. The goal is a trustworthy read on qualified enquiries, not a larger-looking number.
            </p>
          </div>

          <aside className={styles.summary}>
            <p>Reporting frame</p>
            <h2>Read the source state before the trend.</h2>
            <ul>
              <li><Check size={17} /> Reporting window: {week.window}</li>
              <li><ShieldCheck size={17} /> Generated: {week.generated}</li>
              <li><CircleAlert size={17} /> Account state: {week.accountState}</li>
            </ul>
          </aside>
        </div>

        <a className={styles.scrollCue} href="#snapshot"><ArrowDown size={17} /> Read this week&apos;s snapshot</a>
      </header>

      <section className={styles.docSection} id="snapshot">
        <SectionHeading
          label="Weekly snapshot · measured / approximate / not yet verified"
          title="Six lines for the operating conversation."
          copy="Each line keeps its source state visible. Recorded events are not silently upgraded into received or qualified leads."
        />

        <div className={styles.stateList}>
          {week.lines.map((line) => (
            <div key={line.name}>
              <strong>{line.name}</strong>
              <div style={{ color: "var(--muted)", lineHeight: 1.55 }}>
                <strong>{line.fields}</strong><br />
                <strong>[{line.status}]</strong> {line.value}
                <small style={{ display: "block", marginTop: ".55rem" }}>{line.sourceNote}</small>
                {line.actions ? (
                  <ul style={{ margin: ".85rem 0 0", paddingLeft: "1.2rem" }}>
                    {line.actions.map((action) => (
                      <li key={action.item} style={{ marginBottom: ".5rem" }}>
                        <strong>{action.owner}</strong> — {action.item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p><strong>How to read this:</strong> recorded ≠ received while the form fix is pending. This page shows what the reporting systems recorded, not a complete received-lead total.</p>
        </div>

        <div className={styles.calloutRow}>
          <Check size={20} />
          <p><strong>Production target:</strong> 20 minutes from one paid snapshot, one analytics snapshot and a quick site/search-reporting status check.</p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="definitions">
        <SectionHeading
          label="Definitions · [Verified] / [Not yet verified]"
          title="What counts as a lead"
          copy="A lead is a completed contact that can be checked against its underlying source. Intent signals and page activity stay diagnostic."
        />

        <div className={styles.calloutRow}>
          <Check size={20} />
          <div className={styles.prose}>
            <ul>
              {leadDefinitions.map((definition) => <li key={definition}>{definition}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.docSection} id="gaps">
        <SectionHeading
          label="Reporting controls · [Not yet verified]"
          title="Keep the gaps in the report, not in the footnotes."
          copy="The weekly page stays useful by naming the missing checks and refusing to convert an unrecorded event into a zero real lead."
        />

        <div className={styles.calloutRow}>
          <CircleAlert size={20} />
          <p><strong>Known gaps:</strong> {knownGaps.join(" ")}</p>
        </div>

        <div className={styles.prose}>
          <p><strong>Reporting rule:</strong> Do not turn an unrecorded event into a zero real lead. Keep the source and pull note attached to every number.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p><CircleAlert size={13} style={{ verticalAlign: "-2px", marginRight: ".4rem" }} />Confidential · For client review only</p>
      </footer>
    </main>
  );
}
