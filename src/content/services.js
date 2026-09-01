/**
 * Task 1.1 — services routing decision
 *
 * Choice: separate routes per service line, not anchored sections on /services.
 *
 * Routes:
 *   /services                 overview of all five lines
 *   /services/consultancy
 *   /services/hr
 *   /services/auditing
 *   /services/marketing
 *   /services/conferences
 *
 * Why: Plan.md §6 prefers this when copy volume justifies it. Each line has
 * distinct audience, deliverables, and CTA framing, so dedicated URLs are
 * better for SEO and sharing than a single long page with hash links.
 */
export const SERVICES_ROUTING = "separate-routes";

export const services = [
  {
    slug: "consultancy",
    path: "/services/consultancy",
    title: "Business Consultancy",
    navLabel: "Consultancy",
    icon: "compass",
    summary:
      "Decision support for operators who need a clear commercial path — market entry, operating model, and the sequence of moves that actually get funded.",
    covers: [
      "Market-entry and expansion planning across new geographies and product lines",
      "Operating-model design: who decides, who executes, what gets measured",
      "Board-ready commercial cases, not slide decks that die in the inbox",
    ],
    whoFor:
      "Founders, family businesses, and mid-market operators who have outgrown informal decision-making and need an outside view that still understands how capital and people actually move.",
    whyAci:
      "ACI sits at the intersection of advisory and execution. We do not stop at a recommendation; we stay long enough to see whether the operating cadence we proposed is being used.",
    cta: "Talk through a live commercial problem",
  },
  {
    slug: "hr",
    path: "/services/hr",
    title: "HR Services",
    navLabel: "HR",
    icon: "users",
    summary:
      "People systems that match the business you are trying to run — hiring, structure, and performance — without importing a corporate HR template that does not fit.",
    covers: [
      "Role design and hiring plans tied to the next 12–18 months of growth",
      "Performance and reward frameworks that managers will actually use",
      "Workforce policies that hold up under audit and under real disputes",
    ],
    whoFor:
      "Leadership teams that know they are under-structured on people, but do not want a full in-house HR department yet — or have one that is firefighting instead of building.",
    whyAci:
      "HR work here is treated as an operating system, not a compliance afterthought. We design for the conference floor, the warehouse, and the board table — not only the employee handbook.",
    cta: "Map your people bottlenecks",
  },
  {
    slug: "auditing",
    path: "/services/auditing",
    title: "Auditing",
    navLabel: "Auditing",
    icon: "clipboard-check",
    summary:
      "Independent reviews of process, control, and commercial reporting so leadership can see what is real before a lender, regulator, or partner asks.",
    covers: [
      "Process and internal-control reviews for growing operations",
      "Readiness work ahead of external audit, financing, or a new partnership",
      "Findings written for operators: what is broken, what it costs, what to fix first",
    ],
    whoFor:
      "Finance leads and owners who need a second set of eyes before numbers leave the building — and teams that have outgrown spreadsheet-only control.",
    whyAci:
      "The audit workstream is built to feed consultancy and conference conversations, not to sit in a PDF graveyard. Findings are sequenced by commercial risk, not by checklist order.",
    cta: "Request an audit scoping conversation",
  },
  {
    slug: "marketing",
    path: "/services/marketing",
    title: "Marketing",
    navLabel: "Marketing",
    icon: "megaphone",
    summary:
      "Positioning and campaign work for businesses that sell expertise, not impulse — so the right buyers can find you before a competitor defines the category.",
    covers: [
      "Offer and message architecture for consultancy, HR, and audit practices",
      "Conference and event marketing that fills rooms with the intended audience",
      "Digital presence that matches the gravity of an international practice, not a template landing page",
    ],
    whoFor:
      "Professional-services firms and commodity-adjacent operators whose expertise is strong and whose public story is still generic.",
    whyAci:
      "We market the same kind of firm we are. Copy, visual system, and channel mix are built around trust and invitation — subscribe, attend, brief — not vanity metrics.",
    cta: "Review your current positioning",
  },
  {
    slug: "conferences",
    path: "/services/conferences",
    title: "Business Conference Hosting",
    navLabel: "Conferences",
    icon: "globe",
    summary:
      "End-to-end hosting of business conferences: programme design, speaker flow, and the operational detail that makes an international room feel deliberate.",
    covers: [
      "Programme architecture: who speaks, in what order, and why the room should stay",
      "Host operations: venue cadence, attendee flow, and on-the-day stewardship",
      "Invite and follow-up sequences that turn a one-day room into a working network",
    ],
    whoFor:
      "Industry groups, chambers, and firms that want to convene buyers and operators — and need a host that treats the event as a commercial instrument, not a catering order.",
    whyAci:
      "Hosting sits alongside ACI’s advisory lines, so the room is programmed with the same questions our clients bring: capital, people, control, and market access.",
    cta: "Discuss hosting a conference",
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) ?? null;
}
