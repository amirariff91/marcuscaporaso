export type WeeklyStatus = "Measured" | "Approximate" | "Not yet verified" | "Planned";

export type WeeklyAction = {
  item: string;
  owner: "dev" | "us";
};

export type WeeklyLine = {
  name: "Leads" | "Paid spend + cost per recorded lead" | "Share of searches won + biggest waste cut" | "Organic visits + direction" | "Site health" | "Next week's actions";
  fields: string;
  value: string;
  status: WeeklyStatus;
  sourceNote: string;
  actions?: readonly WeeklyAction[];
};

export type Week = {
  ending: string;
  window: string;
  generated: string;
  accountState: string;
  lines: readonly WeeklyLine[];
};

/*
 * Server-rendered source data for the gated weekly page. Append one Week
 * object for each reporting window; do not import this module into a client
 * component because the plan pack is intentionally private.
 */
export const weeks: readonly Week[] = [
  {
    ending: "30 August 2026",
    window: "Monday–Sunday · 24–30 August 2026",
    generated: "2 September 2026",
    accountState: "Main campaign and new Sydney campaign active; form reporting gap open",
    lines: [
      {
        name: "Leads",
        fields: "enquiries / calls / landing-page leads",
        value: "3 recorded enquiries + calls; landing-page leads not separately verified",
        status: "Measured",
        sourceNote: "Recorded activity only. It is not reconciled to received contacts while form reporting is unavailable.",
      },
      {
        name: "Paid spend + cost per recorded lead",
        fields: "weekly spend · cost per recorded lead",
        value: "~A$1,060 paid spend; no cost per recorded lead because the form is not reporting",
        status: "Approximate",
        sourceNote: "The spend is an approximate weekly paid snapshot; there is no reliable form denominator for the cost calculation.",
      },
      {
        name: "Share of searches won + biggest waste cut",
        fields: "share of searches won · biggest waste cut",
        value: "25% on the main campaign; new Sydney campaign 61%. Biggest waste cut: not yet quantified.",
        status: "Measured",
        sourceNote: "Campaign search-share snapshot for the reporting window; waste is kept separate until the cut is measured.",
      },
      {
        name: "Organic visits + direction",
        fields: "organic visits · week-on-week direction",
        value: "~37 organic visits/week from search data; direction not yet verified",
        status: "Approximate",
        sourceNote: "Organic row from the search-data snapshot; the short window does not establish a direction.",
      },
      {
        name: "Site health",
        fields: "form · calls · redirects/hosts · search-query reporting",
        value: "Contact form not reporting since 27 August; staging copies still visible; search reporting covers old address only",
        status: "Not yet verified",
        sourceNote: "Manual checks and reporting-status review; the form, retained hosts and current search property still need repair or verification.",
      },
      {
        name: "Next week's actions",
        fields: "action — owner",
        value: "Sprint 1 items owned by dev/us",
        status: "Planned",
        sourceNote: "Taken from the first sprint of the approved work sequence; each action keeps its named owner.",
        actions: [
          {
            item: "Restore a measurable main-site contact-form conversion path; test a real submission and lead receipt",
            owner: "dev",
          },
          {
            item: "Mark the new analytics lead events correctly; keep form-start non-key",
            owner: "us",
          },
          {
            item: "Access-control or noindex every non-production host; retire duplicates where approved",
            owner: "dev",
          },
          {
            item: "Exclude non-production and internal traffic from reporting without filtering the raw property",
            owner: "us",
          },
          {
            item: "Replace the stale sitemap submission with the current sitemap; verify it",
            owner: "us",
          },
          {
            item: "Collapse legacy blog redirect chains to one hop",
            owner: "dev",
          },
          {
            item: "Redirect trailing-slash variants to the non-slash canonical",
            owner: "dev",
          },
          {
            item: "Register the three lead-quality custom dimensions",
            owner: "us",
          },
          {
            item: "Add page-type schema to the three priority pages, one consistent business entity",
            owner: "dev",
          },
          {
            item: "Supply descriptive alt text; leave decorative images empty",
            owner: "us",
          },
          {
            item: "Add the transport-security header after the subdomain review; then assess policy headers",
            owner: "dev",
          },
          {
            item: "Allow safe public caching for brochure pages where compatible",
            owner: "dev",
          },
          {
            item: "Establish browser field/lab performance evidence; fix only verified bottlenecks",
            owner: "dev",
          },
        ],
      },
    ],
  },
];

export const leadDefinitions = [
  "Enquiry: a completed main-site form submission confirmed by a valid event and, where possible, the inbox. Form-start alone is not an enquiry.",
  "Call: a validated call conversion from call forwarding or calls from ads. Phone clicks are reported separately until the import and underlying call are confirmed.",
  "Landing-page lead: a completed submission on the corporate landing page, reported separately from main-site enquiries and deduplicated against the same underlying contact.",
  "Never count page views, directions, newsletter sign-ups, email clicks or internal/test events as leads. No current report establishes qualified-lead status.",
] as const;

export const knownGaps = [
  "The main-site form has been invisible to reporting since the 27 August cutover.",
  "The phone-click import has an earlier gap.",
  "Non-production hosts have been sending analytics hits.",
  "Search-query reporting access is not yet available.",
  "The landing-page action-level total can lag the campaign report.",
] as const;
