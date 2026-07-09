import { readFile } from "fs/promises";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { marked } from "marked";

const REVIEWS_DIR = path.join(process.cwd(), "content-reviews");

export const metadata: Metadata = {
  title: "OSWA Content Review — Batch 1 (Core Acquisition)",
  description:
    "Editorial and compliance review of the first batch of OSWA content drafts.",
  robots: { index: false, follow: false },
};

const PAGES: { slug: string; title: string; verdict: string; note: string }[] =
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

export default async function ContentReviewIndexPage() {
  const markdown = await readFile(
    path.join(REVIEWS_DIR, "summary.md"),
    "utf8",
  );
  const html = await marked.parse(markdown);

  return (
    <main className="min-h-screen bg-[#071112] text-white">
      <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <p className="mb-2 text-sm text-emerald-300">
          OSWA · Content review · 10 July 2026
        </p>
        <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Batch 1 review — Core Acquisition pages
        </h1>

        <div className="mb-10 grid gap-3">
          {PAGES.map((page) => (
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

        <article
          className="brief-prose max-w-3xl rounded-2xl bg-white p-8 text-slate-900 shadow-2xl md:p-10"
          dangerouslySetInnerHTML={{ __html: html }}
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
