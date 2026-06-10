import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Am I Eligible for Weight Loss Surgery? | Obesity Surgery WA Perth",
  description:
    "Find out if you are eligible for weight loss surgery in Perth. BMI guidelines, health conditions, the assessment process and your first OSW appointment.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/am-i-eligible" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "am-i-eligible",
  pageTitle: "Am I Eligible for Weight Loss Surgery?",
  keyword: "am i eligible for weight loss surgery",
  metaDescription:
    "Find out if you are eligible for weight loss surgery in Perth. BMI guidelines, health conditions, the assessment process and your first OSW appointment.",

  heroHeadline: "Am I eligible for weight loss surgery?",
  heroSubheadline:
    "If you have spent years trying to lose weight and keep ending up back where you started, you are not alone, and it is not a question of willpower. This page walks you through who qualifies for weight loss surgery in Perth, what your BMI and health history mean, and exactly what happens when you come in to talk to us. There is no obligation, and no pressure.",

  stats: [
    { label: "BMI 35+", value: "Usually eligible", note: "Most people at BMI 35 or over qualify for a surgical assessment" },
    { label: "First consult", value: "30-60 min", note: "An honest conversation about your options, with no obligation" },
    { label: "Consult to surgery", value: "3-6 months", note: "A typical timeline, though it varies for each person" },
  ],

  whatIsTitle: "Eligibility is about more than a single number",
  whatIsParagraphs: [
    "Most people start by asking whether their BMI is high enough. It is a fair question, and BMI does form part of the picture. But eligibility for weight loss surgery is not decided by one number on a chart. Your surgeon looks at your weight, your health conditions, the history of what you have already tried, and what you want your life to look like in five or ten years.",
    "Body Mass Index is your weight in kilograms divided by your height in metres squared. As a rough guide: BMI of 27 to 29 sits in the overweight range, 30 to 34 is class 1 obesity, 35 to 39 is class 2, and 40 and over is class 3, sometimes called severe obesity. Where you fall changes which options are likely to suit you, but it does not tell the whole story on its own.",
    "Two people can have the same BMI and end up with very different recommendations. Someone at BMI 32 with type 2 diabetes and sleep apnoea may be a strong candidate for surgery, while someone at the same BMI with no other health concerns might do well starting with our medical and dietitian-led program first. That is the reason an in-person assessment matters so much.",
  ],
  comparisonNote:
    "If you are not sure of your BMI, do not worry about calculating it precisely before you call. Our team can help you work it out, and your surgeon will measure and confirm it at your consultation.",

  eligibilityBmi:
    "As a general guide, people with a BMI of 35 or above are typically eligible for a surgical assessment, and those at 40 or above are almost always eligible. A BMI of 30 to 34 may qualify when weight-related health conditions are present.",
  eligibilityNotes: [
    "BMI 27 to 29: surgery is not usually the first step. Our medical team can often help with weight loss medication and dietitian support, which may be the right starting point for you.",
    "BMI 30 to 34 with a weight-related health condition: you may qualify for surgery. The presence of conditions such as type 2 diabetes often changes the recommendation.",
    "BMI 35 to 39: most people in this range are eligible for a surgical assessment, with or without other health conditions.",
    "BMI 40 and over: almost everyone in this range is eligible for surgery, and it is frequently the most effective long-term option.",
    "Weight-related health conditions that strengthen your case include type 2 diabetes, high blood pressure, obstructive sleep apnoea, severe osteoarthritis, polycystic ovary syndrome (PCOS), fatty liver disease (NAFLD or NASH), and severe acid reflux.",
    "A history of diets that did not last is expected, not a mark against you. If diet and exercise alone had solved it, you would not need us. That history actually helps confirm that surgery may be appropriate.",
    "Mental health is part of the assessment, never a reason to be turned away. A psychological review helps set you up for success, and support is built into the process rather than used to exclude you.",
  ],

  howItWorksSteps: [
    {
      title: "Get in touch, by self-referral or through your GP",
      description:
        "Both work. You can contact us directly to arrange an appointment, or your GP can send a referral. A GP referral can help with Medicare rebates on consultations, so it is worth asking, but it is not a barrier to getting started.",
    },
    {
      title: "Your orientation consultation",
      description:
        "This first appointment runs around 30 to 60 minutes. It is a relaxed, honest conversation about your weight history, your health, and your goals. Your surgeon explains which options suit you, walks through the procedures, and answers your questions. Costs are discussed openly here, so you leave knowing where you stand. There is no obligation to proceed.",
    },
    {
      title: "Assessment and preparation",
      description:
        "If you decide to move forward, you will have any tests your surgeon recommends and meet members of our team, which may include a dietitian and, where helpful, a psychologist. This stage makes sure surgery is safe and right for you, and prepares you for the changes ahead.",
    },
    {
      title: "Surgery and aftercare",
      description:
        "Once everything is in place, your procedure is scheduled. Our Perth-based aftercare team supports you through recovery and the months that follow, because the long-term result depends on the support around the surgery, not just the operation itself.",
    },
  ],

  benefitsTitle: "What becoming eligible can open up",
  benefits: [
    "A clear, personalised answer about whether surgery is right for you, rather than guessing or comparing yourself to others online.",
    "A pathway that may include medication and dietitian support if surgery is not the best starting point, so you are never left without options.",
    "For many people, surgery can support meaningful improvement in weight-related conditions such as type 2 diabetes, sleep apnoea and high blood pressure, though individual results vary.",
    "Access to FRACS-certified bariatric surgeons operating at St John of God Murdoch and Subiaco.",
    "A team that takes your past attempts seriously and builds a plan around your life, not a one-size-fits-all template.",
  ],

  risksTitle: "An honest word on what to weigh up",
  risksParagraph:
    "Weight loss surgery is a significant decision, and being eligible does not mean it is automatically the right choice for you. Part of the assessment is making sure you understand the commitment involved and the risks of any procedure, so you can decide with clear eyes.",
  risksList: [
    "All surgery carries risk, including bleeding, infection, blood clots and risks related to anaesthetic.",
    "Bariatric procedures require lifelong changes to how you eat, and ongoing follow-up with your team.",
    "Some people need vitamin and mineral supplements long term, depending on the procedure.",
    "Results depend heavily on adherence to dietary and lifestyle guidance after surgery, and outcomes vary between individuals.",
    "Surgery is a tool, not a cure. It works best alongside the support and habits built around it.",
  ],

  costParagraph:
    "Cost is one of the first things most people want to understand, and we agree you should have clear numbers before committing to anything. Your fees depend on the procedure, your private health cover, and your individual circumstances, and they are discussed openly at your first consultation. Many patients use private health insurance, and some access their superannuation to help fund treatment. We will give you a clear, itemised estimate so there are no surprises.",

  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric & Upper GI Surgeon",
      specialty:
        "A Perth bariatric surgeon for over two decades and a Fellow of the Royal Australasian College of Surgeons. Dr Chandraratna underwent bariatric surgery himself, so he understands the journey from both sides of the consulting room. He is a senior lecturer at Notre Dame University and operates at SJOG Murdoch and Subiaco.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "An accredited bariatric surgeon performing gastric sleeve, bypass and band procedures at St John of God Murdoch and Subiaco. Dr Watson takes a careful, patient-centred approach to assessment and surgical care.",
    },
  ],

  outcomesNote:
    "Many of our patients come to us after years of feeling that nothing works, and go on to see real improvements in their weight and in weight-related health conditions. The people who do best are those who engage with the full program, including dietitian and follow-up support, rather than viewing surgery as a single event. What your own result looks like depends on your starting point, the procedure chosen, and the changes you make alongside it. Individual results vary, and your surgeon will give you a realistic picture at your assessment.",

  faqs: [
    {
      question: "My BMI is around 30. Am I too low for weight loss surgery?",
      answer:
        "Not necessarily. A BMI of 30 to 34 can qualify for surgery when you also have a weight-related health condition such as type 2 diabetes, sleep apnoea or high blood pressure. If you do not have those conditions, surgery may not be the first step, and our medical team can often help with weight loss medication and dietitian support instead. The only way to know for sure is an assessment, where your surgeon looks at the full picture rather than the number alone.",
    },
    {
      question: "I have tried every diet and they all failed. Does that count against me?",
      answer:
        "No, and we want to be clear about this because so many people carry guilt about it. A history of diets that did not last is exactly what we expect to see, and it actually supports the case that surgery may be appropriate. Obesity is a medical condition, not a failure of willpower. If diet and exercise alone reliably solved it, weight loss surgery would not exist.",
    },
    {
      question: "Will a mental health history stop me from being eligible?",
      answer:
        "A psychological assessment is part of the process, but it is there to support you, not to exclude you. Mental health is rarely a reason to be turned away. Understanding your relationship with food and any challenges you are facing helps your team set you up for the best chance of long-term success. If you need extra support, we would rather build it in from the start than ignore it.",
    },
    {
      question: "Do I need a GP referral, or can I refer myself?",
      answer:
        "Both work. You are welcome to contact us directly and arrange an appointment yourself. A GP referral is helpful because it can allow Medicare rebates on your consultations, so it is worth asking your GP for one, but the lack of a referral will not stop you from getting started. If you would like to go the GP route, our GP referral page has the details your doctor needs.",
    },
    {
      question: "What actually happens at the first appointment?",
      answer:
        "Your orientation consultation runs about 30 to 60 minutes. It is an honest conversation, not a sales pitch. Your surgeon reviews your weight and health history, explains which options suit you, walks through the relevant procedures and their risks, and answers your questions. Costs are discussed openly during this appointment, so you leave with a clear understanding of the numbers. There is no obligation to proceed, and many people use it simply to get clarity.",
    },
    {
      question: "How long does it take to go from first consultation to surgery?",
      answer:
        "For most people the timeline is around three to six months from the first consultation to surgery, though it varies depending on your health, the assessments needed, and your own readiness. Some people move faster, others take longer because they want time to prepare. The pace is set with you, not rushed at you.",
    },
    {
      question: "What if I find out surgery is not right for me?",
      answer:
        "Then you will leave knowing that, with a clear explanation of why and what your alternatives are. Eligibility is not all-or-nothing. Our medical team supports patients with weight loss medication and dietitian-led programs, which can be the right path for people at a lower BMI or those who prefer to start without surgery. The goal of the assessment is the right answer for you, not a surgery booking.",
    },
  ],

  conversionHeadline:
    "The hardest part is picking up the phone. Let us help you find out where you stand.",
};

export default function AmIEligiblePage() {
  return <OswContentPage data={pageData} />;
}
