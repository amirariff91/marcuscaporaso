import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Workplace ergonomic assessments in Sydney",
  description:
    "A two-skin landing-page prototype for employer workplace ergonomics enquiries in Sydney.",
  robots: { index: false, follow: false },
};

export default function LandingPageLayout({ children }: { children: ReactNode }) {
  return children;
}
