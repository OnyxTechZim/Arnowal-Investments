import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-heading text-4xl text-brand-maroon">Page not found</h1>
      <p className="mt-4">That URL is not in the site map.</p>
      <Link className="mt-6 inline-block font-semibold text-brand-maroon underline decoration-brand-gold" to="/">
        Back to home
      </Link>
    </div>
  );
}
