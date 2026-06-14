import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Medicare & Private Health for Weight Loss Surgery | Obesity Surgery WA Perth",
  description:
    "How Medicare and private health insurance work for weight loss surgery in Australia. Item numbers, waiting periods, rebates and the OSWA financial navigator.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/medicare-private-health-cover" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "medicare-private-health-cover",
  pageTitle: "Medicare & Private Health for Weight Loss Surgery",
  keyword: "medicare weight loss surgery australia",
  metaDescription:
    "How Medicare and private health insurance work for weight loss surgery in Australia. Item numbers, waiting periods, rebates and the OSWA financial navigator.",
  heroHeadline: "Medicare and private health cover for weight loss surgery in Australia",
  heroSubheadline:
    "Working out what Medicare pays, what your fund covers, and what is left for you can feel like reading a foreign language while you are already anxious about the surgery itself. This page breaks it down in plain terms, and our financial coordinator can sit with you and check your exact situation.",
  stats: [
    { label: "Medicare rebate", value: "Yes", note: "Applies to MBS items 31569-31581 (bariatric surgery family)" },
    { label: "Hospital and theatre", value: "Not Medicare", note: "Funded through your private hospital cover, not Medicare" },
    { label: "Waiting period", value: "12 months", note: "Applies to new members or those upgrading to bariatric cover" },
    { label: "SJOG agreed rates", value: "Most funds", note: "Medibank, Bupa, HCF, NIB, CBHS and others" },
  ],
  whatIsTitle: "How Medicare and private health work together for bariatric surgery",
  whatIsParagraphs: [
    "Funding weight loss surgery in Australia usually involves two separate systems working side by side: Medicare and your private health insurance. Medicare pays a set rebate toward eligible medical services, including the surgical item numbers commonly used for bariatric procedures, such as 31575 (sleeve gastrectomy), 31572 (Roux-en-Y bypass) and other items in the MBS bariatric surgery family (31569-31581), as well as the anaesthetist, physician and dietitian consultations attached to your care. Medicare does not, however, pay for your hospital stay, theatre fees or accommodation.",
    "That hospital side is where private health insurance comes in. To have your hospital and theatre costs covered, you generally need a gold tier policy, or an equivalent level that specifically includes bariatric or weight loss surgery and lists the relevant item numbers, including 31575 and 31572 among others. Not every gold policy includes bariatric surgery, and not every fund treats it the same way, which is exactly why checking your individual policy matters so much.",
    "A 12-month waiting period applies if you are a new member or you have upgraded your cover to include bariatric surgery. Some funds also require pre-approval before they will confirm cover, and most policies carry an excess or copayment that sits on top of everything else. Because each of these pieces interacts differently for each person, the most reliable way to understand your real position is to have our financial coordinator review it with you.",
  ],
  comparisonNote:
    "Think of it this way: Medicare contributes to the doctors' fees, your private hospital cover handles the hospital and theatre, and the gap, excess or copayment is the part you fund yourself.",
  eligibilityBmi:
    "Cover is generally relevant for patients with a BMI of 35 or above, or 30 or above with related health conditions, who are clinically suitable for surgery. Your fund may have its own criteria in addition to the clinical ones.",
  eligibilityNotes: [
    "Medicare rebates apply to eligible surgical item numbers including 31575 (sleeve gastrectomy), 31572 (Roux-en-Y bypass) and other items in the MBS bariatric surgery family (31569-31581), plus the anaesthetist, physician and dietitian consultations connected to your surgery.",
    "Medicare does not cover hospital theatre fees or accommodation; that is the role of your private hospital cover.",
    "Private hospital cover generally needs to be gold tier or equivalent and must specifically include bariatric surgery item numbers including 31575 (sleeve gastrectomy) and 31572 (Roux-en-Y bypass).",
    "A 12-month waiting period applies to new members and to those who upgrade their policy to include bariatric cover.",
    "Some funds require pre-approval, and most policies carry an excess or copayment in addition to any gap.",
    "St John of God Murdoch and Subiaco have agreed rates with most major funds, including Medibank, Bupa, HCF, NIB and CBHS, which can reduce your out-of-pocket costs.",
  ],
  howItWorksSteps: [
    { title: "Check Your Cover", description: "Call your fund and ask specifically about bariatric surgery item numbers including 31575 and 31572, whether bariatric surgery is included, and your waiting period status. Note any excess or copayment." },
    { title: "GP Referral", description: "Ask your GP for a referral to OSWA. A valid referral allows Medicare to contribute toward eligible specialist consultation and surgical fees." },
    { title: "Consultation", description: "We assess your clinical suitability and talk openly about how Medicare, your fund and any gap will apply to your specific situation." },
    { title: "Financial Coordinator Review", description: "Our financial coordinator helps you navigate item numbers, fund requirements, pre-approval and waiting periods, then puts the figures in writing." },
    { title: "Confirm and Schedule", description: "Once your cover is confirmed, any pre-approval is in place and pre-operative checks are complete, we book your surgery at SJOG Murdoch or Subiaco." },
    { title: "Ongoing Support", description: "Follow-up appointments, dietitian support and aftercare are part of the program; eligible consultations continue to attract Medicare rebates." },
  ],
  benefitsTitle: "Why understanding your cover early makes a real difference",
  benefits: [
    "Knowing what Medicare rebates and what it does not means fewer surprises when the accounts arrive.",
    "Confirming that your policy includes bariatric item numbers including 31575 and 31572 before you commit protects you from finding gaps too late.",
    "Checking your waiting period status early lets you plan timing realistically rather than being caught out at the last moment.",
    "SJOG's agreed rates with most major funds can meaningfully reduce out-of-pocket costs compared with a hospital that has no such arrangement.",
    "Having our financial coordinator translate the item numbers and fund jargon means you make decisions with clear information, not guesswork.",
  ],
  risksTitle: "What to watch out for with Medicare and fund cover",
  risksParagraph:
    "The cover system has a few traps that catch people who assume rather than confirm. Medicare and private health are separate systems, and a gold policy does not automatically include bariatric surgery. We would rather you go in with clear eyes, so we encourage you to confirm every detail with your fund in writing and to ask us anything that is unclear.",
  risksList: [
    "A gold or top tier policy does not always include bariatric surgery; you must confirm the specific item numbers are covered.",
    "The 12-month waiting period applies to new members and upgrades, so timing your cover matters if you have recently joined or changed funds.",
    "Some funds require pre-approval before surgery, and skipping that step can affect what they pay.",
    "Excess and copayment amounts sit on top of any gap and vary between policies, so your total out-of-pocket cost depends on your individual cover.",
    "Medicare rebates are set amounts and do not cover hospital theatre or accommodation, which can be a significant cost without suitable hospital cover.",
  ],
  costParagraph:
    "We do not publish a single fixed figure online because your real cost depends on your procedure, your private health cover, the Medicare rebates that apply and your fund's excess or copayment. Medicare contributes toward eligible item numbers including 31575 (sleeve gastrectomy), 31572 (Roux-en-Y bypass) and other items in the MBS bariatric surgery family (31569-31581), and toward your anaesthetist, physician and dietitian consultations, while your private hospital cover handles the hospital and theatre side. With St John of God's agreed rates across most major funds, many patients reduce their out-of-pocket costs considerably. The clearest way to understand your position is to have our financial coordinator review your cover and give you a written, itemised estimate before you decide.",
  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric & Upper GI Surgeon",
      specialty:
        "A Perth bariatric surgeon for over two decades and senior lecturer at the University of Notre Dame, Dr Chandraratna underwent bariatric surgery himself, which shapes how he supports patients through every step, including the financial side. He operates at SJOG Murdoch and Subiaco.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "An accredited bariatric surgeon performing gastric sleeve, bypass and band procedures at St John of God Murdoch and Subiaco, working alongside our physicians, dietitians and financial coordinator to deliver safe, well-planned care.",
    },
  ],
  outcomesNote:
    "Many patients tell us that decoding their health fund was almost as stressful as the decision to have surgery. Having someone sit with them, read the policy and explain the item numbers in plain language made it feel manageable. Cover, rebates and approvals differ from person to person, so we cannot promise any particular figure or arrangement. What we can promise is honest, plain-language help so you understand your options before you commit.",
  faqs: [
    {
      question: "Does Medicare cover weight loss surgery in Australia?",
      answer:
        "Medicare contributes a set rebate toward eligible medical services, including the surgical item numbers commonly used for bariatric surgery, such as 31575 (sleeve gastrectomy), 31572 (Roux-en-Y bypass) and other items in the MBS bariatric surgery family (31569-31581), and toward your anaesthetist, physician and dietitian consultations. Medicare does not pay for your hospital stay, theatre fees or accommodation, which is why private hospital cover is usually needed alongside it.",
    },
    {
      question: "What private health cover do I need for bariatric surgery?",
      answer:
        "You generally need a gold tier policy, or an equivalent level that specifically includes bariatric or weight loss surgery and lists the relevant item numbers, including 31575 (sleeve gastrectomy) and 31572 (Roux-en-Y bypass) among others. Not every gold policy includes bariatric surgery, so it is important to confirm the specific item numbers are covered rather than assuming your tier includes them.",
    },
    {
      question: "Is there a waiting period for weight loss surgery on private health?",
      answer:
        "Yes. A 12-month waiting period applies if you are a new member or you have upgraded your cover to include bariatric surgery. If you have held appropriate cover for longer than that, you may have already served the waiting period. We recommend confirming your exact status directly with your fund.",
    },
    {
      question: "What should I ask my health fund when I call?",
      answer:
        "Ask whether your policy covers bariatric surgery item numbers including 31575 (sleeve gastrectomy) and 31572 (Roux-en-Y bypass), whether bariatric surgery is included on your level of cover, and what your waiting period status is. Also ask about any required pre-approval and the excess or copayment that applies. Writing down their answers, and the date and reference number of the call, is worth doing.",
    },
    {
      question: "Does OSWA help me understand my cover?",
      answer:
        "Yes. OSWA has a financial coordinator whose role is to help patients navigate Medicare item numbers, fund requirements, pre-approval, waiting periods and gaps. They can review your individual situation and put the figures in writing so you know what to expect before you commit.",
    },
    {
      question: "Does St John of God have agreed rates with my fund?",
      answer:
        "St John of God Murdoch and Subiaco have agreed rates with most major funds, including Medibank, Bupa, HCF, NIB and CBHS, which can reduce your out-of-pocket costs. Arrangements vary by fund and by policy, so our financial coordinator can confirm how it applies to your specific cover.",
    },
    {
      question: "What out-of-pocket costs should I still expect?",
      answer:
        "Even with Medicare rebates and private hospital cover, most patients have some out-of-pocket cost. This can include a gap between the surgeon's or anaesthetist's fee and the combined Medicare and fund rebate, plus your policy excess or copayment. The exact amount depends on your cover, so we provide a written, itemised estimate rather than a single online figure.",
    },
    {
      question: "How much does Medicare rebate for weight loss surgery?",
      answer:
        "Medicare rebates are set by the MBS schedule fee for each item. The surgical item alone (e.g. 31575 for sleeve gastrectomy) attracts a rebate based on that item's schedule fee; combined with rebates on the anaesthetist, assistant surgeon and specialist physician consultation items, the total Medicare contribution can run into the low thousands of dollars. The exact figure depends on your specific item mix and individual circumstances. Our financial coordinator can calculate what applies to your situation before you commit.",
    },
  ],
  conversionHeadline: "Let our financial coordinator check your cover with you",
};

export default function MedicarePrivateHealthCoverPage() {
  return <OswContentPage data={pageData} />;
}
