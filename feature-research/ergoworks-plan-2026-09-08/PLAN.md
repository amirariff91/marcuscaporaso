# ErgoWorks "plan of attack" — week of Tue 8 Sep 2026

## Context

Chat 199 (`docs/_chat 199.txt`) ends with Marcus chasing twice (Mon 07/09) for "the plan of attack for Ergoworks this week", saying the comms gap makes the client hard to manage. On 04/09 he redirected all effort to proving ErgoWorks consulting demand, with six next steps: tracking fix, Melbourne extension, tighter targeting, three SEO pages via a reusable template, use those pages for organic + paid, reassess in ~2 weeks. The Granola notes (pasted by Amir) add: conversions 29.95 → 16.87 → 11 (Jun→Aug), CPA $150→$420, Joel = dev, "ErgoWorks powered by Biosymm" stays, Biosymm replicas need ≥40% different content, migration decision deferred ~2 weeks, Marcus to check Joel's capacity before promising a Biosymm LP.

Nothing has gone to Marcus since 04/09 10:07. The Friday 04/09 Greg doc was never sent (gate = unclassified 02/09 LP submission, still unclassified per Amir). Joel's fix timing is unknown.

Deliverable = two layers: (1) a reply to Marcus **today** with live status, the week's plan and his asks; (2) the week's work, evidence-checked, ready to execute the moment approvals land.

## Live state verified today (owner + 3 Gemini 3.8 Flash workers, all read-only)

| Item | State | Evidence |
|---|---|---|
| Dev form fix (Joel, due today) | **NOT landed** | `/contact-us` still `@submit.prevent="submitForm"` (fetch + inline success); GA4 4–8 Sep: zero enquiry events |
| GTM-KXGD4GM v24 | no trigger for the spec's `contact_enquiry`; only legacy `www…/thank-you/` trigger + LP `direct_enquiry` | W2 parsed public container |
| GA4 | `direct_enquiry`/`phone_click` NOT key events; custom dims service_type/team_size_band/timeframe_band absent; no hostname exclusion | W2 API |
| Staging copies | still 200, no X-Robots-Tag (on-forge, framer.app, ergonomic.ergoworks.com.au) | curl |
| GSC | www property only; stale `sitemap_index.xml` (430 URLs, errors) vs live `/sitemap.xml` (168) | `list_properties`, `get_sitemaps` |
| Old campaign 700072710 | A$150–300/day, MaxConv no tCPA, A$155/day budget, rank-lost IS 33–69%; conversions = call-forwarding only (03/09, 07/09) | GAQL |
| Sydney campaign 24158353407 | **starved since 03/09**: 3–4 impr/day, A$0. Cause: tCPA A$250 set 29/08 (API) then budget A$60→100 and tCPA→A$200 on 31/08 via web UI (mjc.growth login = our side) on zero biddable conversions; plus old campaign outbids it on identical Sydney keywords. Weekend zero rows = Mon–Fri ad schedule (by design) | GAQL change_event + W1 |
| 02/09 conversion | Ads "LP Lead" + GA4 `direct_enquiry` on `/corporate-ergonomic-consulting`, google/cpc, Sydney desktop, full funnel (form_start → direct_enquiry). Leans real; unverified until Greg checks inbox | W2 |
| Old campaign search terms (30d) | A$2,723 / 739 terms; employer intent 10.7% of spend, certification/course 23%, regulators/competitors/ACT/other 65%; ~A$1.1–1.4k/mo removable with 16 new negatives | W1 |
| SEO targets (GSC www, last 28d) | "ergonomic assessment sydney" pos 28 (0 clicks); "manual handling training sydney" 0 impressions; "ergonomic workstation assessment" pos 55; `/manual-handling-training-sydney` = 404; existing pages ~670–850 words, no FAQ, no page-level schema | W3 |
| Melbourne demand (Ahrefs AU) | "ergonomic assessment melbourne" 150/mo KD0 CPC US$7 (> Sydney 100/mo); "manual handling training melbourne" 100/mo; `/ergonomic-consultants-in-melbourne` exists (200, pos ~13) | Ahrefs + curl |
| Gated pack site | 401 gate OK; local main == origin/main (edceea4); Coolify redeploy unverified; creds never sent to Marcus | git, curl |
| Weekly-report template pulls | all GA4 pulls PASS against live schema; GAQL schema OK | W2 dry-run |

Worker outputs: `scratchpad/w1-out.md` (Ads), `w2-out.md` (measurement), `w3-out.md` (SEO), `w4` = Astra advisory (pending). Run dirs under `.agent-runs/20260908-0458*`.

## Deliverables (what gets built this week)

### D1 — Today: reply to Marcus (WhatsApp, Amir's voice) + hand him the Greg update
File: `docs/ergoworks-consulting/greg-review-2026-09-04/deliverables/whatsapp-marcus-2026-09-08.md` (new). Content, in order:
1. Apology for the gap, one line. Then "what's true right now" (form fix not live; Sydney campaign starved since Wed — our tCPA, not the client; 02/09 lead leans real but unconfirmed).
2. This week's plan in 5 lines (D2–D6 below) with dates.
3. Four asks: (a) confirm Joel's push date; (b) tell me test/real on 02/09; (c) 10 min in GA4 Admin (key events + 3 custom dims) — or give mjc.growth Editor and we do it; (d) approve the Ads changes below (reversible, logged).
4. Ads changes needing his OK: remove tCPA on Sydney; 16 negatives + pause modified-broad on old campaign; Melbourne clone (paused until form fix live); tCPA on old campaign deferred (not Thu 10 Sep).
5. Greg doc: re-issue `friday-update-2026-09-04-SEND.md` as a Tuesday catch-up (`greg-update-2026-09-08-SEND.md`): same evidence, dates corrected, 02/09 lead "being confirmed", tCPA date removed, Sydney campaign status stated honestly, weekly 6-liner starts Fri 11 Sep.
6. Gated site: confirm Coolify redeploy of edceea4, then send creds in a separate message (never sent).

### D2 — Measurement cut-over pack (pre-built; executes within ~1 h of Joel's push)
Runbook = W2 §Cut-over (8 steps). Save as `greg-review-2026-09-04/deliverables/cutover-runbook-2026-09-08.md`. Key corrections to the existing `tracking-fix-spec.md`: the only GA4 config tag is `G-LQCWNK3M2K` (Tag 5), no separate main-site stream; spec event `contact_enquiry` has NO trigger in v24 — must be built before Joel's push lands or it fires into nothing; if Joel instead pushes `direct_enquiry` it would wrongly fire the LP Lead Ads tag. Owners: Joel (push + on-forge noindex), Marcus (GA4 Admin), us (GTM v25 from v24, Ads action "Main-site Enquiry" into goal 6458792967, GSC domain property + sitemap swap), Greg (DNS TXT, Test Co OK, inbox check).

### D3 — Paid search (all changes logged in `mutation-log.md` with reverse calls; none applied before Marcus's OK)
1. **Un-starve Sydney**: remove tCPA (pure MaxConv), keep A$60–100/day; note the 31/08 tCPA/budget change was made under our login and say so.
2. **Old campaign 700072710 tightening**: add W1's negatives minus the buying-intent ones (drop `near me`, `in person`, `refresher`, `liverpool`; ACT terms only after Greg confirms no ACT delivery) → ~12 negatives, none duplicating the 447 existing. No blanket pause of modified-broad keywords (Astra: BMM ≠ broad); flag them for search-term review. Restructure into 3 B2B themes is a week-2+ proposal, not this week. Frame as "spend on irrelevant terms removed (~A$1.1k/mo in the last 30 days)", not cash saved.
3. **Melbourne**: clone as `SEARCH_MEL_Ergonomics-Assessment_2026Q3` (PAUSED), A$50/day, MaxConv no tCPA, PRESENCE geo 1000567, Mon–Fri schedule, Sydney negatives + "sydney"; Melbourne headlines/descriptions; final URL = corporate LP `/corporate-ergonomic-consulting` (city-neutral, only tracked form) and it stays the final URL for the whole 2-week window. Add "melbourne" negative to Sydney. Enable only when all four hold: main-site form tracked; Sydney delivery recovered after the tCPA removal; Greg confirms Melbourne delivery capacity; Marcus sets a total spend ceiling.
4. **tCPA guardrail on old campaign**: NOT this week. Trigger = form signal live ≥14 days AND ≥12 verified conversions AND negatives live; start A$280–300, step to A$220–250. Marcus's brief said Thu 10 Sep — correct him.
5. Confirm with Greg: ACT coverage (fyshwick/canberra A$146 in 30d), keep manual-handling ad group?, Melbourne delivery capacity.

### D4 — SEO: 3 priority pages + reusable template
Save W3's template spec + 3 build sheets as `greg-review-2026-09-04/seo/template-spec-2026-09-08.md` and `seo/build-sheets-2026-09-08.md`, then draft full page copy this week (`seo/copy/<slug>.md` ×3) in Marcus's voice:
- `/ergonomic-consultants-in-sydney` (keep URL) → "ergonomic assessment sydney", ~1,400 words
- `/manual-handling-training-sydney` (NEW) → 200/mo, course-shaped page with explicit non-RTO boundary, Course+Service schema, ~1,550 words
- `/ergonomic-solutions/workstation-assessments` (keep URL) → "ergonomic workstation assessment" (200/mo) primary, "workplace ergonomic assessment" secondary, ~1,580 words
Template = Statamic blocks: hero + intent line + CTA, who-it's-for, 4-step process, deliverables info boxes, local coverage, proof (Greg-approved only), FAQ accordion (5–7), related services, sticky CTA; single `@id` org node + Service/Course node; paid-landing variant rules (UTM/gclid → slim nav, form in page); ≥40%-unique rule spelled out per block for Biosymm/Melbourne replicas. Flow: us draft (Wed–Thu) → Marcus review (Fri) → Greg facts (6 asks listed in W3) → Joel builds week 2 subject to his capacity. Ads final URLs do NOT change during the 2-week window (Astra). The training page copy waits until Greg confirms the corporate manual-handling offer. Gated `/ergoworks/plan/seo` page updated with the build sheets.
Caveat to carry: W3's claim that FAQPage rich results were restricted in May 2026 is unverified — keep visible FAQs regardless.

### D5 — Weekly report, first real issue Fri 11 Sep
Use `weekly-report-template.md` (pulls dry-run PASS). Add `weekly/data.ts` entry for w/e 6 Sep; count main-site form leads from cut-over date only; state Sydney starvation and fix.

### D6 — Housekeeping
- Coolify redeploy check + creds to Marcus.
- CONTEXT.md update (2026-09-08 section) + memory note (Astra = `openai-codex/gpt-6-astra`, proven "say ok" + research run).
- Save this plan's worker outputs into `feature-research/ergoworks-plan-2026-09-08/` (untracked).

## Execution status (drafts only; nothing sent, deployed or applied)

Three Gemini 3.8 Flash impl workers (model override, docs-only, gitignored folder) have already produced first drafts:
- G1 done: `deliverables/whatsapp-marcus-2026-09-08.md` (442 w), `deliverables/greg-update-2026-09-08-SEND.md` (897 w), `deliverables/lead-log.md`. Owner fixes on go: "final URLs switch" line in wk 2 contradicts the stable-landing-page rule; "gap yesterday" → "last few days".
- G2 done: `deliverables/cutover-runbook-2026-09-08.md` (1,237 w), `deliverables/ads-change-list-2026-09-08.md` (1,475 w).
- G3 running: `seo/template-spec-2026-09-08.md`, `seo/build-sheets-2026-09-08.md`, `seo/copy/*.md` (2 pages).
On approval: owner reads every draft against evidence, one Gemini review pass over all six files, then G4 (impl, worktree) for `weekly/data.ts` w/e 6 Sep entry (spend A$1,157; old campaign IS 26% / rank-lost 52% / budget-lost 22%; Sydney 60 impr, 2 clicks, A$48; organic www clicks 31→19) and the `/plan/seo` page, `bun run build`, then CONTEXT.md + push + Coolify.

## Sequencing this week

| Day | Us | Blocked on |
|---|---|---|
| Tue 8 | D1 reply + Greg doc to Marcus; D2 runbook saved; GTM v25 workspace prepared (unpublished); D3 change list ready | — |
| Wed 9 | Apply approved Ads changes (Sydney tCPA off, negatives, MEL clone paused); start page copy | Marcus OK |
| Thu 10 | Cut-over if Joel pushed; Test Co; GSC domain + sitemap; copy drafts continue | Joel, Greg DNS |
| Fri 11 | Weekly report #1; copy drafts to Marcus; enable MEL if form tracked | — |
| Wk 2 | Greg facts → Joel builds template + 3 pages; final URLs switch; 2-week reassessment memo | Joel capacity |

## Proving demand in ~2 weeks (definition to propose, not promise)
Primary (Astra): **3 unrelated net-new employer enquiries with verified consulting need, ≥2 reaching a scoping call / proposal request**, each with source, campaign, spend and Greg's qualification recorded (a lead log, `greg-review-2026-09-04/deliverables/lead-log.md`). Secondary, reported but not the test: recorded enquiries + calls per week from a **tracked** form vs the 5-week 2.4/wk baseline; Sydney (and Melbourne if enabled) cost per qualified enquiry vs the old campaign's Aug A$424 (strict A$466); organic impressions/position on the 3 target queries once the domain property reports. Too little eligible traffic = inconclusive. Framed to Greg as honest floors, never as a migration verdict.

## Verification
- Reply + Greg doc: dual read (British English, Marcus voice, no tool names, every figure traceable to `evidence/` or a worker file); no promised numbers.
- Ads: every mutation via pipeboard, verified back by GAQL, logged with reverse call; no writes before Marcus's message.
- Cut-over: Tag Assistant Preview + GA4 realtime + Ads action shows the Test Co event once; staging hosts blocked; `gtm.js` shows v25 with `contact_enquiry`.
- SEO copy: build-sheet checklist ("done" definition in W3 §Sequence) + schema validator.
- Site: `bun run build` green, `/ergoworks/plan/seo` 401/200, Coolify redeploy live.

## Astra (gpt-6-astra, xhigh) advisory — adopted / rejected

Astra read the synthesis + 3 worker reports (read-only). Verdict: the plan risked confusing "shipping fixes, pages and campaigns" with proving employer demand, and stacked too many concurrent changes into a 2-week observation window. Adjustments applied above and here:

**Adopted**
1. **Proof = qualified employer accounts, not conversion events.** Threshold to propose to Marcus: 3 unrelated net-new employer enquiries with verified consulting need, ≥2 reaching a scoping conversation / proposal request, with source, campaign and spend recorded. Historical event counts stay separate; `phone_click` never counts. Insufficient eligible traffic at the fortnight review = "inconclusive", not "no demand". Migration to Biosymm cannot be decided from ErgoWorks enquiries; say so.
2. **One measurement contract.** Event name `contact_enquiry` + a new direct Ads action (per W2/spec). Tell Joel explicitly NOT to push `direct_enquiry` (would fire the LP Lead Ads tag). End-to-end test = backend accepts → Greg's inbox receives → one lead record → one event. GA4 dims and GSC verification are not prerequisites; they run in parallel.
3. **Starvation cause is inference.** The tCPA-on-zero-history explanation is the most likely, not proven (delivery was thin before the tCPA too). Removing Sydney's tCPA is a bounded recovery experiment after goal QA; no automatic CPA step-downs on the old campaign.
4. **Negatives: exclude demonstrated irrelevance, not vocabulary.** Drop `near me`, `in person`, `refresher`, `liverpool` from the list; keep competitor brands, ACT terms only after Greg confirms no ACT delivery, and course/certificate terms already covered. Do NOT pause the modified-broad keywords on a "BMM = broad" rationale (wrong: retired BMM behaves as phrase); review them on search-term evidence instead. Present savings as "spend removed from irrelevant terms", not cash saved.
5. **Stable paid destination for the window.** Do not switch Ads final URLs to rebuilt pages mid-test. Page copy drafting continues (no dev time, Marcus asked for it), but the training page waits until Greg confirms that offer, and template implementation is week 2+ subject to Joel's capacity.
6. **Send today without waiting** on the 02/09 classification.
7. **Old campaign spending blind**: put a budget cap option (e.g. halve to ~A$75/day until the form is tracked) in front of Marcus as a choice; do not apply unasked.

**Rejected / softened**
- "Drop Melbourne this week": Marcus explicitly asked for it. Compromise = build the clone PAUSED now; enable only when (a) main-site form tracked, (b) Sydney delivery recovered, (c) Greg confirms Melbourne delivery capacity, (d) Marcus sets a total ceiling. Landing page = corporate LP (Astra agrees), not the Melbourne organic page.
- "Drop the template/pages this week": softened to drafting only (see 5).

**Risks Astra added**: the original 100+-employee scope vs WFH targeting (individual bookings could falsely satisfy the proof); GSC www-only data is incomplete, not a numeric "floor"; sitemap submission ≠ indexing.

**Message to Marcus (Astra's framing, adopted):** "You should have had this sooner. Main-site tracking is still not live and Sydney is barely delivering (our tCPA setting; being reversed). This week: a verified enquiry-to-sales path and controlled employer-intent traffic. We report received enquiries, qualification, spend and next actions, not promised lead numbers. Melbourne and the wider page build follow once that path works." Never say "tracking explains all missing leads", "savings secured", or "two weeks decides migration".
