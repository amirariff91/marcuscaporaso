import type { Metadata } from "next";
import { ArrowDown, CircleAlert, LockKeyhole, ShieldCheck } from "lucide-react";
import styles from "../plan.module.css";
import g from "./growth.module.css";
import type { CampaignRow } from "./data";
import {
  campaignTotals,
  campaigns,
  clicksGate,
  confidence,
  coverage,
  days,
  funnels,
  heldConstant,
  intent,
  keywords,
  ledger,
  openItems,
  contractBreaks,
  conversionReconciliation,
  intentBracket,
  pacing,
  pulledAt,
  queued,
  servingDays,
  tiles,
  windowLabel,
} from "./data";

export const metadata: Metadata = {
  title: "Growth review · ErgoWorks plan pack",
  description: "Private week-one growth review for the ErgoWorks Consulting fortnight test.",
  robots: { index: false, follow: false },
};

const SERIES: Record<CampaignRow["series"], string> = {
  main: "var(--s-main)",
  sydney: "var(--s-syd)",
  melbourne: "var(--s-mel)",
};

const money = (n: number) =>
  "A$" + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <div className={styles.sectionHeading}>
      <p>{label}</p>
      <h2>{title}</h2>
      {copy ? <span>{copy}</span> : null}
    </div>
  );
}

/* ── Daily spend, stacked by campaign ──────────────────────────────────────
   Server-rendered SVG: one scale, ticks the chart actually reaches, direct
   labels on every bar, and a <title> per segment so hovering names the value.
   The table below carries the exact figures — that is the relief for reading
   a colour-encoded chart. */
function SpendChart() {
  const W = 660, H = 250, L = 54, R = 14, T = 18, B = 44;
  const pw = W - L - R, ph = H - T - B;
  /* Scale from the data with headroom rather than a hardcoded 400: Friday has
     not served yet, and a day above A$400 would otherwise push the total label
     out of the viewBox, where SVG clips it silently. */
  const peak = Math.max(...days.map((d) => d.main + d.sydney + d.melbourne));
  const max = Math.ceil((peak * 1.12) / 100) * 100;
  const ticks = Array.from({ length: max / 100 + 1 }, (_, i) => i * 100);
  const step = pw / days.length;
  const bw = 54;
  const keys = [
    { k: "main" as const, fill: SERIES.main, name: "Main" },
    { k: "sydney" as const, fill: SERIES.sydney, name: "Sydney" },
    { k: "melbourne" as const, fill: SERIES.melbourne, name: "Melbourne" },
  ];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Daily spend by campaign, 14 to 17 September. Monday A$259.46, Tuesday A$341.08, Wednesday A$207.87, Thursday A$391.56."
    >
      {ticks.map((t) => {
        const y = T + ph - (t / max) * ph;
        return (
          <g key={t}>
            <line x1={L} x2={L + pw} y1={y} y2={y} stroke="var(--line)" strokeWidth={1} />
            <text x={L - 9} y={y + 4} fill="var(--muted)" textAnchor="end" fontSize={11}>
              {t === 0 ? "0" : `A$${t}`}
            </text>
          </g>
        );
      })}

      {days.map((d, i) => {
        const cx = L + step * i + step / 2;
        const total = d.main + d.sydney + d.melbourne;
        let y = T + ph;
        return (
          <g key={d.label}>
            {keys.map((s) => {
              const v = d[s.k];
              if (v <= 0) return null;
              const h = (v / max) * ph;
              y -= h;
              return (
                <rect key={s.k} x={cx - bw / 2} y={y} width={bw} height={Math.max(h - 2, 1)} fill={s.fill} rx={3}>
                  <title>{`${s.name} · ${d.label} · ${money(v)}`}</title>
                </rect>
              );
            })}
            <text x={cx} y={y - 9} fill="var(--ink)" textAnchor="middle" fontSize={12} fontWeight={700}>
              {money(total)}
            </text>
            <text x={cx} y={T + ph + 19} fill="var(--ink)" textAnchor="middle" fontSize={12}>
              {d.label}
            </text>
            <text x={cx} y={T + ph + 34} fill="var(--muted)" textAnchor="middle" fontSize={10.5}>
              {d.clicks} clicks
            </text>
          </g>
        );
      })}
      <line x1={L} x2={L + pw} y1={T + ph} y2={T + ph} stroke="var(--muted)" strokeWidth={1} />
    </svg>
  );
}

/* ── Coverage: disclosed vs undisclosed Sydney spend ─────────────────────── */
function CoverageChart() {
  const W = 660, L = 4, R = 4, y = 30, h = 50;
  const pw = W - L - R;
  const visW = (coverage.visible / coverage.total) * pw;
  const undW = (coverage.undisclosed / coverage.total) * pw;

  return (
    <svg viewBox={`0 0 ${W} 126`} role="img"
      aria-label={`Of ${money(coverage.total)} Sydney spend, ${money(coverage.visible)} has a disclosed search term and ${money(coverage.undisclosed)} does not.`}>
      <defs>
        <pattern id="gw-hatch" width={7} height={7} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width={7} height={7} fill="var(--paper-alt)" />
          <line x1={0} y1={0} x2={0} y2={7} stroke="var(--unknown)" strokeWidth={3} />
        </pattern>
      </defs>

      <text x={L} y={16} fill="var(--muted)" fontSize={11} fontWeight={700} letterSpacing=".06em">
        SYDNEY SPEND, 14–17 SEP · {money(coverage.total)} TOTAL
      </text>

      <rect x={L} y={y} width={Math.max(visW - 2, 2)} height={h} fill="var(--coverage-fill)" rx={4}>
        <title>{`Disclosed search term · ${money(coverage.visible)} · ${coverage.visibleClicks} clicks`}</title>
      </rect>
      <text x={L + 12} y={y + 21} fill="#ffffff" fontSize={12.5} fontWeight={700}>Disclosed search term</text>
      <text x={L + 12} y={y + 38} fill="#e8f0ed" fontSize={11.5}>
        {money(coverage.visible)} · {coverage.visibleClicks} clicks · {coverage.percent}%
      </text>

      <rect x={L + visW} y={y} width={Math.max(undW, 2)} height={h} fill="url(#gw-hatch)" stroke="var(--line)" strokeWidth={1} rx={4}>
        <title>{`No search term disclosed · ${money(coverage.undisclosed)} · ${coverage.undisclosedClicks} clicks`}</title>
      </rect>
      <text x={L + visW + 12} y={y + 21} fill="var(--ink)" fontSize={12.5} fontWeight={700}>Not disclosed</text>
      <text x={L + visW + 12} y={y + 38} fill="var(--muted)" fontSize={11.5}>
        {money(coverage.undisclosed)} · {coverage.undisclosedClicks} clicks
      </text>

      <text x={L} y={y + h + 24} fill="var(--crit)" fontSize={12} fontWeight={700}>
        {coverage.percent}% coverage — below the {coverage.floor}% floor for quoting a score
      </text>
    </svg>
  );
}

/* ── Intent split within the visible portion ──────────────────────────────
   One emphasised series (the intent we are buying for) against recessive
   neutrals, rather than four competing hues: the chart's job is good-versus-
   not-good, and every segment is directly labelled underneath. */
function IntentChart() {
  const W = 660, L = 4, R = 4, y = 26, h = 44;
  const pw = W - L - R;
  const total = intent.reduce((a, b) => a + b.cost, 0);
  const offTones = ["#7f938b", "#9aaaa3", "#b3c0ba"];
  let off = -1;
  let x = L;

  const segs = intent.map((b) => {
    const w = (b.cost / total) * pw;
    const seg = { ...b, x, w, fill: b.tone === "focus" ? "var(--s-main)" : offTones[++off] };
    x += w;
    return seg;
  });

  return (
    <svg viewBox={`0 0 ${W} 152`} role="img"
      aria-label={`Of ${money(total)} visible Sydney spend: genuine corporate ${money(144.15)}, home office ${money(36.86)}, competitor name ${money(25.71)}, chair or product ${money(16.94)}.`}>
      <text x={L} y={16} fill="var(--muted)" fontSize={11} fontWeight={700} letterSpacing=".06em">
        VISIBLE PORTION ONLY · {money(total)} · {coverage.visibleClicks} CLICKS
      </text>

      {segs.map((s) => (
        <rect key={s.label} x={s.x} y={y} width={Math.max(s.w - 2, 3)} height={h} fill={s.fill} rx={3}>
          <title>{`${s.label} · ${money(s.cost)} · ${((s.cost / total) * 100).toFixed(1)}% of visible · 1 click — ${s.term}`}</title>
        </rect>
      ))}

      {segs.map((s, i) => {
        const cx = s.x + s.w / 2;
        const ly = y + h + 18 + (i % 2) * 30;
        /* A narrow segment sits close to the edge, and its centred label would
           run past the viewBox — which the SVG silently clips. Clamp the label
           inward; the connector still points at the segment's true centre, so
           the slight lean reads as a leader line rather than a misalignment. */
        const lx = Math.min(Math.max(cx, 66), W - R - 66);
        return (
          <g key={`${s.label}-label`}>
            <line x1={cx} y1={y + h + 3} x2={lx} y2={ly - 9} stroke="var(--line)" strokeWidth={1} />
            <text x={lx} y={ly} fill="var(--ink)" textAnchor="middle" fontSize={11.5}>{s.label}</text>
            <text x={lx} y={ly + 13} fill="var(--muted)" textAnchor="middle" fontSize={11}>{money(s.cost)}</text>
          </g>
        );
      })}
    </svg>
  );
}

export default function GrowthPage() {
  const verdictClass = { "not-answerable": g.verdictNot, pending: g.verdictPending, answered: g.verdictAnswered };
  const disclosedClass = { full: g.pillGood, partial: g.pillWarn, none: g.pillCrit };

  return (
    <main className={`${styles.page} ${g.growth}`}>
      <header className={`${styles.hero} ${g.compactHero}`}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
          <div className={styles.private}><LockKeyhole size={14} aria-hidden="true" /> Private and confidential</div>
        </nav>

        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>{windowLabel} · Pulled {pulledAt}</p>
            <h1>Growth review</h1>
            <p className={styles.heroCopy}>
              Week one of a ten-day test, and what {servingDays} serving days can honestly tell you.
              Three enquiries arrived and none are qualified yet. The Sydney intent read this
              checkpoint was built around has fallen below its own coverage floor, so it is reported
              here as findings rather than as a score.
            </p>
          </div>

          <aside className={styles.summary}>
            <p>Where it stands</p>
            <h2>Friday had not served when this was pulled. Four days, not five.</h2>
          </aside>
        </div>

        <a className={styles.scrollCue} href="#executive">
          <ArrowDown size={17} aria-hidden="true" /> Start with what it can answer
        </a>
      </header>

      <nav className={`${styles.sectionNav} ${g.navOffset}`} aria-label="Sections">
        <a href="#executive">Executive</a>
        <a href="#acquisition">Acquisition</a>
        <a href="#commercial">Commercial</a>
        <a href="#optimisation">Optimisation</a>
        <a href="#governance">Governance</a>
      </nav>

      {/* ══ EXECUTIVE ══ */}
      <section className={styles.docSection} id="executive">
        <SectionHeading
          label="Executive"
          title="What the week can and cannot answer."
          copy="Every figure describes Mon 14 – Thu 17 September unless it says otherwise."
        />

        <div className={g.confidence}>
          <div className={g.confidenceHead}>
            <strong>Reading confidence.</strong>{" "}
            Three questions this checkpoint was meant to settle, and whether four days of data
            actually settle them.
          </div>
          <div className={g.confidenceRows}>
            {confidence.map((c) => (
              <div className={g.confidenceRow} key={c.question}>
                <span className={`${g.verdict} ${verdictClass[c.verdict]}`}>{c.verdictLabel}</span>
                <h3>{c.question}</h3>
                <p>{c.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={g.tiles}>
          {tiles.map((t) => (
            <div className={g.tile} key={t.label}>
              <p>{t.label}</p>
              <p className={`${g.tileValue} ${t.unavailable ? g.tileEmpty : ""}`}>{t.value}</p>
              <p className={g.tileNote}>{t.note}</p>
            </div>
          ))}
        </div>

        <div className={g.callout}>
          <CircleAlert size={18} aria-hidden="true" />
          <strong>The spend figure on record needs restating — and part of that is ours</strong>
          <p>
            {money(pacing.spent)} across {servingDays} serving days is about A${pacing.perDay} a day,
            projecting to roughly A${pacing.projected.toLocaleString()} over ten.
          </p>
          <p>
            The A$1.5–2k worst case given on 13 September covers <b>main alone</b>
            (A$155 × 10 = A${pacing.ceilingMainOnly.toLocaleString()}) and was never restated once
            Sydney was live. That is our disclosure error, corrected here. The combination actually
            approved for this window — main plus Sydney — prices at{" "}
            <b>A${pacing.ceilingApproved.toLocaleString()}</b>, and the projection sits about{" "}
            {pacing.overApprovedPct}% above it, on main&rsquo;s overdelivery.
          </p>
          <p>
            Melbourne&rsquo;s A$50/day line was never approved for this window — it was to stay
            paused, and its launch is logged below as the third break of the freeze. Quoting an
            all-three ceiling of A${pacing.ceilingAllThree.toLocaleString()} would price an
            unapproved combination as approved, so it is not the number on record. Melbourne has
            spent A$0, so pacing is unaffected either way.
          </p>
          <p>
            Against their own lines: Sydney is <i>under</i> — {money(pacing.sydneySoFar)} so far,
            pacing to about A${pacing.sydneyProjected} against A${pacing.sydneyCeiling}. Main is the
            one over, pacing to about A${pacing.mainProjected.toLocaleString()} against
            A${pacing.ceilingMainOnly.toLocaleString()}, driven by overdelivery Google settles
            monthly.
          </p>
        </div>

      </section>

      {/* ══ ACQUISITION ══ */}
      <section className={`${styles.docSection} ${styles.alt}`} id="acquisition">
        <SectionHeading label="Acquisition" title="Where the money went." />

        <div className={g.chartCard}>
          <h3>Daily spend by campaign</h3>
          <div className={g.legend}>
            <span><i className={g.swatch} style={{ background: SERIES.main }} />Main (national)</span>
            <span><i className={g.swatch} style={{ background: SERIES.sydney }} />Sydney</span>
            <span><i className={g.swatch} style={{ background: SERIES.melbourne }} />Melbourne</span>
          </div>
          <figure>
            <SpendChart />
            <figcaption className={g.caption}>
              Thursday was the most expensive day of the week and produced no conversions. The main
              campaign spent A$308.66 against a A$155/day budget — 1.99×, the maximum Google permits.
            </figcaption>
          </figure>
          <details className={g.dataDetails}>
            <summary>Show the daily figures as a table</summary>
            <table>
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Main</th>
                  <th scope="col">Sydney</th>
                  <th scope="col">Melbourne</th>
                  <th scope="col">Total</th>
                  <th scope="col">Clicks</th>
                </tr>
              </thead>
              <tbody>
                {days.map((d) => (
                  <tr key={d.label}>
                    <th scope="row">{d.label}</th>
                    <td>{money(d.main)}</td>
                    <td>{money(d.sydney)}</td>
                    <td>{d.melbourne === 0 ? "—" : money(d.melbourne)}</td>
                    <td>{money(d.main + d.sydney + d.melbourne)}</td>
                    <td>{d.clicks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
        </div>

        <div className={styles.tableScroll}>
          <table>
            <caption>Campaign performance, 14–17 September</caption>
            <thead>
              <tr>
                <th scope="col">Campaign</th>
                <th scope="col">Impressions</th>
                <th scope="col">Clicks</th>
                <th scope="col">Cost</th>
                <th scope="col">Avg CPC</th>
                <th scope="col">Impr. share</th>
                <th scope="col">Conversions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.name}>
                  <td data-label="Campaign">
                    <span className={g.cellValue}>
                      <i className={g.rowSwatch} style={{ background: SERIES[c.series] }} />
                      {c.name}
                    </span>
                  </td>
                  <td data-label="Impressions" className={g.numeric}>{c.impressions.toLocaleString()}</td>
                  <td data-label="Clicks" className={g.numeric}>{c.clicks}</td>
                  <td data-label="Cost" className={g.numeric}>{money(c.cost)}</td>
                  <td data-label="Avg CPC" className={g.numeric}>{c.cpc === null ? "—" : money(c.cpc)}</td>
                  <td data-label="Impr. share" className={g.numeric}>{c.impressionShare}%</td>
                  <td data-label="Conversions" className={g.numeric}>{c.conversions}</td>
                </tr>
              ))}
              <tr>
                <td data-label="Campaign"><b>Total</b></td>
                <td data-label="Impressions" className={g.numeric}><b>{campaignTotals.impressions.toLocaleString()}</b></td>
                <td data-label="Clicks" className={g.numeric}><b>{campaignTotals.clicks}</b></td>
                <td data-label="Cost" className={g.numeric}><b>{money(campaignTotals.cost)}</b></td>
                <td data-label="Avg CPC" className={g.numeric}><b>{money(campaignTotals.cpc)}</b></td>
                <td data-label="Impr. share" className={g.numeric}>—</td>
                <td data-label="Conversions" className={g.numeric}><b>{campaignTotals.conversions}</b></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`${g.callout} ${g.calloutGood}`}>
          <ShieldCheck size={18} aria-hidden="true" />
          <strong>The traffic gate is safe</strong>
          <p>
            The test needs at least {clicksGate.required} paid clicks to be readable at all.{" "}
            {clicksGate.achieved} landed in four days, pacing to about {clicksGate.pacing} across
            ten. Thin traffic was the biggest risk of an inconclusive fortnight and it is now the
            least of them.
          </p>
        </div>

        <div className={g.callout}>
          <CircleAlert size={18} aria-hidden="true" />
          <strong>Sydney&rsquo;s problem is not visibility</strong>
          <p>
            At 80% impression share Sydney is winning nearly every auction it enters, losing 1.3% to
            budget. It is being seen. What it buys when it is seen is the question — and that is the
            next section. Melbourne&rsquo;s 71% share sits on nine impressions in total: it is
            eligible and winning, there is simply almost nothing to enter.
          </p>
        </div>
      </section>

      {/* ══ COMMERCIAL ══ */}
      <section className={styles.docSection} id="commercial">
        <SectionHeading
          label="Commercial"
          title="Two enquiry paths, not one."
          copy="They are in very different states. Reporting them as a single funnel hides the only thing that matters here."
        />

        <div className={g.funnelGrid}>
          {funnels.map((f) => {
            const base = f.stages[0].value || 1;
            return (
              <div className={g.chartCard} key={f.title}>
                <div className={g.funnelHead}>
                  <h3>{f.title}</h3>
                  <span className={`${g.pill} ${f.state === "verified" ? g.pillGood : g.pillCrit}`}>
                    {f.stateLabel}
                  </span>
                </div>
                <div className={g.funnel}>
                  {f.stages.map((s) => (
                    <div className={g.funnelRow} key={s.label}>
                      <span className={g.funnelLabel}>{s.label}</span>
                      <div className={g.funnelTrack}>
                        {s.value !== null && s.value > 0 ? (
                          <div
                            className={g.funnelFill}
                            style={{
                              width: `${Math.max((s.value / base) * 100, 2.5)}%`,
                              background: f.state === "verified" ? SERIES.main : SERIES.sydney,
                            }}
                          />
                        ) : null}
                      </div>
                      <span className={`${g.funnelValue} ${s.value === null ? g.funnelNa : s.value === 0 ? g.funnelZero : ""}`}>
                        {s.value === null ? (s.naLabel ?? "not split") : s.value}
                      </span>
                    </div>
                  ))}
                </div>
                <p className={g.caption}>{f.note}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.tableScroll}>
          <table>
            <caption>Enquiry ledger, 14–17 September</caption>
            <thead>
              <tr>
                <th scope="col">When</th>
                <th scope="col">Page</th>
                <th scope="col">Source</th>
                <th scope="col">In Google Ads</th>
                <th scope="col">Qualified</th>
              </tr>
            </thead>
            <tbody>
              {ledger.map((r) => (
                <tr key={r.when}>
                  <td data-label="When">{r.when}</td>
                  <td data-label="Page">{r.page}</td>
                  <td data-label="Source"><span className={`${g.pill} ${g.pillFlat}`}>{r.source}</span></td>
                  <td data-label="In Google Ads">{r.inAds}</td>
                  <td data-label="Qualified"><span className={`${g.pill} ${g.pillWarn}`}>{r.qualified}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.tableScroll}>
          <table>
            <caption>What the two recorded conversions actually were</caption>
            <thead>
              <tr>
                <th scope="col">When</th>
                <th scope="col">Conversion action</th>
                <th scope="col">How it reconciles</th>
              </tr>
            </thead>
            <tbody>
              {conversionReconciliation.map((r) => (
                <tr key={r.when}>
                  <td data-label="When">{r.when}</td>
                  <td data-label="Conversion action">{r.action}</td>
                  <td data-label="How it reconciles">{r.reconciles}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={g.callout}>
          <CircleAlert size={18} aria-hidden="true" />
          <strong>Two of these are new, and nobody has looked at them yet</strong>
          <p>
            Wednesday&rsquo;s and Thursday&rsquo;s enquiries both completed properly — form opened,
            form sent, same day. Both are <b>recorded as direct</b> on the home page, so neither is
            attributed to paid in Google Ads. <b>That is correct behaviour, not a tracking fault.</b>
            Recorded as direct is not the same as never touched by advertising: a returning visitor
            who clicked an ad earlier, or one whose click ID was stripped, lands in the same bucket.
          </p>
          <p>
            Direct traffic on the home page is equally consistent with a genuine employer typing the
            domain and with someone internal testing the repaired form. Only the inbox settles it. If
            all three are real and net-new, that meets the <i>count</i> half of the target — three
            enquiries — with a week still to run. Two of them still have to reach a scoping call or a
            proposal before the fortnight is passed, so this is not the finish line.
          </p>
        </div>
      </section>

      {/* ══ OPTIMISATION ══ */}
      <section className={`${styles.docSection} ${styles.alt}`} id="optimisation">
        <SectionHeading
          label="Optimisation"
          title="Why the Sydney number is not a score."
          copy="Sydney was to be judged this week on the share of traceable spend reaching genuine corporate intent."
        />

        <div className={g.chartCard}>
          <h3>What we can see, and what we cannot</h3>
          <figure>
            <CoverageChart />
            <figcaption className={g.caption}>
              Google discloses search terms only above a volume threshold. The undisclosed share is
              bounded exactly, because the keyword report reconciles to the full {money(coverage.total)} —
              seven clicks, every one of them on a phrase-match keyword.
            </figcaption>
          </figure>
        </div>

        <div className={g.chartCard}>
          <h3>Within the visible {money(coverage.visible)} — four clicks</h3>
          <figure>
            <IntentChart />
            <figcaption className={g.caption}>
              Genuine corporate intent is 64.5% of the visible portion — but that is one click of
              A$144.15. Remove it and genuine intent for the week is zero.
            </figcaption>
          </figure>
        </div>

        <div className={`${g.callout} ${g.calloutCrit}`}>
          <CircleAlert size={18} aria-hidden="true" />
          <strong>The metric is below its own floor</strong>
          <p>
            We refuse to publish a score when evidence coverage drops under {coverage.floor}%. Sydney
            is at <b>{coverage.percent}%</b>. The same rule was used on 15 September to refuse a figure
            that suited us better; it binds here too.
          </p>
          <p>
            Two independent reasons a single percentage cannot carry weight, and they compound:
            coverage is below the floor, and the sample is four clicks of which one is 64% of the
            money.
          </p>
          <p>
            <b>So report the range instead.</b> Across Sydney&rsquo;s full {money(coverage.total)},
            genuine corporate intent is at least <b>{intentBracket.floor}%</b> — if every
            undisclosed click was off-intent — and at most <b>{intentBracket.ceiling}%</b>, if every
            one was genuine. That bracket is wide, but it is true, and it does not pretend the
            hidden {coverage.undisclosedClicks} clicks are not there.
          </p>
        </div>

        <div className={styles.tableScroll}>
          <table>
            <caption>Where Sydney&rsquo;s money went, by keyword</caption>
            <thead>
              <tr>
                <th scope="col">Keyword</th>
                <th scope="col">Match</th>
                <th scope="col">Clicks</th>
                <th scope="col">Cost</th>
                <th scope="col">Search terms disclosed</th>
              </tr>
            </thead>
            <tbody>
              {keywords.map((k) => (
                <tr key={k.keyword}>
                  <th scope="row" data-label="Keyword">{k.keyword}</th>
                  <td data-label="Match">{k.match}</td>
                  <td data-label="Clicks" className={g.numeric}>{k.clicks}</td>
                  <td data-label="Cost" className={g.numeric}>{money(k.cost)}</td>
                  <td data-label="Search terms disclosed">
                    <span className={`${g.pill} ${disclosedClass[k.disclosed]}`}>{k.disclosedLabel}</span>
                  </td>
                </tr>
              ))}
              <tr>
                <td data-label="Keyword"><b>Total</b></td>
                <td data-label="Match">—</td>
                <td data-label="Clicks" className={g.numeric}><b>{keywords.reduce((a, k) => a + k.clicks, 0)}</b></td>
                <td data-label="Cost" className={g.numeric}><b>{money(coverage.total)}</b></td>
                <td data-label="Search terms disclosed"><b>{coverage.percent}% disclosed</b></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={g.callout}>
          <CircleAlert size={18} aria-hidden="true" />
          <strong>One line is both large and opaque</strong>
          <p>
            <b>ergonomic consultants</b>, phrase match, took two clicks for A$93.61 — A$46.81 each —
            and disclosed nothing. It is the second-biggest spend line in the campaign. Every
            undisclosed click in the table sits on a phrase-match keyword, and phrase match produced
            two of the three off-intent clicks we <i>can</i> see. Not all three: the largest single
            off-intent click, home office at A$36.86, came through an exact-match keyword. So the
            lean is directional and thin, not a pattern — which is precisely why the bracket above
            is left at full width rather than shaded toward its floor.
          </p>
        </div>
      </section>

      {/* ══ GOVERNANCE ══ */}
      <section className={styles.docSection} id="governance">
        <SectionHeading
          label="Governance"
          title="What is frozen, and who holds what."
        />

        <div className={g.listGrid}>
          <div className={g.listCard}>
            <h3>Held constant to 25 September</h3>
            <ul>{heldConstant.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div className={g.listCard}>
            <h3>Queued for the 29 September reassessment</h3>
            <ul>{queued.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div className={g.listCard}>
            <h3>Where the freeze has been broken — all three</h3>
            <ul>{contractBreaks.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div className={g.listCard}>
            <h3>What that costs the verdict</h3>
            <ul>
              <li>Marcus has been told the 29 September verdict will be directional rather than clean</li>
              <li>No fourth break has been added, and none is proposed before 25 September</li>
              <li>Each break carries its actor, reason and date in the evidence register</li>
            </ul>
          </div>
        </div>

        <div className={styles.tableScroll}>
          <table>
            <caption>Open items</caption>
            <thead>
              <tr>
                <th scope="col">What happened</th>
                <th scope="col">What it means</th>
                <th scope="col">What we are doing</th>
                <th scope="col">Owner</th>
              </tr>
            </thead>
            <tbody>
              {openItems.map((o) => (
                <tr key={o.happened}>
                  <th scope="row" data-label="What happened">{o.happened}</th>
                  <td data-label="What it means">{o.means}</td>
                  <td data-label="What we are doing">{o.doing}</td>
                  <td data-label="Owner">{o.owner ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={`${g.callout} ${g.calloutGood}`}>
          <ShieldCheck size={18} aria-hidden="true" />
          <strong>The verdict has not moved</strong>
          <p>
            The fortnight is decided by three verified net-new employer enquiries with two reaching a
            scoping call or proposal. Spend, click cost, impression share and intent share all
            explain the result. None of them decide it.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p>Confidential · For client review only</p>
      </footer>
    </main>
  );
}
