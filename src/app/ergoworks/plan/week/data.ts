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

export type ApprovalStatus = "Awaiting OK" | "Later" | "Not this week" | "Applied 8 Sep";

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
export const generated = "10 September 2026";

export const status: readonly StatusItem[] = [
  {
    label: "Form fix",
    detail:
      "Live since 9 Sep; the main-site form now sends the enquiry event on a successful submission, with duplicate and bot protection. Our tag-container update (version 25) is not yet published, so Google Analytics and Google Ads still record no main-site enquiries since 27 Aug. That publish is the next step and it is on us, not Joel.",
  },
  {
    label: "Greg's 12 enquiries since 31 Aug",
    detail:
      "Real in his inbox, invisible to Google for the reason above; being reconciled by source (form, phone, landing page, physio) once Greg answers three questions. Not a demand verdict either way.",
  },
  {
    label: "Sydney campaign",
    detail:
      "Serving again after the A$200 cost-per-lead target was removed on 8 Sep: 18, 13 and 20 impressions and one click a day on 8, 9 and 10 Sep, A$33 for the week so far; no conversions yet.",
  },
  {
    label: "Main campaign",
    detail:
      "A$75/day since 8 Sep as approved; 42–79 impressions and 6–8 clicks a day, 45–79% of eligible impressions now lost to budget; A$576 Monday to Thursday, with two call conversions this week (7 and 9 Sep) and three since 31 Aug; no form enquiries recorded.",
  },
  {
    label: "Melbourne campaign",
    detail: "Built and paused at A$50/day as approved; stays paused until the four conditions hold.",
  },
  {
    label: "2 September landing-page lead",
    detail: "Unchanged. Leans real, still needs Greg's inbox check.",
  },
];

export const plan: readonly PlanRow[] = [
  {
    day: "Thu 10 Sep",
    what: "Publish tag container v25 keyed on the live event, create the main-site enquiry conversion action, mark the key event",
    blockedOn: "Editor access for mjc.growth in Analytics and Tag Manager, or ten minutes with Marcus",
  },
  {
    day: "Fri 11 Sep",
    what: "One test enquiry with Greg, weekly report 1 to Greg, reconcile the 12 enquiries by source",
    blockedOn: "Greg's ten-minute slot and his answers",
  },
  {
    day: "Mon 14 Sep",
    what: "Restore the main campaign budget once one test enquiry is recorded",
    blockedOn: "Approval 8",
  },
  {
    day: "Week 2",
    what: "Joel builds the template and three pages from the ticket; keep the Ads landing page unchanged for the two-week test; Melbourne decision against the four conditions; reassessment memo",
    blockedOn: "Joel's capacity, Greg's facts",
  },
];

export const asks: readonly Ask[] = [
  {
    id: 1,
    text: "Editor access for mjc.growth in Google Analytics and Tag Manager, or ten minutes in Admin with us today",
  },
  {
    id: 2,
    text: "A ten-minute slot with Greg for one test enquiry, plus his answers to: how many of the 12 came by form, phone, landing page or physio; any duplicates or tests; the exact window",
  },
  { id: 3, text: "Approval numbers for items 8 and 9 below" },
  { id: 4, text: "Whether the 2 September landing-page lead was a test or real" },
];

export const approvals: readonly Approval[] = [
  {
    id: 1,
    change: "Remove the A$200 cost-per-lead target from Sydney. Keep Maximise Conversions and the A$100/day budget.",
    why: "Restore delivery with a bounded recovery test after bidding was constrained on a campaign with no conversion history.",
    reversible: true,
    needsOk: true,
    status: "Applied 8 Sep",
  },
  {
    id: 2,
    change: "Add the 9 immediate negative phrases to the main campaign, then add 3 regional negatives after Greg confirms no ACT or Queensland delivery.",
    why: "Remove demonstrated competitor, care-training and out-of-area waste without blocking relevant buying-intent terms.",
    reversible: true,
    needsOk: true,
    status: "Applied 8 Sep",
  },
  {
    id: 3,
    change: "Your choice: reduce the main campaign budget to A$75/day while the form is untracked.",
    why: "Limit unmeasured spend, knowing this also cuts impression share and call volume. Reversible on approval 8.",
    reversible: true,
    needsOk: true,
    status: "Applied 8 Sep",
  },
  {
    id: 4,
    change: "Create the Melbourne campaign paused at A$50/day and add a Melbourne negative to Sydney.",
    why: "Test Melbourne demand without disrupting Sydney. Enable only after the form is tracked, Sydney delivery recovers, Greg confirms capacity, and you set a total spend ceiling.",
    reversible: true,
    needsOk: true,
    status: "Applied 8 Sep",
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
  {
    id: 8,
    change: "Restore the main campaign budget from A$75 to A$155/day once tag container v25 is published and one test enquiry is recorded.",
    why: "The A$75 cap now loses 45–79% of eligible impressions to budget; restoring it after the enquiry signal is back lets bidding learn from real enquiries.",
    reversible: true,
    needsOk: true,
    status: "Awaiting OK",
  },
  {
    id: 9,
    change: "Make the landing-page lead a primary conversion action so bidding can learn from it.",
    why: "It has counted only as a secondary action, so the 2 September lead taught the bidding nothing. Changing the goal set can put both campaigns back into learning for a few days.",
    reversible: true,
    needsOk: true,
    status: "Awaiting OK",
  },
];

export const cutover: readonly string[] = [
  "Joel's form event is live (9 Sep).",
  "We publish the tag-container update and the new main-site enquiry action, then mark the key event in Analytics.",
  "One test enquiry with Greg confirms the inbox, Analytics and Google Ads each record it once.",
];

export const judging: Judging = {
  qualifiedEmployerEnquiry:
    "The fortnight's proof is 3 unrelated net-new employer enquiries with a verified consulting need, with 2 reaching a scoping call or proposal request.",
  inconclusive:
    "If traffic is too thin to run the test, the result is inconclusive, not no demand.",
  doesNotDecide: "This does not decide the Biosymm question.",
};
