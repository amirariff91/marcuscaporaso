# Product

This repo is Marcus Caporaso's **GrowthOS** consulting site (marcuscaporaso.com) plus
client-deliverable pages served on subpaths/subdomains: OSW (`/osw`), Biosymm (`/biosymm`).
See `AGENTS.md` for the workstream map.

- **Homepage (GrowthOS)** — consulting positioning site for SMB founders leaking revenue
  in their funnel. Design context: `.impeccable.md`.
- **OSW (Obesity Surgery WA)** — website-rebuild proposal for a Perth bariatric clinic.
  Full product brief: `docs/oswa/PRODUCT.md` (audience, brand, WCAG AA requirements).
- **Biosymm** — shareable advisory pages for a WA physio/occupational-health client.
- **ErgoWorks Consulting** (`/ergoworks`) — an ergonomics consultancy (distinct from the
  ErgoEquip store). Ships a public campaign-plan walkthrough, a Basic-auth gated plan pack
  (`/ergoworks/plan/*`), and a gated client landing-page mockup (`/ergoworks/lp-mockup`).
  Anything carrying client personnel names, unapproved spend figures or internal gate IDs
  sits behind the gate in `src/proxy.ts`. Working files: `docs/ergoworks-consulting/`.

Audience for client pages is the client's stakeholders reviewing work — pages must look
credible on mobile WhatsApp opens.
