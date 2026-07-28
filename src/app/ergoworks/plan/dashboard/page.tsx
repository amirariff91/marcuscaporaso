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
              <text x={x + bw / 2} y={y(totals[i]) - 6} textAnchor="middle" fontSize="10.5" fontWeight="700" fill={C.red}>
                Direct {GA4[i].direct}
              </text>
            )}
            <text x={x + bw / 2} y={height - 6} textAnchor="middle" fontSize="10.5" fill={C.axis}>{row.m}</text>
          </g>
        );
      })}
    </svg>
  );
}

function HBars({ rows, unit, color, valueOf }: {
  rows: { name: string }[]; unit: string; color: string; valueOf: (r: { name: string } & Record<string, unknown>) => number;
}) {
  const vals = rows.map((r) => valueOf(r as { name: string } & Record<string, unknown>));
  const max = Math.max(...vals) * 1.05;
  const rowH = 34;
  const h = rows.length * rowH + 6;
  const labelW = 240;
  return (
    <svg viewBox={`0 0 ${W} ${h}`} role="img" style={{ width: "100%", height: "auto", display: "block" }}>
      <title>{unit}</title>
      {rows.map((r, i) => {
        const v = vals[i];
        const bw = ((W - labelW - 90) * v) / max;
        const yy = i * rowH + 6;
        return (
          <g key={r.name}>
            <text x={labelW - 10} y={yy + 15} textAnchor="end" fontSize="12" fill="#1c2a25">{r.name}</text>
            <rect x={labelW} y={yy} width={Math.max(bw, 2)} height="20" rx="4" fill={color}>
              <title>{`${r.name}: ${v}${unit}`}</title>
            </rect>
            <text x={labelW + Math.max(bw, 2) + 8} y={yy + 15} fontSize="12" fontWeight="700" fill="#1c2a25">
              {unit === "%" ? `${v}%` : `A$${v.toFixed(0)}`}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function Swatch({ color, label }: { color: string; label: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", marginRight: "1.1rem", fontSize: ".8rem", color: "var(--muted)" }}>
      <span style={{ width: ".8rem", height: ".8rem", borderRadius: ".2rem", background: color, display: "inline-block" }} />
      {label}
    </span>
  );
}

function Panel({ id, eyebrow, title, subLabel, caveat, children }: {
  id: string; eyebrow: string; title: string; subLabel: string; caveat?: string; children: ReactNode;
}) {
  return (
    <section className={styles.docSection} id={id} style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
      <div className={styles.sectionHeading}>
        <p>{eyebrow}</p>
        <h2 style={{ fontSize: "clamp(1.4rem, 2.6vw, 2rem)" }}>{title}</h2>
        <span>{subLabel}</span>
      </div>
      <div style={{ marginTop: "1.75rem" }}>{children}</div>
      {caveat ? (
        <div className={styles.calloutRow} style={{ marginTop: "1.5rem" }}>
          <CircleAlert size={18} />
          <p style={{ fontSize: ".85rem" }}>{caveat}</p>
        </div>
      ) : null}
    </section>
  );
}

export default function DashboardPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero} style={{ minHeight: "auto", paddingBottom: "3rem" }}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> Advertising dashboard</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private &amp; confidential</div>
        </nav>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Snapshot pulled read-only 29 July 2026 · calendar months · Jul* is partial to the 28th</p>
            <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}>The account, honestly counted.</h1>
            <p className={styles.heroCopy}>
              Strict recorded lead events — enquiry forms plus the two call actions — are the only series
              I treat as an operating trend. Platform conversion totals sit under the mixed 16-action goal
              set and are shown for completeness, never as qualified pipeline.
            </p>
          </div>
          <aside className={styles.summary}>
            <p>Twelve full months to June 2026</p>
            <h2 style={{ fontSize: "1.5rem" }}>A$41,136 spend · 302 strict events · A$136 average per event.</h2>
            <ul>
              <li><BarChart3 size={17} /> July (partial, normalised): ≈A$380 per strict event</li>
              <li><ShieldCheck size={17} /> This dashboard is descriptive — it authorises nothing</li>
            </ul>
          </aside>
        </div>
        <a className={styles.scrollCue} href="#spend-events"><ArrowDown size={17} /> Start with spend and events</a>
      </header>

      <Panel
        id="spend-events"
        eyebrow="01 · Spend vs strict recorded lead events"
        title="Spend held near its June high; strict events halved."
        subLabel="Supports month-by-month media and recorded-event movement. Does not support qualified lead-rate or revenue conclusions."
        caveat="Strict = Make an Enquiry SR + Calls from ads + Call Forwarding SR only — recorded events, not qualified leads. Jul* is partial to 28 July; its point is drawn hollow-paced and must not be compared with a full month. June spend breached the A$154.81/day budget equivalent (101.5% pacing); July paces at ≈96%."
      >
        <p style={{ fontSize: ".8rem", color: "var(--muted)", margin: "0 0 .4rem" }}>Media spend, A$ per month</p>
        <LineChart values={SPEND.map((v) => Math.round(v))} color={C.blue} label="Media spend by month" valueLabels={[0, 11, 12]} />
        <p style={{ fontSize: ".8rem", color: "var(--muted)", margin: "1.4rem 0 .4rem" }}>Strict recorded lead events per month</p>
        <LineChart values={STRICT} color={C.aqua} label="Strict recorded lead events by month" valueLabels={[3, 11, 12]} />
        <p style={{ fontSize: ".8rem", color: "var(--muted)", margin: "1.4rem 0 .4rem" }}>Media cost per strict event, A$ (derived)</p>
        <LineChart values={COST_PER_STRICT.map((v) => Math.round(v))} color={C.orange} label="Cost per strict recorded lead event by month" valueLabels={[3, 8, 12]} />
      </Panel>

      <Panel
        id="mix"
        eyebrow="02 · Conversion mix"
        title="What sits inside the platform's conversion total."
        subLabel="Supports the composition of recorded conversion actions. Does not support qualified pipeline or a clean platform-conversion trend."
        caveat="Platform totals (the grey caps) are reported under the mixed 16-action goal set and are not qualified leads. The red segment in Aug 2025 is one other-campaign call-forwarding conversion that accrued to this campaign — observed contamination, not merely a mechanical possibility."
      >
        <div style={{ marginBottom: ".6rem" }}>
          <Swatch color={C.aqua} label="Strict events" />
          <Swatch color={C.yellow} label="Soft actions (phone/email click, newsletter)" />
          <Swatch color={C.red} label="Other-campaign action" />
          <Swatch color={C.axis} label="— Platform all-conversions cap" />
        </div>
        <MixColumns />
      </Panel>

      <Panel
        id="adgroups"
        eyebrow="03 · Where the money goes"
        title="Spend concentration and reported cost, by ad group."
        subLabel="Supports spend concentration and reported-conversion arithmetic over the trailing 12 months to 28 July. Does not support ad-group profitability or qualified efficiency."
        caveat="Every cost-per-conversion figure uses platform-reported conversions under the mixed goal set — not strict events and not qualified leads. Lower reported cost is not evidence of cleaner performance."
      >
        <p style={{ fontSize: ".8rem", color: "var(--muted)", margin: "0 0 .4rem" }}>Share of campaign spend, %</p>
        <HBars rows={ADGROUPS} unit="%" color={C.blue} valueOf={(r) => (r as unknown as { share: number }).share} />
        <p style={{ fontSize: ".8rem", color: "var(--muted)", margin: "1.4rem 0 .4rem" }}>A$ per reported conversion (contaminated denominator)</p>
        <HBars rows={ADGROUPS} unit="" color={C.aqua} valueOf={(r) => (r as unknown as { cpc2: number }).cpc2} />
      </Panel>

      <Panel
        id="keywords"
        eyebrow="04 · Keyword extremes"
        title="Best and worst reported keyword economics, trailing year."
        subLabel="Supports exact lookup within the top-30 extract. Does not support keyword-level qualified cost per acquisition."
        caveat="Investigation candidates, not automatic winners and losers: the worst rows are largely single-conversion observations, and every denominator is platform-reported. The certificate/course cluster took A$5,662 over the year (13.4% of campaign spend) at A$228 per reported conversion."
      >
        <div className={styles.tableScroll}>
          <table>
            <caption>Lowest reported cost per conversion</caption>
            <thead><tr><th scope="col">Keyword theme</th><th scope="col">Match</th><th scope="col">Spend</th><th scope="col">Clicks</th><th scope="col">Reported conv.</th><th scope="col">A$/conv.</th></tr></thead>
            <tbody>
              {KW_BEST.map((r) => (
                <tr key={r.kw}><td data-label="Keyword theme">{r.kw}</td><td data-label="Match">{r.match}</td><td data-label="Spend">{r.spend}</td><td data-label="Clicks">{r.clicks}</td><td data-label="Reported conv.">{r.conv}</td><td data-label="A$/conv."><strong>{r.cpa}</strong></td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.tableScroll} style={{ marginTop: "1.5rem" }}>
          <table>
            <caption>Highest reported cost per conversion</caption>
            <thead><tr><th scope="col">Keyword theme</th><th scope="col">Match</th><th scope="col">Spend</th><th scope="col">Clicks</th><th scope="col">Reported conv.</th><th scope="col">A$/conv.</th></tr></thead>
            <tbody>
              {KW_WORST.map((r) => (
                <tr key={r.kw}><td data-label="Keyword theme">{r.kw}</td><td data-label="Match">{r.match}</td><td data-label="Spend">{r.spend}</td><td data-label="Clicks">{r.clicks}</td><td data-label="Reported conv.">{r.conv}</td><td data-label="A$/conv."><strong>{r.cpa}</strong></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <Panel
        id="integrity"
        eyebrow="05 · Conversion integrity"
        title="The second campaign's conversions jumped while its clicks halved."
        subLabel="Supports detection of a measurement break and one observed contamination event. Does not establish demand for that service or the total size of contamination."
        caveat="The Mar–Jul rise coincides with new analytics-imported actions being enabled while clicks roughly halve: treat it as a goal-mix artefact until verified, never as lead growth or improved efficiency. Its goal set is the account default, so it is also eligible to optimise towards consulting conversions (evidence 6a.14)."
      >
        <p style={{ fontSize: ".8rem", color: "var(--muted)", margin: "0 0 .4rem" }}>Second campaign — clicks per month</p>
        <LineChart values={PHYSIO_CLICKS} color={C.blue} label="Second campaign clicks by month" valueLabels={[6, 12]} />
        <p style={{ fontSize: ".8rem", color: "var(--muted)", margin: "1.4rem 0 .4rem" }}>Second campaign — reported conversions per month (mixed goal set)</p>
        <LineChart values={PHYSIO_CONV} color={C.orange} label="Second campaign reported conversions by month" valueLabels={[7, 10, 12]} />
      </Panel>

      <Panel
        id="ratio"
        eyebrow="06 · Tracking continuity"
        title="Paid sessions per ad click drifted from ~96% to the low 70s."
        subLabel="Supports tracking-continuity diagnosis. Does not prove lost users, invalid clicks, a single tracking fault or qualified pipeline."
        caveat="Diagnostic only, with a scope limit: GA4's Paid Search channel likely includes both campaigns while the denominator here is consulting clicks only — on a combined-click denominator the ratio is roughly stable near 50%. Repair-worthy signal, not proof of loss."
      >
        <LineChart values={RATIO} color={C.blue} unit="%" label="GA4 Paid Search sessions per consulting ad click" refLine={100} valueLabels={[0, 10, 12]} />
      </Panel>

      <Panel
        id="channels"
        eyebrow="07 · Site traffic context"
        title="Paid Search is the largest measured channel; two Direct spikes need explaining."
        subLabel="Supports first-party channel-volume and mix context. Does not support channel profitability, lead quality or attribution certainty."
        caveat="Sessions are first-party GA4 counts, not qualified visits or commercial outcomes. The Direct spikes in Sep 2025 (357) and Nov 2025 (465) are anomalies to explain — possibly internal or automated traffic — not evidence of organic growth."
      >
        <div style={{ marginBottom: ".6rem" }}>
          <Swatch color={C.blue} label="Paid Search" />
          <Swatch color={C.orange} label="Organic Search" />
          <Swatch color={C.aqua} label="Direct" />
          <Swatch color={C.yellow} label="Referral" />
          <Swatch color={C.magenta} label="Other" />
        </div>
        <ChannelColumns />
      </Panel>

      <Panel
        id="organic"
        eyebrow="08 · Organic visibility"
        title="Brand queries take the clicks; non-brand takes the impressions."
        subLabel="Supports the brand/non-brand shape of the top-query sample, 90 days to 29 July. Does not support total search demand, lead quality or pipeline."
        caveat="Top-query extract only, with rule-based brand classification. Brand: 57 clicks from 565 impressions (10.1% CTR). Non-brand: 20 clicks from 4,615 impressions (0.4% CTR). The Sydney assessment head term averages position 27.5 on this property view — the pack's stronger positions belong to the tagged Business Profile row."
      >
        <div style={{ display: "grid", gap: "1rem" }}>
          {[
            { label: "Share of clicks", brand: 74, nonbrand: 26 },
            { label: "Share of impressions", brand: 11, nonbrand: 89 },
          ].map((row) => (
            <div key={row.label}>
              <p style={{ fontSize: ".8rem", color: "var(--muted)", margin: "0 0 .35rem" }}>{row.label}</p>
              <div style={{ display: "flex", height: "26px", borderRadius: "4px", overflow: "hidden", gap: "2px" }}>
                <div style={{ width: `${row.brand}%`, background: C.blue, color: "white", fontSize: ".75rem", fontWeight: 700, display: "grid", placeItems: "center" }}>
                  Brand {row.brand}%
                </div>
                <div style={{ width: `${row.nonbrand}%`, background: C.orange, color: "white", fontSize: ".75rem", fontWeight: 700, display: "grid", placeItems: "center" }}>
                  Non-brand {row.nonbrand}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <section className={`${styles.docSection} ${styles.alt}`} id="provenance">
        <div className={styles.sectionHeading}>
          <p>Provenance</p>
          <h2 style={{ fontSize: "clamp(1.4rem, 2.6vw, 2rem)" }}>Where these numbers come from.</h2>
          <span>
            Pulled read-only on 29 July 2026 from the Google Ads account, the GA4 property and Search
            Console. This snapshot uses calendar months, so its 12-month total (A$41,136 to June, ≈A$42,297
            including partial July) differs slightly from the evidence register&rsquo;s trailing window
            (A$42,285.61 to 24 July) — the two are different windows over the same account, not a
            discrepancy. Refreshing this page is a re-pull and redeploy; no credential lives on this site.
          </span>
        </div>
        <div className={styles.calloutRow} style={{ marginTop: "2rem" }}>
          <ShieldCheck size={20} />
          <p>
            <strong>Boundary.</strong> Nothing here is qualified pipeline, cost per lead, CAC, ROAS or a
            forecast, and nothing here authorises a change to the live account. The definitions and
            limits live in the <a href="/ergoworks/plan/evidence">evidence register</a> and the{" "}
            <a href="/ergoworks/plan/measurement">measurement plan</a>.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p><CircleAlert size={13} style={{ verticalAlign: "-2px", marginRight: ".4rem" }} />Confidential · For client review only · Descriptive snapshot, no authorisation</p>
      </footer>
    </main>
  );
}
