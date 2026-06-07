"use client";

import { useEffect, useState } from "react";

/**
 * Renders the current year, corrected on the client.
 * The server/static value is the build year (Footer is statically rendered);
 * this updates it to the real current year after hydration so the copyright
 * never goes stale between deploys.
 */
export default function CurrentYear({ fallback }: { fallback: number }) {
  const [year, setYear] = useState(fallback);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
