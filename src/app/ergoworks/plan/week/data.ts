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
      "An enquiry came through from a paid click on the morning of 15 Sep, and both systems have now recorded it. The ads account registered it against the manual handling ad group, and analytics recorded the matching enquiry on the manual handling page in the same campaign on the same day. The two agree exactly. When this page was first written the analytics side had not appeared, which turned out to be ordinary processing delay rather than a fault. This is the first clean result of its kind and it closes the measurement question the fortnight was built around. One thing is still open, and it is a different question: the reporting shows that an enquiry happened, not what it contained. Whether that particular submission was a genuine business enquiry, an automated one, or a test can only be settled by checking the inbox, or the form log, for a submission received at about 11:13 that morning. An earlier version of this page said 10:00 to 10:30 \u2014 that was the time of the ad click, not the submission. The form was opened at 11:10 and sent at 11:13, and a three-minute gap between opening and sending is more consistent with a person than with an automated submission.",
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
    label: "Sydney campaign — the picture changed, and two things we said need correcting",
    detail:
      "Last week we reported that around four fifths of Sydney's traceable spend went to competitor-name searches or to individuals after a chair or a home-office setup. That described a week in which only about a third of the campaign's spend could be seen at all. We can now account for about four fifths of it, by reconciling the search queries against the keyword report, and the picture is different: this week roughly two thirds of traceable spend went to genuine corporate intent, against about a fifth the week before. That is the right direction. The caveat is larger than the result. The whole of that improvement is a single click — and that one click cost A$144.15, which is about half of everything the campaign spent across the first three days of the week. Take it out and the improvement disappears entirely. Four traceable clicks is not enough to read anything from, so this is offered as an encouraging direction and not as a result. Two corrections. First, we said the deliberately chosen exact-match terms had been shown and drawn no clicks at all. One of them drew its first click on 15 Sep — and it is the A$144.15 one, so the term we wanted is also the expensive one. Second, the chair-related exclusion added on 15 Sep was removed again on 16 Sep: checked properly against thirty days of search queries it had blocked a single click, which is below the threshold we work to, and a company arranging chair assessments for its staff is a reasonable enquiry to leave open. The competitor-name exclusions stay. The daily budget was deliberately left where it is, and the campaign is now spending close to it, where earlier in the month it spent a fraction of it. Nothing further will be changed before the reassessment.",
  },
  {
    label: "Melbourne campaign",
    detail:
      "Correction to last week's note: the ads, ad groups and keywords did exist and were built — what was missing was that both the campaign and its ads were switched off, so nothing could serve. It was switched on on 15 Sep at the agreed daily ceiling, with its bidding left unchanged so it stays comparable to the rest of the test. As of the morning of 16 Sep it is live but has barely begun to serve, which is normal while new ads are reviewed and delivery ramps up — it should not be read either way for several days. One thing still needs saying plainly: its ads point at a different landing page from the main site, and that page records enquiries through a separate, older path that was not part of the repair and has not been tested the same way. The enquiry recorded on 15 Sep does not cover this campaign. Delivery and cost will be watched daily from here.",
  },
  {
    label: "How the campaigns are set up to learn",
    detail:
      "This entry previously said the two landing-page campaigns were set to optimise towards an enquiry they could not see, and that a change on 15 September had fixed it. A fuller check of the settings shows that was wrong, and the correction matters more than the original claim. All three campaigns run against a shared custom goal that already included the landing-page enquiry, and a goal of that kind feeds bidding whether an action is marked primary or secondary. So the landing-page enquiry was never invisible to bidding, and the change made on 15 September was not the fix it was described as. What that change did do is make the action count in the headline conversions figure, which is a reporting change made in the middle of a period that was supposed to be held still — that is disclosed here rather than left in the background. One genuine issue did come out of the check: the goal still contains an older action that stopped recording anything on 24 August, which is worth tidying at the reassessment rather than now.",
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
    text: "The manual handling training offer details. This is the main thing blocking that page, and it is also the campaign that produced the 15 September enquiry \u2014 so it has gone from a loose end to the most useful thing anyone can give us this week",
  },
  {
    id: 2,
    text: "One check with Greg or Joel: did a form submission arrive on Monday 15 September at about 11:13? That is the enquiry the ads and analytics both recorded, and only the inbox or the form log can say whether it was a real business, an automated submission, or a test. A clear \u201cnothing there\u201d is as useful as a yes",
  },
  {
    id: 3,
    text: "While he is looking: anything among the recent enquiries still worth chasing now, rather than waiting on the next report. No need for a full audit of the twelve \u2014 the reporting gap behind them is now explained and does not need reconstructing by hand",
  },
  { id: 4, text: "Whether the 2 September landing-page lead was a test or real" },
  {
    id: 5,
    text: "About ten minutes each from Greg and Joel to test the landing-page enquiry form end to end. The main-site form has now been seen working twice, but the landing page sends enquiries by a separate, older route that has never been checked, and both the Sydney and Melbourne ads point at it. We will send the step-by-step. Greg confirms a clearly marked test enquiry reached his inbox; Joel confirms it reached the form log. The first stage costs nothing and changes nothing",
  },
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
    change: "Reconsider the landing-page enquiry action, now that the goal settings have been checked properly.",
    why: "This was raised on the basis that the landing-page enquiry sat outside what bidding could see. That turned out to be wrong: all three campaigns share a custom goal that already contained it, and a goal of that kind is used by bidding regardless of whether an action is marked primary. The flag was changed on 15 September anyway, before the fuller check was done. It is reversible and it did not change what bidding optimises towards, but it did change what appears in the headline conversions figure mid-period, which is recorded here rather than glossed over. Nothing further should move until the reassessment.",
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
