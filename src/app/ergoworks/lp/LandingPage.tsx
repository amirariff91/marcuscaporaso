import type { CSSProperties } from "react";
import EnquiryForm from "./EnquiryForm";
import styles from "./lp.module.css";
import {
  BRAND,
  CTA,
  DIFFERENTIATORS,
  HERO_COPY,
  HOW_IT_WORKS,
  PAGE_COPY,
  SAMPLE_REPORT,
  SERVICES,
  VALUE_PROP,
} from "./copy";

export {
  CTA,
  BRAND,
  HERO_COPY,
  HOW_IT_WORKS,
  PAGE_COPY,
  SAMPLE_REPORT,
  SERVICES,
} from "./copy";

type LandingPageProps = {
  paidPath?: boolean;
  /** @deprecated Accepted for backward compat with route pages; ignored. */
  variant?: string;
  /** @deprecated Accepted for backward compat with route pages; ignored. */
  heroMode?: string;
  /** @deprecated Accepted for backward compat with route pages; ignored. */
  descriptorMode?: string;
};

export default function LandingPage({ paidPath = false }: LandingPageProps) {
  const theme = {
    "--accent": BRAND.accent,
    "--accentAction": BRAND.accentAction,
  } as CSSProperties & { "--accent": string; "--accentAction": string };

  return (
    <main className={styles.page} style={theme}>
      <div className={styles.shell}>
        {/* ── 1. Header ──────────────────────────────────────────── */}
        <header className={styles.header}>
          <div className={styles.brandCluster}>
            <div className={styles.brandLine}>
              <span className={styles.wordmarkSlot}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.wordmark}
                  src={BRAND.logo}
                  width={BRAND.logoWidth}
                  height={BRAND.logoHeight}
                  alt={BRAND.name}
                  translate="no"
                />
              </span>
              <span className={styles.descriptorSlot} translate="no">
                {BRAND.descriptor}
              </span>
            </div>
          </div>
          <div className={styles.headerMeta}>
            <span className={styles.headerAudience}>
              {PAGE_COPY.headerAudience}
            </span>
            <a href="tel:1300374696" className={styles.headerPhone}>
              1300 374 696
            </a>
          </div>
        </header>
      </div>

      {/* ── 2. Hero ────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroInner}>
            <p className={styles.kicker}>{HERO_COPY.kicker}</p>
            <h1 className={styles.h1}>{HERO_COPY.headline}</h1>
            <p className={styles.heroLead}>{HERO_COPY.lead}</p>
            <div className={styles.ctaRow}>
              <a className={styles.btn} href="#enquire">
                {CTA}
              </a>
            </div>
            <span className={styles.audienceChip}>
              {PAGE_COPY.headerAudience}
            </span>
          </div>
        </div>
      </section>

      {/* ── 3. Services ────────────────────────────────────────── */}
      <section className={styles.section} id="services">
        <div className={styles.shell}>
          <p className={styles.kicker}>{PAGE_COPY.servicesKicker}</p>
          <h2 className={styles.h2}>{PAGE_COPY.servicesHeading}</h2>
          <div className={styles.serviceGrid}>
            {SERVICES.map((service) => (
              <details className={styles.serviceCard} key={service.number} open={service.number === "01"}>
                <summary>
                  {service.name}
                  <span className={styles.serviceCardBenefit}>{service.benefit}</span>
                </summary>
                <div className={styles.serviceCardBody}>
                  {service.body ? (
                    <p className={styles.body}>{service.body}</p>
                  ) : null}
                  {service.subItems ? (
                    <ul className={styles.serviceSubList}>
                      {service.subItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Differentiators ─────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionLift}`} id="differentiators">
        <div className={styles.shell}>
          <p className={styles.kicker}>{PAGE_COPY.diffKicker}</p>
          <h2 className={styles.h2}>{PAGE_COPY.diffHeading}</h2>
          <div className={styles.diffGrid}>
            {DIFFERENTIATORS.map((diff) => (
              <article className={styles.diffCard} key={diff.title}>
                <h3>{diff.title}</h3>
                <p className={styles.body}>{diff.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Value prop ──────────────────────────────────────── */}
      <section className={styles.section} id="value">
        <div className={styles.shell}>
          <p className={styles.kicker}>{PAGE_COPY.valueKicker}</p>
          <div className={styles.valueGrid}>
            <div className={styles.valueColumn}>
              <h3>{PAGE_COPY.valueHeadingPeople}</h3>
              <ul className={styles.valueList}>
                {VALUE_PROP.forPeople.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.valueColumn}>
              <h3>{PAGE_COPY.valueHeadingOrg}</h3>
              <ul className={styles.valueList}>
                {VALUE_PROP.forOrg.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Sample report (kept exactly as-is) ─────────────── */}
      <section className={`${styles.section} ${styles.sectionPaper}`} id="report">
        <div className={styles.shell}>
          <p className={styles.kicker}>{PAGE_COPY.reportKicker}</p>
          <div className={styles.reportBlock}>
            <div className={styles.reportHead}>
              <h2 className={styles.h2}>{SAMPLE_REPORT.heading}</h2>
              <span className={styles.sampleTag}>{SAMPLE_REPORT.badge}</span>
            </div>

            <table className={styles.reportTable}>
              <thead>
                <tr>
                  <th scope="col">{PAGE_COPY.reportLabels.finding}</th>
                  <th scope="col">{PAGE_COPY.reportLabels.priority}</th>
                  <th scope="col">{PAGE_COPY.reportLabels.owner}</th>
                  <th scope="col">{PAGE_COPY.reportLabels.status}</th>
                </tr>
              </thead>
              <tbody>
                {SAMPLE_REPORT.rows.map((row) => (
                  <tr key={row.finding}>
                    <td>{row.finding}</td>
                    <td>
                      <span className={styles.pri} data-p={row.priorityKey}>
                        {row.priority}
                      </span>
                    </td>
                    <td>{row.owner}</td>
                    <td>{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <dl className={styles.reportDefinition}>
              {SAMPLE_REPORT.rows.map((row) => (
                <div className={styles.reportDefinitionRow} key={row.finding}>
                  <div>
                    <dt>{PAGE_COPY.reportLabels.finding}</dt>
                    <dd>{row.finding}</dd>
                  </div>
                  <div>
                    <dt>{PAGE_COPY.reportLabels.priority}</dt>
                    <dd>
                      <span className={styles.pri} data-p={row.priorityKey}>
                        {row.priority}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt>{PAGE_COPY.reportLabels.owner}</dt>
                    <dd>{row.owner}</dd>
                  </div>
                  <div>
                    <dt>{PAGE_COPY.reportLabels.status}</dt>
                    <dd>{row.status}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <p className={styles.reportFoot}>{SAMPLE_REPORT.foot}</p>
            <div className={styles.reportCta}>
              <a
                className={`${styles.btn} ${styles.btnSecondary}`}
                href="#enquire"
              >
                {CTA}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. How it works ────────────────────────────────────── */}
      <section
        className={`${styles.section} ${styles.sectionLift}`}
        id="how-it-works"
      >
        <div className={styles.shell}>
          <p className={styles.kicker}>{PAGE_COPY.howKicker}</p>
          <h2 className={styles.h2}>{PAGE_COPY.howHeading}</h2>
          <div className={styles.steps}>
            {HOW_IT_WORKS.map((step) => (
              <article className={styles.step} key={step.number}>
                <span className={styles.stepN} aria-hidden="true">
                  {step.number}
                </span>
                <h3>
                  <span className={styles.vh}>Step {step.number}: </span>
                  {step.heading}
                </h3>
                <p className={styles.body}>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Enquiry form ────────────────────────────────────── */}
      <section
        className={`${styles.section} ${styles.sectionLift}`}
        id="enquire"
      >
        <div className={styles.shell}>
          <div className={styles.formWrap}>
            <div className={styles.formIntro}>
              <p className={styles.kicker}>{PAGE_COPY.formKicker}</p>
              <h2 className={styles.h2}>{CTA}</h2>
              <p className={styles.lead}>{PAGE_COPY.formIntro}</p>
            </div>
            <div className={styles.form}>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Footer ──────────────────────────────────────────── */}
      <div className={styles.shell}>
        <footer className={styles.footer}>
          <span translate="no">{BRAND.name}</span>
          <span className={styles.descriptorSlot} translate="no">
            {BRAND.descriptor}
          </span>
          <span className={styles.footNote}>{PAGE_COPY.footer}</span>
        </footer>
      </div>
    </main>
  );
}
