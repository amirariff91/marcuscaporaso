import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OSWA Content Briefs",
  robots: { index: false, follow: false },
};

const groups: { title: string; slugs: string[] }[] = [
  {
    title: "Core acquisition",
    slugs: [
      "gastric-sleeve-perth",
      "gastric-bypass-perth",
      "bariatric-surgery-perth",
      "weight-loss-surgery-perth",
      "mini-gastric-bypass",
      "gastric-band",
      "revision-bariatric-surgery",
      "weight-loss-medication",
      "non-surgical-weight-loss",
      "bariatric-dietitian-perth",
    ],
  },
  {
    title: "Money pages",
    slugs: [
      "gastric-sleeve-cost-perth",
      "weight-loss-surgery-cost-perth",
      "medicare-private-health-cover",
      "super-access-weight-loss-surgery",
      "payment-plans-bariatric-surgery",
      "am-i-eligible",
    ],
  },
  {
    title: "Trust & E-E-A-T",
    slugs: ["surgeons", "book-consultation"],
  },
];

function titleCase(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function ContentBriefsIndexPage() {
  return (
    <main className="min-h-screen bg-[#071112] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <header className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
            OSWA
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Content Briefs
          </h1>
          <p className="mt-3 max-w-2xl text-slate-400">
            All 18 content briefs, grouped by intent. Each card opens a
            shareable brief.
          </p>
        </header>

        <div className="space-y-12">
          {groups.map((group) => (
            <section key={group.title}>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                {group.title}
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.slugs.map((slug) => (
                  <Link
                    key={slug}
                    href={`/osw/content-briefs/${slug}`}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-emerald-400/40 hover:bg-white/[0.06]"
                  >
                    <span className="block text-base font-medium text-white">
                      {titleCase(slug)}
                    </span>
                    <span className="mt-2 block text-xs text-slate-500 transition-colors group-hover:text-emerald-300">
                      {slug}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
