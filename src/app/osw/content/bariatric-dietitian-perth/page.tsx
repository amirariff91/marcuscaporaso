import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Bariatric Dietitian Perth | Obesity Surgery WA Perth",
  description:
    "Bariatric dietitians in Perth supporting you before and after weight-loss surgery. Meet our dietitian team and learn how nutrition keeps your results lasting.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/bariatric-dietitian-perth" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "bariatric-dietitian-perth",
  pageTitle: "Bariatric Dietitian Perth",
  keyword: "bariatric dietitian perth",
  metaDescription:
    "Bariatric dietitians in Perth supporting you before and after weight-loss surgery. Meet our dietitian team and learn how nutrition keeps your results lasting.",
  heroHeadline: "Our Perth bariatric dietitians",
  heroSubheadline:
    "Surgery changes your stomach in a single day, but eating well is a skill you build over months. If the thought of completely relearning how to eat feels daunting, that is exactly why we have a dedicated bariatric dietitian team walking beside you, before your operation and for the long road after it.",
  stats: [
    { label: "Accreditation", value: "APD", note: "All Accredited Practising Dietitians, not a single rushed appointment" },
    { label: "Support begins", value: "Pre-op", note: "Often weeks before your surgery date" },
    { label: "Follow-up", value: "Long-term", note: "Structured reviews well past your first year" },
    { label: "Clinic locations", value: "2", note: "Booragoon and Mandurah" },
  ],
  whatIsTitle: "What does a bariatric dietitian actually do?",
  whatIsParagraphs: [
    "A bariatric dietitian is an accredited nutrition professional who specialises in the very specific needs of people having weight-loss surgery. This is different from general dietetics. Your stomach will hold far less, your body will absorb nutrients differently, and your appetite signals will change, so the eating advice that worked for you in the past no longer applies.",
    "Before surgery, your dietitian helps prepare your body and your habits. That often includes a structured pre-operative eating plan to shrink the liver and make the operation safer, plus practical coaching on the changes ahead so nothing comes as a shock on the day you wake up.",
    "After surgery, they guide you step by step from fluids to soft foods to solids, protect you against nutritional gaps with the right supplements, and troubleshoot the real-world problems that come up: what to do when food gets stuck, how to hit your protein target, and how to handle eating out or a stalled scale without losing heart.",
  ],
  comparisonNote:
    "Our bariatric dietitians, including Clare Renn, Megan Parker and Rhiannon Dick, each hold Accredited Practising Dietitian (APD) status and specialise in bariatric and metabolic nutrition. Unlike a single one-off nutrition session, their care is ongoing and matched to each stage of your journey, continuing long after the surgery itself is done.",
  eligibilityBmi:
    "Dietitian support is part of bariatric care for patients generally suitable for surgery, typically a BMI of 35+, or BMI 30+ with related health conditions.",
  eligibilityNotes: [
    "Nutritional support is recommended for every bariatric patient, not just those who feel they struggle with food.",
    "It is especially important if you have diabetes, food intolerances, a history of disordered eating, or are planning a pregnancy after surgery.",
    "You do not need to have your eating sorted out before you start. That is precisely what your dietitian is here to help with.",
    "Your care is tailored to you and to your procedure, whether you are having a gastric sleeve, gastric bypass or another operation.",
  ],
  howItWorksSteps: [
    {
      title: "GP Referral",
      description:
        "Ask your GP for a referral to our practice. A referral gives you the higher referred Medicare rebate on eligible consultations, with a lower rebate applying without one, and is the first step toward seeing our team.",
    },
    {
      title: "Orientation Consultation",
      description:
        "You meet your surgeon and learn how dietitian care fits into your overall plan. There is no pressure to decide anything on the day.",
    },
    {
      title: "Pre-operative Assessment",
      description:
        "You meet one of our dietitians to assess your current eating, set goals and start a pre-surgery plan that prepares your body and makes the operation safer.",
    },
    {
      title: "Surgery",
      description:
        "Your procedure is performed at St John of God Murdoch or Subiaco. Your dietitian has already prepared you for the eating stages that follow.",
    },
    {
      title: "Hospital Recovery",
      description:
        "While you recover, the team starts you on fluids and gives you clear, written guidance on progressing your diet safely once you are home.",
    },
    {
      title: "Ongoing Support",
      description:
        "This is where the real work happens. Regular dietitian reviews help you build lasting habits, protect your nutrition and keep the results that matter to you.",
    },
  ],
  benefitsTitle: "How the right nutrition support protects your results",
  benefits: [
    "Better, more durable weight loss: research consistently shows patients who stay engaged with dietetic follow-up tend to maintain their results more successfully, though individual outcomes vary.",
    "Protection against nutritional deficiencies in iron, vitamin B12, calcium and protein that can develop quietly after surgery.",
    "A safer, smoother operation thanks to a well-managed pre-surgery eating plan.",
    "Confidence at every stage: knowing what to eat, how much, and what to do when something does not go to plan.",
    "Practical strategies for real life, from family meals and social events to travel, so healthy eating fits around your world rather than the other way round.",
  ],
  risksTitle: "Why skipping nutritional support is the real risk",
  risksParagraph:
    "Weight-loss surgery changes how your body takes in food and nutrients, and without proper guidance that can lead to genuine health problems over time. We want you to understand these honestly, because they are exactly what consistent dietitian care is designed to prevent. None of this is meant to frighten you; it is the reason ongoing support is built into your care rather than left as an optional extra.",
  risksList: [
    "Nutritional deficiencies, such as low iron, B12, calcium or protein, which can cause tiredness, hair thinning or bone weakening if left unchecked.",
    "Weight regain over the years when old eating patterns gradually return without support to keep them in check.",
    "Dumping syndrome or discomfort from eating sugary, fatty or oversized meals before your body has adjusted.",
    "Dehydration in the early weeks, when getting enough fluids takes real planning around your smaller stomach.",
  ],
  costParagraph:
    "Cost is a fair thing to ask about early. Many bariatric dietitian consultations attract a Medicare rebate when you have a valid GP referral, and a chronic disease management plan may cover a number of allied health visits each year. Private health funds with the right level of cover often contribute as well, and some patients access early release of superannuation to help with the wider cost of their surgery and care. Rather than quote a single figure that may not apply to you, we give every patient clear information about fees and likely out-of-pocket costs before you commit to anything.",
  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "Lead surgeon, lecturer at the University of Notre Dame, and someone who has been through bariatric surgery himself. He built the practice around the support patients genuinely need, with dietetics at its core.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "Experienced bariatric surgeon who works closely with our dietitians and physicians so your surgical and nutritional care stay joined up at every stage.",
    },
  ],
  // EP verified 2026-07-15 from obesitysurgerywa.com.au: the "Reflect & Reset" program lists
  // "2 exercise physiologist appointments", so EPs are a real, in-house part of OSWA. Clinics =
  // Booragoon + Mandurah (the earlier draft's "Greenfields" was wrong). AEP/ESSA accreditation is
  // not stated publicly, so copy makes NO accreditation claim and names no individual EPs. Copy is
  // AHPRA-tightened: EP tied to the team + structured support, no implied-outcome claims.
  alliedHealth: {
    title: "Your allied-health team: bariatric dietitians and exercise physiologists",
    intro:
      "Bariatric care is a team effort. Alongside our bariatric dietitians, our exercise physiologists support the movement and physical-activity side of your care.",
    members: [
      {
        role: "Bariatric dietitians",
        credentials: "Accredited Practising Dietitians (APD)",
        detail:
          "Clare Renn, Megan Parker and Rhiannon Dick each hold APD status and specialise in bariatric and metabolic nutrition, guiding you from your pre-operative plan through every stage afterwards.",
      },
      {
        role: "Exercise physiologists",
        detail:
          "Our exercise physiologists support the movement and physical-activity side of your care. Exercise physiology also features in our structured programs — Reflect & Reset, for example, includes exercise physiologist appointments alongside dietitian sessions.",
      },
    ],
    note:
      "Our clinics are in Booragoon and Mandurah. Ask your GP whether a referral is right for you, and we will confirm any fees or rebates that apply before you book.",
  },
  outcomesNote:
    "The evidence is clear that bariatric surgery works best as part of a team approach, and nutrition is one of the strongest pillars of that team. Patients who stay connected to their dietitian tend to navigate the early stages more comfortably and hold onto their results over the longer term. That said, surgery and dietetic care are tools, not guarantees. Your outcome depends on the changes you make and sustain, and results genuinely vary between individuals. Our role is to give you the knowledge, the plan and the steady support to get the best result that is realistic for you.",
  faqs: [
    {
      question: "Why do I need a dietitian if the surgery does the work?",
      answer:
        "Surgery makes your stomach smaller, but it cannot teach you what or how to eat. A bariatric dietitian helps you get enough protein and nutrients from much smaller meals, avoid deficiencies, and build habits that keep your weight off for good. Patients who stay engaged with dietetic support tend to do better over the long term, though results vary between individuals.",
    },
    {
      question: "When do I start seeing the dietitian, before or after surgery?",
      answer:
        "Both. You usually meet your dietitian before surgery to prepare your body and follow a pre-operative eating plan, then continue with regular reviews afterwards as you move through the fluid, soft-food and solid stages and settle into your long-term way of eating.",
    },
    {
      question: "Can I eat normally again after weight-loss surgery?",
      answer:
        "You will eat differently rather than joylessly. After progressing through the early stages, most patients enjoy a wide variety of foods, just in much smaller portions, with protein first and daily vitamins. Your dietitian helps you find a way of eating that fits your life, including family meals and eating out.",
    },
    {
      question: "What if I struggle to hit my protein target or food gets stuck?",
      answer:
        "These are common, normal hurdles in the early months, and they are exactly what your dietitian is there for. They will adjust your plan, suggest protein sources that work for your new stomach, and coach you on eating slowly and chewing well so meals feel comfortable rather than stressful.",
    },
    {
      question: "Will I have to take supplements for the rest of my life?",
      answer:
        "Most bariatric patients need ongoing vitamin and mineral supplements, because surgery changes how much your body absorbs. Your dietitian works out exactly what you need, monitors it with regular blood tests through the practice, and adjusts it over time so you stay well nourished.",
    },
    {
      question: "Are your dietitians accredited?",
      answer:
        "Yes. All dietitians at Obesity Surgery WA hold Accredited Practising Dietitian (APD) status, which is the professional standard required for clinical practice in Australia. Our team includes Clare Renn, Megan Parker and Rhiannon Dick, all of whom specialise in bariatric and metabolic nutrition support.",
    },
    {
      question: "How many dietitians does Obesity Surgery WA have?",
      answer:
        "We have a dedicated team of bariatric dietitians, including Clare Renn, Megan Parker and Rhiannon Dick. Having a dedicated team means you can get timely appointments and consistent, specialised support at every stage of your journey.",
    },
    {
      question: "Does Medicare or private health cover dietitian visits?",
      answer:
        "Many consultations attract a Medicare rebate with a valid GP referral, and a chronic disease management plan may cover several allied health visits a year. Private health funds with appropriate cover often contribute too. We will give you clear information about fees and likely out-of-pocket costs before you commit.",
    },
    {
      question: "Where will I see the dietitian?",
      answer:
        "Consultations are held at our two clinics: Booragoon at the Garden City Specialist Centre on Marmion Street, and Mandurah at the WA Cardiology Centre on Minilya Parkway. To book or ask a question, call us on (08) 9332 0066.",
    },
  ],
  conversionHeadline:
    "Lasting results start with the right nutrition support. Let's set you up with the team to get there.",
};

export default function Page() {
  return <OswContentPage data={pageData} />;
}
