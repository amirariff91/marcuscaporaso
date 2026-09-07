# OSWA batch-1 gap-closing rework — per-page worker spec

You own EXACTLY ONE page (slug given in your prompt) and may edit ONLY these 3 files:
1. docs/oswa/content-review-2026-07/review/<slug>.md — internal review (working copy)
2. content-reviews/<slug>.md — LIVE client-facing copy of the same review. Same content REWORDED for the client: has an H1 header, NO internal-file references, NO "Suggested WhatsApp" block. Preserve that reword convention. Keep #1 and #2 in content-parity after your edits.
3. content-briefs/<slug>.md — the content brief for this page.

Read-only quote source (NEVER edit): docs/oswa/content-review-2026-07/extracted/<slug>.md — the writer's draft. Every fix you add to the reviews must be paste-ready: EXACT draft quote (from the extracted file, with its line ref) + a drop-in replacement.

Do NOT touch any other file (no SUMMARY.md, no summary.md, no other slugs' files).

## Compliance ground truth (do not deviate)
- MBS item numbers: 31575 = sleeve gastrectomy, 31572 = Roux-en-Y gastric bypass, 31581 = BPD/duodenal switch.
- MBS eligibility: BMI 40+, OR BMI 35+ WITH a major comorbidity. Nothing below that qualifies under MBS. Any BMI wording must be assessment-only framing ("eligibility is assessed individually…"), never "you qualify" / "eligible with or without other conditions" / "may be considered" as if it were a pathway.
- AHPRA advertising: no guarantees, no outcome certainty, no comparative safety/effectiveness claims. Kill phrases like "generally safe", "highly effective", "less pain / faster recovery", "often relieves reflux", "significant lasting results", "consistently identifies / achieve better outcomes", insurance "will cover" / "significant portion covered" — reframe measured ("may", "for some patients", "discuss with your surgeon/insurer"), evidence-neutral, no promises.
- Fees: no quoted single dollar fees (e.g. $4,000/$6,000) — already removed in first pass; don't reintroduce.

## The gaps to close (G1–G5) — the prior review fixed only the FIRST instance of each problem
G1. Find and fix EVERY residual occurrence in the draft of the flagged patterns above (grep the extracted draft): repeated insurance-coverage claims in FAQs; residual AHPRA claims; secondary GLP-1 mentions after the first. Add a paste-ready fix (quote + replacement) to the review for each occurrence not already covered.
G2. MBS-inaccurate lower-BMI lines still present (e.g. "BMI 35-39: eligible with or without other conditions", "BMI 30-35 may be considered in select cases"). Add paste-ready reframes to assessment-only wording consistent with the MBS rule above.
G3. Make directional fixes concrete:
   - Where the review says "cut length", specify an actual cut-list (which sections/paragraphs, quoted).
   - WRITE the missing FAQ answers the review says Google wants (cost in Perth — no dollar figures, ranges framed as "discussed at consultation"; the 30/30 eating rule; who is NOT eligible; Medicare coverage; 10-year outcomes) — AHPRA-safe, measured, no guarantees.
   - Internal-link recommendations must name real destination slugs that exist in content-briefs/ (check the folder), not bare anchor text.
G4. Remove leftover scaffolding the review missed: flag every "Conversion CTA headline", "Alt", "Option A" style artifact in the draft with a paste-ready fix (delete or replace).
G5. Fix the BRIEF (file #3): the brief itself carries flagged wording (e.g. "make these procedures safe for most suitable candidates", 35 / 30-35 BMI framing). Edit the brief text directly so it's consistent with the review's compliance line. Smallest sufficient edit.

## Two OPEN questions — DO NOT resolve or guess
Q1 Hospitals: briefs say SJOG Murdoch/Subiaco; drafts say Mount/The Park/Waikiki. Leave the review's "to be verified" placeholder wherever content depends on hospital identity. Do not pick a side.
Q2 GLP-1/medical-weight-management advertising policy (TGA/legal) is pending. Hold to active-ingredient/class names only (semaglutide/liraglutide/GLP-1), NEVER brand names, and keep/flag the "pending decision" note. Do not invent a policy.

## Style constraints
- Smallest sufficient change. The review's structure/tone is good — extend it in its own format (add fixes under the right existing sections, matching numbering/severity conventions used in the file). No restructuring, no tone rewrite.
- Every compliance claim grounded in MBS/AHPRA/TGA as stated above; if a fix would need a fact you can't verify, flag it as "verify:" rather than guessing.
- When done, print a short report: per gap G1–G5, what you added/changed (counts + line refs), and anything you flagged for verification.
