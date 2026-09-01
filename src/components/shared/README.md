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

## `SectionHeading`
```jsx
import SectionHeading from "../components/shared/SectionHeading.jsx";
<SectionHeading eyebrow="Practice" title="Services">Short supporting line.</SectionHeading>
```

## `Card`
```jsx
import Card from "../components/shared/Card.jsx";
<Card>Offset maroon shadow, gold border.</Card>
```

## `ServiceCard`
```jsx
import ServiceCard from "../components/shared/ServiceCard.jsx";
<ServiceCard title="HR" summary="…" to="/services/hr" icon="users" />
```

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
