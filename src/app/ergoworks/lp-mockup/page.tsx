import type { ReactNode } from "react";
import styles from "./lp.module.css";

/*
THESIS: A workplace-ergonomics page that sorts the visitor before it sells to
  anyone — the qualifier is the first interaction, not a form field. Refuses the
  category default of a stock-photo hero over three icon cards.
OWN-WORLD: Navy workwear ground, signal-orange marking, hazard-hatch texture,
  Barlow structural caps over Figtree reading. Ruled enclosures — hairline
  borders and 2px signal top-rules at 4px radius — never soft floating cards.
STORY: An HR/WHS lead at a 100+ employee Sydney org sees their exact situation
  named, understands they get a prioritised report rather than a visit, and
  requests a workplace ergonomics review.
FIRST VIEWPORT: Wordmark + phone on a hairline; oversized headline to 22ch with
  the promise in signal orange; the corporate/individual fork sits immediately
  beneath, as two large controls — the primary action.
FORM: Two-flow qualifier-led long-form Persuade page. Structure from D3 §5's
  12 modules; brand register inherited from the client's live site (navy/white),
  sharpened with the WHS world's own signal colour rather than invented.
  No concept roll: the brief pinned both the visual world (the client's own
  brand, user-confirmed) and the structure (D3's fixed module list), leaving no
  open surface for a roll to decide. Disclosed rather than seeded.

WHY THIS IS A SERVER COMPONENT, AND MUST STAY ONE
  The annotation layer names client personnel, unapproved spend figures and
  internal gate IDs. A `"use client"` page compiles that text verbatim into a
  /_next/static chunk, which the Basic-auth gate in src/proxy.ts cannot cover
  (its matcher excludes _next/static) and which Next serves immutable and
  publicly cacheable. Every interaction here is therefore driven by native
  radio/checkbox state plus CSS :has() — no client JS, so the confidential
  strings exist only in the gated server-rendered payload.
*/

const CAVEAT =
  "Preliminary guidance only—not a compliance assessment, compliance certification, medical assessment or diagnosis.";

type OfferKey = "review" | "snapshot" | "download" | "quiz";

const OFFERS: {
  key: OfferKey;
  label: string;
  heading: string;
  body: string;
  points: string[];
  cta: string;
  caveat: boolean;
}[] = [
  {
    key: "review",
    label: "A — Request a workplace review (04/08 call)",
    heading: "Request a workplace ergonomics review",
    body:
      "Tell us what prompted the review and how many people it covers. A consultant scopes an appropriate assessment for your team and comes back with what it would involve.",
    points: [
      "Scoped to your team, site or floor — not a single desk",
      "You get a written scope before anything is booked",
      "For organisations; we do not take individual bookings",
    ],
    cta: "Request a workplace review",
    caveat: false,
  },
  {
    key: "snapshot",
    label: "B — Free 15-minute Risk Snapshot (plan v2)",
    heading: "Free 15-minute Workplace Ergonomics Risk Snapshot",
    body:
      "Bring one workplace, workstation, hybrid-work or manual-task issue. In 15 minutes a consultant helps clarify it and follows up with a written three-point summary.",
    points: [
      "One clearly defined issue",
      "A written three-point summary of observations, priorities and a next step",
      "B2B only, subject to available capacity",
    ],
    cta: "Request a free 15-minute Snapshot",
    caveat: true,
  },
  {
    key: "download",
    label: "C — Gated resource first (Greg's 17/07 preference)",
    heading: "The workplace ergonomics review checklist",
    body:
      "What a thorough assessment covers, what a report should tell you, and the questions to ask before you commission one. Sent straight to your inbox.",
    points: [
      "Written for HR, WHS and Facilities leads",
      "No consultation required to receive it",
      "We follow up only if you ask us to",
    ],
    cta: "Send me the checklist",
    caveat: false,
  },
  {
    key: "quiz",
    label: "D — Qualifying questionnaire",
    heading: "Find out what your workplace actually needs",
    body:
      "Six questions about your team, your locations and what prompted the review. You get a tailored summary of which type of assessment fits — and we only suggest a conversation where there is a real need.",
    points: [
      "About two minutes",
      "A tailored recommendation, not a sales call",
      "Corporate enquiries only",
    ],
    cta: "Start the questionnaire",
    caveat: false,
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "Do you work outside Sydney?",
    a: "Yes — ErgoWorks operates in Melbourne, Canberra and Brisbane as well. This page focuses on Sydney because that is where we are concentrating new work at the moment. If your team sits elsewhere, tell us and we will confirm what we can cover.",
  },
  {
    q: "Do you help beyond assessments?",
    a: "Assessments are usually where we start, but they are one part of how we work. Depending on what the assessment surfaces, that can extend to floor walking, train-the-trainer, workplace-change support or ongoing programme reviews. Any of those can be where we start, and we only suggest a next step where there is a real need for one.",
  },
  {
    q: "What do we actually receive?",
    a: "A written report covering what was assessed, what was found, and what we recommend — prioritised, so your team knows what to deal with first rather than receiving an undifferentiated list.",
  },
  {
    q: "Can you assess people working from home?",
    a: "Yes. Home and hybrid setups are assessed to the same standard as the office, so coverage stays consistent wherever your people are working that week.",
  },
  {
    q: "Do you take individual bookings?",
    a: "No. We work with organisations. If you are looking for help with your own setup rather than your team's, there are some starting points further up this page.",
  },
  {
    q: "How long does it take?",
    a: "It depends on how many people and locations are involved. We confirm timing as part of the written scope, before anything is booked.",
  },
];

function Note({ children }: { children: ReactNode }) {
  return <p className={styles.note}>{children}</p>;
}

export default function LpMockupPage() {
  return (
    <main className={styles.page}>
      {/* State inputs — native, visually hidden, read by CSS :has(). */}
      <input type="radio" name="flow" id="f-team" defaultChecked className={styles.vh} />
      <input type="radio" name="flow" id="f-me" className={styles.vh} />
      {OFFERS.map((o, i) => (
        <input
          key={o.key}
          type="radio"
          name="offer"
          id={`o-${o.key}`}
          defaultChecked={i === 0}
          className={styles.vh}
        />
      ))}
      <input type="checkbox" id="notes" className={styles.vh} />
      <input type="radio" name="step" id="s-1" defaultChecked className={styles.vh} />
      <input type="radio" name="step" id="s-2" className={styles.vh} />

      {/* ── mockup chrome: not part of the design ── */}
      <div className={styles.mockBar}>
        <span className={styles.mockTag}>Superseded</span>
        <span>
          Superseded by the two-skin phase-one prototype —{" "}
          <a href="/ergoworks/lp" style={{ color: "inherit" }}>
            /ergoworks/lp
          </a>
          . This page predates the 12 Aug scope pivot: it still carries the four-offer
          switcher, sub-100 employee bands and non-Sydney geography, all of which the
          approved direction removes. Kept for reference only.
        </span>
        <span className={styles.offerSwitch}>
          <span className={styles.switchLabel}>Offer</span>
          {OFFERS.map((o) => (
            <label key={o.key} htmlFor={`o-${o.key}`} className={styles.offerPill} data-offer-pill={o.key}>
              {o.label.split(" — ")[0]}
            </label>
          ))}
        </span>
        <label htmlFor="notes" className={styles.notesToggle}>
          <span data-when="off">Show notes</span>
          <span data-when="on">Hide notes</span>
        </label>
      </div>

      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.brand}>
            <span className={styles.brandMark}>ErgoWorks</span>
            <span className={styles.brandSub}>Consulting</span>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.forOrgs}>For organisations</span>
            <a className={styles.phone} href="tel:1300374696">
              1300 374 696
            </a>
          </div>
        </header>
      </div>

      {/* ── hero + fork ── */}
      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroInner}>
            <h1 className={styles.h1}>
              Workplace ergonomic assessments in Sydney.
              <em>With a report your HR team can act on.</em>
            </h1>
            <p className={styles.heroLead}>
              Consultant-led assessments for desk-based and hybrid teams. Every workstation
              reviewed to the same standard, findings prioritised, and a clear record of what
              was recommended and what was implemented.
            </p>

            <div className={styles.fork}>
              <p className={styles.forkQ}>
                Are you sorting ergonomics for your team, or for yourself?
              </p>
              <div className={styles.forkRow}>
                <label htmlFor="f-team" className={styles.forkBtn} data-fork="team">
                  For my team
                </label>
                <label htmlFor="f-me" className={styles.forkBtn} data-fork="me">
                  For myself
                </label>
              </div>
              <div className={styles.noteWrap}>
                <Note>
                  <b>Module 2a — the flow fork.</b> This is the whole point of the page. Individuals
                  route to a dead-end with no offer, no lead event and no marketing opt-in, so the
                  conversion signal and Smart Bidding stay on corporate intent. Search traffic lands
                  gate-first; Meta would lead with the resource path instead.
                </Note>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── module 12: the individual dead-end ── */}
      <section className={`${styles.section} ${styles.sectionTight} ${styles.individualOnly}`}>
        <div className={styles.shell}>
          <div className={styles.deadEnd}>
            <h2>We work with organisations — but here is something useful anyway</h2>
            <p className={styles.body}>
              ErgoWorks is engaged by employers to assess teams, so we are not the right fit for an
              individual setup. That said, you should not leave with nothing. Most desk discomfort
              traces back to three things worth checking first:
            </p>
            <ul>
              <li>Screen top at roughly eye level, an arm&rsquo;s length away.</li>
              <li>
                Elbows near 90°, shoulders down, wrists straight — adjust the chair to the desk
                first, then the screen to you.
              </li>
              <li>
                Feet flat and supported. If the chair is at the right height for the desk and your
                feet dangle, you want a footrest, not a lower chair.
              </li>
            </ul>
            <p className={styles.body}>
              If your discomfort is persistent, that is worth raising with your GP or your workplace
              health and safety representative.
            </p>
            <p className={styles.body}>
              If it turns out your employer is looking at this across the team,{" "}
              <label htmlFor="f-team" className={styles.inlineLink}>
                come back this way
              </label>
              .
            </p>
            <div className={styles.noteWrap}>
              <Note>
                <b>Deliberately a dead-end.</b> No form, no offer, no lead event, no marketing
                opt-in. Genuinely useful so the visitor is not annoyed, but nothing here creates a
                conversion. This is what keeps the corporate lead data clean.
              </Note>
            </div>
          </div>
        </div>
      </section>

      {/* ── corporate flow ── */}
      <div className={styles.corporateOnly}>
        {/* module 3: proof strip */}
        <div className={styles.shell}>
          <div className={styles.proofStrip}>
            <span className={styles.proofSlot}>ESTABLISHED — year to confirm</span>
            <span className={styles.proofSlot}>CLIENT LOGO</span>
            <span className={styles.proofSlot}>CLIENT LOGO</span>
            <span className={styles.proofSlot}>CLIENT LOGO</span>
            <span className={styles.proofPending}>pending written sign-off</span>
          </div>
          <div className={styles.noteWrap}>
            <Note>
              <b>Module 3 — blocked on gate B4.</b> No proof asset is substantiated in writing yet,
              so no client name, logo, rating or award can ship. The slots stay visibly empty rather
              than being filled with something we cannot stand behind. The &ldquo;since 2005&rdquo; line that was here has been
              removed — that year appears nowhere on the live ErgoWorks site and had no source. It
              goes back only if the client confirms it. Note their site does carry a public Google
              rating (63 reviews), which is a real, verifiable proof asset worth asking about.
            </Note>
          </div>
        </div>

        {/* module 4: benefits */}
        <section className={styles.section}>
          <div className={styles.shell}>
            <p className={styles.kicker}>What you get</p>
            <h2 className={styles.h2}>Three things most assessments don&rsquo;t give you</h2>
            <p className={styles.lead}>
              Plenty of providers will assess a workstation. The difference shows up afterwards,
              when someone asks what actually changed.
            </p>
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <span className={styles.benefitN}>01 / Coverage</span>
                <h3>One standard across the whole team</h3>
                <p>
                  Every workstation assessed the same way, so you can compare across a floor, a site
                  or a hybrid workforce instead of collecting one-off opinions.
                </p>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitN}>02 / Priority</span>
                <h3>A prioritised list, not a findings dump</h3>
                <p>
                  Scattered issues become an ordered list with an owner against each one, so your
                  team knows what to deal with first and what can wait.
                </p>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitN}>03 / Evidence</span>
                <h3>A record of what was implemented</h3>
                <p>
                  We document what was recommended and what was actually put in place — so when
                  someone asks what changed, there is an answer on file.
                </p>
              </div>
            </div>
            <div className={styles.noteWrap}>
              <Note>
                <b>Module 4.</b> Benefit 03 is the positioning gap in this market — competitors sell
                assessments, not implementation evidence. It carries the same B4 substantiation gate
                as the proof section. Note it evidences <i>implementation</i>, never reduced injury
                or risk.
              </Note>
            </div>
          </div>
        </section>

        {/* modules 5 + 5a */}
        <section className={`${styles.section} ${styles.sectionLift}`}>
          <div className={styles.shell}>
            <p className={styles.kicker}>How it works</p>
            <h2 className={styles.h2}>Four steps, and you know the scope before step two</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepN}>1</span>
                <h3>Tell us what prompted it</h3>
                <p>
                  A complaint, a workers-comp matter, an office move, a hybrid rollout, or a WHS
                  obligation. The trigger shapes the assessment.
                </p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepN}>2</span>
                <h3>We scope it in writing</h3>
                <p>
                  How many people, which locations, what is covered and what it involves — before
                  anything is booked.
                </p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepN}>3</span>
                <h3>We assess</h3>
                <p>
                  On site or remotely, to the same standard either way, with individual guidance
                  where it is appropriate.
                </p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepN}>4</span>
                <h3>You get a prioritised report</h3>
                <p>
                  Findings, priorities, owners and a manager debrief — plus a record you can point
                  at later.
                </p>
              </div>
            </div>

            <div className={styles.engineWrap}>
              <p className={styles.kicker}>How we work</p>
              <h2 className={`${styles.h2} ${styles.h2Small}`}>
                An assessment is usually where we start
              </h2>
              <div className={styles.engineRail}>
                <span className={styles.engineItem} data-entry="true">
                  Ergonomic assessments
                </span>
                <span className={styles.engineItem}>Floor walking</span>
                <span className={styles.engineItem}>ErgoAssess</span>
                <span className={styles.engineItem}>Train the trainer</span>
                <span className={styles.engineItem}>Workplace change &amp; office moves</span>
                <span className={styles.engineItem}>Equipment guidance</span>
              </div>
              <p className={styles.engineCaption}>
                Any of these can be where we start. Where there is a real need, the right person to
                decide it, and the capacity to do it properly, we will say so — and where there
                isn&rsquo;t, we won&rsquo;t.
              </p>
              <div className={styles.noteWrap}>
                <Note>
                  <b>Module 5a — the engine strip.</b> Shows the six-service ecosystem as method,
                  not as a bundle being sold today. The conditions in the caption are load-bearing
                  and must survive copy edits: a real trigger, the right buyer, consent, and our
                  capacity. Do not let this compress into &ldquo;one enquiry covers everything&rdquo;.
                </Note>
              </div>
            </div>
          </div>
        </section>

        {/* module 6: the offer */}
        <section className={styles.section} id="offer">
          <div className={styles.shell}>
            <p className={styles.kicker}>The offer</p>
            <h2 className={styles.h2}>Where a conversation starts</h2>
            <p className={styles.lead}>
              This is the decision that is still open — use the switch at the top of the page to
              compare the four candidates.
            </p>

            {OFFERS.map((o) => (
              <div key={o.key} className={styles.offer} data-offer={o.key}>
                <h3>{o.heading}</h3>
                <p className={styles.offerBody}>{o.body}</p>
                <ul className={styles.offerList}>
                  {o.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {o.caveat && <p className={styles.caveat}>{CAVEAT}</p>}
                <div className={styles.btnRow}>
                  <a className={styles.btn} href="#enquire">
                    {o.cta}
                  </a>
                  <a className={`${styles.btn} ${styles.btnGhost}`} href="tel:1300374696">
                    Or call 1300 374 696
                  </a>
                </div>
              </div>
            ))}

            <div className={styles.noteWrap}>
              <Note>
                <b>Module 6 — gate C1, and the developer builds only after it is settled.</b> Option
                A is where the 04/08 call landed. Option B is the plan-v2 Snapshot, which carries
                the mandatory caveat verbatim and adjacent to the CTA — note that same caveat is 113
                characters and therefore <i>cannot</i> fit a Google RSA description (90 max), which
                is why the draft ads lead with A instead. Option C is closest to Greg&rsquo;s 17/07
                preference for a resource before a consult. Option D qualifies before offering
                anything.
              </Note>
            </div>
          </div>
        </section>

        {/* modules 7 + 8 */}
        <section className={`${styles.section} ${styles.sectionPaper}`}>
          <div className={styles.shell}>
            <p className={styles.kicker}>What an assessment covers</p>
            <h2 className={styles.h2}>The detail, for the person who has to sign it off</h2>
            <div className={styles.detailGrid}>
              <ul className={styles.detailList}>
                <li>Workstation setup — desk, chair, screens, input devices, lighting.</li>
                <li>Posture and working position, with individual guidance on the day.</li>
                <li>How the space is actually used, not how it was designed to be used.</li>
                <li>Home and hybrid setups assessed to the same standard as the office.</li>
                <li>Equipment recommendations, with the reasoning attached.</li>
                <li>A prioritised action list with an owner against each item.</li>
                <li>A manager debrief so the findings do not stop at the report.</li>
              </ul>
              <aside className={styles.detailAside}>
                <h3>Who this is for</h3>
                <p>
                  HR, WHS, Injury Management, People &amp; Culture, Facilities and Workplace
                  Experience teams at organisations with desk-based or hybrid workforces — typically
                  100 or more employees, though smaller teams with a clear need are welcome to ask.
                </p>
              </aside>
            </div>
            <div className={styles.noteWrap}>
              <Note>
                <b>Module 7.</b> Assessment cluster only at launch. No manual handling, no
                certificate or accreditation language, no care-sector material — all gate-blocked.
              </Note>
            </div>

            <div className={styles.reportBlock}>
              <div className={styles.reportHead}>
                <h3>What the report looks like</h3>
                <span className={styles.sampleTag}>Sample — illustrative, not a real client</span>
              </div>
              <table className={styles.reportTable}>
                <thead>
                  <tr>
                    <th scope="col">Finding</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monitors below seated eye height across 11 of 14 desks, level 3</td>
                    <td>
                      <span className={styles.pri} data-p="high">
                        High
                      </span>
                    </td>
                    <td>Facilities</td>
                    <td>Implemented — risers fitted 12 Mar</td>
                  </tr>
                  <tr>
                    <td>Two chairs beyond adjustment range; seat height locked</td>
                    <td>
                      <span className={styles.pri} data-p="high">
                        High
                      </span>
                    </td>
                    <td>Procurement</td>
                    <td>Implemented — replaced 19 Mar</td>
                  </tr>
                  <tr>
                    <td>Home setups: no consistent guidance issued to hybrid staff</td>
                    <td>
                      <span className={styles.pri} data-p="med">
                        Medium
                      </span>
                    </td>
                    <td>People &amp; Culture</td>
                    <td>Guidance drafted, pending sign-off</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.reportFoot}>
                Every finding carries a priority, an owner and a status — which is what makes it
                possible to answer, months later, what was actually done.
              </p>
            </div>
            <div className={styles.noteWrap}>
              <Note>
                <b>Module 8 — proof / evidence of implementation.</b> The report is the page&rsquo;s
                whole differentiator and was described five times without ever being shown, so here
                it is as clearly-labelled synthetic sample data. The <i>named-client</i> proof this
                section eventually wants is still blocked on gate B4 — this sample demonstrates the
                format, and makes no claim about any real engagement.
              </Note>
            </div>
          </div>
        </section>

        {/* module 9: FAQ */}
        <section className={styles.section}>
          <div className={styles.shell}>
            <p className={styles.kicker}>Questions</p>
            <h2 className={styles.h2}>Before you get in touch</h2>
            <div className={styles.faq}>
              {FAQS.map((f, i) => (
                <details key={f.q} className={styles.faqItem} open={i === 0}>
                  <summary className={styles.faqQ}>{f.q}</summary>
                  <p className={styles.faqA}>{f.a}</p>
                </details>
              ))}
            </div>
            <div className={styles.noteWrap}>
              <Note>
                <b>Module 9.</b> The geography answer is written to be honest about Sydney-first
                without contradicting the live site, which states Australia-wide coverage including
                Melbourne, Canberra and Brisbane. Worth confirming the exact approved wording.
              </Note>
            </div>
          </div>
        </section>

        {/* module 10: final CTA + form */}
        <section className={`${styles.section} ${styles.sectionLift}`} id="enquire">
          <div className={styles.shell}>
            <div className={styles.formWrap}>
              <div>
                <p className={styles.kicker}>Get started</p>
                {OFFERS.map((o) => (
                  <h2 key={o.key} className={styles.h2} data-offer={o.key}>
                    {o.heading}
                  </h2>
                ))}
                <p className={styles.lead}>
                  Two short steps. A consultant reads every enquiry — you will not be routed into an
                  automated sequence.
                </p>
                <p className={styles.caveat} data-offer="snapshot">
                  {CAVEAT}
                </p>
                <div className={styles.noteWrap}>
                  <Note>
                    <b>Module 10 — the lead event fires here, and only here.</b> The qualification
                    fields come straight from the 04/08 call sheet: company, employee count,
                    locations, current issue, decision-maker role, timeframe. Enquiry consent and
                    marketing consent are separate by design. No employee-level health or injury
                    field appears anywhere — that is a hard boundary, not a preference.
                  </Note>
                </div>
              </div>

              <div className={styles.form}>
                {/* Two-step qualification — offers A and B */}
                <div className={styles.formVariant} data-offer="qualify">
                  <div className={styles.formSteps}>
                    <span data-step="1">1 · Your organisation</span>
                    <span aria-hidden="true">/</span>
                    <span data-step="2">2 · What you need</span>
                  </div>

                  <div className={styles.stepPanel} data-step="1">
                    <div className={styles.field}>
                      <label htmlFor="org">Organisation</label>
                      <input id="org" name="org" placeholder="Company name" />
                    </div>
                    <div className={styles.fieldRow}>
                      <div className={styles.field}>
                        <label htmlFor="size">Employees</label>
                        <select id="size" name="size" defaultValue="">
                          <option value="" disabled>
                            Select
                          </option>
                          <option>Under 20</option>
                          <option>20–99</option>
                          <option>100–499</option>
                          <option>500+</option>
                        </select>
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="locations">Locations involved</label>
                        <input id="locations" name="locations" placeholder="e.g. 2 Sydney sites" />
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="role">Your role</label>
                      <input id="role" name="role" placeholder="e.g. WHS Manager" />
                    </div>
                    <div className={styles.btnRow}>
                      <label htmlFor="s-2" className={styles.btn}>
                        Continue
                      </label>
                    </div>
                  </div>

                  <div className={styles.stepPanel} data-step="2">
                    <div className={styles.field}>
                      <label htmlFor="issue">What prompted the review?</label>
                      <textarea
                        id="issue"
                        name="issue"
                        rows={3}
                        placeholder="A complaint, an office move, a hybrid rollout, a WHS obligation…"
                      />
                    </div>
                    <div className={styles.fieldRow}>
                      <div className={styles.field}>
                        <label htmlFor="timeframe">Timeframe</label>
                        <select id="timeframe" name="timeframe" defaultValue="">
                          <option value="" disabled>
                            Select
                          </option>
                          <option>As soon as possible</option>
                          <option>This quarter</option>
                          <option>Next quarter</option>
                          <option>Still researching</option>
                        </select>
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="email">Work email</label>
                        <input id="email" name="email" type="email" placeholder="you@company.com.au" />
                      </div>
                    </div>
                    <label className={styles.consent}>
                      <input type="checkbox" name="enquiry-consent" />
                      <span>I&rsquo;m happy for ErgoWorks to contact me about this enquiry.</span>
                    </label>
                    <label className={styles.consent}>
                      <input type="checkbox" name="marketing-consent" />
                      <span>
                        Optional — send me occasional workplace ergonomics guidance. You can
                        unsubscribe at any time.
                      </span>
                    </label>
                    <div className={styles.btnRow}>
                      {OFFERS.filter((o) => o.key === "review" || o.key === "snapshot").map((o) => (
                        <span key={o.key} className={styles.btn} data-offer={o.key} role="button">
                          {o.cta}
                        </span>
                      ))}
                      <label htmlFor="s-1" className={`${styles.btn} ${styles.btnGhost}`}>
                        Back
                      </label>
                    </div>
                    {/* 13 of 17 real leads arrive by phone, so the highest-intent
                        moment on the page must not be form-only. */}
                    <p className={styles.formNote}>
                      Prefer to talk it through?{" "}
                      <a className={styles.inlineLink} href="tel:1300374696">
                        Call 1300 374 696
                      </a>
                      . Mockup only — this form does not submit anywhere.
                    </p>
                  </div>
                </div>

                {/* Resource download — offer C. A qualification interview would kill it. */}
                <div className={styles.formVariant} data-offer="download">
                  <div className={styles.formSteps}>
                    <span data-step="on">Send me the checklist</span>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="dl-name">Name</label>
                    <input id="dl-name" name="dl-name" placeholder="First and last name" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="dl-org">Organisation</label>
                    <input id="dl-org" name="dl-org" placeholder="Company name" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="dl-email">Work email</label>
                    <input id="dl-email" name="dl-email" type="email" placeholder="you@company.com.au" />
                  </div>
                  <label className={styles.consent}>
                    <input type="checkbox" name="dl-marketing" />
                    <span>
                      Optional — send me occasional workplace ergonomics guidance. You can
                      unsubscribe at any time.
                    </span>
                  </label>
                  <div className={styles.btnRow}>
                    <span className={styles.btn} role="button">
                      Send me the checklist
                    </span>
                  </div>
                  <p className={styles.formNote}>Mockup only — this form does not submit anywhere.</p>
                </div>

                {/* Qualifying questionnaire — offer D */}
                <div className={styles.formVariant} data-offer="quiz">
                  <div className={styles.formSteps}>
                    <span data-step="on">Question 1 of 6</span>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="q1">What prompted you to look at this?</label>
                    <select id="q1" name="q1" defaultValue="">
                      <option value="" disabled>
                        Select one
                      </option>
                      <option>Someone has reported discomfort</option>
                      <option>A workers compensation or return-to-work matter</option>
                      <option>We are moving or changing the office</option>
                      <option>We are formalising hybrid working</option>
                      <option>A WHS obligation or audit</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="q1b">Who is this for?</label>
                    <select id="q1b" name="q1b" defaultValue="">
                      <option value="" disabled>
                        Select one
                      </option>
                      <option>A team, floor or site</option>
                      <option>Our whole organisation</option>
                      <option>Just me</option>
                    </select>
                  </div>
                  <div className={styles.btnRow}>
                    <span className={styles.btn} role="button">
                      Next question
                    </span>
                  </div>
                  <p className={styles.formNote}>
                    Mockup only — the remaining five questions are not built. Note the &ldquo;Just
                    me&rdquo; answer would route to the individual dead-end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.shell}>
        <footer className={styles.footer}>
          <span>ErgoWorks Consulting</span>
          <a className={styles.phone} href="tel:1300374696" style={{ fontSize: ".9rem" }}>
            1300 374 696
          </a>
          <span className={styles.footNote}>
            Draft mockup prepared for client review — not a live page.
          </span>
        </footer>
      </div>
    </main>
  );
}
