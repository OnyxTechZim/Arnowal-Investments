# Plan.md — Arnowal Commodities International Website

Read this file in full before starting any task. `Tasks.md` breaks this plan into
assignable units — do not start coding from `Tasks.md` alone.

---

## 1. Project Overview

**Client:** Arnowal Commodities International (ACI)
**Deliverable:** A marketing/corporate website (React, frontend-only, no custom backend)
that explains who ACI is and what they do, and captures newsletter/lead subscribers.

**Business lines to represent on the site:**
1. Business Consultancy
2. HR (Human Resources) Services
3. Auditing
4. Marketing
5. Business Conference Hosting

**Primary goal of the site:** a visitor in under 60 seconds should understand
(a) what ACI does, (b) who it's for, and (c) how to get in touch or subscribe
for updates/conference invites.

---

## 2. Assumptions (confirm with client if wrong)

- "Save subscriber information to their Google Docs" is interpreted as **Google
  Sheets** (a spreadsheet is the correct structure for subscriber rows: name,
  email, date, source page). This will be implemented via a **Google Apps
  Script Web App** deployed on the client's Google account, called from the
  frontend with a `fetch` POST — no custom backend server required.
- No CMS is in scope for v1. All copy/content lives in structured local data
  files (e.g. `src/content/*.ts`) so a CMS can be layered in later without a
  rewrite.
- No blog/insights section in v1 unless added to Tasks.md later.
- Site is public marketing content only — no login, no gated content.

---

## 3. Tech Stack

- **Framework:** React + Vite
- **Routing:** React Router v6
- **Styling:** Tailwind CSS (utility-first, matches design tokens in §5)
- **Animation (optional, light use only):** Framer Motion
- **Forms:** native controlled React forms, no form library needed for this scale
- **Icons:** lucide-react
- **Hosting target:** static hosting (Netlify/Vercel/GitHub Pages) — build output is static files only
- **No backend, no database.** The only external call is the Google Apps
  Script Web App endpoint for subscriber capture (see §7).

---

## 4. Multi-Agent Working Agreement

Multiple coding agents will work on this project, so **file/folder ownership
must not overlap** unless a task explicitly says "coordinate."

- Each agent works only within the folders/files assigned to their task in
  `Tasks.md`.
- **Design tokens (§5) and shared components (`src/components/shared/`) are
  the single source of truth.** No agent invents its own colors, spacing, or
  button styles — import from the shared tokens/components instead.
- Any agent that needs a new shared component (used by 2+ pages) adds it to
  `src/components/shared/` and documents it in that folder's `README.md`,
  rather than duplicating it locally.
- Commit small and often, one task = one commit/PR where possible, so
  conflicts are easy to isolate.
- If a task is blocked by another agent's incomplete work, stub the
  dependency (e.g. a placeholder component or mock data) and note the TODO
  rather than waiting idle.

---

## 5. Brand & Design System

Derived from the provided logo (`LOGO.jpg` / `LOGO_png.png`) — an "AW"
monogram with a globe motif, in maroon and gold.

**Colors** (use as Tailwind theme extensions, not hardcoded hex in components):

| Token             | Hex (approx) | Usage                                  |
|-------------------|--------------|-----------------------------------------|
| `brand-maroon`     | `#8B1E3F`   | Primary brand color — headings, CTAs, accents |
| `brand-maroon-dark`| `#6B172F`   | Hover states, dark backgrounds         |
| `brand-gold`       | `#B5A56C`   | Secondary accent — icons, dividers, highlights |
| `brand-gold-light` | `#D8CDA0`   | Subtle backgrounds, borders            |
| `neutral-ink`      | `#1A1A1A`   | Body text                              |
| `neutral-white`    | `#FFFFFF`   | Backgrounds                            |
| `neutral-gray`     | `#F5F4F1`   | Section backgrounds, cards             |

Confirm exact hex values against the source logo files during setup
(Task 0.2) rather than trusting the approximations above.

**Typography:** a confident serif or slab-serif for headings (conveys the
"international consultancy" gravitas the logo implies), paired with a clean
sans-serif for body text. Example pairing: `Playfair Display` (headings) +
`Inter` (body). Load via `next/font`-equivalent self-hosted or Google Fonts
`<link>`.

**Visual motifs to echo from the logo:**
- The globe/motion-line sweep — usable as a subtle background graphic or
  section divider (not on every section — reserve for hero and footer).
- Sharp geometric angles (the "A" and "W" shapes) — informs use of angled
  section dividers or card corners, used sparingly.

See `/mnt/skills/public/frontend-design/SKILL.md` for further guidance on
avoiding generic/templated visual choices — read it before building any UI.

---

## 6. Site Architecture (Sitemap)

- `/` — **Home**: hero (who ACI is, one-line value prop), services overview
  (5 cards linking to service sections/pages), why-ACI/credibility strip,
  featured conference/CTA, subscribe form, footer.
- `/about` — company story, mission/vision, leadership (placeholder content
  if not yet supplied), global reach angle (echoes the globe logo motif).
- `/services` — overview of all 5 service lines, each with a summary card
  linking to an anchor or sub-page.
  - `/services/consultancy`
  - `/services/hr`
  - `/services/auditing`
  - `/services/marketing`
  - `/services/conferences`
  (Decide in Task 1.1 whether these are separate routes or anchored sections
  on one `/services` page — separate routes are preferred for SEO if content
  volume justifies it.)
- `/conferences` — dedicated page for business conference hosting: past/
  upcoming events, format, why attend, CTA to subscribe for invites.
- `/contact` — contact form/details + subscribe form.
- Global: subscribe capture is available in the footer on every page, not
  just `/contact`.

---

## 7. Subscriber Capture (no backend)

- A single reusable `<SubscribeForm />` component (email + optional name)
  used in the footer and on `/contact`.
- On submit, POST to a Google Apps Script Web App URL (stored in an env
  var, e.g. `VITE_SUBSCRIBE_ENDPOINT`) which appends a row to a Google Sheet
  owned by the client.
- Client-side validation only (valid email format, required field). No
  secrets or API keys belong in frontend code — the Apps Script Web App URL
  is safe to expose (it only accepts POSTs and appends rows), but document
  this clearly for the client.
- Handle and display success/error states in the UI (don't fail silently).
- Until the client provisions the real Apps Script endpoint, build against a
  mocked/stubbed endpoint so frontend work isn't blocked — see Tasks.md.

---

## 8. Non-Goals for v1

- No backend server, no database, no user accounts/login.
- No CMS integration.
- No blog/insights engine.
- No payment processing (conference "registration" in v1 is a lead-capture
  form, not a checkout flow, unless the client says otherwise).

---

## 9. Success Criteria

- Visually distinctive, on-brand (not a generic template look).
- Fully responsive (mobile, tablet, desktop).
- All 5 service lines clearly explained with distinct, non-generic copy.
- Working subscribe flow that writes to the Google Sheet.
- Passes basic accessibility checks (semantic HTML, alt text, color
  contrast against brand colors above).
- Clean `npm run build` with no console errors/warnings.
