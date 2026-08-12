export type BrandVariant = "biosymm_led" | "ergoworks_led";
export type HeroMode = "promise" | "trigger";

/**
 * Approval-sensitive wording lives in one place. Keep references to these
 * values intact when the client changes a decision-dependent promise.
 */
export const PENDING_APPROVAL = {
  reportPromise: "With a report your HR team can act on.",
  writtenScopePromise: "You receive a written scope before anything is booked.",
  responsePath:
    "Same-day acknowledgement/contact where Sydney capacity allows → discovery → written scope, with a proposal within 48–72 hours where applicable → follow-up in 3–5 days.",
  /*
   * Decision 4, genuinely open and genuinely contradictory in the source material:
   * the campaign plan presented to the client (docs/aug12/…PDF-First.pdf) names the
   * endorsement "ErgoWorks by Biosymm", while the logo files received the same day
   * bake in "Powered by Biosymm". Neither is approved, so the page ships the deck
   * wording by default and exposes the other at ?descriptor=powered rather than
   * quietly picking a side.
   */
  ergoWorksByBiosymm: "ErgoWorks by Biosymm",
  poweredByBiosymm: "Powered by Biosymm",
  variantAEndorsement: "ErgoWorks — our specialist ergonomics capability",
  variantBEndorsement: "Workplace ergonomics, delivered with Biosymm",
  reviewRibbon:
    "Prototype for review — offer wording and brand descriptor pending client approval (Decisions 1 & 4).",
} as const;

export type DescriptorMode = "by" | "powered";

export type BrandRecord = {
  name: string;
  descriptor: string;
  endorsement: string;
  accent: string;
  accentAction: string;
  /** Real client mark, matte-stripped from the 12 Aug assets. */
  logo: string;
  logoWidth: number;
  logoHeight: number;
};

export const BRANDS = {
  biosymm_led: {
    name: "Biosymm Workplace Ergonomics",
    descriptor: "",
    endorsement: PENDING_APPROVAL.variantAEndorsement,
    accent: "#4179C0",
    accentAction: "#35659F",
    logo: "/logos/ergoworks/biosymm-wordmark.png",
    logoWidth: 499,
    logoHeight: 112,
  },
  ergoworks_led: {
    name: "ErgoWorks",
    descriptor: PENDING_APPROVAL.ergoWorksByBiosymm,
    endorsement: PENDING_APPROVAL.variantBEndorsement,
    accent: "#8CC63F",
    accentAction: "#4F7A16",
    // The descriptor-free mark: the supplied lockup bakes "Powered by Biosymm" into
    // the artwork, which would contradict the live descriptor text under ?descriptor=by.
    logo: "/logos/ergoworks/ergoworks-mark.png",
    logoWidth: 457,
    logoHeight: 112,
  },
} as const satisfies Record<BrandVariant, BrandRecord>;

/** Resolve the descriptor for a variant under the Decision-4 switch. */
export function resolveDescriptor(
  variant: BrandVariant,
  mode: DescriptorMode,
): string {
  if (variant !== "ergoworks_led") return BRANDS[variant].descriptor;
  return mode === "powered"
    ? PENDING_APPROVAL.poweredByBiosymm
    : PENDING_APPROVAL.ergoWorksByBiosymm;
}

export const CTA = "Request a workplace ergonomics review";

export const HERO_COPY = {
  promiseStart: "Workplace ergonomic assessments in Sydney.",
  triggerHeadline: "From discomfort complaints to office moves — know what to address next.",
  kicker: "For employer teams",
  lead:
    "Consultant-led reviews for desk-based and hybrid teams. Identify what needs attention, agree the scope, and keep the next step clear for the people who need to act on it.",
} as const;

export const PAGE_COPY = {
  audienceChip: "For 100+ employee teams in Sydney",
  headerAudience: "Workplace ergonomics for employer teams",
  ratingSlotLabel: "Reserved proof slot",
  forkQuestion: "Are you sorting ergonomics for your team, or for yourself?",
  problemKicker: "Problem / trigger",
  problemHeading: "Start with the situation your team is trying to address",
  problemLead:
    "Choose the trigger that is closest to the work in front of you. The review can then be scoped around the people, locations and practical next step involved.",
  triggerHeading: "Common workplace triggers",
  objectionsHeading: "The questions that usually hold this up",
  reportKicker: "A usable format",
  reportLabels: {
    finding: "Finding",
    priority: "Priority",
    owner: "Owner",
    status: "Status",
  },
  howKicker: "How it works",
  howHeading: "A clear path from the first conversation to the next step",
  ecosystemKicker: "The wider capability",
  ecosystemHeading: "If the need extends beyond the first review",
  ecosystemLead:
    "The initial review is one starting point. Where the need is clear, the right person is involved and the work can be done properly, the wider capability can support what comes next.",
  formKicker: "Get started",
  formIntro:
    "Two short steps for an employer enquiry. Tell us what is driving the request, and a consultant can understand the shape of the work before the next conversation.",
  footer:
    "Prototype for client review — this page does not submit enquiry data to a production system.",
} as const;

export const FORK_COPY = {
  legend: "Who is this for?",
  team: "For my team",
  myself: "For myself",
  paidPath: "not for your team?",
  returnToTeam: "If this is for your team, return to the employer path.",
  individualHeading: "This review is for organisations and teams",
  individualBody:
    "An individual setup is not the right fit for this employer review. If your organisation is looking at ergonomics across a team, choose the employer path and share the workplace context there.",
  individualLink: "For my team",
} as const;

export const TRIGGERS = [
  "discomfort complaints/reported risks",
  "office relocation, fit-out, redesign or sit-stand rollout",
  "hybrid/home-based rollout",
  "return-to-work & early intervention",
  "workers-comp concern",
  "new WHS initiative or risk review",
  "workforce growth/restructure",
] as const;

export const TRIGGER_GROUPS = [
  {
    label: "People and risk",
    values: [TRIGGERS[0], TRIGGERS[3], TRIGGERS[4], TRIGGERS[5]],
  },
  {
    label: "Workplace change",
    values: [TRIGGERS[1], TRIGGERS[2], TRIGGERS[6]],
  },
] as const;

export const OBJECTIONS = [
  {
    letter: "A",
    heading: "Ergonomics is only needed after injury",
    body:
      "The review is an early-intervention step. Most of what we find is caught before it becomes a claim — that’s the point of a review.",
  },
  {
    letter: "B",
    heading: "Budget",
    body:
      "The value is in a prioritised findings deliverable — a clear view of what the work covers and what your team can act on, before you weigh it against the cost and disruption of an identified issue becoming a claim.",
  },
  {
    letter: "C",
    heading: "We can assess internally",
    body:
      "An internal checklist can be useful. The differentiator here is a prioritised report plus a record of what was implemented — not the checklist alone.",
  },
] as const;

export const SAMPLE_REPORT = {
  heading: "What the report looks like",
  badge: "Sample — illustrative, not a real client",
  rows: [
    {
      finding: "Monitors below seated eye height across 11 of 14 desks, level 3",
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
      finding: "Home setups: no consistent guidance issued to hybrid staff",
      priority: "Medium",
      priorityKey: "med",
      owner: "People & Culture",
      status: "Guidance drafted, pending sign-off",
    },
  ],
  foot:
    "Every finding carries a priority, an owner and a status — which is what makes it possible to answer, months later, what was actually done.",
} as const;

export const HOW_IT_WORKS = [
  {
    number: "1",
    heading: "Tell us what prompted it",
    body: "Choose the workplace trigger that best describes the request.",
  },
  /*
   * Discovery precedes the written scope. Rev B 3.5 sequences this as contact →
   * discovery → written scope → conditional proposal → follow-up; the earlier order
   * promised a scope in writing before anyone had asked what the work involved,
   * and then step 4 restated the correct sequence, contradicting itself.
   */
  {
    number: "2",
    heading: "We talk through the detail",
    body: "Discovery clarifies the people, locations and practical scope involved.",
  },
  {
    number: "3",
    heading: "We scope it in writing",
    body: PENDING_APPROVAL.writtenScopePromise,
  },
  {
    number: "4",
    heading: "We follow up with the next step",
    body: PENDING_APPROVAL.responsePath,
  },
] as const;

/*
 * Direction note 3.6: the expansion story, in OZ'S OWN CLIENT LANGUAGE. The first
 * three descriptions are quoted from his written answers; office-move support uses
 * the presented deck's wording, since he gave no verbatim for it. No extra CTAs
 * here, and never the internal account-value ladder.
 */
export const ECOSYSTEM_ITEMS = [
  /*
   * Softened from Oz's verbatim wording on two points, because the page is public
   * and the ad-copy addendum forbids injury and outcome claims: "before discomfort
   * becomes injury" asserted a prevented outcome, and ErgoAssess "correctly" +
   * "automatically identifying those who require specialist support" claimed a
   * clinical determination. The service description is unchanged. Flag to Marcus —
   * if the client wants his exact phrasing back, that is a claims decision.
   */
  {
    name: "Floor walking",
    body:
      "Our consultant walks through your workplace, identifying workstation risks and making immediate adjustments on the spot.",
  },
  {
    name: "ErgoAssess",
    body:
      "An online ergonomic self-assessment that guides employees through setting up their own workstation, and flags those the team may want to follow up with directly.",
  },
  {
    name: "Train-the-trainer",
    body:
      "We train your internal champions to recognise ergonomic risks, complete basic workstation assessments and know when specialist support is required.",
  },
  {
    name: "Office-move support",
    body:
      "Guidance for office moves, fit-outs and return-to-office programs, so the new setup is considered before people are working in it.",
  },
] as const;

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

/* En dash: it is a numeric range, not a hyphenated compound. */
export const WORKFORCE_OPTIONS = ["100–499", "500+"] as const;

export const FORM_COPY = {
  stepIndicator: (step: 1 | 2) => `Step ${step} of 2 — takes about 40 seconds`,
  stepOne: "About your organisation",
  stepTwo: "How we reach you",
  driverLabel: "What’s driving this",
  driverPlaceholder: "Select one",
  workforceLabel: "Workforce size",
  workforcePlaceholder: "Select one",
  locationLabel: "Sydney location(s)",
  locationPlaceholder: "e.g. 2 Sydney sites",
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
  marketingConsent:
    "Optional — send me occasional workplace ergonomics guidance. You can unsubscribe at any time.",
  continue: "Continue",
  back: "Back",
  submit: CTA,
  validation: "Please complete the fields marked below.",
  individualBlocked:
    "This form is for employer enquiries. Choose “For my team” above, or contact the clinic directly for an individual assessment.",
  requiredNote: "Fields marked * are required.",
  whatNext: "What happens next",
  submitted:
    "This prototype has recorded the requested action locally. Production routing is not connected.",
  callNext:
    "In production, this call path wires to a per-variant tracked number. This prototype does not dial.",
  callBar: `Prefer to talk it through? ${CTA}`,
  debugEvent: "employer_enquiry_submitted",
  brandVariantLabel: "brand_variant",
  eventLabel: "event",
} as const;

export const COMPETING_PRIORITIES_LINE =
  "Competing priorities: an identified risk without an owner still waits — this gives your team a prioritised next step.";

export const SPLIT_DEMO_COPY = {
  noSeed:
    "Fork-first demo. Choose either brand treatment below, or add an id seed to route deterministically.",
  biosymmLink: "Open the Biosymm-led skin",
  ergoworksLink: "Open the ErgoWorks-led skin",
  biosymmSide: "Biosymm-led",
  ergoworksSide: "ErgoWorks-led",
  seeded: "Seeded split",
  noSeedLabel: "No seed",
  seededReason: (seed: string, side: string, variant: BrandVariant, bitSet: boolean) =>
    `Seeded split: id="${seed}" landed on ${side} (${variant}) because FNV-1a was folded and mixed before bit 16 was tested; that bit was ${bitSet ? "set" : "clear"}.`,
} as const;
