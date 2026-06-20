import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Weight Loss Surgery FAQs Perth | Obesity Surgery WA",
  description:
    "Answers to the most common questions about weight loss surgery in Perth: eligibility, procedures, cost, Medicare, safety, recovery and life after surgery.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/faqs" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "faqs",
  pageTitle: "Weight Loss Surgery FAQs",
  keyword: "weight loss surgery faqs perth",
  metaDescription:
    "Answers to the most common questions about weight loss surgery in Perth: eligibility, procedures, cost, Medicare, safety, recovery and life after surgery.",
  heroHeadline: "Weight Loss Surgery FAQs",
  heroSubheadline:
    "Answers to the most common questions about weight loss surgery in Perth, gathered in one place. If you are still working things out, this is a good place to start. We cover eligibility, the different procedures, cost and Medicare, safety and recovery, and what life is really like after surgery, in plain language and with no pressure to decide anything today.",
  stats: [
    { label: "Treatment options", value: "6", note: "Sleeve, bypass, mini bypass, band, revision and medication" },
    { label: "Hospitals", value: "2", note: "St John of God Murdoch & Subiaco" },
    { label: "Care team", value: "10+", note: "Surgeons, physicians and dietitians" },
    { label: "Clinic locations", value: "Perth + Mandurah", note: "Booragoon and Mandurah rooms" },
  ],
  whatIsTitle: "Your questions about weight loss surgery in Perth, answered",
  whatIsParagraphs: [
    "Deciding whether weight loss surgery is right for you raises a lot of questions, and most people arrive with the same ones. This page brings together the questions we hear most often at Obesity Surgery WA, so you can get straight answers before you ever pick up the phone. It is meant as an orientation, not the final word, because the answer that actually matters is the one your surgeon gives you about your own situation.",
    "Weight loss surgery, also called bariatric surgery, covers a range of procedures that change the size or function of the stomach to help you eat less and feel full sooner. At Obesity Surgery WA we offer gastric sleeve, gastric bypass, mini gastric bypass, gastric band and revision surgery, as well as weight-loss medication and other non-surgical options for people who are not ready for, or not suited to, an operation. Surgery is one tool among several, not the only road.",
    "Whichever question brought you here, you are stepping into a team. Our surgeons are supported by physicians and dietitians who stay involved before and long after any procedure, so the care does not stop on the day of surgery. Use the sections below to orient yourself, then read the full list of common questions further down the page.",
  ],
  comparisonNote:
    "Wondering which procedure is right for you? That is not a decision to make from a website. A gastric sleeve, a gastric bypass and a gastric band each suit different bodies, goals and health histories, and the right match is something your surgeon works out with you at consultation, not something you settle on in advance.",
  eligibilityBmi:
    "As a general guide, people with a BMI of 35 or above are typically suitable for a surgical assessment, and a BMI of 30 to 34 may qualify when weight-related health conditions are present. These are starting points, not a final ruling. Your surgeon confirms what is right for you.",
  eligibilityNotes: [
    "BMI is part of the picture, not the whole of it. Eligibility is a whole-person assessment that also considers your health conditions, your history of previous attempts, and your goals.",
    "Weight-related conditions such as type 2 diabetes, high blood pressure, obstructive sleep apnoea, severe reflux, PCOS or fatty liver disease can strengthen the case for surgery.",
    "A long history of diets that did not hold is expected, not a mark against you. It often helps confirm that surgery may be appropriate.",
    "Mental health history is part of the assessment and is never on its own a reason to be turned away. The review is there to set you up for success.",
    "A GP referral is the usual first step and gives you access to Medicare rebates, though you can also contact us directly to get started.",
  ],
  howItWorksSteps: [
    {
      title: "GP Referral",
      description:
        "Ask your GP for a referral to Obesity Surgery WA. This gives you access to Medicare rebates and lets us review your history before we meet. You can also contact us directly if you would rather start that way.",
    },
    {
      title: "Orientation Consultation",
      description:
        "Meet your surgeon, talk through your weight and health history, and have your options explained in plain language. There is no pressure to decide on the day.",
    },
    {
      title: "Pre-operative Assessment",
      description:
        "Our physicians and dietitians assess your overall health, screen for conditions like reflux or sleep apnoea, and prepare you for surgery safely.",
    },
    {
      title: "Surgery",
      description:
        "Your procedure is performed by your FRACS surgeon at St John of God Murdoch or Subiaco using keyhole (laparoscopic) techniques.",
    },
    {
      title: "Hospital Recovery",
      description:
        "You recover in hospital under the care of our team, usually for a few nights, with nursing and dietitian support before you head home.",
    },
    {
      title: "Ongoing Support",
      description:
        "Our dietitians and physicians stay involved for the long term, helping you build the habits that protect your results year after year.",
    },
  ],
  benefitsTitle: "Why patients choose Obesity Surgery WA",
  benefits: [
    "A lead surgeon who is FRACS-credentialled, lectures at the University of Notre Dame, and has personal experience of bariatric surgery.",
    "Two experienced bariatric surgeons, so you are matched to the right procedure rather than the only one on offer.",
    "Operating privileges at St John of God Murdoch and Subiaco, accredited private hospitals with full theatre and recovery facilities.",
    "An in-house team of physicians and dietitians who support you before surgery and for the long haul afterwards.",
    "Two clinic locations across Perth and Mandurah, making consultations and follow-up easier to fit around your life.",
  ],
  risksTitle: "Being honest about what surgery can and cannot do",
  risksParagraph:
    "No surgeon, however experienced, can promise a particular result, and you should be cautious of anyone who does. Bariatric surgery is a powerful tool, but it works alongside your effort, not instead of it. Our role is to give you a carefully planned operation in an accredited hospital and the support to make the most of it, while being straight with you about the risks any surgery carries. The honest answer to many of the questions below is that it depends on you, your starting health and the procedure you and your surgeon choose.",
  risksList: [
    "All surgery carries risks including bleeding, infection, blood clots, leaks and reactions to anaesthetic.",
    "Bariatric procedures require lifelong changes to how you eat, and ongoing follow-up to protect your health and your results.",
    "Some procedures require long-term vitamin and mineral supplementation, which our team helps you manage.",
    "Some patients experience loose skin after significant weight loss. This varies between individuals and can sometimes be addressed later.",
    "Long-term success depends on sustained dietary and lifestyle change; weight can return if these are not maintained.",
  ],
  costParagraph:
    "Cost depends on the procedure you and your surgeon decide on, your level of private health cover, and your individual circumstances. Most bariatric procedures attract a Medicare item number, and patients with appropriate private hospital cover often pay an out-of-pocket gap rather than the full fee. Medicare contributes toward the surgical, anaesthetist and specialist consultation fees, but does not cover the hospital stay or theatre, which is where private hospital cover comes in. Some people apply to access their superannuation early on medical grounds, and third-party payment plans are sometimes used. We give you a clear, itemised written estimate before you commit to anything, so there are no surprises.",
  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "Lead surgeon and founder of Obesity Surgery WA. Fellow of the Royal Australasian College of Surgeons and lecturer at the University of Notre Dame. Operates at St John of God Murdoch and Subiaco, with personal experience of bariatric surgery that shapes his patient-centred approach.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "Experienced bariatric surgeon performing gastric sleeve, gastric bypass and revisional procedures. Known for a thorough, unhurried approach and for taking time to match each patient to the procedure that suits them best.",
    },
  ],
  outcomesNote:
    "Patients of our team have achieved meaningful, lasting weight loss and improvements in conditions such as type 2 diabetes, sleep apnoea and high blood pressure. Published clinical averages for bariatric surgery typically show 60-80% of excess weight lost in the first one to two years, depending on the procedure. These figures are averages only. Your own result will depend on your starting health, the procedure chosen, and how closely you follow the dietary and lifestyle plan your team sets out with you. Results vary between individuals and no specific outcome can be promised.",
  faqs: [
    {
      question: "Am I eligible for weight loss surgery?",
      answer:
        "As a general guide, people with a BMI of 35 or above are typically suitable for a surgical assessment, and those at 40 or above are almost always suitable. A BMI of 30 to 34 may qualify when weight-related health conditions such as type 2 diabetes are present. BMI is only part of the picture though. Eligibility is a whole-person assessment that also considers your health conditions, your history of previous attempts and your goals, and your surgeon confirms what is right for you at consultation.",
    },
    {
      question: "My BMI is around 30. Am I too low for weight loss surgery?",
      answer:
        "Not necessarily. A BMI of 30 to 34 may qualify for surgery when a weight-related health condition is present, and type 2 diabetes in particular can change the recommendation. If surgery is not the right starting point for you, our medical team can often help with weight-loss medication and dietitian support instead. Wherever you start, our team can talk you through the options that fit your situation.",
    },
    {
      question: "What weight loss surgery procedures do you offer?",
      answer:
        "At Obesity Surgery WA we offer gastric sleeve (sleeve gastrectomy), gastric bypass, mini gastric bypass, adjustable gastric band and revision surgery for patients who have had previous bariatric surgery. We also offer weight-loss medication and other non-surgical options for people who are not ready for, or not suited to, an operation. Your surgeon helps you understand which of these fits your body, your health history and your goals.",
    },
    {
      question: "What is the difference between a gastric sleeve, a gastric bypass and a gastric band?",
      answer:
        "A gastric sleeve removes part of the stomach to create a smaller, sleeve-shaped stomach so you feel full sooner. A gastric bypass reduces the stomach and reroutes part of the small intestine, which changes both how much you eat and how your body absorbs food. A gastric band is an adjustable band placed around the upper stomach. Each suits different people, and the mini gastric bypass is a variation of the bypass. The right choice depends on your situation and is decided with your surgeon, not from a website.",
    },
    {
      question: "Is weight loss surgery safe?",
      answer:
        "Modern bariatric surgery is well established and is performed using keyhole (laparoscopic) techniques at accredited private hospitals, in our case St John of God Murdoch and Subiaco, with full theatre and recovery facilities. That said, all surgery carries risk, including bleeding, infection, blood clots, leaks and reactions to anaesthetic. We will not minimise this. Your surgeon goes through your individual risk profile in detail at your assessment so you can make a clear, informed decision.",
    },
    {
      question: "How much does weight loss surgery cost in Perth?",
      answer:
        "There is no single price because the total is made up of separate fees billed by different providers, including the surgeon, the anaesthetist and the hospital. The amount you pay depends on the procedure, your private health cover and your individual circumstances. Most procedures attract a Medicare item number, and patients with appropriate private hospital cover often pay an out-of-pocket gap rather than the full fee. We provide a clear, itemised written estimate before you commit to anything.",
    },
    {
      question: "Does Medicare cover weight loss surgery?",
      answer:
        "When you meet the clinical criteria and have a GP referral, Medicare contributes a rebate toward eligible surgical, anaesthetist and specialist consultation fees. Medicare does not cover the full cost, and it does not cover the hospital stay or theatre fees, which is the role of private hospital cover. A private contribution, or gap, typically remains. Our team can explain what applies in your situation before you commit.",
    },
    {
      question: "Do I need private health insurance, and can I use my super?",
      answer:
        "Private hospital cover that specifically includes bariatric surgery is the usual way to fund the hospital side, and many funds apply a 12-month waiting period and require a higher tier policy, so it is worth confirming the exact item numbers with your fund. If you do not have suitable cover, some patients apply to access their superannuation early on medical grounds, which is assessed by the ATO and your super fund rather than by us. Third-party payment plans are also sometimes used. We can talk you through these options.",
    },
    {
      question: "Will I see the surgeon, or someone else?",
      answer:
        "You will meet and be assessed by your FRACS bariatric surgeon, and your surgeon performs your operation, not a trainee. Around that, our physicians and dietitians provide the wider assessment and support, so you have a full team rather than a single point of contact.",
    },
    {
      question: "What qualifications do your surgeons have?",
      answer:
        "Both of our surgeons hold an MBBS and are Fellows of the Royal Australasian College of Surgeons (FRACS), the body that credentials surgeons across Australia and New Zealand. Dr Harsha Chandraratna also lectures at the University of Notre Dame and has personally been through bariatric surgery himself. Both operate at St John of God Murdoch and Subiaco.",
    },
    {
      question: "How long is the recovery, and how soon can I go back to work?",
      answer:
        "Most patients stay in hospital for a few nights after surgery, with nursing and dietitian support before heading home. Time off work is generally around two to four weeks, depending on the procedure and how physical your job is. Office-based work is often possible sooner, while heavy lifting needs longer. Your surgeon gives you advice tailored to your situation and your recovery.",
    },
    {
      question: "Can I eat normally again after surgery?",
      answer:
        "Your eating changes, especially in the first weeks while you heal, but most patients return to eating a wide range of foods, just in smaller, more satisfying amounts. Our dietitians guide you step by step from liquids back to solid food and help you build eating habits you can keep for life. The goal is a healthier relationship with food, not endless restriction.",
    },
    {
      question: "How much weight will I lose?",
      answer:
        "Published clinical averages typically show 60 to 80 percent of excess weight lost in the first one to two years, depending on the procedure. These are population averages, not promises. Your own result depends on your starting health, the procedure chosen, and how closely you follow the dietary and lifestyle plan your team sets out with you. Results vary between individuals and no specific outcome can be guaranteed.",
    },
    {
      question: "Where are your clinics, and where is surgery performed?",
      answer:
        "We consult at our Booragoon rooms in the Garden City Specialist Centre (537 Marmion Street) and in Mandurah at the WA Cardiology Centre (30 Minilya Pkwy). Surgery is performed at St John of God Murdoch and St John of God Subiaco, two accredited private hospitals in Perth.",
    },
    {
      question: "What if the surgery does not work for me?",
      answer:
        "Weight-loss surgery is a tool, and results vary between individuals. Some patients regain weight over time, often when eating and activity habits drift. If that happens, our team works with you to understand why, and in some cases revision surgery is an option. This is exactly why we stay involved long after your operation rather than treating surgery as the finish line.",
    },
    {
      question: "Do I have to have surgery, or are there other options?",
      answer:
        "You do not have to have surgery. Obesity is a medical condition, not a willpower failure, and the right answer for you might be weight-loss medication, dietitian support or another non-surgical option, on its own or alongside surgery over time. Many people start with medical management and consider surgery later, within the same team that already knows their history. The first consultation is exactly the place to work out where to start.",
    },
  ],
  conversionHeadline:
    "Still have a question we have not answered here? Talk it through with our team, no pressure.",
};

export default function Page() {
  return <OswContentPage data={pageData} />;
}
