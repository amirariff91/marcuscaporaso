import type { CSSProperties } from "react";
import EnquiryForm from "./EnquiryForm";
import HeroImage from "./HeroImage";
import styles from "./lp.module.css";
import {
  BRAND,
  CLIENT_LOGOS,
  CTA,
  DIFFERENTIATORS,
  HERO_COPY,
  HOW_IT_WORKS,
  PAGE_COPY,
  SERVICES,
  VALUE_PROP,
} from "./copy";

export {
  CTA,
  BRAND,
  CLIENT_LOGOS,
  HERO_COPY,
  HOW_IT_WORKS,
  PAGE_COPY,
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
            <a
              href="tel:1300374696"
              className={`${styles.btn} ${styles.btnGhost} ${styles.headerPhone}`}
            >
              1300 374 696
            </a>
          </div>
        </header>
      </div>

      {/* ── 2. Hero ────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroLayout}>
            <div className={styles.heroInner}>
              <p className={styles.kicker}>{HERO_COPY.kicker}</p>
              <h1 className={styles.h1}>{HERO_COPY.headline}</h1>
              <p className={styles.heroLead}>{HERO_COPY.lead}</p>
              <div className={styles.ctaRow}>
                <a className={styles.btn} href="#enquire">
                  {CTA}
                </a>
                <a
                  className={`${styles.btn} ${styles.btnGhost}`}
                  href="tel:1300374696"
                >
                  Call 1300 374 696
                </a>
              </div>
            </div>
            <HeroImage />
          </div>
        </div>
      </section>

      {/* ── 3. Client logos ────────────────────────────────────── */}
      <section className={styles.clientStrip} aria-label="Clients">
        <div className={`${styles.shell} ${styles.clientStripInner}`}>
          <p className={styles.clientStripLabel}>Client partners</p>
          <ul className={styles.clientLogoList}>
            {CLIENT_LOGOS.map((logo) => (
              <li className={styles.clientLogo} key={logo.name}>
                {logo.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className={styles.clientLogoImage} src={logo.src} alt={logo.name} />
                ) : (
                  <span>{logo.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. Services ────────────────────────────────────────── */}
      <section className={styles.section} id="services">
        <div className={styles.shell}>
          <p className={styles.kicker}>{PAGE_COPY.servicesKicker}</p>
          <h2 className={styles.h2}>{PAGE_COPY.servicesHeading}</h2>
          <p className={styles.lead}>{PAGE_COPY.servicesLead}</p>
          <div className={styles.serviceGrid}>
            {SERVICES.map((service) => (
              <details className={styles.serviceCard} key={service.number}>
                <summary className={styles.serviceSummary}>
                  <span className={styles.serviceNumber} aria-hidden="true">
                    {service.number}
                  </span>
                  <span className={styles.serviceSummaryCopy}>
                    <span className={styles.serviceName}>{service.name}</span>
                    <span className={styles.serviceCardBenefit}>
                      {service.benefit}
                    </span>
                  </span>
                  <span className={styles.serviceToggle} aria-hidden="true" />
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

      {/* ── 5. Differentiators ─────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionLift}`} id="differentiators">
        <div className={styles.shell}>
          <p className={styles.kicker}>{PAGE_COPY.diffKicker}</p>
          <h2 className={styles.h2}>{PAGE_COPY.diffHeading}</h2>
          <p className={styles.lead}>{PAGE_COPY.diffLead}</p>
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

      {/* ── 6. Value prop ──────────────────────────────────────── */}
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
