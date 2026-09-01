/** Subtle globe / orbital sweep — reserved for hero and footer (Plan.md §5). */
export default function GlobeMotif({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="200" cy="200" rx="118" ry="118" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="200" cy="200" rx="118" ry="48" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="200" cy="200" rx="48" ry="118" stroke="currentColor" strokeWidth="1" />
      <path
        d="M20 250C90 140 220 90 380 160"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M30 300C140 250 250 270 390 210"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
