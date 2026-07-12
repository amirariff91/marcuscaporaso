import type { Metadata } from "next";

import { BOOKING_CONFIRMED_HTML, CONSENT_MODE_JS } from "./snippets";

export const metadata: Metadata = {
  title: "Booking Tracking — Implementation Handoff | Biosymm Group",
  description:
    "Build-ready Phase 1 handoff for Biosymm's consent-gated Nookal booking tracking, GTM configuration, Google Ads conversion actions, and privacy verification.",
  alternates: { canonical: "https://biosymm.marcuscaporaso.com/tracking" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "article",
    url: "https://biosymm.marcuscaporaso.com/tracking",
    title: "Booking Tracking — Implementation Handoff | Biosymm Group",
    description:
      "A build-ready, data-minimised implementation plan for confirmed Nookal bookings, GA4 and Google Ads, gated by Australian health-privacy requirements.",
    siteName: "Biosymm Growth Audit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Booking Tracking — Implementation Handoff | Biosymm Group",
    description:
      "Phase 1 implementation instructions for consent-gated Nookal booking tracking, GTM, GA4 and Google Ads.",
  },
};

const corporateEnquirySnippet = `<script>
  // On the corporate enquiry form page. Exposes a hook the form's REAL submit-success
  // callback calls. Fire ONLY on successful submit (server-validated), never on button click
  // and never on the raw submit event (which fires before validation). Gate behind consent.
  window.biosymmFireCorporateEnquiry = function () {
    window.biosymmWhenConsented(function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'corporate_enquiry',
        enquiry_stream: 'corporate'
        // ALLOWED: enquiry_stream only. FORBIDDEN: name, email, phone, company, worker name,
        // injury/condition/return-to-work detail, any free-text field. The corporate form is
        // NOT automatically "safe B2B" — if it touches worker injury/treatment/RTW detail it is
        // health information and gets the same consent + data-minimisation treatment as clinic
        // bookings (§4). Confirm the form's fields with legal before go-live.
      });
    });
  };
  // Wire it to the form's actual success path, e.g. on a fetch().then() after a 2xx response:
  //   fetch('/api/corporate-enquiry', {...}).then(r => { if (r.ok) window.biosymmFireCorporateEnquiry(); });
  // Do NOT call it from a submit event listener — that fires before the server responds.
</script>`;

const consentRows = [
  ["Consent Initialization", "— (runs first by design)"],
  ["Conversion Linker", "ad_storage"],
  ["GA4 event tags", "analytics_storage"],
  ["Google Ads conversion tags", "ad_storage + ad_user_data"],
];

const conversionRows = [
  ["Category", "Book appointment (or Submit lead form)", "Submit lead form"],
  ["Count", "Every — each genuine booking counts; reload/phantom duplicates are blocked by transaction_id + the bc_seen_* localStorage guard", "One — one lead per ad click"],
  ["Value", "None in Phase 1 — bid on count / tCPA; real value arrives in Phase 3 (attended-appointment import)", "None; later CRM won-deal value in Phase 2/3"],
  ["Click-through window", "7 days — bookings happen fast", "30–90 days — long B2B cycle"],
  ["Attribution", "Data-Driven (DDA — mandatory default)", "DDA"],
  ["Enhanced Conversions", "OFF — health / sensitive", "Only if BOTH clear: (a) legal confirms the form collects no health/injury/RTW data, AND (b) Google's sensitive-conversion policy allows it for this category at sign-off. Default OFF."],
  ["Customer Match", "OFF", "OFF until legal confirms scope"],
];

const verificationItems = [
  <><strong>GA4 DebugView:</strong> complete a real test booking → confirm one <code>booking_completed</code> with <code>booking_stream=clinic</code>, no <code>booking_ref</code> (it goes to Google Ads as <code>transaction_id</code> only), and no patient params.</>,
  <>Google Ads → the Clinic conversion shows “Recording conversions”; Enhanced Conversions shows <strong>Off</strong>.</>,
  <>Refresh <code>/booking-confirmed</code> → confirm it does not log a second conversion.</>,
  <><strong>No-ref → no fire:</strong> load <code>/booking-confirmed</code> without <code>?ref=</code> and without a nonce → zero <code>booking_completed</code>. Then load with a valid opaque ref → exactly one.</>,
  <><strong>Late consent:</strong> clear consent + localStorage, load <code>/booking-confirmed?ref=&lt;valid&gt;</code> while denied → 0 fires; grant → exactly 1; grant again → still 1.</>,
  <><strong>URL strip:</strong> GA4 <code>page_location</code> is <code>/booking-confirmed</code> with no query string. A bad/leaky ref such as <code>?ref=Appt%20142%20John</code> produces 0 fires and is still stripped.</>,
  <>The corporate form fires only <code>corporate_enquiry</code>, never <code>booking_completed</code>; its GA4 event carries <code>enquiry_stream</code> only and no form fields.</>,
  <>Tag Assistant: no tag fires before consent is granted.</>,
  <><strong>Legal:</strong> the lawyer’s sign-off records APP 8.1 vs 8.2(b) and confirms the <code>ad_personalization</code> setting before go-live.</>,
  <><strong>Conversion Linker / late consent on landing:</strong> arrive with <code>?gclid=…</code> (or <code>gbraid</code>/<code>wbraid</code>) while denied → <code>_gcl_aw</code> is not set; grant on that landing page → it is written; then confirm the booking attributes. Document that consent first granted on <code>/booking-confirmed</code> cannot attribute client-side because the gclid is gone.</>,
  <><strong>Server log + noindex:</strong> server/CDN logs do not retain <code>?ref=</code> (or redact it), and <code>/booking-confirmed</code> returns a noindex directive. Both are go-live gates.</>,
  <><strong>Cross-tab race (residual):</strong> two simultaneous tabs with the same ref can race localStorage, so GA4 may record 2 key events while Google Ads dedupes to 1. Document it; robust idempotency is server-side in Phase 2/3.</>,
  <><strong>Consent withdrawal:</strong> with consent granted and <code>biosymm_consent</code> stored, call <code>biosymmRevokeConsent()</code> → consent is denied, <code>_biosymmConsented</code> is false, and storage is cleared. Reload → no auto-grant and no tag. A valid ref under denied consent → 0 fires.</>,
];

function Section({ eyebrow, title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border-subtle py-16 md:py-24">
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cta">{eyebrow}</p> : null}
        <h2 className="max-w-4xl text-balance text-3xl font-semibold tracking-[-0.03em] text-fg md:text-5xl">{title}</h2>
        <div className="mt-8 text-pretty text-base leading-8 text-muted md:text-lg">{children}</div>
      </div>
    </section>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border text-left text-sm">
          <thead className="bg-bg-raised text-xs uppercase tracking-[0.16em] text-muted-2">
            <tr className="border-b-2 border-border">{headers.map((header) => <th key={header} scope="col" className="px-5 py-4 font-semibold">{header}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-border-subtle text-muted">
            {rows.map((row, rowIndex) => (
              <tr key={row.join("-")} style={rowIndex % 2 !== 0 ? { backgroundColor: "oklch(97% 0.004 80)" } : {}}>
                {row.map((cell, index) => <td key={`${cell}-${index}`} className={index === 0 ? "px-5 py-3.5 font-semibold text-fg" : "px-5 py-3.5"}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MetricCard({ label, value, note, status }: { label: string; value: string; note: string; status?: "good" | "warning" | "critical" | "neutral" }) {
  const dot = status === "critical" ? "bg-red-500" : status === "warning" ? "bg-amber-400" : status === "good" ? "bg-cta" : null;
  return (
    <div className="relative rounded-3xl border border-border bg-white p-6 shadow-sm">
      {dot && <span className={`absolute right-5 top-5 h-2.5 w-2.5 rounded-full ${dot}`} />}
      <p className="text-sm uppercase tracking-[0.18em] text-muted-2">{label}</p>
      <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-fg">{value}</p>
      <p className="mt-4 text-sm leading-6 text-muted">{note}</p>
    </div>
  );
}

function FindingCard({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="rounded-3xl border border-border bg-white p-6 shadow-sm"><div className="mb-4 h-0.5 w-8 rounded-full bg-cta" /><h3 className="text-balance text-xl font-semibold tracking-[-0.02em] text-fg">{title}</h3><div className="mt-4 text-sm leading-7 text-muted">{children}</div></div>;
}

function AlertCard({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="mt-8 rounded-3xl border border-amber-300/50 bg-amber-50/60 p-6 shadow-sm md:p-8"><div className="mb-4 h-0.5 w-8 rounded-full bg-amber-500" /><h3 className="text-balance text-xl font-semibold tracking-[-0.02em] text-fg">{title}</h3><div className="mt-4 text-sm leading-7 text-muted md:text-base md:leading-8">{children}</div></div>;
}

function RecommendCard({ tag, title, children }: { tag: string; title: string; children: React.ReactNode }) {
  return <div className="rounded-3xl border border-cta/30 bg-cta/5 p-6 shadow-sm md:p-8"><p className="mb-3 inline-flex rounded-full bg-cta px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">{tag}</p><h3 className="text-balance text-xl font-semibold tracking-[-0.02em] text-fg">{title}</h3><div className="mt-4 text-sm leading-7 text-muted md:text-base md:leading-8">{children}</div></div>;
}

function CodeBlock({ label, code }: { label: string; code: string }) {
  return (
    <div className="mt-8 min-w-0 overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
      <div className="border-b border-border bg-bg-raised px-5 py-4 text-sm font-semibold text-fg">{label}</div>
      <pre className="max-w-full overflow-x-auto p-5 text-left font-mono text-xs leading-6 text-fg md:p-6 md:text-sm"><code>{code}</code></pre>
    </div>
  );
}

export default function BiosymmTrackingHandoffPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div className="absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-cta/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cta">Biosymm / implementation handoff</p>
          <h1 className="mt-6 max-w-5xl text-balance text-display font-semibold text-fg">Booking tracking, ready to implement. Phase 1.</h1>
          <p className="mt-8 max-w-3xl text-pretty text-xl leading-9 text-muted">This is the build-ready companion for Joel and the ad-account holder: the exact own-domain redirect, consent, GTM, GA4 and Google Ads setup for counting completed bookings without sending patient details.</p>
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-fg">
            <span className="rounded-full border border-border bg-white px-4 py-2">Prepared for Biosymm — for Joel + ad-account holder</span>
            <span className="rounded-full border border-border bg-white px-4 py-2">Phase 1: own-domain redirect</span>
            <a className="rounded-full border border-cta/30 bg-cta/5 px-4 py-2 text-cta underline-offset-4 hover:underline" href="/booking-tracking">Read the rationale →</a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="rounded-3xl border-2 border-amber-400 bg-amber-50 p-6 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-800">Go-live gate</p>
            <h2 className="mt-3 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.03em] text-fg md:text-5xl">Do not activate any tag until ALL FOUR gates clear.</h2>
            <ol className="mt-8 grid gap-5 text-sm leading-7 text-muted md:grid-cols-2 md:text-base md:leading-8">
              <li><strong className="text-fg">1. Access.</strong> Biosymm Google Ads access is confirmed; the GTM container and correct GA4 property <strong>still need to be confirmed and granted</strong> — this gate clears only once they are.</li>
              <li><strong className="text-fg">2. Nookal redirect + opaque ref.</strong> Completed bookings redirect to <code>/booking-confirmed</code>, and Nookal confirms the appended ref is genuinely opaque—not an Appointment ID or Client ID. <code>/^[A-Za-z0-9_-]{'{'}8,64{'}'}$/</code> checks format only; an 8+ digit ID passes, so human confirmation is the gate. If Nookal genuinely cannot append a ref, use block C’s first-party nonce fallback, never a generated ID.</li>
              <li><strong className="text-fg">3. Confirmation page + server log hygiene.</strong> <code>/booking-confirmed</code> is live, noindex, and its server/CDN/access logs disable or redact <code>?ref=</code>. Browser-side stripping occurs after the original request was logged and cannot close this leak.</li>
              <li><strong className="text-fg">4. Consent + legal.</strong> Express consent is live; the privacy policy names Google as an <strong>overseas recipient</strong>; and an Australian health-privacy lawyer signs off. They must document APP 8.1 (reasonable steps/accountability via contractual safeguards) or APP 8.2(b) (informed consent), state the loss of APP-accountability/redress if the overseas recipient mishandles data, and decide whether <code>ad_personalization</code> is granted or denied. Current Google Ads sensitive-category policy must also be re-checked at sign-off — it is an independent, account-suspension-level gate on top of the Privacy Act.</li>
            </ol>
            <p className="mt-7 border-t border-amber-300 pt-6 font-semibold text-fg">This is patient/health data disclosed overseas. In June 2026, the Privacy Commissioner found Medmate ([2026] AICmr 41) and Monash IVF ([2026] AICmr 40) breached the Act through third-party tracking pixels collecting sensitive information without consent. This gate is non-negotiable.</p>
          </div>
        </div>
      </section>

      <Section eyebrow="What this measures" title="A completed-booking signal—not a patient.">
        <p>A completed Nookal booking, not a button click, is attributed to the Google ad that drove it. No direct identifiers or clinical details leave Biosymm’s domain. The signal is consented and data-minimised—<strong className="text-fg">pseudonymous, not anonymous</strong>—and tied to Google click identifiers.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <MetricCard label="Step 1" value="Ad → Biosymm" note="The visitor lands on biosymm.com.au; after consent, Google's first-party click cookie is set." status="good" />
          <MetricCard label="Step 2" value="Book → Nookal" note="The booking completes in Nookal, which redirects to biosymm.com.au/booking-confirmed." status="good" />
          <MetricCard label="Step 3" value="One event" note="The page sends one booking_completed event to GA4 and Google Ads with no patient identifiers." status="good" />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <FindingCard title="Two separate conversions"><p><strong>Clinic booking confirmed</strong> and <strong>Corporate enquiry submitted</strong> are separate Primary actions so clinic and corporate campaigns bid to their own outcomes.</p></FindingCard>
          <FindingCard title="Health-data overrides"><p>Enhanced Conversions is OFF and Customer Match is OFF for clinic. Consent is required by the Privacy Act / APPs for health data—not Google’s EEA rule.</p></FindingCard>
        </div>
      </Section>

      <Section eyebrow="For Joel — site / dev" title="Put the controlled event on Biosymm’s own domain.">
        <RecommendCard tag="Page prerequisite" title="Build biosymm.com.au/booking-confirmed">
          <p>Noindex the page with X-Robots-Tag or a robots meta tag. At the server, CDN and access-log layers, disable query-string logging for this route or redact <code>ref</code>. The browser snippet strips the query before GTM/GA4 reads it, but cannot erase the HTTP request already logged upstream.</p>
        </RecommendCard>
        <CodeBlock label="1 — Load in <head> BEFORE GTM, on every page" code={CONSENT_MODE_JS} />
        <CodeBlock label="2 — /booking-confirmed page (includes block C contingency)" code={BOOKING_CONFIRMED_HTML} />
        <AlertCard title="Block C is a weaker fallback, not the default."><p>A Nookal ref proves a completed booking. The first-party nonce proves only a Book-now click, so it is more phantom-prone. Use it only if Nookal genuinely cannot append a ref; its 30-minute TTL and one-shot consumption reduce risk, and the confirmation page must remain noindex.</p></AlertCard>
        <CodeBlock label="3 — Corporate enquiry hook: copy exactly; call only after server-validated success" code={corporateEnquirySnippet} />
        <AlertCard title="Never fire the corporate event from a raw submit."><p>Call <code>window.biosymmFireCorporateEnquiry()</code> only from the form’s actual success callback after a 2xx response or CMS success hook. <strong>Allowed:</strong> <code>enquiry_stream</code> only. <strong>Forbidden:</strong> name, email, phone, company, worker name, injury/condition/return-to-work detail, and every free-text field.</p></AlertCard>
      </Section>

      <Section eyebrow="For the ad-account holder" title="Configure GTM, Nookal and two Primary conversion actions.">
        <h3 className="text-2xl font-semibold tracking-[-0.02em] text-fg">Google Tag Manager</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <FindingCard title="Variables"><p><code>DLV - booking_ref</code> → <code>booking_ref</code><br /><code>DLV - booking_stream</code> → <code>booking_stream</code><br /><code>DLV - enquiry_stream</code> → <code>enquiry_stream</code><br />GA4 Measurement ID as a placeholder constant; replace only with the verified property ID.</p></FindingCard>
          <FindingCard title="Triggers"><p><code>booking_completed</code> and <code>corporate_enquiry</code> Custom Event triggers. For future Nookal funnel steps, History Change works only same-origin; parent GTM cannot see inside a cross-domain iframe.</p></FindingCard>
          <FindingCard title="Fire order"><p><strong>Conversion Linker → GA4 → Google Ads.</strong> Set every tag’s Additional Consent explicitly; GTM’s “not set” applies no gating.</p></FindingCard>
        </div>
        <DataTable headers={["Tag", "Required consent type"]} rows={consentRows} />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <FindingCard title="Conversion Linker"><p>Trigger on <strong>All Pages</strong> and <code>consent_granted</code>, both gated on <code>ad_storage</code>. The second trigger lets it write <code>_gcl_aw</code> after late consent while the click ID remains in the landing URL.</p><p className="mt-3"><strong>Residual gap:</strong> if consent is first granted on <code>/booking-confirmed</code>, the gclid is gone and client-side attribution cannot recover it. Use a prominent landing-page banner; Phase 2 addresses this server-side.</p></FindingCard>
          <FindingCard title="GA4 + Google Ads tags"><p>GA4 <code>booking_completed</code> sends <code>booking_stream</code> only and becomes a Key event. <strong>Do not map <code>booking_ref</code> to GA4.</strong> The Google Ads clinic tag uses <code>{'{{DLV - booking_ref}}'}</code> as <code>transaction_id</code> and has Enhanced Conversions OFF. Corporate GA4 sends <code>enquiry_stream</code> only.</p></FindingCard>
        </div>
        <AlertCard title="Count one source, not two."><p>Use the native Google Ads conversion as <strong>PRIMARY</strong> for bidding. Import the GA4 key event for observation only; never count both or the same booking is doubled.</p></AlertCard>

        <h3 className="mt-14 text-2xl font-semibold tracking-[-0.02em] text-fg">Nookal</h3>
        <p className="mt-5">Set the Online Bookings end-of-booking redirect / thank-you URL to <code>https://biosymm.com.au/booking-confirmed</code>, then send Nookal this exact support request:</p>
        <blockquote className="mt-6 rounded-3xl border border-border bg-white p-6 text-fg shadow-sm md:p-8">“For Online Bookings, can the post-booking redirect URL include an appended parameter that is an opaque booking reference (no client name, no Client ID, no Appointment ID) — e.g. <code>?ref=XXXX</code> — so our own site can de-duplicate a completed booking without receiving any patient information? If yes, how is the parameter named and populated?”</blockquote>
        <AlertCard title="Do not use Nookal’s built-in GA4 or Meta Pixel as the ad-conversion source."><p>Those carry internal Client ID and Appointment ID values—health-adjacent identifiers. Keep Nookal’s own analytics separate from anything wired to Google Ads.</p></AlertCard>

        <h3 className="mt-14 text-2xl font-semibold tracking-[-0.02em] text-fg">Google Ads conversion actions</h3>
        <DataTable headers={["Setting", "Clinic booking confirmed — Primary", "Corporate enquiry submitted — Primary"]} rows={conversionRows} />
        <p className="mt-7">Demote <code>book_now_click</code> to <strong>Secondary</strong>. Clinic campaigns bid only on clinic bookings; corporate campaigns bid only on corporate enquiries. Never mix their bidding goals.</p>
        <AlertCard title="A corporate form is not automatically safe B2B."><p>If it touches worker injury, treatment or return-to-work detail, it contains health information and receives the same consent and data-minimisation treatment as clinic bookings. Confirm its fields with legal before go-live.</p></AlertCard>
      </Section>

      <Section eyebrow="Consent + privacy gate" title="Basic Consent Mode, express permission, independent sign-off.">
        <div className="grid gap-5 md:grid-cols-2">
          <FindingCard title="Consent before every tag"><p>Load <code>consent-mode.js</code> before GTM. Everything defaults to denied. A visitor’s express grant is required before ad or analytics tags fire.</p></FindingCard>
          <FindingCard title="Application-side late consent"><p>GTM does not replay consent-blocked tags. <code>biosymmWhenConsented</code> queues the booking push and drains it once on grant. Do not add <code>consent_granted</code> as a conversion trigger.</p></FindingCard>
          <FindingCard title="Basic, not Advanced"><p>Phase 1 sends nothing before consent. <code>url_passthrough</code> stays off because it would persist gclid in URLs, creating a leak through Nookal redirects and third-party referrers. Advanced mode is a later, separately reviewed decision.</p></FindingCard>
          <FindingCard title="Withdrawal must work"><p>Wire Reject / Withdraw to <code>biosymmRevokeConsent()</code>. It returns consent to denied, clears the persisted grant and stops the queue. It does <strong>not</strong> retract data already sent; retention/deletion needs separate legal treatment in the privacy policy.</p></FindingCard>
        </div>
        <AlertCard title="ad_personalization has two independent gates."><p>It is currently granted on accept by a logged client decision. Before launch, the lawyer must clear Privacy Act / APP 8 implications from the June 2026 Medmate and Monash IVF determinations <strong>and</strong> Google’s own health ads policy. Google prohibits health-services remarketing/retargeting and does not support Customer Match / your-data segments for sensitive categories—an independent account-suspension risk. If either gate fails, change it to denied and record the decision.</p></AlertCard>
        <AlertCard title="A generic cookie banner is not enough for health data."><p>The banner must name <strong>Google</strong> as an <strong>OVERSEAS recipient</strong>, say that a “booking happened” signal is shared, and explain the consequences: loss of APP-accountability / redress if the overseas recipient mishandles the data. The lawyer must choose and document APP 8.1 safeguards or APP 8.2(b) informed consent.</p></AlertCard>
        <RecommendCard tag="Blocks go-live" title="Privacy policy + independent lawyer review">
          <p>Update the Biosymm privacy policy to name Google as an overseas recipient, describe the conversion signals, document retention, and state the chosen APP 8 basis. An Australian privacy lawyer with health-sector experience must sign off—and current Google Ads sensitive-category policy must be rechecked—before any tag fires.</p>
        </RecommendCard>
      </Section>

      <Section eyebrow="Verification checklist" title="Thirteen checks before this is allowed live.">
        <p>Pre-implementation, the delivered snippet logic passed <strong className="text-fg">13/13 scenarios</strong> in a stub-container harness: the core 8, nonce-fallback 3, and nonce-TTL 2. These real-environment checks still remain.</p>
        <ol className="mt-8 grid gap-4 text-sm leading-7 text-muted md:grid-cols-2 md:text-base md:leading-8">
          {verificationItems.map((item, index) => <li key={index} className="flex items-start gap-3 rounded-3xl border border-border bg-white p-5 shadow-sm"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cta text-xs font-bold text-white">{index + 1}</span><span>{item}</span></li>)}
        </ol>
      </Section>

      <Section eyebrow="Scope + handoff" title="Phase 1 ends here.">
        <p>Phase 2—server-side GTM hardening—and Phase 3—attended-appointment import through a confirmed Nookal API or webhook—are out of scope for this handoff. Return to the <a className="font-semibold text-cta underline decoration-cta/30 underline-offset-4 hover:decoration-cta" href="/booking-tracking">booking-tracking advisory</a> for the rationale and longer implementation path.</p>
        <AlertCard title="This implementation handoff is not legal advice."><p>It is a technical measurement and privacy plan. Because health information is involved and data is disclosed overseas to Google, Biosymm should obtain independent advice from a privacy lawyer with Australian health-sector experience and confirm current Google Ads policy before any tracking on the booking flow goes live.</p></AlertCard>
      </Section>
    </main>
  );
}
