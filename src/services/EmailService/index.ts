export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export async function sendContactMessage(form: ContactForm) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const data = await res.json();
  return { ok: res.ok, data };
}