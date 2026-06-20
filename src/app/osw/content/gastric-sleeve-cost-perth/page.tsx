import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Gastric Sleeve Cost Perth | Obesity Surgery WA Perth",
  description:
    "What does gastric sleeve surgery cost in Perth? Understand surgeon, hospital, anaesthetist and physician fees, Medicare rebates, private health and payment options.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/gastric-sleeve-cost-perth" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "gastric-sleeve-cost-perth",
  pageTitle: "Gastric Sleeve Cost in Perth",
  keyword: "gastric sleeve cost perth",
  metaDescription:
    "What does gastric sleeve surgery cost in Perth? Understand surgeon, hospital, anaesthetist and physician fees, Medicare rebates, private health and payment options.",
  heroHeadline: "What Does Gastric Sleeve Surgery Actually Cost in Perth?",
  heroSubheadline:
    "Working out the real cost of a gastric sleeve can feel overwhelming when fees come from several places at once. This page explains how the costs are built up, what Medicare and private health cover, and the questions to ask before you commit.",
  stats: [
    { label: "Separate fee types", value: "4+", note: "Surgeon, hospital, anaesthetist, physician" },
    { label: "Medicare item", value: "31575", note: "Surgical rebate applies when you meet MBS eligibility criteria (BMI 40+ or 35+ with comorbidities)" },
    { label: "Private cover", value: "Required", note: "Appropriate hospital cover tier needed" },
    { label: "Written estimate", value: "Provided", note: "Before you decide, with no obligation" },
  ],
  whatIsTitle: "Why is gastric sleeve pricing in Perth hard to pin down?",
  whatIsParagraphs: [
    "There is no single price tag for gastric sleeve surgery. The total cost is made up of several separate fees that are billed by different providers. Each of these can vary depending on your situation, your hospital cover and your individual health needs.",
    "The main components are the surgeon's fee, the anaesthetist's fee, the hospital (facility) fee, and physician or dietitian fees for assessment and follow-up. Because each is billed separately, two patients can pay different amounts even for the same operation. This is normal in private surgery across Australia.",
    "Costs also depend on whether you have private health insurance, what your policy covers, and whether you choose to access part of your superannuation. We give every patient a written, itemised estimate before any decision is made, so there are no surprises later.",
  ],
  comparisonNote:
    "A gastric sleeve and a gastric bypass have different fee structures and Medicare items, so always compare like-for-like estimates rather than headline figures.",
  eligibilityBmi:
    "Gastric sleeve surgery is generally suitable for patients with a BMI of 35+, or BMI 30+ with related health conditions such as type 2 diabetes, sleep apnoea or high blood pressure.",
  eligibilityNotes: [
    "Medicare rebates and a recognised surgical item number generally apply only when you meet defined clinical eligibility, which usually includes a BMI threshold.",
    "Private health funds require an appropriate level of hospital cover that includes bariatric (weight loss) surgery, often a higher tier, and many apply a 12-month waiting period.",
    "Your GP referral and pre-operative assessments confirm whether you meet the criteria before any surgery is scheduled.",
    "Eligibility is a clinical decision made with your surgeon, not simply a matter of being able to pay.",
  ],
  howItWorksSteps: [
    {
      title: "GP Referral",
      description:
        "Your GP refers you to the practice. This referral also supports your Medicare eligibility and lets us check what surgical item numbers may apply to you.",
    },
    {
      title: "Orientation Consultation",
      description:
        "You meet the team, discuss whether a sleeve is right for you, and receive a written, itemised cost estimate covering surgeon, anaesthetist and hospital fees.",
    },
    {
      title: "Pre-operative Assessment",
      description:
        "Physicians and dietitians assess your health. We confirm your private health cover, any waiting periods, and whether super release may be an option for you.",
    },
    {
      title: "Surgery",
      description:
        "The keyhole procedure is performed at St John of God Murdoch or Subiaco. Your surgeon and anaesthetist fees relate to this stage of care.",
    },
    {
      title: "Hospital Recovery",
      description:
        "Most patients stay around two nights. The hospital facility fee covers your room, theatre and nursing care during this admission.",
    },
    {
      title: "Ongoing Support",
      description:
        "Dietitian and physician follow-up is part of safe long-term care. Some of these reviews attract Medicare rebates; we explain what to expect.",
    },
  ],
  benefitsTitle: "What you get for the cost of a gastric sleeve",
  benefits: [
    "A coordinated team including specialist bariatric surgeons, physicians and specialist dietitians, rather than surgery alone.",
    "Keyhole (laparoscopic) surgery at accredited private hospitals, St John of God Murdoch and Subiaco.",
    "A clear, itemised written estimate up front so you can plan and compare with confidence.",
    "Structured pre-operative assessment and long-term follow-up built into your care, not charged as surprise extras.",
    "Clinical averages show patients lose around 60-70% of excess weight in the first one to two years, though results vary between individuals.",
  ],
  risksTitle: "Honest talk about cost, gaps and value",
  risksParagraph:
    "The biggest financial risk is an unexpected out-of-pocket gap. This usually happens when patients do not check their private health cover, are unaware of waiting periods, or compare only the surgeon's fee while forgetting the hospital and anaesthetist. Knowing every fee in advance is the best way to avoid stress later.",
  risksList: [
    "An out-of-pocket gap may remain after Medicare rebates and private health benefits are applied.",
    "Inadequate or recently upgraded hospital cover can mean a waiting period or limited benefit.",
    "Additional fees can apply if complications or extra investigations are needed, which is true of any surgery.",
    "Choosing the cheapest quote without the same inclusions can cost more overall if follow-up care is not included.",
  ],
  costParagraph:
    "For patients with appropriate private hospital cover, out-of-pocket costs after Medicare and fund rebates typically range from $2,000 to $8,000, depending on your specific policy, excess and surgeon fees. For patients who are self-funded or have inadequate cover, the total cost is typically $15,000 to $30,000 or more. We provide a written itemised estimate specific to your situation before you make any decisions. Patients without suitable cover, or who are within a waiting period, may be eligible to apply to access part of their superannuation on compassionate or medical grounds, and some choose third-party payment plans. During your orientation consultation we walk through each fee line by line so you know exactly where you stand.",
  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "Lead bariatric surgeon, Notre Dame lecturer, with personal experience of bariatric surgery that informs his patient-centred approach.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty: "Bariatric surgeon focused on laparoscopic weight loss surgery and long-term patient outcomes.",
    },
  ],
  outcomesNote:
    "Patients commonly lose around 60-70% of their excess weight within the first one to two years following a gastric sleeve, and many see improvement in conditions such as type 2 diabetes, sleep apnoea and high blood pressure. These figures are clinical averages, not promises. Your own result depends on your starting health, your commitment to the dietary and lifestyle changes, and your follow-up. Outcomes vary between individuals, and the long-term value of surgery comes from the ongoing support, not the operation alone.",
  faqs: [
    {
      question: "How much does a gastric sleeve cost in Perth?",
      answer:
        "The total cost of a gastric sleeve in Perth depends on whether you have appropriate private hospital cover. For privately insured patients with a gold-tier or equivalent policy that includes bariatric surgery, out-of-pocket costs after Medicare and fund rebates typically range from $2,000 to $8,000. For self-funded patients without adequate cover, the total cost is typically $15,000 to $30,000 or more. We provide a written itemised estimate for your specific situation at no obligation. MBS item 31575 applies to the surgical component.",
    },
    {
      question: "Why are there so many separate fees?",
      answer:
        "In private surgery, different providers bill independently. Your surgeon, your anaesthetist and the hospital each charge for their part of your care, and physicians or dietitians may bill for assessment and follow-up. We bring these together in one estimate so nothing is hidden.",
    },
    {
      question: "Does Medicare cover gastric sleeve surgery?",
      answer:
        "When you meet the clinical eligibility criteria and have a valid GP referral, a Medicare item number generally applies, which provides a rebate on the surgeon's and anaesthetist's fees. Medicare does not cover the full cost, so a private contribution and an out-of-pocket gap usually remain.",
    },
    {
      question: "Will my private health insurance pay for it?",
      answer:
        "You generally need hospital cover that includes bariatric or weight loss surgery, which is often a higher policy tier, and many funds apply a 12-month waiting period. We help you check your policy and confirm what your fund will contribute before you commit.",
    },
    {
      question: "Can I use my superannuation to pay?",
      answer:
        "Some patients apply to access part of their superannuation early on compassionate or medical grounds to help with surgery costs. This is assessed by the ATO and your super fund, not by us, but we can explain the process and provide the supporting clinical information you may need.",
    },
    {
      question: "Are there payment plans available?",
      answer:
        "Some patients choose third-party medical payment plans to spread the out-of-pocket portion over time. We can point you to the options available; the choice and any interest or fees are between you and that provider.",
    },
    {
      question: "How long will I need off work?",
      answer:
        "Most people take around two weeks off, depending on their job. Desk-based workers often return sooner, while physically demanding roles may need a little longer. Your surgeon gives you tailored advice as part of planning.",
    },
    {
      question: "Will I have loose skin, and can I eat normally afterwards?",
      answer:
        "Some patients do experience loose skin after significant weight loss, which varies between individuals and is something to discuss with your surgeon. After a recovery and reintroduction period guided by your dietitian, most people eat a wide range of healthy foods, just in smaller portions.",
    },
  ],
  conversionHeadline: "Get a clear, itemised cost estimate for your gastric sleeve",
};

export default function Page() {
  return <OswContentPage data={pageData} />;
}
