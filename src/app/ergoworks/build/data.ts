import "server-only";

export type FormFixStatusItem = {
  kind: "observed" | "check";
  label: string;
  detail: string;
};

export const formFixStatus = [
  {
    kind: "observed",
    label: "Live status",
    detail:
      "Confirmed live. Joel's 9 Sep push is live on /contact-us (HTTP 200). No code change needed.",
  },
  {
    kind: "observed",
    label: "Checks outstanding",
    detail: "Still to check: accepted submissions, email delivery, tracking.",
  },
  {
    kind: "observed",
    label: "Submission",
    detail:
      "The form posts to /!/forms/contact_form and remains in-page; there is no thank-you redirect.",
  },
  {
    kind: "observed",
    label: "First focus",
    detail: "The first focus on the form pushes form_start to the data layer.",
  },
  {
    kind: "observed",
    label: "Successful submission",
    detail:
      "On the ergo:form-success event the script pushes general_enquiry with event_id, lead_id, form_name: contact_form, offer_type: general_enquiry, value 0, currency AUD, and service_type mapped from enquiry_about.",
  },
  {
    kind: "observed",
    label: "Before submit",
    detail:
      "Hidden fields receive event_id and lead_id before the post. sessionStorage deduplicates the event by id (key ergo_fired_event_id).",
  },
  {
    kind: "observed",
    label: "Honeypot",
    detail:
      "If submission_created=false (honeypot or veto), tracking does not fire.",
  },
  {
    kind: "check",
    label: "One check for Joel",
    detail:
      "Send one test submission from the live form and confirm with Marcus that it reached Greg's inbox. A silent veto would undercount both the inbox and tracking.",
  },
] as const satisfies readonly FormFixStatusItem[];

export type SmallItemGroup = {
  title: string;
  items: readonly string[];
};

export type SmallItems = {
  groups: readonly SmallItemGroup[];
  paidDestinationsRule: string;
};

export const smallItems: SmallItems = {
  groups: [
    {
      title: "Access and indexing",
      items: [
        "Set X-Robots-Tag: noindex, nofollow, or retain an access restriction, on all three non-live hosts:",
        "ergoworks-consulting.on-forge.com",
        "loving-panther-952645.framer.app",
        "ergonomic.ergoworks.com.au",
      ],
    },
    {
      title: "Local development host",
      items: [
        "ergoconsulting.test sent 4 page views to the live analytics property on 9 Sep.",
        "Block the tag container (GTM-KXGD4GM) on local hosts, or reply to Marcus with the host name so it is excluded on our side.",
      ],
    },
    {
      title: "Search Console",
      items: [
        "Add the DNS TXT record for the bare-domain property. Marcus will send the value.",
        "In Search Console, submit /sitemap.xml and remove the old sitemap_index.xml submission (2023, 430 URLs with errors).",
      ],
    },
  ],
  paidDestinationsRule: "Keep the paid landing pages unchanged for the two-week test.",
};

export type BuildScope = {
  inScope: readonly string[];
  outOfScope: readonly string[];
  estimate: string;
};

export const buildScope: BuildScope = {
  inScope: [
    "Build the reusable template blocks, then mount the three page builds.",
    "Implement the page-specific metadata, visible copy, internal links, CTA treatment, and structured data in the build sheets.",
    "Apply the paid-landing variant where the source parameters are present.",
    "Complete the redirect, canonical, crawlability, structured-data, and page-level acceptance checks.",
  ],
  outOfScope: [
    "No URL changes to the two existing pages; retain their existing URLs for equity.",
    "No change to paid landing page destinations during the two-week test.",
    "No replica pages yet; replica rules remain guardrails only.",
    "No form-tracking or container work in this ticket. Joel's event push is live; the separate tracking change covers the container.",
  ],
  estimate:
    "Page 1: 6-8 h. Page 3: 6-8 h. Page 2: 8-10 h. Template and blocks, once: about 8 h. Total 20-26 h excluding copy sign-off and QA. Estimates only, unverified.",
};

export type PageBuildStatus = {
  page: number;
  name: string;
  status: string;
};

export const pageBuildStatus = [
  { page: 1, name: "Ergonomic Assessment Sydney", status: "Rebuild" },
  {
    page: 2,
    name: "Manual Handling Training Sydney",
    status:
      "Shell only: noindex, out of the sitemap. Copy on hold pending Greg.",
  },
  { page: 3, name: "Ergonomic Workstation Assessment", status: "Rebuild" },
] as const satisfies readonly PageBuildStatus[];

export type AcceptanceCheck = {
  n: number;
  check: string;
  expected: string;
  owner: string;
};

export const acceptanceChecklist = [
  {
    n: 1,
    check: "Each URL returns HTTP 200; page 2 previously returned 404 and now resolves.",
    expected: "All three page responses pass; the prior page 2 404 is removed.",
    owner: "Joel",
  },
  {
    n: 2,
    check: "Exactly one self-referencing canonical per page; noindex only if the offer is unverified.",
    expected: "Canonical and indexing state follow the page decision.",
    owner: "Joel",
  },
  {
    n: 3,
    check: "JSON-LD validates in rich-result and schema validation checks.",
    expected: "The provider identity is exact and markup matches visible copy only.",
    owner: "Joel",
  },
  {
    n: 4,
    check: "All 6 FAQs are visible as accordions; one H1 per page contains the primary-query lead; answers are 40-60 words.",
    expected: "Content structure and FAQ length meet the build requirements.",
    owner: "Joel",
  },
  {
    n: 5,
    check: "Inbound and outbound internal links are live; sibling links and /contact-us#contact-form resolve.",
    expected: "The specified anchors and destinations work.",
    owner: "Joel",
  },
  {
    n: 6,
    check: "GTM-KXGD4GM is present on every built page and the general_enquiry path (not contact_enquiry) remains intact; the paid variant preserves source parameters.",
    expected: "Form and paid-variant behaviour remain compatible with the separate tracking change.",
    owner: "Marcus (tracking side)",
  },
  {
    n: 7,
    check: "No staging hosts are indexable; the XML sitemap contains only canonical indexable URLs. Page 2 stays noindex and out of the sitemap while it is a shell awaiting Greg's offer confirmation; robots allow crawling.",
    expected: "Staging and sitemap checks pass.",
    owner: "Joel, then Marcus in Search Console",
  },
  {
    n: 8,
    check: "Performance is not worse than today.",
    expected: "Record a Lighthouse or PageSpeed score for each URL before the rebuild and again after; the after score must not be lower.",
    owner: "Joel",
  },
  {
    n: 9,
    check: "Search Console URL inspection shows indexed status, the correct canonical, and no soft-404 or duplicate flags.",
    expected: "Page-level inspection passes.",
    owner: "Marcus in Search Console",
  },
] as const satisfies readonly AcceptanceCheck[];

export type OpenQuestions = {
  greg: readonly string[];
  marcus: readonly string[];
};

export const openQuestions: OpenQuestions = {
  greg: [
    "Which Sydney on-site suburbs or precincts are approved, and is there a travel-fee boundary?",
    "Which assessors or trainers can be named, with qualifications and registrations, for the proof block?",
    "For manual handling, what are the durations, attendee cap, and attendance (not RTO) certificates?",
    "What is the standard report turnaround, and can we publish a redacted sample report?",
    "Can Greg confirm vendor independence (no furniture kickbacks) and the virtual assessment platforms?",
  ],
  marcus: [
    "Confirm with Greg whether corporate manual-handling training is an offer he wants; page 2 copy waits on that answer.",
  ],
};

export const shellDefinition =
  "Shell only means: create the page at /manual-handling-training-sydney with every template block present and the section headings in place, no body copy, no FAQ answers, no schema beyond the organisation node, meta robots noindex, and the URL left out of the sitemap. Copy and schema are added when Greg confirms the corporate offer.";

export const paidLandingDefinition =
  "The paid-landing variant applies when the URL carries a gclid parameter or any utm_ parameter. It changes three things, listed below. Everything else on the page is identical.";

export const environmentBox = [
  "Repo and branch you are building on.",
  "The Statamic collection and blueprint names you map the nine blocks to (block names are ours; blueprint names are yours). Send us the mapping so the build sheets can use your names.",
  "Template filenames for the page and the paid-landing variant.",
  "How you deploy to Forge and who triggers it.",
] as const;

export const crossCutting = [
  "CPC figures in the build sheets are in US$. Do not relabel them as A$.",
  "Every specific claim about awards, programmes, durations, or the tenure wording \"over 20 years\" carries [Greg to confirm] until Greg confirms it.",
  "Image alt text: descriptive, keyword-natural, unique per image.",
  "Word counts in the sheets are guidance, not acceptance criteria.",
] as const;

export const jsonLdExample = `{"@context":"https://schema.org","@graph":[
{"@type":["LocalBusiness","ProfessionalService"],"@id":"https://ergoworksconsulting.com.au#organisation","name":"ErgoWorks Consulting","url":"https://ergoworksconsulting.com.au/"},
{"@type":"Service","@id":"https://ergoworksconsulting.com.au/ergonomic-consultants-in-sydney#service","name":"Ergonomic Assessment Sydney","serviceType":"Ergonomic Assessment","areaServed":"Sydney, NSW","provider":{"@id":"https://ergoworksconsulting.com.au#organisation"}},
{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is included in a Sydney ergonomic assessment?","acceptedAnswer":{"@type":"Answer","text":"[40 to 60 word visible answer]"}}]},
{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ergoworksconsulting.com.au/"},{"@type":"ListItem","position":2,"name":"Ergonomic Assessment Sydney"}]}]}`;

export const generated = "10 September 2026";
