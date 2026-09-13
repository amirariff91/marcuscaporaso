import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ergoworks — Workplace Ergonomics",
  description: "Physiotherapist-led ergonomic support for modern workplaces.",
  robots: { index: false, follow: false },
};

export default function LandingPageLayout({ children }: { children: ReactNode }) {
  return children;
}
