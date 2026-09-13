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

export type ApprovalStatus = "Awaiting OK" | "Later" | "Not this week" | "Applied 8 Sep" | "Applied 11 Sep — pending your OK";

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
export const generated = "13 September 2026";

export const status: readonly StatusItem[] = [
  {
    label: "Form fix",
    detail:
      "GTM tag container v25 is live and correct — both the Analytics tag and the Google Ads 'Main-site Enquiry' tag are being served. On 11 Sep one general_enquiry event reached Google Analytics (our own test), so the Analytics side is proven once. The Google Ads conversion has still recorded nothing — a test with no ad click cannot attribute to Ads — and no genuine enquiry has come through. Deployed and smoke-tested on the Analytics side; email delivery, the Ads conversion and a real enquiry are not yet signed off.",
  },
  {
    label: "Greg's 12 enquiries since 31 Aug",
    detail:
      "Real in his inbox, invisible to Google for the reason above; being reconciled by source (form, phone, landing page, physio) once Greg answers three questions. Not a demand verdict either way.",
  },
  {
    label: "Sydney campaign",
    detail:
      "Serving again since the A$200 target came off on 8 Sep, but rank-limited: 3–29 impressions and 0–1 clicks a day across 8–11 Sep, about A$81 so far, no conversions. Its fifth post-change business day is Monday 14 Sep — review after that closes.",
  },
  {
    label: "Main campaign",
    detail:
      "A$155/day. We restored it from A$75 on 11 Sep in the Google Ads web console after the test enquiry — ahead of the approved trigger, which was a genuine recorded enquiry. Pending your ratification (approval 8) or a re-cut to A$75. At A$155 it is no longer budget-limited; about A$1,900 spent 31 Aug–11 Sep produced 4 phone calls and no form enquiries.",
  },
  {
    label: "Melbourne campaign",
    detail:
      "Enabled on 11 Sep in the web console, but it has no ads, so it was not serving. We re-paused it on 13 Sep; it stays paused until the four launch conditions hold.",
  },
  {
    label: "2 September landing-page lead",
    detail: "Unchanged. Leans real, still needs Greg's inbox check.",
  },
];

export const plan: readonly PlanRow[] = [
  {
    day: "Thu 10 Sep",
    what: "Done: tag container v25 published and the main-site enquiry conversion action created. Remaining: mark the key event and register the custom dimensions in Analytics",
    blockedOn: "Editor access for mjc.growth in Google Analytics, or ten minutes with Marcus",
  },
  {
    day: "Fri 11 Sep",
    what: "Test enquiry sent and recorded in Analytics. Still outstanding: confirm the test reached Greg's inbox, reconcile the 12 enquiries by source, and send weekly report 1 to Greg.",
    blockedOn: "Confirm the Friday call happened or rebook; Greg's answers",
  },
  {
    day: "Mon 14 Sep",
    what: "Ratify or reverse the 11 Sep budget restore (approval 8); Sydney fifth-business-day checkpoint",
    blockedOn: "Your decision on approval 8",
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
  {
    id: 3,
    text: "Ratify or reverse the main-campaign budget we restored to A$155/day on 11 Sep (approval 8), and your call on the landing-page-lead action (approval 9)",
  },
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
    change: "Restore the main campaign budget from A$75 to A$155/day. We applied this on 11 Sep after the test enquiry, but the approved trigger was a genuine recorded enquiry — so it is pending your ratification, or we re-cut to A$75.",
    why: "The A$75 cap had been losing 45–79% of eligible impressions to budget. A test proves the pipe; a genuine enquiry proves the signal. We restored on the test alone, which is ahead of the agreed gate — hence pending your OK.",
    reversible: true,
    needsOk: true,
    status: "Applied 11 Sep — pending your OK",
  },
  {
    id: 9,
    change: "Make the landing-page lead a primary conversion action so bidding can learn from it.",
    why: "The landing-page lead already sits in the shared conversion goal, so bidding may use it regardless of the primary/secondary flag. The real question is which goal each campaign optimises to — confirm that before changing any flags. Changing the goal set can put both campaigns back into learning for a few days.",
    reversible: true,
    needsOk: true,
    status: "Awaiting OK",
  },
];

export const cutover: readonly string[] = [
  "Joel's form event is live (9 Sep).",
  "Done: tag container v25 published (10 Sep) and the Main-site Enquiry action created; on 11 Sep one test general_enquiry reached Analytics. Still to do: mark the key event in Analytics and prove the Ads conversion via a real ad-click enquiry.",
  "One test enquiry with Greg confirms the inbox, Analytics and Google Ads each record it once.",
];

export const judging: Judging = {
  qualifiedEmployerEnquiry:
    "The fortnight's proof is 3 unrelated net-new employer enquiries with a verified consulting need, with 2 reaching a scoping call or proposal request.",
  inconclusive:
    "If traffic is too thin to run the test, the result is inconclusive, not no demand.",
  doesNotDecide: "This does not decide the Biosymm question.",
};
