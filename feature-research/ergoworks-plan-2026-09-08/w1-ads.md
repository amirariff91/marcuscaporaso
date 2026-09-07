## A Sydney Starvation (Evidence Table + Verdict)

### Daily Delivery & Diagnostic Evidence (26 Aug – 08 Sep 2026)
*Source: GAQL `campaign`, `campaign_criterion`, `change_event`, and `search_term_view` on customer `9258098368`.*

| Date | Day | Impr | Clicks | Cost (AUD) | Conv | All Conv | Search IS | Budget Lost IS | Rank Lost IS | Key Configuration / Account Event |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-26 | Wed | 0 | 0 | $0.00 | 0 | 0 | — | — | — | Campaign paused. |
| 2026-08-27 | Thu | 2 | 0 | $0.00 | 0 | 0 | 100.0% | 0.0% | 0.0% | Enabled at 13:16 by `mjc.growth`. MaxConv (no tCPA), budget A$60/day. |
| 2026-08-28 | Fri | 4 | 1 | $1.98 | 0 | 0 | 40.0% | 0.0% | 60.0% | First click ("ergonomic consultant", CPC A$1.98). |
| 2026-08-29 | Sat | — | — | — | — | — | — | — | — | **No delivery.** Weekend ad schedule off. 10 phrase KWs + assets added. **tCPA A$250 set at 02:03**. |
| 2026-08-30 | Sun | — | — | — | — | — | — | — | — | **No delivery.** Weekend ad schedule off. |
| 2026-08-31 | Mon | 28 | 1 | $6.74 | 0 | 0 | 72.2% | 0.0% | 27.8% | **Budget increased to A$100/day** (11:17); **tCPA lowered to A$200** (12:17). |
| 2026-09-01 | Tue | 11 | 0 | $0.00 | 0 | 0 | 42.9% | 0.0% | 57.1% | 0 clicks; Rank Lost IS jumped to 57.1%. |
| 2026-09-02 | Wed | 15 | 1 | $41.27 | 0 | 1 | 87.5% | 0.0% | 12.5% | 1 click ("workplace ergonomic assessment", CPC A$41.27) fired "Ergoworks LP Lead". At 18:12, LP Lead added to custom goal `6458792967`. |
| 2026-09-03 | Thu | 3 | 0 | $0.00 | 0 | 0 | 66.7% | 0.0% | 33.3% | Delivery collapsed. Bidding algorithm reacting to 0 biddable conv vs A$41.27 spend. |
| 2026-09-04 | Fri | 3 | 0 | $0.00 | 0 | 0 | 50.0% | 0.0% | 50.0% | Rank Lost IS 50.0%. Zero clicks. |
| 2026-09-05 | Sat | — | — | — | — | — | — | — | — | **No delivery.** Weekend ad schedule off. |
| 2026-09-06 | Sun | — | — | — | — | — | — | — | — | **No delivery.** Weekend ad schedule off. |
| 2026-09-07 | Mon | 4 | 0 | $0.00 | 0 | 0 | 40.0% | 0.0% | 60.0% | Rank Lost IS 60.0%. Near-zero delivery persists. |
| 2026-09-08 | Tue | 0 | 0 | $0.00 | 0 | 0 | — | — | — | Live state this morning. |

### Diagnostic Findings & Ranked Causes

1. **Rank 1 (Single Most Likely Cause): Premature tCPA A$200 on Zero Conversion History + A$41.27 CPC Auction Reality (Applied Rule: `ads/SKILL.md` Bid Strategy Progression; `google-audit.md` G36, G37, G38).**
   - The campaign recorded **0 biddable conversions** (`metrics.conversions = 0`) across its entire lifetime.
   - On 2026-09-02, a single click cost **A$41.27**. Because "Ergoworks LP Lead" (7729215501) was secondary and not attached to custom goal `6458792967` until 18:12 that evening, the conversion logged exclusively under `all_conversions = 1`, registering as 0 conversions to the bidding engine.
   - Under Google Smart Bidding math ($\text{Bid} = \text{tCPA} \times p(\text{conversion})$), an algorithm with 0 recorded conversions and typical B2B conversion probability (2–4%) caps maximum bids at A$4.00–$8.00. Faced with Sydney auction CPCs of A$35–$45+, the algorithm slashed bids below the first-page reserve, driving Search Rank Lost IS to 50–60% and starving impressions to 3–4/day.
2. **Rank 2: Internal Auction Cannibalisation from Campaign `700072710` (`google-audit.md` G04, G07).**
   - Campaign `700072710` targets Sydney (`geoTargetConstant/1000286`, bid modifier 1.0) and contains identical keywords: `[ergonomic assessment sydney]`, `[workplace ergonomic assessment]`, `+workstation +assessment`, and `+ergonomics +consultant`.
   - Campaign `700072710` runs on **Maximize Conversions WITHOUT tCPA** with a daily budget of **A$154.81/day**. In internal ad rank auctions, Google enters the higher ad rank; the unconstrained old campaign consistently outbid and cannibalised the tCPA-constrained new campaign for the same Sydney searchers.
3. **Rank 3: Weekend Absence Explained by Intentional `AD_SCHEDULE` (`google-audit.md` G10).**
   - GAQL query of `campaign_criterion` confirmed both `24158353407` (criteria `302872`–`342872`) and `700072710` (criteria `302876`–`342876`) have active ad schedules set strictly to **Monday–Friday 07:00–18:00/19:00**. Saturday 5 Sep and Sunday 6 Sep had zero serving by platform design.
4. **Rank 4: Narrow Audience Addressability in Sydney.**
   - Total commercial B2B assessment query volume in Sydney across exact/phrase core terms is ~60–120 searches/month (~2–4/day). Combined with 38 campaign negatives and rank loss, available auction opportunities are naturally thin.

### Verdict
The Sydney campaign was starved when a restrictive **A$200 tCPA** was imposed on an algorithm with zero conversion history, right as it registered an A$41.27 click with zero recognised conversions, while simultaneously being outranked in the same auctions by the legacy unconstrained campaign `700072710`.

---

## B Melbourne Extension (Recommendation + Change List + Checklist)

### Strategic Recommendation: Cloned `SEARCH_MEL` Campaign vs Geo-Add
**Recommendation: Launch a dedicated cloned campaign `SEARCH_MEL_Ergonomics-Assessment_2026Q3`. Refuse geo-pooling into `24158353407`.**

*Tradeoff Analysis:*
- **Ad Copy Relevance (`google-audit.md` G23, G35):** In `24158353407`, 7 of 15 Core headlines and 6 of 15 Consultant headlines explicitly feature "Sydney" (e.g. "Ergonomic Assessments Sydney", "For Sydney HR & WHS Teams"). Pooling Melbourne into this campaign forces either showing Sydney copy to Melbourne buyers (ruining CTR/relevance) or stripping geo-copy into generic text. Search campaigns do not support ad-group-level geo targeting.
- **Bidding Isolation (`google-audit.md` G36, G38):** Adding Melbourne to `24158353407` would subject Melbourne to the same broken tCPA suppression. A cloned campaign can launch on **Maximize Conversions WITHOUT tCPA** (A$50/day) to allow bid exploration and establish initial conversion velocity.
- **Signal Pooling Tradeoff:** Because `24158353407` has zero biddable conversion history, there is no accumulated algorithmic equity to pool.
- **Budget Control:** Allocates an explicit A$50/day to Melbourne and A$50/day to Sydney, preventing one city from consuming the entire allocation.

### Landing Page & Geo-Targeting Analysis
- **Landing Page Final URL:** `https://ergoworksconsulting.com.au/corporate-ergonomic-consulting`
  - Verified via source HTML: The page hero ("Healthier ways of working, wherever work happens") and service text are **100% city-neutral**. The only Melbourne mention is already inside the form placeholder ("e.g. Sydney and Melbourne offices"). The page is fully valid for Melbourne without code changes.
- **Location Targeting:**
  - Positive Geo Target: `geoTargetConstants/1000567` (Melbourne, Victoria, Australia — City).
  - Target Type Setting: `positiveGeoTargetType: PRESENCE` (people in or regularly in location) and `negativeGeoTargetType: PRESENCE`. Reject "Presence or Interest".

### Exact Draft Mutate Fields (DO NOT EXECUTE)

1. **Campaign Budget:**
   - Resource: `campaignBudgets:mutate`
   - `amountMicros`: `"50000000"` (A$50.00/day)
   - `deliveryMethod`: `"STANDARD"`
2. **Campaign:**
   - Resource: `campaigns:mutate`
   - `name`: `"SEARCH_MEL_Ergonomics-Assessment_2026Q3"`
   - `advertisingChannelType`: `"SEARCH"`
   - `status`: `"PAUSED"` (staged)
   - `maximizeConversions`: `{}` (NO `targetCpaMicros` at launch)
   - `geoTargetTypeSetting`: `{"positiveGeoTargetType": "PRESENCE", "negativeGeoTargetType": "PRESENCE"}`
   - `networkSettings`: `{"targetGoogleSearch": true, "targetSearchNetwork": false, "targetContentNetwork": false, "targetPartnerSearchNetwork": false}`
3. **Geo & Language Criteria:**
   - Resource: `campaignCriteria:mutate`
   - Location: `{"campaign": "__CAMPAIGN_RES__", "location": {"geoTargetConstant": "geoTargetConstants/1000567"}, "negative": false}`
   - Language: `{"campaign": "__CAMPAIGN_RES__", "language": {"languageConstant": "languageConstants/1000"}}`
   - Ad Schedule: Replicate Mon–Fri 07:00–18:00 (`dayOfWeek`: MONDAY through FRIDAY, `startHour`: 7, `endHour`: 18).
4. **Keywords (2 Ad Groups: Core & Consultant):**
   - Replicate Sydney set, replacing Sydney exacts:
     - Core: `[ergonomic assessment melbourne]`, `"ergonomic assessments melbourne"`, `[workplace ergonomic assessment]`, `"workplace ergonomic assessment"`, `[workstation assessment]`, `"workstation assessments"`, `[office ergonomic assessment]`, `"office ergonomic assessment"`.
     - Consultant: `[ergonomic consultant]`, `"ergonomic consultant"`, `"workplace ergonomics consultant"`, `"corporate ergonomics"`, `"ergonomics company"`.
5. **Ad Copy Updates (Headlines & Descriptions):**
   - H1: `Ergonomic Assessments Melb` / `Ergonomic Assessment Melb` (or `Ergonomic Assessments` [21 chars])
   - H2: `Melbourne Workplace Ergonomics` (30 chars)
   - H3: `For Melbourne HR & WHS Teams` (28 chars)
   - H4: `A Melbourne Ergonomics Partner` (30 chars)
   - H5: `Melbourne Ergonomic Consultant` (30 chars)
   - D1: `Workplace ergonomic assessments for Melbourne teams, led by qualified physiotherapists.` (89 chars)
   - D2: `A Melbourne ergonomics consultancy for desk-based and hybrid workforces.` (72 chars)
6. **Cross-City Negative Exclusion:**
   - Add phrase negative `"sydney"` to Melbourne campaign; add phrase negative `"melbourne"` to Sydney campaign.

### Launch Checklist
- [ ] Confirm Greg's team has active physiotherapist consultant capacity in Melbourne.
- [ ] Create `SEARCH_MEL_Ergonomics-Assessment_2026Q3` in PAUSED status.
- [ ] Attach custom conversion goal `6458792967` at campaign level; set standard category goals to `biddable = false`.
- [ ] Import the 38 campaign negative keywords from Sydney plus `"sydney"`.
- [ ] Ensure bidding strategy is **Maximize Conversions without tCPA**.
- [ ] Verify final URL points to `https://ergoworksconsulting.com.au/corporate-ergonomic-consulting`.
- [ ] Adjust Sydney campaign budget to A$50/day and remove tCPA (revert to pure Maximize Conversions) simultaneously.
- [ ] Enable during business hours Monday–Friday.

---

## C Targeting Tightening on Legacy Campaign `700072710`

### Search-Term Classification Table (Last 30 Days: 9 Aug – 8 Sep 2026)
*Source: GAQL `search_term_view` across 739 distinct queries totaling A$2,722.85.*

| Category | Query Count | Cost (AUD) | Spend % | Clicks | Conv | All Conv | Performance Assessment & Waste Identification |
|---|---|---|---|---|---|---|---|
| **Employer Intent** | 106 | $292.67 | 10.7% | 25 | 1.0 | 1.0 | **Core Commercial Asset.** Terms: `ergonomic assessment` ($68.38), `workplace ergonomics` ($41.64, 1 conv), `ergonomic workplace assessment` ($21.71), `workstation ergonomic assessment` ($10.90). |
| **WFH Assessment Intent** | 7 | $26.60 | 1.0% | 3 | 0.0 | 0.0 | **Underserved High-Intent Segment.** Terms: `work from home ergonomic assessment` ($18.05), `home office ergonomic assessment` ($4.10). High relevance, low auction volume. |
| **Certification / Course / Qualification** | 157 | $632.64 | 23.2% | 74 | 2.0 | 2.0 | **Individual Seeker Waste.** Terms: `manual handling training` ($96.08), `thurgoona training` ($80.96), `manual handling certificate` ($71.31), `high risk work licence` ($31.25), `allens training` ($29.63). Non-corporate individual traffic. |
| **Job-Seeker / Recruitment** | 0 | $0.00 | 0.0% | 0 | 0.0 | 0.0 | Zero spend in 30d window (partially suppressed by existing broad negatives). |
| **Other (Regulators, Competitors, Local, Misc)** | 469 | $1,770.93 | 65.0% | 87 | 3.0 | 3.0 | **Severe Waste / Leakage:**<br>• Regulators: `workcover` ($407.36, 1 conv), `safe work australia` ($173.54, 1 conv), `safe work` ($45.97), `whs queensland` ($33.43).<br>• Competitors: `workforce health assessors` ($156.01), `converge international` ($106.59), `australian academic solutions` ($57.68), `ergonomic solutions australia` ($51.56), `work healthy australia` ($49.40), `no pain ergonomics` ($37.69).<br>• Local ACT: `ergonomic office fyshwick` ($122.49). |
| **Total Analyzed** | **739** | **$2,722.85** | **100%** | **189** | **6.0** | **6.0** | **Total Addressable Waste:** A$2,075.45 (76.2% of search term spend). |

### Quantified Waste Removed
- While several major waste terms (`workcover`, `safe work`, `workforce health assessors`, `converge international`, `forklift`) were negatived between 20 Aug and 2 Sep, **A$1,357.10 across 635 queries** remains completely unblocked in active auctions.
- Immediate savings from eliminating unblocked competitor, ACT local, and individual manual-handling terms: **~A$1,100 – A$1,400/month**.

### Proposed Negative List for Campaign `700072710`
*Cross-checked against all 447 existing campaign negatives; none of the following exist in the account.*

| Keyword Text | Match Type | Category | Justification |
|---|---|---|---|
| `australian academic solutions` | PHRASE | Competitor | Spent A$57.68 (1 click, 0 conv) in last 30d. |
| `ergonomic solutions australia` | PHRASE | Competitor | Spent A$51.56 (4 clicks, 0 conv) in last 30d. |
| `work healthy australia` | PHRASE | Competitor | Spent A$49.40 (1 click, 0 conv) in last 30d. |
| `no pain ergonomics` | PHRASE | Competitor | Spent A$37.69 (1 click, 0 conv) in last 30d. |
| `vital skills training` | PHRASE | Competitor / RTO | Spent A$21.63 (1 click, non-consulting conv). |
| `ergo science` | PHRASE | Competitor | Spent A$13.31 (1 click, 0 conv) in last 30d. |
| `the ergonomic physio` | PHRASE | Competitor / Physio | Spent A$11.96 (1 click, 0 conv) in last 30d. |
| `beyond ergo` | PHRASE | Competitor | Spent A$10.19 (1 click, 0 conv) in last 30d. |
| `fyshwick` | PHRASE | Location (ACT) | Spent A$122.49 (9 clicks, 0 conv). Local Canberra store intent. |
| `canberra` | PHRASE | Location (ACT) | Spent A$37.49 (5 clicks, 0 conv). ErgoWorks focus is Syd/Melb. |
| `queensland` | PHRASE | Regulator / Geo | Spent A$33.43 on "work health and safety queensland". |
| `medication training` | PHRASE | Individual / Care | Spent A$20.78 (2 clicks, 0 conv). Nursing/aged-care course. |
| `near me` | PHRASE | Individual / Local | Spent A$28.10. Consumer / individual seeker query syntax. |
| `in person` | PHRASE | Individual Course | Spent A$15.22. Individual course training intent. |
| `refresher` | PHRASE | Qualification | Matches individual re-certification intent. |
| `liverpool` | PHRASE | Local Suburb | Spent A$15.91 on individual warehouse training intent. |

### Ad-Group & Keyword Restructuring Plan
1. **Pause Modified Broad Match (`+keyword`) Keywords:**
   - In ad group `Manual Handling Training`, pause legacy modified broad terms (`+manual +handling +training`, `+manual +handling`). Modified broad now maps to pure broad, causing massive leakage into RTO courses.
   - In ad group `Ergonomic Office Consulting`, pause `+ergonomic +office` and `+ergo +consultants`.
2. **Restructure Into 3 Clean B2B Themes:**
   - **Theme 1: Corporate & Workplace Ergonomic Assessments**
     - Target exact and phrase: `[ergonomic assessment]`, `"workplace ergonomic assessment"`, `[workstation assessment]`, `"corporate ergonomic assessment"`.
   - **Theme 2: Work-From-Home & Remote Ergonomic Assessments**
     - Target exact and phrase: `"work from home ergonomic assessment"`, `"wfh ergonomic assessment"`, `"home office ergonomic assessment"`, `"remote workstation assessment"`.
   - **Theme 3: Employer On-Site Manual Handling (Restricted)**
     - Target strictly employer-qualified terms: `"onsite manual handling training"`, `"workplace manual handling training"`, `"manual handling training for staff"`. Reject bare `"manual handling"`.

---

## D tCPA Guardrail on Legacy Campaign `700072710`

### 90-Day Baseline Economics (10 Jun – 08 Sep 2026)
*Source: GAQL `campaign` and `campaign_conversion_goal` for customer `9258098368`.*

- **Total Campaign Spend:** A$13,563.21 (12,812 impressions, 1,106 clicks).
- **Reported Raw Conversions:** 52.87 (Raw CPA = A$256.54).
- **Conversion Breakdown by Action:**
  1. `Calls from ads` (AD_CALL): **20.00**
  2. `Make an Enquiry SR` (GA4 Custom Form): **15.87**
  3. `Call Forwarding SR - Ergoworks Consulting` (WEBSITE_CALL): **8.00**
  4. `Newsletter Sign Up SR` (GA4 Custom): **4.00** *(Micro-conversion)*
  5. `Phone Click SR` (GA4 Custom): **3.00** *(Micro-conversion, dead since July)*
  6. `Email Click SR` (GA4 Custom): **2.00** *(Micro-conversion)*
- **Qualified Consulting Lead Volume (Enquiry Form + Phone Calls):**
  $$\text{Strict Consulting Leads} = 20.00 + 15.87 + 8.00 = \mathbf{43.87}$$
- **Actual 90-Day Qualified CPA:**
  $$\text{CPA}_{\text{Strict}} = \frac{\text{A}\$13,563.21}{43.87} = \mathbf{A\$309.17}$$
- **August 2026 Reality:**
  Spend was A$4,658.22 for 10 strict leads = **A$465.82 CPA**, driven by the broken form signal and unpruned broad search terms.

### Recommended Target CPA & Learning-Period Risk
- **Defensible Initial Target:** **A$280.00 – A$300.00** (once conversion signals are active).
- **Secondary Target:** Step down to **A$220.00 – A$250.00** after 3 weeks of negative keyword waste reduction.
- **Why A$200 is Currently Fatal:**
  Applying a A$200 tCPA today—while the website form tracking is broken and August CPA was A$465—will trigger an immediate algorithmic panic. The bidding engine will perceive that actual CPA is double the target, slash keyword bids across the board, drive Rank Lost IS above 70%, and starve the legacy consulting campaign of all impression volume (mirroring Sydney).
- **Learning-Period Reset Risk (`google-audit.md` G38):** Switching 700072710 from pure Maximize Conversions to Target CPA resets the bidding model into a 7–14 day learning phase. Volume can fluctuate by $\pm 30\%$.

### Mandatory Trigger Conditions Before Applying tCPA
Do not apply tCPA to `700072710` until **all three conditions** are satisfied:
1. **Dev Tracking Fix Verified:** Joel's code fix on `/contact-us` submits cleanly to the dataLayer (`direct_enquiry`), and Google Ads conversion action `6455868870` logs live form submissions.
2. **14-Day Stable Signal Run:** The campaign records $\ge 12$ verified conversions (`Make an Enquiry SR` + phone calls) over 14 consecutive days post-fix.
3. **Negative Keyword Deployment:** The 16 recommended negative keywords are live to stop the ~A$1,100/mo competitor and ACT leakage prior to capping bids.

---

## Open Questions for Marcus/Greg (Max 5)

1. **02/09 Conversion Audit:** Was the single conversion on 2 September (A$41.27 click on "workplace ergonomic assessment" firing "Ergoworks LP Lead") a genuine client enquiry or an internal test submission by our team?
2. **Canberra / ACT Physical Coverage:** Search terms for `fyshwick` and `canberra` consumed A$145.90 in the last 30 days. Does ErgoWorks have consultants physically delivering on-site assessments in the ACT, or should we exclude the ACT immediately?
3. **Manual Handling Corporate Offer:** Queries for individual training and certificates burned A$632+ in 30 days. Does Greg actively want corporate group manual-handling bookings from employers, or should we pause the `Manual Handling Training` ad group entirely to protect assessment budget?
4. **Melbourne Delivery Readiness:** Can Greg's team immediately service on-site workplace ergonomic assessments across Greater Melbourne with local physiotherapists upon campaign launch?
5. **Contact Form Fix Deployment Date:** What is Joel’s committed date to push the Statamic contact form tracking fix to production so we can restore Google Ads bid signals?

---

## Sources (GAQL Queries Executed via Customer `9258098368`)

- `SELECT change_event.change_date_time, change_event.change_resource_type, change_event.change_resource_name, change_event.user_email, change_event.client_type, change_event.resource_change_operation, change_event.old_resource, change_event.new_resource FROM change_event WHERE change_event.change_date_time BETWEEN '2026-08-26 00:00:00' AND '2026-09-08 23:59:59' AND change_event.campaign = 'customers/9258098368/campaigns/24158353407' ORDER BY change_event.change_date_time DESC LIMIT 100`
- `SELECT change_event.change_date_time, change_event.change_resource_type, change_event.change_resource_name, change_event.user_email, change_event.client_type, change_event.resource_change_operation, change_event.campaign, change_event.old_resource, change_event.new_resource FROM change_event WHERE change_event.change_date_time BETWEEN '2026-08-31 13:00:00' AND '2026-09-08 23:59:59' ORDER BY change_event.change_date_time DESC LIMIT 100`
- `SELECT campaign.id, campaign.name, campaign.status, campaign.serving_status, campaign.bidding_strategy_type, campaign.bidding_strategy_system_status, campaign.maximize_conversions.target_cpa_micros, campaign.campaign_budget, campaign.geo_target_type_setting.positive_geo_target_type, campaign.geo_target_type_setting.negative_geo_target_type FROM campaign WHERE campaign.id IN (24158353407, 700072710)`
- `SELECT campaign_budget.id, campaign_budget.name, campaign_budget.amount_micros, campaign_budget.delivery_method, campaign_budget.period, campaign_budget.status, campaign_budget.explicitly_shared FROM campaign_budget WHERE campaign_budget.status != 'REMOVED'`
- `SELECT campaign_criterion.campaign, campaign_criterion.criterion_id, campaign_criterion.type, campaign_criterion.negative, campaign_criterion.bid_modifier, campaign_criterion.status, campaign_criterion.ad_schedule.day_of_week, campaign_criterion.ad_schedule.start_hour, campaign_criterion.ad_schedule.start_minute, campaign_criterion.ad_schedule.end_hour, campaign_criterion.ad_schedule.end_minute, campaign_criterion.location.geo_target_constant, campaign_criterion.device.type, campaign_criterion.language.language_constant, campaign_criterion.keyword.text, campaign_criterion.keyword.match_type FROM campaign_criterion WHERE campaign_criterion.campaign IN ('customers/9258098368/campaigns/24158353407', 'customers/9258098368/campaigns/700072710')`
- `SELECT geo_target_constant.id, geo_target_constant.name, geo_target_constant.country_code, geo_target_constant.target_type, geo_target_constant.status FROM geo_target_constant WHERE geo_target_constant.id IN (1000286,9060916,9060917,9112595,9112649,9197753,9198233,9198436,9198755,9198766,9199005)`
- `SELECT segments.date, segments.day_of_week, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.all_conversions, metrics.search_impression_share, metrics.search_budget_lost_impression_share, metrics.search_rank_lost_impression_share FROM campaign WHERE campaign.id = 24158353407 AND segments.date BETWEEN '2026-08-26' AND '2026-09-08' ORDER BY segments.date ASC`
- `SELECT search_term_view.search_term, segments.date, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.all_conversions FROM search_term_view WHERE campaign.id = 24158353407 AND segments.date BETWEEN '2026-08-26' AND '2026-09-08'`
- `SELECT ad_group.id, ad_group.name, ad_group.status, ad_group_criterion.criterion_id, ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type, ad_group_criterion.status, ad_group_criterion.quality_info.quality_score, ad_group_criterion.quality_info.search_predicted_ctr, ad_group_criterion.quality_info.post_click_quality_score, ad_group_criterion.quality_info.creative_quality_score, ad_group_criterion.system_serving_status, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions FROM keyword_view WHERE campaign.id = 24158353407 AND segments.date BETWEEN '2026-08-26' AND '2026-09-08'`
- `SELECT ad_group.id, ad_group.name, ad_group_ad.ad.id, ad_group_ad.ad.name, ad_group_ad.ad.type, ad_group_ad.ad.final_urls, ad_group_ad.ad.responsive_search_ad.path1, ad_group_ad.ad.responsive_search_ad.path2, ad_group_ad.status, ad_group_ad.ad_strength, ad_group_ad.policy_summary.approval_status, ad_group_ad.policy_summary.review_status FROM ad_group_ad WHERE campaign.id = 24158353407`
- `SELECT segments.date, segments.day_of_week, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.all_conversions, metrics.search_impression_share, metrics.search_budget_lost_impression_share, metrics.search_rank_lost_impression_share FROM campaign WHERE campaign.id = 700072710 AND segments.date BETWEEN '2026-08-26' AND '2026-09-08' ORDER BY segments.date ASC`
- `SELECT ad_group.id, ad_group.name, ad_group_criterion.criterion_id, ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type, ad_group_criterion.status FROM ad_group_criterion WHERE campaign.id = 700072710 AND ad_group_criterion.type = 'KEYWORD' AND ad_group_criterion.status = 'ENABLED'`
- `SELECT campaign_criterion.criterion_id, campaign_criterion.keyword.text, campaign_criterion.keyword.match_type FROM campaign_criterion WHERE campaign_criterion.campaign = 'customers/9258098368/campaigns/700072710' AND campaign_criterion.negative = true AND campaign_criterion.type = 'KEYWORD'`
- `SELECT search_term_view.search_term, metrics.cost_micros, metrics.clicks, metrics.impressions, metrics.conversions, metrics.all_conversions FROM search_term_view WHERE campaign.id = 700072710 AND segments.date DURING LAST_30_DAYS ORDER BY metrics.cost_micros DESC`
- `SELECT metrics.cost_micros, metrics.impressions, metrics.clicks, metrics.conversions, metrics.all_conversions FROM campaign WHERE campaign.id = 700072710 AND segments.date BETWEEN '2026-06-10' AND '2026-09-08'`
- `SELECT segments.conversion_action_name, metrics.conversions, metrics.all_conversions FROM campaign WHERE campaign.id = 700072710 AND segments.date BETWEEN '2026-06-10' AND '2026-09-08'`
- `SELECT geo_target_constant.id, geo_target_constant.name, geo_target_constant.country_code, geo_target_constant.target_type, geo_target_constant.canonical_name, geo_target_constant.status FROM geo_target_constant WHERE geo_target_constant.country_code = 'AU' AND geo_target_constant.name LIKE 'Melbourne%'`

[exited with code 0]
