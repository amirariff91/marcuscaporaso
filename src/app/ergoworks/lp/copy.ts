/* ── Single brand ─────────────────────────────────────────────────── */

export const BRAND = {
  name: "Ergoworks",
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
  lead: "Ergoworks helps organisations support their people across office, home and hybrid work. Every health professional consultant is a qualified physiotherapist.",
} as const;

/* ── Section copy ─────────────────────────────────────────────────── */

export const PAGE_COPY = {
  headerAudience: "Workplace ergonomics for employer teams · Sydney and nationally",
  servicesKicker: "Our services",
  servicesHeading: "How we can support you",
  diffKicker: "Why Ergoworks",
  diffHeading: "We look at more than the workstation.",
  valueKicker: "The difference",
  valueHeadingPeople: "For your people",
  valueHeadingOrg: "For your organisation",
  reportKicker: "What you can act on",
  reportLabels: {
    finding: "Finding",
    priority: "Priority",
    owner: "Owner",
    status: "Status",
  },
  howKicker: "How it works",
  howHeading: "A clear path from the first conversation to the next step",
  formKicker: "Get started",
  formIntro:
    "Not sure which service fits? That's exactly what the first conversation is for.",
  footer:
    "Physiotherapist-led ergonomic support for modern workplaces.",
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
      "Give employees practical, personalised guidance they can apply",
    subItems: [
      "Individual assessments: Comprehensive 30-minute one-to-one assessments in corporate offices and home environments.",
      "Brief assessments: Focused 15-minute assessments designed to proactively optimise workstation setup.",
      "Floorwalking: Efficient workstation spot checks across larger teams.",
    ],
  },
  {
    number: "02",
    name: "Office Moves & Fit-outs",
    benefit:
      "Create workplaces designed around the people using them",
    body: "Specialist Ergonomist to review and support designs to align with Australian/New Zealand ISO standards for any pre-office move engagement.",
  },
  {
    number: "03",
    name: "Presentations & Training",
    benefit:
      "Give employees and internal champions greater confidence",
    body: "Delivering engaging seminars on Office Ergonomics, Hybrid Working, and Health & Wellbeing. Leading Manual Handling workshops and Train the Trainer programs.",
  },
  {
    number: "04",
    name: "ErgoAssess Software",
    benefit:
      "Gain greater workforce-wide visibility and actionable insight",
    body: "An award-winning online assessment tool that enables an organisation to fulfil their ergonomic requirements in a simple and cost-effective manner.",
  },
] as const;

/* ── Differentiators ──────────────────────────────────────────────── */

export const DIFFERENTIATORS = [
  {
    title: "Health-professional lens",
    body: "Every consultant is a qualified physiotherapist, using clinical understanding to identify and address musculoskeletal concerns through an evidence-based approach.",
  },
  {
    title: "Practical, individual guidance",
    body: "Tailored tips, stretches, and micro-break education adapted to each person's workstation and working habits.",
  },
  {
    title: "Proactive workplace support",
    body: "We focus on supporting healthy, productive work — not waiting for problems to surface.",
  },
  {
    title: "National capability",
    body: "Consistent delivery across offices, home environments, and hybrid teams — wherever your people work.",
  },
] as const;

/* ── Value prop ───────────────────────────────────────────────────── */

export const VALUE_PROP = {
  forPeople: [
    "Personalised workstation optimisation",
    "Practical advice from a physiotherapist",
    "Greater confidence adjusting their environment",
    "Education around movement and healthier working habits",
    "Support across office, home and hybrid environments",
  ],
  forOrg: [
    "Consistent ergonomic support",
    "Scalable options for different workforce needs",
    "Clearer understanding of where support may be required",
    "Assessment, education and digital support in one ecosystem",
    "An ongoing workplace-health partner as needs evolve",
  ],
} as const;

/* ── Sample report (keep exactly) ─────────────────────────────────── */

export const SAMPLE_REPORT = {
  heading: "What the report looks like",
  badge: "Sample — illustrative, not a real client",
  rows: [
    {
      finding:
        "Monitors below seated eye height across 11 of 14 desks, level 3",
      priority: "High",
      priorityKey: "high",
      owner: "Facilities",
      status: "Implemented — risers fitted 12 Mar",
    },
    {
      finding: "Two chairs beyond adjustment range; seat height locked",
      priority: "High",
      priorityKey: "high",
      owner: "Procurement",
      status: "Implemented — replaced 19 Mar",
    },
    {
      finding:
        "Home setups: no consistent guidance issued to hybrid staff",
      priority: "Medium",
      priorityKey: "med",
      owner: "People & Culture",
      status: "Guidance drafted, pending sign-off",
    },
  ],
  foot: "Every finding carries a priority, an owner and a status — which is what makes it possible to answer, months later, what was actually done.",
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

export const SERVICE_OPTIONS = [
  "Ergonomic Assessments",
  "Office Move & Fit-Out",
  "Presentations & Training",
  "ErgoAssess",
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
  serviceLabel: "Service you're interested in",
  servicePlaceholder: "Select one",
  geoLabel: "Location coverage",
  geoPlaceholder: "Select one",
  workingModelLabel: "Working model",
  workingModelPlaceholder: "Select one",
  timingLabel: "Timing",
  timingPlaceholder: "Select one",
  workforceLabel: "Workforce size",
  workforcePlaceholder: "Select one",
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

/* Competing priorities */

export const COMPETING_PRIORITIES_LINE =
  "Every finding gets an owner and a next step — so nothing falls through the cracks.";

