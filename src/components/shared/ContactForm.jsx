import { useState } from "react";
import Button from "./Button.jsx";
import { isValidEmail, submitContactMessage } from "../../lib/contactForm.js";

const inputClass =
  "mt-1 w-full border border-brand-gold-light bg-neutral-white px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none focus:ring-1 focus:ring-brand-maroon";
const labelClass = "block text-xs font-semibold uppercase tracking-wider";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    if (!firstName.trim() || !lastName.trim()) {
      setError("Enter your first and last name.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      setError("Enter a message.");
      return;
    }
    setStatus("loading");
    try {
      await submitContactMessage({ firstName, lastName, email, phone, message });
      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="border border-brand-gold bg-brand-gold-light/40 px-4 py-3 text-sm" role="status">
        Message sent. We will get back to you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <span className={labelClass}>Name</span>
        <div className="mt-1 grid grid-cols-2 gap-3">
          <input
            aria-label="First name"
            placeholder="First"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`${inputClass} mt-0`}
          />
          <input
            aria-label="Last name"
            placeholder="Last"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`${inputClass} mt-0`}
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "contact-form-error" : undefined}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className={labelClass}>
          Phone <span className="font-normal normal-case tracking-normal text-neutral-ink/60">(optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (error) setError("");
          }}
          className={`${inputClass} resize-y`}
        />
      </div>
      {error ? (
        <p id="contact-form-error" className="text-sm text-brand-maroon" role="alert">
          {error}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-brand-maroon" role="alert">
          Something went wrong. Try again, or use the contact details on this page.
        </p>
      ) : null}
      <Button type="submit" disabled={status === "loading"} className="self-start">
        {status === "loading" ? "Sending…" : "Submit"}
      </Button>
    </form>
  );
}
