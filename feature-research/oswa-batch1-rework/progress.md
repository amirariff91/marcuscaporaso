# OSWA batch-1 rework — progress

Branch: oswa-batch1-rework (from 4fc9a2c). No commits (per instruction).
Plan: ~/.claude/plans/role-you-are-the-immutable-sketch.md · Specs: worker-spec.md, fix-spec.md, fix-spec-2.md

## Status — COMPLETE (accepted 2026-07-12)
- [x] Setup (branch, specs)
- [x] Wave 1 luna (sleeve/bypass/hub) + reconcile (ownership clean, parity OK)
- [x] Wave 2 luna (wls/eligible) + reconcile
- [x] Task C WhatsApp → docs/oswa/whatsapp-oswa-rework-2026-07-12.md
- [x] Gate 1 codex sol xhigh: 12 blocking + 3 non-blocking (gate1-findings.md) — ALL applied (5 luna fix workers)
- [x] Gate 2 codex sol second opinion: 13 blocking + 2 non-blocking — ALL applied (3 luna fix workers; wls + am-i-eligible applied by Fable directly after Codex quota exhausted ~19:30, resets 22:58)
- [x] Post-fix re-check: GLM overflow lane also 429'd → Fable xhigh self-verification (context-adjudicated every residual grep hit: all remaining flagged phrases sit in verbatim source quotes or reviewer descriptions, replacements clean, stats verify-gated)
- [x] Gate 3 Fable xhigh: spot-checks vs extracted drafts; consolidated sweeps (G1 phrases, scaffolding, brand names, BMI shorthand) clean; Q1/Q2 confirmed OPEN; `bun run build` green; standalone serve → /osw/content-review 200 + noindex,nofollow + new content rendering; SUMMARY.md + summary.md addendum added; followups memo updated

## Key decisions
- Gate-2 reconciliation: kept briefs' SJOG mentions annotated "(to be verified)" instead of deleting (deleting would silently resolve Q1); canonical 30/30 text set by orchestrator across pages; "[hospital identity to be verified]" placeholder variant accepted.
- Quantified outcome stats (60–70%/70–80%) allowed only as verify-gated notes ("requires cited clinical source + practice sign-off"), never paste-ready.

## Gate 4 (2026-07-13, quota reset) — codex xhigh final verification + fix round
- Ran a fresh codex sol xhigh full-diff verification → FAIL, 14 blocking + 2 non-blocking (deeper brief scrutiny than earlier gates: residual comparative/quantified claims in our own replacement text, lost GLP-1/hospital labels, brief-inherited SJOG assertions + wrong BMI category labels + FAQ count drift).
- Applied all genuine findings (paired live+docs edits for reviews, single-file for briefs; script: scratchpad/apply_gate2b.py) — verified zero residual of each.
- DECLINED 2 findings on the merits (documented): (a) "remove GLP-1 class references" contradicts the Q2 interim rule that explicitly permits class/ingredient names and bars only brands (both briefs already flag pending); (b) hedged operational figures (first-consult 30–60 min, consult-to-surgery 3–6 months) are logistics, not clinical outcome claims.
- Re-verification (codex xhigh) → **VERDICT: PASS, 0 blocking / 0 non-blocking.**
- Final: `bun run build` green; standalone serve → /osw/content-review + 3 slug pages all 200 + noindex,nofollow + updated content rendering.

## STATUS: ACCEPTED — all gates PASS, build green, Q1/Q2 preserved OPEN. No commit (per instruction).
