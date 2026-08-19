/* ── Single brand ─────────────────────────────────────────────────── */

export const BRAND = {
  name: "ergoworks",
  descriptor: "Powered by Biosymm",
  accent: "#8CC63F",
  accentAction: "#4F7A16",
  logo: "/logos/ergoworks/ergoworks-mark.png",
  logoWidth: 457,
  logoHeight: 112,
} as const;

/* ── CTA ─────────────────────────────────────────────────────────── */

export const CTA = "Talk to a health professional consultant";

/* ── Hero ─────────────────────────────────────────────────────────── */

export const HERO_COPY = {
  kicker:
    "Physiotherapist-led · National delivery · Office + home + hybrid",
  headline: "Healthier ways of working, wherever work happens.",
  lead: "ergoworks is a national, proactive and empowering partner in workplace health. Our team helps organisations improve each staff member’s experience across office, home and hybrid work, with every health professional consultant qualified as a physiotherapist.",
} as const;

export type ClientLogo = {
  name: string;
  src: string;
};

// TODO: real client logos from Marcus
export const CLIENT_LOGOS: readonly ClientLogo[] = [
  { name: "Client logo 1", src: "" },
  { name: "Client logo 2", src: "" },
  { name: "Client logo 3", src: "" },
  { name: "Client logo 4", src: "" },
] as const;

/* ── Section copy ─────────────────────────────────────────────────── */

export const PAGE_COPY = {
  servicesKicker: "Our services",
  servicesHeading: "How we can support you",
  servicesLead:
    "Our team of experts provide a range of consulting services that enable your staff to work in a happy and healthy environment. We can support anywhere from preventing common workstation niggles to guiding the organisation through any pre and post office moves to promote the wellbeing of staff within the organisation.",
  diffKicker: "Why ergoworks",
  diffHeading: "A proactive, physio-led approach to workplace health.",
  diffLead:
    "The key difference our business provides is that our consultants are all physiotherapists — using a health-professional's lens to understand any musculoskeletal concerns raised, then an evidence-based, proactive approach to optimise and educate on the equipment in use, with tailored, physio-led tips, stretches and micro-breaks.",
  valueKicker: "The difference",
  valueHeadingPeople: "For your people",
  valueHeadingOrg: "For your organisation",
  howKicker: "How it works",
  howHeading: "A clear path from the first conversation to the next step",
  formKicker: "Get started",
  formIntro: "You can chat with our health professional consultant.",
  footer: "Proactive, physiotherapist-led support for healthier workplaces.",
} as const;

/* ── Services ─────────────────────────────────────────────────────── */

export type ServiceItem = {
  number: string;
  name: string;
  benefit: string;
  body?: string;
  subItems?: readonly string[];
};

export const SERVICES: readonly ServiceItem[] = [
  {
    number: "01",
    name: "Ergonomic Assessments",
    benefit:
      "Practical, proactive support for every workstation and working environment",
    body: "Choose the right level of assessment to proactively support staff in corporate and home settings.",
    subItems: [
      "Individual Ergonomic Assessments: 30-minute comprehensive 1-on-1 assessments in corporate offices and home environments.",
      "Brief Assessments: 15-minute per-person brief ergonomic assessment, proactive in supporting staff to optimise their workstation in corporate or home settings.",
      "Floorwalking Assessments: fine-tuning spot checks for large-scale organisations covering ergonomic posture-prevention tips.",
    ],
  },
  {
    number: "02",
    name: "Office Moves & Ergonomist Fit-Outs",
    benefit: "Future-proofed environments that reduce long-term costs and maximise space utility",
    body: "Specialist ergonomist to review and support designs to align with Australian/New Zealand ISO standards for any pre-office-move engagement. After the move, our consultants guide large-scale office moves proactively. The benefit: future-proofed environments that reduce long-term costs and maximise space utility.",
  },
  {
    number: "03",
    name: "Dynamic Corporate Presentations",
    benefit: "Build confidence, autonomy and long-term wellbeing across your team",
    body: "Engaging seminars on office ergonomics, hybrid working and health & wellbeing. Manual-handling workshops and \"Train the Trainer\" programs to empower internal champions. The benefit: a culture of self-awareness — your team gains the confidence to adjust their own environment, fostering autonomy and long-term wellbeing.",
  },
  {
    number: "04",
    name: "ErgoAssess Software",
    benefit: "Give leadership total visibility with a cost-effective, automated tool",
    body: "An award-winning online assessment tool that lets an organisation fulfil its ergonomic requirements simply and cost-effectively. The benefit: total visibility for leadership — actionable insight into your organisation's risk profile with a cost-effective, automated tool that supports your team regardless of location.",
  },
] as const;

/* ── Differentiators ──────────────────────────────────────────────── */

export const DIFFERENTIATORS = [
  {
    title: "Health-professional lens",
    body: "Our consultants are physiotherapists who use clinical understanding to interpret musculoskeletal concerns and guide practical, evidence-based workplace health support.",
  },
  {
    title: "Practical, individual guidance",
    body: "Tailored tips, stretches and micro-break education help each staff member make confident adjustments to their workstation and working habits.",
  },
  {
    title: "Empowered staff experience",
    body: "We help people understand and improve their own working environment, building autonomy and long-term wellbeing rather than waiting for problems to surface.",
  },
  {
    title: "National capability",
    body: "Consistent delivery across offices, home environments and hybrid teams makes us a proactive partner wherever your people work.",
  },
] as const;

/* ── Value prop ───────────────────────────────────────────────────── */

export const VALUE_PROP = {
  forPeople: [
    "More confident, comfortable ways of working",
    "Practical, tailored advice from a physiotherapist",
    "Greater confidence adjusting their environment",
    "Education around movement, stretches and micro-breaks",
    "Support across office, home and hybrid environments",
  ],
  forOrg: [
    "An empowering partner in workplace health",
    "Scalable options for different workforce needs",
    "Proactive visibility across your people and locations",
    "Future-ready support for office moves and fit-outs",
    "Assessment, education and digital support in one ecosystem",
  ],
} as const;

/* ── How it works ─────────────────────────────────────────────────── */

export const HOW_IT_WORKS = [
  {
    number: "1",
    heading: "Tell us what you need",
    body: "Select the area your team is looking at — from workstation comfort to office moves.",
  },
  {
    number: "2",
    heading: "Talk with a health professional consultant",
    body: "A qualified physiotherapist reviews your needs and recommends the right approach.",
  },
  {
    number: "3",
    heading: "We tailor the approach",
    body: "Every engagement is scoped around your people, locations, and practical next step.",
  },
  {
    number: "4",
    heading: "We support what comes next",
    body: "Your consultant follows up with a recommendation tailored to your team.",
  },
] as const;

/* ── Form options ─────────────────────────────────────────────────── */

export const ROLE_OPTIONS = [
  "HR",
  "WHS",
  "People & Culture",
  "Injury Management",
  "Facilities",
  "Workplace Experience",
  "Procurement",
  "Operations",
  "Other",
] as const;

export const WORKFORCE_OPTIONS = [
  "Under 50",
  "50–99",
  "100–249",
  "250–499",
  "500+",
] as const;

export const ENQUIRY_TYPE_OPTIONS = [
  "Organisation / employer team",
  "Individual or home-based",
] as const;

export const SERVICE_OPTIONS = [
  "Ergonomic Assessments",
  "Office Moves & Ergonomist Fit-Outs",
  "Dynamic Corporate Presentations",
  "ErgoAssess Software",
  "Not sure yet",
] as const;

export const GEO_OPTIONS = [
  "One location",
  "Multiple locations",
  "National",
  "Other",
] as const;

export const WORKING_MODEL_OPTIONS = [
  "Primarily office",
  "Hybrid",
  "Primarily remote/home",
  "Combination",
] as const;

export const TIMING_OPTIONS = [
  "As soon as possible",
  "Within 1 month",
  "Within 3 months",
  "Planning ahead",
  "Not sure",
] as const;

/* ── Form copy ────────────────────────────────────────────────────── */

export const FORM_COPY = {
  stepIndicator: (step: 1 | 2) => `Step ${step} of 2 — takes about 40 seconds`,
  stepOne: "How can we help?",
  stepTwo: "How we reach you",
  serviceLabel: "How can we help?",
  servicePlaceholder: "Select one",
  geoLabel: "Location coverage",
  geoPlaceholder: "Select one",
  workingModelLabel: "Working model",
  workingModelPlaceholder: "Select one",
  timingLabel: "Timing",
  timingPlaceholder: "Select one",
  workforceLabel: "Workforce size",
  workforcePlaceholder: "Select one",
  enquiryTypeLabel: "Enquiry type",
  enquiryTypePlaceholder: "Select one",
  organisationLabel: "Organisation name",
  organisationPlaceholder: "Company name",
  roleLabel: "Your role",
  rolePlaceholder: "Select one",
  emailLabel: "Work email",
  emailPlaceholder: "you@company.com.au",
  phoneLabel: "Phone (optional)",
  phonePlaceholder: "Optional",
  processingConsent:
    "I agree that this enquiry can be processed so the team can respond to my request.",
  continue: "Continue",
  back: "Back",
  submit: CTA,
  validation: "Please complete the fields marked below.",
  requiredNote: "Fields marked * are required.",
  whatNext: "What happens next",
  submitted:
    "Thank you. One of our health professional consultants will review your organisation's needs and recommend the most appropriate next step.",
  callBar: "Call 1300 374 696 — talk to a health professional consultant",
} as const;
