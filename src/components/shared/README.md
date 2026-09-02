# Shared components

All visual primitives live here. Pages must not invent new colors — use brand Tailwind tokens (`bg-brand-maroon`, `text-brand-gold`, `bg-neutral-gray`, etc.).

## `Logo`
```jsx
import Logo from "../components/shared/Logo.jsx";
<Logo className="h-14 w-auto" />
```

## `Button`
```jsx
import Button from "../components/shared/Button.jsx";
<Button to="/contact">Contact</Button>
<Button variant="secondary" type="submit">Subscribe</Button>
```
Variants: `primary` (default), `secondary`, `light` / `outlineLight` (for use
on dark or image backgrounds, e.g. the home hero).

## `SectionHeading`
```jsx
import SectionHeading from "../components/shared/SectionHeading.jsx";
<SectionHeading eyebrow="Practice" title="Services">Short supporting line.</SectionHeading>
<SectionHeading as="h1" eyebrow="About ACI" title="The practice" />
```
`as` sets the heading tag (default `h2`). Use `as="h1"` for the lead heading
on a page so every route has exactly one `<h1>`. `tone="onDark"` for dark
backgrounds; `align="center"`.

## `Card`
```jsx
import Card from "../components/shared/Card.jsx";
<Card>Offset maroon shadow, gold border.</Card>
```

## `ServiceCard`
```jsx
import ServiceCard from "../components/shared/ServiceCard.jsx";
import { serviceImages } from "../content/media.js";
<ServiceCard title="HR" summary="…" to="/services/hr" icon="users"
  image={serviceImages.hr} headingLevel="h2" />
```
The whole card is one link. `image` is `{ src, alt }` (optional — falls back to
an icon-only card). `headingLevel` defaults to `h3`; use `h2` when cards sit
directly under the page `h1` (e.g. `/services`).

## `Reveal`
```jsx
import Reveal from "../components/shared/Reveal.jsx";
<Reveal delay={90} as="section">…fades/lifts in on scroll…</Reveal>
```
CSS-only animation, gated behind `prefers-reduced-motion` (reduced-motion
viewers see content immediately, no motion). `delay` in ms for stagger.

## `Figure`
```jsx
import Figure from "../components/shared/Figure.jsx";
<Figure src={media.boardroom} alt="…" ratio="21 / 9" wash caption="…" />
```
Brand-framed image with slow zoom-on-hover. `wash` adds a maroon tint;
`priority` loads eagerly (default lazy).

## `Gallery`
```jsx
import Gallery from "../components/shared/Gallery.jsx";
import { conferenceGallery } from "../content/media.js";
<Gallery items={conferenceGallery} />
```
Responsive grid + lightbox (Esc / arrows / backdrop to dismiss). `items` is
`[{ src, alt }]`.

## `SubscribeForm`
```jsx
import SubscribeForm from "../components/shared/SubscribeForm.jsx";
<SubscribeForm source="contact" />
```
POSTs to `VITE_SUBSCRIBE_ENDPOINT`, or mocks (console) when unset.

## `Navbar` / `Footer` / `PageLayout`
Used by the router layout — do not nest a second `PageLayout` inside a page.

## `GlobeMotif`
Decorative SVG for hero and footer only.

## Imagery
All photos are registered in `src/content/media.js` (keeps content data files
text-only). Sources + licensing + pre-launch client actions are in
`src/assets/images/CREDITS.md`.
