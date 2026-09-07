d budget interpretation rest on a representative baseline.",
   156	    evidence: [
   157	      { id: "6a.3", label: "trailing annual spend" },
   158	      { id: "6a.6", label: "last-30-day account activity" },
   159	    ],
   160	  },
   161	  B14: {
   162	    id: "B14",
   163	    priority: "High",
   164	    owner: "Marcus",
   165	    status: "Open",
   166	    question:
   167	      "Observed click-to-session gap: 385 ad clicks in 30 days annualise to about 1,155 over 90 days, versus 830 paid-search sessions in first-party analytics — sessions are roughly 28% below clicks. I need to assess whether this represents uncounted leads, attribution or session loss, or a tracking defect; it is not itself a proven result.",
   168	    blocks: "The click-to-session reconciliation, lead-capture completeness and any trustworthy interpretation of paid-search ratios.",
   169	    evidence: [
   170	      { id: "6g.8", label: "click-to-session comparison" },
   171	      { id: "6a.6", label: "last-30-day account activity" },
   172	    ],
   173	  },
   174	  B4: {
   175	    id: "B4",
   176	    priority: "High",
   177	    owner: "Marcus",
   178	    status: "Open",
   179	    question:
   180	      "Which proof assets are substantiated in writing: client names, logos, named enterprise references and outcomes? No unverifiable outcome claim ships.",

--- all B6/B12 mentions ---
src/app/ergoworks/plan/decisions/page.tsx:138:  B12: {
src/app/ergoworks/plan/decisions/page.tsx:139:    id: "B12",
src/app/ergoworks/plan/decisions/page.tsx:144:      "The account records 13 connected-call conversions, but the platform view shows no call that rang out. I need the unconnected-call count and the current phone-routing path from the client; this is the cheapest unknown with the highest option value before I interpret the call funnel.",
src/app/ergoworks/plan/decisions/page.tsx:145:    blocks: "The real call-funnel baseline, missed-call recovery and any trustworthy assessment of call-led demand.",
src/app/ergoworks/plan/decisions/page.tsx:192:  B6: {
src/app/ergoworks/plan/decisions/page.tsx:193:    id: "B6",
src/app/ergoworks/plan/decisions/page.tsx:435:    gateIds: ["A1", "A2", "A5", "B4", "B5", "B6", "B7"],
src/app/ergoworks/plan/decisions/page.tsx:443:    gateIds: ["B3", "B12", "B8", "B14", "C13", "C5", "C6b", "C7"],
src/app/ergoworks/plan/decisions/page.tsx:470:    links: ["B1", "B6", "B12", "C12"],
src/app/ergoworks/plan/measurement/page.tsx:32:    <><code>call_id</code>; attempt timestamp; connection status; connected duration; missed reason (ring-out, abandoned, out-of-hours or voicemail); answer timestamp; callback requested, completed and timestamp; callback SLA result; and CRM disposition.</>,
src/app/ergoworks/plan/measurement/page.tsx:33:    "I retain connected and unconnected attempts together so answer rate, missed-call recovery and callback performance can be reconciled with the connected-call conversion count.",
src/app/ergoworks/plan/measurement/page.tsx:61:    <>Import through the qualified-call path in Appendix C §7 and §12. The rule itself is the client’s to set and is still open at <a href="/ergoworks/plan/decisions#gate-B6">gate B6</a>.</>,
src/app/ergoworks/plan/measurement/page.tsx:65:    "I capture every attempted call, not only calls that connect: ring-out, abandoned, out-of-hours and voicemail, with timestamp, outcome, callback request, callback completion and callback SLA. These are diagnostic and recovery records, not primary conversions.",
src/app/ergoworks/plan/measurement/page.tsx:66:    <>Reconcile attempt count, answer rate and missed-call recovery against connected-call conversions and CRM disposition before any call signal is promoted at <a href="/ergoworks/plan/decisions#gate-B6">gate B6</a>.</>,
src/app/ergoworks/plan/measurement/page.tsx:359:            and precedence are part of the gate B6 definition. Import <code>qualified_call</code> as the
src/app/ergoworks/plan/measurement/page.tsx:361:            <a href="/ergoworks/plan/decisions#gate-B6"> gate B6</a>.
src/app/ergoworks/plan/measurement/page.tsx:364:            <strong>[Interpretation]</strong> I treat the connected-call conversion count as only one slice of the call funnel. I will capture every unconnected attempt — ring-out, abandoned, out-of-hours and voicemail — with its call id, timestamp, outcome, callback request, callback completion and callback SLA result. I will report answer rate and missed-call recovery, then reconcile those figures against connected-call conversions and CRM disposition. The current <EvidenceLink id="6a.7">13 recorded lead events attributed to calls</EvidenceLink> are a count of recorded call conversions, not a verified count of genuine phone enquiries: genuine demand may be higher (untracked attempts) or lower (sub-threshold or junk calls — both consulting call conversion actions currently count calls from one second, <EvidenceLink id="6a.14">evidence 6a.14</EvidenceLink>) until call thresholds and CRM dispositions exist. The phone-click and email-click actions already in the account are the existing attempt-signal baseline; the 17-lead denominator deliberately excludes them. I will keep these attempts diagnostic until the recovery and callback rule is approved at <a href="/ergoworks/plan/decisions#gate-B12">gate B12</a>.
src/app/ergoworks/plan/measurement/page.tsx:510:            <li><strong>[Interpretation]</strong> The CRM stores connected and unconnected call attempts, including ring-out, abandoned, out-of-hours and voicemail outcomes, answer status, callback recovery and callback SLA; reporting reconciles these with connected-call conversions and CRM disposition. Call-length thresholds are configured per conversion action, CRM disposition is captured on a defined share of recorded calls, and the <EvidenceLink id="6a.7">13 recorded lead events attributed to calls</EvidenceLink> are treated as a count of recorded call conversions, not verified genuine enquiries.</li>
src/app/ergoworks/plan/page.tsx:261:              Because <EvidenceLink id="6a.7">13 of the 17 recorded leads are calls</EvidenceLink> [Verified], call tracking is not optional: capture the call ID and connected duration, apply the hours-and-disposition rule once approved at <a href="/ergoworks/plan/decisions#gate-B6">gate B6</a>, deduplicate against a form from the same organisation, and import <code>qualified_call</code> as the only primary call signal once reliable.

exec
/bin/zsh -lc "printf '%s\\n' '--- stale/contradictory wording scan ---' && rg -n -i 'latest month|latest monthly|30 days to 25 July|this pass|independent adversarial|dead code|floor,? not a total|cannot show a call|only converting geo|Maximize Conversions|Gate 0|privacy boundary' src/app/ergoworks/plan src/app/ergoworks/campaign-plan/page.tsx || true && printf '%s\\n' '--- all evidence refs unique and definitions check ---' && python3 - <<'PY'
from pathlib import Path
import re
root=Path('src/app/ergoworks/plan')
files=list(root.rglob('*.tsx'))
refs=[]
defs=[]
for p in files:
 s=p.read_text()
 refs += [(str(p),m.group(1),s.count('\\n',0,m.start())+1) for m in re.finditer(r'(?:EvidenceLink id=|id:\\s*)[\"\\']([0-9]+[a-z]?\\.[0-9]+)[\"\\']',s)]
 if p.name=='page.tsx' and p.parent.name=='evidence':
  defs=[m.group(1) for m in re.finditer(r'id:\\s*[\"\\']([0-9]+[a-z]?\\.[0-9]+)[\"\\']',s)]
missing=[x for x in refs if x[1] not in defs]
print('defs',len(defs),'unique',len(set(defs)),'duplicates',[x for x in sorted(set(defs)) if defs.count(x)>1])
print('missing refs',missing)
PY
printf '%s\\n' '--- gate refs and defs check ---' && python3 - <<'PY'
from pathlib import Path
import re
root=Path('src/app/ergoworks/plan')
files=list(root.rglob('*.tsx'))
text='\\n'.join(p.read_text() for p in files)
dec=Path('src/app/ergoworks/plan/decisions/page.tsx').read_text()
defs=set(re.findall(r'"'^'"\\s{2}([A-C][0-9]+[a-z]?): \\{',dec,re.M))
refs=[]
for p in files:
 s=p.read_text()
 refs += [(str(p),m.group(1),s.count('\\n',0,m.start())+1) for m in re.finditer(r'#gate-([A-C][0-9]+[a-z]?)',s)]
print('gate defs',len(defs),sorted(defs))
print('missing refs',[x for x in refs if x[1] not in defs])
PY" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 152ms:
gate defs 34 ['A1', 'A2', 'A3', 'A4', 'A5', 'B1', 'B10', 'B11', 'B12', 'B13', 'B14', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'C1', 'C10', 'C11', 'C12', 'C13', 'C14', 'C2', 'C3', 'C4', 'C5', 'C6', 'C6b', 'C7', 'C8', 'C9']
missing refs []

exec
/bin/zsh -lc 'bun run build' in /Users/amirariff/projects/growthos/marcuscaporaso
 exited 1 in 44110ms:
▲ Next.js 16.2.4 (Turbopack)
- Experiments (use with caution):
  · serverActions

  Creating an optimized production build ...
Turbopack build encountered 2 warnings:
[next]/internal/font/google/barlow_f9bd96a2.module.css
Error while requesting resource
There was an issue establishing a connection while requesting https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap


[next]/internal/font/google/figtree_89cf2903.module.css
Error while requesting resource
There was an issue establishing a connection while requesting https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600&display=swap



> Build error occurred
Error: Turbopack build failed with 2 errors:
[next]/internal/font/google/barlow_f9bd96a2.module.css
next/font: error:
Failed to fetch `Barlow` from Google Fonts.


[next]/internal/font/google/figtree_89cf2903.module.css
next/font: error:
Failed to fetch `Figtree` from Google Fonts.


    at ignore-listed frames
error: script "build" exited with code 1

exec
/bin/zsh -lc "nl -ba src/app/ergoworks/plan/measurement/page.tsx | sed -n '458,490p'; git diff --unified=4 c12cc98a4f94bd281d2005c2e9d48fb5f9fb0554 -- src/app/ergoworks/plan/measurement/page.tsx | sed -n '115,190p'" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
   458	            <thead>
   459	              <tr><th scope="col">Control</th><th scope="col">Implementation rule</th></tr>
   460	            </thead>
   461	            <tbody>
   462	              {guardrailRows.map(([control, rule]) => (
   463	                <tr key={control}>
   464	                  <th scope="row" data-label="Control">{control}</th>
   465	                  <td data-label="Implementation rule">{rule}</td>
   466	                </tr>
   467	              ))}
   468	            </tbody>
   469	          </table>
   470	        </div>
   471	
   472	        <div className={styles.prose}>
   473	          <h3>Consent sequence</h3>
   474	          <p>
   475	            <strong>[Assumption — proposed posture, decided at gate C5]</strong> Australian law does not
   476	            currently require opt-in consent for ordinary analytics or ad-measurement storage, so a
   477	            default-denied posture is a deliberate conservative choice, not a mandate. Its cost is real:
   478	            every non-interacting visitor goes unobserved, which would widen the measured
   479	            <EvidenceLink id="6g.8"> click-to-session gap (evidence 6g.8)</EvidenceLink>. Whether Consent
   480	            Mode cookieless pings are permitted before consent is a decision to make explicitly, not to
   481	            inherit. The health-data and audience restrictions on this page are separate: those carry
   482	            Australian privacy obligations regardless of the analytics posture chosen.
   483	          </p>
   484	          <ul>
   485	            <li>The consent-management platform establishes the default consent state before measurement transmission.</li>
   486	            <li>Consent Mode uses default denied states for analytics storage, ad storage, ad-user-data and ad-personalisation until the required consent is recorded.</li>
   487	            <li>No analytics, advertising, server-side, audience or call-tracking transmission occurs before the required consent evidence is available.</li>
   488	            <li>Consent updates propagate to the web and server tagging layers; the server layer rejects advertising events without the required evidence.</li>
   489	            <li>Withdrawal stops future processing and triggers the approved deletion or suppression workflow.</li>
   490	          </ul>
 
           <h3>Reporting vocabulary</h3>
           <p>

exec
/bin/zsh -lc "nl -ba src/app/ergoworks/plan/measurement/page.tsx | sed -n '504,520p'; printf '\\n--- relevant evidence record ---\\n'; nl -ba src/app/ergoworks/plan/evidence/page.tsx | sed -n '330,365p'" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
   504	            platform allowlist; §11 attribution; §12 call tracking; and §13 KPI framework.
   505	          </p>
   506	          <h3>Acceptance conditions</h3>
   507	          <ul>
   508	            <li>The Consulting conversion goal <strong>must no longer include</strong> newsletter, raw soft actions, physiotherapy or other-business actions. This is an acceptance condition, not a completed step — the current mixed state is linked at <a href="/ergoworks/plan/evidence#evidence-6a.9">evidence 6a.9</a>.</li>
   509	            <li><strong>[Interpretation]</strong> The CRM stores <code>organisation_account_id</code>, click identifiers, call id, connected duration, CRM disposition, service stages, values and consent records.</li>
   510	            <li><strong>[Interpretation]</strong> The CRM stores connected and unconnected call attempts, including ring-out, abandoned, out-of-hours and voicemail outcomes, answer status, callback recovery and callback SLA; reporting reconciles these with connected-call conversions and CRM disposition. Call-length thresholds are configured per conversion action, CRM disposition is captured on a defined share of recorded calls, and the <EvidenceLink id="6a.7">13 recorded lead events attributed to calls</EvidenceLink> are treated as a count of recorded call conversions, not verified genuine enquiries.</li>
   511	            <li><strong>[Interpretation]</strong> <code>qualified_call</code> is the only primary call signal, with CRM disposition authoritative and form deduplication tested.</li>
   512	            <li><strong>[Interpretation]</strong> Conversion repair accounts for both directions of account-wide contamination: each campaign’s goal set is eligible to optimise towards the other’s conversions (<EvidenceLink id="6a.14">evidence 6a.14</EvidenceLink>). The separation decision remains at <a href="/ergoworks/plan/decisions#gate-C7">gate C7</a>. Both campaigns’ effective conversion goals are re-pulled and quoted after the repair.</li>
   513	            <li><strong>[Interpretation]</strong> Won consulting imports pass the Appendix C §7 offline loop; equipment revenue, worker health data and individual route-out events are rejected by the allowlist.</li>
   514	            <li><strong>[Interpretation]</strong> The internal account view uses manually validated <code>organisation_account_id</code>, is labelled associated cross-sell value, and is kept separate from platform ROAS.</li>
   515	            <li><strong>GATE</strong> Gross-margin-derived reporting remains disabled until <a href="/ergoworks/plan/decisions#gate-B11">gate B11</a> supplies a finance source or approved store cost data.</li>
   516	            <li><strong>GATE</strong> Australian privacy approval and tracking-stack confirmation are recorded before CRM audiences, cross-brand joins or offline imports begin. These are behavioural checks, not only approval records: in-browser verification that default consent states are set before any tag fires, the legacy UA-530267-5 tag absent from the rendered DOM, and the GA4 tag observed firing in the expected consent state.</li>
   517	          </ul>
   518	
   519	          <h3>Reporting vocabulary</h3>
   520	          <p>

--- relevant evidence record ---
   330	        id: "6d.1",
   331	        claim: "Tag manager",
   332	        value: "GTM-KXGD4GM is present in the live markup.",
   333	        source: "Live site markup",
   334	        date: "25 July 2026",
   335	        status: "Verified",
   336	        establishes: "A tag-manager container is part of the current site delivery path.",
   337	        doesNotEstablish: "It does not establish which tags fire in-browser or whether consent blocks them correctly.",
   338	      },
   339	      {
   340	        id: "6d.2",
   341	        claim: "Legacy analytics",
   342	        value: "UA-530267-5, a Universal Analytics tag, is still present in the initial HTML; whether it executes was not verified.",
   343	        source: "Live site markup",
   344	        date: "25 July 2026",
   345	        status: "Verified",
   346	        establishes: "Legacy analytics residue remains in the initial HTML and needs cleanup consideration.",
   347	        doesNotEstablish: "It does not establish that the tag sends live data or that current GA4 reporting is absent.",
   348	      },
   349	      {
   350	        id: "6d.3",
   351	        claim: "GA4 measurement ID in initial HTML",
   352	        value: "No GA4 measurement ID was found in the initial HTML; GA4 may be injected through the tag manager.",
   353	        source: "Live site markup",
   354	        date: "25 July 2026",
   355	        status: "Interpretation",
   356	        establishes: "The initial HTML alone is insufficient to verify the full analytics implementation.",
   357	        doesNotEstablish: "It does not establish that GA4 is absent.",
   358	      },
   359	      {
   360	        id: "6d.4",
   361	        claim: "Meta pixel in initial HTML",
   362	        value: "No Meta pixel was found in the initial HTML; the tag manager could inject one.",
   363	        source: "Live site markup",
   364	        date: "25 July 2026",
   365	        status: "Interpretation",

exec
/bin/zsh -lc "nl -ba src/app/ergoworks/plan/decisions/page.tsx | sed -n '340,425p'; rg -n 'C7|C13' docs/ergoworks-consulting/revised-plan-v2/research/review-pass-2026-07-28.md src/app/ergoworks/plan -g '*.tsx'" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
   340	  },
   341	  C6: {
   342	    id: "C6",
   343	    priority: "Medium",
   344	    owner: "Client (via Greg)",
   345	    status: "Open",
   346	    question:
   347	      "What is the office-moves scope: the ergonomics workstream for workplace relocation, with what blueprint, liability, pricing and partner model? No generic-relocation acquisition spend should proceed until this is validated.",
   348	    blocks: "Whether office-moves enters any plan or acquisition message.",
   349	  },
   350	  C7: {
   351	    id: "C7",
   352	    priority: "Medium",
   353	    owner: "Client (via Greg)",
   354	    status: "Open",
   355	    question:
   356	      "What level of separation is approved between Consulting and Physiotherapy in the existing advertising and measurement accounts? The current account mixes the two, so isolation is an intended state rather than the present state.",
   357	    blocks: "Conversion cleanup, audience creation, reporting and safe separation.",
   358	    evidence: [
   359	      { id: "6a.9", label: "conversion-action state" },
   360	      { id: "6a.12", label: "mixed-account evidence" },
   361	    ],
   362	  },
   363	  C11: {
   364	    id: "C11",
   365	    priority: "Medium",
   366	    owner: "Client (via Greg)",
   367	    status: "Open",
   368	    question:
   369	      "Who approves the six messaging pillars? They are proposed copy, not approved copy, and four describe services that must first pass the A1 readiness matrix.",
   370	    blocks: "Messaging publication after delivery readiness is proven.",
   371	  },
   372	  C12: {
   373	    id: "C12",
   374	    priority: "Critical",
   375	    owner: "Client (via Greg)",
   376	    status: "Open",
   377	    question:
   378	      "Standing one-line approval ask: may I pause the broad “+manual +handling +certificate” keyword and narrow the campaign-scoped goal set to the approved consulting lead actions? It has spent A$846.56 across 125 clicks for 2 reported conversions in 30 days — 18% of campaign spend, about A$28/day or roughly A$197/week. Every week it stays open carries that observed spend rate. Both changes are reversible and separate from the broader budget-approval decision.",
   379	    blocks: "The ongoing observed spend on one quarantine candidate and any further bidding towards an unapproved goal set.",
   380	    evidence: [
   381	      { id: "6a.10", label: "broad certificate-intent line" },
   382	      { id: "6a.2", label: "campaign settings" },
   383	      { id: "6a.6", label: "last-30-day account activity" },
   384	    ],
   385	  },
   386	  C13: {
   387	    id: "C13",
   388	    priority: "Critical",
   389	    owner: "Client (via Greg)",
   390	    status: "Open",
   391	    question:
   392	      "The contamination is eligible in both directions: all 16 conversion actions are primary at account level and both campaigns run Maximise Conversions, so the enabled physiotherapy campaign is eligible to optimise towards consulting conversions, not only the reverse. What separation and campaign-scoped goal set does the client approve before either campaign continues to optimise across the other campaign's conversions?",
   393	    blocks: "Safe conversion-goal cleanup, campaign separation and any performance reading from this account.",
   394	    evidence: [
   395	      { id: "6a.9", label: "conversion-action state" },
   396	      { id: "6a.12", label: "mixed-account evidence" },
   397	      { id: "6a.14", label: "goal configuration" },
   398	    ],
   399	  },
   400	  C14: {
   401	    id: "C14",
   402	    priority: "High",
   403	    owner: "Client (via Greg)",
   404	    status: "Open",
   405	    question:
   406	      "What maximum absolute amount is the client willing to lose in a controlled test before it stops or revises the test? A maximum test-loss cap is a separate decision from a target cost per lead, and percentage envelope splits are not a substitute. Neither a test-loss cap nor a target cost per lead currently exists.",
   407	    blocks: "The test authorisation, stop or rollback rule and any spend pacing.",
   408	    evidence: [{ id: "6a.3", label: "trailing annual spend" }],
   409	  },
   410	};
   411	
   412	const bundles: readonly Bundle[] = [
   413	  {
   414	    number: "01",
   415	    title: "Is this worth funding?",
   416	    question: "Can the economics and account evidence justify investment and the proposed allocation?",
   417	    owners: ["Marcus", "Client (via Greg)"],
   418	    unlocks: "A defensible budget envelope, an investment go/no-go and the cross-population thesis.",
   419	    gateIds: ["B1", "B2", "B11", "B13", "C3", "C9", "C14"],
   420	  },
   421	  {
   422	    number: "02",
   423	    title: "What exactly launches?",
   424	    question: "What offer, service boundaries, geography and message can be approved for launch?",
   425	    owners: ["Client (via Greg)", "Oz and Ruth — senior ergonomics leads"],
docs/ergoworks-consulting/revised-plan-v2/research/review-pass-2026-07-28.md:47:14. **decisions C13 / :390** — same soften: "can also bid towards" → "is eligible to optimise towards".
src/app/ergoworks/plan/decisions/page.tsx:350:  C7: {
src/app/ergoworks/plan/decisions/page.tsx:351:    id: "C7",
src/app/ergoworks/plan/decisions/page.tsx:386:  C13: {
src/app/ergoworks/plan/decisions/page.tsx:387:    id: "C13",
src/app/ergoworks/plan/decisions/page.tsx:443:    gateIds: ["B3", "B12", "B8", "B14", "C13", "C5", "C6b", "C7"],
src/app/ergoworks/plan/decisions/page.tsx:466:    links: ["B3", "C5", "C13"],
src/app/ergoworks/plan/measurement/page.tsx:367:            <strong>[Verified]</strong> <EvidenceLink id="6a.9">All 16 enabled conversion actions remain primary account-wide</EvidenceLink>, and the account includes <EvidenceLink id="6a.12">an enabled physiotherapy campaign</EvidenceLink>. <strong>[Verified]</strong> Both campaigns run Maximise Conversions and neither excludes the other’s actions from its goal set (<EvidenceLink id="6a.14">evidence 6a.14</EvidenceLink>). <strong>[Interpretation]</strong> I therefore treat contamination as eligible in both directions: the consulting campaign can chase the account’s cheap non-lead actions on its own site, and each campaign is eligible to optimise towards the other’s conversions. No cross-campaign conversions were observed in the latest window, but the goal configuration permits them. I will not treat conversion repair as complete until the separation boundary is approved at <a href="/ergoworks/plan/decisions#gate-C7">gate C7</a>.
src/app/ergoworks/plan/measurement/page.tsx:512:            <li><strong>[Interpretation]</strong> Conversion repair accounts for both directions of account-wide contamination: each campaign’s goal set is eligible to optimise towards the other’s conversions (<EvidenceLink id="6a.14">evidence 6a.14</EvidenceLink>). The separation decision remains at <a href="/ergoworks/plan/decisions#gate-C7">gate C7</a>. Both campaigns’ effective conversion goals are re-pulled and quoted after the repair.</li>

exec
/bin/zsh -lc 'bunx tsc --noEmit' in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 1485ms:
exec
/bin/zsh -lc 'git diff --check c12cc98a4f94bd281d2005c2e9d48fb5f9fb0554 && git diff --numstat c12cc98a4f94bd281d2005c2e9d48fb5f9fb0554' in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
2	1	src/app/ergoworks/campaign-plan/page.tsx
10	7	src/app/ergoworks/plan/decisions/page.tsx
33	20	src/app/ergoworks/plan/evidence/page.tsx
25	12	src/app/ergoworks/plan/measurement/page.tsx
11	11	src/app/ergoworks/plan/page.tsx

Cross-page anchor checks and TypeScript validation passed. The production build reached Next.js compilation but was blocked by sandboxed network access to Google Fonts; review findings are based on deterministic content/spec inconsistencies in the changed lines.
  ✓ Inspect the full diff and relevant repository guidance
  ✓ Trace changed behavior against related components and route expectations
  ✓ Run targeted validation and produce prioritized findings
codex
The patch contains contradictory consent instructions, an acceptance check that cannot prove legacy analytics stopped executing, and inconsistent gate routing for missed-call recovery. These issues could cause the measurement plan to be implemented or approved incorrectly.

Full review comments:

- [P2] Make pre-consent transmission conditional — /Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/plan/measurement/page.tsx:479-481
  If gate C5 permits Consent Mode cookieless pings before consent, the following bullet still unconditionally forbids all analytics and advertising transmission until consent exists. This leaves the supposedly open decision impossible to implement and still forces the measurement loss described here; make the transmission rule conditional on the C5 decision.

- [P2] Verify legacy UA removal through network activity — /Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/plan/measurement/page.tsx:516-516
  When the UA tag is injected through GTM or executes without retaining its ID in the DOM, this check can pass while legacy analytics still transmits data. Evidence 6d.2 already acknowledges that markup cannot establish execution, so the acceptance condition should verify Tag Assistant or network requests for `UA-530267-5`, rather than DOM absence.

- [P2] Route missed-call recovery consistently to B12 — /Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/plan/measurement/page.tsx:364-364
  This new B12 routing conflicts with the same page's platform table, which still sends attempt reconciliation and missed-call recovery to B6. The decision register defines B12 as blocking the call-funnel baseline and missed-call recovery, while B6 owns lead qualification, so update the remaining B6 reference to avoid two approval routes for the same prerequisite.
The patch contains contradictory consent instructions, an acceptance check that cannot prove legacy analytics stopped executing, and inconsistent gate routing for missed-call recovery. These issues could cause the measurement plan to be implemented or approved incorrectly.

Full review comments:

- [P2] Make pre-consent transmission conditional — /Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/plan/measurement/page.tsx:479-481
  If gate C5 permits Consent Mode cookieless pings before consent, the following bullet still unconditionally forbids all analytics and advertising transmission until consent exists. This leaves the supposedly open decision impossible to implement and still forces the measurement loss described here; make the transmission rule conditional on the C5 decision.

- [P2] Verify legacy UA removal through network activity — /Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/plan/measurement/page.tsx:516-516
  When the UA tag is injected through GTM or executes without retaining its ID in the DOM, this check can pass while legacy analytics still transmits data. Evidence 6d.2 already acknowledges that markup cannot establish execution, so the acceptance condition should verify Tag Assistant or network requests for `UA-530267-5`, rather than DOM absence.

- [P2] Route missed-call recovery consistently to B12 — /Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/plan/measurement/page.tsx:364-364
  This new B12 routing conflicts with the same page's platform table, which still sends attempt reconciliation and missed-call recovery to B6. The decision register defines B12 as blocking the call-funnel baseline and missed-call recovery, while B6 owns lead qualification, so update the remaining B6 reference to avoid two approval routes for the same prerequisite.
