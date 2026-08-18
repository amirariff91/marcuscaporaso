import type { Metadata } from "next";
import LandingPage from "./LandingPage";

export const metadata: Metadata = {
  title: "Ergoworks — Workplace Ergonomics",
  description: "Physiotherapist-led ergonomic support for modern workplaces.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://ergoworks.marcuscaporaso.com/lp",
  },
  openGraph: {
    type: "website",
    url: "https://ergoworks.marcuscaporaso.com/lp",
    title: "Ergoworks — Workplace Ergonomics",
    description: "Physiotherapist-led ergonomic support for modern workplaces.",
    siteName: "Ergoworks",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ergoworks — Workplace Ergonomics",
    description: "Physiotherapist-led ergonomic support for modern workplaces.",
  },
};

export default function LandingPageRoute() {
  return <LandingPage />;
}
