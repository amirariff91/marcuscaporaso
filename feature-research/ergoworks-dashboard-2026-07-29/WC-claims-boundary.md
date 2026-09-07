al:
            every non-interacting visitor goes unobserved, which would widen the measured
            <EvidenceLink id="6g.8"> click-to-session gap (evidence 6g.8)</EvidenceLink>. Whether Consent
            Mode cookieless pings are permitted before consent is a decision to make explicitly, not to
            inherit. The health-data and audience restrictions on this page are separate: those carry
            Australian privacy obligations regardless of the analytics posture chosen.
          </p>
          <ul>
            <li>The consent-management platform establishes the default consent state before measurement transmission.</li>
            <li>Consent Mode uses default denied states for analytics storage, ad storage, ad-user-data and ad-personalisation until the required consent is recorded.</li>
            <li>No analytics, advertising, server-side, audience or call-tracking transmission occurs before the required consent evidence is available — unless the gate C5 decision explicitly permits Consent Mode cookieless pings, in which case only those pings are exempt.</li>
            <li>Consent updates propagate to the web and server tagging layers; the server layer rejects advertising events without the required evidence.</li>
            <li>Withdrawal stops future processing and triggers the approved deletion or suppression workflow.</li>
          </ul>
        </div>
      </section>

      <section className={styles.docSection} id="handoff">
        <SectionHeading
          label="Implementation hand-off · Appendix C §§7, 9, 10, 11, 12 and 13"
          title="The specification is complete when the boundaries are testable."
          copy="Appendix C remains the detailed implementation reference. This page carries the decisions that must be visible to both the sponsor and the person building the CRM and tracking flow."
        />

        <div className={styles.prose}>
          <p>
            <strong>Appendix C map:</strong> §7 offline conversion loop; §9 consent and privacy; §10
            platform allowlist; §11 attribution; §12 call tracking; and §13 KPI framework.
          </p>
          <h3>Acceptance conditions</h3>
          <ul>
            <li>The Consulting conversion goal <strong>must no longer include</strong> newsletter, raw soft actions, physiotherapy or other-business actions. This is an acceptance condition, not a completed step — the current mixed state is linked at <a href="/ergoworks/plan/evidence#evidence-6a.9">evidence 6a.9</a>.</li>
            <li><strong>[Interpretation]</strong> The CRM stores <code>organisation_account_id</code>, click identifiers, call id, connected duration, CRM disposition, service stages, values and consent records.</li>
            <li><strong>[Interpretation]</strong> The CRM stores connected and unconnected call attempts, including ring-out, abandoned, out-of-hours and voicemail outcomes, answer status, callback recovery and callback SLA; reporting reconciles these with connected-call conversions and CRM disposition. Call-length thresholds are configured per conversion action, CRM disposition is captured on a defined share of recorded calls, and the <EvidenceLink id="6a.7">13 recorded lead events attributed to calls</EvidenceLink> are treated as a count of recorded call conversions, not verified genuine enquiries.</li>
            <li><strong>[Interpretation]</strong> <code>qualified_call</code> is the only primary call signal, with CRM disposition authoritative and form deduplication tested.</li>
            <li><strong>[Interpretation]</strong> Conversion repair accounts for both directions of account-wide contamination: each campaign’s goal set is eligible to optimise towards the other’s conversions (<EvidenceLink id="6a.14">evidence 6a.14</EvidenceLink>). The separation decision remains at <a href="/ergoworks/plan/decisions#gate-C7">gate C7</a>. Both campaigns’ effective conversion goals are re-pulled and quoted after the repair.</li>
            <li><strong>[Interpretation]</strong> Won consulting imports pass the Appendix C §7 offline loop; equipment revenue, worker health data and individual route-out events are rejected by the allowlist.</li>
            <li><strong>[Interpretation]</strong> The internal account view uses manually validated <code>organisation_account_id</code>, is labelled associated cross-sell value, and is kept separate from platform ROAS.</li>
            <li><strong>GATE</strong> Gross-margin-derived reporting remains disabled until <a href="/ergoworks/plan/decisions#gate-B11">gate B11</a> supplies a finance source or approved store cost data.</li>
            <li><strong>GATE</strong> Australian privacy approval and tracking-stack confirmation are recorded before CRM audiences, cross-brand joins or offline imports begin. These are behavioural checks, not only approval records: in-browser verification that default consent states are set before any tag fires, no network request carrying the legacy UA-530267-5 identifier observed in a tag-debugging session (DOM absence alone is not sufficient, since the tag manager could inject it), and the GA4 tag observed firing in the expected consent state.</li>
          </ul>

          <h3>Reporting vocabulary</h3>
          <p>
            Use the Appendix C §13 KPI framework for qualified-lead cost, raw lead cost, qualified-lead
            rate, CAC, platform-to-CRM discrepancy and upload health. Describe equipment outcomes as
            <strong> associated cross-sell value</strong>, never as causal or incremental revenue. Keep
            every account-level figure separate from platform ROAS.
          </p>
          <p>
            Status labels on this page are explicit: <strong>[Verified]</strong> means checked against a
            dated source; <strong>[Interpretation]</strong> means my reading of the evidence; and
            <strong>[Assumption]</strong> means a working belief still requiring a source or decision.
            This page contains no live-account authorisation.
          </p>
        </div>

        <div className={styles.calloutRow}>
          <CircleAlert size={20} />
          <p>
            <strong>Release rule:</strong> If consent, isolation, the qualified-call definition, CRM
            identity, won-import validation or gross-margin source is unresolved, stop at that gate and
            report the limitation. The missing data is part of the result.
          </p>
        </div>
      </section>
    </main>
  );
}

exec
/bin/zsh -lc "sed -n '447,535p' src/app/ergoworks/plan/evidence/page.tsx" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
    label: "6g · GA4",
    source: "Property 316175981; Australia/Sydney timezone",
    records: [
      {
        id: "6g.1",
        claim: "Total sessions",
        value: "1,716 sessions.",
        source: "GA4",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",
        status: "Verified",
        establishes: "The first-party session total for the stated period.",
        doesNotEstablish: "It does not establish unique people, qualified visits, or commercial outcomes.",
      },
      {
        id: "6g.2",
        claim: "Sessions by channel",
        value: "Paid Search 830; Organic Search 561; Direct 258; Referral 43; Cross-network 12; AI Assistant 7; Unassigned 5.",
        source: "GA4",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",
        status: "Verified",
        establishes: "The channel mix and the relative weight of paid and organic search in first-party analytics.",
        doesNotEstablish: "It does not establish lead quality, attribution accuracy, or the identity of referral visitors.",
      },
      {
        id: "6g.3",
        claim: "Paid social",
        value: "No Paid Social channel row and no Facebook, Instagram or Meta source in the source/medium breakdown.",
        source: "GA4",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",
        status: "Verified",
        establishes: "There is no verified recent paid-social session activity in this property and period.",
        doesNotEstablish: "It does not establish that no Meta account or historical campaign exists.",
      },
      {
        id: "6g.4",
        claim: "Top source/medium rows",
        value: "google / cpc 830; google / organic 477; direct 258; bing / organic 75; chatgpt.com 14; assorted referrals no higher than 7 each.",
        source: "GA4",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",
        status: "Verified",
        establishes: "The largest first-party source/medium rows behind the channel totals.",
        doesNotEstablish: "It does not establish the quality or intent of any source/medium row.",
      },
      {
        id: "6g.5",
        claim: "Paid dependence quantified",
        value: "Paid Search is 48% of all sessions and outweighs Organic Search 830 to 561.",
        source: "GA4",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",
        status: "Verified",
        establishes: "First-party analytics supports the conclusion that paid Search is currently the larger search source.",
        doesNotEstablish: "It does not establish that paid Search is more profitable or should receive every future growth dollar.",
      },
      {
        id: "6g.6",
        claim: "Organic-volume reconciliation",
        value: "GA4 records about 477 google/organic sessions in 90 days (about 159 per month); this first-party figure is preferred where external estimates differ.",
        source: "GA4",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",
        status: "Verified",
        establishes: "The authoritative first-party organic session figure for this page’s evidence cut.",
        doesNotEstablish: "It does not establish why external models differ or that all organic sessions are commercial visits.",
      },
      {
        id: "6g.7",
        claim: "Workplace referral signal",
        value: "Some referrals came from workplace intranets and collaboration infrastructure; identifying source names are intentionally withheld.",
        source: "GA4",
        date: "25 July 2026 pull; 90-day window ending 24 July 2026",
        status: "Verified",
        establishes: "There is a small, real workplace-readership signal in referral traffic.",
        doesNotEstablish: "It does not establish the identity of visiting companies, buying intent, or a scalable channel.",
      },
      {
        id: "6g.8",
        claim: "Click-to-session gap",
        value: "385 ad clicks in 30 days annualise to about 1,155 per 90 days against 830 GA4 Paid Search sessions, or about 72%.",
        source: "Google Ads and GA4",
        date: "25 July 2026 pull; comparison uses the stated 30- and 90-day windows",
        status: "Interpretation",
        establishes: "The scale of the click/session discrepancy is consistent with the need for tracking hygiene work.",
        doesNotEstablish: "It does not prove a single tracking fault, lost users, or invalid advertising traffic.",
      },
    ],
  },
];

const anchorStyle = { scrollMarginTop: "4.5rem" } as const;


codex
The data has eight distinct series families: two campaign-monthly series, conversion-action mix, ad groups, keywords, devices, GA4 channels, and GSC queries. I’m checking their denominators and time windows now so the rules distinguish a misleading visual from a merely incomplete one.
exec
/bin/zsh -lc "jq '{keys: keys, monthly: {consulting: .consulting_monthly, physio: .physio_monthly}, ga4: .ga4_channel_monthly, mix: .consulting_conversion_mix_monthly}' feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
{
  "keys": [
    "adgroups_12mo",
    "consulting_conversion_mix_monthly",
    "consulting_monthly",
    "device_12mo",
    "ga4_channel_monthly",
    "gsc_queries_90d_top",
    "keywords_top30_12mo",
    "meta",
    "physio_monthly"
  ],
  "monthly": {
    "consulting": [
      {
        "m": "2025-07",
        "cost": 3364.50,
        "clicks": 404,
        "impr": 5123,
        "conv": 37.0,
        "allConv": 37.0
      },
      {
        "m": "2025-08",
        "cost": 3055.48,
        "clicks": 374,
        "impr": 5109,
        "conv": 33.0,
        "allConv": 33.0
      },
      {
        "m": "2025-09",
        "cost": 3405.78,
        "clicks": 351,
        "impr": 4685,
        "conv": 32.0,
        "allConv": 32.0
      },
      {
        "m": "2025-10",
        "cost": 3529.50,
        "clicks": 415,
        "impr": 4376,
        "conv": 42.0,
        "allConv": 42.0
      },
      {
        "m": "2025-11",
        "cost": 3062.02,
        "clicks": 382,
        "impr": 3664,
        "conv": 30.9,
        "allConv": 30.9
      },
      {
        "m": "2025-12",
        "cost": 3559.69,
        "clicks": 385,
        "impr": 3817,
        "conv": 24.0,
        "allConv": 24.0
      },
      {
        "m": "2026-01",
        "cost": 3405.83,
        "clicks": 404,
        "impr": 4345,
        "conv": 23.0,
        "allConv": 23.0
      },
      {
        "m": "2026-02",
        "cost": 3144.71,
        "clicks": 390,
        "impr": 4780,
        "conv": 33.0,
        "allConv": 33.0
      },
      {
        "m": "2026-03",
        "cost": 3330.27,
        "clicks": 418,
        "impr": 5699,
        "conv": 20.0,
        "allConv": 20.0
      },
      {
        "m": "2026-04",
        "cost": 3407.35,
        "clicks": 380,
        "impr": 4388,
        "conv": 26.0,
        "allConv": 28.0
      },
      {
        "m": "2026-05",
        "cost": 3154.72,
        "clicks": 326,
        "impr": 3891,
        "conv": 18.0,
        "allConv": 22.0
      },
      {
        "m": "2026-06",
        "cost": 4715.65,
        "clicks": 442,
        "impr": 4926,
        "conv": 30.0,
        "allConv": 33.0
      },
      {
        "m": "2026-07p",
        "cost": 4147.46,
        "clicks": 357,
        "impr": 4193,
        "conv": 15.9,
        "allConv": 17.9
      }
    ],
    "physio": [
      {
        "m": "2025-07",
        "cost": 912.12,
        "clicks": 357,
        "conv": 19.0
      },
      {
        "m": "2025-08",
        "cost": 909.50,
        "clicks": 370,
        "conv": 22.8
      },
      {
        "m": "2025-09",
        "cost": 911.60,
        "clicks": 353,
        "conv": 10.0
      },
      {
        "m": "2025-10",
        "cost": 914.31,
        "clicks": 374,
        "conv": 12.0
      },
      {
        "m": "2025-11",
        "cost": 900.28,
        "clicks": 396,
        "conv": 19.0
      },
      {
        "m": "2025-12",
        "cost": 911.95,
        "clicks": 390,
        "conv": 27.0
      },
      {
        "m": "2026-01",
        "cost": 911.22,
        "clicks": 415,
        "conv": 22.0
      },
      {
        "m": "2026-02",
        "cost": 914.74,
        "clicks": 397,
        "conv": 28.0
      },
      {
        "m": "2026-03",
        "cost": 908.64,
        "clicks": 200,
        "conv": 45.0
      },
      {
        "m": "2026-04",
        "cost": 912.05,
        "clicks": 162,
        "conv": 45.9
      },
      {
        "m": "2026-05",
        "cost": 907.74,
        "clicks": 196,
        "conv": 46.0
      },
      {
        "m": "2026-06",
        "cost": 911.56,
        "clicks": 175,
        "conv": 38.9
      },
      {
        "m": "2026-07p",
        "cost": 840.17,
        "clicks": 152,
        "conv": 36.0
      }
    ]
  },
  "ga4": [
    {
      "m": "2025-07",
      "Paid Search": 389,
      "Organic Search": 260,
      "Direct": 82,
      "Referral": 45,
      "Other": 7
    },
    {
      "m": "2025-08",
      "Paid Search": 361,
      "Organic Search": 221,
      "Direct": 103,
      "Referral": 43,
      "Other": 7
    },
    {
      "m": "2025-09",
      "Paid Search": 333,
      "Organic Search": 299,
      "Direct": 357,
      "Referral": 17,
      "Other": 23
    },
    {
      "m": "2025-10",
      "Paid Search": 394,
      "Organic Search": 264,
      "Direct": 87,
      "Referral": 27,
      "Other": 11
    },
    {
      "m": "2025-11",
      "Paid Search": 329,
      "Organic Search": 245,
      "Direct": 465,
      "Referral": 17,
      "Other": 18
    },
    {
      "m": "2025-12",
      "Paid Search": 335,
      "Organic Search": 184,
      "Direct": 64,
      "Referral": 14,
      "Other": 16
    },
    {
      "m": "2026-01",
      "Paid Search": 357,
      "Organic Search": 201,
      "Direct": 89,
      "Referral": 20,
      "Other": 12
    },
    {
      "m": "2026-02",
      "Paid Search": 367,
      "Organic Search": 231,
      "Direct": 186,
      "Referral": 23,
      "Other": 4
    },
    {
      "m": "2026-03",
      "Paid Search": 360,
      "Organic Search": 218,
      "Direct": 198,
      "Referral": 23,
      "Other": 7
    },
    {
      "m": "2026-04",
      "Paid Search": 275,
      "Organic Search": 187,
      "Direct": 92,
      "Referral": 21,
      "Other": 8
    },
    {
      "m": "2026-05",
      "Paid Search": 232,
      "Organic Search": 172,
      "Direct": 75,
      "Referral": 14,
      "Other": 7
    },
    {
      "m": "2026-06",
      "Paid Search": 303,
      "Organic Search": 206,
      "Direct": 116,
      "Referral": 12,
      "Other": 12
    },
    {
      "m": "2026-07p",
      "Paid Search": 266,
      "Organic Search": 146,
      "Direct": 62,
      "Referral": 11,
      "Other": 3
    }
  ],
  "mix": [
    {
      "m": "2025-07",
      "action": "Call Forwarding SR - Ergoworks Consulting",
      "conv": 16.0
    },
    {
      "m": "2025-07",
      "action": "Calls from ads",
      "conv": 7.0
    },
    {
      "m": "2025-07",
      "action": "Make an Enquiry SR",
      "conv": 8.0
    },
    {
      "m": "2025-07",
      "action": "Newsletter Sign Up SR",
      "conv": 1.0
    },
    {
      "m": "2025-07",
      "action": "Phone Click SR",
      "conv": 5.0
    },
    {
      "m": "2025-08",
      "action": "Call Forwarding SR - Ergoworks Consulting",
      "conv": 10.0
    },
    {
      "m": "2025-08",
      "action": "Call Forwarding SR - sydneyphysiotherapist",
      "conv": 1.0
    },
    {
      "m": "2025-08",
      "action": "Calls from ads",
      "conv": 4.0
    },
    {
      "m": "2025-08",
      "action": "Email Click SR",
      "conv": 2.0
    },
    {
      "m": "2025-08",
      "action": "Make an Enquiry SR",
      "conv": 13.0
    },
    {
      "m": "2025-08",
      "action": "Newsletter Sign Up SR",
      "conv": 1.0
    },
    {
      "m": "2025-08",
      "action": "Phone Click SR",
      "conv": 2.0
    },
    {
      "m": "2025-09",
      "action": "Call Forwarding SR - Ergoworks Consulting",
      "conv": 5.0
    },
    {
      "m": "2025-09",
      "action": "Calls from ads",
      "conv": 13.0
    },
    {
      "m": "2025-09",
      "action": "Email Click SR",
      "conv": 1.0
    },
    {
      "m": "2025-09",
      "action": "Make an Enquiry SR",
      "conv": 9.0
    },
    {
      "m": "2025-09",
      "action": "Phone Click SR",
      "conv": 4.0
    },
    {
      "m": "2025-10",
      "action": "Call Forwarding SR - Ergoworks Consulting",
      "conv": 14.0
    },
    {
      "m": "2025-10",
      "action": "Calls from ads",
      "conv": 9.0
    },
    {
      "m": "2025-10",
      "action": "Email Click SR",
      "conv": 1.0
    },
    {
      "m": "2025-10",
      "action": "Make an Enquiry SR",
      "conv": 15.0
    },
    {
      "m": "2025-10",
      "action": "Phone Click SR",
      "conv": 3.0
    },
    {
      "m": "2025-11",
      "action": "Call Forwarding SR - Ergoworks Consulting",
      "conv": 11.0
    },
    {
      "m": "2025-11",
      "action": "Calls from ads",
      "conv": 6.0
    },
    {
      "m": "2025-11",
      "action": "Email Click SR",
      "conv": 1.0
    },
    {
      "m": "2025-11",
      "action": "Make an Enquiry SR",
      "conv": 8.9
    },
    {
      "m": "2025-11",
      "action": "Phone Click SR",
      "conv": 4.0
    },
    {
      "m": "2025-12",
      "action": "Call Forwarding SR - Ergoworks Consulting",
      "conv": 8.0
    },
    {
      "m": "2025-12",
      "action": "Calls from ads",
      "conv": 6.0
    },
    {
      "m": "2025-12",
      "action": "Make an Enquiry SR",
      "conv": 5.0
    },
    {
      "m": "2025-12",
      "action": "Phone Click SR",
      "conv": 5.0
    },
    {
      "m": "2026-01",
      "action": "Call Forwarding SR - Ergoworks Consulting",
      "conv": 9.0
    },
    {
      "m": "2026-01",
      "action": "Calls from ads",
      "conv": 3.0
    },
    {
      "m": "2026-01",
      "action": "Make an Enquiry SR",
      "conv": 11.0
    },
    {
      "m": "2026-02",
      "action": "Call Forwarding SR - Ergoworks Consulting",
      "conv": 5.0
    },
    {
      "m": "2026-02",
      "action": "Calls from ads",
      "conv": 7.0
    },
    {
      "m": "2026-02",
      "action": "Make an Enquiry SR",
      "conv": 18.0
    },
    {
      "m": "2026-02",
      "action": "Phone Click SR",
      "conv": 3.0
    },
    {
      "m": "2026-03",
      "action": "Call Forwarding SR - Ergoworks Consulting",
      "conv": 5.0
    },
    {
      "m": "2026-03",
      "action": "Calls from ads",
      "conv": 6.0
    },
    {
      "m": "2026-03",
      "action": "Email Click SR",
      "conv": 2.0
    },
    {
      "m": "2026-03",
      "action": "Make an Enquiry SR",
      "conv": 5.0
    },
    {
      "m": "2026-03",
      "action": "Phone Click SR",
      "conv": 2.0
    },
    {
      "m": "2026-04",
      "action": "Call Forwarding SR - Ergoworks Consulting",
      "conv": 8.0
    },
    {
      "m": "2026-04",
      "action": "Calls from ads",
      "conv": 5.0
    },
    {
      "m": "2026-04",
      "action": "Email Click SR",
      "conv": 1.0
    },
    {
      "m": "2026-04",
      "action": "Make an Enquiry SR",
      "conv": 8.0
    },
    {
      "m": "2026-04",
      "action": "Newsletter Sign Up SR",
      "conv": 1.0
    },
    {
      "m": "2026-04",
      "action": "Phone Click SR",
      "conv": 3.0
    },
    {
      "m": "2026-05",
      "action": "Call Forwarding SR - Ergoworks Consulting",
      "conv": 3.0
    },
    {
      "m": "2026-05",
      "action": "Calls from ads",
      "conv": 5.0
    },
    {
      "m": "2026-05",
      "action": "Make an Enquiry SR",
      "conv": 9.0
    },
    {
      "m": "2026-05",
      "action": "Phone Click SR",
      "conv": 1.0
    },
    {
      "m": "2026-06",
      "action": "Call Forwarding SR - Ergoworks Consulting",
      "conv": 4.0
    },
    {
      "m": "2026-06",
      "action": "Calls from ads",
      "conv": 13.0
    },
    {
      "m": "2026-06",
      "action": "Make an Enquiry SR",
      "conv": 10.0
    },
    {
      "m": "2026-06",
      "action": "Newsletter Sign Up SR",
      "conv": 3.0
    },
    {
      "m": "2026-07p",
      "action": "Call Forwarding SR - Ergoworks Consulting",
      "conv": 2.0
    },
    {
      "m": "2026-07p",
      "action": "Calls from ads",
      "conv": 6.0
    },
    {
      "m": "2026-07p",
      "action": "Email Click SR",
      "conv": 1.0
    },
    {
      "m": "2026-07p",
      "action": "Make an Enquiry SR",
      "conv": 2.9
    },
    {
      "m": "2026-07p",
      "action": "Newsletter Sign Up SR",
      "conv": 1.0
    },
    {
      "m": "2026-07p",
      "action": "Phone Click SR",
      "conv": 3.0
    }
  ]
}

codex
# Claims-boundary red-team rules

1. **Put these exact caveats on every relevant card, chart and tooltip.**

   - **Platform total:** “Platform-reported conversions — contaminated mixed goal set (all 16 enabled actions are primary); not qualified leads.”
   - **Strict event metric:** “Strict recorded lead events = Make an Enquiry SR + Calls from ads + Call Forwarding SR only; recorded events, not qualified leads.”
   - **Calls:** “Both consulting call conversion actions count calls from 1 second; recorded calls are not verified genuine enquiries.”
   - **Associated value:** “Associated cross-sell value — associated, not causal or incremental revenue.”
   - **July:** “Jul 2026p is a partial month through 28 July; not comparable with a full month and not a forecast.”

2. **`consulting_monthly`**

   - A naive conversions chart implies that leads fell from the October 2025 peak to July 2026.
   - It actually establishes platform-reported conversion activity, spend, clicks and impressions by month. The denominator is contaminated; the action mix changed; `allConv` is not a qualified-lead total. Fractional values such as 30.9 and 15.9 are not literal people.
   - Spend does not establish an approved budget, acceptable spend or return. Clicks do not establish sessions, unique people or demand. Impressions do not establish unique reach.
   - Required label: “Google Ads monthly activity — descriptive platform metrics; conversion totals are not qualified leads.”

3. **`physio_monthly`**

   - A naive chart implies that physiotherapy performance suddenly improved: conversions rose to roughly 45 per month from March–May 2026 while clicks roughly halved.
   - It actually establishes a goal-mix anomaly: the jump coincides with GA4 SR actions being enabled and must be treated as a goal-mix artefact until verified. The campaign also uses the account-default mixed goal set.
   - It does not establish threefold lead growth, improved efficiency, or cross-campaign performance.
   - Required label: “Physiotherapy conversions — platform-reported under a mixed goal set; March–July increase is a goal-mix artefact until verified.”

4. **`consulting_conversion_mix_monthly`**

   - A naive stacked chart implies that every action is an equivalent lead and that changes in the stack represent changes in customer behaviour.
   - It actually establishes the recorded mix of platform action rows. Only Make an Enquiry SR, Calls from ads and Call Forwarding SR belong to the strict event definition. Newsletter Sign Up SR, Phone Click SR and Email Click SR are diagnostic or secondary actions.
   - One cross-campaign accrual is actually present: “Call Forwarding SR - sydneyphysiotherapist” recorded one conversion in Consulting in August 2025.
   - Required labels:
     - “Diagnostic action — not a strict recorded lead event.”
     - “Other-campaign action — observed contamination; do not attribute to Consulting.”
     - “Action-mix values are platform conversion units, not qualified enquiries.”

5. **`adgroups_12mo`**

   - A naive ranking implies that the ad group with the most conversions or lowest cost per conversion is the best, most profitable or safest place to increase budget.
   - It actually establishes trailing-12-month spend, clicks and platform-reported conversions by ad group. Manual Handling Training is a spend concentration, not proof of inefficiency or lead quality. Small rows, including School Ergonomics and Brand, are not reliable ranking evidence.
   - Required label: “Ad-group performance — platform activity only; no CRM quality, profitability or commercial outcome data.”

6. **`keywords_top30_12mo`**

   - A naive chart implies that high-conversion keywords represent the strongest commercial demand or generate qualified pipeline.
   - It actually establishes keyword-row spend, clicks, impressions, match type and platform-reported conversions for a top-30 extract. Broad, phrase and exact are targeting types, not quality ratings. The rows are not a complete account total and must not be summed into one.
   - Required label: “Keyword rows — 12-month Google Ads activity; conversions are not qualified leads or revenue.”

7. **`device_12mo`**

   - A naive device chart implies that Desktop is superior because it has more conversions, or that Mobile is inferior because its conversion rate is lower.
   - It actually establishes platform activity by device over the trailing 12 months. It does not establish qualified lead quality, unique users, cross-device journeys or device-level profitability. Tablet has too little volume for a meaningful ranking.
   - Required label: “Device distribution — platform-reported activity; not qualified lead performance.”

8. **`ga4_channel_monthly`**

   - A naive chart implies that Paid Search or Organic Search produced commercial outcomes, and that Direct spikes represent brand or organic growth.
   - It actually establishes first-party GA4 sessions by channel. Sessions are not unique people, qualified visits or leads. Direct spikes in September 2025 and November 2025 are anomalies to explain, not organic growth; bot or internal traffic remains possible but unverified.
   - Required labels:
     - “GA4 sessions — first-party session counts; not qualified visits or commercial outcomes.”
     - “Direct — anomalous/unclassified spike; not evidence of organic growth.”

9. **`gsc_queries_90d_top`**

   - A naive chart implies that query position, impressions or clicks measure total demand, SEO success or pipeline.
   - It actually establishes Search Console impressions, clicks and average position for selected query rows in a 90-day AU window. It does not establish qualified visits, commercial intent, total demand or why a query received no clicks.
   - Required label: “Search Console query visibility — 90-day impressions, clicks and average position; not demand or pipeline.”

10. **Do not make these comparisons.**

   - July 2026p against any full month, including June 2026 or July 2025.
   - Month-over-month conversion rates or cost-per-conversion where the action set changed.
   - Consulting versus Physiotherapy conversions, CPA or efficiency rankings.
   - Google Ads clicks versus GA4 Paid Search sessions as though they share a denominator.
   - GSC clicks versus GA4 Organic Search sessions as though they are the same traffic.
   - Direct-session spikes versus Paid or Organic growth.
   - Top-30 keyword totals versus complete ad-group totals; the windows and coverage differ.
   - Monthly campaign data versus trailing-12-month ad-group, keyword or device data.
   - Any series whose co-movement is presented as cause rather than association.

11. **These things must not appear at all.**

   - Qualified-lead counts, MQL/SQL labels, opportunities, qualified pipeline, won revenue or sales forecasts.
   - CPA targets, “CPA improvement”, CAC, LTV:CAC, profitability, ROI or ROAS. A descriptive ratio may only be called “media cost per recorded lead event,” never qualified-lead cost or a target CPA.
   - Any forecast, run-rate or extrapolation from partial July.
   - Claims that one campaign caused another campaign’s conversions, or that Consulting caused Physio activity.
   - Claims that consulting caused equipment orders, revenue or cross-sell. Use only “associated cross-sell value” after validated internal data exists.
   - Competitor names or claims about competitor advertising; that evidence was unchecked.
   - Withheld referral-company identities, equipment-buyer identities, worker health/assessment data, unverified Meta activity, Clarity findings or gross-margin conclusions.

12. **The three mistakes most likely to slip through are:**

   1. A headline card labelled “Conversions” with a cost-per-conversion trend, interpreted as qualified leads and CPA.
   2. A “Physio efficiency improved” story based on conversions rising while clicks fell, ignoring the GA4 SR goal-mix change.
   3. A full-month trend chart that compares partial July, overlays Ads clicks with GA4 sessions, or treats Direct spikes as genuine growth.
hook: Stop
hook: Stop Completed
tokens used
53,645
# Claims-boundary red-team rules

1. **Put these exact caveats on every relevant card, chart and tooltip.**

   - **Platform total:** “Platform-reported conversions — contaminated mixed goal set (all 16 enabled actions are primary); not qualified leads.”
   - **Strict event metric:** “Strict recorded lead events = Make an Enquiry SR + Calls from ads + Call Forwarding SR only; recorded events, not qualified leads.”
   - **Calls:** “Both consulting call conversion actions count calls from 1 second; recorded calls are not verified genuine enquiries.”
   - **Associated value:** “Associated cross-sell value — associated, not causal or incremental revenue.”
   - **July:** “Jul 2026p is a partial month through 28 July; not comparable with a full month and not a forecast.”

2. **`consulting_monthly`**

   - A naive conversions chart implies that leads fell from the October 2025 peak to July 2026.
   - It actually establishes platform-reported conversion activity, spend, clicks and impressions by month. The denominator is contaminated; the action mix changed; `allConv` is not a qualified-lead total. Fractional values such as 30.9 and 15.9 are not literal people.
   - Spend does not establish an approved budget, acceptable spend or return. Clicks do not establish sessions, unique people or demand. Impressions do not establish unique reach.
   - Required label: “Google Ads monthly activity — descriptive platform metrics; conversion totals are not qualified leads.”

3. **`physio_monthly`**

   - A naive chart implies that physiotherapy performance suddenly improved: conversions rose to roughly 45 per month from March–May 2026 while clicks roughly halved.
   - It actually establishes a goal-mix anomaly: the jump coincides with GA4 SR actions being enabled and must be treated as a goal-mix artefact until verified. The campaign also uses the account-default mixed goal set.
   - It does not establish threefold lead growth, improved efficiency, or cross-campaign performance.
   - Required label: “Physiotherapy conversions — platform-reported under a mixed goal set; March–July increase is a goal-mix artefact until verified.”

4. **`consulting_conversion_mix_monthly`**

   - A naive stacked chart implies that every action is an equivalent lead and that changes in the stack represent changes in customer behaviour.
   - It actually establishes the recorded mix of platform action rows. Only Make an Enquiry SR, Calls from ads and Call Forwarding SR belong to the strict event definition. Newsletter Sign Up SR, Phone Click SR and Email Click SR are diagnostic or secondary actions.
   - One cross-campaign accrual is actually present: “Call Forwarding SR - sydneyphysiotherapist” recorded one conversion in Consulting in August 2025.
   - Required labels:
     - “Diagnostic action — not a strict recorded lead event.”
     - “Other-campaign action — observed contamination; do not attribute to Consulting.”
     - “Action-mix values are platform conversion units, not qualified enquiries.”

5. **`adgroups_12mo`**

   - A naive ranking implies that the ad group with the most conversions or lowest cost per conversion is the best, most profitable or safest place to increase budget.
   - It actually establishes trailing-12-month spend, clicks and platform-reported conversions by ad group. Manual Handling Training is a spend concentration, not proof of inefficiency or lead quality. Small rows, including School Ergonomics and Brand, are not reliable ranking evidence.
   - Required label: “Ad-group performance — platform activity only; no CRM quality, profitability or commercial outcome data.”

6. **`keywords_top30_12mo`**

   - A naive chart implies that high-conversion keywords represent the strongest commercial demand or generate qualified pipeline.
   - It actually establishes keyword-row spend, clicks, impressions, match type and platform-reported conversions for a top-30 extract. Broad, phrase and exact are targeting types, not quality ratings. The rows are not a complete account total and must not be summed into one.
   - Required label: “Keyword rows — 12-month Google Ads activity; conversions are not qualified leads or revenue.”

7. **`device_12mo`**

   - A naive device chart implies that Desktop is superior because it has more conversions, or that Mobile is inferior because its conversion rate is lower.
   - It actually establishes platform activity by device over the trailing 12 months. It does not establish qualified lead quality, unique users, cross-device journeys or device-level profitability. Tablet has too little volume for a meaningful ranking.
   - Required label: “Device distribution — platform-reported activity; not qualified lead performance.”

8. **`ga4_channel_monthly`**

   - A naive chart implies that Paid Search or Organic Search produced commercial outcomes, and that Direct spikes represent brand or organic growth.
   - It actually establishes first-party GA4 sessions by channel. Sessions are not unique people, qualified visits or leads. Direct spikes in September 2025 and November 2025 are anomalies to explain, not organic growth; bot or internal traffic remains possible but unverified.
   - Required labels:
     - “GA4 sessions — first-party session counts; not qualified visits or commercial outcomes.”
     - “Direct — anomalous/unclassified spike; not evidence of organic growth.”

9. **`gsc_queries_90d_top`**

   - A naive chart implies that query position, impressions or clicks measure total demand, SEO success or pipeline.
   - It actually establishes Search Console impressions, clicks and average position for selected query rows in a 90-day AU window. It does not establish qualified visits, commercial intent, total demand or why a query received no clicks.
   - Required label: “Search Console query visibility — 90-day impressions, clicks and average position; not demand or pipeline.”

10. **Do not make these comparisons.**

   - July 2026p against any full month, including June 2026 or July 2025.
   - Month-over-month conversion rates or cost-per-conversion where the action set changed.
   - Consulting versus Physiotherapy conversions, CPA or efficiency rankings.
   - Google Ads clicks versus GA4 Paid Search sessions as though they share a denominator.
   - GSC clicks versus GA4 Organic Search sessions as though they are the same traffic.
   - Direct-session spikes versus Paid or Organic growth.
   - Top-30 keyword totals versus complete ad-group totals; the windows and coverage differ.
   - Monthly campaign data versus trailing-12-month ad-group, keyword or device data.
   - Any series whose co-movement is presented as cause rather than association.

11. **These things must not appear at all.**

   - Qualified-lead counts, MQL/SQL labels, opportunities, qualified pipeline, won revenue or sales forecasts.
   - CPA targets, “CPA improvement”, CAC, LTV:CAC, profitability, ROI or ROAS. A descriptive ratio may only be called “media cost per recorded lead event,” never qualified-lead cost or a target CPA.
   - Any forecast, run-rate or extrapolation from partial July.
   - Claims that one campaign caused another campaign’s conversions, or that Consulting caused Physio activity.
   - Claims that consulting caused equipment orders, revenue or cross-sell. Use only “associated cross-sell value” after validated internal data exists.
   - Competitor names or claims about competitor advertising; that evidence was unchecked.
   - Withheld referral-company identities, equipment-buyer identities, worker health/assessment data, unverified Meta activity, Clarity findings or gross-margin conclusions.

12. **The three mistakes most likely to slip through are:**

   1. A headline card labelled “Conversions” with a cost-per-conversion trend, interpreted as qualified leads and CPA.
   2. A “Physio efficiency improved” story based on conversions rising while clicks fell, ignoring the GA4 SR goal-mix change.
   3. A full-month trend chart that compares partial July, overlays Ads clicks with GA4 sessions, or treats Direct spikes as genuine growth.
