import type { Metadata } from "next";
import { OswContentPage, type OswPageData } from "../../../../components/osw/ContentPageTemplate";

export const metadata: Metadata = {
  title: "Hospitals & Clinic Locations | Obesity Surgery WA",
  description:
    "Where Obesity Surgery WA operates and consults: surgery at St John of God Murdoch and Subiaco, with consulting rooms in Booragoon (Perth) and Mandurah.",
  alternates: { canonical: "https://www.obesitysurgerywa.com.au/hospitals-locations" },
  robots: { index: false, follow: false },
};

const pageData: OswPageData = {
  slug: "hospitals-locations",
  pageTitle: "Hospitals & Clinic Locations",
  keyword: "bariatric surgery hospital perth",
  metaDescription:
    "Where Obesity Surgery WA operates and consults: surgery at St John of God Murdoch and Subiaco, with consulting rooms in Booragoon (Perth) and Mandurah.",
  heroHeadline: "Where We Operate and Where to See Us",
  heroSubheadline:
    "Knowing where your surgery will happen, and where you will be seen before and after, is a reasonable thing to want settled early. Obesity Surgery WA performs surgery at two accredited private hospitals in Perth, St John of God Murdoch and St John of God Subiaco, and consults from rooms in Booragoon and Mandurah so you can be seen closer to home.",
  stats: [
    { label: "Surgical hospitals", value: "2", note: "St John of God Murdoch & Subiaco" },
    { label: "Consulting locations", value: "Perth + Mandurah", note: "Booragoon and Mandurah rooms" },
    { label: "Hospital type", value: "Private", note: "Accredited private hospitals" },
    { label: "Phone", value: "(08) 9332 0066", note: "One number for all locations" },
  ],
  whatIsTitle: "Where Obesity Surgery WA operates and consults",
  whatIsParagraphs: [
    "Surgery is performed at St John of God Murdoch and St John of God Subiaco. Both are accredited private hospitals in Perth with full operating theatres, recovery wards and intensive-care backup on site. Which hospital your procedure is booked at depends on your surgeon's operating lists and your circumstances; your surgeon and our team confirm the location with you well before the day.",
    "Most of your appointments, before and after surgery, happen in our consulting rooms rather than at the hospital. We consult from Booragoon at the Garden City Specialist Centre, 537 Marmion Street, which is our main Perth rooms. We also hold consultations in Mandurah at the WA Cardiology Centre, 30 Minilya Pkwy, so patients south of the city do not have to travel into Perth for every visit.",
    "It helps to think of it as two kinds of location. The consulting rooms in Booragoon and Mandurah are where you meet your surgeon, have your assessment, and return for follow-up. The hospitals at Murdoch and Subiaco are where the operation itself takes place and where you recover in the days afterwards. One phone number, (08) 9332 0066, covers all of them.",
  ],
  comparisonNote:
    "When you are weighing up where to have surgery, the things that matter most are whether it is an accredited private hospital, whether there is a full operating theatre and intensive-care backup on the same site, and how easily you can get to your follow-up appointments. Murdoch and Subiaco are both accredited private hospitals with that backup; consulting in Booragoon or Mandurah keeps your routine visits close to home.",
  eligibilityNotes: [
    "A GP referral is the usual first step and gives you the higher referred Medicare rebate on your consultation before you meet the team.",
    "Consultations are held in Booragoon (Garden City Specialist Centre, 537 Marmion Street) and Mandurah (WA Cardiology Centre, 30 Minilya Pkwy), not at the hospital.",
    "Surgery and your in-hospital recovery take place at St John of God Murdoch or St John of God Subiaco, both accredited private hospitals.",
    "Both hospitals are private, so appropriate private hospital cover (or a self-funded arrangement) is relevant; our team explains your options before anything is booked.",
    "You can ask to be seen at whichever consulting location suits you; let our team know when you call on (08) 9332 0066.",
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
        "Meet your surgeon at our Booragoon or Mandurah rooms, talk through your weight and health history, and have your options explained in plain language with no pressure to decide on the day.",
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
        "You return to our Booragoon or Mandurah rooms for follow-up, where our dietitians and physicians stay involved for the long term, helping you protect your results year after year.",
    },
  ],
  benefitsTitle: "Why these locations work for patients",
  benefits: [
    "Surgery at St John of God Murdoch and Subiaco, two accredited private hospitals with full theatre, recovery and intensive-care backup on site.",
    "Two consulting locations across Perth and Mandurah, so routine appointments and follow-up are easier to fit around work and family.",
    "Patients south of Perth can be seen in Mandurah rather than travelling into the city for every visit.",
    "Our Booragoon rooms sit within the Garden City Specialist Centre, a dedicated specialist building rather than a busy general clinic.",
    "One phone number, (08) 9332 0066, handles bookings and questions across every location, so you are never bounced between numbers.",
  ],
  risksTitle: "Being honest about what surgery involves",
  risksParagraph:
    "Choosing an accredited private hospital with full theatre and intensive-care backup is part of having surgery done carefully, but no hospital or surgeon can remove the risks that surgery carries. We would rather be straight with you about that than imply otherwise. The location is chosen to give you a well-equipped, accredited setting; it does not change the honest fact that any operation has risks.",
  risksList: [
    "All surgery carries risks including bleeding, infection, blood clots and reactions to anaesthetic.",
    "Some patients experience loose skin after significant weight loss. This varies between individuals and can sometimes be addressed later.",
    "Long-term success depends on dietary and lifestyle changes; weight can return if these are not maintained.",
    "Vitamin and nutrient levels need lifelong monitoring after some procedures, which our team helps you manage.",
  ],
  costParagraph:
    "Because surgery is performed at private hospitals, your costs depend on the procedure you and your surgeon decide on, your level of private health cover, and your individual circumstances. Most bariatric procedures attract a Medicare item number, and patients with appropriate private hospital cover often pay an out-of-pocket gap rather than the full fee. Some people choose to access their superannuation early to fund surgery. We give you a clear written estimate before you commit to anything, so there are no surprises.",
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
      question: "Where is the surgery actually performed?",
      answer:
        "Surgery is performed at St John of God Murdoch or St John of God Subiaco, two accredited private hospitals in Perth with full operating theatres, recovery wards and intensive-care backup on site. Your surgeon and our team confirm which hospital your procedure is booked at well before the day.",
    },
    {
      question: "Where are consultations held?",
      answer:
        "Consultations happen in our rooms, not at the hospital. Our main Perth rooms are in Booragoon at the Garden City Specialist Centre, 537 Marmion Street. We also consult in Mandurah at the WA Cardiology Centre, 30 Minilya Pkwy. You meet your surgeon and return for follow-up at whichever location suits you.",
    },
    {
      question: "Can I be seen in Mandurah instead of travelling to Perth?",
      answer:
        "Yes. We hold consultations in Mandurah at the WA Cardiology Centre, 30 Minilya Pkwy, so patients south of the city can be seen closer to home for their consultation and follow-up. The surgery itself is still performed at St John of God Murdoch or Subiaco in Perth. Let our team know your preferred location when you call on (08) 9332 0066.",
    },
    {
      question: "What is the difference between the consulting rooms and the hospital?",
      answer:
        "The consulting rooms in Booragoon and Mandurah are where you meet your surgeon, have your assessment, and return for follow-up appointments. The hospitals at Murdoch and Subiaco are where the operation takes place and where you recover in the days afterwards. Most of your appointments happen in the consulting rooms.",
    },
    {
      question: "Which hospital will my surgery be at, Murdoch or Subiaco?",
      answer:
        "It depends on your surgeon's operating lists and your individual circumstances. Both St John of God Murdoch and St John of God Subiaco are accredited private hospitals with the same standard of theatre and recovery facilities. Your surgeon and our team confirm the location with you well before the day so there are no surprises.",
    },
    {
      question: "Is parking available at the consulting rooms and hospitals?",
      answer:
        "Both St John of God Murdoch and St John of God Subiaco are full private hospital campuses with on-site patient parking. The Garden City Specialist Centre in Booragoon and the WA Cardiology Centre in Mandurah also have parking for patients. If you have specific access needs, mention them when you book on (08) 9332 0066 and our team will help.",
    },
    {
      question: "Are these public or private hospitals?",
      answer:
        "St John of God Murdoch and St John of God Subiaco are both accredited private hospitals. That is why your level of private health cover, or a self-funded arrangement, is relevant to what surgery will cost. Our team explains your options clearly before anything is booked, and most bariatric procedures attract a Medicare item number.",
    },
    {
      question: "How do I get to the Booragoon rooms?",
      answer:
        "Our Booragoon rooms are at the Garden City Specialist Centre, 537 Marmion Street, a dedicated specialist building. When you book your appointment, our team will confirm the address and any directions you need. For all locations you can reach us on one number, (08) 9332 0066.",
    },
    {
      question: "Do I need a referral before I come to either location?",
      answer:
        "A GP referral is the usual first step. It gives you the higher referred Medicare rebate on your consultation and lets us review your history before your first appointment. Once you have your referral, our team books you into whichever consulting location, Booragoon or Mandurah, suits you best.",
    },
  ],
  conversionHeadline:
    "Want to be seen at the location that suits you best? Let us help you find a time.",
};

export default function Page() {
  return <OswContentPage data={pageData} />;
}
