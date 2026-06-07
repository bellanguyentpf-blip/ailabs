import { NextResponse } from "next/server"

import { addAuditRequest, addBookingRequest } from "@/lib/store"

export const runtime = "nodejs"

export async function POST(request: Request) {
  let body: { type?: string; payload?: Record<string, unknown> }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 })
  }

  const payload = body.payload ?? {}

  if (body.type === "audit") {
    await addAuditRequest(payload)
    return NextResponse.json({ ok: true })
  }
  if (body.type === "booking") {
    await addBookingRequest(payload)
    return NextResponse.json({ ok: true })
  }
  return NextResponse.json({ ok: false, error: "Unknown type" }, { status: 400 })
}
