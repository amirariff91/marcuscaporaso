import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const DATA_DIR = join(process.cwd(), "data");
const DATA_FILE = join(DATA_DIR, "ergoworks-enquiries.json");

type Enquiry = Record<string, unknown> & { id: string; received_at: string };

async function loadEnquiries(): Promise<Enquiry[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Enquiry[];
  } catch {
    return [];
  }
}

async function saveEnquiry(enquiry: Enquiry): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  const enquiries = await loadEnquiries();
  enquiries.push(enquiry);
  await writeFile(DATA_FILE, JSON.stringify(enquiries, null, 2), "utf-8");
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!body.email || !body.processing_consent) {
    return NextResponse.json(
      { error: "Email and processing consent are required." },
      { status: 400 },
    );
  }

  const id = crypto.randomUUID();
  const enquiry: Enquiry = {
    ...body,
    id,
    received_at: new Date().toISOString(),
  };

  await saveEnquiry(enquiry);

  console.log("[ergoworks-enquiry]", {
    id,
    fields: Object.keys(body).length,
    timestamp: body.submitted_at,
    hasGclid: Boolean(body.gclid),
  });

  return NextResponse.json({ success: true, id });
}
