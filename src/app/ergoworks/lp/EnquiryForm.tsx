"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import styles from "./lp.module.css";
import {
  CTA,
  COMPETING_PRIORITIES_LINE,
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

const SUCCESS_MESSAGE =
  "Thank you. One of our health professional consultants will review your organisation's needs and recommend the most appropriate next step.";

export default function EnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState<Step>(1);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [callActivated, setCallActivated] = useState(false);
  const callBarRef = useRef<HTMLAnchorElement>(null);
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
      page.style.setProperty("--callbar-height", Math.ceil(bar.offsetHeight) + "px");
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
        "[data-form-step=\"" + stepToValidate + "\"] [required]",
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

  async function handleSubmit(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    if (step === 1) {
      handleContinue();
      return;
    }
    if (!validateVisibleStep(2)) return;

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const value = (name: string) => {
      const fieldValue = formData.get(name);
      return typeof fieldValue === "string" ? fieldValue.trim() : "";
    };
    const processingConsent =
      formData.get("processing_consent") === "true" ||
      formData.get("processing_consent") === "on";
    const searchParams = new URLSearchParams(window.location.search);
    const timestamp = new Date().toISOString();

    const payload = {
      service: value("service"),
      workforce_size: value("workforce_size"),
      geographic_distribution: value("geographic_distribution"),
      working_model: value("working_model"),
      timing: value("timing"),
      organisation: value("organisation"),
      role: value("role"),
      email: value("email"),
      phone: value("phone"),
      processing_consent: processingConsent,
      consent: processingConsent,
      gclid: searchParams.get("gclid") ?? "",
      utm_source: searchParams.get("utm_source") ?? "",
      utm_medium: searchParams.get("utm_medium") ?? "",
      utm_campaign: searchParams.get("utm_campaign") ?? "",
      timestamp,
    };

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/ergoworks-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      let result: { success?: boolean; error?: string } = {};
      try {
        result = await response.json();
      } catch {
        // The error below gives the user a useful message for a non-JSON response.
      }

      if (!response.ok || result.success !== true) {
        throw new Error(result.error || "We couldn't send your enquiry. Please try again.");
      }

      setSubmitted(true);
      setCallActivated(false);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We couldn't send your enquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleCallClick() {
    setCallActivated(true);
    // Add the GA4 call-click event here when analytics wiring is available.
  }

  return (
    <>
      <form
        ref={formRef}
        className={styles.formElement}
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
            How can we help?
          </h3>

          <div className={styles.field}>
            <label htmlFor="service">
              Service <span aria-hidden="true">*</span>
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
                Select one
              </option>
              {SERVICE_OPTIONS.map((option: string) => (
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
                Workforce size <span aria-hidden="true">*</span>
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
                  Select one
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
              <label htmlFor="geographic-distribution">
                Geographic distribution <span aria-hidden="true">*</span>
              </label>
              <select
                id="geographic-distribution"
                name="geographic_distribution"
                defaultValue=""
                required={step === 1}
                aria-invalid={Boolean(fieldErrors["geographic-distribution"])}
                aria-describedby={
                  fieldErrors["geographic-distribution"]
                    ? "geographic-distribution-error"
                    : undefined
                }
              >
                <option value="" disabled>
                  Select one
                </option>
                {GEO_OPTIONS.map((option: string) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
              {fieldErrors["geographic-distribution"] ? (
                <p className={styles.fieldError} id="geographic-distribution-error">
                  {fieldErrors["geographic-distribution"]}
                </p>
              ) : null}
            </div>
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="working-model">
                Working model <span aria-hidden="true">*</span>
              </label>
              <select
                id="working-model"
                name="working_model"
                defaultValue=""
                required={step === 1}
                aria-invalid={Boolean(fieldErrors["working-model"])}
                aria-describedby={
                  fieldErrors["working-model"] ? "working-model-error" : undefined
                }
              >
                <option value="" disabled>
                  Select one
                </option>
                {WORKING_MODEL_OPTIONS.map((option: string) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
              {fieldErrors["working-model"] ? (
                <p className={styles.fieldError} id="working-model-error">
                  {fieldErrors["working-model"]}
                </p>
              ) : null}
            </div>

            <div className={styles.field}>
              <label htmlFor="timing">
                Timing <span aria-hidden="true">*</span>
              </label>
              <select
                id="timing"
                name="timing"
                defaultValue=""
                required={step === 1}
                aria-invalid={Boolean(fieldErrors.timing)}
                aria-describedby={fieldErrors.timing ? "timing-error" : undefined}
              >
                <option value="" disabled>
                  Select one
                </option>
                {TIMING_OPTIONS.map((option: string) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
              {fieldErrors.timing ? (
                <p className={styles.fieldError} id="timing-error">
                  {fieldErrors.timing}
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
            How we reach you
          </h3>

          <div className={styles.field}>
            <label htmlFor="organisation">
              Organisation name <span aria-hidden="true">*</span>
            </label>
            <input
              id="organisation"
              name="organisation"
              autoComplete="organization"
              placeholder="Company name"
              required={step === 2}
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
              Your role <span aria-hidden="true">*</span>
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
                Select one
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
                Work email <span aria-hidden="true">*</span>
              </label>
              <input
                id="work-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@company.com.au"
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
              <label htmlFor="phone">Phone (optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Optional"
              />
            </div>
          </div>

          <label className={styles.consent}>
            <input
              id="processing-consent"
              type="checkbox"
              name="processing_consent"
              value="true"
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

          <p className={styles.priorityLine}>{COMPETING_PRIORITIES_LINE}</p>

          <div className={styles.btnRow}>
            {/* Keep this as a button so the form cannot submit before React hydrates. */}
            <button
              type="button"
              onClick={() => void handleSubmit()}
              className={styles.btn}
              disabled={isSubmitting}
            >
              {CTA}
            </button>
            <button
              type="button"
              className={styles.btn + " " + styles.btnGhost}
              onClick={() => {
                setStep(1);
                setError("");
                setFieldErrors({});
              }}
              disabled={isSubmitting}
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
            <h3>What happens next</h3>
            <p>{submitted ? SUCCESS_MESSAGE : FORM_COPY.callNext}</p>
            {submitted && callActivated ? <p>{FORM_COPY.callNext}</p> : null}
          </>
        ) : null}
      </div>

      <a
        ref={callBarRef}
        href="tel:1300374696"
        className={styles.callBar}
        style={{ textDecoration: "none" }}
        data-callbar="true"
        aria-controls="enquiry-next"
        aria-expanded={submitted || callActivated}
        onClick={handleCallClick}
      >
        You can chat with our health professional consultant
      </a>
    </>
  );
}
