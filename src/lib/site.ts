/**
 * Shared site links + section anchors.
 * NEXT_PUBLIC_ vars are inlined at build time, so reading them here is safe.
 */
export const DIAGNOSTIC_URL =
  process.env.NEXT_PUBLIC_GROWTHOS_URL ?? "https://growthops.marcuscaporaso.com";

export const NAV_LINKS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#who-its-for", label: "Who it's for" },
  { href: "/#what-fixes", label: "What GrowthOS fixes" },
] as const;
