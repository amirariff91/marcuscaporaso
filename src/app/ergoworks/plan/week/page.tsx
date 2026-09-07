import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, CircleAlert, LockKeyhole } from "lucide-react";
import styles from "../plan.module.css";
import pageStyles from "./week.module.css";
import { approvals, asks, cutover, generated, judging, plan, status, weekLabel } from "./data";

export const metadata: Metadata = {
  title: "This week · ErgoWorks plan pack",
  description: "Private weekly plan and approval list for ErgoWorks Consulting.",
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

export default function WeekPage() {
  return (
    <main className={styles.page}>
      <header className={`${styles.hero} ${pageStyles.compactHero}`}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
          <div className={styles.private}><LockKeyhole size={14} aria-hidden="true" /> Private and confidential</div>
        </nav>

        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>{weekLabel} · Generated {generated}</p>
            <h1>This week</h1>
            <p className={styles.heroCopy}>
              The short operating view: what is true now, what happens next, and which Google Ads changes are waiting for your OK.
            </p>
          </div>

          <aside className={styles.summary}>
            <p>Reply format</p>
            <h2>Approve by number, not by paragraph.</h2>
            <ul>
              <li><Check size={17} aria-hidden="true" /> Status first</li>
              <li><Check size={17} aria-hidden="true" /> Approvals 1 to 7</li>
              <li><Check size={17} aria-hidden="true" /> Reply: ok 1, 2, 4</li>
            </ul>
          </aside>
        </div>

        <a className={styles.scrollCue} href="#status"><ArrowDown size={17} aria-hidden="true" /> Read the live status</a>
      </header>

      <section className={`${styles.docSection} ${styles.alt}`} id="status">
        <SectionHeading
          label="Live status · 8 September 2026"
          title="What is true this morning."
          copy="The important distinction is between something that happened, something that was received, and something we can safely use to judge demand."
        />

        <div className={styles.stateList}>
          {status.map((item) => (
            <div key={item.label}>
              <strong>{item.label}</strong>
              <span>{item.detail}</span>
            </div>
          ))}
        </div>

        <div className={styles.calloutRow}>
          <CircleAlert size={20} aria-hidden="true" />
          <p><strong>Decision point:</strong> no Google Ads changes are live until you approve them below.</p>
        </div>
      </section>

      <section className={styles.docSection} id="this-week">
        <SectionHeading
          label="Sequence · Tue 8 Sep to week 2"
          title="A controlled week, then a fortnight of proof."
          copy="The paid destination stays stable while we repair the enquiry path, remove demonstrated waste, and draft the next pages."
        />

        <div className={styles.tableScroll}>
          <table>
            <caption>Plan and blockers</caption>
            <thead>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">What</th>
                <th scope="col">Blocked on</th>
              </tr>
            </thead>
            <tbody>
              {plan.map((row) => (
                <tr key={row.day}>
                  <th scope="row" data-label="Day">{row.day}</th>
                  <td data-label="What">{row.what}</td>
                  <td data-label="Blocked on">{row.blockedOn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="what-we-need">
        <SectionHeading
          label="Four replies"
          title="What we need from you."
          copy="These are the only decisions that hold the next move. Everything else is already prepared or deliberately later."
        />

        <ol className={pageStyles.numberedList}>
          {asks.map((ask) => <li key={ask.id}>{ask.text}</li>)}
        </ol>

        <div className={styles.calloutRow}>
          <Check size={20} aria-hidden="true" />
          <p><strong>Fastest reply:</strong> send the approval numbers on WhatsApp, for example, “ok 1, 2, 4”.</p>
        </div>
      </section>

      <section className={styles.docSection} id="approvals">
        <SectionHeading
          label="Approval list · staged 8 September 2026"
          title="Approve only what should move now."
          copy="Awaiting OK rows are the active choices. Later and Not this week rows stay visible so the fortnight has a clear boundary."
        />

        <p className={pageStyles.tableHint}>Swipe sideways to read the full approval table.</p>
        <div className={`${styles.tableScroll} ${pageStyles.approvalTable}`} role="region" aria-label="Google Ads approval table" tabIndex={0}>
          <table>
            <caption>Google Ads changes</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Change</th>
                <th scope="col">Why</th>
                <th scope="col">Reversible</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {approvals.map((approval) => {
                const isAwaiting = approval.status === "Awaiting OK";
                return (
                  <tr key={approval.id} className={isAwaiting ? pageStyles.approvalPrimary : pageStyles.approvalQuiet}>
                    <th scope="row" data-label="#">{approval.id}</th>
                    <td data-label="Change"><strong>{approval.change}</strong></td>
                    <td data-label="Why">{approval.why}</td>
                    <td data-label="Reversible">{approval.reversible ? "Yes" : "No"}</td>
                    <td data-label="Status">
                      <span className={isAwaiting ? pageStyles.statusPrimary : pageStyles.statusQuiet}>{approval.status}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className={pageStyles.approvalReply}>Reply on WhatsApp with the numbers you approve.</p>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="when-joel-pushes">
        <SectionHeading
          label="Cut-over sequence"
          title="When Joel pushes."
          copy="The hand-off is prepared in advance. This is what happens once the form fix lands."
        />

        <ol className={pageStyles.numberedList}>
          {cutover.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <section className={styles.docSection} id="judging">
        <SectionHeading
          label="Fortnight test"
          title="How we judge the fortnight."
          copy="The test is about qualified employer demand, not a larger event count."
        />

        <div className={styles.prose}>
          <p><strong>Qualified employer enquiry:</strong> {judging.qualifiedEmployerEnquiry}</p>
          <p><strong>Too little traffic:</strong> {judging.inconclusive}</p>
          <p><strong>Boundary:</strong> {judging.doesNotDecide}</p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="links">
        <SectionHeading
          label="Pack links"
          title="Open the supporting pages."
          copy="The gated pages you read here, and the Google Docs you edit and send. Ask Amir for Drive access if a link is blocked."
        />

        <ul className={pageStyles.linkList}>
          <li>
            <Link href="/ergoworks/plan/seo">SEO plan <ArrowRight size={16} aria-hidden="true" /></Link>
          </li>
          <li>
            <Link href="/ergoworks/plan/weekly">Weekly report <ArrowRight size={16} aria-hidden="true" /></Link>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1l04FC9-6X9_GJxiZUz7VKpPVETMRJwTfbP66hqeK-wo/edit" target="_blank" rel="noopener noreferrer">Greg update (Google Doc) <span>Edit and send in your voice</span></a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1FruqmEh9YmZrBcHs3Ld-c-Zj1wzlM1FOQ8fQf5iWeXM/edit" target="_blank" rel="noopener noreferrer">Page copy: Ergonomic assessment Sydney (Google Doc) <span>Draft to edit</span></a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1PuO52fI6T9NbLlbaapNXVtnu0zmxHXk-FaaiuUMchXQ/edit" target="_blank" rel="noopener noreferrer">Page copy: Ergonomic workstation assessment (Google Doc) <span>Draft to edit</span></a>
          </li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p><CircleAlert size={13} aria-hidden="true" style={{ verticalAlign: "-2px", marginRight: ".4rem" }} />Confidential · For client review only</p>
      </footer>
    </main>
  );
}
