import type { ReactNode } from "react";

/*
 * Deliberately NOT under /ergoworks/plan: the developer ticket must not inherit
 * the plan pack's section navigation, which links to the client's spend,
 * decisions and evidence pages. Same gate credentials for now (see src/proxy.ts);
 * split into its own credential pair before the developer receives a login.
 */
export default function BuildLayout({ children }: { children: ReactNode }) {
  return children;
}
