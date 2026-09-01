export async function submitSubscribe({ name, email, source }) {
  const payload = {
    name: name?.trim() || "",
    email: email.trim(),
    source,
    timestamp: new Date().toISOString(),
  };

  const endpoint = import.meta.env.VITE_SUBSCRIBE_ENDPOINT;

  // Stub: no Apps Script URL yet. Logs payload and resolves so the UI can be tested.
  // Replace by setting VITE_SUBSCRIBE_ENDPOINT (Task 3.2). Do not remove this branch
  // until a real Web App URL is provisioned.
  if (!endpoint) {
    console.info("[subscribe mock — VITE_SUBSCRIBE_ENDPOINT unset]", payload);
    await new Promise((r) => setTimeout(r, 500));
    return { ok: true, mocked: true };
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Subscribe request failed (${res.status})`);
  }

  return { ok: true, mocked: false };
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
