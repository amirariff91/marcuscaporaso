export type TemplateField = {
  name: string;
  type: string;
  required: boolean;
  guidance: string;
};

export type TemplateBlock = {
  name: string;
  purpose: string;
  fields: readonly TemplateField[];
  sharedAcrossReplicas: boolean;
};

export type SchemaPattern = {
  summary: string;
  organisationId: string;
  graphRule: string;
  faqRichResultNote: string;
};

export type ReplicaRule = {
  scope: "Bespoke" | "Shared" | "Governance" | "Replaces the 40% rule";
  title: string;
  guidance: string;
};

export type InfoBox = {
  title: string;
  detail: string;
};

export type InternalLink = {
  destination: string;
  anchor?: string;
};

export type CallToAction = {
  button: string;
  supportingText: string;
  target: string;
};

export type BuildSheet = {
  page: string;
  url: string;
  urlDecision: string;
  primaryQuery: string;
  secondaryQueries: readonly string[];
  titleTag: string;
  metaDescription: string;
  h1: string;
  h2Outline: readonly string[];
  faqs: readonly string[];
  infoBoxes: readonly InfoBox[];
  internalLinksIn: readonly InternalLink[];
  internalLinksOut: readonly InternalLink[];
  schemaType: string;
  cta: CallToAction;
  gregToConfirm: readonly string[];
  doneChecklist: readonly string[];
  status: string;
};

export const templateBlocks = [
  {
    name: "hero_block",
    purpose: "Answer the search query immediately and give the visitor one next step.",
    fields: [
      {
        name: "hero_h1",
        type: "text",
        required: true,
        guidance:
          'Page title with primary keyword near the front (for example, "Ergonomic Assessment Sydney for Workplace Teams").',
      },
      {
        name: "intent_summary",
        type: "textarea",
        required: true,
        guidance: "Direct 40 to 60 word definition answering the core search query immediately.",
      },
      {
        name: "primary_cta_text",
        type: "text",
        required: true,
        guidance: 'Button label. Default: "Request an Assessment Quote".',
      },
      {
        name: "primary_cta_url",
        type: "text",
        required: true,
        guidance: 'Target anchor. Default: "/contact-us#contact-form".',
      },
      {
        name: "trust_signals",
        type: "grid (max 3 rows)",
        required: true,
        guidance:
          'Each row: text (text, required): Trust proof (for example, "Australian Registered Health Professionals", "Servicing Sydney CBD and Metros", "Detailed Practical Reports").',
      },
    ],
    sharedAcrossReplicas: false,
  },
  {
    name: "who_for_block",
    purpose: "Make the intended buyer and operational triggers explicit.",
    fields: [
      {
        name: "section_heading",
        type: "text",
        required: true,
        guidance: 'H2 heading. Default: "Who Needs a Workplace Assessment?".',
      },
      {
        name: "scenarios",
        type: "grid (4 to 6 rows)",
        required: true,
        guidance:
          'Each row: title (text, required): Operational trigger (for example, "Discomfort or Injury Reports", "New Office Fitouts", "Hybrid and Home Setups"); description (textarea, required): Plain English explanation of how the assessment resolves the trigger.',
      },
    ],
    sharedAcrossReplicas: false,
  },
  {
    name: "process_pipeline_block",
    purpose: "Set expectations with a consistent four-step workflow.",
    fields: [
      {
        name: "section_heading",
        type: "text",
        required: true,
        guidance: 'H2 heading. Default: "Our 4-Step Assessment Process".',
      },
      {
        name: "steps",
        type: "grid (exactly 4 rows)",
        required: true,
        guidance:
          "Each row: step_number (integer, required): 1 to 4; title (text, required): Step name (1. Scope and Intake, 2. Assessment, 3. Practical Report, 4. Follow-Up); description (textarea, required): Operational workflow and responsibilities.",
      },
    ],
    sharedAcrossReplicas: true,
  },
  {
    name: "deliverables_block",
    purpose: "Show the report contents and the practical output.",
    fields: [
      {
        name: "section_heading",
        type: "text",
        required: true,
        guidance: 'H2 heading. Default: "What You Receive: The Assessment Report".',
      },
      {
        name: "deliverables_list",
        type: "list",
        required: true,
        guidance:
          "Itemised report contents (posture analysis, workstation adjustments, neutral equipment specifications, prioritised risk matrix).",
      },
      {
        name: "sample_preview_title",
        type: "text",
        required: false,
        guidance: 'Card header. Default: "Actionable Reporting".',
      },
      {
        name: "sample_preview_text",
        type: "textarea",
        required: false,
        guidance: "Overview of recommendations.",
      },
      {
        name: "sample_file",
        type: "asset",
        required: false,
        guidance: "Redacted sample report download [Greg to confirm].",
      },
    ],
    sharedAcrossReplicas: false,
  },
  {
    name: "coverage_matrix_block",
    purpose: "Clarify service areas and delivery modes.",
    fields: [
      {
        name: "section_heading",
        type: "text",
        required: true,
        guidance: "H2 heading.",
      },
      {
        name: "geographic_areas",
        type: "list",
        required: true,
        guidance: "Confirmed regions and suburbs served [Greg to confirm].",
      },
      {
        name: "delivery_modes",
        type: "grid (2 rows)",
        required: true,
        guidance:
          'Each row: mode_title (text, required): "On-Site Assessment" and "Virtual Telehealth Assessment"; suitability (text, required): Recommended use case; turnaround (text, required): Expected timeframe.',
      },
    ],
    sharedAcrossReplicas: false,
  },
  {
    name: "proof_block",
    purpose: "Publish only approved, verifiable credentials and evidence.",
    fields: [
      {
        name: "section_heading",
        type: "text",
        required: true,
        guidance: 'H2 heading. Default: "Why Organisations Choose ErgoWorks".',
      },
      {
        name: "credentials",
        type: "grid (2 to 4 rows)",
        required: true,
        guidance:
          "Each row: title (text, required): Credential title; detail (textarea, required): Verifiable evidence (such as AHPRA physiotherapist registrations [Greg to confirm], past corporate programmes like Credit Suisse).",
      },
    ],
    sharedAcrossReplicas: false,
  },
  {
    name: "faq_block",
    purpose: "Resolve buyer questions with concise direct answers.",
    fields: [
      {
        name: "section_heading",
        type: "text",
        required: true,
        guidance: 'H2 heading. Default: "Frequently Asked Questions".',
      },
      {
        name: "faqs",
        type: "grid (5 to 7 rows)",
        required: true,
        guidance:
          "Each row: question (text, required): Buyer inquiry; answer (textarea, required): Concise direct answer, strictly 40 to 60 words.",
      },
    ],
    sharedAcrossReplicas: false,
  },
  {
    name: "related_services_block",
    purpose: "Connect the primary page to relevant sibling services.",
    fields: [
      {
        name: "section_heading",
        type: "text",
        required: true,
        guidance: 'H2 heading. Default: "Related Workplace Solutions".',
      },
      {
        name: "service_links",
        type: "entries (max 3)",
        required: true,
        guidance: "Selected service entries with title and summary.",
      },
    ],
    sharedAcrossReplicas: true,
  },
  {
    name: "cta_strip_block",
    purpose: "Close with a clear quotation path and optional mobile sticky action.",
    fields: [
      {
        name: "headline",
        type: "text",
        required: true,
        guidance: 'Heading. Default: "Ready to Review Your Workplace?".',
      },
      {
        name: "supporting_text",
        type: "textarea",
        required: true,
        guidance: "Reassurance text.",
      },
      {
        name: "button_text",
        type: "text",
        required: true,
        guidance: 'Button copy. Default: "Request an Assessment Quote".',
      },
      {
        name: "button_url",
        type: "text",
        required: true,
        guidance: 'Target URL. Default: "/contact-us#contact-form".',
      },
      {
        name: "enable_sticky_bar",
        type: "toggle",
        required: true,
        guidance: "Mobile bottom bar toggle. Default: true.",
      },
    ],
    sharedAcrossReplicas: true,
  },
] satisfies readonly TemplateBlock[];

export const schemaPattern: SchemaPattern = {
  summary:
    "Output one JSON-LD script in the page head, linking the service to our primary organisation identity via one fixed @id.",
  organisationId: "https://ergoworksconsulting.com.au#organisation",
  graphRule:
    "Use one @graph: one organisation node with @id https://ergoworksconsulting.com.au#organisation, and one Service or Course node with provider → that exact @id. Mark up only facts visibly published on the page; do not include unverified ratings, reviews or prices.",
  faqRichResultNote:
    "[unverified] FAQPage rich-result display is restricted to authoritative government and health bodies. Visible FAQ accordions remain essential for user conversion and answer clarity. Include Question and Answer nodes in the page graph for semantic clarity without relying on search rich snippets.",
};

export const paidLandingRules = [
  "Header Leakage Protection: Suppress the main navigation menu. Show only the ErgoWorks logo linking to the homepage and the telephone link (1300 374 696).",
  "Direct Conversion Path: The primary CTA smoothly scrolls to an on-page contact form or routes directly to /contact-us#contact-form.",
  "Tracking Continuity: Session tracking preserves source parameters through to form submission.",
] as const;

export const replicaRules = [
  {
    scope: "Replaces the 40% rule",
    title: "No arbitrary percentage",
    guidance:
      'The historical guideline requiring "40% unique content" has no defensible mathematical basis in search documentation. Search engines evaluate search intent, operational reality, and whether a page serves as a duplicate doorway, not arbitrary text percentages.',
  },
  {
    scope: "Bespoke",
    title: "Hero Block and Intent Summary",
    guidance:
      "100% unique. Reflects specific service context (ErgoWorks corporate risk management versus Biosymm clinical occupational physiotherapy) or local city intent.",
  },
  {
    scope: "Bespoke",
    title: "Who This Is For",
    guidance:
      "Target scenarios reflect local industry mix (Sydney CBD professional services versus Melbourne suburban logistics).",
  },
  {
    scope: "Bespoke",
    title: "Deliverables and Scope",
    guidance:
      "Details exact report formats, assessment inclusions, and local equipment advice.",
  },
  {
    scope: "Bespoke",
    title: "Proof and Credentials",
    guidance:
      "Features real, locally available consultants, local regulatory frameworks (SafeWork NSW versus WorkSafe Victoria), and verified local projects.",
  },
  {
    scope: "Bespoke",
    title: "FAQ Accordion",
    guidance: "Resolves local delivery questions, travel zones, and operational details.",
  },
  {
    scope: "Shared",
    title: "Process Pipeline",
    guidance: "The 4-step assessment methodology can remain consistent across markets.",
  },
  {
    scope: "Shared",
    title: "Related Services Strip",
    guidance: "Standard sibling service links can be reused.",
  },
  {
    scope: "Shared",
    title: "CTA Strip",
    guidance: "Standard booking and quotation workflows can be shared.",
  },
  {
    scope: "Governance",
    title: "Canonical and Indexing Rules",
    guidance:
      "Every live replica must carry a self-referential canonical URL if it represents an authentic, staffed offering. If local delivery capacity, qualified consultants, or distinct offerings cannot be verified for a target city or brand, that page must NOT be indexed. It must be set to noindex or canonicalised back to the primary national hub.",
  },
] satisfies readonly ReplicaRule[];

export const buildSheets = [
  {
    page: "Ergonomic Assessment Sydney",
    url: "/ergonomic-consultants-in-sydney",
    urlDecision:
      "Keep existing URL. Preserves search equity and links. Sydney consultant queries collapse into assessment demand.",
    primaryQuery: "ergonomic assessment sydney (100/mo, KD 0)",
    secondaryQueries: [
      "ergonomic workstation assessment (200/mo, KD 0)",
      "workplace ergonomic assessment (60/mo, KD 0)",
      "office ergonomic assessment (70/mo, KD 0)",
      "ergonomic assessment report (80/mo)",
    ],
    titleTag: "Ergonomic Assessment Sydney | ErgoWorks Consulting",
    metaDescription:
      "Book an ergonomic assessment Sydney workplace teams can rely on. Practical workstation adjustments, prioritised risk reports, and expert advice. Enquire today.",
    h1: "Ergonomic Assessment Sydney for Workplace Teams",
    h2Outline: [
      "What an Ergonomic Assessment in Sydney Covers",
      "Who Needs an On-Site Workplace Assessment?",
      "Our 4-Step Sydney Assessment Process",
      "What You Receive: The Ergonomic Assessment Report",
      "Sydney Service Areas and Workplace Settings Covered",
      "Office, Home, and Hybrid Workstation Options",
      "Why Sydney Organisations Choose ErgoWorks",
      "Transparent Scope and Pricing Variables",
      "Frequently Asked Questions",
    ],
    faqs: [
      "What is included in a Sydney ergonomic assessment?",
      "How quickly can an assessor visit our Sydney office?",
      "Can you assess both office and hybrid or home workstations?",
      "What does the final ergonomic assessment report look like?",
      "Which Sydney suburbs and business precincts do you cover?",
      "How much does an ergonomic workplace assessment cost?",
    ],
    infoBoxes: [
      {
        title: "Scope",
        detail: "Individual Workstation Assessment vs Team Assessment.",
      },
      {
        title: "Deliverables",
        detail:
          "5-Point Scope (Posture Analysis, Adjustments, Measurements, Hardware Specs, Risk Matrix).",
      },
    ],
    internalLinksIn: [
      { destination: "Homepage", anchor: "ergonomic assessment in Sydney" },
      { destination: "/blog/workstation-tips-ergonomic-physiotherapist" },
    ],
    internalLinksOut: [
      {
        destination: "/ergonomic-solutions/workstation-assessments",
        anchor: "workplace ergonomic assessment",
      },
      {
        destination: "/ergonomic-solutions/manual-handling-training",
        anchor: "manual handling training",
      },
      { destination: "/contact-us", anchor: "request an assessment" },
    ],
    schemaType: "ProfessionalService + Service",
    cta: {
      button: "Request a Sydney Assessment Quote",
      supportingText:
        "Tell us your location and team size. We will confirm scope before quoting.",
      target: "/contact-us#contact-form",
    },
    gregToConfirm: [
      "Approved Sydney delivery suburbs [Greg to confirm].",
      "Names and registrations of Sydney assessors [Greg to confirm].",
      "Report turnaround business days [Greg to confirm].",
      "Approval of redacted sample report [Greg to confirm].",
    ],
    doneChecklist: [
      "Primary phrase in title, meta description, H1, opening text, and H2.",
      "Answer-first definition is 40 to 60 words.",
      "All 6 FAQ answers are 40 to 60 words.",
      "No injury-reduction or compliance guarantees.",
      "Valid Schema.org JSON-LD linking to root organisation ID.",
    ],
    status: "Copy drafted",
  },
  {
    page: "Manual Handling Training Sydney",
    url: "/manual-handling-training-sydney",
    urlDecision:
      "New dedicated page. Captures Sydney corporate course demand with explicit non-RTO boundaries.",
    primaryQuery: "manual handling training sydney (200/mo, KD 0)",
    secondaryQueries: [
      "manual handling training (2,700/mo, KD 39)",
      "manual handling training near me (300/mo, KD 44; FAQ/body only)",
      "manual handling trainer (50/mo)",
    ],
    titleTag: "Manual Handling Training Sydney | ErgoWorks Consulting",
    metaDescription:
      "Workplace manual handling training in Sydney. Practical, on-site sessions tailored to your tasks and team. Request a customised corporate training quote.",
    h1: "Manual Handling Training Sydney for Workplace Teams",
    h2Outline: [
      "Practical Manual Handling Training for Sydney Workplaces",
      "Who This Training Is For (Office, Logistics, Care, Operations)",
      "Bespoke Workplace Training vs Generic Online Courses",
      "Course Structure and Practical On-Site Delivery",
      "What Organisers and Participants Receive",
      "Course Boundary: Tailored Corporate Education (Non-RTO Statement)",
      "Qualified Manual Handling Trainers and Physiotherapists",
      "Group Sizes, Scheduling, and Pricing Scope",
      "Frequently Asked Questions",
    ],
    faqs: [
      "Is this manual handling training held on-site at our Sydney workplace?",
      "Is this an accredited RTO course or vocational certificate?",
      "Can the training be customised to our specific workplace tasks?",
      "What is the maximum participant capacity per session?",
      "How long does a standard practical workshop run?",
      "Do participants receive course notes or attendance records?",
    ],
    infoBoxes: [
      {
        title: "Boundary",
        detail:
          "Inclusions vs Exclusions (Task coaching included; accredited vocational certificates like TLID0020 excluded).",
      },
      {
        title: "Modules",
        detail:
          "Hazard Recognition, Biomechanics of Lifting, Team Handling, Workstation Adjustments.",
      },
    ],
    internalLinksIn: [
      {
        destination: "/blog/best-practices-in-manual-handling-tips-for-aussie-businesses",
      },
      {
        destination: "/blog/the-importance-of-manual-handling-training-in-reducing-workplace-injuries",
      },
      { destination: "/ergonomic-solutions/manual-handling-training" },
    ],
    internalLinksOut: [
      {
        destination: "/ergonomic-solutions/manual-handling-training",
        anchor: "national training",
      },
      {
        destination: "/ergonomic-consultants-in-sydney",
        anchor: "assessments Sydney",
      },
      { destination: "/contact-us", anchor: "request proposal" },
    ],
    schemaType: "Course + Service",
    cta: {
      button: "Request a Sydney Training Proposal",
      supportingText: "Customised for your team, load types, and physical environment.",
      target: "/contact-us#contact-form",
    },
    gregToConfirm: [
      "Confirm attendance certificates without RTO claims [Greg to confirm].",
      "Standard session durations (e.g. 90 mins, 2 hours, half-day) [Greg to confirm].",
      "Recommended maximum attendee cap per practical session [Greg to confirm].",
      "Named trainer qualifications and clinical backgrounds [Greg to confirm].",
    ],
    doneChecklist: [
      "Explicit non-RTO disclaimer in body and FAQ.",
      "Answer-first definition is 40 to 60 words.",
      "All 6 FAQ answers are 40 to 60 words.",
      "No vocational licence or compliance promises.",
      "Valid Schema.org Course and Service JSON-LD markup.",
    ],
    status: "Waiting on offer confirmation",
  },
  {
    page: "Ergonomic Workstation Assessment",
    url: "/ergonomic-solutions/workstation-assessments",
    urlDecision:
      "Keep existing URL. Preserves indexation while updating copy for commercial assessment intent.",
    primaryQuery: "ergonomic workstation assessment (200/mo, KD 0)",
    secondaryQueries: [
      "workplace ergonomic assessment (60/mo, KD 0)",
      "workstation assessment (50/mo)",
      "office ergonomic assessment (70/mo, KD 0)",
      "ergonomic assessment report (80/mo)",
      "ergonomic risk assessment (40/mo, KD 0)",
    ],
    titleTag: "Ergonomic Workstation Assessment and Workplace Reviews | ErgoWorks",
    metaDescription:
      "Comprehensive ergonomic workstation assessments and workplace reviews. Identify physical risk factors, optimise setups, and receive prioritised reports.",
    h1: "Ergonomic Workstation Assessment and Workplace Ergonomic Reviews",
    h2Outline: [
      "What is an Ergonomic Workstation Assessment?",
      "Workstation vs Workplace Ergonomic Assessment: Choosing the Right Scope",
      "Key Physical Elements Evaluated in an Assessment",
      "Step-by-Step Assessment Methodology",
      "The Deliverable: Practical Ergonomic Assessment Reports",
      "On-Site vs Virtual Telehealth Assessment Options",
      "Risk Control and Ergonomic Equipment Recommendations",
      "Why Partner with ErgoWorks Consulting",
      "Scope Variables and Enquiry Process",
      "Frequently Asked Questions",
    ],
    faqs: [
      "What is the difference between a workstation assessment and a workplace assessment?",
      "When should an organisation arrange workstation assessments?",
      "Are virtual workstation assessments as thorough as on-site visits?",
      "Does ErgoWorks supply or sell recommended ergonomic furniture?",
      "What specific measurements and risk factors are evaluated?",
      "Can you assess specialised environments like sit-stand desks and control rooms?",
    ],
    infoBoxes: [
      {
        title: "Scope",
        detail: "Individual Workstation Assessment vs Team Review.",
      },
      {
        title: "Delivery",
        detail:
          "On-Site Assessment vs Virtual Telehealth Assessment (Suitability, Requirements, Turnaround).",
      },
    ],
    internalLinksIn: [
      { destination: "Homepage", anchor: "workstation assessments" },
      { destination: "/blog/8-best-ergonomic-laptop-setup-tips" },
    ],
    internalLinksOut: [
      {
        destination: "/ergonomic-consultants-in-sydney",
        anchor: "Sydney assessment",
      },
      {
        destination: "/ergonomic-solutions/manual-handling-training",
        anchor: "manual handling training",
      },
      { destination: "/contact-us", anchor: "request plan" },
    ],
    schemaType: "ProfessionalService + Service",
    cta: {
      button: "Request a Workstation Assessment Plan",
      supportingText: "Talk to an ergonomist about your team's office or hybrid setup.",
      target: "/contact-us#contact-form",
    },
    gregToConfirm: [
      "Vendor independence statement confirming no equipment kickbacks [Greg to confirm].",
      "Video platforms supported for virtual assessments [Greg to confirm].",
      "Confirmation of standard report sections and priority scales [Greg to confirm].",
    ],
    doneChecklist: [
      "Primary query in title, meta description, H1 lead, opening text, and H2.",
      "Answer-first definition is 40 to 60 words.",
      "All 6 FAQ answers are 40 to 60 words.",
      "No medical diagnostic promises or compliance guarantees.",
      "Valid Schema.org JSON-LD linking to root organisation ID.",
    ],
    status: "Copy drafted",
  },
] satisfies readonly BuildSheet[];
