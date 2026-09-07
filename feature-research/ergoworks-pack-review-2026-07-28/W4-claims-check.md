ng>[Verified]</strong> The full evidence trail is indexed on the evidence page, and the decisions that remain with you are kept in the decision register.
   337	          </p>
   338	          <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", marginTop: "2rem" }}>
   339	            <Link className={styles.pdfLink} href="/ergoworks/plan/evidence">
   340	              Open evidence <ArrowRight size={15} />

codex
The evidence IDs and major figures are now mapped. I’m doing the second pass for boundary wording and arithmetic, because several clauses are numerically right but may be tagged or framed more strongly than their records allow.
exec
/bin/zsh -lc "awk 'BEGIN {
  trailing=42285.61; recent=4652.53; daily=154.81; line=846.56;
  printf \"trailing/12 = %.10f\\n\", trailing/12;
  printf \"(recent-(trailing/12))/(trailing/12)*100 = %.10f%%\\n\", (recent-trailing/12)/(trailing/12)*100;
  printf \"daily*365 = %.10f\\n\", daily*365;
  printf \"daily*365/12*0.2 = %.10f\\n\", daily*365/12*0.2;
  printf \"trailing/12*0.2 = %.10f\\n\", trailing/12*0.2;
  printf \"recent*0.2 = %.10f\\n\", recent*0.2;
  printf \"trailing/12*0.1 = %.10f; recent*0.1 = %.10f\\n\", trailing/12*0.1, recent*0.1;
  printf \"line/recent*100 = %.10f%%; line/trailing*100 = %.10f%%\\n\", line/recent*100, line/trailing*100;
  printf \"line/30*7 = %.10f; *14 = %.10f; *30 = %.10f\\n\", line/30*7, line/30*14, line/30*30;
  printf \"(700,1400,2100); (930,1860,2790)\\n\";
  printf \"manual/trailing*100 = %.10f%%\\n\",17237.87/trailing*100;
  printf \"830/1716*100 = %.10f%%\\n\",830/1716*100;
  printf \"53/167*100 = %.10f%%\\n\",53/167*100;
  printf \"19/133*100 = %.10f%%\\n\",19/133*100;
  printf \"recent/17 = %.10f; recent/21 = %.10f\\n\",recent/17,recent/21;
}'" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
trailing/12 = 3523.8008333333
(recent-(trailing/12))/(trailing/12)*100 = 32.0315823752%
daily*365 = 56505.6500000000
daily*365/12*0.2 = 941.7608333333
trailing/12*0.2 = 704.7601666667
recent*0.2 = 930.5060000000
trailing/12*0.1 = 352.3800833333; recent*0.1 = 465.2530000000
line/recent*100 = 18.1956913765%; line/trailing*100 = 2.0020049374%
line/30*7 = 197.5306666667; *14 = 395.0613333333; *30 = 846.5600000000
(700,1400,2100); (930,1860,2790)
manual/trailing*100 = 40.7653336442%
830/1716*100 = 48.3682983683%
53/167*100 = 31.7365269461%
19/133*100 = 14.2857142857%
recent/17 = 273.6782352941; recent/21 = 221.5490476190

exec
/bin/zsh -lc "printf '%s\\n' '--- campaign hrefs ---'
rg -n 'href=|EvidenceLink id=' src/app/ergoworks/campaign-plan/page.tsx
printf '%s\\n' '--- referenced evidence ids and declared evidence ids ---'
rg -o 'EvidenceLink id=\"["'^"]+"'"' src/app/ergoworks/campaign-plan/page.tsx | sort -u
printf '%s\\n' 'declared:'
rg -o 'id: \"6[a-g]\\.[0-9]+\"' src/app/ergoworks/plan/evidence/page.tsx | sort -u
printf '%s\\n' '--- bundle numbers and target section ---'
rg -n 'number: \"0[1-5]\"|id=\\{"'`bundle-'"\\"'$'"\\{bundle.number\\}"'`'"\\}' src/app/ergoworks/plan/decisions/page.tsx
printf '%s\\n' '--- memo section ids ---'
rg -n 'id=\"["'^"]+"'"' src/app/ergoworks/plan/page.tsx" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
--- campaign hrefs ---
31:      href={`/ergoworks/plan/evidence#evidence-${id}`}
94:        <a className={styles.scrollCue} href="#position">
116:              <strong>[Verified]</strong> <EvidenceLink id="6a.3">A$42,285.61</EvidenceLink> over the twelve
118:              <EvidenceLink id="6a.6">A$4,652.53</EvidenceLink>, roughly 32% above that average.
124:              <strong>[Verified]</strong> <EvidenceLink id="6a.7">17 events: 4 enquiry forms and 13 phone calls</EvidenceLink>.
131:              <strong>[Verified]</strong> <EvidenceLink id="6a.8">A$273.68 strict, A$221.55 loose</EvidenceLink>.
150:              <EvidenceLink id="6a.4">A$17,237.87 — 40.8% of campaign spend</EvidenceLink> over the trailing
159:              <EvidenceLink id="6a.10">A$846.56 across 125 clicks for two reported conversions</EvidenceLink>{" "}
168:              <strong>[Verified]</strong> <EvidenceLink id="6a.9">All 16 enabled conversion actions are primary</EvidenceLink>,
169:              and the account <EvidenceLink id="6a.12">includes a second service line&rsquo;s campaign</EvidenceLink> —
186:              <strong>[Verified]</strong> Paid Search is <EvidenceLink id="6g.5">48% of all site sessions — 830 of 1,716 — ahead of organic at 561</EvidenceLink>.
193:              <strong>[Verified]</strong> On the Sydney assessment query, <EvidenceLink id="6b.1">two of our rows sit at positions 3.8 and 4.3</EvidenceLink>{" "}
195:              to be the Business Profile listing — <EvidenceLink id="6b.2">still to be confirmed</EvidenceLink>.
201:              <strong>[Verified]</strong> <EvidenceLink id="6g.7">Some referral visits arrive from workplace intranets and collaboration tools</EvidenceLink> —
228:              <strong>[Verified]</strong> The equipment store shows <EvidenceLink id="6c.4">19 of 133 organisations reordered — about 32% of company-attributed orders</EvidenceLink>.
229:              <strong> [Verified]</strong> That establishes repeat buying, <EvidenceLink id="6c.8">not that consulting caused any order</EvidenceLink> —
255:              <strong>[Verified]</strong> Trailing year <EvidenceLink id="6a.3">A$42,285.61</EvidenceLink> (≈A$3,524/month average) ·
256:              latest 30 days <EvidenceLink id="6a.6">A$4,652.53</EvidenceLink> (≈32% above that average) ·
257:              live daily budget <EvidenceLink id="6a.2">A$154.81</EvidenceLink>, which annualises to roughly
310:              <strong>[Verified]</strong> The line spent <EvidenceLink id="6a.10">A$846.56 for two reported conversions</EvidenceLink> in
345:              <EvidenceLink id="6a.8">A$273.68 per recorded lead</EvidenceLink> into a verdict — plus your
348:            <a className={styles.hubCardGo} href="/ergoworks/plan/decisions#bundle-01">Open the detail <ArrowRight size={13} /></a>
356:              Melbourne only, while <EvidenceLink id="6a.11">a Canberra line still converts</EvidenceLink> —
359:            <a className={styles.hubCardGo} href="/ergoworks/plan/decisions#bundle-02">Open the detail <ArrowRight size={13} /></a>
369:            <a className={styles.hubCardGo} href="/ergoworks/plan/decisions#bundle-03">Open the detail <ArrowRight size={13} /></a>
376:              conversions (<EvidenceLink id="6a.14">goal configuration</EvidenceLink>), and calls count from
380:            <a className={styles.hubCardGo} href="/ergoworks/plan/decisions#bundle-04">Open the detail <ArrowRight size={13} /></a>
388:              <EvidenceLink id="6g.3">no social activity exists to inherit</EvidenceLink>, so that test starts
391:            <a className={styles.hubCardGo} href="/ergoworks/plan/decisions#bundle-05">Open the detail <ArrowRight size={13} /></a>
407:              <strong>[Verified]</strong> <EvidenceLink id="6a.7">13 of the 17 recorded leads are calls</EvidenceLink>,
425:              <strong>[Verified]</strong> <EvidenceLink id="6c.7">No usable equipment margin data exists yet</EvidenceLink>,
485:          <Link className={styles.pdfLink} href="/ergoworks/plan">
488:          <Link className={styles.pdfLink} href="/ergoworks/plan/evidence">
--- referenced evidence ids and declared evidence ids ---
EvidenceLink id="6a.10"
EvidenceLink id="6a.11"
EvidenceLink id="6a.12"
EvidenceLink id="6a.14"
EvidenceLink id="6a.2"
EvidenceLink id="6a.3"
EvidenceLink id="6a.4"
EvidenceLink id="6a.6"
EvidenceLink id="6a.7"
EvidenceLink id="6a.8"
EvidenceLink id="6a.9"
EvidenceLink id="6b.1"
EvidenceLink id="6b.2"
EvidenceLink id="6c.4"
EvidenceLink id="6c.7"
EvidenceLink id="6c.8"
EvidenceLink id="6g.3"
EvidenceLink id="6g.5"
EvidenceLink id="6g.7"
declared:
id: "6a.1"
id: "6a.10"
id: "6a.11"
id: "6a.12"
id: "6a.13"
id: "6a.14"
id: "6a.2"
id: "6a.3"
id: "6a.4"
id: "6a.5"
id: "6a.6"
id: "6a.7"
id: "6a.8"
id: "6a.9"
id: "6b.1"
id: "6b.2"
id: "6b.3"
id: "6b.4"
id: "6c.1"
id: "6c.2"
id: "6c.3"
id: "6c.4"
id: "6c.5"
id: "6c.6"
id: "6c.7"
id: "6c.8"
id: "6d.1"
id: "6d.2"
id: "6d.3"
id: "6d.4"
id: "6d.5"
id: "6d.6"
id: "6e.1"
id: "6f.1"
id: "6f.2"
id: "6f.3"
id: "6g.1"
id: "6g.2"
id: "6g.3"
id: "6g.4"
id: "6g.5"
id: "6g.6"
id: "6g.7"
id: "6g.8"
--- bundle numbers and target section ---
414:    number: "01",
422:    number: "02",
430:    number: "03",
438:    number: "04",
446:    number: "05",
605:          <section key={bundle.number} id={`bundle-${bundle.number}`} style={{ scrollMarginTop: "5.5rem", marginTop: "3.5rem" }}>
--- memo section ids ---
87:      <section className={styles.stateSection} id="known">
102:              <strong>[Verified]</strong> <EvidenceLink id="6a.3">A$42,285.61</EvidenceLink> over the trailing twelve months to 24 July 2026. The latest 30-day pull shows <EvidenceLink id="6a.6">A$4,652.53</EvidenceLink> of spend.
108:              <strong>[Verified]</strong> <EvidenceLink id="6a.7">17 platform-recorded leads</EvidenceLink> — four enquiry-form submissions and 13 call conversions — in the latest 30-day window, before deduplication and CRM qualification.
114:              <strong>[Verified]</strong> <EvidenceLink id="6a.8">A$273.68</EvidenceLink> on the strict definition. This is raw-lead cost, not qualified-lead performance and not a target CPA.
120:              <strong>[Verified]</strong> <EvidenceLink id="6a.7">13 of the 17 recorded leads are call conversions</EvidenceLink>. A form-only landing-page plan would miss most of the current lead path.
126:      <section className={styles.docSection} id="wedge">
157:            <strong>[Verified]</strong> The equipment store shows <EvidenceLink id="6c.4">19 of 133 organisations reordered, accounting for about 32% of company-attributed orders</EvidenceLink>; <EvidenceLink id="6c.5">repeat buyers include large employers and government bodies</EvidenceLink>. This is evidence that organisations repeat-buy equipment; it does not prove that a consulting engagement caused those orders. I would measure it as associated cross-sell value, not causal revenue.
162:      <section className={styles.questionsSection} id="wrong-now">
177:              <strong>Manual-handling concentration.</strong> <strong>[Verified]</strong> In the trailing twelve months ending 24 July 2026, the manual-handling ad group spent <EvidenceLink id="6a.4">A$17,237.87</EvidenceLink> from <EvidenceLink id="6a.3">A$42,285.61</EvidenceLink> campaign spend: <EvidenceLink id="6a.4">40.8%</EvidenceLink> of campaign spend. The narrower <EvidenceLink id="6a.4">49.4%</EvidenceLink> is only the share of keyword-targeted ad-group spend after the dynamic-search group is excluded; it is not a whole-campaign percentage and not one keyword.
183:              <strong>Certificate-intent burn.</strong> <strong>[Verified]</strong> The broad <code>+manual +handling +certificate</code> line used <EvidenceLink id="6a.10">A$846.56</EvidenceLink> across <EvidenceLink id="6a.10">125 clicks</EvidenceLink> for <EvidenceLink id="6a.10">two reported conversions</EvidenceLink> in the latest 30-day window — <EvidenceLink id="6a.10">18%</EvidenceLink> of campaign spend. <strong>[Interpretation]</strong> It sits in a commodity certificate market. The two reported conversions cannot be confirmed as qualified corporate enquiries from the platform data — enough for a reversible quarantine, not enough to conclude every matched query is unsuitable.
189:              <strong>Conversion contamination.</strong> <strong>[Verified]</strong> <EvidenceLink id="6a.9">All 16 enabled conversion actions remain primary</EvidenceLink>, including soft actions and <EvidenceLink id="6a.12">activity from another service line</EvidenceLink>. <strong>[Interpretation]</strong> The platform total therefore cannot be treated as clean corporate pipeline.
195:      <section className={styles.offerSection} id="costs">
206:              <strong>[Verified]</strong> The trailing Search baseline is <EvidenceLink id="6a.3">A$42,285.61 per year</EvidenceLink>. The live campaign budget is <EvidenceLink id="6a.2">A$154.81 per day</EvidenceLink>; the latest 30-day spend was <EvidenceLink id="6a.6">A$4,652.53</EvidenceLink>. I would protect the assessment cluster from broad certificate intent while the goals are repaired.
229:      <section className={`${styles.docSection} ${styles.alt}`} id="next">
240:              <strong>[Verified]</strong> The broad <code>+manual +handling +certificate</code> keyword spent <EvidenceLink id="6a.10">A$846.56 across 125 clicks for two reported conversions</EvidenceLink> in the latest 30-day window. At that observed pace, each week of delay leaves roughly A$197 of observed spend exposed (A$846.56 ÷ 30 × 7) — an observation, not a target cost per lead, acquisition cost or proven result. <strong>[Interpretation]</strong> I recommend one-line approval to quarantine the keyword immediately at <a href="/ergoworks/plan/decisions#gate-C12">gate C12</a> while the credential question is answered at <a href="/ergoworks/plan/decisions#gate-A3">gate A3</a>. This is reversible and deliberately separate from the broader approval bundle: the containment is worth days, not weeks. The two reported conversions cannot be confirmed as qualified corporate enquiries from the platform data, so this does not conclude that the spend is wasted or that all certificate intent is unsuitable.
261:              Because <EvidenceLink id="6a.7">13 of the 17 recorded leads are calls</EvidenceLink> [Verified], call tracking is not optional: capture the call ID and connected duration, apply the hours-and-disposition rule once approved at <a href="/ergoworks/plan/decisions#gate-B6">gate B6</a>, deduplicate against a form from the same organisation, and import <code>qualified_call</code> as the only primary call signal once reliable.
284:      <section className={styles.questionsSection} id="verdict">
319:      <section className={styles.docSection} id="guardrails">
327:            <strong>[Verified]</strong> Equipment margin is not available as a decision input: the store contains <EvidenceLink id="6c.7">531 published products with no populated cost-of-goods data</EvidenceLink>. Until a finance source exists, I will report associated cross-sell value separately from advertising performance, not margin, LTV or causal revenue.

exec
/bin/zsh -lc "rg --files docs | rg '("'^|/)ergoworks(/|$)|CONTEXT'"\\.md"'$'"' | sort | head -80" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
docs/biosymm/CONTEXT.md
docs/ergoequip/CONTEXT.md
docs/ergoequip/audit-2026-06/CONTEXT.md
docs/ergoequip/audit-2026-06/GROWTH-CONTEXT.md
docs/ergoequip/audit-2026-06/VERIFY-CONTEXT.md
docs/ergoworks-consulting/CONTEXT.md
docs/growthos/CONTEXT.md
docs/oswa/CONTEXT.md

exec
/bin/zsh -lc "sed -n '1,240p' docs/ergoworks-consulting/CONTEXT.md" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
# ErgoWorks Consulting — client context

Australian B2B **workplace-ergonomics CONSULTING** business (`ergoworksconsulting.com.au`) — the
consulting arm of the same client group as **ErgoEquip** (equipment store) and **Biosymm** (physio).
NOT the same as ErgoEquip. **No app code** for the ads work — managed via Google Ads / GA4 / GTM APIs;
the only repo artifact is an optional private shareable page under `src/app/**`.

## Current status (2026-07-12)
Marcus wants campaign **ideas to review Monday** for the ErgoWorks *corporate* campaign (top-of-funnel
demand gen). Verified live: this is **NOT greenfield** — a mature ~$40k/yr Google Search program already
runs. Plan = **optimize existing + add missing TOFU (Meta + dedicated LP + Snapshot offer) + fix
measurement**. Full numbers in `research/account-snapshot.md`.

## External systems (IDs only — creds via `.mcp.json` / `../secrets/`)
- Google Ads **9258098368** "zzz Ergoworks" (AUD/Sydney, auto-tag ON, conv id `867987507`) — via pipeboard.
  ⚠️ mixes Consulting campaign `700072710` + Physiotherapy `700030226` (de-mix). PMax `16143562968` +
  Remarketing `843760968` both PAUSED.
- GA4 **316175981** (ergoworksconsulting.com.au), account `SIQ - Ergoworks` 530267.
- Ahrefs for keyword volumes.

## Folder map
- `research/` — `account-snapshot.md` (live figures, authoritative), `SYNTHESIS.md` (decisions),
  `luna-A/B/C-*.md` (raw research: B & C full, A partial).
- `FABLE-PROMPT.md` — the ready-to-run Fable 5 orchestration prompt.
- `ergoworks-campaign-plan.md` + `appendices/A–E` + `open-questions.md` — the deliverable (produced by the
  Fable/Codex run).

## Rules
Planning only — never touch the live ad account without explicit go-ahead. `docs/` is gitignored — never
commit anything here. Keep ErgoWorks isolated from ErgoEquip/Biosymm; de-mix Consulting vs Physiotherapy.

## Update 2026-07-19 — Monday-call prep
Greg call notes (17/07): `research/greg-call-notes-2026-07-17.md` — "simplify" = 70/20/10 split, offer
re-opened (Snapshot contested; download/quiz w/ corporate-intent gate), two-flow LP (build after Greg
approval), Sydney stress-test-first. Live snapshot: `research/live-snapshot-2026-07-19.md` (geo matches
15/07 correction; all 16 conversion actions STILL primary; "DSA" ad-group query leak quantified).
Call memo: `simplification-options-2026-07-20.md` (sol-reviewed, 13 findings applied). `open-questions.md`
geo row corrected + Greg-call update appended. Account remains read-only until Marcus/Greg approve.

## Update 2026-07-28 — Gated-pack review pass (5-lens panel + live re-verify)
Full independent review of the live 4-route pack: L1 traceability + L2 coherence + L5 redaction (luna
xhigh), L3 tracking specialist, L4 live GAQL re-pull (run by Fable; subagents lack the pipeboard MCP).
Zero figure drift vs 25/07; window confirmed = LAST_30_DAYS on 25/07 → 25 Jun–24 Jul. NEW live facts:
physio campaign 700030226 is ALSO Max Conversions on account-default goals (contamination mechanically
eligible BOTH ways, no cross-accrual observed) + both call actions count from 1 second. 37 findings →
31 accepted / 6 rejected: adjudication in `revised-plan-v2/research/review-pass-2026-07-28.md`.
Pages fixed: citation relinks (A3/C12 split, 6c.5, 6a.3), new evidence 6a.14, "eligible to optimise"
contamination wording, honest call-count framing (drops "floor not a total"), consent posture retagged
[Assumption] w/ AU-law context + trade-off, behavioural acceptance conditions, redaction ("independent
adversarial review"/"this pass" removed), B12 added to must-be-true #4, Maximise spelling. Campaign-plan
notice gains re-verified date. Build green; all anchors resolve. Worker outputs in
`feature-research/ergoworks-pack-review-2026-07-28/`.

Cross-check complete: evidence mappings, arithmetic, [Verified] boundaries, gated-pack consistency, and anchors were reviewed.
  ✓ Read campaign-plan page and enumerate claims, tags, links, and figures
  ✓ Cross-check each claim against evidence records and gated pack pages
  ✓ Validate anchors and arithmetic; compile findings and passed checks
codex
No blocker-level findings.

| Line | Claim | Problem | Suggested fix | Severity |
|---|---|---|---|---|
| [107–109](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:108) | “22 conversions … against 17 recorded lead events, because soft and unrelated actions still count.” | Figures are unlinked; 6a.6 and 6a.7 support the counts, but do not allocate the five-event difference or prove that exact cause. | Link 6a.6 and 6a.7; say the gap is “consistent with” mixed primary actions and its composition is unestablished. | major |
| [149–151](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:149) | “Some of that is genuine employer demand.” | 6a.4 does not establish demand quality or genuine employer intent. The `[Verified]` paragraph includes an interpretation. | Retag and soften: “[Interpretation] Some may be genuine employer demand…” | major |
| [168–171](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:168) | “Performance is not yet safely attributable to consulting.” | 6a.9/6a.12 establish contamination risk, not that data is mixed in every report. | Add `[Interpretation]` before the conclusion and use “not a clean basis for attribution.” | major |
| [186–187](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:186) | “The business is paid-dependent today.” | 6g.5 establishes Paid Search is the larger measured source, not profitability or future budget dependence. | Label this sentence `[Interpretation]`. | minor |
| [160](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:160) | “About 2% of the trailing-year total.” | Arithmetic is correct, but the claim only links 6a.10; the denominator comes from 6a.3. | Link “trailing-year total” to 6a.3 or show the formula. | minor |
| [255–258](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:257) | A$930 is 20% of the “current run rate.” | A$930 is correct using A$4,652.53 latest-30-day spend. If “current run rate” means A$154.81 × 365, the result is about A$942/month. | Explicitly identify A$4,652.53 as the basis, or change the figure to ~A$942. | minor |
| [273–277](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:273) and [317–318](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:317) | Illustration and waiting-cost ladders. | Values are numerically correct, but the derived A$700–A$2,790 and A$197/A$395/A$847 figures are unlinked despite the promise that every figure links to evidence. | Add source links/formulas, and narrow line 78 to “every observed or derived evidence figure.” | minor |
| [310–312](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:310) | `[Verified]` includes “those two cannot be confirmed as qualified corporate enquiries.” | Spend and conversion count are verified; qualification is an interpretation/boundary. The gated memo labels this same clause `[Interpretation]`. | Split the tag: `[Verified]` for spend/conversions, `[Interpretation]` for qualification status. | major |
| [355–357](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:355) | “The live site names Sydney and Melbourne only.” | This is supported by 6d.6, but the only linked record is 6a.11 for Canberra. | Add an EvidenceLink to 6d.6 around the Sydney/Melbourne claim. | minor |
| [388–389](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:388) | “No social activity exists to inherit… genuinely cold.” | 6g.3 establishes no verified recent paid-social activity in the GA4 property/window. Its boundary expressly does not establish that no Meta account or historical campaign exists. | Say “no verified recent paid-social activity appears in this GA4 property/window.” | major |
| [425–427](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:425) | Worker/assessment data “never enters” audiences and route-out “fires no lead event.” | 6c.7 only establishes unavailable equipment-margin data. These are implementation design rules in the measurement pack, not verified current-state facts. | Retag as `[Assumption/Design rule]`; phrase as “must never enter” and “will be configured to fire no event.” | major |

Passed checks:

- All linked evidence IDs resolve to records in the evidence page.
- Requested arithmetic rounds correctly: A$3,524/month, ~32%, ~A$56,500 annualised, A$197/A$395/A$847, A$700/A$1,400/A$2,100, A$930/A$1,860/A$2,790, A$350–A$465, and 18%/2%.
- Repeat-order framing, Business Profile uncertainty, raw-lead-cost boundary, call-quality caveat, equipment-margin limitation, and non-causal cross-sell framing match the evidence boundaries.
- Decision anchors `bundle-01` through `bundle-05` exist; `#position` exists; memo anchors and evidence anchors resolve. No `/ergoworks/plan#...` links appear on the new page.
- The five-decision/34-gate structure, 70/20/10 planning shape, Sydney-first recommendation, separate loss-cap decision, and planning-only status are consistent with the gated pack.
hook: Stop
hook: Stop Completed
tokens used
195,709
No blocker-level findings.

| Line | Claim | Problem | Suggested fix | Severity |
|---|---|---|---|---|
| [107–109](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:108) | “22 conversions … against 17 recorded lead events, because soft and unrelated actions still count.” | Figures are unlinked; 6a.6 and 6a.7 support the counts, but do not allocate the five-event difference or prove that exact cause. | Link 6a.6 and 6a.7; say the gap is “consistent with” mixed primary actions and its composition is unestablished. | major |
| [149–151](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:149) | “Some of that is genuine employer demand.” | 6a.4 does not establish demand quality or genuine employer intent. The `[Verified]` paragraph includes an interpretation. | Retag and soften: “[Interpretation] Some may be genuine employer demand…” | major |
| [168–171](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:168) | “Performance is not yet safely attributable to consulting.” | 6a.9/6a.12 establish contamination risk, not that data is mixed in every report. | Add `[Interpretation]` before the conclusion and use “not a clean basis for attribution.” | major |
| [186–187](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:186) | “The business is paid-dependent today.” | 6g.5 establishes Paid Search is the larger measured source, not profitability or future budget dependence. | Label this sentence `[Interpretation]`. | minor |
| [160](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:160) | “About 2% of the trailing-year total.” | Arithmetic is correct, but the claim only links 6a.10; the denominator comes from 6a.3. | Link “trailing-year total” to 6a.3 or show the formula. | minor |
| [255–258](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:257) | A$930 is 20% of the “current run rate.” | A$930 is correct using A$4,652.53 latest-30-day spend. If “current run rate” means A$154.81 × 365, the result is about A$942/month. | Explicitly identify A$4,652.53 as the basis, or change the figure to ~A$942. | minor |
| [273–277](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:273) and [317–318](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:317) | Illustration and waiting-cost ladders. | Values are numerically correct, but the derived A$700–A$2,790 and A$197/A$395/A$847 figures are unlinked despite the promise that every figure links to evidence. | Add source links/formulas, and narrow line 78 to “every observed or derived evidence figure.” | minor |
| [310–312](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:310) | `[Verified]` includes “those two cannot be confirmed as qualified corporate enquiries.” | Spend and conversion count are verified; qualification is an interpretation/boundary. The gated memo labels this same clause `[Interpretation]`. | Split the tag: `[Verified]` for spend/conversions, `[Interpretation]` for qualification status. | major |
| [355–357](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:355) | “The live site names Sydney and Melbourne only.” | This is supported by 6d.6, but the only linked record is 6a.11 for Canberra. | Add an EvidenceLink to 6d.6 around the Sydney/Melbourne claim. | minor |
| [388–389](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:388) | “No social activity exists to inherit… genuinely cold.” | 6g.3 establishes no verified recent paid-social activity in the GA4 property/window. Its boundary expressly does not establish that no Meta account or historical campaign exists. | Say “no verified recent paid-social activity appears in this GA4 property/window.” | major |
| [425–427](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/campaign-plan/page.tsx:425) | Worker/assessment data “never enters” audiences and route-out “fires no lead event.” | 6c.7 only establishes unavailable equipment-margin data. These are implementation design rules in the measurement pack, not verified current-state facts. | Retag as `[Assumption/Design rule]`; phrase as “must never enter” and “will be configured to fire no event.” | major |

Passed checks:

- All linked evidence IDs resolve to records in the evidence page.
- Requested arithmetic rounds correctly: A$3,524/month, ~32%, ~A$56,500 annualised, A$197/A$395/A$847, A$700/A$1,400/A$2,100, A$930/A$1,860/A$2,790, A$350–A$465, and 18%/2%.
- Repeat-order framing, Business Profile uncertainty, raw-lead-cost boundary, call-quality caveat, equipment-margin limitation, and non-causal cross-sell framing match the evidence boundaries.
- Decision anchors `bundle-01` through `bundle-05` exist; `#position` exists; memo anchors and evidence anchors resolve. No `/ergoworks/plan#...` links appear on the new page.
- The five-decision/34-gate structure, 70/20/10 planning shape, Sydney-first recommendation, separate loss-cap decision, and planning-only status are consistent with the gated pack.
