import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const submission = body as Record<string, unknown>;
  const email = typeof submission.email === "string" ? submission.email.trim() : "";

  if (submission.processing_consent !== true) {
    return NextResponse.json({ error: "Processing consent is required" }, { status: 400 });
  }

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  console.log("[ergoworks-enquiry]", {
    fieldCount: Object.keys(submission).length,
    timestamp: submission.timestamp,
  });

  // TODO: Add Google Sheets integration for accepted enquiries.

  return NextResponse.json({ success: true, id: crypto.randomUUID() });
}
