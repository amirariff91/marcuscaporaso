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
        value: "A$1,033 paid spend across both consulting campaigns; no cost per recorded lead because the form is not reporting",
        status: "Measured",
        sourceNote: "Actual weekly paid spend for the reporting window; there is no reliable form denominator for the cost calculation.",
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
        value: "31 organic clicks / 4,901 impressions this week (56 / 4,948 the week before); a floor after 27 August because search reporting still covers only the old address",
        status: "Measured",
        sourceNote: "Search-reporting weekly clicks and impressions for the old www address; the new address is not yet covered, so the figure understates from 27 August.",
      },
      {
        name: "Site health",
        fields: "form · calls · redirects/hosts · search-query reporting",
        value: "Contact form not reporting since 27 August; calls still recorded; staging copies still visible; search reporting covers the old address only",
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
  {
    ending: "6 September 2026",
    window: "Monday–Sunday · 31 August–6 September 2026",
    generated: "8 September 2026",
    accountState:
      "Main campaign active; new Sydney campaign barely serving from 3 Sep (bidding target on our side, being reversed); main-site form still not reporting",
    lines: [
      {
        name: "Leads",
        fields: "enquiries / calls / landing-page leads",
        value:
          "1 recorded call (main campaign) + 1 landing-page enquiry on 2 Sep being confirmed with the client; main-site form enquiries not reported",
        status: "Measured",
        sourceNote:
          "Recorded activity only; the main-site contact form has not reported since the 27 Aug site launch.",
      },
      {
        name: "Paid spend + cost per recorded lead",
        fields: "weekly spend · cost per recorded lead",
        value:
          "A$1,157 across both consulting campaigns (main A$1,109, Sydney A$48); no cost per recorded lead while the form is not reporting",
        status: "Measured",
        sourceNote:
          "Actual weekly paid spend for the reporting window; there is no reliable form denominator for the cost calculation.",
      },
      {
        name: "Share of searches won + biggest waste cut",
        fields: "share of searches won · biggest waste cut",
        value:
          "Main campaign 26% (52% lost to rank, 22% lost to budget); Sydney campaign 68% on only 60 impressions. Biggest waste cut: ~12 further off-target search terms proposed, pending approval.",
        status: "Measured",
        sourceNote:
          "Campaign search-share snapshot for the reporting window; waste is kept separate until the cut is measured.",
      },
      {
        name: "Organic visits + direction",
        fields: "organic visits · week-on-week direction",
        value:
          "19 organic clicks on the old www property (31 the week before); the property under-reports the new site until the domain property is verified",
        status: "Approximate",
        sourceNote:
          "Search-reporting weekly clicks and impressions for the old www address; the new address is not yet covered, so the figure understates from 27 August.",
      },
      {
        name: "Site health",
        fields: "form · calls · redirects/hosts · search-query reporting",
        value:
          "Form: not reporting. Calls: reporting. Staging copies: still public. Search Console: www only, old sitemap.",
        status: "Measured",
        sourceNote:
          "Manual checks and reporting-status review; the form, retained hosts and current search property still need repair or verification.",
      },
      {
        name: "Next week's actions",
        fields: "action — owner",
        value: "See actions",
        status: "Planned",
        sourceNote: "Owners and dates in the plan pack.",
        actions: [
          {
            item: "Deploy the contact-form tracking event and hide staging copies",
            owner: "dev",
          },
          {
            item: "Publish the tracking update and run one test enquiry with the client",
            owner: "us",
          },
          {
            item: "Remove the Sydney bidding target; add approved off-target search terms",
            owner: "us",
          },
          {
            item: "Verify the bare domain in Search Console and submit the current sitemap",
            owner: "dev",
          },
        ],
      },
    ],
  },
  {
    ending: "13 September 2026",
    window: "Monday–Sunday · 7–13 September 2026",
    generated: "10 September 2026 (partial week, Monday to Thursday)",
    accountState:
      "Main campaign at A$75/day; Sydney campaign serving again without a cost-per-lead target; Melbourne built and paused; main-site form event live from 9 Sep but not yet reaching reporting",
    lines: [
      {
        name: "Leads",
        fields: "enquiries / calls / landing-page leads",
        value:
          "2 recorded calls this week (7 and 9 Sep), 3 since 31 Aug; 0 recorded form enquiries; the client reports 12 inbox enquiries since 31 Aug, not yet reconciled by source",
        status: "Approximate",
        sourceNote:
          "The form event is live but not yet reaching reporting; the client-reported inbox count is unverified pending source reconciliation.",
      },
      {
        name: "Paid spend + cost per recorded lead",
        fields: "weekly spend · cost per recorded lead",
        value:
          "A$609 Monday to Thursday (main A$576, Sydney A$33); no cost per recorded lead while form enquiries are not reported",
        status: "Measured",
        sourceNote:
          "Recorded spend only; the form is not yet reaching reporting, so there is no reliable denominator for cost per recorded lead.",
      },
      {
        name: "Share of searches won + biggest waste cut",
        fields: "share of searches won · biggest waste cut",
        value:
          "Main campaign 16–22% (45–79% lost to budget after the A$75/day cap); Sydney 50–61% on 51 impressions. Biggest waste cut: nine off-target terms excluded on 8 Sep; one A$55 competitor-brand click on 8–10 Sep still to exclude",
        status: "Measured",
        sourceNote:
          "Campaign search-share snapshot for Monday to Thursday; the excluded terms and competitor-brand click are the current waste notes.",
      },
      {
        name: "Organic visits + direction",
        fields: "organic visits · week-on-week direction",
        value: "Not yet verified this week; search reporting still covers only the old www address",
        status: "Not yet verified",
        sourceNote:
          "Search reporting still covers only the old www address, so this week's organic direction is not yet verified.",
      },
      {
        name: "Site health",
        fields: "form · calls · redirects/hosts · search-query reporting",
        value:
          "Form: event live since 9 Sep; tag container v25 published 10 Sep, not yet tested end to end and no form enquiry recorded through it. Calls: reporting. Staging copies and Search Console: unchanged from last week, not re-checked",
        status: "Not yet verified",
        sourceNote:
          "The form event is live but the reporting tag container is pending publication; calls, staging copies and Search Console were not re-checked.",
      },
      {
        name: "Next week's actions",
        fields: "action — owner",
        value: "See actions",
        status: "Planned",
        sourceNote: "Owners and sequencing are shown in the current plan.",
        actions: [
          {
            item: "Mark the key event and custom dimensions in Analytics; run the test enquiry",
            owner: "us",
          },
          {
            item: "Run one test enquiry with Greg and reconcile the 12",
            owner: "us",
          },
          {
            item: "Restore the main budget on approval 8",
            owner: "us",
          },
          {
            item: "Build the template and three pages from the ticket",
            owner: "dev",
          },
          {
            item: "Verify the bare domain in Search Console and submit the current sitemap",
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
  "Search-query reporting covers only the old www address until the new domain is verified.",
  "The landing-page action-level total can lag the campaign report.",
  "The main-site form event has been live since 9 September; the tag container that reports it was published on 10 September and is not yet proven end to end.",
] as const;
