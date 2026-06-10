import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Non-Surgical Weight Loss Perth | Obesity Surgery WA Perth",
  description:
    "Non-surgical weight loss options in Perth at Obesity Surgery WA. GLP-1 medications, medical management and specialist nutrition support from a dedicated team.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/non-surgical-weight-loss" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "non-surgical-weight-loss",
  pageTitle: "Non-Surgical Weight Loss Perth",
  keyword: "non surgical weight loss perth",
  metaDescription:
    "Non-surgical weight loss options in Perth at Obesity Surgery WA. GLP-1 medications, medical management and specialist nutrition support from a dedicated team.",
  heroHeadline: "Non-surgical weight loss in Perth, with a specialist team beside you",
  heroSubheadline:
    "Not everyone is ready for surgery, and not everyone needs it. If your BMI sits in the 27 to 35 range, or you simply want to try a less invasive path first, we offer a genuine medical weight loss pathway: GLP-1 medications, supervised programs and dietitian support. This is a real option, not a consolation prize.",
  stats: [
    {
      label: "Suits BMI from",
      value: "27+",
      note: "With weight-related health conditions, or 30+ without them; individual suitability is assessed at consultation",
    },
    {
      label: "Dietitian team",
      value: "5",
      note: "Five accredited dietitians supporting your nutrition throughout, not a one-off appointment",
    },
    {
      label: "Treatment style",
      value: "Non-surgical",
      note: "Medication, structured diet and regular review, with no operation required",
    },
    {
      label: "Reviewed by",
      value: "Specialists",
      note: "Physicians and dietitians who stay involved, rather than a script-only service",
    },
  ],
  whatIsTitle: "What non-surgical weight loss actually involves",
  whatIsParagraphs: [
    "Non-surgical weight loss covers the options that help you lose weight without an operation. At Obesity Surgery WA this means medical weight management led by our physicians, prescription medications where they are appropriate, structured very-low-calorie programs, and ongoing support from our five-dietitian team. It is a proper, supervised pathway rather than a list of generic tips.",
    "The medications getting the most attention right now are the GLP-1 group. These include Ozempic and Wegovy, both forms of semaglutide, and Saxenda, which is liraglutide. They work by mimicking a natural gut hormone your body releases after eating. That hormone reduces appetite and slows how quickly your stomach empties, so you feel full sooner, stay satisfied longer, and tend to think about food less through the day. For many people that makes eating less feel possible for the first time, rather than a constant battle of willpower.",
    "Alongside medication, some patients do well on a very-low-calorie diet, or VLCD, such as an Optifast program. These use meal replacements for a defined period under supervision to drive steady weight loss, often as a kick-start or in preparation for a procedure. Whichever path suits you, our dietitians help you eat in a way that protects muscle, avoids nutritional gaps, and builds habits that keep working over time.",
    "We also offer endoscopic sleeve gastroplasty, or ESG, as a middle option for some people. ESG is done through the mouth with no external cuts and no removal of the stomach, using sutures to reduce stomach capacity. For the right patient it can act as a bridge between medication and full bariatric surgery, and we will tell you honestly whether it is worth considering for you.",
  ],
  comparisonNote:
    "Compared with bariatric surgery, non-surgical options are less invasive and, in the case of medication, reversible. The trade-off is that weight loss is usually smaller, and with medication it tends to return if treatment stops without a long-term plan. We help you weigh this up honestly rather than steering you one way.",
  eligibilityBmi:
    "Generally suited to adults with a BMI of 30 or above, or a BMI of 27 or above when there are weight-related health conditions such as type 2 diabetes, high blood pressure or sleep apnoea. Your individual suitability is always assessed at consultation.",
  eligibilityNotes: [
    "Your BMI sits roughly in the 27 to 35 range, where non-surgical options are often the sensible first step.",
    "You have tried diet and lifestyle changes on your own and have not reached or held a healthy weight.",
    "You are not ready to consider surgery yet, or you want to try a less invasive path before deciding.",
    "You have a weight-related health condition that would benefit from losing even a modest amount of weight.",
    "You are willing to attend regular reviews, because medication and VLCD programs are monitored, not set-and-forget.",
  ],
  howItWorksSteps: [
    {
      title: "GP Referral",
      description:
        "Ask your GP for a referral to our team. This lets us review your full health picture and bill appropriate items through Medicare where you are eligible.",
    },
    {
      title: "Initial Consultation",
      description:
        "We talk through your weight history, your health and your goals, and explain which non-surgical options may suit you: medication, a VLCD program, ESG, or a combination.",
    },
    {
      title: "Medical Assessment",
      description:
        "One of our physicians checks your medical history, current medications and any conditions to confirm a chosen option is safe for you, with baseline blood tests where needed.",
    },
    {
      title: "Starting Treatment",
      description:
        "If medication suits you, we start low and increase slowly to reduce side effects like nausea. If a VLCD program suits you better, we set it up and explain exactly how to follow it.",
    },
    {
      title: "Dietitian Support",
      description:
        "Our five-dietitian team helps you eat well, protect muscle and build habits that keep working, whether you are on medication, a meal-replacement program, or building toward a procedure.",
    },
    {
      title: "Ongoing Review",
      description:
        "We review your progress, adjust as needed, manage any side effects, and talk openly about whether and when a surgical option might be worth discussing.",
    },
  ],
  benefitsTitle: "What non-surgical weight loss can do for you",
  benefits: [
    "A genuine, supervised pathway you can start sooner, with no operation, no hospital stay and no surgical recovery.",
    "GLP-1 medications can reduce hunger and cravings by mimicking a gut hormone, which makes eating less feel achievable rather than a constant fight.",
    "Improvements in blood sugar control, which can be valuable if you have or are at risk of type 2 diabetes.",
    "Even a modest loss of body weight can ease pressure on your joints, your sleep and conditions like high blood pressure.",
    "Support from a full specialist team, including five dietitians, rather than a tablet or a meal-replacement shake on its own.",
    "A flexible starting point: if your situation changes, you can move toward ESG or surgery later, with the same team guiding you.",
  ],
  risksTitle: "Being honest about the limits and side effects",
  risksParagraph:
    "Every effective treatment carries some trade-offs, and non-surgical weight loss is no exception. Most side effects are manageable and settle as your body adjusts, but you deserve to know what to expect before you start. We monitor you closely, start medication low and go slow, and we are upfront that these options suit some people better than others.",
  risksList: [
    "GLP-1 medications such as semaglutide and liraglutide commonly cause nausea, constipation or reflux, especially in the first few weeks.",
    "Weight tends to return if medication is stopped without a long-term eating and activity plan in place, so a maintenance plan matters from the start.",
    "Rapid weight loss can cause some loss of muscle and, for some people, looser skin; dietitian support and resistance exercise help guard against this.",
    "VLCD programs need supervision and are not suitable for everyone, and they can cause tiredness, headaches or feeling cold while your body adjusts.",
    "Non-surgical weight loss is usually smaller than what surgery can achieve, so it may not be enough on its own if your weight or health needs more.",
  ],
  costParagraph:
    "Costs depend on which path you take, so we discuss the likely range openly at your consultation rather than quoting a single figure. Consultations with our physicians may attract a Medicare rebate when you have a valid GP referral. For medications, some GLP-1 options are PBS-listed for specific conditions such as type 2 diabetes, in which case the cost is subsidised; when prescribed privately for weight loss they are generally a private script and an out-of-pocket cost, and pharmacy prices can change. VLCD products like Optifast are usually purchased from a pharmacy. Private health cover does not normally pay for medication itself, though it may help with related care or a procedure such as ESG. We will always give you a clear picture of expected costs before you commit.",
  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric & Upper GI Surgeon",
      specialty:
        "A Perth bariatric surgeon for over two decades and a senior lecturer at the University of Notre Dame. Having been through bariatric surgery himself, he understands the weight journey from both sides and helps patients judge when a non-surgical path is the right place to start. Operates at St John of God Murdoch and Subiaco.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "An accredited bariatric surgeon performing gastric sleeve, bypass and band procedures at St John of God Murdoch and Subiaco. He works alongside the team across the full range of options, helping patients move between medication, ESG and surgery as their needs change.",
    },
  ],
  outcomesNote:
    "In clinical trials, people taking GLP-1 medication alongside lifestyle changes lost an average of around 10 to 15 percent of their body weight, though some lost more and some lost less. VLCD programs and ESG produce their own range of results depending on the person and how closely the plan is followed. Results vary considerably from individual to individual, and no one can promise a specific outcome. What we can offer is honest guidance, close monitoring, and a realistic plan, including a clear conversation about when progressing to surgery might serve you better.",
  faqs: [
    {
      question: "Is non-surgical weight loss a real option, or just a consolation prize before surgery?",
      answer:
        "It is a genuine pathway in its own right. For many people, particularly those with a BMI in the 27 to 35 range, medication, a supervised VLCD program or ESG can deliver meaningful results without an operation. We only suggest surgery when it is the better fit for your situation, and plenty of patients do well without ever needing it.",
    },
    {
      question: "How do GLP-1 medications like Ozempic, Wegovy and Saxenda actually work?",
      answer:
        "They mimic a natural gut hormone your body releases after eating. That hormone reduces appetite and slows how quickly your stomach empties, so you feel full sooner and stay satisfied longer. Ozempic and Wegovy are forms of semaglutide, and Saxenda is liraglutide. At your consultation our physician explains which option, if any, suits your health and goals, because it is not one-size-fits-all.",
    },
    {
      question: "Who qualifies for GLP-1 medication?",
      answer:
        "These medications are generally considered for adults with a BMI of 30 or above, or a BMI of 27 or above when there are weight-related health conditions such as type 2 diabetes, high blood pressure or sleep apnoea. A physician assessment confirms whether a medication is safe and appropriate for you specifically, taking your full health picture into account.",
    },
    {
      question: "Are these medications covered by the PBS, or do I pay privately?",
      answer:
        "It depends on the medication and why it is prescribed. Some GLP-1 medications are PBS-listed for specific conditions such as type 2 diabetes, where the cost is subsidised. When prescribed privately for weight loss, they are usually a private script and an out-of-pocket cost, and pharmacy prices can change. We talk through the likely cost openly before you start so there are no surprises.",
    },
    {
      question: "What is a VLCD program like Optifast, and who is it for?",
      answer:
        "A very-low-calorie diet uses meal replacements for a defined period under supervision to drive steady weight loss. It can work well as a kick-start, as part of medical management, or in preparation for a procedure. It is not suitable for everyone and needs monitoring, so we assess whether it fits you and support you closely while you follow it.",
    },
    {
      question: "What is endoscopic sleeve gastroplasty, and how does it differ from surgery?",
      answer:
        "ESG reduces the capacity of your stomach using sutures placed through the mouth with an endoscope. There are no external cuts and no part of the stomach is removed, which makes it less invasive than a gastric sleeve. For the right patient it can act as a bridge between medication and full bariatric surgery. We will tell you honestly whether it is worth considering for you.",
    },
    {
      question: "When should I think about progressing to surgery instead?",
      answer:
        "If non-surgical options are not giving you enough progress, if your weight or health needs more than they can deliver, or if the weight keeps returning despite a solid plan, it may be time to discuss surgery. Because the same team guides both paths, we can have that conversation openly when the moment is right, without you having to start over somewhere new.",
    },
  ],
  conversionHeadline: "Ready to talk through your non-surgical weight loss options with a specialist team?",
};

export default function NonSurgicalWeightLossPage() {
  return <OswContentPage data={pageData} />;
}
