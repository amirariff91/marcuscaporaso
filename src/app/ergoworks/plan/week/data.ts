export type StatusItem = {
  label: string;
  detail: string;
};

export type PlanRow = {
  day: string;
  what: string;
  blockedOn: string;
};

export type Ask = {
  id: number;
  text: string;
};

export type ApprovalStatus = "Awaiting OK" | "Later" | "Not this week";

export type Approval = {
  id: number;
  change: string;
  why: string;
  reversible: true;
  needsOk: true;
  status: ApprovalStatus;
};

export type Judging = {
  qualifiedEmployerEnquiry: string;
  inconclusive: string;
  doesNotDecide: string;
};

export const weekLabel = "Week of 8 September 2026";
export const generated = "8 September 2026";

export const status: readonly StatusItem[] = [
  {
    label: "Form fix",
    detail: "Not live. The main-site form still submits in-page and sends no tracking event.",
  },
  {
    label: "Sydney campaign",
    detail:
      "Barely serving since Wednesday 3 September. Most likely cause: an A$200 cost-per-lead target set from our login on 31 August on a campaign with no conversion history, plus the main campaign outbidding it on the same searches. Being reversed on approval.",
  },
  {
    label: "2 September landing-page lead",
    detail: "Leans real and still needs Greg's inbox check.",
  },
  {
    label: "Main campaign spend",
    detail: "Spent A$1,109 last week with only calls reporting.",
  },
];

export const plan: readonly PlanRow[] = [
  {
    day: "Tue 8 Sep",
    what: "Reply and re-date the Greg document; runbook ready; tracking container workspace staged.",
    blockedOn: "Nothing",
  },
  {
    day: "Wed 9 Sep",
    what: "Apply approved Google Ads changes and start page copy.",
    blockedOn: "Marcus's OK",
  },
  {
    day: "Thu 10 Sep",
    what: "Cut over when Joel pushes; test one enquiry with Greg; swap the Search Console domain and sitemap; continue copy.",
    blockedOn: "Joel's push and Greg's DNS",
  },
  {
    day: "Fri 11 Sep",
    what: "Send weekly report 1 to Greg; send copy drafts to Marcus; enable Melbourne only if the form is tracked.",
    blockedOn: "Nothing",
  },
  {
    day: "Week 2",
    what: "Greg facts, then Joel builds the template and three pages if capacity allows; keep the Ads landing page unchanged for the two-week test; write the reassessment memo.",
    blockedOn: "Joel's capacity",
  },
];

export const asks: readonly Ask[] = [
  { id: 1, text: "Joel's push date for the form fix." },
  {
    id: 2,
    text: "Whether the 2 September landing-page lead was a test or a real enquiry.",
  },
  {
    id: 3,
    text: "Ten minutes in Google Analytics Admin to set key events and three custom dimensions, or access for mjc.growth as Editor.",
  },
  { id: 4, text: "Approval for the Google Ads changes below." },
];

export const approvals: readonly Approval[] = [
  {
    id: 1,
    change: "Remove the A$200 cost-per-lead target from Sydney. Keep Maximise Conversions and the A$100/day budget.",
    why: "Restore delivery with a bounded recovery test after bidding was constrained on a campaign with no conversion history.",
    reversible: true,
    needsOk: true,
    status: "Awaiting OK",
  },
  {
    id: 2,
    change: "Add the 9 immediate negative phrases to the main campaign, then add 3 regional negatives after Greg confirms no ACT or Queensland delivery.",
    why: "Remove demonstrated competitor, care-training and out-of-area waste without blocking relevant buying-intent terms.",
    reversible: true,
    needsOk: true,
    status: "Awaiting OK",
  },
  {
    id: 3,
    change: "Your choice: reduce the main campaign budget to A$75/day while the form is untracked.",
    why: "Limit unmeasured spend, knowing this also cuts impression share and call volume.",
    reversible: true,
    needsOk: true,
    status: "Awaiting OK",
  },
  {
    id: 4,
    change: "Create the Melbourne campaign paused at A$50/day and add a Melbourne negative to Sydney.",
    why: "Test Melbourne demand without disrupting Sydney. Enable only after the form is tracked, Sydney delivery recovers, Greg confirms capacity, and you set a total spend ceiling.",
    reversible: true,
    needsOk: true,
    status: "Awaiting OK",
  },
  {
    id: 5,
    change: "Apply a cost-per-lead target to the main campaign later.",
    why: "Wait for the form to be live for at least 14 days, at least 12 verified conversions, and the negatives to be live. Applying it now could starve delivery.",
    reversible: true,
    needsOk: true,
    status: "Later",
  },
  {
    id: 6,
    change: "Pause modified-broad keywords on the main campaign.",
    why: "Their syntax does not prove broad match. Pausing them could cut converting traffic.",
    reversible: true,
    needsOk: true,
    status: "Not this week",
  },
  {
    id: 7,
    change: "Restructure the main campaign into three B2B themes.",
    why: "Changing structure during the fortnight would confound the test and delay proof.",
    reversible: true,
    needsOk: true,
    status: "Not this week",
  },
];

export const cutover: readonly string[] = [
  "Joel pushes the contact_enquiry event and hides staging copies.",
  "We publish the tracking update and the new Google Ads action within the hour.",
  "One test enquiry with Greg confirms the inbox and reporting.",
];

export const judging: Judging = {
  qualifiedEmployerEnquiry:
    "The fortnight's proof is 3 unrelated net-new employer enquiries with a verified consulting need, with 2 reaching a scoping call or proposal request.",
  inconclusive:
    "If traffic is too thin to run the test, the result is inconclusive, not no demand.",
  doesNotDecide: "This does not decide the Biosymm question.",
};
