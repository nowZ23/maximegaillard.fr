// POST /api/contact {name, email, message, website} : message du formulaire de contact, transmis par email à ADMIN_EMAIL via Resend.
// « website » est un champ piège pour les robots. Secret requis : RESEND_API_KEY (wrangler pages secret put). Variables : wrangler.toml.

const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json" } });
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const validEmail = (e) => /^[^\s@]{1,64}@[^\s@]{1,255}\.[a-z]{2,}$/i.test(e);

// Limite simple par adresse IP, gardée en mémoire de l'instance (suffisant pour un formulaire de portfolio).
const hits = new Map();
function overLimit(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 3600_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function onRequestPost({ request, env }) {
  let b;
  try {
    b = JSON.parse((await request.text()).slice(0, 8000));
  } catch {
    return json({ ok: false, error: "bad_request" }, 400);
  }
  if (b.website) return json({ ok: true }); // robot : on répond comme si tout allait bien
  const name = String(b.name || "").trim().slice(0, 120);
  const email = String(b.email || "").trim().toLowerCase().slice(0, 254);
  const message = String(b.message || "").trim().slice(0, 4000);
  if (!validEmail(email)) return json({ ok: false, error: "invalid_email" }, 400);
  if (message.length < 5) return json({ ok: false, error: "too_short" }, 400);
  if (overLimit(request.headers.get("cf-connecting-ip") || "?")) return json({ ok: false, error: "too_many" }, 429);
  if (!env.RESEND_API_KEY || !env.ADMIN_EMAIL || !env.MAIL_FROM) return json({ ok: false, error: "not_configured" }, 503);

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({
      from: env.MAIL_FROM,
      to: [env.ADMIN_EMAIL],
      reply_to: email,
      subject: `Contact maximegaillard.fr : ${name || email}`,
      text: `De : ${name} <${email}>\n\n${message}`,
      html: `<p><strong>De :</strong> ${esc(name)} &lt;${esc(email)}&gt;</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });
  if (!r.ok) console.error("resend", r.status, await r.text());
  return json({ ok: r.ok }, r.ok ? 200 : 502);
}
