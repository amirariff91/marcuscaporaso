# Build spec — gated ErgoWorks review pages (shared contract for all workers)

You are building ONE Next.js **server component** page for the private, gated ErgoWorks
review pack. Match the existing design system exactly and apply the redaction policy without
exception. Your output is candidate code that the orchestrator will verify (redaction grep +
build) before it lands.

## Repo facts
- Next.js **16.2.4**, React 19, TypeScript. Server components by default (NO `"use client"`).
- Design system + all page classes: `src/app/ergoworks/plan/plan.module.css` (import as
  `styles` with a relative path from your page dir, e.g. `../plan.module.css`).
- Reference page to imitate for tone, JSX idiom, and class usage:
  `src/app/ergoworks/campaign-plan/page.tsx` (READ IT). Also read the already-built hub
  `src/app/ergoworks/plan/page.tsx` for the exact patterns to reuse.
- Icons: `lucide-react` (import only icons you use).
- The shared `layout.tsx` already renders the sticky cross-page nav, the "Private ·
  Confidential" marker, and the PDF affordance. **Do NOT** repeat a cross-page nav or the
  `.sectionNav`. Your page renders `<main className={styles.page}>` starting with a `.hero`
  (page title) then its content sections.
- Every page MUST export:
  ```ts
  export const metadata: Metadata = { title: "…", description: "…", robots: { index: false, follow: false } };
  ```

## Content source (READ from disk, transcribe — never import/fs-read at runtime)
Read your assigned markdown under `docs/ergoworks-consulting/`. Transcribe the (redacted)
content into module-scope `const` arrays + JSX literals, exactly like the reference page.
**NEVER** `import` or `fs`-read anything under `docs/` in the page code — `docs/` is gitignored
and forbidden at build/runtime. All content must be hard-coded literals.

## REDACTION POLICY (mandatory — applies to everything you transcribe)
ABSTRACT these — they must NOT appear anywhere in your output:
- **Live IDs / hostnames** → drop, refer generically ("the Search campaign", "the Ads account",
  "the GA4 property"). Never emit: `9258098368`, `316175981`, `700072710`, `16143562968`,
  `843760968`, `tags.ergoworksconsulting.com.au`, `sydneyphysiotherapist.com.au`,
  `ergoworksconsulting.com.au`, the label "zzz Ergoworks".
- **Exact dollars / CPL / CPA / per-term spend** → qualitative or ranges only. Never emit any
  `A$<number>` figure. Examples: `A$40k/yr` → "a mature five-figure annual Search program";
  monthly figures → "the current monthly Search envelope"; per-keyword costs, budget-scenario
  dollar tables, the Meta CPA anchor → "detailed in the private PDF pack". KEEP percentages and
  ratios (49% concentration, 18.7%, 26% CTR) and KEEP keyword volume / KD / ad-group structure /
  offer detail (these are allowed).
- **Named competitors** → "Competitor A/B/C/D" (or "third-party RTO/competitor terms"). Never
  emit: Alba Ergonomics, Dohrmann Consulting, Go Workplace Training, Sheer Workplace Training,
  AlertForce.
- **Named clients / proof** → abstract but KEEP the "client sign-off required" framing. Never
  emit: Danone, Telstra, Nokia, "ASX 100". Use "a global FMCG client", "ASX-listed enterprise
  clients", "a strong public review rating".

PRESERVE VERBATIM (do NOT strip — this is the compliance framework, constraint #5):
- Every Snapshot caveat: "preliminary guidance only — not a compliance assessment, compliance
  certification, medical assessment or diagnosis" — must sit ADJACENT to every Snapshot mention.
- All "no guaranteed injury prevention / WHS compliance / claims reduction" statements.
- OAIC APP 3 / Consent Mode v2 default-denied / health-data deny-list language.
- "Meta must not imply a viewer or their staff has a health condition."

When a figure is ambiguous, ABSTRACT it and add a short `{/* redacted: exact value in private pack */}`
note rather than publishing it.

## Design contract (classes available in plan.module.css — reuse, do not invent CSS)
- `.page` wrapper; `.hero` + `.nav` (wordmark + `.private`) + `.heroGrid` (`.kicker`, h1,
  `.heroCopy`, `.summary` aside) + `.scrollCue`.
- `SectionHeading` helper (copy it from the reference): `.sectionHeading` > p/h2/span.
- Dark feature sections: `.channelsSection`, `.questionsSection` (ink bg, lime kickers).
- Light sections: `.idea`, `.offerSection`, `.stateSection` (mint bg), `.measurementSection`,
  `.roadmapSection`.
- Grid "tables": `.stateList>div` (2-col), `.offerLadder article`, `.gatesList article`,
  `.questions li`, `.roadmap`.
- **Doc-heavy primitives (use these for long prose + real tables):**
  - `.docSection` (max-width wrapper) / `.docSection.alt` (tinted full-bleed band).
  - `.prose` (h3 / p / ul with green bullet dots) for long copy.
  - `.tableScroll` — wrap EVERY `<table>` in `<div className={styles.tableScroll}>`; the table
    may use `<caption>`, `<thead><th>`, `<tbody><td>`. This gives horizontal scroll so wide
    tables never break the page. Use real tables for genuine tabular data (keyword sheets,
    budget scenarios, decision matrices).
  - `.calloutRow` (mint callout with icon) for caveats / compliance notes.
- `.footer` (copy from reference; text "Confidential · For client review only").
- Mobile is already handled by the module's media queries; do not add fixed widths.

## Output
Write the page to its target path (below). Server component, typed, no unused imports, compiles
under `tsconfig` strict. Keep copy tight and executive — this is for the client's eyes.
