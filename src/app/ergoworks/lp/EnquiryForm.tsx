"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./lp.module.css";
import {
  COMPETING_PRIORITIES_LINE,
  FORM_COPY,
  ROLE_OPTIONS,
  TRIGGER_GROUPS,
  type BrandVariant,
  WORKFORCE_OPTIONS,
} from "./copy";

type Step = 1 | 2;
type FieldErrors = Record<string, string>;

type EnquiryFormProps = {
  variant: BrandVariant;
};

export default function EnquiryForm({ variant }: EnquiryFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState<Step>(1);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [callActivated, setCallActivated] = useState(false);
  const callBarRef = useRef<HTMLButtonElement>(null);
  const stepOneHeadingRef = useRef<HTMLHeadingElement>(null);
  const stepTwoHeadingRef = useRef<HTMLHeadingElement>(null);
  const previousStepRef = useRef<Step>(step);

  /*
   * The page reserves space for the pinned call bar with a --callbar-height custom
   * property. Measure the bar rather than assuming a height: its label wraps to a
   * second line at narrow widths and under text zoom, and a stale reservation puts
   * the bar over the submit button — the one control the page exists to reach.
   */
  useEffect(() => {
    const bar = callBarRef.current;
    if (!bar) return;
    const page = bar.closest("main");
    if (!page) return;

    const apply = () => {
      page.style.setProperty("--callbar-height", `${Math.ceil(bar.offsetHeight)}px`);
    };
    apply();

    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(apply);
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (previousStepRef.current === step) return;
    previousStepRef.current = step;

    const heading = step === 1 ? stepOneHeadingRef.current : stepTwoHeadingRef.current;
    heading?.focus();
  }, [step]);

  function validateVisibleStep(stepToValidate: Step) {
    const form = formRef.current;
    if (!form) return false;

    const fields = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
        `[data-form-step="${stepToValidate}"] [required]`,
      ),
    );
    const nextFieldErrors: FieldErrors = {};
    for (const field of fields) {
      if (!field.checkValidity()) {
        nextFieldErrors[field.id] = field.validationMessage || FORM_COPY.validation;
      }
    }

    setFieldErrors(nextFieldErrors);

    const invalidField = fields.find((field) => nextFieldErrors[field.id]);

    if (invalidField) {
      setError(FORM_COPY.validation);
      invalidField.focus();
      return false;
    }

    setError("");
    return true;
  }

  function handleContinue() {
    if (validateVisibleStep(1)) setStep(2);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 1) {
      handleContinue();
      return;
    }
    if (!validateVisibleStep(2)) return;
    setSubmitted(true);
    setCallActivated(false);
    setError("");
  }

  return (
    <>
      <form
        ref={formRef}
        className={styles.formElement}
        data-brand-variant={variant}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className={styles.formSteps} aria-live="polite">
          <span>{FORM_COPY.stepIndicator(step)}</span>
          <span className={styles.requiredNote}>{FORM_COPY.requiredNote}</span>
        </div>

        {error ? (
          <p
            className={styles.formError}
            id="enquiry-form-error"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {error}
          </p>
        ) : null}

        <section
          className={styles.stepPanel}
          data-form-step="1"
          hidden={step !== 1}
          aria-labelledby="enquiry-step-one"
        >
          <h3
            ref={stepOneHeadingRef}
            id="enquiry-step-one"
            className={styles.formStepHeading}
            tabIndex={-1}
          >
            {FORM_COPY.stepOne}
          </h3>

          <div className={styles.field}>
            <label htmlFor="driver">
              {FORM_COPY.driverLabel} <span aria-hidden="true">*</span>
            </label>
            <select
              id="driver"
              name="driver"
              defaultValue=""
              required={step === 1}
              aria-invalid={Boolean(fieldErrors.driver)}
              aria-describedby={fieldErrors.driver ? "driver-error" : undefined}
            >
              <option value="" disabled>
                {FORM_COPY.driverPlaceholder}
              </option>
              {TRIGGER_GROUPS.map((group) => (
                <optgroup label={group.label} key={group.label}>
                  {group.values.map((trigger) => (
                    <option value={trigger} key={trigger}>
                      {trigger}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            {fieldErrors.driver ? (
              <p className={styles.fieldError} id="driver-error">
                {fieldErrors.driver}
              </p>
            ) : null}
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="workforce-size">
                {FORM_COPY.workforceLabel} <span aria-hidden="true">*</span>
              </label>
              <select
                id="workforce-size"
                name="workforce_size"
                defaultValue=""
                required={step === 1}
                aria-invalid={Boolean(fieldErrors["workforce-size"])}
                aria-describedby={
                  fieldErrors["workforce-size"] ? "workforce-size-error" : undefined
                }
              >
                <option value="" disabled>
                  {FORM_COPY.workforcePlaceholder}
                </option>
                {WORKFORCE_OPTIONS.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
              {fieldErrors["workforce-size"] ? (
                <p className={styles.fieldError} id="workforce-size-error">
                  {fieldErrors["workforce-size"]}
                </p>
              ) : null}
            </div>
            <div className={styles.field}>
              <label htmlFor="locations">
                {FORM_COPY.locationLabel} <span aria-hidden="true">*</span>
              </label>
              <input
                id="locations"
                name="sydney_locations"
                placeholder={FORM_COPY.locationPlaceholder}
                required={step === 1}
                aria-invalid={Boolean(fieldErrors.locations)}
                aria-describedby={fieldErrors.locations ? "locations-error" : undefined}
              />
              {fieldErrors.locations ? (
                <p className={styles.fieldError} id="locations-error">
                  {fieldErrors.locations}
                </p>
              ) : null}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="organisation">
              {FORM_COPY.organisationLabel} <span aria-hidden="true">*</span>
            </label>
            <input
              id="organisation"
              name="organisation"
              autoComplete="organization"
              placeholder={FORM_COPY.organisationPlaceholder}
              required={step === 1}
              aria-invalid={Boolean(fieldErrors.organisation)}
              aria-describedby={fieldErrors.organisation ? "organisation-error" : undefined}
            />
            {fieldErrors.organisation ? (
              <p className={styles.fieldError} id="organisation-error">
                {fieldErrors.organisation}
              </p>
            ) : null}
          </div>

          <div className={styles.btnRow}>
            <button type="button" className={styles.btn} onClick={handleContinue}>
              {FORM_COPY.continue}
            </button>
          </div>
        </section>

        <section
          className={styles.stepPanel}
          data-form-step="2"
          hidden={step !== 2}
          aria-labelledby="enquiry-step-two"
        >
          <h3
            ref={stepTwoHeadingRef}
            id="enquiry-step-two"
            className={styles.formStepHeading}
            tabIndex={-1}
          >
            {FORM_COPY.stepTwo}
          </h3>

          <div className={styles.field}>
            <label htmlFor="role">
              {FORM_COPY.roleLabel} <span aria-hidden="true">*</span>
            </label>
            <select
              id="role"
              name="role"
              autoComplete="organization-title"
              defaultValue=""
              required={step === 2}
              aria-invalid={Boolean(fieldErrors.role)}
              aria-describedby={fieldErrors.role ? "role-error" : undefined}
            >
              <option value="" disabled>
                {FORM_COPY.rolePlaceholder}
              </option>
              {ROLE_OPTIONS.map((role) => (
                <option value={role} key={role}>
                  {role}
                </option>
              ))}
            </select>
            {fieldErrors.role ? (
              <p className={styles.fieldError} id="role-error">
                {fieldErrors.role}
              </p>
            ) : null}
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="work-email">
                {FORM_COPY.emailLabel} <span aria-hidden="true">*</span>
              </label>
              <input
                id="work-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder={FORM_COPY.emailPlaceholder}
                required={step === 2}
                spellCheck={false}
                aria-invalid={Boolean(fieldErrors["work-email"])}
                aria-describedby={fieldErrors["work-email"] ? "work-email-error" : undefined}
              />
              {fieldErrors["work-email"] ? (
                <p className={styles.fieldError} id="work-email-error">
                  {fieldErrors["work-email"]}
                </p>
              ) : null}
            </div>
            <div className={styles.field}>
              <label htmlFor="phone">{FORM_COPY.phoneLabel}</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder={FORM_COPY.phonePlaceholder}
              />
            </div>
          </div>

          <label className={styles.consent}>
            <input
              id="processing-consent"
              type="checkbox"
              name="processing_consent"
              required={step === 2}
              aria-invalid={Boolean(fieldErrors["processing-consent"])}
              aria-describedby={
                fieldErrors["processing-consent"] ? "processing-consent-error" : undefined
              }
            />
            <span>
              {FORM_COPY.processingConsent} <span aria-hidden="true">*</span>
            </span>
          </label>
          {fieldErrors["processing-consent"] ? (
            <p className={styles.fieldError} id="processing-consent-error">
              {fieldErrors["processing-consent"]}
            </p>
          ) : null}
          <label className={styles.consent}>
            <input type="checkbox" name="marketing_consent" />
            <span>{FORM_COPY.marketingConsent}</span>
          </label>

          <p className={styles.priorityLine}>{COMPETING_PRIORITIES_LINE}</p>

          <div className={styles.btnRow}>
            <button type="submit" className={styles.btn}>
              {FORM_COPY.submit}
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnGhost}`}
              onClick={() => {
                setStep(1);
                setError("");
                setFieldErrors({});
              }}
            >
              {FORM_COPY.back}
            </button>
          </div>
        </section>
      </form>

      <div
        className={styles.nextCard}
        id="enquiry-next"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {submitted || callActivated ? (
          <>
            <h3>{FORM_COPY.whatNext}</h3>
            <p>{submitted ? FORM_COPY.submitted : FORM_COPY.callNext}</p>
            {submitted && callActivated ? <p>{FORM_COPY.callNext}</p> : null}
            {submitted ? (
              <span className={styles.debugChip}>
                {FORM_COPY.brandVariantLabel}: {variant} · {FORM_COPY.eventLabel}: {FORM_COPY.debugEvent}
              </span>
            ) : null}
          </>
        ) : null}
      </div>

      <button
        ref={callBarRef}
        type="button"
        className={styles.callBar}
        data-callbar="true"
        aria-controls="enquiry-next"
        aria-expanded={submitted || callActivated}
        onClick={() => setCallActivated(true)}
      >
        {FORM_COPY.callBar}
      </button>
    </>
  );
}
