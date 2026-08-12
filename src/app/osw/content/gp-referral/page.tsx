import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "GP Referral Information | Obesity Surgery WA",
  description:
    "How to get a GP referral for bariatric surgery in Perth, how it affects your Medicare rebate, and how GPs can refer a patient to Obesity Surgery WA.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/gp-referral" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "gp-referral",
  pageTitle: "GP Referral Information",
  keyword: "gp referral bariatric surgery perth",
  metaDescription:
    "How to get a GP referral for bariatric surgery in Perth, how it affects your Medicare rebate, and how GPs can refer a patient to Obesity Surgery WA.",
  heroHeadline: "GP Referrals for Bariatric Surgery in Perth",
  heroSubheadline:
    "A GP referral is the normal first step toward weight loss surgery. With one, a higher Medicare rebate applies to your first specialist appointment. Whether you are a patient wondering how to get started or a GP looking to refer someone, this page explains exactly how a referral works and what to do next.",
  stats: [
    { label: "Medicare access", value: "Rebates", note: "A GP referral gives the higher Medicare rebate on the specialist consultation" },
    { label: "Referral validity", value: "12 months", note: "A standard referral lasts 12 months, counted from your first specialist appointment" },
    { label: "Hospitals", value: "2", note: "St John of God Murdoch & Subiaco" },
    { label: "Care team", value: "10+", note: "Surgeons, physicians and dietitians" },
  ],
  whatIsTitle: "What is a GP referral and why do you need one?",
  whatIsParagraphs: [
    "A GP referral is a letter from your general practitioner asking a specialist, in this case a bariatric surgeon at Obesity Surgery WA, to assess and treat you. It is the standard way the Australian health system connects you with specialist care, and for weight loss surgery it is almost always the first step.",
    "One reason a referral matters is Medicare. A valid referral means a Medicare rebate applies to your specialist consultation at the referred rate. Without one you can still be seen, but a lower rebate applies. Separately, most bariatric procedures have a Medicare item number — Medicare rebates and private hospital cover are separate systems, and the team can explain what applies to your circumstances.",
    "A referral also means your surgeon receives your relevant medical history before you meet. That lets the team understand your background, weight and health conditions in advance, so your first consultation is more useful and you are not starting from scratch. Getting a referral is routine for your GP and is the normal, expected pathway, not a hurdle.",
  ],
  comparisonNote:
    "A useful referral should include your current weight and height (or BMI), relevant medical history, any weight-related health conditions such as type 2 diabetes, sleep apnoea or high blood pressure, current medications, and previous weight loss attempts. A standard GP referral to a specialist is valid for 12 months, and that period starts at your first appointment with the specialist rather than the day your GP writes it. You can self-refer and be seen; without a GP referral, a lower Medicare rebate applies to the consultation.",
  eligibilityBmi:
    "Bariatric surgery is generally considered for patients with a BMI of 35+ or BMI 30+ with related health conditions. These are starting points only. Your surgeon confirms what is appropriate at your consultation.",
  eligibilityNotes: [
    "For patients: ask your GP for a referral to Obesity Surgery WA. Your GP can address it to the practice and we will arrange your consultation.",
    "A standard GP referral to a specialist is valid for 12 months, counted from your first appointment with the specialist, not from the date it is written.",
    "For GPs: a referral should note current BMI, relevant medical and weight history, comorbidities, current medications, and previous weight loss attempts.",
    "Consultations are available at our Booragoon rooms (Garden City Specialist Centre, 537 Marmion Street) and in Mandurah (WA Cardiology Centre, 30 Minilya Pkwy).",
    "To arrange a referral or ask how to send one, please phone our team on (08) 9332 0066.",
  ],
  howItWorksSteps: [
    {
      title: "GP Referral",
      description:
        "Ask your GP for a referral to Obesity Surgery WA. This gives you the higher Medicare rebate on your consultation, and lets us review your history before we meet.",
    },
    {
      title: "Orientation Consultation",
      description:
        "Meet your surgeon, talk through your weight and health history, and have your options explained in plain language with no pressure to decide on the day.",
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
  benefitsTitle: "Why going through a GP referral is worth it",
  benefits: [
    "A referral gives you the higher Medicare rebate on your specialist consultation, so it usually reduces what you pay.",
    "Your surgeon receives your relevant history in advance, so your first consultation is focused and informed rather than starting cold.",
    "Your GP stays in the loop, which supports coordinated care between your everyday doctor and the surgical team.",
    "It is the routine, expected pathway, so there is no special process for your GP to learn and no extra delay.",
    "A referral lets us match you to the right surgeon and the right pre-operative assessment for your situation.",
  ],
  risksTitle: "Being honest about what a referral does and does not mean",
  risksParagraph:
    "A referral is the start of a conversation, not a decision that surgery will go ahead. Being referred does not guarantee you are suitable for an operation, and no surgeon can promise a particular result. Your suitability is assessed clinically at your consultation, and surgery is only one tool that works alongside your own effort. We would rather be straight with you about that, and about the risks any surgery carries, than imply a referral is a green light.",
  risksList: [
    "A referral does not guarantee surgery; your surgeon assesses whether a procedure is clinically appropriate for you.",
    "All surgery carries risks including bleeding, infection, blood clots and reactions to anaesthetic.",
    "Long-term success depends on dietary and lifestyle changes; weight can return if these are not maintained.",
    "Vitamin and nutrient levels need lifelong monitoring after some procedures, which our team helps you manage.",
  ],
  costParagraph:
    "Costs depend on the procedure you and your surgeon decide on, your level of private health cover, and your individual circumstances. With a valid GP referral, the higher Medicare rebate applies to your consultations, and most bariatric procedures have a Medicare item number — though Medicare rebates and private hospital cover are separate systems. Patients with appropriate private hospital cover often pay an out-of-pocket gap rather than the full fee, and some people choose to access their superannuation early to fund surgery. We give you a clear written estimate before you commit to anything, so there are no surprises.",
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
      question: "Do I need a referral for bariatric surgery?",
      answer:
        "A valid GP referral means the higher Medicare rebate applies to your specialist consultations. You can be seen without one, and a lower rebate applies. A referral is the normal pathway and usually saves you money, so we recommend getting one from your GP before your first appointment.",
    },
    {
      question: "How do I get a referral for weight loss surgery?",
      answer:
        "Book an appointment with your GP and ask for a referral to Obesity Surgery WA. Your GP will discuss your weight and health history, and write a referral addressed to the practice. If you are not sure how to start the conversation, you can call our team on (08) 9332 0066 and we will explain what to ask for.",
    },
    {
      question: "How long is a GP referral valid?",
      answer:
        "A standard referral from a GP to a specialist is valid for 12 months, and that 12 months is counted from your first appointment with the specialist, not from the date your GP wrote it. So if some time passes between getting your referral and your consultation, the referral has not run out and you do not need a new one. Once you have been seen, the 12 months runs from that first appointment, and your GP can write a new one when it expires.",
    },
    {
      question: "Can I refer myself, or does it have to come from a GP?",
      answer:
        "You can contact us directly and arrange a consultation. Self-referred patients can still be assessed and can still claim a Medicare rebate on the consultation, just at a lower rate than with a referral. Because of this, most patients choose to get a GP referral first.",
    },
    {
      question: "What should my GP include in the referral?",
      answer:
        "A useful referral includes your current weight and height or BMI, relevant medical history, any weight-related conditions such as type 2 diabetes, sleep apnoea or high blood pressure, your current medications, and any previous weight loss attempts. This helps your surgeon prepare before you meet, but a brief referral is enough to get started.",
    },
    {
      question: "I am a GP. How do I refer a patient to Obesity Surgery WA?",
      answer:
        "Write a referral addressed to Obesity Surgery WA and have your patient contact us to book, or phone our team on (08) 9332 0066 to arrange the referral and discuss the best way to send it through. We will confirm the details with you and your patient and arrange a consultation at our Booragoon or Mandurah rooms.",
    },
    {
      question: "Does a referral guarantee I will have surgery?",
      answer:
        "No. A referral starts the process; it does not mean surgery will definitely go ahead. Your surgeon assesses whether a procedure is clinically appropriate for you at your consultation, taking into account your health, your history and your goals. The referral simply starts the assessment pathway, with the higher Medicare rebate applying along the way.",
    },
    {
      question: "Where will my consultation be, and which hospitals are used?",
      answer:
        "Consultations are held at our Booragoon rooms at Garden City Specialist Centre (537 Marmion Street) and in Mandurah at WA Cardiology Centre (30 Minilya Pkwy). Surgery is performed at St John of God Murdoch and St John of God Subiaco, two accredited private hospitals in Perth.",
    },
    {
      question: "How much does a referral cost?",
      answer:
        "That depends on your GP and whether your appointment is bulk billed. Writing a referral is a routine part of a GP consultation. The referral itself is what gives you the higher Medicare rebate on the specialist care that follows. We provide a clear written estimate of surgical costs before you commit to anything.",
    },
  ],
  conversionHeadline:
    "Have a referral, or not sure where to start? Either way, we are happy to help you take the next step.",
};

export default function Page() {
  return <OswContentPage data={pageData} />;
}
