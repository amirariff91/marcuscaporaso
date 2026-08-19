"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./lp.module.css";
import {
  CTA,
  ENQUIRY_TYPE_OPTIONS,
  FORM_COPY,
  GEO_OPTIONS,
  ROLE_OPTIONS,
  SERVICE_OPTIONS,
  TIMING_OPTIONS,
  WORKFORCE_OPTIONS,
  WORKING_MODEL_OPTIONS,
} from "./copy";

type Step = 1 | 2;
type FieldErrors = Record<string, string>;

export default function EnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState<Step>(1);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [enquiryType, setEnquiryType] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const callBarRef = useRef<HTMLAnchorElement>(null);
  const stepOneHeadingRef = useRef<HTMLHeadingElement>(null);
  const stepTwoHeadingRef = useRef<HTMLHeadingElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const previousStepRef = useRef<Step>(step);

  useEffect(() => {
    if (submitted) {
      successHeadingRef.current?.focus();
    }
  }, [submitted]);

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

  async function handleSubmit() {
    if (step === 1) {
      handleContinue();
      return;
    }
    if (!validateVisibleStep(2)) return;

    const form = formRef.current;
    if (!form) return;
    setSubmitting(true);

    const data = Object.fromEntries(new FormData(form));
    const url = new URL(window.location.href);

    try {
      const res = await fetch("/api/ergoworks-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          enquiry_type: enquiryType,
          gclid: url.searchParams.get("gclid") || undefined,
          utm_source: url.searchParams.get("utm_source") || undefined,
          utm_medium: url.searchParams.get("utm_medium") || undefined,
          utm_campaign: url.searchParams.get("utm_campaign") || undefined,
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form
        ref={formRef}
        className={styles.formElement}
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        hidden={submitted}
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
            <label htmlFor="service">
              {FORM_COPY.serviceLabel} <span aria-hidden="true">*</span>
            </label>
            <select
              id="service"
              name="service"
              defaultValue=""
              required={step === 1}
              aria-invalid={Boolean(fieldErrors.service)}
              aria-describedby={fieldErrors.service ? "service-error" : undefined}
            >
              <option value="" disabled>
                {FORM_COPY.servicePlaceholder}
              </option>
              {SERVICE_OPTIONS.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
            {fieldErrors.service ? (
              <p className={styles.fieldError} id="service-error">
                {fieldErrors.service}
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
              <label htmlFor="enquiry-type">
                {FORM_COPY.enquiryTypeLabel} <span aria-hidden="true">*</span>
              </label>
              <select
                id="enquiry-type"
                name="enquiry_type"
                value={enquiryType}
                onChange={(event) => setEnquiryType(event.target.value)}
                required={step === 1}
                aria-invalid={Boolean(fieldErrors["enquiry-type"])}
                aria-describedby={
                  fieldErrors["enquiry-type"] ? "enquiry-type-error" : undefined
                }
              >
                <option value="" disabled>
                  {FORM_COPY.enquiryTypePlaceholder}
                </option>
                {ENQUIRY_TYPE_OPTIONS.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
              {fieldErrors["enquiry-type"] ? (
                <p className={styles.fieldError} id="enquiry-type-error">
                  {fieldErrors["enquiry-type"]}
                </p>
              ) : null}
            </div>
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
            <label htmlFor="organisation">
              {FORM_COPY.organisationLabel}{" "}
              {enquiryType === "Individual or home-based" ? (
                <span className={styles.optionalLabel}>(optional)</span>
              ) : (
                <span aria-hidden="true">*</span>
              )}
            </label>
            <input
              id="organisation"
              name="organisation"
              autoComplete="organization"
              placeholder={
                enquiryType === "Individual or home-based"
                  ? "Company or trading name (optional)"
                  : FORM_COPY.organisationPlaceholder
              }
              required={step === 2 && enquiryType !== "Individual or home-based"}
              aria-invalid={Boolean(fieldErrors.organisation)}
              aria-describedby={fieldErrors.organisation ? "organisation-error" : undefined}
            />
            {fieldErrors.organisation ? (
              <p className={styles.fieldError} id="organisation-error">
                {fieldErrors.organisation}
              </p>
            ) : null}
          </div>

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

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="geo">Geographic distribution</label>
              <select id="geo" name="geo_distribution" defaultValue="">
                <option value="">Optional</option>
                {GEO_OPTIONS.map((option) => (
                  <option value={option} key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="working-model">Working model</label>
              <select id="working-model" name="working_model" defaultValue="">
                <option value="">Optional</option>
                {WORKING_MODEL_OPTIONS.map((option) => (
                  <option value={option} key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="timing">Timing</label>
            <select id="timing" name="timing" defaultValue="">
              <option value="">Optional</option>
              {TIMING_OPTIONS.map((option) => (
                <option value={option} key={option}>{option}</option>
              ))}
            </select>
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
              I agree that this enquiry can be processed so the team can respond.{" "}
              <span aria-hidden="true">*</span>
            </span>
          </label>
          {fieldErrors["processing-consent"] ? (
            <p className={styles.fieldError} id="processing-consent-error">
              {fieldErrors["processing-consent"]}
            </p>
          ) : null}

          <div className={styles.btnRow}>
            {/*
              type="button", NOT type="submit". Without a submit control the browser
              performs no implicit submission, so before React hydrates (or if the
              island fails to load) pressing Enter cannot fire a native GET that puts
              PII into the URL query string, where it would land in browser history,
              server and CDN logs.
            */}
            <button
              type="button"
              onClick={() => handleSubmit()}
              className={styles.btn}
              disabled={submitting}
            >
              {submitting ? "Submitting…" : FORM_COPY.submit}
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
        {submitted ? (
          <>
            <h3 ref={successHeadingRef} tabIndex={-1}>
              {FORM_COPY.whatNext}
            </h3>
            <p>
              Thank you. One of our health professional consultants will review
              your organisation&rsquo;s needs and recommend the most appropriate
              next step — whether that&rsquo;s an individual assessment, broader
              workforce support, training, office-move support or ErgoAssess.
            </p>
          </>
        ) : null}
      </div>

      <a
        ref={callBarRef}
        href="tel:1300374696"
        className={styles.callBar}
        data-callbar="true"
        onClick={() => {
          // GA4 event placeholder
        }}
      >
        {FORM_COPY.callBar}
      </a>
    </>
  );
}
