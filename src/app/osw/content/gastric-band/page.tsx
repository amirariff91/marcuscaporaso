import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Gastric Band Surgery Perth | Obesity Surgery WA Perth",
  description:
    "Gastric band surgery in Perth at Obesity Surgery WA. Adjustable laparoscopic band: how it works, who it suits, and how it compares to sleeve and bypass.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/gastric-band" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "gastric-band",
  pageTitle: "Gastric Band Surgery Perth",
  keyword: "gastric band surgery perth",
  metaDescription:
    "Gastric band surgery in Perth at Obesity Surgery WA. Adjustable laparoscopic band: how it works, who it suits, and how it compares to sleeve and bypass.",
  heroHeadline: "Gastric band surgery in Perth, explained openly and honestly",
  heroSubheadline:
    "If reversibility matters to you, the adjustable gastric band may be worth a conversation. It is the gentlest of the weight-loss operations and the only one that can be fully removed. It also gives less weight loss than a sleeve or bypass, and we will be straight with you about that from the start so you can make the choice that is genuinely right for you.",
  stats: [
    { label: "Expected weight loss", value: "40-50%", note: "Excess weight, clinical average, less than sleeve or bypass, and individual results vary" },
    { label: "Reversibility", value: "Fully reversible", note: "The band can be removed and your stomach returns to its normal shape" },
    { label: "Hospital stay", value: "1 night", note: "At St John of God Murdoch or Subiaco" },
    { label: "Adjustments", value: "Ongoing", note: "Regular clinic visits to tighten or loosen the band as you go" },
  ],
  whatIsTitle: "What exactly is a gastric band?",
  whatIsParagraphs: [
    "An adjustable gastric band, often called a lap band, is a soft silicone ring placed around the upper part of your stomach. It creates a small pouch above the band, so a small amount of food fills you up and you feel satisfied sooner. Nothing is cut, stapled or removed, which is what makes the band different from every other weight-loss operation we offer.",
    "The band is adjustable. A thin tube connects it to a small port that sits under the skin of your abdomen. By injecting or removing saline through that port during a quick clinic visit, your surgeon can tighten the band to slow your eating down, or loosen it if you are struggling. This is why the band needs ongoing follow-up rather than a single fix-and-forget operation.",
    "Because it does not change your gut hormones or reroute your intestine, the band works more slowly and gives a smaller average weight loss than a sleeve or bypass. The trade-off is that it is the least invasive option, requires no permanent change to your anatomy, and can be fully reversed if your circumstances change. For some patients that flexibility is exactly what they are looking for.",
  ],
  comparisonNote:
    "Compared to a gastric sleeve or bypass, the band gives less weight loss and slower results, and it relies on regular adjustment visits to work well. What it offers in return is reversibility and the gentlest operation of the three. It is not the best procedure for maximum weight loss, but for the right patient the ability to undo it has real value. Your surgeon will help you weigh that up honestly.",
  eligibilityBmi: "Often considered for patients with a BMI between 30 and 40, particularly where reversibility is a priority.",
  eligibilityNotes: [
    "It may suit patients who specifically want a reversible option and are comfortable with a more gradual rate of weight loss.",
    "It can be a reasonable choice at a lower BMI, in the 30 to 40 range, where a sleeve or bypass may be more than is needed.",
    "It is generally not recommended if you have significant acid reflux, as the band can make heartburn worse.",
    "It only works well if you are willing to attend regular adjustment appointments: the band is a partnership that needs ongoing follow-up, not a one-off procedure.",
    "Eligibility is always a clinical decision made with you. Your overall health, your goals and your readiness to commit to follow-up all matter, not just your BMI.",
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
        "You meet your surgeon to discuss your health, goals and whether a band is the right fit. We will be open about its limits as well as its benefits. There is no pressure to decide on the day.",
    },
    {
      title: "Pre-operative Assessment",
      description:
        "You will see our dietitians and physicians to prepare your body and plan your eating. Some patients follow a short pre-surgery plan to make the operation safer.",
    },
    {
      title: "Surgery",
      description:
        "The keyhole procedure is performed under general anaesthetic at St John of God Murdoch or Subiaco. The band is placed around the upper stomach and the port is positioned under the skin.",
    },
    {
      title: "Hospital Recovery",
      description:
        "Most patients stay one night so our team can manage your comfort, start you on fluids and check you are recovering well before you head home.",
    },
    {
      title: "Adjustments and Ongoing Support",
      description:
        "Over the following months you return for adjustment visits, where saline is added or removed to fine-tune the band. You will also have regular dietitian and surgeon follow-up to help the results last.",
    },
  ],
  benefitsTitle: "What a gastric band can offer",
  benefits: [
    "Fully reversible: the band can be removed and your stomach returns to its normal shape, which is unique among weight-loss operations.",
    "The least invasive option: nothing is cut, stapled or removed, and there is no rerouting of your intestine.",
    "Adjustable to suit you, so the band can be tightened or loosened over time as your needs change.",
    "A shorter hospital stay and generally quicker initial recovery than a sleeve or bypass.",
    "No long-term need for the vitamin and mineral supplements that a bypass requires, since absorption is not affected.",
    "Steady, gradual weight loss for patients who are comfortable with a slower pace. Clinical averages are around 40 to 50% of excess weight, though individual results vary.",
  ],
  risksTitle: "Being honest about the risks and limitations",
  risksParagraph:
    "We believe you deserve the full picture before you decide, and with the band that means being clear about its limitations as well as its risks. It gives less weight loss than other procedures, it works more slowly, and it depends on you attending regular adjustment visits. It also carries some risks that are specific to having a device in place. Most patients do well, but the points below are the ones we make sure every band patient understands, and your surgeon will talk through how they apply to you.",
  risksList: [
    "Band slippage, where the band moves out of position and may need a further procedure to correct.",
    "Erosion, where the band gradually works its way into the stomach wall over time and usually needs to be removed.",
    "Port problems, including infection, leaking or the port moving under the skin.",
    "The need for ongoing adjustment visits, without which the band may not give much weight loss at all.",
    "Less weight loss on average than a sleeve or bypass, and a slower rate of loss.",
    "General surgical risks such as bleeding, infection, blood clots or a reaction to anaesthetic.",
  ],
  costParagraph:
    "Most patients ask about cost early, and it is a fair question. The total depends on your private health cover, your surgeon and anaesthetist fees, your hospital stay and the ongoing adjustment visits the band requires. Gastric band procedures are listed under Medicare item number 31569. Medicare and most private health funds with appropriate hospital cover contribute towards bariatric surgery, and some patients access their superannuation through early release to help with out-of-pocket costs. Rather than quote a single figure that may not apply to you, we give every patient a clear, itemised written estimate before any decision is made, so there are no surprises.",
  surgeons: [
    {
      name: "Dr Harsha Chandraratna",
      credentials: "MBBS, FRACS, Bariatric & Upper GI Surgeon",
      specialty:
        "A Perth bariatric surgeon for over two decades, senior lecturer at the University of Notre Dame, and someone who has been through bariatric surgery himself, so he understands the decision from both sides of the table. He operates at St John of God Murdoch and Subiaco.",
    },
    {
      name: "Dr Stephen Watson",
      credentials: "MBBS, FRACS, Bariatric Surgeon",
      specialty:
        "An accredited bariatric surgeon performing gastric sleeve, bypass and band procedures at St John of God Murdoch and Subiaco.",
    },
  ],
  outcomesNote:
    "We want to be straight with you: the gastric band does not give the largest weight loss of the operations available, and results depend heavily on attending your adjustment visits and making changes alongside it. What the band offers instead is the gentlest, fully reversible option, which for some patients is exactly the right fit. Some people choose a band and do very well with it; others later decide to convert to a sleeve to achieve more weight loss, and that pathway is available if it is what you need. Outcomes vary between individuals, and our role is to give you honest advice, the right procedure for your situation, and the support to get the best result that is realistic for you.",
  faqs: [
    {
      question: "How much weight will I lose with a gastric band?",
      answer:
        "On average, patients lose around 40 to 50% of their excess weight, which is less than a sleeve or bypass and at a slower pace. These are clinical averages and your own result depends a great deal on attending your adjustment visits and the lifestyle changes you make. We will set realistic, personal goals with you rather than promise a number.",
    },
    {
      question: "Is the gastric band really reversible?",
      answer:
        "Yes, and this is its standout feature. Because nothing is cut, stapled or removed, the band can be taken out and your stomach returns to its normal shape. No other weight-loss operation we offer can be fully reversed in this way. That said, removing the band usually means losing its appetite-control effect, so it is a decision to make carefully with your surgeon.",
    },
    {
      question: "Why does the band need so many follow-up visits?",
      answer:
        "The band only works well when it is adjusted to the right tightness for you, and that changes over time. During short clinic visits your surgeon adds or removes saline through the port under your skin to fine-tune it. Skipping these visits is the most common reason a band underperforms, so the band genuinely is a partnership rather than a one-off operation.",
    },
    {
      question: "What happens if the band slips or erodes?",
      answer:
        "Band slippage means the band has moved out of position, and erosion means it has gradually worked into the stomach wall. Both are uncommon but real risks of having a device in place. Slippage can sometimes be corrected, while erosion usually means the band needs to be removed. We monitor for these at your follow-up visits and will explain the warning signs to watch for.",
    },
    {
      question: "Can I switch from a band to a sleeve or bypass later?",
      answer:
        "Yes. Some patients start with a band and later decide they want more weight loss, or they run into a problem with the band, and choose to convert to a gastric sleeve. This is a recognised pathway and something your surgeon can plan with you if it becomes the right step. It is one reason the band can be a reasonable starting point for some people.",
    },
    {
      question: "Is a gastric band better than a sleeve or bypass?",
      answer:
        "For most people aiming for maximum weight loss, a sleeve or bypass gives a stronger result. The band is not about being the most effective; it is about being the gentlest and the only reversible option. If reversibility and a less invasive operation matter more to you than the largest possible weight loss, the band may suit you. Your surgeon will help you weigh this up honestly at your consultation.",
    },
    {
      question: "Do I need a GP referral?",
      answer:
        "Yes. A referral from your GP gives you the higher referred Medicare rebate on your consultations — a lower rebate applies without one — and is the starting point for seeing one of our surgeons. If you are unsure how to arrange this, our team can talk you through it when you call.",
    },
  ],
  conversionHeadline:
    "Wondering whether a gastric band fits your situation? Let's talk it through honestly.",
};

export default function GastricBandPage() {
  return <OswContentPage data={pageData} />;
}
