# Tasks.md — Arnowal Commodities International Website

Read `Plan.md` in full first — it defines the tech stack, brand system,
sitemap, and multi-agent working rules referenced below. Do not skip it.

Each task below has an ID, a suggested owning agent slot, dependencies, and
acceptance criteria. Claim a task by writing your agent name/ID next to
"Owner" before starting, to avoid duplicate work.

---

## Phase 0 — Project Setup (blocks everything else)

### Task 0.1 — Repo scaffold  [x] (completed manually; Cursor agent verified)
**Owner:** Agent A
**Depends on:** none
- Initialize Vite + React project.
- Install and configure Tailwind CSS, React Router, lucide-react.
- Set up folder structure:
  ```
  src/
    components/shared/
    components/sections/
    pages/
    content/
    assets/
    lib/
  ```
- Add `.env.example` with `VITE_SUBSCRIBE_ENDPOINT=`.
- **Acceptance:** `npm run dev` runs a blank page with no errors; folder
  structure matches above.
- **Notes:** `.env.example` was missing at verification; added during Task 0.2.

### Task 0.2 — Design tokens  [x] (Cursor agent)
**Owner:** Agent A
**Depends on:** 0.1
- Extract exact colors from `LOGO.jpg`/`LOGO_png.png` (confirm against §5 of
  Plan.md — adjust the approximate hex values to the true sampled colors).
- Add all tokens from Plan.md §5 to `tailwind.config.js` theme extension.
- Load and configure the chosen heading/body font pairing.
- Add the logo files to `src/assets/` and export a `<Logo />` component
  (SVG preferred; convert if only raster is available).
- **Acceptance:** tokens usable as Tailwind classes (e.g. `bg-brand-maroon`);
  `<Logo />` renders in a test page.
- **Notes:** Sampled maroon `#982040` and gold `#B0A888` from logo pixel buckets.
  Tailwind v4 uses `@theme` in `src/index.css` (no `tailwind.config.js`). Raster
  `<Logo />` (no SVG source). Fonts: Playfair Display + Inter. Preview in `App.jsx`
  until Task 0.3 replaces it.

### Task 0.3 — Routing shell  [x] (Cursor agent)
**Owner:** Agent A
**Depends on:** 0.1
- Set up React Router with all routes from Plan.md §6 (stub pages with a
  placeholder heading each).
- **Acceptance:** every route in the sitemap navigates without a 404/blank
  screen.
- **Notes:** Full pages shipped in the same pass as Phase 2 rather than leaving
  heading-only stubs.

---

## Phase 1 — Shared Components

### Task 1.1 — Decide services routing structure  [x] (Cursor agent)
**Owner:** Agent A (decision) — document the answer at the top of
`src/content/services.ts`
**Depends on:** 0.3
- Decide: separate routes per service (`/services/hr`, etc.) vs anchored
  sections on one `/services` page. Default recommendation: separate routes.
- **Acceptance:** decision documented; routing updated to match if changed
  from the Task 0.3 stub.
- **Notes:** Separate routes. Documented in `src/content/services.js` (JS
  scaffold, not `.ts`). Used Plan.md default rather than blocking.

### Task 1.2 — Layout components  [x] (Cursor agent)
**Owner:** Agent B
**Depends on:** 0.2, 0.3
- Build `<Navbar />` (logo + links to all top-level pages, mobile menu),
  `<Footer />` (contact info, service links, `<SubscribeForm />` slot, social
  links placeholder), `<PageLayout />` wrapper.
- **Acceptance:** Navbar/Footer render on every route via `PageLayout`;
  mobile menu works at narrow viewport widths.

### Task 1.3 — Reusable UI primitives  [x] (Cursor agent)
**Owner:** Agent B
**Depends on:** 0.2
- Build in `src/components/shared/`: `<Button />` (primary/secondary
  variants using brand colors), `<SectionHeading />`, `<Card />`,
  `<ServiceCard />` (icon + title + summary + link).
- Document each in `src/components/shared/README.md` with a one-line usage
  example.
- **Acceptance:** each component has at least one usage in a stub page;
  visually matches brand system in Plan.md §5, not generic/default Tailwind
  styling.

### Task 1.4 — SubscribeForm component  [x] (Cursor agent)
**Owner:** Agent B
**Depends on:** 0.2
- Build `<SubscribeForm />`: email (required) + name (optional) fields,
  client-side validation, loading/success/error states.
- POST to `import.meta.env.VITE_SUBSCRIBE_ENDPOINT`. If the env var is
  unset, fall back to a mocked async function that logs the payload and
  resolves success, so the UI is fully testable before the real endpoint
  exists.
- **Acceptance:** submitting with an invalid email shows an inline error;
  valid submit shows a success state; component works standalone (used in
  Footer and on `/contact`).
- **Notes:** Mock clearly labelled in UI when env is unset (`src/lib/subscribe.js`).

---

## Phase 2 — Page Content

Each page task can be built by a different agent in parallel once Phase 1 is
merged. All copy should be written from scratch to reflect ACI's actual
service lines — do not use lorem ipsum in the final version; placeholder
copy is acceptable only as an intermediate commit.

### Task 2.1 — Home page  [x] (Cursor agent)
**Owner:** Agent C
**Depends on:** 1.2, 1.3, 1.4
- Hero section (headline + one-line value prop + primary CTA).
- Services overview: 5 `<ServiceCard />`s (Consultancy, HR, Auditing,
  Marketing, Conferences), each linking per the Task 1.1 decision.
- Credibility strip (e.g. "why ACI" — global reach, cross-sector expertise —
  echo the globe motif from the logo here, per Plan.md §5).
- Featured conference / CTA banner.
- Subscribe section (uses `<SubscribeForm />`).
- **Acceptance:** all sections present, responsive, uses only shared
  components/tokens (no one-off colors).

### Task 2.2 — About page  [x] (Cursor agent)
**Owner:** Agent C
**Depends on:** 1.2, 1.3
- Company story, mission/vision, leadership section (use clearly-marked
  placeholder bios/photos if real ones aren't supplied — flag this for the
  client rather than inventing fake credentials).
- **Acceptance:** page complete, responsive, no invented factual claims
  about the company presented as real.
- **Notes:** Leadership cards marked `[PLACEHOLDER — client to supply]`.

### Task 2.3 — Services pages (Consultancy, HR, Auditing, Marketing)  [x] (Cursor agent)
**Owner:** Agent D
**Depends on:** 1.1, 1.2, 1.3
- One page/section per service line (per Task 1.1's routing decision).
- Each needs: what the service covers, who it's for, why ACI (differentiator),
  a CTA (contact or subscribe).
- Write **distinct** copy per service — avoid template repetition where only
  the noun changes.
- **Acceptance:** 4 services pages complete; each reads as substantively
  different content, not find-and-replace of the same paragraph.
- **Notes:** Conferences service page is `/services/conferences` in addition
  to the four named here.

### Task 2.4 — Conferences page  [x] (Cursor agent)
**Owner:** Agent D
**Depends on:** 1.1, 1.2, 1.3, 1.4
- Explain the conference-hosting offering: format, audience, past/upcoming
  events (placeholder data if none supplied), why attend.
- CTA to subscribe for conference invites (`<SubscribeForm />`).
- **Acceptance:** page complete, responsive, subscribe form functional.
- **Notes:** Event rows are flagged placeholders — no invented history.

### Task 2.5 — Contact page  [x] (Cursor agent)
**Owner:** Agent C
**Depends on:** 1.2, 1.3, 1.4
- Contact details (address/phone, email — placeholder if not supplied,
  clearly flagged for client to fill in), `<SubscribeForm />`.
- **Acceptance:** page complete, responsive.
- **Notes:** Address/phone/email are explicit placeholders.

---

## Phase 3 — Integration & Content Data

### Task 3.1 — Structured content extraction  [x] (Cursor agent)
**Owner:** Agent A or whoever finishes Phase 1 first
**Depends on:** Phase 2 pages using inline copy initially
- Move all page copy (headings, body text, service descriptions) out of
  components and into `src/content/*.ts` typed data files, so content edits
  don't require touching component code.
- **Acceptance:** pages import content from `src/content/`, not hardcoded
  strings in JSX (aside from labels/UI chrome).
- **Notes:** Written as `src/content/*.js` to match the JS Vite scaffold
  (no TypeScript in package.json). Copy lived in content files from the start
  rather than a second extract pass.

### Task 3.2 — Google Sheets endpoint wiring  [ ] blocked
**Owner:** whichever agent has the client's Apps Script Web App URL
**Depends on:** 1.4
- Once the client provisions the real Google Apps Script Web App (deployed
  from a Sheet they own), set `VITE_SUBSCRIBE_ENDPOINT` and remove/bypass
  the Task 1.4 mock.
- Verify a real test submission appears as a new row in the Sheet.
- **Acceptance:** end-to-end test: submit form → row appears in the Sheet
  with correct columns (name, email, timestamp, source page).
- **Notes:** Blocked — no Web App URL yet. Mock remains in `src/lib/subscribe.js`.

---

## Phase 4 — QA & Polish

### Task 4.1 — Responsive & cross-browser pass  [~] (Cursor agent)
**Owner:** any agent, after Phase 2 complete
**Depends on:** Phase 2
- Check all pages at mobile/tablet/desktop breakpoints.
- **Acceptance:** no overflow/broken layouts at 375px, 768px, 1440px widths.

### Task 4.2 — Accessibility pass  [~] (Cursor agent)
**Owner:** any agent, after Phase 2 complete
**Depends on:** Phase 2
- Semantic HTML (proper heading hierarchy, nav landmarks), alt text on all
  images/logo, color contrast check on brand-maroon/gold against
  backgrounds, keyboard navigability of nav + forms.
- **Acceptance:** no critical issues from an axe/Lighthouse accessibility
  scan.

### Task 4.3 — Build & deploy check
**Owner:** Agent A
**Depends on:** all above
- `npm run build` clean with no errors/warnings.
- Deploy to chosen static host; verify all routes work on the deployed URL
  (not just dev server).
- **Acceptance:** live URL matches local behavior for every route.
- **Notes:** `public/_redirects` (Netlify) and `vercel.json` added for SPA
  fallback. Live deploy not done — host not chosen. GitHub Pages would need
  extra 404 fallback or HashRouter.

---

## Task Status Legend
Mark each task as you go: `[ ]` not started · `[~]` in progress · `[x]` done.
Add the marker and your agent ID inline when you claim/complete a task, e.g.:
`### Task 2.1 — Home page  [~] (Agent C, started)`
