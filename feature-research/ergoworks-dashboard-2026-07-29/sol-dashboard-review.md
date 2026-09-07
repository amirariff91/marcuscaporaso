eview pack sections">
    29	            {SECTIONS.map(([href, label]) => {
    30	              const active =
    31	                href === "/ergoworks/plan"
    32	                  ? pathname === href
    33	                  : pathname.startsWith(href);
    34	              return (
    35	                <Link
    36	                  key={href}
    37	                  href={href}
    38	                  className={active ? styles.crumbActive : undefined}
    39	                  aria-current={active ? "page" : undefined}
    40	                >
    41	                  {label}
    42	                </Link>
    43	              );
    44	            })}
    45	          </nav>
    46	          {/* Deliberately no PDF download: the private-bucket pack predates these pages and is stale. */}
    47	        </div>
    48	      </div>
    49	      {children}
    50	    </>
    51	  );
    52	}

--- TREE ---
src/app/ergoworks/.impeccable/hook.cache.json
src/app/ergoworks/campaign-plan/page.tsx
src/app/ergoworks/page.tsx
src/app/ergoworks/plan/.impeccable/hook.cache.json
src/app/ergoworks/plan/dashboard/page.tsx
src/app/ergoworks/plan/decisions/page.tsx
src/app/ergoworks/plan/evidence/page.tsx
src/app/ergoworks/plan/layout.tsx
src/app/ergoworks/plan/measurement/page.tsx
src/app/ergoworks/plan/pack.pdf/route.ts
src/app/ergoworks/plan/page.tsx
src/app/ergoworks/plan/plan.module.css

exec
/bin/zsh -lc "printf '%s\\n' '--- TRACKED DASHBOARD? ---' && git ls-files --error-unmatch src/app/ergoworks/plan/dashboard/page.tsx 2>&1; printf '\\n--- TRACKED ROUTES/REFERENCES ---\\n'; git grep -n -i 'ergoworks/plan/dashboard\\|Dashboard' 32f507002a9b92af5a0ceee6646e8ae435c9a953 -- src next.config.* 2>/dev/null || true; printf '\\n--- UNTRACKED ROUTE HEAD ---\\n'; sed -n '1,220p' src/app/ergoworks/plan/dashboard/page.tsx 2>/dev/null || true; printf '\\n--- PACKAGE SCRIPTS ---\\n'; node -e 'let p=require(\"./package.json\"); console.log(JSON.stringify({scripts:p.scripts,dependencies:p.dependencies,devDependencies:p.devDependencies},null,2))'" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
--- TRACKED DASHBOARD? ---
error: pathspec 'src/app/ergoworks/plan/dashboard/page.tsx' did not match any file(s) known to git
Did you forget to 'git add'?

--- TRACKED ROUTES/REFERENCES ---

--- UNTRACKED ROUTE HEAD ---
import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  ArrowDown,
  BarChart3,
  CircleAlert,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import styles from "../plan.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — Dashboard",
  description: "Private advertising dashboard for the ErgoWorks Consulting engagement.",
  robots: { index: false, follow: false },
};

/* ── Snapshot data — pulled read-only 29 July 2026 ──────────────────────────
   Windows differ from the evidence register's trailing pull (25 Jul cut-off):
   this page is the 29 July snapshot over calendar months and labels itself so.
   "Strict" = Make an Enquiry SR + Calls from ads + Call Forwarding SR only. */

const MONTHS = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul*"] as const;

const SPEND = [3364.5, 3055.48, 3405.78, 3529.5, 3062.02, 3559.69, 3405.83, 3144.71, 3330.27, 3407.35, 3154.72, 4715.65, 4147.46];
const STRICT = [31, 27, 27, 38, 25.9, 19, 23, 30, 16, 21, 17, 27, 10.9];
const SOFT = [6, 5, 5, 4, 5, 5, 0, 3, 4, 5, 1, 3, 5];
const CONTAM = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const ALL_CONV = [37, 33, 32, 42, 30.9, 24, 23, 33, 20, 28, 22, 33, 17.9];
const COST_PER_STRICT = [108.53, 113.17, 126.14, 92.88, 118.22, 187.35, 148.08, 104.82, 208.14, 162.25, 185.57, 174.65, 380.5];
const RATIO = [96.3, 96.5, 94.9, 94.9, 86.1, 87.0, 88.4, 94.1, 86.1, 72.4, 71.2, 68.6, 74.5];
const PHYSIO_CLICKS = [357, 370, 353, 374, 396, 390, 415, 397, 200, 162, 196, 175, 152];
const PHYSIO_CONV = [19, 22.8, 10, 12, 19, 27, 22, 28, 45, 45.9, 46, 38.9, 36];

const GA4 = [
  { m: "Jul", paid: 389, organic: 260, direct: 82, referral: 45, other: 7 },
  { m: "Aug", paid: 361, organic: 221, direct: 103, referral: 43, other: 7 },
  { m: "Sep", paid: 333, organic: 299, direct: 357, referral: 17, other: 23 },
  { m: "Oct", paid: 394, organic: 264, direct: 87, referral: 27, other: 11 },
  { m: "Nov", paid: 329, organic: 245, direct: 465, referral: 17, other: 18 },
  { m: "Dec", paid: 335, organic: 184, direct: 64, referral: 14, other: 16 },
  { m: "Jan", paid: 357, organic: 201, direct: 89, referral: 20, other: 12 },
  { m: "Feb", paid: 367, organic: 231, direct: 186, referral: 23, other: 4 },
  { m: "Mar", paid: 360, organic: 218, direct: 198, referral: 23, other: 7 },
  { m: "Apr", paid: 275, organic: 187, direct: 92, referral: 21, other: 8 },
  { m: "May", paid: 232, organic: 172, direct: 75, referral: 14, other: 7 },
  { m: "Jun", paid: 303, organic: 206, direct: 116, referral: 12, other: 12 },
  { m: "Jul*", paid: 266, organic: 146, direct: 62, referral: 11, other: 3 },
];

const ADGROUPS = [
  { name: "Manual-handling training", spend: 17269.15, share: 40.8, cpc2: 145.73 },
  { name: "Ergonomic office consulting", spend: 8295.6, share: 19.6, cpc2: 132.73 },
  { name: "Dynamic search ads", spend: 7396.38, share: 17.5, cpc2: 99.68 },
  { name: "Ergonomics assessments", spend: 7208.59, share: 17.0, cpc2: 122.18 },
  { name: "Workplace ergonomics", spend: 2112.54, share: 5.0, cpc2: 108.34 },
];

const KW_BEST = [
  { kw: "manual handling training sydney", match: "Exact", spend: "A$370.98", clicks: 32, conv: 11.5, cpa: "A$32.26" },
  { kw: "ergonomic assessment", match: "Exact", spend: "A$477.65", clicks: 42, conv: 8.5, cpa: "A$56.19" },
  { kw: "ergonomics training", match: "Broad", spend: "A$622.47", clicks: 76, conv: 9.3, cpa: "A$66.93" },
  { kw: "office ergonomic assessment", match: "Phrase", spend: "A$548.64", clicks: 43, conv: 7.0, cpa: "A$78.38" },
];
const KW_WORST = [
  { kw: "ergonomics company", match: "Broad", spend: "A$568.61", clicks: 38, conv: 1.0, cpa: "A$568.61" },
  { kw: "manual handling course", match: "Exact", spend: "A$555.86", clicks: 97, conv: 1.0, cpa: "A$555.86" },
  { kw: "ergonomic services", match: "Broad", spend: "A$522.37", clicks: 59, conv: 1.0, cpa: "A$522.37" },
  { kw: "occupational health and ergonomics", match: "Broad", spend: "A$563.09", clicks: 28, conv: 1.5, cpa: "A$375.39" },
];

/* Validated categorical palette (dataviz reference instance; brand hues fail
   the lightness/chroma gates). Direct value labels discharge the contrast WARN. */
const C = {
  blue: "#2a78d6",
  orange: "#eb6834",
  aqua: "#1baf7a",
  yellow: "#eda100",
  magenta: "#e87ba4",
  red: "#e34948",
  grid: "#e3e8e5",
  axis: "#5b6f68",
} as const;

/* ── Tiny server-rendered SVG helpers (no client JS; values always visible) ── */

const W = 720;
const PAD = { l: 34, r: 34, t: 18, b: 22 };

function xPos(i: number, n: number, w: number) {
  const inner = w - PAD.l - PAD.r;
  return PAD.l + (inner * i) / (n - 1);
}

function LineChart({
  values, height = 150, color, unit = "", label, partialLast = true, refLine, valueLabels,
}: {
  values: number[]; height?: number; color: string; unit?: string; label: string;
  partialLast?: boolean; refLine?: number; valueLabels?: number[];
}) {
  const max = Math.max(...values, refLine ?? 0) * 1.12;
  const y = (v: number) => height - PAD.b - ((height - PAD.t - PAD.b) * v) / max;
  const solid = values.slice(0, values.length - 1);
  const pathOf = (vals: number[], from = 0) =>
    vals.map((v, i) => `${i === 0 ? "M" : "L"}${xPos(i + from, values.length, W).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const labelIdx = valueLabels ?? [0, values.indexOf(Math.max(...values)), values.length - 2, values.length - 1];
  return (
    <svg viewBox={`0 0 ${W} ${height}`} role="img" style={{ width: "100%", height: "auto", display: "block" }}>
      <title>{label}</title>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1={PAD.l} x2={W - PAD.r} y1={y(max * f)} y2={y(max * f)} stroke={C.grid} strokeWidth="1" />
      ))}
      {refLine !== undefined && (
        <>
          <line x1={PAD.l} x2={W - PAD.r} y1={y(refLine)} y2={y(refLine)} stroke={C.axis} strokeWidth="1" strokeDasharray="4 4" />
          <text x={W - PAD.r} y={y(refLine) - 5} textAnchor="end" fontSize="11" fill={C.axis}>{refLine}{unit}</text>
        </>
      )}
      <path d={pathOf(solid)} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path
        d={`M${xPos(values.length - 2, values.length, W).toFixed(1)},${y(values[values.length - 2]).toFixed(1)} L${xPos(values.length - 1, values.length, W).toFixed(1)},${y(values[values.length - 1]).toFixed(1)}`}
        fill="none" stroke={color} strokeWidth="2" strokeDasharray={partialLast ? "3 4" : undefined} opacity={partialLast ? 0.65 : 1}
      />
      {values.map((v, i) => (
        <circle key={i} cx={xPos(i, values.length, W)} cy={y(v)} r="3.5" fill={color} opacity={partialLast && i === values.length - 1 ? 0.65 : 1}>
          <title>{`${MONTHS[i]}: ${v}${unit}`}</title>
        </circle>
      ))}
      {labelIdx.map((i) => (
        <text
          key={i}
          x={xPos(i, values.length, W)}
          y={y(values[i]) - 8}
          textAnchor={i === 0 ? "start" : i === values.length - 1 ? "end" : "middle"}
          fontSize="11.5"
          fontWeight="700"
          fill="#1c2a25"
        >
          {values[i]}{unit}
        </text>
      ))}
      {MONTHS.map((m, i) => (
        <text key={m + i} x={xPos(i, values.length, W)} y={height - 6} textAnchor="middle" fontSize="10.5" fill={C.axis}>{m}</text>
      ))}
    </svg>
  );
}

function MixColumns({ height = 190 }: { height?: number }) {
  const max = Math.max(...ALL_CONV) * 1.15;
  const y = (v: number) => height - PAD.b - ((height - PAD.t - PAD.b) * v) / max;
  const bw = 30;
  return (
    <svg viewBox={`0 0 ${W} ${height}`} role="img" style={{ width: "100%", height: "auto", display: "block" }}>
      <title>Monthly conversion mix: strict, soft and other-campaign actions against the platform total</title>
      {MONTHS.map((m, i) => {
        const x = xPos(i, MONTHS.length, W) - bw / 2;
        const partial = i === MONTHS.length - 1;
        const sTop = y(STRICT[i]);
        const softTop = y(STRICT[i] + SOFT[i]);
        const cTop = y(STRICT[i] + SOFT[i] + CONTAM[i]);
        return (
          <g key={m + i} opacity={partial ? 0.65 : 1}>
            <rect x={x} y={sTop} width={bw} height={y(0) - sTop} rx="3" fill={C.aqua}>
              <title>{`${m}: strict ${STRICT[i]}`}</title>
            </rect>
            {SOFT[i] > 0 && (
              <rect x={x} y={softTop + 0} width={bw} height={sTop - softTop - 2} rx="3" fill={C.yellow}>
                <title>{`${m}: soft (phone/email click, newsletter) ${SOFT[i]}`}</title>
              </rect>
            )}
            {CONTAM[i] > 0 && (
              <rect x={x} y={cTop} width={bw} height={softTop - cTop - 2} rx="3" fill={C.red}>
                <title>{`${m}: other-campaign action ${CONTAM[i]} — observed contamination`}</title>
              </rect>
            )}
            <line x1={x - 3} x2={x + bw + 3} y1={y(ALL_CONV[i])} y2={y(ALL_CONV[i])} stroke={C.axis} strokeWidth="1.5" />
            <text x={x + bw / 2} y={y(ALL_CONV[i]) - 5} textAnchor="middle" fontSize="10.5" fill={C.axis}>{ALL_CONV[i]}</text>
            <text x={x + bw / 2} y={height - 6} textAnchor="middle" fontSize="10.5" fill={C.axis}>{m}</text>
            <text x={x + bw / 2} y={sTop + 13} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="white">{STRICT[i]}</text>
          </g>
        );
      })}
    </svg>
  );
}

function ChannelColumns({ height = 200 }: { height?: number }) {
  const totals = GA4.map((r) => r.paid + r.organic + r.direct + r.referral + r.other);
  const max = Math.max(...totals) * 1.12;
  const y = (v: number) => height - PAD.b - ((height - PAD.t - PAD.b) * v) / max;
  const bw = 30;
  const series: { key: "paid" | "organic" | "direct" | "referral" | "other"; color: string }[] = [
    { key: "paid", color: C.blue },
    { key: "organic", color: C.orange },
    { key: "direct", color: C.aqua },
    { key: "referral", color: C.yellow },
    { key: "other", color: C.magenta },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${height}`} role="img" style={{ width: "100%", height: "auto", display: "block" }}>
      <title>GA4 sessions by channel per month</title>
      {GA4.map((row, i) => {
        const x = xPos(i, GA4.length, W) - bw / 2;
        let acc = 0;
        const partial = i === GA4.length - 1;
        return (
          <g key={row.m + i} opacity={partial ? 0.65 : 1}>
            {series.map(({ key, color }) => {
              const v = row[key];
              const y0 = y(acc);
              acc += v;
              const y1 = y(acc);
              return v > 0 ? (
                <rect key={key} x={x} y={y1} width={bw} height={Math.max(y0 - y1 - 2, 1)} rx="2" fill={color}>
                  <title>{`${row.m}: ${key} ${v} sessions`}</title>
                </rect>
              ) : null;
            })}
            {(i === 2 || i === 4) && (

--- PACKAGE SCRIPTS ---
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "lucide-react": "^1.8.0",
    "marked": "^18.0.5",
    "next": "16.2.4",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

codex
The tracked patch exposes a navigation destination whose implementation is absent from the diff, producing a consistently broken link after deployment.

Review comment:

- [P1] Add the dashboard route before exposing its link — /Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/plan/layout.tsx:13-13
  When this patch is committed and deployed as shown, this link resolves to a 404 because the diff does not include a matching `/ergoworks/plan/dashboard` route or redirect. The local `src/app/ergoworks/plan/dashboard/page.tsx` is untracked, so it must be added to the patch before exposing the navigation item.
The tracked patch exposes a navigation destination whose implementation is absent from the diff, producing a consistently broken link after deployment.

Review comment:

- [P1] Add the dashboard route before exposing its link — /Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/plan/layout.tsx:13-13
  When this patch is committed and deployed as shown, this link resolves to a 404 because the diff does not include a matching `/ergoworks/plan/dashboard` route or redirect. The local `src/app/ergoworks/plan/dashboard/page.tsx` is untracked, so it must be added to the patch before exposing the navigation item.
