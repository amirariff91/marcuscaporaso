_strict": 10.9,
  "prior_strict": 27,
  "latest_cpl": 380.50091743119265,
  "prior_cpl": 174.65370370370368,
  "cost_delta": -568.1899999999996,
  "cost_delta_pct": -0.12049028235768122,
  "strict_delta": -16.1,
  "strict_delta_pct": -0.5962962962962963,
  "cpl_delta": 205.84721372748896,
  "cpl_delta_pct": 1.1786020528754686
}

exec
/bin/zsh -lc "jq '{
  monthly_series_spend: ([.consulting_monthly[].cost] | add),
  twelve_full_month_spend: ([.consulting_monthly[0:12][].cost] | add),
  twelve_full_month_strict: ([.consulting_conversion_mix_monthly[] | select(.m "'!= "2026-07p") | select(.action == "Call Forwarding SR - Ergoworks Consulting" or .action == "Calls from ads" or .action == "Make an Enquiry SR") | .conv] | add),
  monthly_series_strict_cpl: (([.consulting_monthly[].cost] | add) / ([.consulting_conversion_mix_monthly[] | select(.action == "Call Forwarding SR - Ergoworks Consulting" or .action == "Calls from ads" or .action == "Make an Enquiry SR") | .conv] | add)),
  twelve_full_month_cpl: (([.consulting_monthly[0:12][].cost] | add) / ([.consulting_conversion_mix_monthly[] | select(.m != "2026-07p") | select(.action == "Call Forwarding SR - Ergoworks Consulting" or .action == "Calls from ads" or .action == "Make an Enquiry SR") | .conv] | add))
}'"' 'feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json'" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
{
  "monthly_series_spend": 45282.96,
  "twelve_full_month_spend": 41135.5,
  "twelve_full_month_strict": 301.9,
  "monthly_series_strict_cpl": 144.7664961636829,
  "twelve_full_month_cpl": 136.25538257701226
}

exec
/bin/zsh -lc "jq '[.adgroups_12mo[] | select(.cost > 0) | . + {
  spend_share: (.cost / ([input.adgroups_12mo[].cost] | add)),
  cpc: (.cost / .clicks),
  cost_per_reported_conv: (if .conv > 0 then .cost / .conv else null end)
}] | sort_by(-.cost)' 'feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json'" in /Users/amirariff/projects/growthos/marcuscaporaso
 exited 5 in 0ms:
jq: error (at feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json:193): break

exec
/bin/zsh -lc "jq '([.adgroups_12mo[].cost] | add) as "'$total | [.adgroups_12mo[] | select(.cost > 0) | . + {
  spend_share: (.cost / $total),
  cpc: (.cost / .clicks),
  cost_per_reported_conv: (if .conv > 0 then .cost / .conv else null end)
}] | sort_by(-.cost)'"' 'feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json'" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
[
  {
    "name": "Manual Handling Training",
    "cost": 17269.15,
    "clicks": 2429,
    "conv": 118.5,
    "spend_share": 0.40828039060667737,
    "cpc": 7.1095718402634835,
    "cost_per_reported_conv": 145.731223628692
  },
  {
    "name": "Ergonomic Office Consulting",
    "cost": 8295.60,
    "clicks": 787,
    "conv": 62.5,
    "spend_share": 0.19612608659469358,
    "cpc": 10.540787801778908,
    "cost_per_reported_conv": 132.7296
  },
  {
    "name": "DSA - Ergoworks Consulting",
    "cost": 7396.38,
    "clicks": 662,
    "conv": 74.2,
    "spend_share": 0.1748665635237065,
    "cpc": 11.172779456193354,
    "cost_per_reported_conv": 99.68167115902965
  },
  {
    "name": "Ergonomics Assessments",
    "cost": 7208.59,
    "clicks": 577,
    "conv": 59.0,
    "spend_share": 0.17042679812980882,
    "cpc": 12.493223570190642,
    "cost_per_reported_conv": 122.17949152542373
  },
  {
    "name": "Workplace Ergonomics",
    "cost": 2112.54,
    "clicks": 217,
    "conv": 19.5,
    "spend_share": 0.04994505556858503,
    "cpc": 9.735207373271889,
    "cost_per_reported_conv": 108.33538461538461
  },
  {
    "name": "School Ergonomics",
    "cost": 15.02,
    "clicks": 2,
    "conv": 0,
    "spend_share": 0.00035510557652879805,
    "cpc": 7.51,
    "cost_per_reported_conv": null
  }
]

exec
/bin/zsh -lc "jq '[.keywords_top30_12mo[] | . + {
  cpc: (.cost / .clicks),
  cost_per_reported_conv: (if .conv > 0 then .cost / .conv else null end),
  ctr: (100 * .clicks / .impr)
}] | sort_by(.cost_per_reported_conv) | .[0:6], ([.[]] | sort_by(-.cost_per_reported_conv) | .[0:6])' 'feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json'" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
[
  {
    "kw": "manual handling training sydney",
    "match": "EXACT",
    "ag": "Manual Handling Training",
    "cost": 370.98,
    "clicks": 32,
    "impr": 247,
    "conv": 11.5,
    "cpc": 11.593125,
    "cost_per_reported_conv": 32.25913043478261,
    "ctr": 12.955465587044534
  },
  {
    "kw": "ergonomic assessment",
    "match": "EXACT",
    "ag": "Ergonomics Assessments",
    "cost": 477.65,
    "clicks": 42,
    "impr": 1080,
    "conv": 8.5,
    "cpc": 11.372619047619047,
    "cost_per_reported_conv": 56.19411764705882,
    "ctr": 3.888888888888889
  },
  {
    "kw": "+Ergonomics +Training",
    "match": "BROAD",
    "ag": "Ergonomic Office Consulting",
    "cost": 622.47,
    "clicks": 76,
    "impr": 517,
    "conv": 9.3,
    "cpc": 8.190394736842105,
    "cost_per_reported_conv": 66.93225806451613,
    "ctr": 14.700193423597678
  },
  {
    "kw": "office ergonomic assessment",
    "match": "PHRASE",
    "ag": "Ergonomics Assessments",
    "cost": 548.64,
    "clicks": 43,
    "impr": 310,
    "conv": 7.0,
    "cpc": 12.75906976744186,
    "cost_per_reported_conv": 78.37714285714286,
    "ctr": 13.870967741935484
  },
  {
    "kw": "+manual +handling +training +canberra",
    "match": "BROAD",
    "ag": "Manual Handling Training",
    "cost": 571.10,
    "clicks": 81,
    "impr": 494,
    "conv": 7.0,
    "cpc": 7.050617283950618,
    "cost_per_reported_conv": 81.58571428571429,
    "ctr": 16.39676113360324
  },
  {
    "kw": "+workplace +ergonomic +assessment",
    "match": "BROAD",
    "ag": "Workplace Ergonomics",
    "cost": 494.01,
    "clicks": 22,
    "impr": 251,
    "conv": 6.0,
    "cpc": 22.455,
    "cost_per_reported_conv": 82.335,
    "ctr": 8.764940239043824
  }
]
[
  {
    "kw": "+Ergonomics +Company",
    "match": "BROAD",
    "ag": "Ergonomic Office Consulting",
    "cost": 568.61,
    "clicks": 38,
    "impr": 557,
    "conv": 1.0,
    "cpc": 14.96342105263158,
    "cost_per_reported_conv": 568.61,
    "ctr": 6.822262118491921
  },
  {
    "kw": "manual handling course",
    "match": "EXACT",
    "ag": "Manual Handling Training",
    "cost": 555.86,
    "clicks": 97,
    "impr": 1131,
    "conv": 1.0,
    "cpc": 5.730515463917526,
    "cost_per_reported_conv": 555.86,
    "ctr": 8.576480990274094
  },
  {
    "kw": "+ergonomic +services",
    "match": "BROAD",
    "ag": "Ergonomics Assessments",
    "cost": 522.37,
    "clicks": 59,
    "impr": 585,
    "conv": 1.0,
    "cpc": 8.853728813559322,
    "cost_per_reported_conv": 522.37,
    "ctr": 10.085470085470085
  },
  {
    "kw": "+Occupational +Health +And +Ergonomics",
    "match": "BROAD",
    "ag": "Ergonomic Office Consulting",
    "cost": 563.09,
    "clicks": 28,
    "impr": 748,
    "conv": 1.5,
    "cpc": 20.110357142857143,
    "cost_per_reported_conv": 375.3933333333334,
    "ctr": 3.7433155080213902
  },
  {
    "kw": "manual handling training for carers",
    "match": "PHRASE",
    "ag": "Manual Handling Training",
    "cost": 544.45,
    "clicks": 49,
    "impr": 299,
    "conv": 2.0,
    "cpc": 11.11122448979592,
    "cost_per_reported_conv": 272.225,
    "ctr": 16.387959866220736
  },
  {
    "kw": "manual handling at work",
    "match": "PHRASE",
    "ag": "Manual Handling Training",
    "cost": 524.15,
    "clicks": 75,
    "impr": 2065,
    "conv": 2.0,
    "cpc": 6.988666666666666,
    "cost_per_reported_conv": 262.075,
    "ctr": 3.6319612590799033
  }
]

exec
/bin/zsh -lc "jq '{
  channel_totals: (reduce .ga4_channel_monthly[] as "'$x ({};
    .["Paid Search"] += $x["Paid Search"] |
    .["Organic Search"] += $x["Organic Search"] |
    .Direct += $x.Direct |
    .Referral += $x.Referral |
    .Other += $x.Other)),
  monthly_ratio: [.consulting_monthly as $ads | .ga4_channel_monthly[] as $g | {
    m:$g.m,
    clicks: ($ads[] | select(.m==$g.m) | .clicks),
    paid_search_sessions:$g["Paid Search"],
    ratio: (($ads[] | select(.m==$g.m) | .clicks) / $g["Paid Search"])
  }]
}'"' 'feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json'" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
{
  "channel_totals": {
    "Paid Search": 4301,
    "Organic Search": 2834,
    "Direct": 1976,
    "Referral": 287,
    "Other": 135
  },
  "monthly_ratio": [
    {
      "m": "2025-07",
      "clicks": 404,
      "paid_search_sessions": 389,
      "ratio": 1.038560411311054
    },
    {
      "m": "2025-08",
      "clicks": 374,
      "paid_search_sessions": 361,
      "ratio": 1.03601108033241
    },
    {
      "m": "2025-09",
      "clicks": 351,
      "paid_search_sessions": 333,
      "ratio": 1.054054054054054
    },
    {
      "m": "2025-10",
      "clicks": 415,
      "paid_search_sessions": 394,
      "ratio": 1.0532994923857868
    },
    {
      "m": "2025-11",
      "clicks": 382,
      "paid_search_sessions": 329,
      "ratio": 1.1610942249240122
    },
    {
      "m": "2025-12",
      "clicks": 385,
      "paid_search_sessions": 335,
      "ratio": 1.1492537313432836
    },
    {
      "m": "2026-01",
      "clicks": 404,
      "paid_search_sessions": 357,
      "ratio": 1.1316526610644257
    },
    {
      "m": "2026-02",
      "clicks": 390,
      "paid_search_sessions": 367,
      "ratio": 1.0626702997275204
    },
    {
      "m": "2026-03",
      "clicks": 418,
      "paid_search_sessions": 360,
      "ratio": 1.1611111111111112
    },
    {
      "m": "2026-04",
      "clicks": 380,
      "paid_search_sessions": 275,
      "ratio": 1.3818181818181818
    },
    {
      "m": "2026-05",
      "clicks": 326,
      "paid_search_sessions": 232,
      "ratio": 1.4051724137931034
    },
    {
      "m": "2026-06",
      "clicks": 442,
      "paid_search_sessions": 303,
      "ratio": 1.4587458745874586
    },
    {
      "m": "2026-07p",
      "clicks": 357,
      "paid_search_sessions": 266,
      "ratio": 1.3421052631578947
    }
  ]
}

exec
/bin/zsh -lc "jq '{
  cpl_series: (([.adgroups_12mo[].cost] | add) / ([.consulting_conversion_mix_monthly[] | select(.action == \"Call Forwarding SR - Ergoworks Consulting\" or .action == \"Calls from ads\" or .action == \"Make an Enquiry SR\") | .conv] | add)),
  cpl_full12: (([.adgroups_12mo[].cost] | add) / ([.consulting_conversion_mix_monthly[] | select(.m "'!= "2026-07p") | select(.action == "Call Forwarding SR - Ergoworks Consulting" or .action == "Calls from ads" or .action == "Make an Enquiry SR") | .conv] | add)),
  latest_session_ratio: (.ga4_channel_monthly[-1]["Paid Search"] / .consulting_monthly[-1].clicks),
  prior_session_ratio: (.ga4_channel_monthly[-2]["Paid Search"] / .consulting_monthly[-2].clicks),
  total_session_ratio: (([.ga4_channel_monthly[].["Paid Search"]] | add) / ([.consulting_monthly[].clicks] | add))
}'"' 'feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json'" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
{
  "cpl_series": 135.22148337595908,
  "cpl_full12": 140.10361046704207,
  "latest_session_ratio": 0.7450980392156863,
  "prior_session_ratio": 0.6855203619909502,
  "total_session_ratio": 0.8554097056483692
}

exec
/bin/zsh -lc "jq -r '.consulting_monthly as "'$a | .ga4_channel_monthly[] as $g | [$g.m, ((($g["Paid Search"] / ($a[] | select(.m==$g.m) | .clicks)) * 100) | round / 10)] | @tsv'"' 'feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json'" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
2025-07	9.6
2025-08	9.7
2025-09	9.5
2025-10	9.5
2025-11	8.6
2025-12	8.7
2026-01	8.8
2026-02	9.4
2026-03	8.6
2026-04	7.2
2026-05	7.1
2026-06	6.9
2026-07p	7.5

exec
/bin/zsh -lc "jq -r '.consulting_monthly as "'$a | .ga4_channel_monthly[] as $g | [$g.m, (((($g["Paid Search"] / ($a[] | select(.m==$g.m) | .clicks)) * 100) * 10 | round) / 10)] | @tsv'"' 'feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json'" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
2025-07	96.3
2025-08	96.5
2025-09	94.9
2025-10	94.9
2025-11	86.1
2025-12	87
2026-01	88.4
2026-02	94.1
2026-03	86.1
2026-04	72.4
2026-05	71.2
2026-06	68.6
2026-07p	74.5

exec
/bin/zsh -lc "jq -r '.ga4_channel_monthly[] | [.m, .[\"Paid Search\"], .[\"Organic Search\"], .Direct, .Referral, .Other] | @tsv' 'feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json'" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
2025-07	389	260	82	45	7
2025-08	361	221	103	43	7
2025-09	333	299	357	17	23
2025-10	394	264	87	27	11
2025-11	329	245	465	17	18
2025-12	335	184	64	14	16
2026-01	357	201	89	20	12
2026-02	367	231	186	23	4
2026-03	360	218	198	23	7
2026-04	275	187	92	21	8
2026-05	232	172	75	14	7
2026-06	303	206	116	12	12
2026-07p	266	146	62	11	3

The repo conventions and the full snapshot have been audited; the remaining work is to assemble the exact derived series and ordered panel contract.
  ✓ Read the visualization guidance and repo-specific design/context files
  ✓ Read snapshot.json fully, including meta.caveats, and extract exact series/metrics
  → Draft and cross-check the ordered 8–11-panel advisory spec
codex
I’ve now reconciled the exact derived figures, including the partial July basis, the one observed cross-accrual, the physiotherapy divergence, the Direct spikes, and the brand/non-brand query grouping. One important design decision follows: the dashboard must not label the supplied strict-event sum as a perfectly date-aligned trailing-12-month total, because the snapshot does not contain that exact cut.
The ordered nine-panel specification is ready, with date-basis and contamination boundaries made explicit.
  ✓ Read the visualization guidance and repo-specific design/context files
  ✓ Read snapshot.json fully, including meta.caveats, and extract exact series/metrics
  ✓ Draft and cross-check the ordered 8–11-panel advisory spec
codex
# Ordered dashboard specification

Based on the [snapshot](</Users/amirariff/projects/growthos/marcuscaporaso/feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json>), with the existing voice and evidence conventions from the [plan](</Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/plan/page.tsx>) and [evidence register](</Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/plan/evidence/page.tsx>).

Page-wide notice: `[Verified]` Platform conversions use the current mixed goal set, with all 16 actions primary. They are not qualified leads. Strict recorded lead events are `Make an Enquiry SR + Calls from ads + Call Forwarding SR - Ergoworks Consulting`. Nothing shown is qualified pipeline.

Reporting cut: 29 July 2026, AUD. `2026-07p` is partial to 28 July.

## 1. Current level and latest movement

**Honest sub-label:** Supports media level and recorded action volume; does not support qualified pipeline, revenue, CAC or a target CPA.

**Metrics**

- Trailing-12-month ad-group spend: **A$42,297.28**.
- Strict recorded lead-event conversions across the supplied monthly action series: **312.8**.
- Descriptive cost per strict recorded event: **A$135.22**.
- Latest month versus June:
  - Spend: A$4,147.46 versus A$4,715.65, **−12.0%**.
  - Strict events: 10.9 versus 27, **−59.6%**.
  - Cost per strict event: A$380.50 versus A$174.65, **+117.9%**.

**Chart form and why:** Stat-tile row with direct delta labels. This is a level and variance view, not a trend chart.

**Sponsor takeaway:** `[Interpretation]` I would read July as lower spend with a sharper fall in strict recorded events, but I would not call the partial month a full-month performance verdict.

**Must-show caveat:** The snapshot does not contain a perfectly date-aligned trailing-12-month strict-event total. Label 312.8 as the supplied monthly-series total, not as an audited 12-month total.

## 2. Spend versus strict recorded lead events

**Honest sub-label:** Supports month-by-month media and recorded-event movement; does not support qualified lead-rate or revenue conclusions.

**Series**

| Month | Spend | Strict events |
|---|---:|---:|
| 2025-07 | A$3,364.50 | 31.0 |
| 2025-08 | A$3,055.48 | 27.0 |
| 2025-09 | A$3,405.78 | 27.0 |
| 2025-10 | A$3,529.50 | 38.0 |
| 2025-11 | A$3,062.02 | 25.9 |
| 2025-12 | A$3,559.69 | 19.0 |
| 2026-01 | A$3,405.83 | 23.0 |
| 2026-02 | A$3,144.71 | 30.0 |
| 2026-03 | A$3,330.27 | 16.0 |
| 2026-04 | A$3,407.35 | 21.0 |
| 2026-05 | A$3,154.72 | 17.0 |
| 2026-06 | A$4,715.65 | 27.0 |
| 2026-07p | A$4,147.46 | 10.9 |

**Chart form and why:** Two aligned line plots sharing the month axis, with separate y-scales. Do not use a dual axis; the separate plots preserve the relationship without implying spend and events are the same unit.

**Sponsor takeaway:** `[Interpretation]` I would focus Greg on the divergence between spend and strict events, especially the incomplete July point.

**Must-show caveat:** Strict is defined only by the three named actions. July is partial and should be visually marked with a hatched or lighter treatment.

## 3. Conversion mix over time

**Honest sub-label:** Supports the composition of recorded conversion actions; does not support qualified pipeline or a clean platform-conversion trend.

**Series**

| Month | Strict | Soft | Explicitly contaminated | Platform all-conversions |
|---|---:|---:|---:|---:|
| 2025-07 | 31.0 | 6.0 | 0 | 37.0 |
| 2025-08 | 27.0 | 5.0 | 1.0 | 33.0 |
| 2025-09 | 27.0 | 5.0 | 0 | 32.0 |
| 2025-10 | 38.0 | 4.0 | 0 | 42.0 |
| 2025-11 | 25.9 | 5.0 | 0 | 30.9 |
| 2025-12 | 19.0 | 5.0 | 0 | 24.0 |
| 2026-01 | 23.0 | 0 | 0 | 23.0 |
| 2026-02 | 30.0 | 3.0 | 0 | 33.0 |
| 2026-03 | 16.0 | 4.0 | 0 | 20.0 |
| 2026-04 | 21.0 | 5.0 | 0 | 26.0 |
| 2026-05 | 17.0 | 1.0 | 0 | 18.0 |
| 2026-06 | 27.0 | 3.0 | 0 | 30.0 |
| 2026-07p | 10.9 | 5.0 | 0 | 15.9 |

Soft actions are Phone Click SR, Email Click SR and Newsletter Sign Up SR. The explicitly contaminated series is `Call Forwarding SR - sydneyphysiotherapist`.

**Chart form and why:** Stacked monthly columns for strict, soft and contaminated actions, with a grey cap marking `allConv`. This shows both composition and the gap between the honest series and the broader platform total.

**Sponsor takeaway:** `[Interpretation]` I would use the strict series as the only operating trend; the broader total contains soft actions, a confirmed wrong-service accrual and additional platform-only volume.

**Must-show caveat:** The platform totals are reported under the mixed 16-action goal set and are not qualified leads.

## 4. Ad-group spend and reported efficiency

**Honest sub-label:** Supports spend concentration and reported conversion arithmetic; does not support ad-group profitability or qualified efficiency.

**Metrics**

| Ad group | Spend | Spend share | Clicks | Reported conv. | A$ / reported conv. |
|---|---:|---:|---:|---:|---:|
| Manual Handling Training | A$17,269.15 | 40.8% | 2,429 | 118.5 | A$145.73 |
| Ergonomic Office Consulting | A$8,295.60 | 19.6% | 787 | 62.5 | A$132.73 |
| DSA - Ergoworks Consulting | A$7,396.38 | 17.5% | 662 | 74.2 | A$99.68 |
| Ergonomics Assessments | A$7,208.59 | 17.0% | 577 | 59.0 | A$122.18 |
| Workplace Ergonomics | A$2,112.54 | 5.0% | 217 | 19.5 | A$108.34 |
| School Ergonomics | A$15.02 | 0.04% | 2 | 0 | — |

**Chart form and why:** Two aligned horizontal bar charts: spend share and A$ per reported conversion. Keep the scales separate; do not use dual axes or a redundant colour legend.

**Sponsor takeaway:** `[Interpretation]` I would treat Manual Handling Training as the main spend-concentration risk; DSA’s lower reported cost is not evidence of cleaner performance.

**Must-show caveat:** Every efficiency figure uses platform-reported conversions under the mixed goal set, not strict or qualified events.

## 5. Keyword best/worst table

**Honest sub-label:** Supports exact lookup of reported keyword economics within the top-30 extract; does not support keyword-level qualified CPA.

**Metrics**

Rank by A$ per reported conversion, using `keywords_top30_12mo`.

| Lower reported cost | Match | Spend | Clicks | Reported conv. | A$ / reported conv. |
|---|---|---:|---:|---:|---:|
| manual handling training sydney | Exact | A$370.98 | 32 | 11.5 | A$32.26 |
| ergonomic assessment | Exact | A$477.65 | 42 | 8.5 | A$56.19 |
| +Ergonomics +Training | Broad | A$622.47 | 76 | 9.3 | A$66.93 |

| Higher reported cost | Match | Spend | Clicks | Reported conv. | A$ / reported conv. |
|---|---|---:|---:|---:|---:|
| +Ergonomics +Company | Broad | A$568.61 | 38 | 1.0 | A$568.61 |
| manual handling course | Exact | A$555.86 | 97 | 1.0 | A$555.86 |
| +ergonomic +services | Broad | A$522.37 | 59 | 1.0 | A$522.37 |

**Chart form and why:** Ranked table. Exact values, match types and denominators matter more than a visual ranking here.

**Sponsor takeaway:** `[Interpretation]` I would use the table to identify investigation candidates, not automatic winners and losers; the worst rows are largely one-conversion observations.

**Must-show caveat:** This is only the supplied top-30 keyword extract, and the conversion denominator is platform-reported, not strict or qualified.

## 6. Conversion integrity: physiotherapy jump and cross-accrual

**Honest sub-label:** Supports detection of a measurement break and one observed contamination event; does not establish physiotherapy demand or the total size of consulting contamination.

**Physiotherapy series**

| Month | Clicks | Reported conv. |
|---|---:|---:|
| 2025-07 | 357 | 19.0 |
| 2025-08 | 370 | 22.8 |
| 2025-09 | 353 | 10.0 |
| 2025-10 | 374 | 12.0 |
| 2025-11 | 396 | 19.0 |
| 2025-12 | 390 | 27.0 |
| 2026-01 | 415 | 22.0 |
| 2026-02 | 397 | 28.0 |
| 2026-03 | 200 | 45.0 |
| 2026-04 | 162 | 45.9 |
| 2026-05 | 196 | 46.0 |
| 2026-06 | 175 | 38.9 |
| 2026-07p | 152 | 36.0 |

Also show an event marker: **2025-08 — 1 `Call Forwarding SR - sydneyphysiotherapist` conversion accrued to the consulting campaign.**

**Chart form and why:** Two small-multiple line plots: physiotherapy clicks and reported conversions, with separate scales, plus a one-event annotation. This shows the divergence without a misleading dual axis.

**Sponsor takeaway:** `[Interpretation]` I would treat the March–July physiotherapy jump as a goal-mix artefact until verified; the August cross-accrual proves contamination has occurred, but does not quantify all contamination.

**Must-show caveat:** The conversion jump coincides with GA4 SR actions being enabled while clicks roughly halve. Treat it as a goal-mix artefact until verified. The cross-campaign accrual is observed, not merely mechanically possible.

## 7. Click-to-session tracking ratio

**Honest sub-label:** Supports tracking-continuity diagnosis; does not prove lost users, invalid clicks, a single tracking fault or qualified pipeline.

**Metric:** GA4 Paid Search sessions ÷ consulting Google Ads clicks.

| Month | Sessions / clicks |
|---|---:|
| 2025-07 | 96.3% |
| 2025-08 | 96.5% |
| 2025-09 | 94.9% |
| 2025-10 | 94.9% |
| 2025-11 | 86.1% |
| 2025-12 | 87.0% |
| 2026-01 | 88.4% |
| 2026-02 | 94.1% |
| 2026-03 | 86.1% |
| 2026-04 | 72.4% |
| 2026-05 | 71.2% |
| 2026-06 | 68.6% |
| 2026-07p | 74.5% |

**Chart form and why:** Single line chart with a 100% reference rule and direct end labels. This is a ratio trend, so a line is appropriate; no second axis is needed.

**Sponsor takeaway:** `[Interpretation]` I would call out the fall from roughly 96% to the low-70s as a tracking-health issue worth repairing, not as proof that advertising traffic is invalid.

**Must-show caveat:** This ratio is diagnostic only. Keep it separate from conversion performance and do not infer lost users or invalid advertising from it.

## 8. GA4 channel mix and Direct anomalies

**Honest sub-label:** Supports first-party channel-volume and mix context; does not support channel profitability, lead quality or attribution certainty.

**Series order:** Paid Search / Organic Search / Direct / Referral / Other.

| Month | Paid | Organic | Direct | Referral | Other |
|---|---:|---:|---:|---:|---:|
| 2025-07 | 389 | 260 | 82 | 45 | 7 |
| 2025-08 | 361 | 221 | 103 | 43 | 7 |
| 2025-09 | 333 | 299 | 357 | 17 | 23 |
| 2025-10 | 394 | 264 | 87 | 27 | 11 |
| 2025-11 | 329 | 245 | 465 | 17 | 18 |
| 2025-12 | 335 | 184 | 64 | 14 | 16 |
| 2026-01 | 357 | 201 | 89 | 20 | 12 |
| 2026-02 | 367 | 231 | 186 | 23 | 4 |
| 2026-03 | 360 | 218 | 198 | 23 | 7 |
| 2026-04 | 275 | 187 | 92 | 21 | 8 |
| 2026-05 | 232 | 172 | 75 | 14 | 7 |
| 2026-06 | 303 | 206 | 116 | 12 | 12 |
| 2026-07p | 266 | 146 | 62 | 11 | 3 |

**Chart form and why:** Stacked area chart with direct labels at the latest point and annotations at Direct = **357** in September 2025 and **465** in November 2025. This shows both total movement and channel composition.

**Sponsor takeaway:** `[Interpretation]` I would read Paid Search as the largest measured channel, while treating the two Direct spikes as anomalies requiring explanation rather than organic growth.

**Must-show caveat:** Direct spikes in 2025-09 and 2025-11 are anomalies to explain, not evidence of organic growth.

## 9. GSC brand versus non-brand snapshot

**Honest sub-label:** Supports the brand/non-brand shape of the supplied top-query sample; does not support total search demand, lead quality or pipeline.

**Grouping**

Brand queries: `ergoworks`, `ergoassess`, `ergo works`.

Among the 12 supplied top queries:

| Group | Clicks | Impressions | CTR |
|---|---:|---:|---:|
| Brand | 57 | 565 | 10.1% |
| Non-brand | 20 | 4,615 | 0.4% |
| Total supplied rows | 77 | 5,180 | 1.5% |

**Chart form and why:** Two 100% stacked horizontal bars: click share and impression share. This is a two-category composition, so it is clearer than a pie and keeps the denominator explicit.

**Sponsor takeaway:** `[Interpretation]` I would tell Greg that brand queries capture most clicks in this sample, while non-brand queries provide most impressions but very little click capture.

**Must-show caveat:** This is the `gsc_queries_90d_top` extract, not the complete query universe. Brand classification is rule-based from the query text and does not establish total demand or commercial intent.

## Presentation rules

Use the existing pack’s treatment: eyebrow label, direct title, muted one-line sub-label, `[Verified]` and `[Interpretation]` tags, and a visible mint caveat block. Reuse the existing table treatment for exact lookup. All charts should be static inline SVG with direct labels, visible values, accessible `<title>`/`<desc>`, and no hover-only information.

One data-version warning: the current snapshot’s A$42,297.28 spend differs slightly from older figures still shown in the 25 July plan/evidence pages. The dashboard should identify itself as the 29 July snapshot and avoid mixing pulls.
hook: Stop
hook: Stop Completed
tokens used
133,435
# Ordered dashboard specification

Based on the [snapshot](</Users/amirariff/projects/growthos/marcuscaporaso/feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json>), with the existing voice and evidence conventions from the [plan](</Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/plan/page.tsx>) and [evidence register](</Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/plan/evidence/page.tsx>).

Page-wide notice: `[Verified]` Platform conversions use the current mixed goal set, with all 16 actions primary. They are not qualified leads. Strict recorded lead events are `Make an Enquiry SR + Calls from ads + Call Forwarding SR - Ergoworks Consulting`. Nothing shown is qualified pipeline.

Reporting cut: 29 July 2026, AUD. `2026-07p` is partial to 28 July.

## 1. Current level and latest movement

**Honest sub-label:** Supports media level and recorded action volume; does not support qualified pipeline, revenue, CAC or a target CPA.

**Metrics**

- Trailing-12-month ad-group spend: **A$42,297.28**.
- Strict recorded lead-event conversions across the supplied monthly action series: **312.8**.
- Descriptive cost per strict recorded event: **A$135.22**.
- Latest month versus June:
  - Spend: A$4,147.46 versus A$4,715.65, **−12.0%**.
  - Strict events: 10.9 versus 27, **−59.6%**.
  - Cost per strict event: A$380.50 versus A$174.65, **+117.9%**.

**Chart form and why:** Stat-tile row with direct delta labels. This is a level and variance view, not a trend chart.

**Sponsor takeaway:** `[Interpretation]` I would read July as lower spend with a sharper fall in strict recorded events, but I would not call the partial month a full-month performance verdict.

**Must-show caveat:** The snapshot does not contain a perfectly date-aligned trailing-12-month strict-event total. Label 312.8 as the supplied monthly-series total, not as an audited 12-month total.

## 2. Spend versus strict recorded lead events

**Honest sub-label:** Supports month-by-month media and recorded-event movement; does not support qualified lead-rate or revenue conclusions.

**Series**

| Month | Spend | Strict events |
|---|---:|---:|
| 2025-07 | A$3,364.50 | 31.0 |
| 2025-08 | A$3,055.48 | 27.0 |
| 2025-09 | A$3,405.78 | 27.0 |
| 2025-10 | A$3,529.50 | 38.0 |
| 2025-11 | A$3,062.02 | 25.9 |
| 2025-12 | A$3,559.69 | 19.0 |
| 2026-01 | A$3,405.83 | 23.0 |
| 2026-02 | A$3,144.71 | 30.0 |
| 2026-03 | A$3,330.27 | 16.0 |
| 2026-04 | A$3,407.35 | 21.0 |
| 2026-05 | A$3,154.72 | 17.0 |
| 2026-06 | A$4,715.65 | 27.0 |
| 2026-07p | A$4,147.46 | 10.9 |

**Chart form and why:** Two aligned line plots sharing the month axis, with separate y-scales. Do not use a dual axis; the separate plots preserve the relationship without implying spend and events are the same unit.

**Sponsor takeaway:** `[Interpretation]` I would focus Greg on the divergence between spend and strict events, especially the incomplete July point.

**Must-show caveat:** Strict is defined only by the three named actions. July is partial and should be visually marked with a hatched or lighter treatment.

## 3. Conversion mix over time

**Honest sub-label:** Supports the composition of recorded conversion actions; does not support qualified pipeline or a clean platform-conversion trend.

**Series**

| Month | Strict | Soft | Explicitly contaminated | Platform all-conversions |
|---|---:|---:|---:|---:|
| 2025-07 | 31.0 | 6.0 | 0 | 37.0 |
| 2025-08 | 27.0 | 5.0 | 1.0 | 33.0 |
| 2025-09 | 27.0 | 5.0 | 0 | 32.0 |
| 2025-10 | 38.0 | 4.0 | 0 | 42.0 |
| 2025-11 | 25.9 | 5.0 | 0 | 30.9 |
| 2025-12 | 19.0 | 5.0 | 0 | 24.0 |
| 2026-01 | 23.0 | 0 | 0 | 23.0 |
| 2026-02 | 30.0 | 3.0 | 0 | 33.0 |
| 2026-03 | 16.0 | 4.0 | 0 | 20.0 |
| 2026-04 | 21.0 | 5.0 | 0 | 26.0 |
| 2026-05 | 17.0 | 1.0 | 0 | 18.0 |
| 2026-06 | 27.0 | 3.0 | 0 | 30.0 |
| 2026-07p | 10.9 | 5.0 | 0 | 15.9 |

Soft actions are Phone Click SR, Email Click SR and Newsletter Sign Up SR. The explicitly contaminated series is `Call Forwarding SR - sydneyphysiotherapist`.

**Chart form and why:** Stacked monthly columns for strict, soft and contaminated actions, with a grey cap marking `allConv`. This shows both composition and the gap between the honest series and the broader platform total.

**Sponsor takeaway:** `[Interpretation]` I would use the strict series as the only operating trend; the broader total contains soft actions, a confirmed wrong-service accrual and additional platform-only volume.

**Must-show caveat:** The platform totals are reported under the mixed 16-action goal set and are not qualified leads.

## 4. Ad-group spend and reported efficiency

**Honest sub-label:** Supports spend concentration and reported conversion arithmetic; does not support ad-group profitability or qualified efficiency.

**Metrics**

| Ad group | Spend | Spend share | Clicks | Reported conv. | A$ / reported conv. |
|---|---:|---:|---:|---:|---:|
| Manual Handling Training | A$17,269.15 | 40.8% | 2,429 | 118.5 | A$145.73 |
| Ergonomic Office Consulting | A$8,295.60 | 19.6% | 787 | 62.5 | A$132.73 |
| DSA - Ergoworks Consulting | A$7,396.38 | 17.5% | 662 | 74.2 | A$99.68 |
| Ergonomics Assessments | A$7,208.59 | 17.0% | 577 | 59.0 | A$122.18 |
| Workplace Ergonomics | A$2,112.54 | 5.0% | 217 | 19.5 | A$108.34 |
| School Ergonomics | A$15.02 | 0.04% | 2 | 0 | — |

**Chart form and why:** Two aligned horizontal bar charts: spend share and A$ per reported conversion. Keep the scales separate; do not use dual axes or a redundant colour legend.

**Sponsor takeaway:** `[Interpretation]` I would treat Manual Handling Training as the main spend-concentration risk; DSA’s lower reported cost is not evidence of cleaner performance.

**Must-show caveat:** Every efficiency figure uses platform-reported conversions under the mixed goal set, not strict or qualified events.

## 5. Keyword best/worst table

**Honest sub-label:** Supports exact lookup of reported keyword economics within the top-30 extract; does not support keyword-level qualified CPA.

**Metrics**

Rank by A$ per reported conversion, using `keywords_top30_12mo`.

| Lower reported cost | Match | Spend | Clicks | Reported conv. | A$ / reported conv. |
|---|---|---:|---:|---:|---:|
| manual handling training sydney | Exact | A$370.98 | 32 | 11.5 | A$32.26 |
| ergonomic assessment | Exact | A$477.65 | 42 | 8.5 | A$56.19 |
| +Ergonomics +Training | Broad | A$622.47 | 76 | 9.3 | A$66.93 |

| Higher reported cost | Match | Spend | Clicks | Reported conv. | A$ / reported conv. |
|---|---|---:|---:|---:|---:|
| +Ergonomics +Company | Broad | A$568.61 | 38 | 1.0 | A$568.61 |
| manual handling course | Exact | A$555.86 | 97 | 1.0 | A$555.86 |
| +ergonomic +services | Broad | A$522.37 | 59 | 1.0 | A$522.37 |

**Chart form and why:** Ranked table. Exact values, match types and denominators matter more than a visual ranking here.

**Sponsor takeaway:** `[Interpretation]` I would use the table to identify investigation candidates, not automatic winners and losers; the worst rows are largely one-conversion observations.

**Must-show caveat:** This is only the supplied top-30 keyword extract, and the conversion denominator is platform-reported, not strict or qualified.

## 6. Conversion integrity: physiotherapy jump and cross-accrual

**Honest sub-label:** Supports detection of a measurement break and one observed contamination event; does not establish physiotherapy demand or the total size of consulting contamination.

**Physiotherapy series**

| Month | Clicks | Reported conv. |
|---|---:|---:|
| 2025-07 | 357 | 19.0 |
| 2025-08 | 370 | 22.8 |
| 2025-09 | 353 | 10.0 |
| 2025-10 | 374 | 12.0 |
| 2025-11 | 396 | 19.0 |
| 2025-12 | 390 | 27.0 |
| 2026-01 | 415 | 22.0 |
| 2026-02 | 397 | 28.0 |
| 2026-03 | 200 | 45.0 |
| 2026-04 | 162 | 45.9 |
| 2026-05 | 196 | 46.0 |
| 2026-06 | 175 | 38.9 |
| 2026-07p | 152 | 36.0 |

Also show an event marker: **2025-08 — 1 `Call Forwarding SR - sydneyphysiotherapist` conversion accrued to the consulting campaign.**

**Chart form and why:** Two small-multiple line plots: physiotherapy clicks and reported conversions, with separate scales, plus a one-event annotation. This shows the divergence without a misleading dual axis.

**Sponsor takeaway:** `[Interpretation]` I would treat the March–July physiotherapy jump as a goal-mix artefact until verified; the August cross-accrual proves contamination has occurred, but does not quantify all contamination.

**Must-show caveat:** The conversion jump coincides with GA4 SR actions being enabled while clicks roughly halve. Treat it as a goal-mix artefact until verified. The cross-campaign accrual is observed, not merely mechanically possible.

## 7. Click-to-session tracking ratio

**Honest sub-label:** Supports tracking-continuity diagnosis; does not prove lost users, invalid clicks, a single tracking fault or qualified pipeline.

**Metric:** GA4 Paid Search sessions ÷ consulting Google Ads clicks.

| Month | Sessions / clicks |
|---|---:|
| 2025-07 | 96.3% |
| 2025-08 | 96.5% |
| 2025-09 | 94.9% |
| 2025-10 | 94.9% |
| 2025-11 | 86.1% |
| 2025-12 | 87.0% |
| 2026-01 | 88.4% |
| 2026-02 | 94.1% |
| 2026-03 | 86.1% |
| 2026-04 | 72.4% |
| 2026-05 | 71.2% |
| 2026-06 | 68.6% |
| 2026-07p | 74.5% |

**Chart form and why:** Single line chart with a 100% reference rule and direct end labels. This is a ratio trend, so a line is appropriate; no second axis is needed.

**Sponsor takeaway:** `[Interpretation]` I would call out the fall from roughly 96% to the low-70s as a tracking-health issue worth repairing, not as proof that advertising traffic is invalid.

**Must-show caveat:** This ratio is diagnostic only. Keep it separate from conversion performance and do not infer lost users or invalid advertising from it.

## 8. GA4 channel mix and Direct anomalies

**Honest sub-label:** Supports first-party channel-volume and mix context; does not support channel profitability, lead quality or attribution certainty.

**Series order:** Paid Search / Organic Search / Direct / Referral / Other.

| Month | Paid | Organic | Direct | Referral | Other |
|---|---:|---:|---:|---:|---:|
| 2025-07 | 389 | 260 | 82 | 45 | 7 |
| 2025-08 | 361 | 221 | 103 | 43 | 7 |
| 2025-09 | 333 | 299 | 357 | 17 | 23 |
| 2025-10 | 394 | 264 | 87 | 27 | 11 |
| 2025-11 | 329 | 245 | 465 | 17 | 18 |
| 2025-12 | 335 | 184 | 64 | 14 | 16 |
| 2026-01 | 357 | 201 | 89 | 20 | 12 |
| 2026-02 | 367 | 231 | 186 | 23 | 4 |
| 2026-03 | 360 | 218 | 198 | 23 | 7 |
| 2026-04 | 275 | 187 | 92 | 21 | 8 |
| 2026-05 | 232 | 172 | 75 | 14 | 7 |
| 2026-06 | 303 | 206 | 116 | 12 | 12 |
| 2026-07p | 266 | 146 | 62 | 11 | 3 |

**Chart form and why:** Stacked area chart with direct labels at the latest point and annotations at Direct = **357** in September 2025 and **465** in November 2025. This shows both total movement and channel composition.

**Sponsor takeaway:** `[Interpretation]` I would read Paid Search as the largest measured channel, while treating the two Direct spikes as anomalies requiring explanation rather than organic growth.

**Must-show caveat:** Direct spikes in 2025-09 and 2025-11 are anomalies to explain, not evidence of organic growth.

## 9. GSC brand versus non-brand snapshot

**Honest sub-label:** Supports the brand/non-brand shape of the supplied top-query sample; does not support total search demand, lead quality or pipeline.

**Grouping**

Brand queries: `ergoworks`, `ergoassess`, `ergo works`.

Among the 12 supplied top queries:

| Group | Clicks | Impressions | CTR |
|---|---:|---:|---:|
| Brand | 57 | 565 | 10.1% |
| Non-brand | 20 | 4,615 | 0.4% |
| Total supplied rows | 77 | 5,180 | 1.5% |

**Chart form and why:** Two 100% stacked horizontal bars: click share and impression share. This is a two-category composition, so it is clearer than a pie and keeps the denominator explicit.

**Sponsor takeaway:** `[Interpretation]` I would tell Greg that brand queries capture most clicks in this sample, while non-brand queries provide most impressions but very little click capture.

**Must-show caveat:** This is the `gsc_queries_90d_top` extract, not the complete query universe. Brand classification is rule-based from the query text and does not establish total demand or commercial intent.

## Presentation rules

Use the existing pack’s treatment: eyebrow label, direct title, muted one-line sub-label, `[Verified]` and `[Interpretation]` tags, and a visible mint caveat block. Reuse the existing table treatment for exact lookup. All charts should be static inline SVG with direct labels, visible values, accessible `<title>`/`<desc>`, and no hover-only information.

One data-version warning: the current snapshot’s A$42,297.28 spend differs slightly from older figures still shown in the 25 July plan/evidence pages. The dashboard should identify itself as the 29 July snapshot and avoid mixing pulls.
