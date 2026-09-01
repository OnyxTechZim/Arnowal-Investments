export default function Card({ children, className = "" }) {
  return (
    <div
      className={`border border-brand-gold-light bg-neutral-white p-6 shadow-[4px_4px_0_0_var(--color-brand-maroon)] ${className}`}
    >
      {children}
    </div>
  );
}
