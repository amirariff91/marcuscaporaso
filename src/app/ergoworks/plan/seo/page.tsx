import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleAlert,
  LockKeyhole,
  Search,
  ShieldCheck,
} from "lucide-react";
import styles from "../plan.module.css";

export const metadata: Metadata = {
  title: "ErgoWorks Consulting — SEO plan",
  description:
    "Private 90-day website and search review, page briefs and technical priorities for ErgoWorks Consulting.",
  robots: { index: false, follow: false },
};

/*
 * This is intentionally a server component. Keep the review copy here so it
 * remains behind the plan gate; never move these constants into a client
 * module. Effort estimates are directional and do not guarantee rankings,
 * traffic or leads.
 */

type HealthRow = {
  category: string;
  weight: string;
  score: number;
  basis: string;
};

type FixRow = {
  n: number;
  fix: string;
  where: string;
  owner: string;
  effort: string;
  impact: string;
  status: "Proposed";
};

type SerpVerdict = {
  query: string;
  verdict: string;
};

type Opportunity = {
  rank: number;
  cluster: string;
  monthlySearches: string;
  currentPosition: string;
  winningType: string;
  action: string;
  confidence: string;
};

type Brief = {
  slug: string;
  title: string;
  targetTerm: string;
  newTitle: string;
  newH1: string;
  sections: readonly string[];
  proofNeeded: readonly string[];
};

type SprintItem = {
  item: string;
  owner: string;
  effort: string;
  approval: string;
};

type Sprint = {
  sprint: number;
  window: string;
  focus: string;
  items: readonly SprintItem[];
  exit?: string;
};

const healthRows: HealthRow[] = [
  {
    category: "Content quality",
    weight: "23%",
    score: 45,
    basis:
      "Large blog-heavy site; the site ranks for only about 15 local queries; commercial page gaps remain.",
  },
  {
    category: "On-page SEO",
    weight: "20%",
    score: 55,
    basis:
      "Key pages are crawlable with self-canonicals; exact commercial targeting and page rewrites remain.",
  },
  {
    category: "Technical SEO",
    weight: "22%",
    score: 52,
    basis:
      "Robots, sitemap and canonicals work; indexable staging copies, slash variants and a missing transport-security header remain.",
  },
  {
    category: "Performance",
    weight: "10%",
    score: 55,
    basis: "Server response is roughly 0.8–1.2 seconds; no browser field measurement yet.",
  },
  {
    category: "Structured data",
    weight: "10%",
    score: 45,
    basis: "One repeated business entity on every page; page-specific service and FAQ markup is missing.",
  },
  {
    category: "AI search readiness",
    weight: "10%",
    score: 50,
    basis: "One existing citation in an AI answer is an asset; entity depth and service structure need expansion.",
  },
  {
    category: "Images",
    weight: "5%",
    score: 40,
    basis: "Most images lack descriptive alt text.",
  },
];

const fixRows: FixRow[] = [
  {
    n: 1,
    fix: "Lock down every non-production host with access control or a noindex header; redirect or retire copies.",
    where: "Non-production hosts",
    owner: "dev",
    effort: "S–M",
    impact: "Stops duplicate indexing and signal split.",
    status: "Proposed",
  },
  {
    n: 2,
    fix: "Create and verify the domain-level search property; resubmit only the current sitemap and remove the stale submission.",
    where: "Search property and sitemap",
    owner: "Greg + us",
    effort: "S",
    impact: "Restores query and index coverage for the real domain.",
    status: "Proposed",
  },
  {
    n: 3,
    fix: "Redirect every non-root trailing-slash URL to its non-slash canonical.",
    where: "Site-wide URL rules",
    owner: "dev",
    effort: "S",
    impact: "One crawlable URL per page.",
    status: "Proposed",
  },
  {
    n: 4,
    fix: "Sydney page: retitle and re-headline to the assessment phrase, add approved suburbs proof, local service schema and a fixed-form call to action.",
    where: "Sydney assessment page",
    owner: "Marcus + dev",
    effort: "M",
    impact: "Captures stated local assessment demand.",
    status: "Proposed",
  },
  {
    n: 5,
    fix: "Build a new dedicated Sydney manual-handling training page for on-site corporate delivery, with course structure and honest non-certificate positioning.",
    where: "New Sydney training page",
    owner: "Marcus + dev",
    effort: "M–L",
    impact: "Captures local training intent without certification claims.",
    status: "Proposed",
  },
  {
    n: 6,
    fix: "Rewrite the workstation-assessments page with the exact workplace phrase, risk-assessment framing, process and deliverables.",
    where: "Workstation-assessments page",
    owner: "Marcus + dev",
    effort: "M",
    impact: "Converts existing buried intent into a clear service offer.",
    status: "Proposed",
  },
  {
    n: 7,
    fix: "Strengthen the business profile and local conversion path: verify the profile link points to the main site, add service-area proof and local service schema.",
    where: "Business profile and local path",
    owner: "Greg + us",
    effort: "M",
    impact: "Improves local-pack visibility and lead confidence.",
    status: "Proposed",
  },
  {
    n: 8,
    fix: "Add contextual links from blog posts into relevant service pages with descriptive anchors.",
    where: "Blog posts and service pages",
    owner: "dev + Marcus",
    effort: "M",
    impact: "Routes existing informational visits towards enquiries.",
    status: "Proposed",
  },
  {
    n: 9,
    fix: "Add the transport-security header after confirming every kept subdomain is HTTPS-safe.",
    where: "Response headers and subdomains",
    owner: "dev",
    effort: "S",
    impact: "Removes downgrade exposure.",
    status: "Proposed",
  },
  {
    n: 10,
    fix: "Contact-form tracking: reference only — a separate fix is already in progress; do not duplicate it here.",
    where: "Main-site contact form",
    owner: "us + dev",
    effort: "In progress, out of scope",
    impact: "Current form signal loss blinds lead attribution.",
    status: "Proposed",
  },
  {
    n: 11,
    fix: "Collapse two-hop www/legacy-blog redirect chains into a single hop to the final blog URL.",
    where: "Legacy blog redirects",
    owner: "dev",
    effort: "M",
    impact: "Less crawl waste and redirect dilution.",
    status: "Proposed",
  },
  {
    n: 12,
    fix: "Permit safe public caching; review the session middleware that forces private responses.",
    where: "Brochure pages and session middleware",
    owner: "dev",
    effort: "M",
    impact: "Improves response headroom.",
    status: "Proposed",
  },
  {
    n: 13,
    fix: "Add page-type schema (service/FAQ) with one consistent business entity and service-area data.",
    where: "Priority service pages",
    owner: "dev + us",
    effort: "M",
    impact: "Clarifies service and local intent for search features.",
    status: "Proposed",
  },
  {
    n: 14,
    fix: "Replace empty or non-descriptive alt text where imagery conveys meaning; keep decorative alt empty.",
    where: "Site imagery",
    owner: "Marcus + dev",
    effort: "S",
    impact: "Accessibility and image-context gain.",
    status: "Proposed",
  },
  {
    n: 15,
    fix: "Retitle the Melbourne page to the assessment phrase on the Sydney template.",
    where: "Melbourne assessment page",
    owner: "Marcus + dev",
    effort: "S–M",
    impact: "Extends the proven local landing-page pattern.",
    status: "Proposed",
  },
];

const serpVerdicts: SerpVerdict[] = [
  {
    query: "ergonomic assessment sydney",
    verdict:
      "Dedicated local service landing pages plus the map pack win; most organic slots are held by very low-authority sites, so a matching page can win.",
  },
  {
    query: "manual handling training sydney",
    verdict:
      "Every result sells accredited courses or certificates; matching the intent framing — not authority — is the gate, and the current generic page is absent.",
  },
  {
    query: "workplace ergonomic assessment",
    verdict:
      "Hardest of the six: an AI summary, national occupational-health providers and government documents win; the site is absent.",
  },
  {
    query: "ergonomic consultant",
    verdict:
      "An AI answer already cites the client's site near the top; the rest is consultancy homepages and directories — presence is already earned.",
  },
  {
    query: "manual handling training (national)",
    verdict:
      "Online course and government e-learning pages win; a blog post, currently the site's only foothold deep in the results, cannot win this result type.",
  },
  {
    query: "corporate ergonomics consultant",
    verdict:
      "No results returned at all for this query — dead keyword; the existing corporate page should target adjacent live phrases instead.",
  },
];

const opportunities: Opportunity[] = [
  {
    rank: 1,
    cluster: "ergonomic assessment sydney",
    monthlySearches: "100/mo · difficulty 0",
    currentPosition:
      "Existing Sydney page — around position 33 in conservative reporting; position 3 is unconfirmed until domain-level reporting exists",
    winningType: "Service landing + map pack",
    action: "Retitle/re-headline to the assessment phrase, add suburbs proof, schema and a fixed-form CTA",
    confidence: "High",
  },
  {
    rank: 2,
    cluster: "manual handling training sydney",
    monthlySearches: "200/mo · difficulty 0",
    currentPosition: "Absent from the top 30",
    winningType: "Course-shaped page (certificate framing ranks even on weakest domains)",
    action: "New dedicated Sydney page — on-site corporate delivery, honest positioning, course content and FAQ schema",
    confidence: "High",
  },
  {
    rank: 3,
    cluster: "ergonomic workstation assessment",
    monthlySearches: "200/mo · difficulty 0",
    currentPosition: "Existing page buried around positions 57–61",
    winningType: "Service listing page",
    action: "Rewrite: exact phrase in title/headline, risk-assessment framing, process and deliverables",
    confidence: "High",
  },
  {
    rank: 4,
    cluster: "manual handling training near me",
    monthlySearches: "300/mo · difficulty 44",
    currentPosition: "Absent",
    winningType: "Accredited-course page + map pack",
    action: "Business profile + service-area schema on training pages; not a pure page build",
    confidence: "Medium",
  },
  {
    rank: 5,
    cluster: "manual handling training (national)",
    monthlySearches: "2,700/mo · difficulty 39",
    currentPosition: "Blog post deep in results",
    winningType: "Online course pages + government e-learning",
    action: "New national training hub + refresh the blog post to point at it; sequence after row 2",
    confidence: "Medium",
  },
  {
    rank: 6,
    cluster: "ergonomic assessment (generic)",
    monthlySearches: "400/mo · difficulty 0",
    currentPosition: "Absent (closest: Melbourne page around position 9)",
    winningType: "Mixed: AI overview + national providers",
    action: "New assessment hub page covering process and deliverables; feeds state pages",
    confidence: "Medium",
  },
  {
    rank: 7,
    cluster: "ergonomic / office risk assessment",
    monthlySearches: "50/mo + 50/mo · difficulty 0",
    currentPosition: "Absent",
    winningType: "Provider blog/service pages",
    action: "Fold both phrases into the row-3 rewrite — one page, not two",
    confidence: "Medium",
  },
  {
    rank: 8,
    cluster: "ergonomic assessment melbourne",
    monthlySearches: "150/mo · difficulty 0",
    currentPosition: "Existing Melbourne page around position 9",
    winningType: "Service landing",
    action: "Retitle on the row-1 Sydney template",
    confidence: "High",
  },
  {
    rank: 9,
    cluster: "train-the-trainer",
    monthlySearches: "50/mo",
    currentPosition: "Page exists, not in top 30",
    winningType: "Provider professionals-training page",
    action: "Retitle to the assessment-training phrase + trainer section",
    confidence: "Medium",
  },
  {
    rank: 10,
    cluster: "manual handling poster",
    monthlySearches: "150/mo · difficulty 0",
    currentPosition: "Absent",
    winningType: "Free-download page (a competitor's ranks #1)",
    action: "New email-gated download page; fits the lead goal and feeds the newsletter list",
    confidence: "Medium",
  },
  {
    rank: 11,
    cluster: "corporate health and wellness",
    monthlySearches: "70/mo · difficulty 0",
    currentPosition: "Absent",
    winningType: "Provider services page",
    action: "Section on the existing corporate landing page, not a new page",
    confidence: "Low",
  },
  {
    rank: 12,
    cluster: "assessment training for office workers",
    monthlySearches: "30/mo",
    currentPosition: "Absent",
    winningType: "Provider professionals-training page",
    action: "Blog-to-service bridge section on the assessments hub",
    confidence: "Low",
  },
];

const briefs: Brief[] = [
  {
    slug: "brief-ergonomic-assessment-sydney",
    title: "Ergonomic assessment Sydney — improve existing page /ergonomic-consultants-in-sydney",
    targetTerm: "ergonomic assessment sydney (100/mo, difficulty 0; conservative reported position 33.4)",
    newTitle: "Ergonomic Assessment Sydney | ErgoWorks Consulting",
    newH1: "Ergonomic Assessment Sydney for Workplace Teams",
    sections: [
      "Hero and direct answer",
      "What an ergonomic assessment in Sydney covers",
      "Who should arrange one",
      "How our Sydney assessment works",
      "What you receive: report and action plan",
      "Sydney areas and workplace settings we serve",
      "Assessment options for office, home and hybrid teams",
      "Why ErgoWorks Consulting",
      "Pricing, timing and scope",
      "Frequently asked questions",
      "Final CTA",
    ],
    proofNeeded: [
      "Approved Sydney suburbs and service-area wording.",
      "Assessment scope, process, report and action-plan examples.",
      "Current credentials and permission to publish any workplace proof or case evidence.",
      "Approved pricing, timing and contact-form call to action.",
    ],
  },
  {
    slug: "brief-workplace-ergonomic-assessment",
    title: "Workplace ergonomic assessment — improve existing page /ergonomic-solutions/workstation-assessments",
    targetTerm: "workplace ergonomic assessment (60/mo, difficulty 0) + required secondary: workstation assessment (50/mo)",
    newTitle: "Workplace Ergonomic Assessment | ErgoWorks Consulting",
    newH1: "Workplace Ergonomic Assessment and Workstation Assessment",
    sections: [
      "Hero and direct answer",
      "What is a workplace ergonomic assessment?",
      "Who needs one and when",
      "What a workstation assessment examines",
      "How the assessment works",
      "What the ergonomic assessment report includes",
      "On-site versus online assessment options",
      "Recommendations and implementation support",
      "Why ErgoWorks Consulting",
      "Pricing, timing and scope",
      "Frequently asked questions",
      "Final CTA",
    ],
    proofNeeded: [
      "Approved scope and boundaries for workplace and workstation assessments.",
      "On-site and online delivery modes, process steps and deliverables.",
      "Current credentials and permission to publish relevant workplace proof.",
      "Approved pricing, timing and contact-form call to action.",
    ],
  },
  {
    slug: "brief-manual-handling-training-sydney",
    title: "Manual handling training Sydney — new page /manual-handling-training-sydney",
    targetTerm: "manual handling training sydney (200/mo, difficulty 0)",
    newTitle: "Manual Handling Training Sydney | ErgoWorks Consulting",
    newH1: "Manual Handling Training Sydney for Workplace Teams",
    sections: [
      "Hero and direct answer",
      "What this manual handling training covers",
      "Who it is for and when to arrange it",
      "Why choose workplace-specific training",
      "Course structure and Sydney delivery",
      "What organisers and attendees receive",
      "What this offer is—and is not",
      "Trainer credentials and workplace proof",
      "Pricing, group size and scheduling",
      "FAQ block",
      "Final CTA",
    ],
    proofNeeded: [
      "Course content, delivery modes, group size and scheduling facts.",
      "An approved, honest boundary around certificates and what attendees receive.",
      "Current trainer credentials and permission to publish workplace proof.",
      "Approved pricing and the contact-form call to action.",
    ],
  },
];

const sprints: Sprint[] = [
  {
    sprint: 1,
    window: "Weeks 1–2",
    focus: "Technical and measurement control",
    items: [
      {
        item: "Restore a measurable main-site contact-form conversion path; test a real submission and lead receipt",
        owner: "dev",
        effort: "M",
        approval: "Marcus approves event/thank-you behaviour; Greg confirms lead routing",
      },
      {
        item: "Mark the new analytics lead events correctly; keep form-start non-key",
        owner: "us",
        effort: "S",
        approval: "Marcus approves the key-event taxonomy",
      },
      {
        item: "Verify new-site phone numbers and the call-event import/mapping",
        owner: "Greg",
        effort: "M",
        approval: "Greg confirms the provider setup; Marcus approves any mapping change",
      },
      {
        item: "Access-control or noindex every non-production host; retire duplicates where approved",
        owner: "dev",
        effort: "S–M",
        approval: "Greg/Marcus approve host retirement",
      },
      {
        item: "Exclude non-production and internal traffic from reporting without filtering the raw property",
        owner: "us",
        effort: "S",
        approval: "Marcus approves the filters",
      },
      {
        item: "Create and verify the domain-level search property; grant account access",
        owner: "Greg",
        effort: "S",
        approval: "Greg completes DNS/access approval",
      },
      {
        item: "Replace the stale sitemap submission with the current sitemap; verify it",
        owner: "us",
        effort: "S",
        approval: "Greg grants access; Marcus approves the replacement",
      },
      {
        item: "Collapse legacy blog redirect chains to one hop",
        owner: "dev",
        effort: "M",
        approval: "Marcus approves the redirect map",
      },
      {
        item: "Redirect trailing-slash variants to the non-slash canonical",
        owner: "dev",
        effort: "S–M",
        approval: "Redirect QA only",
      },
      {
        item: "Register the three lead-quality custom dimensions",
        owner: "us",
        effort: "S",
        approval: "Marcus approves names and definitions",
      },
      {
        item: "Add page-type schema to the three priority pages, one consistent business entity",
        owner: "dev",
        effort: "S",
        approval: "Greg approves business/service facts",
      },
      {
        item: "Supply descriptive alt text; leave decorative images empty",
        owner: "us",
        effort: "S",
        approval: "Marcus approves images/captions",
      },
      {
        item: "Add the transport-security header after the subdomain review; then assess policy headers",
        owner: "dev",
        effort: "M",
        approval: "Greg confirms subdomains are HTTPS-safe",
      },
      {
        item: "Allow safe public caching for brochure pages where compatible",
        owner: "dev",
        effort: "M",
        approval: "Greg approves any session trade-off",
      },
      {
        item: "Establish browser field/lab performance evidence; fix only verified bottlenecks",
        owner: "dev",
        effort: "M",
        approval: "Publish the measured baseline before further optimisation",
      },
    ],
    exit: "One indexation policy on production and retained hosts; domain search access verified; current sitemap submitted; slash and legacy redirects pass; a real form submission observable; event definitions documented; non-production traffic separated.",
  },
  {
    sprint: 2,
    window: "Weeks 3–6",
    focus: "Three priority pages and the business profile (publish only after Sprint 1 item 1 is tested)",
    items: [
      {
        item: "Rewrite the Sydney page as the assessment service/location page — keep the URL; local coverage, process, deliverables, proof, schema, CTA",
        owner: "us",
        effort: "S",
        approval: "Greg approves suburbs/credentials/case evidence; Marcus approves copy; dev deploys",
      },
      {
        item: "Build the dedicated Sydney manual-handling training page — course structure, honest certificate boundary, FAQ block, links from existing posts",
        owner: "us",
        effort: "M",
        approval: "Greg confirms course/credential facts; Marcus approves positioning",
      },
      {
        item: "Rewrite the workstation-assessments page for the workplace/workstation phrases — keep the URL",
        owner: "us",
        effort: "S",
        approval: "Greg approves scope/modes/credentials; Marcus approves copy",
      },
      {
        item: "Complete the business profile: canonical destination, service description, approved service area, categories, photos, review language",
        owner: "Marcus",
        effort: "S",
        approval: "Greg, as profile owner, approves all profile content",
      },
    ],
    exit: "Each page: one primary query, one canonical URL, approved proof, visible CTA to the contact form, valid schema, internal links and tested conversion event. No success claims until domain-level reporting exists.",
  },
  {
    sprint: 3,
    window: "Weeks 7–12",
    focus: "National manual-handling hub and blog cleanup (after the Sydney page, so local and national intent stay distinct)",
    items: [
      {
        item: "Expand the national manual-handling page into the training hub — course structure, delivery modes, audiences, proof, boundaries, FAQs, link to Sydney page",
        owner: "us",
        effort: "M–L",
        approval: "Greg confirms course facts; Marcus approves national positioning",
      },
      {
        item: "Refresh the definitive manual-handling guide and point it to the national hub",
        owner: "us",
        effort: "M",
        approval: "Greg approves safety/legal wording; Marcus approves the refresh",
      },
      {
        item: "Consolidate overlapping manual-handling posts with contextual links by intent",
        owner: "us",
        effort: "M",
        approval: "Marcus approves merge targets and anchors; Greg approves factual updates",
      },
      {
        item: "Audit dead/duplicate/obsolete 2015–2019 blog URLs; redirect only to genuinely relevant successors; remove from sitemap; deliberate status where no successor exists",
        owner: "dev",
        effort: "M–L",
        approval: "Marcus approves the redirect map; Greg approves retirements",
      },
      {
        item: "Re-crawl the final sitemap; validate redirects/canonicals/schema; compare enquiry reporting after the cluster is live",
        owner: "us",
        effort: "S",
        approval: "Marcus receives the report",
      },
    ],
  },
];

const guardrails = [
  "No link buying; no AI-spun blog volume.",
  "Do not build pages for the dead keyword or fragment the assessment cluster into unsupported suburb/synonym pages.",
  "No promises of rankings, leads, injury reduction, productivity, compliance or other outcomes; publish only approved evidence and current credentials.",
  "Do not report a page as converting until the form event is tested in the repaired path.",
  "Never redirect a dead URL to the homepage just to clear a 404; use a relevant successor or a deliberate retirement.",
] as const;

function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: ReactNode }) {
  return (
    <div className={styles.sectionHeading}>
      <p>{label}</p>
      <h2>{title}</h2>
      {copy ? <span>{copy}</span> : null}
    </div>
  );
}

export default function SeoReviewPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Document information">
          <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
          <div className={styles.private}><LockKeyhole size={14} /> Private &amp; confidential</div>
        </nav>

        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>ErgoWorks Consulting · Our analyst&apos;s snapshot · 2 September 2026</p>
            <h1>Website &amp; search review</h1>
            <p className={styles.heroCopy}>
              <strong>[Interpretation]</strong> Restore measurement first, then match the three priority pages to demand, then build the training cluster. The goal is qualified enquiries, not traffic volume.
            </p>
          </div>

          <aside className={styles.summary}>
            <p>Review snapshot</p>
            <h2>A clear repair order, not a traffic promise.</h2>
            <ul>
              <li><Check size={17} /> Weighted health estimate: 50/100.</li>
              <li><Search size={17} /> The site ranks for about 15 local queries — the immediate task is to exist, not improve positions.</li>
              <li><ShieldCheck size={17} /> The form fix comes before conclusions about page or lead impact.</li>
              <li><ArrowRight size={17} /> Three priority pages match clear demand before wider topic-cluster work.</li>
            </ul>
          </aside>
        </div>

        <a className={styles.scrollCue} href="#health"><ArrowDown size={17} /> Read the health position</a>
      </header>

      <section className={styles.docSection} id="health">
        <SectionHeading
          label="Health score · [Interpretation]"
          title="50/100: enough signal to set an order of work."
          copy="This is a weighted estimate from the rubric and crawl evidence, not a field-performance score. There is no usable browser field dataset yet, so the score is a planning baseline rather than a claim about user experience."
        />

        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p><strong>Overall score: 50/100.</strong> The technical base is workable. The immediate constraint is the combination of thin commercial coverage, incomplete measurement and indexable non-production copies.</p>
        </div>

        <div className={styles.tableScroll}>
          <table>
            <caption>Seven-category health score · weighted estimate</caption>
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Weight</th>
                <th scope="col">Score</th>
                <th scope="col">Basis</th>
              </tr>
            </thead>
            <tbody>
              {healthRows.map((row) => (
                <tr key={row.category}>
                  <th scope="row" data-label="Category">{row.category}</th>
                  <td data-label="Weight">{row.weight}</td>
                  <td data-label="Score"><strong>[Interpretation]</strong> {row.score}/100</td>
                  <td data-label="Basis">{row.basis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="fixes">
        <SectionHeading
          label="Priority checklist · [Proposed]"
          title="Fix the surface before asking it to carry more demand."
          copy="These are the fifteen proposed fixes in working order. Owners and effort are directional; status stays Proposed until the relevant approval is made."
        />

        <div className={styles.tableScroll}>
          <table>
            <caption>Top 15 fixes · every row is proposed</caption>
            <thead>
              <tr>
                <th scope="col">Issue</th>
                <th scope="col">Where</th>
                <th scope="col">Owner</th>
                <th scope="col">Effort</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {fixRows.map((row) => (
                <tr key={row.n}>
                  <th scope="row" data-label="Issue">
                    <span aria-hidden="true">[ ]</span> <span>#{row.n} {row.fix}</span>
                    <small style={{ display: "block", marginTop: ".4rem", fontWeight: 400 }}>{row.impact}</small>
                  </th>
                  <td data-label="Where">{row.where}</td>
                  <td data-label="Owner">{row.owner}</td>
                  <td data-label="Effort">{row.effort}</td>
                  <td data-label="Status"><strong>{row.status}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.calloutRow}>
          <CircleAlert size={20} />
          <p><strong>Sequence rule.</strong> Rows 1–3 of the opportunity table only convert if the form fix lands first.</p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="serps">
        <SectionHeading
          label="Search-result reading · [Verified] / [Interpretation]"
          title="What Google shows"
          copy="Each line is a one-line reading of the result type and the page needed to meet it. It is not a forecast of traffic or leads."
        />

        <div className={styles.prose}>
          <ul>
            {serpVerdicts.map((row) => (
              <li key={row.query}><strong>{row.query}</strong> — {row.verdict}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.docSection} id="opportunities">
        <SectionHeading
          label="Demand map · [Verified] / [Interpretation]"
          title="The near-term opportunity is to exist with the right page."
          copy="The site's entire local keyword footprint is about 15 queries. Domain strength is not the barrier — pages with none rank when intent matches. The demand values are directional search-data estimates, not outcome promises."
        />

        <div className={styles.tableScroll}>
          <table>
            <caption>Opportunity table · ordered by fit and confidence</caption>
            <thead>
              <tr>
                <th scope="col">Cluster</th>
                <th scope="col">Monthly searches</th>
                <th scope="col">Current position</th>
                <th scope="col">Winning page type</th>
                <th scope="col">Recommended action</th>
                <th scope="col">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {opportunities.map((row) => (
                <tr key={row.rank}>
                  <th scope="row" data-label="Cluster">{row.rank}. {row.cluster}</th>
                  <td data-label="Monthly searches">{row.monthlySearches}</td>
                  <td data-label="Current position">{row.currentPosition}</td>
                  <td data-label="Winning page type">{row.winningType}</td>
                  <td data-label="Recommended action">{row.action}</td>
                  <td data-label="Confidence">{row.confidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.calloutRow}>
          <Check size={20} />
          <p><strong>Friday deliverable.</strong> Rows 1–3 are the zero-difficulty page opportunities to take first. They only convert if the form-tracking fix lands first.</p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="briefs">
        <SectionHeading
          label="Page briefs · [Proposed]"
          title="Three pages, each with one job."
          copy="Open each brief for the proposed title, H1, section outline and the proof our analyst needs before publication."
        />

        <div className={styles.prose} style={{ maxWidth: "none" }}>
          {briefs.map((brief) => (
            <details key={brief.slug} style={{ borderTop: "1px solid var(--line)", padding: "1.2rem 0" }}>
              <summary style={{ cursor: "pointer", lineHeight: 1.5 }}>
                <strong>{brief.title}</strong> — {brief.targetTerm}
              </summary>
              <div style={{ paddingTop: ".9rem" }}>
                <p><strong>Target term:</strong> {brief.targetTerm}</p>
                <p><strong>Proposed title:</strong> {brief.newTitle}</p>
                <p><strong>Proposed H1:</strong> {brief.newH1}</p>
                <h3>Section outline</h3>
                <ul>
                  {brief.sections.map((section) => <li key={section}>{section}</li>)}
                </ul>
                <h3>Proof needed from client</h3>
                <ul>
                  {brief.proofNeeded.map((proof) => <li key={proof}>{proof}</li>)}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.docSection} id="roadmap">
        <SectionHeading
          label="90-day roadmap · [Proposed]"
          title="Restore the signal, match the pages, then build the cluster."
          copy="The sequence protects interpretation. No page or lead impact is reported while successful form submissions are unmeasured."
        />

        <div className={styles.roadmap}>
          {sprints.map((sprint) => (
            <article key={sprint.sprint}>
              <div className={styles.phaseHead}><span><Search size={18} /></span><b>0{sprint.sprint}</b></div>
              <h3>{sprint.focus}</h3>
              <p className={styles.hubCardCopy}>{sprint.window}</p>
              <div className={styles.tableScroll}>
                <table>
                  <caption>Items, owners, effort and approval</caption>
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Owner</th>
                      <th scope="col">Effort</th>
                      <th scope="col">Approval</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sprint.items.map((item) => (
                      <tr key={item.item}>
                        <th scope="row" data-label="Item">{item.item}</th>
                        <td data-label="Owner">{item.owner}</td>
                        <td data-label="Effort">{item.effort}</td>
                        <td data-label="Approval">{item.approval}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {sprint.exit ? <p className={styles.hubCardCopy}><strong>Exit check:</strong> {sprint.exit}</p> : null}
            </article>
          ))}
        </div>

        <div className={styles.calloutRow}>
          <ShieldCheck size={20} />
          <p><strong>Sequence rule.</strong> Form and analytics fixes come first; do not report page or lead impact while successful form submissions are unmeasured.</p>
        </div>
      </section>

      <section className={`${styles.docSection} ${styles.alt}`} id="guardrails">
        <SectionHeading
          label="Boundaries · [Assumption]"
          title="What we will not do"
          copy="The plan is deliberately narrow. It earns expansion through approved proof and trustworthy measurement rather than volume for its own sake."
        />
        <div className={styles.prose}>
          <p><strong>90-day goal:</strong> Restore trustworthy measurement, make the three priority service pages match demand, then build the manual-handling topic cluster.</p>
          <ul>
            {guardrails.map((guardrail) => <li key={guardrail}>{guardrail}</li>)}
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}><span>EW</span> ErgoWorks Consulting</div>
        <p><CircleAlert size={13} style={{ verticalAlign: "-2px", marginRight: ".4rem" }} />Confidential · For client review only · Planning authorisation only</p>
      </footer>
    </main>
  );
}
