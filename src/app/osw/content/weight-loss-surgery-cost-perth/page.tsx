import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Weight Loss Surgery Cost Perth | Obesity Surgery WA Perth",
  description: "Weight loss surgery costs in Perth explained clearly — surgeon fees, hospital fees, private health insurance, Medicare rebates, super access and payment options.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/weight-loss-surgery-cost-perth" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "weight-loss-surgery-cost-perth",
  pageTitle: "Weight Loss Surgery Cost Perth",
  keyword: "weight loss surgery perth cost",
  metaDescription:
    "Weight loss surgery costs in Perth explained clearly — surgeon fees, hospital fees, private health insurance, Medicare rebates, super access and payment options.",

  heroHeadline: "What weight loss surgery actually costs in Perth",
  heroSubheadline:
    "Cost is one of the first things people want to know, and it is one of the hardest things to get a straight answer on. This page lays out the real numbers, what shapes them, and how Medicare, private health and super fit in. When you are ready, we will give you a written estimate specific to you, with no surprises.",

  stats: [
    { label: "Gastric sleeve", value: "$12k–$20k", note: "Approximate out of pocket; varies with your insurance cover" },
    { label: "Gastric bypass", value: "$15k–$25k", note: "Approximate out of pocket; varies with your insurance cover" },
    { label: "Insurance wait", value: "12 months", note: "Typical waiting period for obesity surgery cover with most funds" },
    { label: "Your estimate", value: "Written", note: "A personalised quote before you commit to anything" },
  ],

  whatIsTitle: "How weight loss surgery costs are built",
  whatIsParagraphs: [
    "There is no single sticker price for weight loss surgery, and anyone who quotes you one figure without knowing your situation is guessing. The total you pay is made up of several separate fees, and how much of each is covered depends on your private health insurance, your Medicare entitlement and the procedure you and your surgeon decide on.",
    "The main components are the surgeon's fee, the anaesthetist's fee, the assistant surgeon's fee where applicable, and the hospital fee. On top of those, there can be costs for the dietitian, follow up appointments and any tests required before surgery. Each of these is billed separately, which is part of why the headline number can feel confusing.",
    "As a rough guide, a gastric sleeve in Perth typically lands somewhere around $12,000 to $20,000 out of pocket, and a gastric bypass around $15,000 to $25,000, depending heavily on the level of private health cover you hold. Gastric banding generally sits at the lower end. These are approximate ranges to help you plan, not quotes. The figure that matters is the personalised estimate we prepare for you.",
    "The single biggest factor in what you actually pay is whether you have appropriate private health insurance and whether you have served the waiting period. With the right cover, the hospital fee is largely taken care of and your out of pocket drops considerably. Without it, the hospital component becomes a significant cost you carry yourself.",
  ],
  comparisonNote:
    "A note on language: every range on this page uses approximately or around on purpose. Costs move with the procedure, your surgeon's assessment, your insurer's policy and the hospital. We do not ask you to make a decision on a ballpark. We give you a written estimate first.",

  eligibilityBmi:
    "Medicare rebates for bariatric surgery generally apply where surgery is clinically indicated, which usually means a BMI of 35 or above, or 30 and above with an obesity related health condition. Your eligibility for funding is assessed alongside your clinical eligibility.",
  eligibilityNotes: [
    "Private health insurance is the main path most patients use to fund surgery. You generally need gold tier hospital cover, or a top level of cover that explicitly includes the obesity surgery item numbers.",
    "The relevant Medicare item numbers for bariatric procedures include 31575 (sleeve) and 31572 (bypass). Check that your hospital policy covers these specific numbers, not just a general weight management category.",
    "Most funds apply a 12 month waiting period for obesity surgery as a pre existing condition. If you do not yet have cover, planning around this waiting period is often the single most cost effective decision you can make.",
    "Medicare provides a rebate on the surgical and consultation fees for eligible patients, which reduces the surgeon and anaesthetist out of pocket. Medicare does not cover the hospital admission for elective bariatric surgery.",
    "Super may be accessible on compassionate grounds where obesity is causing a serious medical condition, assessed case by case by the regulator.",
    "If cost is the barrier rather than eligibility, talk to us early. There are usually more options than people expect once they sit down with the numbers.",
  ],

  howItWorksSteps: [
    {
      title: "Initial consultation and clinical assessment",
      description:
        "Your surgeon assesses whether surgery is appropriate and which procedure suits you. The procedure recommended shapes the cost, so this comes first. The consultation itself attracts a Medicare rebate for eligible patients.",
    },
    {
      title: "We check your private health cover",
      description:
        "Our team helps you confirm whether your policy covers the relevant item numbers (31575, 31572) and whether you have served the 12 month waiting period. This is where the largest part of the cost question is answered.",
    },
    {
      title: "You receive a written, itemised estimate",
      description:
        "Before you commit to anything, we give you a personalised estimate that lists the surgeon, anaesthetist, assistant and hospital fees, what your insurer is expected to cover, and your likely out of pocket. No surprises is the standard we hold ourselves to.",
    },
    {
      title: "We discuss funding options",
      description:
        "If there is a gap, we talk through how Medicare rebates, early access to super on compassionate grounds, and payment plans offered by some providers might apply to your situation.",
    },
    {
      title: "You decide with full visibility",
      description:
        "You only proceed once you understand every number on the page. Surgery is a big decision, financially and personally, and you should never feel rushed or kept in the dark about the cost.",
    },
  ],

  benefitsTitle: "What a clear cost estimate gives you",
  benefits: [
    "A written breakdown of every fee, so you know exactly what each line is for rather than facing one intimidating total.",
    "Clarity on what your private health fund is expected to cover, checked against your specific policy and item numbers.",
    "An understanding of your Medicare rebate on surgical and consultation fees, and where it does and does not apply.",
    "Honest guidance on whether waiting to serve an insurance waiting period could save you a substantial amount.",
    "Information on super access on compassionate grounds and payment plans, so you can weigh every funding route.",
    "The confidence to make a decision on your own terms, without pressure and without hidden costs appearing later.",
  ],

  risksTitle: "Cost factors and common pitfalls to watch for",
  risksParagraph:
    "Most cost surprises in bariatric surgery come from gaps in understanding rather than from the surgery itself. Knowing these in advance helps you avoid them. We raise them openly because the alternative is an unwelcome bill after the fact, and that is not how we operate.",
  risksList: [
    "Assuming all private health policies cover obesity surgery. Many do not, and some cover the consultation but not the hospital item numbers. Always check 31575 (sleeve) and 31572 (bypass) specifically.",
    "Overlooking the 12 month waiting period. Booking surgery before the waiting period is served can mean the hospital fee falls entirely on you.",
    "Forgetting that Medicare does not cover the hospital admission. The Medicare rebate applies to surgical and consultation fees, not the hospital stay.",
    "Not budgeting for the separate anaesthetist and assistant surgeon fees, which are billed independently of the surgeon's fee.",
    "Assuming super is automatically available. Early release on compassionate grounds is assessed individually and is not guaranteed.",
    "Treating a verbal ballpark as a quote. The only figure to plan around is your written, itemised estimate.",
  ],

  costParagraph:
    "The honest summary is this: with appropriate private health cover and the waiting period served, your out of pocket for a gastric sleeve is typically around $12,000 to $20,000, and a gastric bypass around $15,000 to $25,000, with banding generally lower. Without suitable cover, the hospital fee adds a significant amount on top. Medicare rebates reduce the surgical and consultation portion for eligible patients but do not cover the hospital admission. Some providers offer payment plans, and super may be accessible on compassionate grounds where obesity is causing a serious medical condition. None of this needs to be worked out in your head. Our team prepares a written estimate specific to you so you can see the real numbers before deciding anything.",

  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric & Upper GI Surgeon",
      specialty:
        "A Perth bariatric surgeon for over two decades and a Fellow of the Royal Australasian College of Surgeons, Dr Chandraratna underwent bariatric surgery himself and brings that personal understanding to every consultation. He is a senior lecturer at Notre Dame University and operates at St John of God Murdoch and Subiaco.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "An accredited bariatric surgeon performing gastric sleeve, bypass and band procedures at St John of God Murdoch and Subiaco. Dr Watson takes the time to explain costs and options clearly so patients understand exactly what they are committing to.",
    },
  ],

  outcomesNote:
    "Patients consistently tell us that the part they valued most was knowing the full cost up front. When the surgeon fee, anaesthetist fee, hospital fee and insurance rebates are all laid out on one page before any decision is made, the financial stress drops and people can focus on their health. Weight loss results themselves vary between individuals and depend on the procedure, your health factors and your commitment to the recommended dietary and lifestyle changes. What we can commit to is transparency on every dollar.",

  faqs: [
    {
      question: "How much does weight loss surgery cost in Perth?",
      answer:
        "As an approximate guide, a gastric sleeve typically costs around $12,000 to $20,000 out of pocket and a gastric bypass around $15,000 to $25,000, with gastric banding generally at the lower end. The actual figure depends heavily on your level of private health cover, the procedure chosen and your Medicare eligibility. These ranges are for planning only; we prepare a written, itemised estimate specific to you before you make any decision.",
    },
    {
      question: "What does private health insurance cover, and what waiting period applies?",
      answer:
        "To have the hospital component of bariatric surgery covered, you generally need gold tier hospital cover or a top level policy that explicitly includes the obesity surgery item numbers, commonly 31575 (sleeve) and 31572 (bypass). Most funds apply a 12 month waiting period for obesity surgery as a pre existing condition. We strongly recommend checking your policy covers those specific item numbers, not just a general weight management category, and confirming you have served the waiting period before booking.",
    },
    {
      question: "Does Medicare cover weight loss surgery?",
      answer:
        "Medicare provides a rebate on the surgical and consultation fees for eligible patients, which reduces the surgeon and anaesthetist out of pocket. Importantly, Medicare does not cover the hospital admission for elective bariatric surgery. That hospital fee is either covered by private health insurance or paid out of pocket. Eligibility for the Medicare rebate generally aligns with clinical indication, usually a BMI of 35 and above, or 30 and above with an obesity related health condition.",
    },
    {
      question: "Can I use my superannuation to pay for surgery?",
      answer:
        "In some cases, yes. Early release of super on compassionate grounds may be available where obesity is causing a serious medical condition, such as significant joint disease, sleep apnoea or diabetes related complications. Applications are assessed individually by the regulator and are not guaranteed. We can talk you through how this route works and what evidence is typically required, so you can decide whether it is worth pursuing alongside your other funding options.",
    },
    {
      question: "Are payment plans available?",
      answer:
        "Some providers offer payment plans that spread the out of pocket cost over time, which can make surgery more manageable if there is a gap between your insurance cover and the total fee. The availability and terms vary, so the best step is to discuss your situation with our team. We will set out the full cost first, then walk through which funding routes, including payment plans, fit your circumstances.",
    },
    {
      question: "Why are there several separate fees rather than one price?",
      answer:
        "Bariatric surgery involves a surgeon, an anaesthetist, often an assistant surgeon, and a hospital, and each bills separately. There can also be costs for the dietitian, pre operative tests and follow up appointments. This is standard across surgical care, but it is why a single headline number can be misleading. Our written estimate lists every component so you can see precisely what each fee is for and what your insurer is expected to cover.",
    },
    {
      question: "How do I get an estimate specific to my situation?",
      answer:
        "Book a consultation with us. After your surgeon assesses which procedure is appropriate, our team checks your private health cover and Medicare eligibility, then prepares a written, itemised estimate showing the surgeon, anaesthetist, assistant and hospital fees, the expected insurer contribution and your likely out of pocket. You will have the full picture before you commit to anything. No surprises is the standard we hold ourselves to.",
    },
  ],

  conversionHeadline:
    "Get a written cost estimate specific to you, before you decide anything.",
};

export default function WeightLossSurgeryCostPerthPage() {
  return <OswContentPage data={pageData} />;
}
