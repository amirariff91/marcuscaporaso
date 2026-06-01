import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: { email?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 422 });
  }

  // Append to subscribers.json
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "subscribers.json");
  try {
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    let existing: Array<{ email: string; subscribedAt: string }> = [];
    if (fs.existsSync(filePath)) {
      try {
        existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      } catch {
        existing = [];
      }
    }
    // Deduplicate
    const alreadyExists = existing.some((e) => e.email === email);
    if (!alreadyExists) {
      existing.push({ email, subscribedAt: new Date().toISOString() });
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
    }
  } catch (err) {
    console.error("[subscribe] Failed to write subscribers.json:", err);
  }

  // Send notification email via Resend (if key is present)
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "noreply@marcuscaporaso.com",
          to: "marcus@marcuscaporaso.com",
          subject: `New subscriber: ${email}`,
          text: `New subscriber: ${email}\n\nSubscribed at: ${new Date().toISOString()}`,
        }),
      });
    } catch (err) {
      console.error("[subscribe] Resend notification failed:", err);
    }
  } else {
    console.log(`[subscribe] New subscriber: ${email} (RESEND_API_KEY not set)`);
  }

  return NextResponse.json({ success: true });
}
