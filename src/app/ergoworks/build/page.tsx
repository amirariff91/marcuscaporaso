import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, CircleAlert, LockKeyhole } from "lucide-react";
import styles from "../plan/plan.module.css";
import pageStyles from "./build.module.css";
import { buildSheets, paidLandingRules, schemaPattern, templateBlocks } from "../plan/seo/buildPackage";
import {
  acceptanceChecklist,
  buildScope,
  crossCutting,
  environmentBox,
  formFixStatus,
  generated,
  jsonLdExample,
  openQuestions,
  pageBuildStatus,
  paidLandingDefinition,
  shellDefinition,
  smallItems,
} from "./data";

export const metadata: Metadata = {
  title: "Build ticket · ErgoWorks plan pack",
  robots: { index: false, follow: false },
};

/*
 * This is intentionally a server component. Keep the ticket data and build
 * sheets in the gated server-only route tree; never move them into a client
 * module. Effort figures are estimates and do not promise rankings or leads.
 */

function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <div className={styles.sectionHeading}>
      <p>{label}</p>
      <h2>{title}</h2>
      {copy ? <span>{copy}</span> : null}
    </div>
  );
}

export default function BuildPage() {
  return (
    <main className={styles.page}>
      <header className={`${styles.hero} ${pageStyles.compactHero}`}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
          <div className={styles.private}><LockKeyhole size={14} aria-hidden="true" /> Private and confidential</div>
        </nav>

        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Generated {generated}</p>
            <h1>Build ticket</h1>
            <p className={styles.heroCopy}>
              Joel: scope and blockers first, then the template and three build sheets, then the acceptance checks. Page 2 ships as a shell until Greg confirms the offer.
            </p>
          </div>

          <aside className={styles.summary}>
            <p>Build sequence</p>
            <h2>Two rebuilds, one shell, one template.</h2>
            <ul>
              <li><Check size={17} aria-hidden="true" /> Template blocks once</li>
              <li><Check size={17} aria-hidden="true" /> Pages 1 and 3 in full</li>
              <li><Check size={17} aria-hidden="true" /> Page 2 shell, noindex</li>
            </ul>
          </aside>
        </div>

        <a className={styles.scrollCue} href="#scope"><ArrowDown size={17} aria-hidden="true" /> Start with the scope</a>
      </header>

      <section className={`${styles.docSection} ${styles.alt}`} id="scope">
        <SectionHeading
          label="1 · Scope"
          title="What you are building, and what you are not."
          copy="Read this before the build sheets. The estimate is ours and is unverified."
        />
        <div className={styles.packageRuleGrid}>
          <article className={styles.packageRule}>
            <h3>In scope</h3>
            <ul>{buildScope.inScope.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className={styles.packageRule}>
            <h3>Out of scope</h3>
            <ul>{buildScope.outOfScope.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
        <div className={styles.prose}>
          <p><strong>Estimate:</strong> {buildScope.estimate}</p>
        </div>
        <div className={styles.stateList}>
          {pageBuildStatus.map((item) => (
            <div key={item.page}>
              <strong>Page {item.page} · {item.name}</strong>
              <span>{item.status}</span>
            </div>
          ))}
        </div>
        <div className={styles.packageRuleGrid}>
          <article className={styles.packageRule}>
            <h3>What “shell only” means</h3>
            <p>{shellDefinition}</p>
          </article>
          <article className={styles.packageRule}>
            <h3>What the paid-landing variant means</h3>
            <p>{paidLandingDefinition}</p>
            <ul>{paidLandingRules.map((rule) => <li key={rule}>{rule}</li>)}</ul>
          </article>
        </div>
        <div className={styles.calloutRow}>
          <CircleAlert size={20} aria-hidden="true" />
          <p><strong>Tell us your build environment so the sheets can use your names:</strong> {environmentBox.join(" ")}</p>
        </div>
      </section>

      <section className={styles.docSection} id="questions">
        <SectionHeading
          label="2 · Blockers"
          title="Open questions before copy is final."
          copy="Pages 1 and 3 can be built now with the copy marked for Greg to confirm. Page 2 copy waits."
        />
        <div className={styles.packageRuleGrid}>
          <article className={styles.packageRule}>
            <h3>For Greg</h3>
            <ol>{openQuestions.greg.map((q) => <li key={q}>{q}</li>)}</ol>
          </article>
          <article className={styles.packageRule}>
            <h3>For Marcus</h3>
            <ol>{openQuestions.marcus.map((q) => <li key={q}>{q}</li>)}</ol>
            <p>Marcus also sends the DNS TXT value for the Search Console domain property.</p>
          </article>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="build">
        <SectionHeading
          label="3 · Template and build sheets"
          title="Build the shell once, then mount the pages."
          copy="The block contract below is the same source for all three pages. The sheets carry every page-specific decision."
        />
        <h3>Reusable template blocks</h3>
        <p className={pageStyles.tableHint}>Swipe sideways on a phone to read the full table.</p>
        <div className={styles.tableScroll} role="region" aria-label="Reusable template blocks" tabIndex={0}>
          <table>
            <caption>Template block order and field contract</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Block</th>
                <th scope="col">Purpose</th>
                <th scope="col">Key fields</th>
                <th scope="col">Shared?</th>
              </tr>
            </thead>
            <tbody>
              {templateBlocks.map((block, index) => (
                <tr key={block.name}>
                  <th scope="row" data-label="#">{index + 1}</th>
                  <td data-label="Block"><strong>{block.name}</strong></td>
                  <td data-label="Purpose">{block.purpose}</td>
                  <td data-label="Key fields">
                    {block.fields.map((field, fieldIndex) => (
                      <span key={field.name}>
                        <strong>{field.name}</strong> ({field.type}, {field.required ? "required" : "optional"}): {field.guidance}
                        {fieldIndex < block.fields.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </td>
                  <td data-label="Shared?">{block.sharedAcrossReplicas ? "Shared" : "Page-specific"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <article className={styles.packageRule}>
          <h3>JSON-LD pattern</h3>
          <div className={styles.prose}>
            <p>{schemaPattern.summary}</p>
            <p><strong>Organisation @id:</strong> {schemaPattern.organisationId}</p>
            <p><strong>@graph rule:</strong> {schemaPattern.graphRule}</p>
            <p><strong>FAQPage note:</strong> {schemaPattern.faqRichResultNote}</p>
            <p><strong>Page 1 example (one script in the head):</strong></p>
          </div>
          <pre className={pageStyles.codeBlock}><code>{jsonLdExample}</code></pre>
        </article>

        <article className={styles.packageRule}>
          <h3>Rules that apply to all three pages</h3>
          <ul>{crossCutting.map((rule) => <li key={rule}>{rule}</li>)}</ul>
        </article>

        <h3>Per-page build sheets</h3>
        {buildSheets.map((sheet) => {
          const pageStatus = pageBuildStatus.find((item) => item.name === sheet.page);
          return (
            <details className={styles.packageDetails} key={sheet.url} open>
              <summary className={styles.packageSummary}>
                <span>{sheet.page} <small>{sheet.url}</small></span>
                <span className={styles.packageBadge}>{pageStatus ? `Page ${pageStatus.page}` : "Build sheet"}</span>
              </summary>
              <div className={styles.packageBody}>
                <p><strong>Build status:</strong> {pageStatus?.status}</p>
                <p><strong>URL decision:</strong> {sheet.urlDecision}</p>
                <p><strong>Primary query:</strong> {sheet.primaryQuery}</p>
                <h3>Metadata and headings</h3>
                <p><strong>Title tag:</strong> {sheet.titleTag}</p>
                <p><strong>Meta description:</strong> {sheet.metaDescription}</p>
                <p><strong>H1:</strong> {sheet.h1}</p>
                <p><strong>H2 outline:</strong></p>
                <ul>{sheet.h2Outline.map((heading) => <li key={heading}>{heading}</li>)}</ul>
                <h3>FAQs and information boxes</h3>
                <ul>{sheet.faqs.map((faq) => <li key={faq}>{faq}</li>)}</ul>
                <div className={styles.packageRuleGrid}>
                  {sheet.infoBoxes.map((box) => (
                    <article className={styles.packageRule} key={box.title}>
                      <h4>{box.title}</h4>
                      <p>{box.detail}</p>
                    </article>
                  ))}
                </div>
                <h3>Internal links</h3>
                <p><strong>Links in:</strong></p>
                <ul>
                  {sheet.internalLinksIn.map((link) => (
                    <li key={`${link.destination}-${link.anchor ?? ""}`}>{link.anchor ? `${link.anchor} → ` : null}{link.destination}</li>
                  ))}
                </ul>
                <p><strong>Links out:</strong></p>
                <ul>
                  {sheet.internalLinksOut.map((link) => (
                    <li key={`${link.destination}-${link.anchor ?? ""}`}>{link.anchor ? `${link.anchor} → ` : null}{link.destination}</li>
                  ))}
                </ul>
                <h3>Structured data and CTA</h3>
                <p><strong>Schema node:</strong> {sheet.schemaType}</p>
                <p><strong>CTA:</strong> {sheet.cta.button} / {sheet.cta.supportingText} / {sheet.cta.target}</p>
                <h3>Greg to confirm</h3>
                <ul>{sheet.gregToConfirm.map((item) => <li key={item}>{item}</li>)}</ul>
                <h3>Done checklist for this page</h3>
                <ul>{sheet.doneChecklist.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </details>
          );
        })}
      </section>

      <section className={styles.docSection} id="acceptance">
        <SectionHeading
          label="4 · Acceptance"
          title="Ship only when each check passes."
          copy="The owner column says who can verify each line. Leave the box empty until the expected result is observed on the built pages."
        />
        <p className={pageStyles.tableHint}>Swipe sideways on a phone to read the full table.</p>
        <div className={styles.tableScroll} role="region" aria-label="Acceptance checklist" tabIndex={0}>
          <table>
            <caption>Page build acceptance</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Done</th>
                <th scope="col">Check</th>
                <th scope="col">Expected result</th>
                <th scope="col">Owner</th>
              </tr>
            </thead>
            <tbody>
              {acceptanceChecklist.map((item) => (
                <tr key={item.n}>
                  <th scope="row" data-label="#">{item.n}</th>
                  <td data-label="Done" aria-label="Not checked">☐</td>
                  <td data-label="Check">{item.check}</td>
                  <td data-label="Expected result">{item.expected}</td>
                  <td data-label="Owner">{item.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="form-fix">
        <SectionHeading
          label="Appendix A · Form fix status"
          title="Confirmed live, with one check left."
          copy="What we observed on the live contact page after your 9 September push."
        />
        <div className={styles.stateList}>
          {formFixStatus.map((item) => (
            <div key={item.label}>
              <strong>{item.label}</strong>
              <span>{item.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.docSection} id="small-items">
        <SectionHeading
          label="Appendix B · Small items this week"
          title="Clear the surrounding edges."
          copy="Access, indexing and local-environment tasks that keep the page work measurable."
        />
        <div className={styles.packageRuleGrid}>
          {smallItems.groups.map((group) => (
            <article className={styles.packageRule} key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className={styles.calloutRow}>
          <CircleAlert size={20} aria-hidden="true" />
          <p><strong>Paid destinations unchanged:</strong> {smallItems.paidDestinationsRule}</p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="links">
        <SectionHeading label="Reference" title="Where the full package lives." copy="The SEO page holds the complete build package and replica rules; ask Marcus if you need it." />
        <ul className={pageStyles.linkList}>
          <li><Link href="/ergoworks/plan/seo">SEO plan and full build package (Marcus's login) <ArrowRight size={16} aria-hidden="true" /></Link></li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p><CircleAlert size={13} aria-hidden="true" style={{ verticalAlign: "-2px", marginRight: ".4rem" }} />Confidential · For client and developer use only</p>
      </footer>
    </main>
  );
}
