import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Using Super for Weight Loss Surgery Perth | Obesity Surgery WA Perth",
  description:
    "How to access your super early for weight loss surgery in Perth. The ATO compassionate-release process, what qualifies, timelines and what to budget for.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/super-access-weight-loss-surgery" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "super-access-weight-loss-surgery",
  pageTitle: "Using Super for Weight Loss Surgery",
  keyword: "using super for weight loss surgery perth",
  metaDescription:
    "How to access your super early for weight loss surgery in Perth. The ATO compassionate-release process, what qualifies, timelines and what to budget for.",
  heroHeadline: "Using your superannuation for weight loss surgery in Perth",
  heroSubheadline:
    "If cost is the main thing standing between you and bariatric surgery, you may be able to apply to release some of your superannuation early on compassionate grounds. Here is a clear, honest explanation of how that process works in Perth.",
  stats: [
    { label: "Approval pathway", value: "ATO", note: "Australian Taxation Office assesses early-release applications" },
    { label: "Grounds", value: "Compassionate", note: "Medical treatment is one recognised category" },
    { label: "Typical decision time", value: "14-28 days", note: "After a complete application is lodged" },
    { label: "Tax on release", value: "Applies", note: "Released super is taxed; amounts vary by age" },
  ],
  whatIsTitle: "What does it mean to use super for weight loss surgery?",
  whatIsParagraphs: [
    "Superannuation is normally locked away until you retire or reach your preservation age. However, the Australian Taxation Office (ATO) can approve the early release of a portion of your super on compassionate grounds, and one of those grounds is paying for medical treatment that is not readily available through the public system.",
    "Bariatric surgery, such as a gastric sleeve, gastric bypass or mini gastric bypass, can fall within the medical-treatment category when it is recommended to treat or manage a serious medical condition like severe obesity, type 2 diabetes or sleep apnoea. The ATO does not pre-approve specific procedures; it assesses each application on its own facts.",
    "It is important to be clear: this is not a loan and it is not free money. You are bringing forward money that was meant for your retirement, and the released amount is taxed. For many Perth patients it is still the difference between having surgery this year and waiting, but it is a decision worth thinking through carefully and, ideally, with a financial adviser.",
  ],
  comparisonNote:
    "Early super release is one of several ways to fund surgery. Many patients combine it with private health insurance, a payment plan, or simply pay the out-of-pocket gap directly. We are happy to talk you through every option before you commit.",
  eligibilityBmi:
    "There is no BMI threshold for accessing super itself. Eligibility is decided by the ATO based on your medical and financial circumstances, not your weight.",
  eligibilityNotes: [
    "Your treating doctors must confirm in writing that the surgery is needed to treat a serious medical condition, such as severe obesity and its complications.",
    "Two registered medical practitioners must support the application, and at least one must be a specialist in the relevant field.",
    "You generally need to show that you cannot pay for the treatment without accessing your super; for example, you do not have the savings or capacity to fund the gap another way.",
    "Not all super funds release money the same way; some have their own rules and processing steps even after the ATO approves your application, so check with your fund early.",
  ],
  howItWorksSteps: [
    {
      title: "Get your GP referral and surgical plan",
      description:
        "Start with a referral from your GP to Obesity Surgery WA. At your consultation we confirm whether surgery is clinically appropriate and which procedure suits you, so you have a clear treatment plan and an estimate of costs to attach to your application.",
    },
    {
      title: "Obtain supporting medical reports",
      description:
        "The ATO requires reports from two registered medical practitioners, one of whom is a specialist. Our team can help prepare the documentation that explains why the surgery is needed to treat your condition.",
    },
    {
      title: "Lodge your application with the ATO",
      description:
        "You apply directly through your myGov account linked to the ATO. The online form asks about the treatment, the cost, your medical practitioners, and why you cannot meet the expense another way. Lodging online is usually faster than by paper.",
    },
    {
      title: "Wait for the ATO decision",
      description:
        "The ATO reviews your application and, if approved, issues a determination letter and notifies your super fund of the approved amount. A complete application is typically decided within a few weeks.",
    },
    {
      title: "Your super fund releases the funds",
      description:
        "Once the ATO approves, your super fund processes the payment under its own rules. Tax is withheld at this point. The money is paid to you (or in some cases directly to the provider), and you then settle your surgery costs.",
    },
    {
      title: "Proceed to surgery and ongoing support",
      description:
        "With funding in place, we schedule your pre-operative assessment and surgery at St John of God Murdoch or Subiaco, followed by our Perth-based dietitian and aftercare program to support your long-term results.",
    },
  ],
  benefitsTitle: "Why some Perth patients choose to access super",
  benefits: [
    "It can remove the cost barrier and let you have surgery sooner, rather than waiting years to save the gap payment.",
    "Acting earlier may help address health conditions such as type 2 diabetes, high blood pressure or sleep apnoea, before they progress further.",
    "It uses money that already belongs to you, so there is no interest charge as there would be with a loan or credit.",
    "The application is lodged directly with the ATO through myGov, so you stay in control of the process and the information you provide.",
    "It can be combined with private health insurance or a payment plan to cover the full cost of your procedure and hospital stay.",
  ],
  risksTitle: "What to weigh up before accessing your super",
  risksParagraph:
    "Releasing super early is a genuine financial trade-off, and it is not the right choice for everyone. Because you are taking money out of your retirement savings, that amount no longer grows in your fund over the years ahead, and the released sum is taxed. This is why we strongly recommend speaking with a licensed financial adviser before you apply, so you understand the long-term impact on your retirement.",
  risksList: [
    "Released super is taxed, so the amount you receive will be less than the amount withdrawn from your account.",
    "Withdrawing now reduces your retirement balance and the compounding growth it would have earned over time.",
    "Approval is not automatic. The ATO can decline an application that does not meet the compassionate-release criteria.",
    "Processing times vary, so factor in a few weeks between lodging your application and having funds available.",
  ],
  costParagraph:
    "We do not quote a single figure for surgery, because your out-of-pocket cost depends on the procedure, your private health cover, and your individual circumstances. Once we have assessed you, we provide a written estimate you can use for your ATO application or to compare against your private health rebate, Medicare items and any payment-plan options. The amount of super you may need to release is the gap that remains after those other contributions. Our admin team can walk you through the numbers at your consultation.",
  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "Lead bariatric surgeon at Obesity Surgery WA, lecturer at the University of Notre Dame, and someone who has personally been through bariatric surgery, bringing both clinical expertise and lived understanding to every patient.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "Experienced bariatric surgeon performing sleeve, bypass and revision procedures at St John of God Murdoch and Subiaco, with a focus on safe surgery and clear, supportive patient care.",
    },
  ],
  outcomesNote:
    "Patients who fund their surgery through early super release go through exactly the same clinical care and aftercare as everyone else. The funding method does not change the surgery or the support you receive. Most people who follow our dietitian-led program and lifestyle guidance see meaningful, sustained weight loss, but results genuinely vary from person to person depending on your starting point, your health, the procedure and how closely you stick to the plan. We focus on realistic expectations and long-term support rather than promises.",
  faqs: [
    {
      question: "Is using super for weight loss surgery actually legal in Australia?",
      answer:
        "Yes. The early release of super on compassionate grounds for medical treatment is a legitimate process administered by the ATO under Commonwealth regulations. It is not a loophole. It is a recognised pathway, and applications must meet specific criteria to be approved.",
    },
    {
      question: "How much super can I withdraw for surgery?",
      answer:
        "The ATO approves an amount that reasonably covers the cost of the treatment and related expenses, such as the surgeon's fee, hospital and anaesthetist costs, and travel where relevant. It is based on the quotes and estimates you provide, not a fixed figure, and it cannot exceed what your fund can release. As a guide, if your out-of-pocket gap after Medicare and fund rebates is $6,000, the ATO assesses applications for that specific documented amount.",
    },
    {
      question: "Will I be taxed on the super I release?",
      answer:
        "Super released early on compassionate grounds is generally taxed, and the rate depends on your age and the components of your super. Under preservation age the tax is typically 17-22%; if you are 60 or over, the released amount is usually tax-free. This means the cash you receive may be lower than the gross amount taken from your account, so it is worth confirming the after-tax figure with your fund or a financial adviser.",
    },
    {
      question: "How long does the ATO take to approve an application?",
      answer:
        "A complete online application is usually decided within a few weeks, commonly around 14 to 28 days. Missing documents are the most frequent cause of delay, so having your two medical reports and cost estimate ready before you lodge helps a lot.",
    },
    {
      question: "Do all super funds release money the same way?",
      answer:
        "No. Once the ATO approves, your fund still applies its own rules and processing steps before paying out, and some funds are quicker than others. A few funds also have minimum balance or insurance considerations, so it is best to contact your fund early to understand its specific process and timing.",
    },
    {
      question: "Should I speak to a financial adviser first?",
      answer:
        "We strongly recommend it. Taking money out of super now reduces your retirement savings and the growth they would have earned. A licensed financial adviser can model the long-term impact for your situation so you can make the decision with full information. We are clinicians, not financial advisers, so we will always point you toward independent advice on the money side.",
    },
    {
      question: "Can I use super if I also have private health insurance?",
      answer:
        "Often, yes. Many patients use their private health cover to reduce the hospital and procedure costs, then access a smaller amount of super to cover the remaining gap. We can help you understand what your cover contributes so you only release what you actually need.",
    },
    {
      question: "What happens if my application is declined?",
      answer:
        "If the ATO declines your application, you can ask for the decision to be reviewed, strengthen your supporting documentation, or look at other funding options such as a payment plan or using your private health rebate. Our admin team can talk you through the alternatives so a 'no' on super does not have to mean the end of the road.",
    },
  ],
  conversionHeadline:
    "Want help working out whether super could fund your surgery? Let's map out your costs and options together.",
};

export default function Page() {
  return <OswContentPage data={pageData} />;
}
