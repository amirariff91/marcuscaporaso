import { readFile } from "fs/promises";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { marked } from "marked";

const REVIEWS_DIR = path.join(process.cwd(), "content-reviews");

export const metadata: Metadata = {
  title: "OSWA Content Review — Batches 1–4",
  description:
    "Editorial and compliance review of the OSWA content drafts, by batch.",
  robots: { index: false, follow: false },
};

type ReviewPage = { slug: string; title: string; verdict: string; note: string };

const BATCH4_PAGES: ReviewPage[] = [
  {
    slug: "surgeons",
    title: "Our Bariatric Surgeons Perth",
    verdict: "Rework",
    note: "Surgeon roster needs confirming; misspelled name, unsubstantiated experience claims, unwritten sections",
  },
  {
    slug: "hospitals-locations",
    title: "Hospitals & Clinic Locations",
    verdict: "Rework",
    note: "Three different hospital pairs in one document; wrong second clinic",
  },
  {
    slug: "gp-referral",
    title: "GP Referral Information",
    verdict: "Rework",
    note: "Invented fax and email, incorrect Medicare position, wrong clinic and hospitals",
  },
];

const BATCH3_PAGES: ReviewPage[] = [
  {
    slug: "gastric-sleeve-cost-perth-round-2",
    title: "Gastric Sleeve Cost Perth",
    verdict: "Rework",
    note: "Cost handling now right; hospitals, surgeon bios and scaffolding remain",
  },
  {
    slug: "weight-loss-surgery-cost-perth-round-2",
    title: "Weight Loss Surgery Cost Perth (hub)",
    verdict: "Rework",
    note: "Cost ranges hard-coded under one undefined label; scaffolding heading shipped",
  },
  {
    slug: "medicare-private-health-cover-round-2",
    title: "Medicare & Private Health Cover",
    verdict: "Rework",
    note: "Blanket MBS item range stated as fact; hospital count and named funds unverified",
  },
  {
    slug: "super-access-weight-loss-surgery-round-2",
    title: "Super Access for Weight Loss Surgery",
    verdict: "Rework",
    note: "Strongest page of the set — coordinator routing and scaffolding to finish",
  },
  {
    slug: "book-consultation-round-2",
    title: "Book a Consultation",
    verdict: "Rework",
    note: "Three contradictory clinic locations in one document; booking URL still open",
  },
];

const BATCH2_PAGES: ReviewPage[] = [
  {
    slug: "gastric-sleeve-cost-perth",
    title: "Gastric Sleeve Cost Perth",
    verdict: "Rework",
    note: "Cost definitions, Medicare + hospital verification, payment-plan drift",
  },
  {
    slug: "weight-loss-surgery-cost-perth",
    title: "Weight Loss Surgery Cost Perth (hub)",
    verdict: "Rework",
    note: "Cost definitions, scope boundary with sleeve-cost page, scaffolding",
  },
  {
    slug: "medicare-private-health-cover",
    title: "Medicare & Private Health Cover",
    verdict: "Rework",
    note: "BMI/MBS eligibility, Medicare-vs-private wording, unsupported figures",
  },
  {
    slug: "super-access-weight-loss-surgery",
    title: "Super Access for Weight Loss Surgery",
    verdict: "Rework",
    note: "Compassionate-release framing, financial boundaries, length cut",
  },
  {
    slug: "book-consultation",
    title: "Book a Consultation",
    verdict: "Rework",
    note: "Location verification, referral/funding wording, padding",
  },
];

const PAGES: ReviewPage[] =
  [
    {
      slug: "gastric-sleeve-perth",
      title: "Gastric Sleeve Perth",
      verdict: "Rework",
      note: "Safety/outcome claims, quoted fee, insurance certainty",
    },
    {
      slug: "gastric-bypass-perth",
      title: "Gastric Bypass Perth",
      verdict: "Rework",
      note: "Medicare item mix-up, fee + placeholder, wrong-procedure CTA",
    },
    {
      slug: "bariatric-surgery-perth",
      title: "Bariatric Surgery Perth (hub)",
      verdict: "Rework",
      note: "Prescription-medicine references, safety claim, hub depth",
    },
    {
      slug: "weight-loss-surgery-perth",
      title: "Weight Loss Surgery Perth",
      verdict: "Rework",
      note: "Lightest fix — eligibility overclaim, outcome claim",
    },
    {
      slug: "am-i-eligible",
      title: "Am I Eligible",
      verdict: "Rework",
      note: "Self-qualifying eligibility language, finance drift",
    },
  ];

function ReviewGrid({ pages }: { pages: ReviewPage[] }) {
  return (
    <div className="mb-10 grid gap-3">
      {pages.map((page) => (
        <Link
          key={page.slug}
          href={`/osw/content-review/${page.slug}`}
          className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-emerald-400/40 hover:bg-white/[0.06]"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="font-semibold text-white group-hover:text-emerald-200">
              {page.title}
            </span>
            <span className="rounded-full bg-amber-400/10 px-2.5 py-0.5 text-xs font-medium text-amber-300">
              {page.verdict}
            </span>
          </div>
          <p className="mt-1 text-sm text-white/60">{page.note}</p>
        </Link>
      ))}
    </div>
  );
}

export default async function ContentReviewIndexPage() {
  const [batch1Md, batch2Md, batch3Md, batch4Md] = await Promise.all([
    readFile(path.join(REVIEWS_DIR, "summary.md"), "utf8"),
    readFile(path.join(REVIEWS_DIR, "summary-batch-2.md"), "utf8"),
    readFile(path.join(REVIEWS_DIR, "summary-batch-3.md"), "utf8"),
    readFile(path.join(REVIEWS_DIR, "summary-batch-4.md"), "utf8"),
  ]);
  const [batch1Html, batch2Html, batch3Html, batch4Html] = await Promise.all([
    marked.parse(batch1Md),
    marked.parse(batch2Md),
    marked.parse(batch3Md),
    marked.parse(batch4Md),
  ]);

  return (
    <main className="min-h-screen bg-[#071112] text-white">
      <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <p className="mb-2 text-sm text-emerald-300">
          OSWA · Content review · Batch 4 · 6 August 2026
        </p>
        <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Batch 4 review — Trust &amp; E-E-A-T pages
        </h1>

        <ReviewGrid pages={BATCH4_PAGES} />

        <article
          className="brief-prose mb-16 max-w-3xl rounded-2xl bg-white p-8 text-slate-900 shadow-2xl md:p-10"
          dangerouslySetInnerHTML={{ __html: batch4Html }}
        />

        <p className="mb-2 text-sm text-emerald-300">
          OSWA · Content review · Batch 3 · 31 July 2026
        </p>
        <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
          Batch 3 review — reworked Costs &amp; Funding pages
        </h2>

        <ReviewGrid pages={BATCH3_PAGES} />

        <article
          className="brief-prose mb-16 max-w-3xl rounded-2xl bg-white p-8 text-slate-900 shadow-2xl md:p-10"
          dangerouslySetInnerHTML={{ __html: batch3Html }}
        />

        <p className="mb-2 text-sm text-emerald-300">
          OSWA · Content review · Batch 2 · 20 July 2026
        </p>
        <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
          Batch 2 review — Costs &amp; Funding pages
        </h2>

        <ReviewGrid pages={BATCH2_PAGES} />

        <article
          className="brief-prose mb-16 max-w-3xl rounded-2xl bg-white p-8 text-slate-900 shadow-2xl md:p-10"
          dangerouslySetInnerHTML={{ __html: batch2Html }}
        />

        <p className="mb-2 text-sm text-emerald-300">
          OSWA · Content review · Batch 1 · 10 July 2026
        </p>
        <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
          Batch 1 review — Core Acquisition pages
        </h2>

        <ReviewGrid pages={PAGES} />

        <article
          className="brief-prose max-w-3xl rounded-2xl bg-white p-8 text-slate-900 shadow-2xl md:p-10"
          dangerouslySetInnerHTML={{ __html: batch1Html }}
        />
      </div>

      <style>{`
        .brief-prose h1 {
          font-size: 1.875rem;
          line-height: 2.25rem;
          font-weight: 700;
          margin: 0 0 1rem;
          color: #0f172a;
        }
        .brief-prose h2 {
          font-size: 1.375rem;
          line-height: 1.85rem;
          font-weight: 700;
          margin: 2rem 0 0.75rem;
          color: #0f172a;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.4rem;
        }
        .brief-prose h3 {
          font-size: 1.125rem;
          line-height: 1.6rem;
          font-weight: 600;
          margin: 1.5rem 0 0.5rem;
          color: #1e293b;
        }
        .brief-prose p {
          margin: 0 0 1rem;
          line-height: 1.7;
          color: #334155;
        }
        .brief-prose ul,
        .brief-prose ol {
          margin: 0 0 1rem;
          padding-left: 1.4rem;
          color: #334155;
        }
        .brief-prose ul { list-style: disc; }
        .brief-prose ol { list-style: decimal; }
        .brief-prose li {
          margin: 0.35rem 0;
          line-height: 1.65;
        }
        .brief-prose strong { font-weight: 700; color: #0f172a; }
        .brief-prose a { color: #0d9488; text-decoration: underline; }
        .brief-prose blockquote {
          border-left: 3px solid #14b8a6;
          padding-left: 1rem;
          margin: 0 0 1rem;
          color: #475569;
          font-style: italic;
        }
        .brief-prose table {
          width: 100%;
          border-collapse: collapse;
          margin: 0 0 1rem;
          font-size: 0.925rem;
        }
        .brief-prose th,
        .brief-prose td {
          border: 1px solid #e2e8f0;
          padding: 0.5rem 0.75rem;
          text-align: left;
        }
        .brief-prose th { background: #f8fafc; font-weight: 600; }
        .brief-prose hr {
          border: 0;
          border-top: 1px solid #e2e8f0;
          margin: 2rem 0;
        }
      `}</style>
    </main>
  );
}
