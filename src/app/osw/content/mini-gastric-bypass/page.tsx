import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Mini Gastric Bypass Perth | Obesity Surgery WA Perth",
  description:
    "Mini gastric bypass in Perth with Obesity Surgery WA. A simpler single-loop bypass for lasting weight loss. Understand how it differs from a standard bypass.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/mini-gastric-bypass" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "mini-gastric-bypass",
  pageTitle: "Mini Gastric Bypass",
  keyword: "mini gastric bypass perth",
  metaDescription:
    "Mini gastric bypass in Perth with Obesity Surgery WA. A simpler single-loop bypass for lasting weight loss. Understand how it differs from a standard bypass.",
  heroHeadline: "Mini gastric bypass in Perth — a simpler bypass for lasting weight loss",
  heroSubheadline:
    "If you have been weighing up weight loss surgery for a long time, you are not alone — most of our patients have tried many things first. The mini gastric bypass is a shorter, more straightforward bypass that can help you lose significant weight and improve your health.",
  stats: [
    { label: "Expected weight loss", value: "60–70%", note: "Of excess weight, clinical average — results vary between individuals" },
    { label: "Hospital stay", value: "1–2 nights", note: "St John of God Murdoch or Subiaco" },
    { label: "Time in surgery", value: "~1 hour", note: "Often shorter than a standard Roux-en-Y bypass" },
    { label: "Surgical joins", value: "1", note: "A single connection, compared with two in a standard bypass" },
  ],
  whatIsTitle: "What is a mini gastric bypass?",
  whatIsParagraphs: [
    "A mini gastric bypass — also called a single-anastomosis or one-anastomosis gastric bypass — is a keyhole weight loss operation. The surgeon creates a long, narrow stomach pouch and joins it to a loop of small intestine further down. This means you eat less and your body absorbs fewer of the calories from the food you do eat.",
    "The word \"mini\" refers to the technique, not the result. It is called mini because the surgery is simpler than a traditional bypass: it uses one surgical join instead of two, which usually makes the operation shorter and a little less complex. The weight loss it produces is substantial and similar to a standard bypass for most people.",
    "The whole operation is done through several small cuts using a laparoscope (a thin camera). There are no large wounds, which generally means less pain and a faster return to normal activity. Most patients are home within one to two days.",
  ],
  comparisonNote:
    "Compared with a standard Roux-en-Y gastric bypass, the mini bypass uses one join rather than two, which can mean a shorter operation and a simpler recovery, with comparable weight loss for most people.",
  eligibilityBmi:
    "Generally suitable for patients with a BMI of 35+ or BMI 30+ with related health conditions.",
  eligibilityNotes: [
    "You have a BMI of 35 or above, or 30 or above with conditions such as type 2 diabetes, sleep apnoea or high blood pressure.",
    "You have genuinely tried to lose weight through diet, exercise and lifestyle change without lasting success.",
    "You are ready to commit to long-term changes in how you eat and to lifelong vitamin and mineral supplements.",
    "You do not have a medical reason that makes surgery unsafe — we assess this carefully before recommending any procedure.",
  ],
  howItWorksSteps: [
    {
      title: "GP Referral",
      description:
        "Your GP sends us a referral. This lets you claim Medicare rebates on your consultations and links your care back to your regular doctor.",
    },
    {
      title: "Orientation Consultation",
      description:
        "You meet your surgeon to talk through your health, your weight history and your goals. We explain whether a mini gastric bypass suits you and answer your questions honestly.",
    },
    {
      title: "Pre-operative Assessment",
      description:
        "You see our dietitians and, where needed, our physicians. You may follow a pre-surgery diet to shrink the liver and make the operation safer.",
    },
    {
      title: "Surgery",
      description:
        "The procedure is done under general anaesthetic through keyhole incisions at St John of God Murdoch or Subiaco. It usually takes around an hour.",
    },
    {
      title: "Hospital Recovery",
      description:
        "Most patients stay one to two nights. You start on fluids and are supported by nursing staff before going home with clear instructions.",
    },
    {
      title: "Ongoing Support",
      description:
        "You return for regular reviews with your surgeon and dietitian. Long-term follow-up and blood tests help keep your weight loss and nutrition on track.",
    },
  ],
  benefitsTitle: "What a mini gastric bypass can do for your health",
  benefits: [
    "Significant, lasting weight loss — clinical averages of 60–70% of excess weight, though results vary between individuals.",
    "Strong improvement in type 2 diabetes for many patients, often reducing the need for medication.",
    "A simpler operation than a standard bypass, with a single join that usually means a shorter time under anaesthetic.",
    "Keyhole surgery with small incisions, which generally means less pain and a quicker return to daily life.",
    "Reduced strain on joints, heart and breathing as your weight comes down, and a lower risk of weight-related illness over time.",
  ],
  risksTitle: "The risks we will talk through with you honestly",
  risksParagraph:
    "Every operation carries risk, and we believe you should understand them clearly before you decide. The mini gastric bypass is generally safe in experienced hands, but it is real surgery. We will discuss your personal risk in detail at your consultation so your decision is fully informed.",
  risksList: [
    "Bleeding, infection or blood clots, as with any major operation.",
    "A leak at the surgical join, which is uncommon but may need further treatment.",
    "Bile reflux — irritation from bile reaching the stomach pouch — which can occasionally require revision surgery.",
    "Long-term vitamin and mineral deficiencies if supplements and blood tests are not kept up.",
  ],
  costParagraph:
    "Costs depend on your private health cover, your hospital and your individual situation, so we provide a clear written estimate before you commit to anything. Medicare and most private health funds with the relevant level of cover contribute to bariatric surgery, which reduces your out-of-pocket amount. Some patients use early release of superannuation to help fund treatment. Our team will walk you through the figures and the gaps so there are no surprises — ask us for a personalised quote rather than relying on a general number.",
  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "Lead bariatric surgeon, lecturer at the University of Notre Dame, with personal experience of bariatric surgery that shapes how he supports patients.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "Bariatric surgeon focused on safe keyhole weight loss surgery and long-term patient care across our Perth clinics.",
    },
  ],
  outcomesNote:
    "Most patients who follow our program lose a large amount of weight in the first year to eighteen months and see meaningful improvements in conditions such as diabetes, sleep apnoea and high blood pressure. Outcomes are not guaranteed and vary between individuals — your results depend on your starting health, how your body responds and the changes you make to eating and activity. We do not promise a particular figure; we commit to giving you realistic expectations and steady, long-term support to help you reach your goals.",
  faqs: [
    {
      question: "How is a mini gastric bypass different from a standard gastric bypass?",
      answer:
        "A standard Roux-en-Y bypass uses two surgical joins to reroute the bowel. The mini bypass uses one join and a single loop of intestine, which usually makes the operation shorter and simpler. Weight loss is similar for most people, but the right choice depends on your health and history, which we assess individually.",
    },
    {
      question: "Will I be able to eat normally after surgery?",
      answer:
        "Not straight away. You start on fluids, then move to soft foods and finally to regular textures over several weeks. In the long term you will eat smaller portions and need to chew well and eat slowly. Most patients adapt to a comfortable, satisfying way of eating, just in smaller amounts.",
    },
    {
      question: "How long will I need off work?",
      answer:
        "Many patients return to desk-based work in about two weeks. If your job is physically demanding, you may need three to four weeks. We give you a clear plan based on your recovery and your type of work.",
    },
    {
      question: "Will I have loose skin after losing weight?",
      answer:
        "Some loose skin is common after significant weight loss, particularly if you lose a large amount quickly. How much varies a lot between individuals and depends on your age, skin and how much weight you lose. Some patients later choose skin-removal surgery, but many manage well without it.",
    },
    {
      question: "What happens if the surgery does not work for me?",
      answer:
        "Surgery is a tool, not a cure on its own, and a small number of patients regain weight or do not lose as much as hoped. This is why our long-term follow-up matters. We review your progress, adjust your support, and where appropriate discuss revision options. You are not left to manage it alone.",
    },
    {
      question: "Do I need to take vitamins for the rest of my life?",
      answer:
        "Yes. Because the bypass changes how your body absorbs nutrients, you will need daily vitamin and mineral supplements and regular blood tests for life. This is straightforward once it becomes routine, and it protects your long-term health.",
    },
    {
      question: "How much weight will I lose?",
      answer:
        "Clinical averages are around 60 to 70 percent of excess weight, usually over the first twelve to eighteen months. Results vary between individuals and depend on your starting point and the changes you make. We will give you a realistic picture for your situation rather than a fixed promise.",
    },
    {
      question: "Where will my surgery and appointments be?",
      answer:
        "Surgery is performed at St John of God Murdoch or Subiaco. Consultations are at our Booragoon clinic in the Garden City Specialist Centre or our Mandurah clinic at the WA Cardiology Centre. You can reach us on (08) 9332 0066.",
    },
  ],
  conversionHeadline:
    "Ready to find out if a mini gastric bypass is right for you? Let's talk it through.",
};

export default function Page() {
  return <OswContentPage data={pageData} />;
}
