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
  title: "GrowthOS — Turn more enquiries into booked revenue",
  description:
    "GrowthOS helps clinics and service businesses fix the operating layer between enquiry, booking, follow-up and revenue visibility. Most clinics don't need more leads — they need to convert more demand.",
  metadataBase: siteUrl,
  openGraph: {
    type: "website",
    url: siteUrl.toString(),
    title: "GrowthOS — Turn more enquiries into booked revenue",
    description:
      "Find where your enquiries leak before spending more on leads. GrowthOS fixes enquiry capture, response speed, booking flow, follow-up and visibility for clinics and service businesses.",
    siteName: "GrowthOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthOS — Turn more enquiries into booked revenue",
    description:
      "Most clinics don't need more leads first. They need to convert more demand. Run the GrowthOS diagnostic.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${barlow.variable} ${figtree.variable} h-full`}
    >
      <head>
        {/* Enable scroll-reveal styling only when JS is available, before paint,
            so no-JS users always see content and there's no flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.dataset.js='on'`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
