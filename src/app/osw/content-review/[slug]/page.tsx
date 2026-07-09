import { readFile, readdir } from "fs/promises";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";

const REVIEWS_DIR = path.join(process.cwd(), "content-reviews");

function titleCase(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

async function readReview(slug: string): Promise<string | null> {
  try {
    return await readFile(path.join(REVIEWS_DIR, `${slug}.md`), "utf8");
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const files = await readdir(REVIEWS_DIR);
  return files
    .filter((file) => file.endsWith(".md") && file !== "summary.md")
    .map((file) => ({ slug: file.replace(/\.md$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${titleCase(slug)} — OSWA Content Review`,
    robots: { index: false, follow: false },
  };
}

export default async function ContentReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "summary") {
    notFound();
  }
  const markdown = await readReview(slug);

  if (markdown === null) {
    notFound();
  }

  const html = await marked.parse(markdown);

  return (
    <main className="min-h-screen bg-[#071112] text-white">
      <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <Link
          href="/osw/content-review"
          className="mb-6 inline-flex items-center gap-1 text-sm text-emerald-300 transition-colors hover:text-emerald-200"
        >
          ← Back to review summary
        </Link>

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
        .brief-prose code {
          background: #f1f5f9;
          padding: 0.15rem 0.4rem;
          border-radius: 0.3rem;
          font-size: 0.875em;
        }
        .brief-prose pre {
          background: #0f172a;
          color: #e2e8f0;
          padding: 1rem;
          border-radius: 0.6rem;
          overflow-x: auto;
          margin: 0 0 1rem;
        }
        .brief-prose pre code { background: transparent; padding: 0; }
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
