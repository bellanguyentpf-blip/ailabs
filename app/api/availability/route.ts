import { NextResponse } from "next/server"
import { getSubmissions } from "@/lib/store"

export async function GET() {
  const { bookings } = await getSubmissions()
  const blocked = bookings
    .filter((b) => !b.status || b.status === "requested" || b.status === "confirmed")
    .map((b) => ({
      date: new Date(b.date).toISOString().slice(0, 10),
      time: b.time,
    }))
  return NextResponse.json(blocked)
}
