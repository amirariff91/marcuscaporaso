import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Book a Bariatric Consultation Perth | Obesity Surgery WA",
  description: "Book your bariatric consultation at Obesity Surgery WA Perth. Phone or online. Our team will help you understand your options with no pressure to decide.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/book-consultation" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "book-consultation",
  pageTitle: "Book a Bariatric Consultation in Perth",
  keyword: "bariatric consultation perth",
  metaDescription:
    "Book your bariatric consultation at Obesity Surgery WA Perth. Phone or online. Our team will help you understand your options with no pressure to decide.",

  heroHeadline: "Book a bariatric consultation in Perth",
  heroSubheadline:
    "Thinking about weight loss surgery is a big step, and reaching out can feel like the hardest part. A consultation is simply a conversation: a chance to ask your questions, understand your options, and meet the people who would care for you. You are not agreeing to surgery by booking. You are just getting clear information so you can decide what is right for you, in your own time.",

  stats: [
    { label: "Phone", value: "(08) 9332 0066", note: "Speak to a real person, Perth-based team" },
    { label: "Consult length", value: "30-60 min", note: "An unhurried orientation appointment" },
    { label: "Locations", value: "Booragoon & Mandurah", note: "Two Perth clinics to choose from" },
    { label: "Obligation", value: "None", note: "Booking is not committing to surgery" },
  ],

  whatIsTitle: "What happens at a consultation",
  whatIsParagraphs: [
    "Your first appointment is an orientation consultation that usually runs between 30 and 60 minutes. It is a relaxed, no-pressure conversation. We will talk through your health history, what has and has not worked for you in the past, and what you are hoping for. There are no judgements here, only people who do this every day and want to help.",
    "You will have time to ask anything you like. We will explain the different procedures, walk through what recovery and aftercare look like, and answer questions about costs and funding openly, so there are no surprises later. You will also meet members of the team who would support you, including the clinical staff who handle the day-to-day care, before you make any decision at all.",
    "Booking a consultation does not mean you are going ahead with surgery. Many people come in simply to learn more and leave with the information they needed, whether or not surgery turns out to be the right path for them. You stay in control throughout, at every step.",
  ],
  comparisonNote:
    "A GP referral is recommended but not required to book. Having a referral means the higher referred Medicare rebate applies to the consultation — without one a lower rebate still applies — and it helps your GP stay involved in your care. If you do not have one yet, that is completely fine: you can still book, and we can talk you through referrals at your appointment or point you to our GP referral page.",

  eligibilityBmi:
    "There is no minimum or maximum you need to meet before booking. A consultation is the right starting point for anyone considering weight loss surgery, even if you are not sure it is for you yet.",
  eligibilityNotes: [
    "You are considering weight loss surgery and want honest, clear information before deciding anything.",
    "You have tried other approaches to managing your weight and want to understand whether surgery could help.",
    "You have questions about cost, recovery, time off work, or what life looks like afterwards.",
    "You have a referral from your GP, or you would like to book first and sort the referral out later.",
    "A family member or friend is considering surgery and you want to come along to support them and ask questions together.",
  ],

  howItWorksSteps: [
    {
      title: "Get in touch",
      description:
        "Call us on (08) 9332 0066 or book online. Our Perth-based team will help you find an appointment time that suits you, at either our Booragoon or Mandurah clinic. There is no pressure on the phone, just a friendly conversation to get you booked in.",
    },
    {
      title: "Confirmation call",
      description:
        "After you book, our team will give you a confirmation call. We will confirm your appointment details, let you know what to bring, and answer any quick questions you have before the day. If anything changes, you can reach us easily to reschedule.",
    },
    {
      title: "Your consultation",
      description:
        "At your 30 to 60 minute appointment you will talk through your situation, learn about your options, discuss costs openly, and meet the team. There is no obligation and no rush to decide anything on the day.",
    },
    {
      title: "Decide in your own time",
      description:
        "After the consultation, you take the information home and think it over. If you want to move forward, we will guide you through the next steps. If you decide it is not the right time, that is genuinely okay. You remain in control of the decision throughout.",
    },
  ],

  benefitsTitle: "Why people find the consultation helpful",
  benefits: [
    "You get straight answers from people who do this work every day, instead of piecing things together from the internet.",
    "You can ask the questions that have been worrying you privately, in a calm setting where nothing is off the table.",
    "Costs and funding are discussed openly during the consultation, so you understand the financial picture before committing to anything.",
    "You meet the team who would care for you, which makes a real difference to how comfortable and supported you feel.",
    "You leave with clarity, whether that means a plan to move forward or simply the confidence that you explored your options properly.",
  ],

  risksTitle: "What to bring and how to prepare",
  risksParagraph:
    "There is nothing you must bring to book or attend, and you will not be turned away if you arrive without paperwork. That said, a few things make the consultation more useful, because they help us give you accurate, tailored information rather than general answers.",
  risksList: [
    "Your GP referral letter, if you have one. This is recommended but not required; with one, the higher referred Medicare rebate applies to the consultation, and a lower rebate applies without one.",
    "A list of any medications you currently take, including doses where you know them.",
    "Any prior test results or relevant medical reports you already have on hand, such as recent blood tests or scans.",
    "A list of your own questions. It is easy to forget things in the moment, so jotting them down beforehand helps.",
    "A support person, if you would like one. You are welcome to bring a partner, family member, or friend to the appointment.",
  ],

  costParagraph:
    "We know cost is one of the biggest unknowns, and we will discuss it openly with you during your consultation rather than leaving you guessing. The total depends on the procedure, your private health cover, and your individual circumstances. If you have a GP referral, the higher referred Medicare rebate applies to the consultation itself, and a lower rebate applies without one. We will walk you through the full picture, including how private health insurance, Medicare, and other funding options fit together, so you can make an informed decision without surprises.",

  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric & Upper GI Surgeon",
      specialty:
        "A Perth bariatric surgeon for over two decades, Dr Chandraratna is a Fellow of the Royal Australasian College of Surgeons and a senior lecturer at Notre Dame University. He underwent bariatric surgery himself, which gives him a personal understanding of what patients go through. He operates at St John of God Murdoch and Subiaco.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "Dr Watson is an accredited bariatric surgeon performing gastric sleeve, bypass, and band procedures at St John of God Murdoch and Subiaco. He is a Fellow of the Royal Australasian College of Surgeons.",
    },
  ],

  outcomesNote:
    "Patients often tell us the consultation was far less daunting than they expected, and that finally getting clear, honest answers took a weight off their mind regardless of what they decided next. Many describe relief at being listened to without judgement, and at understanding their options properly for the first time. What happens after a consultation is different for everyone, and there is no single path that is right for all people.",

  faqs: [
    {
      question: "Does booking a consultation mean I am committing to surgery?",
      answer:
        "No. A consultation is a conversation, not a commitment. You are simply gathering information so you can decide what is right for you. Plenty of people come in to learn more and take their time deciding, and some decide surgery is not for them. You stay in control of the decision the entire way through.",
    },
    {
      question: "Do I need a GP referral before I can book?",
      answer:
        "A referral is recommended but not required to book a consultation. If you have one, the higher referred Medicare rebate applies to the appointment — a lower rebate applies without one — and it helps keep your GP involved in your care. If you do not have a referral yet, you can still book, and we can talk you through how to get one. Our GP referral page has more detail if you would like it.",
    },
    {
      question: "Where are your clinics and how do I get there?",
      answer:
        "We have two Perth locations. Our Booragoon clinic is at the Garden City Specialist Centre, 537 Marmion Street, Booragoon WA 6154. Our Mandurah clinic is at the WA Cardiology Centre, 30 Minilya Parkway, Mandurah. When you book, our team will confirm which location suits you best and give you directions.",
    },
    {
      question: "What actually happens during the appointment?",
      answer:
        "Your consultation runs around 30 to 60 minutes. We talk through your health history and what you are hoping for, explain the different procedures and what recovery looks like, discuss costs openly, and answer your questions. You also meet members of the team who would care for you. There is no obligation and no pressure to decide anything on the day.",
    },
    {
      question: "What should I bring to my consultation?",
      answer:
        "Nothing is essential, but a few things help us give you tailored advice: your GP referral letter if you have one, a list of any medications you take, and any prior test results you already have. It also helps to write down your own questions beforehand so you do not forget anything. You are welcome to bring a support person too.",
    },
    {
      question: "Will I be pressured to book surgery on the day?",
      answer:
        "No. That is not how we work. Our role is to give you clear, honest information and answer your questions, then let you take it home and think it over in your own time. If you want to move forward, we will guide you through the next steps. If you decide it is not the right time, that is genuinely okay.",
    },
    {
      question: "What happens after I book?",
      answer:
        "Our Perth-based team will give you a confirmation call. We will confirm your appointment details, let you know what to bring, and answer any quick questions before the day. If you need to change your appointment, you can reach us easily to reschedule. You can also call us any time on (08) 9332 0066.",
    },
  ],

  conversionHeadline:
    "Take the first step, with no pressure to take the next one. Call (08) 9332 0066 or book online, and let us help you understand your options.",
};

export default function BookConsultationPage() {
  return <OswContentPage data={pageData} />;
}
