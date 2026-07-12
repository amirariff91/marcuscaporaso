import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Conversion Tracking | Biosymm Group",
  description:
    "How to measure confirmed clinic bookings from Nookal as Google Ads conversions, separated from corporate enquiries, in a privacy-safe, data-minimised way that respects Australian health-data law.",
  alternates: {
    canonical: "https://biosymm.marcuscaporaso.com/booking-tracking",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "article",
    url: "https://biosymm.marcuscaporaso.com/booking-tracking",
    title: "Booking Conversion Tracking for Biosymm",
    description:
      "Track confirmed clinic bookings, not button clicks, without sending patient details to ad platforms. A privacy-safe measurement plan for Nookal, GA4 and Google Ads.",
    siteName: "Biosymm Growth Audit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Booking Conversion Tracking for Biosymm",
    description:
      "A data-minimised plan to measure confirmed Nookal bookings as Google Ads conversions, separated from corporate enquiries, within Australian privacy law.",
  },
};

const capabilityRows = [
  ["Completed-booking event", "Yes, built in", "Nookal fires a purchase event when a booking is completed, to GA4, the GTM data layer, and Facebook Pixel. It also sends page_view events during the booking steps."],
  ["Fires on completion, not on click", "Yes", "The event represents a finished booking, not a tap on a Book button. That is the signal worth optimising toward."],
  ["Redirect to your own page", "Yes", "At the end of a booking, Nookal can show a thank-you message or redirect the client to a page on biosymm.com.au. This is the recommended path."],
  ["UTM attribution", "Partial", "UTM tags are supported but session-scoped. They are not stored beyond the visitor's current session, so they are weaker than Google's own click ID."],
  ["Single-page-app behaviour", "Note", "The booking widget is a single-page app. Step tracking in GTM needs a History Change trigger, not a normal page view."],
  ["Consent gate", "Yes", "Tags installed inside Nookal initialise only after the visitor accepts consent. A necessary control, not a full solution."],
  ["Server-side API / webhook", "Unverified", "Nookal has an API, but a webhook that fires on appointment confirmed or attended is not confirmed in public docs. Must be verified with Nookal before building on it."],
];

const optionRows = [
  ["A. Direct Nookal install", "Not recommended as the ad signal", "Quickest to switch on, but Nookal's own GA4 and Pixel tags carry an internal Client ID and Appointment ID. Linking that GA4 property to Google Ads sends health-adjacent identifiers into ad systems. Keep this for Nookal's own analytics only."],
  ["B. Own-domain redirect", "Recommended first step", "Redirect completed bookings to biosymm.com.au/booking-confirmed and count the conversion there. Attribution survives because Google's first-party click cookie was set on your domain at the ad click. You control exactly what is sent, and no patient identifiers leave with it."],
  ["C. Server-side import", "Recommended once verified", "Capture the click reference on your domain, match it to the appointment server-side, and import a confirmed or attended booking to Google Ads with no patient data attached. Most robust, and the only way to optimise toward attended appointments. Gated on confirming Nookal's API or webhook."],
];

const streamRows = [
  ["Clinic booking confirmed", "Completed Nookal booking", "Primary conversion for clinic campaigns", "Target CPA, later attended-appointment value", "Enhanced Conversions OFF, Customer Match OFF"],
  ["Corporate enquiry submitted", "Workplace / occupational-health form", "Primary conversion for corporate campaigns", "Enquiry first, later CRM opportunity and won deal", "Treat as health-sensitive until legal confirms scope"],
  ["Book now click", "Tap on a Book button", "Secondary, observational only", "Diagnostics, not a bidding target", "No change to bidding"],
];

const beforeAfterRows = [
  ["Clinic primary signal", "book_now click", "Clinic booking confirmed (completed booking)"],
  ["Corporate primary signal", "Muddled with clinic", "Corporate enquiry submitted (separate action)"],
  ["What bidding optimises to", "Button clicks", "Confirmed bookings, then attended appointments"],
  ["Patient data sent to ad platforms", "At risk via direct tags", "None — data-minimised by design"],
  ["Attribution method", "UTMs only (session-scoped)", "Google first-party click cookie (90-day)"],
];

const phaseRows = [
  ["Phase 1 — Own-domain redirect", "1–3 days, unblocked now", "Point Nookal's end-of-booking redirect at biosymm.com.au/booking-confirmed. Fire one clean booking_completed event there. Mark it a GA4 key event, import as a Google Ads conversion, and demote book_now to secondary."],
  ["Phase 2 — Attribution hardening", "About 1 week", "Capture Google's click reference from the first-party cookie on landing. Add server-side GTM on biosymm.com.au to strip anything inadvertent. Set cross-domain measurement with the Nookal booking domains for funnel analysis only."],
  ["Phase 3 — Confirmed / attended import", "2–4 weeks, gated", "Confirm with Nookal whether a webhook or API can report appointment status. If so, import confirmed and attended bookings server-side with no patient data, and retract cancellations and no-shows."],
  ["Phase 4 — Corporate CRM", "4–8 weeks", "Map the corporate enquiry form to the CRM and import opportunity and won-deal stages. Only enable richer matching for corporate once legal confirms the form holds no worker health detail."],
];

const decisionRows = [
  ["Legal / privacy sign-off", "Health information is involved and data is disclosed overseas to Google. A privacy lawyer with Australian health-sector experience should review before launch. This is not a configure-and-go setup."],
  ["Consent wording and notice", "The consent notice must name Google (and Meta if used), describe what is shared, and state that data goes overseas. A generic cookie banner is not enough for health data."],
  ["Nookal redirect parameter", "Confirm Nookal can append an opaque booking reference to the redirect URL. This is the de-duplication key. Raise as a support ticket if not available."],
  ["Nookal API / webhook capability", "Confirm whether appointment status (confirmed, attended, cancelled) is available via webhook or API. This gates Phase 3."],
  ["Corporate form content", "Confirm the occupational-health enquiry form collects only business contact details, not worker injury or treatment information."],
  ["Privacy policy update", "Name Google and Meta as overseas recipients, describe the conversion signals shared, and document data retention."],
];

const checklist = [
  "We send only a booking-completed signal — never a name, email, phone, condition, service, or appointment type.",
  "No service name, body part, or condition appears in any URL, page title, or event parameter.",
  "The direct Nookal-to-GA4 and Nookal-to-Pixel install is not used as the ad conversion source.",
  "Enhanced Conversions and Customer Match are OFF for the clinic booking conversion.",
  "Meta Pixel does not fire on the booking path; advanced matching is off everywhere.",
  "Express consent is captured before any third-party tag loads, and the notice covers overseas disclosure.",
  "Click reference and appointment data are kept server-side, minimised, and deleted after upload.",
  "Tags are documented and reviewed on a schedule — no set-and-forget.",
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
                {row.map((cell, index) => (
                  <td key={`${cell}-${index}`} className={index === 0 ? "px-5 py-3.5 font-semibold text-fg" : "px-5 py-3.5"}>{cell}</td>
                ))}
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
  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
      <div className="mb-4 h-0.5 w-8 rounded-full bg-cta" />
      <h3 className="text-balance text-xl font-semibold tracking-[-0.02em] text-fg">{title}</h3>
      <div className="mt-4 text-sm leading-7 text-muted">{children}</div>
    </div>
  );
}

function AlertCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8 rounded-3xl border border-amber-300/50 bg-amber-50/60 p-6 shadow-sm md:p-8">
      <div className="mb-4 h-0.5 w-8 rounded-full bg-amber-500" />
      <h3 className="text-balance text-xl font-semibold tracking-[-0.02em] text-fg">{title}</h3>
      <div className="mt-4 text-sm leading-7 text-muted md:text-base md:leading-8">{children}</div>
    </div>
  );
}

function RecommendCard({ tag, title, children }: { tag: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-cta/30 bg-cta/5 p-6 shadow-sm md:p-8">
      <p className="mb-3 inline-flex rounded-full bg-cta px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">{tag}</p>
      <h3 className="text-balance text-xl font-semibold tracking-[-0.02em] text-fg">{title}</h3>
      <div className="mt-4 text-sm leading-7 text-muted md:text-base md:leading-8">{children}</div>
    </div>
  );
}

export default function BiosymmBookingTrackingPage() {
  return (
    <main className="min-h-screen bg-bg text-fg">
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div className="absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-cta/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cta">Biosymm / measurement advisory</p>
          <h1 className="mt-6 max-w-5xl text-balance text-display font-semibold text-fg">Measure booked appointments, not button clicks. Privacy-safe.</h1>
          <p className="mt-8 max-w-3xl text-pretty text-xl leading-9 text-muted">
            The goal is straightforward: know which advertising actually produces booked appointments, tell clinic bookings apart from corporate enquiries, and feed that back into the ad accounts, all without exposing a single patient detail or stepping outside Australian health-privacy rules. The good news is that it can be done. This page walks through how, and where the line sits.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-fg">
            <span className="rounded-full border border-border bg-white px-4 py-2">Prepared for Biosymm Group</span>
            <span className="rounded-full border border-border bg-white px-4 py-2">Platform: Nookal Online Bookings</span>
            <span className="rounded-full border border-border bg-white px-4 py-2">June 2026</span>
            <a className="rounded-full border border-cta/30 bg-cta/5 px-4 py-2 text-cta underline-offset-4 hover:underline" href="/tracking">Build-ready implementation handoff →</a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-4 md:px-8">
          <MetricCard label="What we track today" value="Clicks" note="GA4 records the Book button click, not whether a booking was completed. Clinic and corporate demand sit in one muddled signal." status="critical" />
          <MetricCard label="What's possible" value="Confirmed bookings" note="Nookal fires a completed-booking event. With the right setup that becomes the conversion ad campaigns optimise toward." status="good" />
          <MetricCard label="Privacy posture" value="Data-minimised" note="A completed-booking count only. No name, contact, condition, or appointment type leaves for Google or Meta." status="warning" />
          <MetricCard label="Recommended path" value="Own-domain redirect" note="Count the booking on biosymm.com.au. Attribution survives via Google's first-party click cookie, with no patient data attached." status="good" />
        </div>
      </section>

      <Section eyebrow="Executive recommendation" title="Count completed bookings on your own domain, keep the two demand streams apart, and confirm consent before launch.">
        <p>
          The aim is to point advertising at the people who actually book an appointment, not the ones who just click a button, and to do it without handing any patient information to the ad platforms. That is achievable now, and the simplest first step does not even need patient data to pass through Nookal at all.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          <FindingCard title="Confirmed, not clicked"><p>Move the primary clinic signal from the Book button click to a completed booking. Keep the click as a secondary, diagnostic signal only.</p></FindingCard>
          <FindingCard title="Own-domain redirect"><p>Redirect completed bookings to a page on biosymm.com.au and count them there. Google attribution is recovered from a first-party cookie, so no click ID has to survive the Nookal flow.</p></FindingCard>
          <FindingCard title="Two separate streams"><p>Track clinic bookings and corporate enquiries as two distinct conversions in two distinct campaigns, so bidding optimises to the right outcome for each.</p></FindingCard>
          <FindingCard title="Privacy first"><p>Send only a booking-completed signal, keep Enhanced Conversions and Customer Match off for clinic bookings, gate everything behind consent, and get legal sign-off before launch.</p></FindingCard>
        </div>
      </Section>

      <Section eyebrow="The problem today" title="A button click is not a booking, and clinic demand is mixed with corporate demand.">
        <p>
          GA4 currently records the Book button click. A click is intent to view the booking page, not a completed appointment. People drop out when slots are full, prices show, or the form feels long. Optimising ads to clicks trains Google to find people who click, not people who attend a clinic. At the same time, clinic and corporate occupational-health demand are not separated, so automated bidding cannot tell a high-volume patient booking from a long-cycle workplace enquiry.
        </p>
        <DataTable headers={["Dimension", "Today", "Recommended"]} rows={beforeAfterRows} />
      </Section>

      <Section eyebrow="What Nookal can pass back" title="Nookal already reports a completed booking. The question is how to use it safely.">
        <p>
          Nookal&apos;s newer Online Bookings can report a completed booking to analytics and ad platforms. The capability is real. The care is in what data rides along with it.
        </p>
        <DataTable headers={["Capability", "Status", "What it means for Biosymm"]} rows={capabilityRows} />
        <AlertCard title="The detail that changes the design: Nookal's built-in tags are not anonymous.">
          <p>
            When you install GA4 or Facebook Pixel directly inside Nookal, the completed-booking event carries an internal Client ID and Appointment ID. Those are identifiers that can be linked back to a patient record, so they count as personal, health-related information, not anonymous data. Sending them to Google or Meta is a disclosure of health information that Australian privacy law treats seriously. This is why the recommended design counts the booking on your own domain instead, where you control exactly what is sent.
          </p>
        </AlertCard>
      </Section>

      <Section eyebrow="Three ways to do it" title="From quickest to most robust. One is clearly the right place to start.">
        <p>
          There are three technical paths. They are not equal on privacy or on attribution quality. The own-domain redirect is the recommended first move because it solves the attribution problem and the privacy problem at the same time.
        </p>
        <DataTable headers={["Option", "Verdict", "Why"]} rows={optionRows} />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <RecommendCard tag="Recommended" title="Why the own-domain redirect just works">
            <p>
              When someone clicks a Google ad and lands on biosymm.com.au, Google sets a first-party click cookie on your domain that lasts up to 90 days. They go to Nookal to book, then get redirected back to biosymm.com.au/booking-confirmed. That cookie is still there, so the conversion is attributed to the original ad click automatically. Nothing about the patient needs to pass through Nookal, and you decide exactly what the confirmation page reports.
            </p>
          </RecommendCard>
          <FindingCard title="Booking completed vs appointment attended">
            <p>
              The redirect counts a completed booking. It does not yet know whether the person turned up. For a physio practice with no-shows, the stronger signal is an attended appointment. That is what the server-side import in Phase 3 adds, once Nookal&apos;s API or webhook capability is confirmed.
            </p>
          </FindingCard>
        </div>
      </Section>

      <Section eyebrow="Clinic vs corporate" title="Two demand streams, two conversion actions, two campaigns.">
        <p>
          Clinic bookings are high-volume and quick. Corporate and occupational-health enquiries are lower-volume, higher-value, and run on a long sales cycle through the CRM. Mixing them corrupts bidding and reporting. Keep them as separate conversion actions so each campaign optimises to the right outcome.
        </p>
        <DataTable headers={["Conversion", "Source", "Role", "Bid toward", "Privacy setting"]} rows={streamRows} />
        <AlertCard title="Corporate enquiries can still be health-sensitive.">
          <p>
            A workplace enquiry is not automatically safe just because the buyer is a business. If a form touches worker injury, treatment, or return-to-work detail, that is health information and gets the same consent and data-minimisation care as clinic bookings. Confirm the form&apos;s content with legal before treating the corporate stream as ordinary B2B.
          </p>
        </AlertCard>
      </Section>

      <Section eyebrow="Privacy and health-data guardrails" title="What keeps this inside Australian law.">
        <p>
          Health information is sensitive information under the Privacy Act 1988 and the Australian Privacy Principles. Collecting or disclosing it for advertising generally needs express, informed consent, and disclosure to Google and Meta means sending data overseas. The regulator is active here: in June 2026 the Privacy Commissioner found that health providers Medmate and Monash IVF breached the Act by using third-party tracking pixels that collected sensitive information without consent (determinations [2026] AICmr 41 and [2026] AICmr 40). The OAIC&apos;s November 2024 guidance on tracking pixels sets the standard: understand what each pixel collects, get consent, and do not set and forget.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <FindingCard title="Send a count, not a person"><p>Only a booking-completed signal, with an optional dollar value, should reach an ad platform. Never a name, email, phone, condition, service, or appointment type.</p></FindingCard>
          <FindingCard title="Keep conditions out of URLs"><p>Service names, body parts, and conditions must not appear in page URLs, titles, or event parameters that flow to analytics or pixels. The URL itself can leak health information.</p></FindingCard>
          <FindingCard title="Consent before tags load"><p>Capture express, informed consent before any third-party tag fires, and make the notice cover overseas disclosure to Google and Meta. Nookal&apos;s consent gate helps but the notice wording matters.</p></FindingCard>
          <FindingCard title="Google sensitive-category limits"><p>For health conversions, Google prohibits Enhanced Conversions and Customer Match. Counting the conversion with a click reference and no patient data is the lower-risk path that stays clear of those restrictions.</p></FindingCard>
          <FindingCard title="Keep Meta off the booking path"><p>Given the regulator&apos;s focus on health-data leakage to Meta, the default position is no Meta Pixel on any booking-intent page, with advanced matching off everywhere.</p></FindingCard>
          <FindingCard title="Data-minimised, not anonymous"><p>Click IDs and cookies are pseudonymous, not anonymous. The honest description of this setup is data-minimised and lower-risk, with a legal review still required before launch.</p></FindingCard>
        </div>
      </Section>

      <Section eyebrow="Is this privacy-safe?" title="A checklist Biosymm can hold any setup against.">
        <p>
          Before any tracking goes live, every line below should be true. If one is not, the setup is not ready to launch.
        </p>
        <div className="mt-8 rounded-3xl border border-border bg-white p-6 shadow-sm md:p-8">
          <ul className="grid gap-4 text-sm leading-7 text-muted md:grid-cols-2 md:text-base md:leading-8">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cta text-[0.7rem] font-bold text-white">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section eyebrow="Implementation path" title="Start with the quick win this week, then harden it.">
        <p>
          The first phase is unblocked and can ship in days. Later phases add stronger attribution and the attended-appointment signal, with one dependency that must be confirmed with Nookal first.
        </p>
        <DataTable headers={["Phase", "Effort", "What happens"]} rows={phaseRows} />
      </Section>

      <Section eyebrow="Decisions and open items" title="What Biosymm needs to confirm before launch.">
        <p>
          A short list of things to confirm before building. The legal review is the one not to skip, since both patient health information and overseas data sharing are involved.
        </p>
        <DataTable headers={["Item", "Why it matters"]} rows={decisionRows} />
        <AlertCard title="This advisory is not legal advice.">
          <p>
            It is a measurement and privacy plan prepared to inform the build. Because health information is involved and data is disclosed overseas to Google and Meta, Biosymm should obtain independent advice from a privacy lawyer with Australian health-sector experience, and confirm current Google Ads policy at implementation time, before any tracking on the booking flow goes live.
          </p>
        </AlertCard>
      </Section>

      <Section eyebrow="Bottom line" title="Yes, you can prove the bookings, safely.">
        <div className="rounded-[2rem] bg-fg p-8 text-bg md:p-10">
          <p className="max-w-4xl text-3xl font-semibold leading-[1.2] tracking-[-0.02em] md:text-5xl md:leading-[1.1]">
            Stop optimising to clicks. Count completed bookings on your own domain, keep clinic and corporate apart, send a number not a patient, and get the consent and legal review right. Then the ad spend is finally measured against real appointments.
          </p>
        </div>
      </Section>
    </main>
  );
}
