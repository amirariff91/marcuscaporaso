import Link from "next/link";

export type FAQ = { question: string; answer: string };
export type Surgeon = { name: string; credentials: string; specialty: string };
export type Step = { title: string; description: string };
export type AlliedHealthMember = { role: string; name?: string; credentials?: string; detail: string };

export interface OswPageData {
  // Meta
  slug: string;
  pageTitle: string;
  keyword: string;
  metaDescription: string;

  // Hero
  heroHeadline: string;
  heroSubheadline: string;

  // Stats (Section 02)
  stats?: Array<{ label: string; value: string; note?: string }>;

  // What is it (Section 03)
  whatIsTitle: string;
  whatIsParagraphs: string[];
  comparisonNote?: string;

  // Eligibility (Section 04)
  eligibilityBmi?: string;
  eligibilityNotes: string[];

  // How it works (Section 05)
  howItWorksSteps: Step[];

  // Benefits (Section 06)
  benefitsTitle: string;
  benefits: string[];

  // Risks (Section 07)
  risksTitle: string;
  risksParagraph: string;
  risksList: string[];

  // Cost (Section 08)
  costParagraph: string;

  // Team (Section 09)
  surgeons: Surgeon[];

  // Allied-health team (Section 09b, optional) — e.g. dietitians + exercise physiologists
  alliedHealth?: {
    title: string;
    intro?: string;
    members: AlliedHealthMember[];
    note?: string;
  };

  // Patient outcomes (Section 10)
  outcomesNote: string;

  // FAQs (Section 11)
  faqs: FAQ[];

  // Conversion (Section 12)
  conversionHeadline: string;
}

function StatCard({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
      <p className="text-sm font-medium text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">{value}</p>
      {note && <p className="mt-2.5 text-xs leading-5 text-slate-500">{note}</p>}
    </div>
  );
}

function SectionTitle({ title, accent }: { title: string; accent?: string }) {
  return (
    <div className="mb-6">
      {accent && (
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-emerald-400/50" />
          <span className="text-sm font-medium text-emerald-300">{accent}</span>
        </div>
      )}
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white [text-wrap:balance] md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function CTABlock({ headline }: { headline: string }) {
  return (
    <section className="border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="rounded-3xl border border-emerald-300/25 bg-emerald-300/[0.08] p-8 md:p-12">
          <p className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-white [text-wrap:balance] md:text-3xl lg:text-4xl">
            {headline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-emerald-300"
            >
              Book a consultation
            </Link>
            <Link
              href="/am-i-eligible"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/[0.06]"
            >
              Check my eligibility
            </Link>
            <Link
              href="/gastric-sleeve-cost-perth"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-slate-300 transition-colors hover:border-white/20 hover:text-white"
            >
              What will it cost?
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Or call us on{" "}
            <a href="tel:0893320066" className="font-medium text-white underline underline-offset-2">
              (08) 9332 0066
            </a>{" "}
            Our team is here to help you understand your options.
          </p>
        </div>
      </div>
    </section>
  );
}

export function OswContentPage({ data }: { data: OswPageData }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: data.pageTitle,
        description: data.metaDescription,
        about: { "@type": "MedicalBusiness", name: "Obesity Surgery WA" },
      },
      ...(data.faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: data.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ]
        : []),
    ],
  };
  return (
    <main className="min-h-screen bg-[#071112] text-slate-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-emerald-300">
            Obesity Surgery WA, Perth
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-white [text-wrap:balance] md:text-6xl">
            {data.heroHeadline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{data.heroSubheadline}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-emerald-300"
            >
              Book a consultation
            </Link>
            <Link
              href="/am-i-eligible"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/[0.06]"
            >
              Am I eligible?
            </Link>
            <Link
              href="/gastric-sleeve-cost-perth"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-slate-400 transition-colors hover:border-white/20 hover:text-white"
            >
              What will it cost?
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-5 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              FRACS certified bariatric surgeons
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              St John of God Murdoch & Subiaco
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Perth-based aftercare team
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      {data.stats && data.stats.length > 0 && (
        <section className="border-b border-white/10 py-10 md:py-12">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className={`grid gap-4 grid-cols-2 ${data.stats.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"}`}>
              {data.stats.map((s) => (
                <StatCard key={s.label} label={s.label} value={s.value} note={s.note} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What is it */}
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionTitle title={data.whatIsTitle} />
          <div className="space-y-5 text-base leading-8 text-slate-300">
            {data.whatIsParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {data.comparisonNote && (
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-slate-400">
              {data.comparisonNote}
            </div>
          )}
        </div>
      </section>

      {/* Eligibility */}
      <section className="border-t border-white/10 bg-white/[0.015] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionTitle title="Who is this suitable for?" accent="Eligibility" />
          <div className="text-base leading-8 text-slate-300">
            {data.eligibilityBmi && (
              <div className="mb-7 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.08] px-5 py-4">
                <p className="text-sm font-medium text-emerald-200">{data.eligibilityBmi}</p>
              </div>
            )}
            <ul className="space-y-3">
              {data.eligibilityNotes.map((note, i) => (
                <li key={i} className="flex gap-3.5 text-sm">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  {note}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Link
                href="/am-i-eligible"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.06]"
              >
                Check my eligibility
                <span className="text-emerald-400">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionTitle title="How it works" />
          <div className="mt-2 space-y-6">
            {data.howItWorksSteps.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-sm font-semibold text-emerald-300">
                  {i + 1}
                </div>
                <div className="pt-1.5">
                  <p className="font-semibold text-white">{step.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allied-health team (optional) */}
      {data.alliedHealth && (
        <section className="border-t border-white/10 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <SectionTitle title={data.alliedHealth.title} accent="Allied health" />
            {data.alliedHealth.intro && (
              <p className="mb-8 max-w-3xl text-base leading-8 text-slate-300">{data.alliedHealth.intro}</p>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              {data.alliedHealth.members.map((m) => (
                <div key={`${m.role}-${m.name ?? ""}`} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
                  <p className="text-sm font-semibold text-white">{m.name ?? m.role}</p>
                  <p className="mt-0.5 text-xs font-medium text-emerald-300">
                    {[m.name ? m.role : null, m.credentials].filter(Boolean).join(" · ")}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{m.detail}</p>
                </div>
              ))}
            </div>
            {data.alliedHealth.note && (
              <p className="mt-6 max-w-3xl text-xs leading-6 text-slate-500">{data.alliedHealth.note}</p>
            )}
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="border-t border-white/10 bg-white/[0.015] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionTitle title={data.benefitsTitle} />
          <ul className="space-y-4 text-base leading-8 text-slate-300">
            {data.benefits.map((benefit, i) => (
              <li key={i} className="flex gap-3.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span className="text-sm leading-7">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Risks */}
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionTitle title={data.risksTitle} accent="Risks and what to expect" />
          <div className="text-base leading-8 text-slate-300">
            <p className="mb-6">{data.risksParagraph}</p>
            <ul className="space-y-3">
              {data.risksList.map((risk, i) => (
                <li key={i} className="flex gap-3.5 text-sm">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  {risk}
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-6 text-slate-500">
              All surgical procedures carry risks. Your surgeon will discuss your individual risk profile at your assessment consultation.
            </div>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="border-t border-white/10 bg-white/[0.015] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionTitle title="Understanding the costs" />
          <p className="mb-7 text-base leading-8 text-slate-300">{data.costParagraph}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/gastric-sleeve-cost-perth"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.06]"
            >
              View cost guide <span className="text-emerald-400">→</span>
            </Link>
            <Link
              href="/medicare-private-health-cover"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-slate-400 transition-colors hover:border-white/20 hover:text-white"
            >
              Medicare & private health
            </Link>
            <Link
              href="/super-access-weight-loss-surgery"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-slate-400 transition-colors hover:border-white/20 hover:text-white"
            >
              Using your super
            </Link>
          </div>
        </div>
      </section>

      {/* Surgeons */}
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionTitle title="The surgeons who perform this procedure" accent="Our team" />
          <div className="mt-2 grid gap-4 sm:grid-cols-2">
            {data.surgeons.map((surgeon) => (
              <div key={surgeon.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-sm font-semibold text-emerald-300">
                  {surgeon.name.split(" ").pop()?.charAt(0)}
                </div>
                <p className="font-semibold text-white">{surgeon.name}</p>
                <p className="mt-1 text-xs font-medium text-emerald-300">{surgeon.credentials}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{surgeon.specialty}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/surgeons"
              className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              Meet all our surgeons <span className="text-emerald-400">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-t border-white/10 bg-white/[0.015] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionTitle title="What patients have achieved" />
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8">
            <p className="text-sm leading-8 text-slate-300">{data.outcomesNote}</p>
          </div>
          <p className="mt-5 text-xs leading-6 text-slate-600">
            Outcomes vary between individuals. Weight loss results depend on adherence to dietary and lifestyle recommendations, individual health factors, and procedure type. No specific outcome can be guaranteed.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionTitle title="Common questions" />
          <div className="mt-2 divide-y divide-white/[0.07]">
            {data.faqs.map((faq, i) => (
              <details
                key={i}
                className="group py-5"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="text-sm font-medium leading-6 text-white">{faq.question}</span>
                  <span className="mt-0.5 shrink-0 text-emerald-400 transition-transform group-open:rotate-45">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion block */}
      <CTABlock headline={data.conversionHeadline} />

      {/* GP referral strip */}
      <section className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p className="text-sm text-slate-400">
            Are you a GP or health professional referring a patient?
          </p>
          <Link
            href="/gp-referral"
            className="shrink-0 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400 transition-colors hover:border-white/20 hover:text-white"
          >
            GP referral information →
          </Link>
        </div>
      </section>
    </main>
  );
}
