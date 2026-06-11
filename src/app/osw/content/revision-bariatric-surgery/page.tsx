import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Revision Bariatric Surgery Perth | Obesity Surgery WA Perth",
  description:
    "Revision bariatric surgery Perth — sleeve to bypass, band removal, bypass revision. Expert care at Obesity Surgery WA when your first procedure hasn't lasted.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/revision-bariatric-surgery" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "revision-bariatric-surgery",
  pageTitle: "Revision Bariatric Surgery Perth",
  keyword: "revision bariatric surgery perth",
  metaDescription:
    "Revision bariatric surgery Perth — sleeve to bypass, band removal, bypass revision. Expert care at Obesity Surgery WA when your first procedure hasn't lasted.",
  heroHeadline: "Revision bariatric surgery in Perth, when your first operation has not worked out",
  heroSubheadline:
    "If your weight has crept back, your reflux has become unbearable, or your band has caused problems, you are not back at square one and you are not a failure. Plenty of people need a second operation, and there is often a clear reason why the first one did not deliver. Our job is to understand what happened, and then tell you honestly whether revision surgery can help.",
  stats: [
    { label: "Common revisions", value: "3 types", note: "Sleeve to bypass, band to sleeve or bypass, bypass revision" },
    { label: "Complexity", value: "Higher", note: "Scar tissue from your first operation makes revision technically harder" },
    { label: "Assessment", value: "Thorough", note: "We work out why the first surgery did not last before we operate" },
    { label: "Where", value: "SJOG Murdoch & Subiaco", note: "Performed at St John of God private hospitals" },
  ],
  whatIsTitle: "What is revision bariatric surgery?",
  whatIsParagraphs: [
    "Revision bariatric surgery is a second weight-loss operation, performed after a first procedure has either stopped working or caused ongoing problems. It is not a single operation but a group of them, and the right one depends entirely on what you had done the first time and what has gone wrong since.",
    "The most common revisions we see fall into a few patterns. A gastric sleeve may be converted to a gastric bypass, usually because of severe acid reflux that the sleeve has made worse, or because weight has been regained. A gastric band that has slipped, eroded or simply stopped working is often removed and converted to a sleeve or a bypass. And in some cases an earlier gastric bypass needs adjusting because of weight regain or a complication.",
    "It is important to be clear from the start: revision surgery is technically more demanding than a first operation. The previous surgery leaves scar tissue and changes the anatomy, so the surgeon is working in territory that has already been altered. This is one of the reasons careful planning and an experienced surgeon matter so much.",
  ],
  comparisonNote:
    "Unlike a first-time procedure, revision surgery always begins with the question of why the first operation did not last. Two people with the same regained weight can need completely different revisions, so there is no standard path here — the assessment is the most important part.",
  eligibilityBmi:
    "There is no single BMI cut-off for revision surgery. Suitability depends far more on what your first operation was, what has gone wrong, and your overall health than on a number alone.",
  eligibilityNotes: [
    "You may be a candidate if your weight has returned after an earlier sleeve, band or bypass, and lifestyle changes alone have not held the loss.",
    "Severe acid reflux after a gastric sleeve is a common reason to consider conversion to a bypass.",
    "A band that has slipped, eroded, caused swallowing problems or simply failed is often a reason for revision.",
    "We look closely at why your first surgery did not deliver, because revision rarely succeeds if the underlying cause is not understood and addressed.",
    "A strong, realistic commitment to the post-operative diet, supplements and follow-up matters even more the second time around.",
    "Eligibility is a careful clinical decision made with you. Revision is not right for everyone, and we will tell you honestly if we do not think it is the best path.",
  ],
  howItWorksSteps: [
    {
      title: "GP Referral",
      description:
        "Ask your GP for a referral to our practice. A referral lets you claim Medicare rebates on your consultations and is the first step to seeing a surgeon about revision.",
    },
    {
      title: "Reviewing Your First Operation",
      description:
        "We gather the details of your original surgery, including any operation reports and imaging. Understanding exactly what was done is essential before we can plan a revision.",
    },
    {
      title: "Working Out What Went Wrong",
      description:
        "Through consultation and investigations such as imaging or endoscopy, your surgeon establishes why the first procedure did not last. This step shapes everything that follows.",
    },
    {
      title: "Honest Consultation",
      description:
        "You meet your surgeon to talk through realistic options and expectations. Revision is harder and carries more risk, and we make sure you understand that fully before any decision.",
    },
    {
      title: "Surgery",
      description:
        "If revision is the right path, the procedure is performed at St John of God Murdoch or Subiaco. It is often a longer, more complex operation than a first-time procedure.",
    },
    {
      title: "Ongoing Support",
      description:
        "Recovery and long-term success rely on follow-up. You will have regular reviews with your surgeon and dietitian, with structured support aimed at making this result the one that lasts.",
    },
  ],
  benefitsTitle: "What revision surgery can offer",
  benefits: [
    "A chance to address weight that has returned after an earlier procedure, when the underlying cause is understood and treatable.",
    "Relief from severe acid reflux, which is a frequent reason for converting a gastric sleeve to a bypass.",
    "Resolution of band-related problems such as slippage, erosion or swallowing difficulty by removing the band and converting to another procedure.",
    "Renewed improvement in weight-related conditions such as type 2 diabetes, high blood pressure and sleep apnoea, discussed with your doctor.",
    "A fresh, honest plan built around what did not work last time, rather than simply repeating the same approach and hoping for a different outcome.",
  ],
  risksTitle: "Being honest about the risks",
  risksParagraph:
    "We want to be direct with you, because revision surgery is harder and carries a higher risk than a first-time operation. The scar tissue from your previous surgery makes the procedure more technically difficult, and that means a greater chance of complications such as bleeding or a leak. This is not said to frighten you, but because you deserve a clear picture before you decide. Most patients recover well, and your surgeon will talk through exactly how these risks apply to your situation.",
  risksList: [
    "A higher risk of complications than first-time surgery, because scar tissue and altered anatomy make the operation more demanding.",
    "An increased risk of leaks at the surgical connections, which is why monitoring in hospital is especially careful.",
    "General surgical risks such as bleeding, infection, blood clots or a reaction to anaesthetic, which can be greater than the first time.",
    "Often a longer operation and a longer recovery than the original procedure.",
    "No guarantee of success. Revision can help, but it does not always achieve the result hoped for, particularly if the original cause is not addressed.",
  ],
  costParagraph:
    "Cost is a fair thing to ask about early, and revision surgery is often more involved than a first procedure, which can affect the total. The final figure depends on your private health cover, your surgeon and anaesthetist fees, and the length of your hospital stay. Medicare and most private health funds with appropriate hospital cover contribute towards eligible bariatric surgery, and some patients access their superannuation through early release to help with out-of-pocket costs. Rather than quote a single number that may not apply to your case, we give every patient a clear, itemised written estimate before any decision is made.",
  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric & Upper GI Surgeon",
      specialty:
        "A Perth bariatric surgeon for over two decades and a senior lecturer at the University of Notre Dame, who has been through bariatric surgery himself. His experience across the full range of procedures is particularly valuable for the complex anatomy of revision surgery.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "An accredited bariatric surgeon performing gastric sleeve, bypass and band procedures at St John of God Murdoch and Subiaco, with the breadth of experience that revision cases call for.",
    },
  ],
  outcomesNote:
    "We will always be straight with you about revision surgery. The research shows it can be effective, but outcomes are generally less predictable than first-time procedures, and success depends heavily on two things: understanding the real reason your first surgery did not last, and a strong commitment to the lifestyle, eating and follow-up that come after. Revision is a tool, not a guarantee, and results vary between individuals. Where we do not believe a revision is in your best interest, we will tell you, and we would rather have that honest conversation than set you up for another disappointment.",
  faqs: [
    {
      question: "Why didn't my first weight loss surgery work?",
      answer:
        "There is rarely a single answer, and finding the real reason is the whole point of our assessment. Sometimes the anatomy changed over time, such as a stretched pouch or a slipped band. Sometimes a procedure was never the best fit for that person. And sometimes the support and follow-up after surgery were not there. We do not assume it was your fault, and we work out together what actually happened before talking about a revision.",
    },
    {
      question: "I had a gastric sleeve but my reflux is unbearable. Can revision help?",
      answer:
        "Quite possibly. Severe acid reflux after a gastric sleeve is one of the most common reasons we convert a sleeve to a gastric bypass, because the bypass anatomy tends to relieve reflux rather than worsen it. Your surgeon will assess your symptoms, usually with investigations such as an endoscopy, before recommending this. It is a frequent and well-understood revision.",
    },
    {
      question: "My gastric band has caused problems. What are my options?",
      answer:
        "Bands can slip, erode, cause swallowing difficulties or simply stop working over time. In these cases the band is usually removed, and many patients then convert to a gastric sleeve or a gastric bypass to continue their weight-loss journey. Whether this happens in one operation or two depends on your individual situation, which your surgeon will explain at your consultation.",
    },
    {
      question: "Is revision surgery riskier than my first operation?",
      answer:
        "Yes, and we will not pretend otherwise. The scar tissue and altered anatomy from your first surgery make a revision more technically demanding, which raises the risk of complications such as bleeding or a leak, and often means a longer operation. Most patients still recover well, but you deserve to know this clearly, and it is one reason an experienced surgeon matters so much for revision.",
    },
    {
      question: "Will revision surgery guarantee I lose the weight this time?",
      answer:
        "No surgery can be guaranteed, and that is especially true of revision. It can be effective when the original cause is understood and addressed and when you are committed to the changes that come afterwards, but outcomes are less predictable than first-time surgery and individual results vary. We would rather give you a realistic picture than an empty promise, so we will be honest about what we think it can and cannot achieve for you.",
    },
    {
      question: "Do I need the details of my original surgery?",
      answer:
        "It helps enormously. Knowing exactly what was done the first time, ideally through your original operation report and any imaging, lets your surgeon plan a safe and sensible revision. If you do not have these records, do not worry. Our team can help track down what is needed, and investigations during your assessment can fill in many of the gaps.",
    },
    {
      question: "Where is revision surgery performed, and do I need a GP referral?",
      answer:
        "Revision procedures are performed at St John of God Murdoch or St John of God Subiaco, both well-equipped private hospitals. You will need a referral from your GP, which allows you to claim Medicare rebates on your consultations and is the starting point for seeing one of our surgeons. If you are unsure how to arrange the referral, our team can talk you through it when you call.",
    },
  ],
  conversionHeadline:
    "If your first surgery has not worked out, let's understand why together and talk through your options honestly.",
};

export default function RevisionBariatricSurgeryPage() {
  return <OswContentPage data={pageData} />;
}
