### Review Findings Table

| Finding # | File | Severity | Quote | Fix |
|:---:|---|:---:|---|---|
| 1 | `seo/build-sheets-2026-09-08.md:25,89,154` | SHOULD-FIX | `CPC A$6.00`, `CPC A$1.10`, `CPC A$1.40` | Sourced from `keyword-gap.md:7`, which specifies CPC in USD cents. Ahrefs reported CPCs are USD (`US$6.00`, `US$1.10`, `US$1.40`), not AUD. Label as `CPC US$6.00 (~A$9.00)` to avoid understating auction costs. |
| 2 | `seo/copy/ergonomic-assessment-sydney.md:109-110`<br>`seo/copy/ergonomic-workstation-assessment.md:108-109` | SHOULD-FIX | `...including the Credit Suisse National Ergonomics Program.` / `ErgoWorks has been recognised as a finalist in the Telstra Business Awards and Nokia Innovation Awards...` | Mandated rule (7) requires every specific claim to carry `[Greg to confirm]`. While both claims appear in legacy site archives (`pages/135.html` and footer), neither bullet has the confirmation tag. Append `[Greg to confirm]` to both bullets in both files. |
| 3 | `seo/copy/ergonomic-assessment-sydney.md:72-73`<br>`seo/copy/ergonomic-workstation-assessment.md:70-71` | SHOULD-FIX | `Includes a 45 to 60 minute review` / `Involves 15 to 20 minute workstation audits per desk` | Specific assessment durations are asserted without `[Greg to confirm]`. "45 to 60 minutes" is ungrounded on live service pages; "15 to 20 minutes" applied only to legacy virtual home assessments (`pages/029.html`). Append `[Greg to confirm]` to both duration specifications. |
| 4 | `seo/copy/ergonomic-assessment-sydney.md:105`<br>`seo/copy/ergonomic-workstation-assessment.md:104` | NOTE | `brings more than 20 years of ergonomics experience` vs `advice for over 15 years` | Unnecessary tenure discrepancy between sibling pages (legacy page `029.html` states founded 2003 = 23 years). Unify both to `over 20 years of ergonomics experience [Greg to confirm]`. |
| 5 | `deliverables/cutover-runbook-2026-09-08.md:108-112` | NOTE | `Joel (Dev) \| Tue 8 Sep 2026...`, `Us (GrowthOS) \| Tue 8 Sep 2026 (after dev deploy)...` | Section 6 table lists rigid deployment dates of "Tue 8 Sep 2026", whereas the WhatsApp update notes Joel's push has not landed and pencils cutover for Thu 10 Sep. Update table timing to `Target Thu 10 Sep 2026 (dependent on dev deploy)`. |
| 6 | `deliverables/greg-update-2026-09-08-SEND.md:41-43` | NOTE | `Your developer (Joel): add a confirmation signal on form submit... hide staging copies, and verify the root domain...` | A defensive client could read three bullets grouped strictly under "Your developer" as deflecting blame, even though Joel owns site code. Mitigated by our explicit admission of Sydney's bidding restriction and post-launch testing gap. Optional polish: adjust to `Actions with Joel: ... we will coordinate the snippet directly`. |
| 7 | `seo/copy/ergonomic-assessment-sydney.md:109`<br>`seo/copy/ergonomic-workstation-assessment.md:108` | NOTE | `Credit Suisse National Ergonomics Program` | British/Australian English standard is "programme". Retain "Program" only if verified as Credit Suisse's official registered project title; otherwise adjust to `Programme`. |

---

### File Verdicts

1. **`deliverables/whatsapp-marcus-2026-09-08.md`**: **SEND-READY** — Accurate numbers, takes explicit ownership of Sydney tCPA stall, correctly incorporates Astra rules, and aligns with change lists.
2. **`deliverables/greg-update-2026-09-08-SEND.md`**: **SEND-READY** — Free of tool names and em-dashes; British English and A$ prefix used; figures reconcile to `CONTEXT.md` (w/e 6 Sep spend A$1,157) and `lead-log.md`; no outcome promises.
3. **`deliverables/lead-log.md`**: **SEND-READY** — Grounded demand thresholds, correct historical baseline citations (August raw A$424 / strict A$466 CPA), and clean event-to-date mappings.
4. **`deliverables/cutover-runbook-2026-09-08.md`**: **SEND-READY** — Note to Joel is unambiguous with explicit ban on `direct_enquiry`; push snippet contains zero PII (`state` and `enquiry_about` only); execution gates are logically decoupled.
5. **`deliverables/ads-change-list-2026-09-08.md`**: **SEND-READY** — API calls reflect valid Google Ads API v17+ resources/fields; all mutations have explicit reverses; negative list contains exactly 9 immediate + 3 conditional terms without vocabulary false-positives.
6. **`seo/template-spec-2026-09-08.md`**: **SEND-READY** — Clean modular Statamic spec; single `@graph` schema pattern; replaces arbitrary 40% rule with enforceable editorial block differentiation.
7. **`seo/build-sheets-2026-09-08.md`**: **NEEDS-EDITS** — Requires currency correction on Ahrefs CPC values from A$ to US$ (Finding 1).
8. **`seo/copy/ergonomic-assessment-sydney.md`**: **NEEDS-EDITS** — Requires `[Greg to confirm]` tags on Credit Suisse, Telstra awards, and review durations (Findings 2 and 3).
9. **`seo/copy/ergonomic-workstation-assessment.md`**: **NEEDS-EDITS** — Requires `[Greg to confirm]` tags on Credit Suisse, Telstra awards, and review durations, plus alignment on operating tenure (Findings 2, 3, and 4).

[exited with code 0]
