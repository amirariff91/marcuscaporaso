import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Campaign-plan notice",
  description: "Public notice for the ErgoWorks Consulting campaign-plan page.",
  robots: { index: false, follow: false },
};

export default function CampaignPlanNoticePage() {
  return (
    <>
      <Nav />
      <main className="flex-1 overflow-x-clip">
        <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-cta">Public notice</p>
              <h1 className="mt-5 max-w-[14ch] text-[clamp(3rem,8vw,5.25rem)] font-bold leading-[0.98] tracking-[-0.035em] text-fg">
                Campaign plan superseded.
              </h1>
              <div className="mt-7 max-w-[70ch] space-y-5 text-lg leading-relaxed text-muted sm:text-xl">
                <p>
                  This plan has been superseded by a revised version dated 2026-07-24/25,
                  with figures and goal configuration re-verified on 2026-07-28.
                </p>
                <p>
                  The current pack is private. Contact Marcus for access.
                </p>
              </div>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-2.5 rounded-sm bg-cta px-6 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors duration-200 hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
                >
                  Contact Marcus for access
                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="/ergoworks"
                  className="text-sm font-medium text-muted underline decoration-muted-2 underline-offset-4 transition-colors duration-200 hover:text-fg hover:decoration-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
                >
                  ErgoWorks overview
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
