import type { Metadata } from "next";
import { Barlow, Figtree } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = (() => {
  try {
    return new URL(process.env.APP_URL ?? "https://marcuscaporaso.cepathosting.com");
  } catch {
    return new URL("https://marcuscaporaso.cepathosting.com");
  }
})();

export const metadata: Metadata = {
  title: "Marcus Caporaso — Fractional Growth Partner",
  description:
    "Marcus Caporaso helps complex, high-value service businesses scale seriously. Fractional CMO, GrowthOS diagnostic, and advisory services.",
  metadataBase: siteUrl,
  openGraph: {
    type: "website",
    url: siteUrl.toString(),
    title: "Marcus Caporaso — Fractional Growth Partner",
    description:
      "Fractional CMO and growth architect for ambitious service businesses. Diagnose, architect, install, and optimise your growth engine.",
    siteName: "Marcus Caporaso",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Caporaso — Fractional Growth Partner",
    description:
      "Fractional CMO and growth architect for ambitious service businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${figtree.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
