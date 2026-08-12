import type { CSSProperties } from "react";
import EnquiryForm from "./EnquiryForm";
import styles from "./lp.module.css";
import {
  BRANDS,
  CTA,
  COMPETING_PRIORITIES_LINE,
  ECOSYSTEM_ITEMS,
  FORK_COPY,
  HERO_COPY,
  HOW_IT_WORKS,
  OBJECTIONS,
  PAGE_COPY,
  PENDING_APPROVAL,
  SAMPLE_REPORT,
  TRIGGER_GROUPS,
  TRIGGERS,
  resolveDescriptor,
  type BrandVariant,
  type DescriptorMode,
  type HeroMode,
} from "./copy";

export {
  BRANDS,
  CTA,
  COMPETING_PRIORITIES_LINE,
  ECOSYSTEM_ITEMS,
  FORK_COPY,
  HERO_COPY,
  HOW_IT_WORKS,
  OBJECTIONS,
  PAGE_COPY,
  PENDING_APPROVAL,
  SAMPLE_REPORT,
  TRIGGER_GROUPS,
  TRIGGERS,
} from "./copy";
export type { BrandVariant, HeroMode } from "./copy";

type LandingPageProps = {
  variant: BrandVariant;
  paidPath?: boolean;
  heroMode?: HeroMode;
  descriptorMode?: DescriptorMode;
};

export default function LandingPage({
  variant,
  paidPath = false,
  heroMode = "promise",
  descriptorMode = "by",
}: LandingPageProps) {
  const brand = BRANDS[variant];
  const descriptor = resolveDescriptor(variant, descriptorMode);
  const theme = {
    "--accent": brand.accent,
    "--accentAction": brand.accentAction,
  } as CSSProperties & { "--accent": string; "--accentAction": string };

  return (
    <main className={styles.page} style={theme}>
      <div className={styles.ribbon} role="note">
        {PENDING_APPROVAL.reviewRibbon}
      </div>

      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.brandCluster}>
            <div className={styles.brandLine}>
              {/*
                The real client marks, matte-stripped from the 12 Aug assets. The slot is
                fixed at 28px tall in both skins: two marks of different aspect ratio would
                otherwise change the header height, move the fold, and make the variants
                structurally non-identical — which is what the brand test measures against.
              */}
              <span className={styles.wordmarkSlot}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.wordmark}
                  src={brand.logo}
                  width={brand.logoWidth}
                  height={brand.logoHeight}
                  alt={brand.name}
                  translate="no"
                />
              </span>
              <span className={styles.descriptorSlot} translate="no">
                {descriptor}
              </span>
            </div>
            <p className={styles.endorsement}>{brand.endorsement}</p>
          </div>

          <div className={styles.headerMeta}>
            <span className={styles.headerAudience}>{PAGE_COPY.headerAudience}</span>
            <span className={styles.ratingSlot} aria-hidden="true" title={PAGE_COPY.ratingSlotLabel} />
          </div>
        </header>
      </div>

      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroInner}>
            <p className={styles.kicker}>{HERO_COPY.kicker}</p>
            <h1 className={styles.h1}>
              {heroMode === "trigger"
                ? HERO_COPY.triggerHeadline
                : `${HERO_COPY.promiseStart} ${PENDING_APPROVAL.reportPromise}`}
            </h1>
            <p className={styles.heroLead}>{HERO_COPY.lead}</p>
            <div className={styles.ctaRow}>
              <a className={styles.btn} href="#enquire">
                {CTA}
              </a>
              <span className={styles.audienceChip}>{PAGE_COPY.audienceChip}</span>
            </div>
            <div className={styles.forkSection}>
              <fieldset className={styles.forkFieldset}>
                <legend className={styles.vh}>{FORK_COPY.legend}</legend>
                <input
                  className={styles.vh}
                  type="radio"
                  name="flow"
                  id="flow-team"
                  defaultChecked
                />
                <input className={styles.vh} type="radio" name="flow" id="flow-me" />
                {!paidPath ? <p className={styles.forkQuestion}>{PAGE_COPY.forkQuestion}</p> : null}
                {paidPath ? (
                  <>
                    <label htmlFor="flow-team" className={styles.vh}>{FORK_COPY.team}</label>
                    <p className={styles.paidFork}>
                      <label htmlFor="flow-me" className={styles.inlineLink}>
                        {FORK_COPY.paidPath}
                      </label>
                    </p>
                  </>
                ) : (
                  <div className={styles.forkRow}>
                    <label htmlFor="flow-team" className={styles.forkBtn} data-fork="team">
                      {FORK_COPY.team}
                    </label>
                    <label htmlFor="flow-me" className={styles.forkBtn} data-fork="me">
                      {FORK_COPY.myself}
                    </label>
                  </div>
                )}
              </fieldset>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTight} ${styles.individualOnly}`}>
        <div className={styles.shell}>
          <div className={styles.deadEnd}>
            <h2>{FORK_COPY.individualHeading}</h2>
            <p className={styles.body}>{FORK_COPY.individualBody}</p>
            <p className={styles.body}>
              <label htmlFor="flow-team" className={styles.inlineLink}>
                {FORK_COPY.individualLink}
              </label>
              {" "}
              {FORK_COPY.returnToTeam}
            </p>
          </div>
        </div>
      </section>

      <div className={styles.corporateOnly}>
        <section className={styles.section} id="problem">
          <div className={styles.shell}>
            <p className={styles.kicker}>{PAGE_COPY.problemKicker}</p>
            <h2 className={styles.h2}>{PAGE_COPY.problemHeading}</h2>
            <p className={styles.lead}>{PAGE_COPY.problemLead}</p>

            <div className={styles.triggerPanel}>
              <h3 className={styles.subheading}>{PAGE_COPY.triggerHeading}</h3>
              <ul className={styles.triggerList}>
                {TRIGGERS.map((trigger) => (
                  <li key={trigger}>{trigger}</li>
                ))}
              </ul>
            </div>

            <div className={styles.objectionBlock}>
              <h3 className={styles.subheading}>{PAGE_COPY.objectionsHeading}</h3>
              <div className={styles.objectionGrid}>
                {OBJECTIONS.map((objection) => (
                  <article className={styles.objection} key={objection.letter}>
                    <span className={styles.objectionLetter} aria-hidden="true">
                      {objection.letter}
                    </span>
                    <h4>{objection.heading}</h4>
                    <p className={styles.body}>{objection.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

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
                <a className={`${styles.btn} ${styles.btnSecondary}`} href="#enquire">
                  {CTA}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionLift}`} id="how-it-works">
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

        <section className={styles.section} id="ecosystem">
          <div className={styles.shell}>
            <p className={styles.kicker}>{PAGE_COPY.ecosystemKicker}</p>
            <h2 className={styles.h2}>{PAGE_COPY.ecosystemHeading}</h2>
            <p className={styles.lead}>{PAGE_COPY.ecosystemLead}</p>
            <div className={styles.engineRail}>
              {ECOSYSTEM_ITEMS.map((item) => (
                <article className={styles.engineItem} key={item.name}>
                  <h3 className={styles.engineName}>{item.name}</h3>
                  <p className={styles.engineBody}>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionLift}`} id="enquire">
          <div className={styles.shell}>
            <div className={styles.formWrap}>
              <div className={styles.formIntro}>
                <p className={styles.kicker}>{PAGE_COPY.formKicker}</p>
                <h2 className={styles.h2}>{CTA}</h2>
                <p className={styles.lead}>{PAGE_COPY.formIntro}</p>
                <p className={styles.formPromise}>{PENDING_APPROVAL.writtenScopePromise}</p>
              </div>
              <div className={styles.form}>
                <EnquiryForm variant={variant} />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.shell}>
        <footer className={styles.footer}>
          <span translate="no">{brand.name}</span>
          <span className={styles.footNote}>{PAGE_COPY.footer}</span>
        </footer>
      </div>
    </main>
  );
}
