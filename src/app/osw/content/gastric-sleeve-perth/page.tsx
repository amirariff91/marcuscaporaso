import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Gastric Sleeve Perth | Obesity Surgery WA Perth",
  description:
    "Gastric sleeve surgery in Perth at Obesity Surgery WA, led by Dr Harsha Chandraratna FRACS. Eligibility, costs, recovery and long-term outcomes explained.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/gastric-sleeve-perth" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "gastric-sleeve-perth",
  pageTitle: "Gastric Sleeve Perth",
  keyword: "gastric sleeve perth",
  metaDescription:
    "Gastric sleeve surgery in Perth at Obesity Surgery WA, led by Dr Harsha Chandraratna FRACS. Eligibility, costs, recovery and long-term outcomes explained.",

  heroHeadline: "Gastric sleeve surgery in Perth",
  heroSubheadline:
    "If you have spent years trying to lose weight and it keeps coming back, you are not lazy and you have not failed. The gastric sleeve is the most commonly performed weight loss procedure in Australia, and our Perth team will walk you through whether it is the right fit for your body and your goals.",

  stats: [
    {
      label: "Excess weight loss",
      value: "60-70%",
      note: "Average over the first 12-18 months. Individual results vary.",
    },
    {
      label: "Procedure time",
      value: "45-60 min",
      note: "Performed laparoscopically (keyhole).",
    },
    {
      label: "Hospital stay",
      value: "2 nights",
      note: "At SJOG Murdoch or Subiaco.",
    },
    {
      label: "Back to desk work",
      value: "~2 weeks",
      note: "4-6 weeks for physical labour.",
    },
  ],

  whatIsTitle: "What is a gastric sleeve?",
  whatIsParagraphs: [
    "A gastric sleeve, sometimes called a sleeve gastrectomy, is a procedure where roughly 75 to 80 percent of the stomach is removed. What remains is a narrow, banana-shaped tube, or sleeve, that holds far less food than your stomach does now.",
    "The change is not only about size. The part of the stomach that is removed produces most of your body's ghrelin, the hormone that drives hunger. After surgery many patients notice that the constant background hunger quietens down, which makes the smaller portions feel manageable rather than like a daily battle of willpower.",
    "It is a permanent change to your anatomy, and we want you to understand that clearly before you decide. The sleeve does not reroute your intestines the way a gastric bypass does, so your food still travels through your digestive system in the normal order. For many people this is part of the appeal.",
  ],
  comparisonNote:
    "How it compares to a bypass: a gastric bypass reroutes part of the small intestine to reduce how many calories your body absorbs. A sleeve does not reroute anything; it works through reduced stomach volume and lower hunger hormones. Neither is universally better. The right choice depends on your weight, your health conditions, your reflux history and what you and your surgeon decide together.",

  eligibilityBmi:
    "Generally suitable for adults with a BMI of 35 or above, or a BMI of 30 to 35 with weight-related health conditions such as type 2 diabetes, sleep apnoea or high blood pressure.",
  eligibilityNotes: [
    "BMI is only a starting point. Your surgeon assesses your whole health picture, not just a number on a chart.",
    "You have tried to lose weight through diet and lifestyle changes without lasting success. This is the experience of most people who come to us, and it is expected, not a mark against you.",
    "You are prepared to commit to long-term changes in how you eat and to ongoing follow-up appointments. The surgery is a tool, not a one-off fix.",
    "You do not have untreated conditions that would make surgery unsafe. Some conditions need to be managed first rather than ruling surgery out entirely.",
    "If you are unsure whether you qualify, the honest answer is that the only way to know is an assessment. Our eligibility check is a simple place to begin.",
  ],

  howItWorksSteps: [
    {
      title: "Initial consultation and assessment",
      description:
        "You meet your surgeon, talk through your medical history and your goals, and get an honest view of whether the sleeve suits you. This is also your chance to ask anything, including the questions that feel awkward to ask.",
    },
    {
      title: "Pre-surgery preparation",
      description:
        "You may be asked to follow a specific diet in the weeks before surgery to shrink the liver and make the procedure safer. Our team supports you through this rather than handing you a sheet and leaving you to it.",
    },
    {
      title: "The procedure",
      description:
        "Surgery is performed under general anaesthetic using keyhole (laparoscopic) technique, usually taking 45 to 60 minutes. The surgeon removes around 75 to 80 percent of the stomach and seals the new sleeve with a staple line.",
    },
    {
      title: "Hospital recovery",
      description:
        "Most patients stay around two nights at St John of God Murdoch or Subiaco. You start on fluids and progress gradually under guidance from the nursing and dietetic team.",
    },
    {
      title: "Returning to daily life",
      description:
        "Many people return to desk-based work after about two weeks. If your job involves physical labour or heavy lifting, expect closer to four to six weeks. Your surgeon gives you advice tailored to your situation.",
    },
    {
      title: "Long-term follow-up",
      description:
        "You move through staged eating, from fluids to soft foods to regular textures, with dietitian support. Ongoing reviews and blood tests help protect your results and your nutrition for years to come.",
    },
  ],

  benefitsTitle: "What the gastric sleeve can offer",
  benefits: [
    "Significant, sustained weight loss for most patients, with an average of around 60 to 70 percent of excess weight lost over the first 12 to 18 months. Individual results vary.",
    "Reduced appetite, because the procedure lowers production of the hunger hormone ghrelin, so smaller portions feel more satisfying.",
    "Improvement in many weight-related conditions, including type 2 diabetes, high blood pressure, sleep apnoea and joint pain. Outcomes differ between individuals.",
    "No rerouting of the intestines, which means food passes through your digestive tract in its normal order and there is no malabsorption of the kind seen with a bypass.",
    "A keyhole approach, which generally means smaller scars, less post-operative pain and a shorter hospital stay than open surgery.",
    "A single procedure with no implanted device to adjust or maintain, unlike a gastric band.",
  ],

  risksTitle: "Risks and what to expect honestly",
  risksParagraph:
    "The gastric sleeve is a well-established and generally safe procedure, but it is still major surgery and it carries real risks. We would rather you hear them plainly from us now than be surprised later. Your surgeon will go through each of these in the context of your own health before you make any decision.",
  risksList: [
    "Staple line leak, which occurs in roughly 1 to 3 percent of cases. It is the most serious early complication and may require further treatment, so it is monitored closely.",
    "Reflux or heartburn, which can be new or worsened after a sleeve. For some patients it settles; for others it is persistent and occasionally influences the choice of procedure.",
    "Nutritional deficiencies over time, particularly vitamin B12, iron and vitamin D. Lifelong supplements and regular blood tests are part of staying well.",
    "Hair thinning in the months after surgery, usually linked to rapid weight loss and nutrition. It is typically temporary and improves as your intake stabilises.",
    "Weight regain, which can happen if eating habits drift and follow-up lapses. The sleeve is a powerful tool, but it works best alongside ongoing support.",
    "General surgical risks including bleeding, infection, blood clots and reactions to anaesthetic, as with any operation.",
  ],

  costParagraph:
    "The total cost of a gastric sleeve in Perth depends on your private health cover, your surgeon's and anaesthetist's fees, hospital charges and any out-of-pocket gap. We believe in being upfront about money, because uncertainty about cost is one of the biggest sources of stress for people considering surgery. The gastric sleeve is listed under Medicare item number 31575, which attracts a Medicare rebate when you meet the eligibility criteria. Our cost guide breaks down the components and the funding options available, including private health insurance and early access to superannuation in eligible cases.",

  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric & Upper GI Surgeon",
      specialty:
        "A Perth bariatric surgeon for over two decades and a Fellow of the Royal Australasian College of Surgeons. Dr Chandraratna underwent bariatric surgery himself, so he understands the experience from both sides of the consulting room. He is a senior lecturer at Notre Dame University and operates at St John of God Murdoch and Subiaco.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "An accredited bariatric surgeon performing gastric sleeve, bypass and band procedures at St John of God Murdoch and Subiaco. Dr Watson works alongside the wider team to support patients through assessment, surgery and long-term follow-up.",
    },
  ],

  outcomesNote:
    "The gastric sleeve commonly leads to substantial weight loss over the first 12 to 18 months. Published clinical data shows many patients also see improvements in conditions such as type 2 diabetes, sleep apnoea and high blood pressure, alongside everyday gains in energy and mobility. These outcomes are most likely in people who stay engaged with their follow-up and nutrition. Results are individual and cannot be guaranteed.",

  faqs: [
    {
      question: "Is the gastric sleeve permanent, and can it be reversed?",
      answer:
        "Yes, the gastric sleeve is a permanent procedure. The portion of stomach that is removed cannot be put back, so it is not reversible in the way a gastric band can be removed. This is exactly why we spend time at consultation making sure it is the right decision for you before you commit. In some cases a sleeve can later be converted to another procedure, such as a bypass, if there is a clinical reason, but that is a separate operation and not a reversal.",
    },
    {
      question: "How much weight will I actually lose?",
      answer:
        "On average, patients lose around 60 to 70 percent of their excess weight over the first 12 to 18 months, though this varies considerably from person to person. Your starting weight, your health, how closely you follow the eating plan and your activity all influence the result. We cannot promise a specific number, and we would be wary of anyone who does. What we can do is give you a realistic, honest picture during your assessment.",
    },
    {
      question: "Will I have to take vitamins for the rest of my life?",
      answer:
        "Most likely, yes. Because the sleeve reduces how much you eat, getting enough of certain nutrients from food alone becomes difficult. Vitamin B12, iron and vitamin D are the common ones to watch. Daily supplements and regular blood tests are a normal part of life after a sleeve, and they are a small, manageable commitment that protects your long-term health.",
    },
    {
      question: "How is a gastric sleeve different from a gastric bypass?",
      answer:
        "A sleeve removes most of the stomach to create a smaller tube and reduce hunger hormones, but it leaves your digestive route unchanged. A bypass keeps more of the stomach but reroutes part of the small intestine so your body absorbs fewer calories. The sleeve is simpler and avoids malabsorption, while a bypass is sometimes preferred for severe reflux or certain metabolic conditions. There is no single right answer; your surgeon will help you weigh the trade-offs for your situation.",
    },
    {
      question: "What does recovery actually look like week to week?",
      answer:
        "Most people stay in hospital for around two nights. You will be on fluids at first, moving to pureed and then soft foods over the following weeks under dietitian guidance. Many return to desk work after about two weeks, while physical or manual jobs usually need four to six weeks. It is normal to feel tired in the early weeks as your body adjusts, and our team checks in with you throughout rather than leaving you to figure it out alone.",
    },
    {
      question: "I get heartburn already. Is the sleeve still right for me?",
      answer:
        "It is an important question to raise, because a sleeve can sometimes worsen reflux or heartburn. For some patients this is mild and settles, for others it persists. If you already have significant reflux, your surgeon may discuss whether a bypass would suit you better, since it tends to be gentler on reflux. This is one of the key things we assess before recommending a procedure, so please mention it openly at your consultation.",
    },
    {
      question: "Does Medicare cover gastric sleeve surgery?",
      answer:
        "Yes, the gastric sleeve is listed under Medicare item number 31575. Medicare pays a set rebate toward the surgeon's, anaesthetist's and certain physician fees. It does not cover the hospital and theatre component, which is funded through your private health cover. You generally need a gold-tier or equivalent private hospital policy that specifically includes bariatric surgery.",
    },
    {
      question: "Do I need a GP referral to be seen?",
      answer:
        "A GP referral helps us understand your medical history and is usually needed to access Medicare rebates and private health benefits, so we do recommend one. If you do not yet have a referral, that is fine; you can still reach out to us and we will explain the steps. We also have dedicated information for GPs and health professionals who are referring a patient.",
    },
  ],

  conversionHeadline:
    "You have carried this long enough. Let's talk about whether a gastric sleeve is the right next step for you.",
};

export default function GastricSleevePerthPage() {
  return <OswContentPage data={pageData} />;
}
