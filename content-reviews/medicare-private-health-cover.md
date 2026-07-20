# Medicare & Private Health Cover — content review

**Verdict: Rework** · 8 must-fix · 4 should-fix · 1 minor

**Why:** BMI/MBS eligibility, Medicare-versus-private-cover wording, hospital verification, unsupported cost figures, extraction scaffolding and page length need correction before publication.

**Length:** current body approximately 2,150 words including FAQs vs brief target of 1,100–1,400 words.

## Must fix before publish

1. **Blocking — BMI wording is below the canonical MBS threshold**

> Surgery itself is generally considered for patients with a BMI of ~35 or higher, or ~30 or higher with related health conditions and/or who are clinically suitable. This is separate from what your health fund covers; meeting the clinical criteria doesn't automatically mean your policy will pay out. Your fund may apply its own criteria on top of the clinical ones.

Why it matters: The BMI 30/35 framing is not the canonical MBS wording and may imply Medicare eligibility where it does not apply.

**Writer edit:** replace with:

> MBS item eligibility is assessed individually. As a general guide, the relevant pathway is BMI 40 or above, or BMI 35–39.9 with a major obesity-related condition. Item numbers, clinical suitability, referral requirements and fund rules depend on the individual patient; BMI alone does not guarantee eligibility.

**Brief-owner note (OSWA, not the writer):** The current brief says, “Cover is generally relevant for patients with a BMI of 35 or above, or 30 or above with related health conditions.” Update the brief to the canonical 40+ / 35–39.9 framing.

2. **Blocking — MBS item numbers are presented as covering every professional service**

> Medicare pays a set rebate toward the medical side of your care (your surgeon, anaesthetist, and the physician and dietitian consultations linked to your surgery) under item numbers: 31575 (sleeve gastrectomy), 31572 (Roux-en-Y bypass), and others in the MBS bariatric surgery range (31569–31581).

Why it matters: 31575 and 31572 are surgical item references; other services may use separate MBS items and eligibility requirements.

**Writer edit:** replace with:

> Medicare may rebate eligible professional services under applicable Medicare Benefits Schedule (MBS) items. Surgical items include 31575 for sleeve gastrectomy and 31572 for Roux-en-Y gastric bypass; anaesthetist, assistant and other consultation services may use separate items. Confirm which items and rebates apply to the individual patient and procedure.

3. **Blocking — Medicare rebate and private hospital cover are too definite**

> Hospital and theatre costs are generally covered by a gold tier policy or equivalent level of cover that specifically includes bariatric surgery and lists the relevant item numbers, including 31575 and 31572.

> In practice, Medicare (partially) covers your medical team, private health covers your hospital stay, and what's left over — the gap, any excess, and/or copayments — is yours to pay.

> Your private health covers the hospital and theatre side.

Why it matters: “Covered” reads as an assured outcome; benefits depend on the patient’s item eligibility, referral, policy, waiting period, exclusions, pre-approval, excess and copayments.

**Writer edit:** replace the repeated coverage explanation with:

> Medicare may rebate eligible professional services, including an eligible specialist consultation. A Medicare rebate does not itself pay private-hospital accommodation or theatre charges; private-health benefits are separate and policy-dependent.
>
> Private hospital insurance may contribute to hospital costs when the policy includes bariatric surgery and the relevant items, subject to waiting periods, exclusions, pre-approval, excesses, copayments and fund rules. Gold-tier cover or an equivalent product may be relevant, but the tier name alone is not enough. Ask your fund to confirm what applies in writing and discuss an itemised estimate with the financial coordinator.

4. **Blocking — Hospital names and agreed-rate claims conflict with the current brief**

> The hospitals our surgeons operate in – Mount Private Hospital, The Park Private Hospital, or Waikiki Private Hospital in Perth – have agreed rates with most major funds including Medibank, Bupa, HCF, NIB and CBHS, which can reduce your out-of-pocket costs.

> Once your cover is confirmed, any pre-approval is in place, and pre-operative checks are complete, we book your surgery at Mount Private Hospital, The Park Private Hospital, or Waikiki Private Hospital in Perth.

> With agreed rates between our four partner hospitals in Perth and most major funds, many of our patients are able to reduce their out-of-pocket costs considerably.

Why it matters: The draft names three hospitals but later refers to four; the current brief names St John of God Murdoch and Subiaco. All location and agreed-rate claims require verification.

**Writer edit:** replace the named-location claims with:

> Once your cover, any required pre-approval and pre-operative requirements are confirmed, the team will confirm the hospital selected for your care and the fund arrangements that apply to your policy before surgery is scheduled.
>
> Ask your fund and the financial coordinator whether an agreed hospital rate applies to your specific policy, provider and selected hospital.

**Brief-owner note (OSWA, not the writer):** Verify the current hospital list, agreed-rate arrangements and participating funds. The brief names St John of God Murdoch and Subiaco; the draft names Mount Private Hospital, The Park Private Hospital and Waikiki Private Hospital.

5. **Blocking — Unsupported out-of-pocket ranges are hard-coded into the FAQ**

> As a guide, a gastric sleeve (MBS item 31575) typically runs approximately \$12,000 to \$20,000 out of pocket, and a gastric bypass (MBS item 31572) around \$15,000 to \$25,000, depending heavily on your level of private health cover.

Why it matters: These figures are not approved, are ambiguous about whether they mean total self-funded cost or insured out-of-pocket gap, and conflict with the brief’s approach of not publishing a single online figure.

Hold any replacement cost figures until the Q3 cost-framing decision; the Writer edit below contains no figures.

**Writer edit:** delete the dollar ranges and use:

> Even with eligible Medicare rebates and private hospital cover, out-of-pocket costs can include provider gaps, excesses and copayments. The amount depends on the procedure, applicable MBS items, provider fees, hospital arrangements and the patient’s policy. The financial coordinator can help review the cover position and discuss an itemised estimate; confirm final benefits and costs with the relevant fund and providers.

6. **Blocking — Extraction metadata and scaffolding must be removed before publication**

> **03_Medicare & Private Health Cover**
>
> **URL:** /medicare-private-health-cover  
> **Primary keyword:** medicare weight loss surgery australia  
> **Search intent:** Informational (trying to understand a confusing
> system before making a financial decision)  
> **Target word count:** 1,100–1,400 words

> ### Secondary Keywords (target naturally in body copy)
>
> | Keyword | AU Vol/mo | KD |
> |---|---|---|

> `###`

> ### ~2000 words incl. FAQ **Medicare and private health insurance for weight loss surgery in Australia**

> *[draft image placeholder — remove from final page]*

> `###`

> *[draft image placeholder — remove from final page]*

> ### Conversion CTA headline
>
> **Let's check your cover, together  
> Alt  
> Find out exactly how you’re covered**

Why it matters: Page metadata, keyword research, word-count and instruction annotations, empty headings, image placeholders and alternate CTA copy are extraction-only scaffolding. No sentence-count instruction appears in the supplied extraction; any such instruction must also stay out of page copy.

**Writer edit:** remove the complete metadata block, secondary-keyword table, semantic-term notes, all four `media/image*.png` tags, both standalone `###` headings, the embedded word-count/title instruction, any sentence-count instructions, the `Conversion CTA headline` label and the `Alt` variant. Use this page title and CTA copy:

> # Medicare and private health insurance for weight loss surgery in Australia
>
> ### Check your cover with our financial coordinator
>
> Bring your fund details and we can help you understand the relevant item numbers, waiting-period status, pre-approval requirements and likely cost components.

7. **Blocking — The required four-item stats bar hard-codes unverified hospital and fund claims**

> Between Medicare rebates, waiting periods, and your health fund's fine print, it's easy to feel lost when trying to understand what’s covered (and what’s not) for weight loss surgery in Australia.

Why it matters: The brief requires four factual anchors immediately after the hero; hospital/agreed-rate claims are unverified and assessment-dependent benefits must not be stated as definite.

**Writer edit:** insert after the hero:

> | Label | Value | Note |
> |---|---|---|
> | Medicare rebate | Assessment-based | Eligibility and applicable MBS items vary |
> | Hospital and theatre | Separate from Medicare | Private-health benefits are policy-dependent |
> | Waiting period | Policy-dependent | Ask your fund whether a waiting period applies |
> | Agreed hospital rates | Policy-dependent | Ask whether an agreed hospital rate applies to your policy |
>
> Individual eligibility, policy terms, waiting periods and agreed-rate arrangements vary.

**Brief-owner note (OSWA, not the writer):** The brief’s verbatim stats bar and eligibility item hard-code St John of God; remove the named references from the brief or confirm them before publication.

8. **Blocking — The Medicare contribution claim is unsupported**

> Combined, the surgical item (eg 31575 for a gastric sleeve) along with anaesthetist, assistant, and specialist consultation items can bring the total Medicare contribution into the low thousands. The exact figure depends on which items apply to your procedure and your individual circumstances, so it varies from patient to patient. We can calculate what applies in your case well before you commit to surgery.

Why it matters: The “low thousands” amount and promise to calculate the patient’s contribution are not supported by a defined item mix or approved source.

**Writer edit:** replace with:

> Medicare benefits are calculated against the Schedule fee for each eligible item; the total depends on the applicable item mix and must be confirmed for the individual services.

**Brief-owner note (OSWA, not the writer):** The brief mandates the “low thousands” Medicare contribution claim. Remove that instruction unless OSWA supplies an approved source and defines the item mix and scope; the brief must also remove the promise that OSWA can calculate the individual amount.

## Should fix

9. **The H2s and FAQs miss the natural Medicare phrasing**

> How Medicare and private health work together for bariatric surgery

> **8. How much does Medicare rebate for weight loss surgery?**

Why it matters: The primary phrase has effectively no volume; the Ahrefs refresh shows the stronger opportunities are “weight loss surgery medicare” and “gastric sleeve medicare”, but the headings should still read naturally.

**Writer edit:** use:

> ## Does Medicare cover weight loss surgery in Australia?
>
> **1. Does Medicare cover weight loss surgery in Australia?**
>
> **8. How much does Medicare rebate for a gastric sleeve?**

Rename the cost H2 to:

> ## Weight loss surgery cost: what affects your out-of-pocket amount

10. **Finance intent is present but the payment-plan keyword and ATO process wording are missing**

> Some patients also look into the early release of superannuation on compassionate or medical grounds. This is a separate process with its own eligibility rules, which we cover in more detail on our superannuation page. Others choose to explore external, third-party medical finance options.

Why it matters: The page should address “gastric sleeve payment plan Perth” neutrally while keeping early-release super separate from third-party finance and avoiding any endorsement or inducement.

**Writer edit:** replace the financing section with (give the section a stable `Financing & payment options` heading so the two cost pages can deep-link to `/osw/content/medicare-private-health-cover#financing-payment-options`):

> ### Financing & payment options
>
> If you are searching for a gastric sleeve payment plan in Perth, OSWA does not offer in-house payment plans. Third-party finance may be available from independent providers on their own terms; OSWA does not recommend, arrange or approve it.
>
> Some people investigate early release of superannuation through the ATO compassionate-release process. It has strict eligibility criteria and is not automatic; see the superannuation page for general information and speak with the financial coordinator about questions to raise.
>
> Finance is provided by third parties on their own terms; consider whether it is right for you and seek independent financial advice.

**Brief-owner note (OSWA, not the writer):** Ensure both cost-page payment-plan FAQs use a one-line neutral answer and link to this page’s financing section; remove any provider names from the brief.

11. **The financial coordinator FAQ promises exact benefit calculations**

> Yes. We will sit down with you individually, review your policy, and explain exactly what Medicare and your fund will each contribute. We will walk you through the item numbers and fund requirements in plain language and provide a written estimate before you commit to anything. This means you're making your decision with clear figures, not guesswork.

Why it matters: OSWA can help interpret the position, but Medicare and the fund must confirm applicable benefits, exclusions and final amounts.

**Writer edit:** replace with:

> OSWA can help you review the relevant item numbers, policy questions, waiting-period status, pre-approval requirements and likely cost components in plain language. The financial coordinator can discuss an itemised estimate, but your fund and providers must confirm the benefits, fees and final amount that apply to you.

12. **“Almost invariably” overstates the waiting-period rule**

> The 12-month waiting period almost invariably applies to new members and coverage upgrades, so timing for your weight loss surgery matters if you've recently joined or changed funds, or upgraded your cover.

Why it matters: The wording is unnecessarily certain and does not account for fund-specific transfer and waiting-period rules.

**Writer edit:** replace with:

> A 12-month waiting period generally applies to new members and people who upgrade cover to include bariatric surgery. Ask your fund to confirm whether it applies to your policy and how any transfer or waiting-period rules affect your position.

## Minor

13. **Minor — Grammar and clarity issues remain**

> Knowing what Medicare rebates (and what it doesn't) means fewer surprises when the accounts arrive.

> including which procedure you have, your private health cover, any/all Medicare rebates that apply

Why it matters: The wording is grammatically awkward and less precise than the rest of the page.

**Writer edit:** replace with:

> Knowing what Medicare does and does not cover means fewer surprises when accounts arrive.
>
> including the procedure, your private health cover and any applicable Medicare rebates

## Net word budget

Current body: approximately 2,150 words including FAQs.

Target: approximately 1,350 words including all eight FAQs.

Gross cuts: metadata, keyword and instruction scaffolding (~180); repeated Medicare/private-cover explanations and callout table (~320); repeated hospital, fund and scheduling claims (~180); duplicated cost framing and hard-coded ranges (~220); repeated transitions and checklist prose (~310). **Total gross cuts: ~1,210 words.**

Additions: canonical eligibility, MBS and Medicare wording (~170); assessment- and policy-dependent stats bar (~50); neutral financing and ATO-process context (~110); refined FAQ, CTA and clarity copy (~80). **Total additions: ~410 words.**

**2,150 − 1,210 + 410 = ~1,350 words.** Retain all eight FAQs in the target, with the repeated explanations consolidated around the canonical Medicare/private-health distinction.

## Final FAQ list

1. Does Medicare cover weight loss surgery in Australia?
2. What private health cover do I need for bariatric surgery?
3. Is there a waiting period for weight loss surgery on private health?
4. What should I ask my health fund when I call?
5. Does OSWA help me understand my cover?
6. Do agreed hospital rates apply to my fund?
7. What out-of-pocket costs should I still expect?
8. How much does Medicare rebate for a gastric sleeve?

---

## Additional recommendations — SEO/CRO pass (2026-07-20)

*The compliance position is unchanged.*

**A1. Restore a concrete Medicare answer via the government MBS fact.** The page's primary keyword ("medicare weight loss surgery australia") is near-zero volume, but the PAA shows "how much does Medicare rebate for a gastric sleeve?" — answer it with the public schedule figure, not an abstract sentence:

> For MBS item 31575 (sleeve gastrectomy), the current listed schedule fee is **$1,016.90** and the 75% Medicare benefit is **$762.70** (MBS Online, effective 1 July 2026). Bariatric surgery also involves separate anaesthetist, assistant and consultation items; each has its own schedule fee and benefit. These are the Medicare-side figures only — hospital and theatre charges are separate and covered by private hospital insurance, not Medicare.

**A2. Tighten the Medicare-vs-private explanation** (keep the distinction, drop the qualifier pile-up):

> Medicare and private hospital cover do different jobs. Medicare may rebate eligible professional services; it does not pay private-hospital accommodation or theatre charges. Private hospital benefits depend on whether your policy includes the procedure, its waiting period, exclusions, excess and co-payment. Ask your fund to confirm those in writing, then compare against your itemised estimate.

**A3. Internal-link hub.** This page is the funding hub — cross-link to `/fees/`, the super-access page, the GP-referral page, eligibility and booking, with descriptive anchors. Ensure the `/osw/content/medicare-private-health-cover#financing-payment-options` anchor exists so the two cost pages' deep-links resolve.
