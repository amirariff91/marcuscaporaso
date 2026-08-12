import type { Metadata } from "next";
import LandingPage from "../LandingPage";

export const metadata: Metadata = {
  title: "Biosymm Workplace Ergonomics | Sydney",
  description: "Workplace ergonomic assessments for employer teams in Sydney.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://ergoworks.marcuscaporaso.com/ergoworks/lp/biosymm",
  },
  openGraph: {
    type: "website",
    url: "https://ergoworks.marcuscaporaso.com/ergoworks/lp/biosymm",
    title: "Biosymm Workplace Ergonomics | Sydney",
    description: "Workplace ergonomic assessments for employer teams in Sydney.",
    siteName: "Biosymm Workplace Ergonomics",
  },
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function BiosymmLandingPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  return (
    <LandingPage
      variant="biosymm_led"
      paidPath={sp.gclid !== undefined || sp.utm_source !== undefined}
      heroMode={firstParam(sp.hero) === "trigger" ? "trigger" : "promise"}
    />
  );
}
