import { isValidEmail } from "./email.js";

const phonePattern = /^[+()0-9 .-]+$/;

export function validateContactField(field, value) {
  const trimmed = value.trim();

  if (field === "firstName" || field === "lastName") {
    if (!trimmed) return "This field is required.";
    if (trimmed.length > 100) return "Use 100 characters or fewer.";
    if (trimmed.includes("\n") || trimmed.includes("\r")) {
      return "Enter a name without line breaks.";
    }
  }

  if (field === "email") {
    if (!trimmed) return "Email is required.";
    if (trimmed.length > 254 || !isValidEmail(trimmed)) return "Enter a valid email address.";
  }

  if (field === "phone" && trimmed) {
    const digits = trimmed.replace(/\D/g, "").length;
    if (!phonePattern.test(trimmed) || digits < 7 || digits > 15) {
      return "Enter a valid phone number, including the country code.";
    }
  }

  if (field === "message") {
    if (!trimmed) return "Message is required.";
    if (trimmed.length > 5000) return "Message must be 5,000 characters or fewer.";
  }

  return "";
}

export function validateContactFields(fields) {
  return Object.fromEntries(
    Object.entries(fields)
      .map(([field, value]) => [field, validateContactField(field, value)])
      .filter(([, error]) => error),
  );
}
