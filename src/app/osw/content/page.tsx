import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OSWA Rebuild: Content Pages",
  alternates: { canonical: "https://osw.marcuscaporaso.com/content" },
  robots: { index: false, follow: false },
};

const pages = [
  { group: "Core acquisition", slug: "gastric-sleeve-perth", title: "Gastric Sleeve Perth", priority: "P0" },
  { group: "Core acquisition", slug: "gastric-bypass-perth", title: "Gastric Bypass Perth", priority: "P0" },
  { group: "Core acquisition", slug: "bariatric-surgery-perth", title: "Bariatric Surgery Perth", priority: "P0" },
  { group: "Core acquisition", slug: "weight-loss-surgery-perth", title: "Weight Loss Surgery Perth", priority: "P0" },
  { group: "Core acquisition", slug: "mini-gastric-bypass", title: "Mini Gastric Bypass Perth", priority: "P1" },
  { group: "Core acquisition", slug: "gastric-band", title: "Gastric Band Surgery Perth", priority: "P1" },
  { group: "Core acquisition", slug: "revision-bariatric-surgery", title: "Revision Bariatric Surgery", priority: "P1" },
  { group: "Core acquisition", slug: "weight-loss-medication", title: "Weight Loss Medication Perth", priority: "P1" },
  { group: "Core acquisition", slug: "non-surgical-weight-loss", title: "Non-Surgical Weight Loss Perth", priority: "P1" },
  { group: "Core acquisition", slug: "bariatric-dietitian-perth", title: "Bariatric Dietitian Perth", priority: "P1" },
  { group: "Money pages", slug: "gastric-sleeve-cost-perth", title: "Gastric Sleeve Cost Perth", priority: "P0" },
  { group: "Money pages", slug: "weight-loss-surgery-cost-perth", title: "Weight Loss Surgery Cost Perth", priority: "P0" },
  { group: "Money pages", slug: "medicare-private-health-cover", title: "Medicare & Private Health Cover", priority: "P0" },
  { group: "Money pages", slug: "super-access-weight-loss-surgery", title: "Super Access for Weight Loss Surgery", priority: "P0" },
  { group: "Money pages", slug: "payment-plans-bariatric-surgery", title: "Weight Loss Surgery Payment Plans", priority: "P1" },
  { group: "Money pages", slug: "am-i-eligible", title: "Am I Eligible for Weight Loss Surgery?", priority: "P0" },
  { group: "Money pages", slug: "book-consultation", title: "Book a Consultation", priority: "P0" },
  { group: "Trust & E-E-A-T", slug: "surgeons", title: "Our Bariatric Surgeons Perth", priority: "P0" },
  { group: "Trust & E-E-A-T", slug: "hospitals-locations", title: "Hospitals & Clinic Locations", priority: "P0" },
  { group: "Trust & E-E-A-T", slug: "gp-referral", title: "GP Referral Information", priority: "P0" },
  { group: "Trust & E-E-A-T", slug: "faqs", title: "Weight Loss Surgery FAQs Perth", priority: "P1" },
];

const groups = Array.from(new Set(pages.map((p) => p.group)));
const priorityColors: Record<string, string> = {
  P0: "bg-emerald-400/20 text-emerald-300 border-emerald-400/30",
  P1: "bg-blue-400/10 text-blue-300 border-blue-400/20",
};

export default function OswContentIndexPage() {
  return (
    <main className="min-h-screen bg-[#071112] text-slate-100">
      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-emerald-300">
            Content library
          </p>
          <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            OSWA rebuild, all content pages
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            21 content pages built on the service page template. Each page targets a specific keyword intent and follows AHPRA medical advertising guidelines.
          </p>
        </div>
      </section>
      {groups.map((group) => (
        <section key={group} className="border-t border-white/10 py-8">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{group}</h2>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {pages
                .filter((p) => p.group === group)
                .map((page) => (
                  <Link
                    key={page.slug}
                    href={`/osw/content/${page.slug}`}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 transition-colors hover:border-emerald-400/30 hover:bg-white/[0.04]"
                  >
                    <p className="text-sm font-medium text-white">{page.title}</p>
                    <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-semibold ${priorityColors[page.priority]}`}>
                      {page.priority}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
