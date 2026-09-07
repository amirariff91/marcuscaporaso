## GSC baseline

Data retrieved via Google Search Console MCP for property `https://www.ergoworksconsulting.com.au/`. Search volumes and keyword difficulty (KD) are sourced from `docs/ergoworks-consulting/greg-review-2026-09-04/seo/keyword-gap.md` §3 and §5 (no live Ahrefs tool available).

*Note on property scope:* The verified GSC property is URL-prefix `https://www.ergoworksconsulting.com.au/`. Because the 27/08 cutover canonicalised the production site to the apex domain (`https://ergoworksconsulting.com.au/`), this www property under-reports post-cutover impressions and clicks; treat these figures as an authoritative baseline floor rather than full-site traffic (`evidence/gsc.md` §1; `seo/audit.md` §1).

### Query-level performance (Last 28d vs Previous 28d)

| Target Query | Vol (AU) | KD | Last 28d (11 Aug–08 Sep 2026) | Prev 28d (14 Jul–10 Aug 2026) | Marcus Stated Baseline | Variance & Findings |
|---|---:|---:|---|---|---|---|
| `ergonomic assessment sydney` | 100 | 0 | 0 clicks, 61 impr, pos 28.3 | 1 click, 58 impr, pos 33.2 | Pos ~33 | Confirms stated pos 33; query improved +4.9 positions into page 3, but 0 clicks last 28d. |
| `manual handling training sydney` | 200 | 0 | 0 clicks, 0 impr, pos N/A | 0 clicks, 0 impr, pos N/A | Not top-30 | Confirms absent from top-30 footprint; zero impressions across both 28d windows. |
| `workplace ergonomic assessment` | 60 | 0 | 0 clicks, 52 impr, pos 75.3 | 0 clicks, 85 impr, pos 61.2 | Pos ~60 | Prev period matched pos 61.2; dropped -14.1 positions to 75.3 (plural sits at pos 66.7). |
| `workstation assessment` | 50 | — | 0 clicks, 30 impr, pos 42.6 | 0 clicks, 18 impr, pos 55.8 | (Part of row 3) | Sits on page 5; impressions increased +67% as ranking rose from 55.8 to 42.6. |
| `ergonomic workstation assessment` | 200 | 0 | 0 clicks, 87 impr, pos 55.5 | 0 clicks, 91 impr, pos 58.7 | Pos ~60 | Steady at pos 55.5–58.7; highest impression volume in the assessment cluster. |

### Page-level performance (Last 28d vs Previous 28d)

| Page Path | Last 28d Clicks | Last 28d Impr | Last 28d Pos | Prev 28d Clicks | Prev 28d Impr | Prev 28d Pos | Status & Observations |
|---|---:|---:|---:|---:|---:|---:|---|
| `/ergonomic-consultants-in-sydney/` | 7 | 313 | 14.2 | 7 | 242 | 19.0 | Live 200. Ranks for brand + broad local queries (`ergonomic assessment sydney` pos 4.6 on page filter). |
| `/ergonomic-solutions/workstation-assessments/` | 1 | 257 | 55.9 | 0 | 277 | 59.0 | Live 200. Captures broad workstation terms; CTR 0.39%. Weak commercial intent match. |
| `/ergonomic-solutions/manual-handling-training/` | 2 | 315 | 54.5 | unverified | unverified | unverified | Live 200 (National hub). Absorbs generic terms; does not rank for Sydney course searches. |
| `/manual-handling-training-sydney/` | — | — | — | — | — | — | **404**. Proposed dedicated page does not yet exist. |

---

## Current pages

Recorded via live curl against production apex (`https://ergoworksconsulting.com.au/`) on 08 Sep 2026.

| Metric / Element | `/ergonomic-consultants-in-sydney` | `/ergonomic-solutions/workstation-assessments` | `/ergonomic-solutions/manual-handling-training` (nearest existing) |
|---|---|---|---|
| **HTTP Status** | 200 | 200 | 200 (proposed `/manual-handling-training-sydney` is 404) |
| **Title Tag** | `Ergonomic Consultants in Sydney \| ErgoWorks Consulting - Ergoworks Consulting` | `Online Ergonomic Workstation Assessment - Ergoworks Consulting` | `Manual Handling Training \| Ergonomic Solutions - Ergoworks Consulting` |
| **H1 Tag** | `Ergonomic Consultants in Sydney` | `Ergonomic Workstation Assessments` | `Manual Handling Training` |
| **H2 Headings** | 10 H2s (e.g. *Your Trusted Ergonomic Experts in Sydney*, *Ergonomic Experts:*, *Why Choose Sydney based...*) | 6 H2s (e.g. *Ergonomic Solutions*, *OHS Ergonomic Workstation Assessment*, *Why Ergoworks Consulting?*) | 11 H2s (e.g. *About Manual Handling Training*, *Why Manual Handling Training is Important*, *What Does the Training Cover?*) |
| **Rough Word Count** | ~687 words | ~665 words | ~845 words |
| **FAQ Present** | None (0 accordion / Q&A elements) | None (0 accordion / Q&A elements) | None (0 accordion / Q&A elements) |
| **Schema Detected** | Sitewide `ProfessionalService` only; no `Service` or `FAQPage` | Sitewide `ProfessionalService` only; no `Service` or `FAQPage` | Sitewide `ProfessionalService` only; no `Course` or `FAQPage` |
| **Primary CTAs** | "Contact Us", "Make an Enquiry" | "Contact Us", "Make an Enquiry" | "Contact Us", "Make an Enquiry" |
| **Links to `/contact-us`** | 5 internal links | 7 internal links | 7 internal links |

---

## Template spec

A modular, Statamic-friendly page template spec designed for high commercial organic relevance and CRO-optimised paid traffic landing (`~/.claude/skills/seo-page/SKILL.md`; `~/.claude/plugins/cache/marketingskills/marketing-skills/2.11.0/skills/cro/SKILL.md`). Described as editorial blocks and CMS fields.

```
+-----------------------------------------------------------------------------------+
| HERO BLOCK: H1 + Intent Line (40-60w direct answer) + Primary CTA + Trust Micro-copy|
+-----------------------------------------------------------------------------------+
| "WHO THIS IS FOR" QUALIFIER: 4-6 Target buyer scenarios & operational triggers   |
+-----------------------------------------------------------------------------------+
| PROCESS PIPELINE: 4-step horizontal process (Scope -> Assess -> Report -> Action) |
+-----------------------------------------------------------------------------------+
| DELIVERABLES / INFO BOX: Report contents checklist + Redacted sample preview card |
+-----------------------------------------------------------------------------------+
| LOCAL COVERAGE / DELIVERY MATRIX: Suburbs/regions served, On-site vs Virtual      |
+-----------------------------------------------------------------------------------+
| PROOF BLOCK: Attributed consultant bios, verified years, Greg-approved case facts  |
+-----------------------------------------------------------------------------------+
| FAQ ACCORDION BLOCK: 5-7 self-contained Q&As (40-60w each) addressing friction    |
+-----------------------------------------------------------------------------------+
| RELATED SERVICES STRIP: Contextual cards linking sibling services and national hub|
+-----------------------------------------------------------------------------------+
| BOTTOM CONVERSION STRIP + STICKY BAR: Scoped CTA into fixed /contact-us form     |
+-----------------------------------------------------------------------------------+
```

### 1. Block Definitions & Fields

- **Hero Block:**
  - `hero_h1`: Primary keyword near front, benefit-led (e.g., *Ergonomic Assessment Sydney for Workplace Teams*).
  - `intent_summary`: 40–60-word answer-first definition providing immediate clarity before the fold (`seo-content-brief` rule).
  - `primary_cta_text`: Specific action copy (e.g., *Request a Sydney Assessment Quote*), routing to `/contact-us#contact-form`.
  - `hero_trust_signals`: 3 bulleted micro-proof items (e.g., *Australian Registered Health Professionals*, *Servicing Sydney CBD & Metros*, *Detailed Practical Reports*).
- **"Who This Is For" Box:**
  - 4–6 operational trigger cards targeting B2B buyers (HR managers, WHS coordinators, facilities leads): onboarding new staff, discomfort/pain escalation, hybrid/WFH transitions, post-injury reviews.
- **Process Steps Block:**
  - 4 structured steps: (1) Scope & Pre-Assessment Intake, (2) On-Site or Virtual Assessment, (3) Practical Prioritised Report, (4) Implementation Follow-Up. Explains client responsibilities vs consultant actions.
- **Deliverables & Scope Info Boxes:**
  - Itemised deliverables: root-cause posture analysis, workstation adjustment records, neutral hardware specifications, prioritised risk matrix. Includes a downloadable or redacted sample report teaser card.
- **Local Coverage & Delivery Modes:**
  - Plain-English service boundaries (e.g., Sydney CBD, North Sydney, Parramatta, Macquarie Park, Western Sydney) and delivery modes (On-site vs Telehealth/Virtual).
- **Proof Block (Attributable Only):**
  - Named consultant profiles (qualifications, AHPRA registration/ergonomics credentials), years operating, anonymised workplace case outcomes. Strictly no unapproved client logos or unsubstantiated claims.
- **FAQ Block:**
  - 5–7 expandable accordions answering pricing variables, lead times, report depth, and compliance scope.
- **Related Services Strip:**
  - 3 cross-linking cards with descriptive anchors routing to adjacent service pages and national hubs.
- **Sticky CTA Bar:**
  - Persistent bottom mobile bar and desktop header CTA triggering smooth scroll to the embedded form or `/contact-us#contact-form`.

### 2. Structured Data Specification

A single `@graph` JSON-LD payload injected in `<head>` linking the page service to the root organisation (`~/.claude/plugins/cache/marketingskills/marketing-skills/2.11.0/skills/schema/SKILL.md`):
- Root organisation node: `"@type": ["LocalBusiness", "ProfessionalService"]`, strictly referencing `@id: "https://ergoworksconsulting.com.au#organisation"`.
- Page node: `"@type": "Service"` (or `"@type": "Course"` for training), with `"provider": { "@id": "https://ergoworksconsulting.com.au#organisation" }`.
- *Schema note on FAQPage:* Google restricted `FAQPage` rich results in search in May 2026 to authoritative government and health sites. Visible FAQs remain essential for CRO and AI snippet extraction; JSON-LD graph can cleanly embed `Question`/`Answer` nodes within the `Service` entity or as a secondary `@graph` node without relying on search rich snippets.

### 3. Paid-Landing Variant Rules (Google Ads Final URL)

When query parameters contain `gclid` or `utm_campaign`:
- **Navigation leakage:** Condense the site header to a non-sticky logo (linking to homepage) and phone number. Strip the multi-tier navigation menu to minimise drop-off (`cro` rule 7).
- **Tracking & UTMs:** Preserve `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, and `gclid` in hidden session inputs to attach to the `/contact-us` submission.
- **Form placement:** Render the contact form directly above the footer (or embedded in-page) with the P0 dataLayer push enabled, avoiding multi-click navigation.

### 4. Biosymm Replicability Guardrail (≥40% Unique Content)

To prevent internal duplicate content penalties across sister brands:
- **Hero & Intent Copy (100% unique):** ErgoWorks frames commercial risk, facilities, and WHS compliance. Biosymm must frame clinical triage, occupational physiotherapy, and early injury intervention.
- **"Who This Is For" Block:** ErgoWorks targets HR/WHS procurement for office/hybrid setups; Biosymm targets safety managers dealing with active workers' compensation claims or industrial staff.
- **Deliverables Block:** ErgoWorks specifies workstation adjustment audits and equipment procurement advice; Biosymm specifies clinical assessment notes, functional capacity indicators, and return-to-work plans.
- **Proof & Credentials:** ErgoWorks cites corporate consultant tenure and workplace case studies; Biosymm cites APA-titled occupational physiotherapists and clinical clinic networks.

---

## Build sheets (3)

### Page 1: Ergonomic Assessment Sydney

- **URL:** `/ergonomic-consultants-in-sydney` (KEEP existing URL — retains index equity and inbound links; `audit.md` §1).
- **Primary Query:** `ergonomic assessment sydney` (100 searches/mo, KD 0).
- **Secondary Queries:** `ergonomic workstation assessment` (200/mo), `workplace ergonomic assessment` (60/mo), `office ergonomic assessment` (70/mo), `ergonomic assessment report` (80/mo).
- **Target Word Count:** ~1,400 words.
- **Meta Title:** `Ergonomic Assessment Sydney | ErgoWorks Consulting`
- **Meta Description:** `Book an ergonomic assessment Sydney workplace teams can rely on. Practical workstation adjustments, prioritised risk reports, and expert advice. Enquire today.`
- **H1:** `Ergonomic Assessment Sydney for Workplace Teams`
- **H2 Outline:**
  1. What an Ergonomic Assessment in Sydney Covers (40–60w direct definition)
  2. Who Needs an On-Site Workplace Assessment?
  3. Our 4-Step Sydney Assessment Process
  4. What You Receive: The Ergonomic Assessment Report
  5. Sydney Service Areas & Workplace Settings Covered
  6. Office, Home, and Hybrid Workstation Options
  7. Why Sydney Organisations Choose ErgoWorks
  8. Transparent Scope & Pricing Variables
  9. Frequently Asked Questions
- **FAQ Questions (6):**
  1. What is included in a Sydney ergonomic assessment?
  2. How quickly can an assessor visit our Sydney office?
  3. Can you assess both office and hybrid/home workstations?
  4. What does the final ergonomic assessment report look like?
  5. Which Sydney suburbs and business precincts do you cover?
  6. How much does an ergonomic workplace assessment cost?
- **Info Boxes:**
  - *Box 1 (Scope):* Individual vs Group Workstation Assessment Scope Comparison.
  - *Box 2 (Deliverables):* 5-Point Report Breakdown (Hazard Identification, Physical Measurements, Actionable Controls, Equipment Specs, Review Schedule).
- **Internal Links:**
  - *Inbound:* Homepage (anchor: `ergonomic assessment in Sydney`), `/blog/workstation-tips-ergonomic-physiotherapist`.
  - *Outbound:* `/ergonomic-solutions/workstation-assessments` (`workplace ergonomic assessment`), `/ergonomic-solutions/manual-handling-training` (`manual handling training for Sydney workplaces`), `/contact-us` (`request a Sydney assessment`).
- **Schema Type:** `@graph` with `ProfessionalService` (`@id: ...#organisation`) + `Service` (`@id: ...#service`, `serviceType: Ergonomic Assessment`, `areaServed: Sydney`).
- **CTA Wording:** `Request a Sydney Assessment Quote` (supporting text: *Tell us your location and team size. We'll confirm scope before quoting.*).
- **Facts Greg Must Confirm:** (1) Approved Sydney metro delivery radius/suburbs; (2) Assessor qualifications (physio/ergonomist); (3) Standard report turnaround days; (4) Redacted sample report approval.

---

### Page 2: Manual Handling Training Sydney

- **URL:** `/manual-handling-training-sydney` (NEW page — dedicated B2B corporate course sales page; `keyword-gap.md` §5).
- **Primary Query:** `manual handling training sydney` (200 searches/mo, KD 0).
- **Secondary Queries:** `manual handling training` (2,700/mo, KD 39), `manual handling trainer` (50/mo), `manual handling training near me` (300/mo; in FAQ/body only).
- **Target Word Count:** ~1,550 words.
- **Meta Title:** `Manual Handling Training Sydney | ErgoWorks Consulting`
- **Meta Description:** `Workplace manual handling training in Sydney. Practical, on-site sessions tailored to your tasks and team. Request a customised corporate training quote.`
- **H1:** `Manual Handling Training Sydney for Workplace Teams`
- **H2 Outline:**
  1. Practical Manual Handling Training for Sydney Workplaces (40–60w direct definition)
  2. Who This Training Is For (Office, Logistics, Care & Trades)
  3. Bespoke Workplace Training vs Generic Online Courses
  4. Course Structure & Practical On-Site Delivery
  5. What Organisers and Participants Receive
  6. Course Boundary: Tailored Corporate Education (Non-RTO Statement)
  7. Qualified Manual Handling Trainers & Physiotherapists
  8. Group Sizes, Scheduling, and Pricing Scope
  9. Frequently Asked Questions
- **FAQ Questions (6):**
  1. Is this manual handling training held on-site at our Sydney workplace?
  2. Is this an accredited RTO course or certificate? (Plain non-RTO B2B explanation)
  3. Can the training be customised to our specific tools and lifting tasks?
  4. What is the maximum group size per session?
  5. How long does a standard workplace training workshop take?
  6. Do participants receive course notes or attendance records?
- **SERP Reconciled Positioning:** The Sydney SERP is dominated by RTO unit code providers (`TLID0020`, `HLTWHS005`). ErgoWorks does NOT issue vocational certificates. The brief adopts a course-sales architecture to capture commercial course intent while explicitly stating the offer is *bespoke corporate workplace education delivered by qualified physiotherapists/ergonomists* (`gemini-review-seo.md` Finding 1).
- **Info Boxes:**
  - *Box 1 (Offer Boundary):* Inclusions vs Exclusions (Task-specific coaching and risk controls included; accredited vocational certificate excluded).
  - *Box 2 (Curriculum):* Core Modules (Hazard Recognition, Biomechanics of Lifting, Team Handling, Environmental Modifications).
- **Internal Links:**
  - *Inbound:* `/blog/best-practices-in-manual-handling-tips-for-aussie-businesses`, `/blog/the-importance-of-manual-handling-training-in-reducing-workplace-injuries`, `/ergonomic-solutions/manual-handling-training`.
  - *Outbound:* `/ergonomic-solutions/manual-handling-training` (`national manual handling training`), `/ergonomic-consultants-in-sydney` (`ergonomic assessments Sydney`), `/contact-us` (`request a training proposal`).
- **Schema Type:** `@graph` with `Course` + `Service` linking to root `ProfessionalService` (`@id: ...#organisation`).
- **CTA Wording:** `Request a Sydney Training Proposal` (supporting text: *Customised for your team, load types, and site environment.*).
- **Facts Greg Must Confirm:** (1) Clarify whether certificates of attendance are issued; (2) Session durations (e.g. 1-hr, 2-hr, half-day); (3) Max participant caps; (4) Trainer credentials.

---

### Page 3: Ergonomic Workstation Assessment (National Service Hub)

- **URL:** `/ergonomic-solutions/workstation-assessments` (KEEP existing URL — maintains established indexation; `audit.md` §1).
- **Primary Query:** `ergonomic workstation assessment` (200 searches/mo, KD 0) — *Reconciled per Fable 5.1 review note: swapped to lead keyword to capture the 200/mo demand, while preserving `workplace ergonomic assessment` (60/mo) in H1 tail and H2 (`brief-workplace-ergonomic-assessment.md` Review Note 03/09).*
- **Secondary Queries:** `workplace ergonomic assessment` (60/mo), `workstation assessment` (50/mo), `office ergonomic assessment` (70/mo), `ergonomic assessment report` (80/mo), `ergonomic risk assessment` (40/mo).
- **Target Word Count:** ~1,580 words.
- **Meta Title:** `Ergonomic Workstation Assessment & Workplace Reviews | ErgoWorks`
- **Meta Description:** `Comprehensive ergonomic workstation assessments and workplace reviews. Identify physical risk factors, optimize setups, and receive prioritised reports.`
- **H1:** `Ergonomic Workstation Assessment and Workplace Ergonomic Reviews`
- **H2 Outline:**
  1. What is an Ergonomic Workstation Assessment? (Answer-first definition)
  2. Workstation vs Workplace Ergonomic Assessment: Choosing the Right Scope
  3. Key Elements Evaluated in an Assessment
  4. Step-by-Step Assessment Methodology
  5. The Deliverable: Practical Ergonomic Assessment Reports
  6. On-Site vs Virtual / Telehealth Assessment Options
  7. Risk Control & Ergonomic Equipment Recommendations
  8. Why Partner with ErgoWorks Consulting
  9. Scope Variables and Enquiry Process
  10. Frequently Asked Questions
- **FAQ Questions (6):**
  1. What is the difference between a workstation assessment and a workplace assessment?
  2. When should an organisation schedule workstation assessments?
  3. Are virtual / online workstation assessments as effective as on-site visits?
  4. Does ErgoWorks supply or sell the recommended ergonomic furniture?
  5. What specific measurements and risks are examined during the review?
  6. Can you assess specialised environments (laboratories, control rooms, sit-stand desks)?
- **Info Boxes:**
  - *Box 1 (Scope Matrix):* Individual Workstation Assessment vs Comprehensive Workplace Walkthrough.
  - *Box 2 (Delivery Comparison):* On-Site Evaluation vs Virtual Ergonomic Assessment (Suitability, Limitations, Turnaround).
- **Internal Links:**
  - *Inbound:* Homepage (anchor: `workstation assessments`), `/blog/8-best-ergonomic-laptop-setup-tips`.
  - *Outbound:* `/ergonomic-consultants-in-sydney` (`Sydney ergonomic assessment`), `/ergonomic-solutions/manual-handling-training` (`manual handling training`), `/contact-us` (`request a workplace assessment plan`).
- **Schema Type:** `@graph` with `ProfessionalService` (`@id: ...#organisation`) + `Service` (`@id: ...#service`, `serviceType: Ergonomic Workstation Assessment`).
- **CTA Wording:** `Request a Workstation Assessment Plan` (supporting text: *Talk to an ergonomist about your team's office or remote setup.*).
- **Facts Greg Must Confirm:** (1) Vendor neutrality statement (confirm ErgoWorks provides independent recommendations without product-sales kickbacks); (2) Virtual assessment delivery tools; (3) Report template sections.

### Granola Direction vs Briefs Reconciliation

- **Granola decision:** Focus on the 3 priority pages immediately to prove consulting demand, designed with a shared, reusable template suitable for rapid replication.
- **Briefs alignment:** The briefs originally contemplated a sequential rollout across 90 days (Sprint 1 technical, Sprint 2 content). Reconciled action: Us draft all 3 page copy sheets concurrently this week, while Joel executes the P0 form-tracking fix in parallel.

---

## Melbourne landing decision

**Recommendation:** Build/re-skin a dedicated Melbourne page at `/ergonomic-consultants-in-melbourne` using the new template spec; do **NOT** land Melbourne traffic on the Sydney page or the corporate LP.

### Analysis & Cannibalisation Argument

1. **Why NOT the Sydney Assessment Page (`/ergonomic-consultants-in-sydney`):**
   - High bounce risk: Searchers searching for `ergonomic assessment melbourne` (150 searches/mo, CPC A$7.00, `keyword-gap.md` §3) arriving on a page with "Sydney" in the H1, NSW addresses (`31 Hunter St, Sydney`), and SafeWork NSW references will immediately bounce. Quality Score will degrade rapidly in Google Ads.
2. **Why NOT the Corporate LP (`/corporate-ergonomic-consulting`):**
   - Intent mismatch: The corporate LP is designed for enterprise consulting (broad workplace ergonomics, enterprise teams). Searchers querying assessment terms possess specific, immediate local service intent.
3. **Why a Dedicated Melbourne Page Wins:**
   - Existing asset strength: `/ergonomic-consultants-in-melbourne/` already exists, returns 200, and achieved 394 impressions at average position 12.9 in recent GSC data (`seo/keyword-gap.md` §6, Observation 7; `audit.md` §1). It currently outranks the Sydney page in organic search.
   - Retitling to `Ergonomic Assessment Melbourne` directly captures 150/mo KD 0 demand (`keyword-gap.md` §5, Row 8).

### Requirements for ≥40% Content Differentiation (Melbourne vs Sydney)

To satisfy the unique content rule and prevent geo-doorway duplication:
- **Local Coverage Block:** Explicit Victorian geographic focus (Melbourne CBD, Southbank, Docklands, St Kilda Rd, Richmond, Clayton/outer industrial hubs).
- **Regulatory Framework:** Reference Victorian OHS framework (WorkSafe Victoria and the Victorian *Occupational Health and Safety Act 2004* / *Workplace Amenities and Environment Compliance Code*) rather than SafeWork NSW.
- **Consultant Presence:** Feature Melbourne-based consultant availability (Greg to confirm local delivery team).
- **Unique Scenarios & Proof:** Case studies reflecting Victorian client profiles (e.g. Melbourne financial/legal corporate offices vs local logistics).

---

## Sequence + asks

### Sequence (This Week + Next)

```
[Week 1: Parallel Tracks]
Track A (Us + Marcus): Draft 3 Page Copy Sheets & Schema ---> Marcus Reviews Copy ---> Asks Sent to Greg
Track B (Joel / Dev):  Deploy P0 Form-Tracking Fix (/thank-you + dataLayer) ---> Test Real Submission
                                       |
                                       v
[Week 2: Build & Verification]
Joel builds Statamic Template & mounts 3 pages ---> Us QA Links, Schema & Ads UTMs ---> Launch & Final URLs switched
```

- **Days 1–3 (This Week):**
  - *Us:* Produce complete draft copy for the 3 priority pages following the build sheets.
  - *Marcus:* Review draft copy, approve CTA wording, and forward specific factual questions to Greg.
  - *Joel (P0 Blocker):* Complete the form tracking fix (pushing `direct_enquiry` to `dataLayer` on fetch success or routing to `/thank-you/`) so Ads and GA4 can record leads (`seo-roadmap-90d.md` Sprint 1 Item 1).
- **Days 4–5 (End of Week 1):**
  - *Greg:* Provide missing operational facts (coverage radius, consultant credentials, sample report).
  - *Marcus:* Sign off final content pack.
- **Week 2:**
  - *Joel:* Implement the Statamic template blocks and build `/ergonomic-consultants-in-sydney`, `/ergonomic-solutions/workstation-assessments`, and the new `/manual-handling-training-sydney`.
  - *Us:* Technical QA of staging/live pages (schema validation, mobile form submission test, tracking persistence).
  - *Marcus:* Point Sydney Ads campaign 24158353407 final URLs to the upgraded pages.

### Factual Asks for Greg

1. **Sydney Coverage:** Which specific Sydney metropolitan zones and business parks are covered for on-site visits without extra travel fees?
2. **Consultant Credentials:** Exact names, tertiary qualifications, and professional registrations (e.g., AHPRA Physiotherapist, Certified Ergonomist) of the Sydney assessors and trainers.
3. **Manual Handling Course Boundary:** Confirm that ErgoWorks issues corporate attendance certificates and does *not* claim RTO accreditation or national unit codes (`TLID0020`).
4. **Training Formats:** Typical duration (e.g., 90-min, half-day) and maximum attendee cap per practical session.
5. **Report Sample:** A redacted 1–2 page sample of an Ergonomic Assessment Report to feature as a trust asset.
6. **Melbourne Delivery:** Confirm whether Melbourne on-site assessments are delivered by locally based consultants or flying fly-in staff.

### "Done" Definition per Page

1. **Targeting & Structure:** Exact primary keyword in title tag, H1, meta description, opening 100 words, and canonical tag pointing to apex URL (`https://ergoworksconsulting.com.au/...`).
2. **Content Depth:** Meets editorial word count targets (~1,400 to ~1,580 words) with complete process steps, deliverables, and visible FAQ accordion.
3. **Validated Schema:** Valid JSON-LD `@graph` containing `Service` or `Course` referencing root provider `@id: "https://ergoworksconsulting.com.au#organisation"`, verified error-free on Schema Validator.
4. **Conversion & Tracking:** All in-page CTAs route to `/contact-us#contact-form`; form submission successfully fires the conversion event in GTM and GA4.
5. **Paid-Landing Ready:** When accessed with UTM parameters, navigation leakage is suppressed, UTMs pass to lead capture, and layout renders cleanly on mobile.
6. **Internal Link Mesh:** Inbound links from specified blog posts deployed; outbound links to sister hubs active.

---

## Sources

- **Google Search Console MCP:** Live query and page queries via `mcp__gsc_get_search_analytics`, `mcp__gsc_get_advanced_search_analytics`, and `mcp__gsc_list_properties` on `https://www.ergoworksconsulting.com.au/` (28d: 11 Aug–08 Sep 2026 vs 14 Jul–10 Aug 2026).
- **Live HTTP Inspections:** Apex curl checks of `/ergonomic-consultants-in-sydney`, `/ergonomic-solutions/workstation-assessments`, `/ergonomic-solutions/manual-handling-training`, and `/manual-handling-training-sydney`.
- **Repo SEO & Client Files:**
  - `docs/ergoworks-consulting/greg-review-2026-09-04/seo/briefs/brief-ergonomic-assessment-sydney.md`
  - `docs/ergoworks-consulting/greg-review-2026-09-04/seo/briefs/brief-manual-handling-training-sydney.md`
  - `docs/ergoworks-consulting/greg-review-2026-09-04/seo/briefs/brief-workplace-ergonomic-assessment.md`
  - `docs/ergoworks-consulting/greg-review-2026-09-04/seo/briefs/seo-roadmap-90d.md`
  - `docs/ergoworks-consulting/greg-review-2026-09-04/seo/keyword-gap.md` (§3–§6)
  - `docs/ergoworks-consulting/greg-review-2026-09-04/seo/audit.md` (§1, §2, §5)
  - `docs/ergoworks-consulting/greg-review-2026-09-04/analysis/gemini-review-seo.md`
  - `docs/ergoworks-consulting/CONTEXT.md` (Updates 2026-08-25, 2026-09-02, 2026-09-03)
- **Skills:**
  - `~/.claude/skills/seo-content-brief/SKILL.md` (Website Relevance Rule, Outline Structure, Heading Placement)
  - `~/.claude/skills/seo-page/SKILL.md` (Single-page On-Page & Schema Criteria)
  - `~/.claude/plugins/cache/marketingskills/marketing-skills/2.11.0/skills/schema/SKILL.md` (`@graph` structure, single `@id` entity hierarchy, FAQPage guidelines)
  - `~/.claude/plugins/cache/marketingskills/marketing-skills/2.11.0/skills/cro/SKILL.md` (Value proposition clarity, CTA placement, friction reduction, paid ad scent)

---

### Summary of Changes & Verification
- **What was checked:** Retrieved live Google Search Console query and page data for the 5 target terms and key URLs across two consecutive 28-day periods; parsed live HTML and structured data on production apex URLs using curl.
- **Files reviewed:** 4 briefs and roadmap docs, keyword gap analysis (§3–§6), technical audit (§1, §2, §5), Gemini review analysis, client context updates, and 4 SEO/CRO skill files.
- **Files touched:** None (strict read-only execution; no git commits or file modifications).
- **Verification:** Verified GSC query data against Marcus' stated baseline; confirmed live 200/404 statuses via curl; validated JSON-LD schema requirements against schema.org and Google's latest structured data guidelines.

[exited with code 0]
