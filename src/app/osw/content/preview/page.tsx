import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

const sampleData: OswPageData = {
  slug: "gastric-sleeve-perth",
  pageTitle: "Gastric Sleeve Perth",
  keyword: "gastric sleeve perth",
  metaDescription: "Gastric sleeve surgery in Perth at Obesity Surgery WA — led by Dr Harsha Chandraratna, FRACS. Learn about eligibility, costs, and what to expect.",
  heroHeadline: "Gastric sleeve surgery in Perth — where results and safety travel together.",
  heroSubheadline: "The gastric sleeve is the most commonly performed bariatric procedure in Australia. Obesity Surgery WA has been performing laparoscopic sleeve gastrectomy in Perth for over a decade, with a dedicated team covering surgery, medical management, and long-term nutritional support.",
  stats: [
    { label: "Expected excess weight loss", value: "60–70%", note: "Clinical average; individual results vary" },
    { label: "Procedure time", value: "45–60 min", note: "Laparoscopic technique" },
    { label: "Hospital stay", value: "1–2 nights", note: "St John of God Murdoch or Subiaco" },
    { label: "Return to work", value: "2 weeks", note: "Desk work; physical labour 4–6 weeks" },
  ],
  whatIsTitle: "What is a gastric sleeve, and how does it work?",
  whatIsParagraphs: [
    "A sleeve gastrectomy removes approximately 75–80% of the stomach, reshaping what remains into a narrow, sleeve-shaped tube. The new stomach holds considerably less food and produces less ghrelin — the hormone that drives hunger — which is why patients typically feel full sooner and experience reduced appetite after recovery.",
    "Unlike a gastric bypass, the sleeve does not reroute the digestive tract. Food still passes through the stomach and into the small intestine in the normal sequence, which means absorption of nutrients and medications is largely unchanged. This makes sleeve gastrectomy a somewhat simpler procedure with a lower risk of certain nutritional deficiencies compared to bypass.",
    "The procedure is performed laparoscopically — through small incisions using a camera — under general anaesthetic. Most patients spend one to two nights in hospital before returning home to a liquid diet for the first few weeks, then progressing through pureed, soft, and normal foods over several months.",
  ],
  comparisonNote: "Comparing sleeve to bypass or band? Each procedure has different weight loss patterns, recovery times, and risk profiles. The OSW team can discuss which option makes the most sense for your specific health history and goals at your orientation consultation.",
  eligibilityBmi: "Generally suitable for patients with a BMI of 35 or above, or BMI 30–35 with weight-related health conditions such as Type 2 diabetes, hypertension, or sleep apnoea.",
  eligibilityNotes: [
    "BMI 35+ — typically eligible for surgical assessment",
    "BMI 30–35 with comorbidities such as Type 2 diabetes, hypertension, sleep apnoea, or severe joint problems",
    "BMI 27–30 — may be suitable for a medical weight management consultation at OSW",
    "No active untreated substance use or severe unmanaged mental health conditions",
    "Able to commit to long-term dietary and lifestyle changes post-surgery",
  ],
  howItWorksSteps: [
    { title: "GP Referral", description: "Most patients start with a referral from their GP to the OSW team. You can also self-refer by calling (08) 9332 0066. A referral lets Medicare contribute to your consultation costs." },
    { title: "Orientation Consultation", description: "Your first appointment with an OSW team member covers your health history, procedure options, costs, and what the journey looks like. This is a chance to ask questions — not a commitment to proceed." },
    { title: "Pre-operative Assessment", description: "If you decide to move forward, you will see the bariatric surgeon, physician, and dietitian for a thorough assessment. Blood tests, sometimes a sleep study or gastroscopy, and an anaesthetic review are common." },
    { title: "Surgery", description: "Laparoscopic sleeve gastrectomy is performed at St John of God Murdoch or St John of God Subiaco under general anaesthetic. The procedure typically takes 45 to 60 minutes." },
    { title: "Hospital Recovery", description: "Most patients spend one to two nights in hospital. Pain is managed with medication and most patients are mobile within hours of surgery. You will begin sips of clear fluids before leaving hospital." },
    { title: "Ongoing Support", description: "The OSW team includes bariatric physicians and a team of five dietitians who support you through the first year and beyond. Regular follow-up appointments track your progress and catch any nutritional concerns early." },
  ],
  benefitsTitle: "What patients typically experience after gastric sleeve surgery",
  benefits: [
    "Average loss of 60–70% of excess body weight over 12 to 18 months (individual results vary)",
    "Significant improvement or remission of Type 2 diabetes in many patients, often within weeks of surgery",
    "Reduction in blood pressure and cholesterol levels in patients with these conditions",
    "Improved sleep quality for patients with obesity-related sleep apnoea",
    "Reduced joint pain and improved mobility as weight decreases",
    "Improved energy levels and ability to be more physically active",
  ],
  risksTitle: "Risks and what to expect honestly",
  risksParagraph: "Like all surgical procedures, sleeve gastrectomy carries risks that your surgeon will discuss with you in detail at your assessment. Understanding these helps you make an informed decision and prepare appropriately.",
  risksList: [
    "Staple line leak — rare (around 1–3%) but the most serious short-term complication; managed in hospital",
    "Gastro-oesophageal reflux — some patients experience increased reflux post-sleeve; discuss if you have existing reflux",
    "Nutritional deficiencies — particularly B12, iron, and vitamin D; managed with supplements and dietitian support",
    "Hair thinning in the first few months — very common, usually temporary, related to rapid weight loss and protein intake",
    "Weight regain over time if dietary habits are not maintained — long-term follow-up with the OSW team is important",
  ],
  costParagraph: "The total cost of gastric sleeve surgery in Perth varies depending on surgeon fees, anaesthetist fees, hospital fees, and the extent of your private health insurance cover. Patients with private health insurance covering obesity surgery (item numbers 31575 (sleeve) and 31572 (bypass)) may have a significant portion of costs covered, subject to waiting periods and fund-specific limits. Medicare provides rebates on surgical and medical consultation fees. Some patients also access their superannuation on compassionate grounds to cover out-of-pocket costs. The OSW team will provide you with a detailed cost estimate before you commit to any procedure.",
  surgeons: [
    { name: "Dr Harsha Chandraratna", credentials: "MBBS, FRACS, Bariatric & Upper GI Surgeon", specialty: "Dr Chandraratna leads the OSW surgical team and has been performing bariatric surgery in Perth for over two decades. He underwent sleeve gastrectomy himself, giving him a firsthand understanding of the patient experience. He is a Fellow of the Royal Australasian College of Surgeons and a senior lecturer at Notre Dame University." },
    { name: "Dr Stephen Watson", credentials: "MBBS, FRACS, Bariatric Surgeon", specialty: "Dr Watson is an accredited bariatric surgeon performing gastric sleeve, bypass, and band procedures at St John of God Murdoch and Subiaco." },
  ],
  outcomesNote: "Patients treated by the Obesity Surgery WA team have achieved sustained weight loss across a range of bariatric procedures. Weight loss patterns vary — factors including starting BMI, adherence to post-operative dietary guidance, activity levels, and individual metabolic responses all influence outcomes. The OSW dietitian team works closely with patients in the first year to maximise long-term success and catch nutritional issues early. No specific outcome can be guaranteed — the team will give you realistic expectations based on your individual assessment.",
  faqs: [
    { question: "How long will I need off work after gastric sleeve surgery?", answer: "Most patients return to desk-based work within two weeks. If your job involves physical labour, heavy lifting, or prolonged standing, plan for four to six weeks. Your surgeon will advise based on your specific situation." },
    { question: "Will I be able to eat normally after a gastric sleeve?", answer: "You will eat smaller portions permanently, but the types of food you can eat are largely unrestricted after full recovery. In the first few months you progress from liquids to pureed foods to soft foods to normal textures. Most patients settle into a pattern of three small meals per day, sometimes with healthy snacks." },
    { question: "Can I have a gastric sleeve if I have had previous abdominal surgery?", answer: "Prior abdominal surgery does not automatically exclude you from sleeve gastrectomy, but it may affect the approach or complexity. Your surgeon will review your surgical history at assessment to determine if it's appropriate." },
    { question: "How much does gastric sleeve surgery cost in Perth?", answer: "The total cost varies depending on your private health insurance level, your fund's waiting periods, and individual surgical factors. The OSW team provides a detailed cost breakdown before any procedure. Medicare rebates apply to consultation and surgical fees. Visit our cost guide page for a full overview of what to expect." },
    { question: "Will I lose all my excess weight after sleeve surgery?", answer: "Clinical data shows patients lose an average of 60–70% of their excess weight. Individual results depend on many factors including starting weight, dietary adherence, activity levels, and whether underlying conditions like PCOS or thyroid issues are managed. Your OSW team will discuss realistic expectations at your consultation." },
    { question: "Is the gastric sleeve reversible?", answer: "No. The portion of the stomach that is removed does not grow back. This is why the assessment and decision-making process before surgery is thorough. However, if a patient later develops severe reflux or insufficient weight loss, conversion to a gastric bypass can be considered." },
    { question: "Do I need a GP referral to see the OSW team?", answer: "A GP referral is not strictly required for your first appointment, but it is strongly recommended because it enables Medicare rebates to apply to your consultation fees. It also helps the OSW team understand your medical background before your first appointment." },
  ],
  conversionHeadline: "Ready to understand your options? The first step is a conversation.",
};

export default function PreviewPage() {
  return <OswContentPage data={sampleData} />;
}
