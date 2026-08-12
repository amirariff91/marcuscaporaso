import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Bariatric Surgeons Perth | Obesity Surgery WA",
  description:
    "Meet the Perth bariatric surgeons at Obesity Surgery WA: Dr Harsha Chandraratna (FRACS) and Dr Stephen Watson, plus our physicians and dietitians.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/surgeons" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "surgeons",
  pageTitle: "Our Bariatric Surgeons",
  keyword: "best bariatric surgeon perth",
  metaDescription:
    "Meet the Perth bariatric surgeons at Obesity Surgery WA: Dr Harsha Chandraratna (FRACS) and Dr Stephen Watson, plus our physicians and dietitians.",
  heroHeadline: "Meet Our Perth Bariatric Surgeons",
  heroSubheadline:
    "Choosing a bariatric surgeon is one of the biggest decisions you will make for your health, and it is normal to want to know exactly who you are trusting. Our team is led by Dr Harsha Chandraratna, a Fellow of the Royal Australasian College of Surgeons who has personally been through bariatric surgery himself, so the care here comes from real understanding, not just a textbook.",
  stats: [
    { label: "Lead surgeon", value: "FRACS", note: "Fellow of the Royal Australasian College of Surgeons" },
    { label: "Hospitals", value: "2", note: "St John of God Murdoch & Subiaco" },
    { label: "Care team", value: "10+", note: "Surgeons, physicians and dietitians" },
    { label: "Clinic locations", value: "Perth + Mandurah", note: "Booragoon and Mandurah rooms" },
  ],
  whatIsTitle: "Who are the surgeons at Obesity Surgery WA?",
  whatIsParagraphs: [
    "Obesity Surgery WA is led by Dr Harsha Chandraratna, a bariatric surgeon and Fellow of the Royal Australasian College of Surgeons (FRACS). He lectures at the University of Notre Dame and operates at St John of God Murdoch and St John of God Subiaco, two of Perth's leading private hospitals. He has also been through bariatric surgery himself, which means he understands the experience from both sides of the consulting room.",
    "Working alongside him is Dr Stephen Watson, an experienced bariatric surgeon who shares the same careful, patient-first approach. Between them they cover gastric sleeve, gastric bypass and revisional surgery, and they take time to match the right procedure to your body and your goals rather than offering a one-size-fits-all answer.",
    "Surgery is only one part of long-term weight loss, so the surgeons are supported by a team of physicians and dietitians who stay involved before and long after your operation. You are not handed over to a stranger on the day of surgery and forgotten afterwards. The same team walks with you through the whole journey.",
  ],
  comparisonNote:
    "When you compare bariatric surgeons in Perth, look beyond a single number. The things that matter most are college fellowship (FRACS), accredited hospital privileges, the strength of the aftercare team, and whether the surgeon takes time to understand your situation.",
  eligibilityBmi:
    "Generally suitable for patients with a BMI of 35+ or BMI 30+ with related health conditions. Your surgeon will confirm what is right for you.",
  eligibilityNotes: [
    "You will see a fully qualified, FRACS-credentialled bariatric surgeon, not a trainee, for your assessment and your operation.",
    "Both surgeons hold operating privileges at St John of God Murdoch and St John of God Subiaco, accredited private hospitals.",
    "Consultations are available at our Booragoon rooms (Garden City Specialist Centre, 537 Marmion Street) and in Mandurah (WA Cardiology Centre, 30 Minilya Pkwy).",
    "A GP referral lets you access Medicare rebates and is the usual first step before meeting the team.",
  ],
  howItWorksSteps: [
    {
      title: "GP Referral",
      description:
        "Ask your GP for a referral to Obesity Surgery WA. This gives you the higher referred Medicare rebate on your consultation and lets us review your history before we meet.",
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
  benefitsTitle: "Why patients choose this team",
  benefits: [
    "A lead surgeon who is FRACS-credentialled, lectures at the University of Notre Dame, and has personal experience of bariatric surgery.",
    "Two experienced bariatric surgeons, so you are matched to the right procedure rather than the only one on offer.",
    "Operating privileges at St John of God Murdoch and Subiaco, with full hospital theatre and intensive-care backup if it is ever needed.",
    "An in-house team of physicians and dietitians who support you before surgery and for the long haul afterwards.",
    "Two clinic locations across Perth and Mandurah, making consultations and follow-up easier to fit around your life.",
  ],
  risksTitle: "Being honest about what surgery can and cannot do",
  risksParagraph:
    "No surgeon, however experienced, can promise a particular result. You should be cautious of anyone who does. Bariatric surgery is a powerful tool, but it works alongside your effort, not instead of it. Our role is to give you a carefully planned operation and the support to make the most of it, while being straight with you about the risks any surgery carries.",
  risksList: [
    "All surgery carries risks including bleeding, infection, blood clots and reactions to anaesthetic.",
    "Some patients experience loose skin after significant weight loss. This varies between individuals and can sometimes be addressed later.",
    "Long-term success depends on dietary and lifestyle changes; weight can return if these are not maintained.",
    "Vitamin and nutrient levels need lifelong monitoring after some procedures, which our team helps you manage.",
  ],
  costParagraph:
    "Costs depend on the procedure you and your surgeon decide on, your level of private health cover, and your individual circumstances. Most bariatric procedures attract a Medicare item number, and patients with appropriate private hospital cover often pay an out-of-pocket gap rather than the full fee. Some people choose to access their superannuation early to fund surgery. We give you a clear written estimate before you commit to anything, so there are no surprises.",
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
      question: "What makes a good bariatric surgeon in Perth?",
      answer:
        "Look for a surgeon who is a Fellow of the Royal Australasian College of Surgeons (FRACS), holds operating privileges at accredited hospitals, performs bariatric surgery regularly, and is backed by a proper aftercare team of dietitians and physicians. Just as important is how the surgeon treats you. A good one takes time to understand your situation and explains your options honestly rather than rushing you toward a decision.",
    },
    {
      question: "What qualifications should I look for in a bariatric surgeon?",
      answer:
        "In Australia, bariatric surgeons should hold Fellowship of the Royal Australasian College of Surgeons (FRACS) with specialist training in upper gastrointestinal or general surgery. The Bariatric Surgery Registry (BSR), run by Monash University, tracks outcomes data from participating surgeons. Registry contribution is a positive indicator of commitment to quality assurance. Ask any surgeon you consider whether they contribute to the BSR. Our surgeons hold FRACS and are experienced across the full range of bariatric procedures.",
    },
    {
      question: "Is Dr Chandraratna fully qualified and a member of RACS?",
      answer:
        "Yes. Dr Harsha Chandraratna holds an MBBS and is a Fellow of the Royal Australasian College of Surgeons (FRACS), the body that credentials surgeons across Australia and New Zealand. He also lectures at the University of Notre Dame and operates at St John of God Murdoch and Subiaco.",
    },
    {
      question: "Will I see the surgeon, or someone else?",
      answer:
        "You will meet and be assessed by your FRACS bariatric surgeon, and your surgeon performs your operation, not a trainee. Around that, our physicians and dietitians provide the wider assessment and support, so you have a full team rather than a single point of contact.",
    },
    {
      question: "Which hospitals do the surgeons operate at?",
      answer:
        "Our surgeons operate at St John of God Murdoch and St John of God Subiaco, two accredited private hospitals in Perth with full theatre and recovery facilities. Consultations are held at our Booragoon rooms at Garden City Specialist Centre (537 Marmion Street) and in Mandurah at WA Cardiology Centre (30 Minilya Pkwy).",
    },
    {
      question: "How do I choose between the two surgeons?",
      answer:
        "You do not have to. When you book, our team will arrange your consultation, and your surgeon will recommend the procedure best suited to your body, your health history and your goals. Both surgeons are FRACS-credentialled and follow the same careful, patient-first approach.",
    },
    {
      question: "Can I eat normally again after seeing a bariatric surgeon and having surgery?",
      answer:
        "After surgery your eating changes, especially in the first weeks while you heal, but most patients return to eating a wide range of foods, just in smaller, more satisfying amounts. Our dietitians guide you step by step from liquids back to solid food, and help you build eating habits you can keep for life. The goal is a healthier relationship with food, not endless restriction.",
    },
    {
      question: "What if the surgery does not work for me?",
      answer:
        "Weight-loss surgery is a tool, and results vary between individuals. Some patients regain weight over time, often when eating and activity habits drift. If that happens, our team works with you to understand why, and in some cases revisional surgery is an option. This is exactly why we stay involved long after your operation rather than treating surgery as the finish line.",
    },
    {
      question: "How long will I need off work after surgery?",
      answer:
        "Most patients take around two to four weeks off, depending on the procedure and how physical your job is. Office-based work is often possible sooner, while heavy lifting needs longer. Your surgeon will give you advice tailored to your situation and your recovery during your consultation.",
    },
  ],
  conversionHeadline:
    "Ready to meet the team and talk through your options without any pressure?",
};

export default function Page() {
  return <OswContentPage data={pageData} />;
}
