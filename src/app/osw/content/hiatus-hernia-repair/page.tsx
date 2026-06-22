import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Hiatus Hernia Repair | Obesity Surgery WA Perth",
  description:
    "Hiatus hernia repair explained: symptoms, when surgery is needed, the laparoscopic approach, recovery and cost. Upper GI specialists at Obesity Surgery WA, Perth.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/hiatus-hernia-repair" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "hiatus-hernia-repair",
  pageTitle: "Hiatus Hernia Repair",
  keyword: "hiatus hernia surgery cost",
  metaDescription:
    "Hiatus hernia repair explained: symptoms, when surgery is needed, the laparoscopic approach, recovery and cost. Upper GI specialists at Obesity Surgery WA, Perth.",
  heroHeadline: "Hiatus hernia repair, for reflux and symptoms that will not settle",
  heroSubheadline:
    "When part of your stomach has pushed up through the diaphragm, it can cause persistent heartburn, regurgitation and chest discomfort that medication alone does not always control. A hiatus hernia repair aims to return the stomach to where it belongs and rebuild the valve that keeps acid down. As upper gastrointestinal surgeons, our job is to work out whether surgery is the right answer for you, and to explain it plainly so you can decide with confidence.",
  stats: [
    { label: "Common cause", value: "Reflux", note: "A hiatus hernia is a frequent driver of acid reflux and GORD" },
    { label: "Approach", value: "Laparoscopic", note: "Usually keyhole surgery, often with a fundoplication wrap" },
    { label: "Hospital stay", value: "1 to 2 nights", note: "Most patients go home within a day or two; recovery varies" },
    { label: "Where", value: "SJOG Murdoch & Subiaco", note: "Performed at St John of God private hospitals in Perth" },
  ],
  whatIsTitle: "What is a hiatus hernia, and what does repair involve?",
  whatIsParagraphs: [
    "A hiatus hernia happens when part of your stomach slides up through the hiatus, the small opening in the diaphragm where the oesophagus normally passes into the abdomen. Many small hiatus hernias cause no trouble at all and never need treatment. The problem arises when the hernia weakens the valve at the top of the stomach, allowing acid to wash back up into the oesophagus and causing reflux, also known as gastro-oesophageal reflux disease or GORD.",
    "A hiatus hernia repair is a surgical procedure that returns the stomach to its correct position below the diaphragm and tightens the widened opening so it cannot slip back up. In most cases the surgeon also performs a fundoplication, in which the top of the stomach is wrapped around the lower oesophagus to recreate a one-way valve. This combination aims to reduce reflux and relieve the symptoms it causes.",
    "The operation is almost always done laparoscopically, through several small keyhole incisions rather than one large cut. This generally means less pain, a shorter hospital stay and a quicker return to normal activity than open surgery. Larger or more complex hernias can be more demanding, and your surgeon will explain what your particular hernia involves before any decision is made.",
  ],
  comparisonNote:
    "Hiatus hernia and reflux often go hand in hand with bariatric surgery. A gastric sleeve can sometimes worsen reflux, and a hiatus hernia is occasionally found and repaired at the same time as weight-loss surgery. Because our surgeons are upper gastrointestinal specialists, they assess the whole picture rather than treating reflux and weight in isolation.",
  eligibilityBmi:
    "There is no BMI threshold for a hiatus hernia repair. This is a medically indicated upper GI operation, so the decision rests on your symptoms, your investigations and how well other treatments have worked, rather than on a number.",
  eligibilityNotes: [
    "You may be a candidate if you have troublesome reflux or GORD that has not settled despite medication such as proton pump inhibitors.",
    "Persistent regurgitation, where food or acid comes back up into the throat or mouth, is a common reason to consider surgery.",
    "A larger hiatus hernia, or one causing chest discomfort, difficulty swallowing or breathing problems, may warrant repair.",
    "Some people prefer surgery to staying on long-term reflux medication, and this is a reasonable conversation to have with your surgeon.",
    "Investigations such as an endoscopy, and sometimes pH or pressure studies, help confirm the diagnosis and guide whether surgery is suitable.",
    "Surgery is not right for everyone. If your surgeon believes medication or lifestyle changes are the better path for you, they will tell you honestly.",
  ],
  howItWorksSteps: [
    {
      title: "GP Referral",
      description:
        "Ask your GP for a referral to our practice. A referral lets you claim Medicare rebates on your consultations and is the first step to seeing an upper GI surgeon about your reflux or hiatus hernia.",
    },
    {
      title: "Assessment & Investigations",
      description:
        "Your surgeon reviews your symptoms and history. Investigations such as a gastroscopy, and sometimes pH or oesophageal pressure studies, confirm the hiatus hernia and how it is affecting you.",
    },
    {
      title: "Honest Consultation",
      description:
        "You meet your surgeon to discuss whether repair is the right choice. They will weigh surgery against continued medication and explain the likely benefits and risks for your particular situation.",
    },
    {
      title: "Preparing for Surgery",
      description:
        "If you decide to proceed, you receive clear pre-operative instructions, including fasting and which medications to adjust. Your surgeon and anaesthetist will go through anything specific to you.",
    },
    {
      title: "Laparoscopic Repair",
      description:
        "The hernia is repaired through small keyhole incisions, usually with a fundoplication to rebuild the anti-reflux valve. The procedure is performed at St John of God Murdoch or Subiaco under general anaesthetic.",
    },
    {
      title: "Recovery & Follow-up",
      description:
        "Most patients stay one to two nights and follow a soft or liquid diet for a few weeks while the wrap settles. You will have follow-up reviews so your surgeon can check your progress and answer questions.",
    },
  ],
  benefitsTitle: "What a hiatus hernia repair can offer",
  benefits: [
    "A reduction in acid reflux and heartburn for many people whose symptoms have not been controlled by medication.",
    "Relief from regurgitation, where food or acid rises back into the throat, which can disturb sleep and daily life.",
    "An alternative to staying on long-term reflux medication, which some patients prefer for their own reasons.",
    "Repair of the hernia itself, returning the stomach below the diaphragm and reducing the risk of it enlarging over time.",
    "An assessment by upper GI specialists who can address reflux and any related bariatric considerations together, not separately.",
  ],
  risksTitle: "Being honest about the risks",
  risksParagraph:
    "Hiatus hernia repair is a well-established and generally safe operation, but like any surgery it carries risks, and you deserve a clear picture before you decide. The fundoplication wrap can, in some people, cause temporary difficulty swallowing or a feeling of bloating and an inability to belch, which usually eases over the first weeks to months. As with any procedure there are general surgical risks, and occasionally a hernia can recur over time. None of this is said to alarm you, and most patients do well. Your surgeon will talk through exactly how these risks apply to your situation.",
  risksList: [
    "Temporary difficulty swallowing after surgery, as the wrap settles. This usually improves over the following weeks.",
    "Bloating or an inability to belch, sometimes called gas-bloat, which tends to ease with time and a gradual diet.",
    "General surgical risks such as bleeding, infection, blood clots or a reaction to the anaesthetic.",
    "A small chance the hiatus hernia or reflux returns over time, occasionally requiring further treatment.",
    "No guarantee of a complete cure. Surgery aims to reduce symptoms, but results vary between individuals and your surgeon will advise on realistic expectations.",
  ],
  costParagraph:
    "Cost is a fair thing to ask about early. The final figure depends on your private health cover, your surgeon and anaesthetist fees, the length of your hospital stay and whether any additional procedures are needed at the same time. Because a hiatus hernia repair is a medically indicated operation, Medicare and most private health funds with appropriate hospital cover contribute towards eligible cases. Rather than quote a single number that may not apply to you, we give every patient a clear, itemised written estimate before any decision is made, so you know where you stand.",
  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric & Upper GI Surgeon",
      specialty:
        "A Perth bariatric and upper gastrointestinal surgeon for over two decades and a senior lecturer at the University of Notre Dame, who has been through bariatric surgery himself. His upper GI expertise is directly relevant to hiatus hernia and reflux surgery.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "An accredited bariatric surgeon performing weight-loss and upper GI procedures at St John of God Murdoch and Subiaco, with the experience to assess reflux and hiatus hernia alongside any bariatric considerations.",
    },
  ],
  outcomesNote:
    "We will always be straight with you about what surgery can and cannot do. For many people a hiatus hernia repair significantly reduces reflux and improves day-to-day comfort, but it is not a guaranteed cure, and results vary between individuals. Some symptoms can persist, and a small number of hernias recur over time. The best outcomes come from the right diagnosis, the right operation and realistic expectations, and your surgeon will talk these through with you. Where we believe medication or other measures are the better path, we will tell you honestly rather than recommend surgery you may not need.",
  faqs: [
    {
      question: "What is a hiatus hernia and how do I know if I have one?",
      answer:
        "A hiatus hernia is when part of your stomach pushes up through the opening in the diaphragm where the oesophagus passes through. Small ones often cause no symptoms. When they do cause trouble, the usual signs are persistent heartburn or reflux, regurgitation of food or acid, and sometimes chest discomfort or difficulty swallowing. A gastroscopy is the most common way to confirm it, and your surgeon may arrange other tests to understand how it is affecting you.",
    },
    {
      question: "Do I need surgery, or can I manage a hiatus hernia with medication?",
      answer:
        "Many people manage well with lifestyle changes and reflux medication such as proton pump inhibitors, and surgery is not always necessary. Repair is usually considered when symptoms persist despite good medical treatment, when the hernia is large or causing complications, or when someone prefers not to stay on long-term medication. Your surgeon will weigh these factors with you and recommend surgery only if it is genuinely the better option.",
    },
    {
      question: "What does the operation actually involve?",
      answer:
        "A hiatus hernia repair is usually done laparoscopically, through several small keyhole incisions. The surgeon returns the stomach to its correct position below the diaphragm, tightens the widened opening, and in most cases wraps the top of the stomach around the lower oesophagus to rebuild an anti-reflux valve. This wrap is called a fundoplication. The operation is performed under general anaesthetic at St John of God Murdoch or Subiaco.",
    },
    {
      question: "What is recovery like after a hiatus hernia repair?",
      answer:
        "Most patients stay in hospital for one to two nights. Because of the wrap, you will usually follow a liquid then soft diet for a few weeks while everything settles, gradually returning to normal food as your surgeon advises. Some difficulty swallowing or bloating in the early weeks is common and tends to ease. Many people return to light activity within a couple of weeks, though recovery varies and you should follow your surgeon's specific guidance.",
    },
    {
      question: "How is a hiatus hernia related to weight-loss surgery?",
      answer:
        "The two often overlap. A hiatus hernia is a frequent cause of reflux, and reflux can be made worse by some bariatric procedures, particularly a gastric sleeve. A hiatus hernia is also sometimes found and repaired at the same time as weight-loss surgery. Because our surgeons are upper gastrointestinal specialists, they can assess reflux, hiatus hernia and any bariatric considerations together rather than treating them in isolation.",
    },
    {
      question: "How much does hiatus hernia surgery cost?",
      answer:
        "There is no single figure, because the total depends on your private health cover, the surgeon and anaesthetist fees, your length of stay and whether any other procedure is done at the same time. As a medically indicated operation, eligible cases attract a Medicare rebate and a contribution from most private health funds with appropriate hospital cover. We provide a clear, itemised written estimate before any decision, so you understand your likely out-of-pocket cost in advance.",
    },
    {
      question: "Where is the surgery performed, and do I need a GP referral?",
      answer:
        "Hiatus hernia repairs are performed at St John of God Murdoch or St John of God Subiaco, both well-equipped private hospitals in Perth. You will need a referral from your GP, which allows you to claim Medicare rebates on your consultations and is the starting point for seeing one of our surgeons. If you are unsure how to arrange the referral, our team can talk you through it when you call.",
    },
  ],
  conversionHeadline:
    "If reflux or a hiatus hernia is wearing you down, let's work out whether repair is the right answer for you.",
};

export default function HiatusHerniaRepairPage() {
  return <OswContentPage data={pageData} />;
}
