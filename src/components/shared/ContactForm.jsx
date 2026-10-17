import { useState } from "react";
import Button from "./Button.jsx";
import { submitContactMessage } from "../../lib/contactForm.js";
import { validateContactField, validateContactFields } from "../../lib/contactValidation.js";

const inputClass =
  "mt-1 w-full border border-brand-gold-light bg-neutral-white px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none focus:ring-1 focus:ring-brand-maroon";
const labelClass = "block text-xs font-semibold uppercase tracking-wider";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [status, setStatus] = useState("idle");

  function updateField(field, value, setter) {
    setter(value);
    setErrors((current) => {
      if (!current[field]) return current;
      const error = validateContactField(field, value);
      const next = { ...current };
      if (error) next[field] = error;
      else delete next[field];
      return next;
    });
    if (status === "error") {
      setStatus("idle");
      setSubmitError("");
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    const fieldErrors = validateContactFields({ firstName, lastName, email, phone, message });
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length) {
      return;
    }
    setStatus("loading");
    setSubmitError("");
    try {
      await submitContactMessage({ firstName, lastName, email, phone, message });
      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (submitFailure) {
      setStatus("error");
      setSubmitError(
        submitFailure instanceof Error
          ? submitFailure.message
          : "Message could not be sent. Please try again.",
      );
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
            id="contact-first-name"
            name="firstName"
            aria-label="First name"
            placeholder="First"
            autoComplete="given-name"
            required
            maxLength={100}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "contact-first-name-error" : undefined}
            value={firstName}
            onChange={(e) => updateField("firstName", e.target.value, setFirstName)}
            className={`${inputClass} mt-0`}
          />
          <input
            id="contact-last-name"
            name="lastName"
            aria-label="Last name"
            placeholder="Last"
            autoComplete="family-name"
            required
            maxLength={100}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "contact-last-name-error" : undefined}
            value={lastName}
            onChange={(e) => updateField("lastName", e.target.value, setLastName)}
            className={`${inputClass} mt-0`}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {errors.firstName ? (
            <p id="contact-first-name-error" className="mt-1 text-sm text-brand-maroon" role="alert">
              {errors.firstName}
            </p>
          ) : <span />}
          {errors.lastName ? (
            <p id="contact-last-name-error" className="mt-1 text-sm text-brand-maroon" role="alert">
              {errors.lastName}
            </p>
          ) : <span />}
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          value={email}
          onChange={(e) => updateField("email", e.target.value, setEmail)}
          className={inputClass}
        />
        {errors.email ? (
          <p id="contact-email-error" className="mt-1 text-sm text-brand-maroon" role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="contact-phone" className={labelClass}>
          Phone <span className="font-normal normal-case tracking-normal text-neutral-ink/60">(optional)</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={40}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          value={phone}
          onChange={(e) => updateField("phone", e.target.value, setPhone)}
          className={inputClass}
        />
        {errors.phone ? (
          <p id="contact-phone-error" className="mt-1 text-sm text-brand-maroon" role="alert">
            {errors.phone}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          maxLength={5000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          value={message}
          onChange={(e) => updateField("message", e.target.value, setMessage)}
          className={`${inputClass} resize-y`}
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-1 text-sm text-brand-maroon" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>
      {status === "error" ? (
        <p className="text-sm text-brand-maroon" role="alert">
          {submitError || "Message could not be sent. Please try again, or email info@arnowal.co.zw."}
        </p>
      ) : null}
      <Button type="submit" disabled={status === "loading"} className="self-start">
        {status === "loading" ? "Sending…" : "Submit"}
      </Button>
    </form>
  );
}
