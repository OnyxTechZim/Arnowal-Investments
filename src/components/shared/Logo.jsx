import logoSrc from "../../assets/logo.jpg";

/**
 * Raster wordmark from the supplied logo files (no SVG source was available).
 * Uses the white-background JPG so it reads on light headers.
 */
export default function Logo({ className = "h-14 w-auto", decorative = false }) {
  return (
    <img
      src={logoSrc}
      alt={decorative ? "" : "Arnowal Commodities International"}
      className={className}
      width={280}
      height={198}
    />
  );
}
