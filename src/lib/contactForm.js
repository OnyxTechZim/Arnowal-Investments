import { isValidEmail } from "./subscribe.js";

export { isValidEmail };

export async function submitContactMessage({ firstName, lastName, email, phone, message }) {
  const payload = {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim(),
    phone: phone?.trim() || "",
    message: message.trim(),
    timestamp: new Date().toISOString(),
  };

  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

  if (!endpoint) {
    if (import.meta.env.DEV) {
      console.info("[contact form mock — VITE_CONTACT_ENDPOINT unset]", payload);
    }
    await new Promise((r) => setTimeout(r, 500));
    return { ok: true, mocked: true };
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Contact request failed (${res.status})`);
  }

  return { ok: true, mocked: false };
}
