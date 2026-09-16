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

export type ApprovalStatus =
  | "Awaiting OK"
  | "Later"
  | "Not this week"
  | "Applied 8 Sep"
  | "Kept A$155 — confirmed 14 Sep"
  | "Applied 15 Sep";

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

export const weekLabel = "Week of 14 September 2026";
export const generated = "16 September 2026";

export const status: readonly StatusItem[] = [
  {
    label: "Form tracking — confirmed working end to end",
    detail:
      "An enquiry came through from a paid click on the morning of 15 Sep, and both systems have now recorded it. The ads account registered it against the manual handling ad group, and analytics recorded the matching enquiry on the manual handling page in the same campaign on the same day. The two agree exactly. When this page was first written the analytics side had not appeared, which turned out to be ordinary processing delay rather than a fault. This is the first clean result of its kind and it closes the measurement question the fortnight was built around. One thing is still open, and it is a different question: the reporting shows that an enquiry happened, not what it contained. Whether that particular submission was a genuine business enquiry, an automated one, or a test can only be settled by checking the inbox for a submission received between about 10:00 and 10:30 that morning.",
  },
  {
    label: "The enquiry ledger, and the 18-day blind window",
    detail:
      "We rebuilt the enquiry history from analytics and the ads account. The main-site form was tracked until 24 Aug, then produced nothing at all until the repair went live on 11 Sep — an 18-day window in which an enquiry would reach the inbox but leave no trace in any report. The pre-break rate was about two form enquiries a week, so roughly four to six enquiries were likely received and never counted. That makes the reported twelve since 31 Aug consistent with normal volume rather than evidence of either a surge or a collapse. A dated ledger has been prepared for the ten-minute split by channel.",
  },
  {
    label: "Main campaign",
    detail:
      "Held at A$155/day for the fortnight test (approval 8 confirmed 14 Sep). The restore did what it was meant to: on 8–11 Sep at the lower budget the campaign was losing between 42% and 79% of available impressions to budget, and on 14 Sep it lost none at all. The constraint has now moved from budget to ad rank, with about 73% of impressions lost there — which also means further budget would not buy more volume. Click costs have also been falling across the first three days of the week. Spend is being watched daily.",
  },
  {
    label: "Sydney campaign — we found what is actually wrong",
    detail:
      "The earlier read that it was held back by ad rank no longer holds: it reached about 73% impression share on 14 Sep. We pulled the actual search queries it has been paying for, and the picture is clearer than a cost problem. Around four fifths of its traceable spend went to people searching competitors by name, or to individuals looking for a chair or a home-office setup — none of which can become the kind of employer enquiry this test is trying to measure. Every one of those arrived through a loose keyword match rather than the terms we chose. Meanwhile the deliberately chosen exact-match terms were shown and drew no clicks at all. So the fix was to exclude the wrong searches rather than cut the budget, which would only have slowed the waste without changing what it was being spent on. Those exclusions went on on 15 Sep — competitor names and chair-related searches — and the daily budget was deliberately left where it was. On the morning of 16 Sep the campaign had recorded no spend at all, which is the intended direction, though far too early to judge. Searches about home or hybrid setups were left in, because an employer arranging support for remote staff would genuinely search that way.",
  },
  {
    label: "Melbourne campaign",
    detail:
      "Correction to last week's note: the ads, ad groups and keywords did exist and were built — what was missing was that both the campaign and its ads were switched off, so nothing could serve. It was switched on on 15 Sep at the agreed daily ceiling, with its bidding left unchanged so it stays comparable to the rest of the test. As of the morning of 16 Sep it is live but has barely begun to serve, which is normal while new ads are reviewed and delivery ramps up — it should not be read either way for several days. One thing still needs saying plainly: its ads point at a different landing page from the main site, and that page records enquiries through a separate, older path that was not part of the repair and has not been tested the same way. The enquiry recorded on 15 Sep does not cover this campaign. Delivery and cost will be watched daily from here.",
  },
  {
    label: "How the campaigns are set up to learn",
    detail:
      "We pulled the conversion settings that had been outstanding. The main-site enquiry already counted as a primary action, so the enquiry recorded on 15 Sep feeds bidding. The landing-page enquiry did not — it was set as secondary and sat outside the biddable set, which meant both landing-page campaigns were set to optimise towards an enquiry they could not see. That has now been corrected, so they can finally learn from the enquiries that page produces. It is a measurement correction rather than a spend change and it is fully reversible, but it does put those two campaigns into a short relearning period.",
  },
  {
    label: "2 September landing-page lead",
    detail: "Unchanged. Leans real, still needs the inbox check. Nothing has come through that form since.",
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
    what: "Approval 8 confirmed: main held at A$155 for the fortnight; Sydney fifth-business-day checkpoint after today closes",
    blockedOn: "Nothing — the checkpoint is ours",
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
    text: "Send Greg the enquiry check (linked under Pack links below). It is written for him to read directly, so it can be forwarded as it stands or sent in your own words. It asks him to mark each enquiry since 31 Aug by how it arrived, whether it was genuine or a test, business or individual, new or already in the pipeline, and anything still live",
  },
  {
    id: 2,
    text: "The one check that matters most, and it is in that document: did a form submission reach Greg's inbox on Monday 15 September between about 10:00 and 10:30? That is the enquiry the ads and analytics both recorded, and only the inbox can say what it actually was. A clear \u201cnothing there\u201d is just as useful as a yes",
  },
  {
    id: 3,
    text: "The manual handling training offer details. This is now the main thing blocking that page, and it is the campaign that produced the 15 September enquiry",
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
    change: "Hold the main campaign budget at A$155/day for the two-week test (14–25 Sep), rather than returning to A$75.",
    why: "The A$75 cap had been losing 54–79% of eligible impressions to budget on 8–10 Sep, which would likely leave the fortnight test inconclusive. Confirmed on 14 Sep to hold A$155 for the window. Holding A$155 is about A$80/day more than A$75 — roughly A$800 across the 14–25 Sep window; nothing serves at weekends and spend is watched daily.",
    reversible: true,
    needsOk: true,
    status: "Kept A$155 — confirmed 14 Sep",
  },
  {
    id: 9,
    change: "Make the landing-page enquiry a primary, biddable action so the campaigns pointing at that page can actually learn from the enquiries it produces.",
    why: "The check that was outstanding has now been done. The assumption behind holding this — that the landing-page enquiry might already feed bidding through the shared goal — turned out to be wrong: it is set as secondary and sits outside the biddable set, so bidding cannot see it. The campaigns pointing at that landing page are therefore optimising towards an enquiry they never receive, which is the most likely reason their click costs have been so erratic. Applied on 15 Sep, ahead of the Melbourne campaign going live the same day — switching that campaign on while it still could not see its own enquiries would have spent the budget for nothing. Reversible at any time; the cost of the change is a short relearning period for the two campaigns affected.",
    reversible: true,
    needsOk: true,
    status: "Applied 15 Sep",
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
