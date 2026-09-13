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
      "GTM tag container v25 is live and contains both tags. Analytics received one general_enquiry event on 11 Sep, probably the reported test — that match is not yet confirmed. The Google Ads 'Main-site Enquiry' conversion has zero attributed conversions. No genuine main-site enquiry has yet been verified through the repaired path, and email receipt and the Ads-tag request remain unverified.",
  },
  {
    label: "Greg's 12 enquiries since 31 Aug",
    detail:
      "Real in his inbox. Google already records calls and the landing-page lead, so the gap is not all form tracking; the channels (form, phone, landing page, physio), duplicates and any tests are not yet reconciled. Not a demand verdict either way.",
  },
  {
    label: "Sydney campaign",
    detail:
      "Serving again since the A$200 target came off on 8 Sep, but rank-limited — losing impressions to rank, not budget: low volume, 0–1 clicks a day, no conversions. Its fifth post-change business day is Monday 14 Sep — review after that closes.",
  },
  {
    label: "Main campaign",
    detail:
      "A$155/day. We restored it from A$75 on 11 Sep in the Google Ads web console after the test enquiry — ahead of the approved trigger, which was a genuine recorded enquiry. Pending your decision (approval 8): keep A$155, or re-cut to A$75. Post-restore delivery has not been measured separately yet; the latest daily figure showed 42% of impressions lost to budget on 11 Sep, the changeover day. About A$1,900 spent 31 Aug–11 Sep produced 4 phone calls and no recorded form enquiries.",
  },
  {
    label: "Melbourne campaign",
    detail:
      "We enabled it on 11 Sep in the web console ahead of its four launch conditions; when checked on 13 Sep it had no ads and no delivery, so we re-paused it. It stays paused until those conditions hold.",
  },
  {
    label: "2 September landing-page lead",
    detail: "Unchanged. Leans real, still needs Greg's inbox check.",
  },
];

export const plan: readonly PlanRow[] = [
  {
    day: "Thu 10 Sep",
    what: "Done: tag container v25 published and the main-site enquiry conversion action created. Remaining (ours): verify and mark the general_enquiry key event and register the custom dimensions in Analytics",
    blockedOn: "Nothing from you — we hold the access; we will flag it only if that changes",
  },
  {
    day: "Fri 11 Sep",
    what: "Test enquiry sent and recorded in Analytics. Still outstanding: confirm the test reached Greg's inbox, reconcile the 12 enquiries by source, and send weekly report 1 to Greg.",
    blockedOn: "Confirm the Friday call happened or rebook; Greg's answers",
  },
  {
    day: "Mon 14 Sep",
    what: "Decide approval 8 (keep A$155 or re-cut to A$75) before it serves again; Sydney fifth-business-day checkpoint",
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
    text: "Keep or reverse the main-campaign budget we restored to A$155/day on 11 Sep (approval 8) — ideally before it serves again on Monday",
  },
  {
    id: 2,
    text: "A ten-minute slot with Greg: confirm the 11 Sep test reached his inbox exactly once, and split the 12 enquiries by source (form, phone, landing page, physio), any duplicates or tests, and the exact window",
  },
  { id: 3, text: "Whether the 2 September landing-page lead was a test or real" },
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
    change: "Add the 9 immediate negative phrases to the main campaign. (Three regional negatives remain conditional — not applied — until Greg confirms no ACT or Queensland delivery.)",
    why: "Remove demonstrated competitor, care-training and out-of-area waste without blocking relevant buying-intent terms.",
    reversible: true,
    needsOk: true,
    status: "Applied 8 Sep",
  },
  {
    id: 3,
    change: "Your choice: reduce the main campaign budget to A$75/day while the form is untracked. (Applied 8 Sep; superseded by the 11 Sep restore — see approval 8.)",
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
    change: "Restore the main campaign budget from A$75 to A$155/day. We applied this on 11 Sep after the test enquiry; the approved trigger was a genuine recorded enquiry, so this is pending your ratification — keep it, or we re-cut to A$75.",
    why: "The A$75 cap had been losing 54–79% of eligible impressions to budget on 8–10 Sep. A test proves the pipe; a genuine enquiry proves the signal — we restored on the test alone, ahead of the agreed gate. Please decide by Monday 14 Sep, before it serves again: keep A$155/day or re-cut to A$75. Holding A$155 is about A$80/day more than A$75 (~A$2,400/month); nothing serves over the weekend, so a Monday decision caps the exposure.",
    reversible: true,
    needsOk: true,
    status: "Applied 11 Sep — pending your OK",
  },
  {
    id: 9,
    change: "Verify which conversion goal each campaign optimises to, and the 2 September lead's quality, before proposing any change to the landing-page-lead action.",
    why: "The landing-page lead already sits in the custom conversion goal 6458792967, so bidding may already use it regardless of the primary/secondary flag. Which campaigns actually optimise to that goal is unconfirmed — check that first. Changing the goal set can put both campaigns back into learning for a few days.",
    reversible: true,
    needsOk: true,
    status: "Later",
  },
];

export const cutover: readonly string[] = [
  "Joel's form event is live (9 Sep).",
  "Done: tag container v25 published (10 Sep) and the Main-site Enquiry action created; on 11 Sep one general_enquiry event reached Analytics (probably the test). Still to do: mark the key event in Analytics and prove the Ads conversion via a real ad-click enquiry.",
  "Acceptance is three separate checks: a controlled submission reaches Greg's inbox once, Analytics once, and the correct Google Ads request; an unattributed test need not show as an Ads conversion; and Greg reconciles the 12 by source.",
];

export const judging: Judging = {
  qualifiedEmployerEnquiry:
    "The fortnight's proof is 3 unrelated net-new employer enquiries with a verified consulting need, with 2 reaching a scoping call or proposal request.",
  inconclusive:
    "If traffic is too thin to run the test, the result is inconclusive, not no demand.",
  doesNotDecide: "This does not decide the Biosymm question.",
};
