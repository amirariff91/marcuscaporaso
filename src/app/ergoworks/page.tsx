import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/*
 * THESIS: A public signpost should orient and route, not summarise the engagement.
 * OWN-WORLD: GrowthOS light editorial — warm white, charcoal, emerald, ruled text.
 * STORY: The visitor understands what this is, who it serves, and how to ask Marcus for access.
 * FIRST VIEWPORT: Existing site nav above one restrained heading, short explanation, and a clear access path.
 * FORM: Read-first single-column brief, chosen for a phone opened from a shared link.
 */

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Private engagement",
  description: "A private consulting engagement for ErgoWorks Consulting stakeholders.",
  robots: { index: false, follow: false },
};

export default function ErgoWorksEntryPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 overflow-x-clip">
        <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-cta">ErgoWorks Consulting</p>
              <h1 className="mt-5 max-w-[12ch] text-[clamp(3rem,8vw,5.25rem)] font-bold leading-[0.98] tracking-[-0.035em] text-fg">
                A private consulting engagement.
              </h1>
              <p className="mt-7 max-w-[70ch] text-lg leading-relaxed text-muted sm:text-xl">
                The working material for this engagement is private and is not published here.
              </p>
            </div>

            <dl className="mt-16 max-w-3xl border-t border-border">
              <div className="grid grid-cols-1 gap-3 border-b border-border py-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8">
                <dt className="text-sm font-semibold text-fg">What this is</dt>
                <dd className="max-w-[70ch] leading-relaxed text-muted">
                  Consulting support, delivered privately to the client's own stakeholders.
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-3 border-b border-border py-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8">
                <dt className="text-sm font-semibold text-fg">Who it is for</dt>
                <dd className="max-w-[70ch] leading-relaxed text-muted">
                  ErgoWorks Consulting stakeholders and invited collaborators reviewing the engagement.
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-3 border-b border-border py-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8">
                <dt className="text-sm font-semibold text-fg">Request access</dt>
                <dd className="max-w-[70ch] leading-relaxed text-muted">
                  The engagement material is private. Contact Marcus to request access.
                  <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <a
                      href="/#contact"
                      className="group inline-flex items-center gap-2.5 rounded-sm bg-cta px-6 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors duration-200 hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
                    >
                      Request access
                      <ArrowRight
                        size={16}
                        strokeWidth={2.5}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </a>
                    <a
                      href="/ergoworks/campaign-plan"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted underline decoration-muted-2 underline-offset-4 transition-colors duration-200 hover:text-fg hover:decoration-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
                    >
                      Public campaign-plan notice
                    </a>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
