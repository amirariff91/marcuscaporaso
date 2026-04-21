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
