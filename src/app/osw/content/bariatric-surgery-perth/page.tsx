import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Bariatric Surgery Perth | Obesity Surgery WA Perth",
  description: "Bariatric surgery in Perth at Obesity Surgery WA. Gastric sleeve, bypass, band and medical weight management from a dedicated Perth bariatric team.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/bariatric-surgery-perth" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "bariatric-surgery-perth",
  pageTitle: "Bariatric Surgery Perth",
  keyword: "bariatric surgery perth",
  metaDescription:
    "Bariatric surgery in Perth at Obesity Surgery WA. Gastric sleeve, bypass, band and medical weight management from a dedicated Perth bariatric team.",

  heroHeadline: "Bariatric surgery in Perth, with a team that stays with you",
  heroSubheadline:
    "If you have been carrying excess weight for years and feel like you have already tried everything, you are not alone, and you are not out of options. Obesity Surgery WA offers gastric sleeve, gastric bypass, mini bypass, gastric band, revision surgery and medical weight management, all delivered by a dedicated Perth bariatric team across St John of God Murdoch and Subiaco.",

  stats: [
    { label: "Surgery", value: "20+ yrs", note: "Perth bariatric experience across our surgical team" },
    { label: "Locations", value: "2", note: "SJOG Murdoch and Subiaco" },
    { label: "Dietitians", value: "APD", note: "Accredited Practising Dietitians supporting your long-term results" },
    { label: "Procedures", value: "4+", note: "Sleeve, bypass, mini bypass, band and revision" },
  ],

  whatIsTitle: "What is bariatric surgery?",
  whatIsParagraphs: [
    "Bariatric surgery, also called weight loss surgery, is a group of procedures that change how your stomach, and sometimes your small intestine, handle food. The goal is to help you feel full sooner, eat less without constant hunger, and in some procedures, change the way your body absorbs and processes what you eat. For many people living with severe obesity, it is a tool that makes sustained weight loss achievable when diet and exercise alone have not been enough.",
    "It is important to be honest about what surgery is and is not. Bariatric surgery is not a quick fix or a shortcut, and it does not work on its own. It is a medical intervention that gives you a real, lasting advantage, but the long-term result still depends on the changes you make alongside it: how you eat, how you move, and how well you stay connected to your aftercare team. Obesity is a chronic medical condition, not a failure of willpower, and surgery treats it as the medical problem it is.",
    "Most bariatric procedures today are performed using keyhole (laparoscopic) techniques, which means smaller incisions, less pain, and a quicker recovery than older open surgery. At Obesity Surgery WA, the choice of procedure is never one size fits all. Your surgeon will recommend an approach based on your weight, your health conditions, your eating patterns and what you want your life to look like afterwards.",
  ],
  comparisonNote:
    "The four main surgical options differ in how much weight people tend to lose, how reversible they are, and how they affect conditions like type 2 diabetes. Below is a plain overview of each, so you can walk into your consultation with a sense of what the conversation will cover.",

  eligibilityBmi:
    "Bariatric surgery is generally considered for adults with a BMI of 40 or above, or a BMI of 35 or above when an obesity-related health condition is also present. People with a BMI between 30 and 35 may be candidates in specific circumstances, particularly where type 2 diabetes is poorly controlled.",
  eligibilityNotes: [
    "BMI of 40 or above: surgery is generally an appropriate option to discuss, regardless of other conditions.",
    "BMI of 35 to 40 with a related condition such as type 2 diabetes, high blood pressure, sleep apnoea or joint disease: surgery is commonly considered.",
    "BMI of 30 to 35: surgery may be considered in select cases, often where diabetes is difficult to manage with medication alone. Your eligibility is assessed individually.",
    "You have made genuine attempts at weight loss through diet, exercise or medical means without lasting success. This is the reality for most people we see, and it is expected, not held against you.",
    "You are prepared to commit to long-term dietary changes, supplements where needed, and ongoing follow-up. The surgery is one part; the aftercare is what protects your result.",
    "Final eligibility is always determined after a full assessment with one of our surgeons and the wider team, including review of your medical history and any conditions that affect surgical risk.",
  ],

  howItWorksSteps: [
    {
      title: "Initial enquiry and GP referral",
      description:
        "Most patients start with a referral from their GP, which also helps with Medicare and private health considerations. You can begin the conversation with us first if you prefer; our team will guide you on the referral.",
    },
    {
      title: "Consultation with your surgeon",
      description:
        "You meet a surgeon to discuss your history, your goals and your health. This is where the right procedure for you, whether sleeve, bypass, band or a medical pathway, is talked through honestly, including what it can and cannot do.",
    },
    {
      title: "Assessment with the wider team",
      description:
        "Bariatric care is a team effort. You may see a physician, a dietitian, an exercise physiologist and other clinicians who help confirm that surgery is safe and appropriate, and who prepare you for the changes ahead.",
    },
    {
      title: "Pre-surgery preparation",
      description:
        "This often includes a specific pre-operative diet to shrink the liver and make surgery safer, along with practical guidance on what to expect on the day and during early recovery.",
    },
    {
      title: "Your procedure at SJOG Murdoch or Subiaco",
      description:
        "Surgery is performed laparoscopically in most cases, at St John of God Murdoch or Subiaco. Hospital stays are typically short, and your surgeon will explain your individual recovery plan.",
    },
    {
      title: "Long-term aftercare",
      description:
        "This is the part that matters most for lasting results. You stay connected to our dietitians, exercise physiologists and clinical team over the months and years that follow, with regular reviews, nutritional monitoring and support as your body and habits adjust.",
    },
  ],

  benefitsTitle: "The procedures we offer, and what to expect from each",
  benefits: [
    "Gastric sleeve (sleeve gastrectomy): the most common procedure we perform. A large portion of the stomach is removed, leaving a slim tube that holds less food and reduces hunger hormones. Many people lose around 60 to 70 percent of their excess weight, though individual results vary. It is straightforward, has no implant, and suits a wide range of patients.",
    "Gastric bypass (Roux-en-Y): both restricts how much you eat and changes how food is absorbed. It tends to produce greater weight loss, often around 70 to 80 percent of excess weight in many patients, with results varying by individual. It is frequently the preferred choice for people with type 2 diabetes, as it can have a strong positive effect on blood sugar control.",
    "Mini gastric bypass (one anastomosis bypass): a variation of the bypass with a single join, which can mean a technically simpler operation and shorter surgery time while still delivering substantial weight loss for many patients. Your surgeon will explain whether it suits your situation.",
    "Gastric band (adjustable band): the most reversible option, where an adjustable band is placed around the upper stomach. It involves no cutting or stapling of the stomach and can be removed or adjusted, but it generally produces the least weight loss of the surgical options and requires ongoing adjustments.",
    "Revision surgery: for patients who have had previous weight loss surgery, such as an older band, and need it converted, repaired or changed to a different procedure. Revision is more complex than first-time surgery and is assessed carefully on an individual basis.",
    "Medical weight management: surgery is not the only path. We also offer non-surgical options including GLP-1 medications and structured dietitian-led programs, which may suit people who do not want surgery, are not yet candidates, or want support before or instead of an operation.",
  ],

  risksTitle: "Risks and the honest realities",
  risksParagraph:
    "Every operation carries risk, and bariatric surgery is no exception. The good news is that for suitable candidates, modern keyhole techniques and experienced surgeons make these procedures safe for most people. We would rather you hear the realities clearly now than be surprised later, so here is a frank picture of what to weigh up.",
  risksList: [
    "General surgical risks such as bleeding, infection, blood clots and reaction to anaesthetic, as with any operation.",
    "Procedure-specific risks, including leaks at staple or join lines in sleeve and bypass surgery, or band slippage and erosion with gastric bands.",
    "Nutritional considerations: bypass procedures in particular can affect absorption of vitamins and minerals, which is why lifelong supplements and monitoring are part of the deal.",
    "Changes to eating that take real adjustment, including smaller portions, slower eating, and avoiding certain foods, especially in the early months.",
    "The need for genuine, lasting lifestyle change. Surgery makes weight loss achievable, but it does not remove the need for healthy habits, and weight regain is possible if those habits slip.",
    "The possibility that further surgery or revision is needed at some point, depending on the procedure and how your body responds.",
  ],

  costParagraph:
    "Cost is one of the first things on most people's minds, and it is a fair question. The total cost of bariatric surgery in Perth depends on your procedure, your private health cover, your level of excess (out of pocket) and the hospital and anaesthetic fees involved. Many patients with appropriate private health insurance find that a significant portion is covered, and some access their superannuation to help fund treatment. Our team will give you a clear, itemised breakdown before you commit to anything, with no pressure and no surprises.",

  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS",
      specialty:
        "Bariatric and Upper GI Surgeon who has practised as a Perth bariatric surgeon for over two decades. Dr Chandraratna underwent bariatric surgery himself, which gives him a deeply personal understanding of the journey his patients are on. He is a Fellow of the Royal Australasian College of Surgeons and a Senior Lecturer at the University of Notre Dame, and he operates at St John of God Murdoch and Subiaco.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS",
      specialty:
        "Accredited Bariatric Surgeon performing gastric sleeve, gastric bypass and gastric band procedures at St John of God Murdoch and Subiaco. Dr Watson works closely with the wider Obesity Surgery WA team to match each patient with the procedure best suited to their health and goals.",
    },
  ],

  outcomesNote:
    "Across the procedures we offer, many patients experience meaningful, lasting weight loss and real improvements in obesity-related conditions, including better control of type 2 diabetes, lower blood pressure, reduced sleep apnoea and relief from joint pain. Just as importantly, people often describe regaining energy, mobility and confidence in everyday life. These results are not automatic, they reflect the combination of the right procedure, a committed patient and a team that stays involved through the long aftercare that protects your outcome. Your individual results will depend on your starting point, your health and the changes you sustain over time.",

  faqs: [
    {
      question: "How do I know which bariatric procedure is right for me?",
      answer:
        "There is no single best procedure for everyone. The right choice depends on your BMI, your eating patterns, your health conditions, particularly whether you have type 2 diabetes, how much weight loss you are aiming for, and your own preferences around reversibility and lifestyle. Your surgeon will talk through the realistic pros and cons of the sleeve, bypass, mini bypass and band for your specific situation. The goal of your consultation is to land on the option that fits your life, not to push you toward any one operation.",
    },
    {
      question: "Is bariatric surgery available on Medicare or private health insurance?",
      answer:
        "Bariatric surgery is recognised under Medicare item numbers for eligible patients, and most procedures are performed in the private setting through hospitals such as St John of God Murdoch and Subiaco. The portion covered depends on your private health policy, your level of cover and any waiting periods. Our team will help you understand the Medicare items that apply, what your insurer is likely to cover, and your expected out of pocket cost before you make any decision.",
    },
    {
      question: "What is the difference between a gastric sleeve and a gastric bypass?",
      answer:
        "A gastric sleeve removes part of the stomach to create a smaller tube, reducing how much you can eat and lowering hunger hormones. It is the most common procedure we perform and has no rerouting of the intestine. A gastric bypass both restricts intake and changes how food is absorbed by rerouting part of the small intestine. Bypass tends to produce greater weight loss and is often preferred for people with type 2 diabetes because of its strong effect on blood sugar, but it carries a higher need for lifelong vitamin and mineral monitoring. Individual results vary, and your surgeon will help you weigh the trade-offs.",
    },
    {
      question: "Do I have to have surgery, or are there non-surgical options?",
      answer:
        "You do not have to have surgery. We offer medical weight management as a genuine alternative, including GLP-1 medications and structured programs led by our dietitians. These can suit people who do not want an operation, who are not yet surgical candidates, or who want to try a medical approach first. We will give you an honest view of what each path can realistically achieve so you can choose what is right for you.",
    },
    {
      question: "What does aftercare involve, and why does it matter so much?",
      answer:
        "Aftercare is where lasting results are won or lost, which is why we place so much emphasis on it. After surgery you stay connected to our team, including our specialist dietitians, with regular reviews over the months and years that follow. This covers your nutrition, vitamin and mineral levels, your eating habits as your stomach adjusts, and support if you hit challenges. Patients who stay engaged with aftercare tend to do better long term. Surgery is the starting point, not the finish line.",
    },
    {
      question: "Where will my surgery and appointments take place?",
      answer:
        "Our surgeons operate at St John of God Murdoch and St John of God Subiaco, both well-established private hospitals in Perth with strong surgical and recovery facilities. Consultations, assessments and aftercare appointments are coordinated through our Perth-based team, so you are looked after locally throughout your journey, from your first consultation through to long-term follow-up.",
    },
    {
      question: "I have had weight loss surgery before. Can it be revised?",
      answer:
        "Yes, revision surgery is part of what we do. People who had an older procedure such as a gastric band, or who have not had the result they hoped for, may be candidates for conversion to a different procedure, repair, or band removal. Revision surgery is more complex than first-time surgery and is assessed individually, taking into account your previous operation, your current health and your goals. Bring your prior surgical details to your consultation so your surgeon can advise you properly.",
    },
  ],

  conversionHeadline:
    "You have carried this long enough. Let's talk about what is actually possible for you.",
};

export default function BariatricSurgeryPerthPage() {
  return <OswContentPage data={pageData} />;
}
