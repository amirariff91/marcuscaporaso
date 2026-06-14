import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Gastric Bypass Surgery Perth | Obesity Surgery WA Perth",
  description:
    "Roux-en-Y gastric bypass in Perth with Dr Harsha Chandraratna. Often chosen for type 2 diabetes. Eligibility, recovery, risks and costs explained clearly.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/gastric-bypass-perth" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "gastric-bypass-perth",
  pageTitle: "Gastric Bypass Surgery Perth",
  keyword: "gastric bypass surgery perth",
  metaDescription:
    "Roux-en-Y gastric bypass in Perth with Dr Harsha Chandraratna. Often chosen for type 2 diabetes. Eligibility, recovery, risks and costs explained clearly.",
  heroHeadline: "Gastric bypass surgery in Perth, explained without the pressure",
  heroSubheadline:
    "If you have tried diet after diet and your weight keeps coming back, you are not failing. Your body is working against you. A Roux-en-Y gastric bypass is one of the most studied weight-loss procedures available, and it is often the option we discuss first when type 2 diabetes is part of the picture.",
  stats: [
    { label: "Expected weight loss", value: "70-80%", note: "Excess weight, clinical average. Results vary between individuals" },
    { label: "Time in surgery", value: "~120 min", note: "Performed under general anaesthetic, keyhole technique" },
    { label: "Hospital stay", value: "3-4 nights", note: "At St John of God Murdoch or Subiaco" },
    { label: "Return to most activity", value: "3-4 weeks", note: "Light duties often sooner, heavy lifting later" },
  ],
  whatIsTitle: "What exactly is a gastric bypass?",
  whatIsParagraphs: [
    "A Roux-en-Y gastric bypass changes the way your stomach and small intestine handle food. The surgeon creates a small stomach pouch about the size of an egg, then connects it directly to a lower section of the small intestine. Food now travels through a shorter path, so you feel full sooner and your body absorbs fewer kilojoules.",
    "It works in two ways at once. The smaller pouch limits how much you can comfortably eat, and the rerouting changes the gut hormones that control hunger, fullness and blood sugar. That hormonal shift is a big reason the bypass has such a strong evidence base for type 2 diabetes management in appropriate patients. Many patients see their blood sugar improve within days, often before they have lost much weight, though the extent and duration of improvement varies between individuals.",
    "The whole operation is done through several small keyhole incisions rather than one large cut. This usually means less pain after surgery, smaller scars and a quicker recovery than open surgery. Your surgeon will confirm during your consultation whether keyhole is suitable for you.",
  ],
  comparisonNote:
    "Compared to a gastric sleeve, the bypass tends to give slightly more weight loss and stronger results for type 2 diabetes and reflux, but it is a more involved operation with lifelong vitamin needs. Your surgeon will help you weigh up which fits your situation.",
  eligibilityBmi: "Generally suitable for patients with a BMI of 35+ or BMI 30+ with related health conditions.",
  eligibilityNotes: [
    "It is often recommended for people living with type 2 diabetes, as the hormonal changes can improve blood sugar control.",
    "It may suit patients with significant acid reflux, where a gastric sleeve might make symptoms worse.",
    "You should be ready to commit to lifelong dietary changes and daily vitamin and mineral supplements after surgery.",
    "Eligibility is always a clinical decision made with you. Your overall health, history of weight-loss attempts and personal goals all matter, not just your BMI.",
  ],
  howItWorksSteps: [
    {
      title: "GP Referral",
      description:
        "Ask your GP for a referral to our practice. A referral lets you claim Medicare rebates on your consultations and is the first step to seeing a surgeon.",
    },
    {
      title: "Orientation Consultation",
      description:
        "You meet your surgeon to discuss your health, goals and whether a bypass is the right fit. There is no pressure to decide on the day. Bring your questions.",
    },
    {
      title: "Pre-operative Assessment",
      description:
        "You will see our dietitians and physicians to prepare your body and plan your nutrition. Some patients follow a short pre-surgery eating plan to make the operation safer.",
    },
    {
      title: "Surgery",
      description:
        "The keyhole procedure takes around two hours under general anaesthetic, performed at St John of God Murdoch or Subiaco.",
    },
    {
      title: "Hospital Recovery",
      description:
        "You typically stay three to four nights so our team can manage your comfort, start you on fluids and make sure you are moving and recovering well.",
    },
    {
      title: "Ongoing Support",
      description:
        "Recovery is a journey, not a single day. You will have regular follow-ups with your surgeon and dietitian, plus structured support to help the results last.",
    },
  ],
  benefitsTitle: "What a gastric bypass can do for your health",
  benefits: [
    "Significant, durable weight loss: clinical averages show patients lose around 70-80% of their excess weight, though individual results vary.",
    "Strong improvement in type 2 diabetes in many patients, with some reducing or stopping medication after discussing it with their doctor (outcomes vary between individuals).",
    "Often relieves acid reflux and heartburn, unlike some other procedures that can worsen it.",
    "Improvement in conditions linked to excess weight, such as high blood pressure, sleep apnoea and joint pain.",
    "Long-term hormonal changes that reduce constant hunger, making healthier eating feel more achievable rather than a daily battle.",
  ],
  risksTitle: "Being honest about the risks",
  risksParagraph:
    "A gastric bypass is a safe, well-established operation in experienced hands, but no surgery is without risk and we believe you deserve the full picture before you decide. Most patients recover without any serious complications. The points below are the ones we make sure every patient understands, and your surgeon will talk through how they apply specifically to you.",
  risksList: [
    "General surgical risks such as bleeding, infection, blood clots or a reaction to anaesthetic.",
    "A small risk of a leak at one of the new connections, which is why we monitor you closely in hospital.",
    "Lifelong need for vitamin and mineral supplements, because the rerouting reduces how much your body absorbs.",
    "Dumping syndrome, which is feeling unwell after eating sugary or fatty foods, and which usually improves as you adjust your eating habits.",
  ],
  costParagraph:
    "Most patients ask about cost early, and it is a fair question. The total depends on your private health cover, your surgeon and anaesthetist fees, and your hospital stay. Medicare and most private health funds with appropriate hospital cover contribute towards bariatric surgery, and some patients access their superannuation through early release to help with out-of-pocket costs. Rather than quote a single figure that may not apply to you, we give every patient a clear, itemised written estimate before any decision is made, so there are no surprises.",
  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "Lead surgeon, lecturer at the University of Notre Dame, and someone who has been through bariatric surgery himself, so he understands the decision from both sides of the table.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "Experienced bariatric surgeon performing keyhole gastric bypass and other weight-loss procedures across our Perth hospitals.",
    },
  ],
  outcomesNote:
    "The clinical research on gastric bypass is among the strongest of any weight-loss procedure, with many patients maintaining substantial weight loss for years and seeing real improvements in conditions like type 2 diabetes. That said, surgery is a tool, not a magic switch. Your results depend on the changes you make alongside it: your eating, your activity and your follow-up. We are honest that outcomes vary between individuals, and our role is to give you the surgery, the support and the plan to get the best result that is realistic for you.",
  faqs: [
    {
      question: "How much weight will I lose after a gastric bypass?",
      answer:
        "On average, patients lose around 70-80% of their excess weight, with the fastest loss in the first six to twelve months. These are clinical averages and your own result will depend on your starting point and the lifestyle changes you make. We set realistic, personal goals with you rather than a one-size-fits-all number.",
    },
    {
      question: "Will I get loose skin?",
      answer:
        "Some loose skin is common after major weight loss, particularly if you have a lot to lose. How much varies a great deal between people and depends on age, skin elasticity and how quickly you lose weight. Many patients are comfortable with the result; for those who are not, skin-removal surgery is an option you can explore later once your weight is stable.",
    },
    {
      question: "How long will I need off work?",
      answer:
        "Most patients take around two to three weeks off, though it depends on your job. If you have a desk-based role you may return sooner, while physical work or heavy lifting usually needs three to four weeks or more. We will give you specific advice based on your recovery and what you do for a living.",
    },
    {
      question: "What if it doesn't work for me?",
      answer:
        "It is a real fear, and an understandable one after past disappointments. A bypass is a powerful tool, but it works best with ongoing support, which is exactly why our dietitians and surgeons follow you well beyond the operation. If your weight loss stalls, we look at what is happening and adjust the plan together rather than leaving you on your own.",
    },
    {
      question: "Can I eat normally after a gastric bypass?",
      answer:
        "You will eat differently, but not joylessly. For the first few weeks you progress from fluids to soft foods and then to solids. Long term, you eat smaller portions, focus on protein first, and take daily vitamins. Most patients still enjoy a wide range of foods. They simply eat less and feel full sooner.",
    },
    {
      question: "Is gastric bypass better than a gastric sleeve?",
      answer:
        "Neither is simply better; they suit different people. A bypass often gives slightly more weight loss and stronger results for type 2 diabetes and reflux, while a sleeve is a simpler operation with no rerouting. The right choice depends on your health and goals, and your surgeon will help you decide at your consultation.",
    },
    {
      question: "Do I need a GP referral?",
      answer:
        "Yes. A referral from your GP allows you to claim Medicare rebates on your consultations and is the starting point for seeing one of our surgeons. If you are unsure how to arrange this, our team can talk you through it when you call.",
    },
    {
      question: "Where is the surgery performed?",
      answer:
        "Surgery takes place at St John of God Murdoch or St John of God Subiaco, both well-equipped private hospitals. Our clinic consultations are held in Booragoon at the Garden City Specialist Centre and in Mandurah at the WA Cardiology Centre.",
    },
  ],
  conversionHeadline:
    "Ready to find out if a gastric bypass is right for you? Let's talk it through.",
};

export default function Page() {
  return <OswContentPage data={pageData} />;
}
