import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-brand-maroon text-neutral-white hover:bg-brand-maroon-dark focus-visible:ring-brand-gold",
  secondary:
    "border border-brand-gold bg-transparent text-brand-maroon hover:bg-brand-gold-light/40 focus-visible:ring-brand-maroon",
  light:
    "bg-neutral-white text-brand-maroon hover:bg-brand-gold-light focus-visible:ring-brand-gold",
  outlineLight:
    "border border-neutral-white/60 bg-transparent text-neutral-white hover:bg-neutral-white/10 focus-visible:ring-brand-gold",
};

export default function Button({
  children,
  variant = "primary",
  to,
  type = "button",
  disabled,
  className = "",
  ...rest
}) {
  const classes = `inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide uppercase clip-path-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} {...rest}>
      {children}
    </button>
  );
}
