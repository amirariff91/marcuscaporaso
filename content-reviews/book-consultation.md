# Book a Consultation — content review

**Verdict: Rework** · 7 blocking · 9 should-fix · 1 minor

**Why:** The reassurance and booking flow are strong, but the page still contains unverified location claims, referral and funding wording that needs tightening, testimonial-style claims, visible editorial scaffolding, and substantial word-count padding.

**Length:** Approximately 1,768 words including FAQs; the brief target is 900–1,100 words including FAQs.

## Must fix before publish

1. **Blocking — The page title contains internal metadata**

> 05_Book a Consultation

Why it matters: The `05_` prefix would make the published H1 look unfinished.

**Writer edit:** Replace with:

> # Book a Bariatric Consultation in Perth

2. **Blocking — The credential and hospital strip is unverified**

> - FRACS certified bariatric surgeons - Three partner hospitals in Perth - In-house aftercare team

Why it matters: The copy asserts credential, hospital-affiliation and hospital-count claims that have not been confirmed for publication.

**Writer edit:** Replace with:

> FRACS-qualified bariatric surgeons, with consultations in Booragoon and Mandurah.

(The surgeons' FRACS credential is established in the practice's approved surgeon profiles; only the hospital-count and affiliation claims are held for verification.)

3. **Blocking — The cost section blurs Medicare with surgical costs and promises certainty**

> answer all your questions about costs and funding openly, so there are no surprises later.

> The total depends on your private health insurance, your Medicare entitlement, and which procedure you and your surgeon decide on.

> We will guide you through the full picture, including how private health insurance, Medicare, and other external funding options fit together, so you can make an informed decision when you’re ready.

Why it matters: Medicare rebates and private-health benefits are separate systems, and Medicare does not cover every hospital, theatre or surgical cost.

**Writer edit:** Replace the cost section with:

> **Understanding the costs**
>
> Cost is one of the biggest unknowns when considering weight loss surgery. The total varies by procedure, private-health policy, waiting periods, excess, hospital and clinician fees, and individual circumstances. Medicare may rebate eligible professional services, including an eligible specialist consultation. A Medicare rebate does not itself pay private-hospital accommodation or theatre charges; private-health benefits are separate and policy-dependent. At consultation, the team can explain what may apply and provide an itemised estimate before you decide.

Also replace:

> You will have time to ask anything you like. We will explain the different procedures, walk through what recovery and aftercare look like, and discuss costs and funding openly, so you can understand what may apply before deciding.

**Brief-owner note (OSWA, not the writer):** The brief mandates the "no surprises" transparency framing ("there are no financial surprises", "informed decision without surprises"). If the qualified wording above is adopted, update the brief's transparency lines to match.

4. **Blocking — The CTA contains unresolved scaffolding**

> How you might feel afterward  
> Alt  
> You don't have to decide anything yet

Why it matters: The `Alt` label exposes unfinished authoring text and the page lacks a finished closing booking prompt.

**Writer edit:** Replace the block with:

> ### You do not have to decide anything yet
>
> If you would like to talk through your questions, call **(08) 9332 0066**. A consultation is a conversation, and you can decide what to do next in your own time.

**Brief-owner note (OSWA, not the writer):** Supply the approved online-booking URL; the booking link can be added to this CTA once confirmed. Until then the CTA stays phone-only.

5. **Blocking — Patient-testimonial language creates prohibited reassurance**

> Patients often tell us the consultation was far less daunting than they expected, and that finally getting clear, honest answers about weight loss surgery helped to ease their minds, regardless of what they decided next. Many describe relief at being listened to without judgement, and at really understanding all their options properly for the first time.

Why it matters: Unverifiable patient reports and consistent emotional-relief claims are testimonial-style advertising and imply a predictable consultation outcome.

**Writer edit:** Replace with:

> Consultations are different for everyone. The appointment gives you time to ask questions, discuss options and costs, and consider what you would like to do next. You can take the information home and decide in your own time; there is no single path after a consultation.

6. **Blocking — The Mandurah address uses an unapproved location label**

> Our Booragoon clinic is at the Garden City Specialist Centre, 537 Marmion Street, Booragoon WA 6154. Our Mandurah clinic is at the WA Cardiology Centre, 30 Minilya Parkway, Greenfields 6210.

Why it matters: The approved consultation locations are Booragoon and Mandurah; named facilities and addresses remain unverified, and “Greenfields” conflicts with the required location naming.

**Writer edit:** Replace the FAQ answer with:

> We have two Perth consultation locations: Booragoon and Mandurah. When you book, the team will confirm the clinic address for your appointment and provide directions.

7. **Blocking — Extraction metadata and image placeholders remain in the copy**

> <img src="media/image2.png" style="width:6.26772in;height:2.77778in" />

> <img src="media/image1.png" style="width:6.26772in;height:0.375in" />

> <img src="media/image3.png" style="width:6.26772in;height:2.09722in" />

> <img src="media/image4.png" style="width:5.96354in;height:2.87499in" />

Why it matters: Four extraction-only image tags, plus the document header block (page number, URL, primary-keyword line and keyword table), are authoring metadata and placeholders, not publishable page content.

**Writer edit:** Delete all four extraction-only image tags and the docx header metadata block (page number, URL, primary keyword and any keyword tables). Approved page assets are inserted separately with real file paths and alt text.

## Should fix

1. **Should-fix — GP-referral wording should be tightened on Medicare rebate access**

> A GP referral is recommended but not required to book. Having a referral means you may be eligible for a Medicare rebate on the consultation, and it helps your GP stay involved in your care.

> Your GP referral letter, if you have one. It can help with Medicare rebates on consultation fees, but it is not required to get started.

> If you have one, you may be eligible for a Medicare rebate on the appointment; it also helps keep your GP involved in your care.

Why it matters: A referral may allow a Medicare rebate for an eligible specialist consultation, subject to current requirements; it does not guarantee a rebate or apply automatically to multiple fees.

**Writer edit:** Use these replacements:

> A GP referral is recommended but not required to book. A referral may allow a Medicare rebate for an eligible specialist consultation, subject to current requirements, and keeps your GP involved in your care. If you do not have one yet, you can still book; ask the practice or Medicare what applies to your appointment and fees.

> Your GP referral letter, if you have one. It may allow a Medicare rebate for an eligible specialist consultation, subject to current requirements, but it is not required to book.

> A referral is recommended but not required to book a consultation. It may allow a Medicare rebate for an eligible specialist consultation, subject to current requirements; ask the practice or Medicare what applies. If you do not have a referral yet, you can still book.

**Brief-owner note (OSWA, not the writer):** The brief's own line — "A referral may unlock a Medicare rebate on the consultation" — is the source of this framing. Update the brief to the "may allow … subject to current requirements" wording.


2. **Should-fix — The stats bar does not use the approved conversion values**

> In-house team — Phone — Call 08 9332 0066 to speak to a real person

> Consult length — 30-60 min — Meet your surgeon and gather information

> Perth locations — 2 clinics — Booragoon and Mandurah

> Obligation-free — Consultation — Booking isn’t committing to surgery

Why it matters: The phone number is obscured, the formatting is inconsistent, and the approved stats values have been replaced.

**Writer edit:** Use:

| Label | Value | Supporting line |
|---|---|---|
| Phone | (08) 9332 0066 | Speak to a real person, Perth-based team |
| Consult length | 30–60 min | An unhurried orientation appointment |
| Locations | Booragoon & Mandurah | Two Perth clinics to choose from |
| Obligation | None | Booking is not committing to surgery |

3. **Should-fix — The page does not directly answer whether a BMI or weight threshold is required to book**

> BMI is often the first thing people think about, but it's rarely the real question.

> A consultation is the right starting point if:

Why it matters: The brief specifically requires reassurance that readers do not need to meet a particular threshold before booking.

**Writer edit:** Add after the first sentence:

> There is no minimum or maximum weight required to book a consultation. Booking is the starting point for an individual assessment; it does not confirm that surgery is suitable or mean you will be advised to proceed.

4. **Should-fix — Several consultation benefits are written as guaranteed outcomes**

> which makes a real difference to how comfortable and supported you feel.

> You leave with clarity, whether that means a plan to move forward or simply the confidence that you explored your options properly.

Why it matters: These statements promise emotional support and clarity for every reader rather than describing what the appointment provides.

**Writer edit:** Replace with:

> You meet the team who may be involved in your care if you proceed, so you can ask questions about the support available.

> The consultation helps you understand your options. You can leave with a clearer sense of the information you still need, whether or not you decide to take another step.

5. **Should-fix — The surgical-outcomes disclaimer is unnecessary on this booking page**

> Outcomes vary between individuals. Weight loss results depend on adherence to dietary and lifestyle recommendations, individual health factors, and procedure type. No specific outcome can be guaranteed.

Why it matters: This interrupts the booking journey and shifts attention from consultation information to surgical outcomes.

**Writer edit:** Delete this disclaimer table. Retain the separate risk statement:

> All surgical procedures carry risks. Your surgeon will discuss your individual risk profile at your assessment consultation.

6. **Should-fix — The page is substantially over the brief target and repeats the same reassurance**

> Booking a consultation does not mean you are committing to surgery.

> There is no obligation and no rush to decide anything on the day.

> You remain in control of the decision throughout.

Why it matters: The same message appears in the hero, consultation section, booking steps, CTA area and FAQs, contributing to a page of approximately 1,768 words against a 900–1,100-word target.

**Writer edit:** Keep one full version in the consultation section:

> Booking is not a commitment to surgery. The consultation is time to ask questions and consider your options; you can decide what to do next in your own time.

Shorten or remove duplicate versions from the booking steps, benefits section and repeated reassurance paragraphs.

7. **Should-fix — The GP referral page is referenced but not linked**

> point you to our GP referral page.

> Our GP referral page has more detail if you would like it.

Why it matters: Readers who need referral information should be able to reach it directly, especially because referral timing affects Medicare rebate eligibility.

**Writer edit:** Use:

> point you to our [GP referral page](/gp-referral).

> Our [GP referral page](/gp-referral) has more detail if you would like it.

8. **Should-fix — “Any time” implies unconfirmed phone availability**

> You can also call us any time on 08 9332 0066.

Why it matters: “Any time” may imply 24-hour availability, and the phone formatting differs from the approved number.

**Writer edit:** Replace with:

> If you have questions, call the team on (08) 9332 0066.

9. **Should-fix — The attendance promise is too absolute**

> There is nothing you must bring to book or attend, and you will not be turned away if you arrive without paperwork.

Why it matters: “You will not be turned away” is an operational guarantee that may not cover all appointment or administrative requirements.

**Writer edit:** Replace with:

> Nothing is required to ask about booking. If you do not have paperwork on the day, let the team know; they will confirm what information is needed for your appointment.

## Minor

1. **Minor — The booking-process heading is too generic**

> How it works

Why it matters: The section is specifically about booking, so the heading should make that clear at a glance.

**Writer edit:** Replace with:

> ## How booking works

## Net word budget

- Current body: approximately 1,768 words, including FAQs.
- Single target: approximately **1,050 words**, including FAQs.
- Cut approximately 770 words by removing the testimonial paragraph, outcomes table, title/CTA scaffolding, the reflective BMI lead, repeated reassurance, and duplicated process, cost, preparation and location wording.
- Add or rewrite approximately 52 words for the explicit booking-threshold reassurance, corrected referral and funding language, verified location wording, CTA and approved stats.
- Arithmetic: **1,768 − 770 + 52 = approximately 1,050 words**.
- Do not add keyword-led padding; this is a transactional page whose priority is booking clarity and compliance.

## FAQ list to retain

1. Does booking a consultation mean I am committing to surgery?
2. Do I need a GP referral before I can book?
3. Where are your clinics and how do I get there?
4. What actually happens during the appointment?
5. What should I bring to my consultation?
6. Will I be pressured to book surgery on the day?
7. What happens after I book?
