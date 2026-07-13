"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LockKeyhole, FileDown } from "lucide-react";
import styles from "./plan.module.css";

const SECTIONS = [
  ["/ergoworks/plan", "Overview"],
  ["/ergoworks/plan/strategy", "Strategy"],
  ["/ergoworks/plan/decisions", "Decisions"],
  ["/ergoworks/plan/audit", "Account audit"],
  ["/ergoworks/plan/media", "Media plan"],
  ["/ergoworks/plan/landing-page", "Landing page"],
  ["/ergoworks/plan/offer", "Offer & creative"],
  ["/ergoworks/plan/measurement", "Measurement"],
] as const;

export default function PlanLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
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
          {/* Gated asset — served behind the same /ergoworks/plan/* proxy matcher, never a public URL */}
          <a className={styles.pdfLink} href="/ergoworks/plan/pack.pdf" download>
            <FileDown size={14} /> PDF pack
          </a>
        </div>
      </div>
      {children}
    </>
  );
}
