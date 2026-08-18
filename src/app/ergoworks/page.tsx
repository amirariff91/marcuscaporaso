import type { Metadata } from "next";
import { ArrowRight, LockKeyhole } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { APEX_URL } from "@/lib/site";

/*
 * THESIS: A public signpost should orient and route, not summarise the engagement.
 * OWN-WORLD: GrowthOS light editorial — warm white, charcoal, emerald, ruled text.
 * STORY: The visitor sees the four pieces of this engagement and which of them they can open.
 * FIRST VIEWPORT: Existing site nav above one restrained heading and the route to the prototype.
 * FORM: Read-first single-column index, chosen for a phone opened from a shared link.
 *
 * LINKS: every href uses the canonical /ergoworks prefix, which is correct on the apex
 * AND on ergoworks.marcuscaporaso.com (the proxy passes prefixed paths through untouched).
 * Links into the gated tree are plain <a> — never next/link. Next 16 strips its prefetch
 * signals before the proxy runs, so a viewport prefetch would pop the browser's Basic-auth
 * dialog while someone merely scrolls this public page.
 */

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Private engagement",
  description: "A private consulting engagement for ErgoWorks Consulting stakeholders.",
  alternates: { canonical: "https://ergoworks.marcuscaporaso.com/" },
  robots: { index: false, follow: false },
  /*
   * Both blocks are required. The root layout pins OpenGraph and Twitter to
   * GrowthOS, so without these an ErgoWorks link shared into WhatsApp or Slack
   * unfurls as a GrowthOS page.
   */
  openGraph: {
    type: "website",
    url: "https://ergoworks.marcuscaporaso.com/",
    title: "ErgoWorks Consulting — Private engagement",
    description: "A private consulting engagement for ErgoWorks Consulting stakeholders.",
    siteName: "ErgoWorks Consulting",
    images: [{ url: "https://ergoworks.marcuscaporaso.com/logos/ergoworks/og-biosymm.jpg", width: 1200, height: 630, alt: "ErgoWorks Consulting engagement" }],
  },
  twitter: {
    // large_image, not summary: the card now carries a 1200x630 asset.
    card: "summary_large_image",
    title: "ErgoWorks Consulting — Private engagement",
    description: "A private consulting engagement for ErgoWorks Consulting stakeholders.",
    images: ["https://ergoworks.marcuscaporaso.com/logos/ergoworks/og-biosymm.jpg"],
  },
};

type Row = {
  label: string;
  href: string;
  body: string;
  status: "open" | "private" | "superseded";
};

const ROWS: Row[] = [
  {
    label: "Landing page",
    href: "/ergoworks/lp",
    body: "The working prototype of the campaign landing page. This is the reference the production build is copied from.",
    status: "open",
  },
  {
    label: "Direction note",
    href: "/ergoworks/plan/direction",
    body: "The approved phase-one direction: what the proof test is, the brand-test rules, the page and form specification, measurement, and the decisions still open.",
    status: "private",
  },
  {
    label: "Campaign plan pack",
    href: "/ergoworks/plan",
    body: "The earlier review pack — account evidence, measurement design and the decision memo behind this engagement.",
    status: "private",
  },
  {
    label: "Earlier mockup",
    href: "/ergoworks/lp-mockup",
    body: "The pre-pivot landing-page mockup. Superseded by the prototype above, and kept only for reference.",
    status: "superseded",
  },
];

const STATUS_LABEL: Record<Row["status"], string> = {
  open: "Open",
  private: "Private",
  superseded: "Superseded",
};

export default function ErgoWorksEntryPage() {
  return (
    <>
      <Nav baseHref={APEX_URL} />
      <main className="flex-1 overflow-x-clip">
        <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-cta">ErgoWorks Consulting</p>
              <h1 className="mt-5 max-w-[12ch] text-[clamp(3rem,8vw,5.25rem)] font-bold leading-[0.98] tracking-[-0.035em] text-fg">
                A private consulting engagement.
              </h1>
              <p className="mt-7 max-w-[70ch] text-lg leading-relaxed text-muted sm:text-xl">
                Four pieces of working material sit behind this address. The landing-page
                prototype is open; the rest is private and needs the review credentials.
              </p>
            </div>

            <dl className="mt-16 max-w-3xl border-t border-border">
              {ROWS.map((row) => (
                <div
                  key={row.href}
                  className="grid grid-cols-1 gap-3 border-b border-border py-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8"
                >
                  <dt className="text-sm font-semibold text-fg">
                    {row.label}
                    <span className="mt-1.5 flex items-center gap-1 text-xs font-medium text-muted-2">
                      {row.status === "private" && (
                        <LockKeyhole size={11} strokeWidth={2.25} aria-hidden />
                      )}
                      {STATUS_LABEL[row.status]}
                    </span>
                  </dt>
                  <dd className="max-w-[70ch] leading-relaxed text-muted">
                    {row.body}
                    <div className="mt-4">
                      <a
                        href={row.href}
                        className={
                          row.status === "open"
                            ? "group inline-flex items-center gap-2.5 rounded-sm bg-cta px-6 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors duration-200 hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
                            : "inline-flex items-center gap-2 text-sm font-medium text-muted underline decoration-muted-2 underline-offset-4 transition-colors duration-200 hover:text-fg hover:decoration-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
                        }
                      >
                        {row.status === "open" ? "Open the prototype" : `Open ${row.label.toLowerCase()}`}
                        {row.status === "open" && (
                          <ArrowRight
                            size={16}
                            strokeWidth={2.5}
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                          />
                        )}
                      </a>
                    </div>
                  </dd>
                </div>
              ))}

              <div className="grid grid-cols-1 gap-3 border-b border-border py-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8">
                <dt className="text-sm font-semibold text-fg">Request access</dt>
                <dd className="max-w-[70ch] leading-relaxed text-muted">
                  The private material needs credentials. Contact Marcus to request them.
                  <div className="mt-4">
                    <a
                      href={`${APEX_URL}/#contact`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted underline decoration-muted-2 underline-offset-4 transition-colors duration-200 hover:text-fg hover:decoration-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
                    >
                      Contact Marcus
                    </a>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
      <Footer baseHref={APEX_URL} />
    </>
  );
}
