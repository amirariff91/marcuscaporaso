import type { Metadata } from "next";
import LandingPage from "./LandingPage";

export const metadata: Metadata = {
  title: "Workplace ergonomics landing page",
  description: "Physiotherapist-led ergonomic support for modern workplaces.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://ergoworks.marcuscaporaso.com/ergoworks/lp",
  },
  openGraph: {
    type: "website",
    url: "https://ergoworks.marcuscaporaso.com/ergoworks/lp",
    title: "Workplace ergonomics landing page",
    description: "Physiotherapist-led ergonomic support for modern workplaces.",
    siteName: "ErgoWorks",
  },
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function LandingPageRoute({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const paidPath = sp.gclid !== undefined || sp.utm_source !== undefined;

  return <LandingPage variant="ergoworks_led" paidPath={paidPath} />;
}
