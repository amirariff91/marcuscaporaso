import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Weight Loss Medication Perth | Medically Supervised | Obesity Surgery WA",
  description:
    "Medically supervised weight loss medication in Perth. GLP-1 medications and appetite suppressants as part of a specialist-led program at Obesity Surgery WA.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/weight-loss-medication" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "weight-loss-medication",
  pageTitle: "Weight Loss Medication",
  keyword: "weight loss medication perth",
  metaDescription:
    "Medically supervised weight loss medication in Perth. GLP-1 medications and appetite suppressants as part of a specialist-led program at Obesity Surgery WA.",
  heroHeadline: "Weight loss medication in Perth, supervised by a specialist team",
  heroSubheadline:
    "If you have tried to lose weight and the scales will not budge, you are not failing — your biology is working against you. Modern weight loss medications can help, and our team helps you use them safely as part of a proper medical plan.",
  stats: [
    { label: "Average weight loss", value: "10–15%", note: "Of body weight on GLP-1 medication, clinical average — results vary between individuals" },
    { label: "Treatment style", value: "Non-surgical", note: "Medication, diet and review — no operation required" },
    { label: "Reviewed by", value: "Specialists", note: "Physicians and dietitians, not a script-only service" },
    { label: "Locations", value: "Booragoon & Mandurah", note: "Plus telehealth review where appropriate" },
  ],
  whatIsTitle: "What is weight loss medication, and how does it actually work?",
  whatIsParagraphs: [
    "Weight loss medication is a prescription treatment that helps your body manage hunger and appetite. The most talked-about group right now are the GLP-1 medications — including Ozempic (semaglutide, primarily for type 2 diabetes), Wegovy (semaglutide 2.4mg, TGA-approved for chronic weight management and now available in Australia, though supply can vary), and Mounjaro (tirzepatide, TGA-approved and increasingly available). These medications copy a natural gut hormone that tells your brain you are full, so you feel satisfied with less food and think about food less often through the day.",
    "Duromine (phentermine) is an older appetite-suppressant tablet that has been used in Australia for many years. It works differently to GLP-1 medication and is usually prescribed for shorter periods. It can suit some people, but it is not right for everyone, and it needs proper medical supervision.",
    "Medication is not a magic fix on its own. It works best alongside changes to how you eat, move and sleep. That is why our physicians and dietitians review you properly, check the medication is safe for you, and stay involved — rather than simply handing over a script and sending you away.",
  ],
  comparisonNote:
    "Compared with surgery, medication is less invasive and reversible, but the weight loss is typically smaller and tends to return if the medication is stopped without a long-term plan.",
  eligibilityBmi:
    "Generally considered for adults with a BMI of 30+, or a BMI of 27+ when there are weight-related health conditions such as type 2 diabetes, high blood pressure or sleep apnoea.",
  eligibilityNotes: [
    "You have tried diet and lifestyle changes and have not reached or held a healthy weight.",
    "Your weight is affecting your health, your joints, your sleep or your day-to-day quality of life.",
    "You want a non-surgical option, or you are not ready to consider surgery yet.",
    "You are willing to attend regular reviews — medication is monitored, not set-and-forget.",
  ],
  howItWorksSteps: [
    { title: "GP Referral", description: "Ask your GP for a referral to our team. This lets us review your full health picture and bill appropriate items through Medicare where eligible." },
    { title: "Orientation Consultation", description: "We talk through your weight history, your health, and your goals — and explain which medication options may suit you and which would not." },
    { title: "Pre-treatment Assessment", description: "A physician checks your medical history, current medications and any conditions to confirm a chosen medication is safe for you, with baseline blood tests if needed." },
    { title: "Starting Medication", description: "We start you on a low dose and increase slowly. This gentle build-up reduces side effects like nausea and helps your body adjust." },
    { title: "Dietitian Support", description: "One of our dietitians helps you eat well on the medication, protect muscle, and build habits that keep working even after treatment." },
    { title: "Ongoing Review", description: "We review your progress, adjust the dose, manage any side effects, and plan how to maintain your results over the long term." },
  ],
  benefitsTitle: "What weight loss medication can do for you",
  benefits: [
    "Average loss of around 10–15% of body weight on GLP-1 medication in clinical studies, though individual results vary.",
    "Less hunger and fewer food cravings, which makes healthy eating feel far more achievable.",
    "Improvements in blood sugar control, which can be helpful if you have or are at risk of type 2 diabetes.",
    "A non-surgical option you can start sooner, with no hospital stay or recovery from an operation.",
    "Care from a full specialist team — physicians and dietitians working together, not a tablet on its own.",
  ],
  risksTitle: "Being honest about the side effects and limits",
  risksParagraph:
    "Every effective medication carries some risk, and weight loss medications are no exception. Most side effects are manageable and settle as your body adjusts, but it is important you know what to expect before you start. We monitor you closely, start low, and go slow — and we are upfront that medication suits some people better than others.",
  risksList: [
    "GLP-1 medications commonly cause nausea, constipation or reflux, especially in the first few weeks.",
    "Duromine can raise heart rate and blood pressure and may cause restlessness or trouble sleeping — it is not suitable for some heart conditions.",
    "Weight tends to return if medication is stopped without a long-term eating and activity plan in place.",
    "Rapid weight loss can cause some loss of muscle and, for some people, looser skin — dietitian support and resistance exercise help protect against this.",
  ],
  costParagraph:
    "Costs depend on which medication you are prescribed, the dose, and how long you stay on treatment, so we discuss the likely range openly at your consultation rather than quoting a single figure. Consultations with our physicians may attract a Medicare rebate when you have a valid GP referral. The medications themselves are generally an out-of-pocket cost — some are not subsidised on the PBS for weight loss specifically — and pharmacy prices can change. Private health cover does not usually pay for the medication itself, though it may help with related care. We will always give you a clear picture of expected costs before you commit.",
  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty: "Leads our weight management service and is a lecturer at the University of Notre Dame. Having been through bariatric surgery himself, he understands the weight journey from both sides.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty: "Works alongside the team across the full range of weight management options, helping patients choose the right path — medication, surgery, or a staged combination.",
    },
  ],
  outcomesNote:
    "In clinical trials, people taking GLP-1 medication alongside lifestyle changes lost an average of around 10–15% of their body weight, though some lost more and some lost less. Results vary considerably from person to person, and no one can promise a specific outcome. What we can promise is honest guidance, close monitoring, and a realistic plan for keeping the weight off — because the medication works best when it is part of lasting change, not a stand-alone fix.",
  faqs: [
    {
      question: "Is weight loss medication the same as Ozempic?",
      answer:
        "Ozempic is one brand in the GLP-1 family of medications. There are several related medications that work in a similar way. At your consultation, our physician will explain which option may suit you best based on your health, your goals and what is available — it is not one-size-fits-all.",
    },
    {
      question: "How much weight will I lose?",
      answer:
        "On GLP-1 medication combined with lifestyle changes, people lose an average of around 10–15% of their body weight in studies. Your result depends on the medication, the dose, and your own body — some people lose more and some less. We set realistic goals with you rather than promising a number.",
    },
    {
      question: "What about Duromine — is it still used?",
      answer:
        "Yes, Duromine (phentermine) is still prescribed in Australia. It is an appetite suppressant usually used for shorter periods. It suits some people but is not safe for everyone, particularly with certain heart conditions, so it needs a proper medical assessment first.",
    },
    {
      question: "Are GLP-1 medications like Wegovy available in Australia?",
      answer:
        "Yes — Wegovy (semaglutide 2.4mg) has TGA approval for chronic weight management in Australia and is now available, though access can vary by pharmacy. Ozempic (semaglutide at lower doses, primarily for T2D) is widely available. Mounjaro (tirzepatide) is TGA approved and increasingly accessible. These medications work best as part of a supervised program with dietitian and physician support. Eligibility and scripts require a consultation with a doctor.",
    },
    {
      question: "Will the weight come back if I stop?",
      answer:
        "It can. Weight loss medication helps control appetite while you take it, so when you stop, hunger can return and weight may follow. That is exactly why we focus on diet, activity and habit change throughout — so you have a plan to hold your results long term.",
    },
    {
      question: "What are the common side effects?",
      answer:
        "With GLP-1 medications, the most common side effects are nausea, constipation and reflux, mostly in the early weeks. Starting on a low dose and increasing slowly reduces these. Duromine can cause a faster heartbeat, restlessness or trouble sleeping. We monitor you and adjust if needed.",
    },
    {
      question: "Can I just eat normally on the medication?",
      answer:
        "You can still eat real, enjoyable food — there is no banned list. Most people simply feel full sooner and eat less. Our dietitians help you make those smaller meals nourishing, protect your muscle, and avoid the deficiencies that can come with eating less.",
    },
    {
      question: "Do I need a GP referral?",
      answer:
        "A GP referral lets us assess your full health picture and access Medicare rebates for your specialist consultations where you are eligible. We recommend starting with your GP, who can also rule out other causes for weight changes before you begin.",
    },
    {
      question: "Is medication better than surgery?",
      answer:
        "Neither is simply better — they suit different people. Medication is less invasive and reversible but usually leads to smaller weight loss. Surgery typically achieves more and longer-lasting results but is a bigger step. We help you weigh up both honestly at your consultation.",
    },
  ],
  conversionHeadline: "Ready to talk through your weight loss medication options with a specialist team?",
};

export default function Page() {
  return <OswContentPage data={pageData} />;
}
