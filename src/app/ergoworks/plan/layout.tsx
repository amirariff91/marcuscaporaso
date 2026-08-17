"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import styles from "./plan.module.css";

const SECTIONS = [
  ["/ergoworks/plan", "Overview"],
  ["/ergoworks/plan/decisions", "Decisions"],
  ["/ergoworks/plan/direction", "Direction"],
  ["/ergoworks/plan/ads", "Ads"],
  ["/ergoworks/plan/measurement", "Measurement"],
  ["/ergoworks/plan/evidence", "Evidence"],
  ["/ergoworks/plan/dashboard", "Dashboard"],
] as const;

export default function PlanLayout({ children }: { children: React.ReactNode }) {
  /*
   * On ergoworks.marcuscaporaso.com the proxy rewrites `/plan/...` to
   * `/ergoworks/plan/...`, so the browser's path — which is what usePathname()
   * reports — has no `/ergoworks` prefix and matched none of these entries,
   * silently dropping the active crumb and aria-current. Normalise both forms.
   */
  const rawPathname = usePathname();
  const pathname = rawPathname.startsWith("/ergoworks")
    ? rawPathname
    : `/ergoworks${rawPathname}`;
  return (
    <>
      <div className={styles.shell}>
        <div className={styles.shellInner}>
          <Link href="/ergoworks/plan" className={styles.shellBrand}>
            <span>EW</span> ErgoWorks Consulting
          </Link>
          <span className={styles.shellPrivate}>
            <LockKeyhole size={13} /> Private · Confidential
          </span>
          <nav className={styles.crumbNav} aria-label="Review pack sections">
            {SECTIONS.map(([href, label]) => {
              const active =
                href === "/ergoworks/plan"
                  ? pathname === href
                  : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={active ? styles.crumbActive : undefined}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          {/* Deliberately no PDF download: the private-bucket pack predates these pages and is stale. */}
        </div>
      </div>
      {children}
    </>
  );
}
