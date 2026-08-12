import type { Metadata } from "next";
import LandingPage from "../LandingPage";

export const metadata: Metadata = {
  title: "ErgoWorks | Workplace ergonomics in Sydney",
  description: "Workplace ergonomic assessments for employer teams in Sydney.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://ergoworks.marcuscaporaso.com/lp/ergoworks",
  },
  openGraph: {
    type: "website",
    url: "https://ergoworks.marcuscaporaso.com/lp/ergoworks",
    title: "ErgoWorks | Workplace ergonomics in Sydney",
    description: "Workplace ergonomic assessments for employer teams in Sydney.",
    siteName: "ErgoWorks",
  },
  /*
   * Set explicitly. Without it the page inherits the root layout's GrowthOS
   * Twitter card, so a shared client link previews someone else's brand.
   */
  twitter: {
    card: "summary_large_image",
    title: "ErgoWorks | Workplace ergonomics in Sydney",
    description: "Workplace ergonomic assessments for employer teams in Sydney.",
  },
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ErgoWorksLandingPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  return (
    <LandingPage
      variant="ergoworks_led"
      paidPath={sp.gclid !== undefined || sp.utm_source !== undefined}
      heroMode={firstParam(sp.hero) === "trigger" ? "trigger" : "promise"}
      descriptorMode={firstParam(sp.descriptor) === "powered" ? "powered" : "by"}
    />
  );
}
