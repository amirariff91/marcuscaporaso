import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Weight Loss Surgery Perth | Obesity Surgery WA Perth",
  description: "Weight loss surgery in Perth at Obesity Surgery WA. Gastric sleeve, bypass, banding and medical management. Understand your eligibility, costs and what to expect from our specialist bariatric team.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/weight-loss-surgery-perth" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "weight-loss-surgery-perth",
  pageTitle: "Weight Loss Surgery Perth",
  keyword: "weight loss surgery perth",
  metaDescription:
    "Weight loss surgery in Perth at Obesity Surgery WA. Gastric sleeve, bypass, banding and medical management. Understand your eligibility, costs and what to expect from our specialist bariatric team.",

  heroHeadline: "Weight loss surgery in Perth, and everything that sits before it.",
  heroSubheadline:
    "If you have spent years trying to lose weight and keep it off, you are not the problem, and you are not alone. Obesity Surgery WA is a Perth team of surgeons, physicians and dietitians who help you find the right pathway, whether that starts with medical management or with surgery. We meet you where you are.",

  stats: [
    { label: "Dietitians on the team", value: "APD", note: "Accredited Practising Dietitians; ongoing support is part of the plan, not an afterthought" },
    { label: "Perth clinics", value: "2", note: "Booragoon and Mandurah" },
    { label: "Decades of experience", value: "20+", note: "Bariatric surgery in Perth" },
    { label: "Starting BMI", value: "27+", note: "May be suitable for the medical team" },
  ],

  whatIsTitle: "What we mean by weight loss surgery, and why it is only part of the picture",
  whatIsParagraphs: [
    "Weight loss surgery, also called bariatric surgery, is a group of procedures that change the size or function of your stomach and digestive system to help you eat less and feel full sooner. The most common procedures we perform in Perth are the gastric sleeve and the gastric bypass, with the adjustable gastric band still an option for some people. These are well established operations with a long track record in Australia.",
    "But surgery is not the only road, and for many people it is not the first one. Obesity is a medical condition, not a failure of willpower. That framing matters, because it changes what good treatment looks like. The right answer for you might be a medication programme, a structured very low calorie diet, regular work with a dietitian, an endoscopic option, or surgery. Often it is a combination, in a sequence that suits your life and your health.",
    "This is why Obesity Surgery WA is not just a group of surgeons. Our team includes physicians who manage the medical side of weight, and specialist dietitians whose support is a key part of why people succeed long term. Whoever you see first, you are stepping into a team that can move you along the spectrum of care as your needs change.",
    "Our aim on this page is simple. We want to help you understand the full range of options so you can make an informed decision with us, rather than feeling pushed toward any single one.",
  ],
  comparisonNote:
    "A quick way to think about the spectrum: medical management (such as GLP-1 medication, a very low calorie diet and dietitian support) sits at one end, and surgical procedures (gastric sleeve, gastric bypass, gastric band) sit at the other. Many people move between them over time. There is no single correct starting point, only the one that fits you.",

  eligibilityBmi:
    "You do not need a very high BMI to start a conversation. A BMI of 27 or above, particularly with a weight-related health condition, may make you suitable to see our medical team. Higher BMI ranges are typically where surgical options are discussed. We will help you work out where you sit.",
  eligibilityNotes: [
    "If your BMI is around 27 or higher and you have a condition such as type 2 diabetes, high blood pressure or sleep apnoea, our medical team can review non-surgical options with you.",
    "If your BMI is higher and previous attempts at weight loss have not held, surgery may be worth discussing alongside medical management.",
    "You should be ready to engage with ongoing support, including dietitian appointments, as part of any pathway.",
    "Age, general health, previous surgery and current medications are all considered during your assessment.",
    "If you are unsure whether you qualify for anything at all, that uncertainty is exactly what an initial consultation is for. We would rather you ask than assume the door is closed.",
  ],

  howItWorksSteps: [
    {
      title: "An honest first consultation",
      description:
        "We listen to your history, your previous attempts, your health and what you actually want. There is no judgement here. This conversation shapes everything that follows.",
    },
    {
      title: "Assessment by the right team member",
      description:
        "Depending on your situation, you may see a physician, a surgeon, or a dietitian first. We match you to the part of the team that fits where you are starting from.",
    },
    {
      title: "A pathway proposed, not prescribed",
      description:
        "We lay out the realistic options, from medical management through to surgery, and explain the likely benefits and trade-offs of each. You decide with us.",
    },
    {
      title: "Treatment, with support built in",
      description:
        "Whether your plan involves medication, a very low calorie diet, an endoscopic option or an operation, our dietitians and clinical team stay involved throughout.",
    },
    {
      title: "Long-term follow-up",
      description:
        "Weight management is ongoing. We review your progress, adjust the plan as your needs change, and help you sustain results over time.",
    },
  ],

  benefitsTitle: "Why a team-based approach tends to work",
  benefits: [
    "You are assessed across the full spectrum of care, so you are not limited to a single treatment because it is the only one on offer.",
    "Dedicated dietitians mean nutritional support is consistent and central, which is a major factor in lasting change rather than short-term loss.",
    "Physicians on the team can manage related conditions such as type 2 diabetes and high blood pressure alongside your weight.",
    "If you start with medical management and later decide surgery is right, the transition happens within the same team that already knows your history.",
    "Both Perth clinics, Booragoon and Mandurah, keep your appointments and aftercare close to home.",
    "Many people experience improvements in weight-related conditions and day-to-day quality of life, though individual results vary and no specific outcome can be promised.",
  ],

  risksTitle: "Being honest about the trade-offs",
  risksParagraph:
    "Every option on the spectrum carries its own considerations, and we will not pretend otherwise. Medications can have side effects and may not suit everyone. Very low calorie diets need medical supervision. Surgery is a significant step with real risks and a recovery period. Choosing the right pathway means weighing these against the risks of leaving obesity untreated, which are also serious. Your clinician will go through your individual situation in detail before you commit to anything.",
  risksList: [
    "Weight loss medications such as GLP-1 agonists can cause nausea, digestive symptoms and other side effects, and are not suitable for everyone.",
    "Very low calorie diets require supervision and are not designed as a permanent way of eating.",
    "Surgical procedures carry risks including bleeding, infection, leaks, blood clots and reactions to anaesthetic.",
    "After surgery, lifelong changes to eating and, in some cases, vitamin supplementation are needed.",
    "No pathway works without ongoing effort, and weight regain is possible if the plan is not maintained.",
    "The best option for someone else may not be the best option for you, which is why an individual assessment matters.",
  ],

  costParagraph:
    "Cost depends entirely on which pathway you and your team choose. Medical management and dietitian support are very different in cost to surgery, and within surgery the procedure type matters too. Private health cover, Medicare rebates and, in some cases, early access to superannuation can all play a part. We would rather give you clear figures for your specific situation than a vague range, so the best next step is to look at our cost guides and then talk through your options with us.",

  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric & Upper GI Surgeon",
      specialty:
        "A Perth bariatric surgeon for over two decades and a Fellow of the Royal Australasian College of Surgeons. Dr Chandraratna underwent bariatric surgery himself, giving him a personal understanding of the experience. He is a senior lecturer at Notre Dame University and operates at St John of God Murdoch and Subiaco.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "An accredited bariatric surgeon performing gastric sleeve, bypass and band procedures at St John of God Murdoch and Subiaco. Dr Watson is a Fellow of the Royal Australasian College of Surgeons.",
    },
  ],

  outcomesNote:
    "Patients who engage with the full pathway, including dietitian support and follow-up, often see meaningful and sustained weight loss along with improvements in conditions such as type 2 diabetes, sleep apnoea and high blood pressure. The people who do best are usually those who treat their chosen treatment as the start of a longer journey rather than a one-off fix. What this looks like for you will depend on your starting point, your health and how the plan suits your life.",

  faqs: [
    {
      question: "I am not sure I want surgery. Can I still come and see you?",
      answer:
        "Yes, and many people do exactly that. A large part of what we do is help people who are unsure where to start. If your BMI is around 27 or above, our medical team can talk through non-surgical options such as medication and dietitian-supported plans. You are not committing to surgery by booking a consultation. You are simply finding out what your options are.",
    },
    {
      question: "What is the difference between medical management and surgery?",
      answer:
        "Medical management uses tools such as GLP-1 medications, a structured very low calorie diet and ongoing dietitian support to help you lose weight without an operation. Surgery physically changes your stomach or digestive system to help you eat less and feel full sooner. Medical management can be a complete pathway on its own, a step before surgery, or part of long-term care after surgery. We help you work out which combination suits you.",
    },
    {
      question: "Do I really need to see a dietitian, or can I just have the procedure?",
      answer:
        "Dietitian support is one of the strongest predictors of lasting results, which is why we have dedicated dietitians on the team rather than treating it as optional. Whatever pathway you choose, the nutritional side is where short-term loss either becomes a lasting change or quietly slips back. We build this support into your plan from the start.",
    },
    {
      question: "Where are your Perth clinics, and where is surgery performed?",
      answer:
        "We see patients at two clinic locations, Booragoon and Mandurah, so you can keep consultations and aftercare close to home. Surgical procedures are performed by our surgeons at St John of God Murdoch and Subiaco.",
    },
    {
      question: "How do I know which pathway is right for me?",
      answer:
        "That is the purpose of your assessment. We look at your weight history, your current health, any related conditions and what has and has not worked for you before. From there we propose realistic options and explain the benefits and trade-offs of each. You make the decision with us, not under pressure. The right pathway is the one that fits your health and your life, and it may change over time.",
    },
    {
      question: "Will my weight loss be permanent?",
      answer:
        "No treatment guarantees a specific or permanent result, and individual outcomes vary. What we can say honestly is that the people who maintain their results tend to be those who stay engaged with the plan, including follow-up appointments and dietitian support. Weight management is ongoing, and we stay involved to help you sustain your progress rather than handing you a result and stepping away.",
    },
    {
      question: "Do I need a GP referral to be seen?",
      answer:
        "A GP referral is helpful and is often needed to access Medicare rebates for certain consultations, and it lets us coordinate your care with your usual doctor. If you are a patient unsure how to arrange this, or a GP wanting to refer someone, our GP referral page explains the process. If you are not sure, get in touch and our team will guide you.",
    },
  ],

  conversionHeadline:
    "Not sure where to start? That is exactly the right reason to talk to us.",
};

export default function WeightLossSurgeryPerthPage() {
  return <OswContentPage data={pageData} />;
}
