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

  const res = await fetch("/api/contact.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  if (!res.ok) {
    throw new Error(result.error || `Contact request failed (${res.status}).`);
  }
  if (result.ok !== true) {
    throw new Error("The message could not be sent. Please try again.");
  }

  return { ok: true };
}
