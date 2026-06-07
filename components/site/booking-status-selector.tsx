"use client"

import { useTransition } from "react"
import { type BookingStatus } from "@/lib/store"
import { setBookingStatus } from "@/app/admin/actions"

const options: { value: BookingStatus; label: string; color: string }[] = [
  { value: "requested", label: "Requested", color: "bg-amber-100 text-amber-800 ring-amber-300" },
  { value: "confirmed", label: "Confirmed", color: "bg-emerald-100 text-emerald-800 ring-emerald-300" },
  { value: "cancelled", label: "Cancelled", color: "bg-red-100 text-red-700 ring-red-300" },
]

export function BookingStatusSelector({
  id,
  status = "requested",
}: {
  id: string
  status?: BookingStatus
}) {
  const [isPending, startTransition] = useTransition()
  const current = options.find((o) => o.value === status) ?? options[0]

  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-[0.7rem] tracking-wide text-muted-foreground uppercase">
        Status
      </span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => (
          <button
            key={opt.value}
            disabled={isPending || opt.value === status}
            onClick={() =>
              startTransition(() => setBookingStatus(id, opt.value))
            }
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 transition-opacity
              ${opt.value === status ? `${opt.color} opacity-100` : "bg-muted text-muted-foreground ring-border opacity-60 hover:opacity-100"}
              disabled:cursor-not-allowed`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
