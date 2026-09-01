import type { Metadata } from "next";
import { ArrowDown, ArrowRight, Check, CircleAlert, LockKeyhole, Search, Share2, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "ErgoEquip SEO Review | GrowthOS",
  description:
    "Private, noindex SEO review of ErgoEquip category pages, site-wide technical findings, and the recommended on-page priority order.",
  alternates: {
    canonical: "https://ergoequip.marcuscaporaso.com/seo",
  },
  robots: {
    index: false,
    follow: false,
  },
};

type Finding = {
  number: string;
  label: string;
  title: string;
  detail: string;
  fix: string;
};

type PriorityRow = {
  rank: string;
  category: string;
  path: string;
  signal: string;
  rationale: string;
  firstMove: string;
};

type CategoryReview = {
  rank: string;
  category: string;
  label: string;
  path: string;
  currentSignal: string;
  before: string[];
  after: string[];
  note: string;
};

const findings: Finding[] = [
  {
    number: "01",
    label: "Schema integrity",
    title: "The category-to-product trail is incomplete",
    detail:
      "There is no BreadcrumbList on the audited category pages. The Product-typed ItemList also points at category-page fragments such as #product_N instead of each product's own /shop/... URL.",
    fix:
      "Add BreadcrumbList, repair every ItemList product URL, and add Product/Offer markup for the highest-value products with real URLs.",
  },
  {
    number: "02",
    label: "Share metadata",
    title: "Social previews are blank",
    detail:
      "The pages have no og:title, og:description, or og:image tags. This is not a ranking lever, but it makes shared category links less useful in WhatsApp, email, and social channels.",
    fix: "Add consistent Open Graph tags in the theme or SEO plugin while the shared category template is being edited.",
  },
  {
    number: "03",
    label: "Visibility",
    title: "Authority is not turning into organic reach",
    detail:
      "The site has roughly 500 referring domains but only about 23 organic keywords and approximately zero organic traffic in this baseline. That gap points first to page signals and intent alignment.",
    fix: "Improve the category pages and their contextual internal links before spending time on another broad link-building push.",
  },
];

const priorityRows: PriorityRow[] = [
  {
    rank: "1",
    category: "Desks",
    path: "/product-category/desks/",
    signal: "sit stand desk · 10,000 @ #20; sit to stand desk · 1,100 @ #20; ergonomic desk · 800 @ #1",
    rationale: "Biggest prize; two high-value terms are already within reach of page one, while the head category term is already winning.",
    firstMove: "Strengthen on-page depth; add BreadcrumbList and Product/Offer schema.",
  },
  {
    rank: "2",
    category: "Footrests",
    path: "/product-category/footrests/",
    signal: "foot rest · ~2,400 @ #28; desk foot rest · 600 on /product-category, not this page",
    rationale: "At #28 (page three) on a ~110-word page — not a near-miss. Needs a full content rewrite AND inbound links, not a content-only tweak.",
    firstMove: "Replace the H1; add a buying guide, heading tree, BreadcrumbList, URL-consolidation note — and build inbound links.",
  },
  {
    rank: "3",
    category: "Keyboards",
    path: "/product-category/keyboards/",
    signal: "ergonomic keyboard · 3,100 with no rank; ergonomic keyboard and mouse · 500 @ #28",
    rationale: "Large greenfield entry. The page has a useful product base but does not own its highest-volume query.",
    firstMove: "De-stuff the title; sharpen the H1; demote product names to H3s; add guide and inbound links.",
  },
  {
    rank: "4",
    category: "Laptop solutions",
    path: "/product-category/laptop-solutions/",
    signal: "laptop holder · not ranking; vertical laptop stand blog · 600 @ #15",
    rationale: "Lowest priority. A useful ranking asset already exists in the blog, so the category can be improved after the larger category wins.",
    firstMove: "Add holder/riser vocabulary, remove the stale COVID H3, and link the category from the blog.",
  },
];

const categoryReviews: CategoryReview[] = [
  {
    rank: "01",
    category: "Desks",
    label: "Biggest prize · newly included",
    path: "/product-category/desks/",
    currentSignal: "sit stand desk — 10,000 volume at #20 · sit to stand desk — 1,100 at #20 · ergonomic desk — 800 at #1",
    before: [
      "The desks category was missing from the prior analysis, even though it contains the largest near-page-one opportunity.",
      "Two high-value sit-stand terms sit at #20; the broader ergonomic desk term already holds #1.",
      "The shared category-template schema problems still limit the product and breadcrumb signals Google can read.",
    ],
    after: [
      "Strengthen on-page depth around sit-stand desk selection and the decisions behind the query.",
      "Add BreadcrumbList and Product/Offer schema, using each product's real /shop/... URL rather than a #product_N fragment.",
      "Use the existing #20 footholds to push the two sit-stand terms onto page one while protecting the #1 result.",
    ],
    note: "Start here: it combines the largest demand with a clear page-one foothold and a result worth protecting.",
  },
  {
    rank: "02",
    category: "Footrests",
    label: "Page-3 rebuild · thin page",
    path: "/product-category/footrests/",
    currentSignal: "foot rest — ~2,400 volume at #28 · desk foot rest — 600 on the shop root, /product-category",
    before: [
      "The page has roughly 110 words of real category copy and no meaningful heading tree.",
      "Its H1 is the question “Which footrest is the best one for me?”, leaving the page without a normal head-term signal.",
      "The desk foot rest query ranks on /product-category rather than this category, splitting intent across URLs.",
    ],
    after: [
      "Use the H1 “Ergonomic Footrests for Under-Desk Comfort” and build H2/H3 sections underneath it.",
      "Add a proper buying guide (~490–690 words) covering angle and height, footrest versus sling or standing, desk clearance, and material or grip; add BreadcrumbList.",
      "Rewrite the title as “Ergonomic Footrests & Adjustable Desk Foot Rests | ErgoEquip” and document the URL-consolidation decision for desk foot rest.",
    ],
    note: "At #28 this is a page-three rebuild, not a content-only near-miss — the earlier “easy win” read came from a mis-stated #19. Fix the page's depth and structure AND build inbound links.",
  },
  {
    rank: "03",
    category: "Keyboards",
    label: "Greenfield entry · high demand",
    path: "/product-category/keyboards/",
    currentSignal: "ergonomic keyboard — 3,100 volume with no rank · ergonomic keyboard and mouse — 500 at #28",
    before: [
      "The title repeats the keyword in “Ergonomic Keyboard | Shop Ergonomic Keyboard & Mouse Solutions”, which stuffs the signal without adding intent.",
      "Product names are used as H2s, so the heading tree reads like a product index rather than a category guide.",
      "Contextual inbound links are missing; the page is mostly reached through navigation and category rails.",
    ],
    after: [
      "Use the title “Ergonomic Keyboards & Split Wireless Keyboards | ErgoEquip” and H1 “Ergonomic Keyboards for More Comfortable Typing”.",
      "Demote product-name H2s to H3s under “Our Ergonomic Keyboard Range”, then add a practical buying guide.",
      "Link in from relevant blog and category pages with the anchor “ergonomic keyboard”; include the mouse and wrist-support paths in the guide.",
    ],
    note: "This is the largest unclaimed query in the set, but it needs clearer topical ownership before it can compete.",
  },
  {
    rank: "04",
    category: "Laptop solutions",
    label: "Lowest priority · vocabulary fix",
    path: "/product-category/laptop-solutions/",
    currentSignal: "laptop holder — not ranking · vertical laptop stand blog — 600 volume at #15",
    before: [
      "The category title is 74 characters and uses laptop-stand vocabulary without ever saying “laptop holder”.",
      "The page has a stale COVID-era refund notice in an H3, which hurts both the heading tree and trust.",
      "The ranking vertical-laptop-stand blog asset is not sending a clear contextual link into the category.",
    ],
    after: [
      "Use “Laptop Stands & Laptop Holders | ErgoEquip” as the concise title and add holder/riser language to the H1 and opening copy.",
      "Delete the stale COVID refund H3 and add a “Laptop Stand vs Laptop Holder” section for the vocabulary gap.",
      "Link the category from the vertical laptop stand post (600 volume, #15) using a clear category anchor; do the shared schema repairs later in the sequence.",
    ],
    note: "Leave this until the desks, footrests, and keyboards pages have captured their more immediate opportunities.",
  },
];

function SectionHeading({ label, title, copy }: { label: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">{label}</p>
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-white [text-wrap:balance] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{copy}</p>
    </div>
  );
}

function FixList({ items, positive }: { items: string[]; positive: boolean }) {
  return (
    <ul className="space-y-3 text-sm leading-7 text-slate-300">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              positive ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-300/10 text-amber-200"
            }`}
          >
            {positive ? <Check size={12} strokeWidth={3} /> : <span className="text-xs">–</span>}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CategoryReviewCard({ review }: { review: CategoryReview }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#0b1a1a] p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">{review.label}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white md:text-3xl">{review.category}</h3>
          <code className="mt-2 block break-all text-xs text-slate-500">{review.path}</code>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/10 text-sm font-semibold text-emerald-200">
          {review.rank}
        </span>
      </div>

      <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Current signal</p>
        <p className="mt-2 text-sm leading-6 text-slate-200">{review.currentSignal}</p>
      </div>

      <div className="mt-7 grid gap-7 sm:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">Before</p>
          <FixList items={review.before} positive={false} />
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">After</p>
          <FixList items={review.after} positive />
        </div>
      </div>

      <p className="mt-8 border-t border-white/10 pt-5 text-sm leading-7 text-slate-400">
        <strong className="text-white">Why this order:</strong> {review.note}
      </p>
    </article>
  );
}

export default function ErgoEquipSeoPage() {
  return (
    <main className="min-h-screen bg-[#071112] text-slate-100">
      <header className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[-18rem] h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 py-5" aria-label="Review information">
            <div className="flex items-center gap-3 text-sm font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-300 text-xs font-extrabold text-[#071112]">EE</span>
              ErgoEquip SEO review
            </div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
              <LockKeyhole size={14} className="text-emerald-300" />
              Private · for client review
            </div>
          </nav>

          <div className="grid gap-12 py-16 md:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] md:items-end md:gap-20 md:py-24">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-emerald-300">GrowthOS · Organic search · 01 September 2026</p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-white [text-wrap:balance] md:text-6xl">
                The category pages already have demand. Now give Google a clearer path to page one.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A focused review of four ErgoEquip category surfaces using corrected Ahrefs AU data. The main lever is on-page: roughly 500 referring domains are not translating into about 23 organic keywords or meaningful organic traffic yet.
              </p>
            </div>

            <aside className="border-t-2 border-emerald-300 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">The recommendation</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em] text-white">Strengthen the clearest demand and nearest wins in sequence.</h2>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                <li className="flex items-start gap-3"><Target size={17} className="mt-1 shrink-0 text-emerald-300" />Desks first: largest prize and two #20 footholds.</li>
                <li className="flex items-start gap-3"><Check size={17} className="mt-1 shrink-0 text-emerald-300" />Footrests next: a thin #28 page needing a full rewrite and inbound links.</li>
                <li className="flex items-start gap-3"><Search size={17} className="mt-1 shrink-0 text-emerald-300" />Keyboards, then laptop solutions, after the shared repairs.</li>
              </ul>
            </aside>
          </div>

          <a href="#findings" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-emerald-300">
            Read the site-wide findings <ArrowDown size={16} />
          </a>
        </div>
      </header>

      <section className="border-b border-white/10 py-10 md:py-12" aria-label="Review snapshot">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 md:grid-cols-4 md:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-medium text-slate-400">Priority pages</p>
            <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">4</p>
            <p className="mt-2 text-xs leading-5 text-slate-500">Desks, footrests, keyboards, laptop solutions</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-medium text-slate-400">Largest query</p>
            <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">10,000</p>
            <p className="mt-2 text-xs leading-5 text-slate-500">“sit stand desk” volume · currently #20</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-medium text-slate-400">Already winning</p>
            <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">#1</p>
            <p className="mt-2 text-xs leading-5 text-slate-500">“ergonomic desk” · 800 volume</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-medium text-slate-400">The gap</p>
            <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">~500 → ~23</p>
            <p className="mt-2 text-xs leading-5 text-slate-500">Referring domains versus organic keywords</p>
          </div>
        </div>
      </section>

      <section id="findings" className="border-b border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            label="01 · Site-wide findings"
            title="Fix the shared template once, then let the category work compound."
            copy="These are the three cross-page themes behind the priority order. The first two are straightforward technical repairs; the third explains why on-page work is the lever to pull before more authority-building."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {findings.map((finding) => (
              <article key={finding.number} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/10 text-xs font-semibold text-emerald-200">{finding.number}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{finding.label}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight tracking-[-0.025em] text-white">{finding.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{finding.detail}</p>
                <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-7 text-slate-400">
                  <strong className="text-emerald-200">Fix:</strong> {finding.fix}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex max-w-4xl items-start gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.07] p-5 text-sm leading-7 text-emerald-50">
            <CircleAlert size={19} className="mt-1 shrink-0 text-emerald-300" />
            <p><strong>Reading the signal:</strong> on-page structure is the first lever to test here — not a proven sole constraint (footrests at #28 will also need inbound links). Repair the page entity, heading, product URL, and internal-link signals first; then remeasure rankings and traffic before broadening the brief.</p>
          </div>
        </div>
      </section>

      <section id="priority" className="border-b border-white/10 bg-white/[0.015] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            label="02 · Corrected priority table"
            title="Four pages, one deliberate order of attack."
            copy="All keyword volumes and positions below use the corrected Ahrefs AU snapshot from 01 September 2026. Desks is explicitly included; the earlier baseline omitted the largest prize."
          />

          <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[1060px] border-collapse text-left text-sm">
              <caption className="caption-top border-b border-white/10 bg-[#0b1a1a] px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Corrected priority order · Ahrefs AU · 01 September 2026
              </caption>
              <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.12em] text-slate-400">
                <tr>
                  <th scope="col" className="w-16 px-5 py-4">#</th>
                  <th scope="col" className="px-5 py-4">Category</th>
                  <th scope="col" className="px-5 py-4">Corrected demand signal</th>
                  <th scope="col" className="px-5 py-4">Why this order</th>
                  <th scope="col" className="px-5 py-4">First move</th>
                </tr>
              </thead>
              <tbody>
                {priorityRows.map((row) => (
                  <tr key={row.category} className="border-t border-white/10 align-top">
                    <td className="px-5 py-5 text-lg font-semibold text-emerald-300">{row.rank}</td>
                    <td className="px-5 py-5">
                      <p className="font-semibold text-white">{row.category}</p>
                      <code className="mt-2 block max-w-[15rem] break-all text-xs leading-5 text-slate-500">{row.path}</code>
                    </td>
                    <td className="max-w-[22rem] px-5 py-5 leading-7 text-slate-300">{row.signal}</td>
                    <td className="max-w-[22rem] px-5 py-5 leading-7 text-slate-400">{row.rationale}</td>
                    <td className="max-w-[22rem] px-5 py-5 leading-7 text-slate-300">{row.firstMove}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="fixes" className="border-b border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            label="03 · Category before / after"
            title="Make each page properly answer the query it targets."
            copy="The cards below translate the data into page-level work Marcus can review quickly: what the search result sees today, and the concrete changes that give each category a stronger chance to move."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {categoryReviews.map((review) => (
              <CategoryReviewCard key={review.path} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section id="next" className="bg-white/[0.015] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            label="04 · Recommended sequence"
            title="Repair the foundation, ship the nearest wins, then remeasure."
            copy="The review is intentionally narrow. It does not ask for a new design system or a link campaign; it asks for a clean category template and four focused content passes."
          />

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            <div className="bg-[#0b1a1a] p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">01 · Shared repair</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Schema and share layer</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Repair the ItemList product URLs, add BreadcrumbList, add the selected Product/Offer blocks, and add Open Graph tags in the shared template.</p>
            </div>
            <div className="bg-[#0b1a1a] p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">02 · Content wins</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Desks, then footrests</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Use the desk page's #20 footholds, then rebuild the #28 footrests page into a complete, useful buying page with inbound links and a clear URL signal.</p>
            </div>
            <div className="bg-[#0b1a1a] p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">03 · Expand deliberately</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Keyboards, then laptop solutions</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Claim the keyboard greenfield with better topical ownership, then use the ranking blog asset to strengthen laptop solutions' holder vocabulary.</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <Share2 size={17} className="text-emerald-300" />
            <span>Review status: prepared for client discussion · no live site changes are made by this page.</span>
            <ArrowRight size={16} className="text-emerald-300" />
            <span>Remeasure rankings and organic traffic after the first content pass.</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#071112] px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <span>GrowthOS · ErgoEquip SEO review</span>
          <span className="flex items-center gap-2"><LockKeyhole size={13} /> Private client review · noindex, nofollow</span>
        </div>
      </footer>
    </main>
  );
}
