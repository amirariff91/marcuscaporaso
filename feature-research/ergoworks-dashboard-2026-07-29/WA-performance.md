a,x)=>a+x.cost,0)/full.length; const prev=d.consulting_monthly.find(x=>x.m==="2026-05"); const jun=d.consulting_monthly.find(x=>x.m==="2026-06"); const jul=d.consulting_monthly.find(x=>x.m==="2026-07p"); const july30=jul.cost/28*30, july31=jul.cost/28*31; const julyConv30=jul.conv/28*30,julyConv31=jul.conv/28*31; const julyStrict= (mixBy["2026-07p"]||[]).filter(y=>strictNames.has(y.action)).reduce((a,y)=>a+y.conv,0); const julyStrict30=julyStrict/28*30,julyStrict31=julyStrict/28*31; const juneStrict=(mixBy["2026-06"]||[]).filter(y=>strictNames.has(y.action)).reduce((a,y)=>a+y.conv,0); const mayStrict=(mixBy["2026-05"]||[]).filter(y=>strictNames.has(y.action)).reduce((a,y)=>a+y.conv,0); console.log({avgFullMonth:r2(avg),juneVsMaySpend:pct(jun.cost/prev.cost-1),juneVsMayConv:pct(jun.conv/prev.conv-1),julyRawVsMaySpend:pct(jul.cost/prev.cost-1),july30VsMaySpend:pct(july30/prev.cost-1),july31VsMaySpend:pct(july31/prev.cost-1),july30SpendVsJune:pct(july30/jun.cost-1),july31SpendVsJune:pct(july31/jun.cost-1),july30ConvVsJune:pct(julyConv30/jun.conv-1),july31ConvVsJune:pct(julyConv31/jun.conv-1),july30StrictVsJune:pct(julyStrict30/juneStrict-1),july31StrictVsJune:pct(julyStrict31/juneStrict-1),july30CPSL:money(july30/julyStrict30),juneCPSL:money(jun.cost/juneStrict),mayCPSL:money(prev.cost/mayStrict),annualizedJuly31:money(july31*12),annualBudget365:money(budget*365),strictPeriod:r2(full.map(x=>(mixBy[x.m]||[]).filter(y=>strictNames.has(y.action)).reduce((a,y)=>a+y.conv,0)).reduce((a,b)=>a+b,0)+julyStrict});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
Expected ',', got '}'

SyntaxError: missing ) after argument list
    at makeContextifyScript (node:internal/vm:194:14)
    at compileScript (node:internal/process/execution:388:10)
    at evalTypeScript (node:internal/process/execution:260:22)
    at node:internal/main/eval_string:71:3

Node.js v24.13.1

exec
/bin/zsh -lc "node -e '
const fs=require(\"fs\");
const d=JSON.parse(fs.readFileSync(\"feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json\",\"utf8\"));
const money=x=>"'`A$${x.toFixed(2)}`;
const pct=x=>`${(x*100).toFixed(1)}%`;
const r2=x=>Number(x.toFixed(2));
const days=m=>m==="2026-07p"?28:new Date(Number(m.slice(0,4)),Number(m.slice(5,7)),0).getDate();
const mixBy={};
for(const x of d.consulting_conversion_mix_monthly){(mixBy[x.m]??=[]).push(x)}
const strictNames=new Set(["Call Forwarding SR - Ergoworks Consulting","Calls from ads","Make an Enquiry SR"]);
console.log("TREND");
for(const x of d.consulting_monthly){const rows=mixBy[x.m]||[]; const strict=rows.filter(y=>strictNames.has(y.action)).reduce((a,y)=>a+y.conv,0); const allStrict=rows.filter(y=>y.action.includes("Call Forwarding SR")||y.action==="Calls from ads"||y.action==="Make an Enquiry SR").reduce((a,y)=>a+y.conv,0); const top=rows.slice().sort((a,b)=>b.conv-a.conv)[0]; console.log([x.m,money(x.cost),x.conv,x.allConv,r2(strict),r2(allStrict),money(x.cost/strict),pct(strict/x.conv),top.action,r2(top.conv),pct(top.conv/x.conv)].join(" | "))}
console.log("PACING");
const budget=154.81;
for(const x of d.consulting_monthly){const dd=days(x.m);const expected=budget*dd;console.log([x.m,dd,money(x.cost),money(expected),pct(x.cost/expected),money(x.cost/dd),x.m==="2026-07p"?money(x.cost/dd*31):"-",x.m==="2026-07p"?money(x.cost/dd*31*12):"-"].join(" | "))}
console.log("AGG");
const full=d.consulting_monthly.slice(0,-1); const avg=full.reduce((a,x)=>a+x.cost,0)/full.length; const prev=d.consulting_monthly.find(x=>x.m==="2026-05"); const jun=d.consulting_monthly.find(x=>x.m==="2026-06"); const jul=d.consulting_monthly.find(x=>x.m==="2026-07p"); const july30=jul.cost/28*30, july31=jul.cost/28*31; const julyConv30=jul.conv/28*30,julyConv31=jul.conv/28*31; const julyStrict= (mixBy["2026-07p"]||[]).filter(y=>strictNames.has(y.action)).reduce((a,y)=>a+y.conv,0); const julyStrict30=julyStrict/28*30,julyStrict31=julyStrict/28*31; const juneStrict=(mixBy["2026-06"]||[]).filter(y=>strictNames.has(y.action)).reduce((a,y)=>a+y.conv,0); const mayStrict=(mixBy["2026-05"]||[]).filter(y=>strictNames.has(y.action)).reduce((a,y)=>a+y.conv,0); const strictPeriod=full.map(x=>(mixBy[x.m]||[]).filter(y=>strictNames.has(y.action)).reduce((a,y)=>a+y.conv,0)).reduce((a,b)=>a+b,0)+julyStrict; console.log({avgFullMonth:r2(avg),juneVsMaySpend:pct(jun.cost/prev.cost-1),juneVsMayConv:pct(jun.conv/prev.conv-1),julyRawVsMaySpend:pct(jul.cost/prev.cost-1),july30VsMaySpend:pct(july30/prev.cost-1),july31VsMaySpend:pct(july31/prev.cost-1),july30SpendVsJune:pct(july30/jun.cost-1),july31SpendVsJune:pct(july31/jun.cost-1),july30ConvVsJune:pct(julyConv30/jun.conv-1),july31ConvVsJune:pct(julyConv31/jun.conv-1),july30StrictVsJune:pct(julyStrict30/juneStrict-1),july31StrictVsJune:pct(julyStrict31/juneStrict-1),july30CPSL:money(july30/julyStrict30),juneCPSL:money(jun.cost/juneStrict),mayCPSL:money(prev.cost/mayStrict),annualizedJuly31:money(july31*12),annualBudget365:money(budget*365),strictPeriod:r2(strictPeriod)});
console.log("KEYWORDS_SORTED");
const kws=d.keywords_top30_12mo.map(x=>({...x,cpa:x.cost/x.conv})).sort((a,b)=>a.cpa-b.cpa);
for(const x of kws) console.log([x.kw,x.match,money(x.cost),x.conv.toFixed(1),money(x.cpa)].join(" | "));
const top30cost=d.keywords_top30_12mo.reduce((a,x)=>a+x.cost,0); const cc=d.keywords_top30_12mo.filter(x=>/certificate|course/i.test(x.kw)); const cccost=cc.reduce((a,x)=>a+x.cost,0); console.log("KEYWORD_AGG",{top30cost:r2(top30cost),certCourseCost:r2(cccost),shareTop30:pct(cccost/top30cost),shareCampaign:pct(cccost/42285.61),certCourseLines:cc.map(x=>({kw:x.kw,cost:x.cost,conv:x.conv,cpa:r2(x.cost/x.conv)})),top30ReportedConv:r2(d.keywords_top30_12mo.reduce((a,x)=>a+x.conv,0))});
console.log("PHYSIO");
const before=d.physio_monthly.filter(x=>x.m>="2025-07"&&x.m<="2026-02"); const postFull=d.physio_monthly.filter(x=>x.m>="2026-03"&&x.m<="2026-06"); const avgf=(arr,k)=>arr.reduce((a,x)=>a+x[k],0)/arr.length; const mar=d.physio_monthly.find(x=>x.m==="2026-03"); const feb=d.physio_monthly.find(x=>x.m==="2026-02"); console.log({beforeAvgClicks:r2(avgf(before,"clicks")),postMarJunAvgClicks:r2(avgf(postFull,"clicks")),clickChange:pct(avgf(postFull,"clicks")/avgf(before,"clicks")-1),beforeAvgConv:r2(avgf(before,"conv")),postMarJunAvgConv:r2(avgf(postFull,"conv")),convChange:pct(avgf(postFull,"conv")/avgf(before,"conv")-1),febToMarClicks:pct(mar.clicks/feb.clicks-1),febToMarConv:pct(mar.conv/feb.conv-1),marCPA:money(mar.cost/mar.conv),febCPA:money(feb.cost/feb.conv)});
console.log("GA4");
const pmap=Object.fromEntries(d.ga4_channel_monthly.map(x=>[x.m,x["Paid Search"]]));
for(const x of d.consulting_monthly){const phy=d.physio_monthly.find(y=>y.m===x.m); const totalClicks=x.clicks+phy.clicks; console.log([x.m,pmap[x.m],x.clicks,pct(pmap[x.m]/x.clicks),totalClicks,pct(pmap[x.m]/totalClicks)].join(" | "))}
const directSep=d.ga4_channel_monthly.find(x=>x.m==="2025-09").Direct, directAug=d.ga4_channel_monthly.find(x=>x.m==="2025-08").Direct, directNov=d.ga4_channel_monthly.find(x=>x.m==="2025-11").Direct,directOct=d.ga4_channel_monthly.find(x=>x.m==="2025-10").Direct; console.log("DIRECT",{sepVsAugAbs:directSep-directAug,sepVsAugPct:pct(directSep/directAug-1),novVsOctAbs:directNov-directOct,novVsOctPct:pct(directNov/directOct-1)});
const g=d.gsc_queries_90d_top; const brand=/ergoworks|ergoassess|ergo works/i; const bc=g.filter(x=>brand.test(x.q)); const nc=g.filter(x=>!brand.test(x.q)); const sum=(a,k)=>a.reduce((s,x)=>s+x[k],0); console.log("GSC",{brandClicks:sum(bc,"clicks"),nonbrandClicks:sum(nc,"clicks"),listedClicks:sum(g,"clicks"),brandShare:pct(sum(bc,"clicks")/sum(g,"clicks")),brandImpr:sum(bc,"impr"),nonbrandImpr:sum(nc,"impr"),brandCTR:pct(sum(bc,"clicks")/sum(bc,"impr")),nonbrandCTR:pct(sum(nc,"clicks")/sum(nc,"impr")),brand:bc,nonbrand:nc});
'"'" in /Users/amirariff/projects/growthos/marcuscaporaso
 succeeded in 0ms:
TREND
2025-07 | A$3364.50 | 37 | 37 | 31 | 31 | A$108.53 | 83.8% | Call Forwarding SR - Ergoworks Consulting | 16 | 43.2%
2025-08 | A$3055.48 | 33 | 33 | 27 | 28 | A$113.17 | 81.8% | Make an Enquiry SR | 13 | 39.4%
2025-09 | A$3405.78 | 32 | 32 | 27 | 27 | A$126.14 | 84.4% | Calls from ads | 13 | 40.6%
2025-10 | A$3529.50 | 42 | 42 | 38 | 38 | A$92.88 | 90.5% | Make an Enquiry SR | 15 | 35.7%
2025-11 | A$3062.02 | 30.9 | 30.9 | 25.9 | 25.9 | A$118.22 | 83.8% | Call Forwarding SR - Ergoworks Consulting | 11 | 35.6%
2025-12 | A$3559.69 | 24 | 24 | 19 | 19 | A$187.35 | 79.2% | Call Forwarding SR - Ergoworks Consulting | 8 | 33.3%
2026-01 | A$3405.83 | 23 | 23 | 23 | 23 | A$148.08 | 100.0% | Make an Enquiry SR | 11 | 47.8%
2026-02 | A$3144.71 | 33 | 33 | 30 | 30 | A$104.82 | 90.9% | Make an Enquiry SR | 18 | 54.5%
2026-03 | A$3330.27 | 20 | 20 | 16 | 16 | A$208.14 | 80.0% | Calls from ads | 6 | 30.0%
2026-04 | A$3407.35 | 26 | 28 | 21 | 21 | A$162.25 | 80.8% | Call Forwarding SR - Ergoworks Consulting | 8 | 30.8%
2026-05 | A$3154.72 | 18 | 22 | 17 | 17 | A$185.57 | 94.4% | Make an Enquiry SR | 9 | 50.0%
2026-06 | A$4715.65 | 30 | 33 | 27 | 27 | A$174.65 | 90.0% | Calls from ads | 13 | 43.3%
2026-07p | A$4147.46 | 15.9 | 17.9 | 10.9 | 10.9 | A$380.50 | 68.6% | Calls from ads | 6 | 37.7%
PACING
2025-07 | 31 | A$3364.50 | A$4799.11 | 70.1% | A$108.53 | - | -
2025-08 | 31 | A$3055.48 | A$4799.11 | 63.7% | A$98.56 | - | -
2025-09 | 30 | A$3405.78 | A$4644.30 | 73.3% | A$113.53 | - | -
2025-10 | 31 | A$3529.50 | A$4799.11 | 73.5% | A$113.85 | - | -
2025-11 | 30 | A$3062.02 | A$4644.30 | 65.9% | A$102.07 | - | -
2025-12 | 31 | A$3559.69 | A$4799.11 | 74.2% | A$114.83 | - | -
2026-01 | 31 | A$3405.83 | A$4799.11 | 71.0% | A$109.87 | - | -
2026-02 | 28 | A$3144.71 | A$4334.68 | 72.5% | A$112.31 | - | -
2026-03 | 31 | A$3330.27 | A$4799.11 | 69.4% | A$107.43 | - | -
2026-04 | 30 | A$3407.35 | A$4644.30 | 73.4% | A$113.58 | - | -
2026-05 | 31 | A$3154.72 | A$4799.11 | 65.7% | A$101.77 | - | -
2026-06 | 30 | A$4715.65 | A$4644.30 | 101.5% | A$157.19 | - | -
2026-07p | 28 | A$4147.46 | A$4334.68 | 95.7% | A$148.12 | A$4591.83 | A$55101.97
AGG
{
  avgFullMonth: 3427.96,
  juneVsMaySpend: '49.5%',
  juneVsMayConv: '66.7%',
  julyRawVsMaySpend: '31.5%',
  july30VsMaySpend: '40.9%',
  july31VsMaySpend: '45.6%',
  july30SpendVsJune: '-5.8%',
  july31SpendVsJune: '-2.6%',
  july30ConvVsJune: '-43.2%',
  july31ConvVsJune: '-41.3%',
  july30StrictVsJune: '-56.7%',
  july31StrictVsJune: '-55.3%',
  july30CPSL: 'A$380.50',
  juneCPSL: 'A$174.65',
  mayCPSL: 'A$185.57',
  annualizedJuly31: 'A$55101.97',
  annualBudget365: 'A$56505.65',
  strictPeriod: 312.8
}
KEYWORDS_SORTED
manual handling training sydney | EXACT | A$370.98 | 11.5 | A$32.26
ergonomic assessment | EXACT | A$477.65 | 8.5 | A$56.19
+Ergonomics +Training | BROAD | A$622.47 | 9.3 | A$66.93
office ergonomic assessment | PHRASE | A$548.64 | 7.0 | A$78.38
+manual +handling +training +canberra | BROAD | A$571.10 | 7.0 | A$81.59
+workplace +ergonomic +assessment | BROAD | A$494.01 | 6.0 | A$82.33
ergonomic workstation products | PHRASE | A$820.54 | 9.5 | A$86.37
ergonomic office fyshwick | PHRASE | A$952.54 | 11.0 | A$86.59
+Ergonomic +Consultant | BROAD | A$805.96 | 8.8 | A$91.59
Ergonomic Office | EXACT | A$749.80 | 8.0 | A$93.72
+ergonomic +assessments | BROAD | A$960.92 | 9.0 | A$106.77
+manual +handling +training +melbourne | BROAD | A$542.83 | 5.0 | A$108.57
manual handling training | EXACT | A$1709.11 | 13.5 | A$126.60
+manual +handling +training +near +me | BROAD | A$1281.74 | 9.9 | A$129.47
+manual +handling +training +brisbane | BROAD | A$786.20 | 6.0 | A$131.03
+ergo +assessment | BROAD | A$527.41 | 4.0 | A$131.85
ergonomics assessment (phrase dup) | PHRASE | A$553.46 | 4.0 | A$138.37
manual handling | PHRASE | A$4271.79 | 30.4 | A$140.52
ergonomic workplace assessments | PHRASE | A$671.09 | 4.0 | A$167.77
+ergonomic +specialist | BROAD | A$700.79 | 3.5 | A$200.23
ergonomics assessment | PHRASE | A$689.94 | 3.3 | A$209.07
+manual +handling +certificate | BROAD | A$4621.19 | 21.6 | A$213.94
+Ergonomics +Consulting | BROAD | A$438.45 | 2.0 | A$219.22
+manual +handling +course | BROAD | A$484.75 | 2.2 | A$220.34
manual handling at work | PHRASE | A$524.15 | 2.0 | A$262.07
manual handling training for carers | PHRASE | A$544.45 | 2.0 | A$272.23
+Occupational +Health +And +Ergonomics | BROAD | A$563.09 | 1.5 | A$375.39
+ergonomic +services | BROAD | A$522.37 | 1.0 | A$522.37
manual handling course | EXACT | A$555.86 | 1.0 | A$555.86
+Ergonomics +Company | BROAD | A$568.61 | 1.0 | A$568.61
KEYWORD_AGG {
  top30cost: 27931.89,
  certCourseCost: 5661.8,
  shareTop30: '20.3%',
  shareCampaign: '13.4%',
  certCourseLines: [
    {
      kw: '+manual +handling +certificate',
      cost: 4621.19,
      conv: 21.6,
      cpa: 213.94
    },
    {
      kw: 'manual handling course',
      cost: 555.86,
      conv: 1,
      cpa: 555.86
    },
    {
      kw: '+manual +handling +course',
      cost: 484.75,
      conv: 2.2,
      cpa: 220.34
    }
  ],
  top30ReportedConv: 213.5
}
PHYSIO
{
  beforeAvgClicks: 381.5,
  postMarJunAvgClicks: 183.25,
  clickChange: '-52.0%',
  beforeAvgConv: 19.98,
  postMarJunAvgConv: 43.95,
  convChange: '120.0%',
  febToMarClicks: '-49.6%',
  febToMarConv: '60.7%',
  marCPA: 'A$20.19',
  febCPA: 'A$32.67'
}
GA4
2025-07 | 389 | 404 | 96.3% | 761 | 51.1%
2025-08 | 361 | 374 | 96.5% | 744 | 48.5%
2025-09 | 333 | 351 | 94.9% | 704 | 47.3%
2025-10 | 394 | 415 | 94.9% | 789 | 49.9%
2025-11 | 329 | 382 | 86.1% | 778 | 42.3%
2025-12 | 335 | 385 | 87.0% | 775 | 43.2%
2026-01 | 357 | 404 | 88.4% | 819 | 43.6%
2026-02 | 367 | 390 | 94.1% | 787 | 46.6%
2026-03 | 360 | 418 | 86.1% | 618 | 58.3%
2026-04 | 275 | 380 | 72.4% | 542 | 50.7%
2026-05 | 232 | 326 | 71.2% | 522 | 44.4%
2026-06 | 303 | 442 | 68.6% | 617 | 49.1%
2026-07p | 266 | 357 | 74.5% | 509 | 52.3%
DIRECT {
  sepVsAugAbs: 254,
  sepVsAugPct: '246.6%',
  novVsOctAbs: 378,
  novVsOctPct: '434.5%'
}
GSC {
  brandClicks: 57,
  nonbrandClicks: 20,
  listedClicks: 77,
  brandShare: '74.0%',
  brandImpr: 565,
  nonbrandImpr: 4615,
  brandCTR: '10.1%',
  nonbrandCTR: '0.4%',
  brand: [
    { q: 'ergoworks', clicks: 39, impr: 462, pos: 7.7 },
    { q: 'ergoassess', clicks: 10, impr: 31, pos: 2.5 },
    { q: 'ergo works', clicks: 8, impr: 72, pos: 3.6 }
  ],
  nonbrand: [
    { q: 'laptop ergonomics', clicks: 5, impr: 550, pos: 5.9 },
    {
      q: 'office chair for pregnant women',
      clicks: 5,
      impr: 38,
      pos: 11.3
    },
    { q: 'ergonomic consultant', clicks: 3, impr: 275, pos: 19.1 },
    { q: 'best ergonomic laptop', clicks: 2, impr: 665, pos: 6 },
    { q: 'ergonomic equipment', clicks: 1, impr: 2261, pos: 7.5 },
    {
      q: 'ergonomic assessment sydney',
      clicks: 1,
      impr: 186,
      pos: 27.5
    },
    {
      q: 'ergonomic assessment melbourne',
      clicks: 1,
      impr: 176,
      pos: 25
    },
    { q: 'manual handling', clicks: 1, impr: 233, pos: 64.7 },
    { q: 'ergonomic laptop setup', clicks: 1, impr: 231, pos: 4.6 }
  ]
}

codex
The recomputation is complete. The main result is a measurement inflection, not a clean demand story: July’s 28-day pace is near the budget ceiling, but normalized conversion output and the clean strict-action proxy are materially below June. I’m now packaging the result so every dashboard label separates reported conversion units from actual leads and qualified pipeline.
Source and definition checks are complete; all requested metrics were recomputed from the supplied snapshot, with July normalization and contamination/scope checks applied.
  ✓ Read the analytics guidance, evidence register, and snapshot fully
  ✓ Recompute trend, pacing, mix, waste, contamination, and cross-source metrics
  → Draft numbered findings, computed tables, and dashboard implications with honest labels
codex
Basis: [snapshot.json](/Users/amirariff/projects/growthos/marcuscaporaso/feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json) and the [evidence register](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/plan/evidence/page.tsx). Currency is AUD. July 2026 is partial through 28 July. I interpret the current budget as A$154.81/day.

## 1. Trend: spend is near capacity while strict-action efficiency deteriorates

Strict proxy = `Call Forwarding SR - Ergoworks Consulting` + `Calls from ads` + `Make an Enquiry SR`. The known physiotherapy call-forwarding accrual in August is excluded from the clean consulting proxy.

| Month | Spend | Reported conv. | All conv. | Strict derivation | Strict proxy | Cost / strict proxy | Strict share of conv. | Highest action |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| 2025-07 | A$3,364.50 | 37.0 | 37.0 | 16+7+8 | 31.0 | A$108.53 | 83.8% | Call forwarding: 16, 43.2% |
| 2025-08 | A$3,055.48 | 33.0 | 33.0 | 10+4+13 | 27.0 | A$113.17 | 81.8% | Enquiry: 13, 39.4% |
| 2025-09 | A$3,405.78 | 32.0 | 32.0 | 5+13+9 | 27.0 | A$126.14 | 84.4% | Calls: 13, 40.6% |
| 2025-10 | A$3,529.50 | 42.0 | 42.0 | 14+9+15 | 38.0 | A$92.88 | 90.5% | Enquiry: 15, 35.7% |
| 2025-11 | A$3,062.02 | 30.9 | 30.9 | 11+6+8.9 | 25.9 | A$118.22 | 83.8% | Call forwarding: 11, 35.6% |
| 2025-12 | A$3,559.69 | 24.0 | 24.0 | 8+6+5 | 19.0 | A$187.35 | 79.2% | Call forwarding: 8, 33.3% |
| 2026-01 | A$3,405.83 | 23.0 | 23.0 | 9+3+11 | 23.0 | A$148.08 | 100.0% | Enquiry: 11, 47.8% |
| 2026-02 | A$3,144.71 | 33.0 | 33.0 | 5+7+18 | 30.0 | A$104.82 | 90.9% | Enquiry: 18, 54.5% |
| 2026-03 | A$3,330.27 | 20.0 | 20.0 | 5+6+5 | 16.0 | A$208.14 | 80.0% | Calls: 6, 30.0% |
| 2026-04 | A$3,407.35 | 26.0 | 28.0 | 8+5+8 | 21.0 | A$162.25 | 80.8% | Tie: call forwarding/enquiry, 8 each |
| 2026-05 | A$3,154.72 | 18.0 | 22.0 | 3+5+9 | 17.0 | A$185.57 | 94.4% | Enquiry: 9, 50.0% |
| 2026-06 | A$4,715.65 | 30.0 | 33.0 | 4+13+10 | 27.0 | A$174.65 | 90.0% | Calls: 13, 43.3% |
| 2026-07p | A$4,147.46 | 15.9 | 17.9 | 2+6+2.9 | 10.9 | A$380.50 | 68.6% | Calls: 6, 37.7% |

The strict proxy is a reported conversion-value proxy, not a count of verified leads. Decimal values are Google Ads weighted conversions.

The clearest inflection is June to July on a 31-day-normalised basis:

- July projected spend: `A$4,147.46 ÷ 28 × 31 = A$4,591.83`, only 2.6% below June.
- Projected reported conversions: `15.9 ÷ 28 × 31 = 17.6`, down 41.3% from June’s 30.0.
- Projected strict proxy: `10.9 ÷ 28 × 31 = 12.1`, down 55.3% from 27.0.
- Cost per strict proxy rises from A$174.65 to A$380.50, up 117.9%.

The “spend up ~35–40% while conversions fall” statement is valid against May on a 30-day comparable basis: projected July spend is A$4,443.71 versus May’s A$3,154.72, up 40.9%, while reported conversions fall from 18.0 to 17.0.

**Dashboard label:** “Reported conversion trend and strict-action proxy; not qualified leads or pipeline.”

## 2. Pacing: June breached the daily-budget equivalent; July is pacing close to it

Monthly budget equivalent = `A$154.81 × calendar days`.

| Period | Spend | Budget equivalent | Pacing |
|---|---:|---:|---:|
| 2026-01 | A$3,405.83 | A$4,799.11 | 71.0% |
| 2026-02 | A$3,144.71 | A$4,334.68 | 72.5% |
| 2026-03 | A$3,330.27 | A$4,799.11 | 69.4% |
| 2026-04 | A$3,407.35 | A$4,644.30 | 73.4% |
| 2026-05 | A$3,154.72 | A$4,799.11 | 65.7% |
| 2026-06 | A$4,715.65 | A$4,644.30 | 101.5% |
| 2026-07p, through 28 July | A$4,147.46 | A$4,334.68 | 95.7% |
| July full-month projection | A$4,591.83 | A$4,799.11 | 95.7% |

Derivation for July:

- Actual pace: `A$4,147.46 ÷ 28 = A$148.12/day`.
- Full-month projection: `A$148.12 × 31 = A$4,591.83`.
- Prior complete-month spend averaged A$3,427.96; June and July are materially above that historical pace.

**Dashboard label:** “Media spend pacing against A$154.81 daily budget; July is partial-month normalised.”

## 3. Mix: action leadership rotates, while July’s strict share collapses

Action leadership by month:

- Call forwarding led July 2025, November 2025 and December 2025.
- Make an Enquiry led August, October, January, February and May.
- Calls from ads led September, March, June and July 2026 partial.
- April was tied between call forwarding and enquiries.

Strict share was generally 79–91%, but fell to 68.6% in July partial. Against `allConv`, the later-period shares are lower: April 75.0%, May 77.3%, June 81.8% and July 60.9%.

The August clean proxy is 27.0. Including the observed cross-accrued physiotherapy call would produce 28.0 and A$109.12 cost per proxy, but that would overstate consulting-owned activity.

**Dashboard label:** “Conversion-action mix, with strict actions separated from phone-click, email-click and newsletter actions.”

## 4. Waste and efficiency: keyword CPA is highly uneven and contaminated

Cost per reported conversion = `keyword cost ÷ reported keyword conversions`.

Best-ranked lines:

| Rank | Keyword | Cost | Reported conv. | Cost / reported conv. |
|---:|---|---:|---:|---:|
| 1 | manual handling training sydney | A$370.98 | 11.5 | A$32.26 |
| 2 | ergonomic assessment | A$477.65 | 8.5 | A$56.19 |
| 3 | +Ergonomics +Training | A$622.47 | 9.3 | A$66.93 |
| 4 | office ergonomic assessment | A$548.64 | 7.0 | A$78.38 |
| 5 | +manual +handling +training +canberra | A$571.10 | 7.0 | A$81.59 |

Worst-ranked lines:

| Rank | Keyword | Cost | Reported conv. | Cost / reported conv. |
|---:|---|---:|---:|---:|
| 1 | +Ergonomics +Company | A$568.61 | 1.0 | A$568.61 |
| 2 | manual handling course | A$555.86 | 1.0 | A$555.86 |
| 3 | +ergonomic +services | A$522.37 | 1.0 | A$522.37 |
| 4 | +Occupational +Health +And +Ergonomics | A$563.09 | 1.5 | A$375.39 |
| 5 | manual handling training for carers | A$544.45 | 2.0 | A$272.23 |

Certificate/course-intent lines:

| Keyword group | Spend | Reported conv. | Cost / reported conv. |
|---|---:|---:|---:|
| +manual +handling +certificate | A$4,621.19 | 21.6 | A$213.94 |
| manual handling course | A$555.86 | 1.0 | A$555.86 |
| +manual +handling +course | A$484.75 | 2.2 | A$220.34 |
| **Total** | **A$5,661.80** | **24.8** | **A$228.30** |

Derivation:

- Top-30 keyword spend: A$27,931.89.
- Certificate/course share of top-30 spend: `A$5,661.80 ÷ A$27,931.89 = 20.3%`.
- Share of trailing campaign spend: `A$5,661.80 ÷ A$42,285.61 = 13.4%`.
- The current 30-day certificate line alone absorbed A$846.56, or 18% of current campaign spend, for 2 reported conversions.

These CPAs are contaminated by the mixed primary-goal configuration. They are not cost per qualified lead.

**Dashboard label:** “Keyword cost per reported conversion; conversion values are contaminated and are not lead CPA.”

## 5. Contamination: the physiotherapy spike is a goal-mix anomaly until verified

| Period | Avg clicks / month | Avg reported conv. / month |
|---|---:|---:|
| Jul 2025–Feb 2026 | 381.5 | 19.98 |
| Mar–Jun 2026 | 183.25 | 43.95 |
| Change | **−52.0%** | **+120.0%** |

The direct February-to-March change is also abnormal:

- Clicks: 397 to 200, down 49.6%.
- Conversions: 28.0 to 45.0, up 60.7%.
- Cost per reported conversion: A$32.67 to A$20.19.

July partial remains elevated at 152 clicks and 36.0 reported conversions. The snapshot caveat states that GA4 SR actions were enabled around this period; therefore the conversion jump should be treated as a goal-mix artefact until independently verified.

Observed cross-accrual:

- In August 2025, `Call Forwarding SR - sydneyphysiotherapist` accrued 1 conversion to the consulting campaign.
- That is 1 of 33 consulting reported conversions, or 3.0%.
- It is confirmed contamination, not merely mechanical eligibility.

What the dashboard can honestly display:

- Consulting reported conversions.
- A clean strict-action proxy excluding the known physiotherapy action.
- A visible contamination warning for August 2025.
- A physiotherapy “conversion-goal change/anomaly” marker from March 2026 onward.

It should not display the physiotherapy spike as verified lead growth or use it to justify improved CPA.

**Dashboard label:** “Cross-campaign goal contamination observed; physiotherapy conversion spike is unverified lead growth.”

## 6. Cross-source: session/click ratios need scope alignment

The table shows GA4 Paid Search sessions against consulting clicks and against combined consulting-plus-physiotherapy clicks.

| Month | GA4 Paid Search sessions | Consulting clicks | Sessions / consulting click | Combined Ads clicks | Sessions / combined click |
|---|---:|---:|---:|---:|---:|
| 2025-07 | 389 | 404 | 96.3% | 761 | 51.1% |
| 2025-08 | 361 | 374 | 96.5% | 744 | 48.5% |
| 2025-09 | 333 | 351 | 94.9% | 704 | 47.3% |
| 2025-10 | 394 | 415 | 94.9% | 789 | 49.9% |
| 2025-11 | 329 | 382 | 86.1% | 778 | 42.3% |
| 2025-12 | 335 | 385 | 87.0% | 775 | 43.2% |
| 2026-01 | 357 | 404 | 88.4% | 819 | 43.6% |
| 2026-02 | 367 | 390 | 94.1% | 787 | 46.6% |
| 2026-03 | 360 | 418 | 86.1% | 618 | 58.3% |
| 2026-04 | 275 | 380 | 72.4% | 542 | 50.7% |
| 2026-05 | 232 | 326 | 71.2% | 522 | 44.4% |
| 2026-06 | 303 | 442 | 68.6% | 617 | 49.1% |
| 2026-07p | 266 | 357 | 74.5% | 509 | 52.3% |

The consulting-only ratio falls from approximately 95–97% in July–October 2025 to 68.6–74.5% in April–July 2026. However, GA4 Paid Search likely includes both campaigns: on the combined-click denominator, the ratio is not consistently declining. This prevents a clean claim of tracking loss or invalid clicks.

GA4 Direct anomalies:

- September 2025: 357 Direct sessions versus 103 in August, +254 or 3.47×.
- November 2025: 465 versus 87 in October, +378 or 5.34×.

These are attribution anomalies to explain, not evidence of organic growth.

GSC brand/nonbrand read:

- Brand variants `ergoworks`, `ergoassess` and `ergo works` generated 57 of 77 clicks in the supplied top-query list: 74.0%.
- Nonbrand queries generated 20 clicks.
- Brand CTR was 10.1% from 565 impressions; nonbrand CTR was 0.4% from 4,615 impressions.
- Nonbrand visibility is mixed: `ergonomic consultant` sits at position 19.1, while `manual handling` sits at position 64.7.

This is a top-query-list read, not a complete organic demand estimate.

**Dashboard label:** “GA4 Paid Search sessions versus Ads clicks; scope and attribution are not fully reconciled.”

## Dashboard implications — advisory candidates

- Give spend, budget pacing and July-normalised spend a primary panel.
- Give the clean strict-action proxy and cost per strict-action proxy a primary panel, labelled: “reported strict-action proxy, not qualified leads.”
- Show conversion mix by action, with strict actions visually separated from phone-click, email-click and newsletter actions.
- Add a persistent caveat to all platform conversion and keyword CPA panels: “Conversions ≠ leads ≠ qualified pipeline.”
- Add a contamination marker for August 2025 and a goal-mix anomaly marker from March 2026 for physiotherapy.
- Treat certificate/course-intent spend as a review candidate, not proven waste, because its reported conversions are contaminated.
- Show GA4 sessions versus Ads clicks only with an explicit scope note; do not interpret the ratio as traffic quality or lead quality.
- Show GSC brand/nonbrand as an organic visibility panel, labelled “top-query visibility, not demand or leads.”
- Avoid headline panels labelled “cost per lead,” “CAC,” “qualified pipeline” or “ROAS” until CRM qualification, revenue and campaign-level attribution are available.
hook: Stop
hook: Stop Completed
tokens used
94,213
Basis: [snapshot.json](/Users/amirariff/projects/growthos/marcuscaporaso/feature-research/ergoworks-dashboard-2026-07-29/data/snapshot.json) and the [evidence register](/Users/amirariff/projects/growthos/marcuscaporaso/src/app/ergoworks/plan/evidence/page.tsx). Currency is AUD. July 2026 is partial through 28 July. I interpret the current budget as A$154.81/day.

## 1. Trend: spend is near capacity while strict-action efficiency deteriorates

Strict proxy = `Call Forwarding SR - Ergoworks Consulting` + `Calls from ads` + `Make an Enquiry SR`. The known physiotherapy call-forwarding accrual in August is excluded from the clean consulting proxy.

| Month | Spend | Reported conv. | All conv. | Strict derivation | Strict proxy | Cost / strict proxy | Strict share of conv. | Highest action |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| 2025-07 | A$3,364.50 | 37.0 | 37.0 | 16+7+8 | 31.0 | A$108.53 | 83.8% | Call forwarding: 16, 43.2% |
| 2025-08 | A$3,055.48 | 33.0 | 33.0 | 10+4+13 | 27.0 | A$113.17 | 81.8% | Enquiry: 13, 39.4% |
| 2025-09 | A$3,405.78 | 32.0 | 32.0 | 5+13+9 | 27.0 | A$126.14 | 84.4% | Calls: 13, 40.6% |
| 2025-10 | A$3,529.50 | 42.0 | 42.0 | 14+9+15 | 38.0 | A$92.88 | 90.5% | Enquiry: 15, 35.7% |
| 2025-11 | A$3,062.02 | 30.9 | 30.9 | 11+6+8.9 | 25.9 | A$118.22 | 83.8% | Call forwarding: 11, 35.6% |
| 2025-12 | A$3,559.69 | 24.0 | 24.0 | 8+6+5 | 19.0 | A$187.35 | 79.2% | Call forwarding: 8, 33.3% |
| 2026-01 | A$3,405.83 | 23.0 | 23.0 | 9+3+11 | 23.0 | A$148.08 | 100.0% | Enquiry: 11, 47.8% |
| 2026-02 | A$3,144.71 | 33.0 | 33.0 | 5+7+18 | 30.0 | A$104.82 | 90.9% | Enquiry: 18, 54.5% |
| 2026-03 | A$3,330.27 | 20.0 | 20.0 | 5+6+5 | 16.0 | A$208.14 | 80.0% | Calls: 6, 30.0% |
| 2026-04 | A$3,407.35 | 26.0 | 28.0 | 8+5+8 | 21.0 | A$162.25 | 80.8% | Tie: call forwarding/enquiry, 8 each |
| 2026-05 | A$3,154.72 | 18.0 | 22.0 | 3+5+9 | 17.0 | A$185.57 | 94.4% | Enquiry: 9, 50.0% |
| 2026-06 | A$4,715.65 | 30.0 | 33.0 | 4+13+10 | 27.0 | A$174.65 | 90.0% | Calls: 13, 43.3% |
| 2026-07p | A$4,147.46 | 15.9 | 17.9 | 2+6+2.9 | 10.9 | A$380.50 | 68.6% | Calls: 6, 37.7% |

The strict proxy is a reported conversion-value proxy, not a count of verified leads. Decimal values are Google Ads weighted conversions.

The clearest inflection is June to July on a 31-day-normalised basis:

- July projected spend: `A$4,147.46 ÷ 28 × 31 = A$4,591.83`, only 2.6% below June.
- Projected reported conversions: `15.9 ÷ 28 × 31 = 17.6`, down 41.3% from June’s 30.0.
- Projected strict proxy: `10.9 ÷ 28 × 31 = 12.1`, down 55.3% from 27.0.
- Cost per strict proxy rises from A$174.65 to A$380.50, up 117.9%.

The “spend up ~35–40% while conversions fall” statement is valid against May on a 30-day comparable basis: projected July spend is A$4,443.71 versus May’s A$3,154.72, up 40.9%, while reported conversions fall from 18.0 to 17.0.

**Dashboard label:** “Reported conversion trend and strict-action proxy; not qualified leads or pipeline.”

## 2. Pacing: June breached the daily-budget equivalent; July is pacing close to it

Monthly budget equivalent = `A$154.81 × calendar days`.

| Period | Spend | Budget equivalent | Pacing |
|---|---:|---:|---:|
| 2026-01 | A$3,405.83 | A$4,799.11 | 71.0% |
| 2026-02 | A$3,144.71 | A$4,334.68 | 72.5% |
| 2026-03 | A$3,330.27 | A$4,799.11 | 69.4% |
| 2026-04 | A$3,407.35 | A$4,644.30 | 73.4% |
| 2026-05 | A$3,154.72 | A$4,799.11 | 65.7% |
| 2026-06 | A$4,715.65 | A$4,644.30 | 101.5% |
| 2026-07p, through 28 July | A$4,147.46 | A$4,334.68 | 95.7% |
| July full-month projection | A$4,591.83 | A$4,799.11 | 95.7% |

Derivation for July:

- Actual pace: `A$4,147.46 ÷ 28 = A$148.12/day`.
- Full-month projection: `A$148.12 × 31 = A$4,591.83`.
- Prior complete-month spend averaged A$3,427.96; June and July are materially above that historical pace.

**Dashboard label:** “Media spend pacing against A$154.81 daily budget; July is partial-month normalised.”

## 3. Mix: action leadership rotates, while July’s strict share collapses

Action leadership by month:

- Call forwarding led July 2025, November 2025 and December 2025.
- Make an Enquiry led August, October, January, February and May.
- Calls from ads led September, March, June and July 2026 partial.
- April was tied between call forwarding and enquiries.

Strict share was generally 79–91%, but fell to 68.6% in July partial. Against `allConv`, the later-period shares are lower: April 75.0%, May 77.3%, June 81.8% and July 60.9%.

The August clean proxy is 27.0. Including the observed cross-accrued physiotherapy call would produce 28.0 and A$109.12 cost per proxy, but that would overstate consulting-owned activity.

**Dashboard label:** “Conversion-action mix, with strict actions separated from phone-click, email-click and newsletter actions.”

## 4. Waste and efficiency: keyword CPA is highly uneven and contaminated

Cost per reported conversion = `keyword cost ÷ reported keyword conversions`.

Best-ranked lines:

| Rank | Keyword | Cost | Reported conv. | Cost / reported conv. |
|---:|---|---:|---:|---:|
| 1 | manual handling training sydney | A$370.98 | 11.5 | A$32.26 |
| 2 | ergonomic assessment | A$477.65 | 8.5 | A$56.19 |
| 3 | +Ergonomics +Training | A$622.47 | 9.3 | A$66.93 |
| 4 | office ergonomic assessment | A$548.64 | 7.0 | A$78.38 |
| 5 | +manual +handling +training +canberra | A$571.10 | 7.0 | A$81.59 |

Worst-ranked lines:

| Rank | Keyword | Cost | Reported conv. | Cost / reported conv. |
|---:|---|---:|---:|---:|
| 1 | +Ergonomics +Company | A$568.61 | 1.0 | A$568.61 |
| 2 | manual handling course | A$555.86 | 1.0 | A$555.86 |
| 3 | +ergonomic +services | A$522.37 | 1.0 | A$522.37 |
| 4 | +Occupational +Health +And +Ergonomics | A$563.09 | 1.5 | A$375.39 |
| 5 | manual handling training for carers | A$544.45 | 2.0 | A$272.23 |

Certificate/course-intent lines:

| Keyword group | Spend | Reported conv. | Cost / reported conv. |
|---|---:|---:|---:|
| +manual +handling +certificate | A$4,621.19 | 21.6 | A$213.94 |
| manual handling course | A$555.86 | 1.0 | A$555.86 |
| +manual +handling +course | A$484.75 | 2.2 | A$220.34 |
| **Total** | **A$5,661.80** | **24.8** | **A$228.30** |

Derivation:

- Top-30 keyword spend: A$27,931.89.
- Certificate/course share of top-30 spend: `A$5,661.80 ÷ A$27,931.89 = 20.3%`.
- Share of trailing campaign spend: `A$5,661.80 ÷ A$42,285.61 = 13.4%`.
- The current 30-day certificate line alone absorbed A$846.56, or 18% of current campaign spend, for 2 reported conversions.

These CPAs are contaminated by the mixed primary-goal configuration. They are not cost per qualified lead.

**Dashboard label:** “Keyword cost per reported conversion; conversion values are contaminated and are not lead CPA.”

## 5. Contamination: the physiotherapy spike is a goal-mix anomaly until verified

| Period | Avg clicks / month | Avg reported conv. / month |
|---|---:|---:|
| Jul 2025–Feb 2026 | 381.5 | 19.98 |
| Mar–Jun 2026 | 183.25 | 43.95 |
| Change | **−52.0%** | **+120.0%** |

The direct February-to-March change is also abnormal:

- Clicks: 397 to 200, down 49.6%.
- Conversions: 28.0 to 45.0, up 60.7%.
- Cost per reported conversion: A$32.67 to A$20.19.

July partial remains elevated at 152 clicks and 36.0 reported conversions. The snapshot caveat states that GA4 SR actions were enabled around this period; therefore the conversion jump should be treated as a goal-mix artefact until independently verified.

Observed cross-accrual:

- In August 2025, `Call Forwarding SR - sydneyphysiotherapist` accrued 1 conversion to the consulting campaign.
- That is 1 of 33 consulting reported conversions, or 3.0%.
- It is confirmed contamination, not merely mechanical eligibility.

What the dashboard can honestly display:

- Consulting reported conversions.
- A clean strict-action proxy excluding the known physiotherapy action.
- A visible contamination warning for August 2025.
- A physiotherapy “conversion-goal change/anomaly” marker from March 2026 onward.

It should not display the physiotherapy spike as verified lead growth or use it to justify improved CPA.

**Dashboard label:** “Cross-campaign goal contamination observed; physiotherapy conversion spike is unverified lead growth.”

## 6. Cross-source: session/click ratios need scope alignment

The table shows GA4 Paid Search sessions against consulting clicks and against combined consulting-plus-physiotherapy clicks.

| Month | GA4 Paid Search sessions | Consulting clicks | Sessions / consulting click | Combined Ads clicks | Sessions / combined click |
|---|---:|---:|---:|---:|---:|
| 2025-07 | 389 | 404 | 96.3% | 761 | 51.1% |
| 2025-08 | 361 | 374 | 96.5% | 744 | 48.5% |
| 2025-09 | 333 | 351 | 94.9% | 704 | 47.3% |
| 2025-10 | 394 | 415 | 94.9% | 789 | 49.9% |
| 2025-11 | 329 | 382 | 86.1% | 778 | 42.3% |
| 2025-12 | 335 | 385 | 87.0% | 775 | 43.2% |
| 2026-01 | 357 | 404 | 88.4% | 819 | 43.6% |
| 2026-02 | 367 | 390 | 94.1% | 787 | 46.6% |
| 2026-03 | 360 | 418 | 86.1% | 618 | 58.3% |
| 2026-04 | 275 | 380 | 72.4% | 542 | 50.7% |
| 2026-05 | 232 | 326 | 71.2% | 522 | 44.4% |
| 2026-06 | 303 | 442 | 68.6% | 617 | 49.1% |
| 2026-07p | 266 | 357 | 74.5% | 509 | 52.3% |

The consulting-only ratio falls from approximately 95–97% in July–October 2025 to 68.6–74.5% in April–July 2026. However, GA4 Paid Search likely includes both campaigns: on the combined-click denominator, the ratio is not consistently declining. This prevents a clean claim of tracking loss or invalid clicks.

GA4 Direct anomalies:

- September 2025: 357 Direct sessions versus 103 in August, +254 or 3.47×.
- November 2025: 465 versus 87 in October, +378 or 5.34×.

These are attribution anomalies to explain, not evidence of organic growth.

GSC brand/nonbrand read:

- Brand variants `ergoworks`, `ergoassess` and `ergo works` generated 57 of 77 clicks in the supplied top-query list: 74.0%.
- Nonbrand queries generated 20 clicks.
- Brand CTR was 10.1% from 565 impressions; nonbrand CTR was 0.4% from 4,615 impressions.
- Nonbrand visibility is mixed: `ergonomic consultant` sits at position 19.1, while `manual handling` sits at position 64.7.

This is a top-query-list read, not a complete organic demand estimate.

**Dashboard label:** “GA4 Paid Search sessions versus Ads clicks; scope and attribution are not fully reconciled.”

## Dashboard implications — advisory candidates

- Give spend, budget pacing and July-normalised spend a primary panel.
- Give the clean strict-action proxy and cost per strict-action proxy a primary panel, labelled: “reported strict-action proxy, not qualified leads.”
- Show conversion mix by action, with strict actions visually separated from phone-click, email-click and newsletter actions.
- Add a persistent caveat to all platform conversion and keyword CPA panels: “Conversions ≠ leads ≠ qualified pipeline.”
- Add a contamination marker for August 2025 and a goal-mix anomaly marker from March 2026 for physiotherapy.
- Treat certificate/course-intent spend as a review candidate, not proven waste, because its reported conversions are contaminated.
- Show GA4 sessions versus Ads clicks only with an explicit scope note; do not interpret the ratio as traffic quality or lead quality.
- Show GSC brand/nonbrand as an organic visibility panel, labelled “top-query visibility, not demand or leads.”
- Avoid headline panels labelled “cost per lead,” “CAC,” “qualified pipeline” or “ROAS” until CRM qualification, revenue and campaign-level attribution are available.
