import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { rateLimit } from "@/lib/rate-limit";

function clientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "rateLimit" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const field = parsed.error.issues[0]?.message ?? "invalid";
    return NextResponse.json({ error: field }, { status: 400 });
  }

  const data = parsed.data;
  if (data.website) {
    return NextResponse.json({ success: true });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    return NextResponse.json({ error: "config" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const escape = (value: string) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");

  await transporter.sendMail({
    from: `"Marko Moev" <${user}>`,
    to: user,
    replyTo: data.email,
    subject: `Нова заявка от ${data.name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;">
        <h2>Нова заявка от формата</h2>
        <p><strong>Име:</strong> ${escape(data.name)}</p>
        <p><strong>Имейл:</strong> ${escape(data.email)}</p>
        <p><strong>Телефон:</strong> ${escape(data.phone || "—")}</p>
        <p><strong>Тип бизнес:</strong> ${escape(data.businessType)}</p>
        <p><strong>Бюджет:</strong> ${escape(data.budget)}</p>
        <p style="white-space:pre-wrap;">${escape(data.message)}</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
