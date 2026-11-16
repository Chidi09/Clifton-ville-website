import nodemailer from 'nodemailer';

// Contact / site-visit form handler. Sends via Purelymail SMTP.
// Env: SMTP_USER, SMTP_PASS (the website@ mailbox), MAIL_TO (comma-separated recipients),
// optional SMTP_HOST / SMTP_PORT / SITE_NAME.

const SITE_NAME = process.env.SITE_NAME || 'Cliftonville Gardens';
const MAX_FIELD = 5000;
const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

const LABELS = {
  source: 'Form',
  name: 'Name',
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email',
  phone: 'Phone',
  subject: 'Subject',
  interest: 'Interest',
  date: 'Preferred date',
  timeSlot: 'Time slot',
  message: 'Message',
};

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const clean = (v) =>
  typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim().slice(0, MAX_FIELD) : '';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body || '{}');
    } catch {
      return res.status(400).json({ error: 'Invalid request.' });
    }
  }
  body = body && typeof body === 'object' ? body : {};

  // Honeypot: bots fill hidden fields; pretend success.
  if (clean(body.website)) return res.status(200).json({ ok: true });

  const fields = {};
  for (const key of Object.keys(LABELS)) {
    const v = clean(body[key]);
    if (v) fields[key] = v;
  }
  const name = fields.name || [fields.firstName, fields.lastName].filter(Boolean).join(' ');
  const email = (fields.email || '').replace(/[\r\n]/g, '');

  if (!name || !EMAIL_RE.test(email)) {
    return res.status(422).json({ error: 'Please enter your name and a valid email address.' });
  }

  const { SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;
  if (!SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    console.error('contact: SMTP env not configured');
    return res.status(500).json({ error: 'Email is not configured. Please call us directly.' });
  }

  const topic = fields.subject || fields.interest || fields.source || 'Website enquiry';
  const rows = Object.entries(fields)
    .filter(([k]) => k !== 'message')
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#64748b;vertical-align:top;white-space:nowrap">${esc(LABELS[k])}</td><td style="padding:6px 0;color:#0f172a">${esc(v)}</td></tr>`,
    )
    .join('');
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#0f172a;max-width:640px">
<h2 style="margin:0 0 12px">New enquiry from ${esc(SITE_NAME)} website</h2>
<table style="border-collapse:collapse">${rows}</table>
${fields.message ? `<p style="margin:16px 0 6px;color:#64748b">Message</p><div style="white-space:pre-wrap;background:#f1f5f9;padding:12px;border-radius:6px">${esc(fields.message)}</div>` : ''}
<p style="margin-top:20px;color:#94a3b8;font-size:12px">Reply to this email to answer ${esc(name)} directly.</p>
</div>`;
  const text = [
    `New enquiry from ${SITE_NAME} website`,
    '',
    ...Object.entries(fields)
      .filter(([k]) => k !== 'message')
      .map(([k, v]) => `${LABELS[k]}: ${v}`),
    ...(fields.message ? ['', 'Message:', fields.message] : []),
  ].join('\n');

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.purelymail.com',
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: { name: `${SITE_NAME} Website`, address: SMTP_USER },
      to: MAIL_TO.split(',').map((s) => s.trim()).filter(Boolean),
      replyTo: { name: name.replace(/[\r\n"]/g, ''), address: email },
      subject: `New enquiry: ${topic} - ${name}`.replace(/[\r\n]/g, ' ').slice(0, 200),
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact: send failed', err?.message);
    return res.status(502).json({ error: 'Could not send your message. Please try again or call us directly.' });
  }
}
