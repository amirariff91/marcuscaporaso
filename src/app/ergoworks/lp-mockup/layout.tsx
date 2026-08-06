import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — landing page mockup (draft)",
  description:
    "Draft landing-page mockup for the ErgoWorks Consulting assessment campaign. Not a live page.",
  robots: { index: false, follow: false },
};

export default function LpMockupLayout({ children }: { children: ReactNode }) {
  return children;
}
