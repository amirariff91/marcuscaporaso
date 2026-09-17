/* ── Growth review — week one of the fortnight demand test ───────────────────
   Live pull 18 Sep 2026, 01:30 AEST. Covers Mon 14 – Thu 17 Sep: FOUR serving
   days, not five. Friday had not served when this was pulled.

   This repo is PUBLIC. Deliberately absent, and to stay absent:
   Google Ads / GA4 / GTM account and property IDs, conversion-action IDs, and
   competitor brand names (a competitor search term is described by category,
   never named). Only the class of figure already published on /plan/week
   appears here — spend, click cost, counts.

   Rounding: daily figures are rounded to cents and therefore sum to A$822.18 /
   A$1,199.97. Campaign and window totals are computed from unrounded values and
   are the accurate ones. Say which basis a figure uses if anyone sums a column. */

export const pulledAt = "18 September 2026, 01:30 AEST";
export const windowLabel = "Mon 14 – Thu 17 September 2026";
export const servingDays = 4;

export type Verdict = "not-answerable" | "pending" | "answered";

export type ConfidenceItem = {
  question: string;
  verdict: Verdict;
  verdictLabel: string;
  answer: string;
};

export const confidence: readonly ConfidenceItem[] = [
  {
    question: "Is Sydney reaching genuine corporate intent?",
    verdict: "not-answerable",
    verdictLabel: "Not answerable",
    answer:
      "Only 59.2% of its spend has a disclosed search term, below the 60% floor we apply before quoting any score. The honest answer is a range, not a number: somewhere between 38% and 79% of Sydney's spend reached genuine corporate intent.",
  },
  {
    question: "Did real employer demand show up?",
    verdict: "pending",
    verdictLabel: "Pending Greg",
    answer:
      "Three enquiries completed — one from a paid click, two recorded as direct. None verified, and none counted. If all three are real and net-new, that meets the count half of the target — three enquiries. Two still have to reach a scoping call or proposal.",
  },
  {
    question: "Does the landing-page path record anything?",
    verdict: "not-answerable",
    verdictLabel: "Still unproven",
    answer:
      "Eight sessions, one form start, no submission. Nothing has completed through that form since 2 Sep. Both geo campaigns point at it.",
  },
];

export type Tile = {
  label: string;
  value: string;
  unavailable?: boolean;
  note: string;
};

export const tiles: readonly Tile[] = [
  {
    label: "Spend",
    value: "A$1,199.96",
    note: "Four serving days, 89 clicks, blended A$13.48 per click.",
  },
  {
    label: "Search impression share",
    value: "31%",
    note: "Main. Sydney 80%, Melbourne 71%. Main loses 54% to ad rank and 14% to budget.",
  },
  {
    label: "Submitted enquiries",
    value: "3",
    note: "15 Sep from a paid click; 16 and 17 Sep direct. Two are new since the last report.",
  },
  {
    label: "Qualified enquiries",
    value: "Not yet",
    unavailable: true,
    note: "Qualification is Greg confirming a real employer need. There is no CRM — this is a person answering, not a system.",
  },
  {
    label: "Cost per qualified enquiry",
    value: "Undefined",
    unavailable: true,
    note: "Cannot be computed against zero qualified. Quoting spend divided by three submitted would assume the answer.",
  },
  {
    label: "Qualification rate",
    value: "Undefined",
    unavailable: true,
    note: "Available the moment Greg splits the three. That is the highest-value ten minutes of the week.",
  },
];

export type Day = {
  label: string;
  main: number;
  sydney: number;
  melbourne: number;
  clicks: number;
};

export const days: readonly Day[] = [
  { label: "Mon 14", main: 145.29, sydney: 114.17, melbourne: 0, clicks: 18 },
  { label: "Tue 15", main: 175.09, sydney: 165.99, melbourne: 0, clicks: 23 },
  { label: "Wed 16", main: 193.14, sydney: 14.73, melbourne: 0, clicks: 27 },
  { label: "Thu 17", main: 308.66, sydney: 82.9, melbourne: 0, clicks: 21 },
];

export type CampaignRow = {
  name: string;
  series: "main" | "sydney" | "melbourne";
  impressions: number;
  clicks: number;
  cost: number;
  cpc: number | null;
  impressionShare: number;
  conversions: number;
};

export const campaigns: readonly CampaignRow[] = [
  { name: "Main (national)", series: "main", impressions: 898, clicks: 78, cost: 822.17, cpc: 10.54, impressionShare: 31, conversions: 2 },
  { name: "Sydney", series: "sydney", impressions: 221, clicks: 11, cost: 377.79, cpc: 34.34, impressionShare: 80, conversions: 0 },
  { name: "Melbourne", series: "melbourne", impressions: 9, clicks: 0, cost: 0, cpc: null, impressionShare: 71, conversions: 0 },
];

export const campaignTotals = {
  impressions: 1128,
  clicks: 89,
  cost: 1199.96,
  cpc: 13.48,
  conversions: 2,
};

/* The campaign table shows 2 conversions on main but the ledger accounts for one
   paid enquiry. Review flagged the gap: the second is a call, not a form. Shown
   explicitly so nobody is ambushed by "what were the two conversions?". */
export type ConversionRow = { when: string; action: string; reconciles: string };

export const conversionReconciliation: readonly ConversionRow[] = [
  { when: "Mon 14 Sep", action: "Calls from ads", reconciles: "A phone call, not a form submission — so it is not in the enquiry ledger" },
  { when: "Tue 15 Sep", action: "Main-site enquiry", reconciles: "The paid enquiry in the ledger, matched in analytics at 11:13" },
];

export const clicksGate = { required: 100, achieved: 89, pacing: 222 };

/* ── Sydney search-term coverage ───────────────────────────────────────────── */

export const coverage = {
  visible: 223.66,
  visibleClicks: 4,
  undisclosed: 154.13,
  undisclosedClicks: 7,
  total: 377.79,
  percent: 59.2,
  floor: 60,
};

export type IntentBucket = {
  label: string;
  cost: number;
  term: string;
  tone: "focus" | "off";
};

export const intent: readonly IntentBucket[] = [
  { label: "Genuine corporate", cost: 144.15, term: "ergonomic consultant", tone: "focus" },
  { label: "Home office", cost: 36.86, term: "home office ergonomic assessment", tone: "off" },
  { label: "Competitor name", cost: 25.71, term: "a competitor's company name", tone: "off" },
  { label: "Chair / product", cost: 16.94, term: "ergonomic chair assessment", tone: "off" },
];

export type KeywordRow = {
  keyword: string;
  match: "Exact" | "Phrase";
  clicks: number;
  cost: number;
  disclosed: "full" | "partial" | "none";
  disclosedLabel: string;
};

export const keywords: readonly KeywordRow[] = [
  { keyword: "ergonomic consultant", match: "Exact", clicks: 1, cost: 144.15, disclosed: "full", disclosedLabel: "Yes" },
  { keyword: "ergonomic consultants", match: "Phrase", clicks: 2, cost: 93.61, disclosed: "none", disclosedLabel: "None" },
  { keyword: "ergonomic assessments", match: "Phrase", clicks: 3, cost: 53.51, disclosed: "partial", disclosedLabel: "1 of 3" },
  { keyword: "office ergonomic assessment", match: "Exact", clicks: 1, cost: 36.86, disclosed: "full", disclosedLabel: "Yes" },
  { keyword: "ergonomics company", match: "Phrase", clicks: 1, cost: 25.71, disclosed: "full", disclosedLabel: "Yes" },
  { keyword: "online ergonomic assessment", match: "Phrase", clicks: 1, cost: 12.85, disclosed: "none", disclosedLabel: "None" },
  { keyword: "ergonomics consultant", match: "Phrase", clicks: 1, cost: 9.74, disclosed: "none", disclosedLabel: "None" },
  { keyword: "ergonomic assessment", match: "Phrase", clicks: 1, cost: 1.36, disclosed: "none", disclosedLabel: "None" },
];

/* ── The two enquiry paths ─────────────────────────────────────────────────── */

export type Stage = { label: string; value: number | null; naLabel?: string };

export type Funnel = {
  title: string;
  state: "verified" | "unproven";
  stateLabel: string;
  stages: readonly Stage[];
  note: string;
};

export const funnels: readonly Funnel[] = [
  {
    title: "Main-site path",
    state: "verified",
    stateLabel: "Verified",
    note: "Repaired in tag container v25 and seen working end to end twice — organically on 11 Sep, then from a paid click on 15 Sep at 11:13. Sessions counts the home page and the manual-handling page, the two that produced form starts.",
    stages: [
      { label: "Sessions", value: 105 },
      { label: "Form starts", value: 4 },
      { label: "Submitted", value: 3 },
      { label: "Valid corporate", value: null, naLabel: "not split" },
      { label: "Qualified", value: null, naLabel: "pending" },
    ],
  },
  {
    title: "Landing-page path",
    state: "unproven",
    stateLabel: "Unproven",
    note: "A separate, older route the v25 repair never touched. Sydney and Melbourne both point here. Sydney paid A$377.79 for those eight sessions — A$47.22 each.",
    stages: [
      { label: "Sessions", value: 8 },
      { label: "Form starts", value: 1 },
      { label: "Submitted", value: 0 },
      { label: "Valid corporate", value: 0 },
      { label: "Qualified", value: 0 },
    ],
  },
];

export type LedgerRow = {
  when: string;
  page: string;
  source: string;
  inAds: string;
  qualified: string;
};

export const ledger: readonly LedgerRow[] = [
  { when: "Tue 15 Sep, 11:13", page: "Manual handling training", source: "Paid — main", inAds: "Yes — recorded", qualified: "Pending Greg" },
  { when: "Wed 16 Sep", page: "Home page", source: "Direct", inAds: "Correctly absent — direct", qualified: "Pending Greg" },
  { when: "Thu 17 Sep", page: "Home page", source: "Direct", inAds: "Correctly absent — direct", qualified: "Pending Greg" },
];

/* ── Governance ────────────────────────────────────────────────────────────── */

/* The fortnight contract has been broken three times, all logged and disclosed.
   Enumerated here because a review flagged that "three times" was asserted
   without saying which three — leaving Melbourne's launch ambiguous between a
   known break and an unacknowledged fourth. It is the third. */
export const contractBreaks: readonly string[] = [
  "The conversion-goal flag changed on 15 Sep — reverted 16 Sep",
  "Sydney negative keywords added on 15 Sep — the chair term removed again 16 Sep",
  "Melbourne launched on 15 Sep, inside the frozen window",
];

export const heldConstant: readonly string[] = [
  "Budgets — main A$155/day and Sydney A$100/day, the pair approved for this window",
  "Bidding, campaign structure and geo targets",
  "Negative keywords and conversion-goal configuration",
  "Form code and the tag container",
  "Paid landing pages",
];

export const queued: readonly string[] = [
  "The opaque phrase-match spend — a match-type change, not a budget cut",
  "Thursday's 2× budget overdelivery",
  "Removing a dead conversion action from the bidding goal",
  "Whether three campaigns at this volume should be consolidated",
  "Duplicate keywords and the untested dynamic ad group",
];

export type OpenRow = { happened: string; means: string; doing: string; owner?: string };

export const openItems: readonly OpenRow[] = [
  {
    happened: "Two enquiries arrived direct, 16 and 17 Sep",
    means: "The fortnight target could already be met, or they could be internal tests",
    doing: "Greg splits all three — real employer, individual, or test",
    owner: "Greg",
  },
  {
    happened: "Landing-page form has completed nothing since 2 Sep",
    means: "Sydney and Melbourne are spending against an unverified path",
    doing: "The no-cost stage of the test is written — needs ten minutes from Greg and Joel",
    owner: "Greg + Joel",
  },
  {
    happened: "Spend pacing to about A$3,000 against an approved A$2,550",
    means: "About 18% above the combination approved for this window, on main's overdelivery — and the A$1.5–2k disclosed on 13 Sep covered main alone and was never restated",
    doing: "Restating the approved basis now. Melbourne's budget is not counted as approved",
    owner: "Marcus",
  },
  {
    happened: "Sydney search-term coverage fell to 59.2%",
    means: "The agreed Friday metric is not reportable as a score this week",
    doing: "Report the four clicks as findings; re-read at window close",
    owner: "Us",
  },
  {
    happened: "Manual-handling search demand is sector-specific",
    means: "A generic corporate page has no demand to win; aged care and healthcare do",
    doing: "Page 2 on hold — Greg decides whether that vertical is wanted at all",
    owner: "Greg",
  },
];

export const pacing = {
  spent: 1199.96,
  perDay: 300,
  projected: 3000,
  /* Two ceilings, and which one is cited matters.
     APPROVED COMBINATION for this window is main + Sydney only — Melbourne was
     to stay paused (strategy §2-P2/§3) and its 15 Sep launch is logged as the
     third contract break. So the approved line prices at (155+100) x 10 =
     A$2,550, and ~A$3,000 paces about 18% above it.
     ALL THREE RUNNING would be A$3,050, but quoting that as "approved" would
     price an unapproved combination as approved and retrospectively legitimise
     the break — a correction flagged in review. Melbourne has spent A$0, so
     pacing is unaffected in practice either way.
     The A$1.5–2k disclosed on 13 Sep matches main alone (A$155 x 10 = A$1,550)
     and was never restated. That disclosure error is ours. */
  ceilingApproved: 2550,
  ceilingAllThree: 3050,
  ceilingMainOnly: 1550,
  overApprovedPct: 18,
  mainSoFar: 822.17,
  mainProjected: 2055,
  sydneySoFar: 377.79,
  sydneyProjected: 944,
  sydneyCeiling: 1000,
};

/* Sydney intent, expressed as a bounded range over the FULL campaign spend
   rather than a point estimate on the visible portion. The floor assumes every
   undisclosed click was off-intent, the ceiling assumes every one was genuine.
   A range is honest at 59.2% coverage in a way a single percentage is not. */
export const intentBracket = { floor: 38.2, ceiling: 79.0, visibleOnly: 64.5 };

/* Two of the three visible off-intent clicks came through phrase match. The
   third and largest — home office, A$36.86 — arrived on an EXACT keyword, so
   "phrase produced all the off-intent traffic" is false and was cut in review. */
export const offIntentViaPhrase = 2;
export const offIntentTotal = 3;
