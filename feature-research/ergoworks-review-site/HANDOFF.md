# ErgoWorks gated review site — handoff

**Branch:** `ergoworks-plan-gated` (off current HEAD; uncommitted — diff left for Amir).
**What it is:** the full ErgoWorks Consulting campaign pack as a private, access-gated,
multi-page site at `/ergoworks/plan/*`, visually identical to the public
`/ergoworks/campaign-plan` page but redacted and behind HTTP Basic Auth.

## Routes (all noindex, all gated)
- `/ergoworks/plan` — hub / overview + reading order + decisions summary
- `/ergoworks/plan/strategy` · `/decisions` · `/audit` · `/media` · `/landing-page`
  · `/offer` · `/measurement`

## Files
- `src/app/ergoworks/plan/layout.tsx` — gated shell (Private·Confidential marker, cross-page
  sticky nav, "PDF pack" affordance)
- `src/app/ergoworks/plan/plan.module.css` — design system copied verbatim from the public
  page + shell/table-scroll/hub-card additions
- `src/app/ergoworks/plan/{page,strategy,decisions,audit,media,landing-page,offer,measurement}.tsx`
- `src/proxy.ts` — **extended** (not replaced) the existing osw/biosymm subdomain proxy with the
  Basic-auth gate scoped to `/ergoworks/plan/*`
- `.env.example` — added `ERGOWORKS_PLAN_USER` / `ERGOWORKS_PLAN_PASSWORD` placeholders

## TO DEPLOY (Coolify) — do this before sharing the URL
1. ✅ DONE 2026-07-13 (via Coolify API): the two **runtime** env vars are set on app
   `zj6dtb5y7k08zi4x10nlbkh0` (marcuscaporaso):
   - `ERGOWORKS_PLAN_USER` = `marcus`
   - `ERGOWORKS_PLAN_PASSWORD` = `ANKqcBENTMiyKKEoNLEPvqPL`  (rotate anytime; runtime-read, restart only)
   Gate fails **closed** — if either is unset every `/ergoworks/plan/*` request returns 401.
2. ⚠️ NOT deployed yet — the app tracks branch **main**, but this work is on uncommitted branch
   `ergoworks-plan-gated`. The gate/routes go live only once this code reaches `main` and Coolify
   redeploys. No deploy was triggered (would only redeploy current main without the gate).
3. (Optional) Drop the confidential PDF at a path the gate covers if you want the "PDF pack"
   button to resolve — it currently points to `/ergoworks/plan/pack.pdf`, which is gated (401
   without creds) but will 404 until a file is placed there. Either add the PDF to `public/` at
   that route or remove the button in `layout.tsx`.

## What to send Marcus
- Review URL: `https://marcuscaporaso.cepathosting.com/ergoworks/plan`
  (or the osw/biosymm-style domain if one is mapped)
- The username + password — send **out-of-band** (WhatsApp/SMS), never in git or email with the link.
- One line: "Full campaign pack, browsable by section — figures are directional; exact numbers
  stay in the PDF."

## Verification done
- `bun run build` green; all 8 plan routes compiled static; public page unchanged.
- Gate (end-to-end on built server): every plan route no-creds→401, wrong→401, valid→200;
  `/`, `/ergoworks/campaign-plan`, `/osw/*` →200; encoded-path bypass →401; gated PDF path →401.
- Redaction grep + read-through: zero live IDs / A$ figures / competitor names / client names /
  internal hostnames.
- Codex sol security review of the gate: 3 BLOCKING issues found and fixed (encoded-path bypass,
  authenticated-response caching, constant-time compare).

## Final Codex luna review (Phase 5)
Panel returned 6 "BLOCKING" — triaged: 3 false positives (client `layout.tsx` is a valid Next
pattern; landing-page IS fully caveated via the `snapshotCaveat` variable the grep didn't resolve;
hub/measurement have prominent adjacent caveat callouts). 3 acted on: abstracted raw
account-performance counts (26 conversions / ~20 leads / per-term click counts) in audit + media so
they don't contradict the hub's "figures stay in the PDF" promise, and tightened that hub line.
Re-grep clean, rebuild green.

## Redaction posture (defense-in-depth — even behind the gate)
Abstracted: all account/property/campaign IDs, exact spend/CPL/CPA/per-term costs, competitors
(→ Competitor A/B/C/D), named clients (Danone/Telstra/Nokia/ASX 100 → "a global FMCG client" /
"ASX-listed enterprise clients" / "a strong public review rating"), internal hostnames.
Preserved verbatim: all Snapshot "preliminary guidance only…" caveats, no-guarantee compliance
gates, Consent Mode v2 / health-data deny-lists. Exact figures live only in the private PDF pack.
