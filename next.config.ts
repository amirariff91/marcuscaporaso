import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  experimental: {
    serverActions: {
      bodySizeLimit: "1mb",
      allowedOrigins: (() => {
        try {
          return process.env.APP_URL
            ? [new URL(process.env.APP_URL).host, "localhost:3000"]
            : ["localhost:3000"];
        } catch {
          return ["localhost:3000"];
        }
      })(),
    },
  },

  async redirects() {
    return [
      // OSWA: payment-plans page retired (practice no longer offers in-house plans).
      // Folded into the Medicare/finance page; 308 permanent (Google treats as 301-equivalent).
      {
        source: "/osw/content/payment-plans-bariatric-surgery",
        destination: "/osw/content/medicare-private-health-cover",
        permanent: true,
      },
      {
        source: "/osw/content-briefs/payment-plans-bariatric-surgery",
        destination: "/osw/content-briefs/medicare-private-health-cover",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
