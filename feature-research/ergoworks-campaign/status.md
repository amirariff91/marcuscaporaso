# ErgoWorks campaign-plan build — status

- 2026-07-12 Phase 0 done. GAQL verified: campaign 700072710 bidding = MAXIMIZE_CONVERSIONS, no tCPA
  (no portfolio strategy, no target_cpa_micros returned). W-Audit rec: keep Max Conversions; tCPA
  premature until clean 30+ conv/mo; no ECPC.
- Phase 1: launching 5 parallel Codex sol workers (W-Audit/W-Offer/W-LP/W-Media/W-Track), read-only
  sandbox, output via --output-last-message to scratchpad; Fable verifies then transcribes to
  docs/ergoworks-consulting/appendices/.
- Phase 1 done: 5 appendices verified + transcribed. W-Media kicked back once (Blocking: provisional
  Meta target CPA anchored on the forbidden $212 raw enquiry CPL) — v2 fixed with assumption-labeled
  Snapshot-request CPA anchor A$84.92; A$212.30 retained only as upper-bound sensitivity.
- Phase 2 launching: W-Strategy (strategy doc + open-questions.md).
- Phase 2 done: ergoworks-campaign-plan.md + open-questions.md verified + transcribed. Phase 3 launching (page build in current checkout, new untracked files only — no branch switch, dirty tree).
- Phase 3 done: page at src/app/ergoworks/campaign-plan/ (untracked, current checkout — no branch switch, dirty tree); confidentiality-grep clean; bun build GREEN (Codex's failure was sandbox network blocking Google Fonts, reproduced pre-existing). Phase 4 review launched (Codex xhigh).
- Phase 4 done (2 cycles): xhigh review → 2 Blocking + 5 Major + 2 Minor; W-Fix applied ALL;
  scoped re-check: all RESOLVED, no regressions. PAGE-SYNC applied (2nd attempt — 1st failed:
  codex workspace root was docs/ subdir), confidentiality grep clean, final bun build GREEN.
- COMPLETE 2026-07-12. Deliverables: ergoworks-campaign-plan.md, appendices A–E, open-questions.md,
  src/app/ergoworks/campaign-plan/ (untracked, uncommitted).
- DEPLOYED 2026-07-12: page committed (cc230ab) → merged to main → Coolify deploy finished; live at https://marcuscaporaso.com/ergoworks/campaign-plan (200, noindex).
- 2026-07-12 late: VERIFICATION+ENHANCEMENT round. Pipeboard pulls (search terms/keywords/negatives):
  Brand ad group zero-delivery = all 3 keywords PAUSED (+ brand kws ENABLED duplicated in 5 service
  groups → consolidation repair); "DSA" group = 9 EXACT competitor keywords (conquesting, A$795/30d
  near-zero conv); certificate-intent waste quantified; 419+74 negatives exist. Ahrefs: organic
  negligible (15kw/60 visits) but #1 blog for "manual handling certificate". Lighthouse: client site
  FAST (97/98) — LP case is message-match not speed; plan page 92. Codex quota dry + Ollama 429 →
  panel ran on native claude-ads/general agents (3 lenses, 36 findings, Fable-adjudicated incl.
  certificate decision table). All applied to A/B/D/E + open-questions geo launch-blocker. Evidence
  files: research/live-evidence-2026-07-12.md, live-keywords-negatives-2026-07-12.md,
  lp-mht-content-2026-07-12.md.
- 2026-07-13: Codex quota reset. Delta review (Codex xhigh) of yesterday's enhancement edits found
  1 Blocking + 9 Major + 4 Minor (mostly applier-introduced coherence issues, NOT plan defects).
  Blocking = Meta "never say certificate" rule collided with the Snapshot's own not-a-certification
  caveat → resolved: caveat is the sole sanctioned occurrence. Codex sol applier fixed all 15;
  Fable-verified against ground truth (DSA 4.5-conv vs near-zero subset split; 3-term Brand
  de-dup; QS=3 fail/QS=5 warning per rubric; cert claims → client-sign-off-required; strategy doc
  current-state refreshed; A$600/A$20-day floor normalised). page.tsx untouched (no findings) → no
  redeploy. Findings archived at research/delta-review-findings.md. PACKAGE ACCEPTED.
- 2026-07-13: INDEPENDENT LUNA VALIDATION (3 lenses xhigh, read-only): Lens B (compliance/coherence)
  fully clean; Lens C (strategy/methodology) confirmed core sound (bidding, PMax math, brand
  consolidation, DSA, negatives, event contract, offer registry, isolation, page hygiene all
  CONFIRMED-OK). Lens A + C surfaced 8 honesty/precision defects (Fable-verified against ground
  truth, dismissed 1 false-positive): #1 certificate converters called "corporate" → unclassified
  buyer type; #2 two "Australia-wide" customer-facing instances missing sign-off flag; #3 Meta 5×
  learning check now marked provisional (A$20/day floor = only verified check); #4 Meta relabelled
  greenfield/TOFU pilot not "scaling"; #5 fyshwick furniture-district → hypothesis; #6 "only fyshwick
  converting" → geo-specific qualifier; #7 "largest spend term" bounded to 30d pull; #8 page.tsx
  Snapshot bullet caveat inline. All applied (Codex sol) + verified. Page rebuilt + committed a2111a5
  + redeployed → LIVE 200. Validator reports archived at research/lens{A,B,C}.md. PACKAGE VALIDATED.
- 2026-07-13: AHREFS KEYWORD RESEARCH + integration. Verified snapshot volumes 100% accurate;
  DISCOVERED certificate/course head (~3,400/mo, buyer UNCLASSIFIED) + care-sector vertical
  (~780/mo, cleanest corporate fit) + online(~290)/refresher(~160)/geo clusters. Integrated into
  B/D via Codex sol xhigh (skills: ads-google/ads-plan/ads-budget + seo-plan as methodology);
  sol-xhigh review → 7 Major + 2 Minor (cert group rename to MixedIntent, care/geo launch-gates,
  Meta geo-gate, LP gated modules, credential open-question, completion-records distinction, stale
  demand narrative) all fixed + verified; page redeployed twice (43d3487 insight, 52eeb30
  gated-expansion + credential/scope CRITICALs), live 200. Evidence: research/
  keyword-research-ahrefs-2026-07-13.md + keyword-integration-review.md.
- REVIEW PACK BUILT: docs/ergoworks-consulting/START-HERE.md (run-through guide, 3-tier entry) +
  ergoworks-campaign-review-pack.pdf (148pp, pandoc→Chromium, TOC, branded; strategy → open-Qs →
  appendices E/B/A/D/C). PDF visually verified. PACKAGE + DELIVERY COMPLETE.
- 2026-07-13: SKIM/DELIVERY ENHANCEMENTS. (1) Page sticky section jump-nav (9 sections, anchors);
  fixed .page overflow:hidden->overflow-x:clip so sticky works (was trapping it) while still
  containing hero bleed (verified no mobile h-overflow); screenshot-verified pinned; committed
  4645f7d + redeployed, live 200. (2) Split the combined pack into per-section PDFs in
  docs/ergoworks-consulting/review-pack/ (1-strategy, 2-open-questions, E/B/A/D/C + 0-full-combined),
  pandoc->Chromium, branded. START-HERE.md updated to point at review-pack/. Confidentiality held:
  full detail stays in gitignored docs/ (delivered privately), page stays directional.
