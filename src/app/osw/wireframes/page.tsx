import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OSW Rebuild — Wireframes, Templates & UX Flows",
  description: "Page templates, homepage wireframe, and contact/booking flow UX for the Obesity Surgery WA rebuild.",
  alternates: { canonical: "https://osw.marcuscaporaso.com/wireframes" },
  robots: { index: false, follow: false },
};

function WireBlock({ label, note, highlight }: { label: string; note?: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border px-4 py-3 ${highlight ? "border-emerald-400/40 bg-emerald-400/10" : "border-white/10 bg-white/[0.03]"}`}>
      <p className={`text-sm font-medium ${highlight ? "text-emerald-200" : "text-white"}`}>{label}</p>
      {note && <p className="mt-1 text-xs leading-5 text-slate-500">{note}</p>}
    </div>
  );
}

function SectionLabel({ number, title, note }: { number: string; title: string; note: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
        <span className="text-xs font-semibold text-emerald-300">{number}</span>
      </div>
      <div>
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="mt-0.5 text-xs leading-5 text-slate-500">{note}</p>
      </div>
    </div>
  );
}

export default function OswWireframesPage() {
  return (
    <main className="min-h-screen bg-[#071112] text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-emerald-300">
            Templates & UX structure
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
            Wireframes, page templates, and booking flow.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Three design artefacts. Every content writer, designer, and developer uses the same templates so the rebuild ships consistently.
          </p>
        </div>
      </section>

      {/* Service page template */}
      <section className="border-t border-white/10 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">Template 01 of 03</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
            Service & procedure page template
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Used for: Gastric Sleeve, Gastric Bypass, Mini Bypass, Gastric Band, Revision Surgery, Weight Loss Medication, Non-Surgical, Bariatric Dietitian.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "HERO",
                note: "H1: [Procedure] Perth. 1–2 sentence patient benefit. 3 CTAs: Am I eligible? / What will it cost? / Book consultation. Trust bar: surgeon count, hospital logos, years.",
              },
              {
                number: "02",
                title: "QUICK STATS",
                note: "4 cards: Expected excess weight loss %, procedure time, hospital stay, recovery time. Scannable. Evidence-linked.",
              },
              {
                number: "03",
                title: "WHAT IS [PROCEDURE]?",
                note: "300–400 words plain language. Who it's designed for. Comparison callout to other options.",
              },
              {
                number: "04",
                title: "ELIGIBILITY",
                note: "BMI tiers (27+, 30+, 35+). Comorbidity triggers. CTA → /am-i-eligible.",
              },
              {
                number: "05",
                title: "HOW IT WORKS",
                note: "Step-by-step timeline: Referral → Orientation → Assessment → Surgery → Recovery → Follow-up.",
              },
              {
                number: "06",
                title: "BENEFITS & OUTCOMES",
                note: "Evidence-based weight loss data. Comorbidity resolution rates. QoL improvements. Cite sources.",
              },
              {
                number: "07",
                title: "RISKS & WHAT TO EXPECT",
                note: "Procedure-specific honest risks. Recovery reality. Long-term dietary requirements. AHPRA-compliant framing.",
              },
              {
                number: "08",
                title: "COST SECTION",
                note: "Indication of range only. Medicare / private health callout. Link to dedicated cost page. No specific dollar amounts that could become outdated.",
              },
              {
                number: "09",
                title: "OUR TEAM",
                note: "Surgeon photo + name + FRACS/credentials. Number of procedures performed. Dietitian support.",
              },
              {
                number: "10",
                title: "PATIENT OUTCOMES",
                note: "De-identified outcome stats or case summaries. AHPRA testimonial rules: no specific promises, no before/after comparisons in isolation.",
              },
              {
                number: "11",
                title: "FAQs",
                note: "6–8 questions specific to this procedure. FAQ JSON-LD schema on every page. Answers written for AI Overviews (concise, source-like).",
              },
              {
                number: "12",
                title: "CONVERSION BLOCK",
                note: "3-CTA row: Am I eligible? / What will it cost? / Book consultation. Phone number. GP referral link.",
              },
            ].map((s) => (
              <div key={s.number} className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
                <SectionLabel number={s.number} title={s.title} note={s.note} />
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-amber-300/20 bg-amber-300/10 p-5">
            <p className="text-sm font-semibold text-amber-200">AHPRA medical advertising rules to apply on every page</p>
            <ul className="mt-3 space-y-1.5 text-xs leading-6 text-amber-100/80">
              <li>• Do not use the word "guarantee" in relation to outcomes</li>
              <li>• Testimonials and before/after photos require specific AHPRA formatting and cannot imply typical results</li>
              <li>• Do not state or imply that the service is the "best" or "cheapest" without substantiation</li>
              <li>• Cost references must not be misleading — indicate ranges only, with clear caveats that costs vary</li>
              <li>• Anything claiming to diagnose or treat a medical condition requires evidence and appropriate qualifications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Homepage wireframe */}
      <section className="border-t border-white/10 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">Template 02 of 03</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
            Homepage wireframe
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
            The homepage has one job: route each patient type to the right intent path as fast as possible.
          </p>
          <div className="mt-8 flex flex-col gap-3 md:max-w-xl">
            <WireBlock label="STICKY NAV" note="Logo | Procedures ▼ | Costs | Our Team | Locations | (08) 9332 0066 | [Book Consult CTA]" />
            <WireBlock
              label="HERO"
              note="H1: Perth's Bariatric Surgery Specialists. Subhead: [Surgeons, hospital affiliations, years]. CTAs: Am I eligible? / What will it cost? / Book a consultation. Trust badges: RACS fellow, St John of God, X procedures."
              highlight
            />
            <WireBlock label="SOCIAL PROOF STRIP" note="★★★★★ [X reviews] | [patient count] procedures | [X] years" />
            <WireBlock label="PROCEDURE CARDS (4–6)" note="Gastric Sleeve | Bypass | Mini Bypass | Band | Medication | Non-surgical. Each: key stat + Learn more link." />
            <WireBlock
              label="COST / FINANCE PATHWAY"
              note="'Wondering what it costs?' → grid of links: Gastric sleeve cost / Medicare / Super access / Payment plans / No-gap"
              highlight
            />
            <WireBlock label="WHY OBESITY SURGERY WA" note="3 columns: Surgeon credentials / Hospital affiliations / Aftercare team" />
            <WireBlock label="SURGEON PROFILES" note="Photo + name + FRACS qualifications + specialties. Dr Chandraratna, Dr Watson, Dr Barry, others." />
            <WireBlock label="PATIENT JOURNEY TIMELINE" note="Referral → Orientation → Assessment → Surgery → Recovery → Aftercare" />
            <WireBlock label="GP / REFERRER SECTION" note="'For GPs and referring doctors' — fast pathway + referral form link. Separate CTA track." />
            <WireBlock label="FAQ ACCORDION (8–10)" note="Cost, eligibility, Medicare, recovery, team, location. FAQ schema on all answers." />
            <WireBlock label="LOCATION MAP + DETAILS" note="Booragoon / Murdoch / Subiaco / Mandurah. Address + phone + hospital affiliations." />
            <WireBlock label="BOOKING FORM EMBED" note="Simple: procedure interest + contact details + surgeon preference." highlight />
            <WireBlock label="FOOTER" note="Full nav | RACS / hospital accreditations | Phone | Legal disclaimer | AHPRA registration numbers" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { label: "Primary CTA", value: "Book a consultation", note: "Persistent across sticky nav + hero + conversion block" },
              { label: "Secondary CTA", value: "Am I eligible?", note: "Activates anxious early-research patients before they're ready to book" },
              { label: "Tertiary CTA", value: "What will it cost?", note: "Routes cost-intent patients to the finance pathway instead of losing them" },
            ].map(({ label, value, note }) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
                <p className="mt-3 text-lg font-semibold text-white">{value}</p>
                <p className="mt-2 text-xs leading-6 text-slate-400">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / booking flow */}
      <section className="border-t border-white/10 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">Template 03 of 03</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
            Contact & booking flow UX
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Four distinct entry tracks. Each one routes to a conversion path that matches the patient's intent state, not a generic contact form.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                track: "Track A",
                label: "Am I eligible?",
                color: "border-emerald-400/30 bg-emerald-400/10",
                labelColor: "text-emerald-300",
                steps: ["BMI calculator (weight + height)", "Show eligibility tiers (27+, 30+, 35+)", "If eligible → Book consultation CTA", "If unsure → Download eligibility guide lead magnet"],
              },
              {
                track: "Track B",
                label: "What will it cost?",
                color: "border-amber-400/30 bg-amber-400/10",
                labelColor: "text-amber-300",
                steps: ["Procedure selector (Sleeve / Bypass / Band / Medication)", "Route to relevant cost page", "Show Medicare / private health / super options", "Finance options → Book consultation CTA"],
              },
              {
                track: "Track C",
                label: "Book a consultation",
                color: "border-blue-400/30 bg-blue-400/10",
                labelColor: "text-blue-300",
                steps: [
                  "Step 1: What brings you here? (Procedure interest or just exploring)",
                  "Step 2: Your details (Name, email, phone, suburb)",
                  "Step 3: Preferences (Surgeon, location, time — all optional)",
                  "Confirmation: Thank you + what happens next + email follow-up",
                ],
              },
              {
                track: "Track D",
                label: "Refer a patient (GP)",
                color: "border-purple-400/30 bg-purple-400/10",
                labelColor: "text-purple-300",
                steps: ["Patient name, DOB, referral reason", "GP name and practice", "Preferred surgeon (or no preference)", "Confirmation + standard referral acknowledgement"],
              },
            ].map(({ track, label, color, labelColor, steps }) => (
              <div key={track} className={`rounded-3xl border p-5 ${color}`}>
                <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${labelColor}`}>{track}</p>
                <p className="mt-2 text-lg font-semibold text-white">{label}</p>
                <ol className="mt-4 space-y-2">
                  {steps.map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm text-slate-300">
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${labelColor} bg-black/20`}>
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-sm font-semibold text-white">Form design principles</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-400 md:grid-cols-3">
              <div>
                <p className="font-medium text-white">Max 3 required fields in step 1</p>
                <p className="mt-1 text-xs leading-6">Every additional required field reduces completion rate. Collect more in step 2 after the patient has committed.</p>
              </div>
              <div>
                <p className="font-medium text-white">Phone number persistent on mobile</p>
                <p className="mt-1 text-xs leading-6">Sticky footer on mobile with (08) 9332 0066. Many patients prefer calling, especially older demographics.</p>
              </div>
              <div>
                <p className="font-medium text-white">Intent-matched CTA labels</p>
                <p className="mt-1 text-xs leading-6">Never "Contact us" or "Submit". Labels like "Check my eligibility", "See cost options", "Book my consultation" match the patient's current intent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Next steps</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-emerald-50/90">
              These three templates are the shared contract between content, design, and development.
              Every procedure page uses Template 01. The homepage uses Template 02 as the wireframe.
              All CTAs route through the flows in Template 03.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/osw/sitemap" className="rounded-full bg-white/[0.08] px-4 py-2 text-sm text-white transition-colors hover:bg-white/[0.12]">
                View full sitemap →
              </a>
              <a href="/osw/content" className="rounded-full bg-emerald-400/20 px-4 py-2 text-sm text-emerald-300 transition-colors hover:bg-emerald-400/30">
                See content pages →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
