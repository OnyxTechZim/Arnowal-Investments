import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button.jsx";
import { isValidEmail, submitSubscribe } from "../../lib/subscribe.js";

export default function SubscribeForm({ source }) {
  const location = useLocation();
  const sourcePage = source ?? location.pathname;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");
  const fieldId = sourcePage.replace(/\W+/g, "-") || "page";

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setStatus("loading");
    try {
      await submitSubscribe({ name, email, source: sourcePage });
      setStatus("success");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="border border-brand-gold bg-brand-gold-light/40 px-4 py-3 text-sm" role="status">
        You are on the list. We will only write when there is something worth an invite.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3" noValidate>
      <div>
        <label htmlFor={`sub-name-${fieldId}`} className="block text-xs font-semibold uppercase tracking-wider">
          Name <span className="font-normal normal-case tracking-normal text-neutral-ink/60">(optional)</span>
        </label>
        <input
          id={`sub-name-${fieldId}`}
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full border border-brand-gold-light bg-neutral-white px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none focus:ring-1 focus:ring-brand-maroon"
        />
      </div>
      <div>
        <label htmlFor={`sub-email-${fieldId}`} className="block text-xs font-semibold uppercase tracking-wider">
          Email
        </label>
        <input
          id={`sub-email-${fieldId}`}
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `sub-email-error-${fieldId}` : undefined}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          className="mt-1 w-full border border-brand-gold-light bg-neutral-white px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none focus:ring-1 focus:ring-brand-maroon"
        />
        {error ? (
          <p id={`sub-email-error-${fieldId}`} className="mt-1 text-sm text-brand-maroon" role="alert">
            {error}
          </p>
        ) : null}
      </div>
      {status === "error" ? (
        <p className="text-sm text-brand-maroon" role="alert">
          Something went wrong. Try again, or use the contact details on this page.
        </p>
      ) : null}
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Subscribe"}
      </Button>
      {!import.meta.env.VITE_SUBSCRIBE_ENDPOINT ? (
        <p className="text-xs text-neutral-ink/50">
          Endpoint not wired — submissions are mocked in the browser console until{" "}
          <code>VITE_SUBSCRIBE_ENDPOINT</code> is set.
        </p>
      ) : null}
    </form>
  );
}
