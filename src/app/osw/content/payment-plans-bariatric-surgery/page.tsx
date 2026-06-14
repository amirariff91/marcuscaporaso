import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Payment Plans for Bariatric Surgery | Obesity Surgery WA Perth",
  description:
    "Explore payment plan and finance options for gastric sleeve and weight loss surgery in Perth, including private health, super and no-gap pathways at OSWA.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/payment-plans-bariatric-surgery" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "payment-plans-bariatric-surgery",
  pageTitle: "Payment Plans for Bariatric Surgery",
  keyword: "gastric sleeve payment plan perth",
  metaDescription:
    "Explore payment plan and finance options for gastric sleeve and weight loss surgery in Perth, including private health, super and no-gap pathways at OSWA.",
  heroHeadline: "Paying for weight loss surgery in Perth: payment plans and finance options",
  heroSubheadline:
    "Worrying about how to afford surgery can be just as stressful as the decision itself. We will walk you through every funding pathway: health fund, finance, superannuation and possible no-gap options, so cost is a clear question, not a closed door.",
  stats: [
    { label: "Health fund cover", value: "Often yes", note: "If you hold appropriate hospital cover that includes bariatric surgery" },
    { label: "Finance options", value: "Available", note: "Through third-party medical finance providers. Terms vary." },
    { label: "No-gap pathways", value: "Sometimes", note: "Depends on your fund and individual circumstances" },
    { label: "Discuss your plan", value: "At consult", note: "We give you a written, itemised estimate before you commit" },
  ],
  whatIsTitle: "What payment options are available for bariatric surgery?",
  whatIsParagraphs: [
    "Most patients at OSWA fund their surgery through a combination of private health insurance and an out-of-pocket gap payment. If you hold hospital cover that includes bariatric or obesity surgery, your fund typically pays a large share of the hospital and theatre costs, and Medicare contributes to eligible surgeon and anaesthetist fees. The amount you pay yourself depends on your specific policy.",
    "For patients without suitable cover, or who face a waiting period, payment plans and medical finance are an alternative. These are arranged through independent third-party finance providers, not OSWA directly. They let you spread the cost over time rather than paying a single lump sum. Terms, interest rates and approval criteria are set by the finance provider, so we cannot promise any particular figure or arrangement.",
    "Some patients also access their superannuation early on compassionate or medical grounds, though this is assessed and approved by the ATO, not by us. Because every situation is different, the most reliable way to understand your real cost is to book a consultation, where our team can give you a written estimate and point you to the funding pathway that fits your circumstances.",
  ],
  comparisonNote:
    "Compared with paying upfront in full, a payment plan spreads the cost over months but usually adds interest or fees set by the finance provider.",
  eligibilityBmi:
    "Funding options are generally relevant for patients with a BMI of 35+, or BMI 30+ with related health conditions, who are clinically suitable for surgery.",
  eligibilityNotes: [
    "Private health cover that includes bariatric surgery is usually the most cost-effective route. Check that your policy lists obesity or weight loss surgery and whether a waiting period applies.",
    "Medical finance is offered by independent providers; approval, interest rates and repayment terms depend on the provider and your personal circumstances.",
    "Early release of superannuation may be possible on medical or compassionate grounds, but is decided by the ATO, not by OSWA.",
    "We provide a clear, itemised written estimate before any surgery so you can plan with confidence and avoid surprises.",
  ],
  howItWorksSteps: [
    { title: "GP Referral", description: "Ask your GP for a referral to OSWA. A valid referral lets Medicare contribute to eligible specialist consultation and surgical fees." },
    { title: "Orientation Consultation", description: "We assess your suitability for surgery and talk openly about costs, your health fund, and which funding pathways may suit you." },
    { title: "Written Estimate", description: "You receive an itemised estimate covering surgeon, anaesthetist, hospital and any expected gap so there are no surprises." },
    { title: "Arrange Funding", description: "You confirm your health fund cover, apply for finance with a third-party provider, or explore superannuation release as needed." },
    { title: "Confirm and Schedule", description: "Once funding is in place and pre-operative checks are complete, we book your surgery date at St John of God Murdoch or Subiaco." },
    { title: "Ongoing Support", description: "Your dietitian and clinical team support you long after surgery. Follow-up care is part of the overall program, not an added surprise." },
  ],
  benefitsTitle: "How payment plans can make surgery more manageable",
  benefits: [
    "Spreading the cost over time can make surgery accessible sooner, rather than waiting years to save a lump sum.",
    "Using existing private hospital cover often reduces out-of-pocket costs significantly compared with self-funding.",
    "A written, itemised estimate up front means you know what you are committing to before you decide.",
    "Combining pathways, for example health fund cover plus finance for the gap, can lower the immediate amount you need to find.",
    "Our team helps you understand each option clearly, so the choice is informed rather than rushed.",
  ],
  risksTitle: "What to be careful about with finance and payment plans",
  risksParagraph:
    "Finance can make surgery more accessible, but it is a financial commitment that deserves the same care as any loan. Payment plans are provided by independent third parties, and their interest and fees mean you may pay more overall than the upfront price. We want you to go in with clear eyes, so we encourage you to read the provider's terms carefully and seek independent financial advice if you are unsure.",
  risksList: [
    "Interest and fees on finance are set by the provider and can increase the total amount you repay.",
    "Approval for finance or early super release is never assured and depends on your personal circumstances.",
    "Health fund rebates vary between policies. Confirm exactly what your cover includes before relying on it.",
    "Estimates are based on your individual case; final costs can change if your clinical needs change.",
  ],
  costParagraph:
    "We do not quote a single fixed price online because every patient's cost is different: it depends on your procedure, your private health cover, Medicare contributions and your individual clinical needs. Many patients use hospital cover that includes bariatric surgery to reduce out-of-pocket costs, and some are eligible for reduced-gap or no-gap arrangements depending on their fund. Where lump-sum payment is not practical, third-party medical finance or early release of superannuation on medical grounds may be options to explore. The clearest way to understand your real cost is to book a consultation, where we provide a written, itemised estimate and explain which pathways apply to you.",
  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "Lead bariatric surgeon, lecturer at the University of Notre Dame, with personal experience of bariatric surgery that informs how he supports patients through every step, including cost and planning.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "Bariatric surgeon at OSWA, working alongside our physicians and dietitians to deliver safe, well-planned weight loss surgery across our Perth hospitals.",
    },
  ],
  outcomesNote:
    "Many of our patients tell us the hardest part was working out whether they could afford surgery at all. Having a clear, written plan made the decision feel possible. Financial outcomes and approvals differ from person to person, so we cannot promise any particular arrangement or repayment figure. What we can promise is honest, plain-language guidance so you understand your options before you commit.",
  faqs: [
    {
      question: "Does OSWA offer payment plans directly?",
      answer:
        "Payment plans for bariatric surgery are available through independent third-party medical finance providers rather than from OSWA directly. We can explain how these work and what to consider, but the terms, interest and approval are decided by the provider. The best place to discuss the right pathway for you is at your consultation.",
    },
    {
      question: "Will my private health insurance cover gastric sleeve surgery?",
      answer:
        "It can, if you hold hospital cover that includes bariatric or weight loss surgery and you have served any applicable waiting period. The exact rebate depends on your policy, so we recommend calling your fund and checking the relevant item numbers. Our team can help you understand what to ask.",
    },
    {
      question: "Can I use my superannuation to pay for surgery?",
      answer:
        "Some patients access their superannuation early on medical or compassionate grounds. This is assessed and approved by the ATO, not by OSWA, and approval is not guaranteed. If you are considering this, we suggest seeking independent financial advice early.",
    },
    {
      question: "Are no-gap or reduced-gap options available?",
      answer:
        "In some cases, depending on your health fund and individual circumstances, reduced-gap or no-gap arrangements may apply. This varies between funds and patients, so we cannot promise it will apply to you. We will tell you honestly what your estimate looks like at consultation.",
    },
    {
      question: "How much does gastric sleeve surgery cost in Perth?",
      answer:
        "Costs vary based on your procedure, health cover and clinical needs, so we provide a written, itemised estimate rather than a single online figure. Many patients reduce out-of-pocket costs through private hospital cover. You can read more on our cost pages or ask us at your consultation.",
    },
    {
      question: "What if I do not have private health insurance?",
      answer:
        "You still have options. Some patients take out hospital cover and serve the waiting period, while others use third-party finance or explore early super release. We will walk you through each pathway so you can choose what suits your situation.",
    },
    {
      question: "Will I have ongoing costs after surgery?",
      answer:
        "Yes, surgery is the start of a long-term program. You will need follow-up appointments, dietitian support and vitamin supplements, and your estimate accounts for the included follow-up care. We are upfront about this so you can budget realistically.",
    },
    {
      question: "How long will I need off work, and does that affect my budget?",
      answer:
        "Most people take around two to four weeks off after gastric sleeve surgery, though this varies with your job and recovery. It is worth factoring lost income into your planning. We are happy to discuss realistic timeframes during your consultation.",
    },
  ],
  conversionHeadline: "Let's work out a funding plan that fits your situation",
};

export default function Page() {
  return <OswContentPage data={pageData} />;
}
