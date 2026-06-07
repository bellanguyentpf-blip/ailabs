"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { BookingRequest } from "@/lib/store"

function startOfDay(d: Date) {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

// Monday-first week start.
function startOfWeek(d: Date) {
  const x = startOfDay(d)
  const day = (x.getDay() + 6) % 7
  x.setDate(x.getDate() - day)
  return x
}

function addDays(d: Date, n: number) {
  const x = new Date(d)
  x.setDate(x.getDate() + n)
  return x
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

const monthFmt = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  year: "numeric",
})
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export function AdminMonthCalendar({
  bookings,
  serviceNames,
}: {
  bookings: BookingRequest[]
  serviceNames: Record<string, string>
}) {
  const today = React.useMemo(() => startOfDay(new Date()), [])
  const [cursor, setCursor] = React.useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  )

  const month = cursor.getMonth()

  const cells = React.useMemo(() => {
    const gridStart = startOfWeek(new Date(cursor.getFullYear(), month, 1))
    return Array.from({ length: 42 }, (_, i) => addDays(gridStart, i))
  }, [cursor, month])

  const eventsFor = React.useCallback(
    (day: Date) =>
      bookings
        .filter((b) => b.date && sameDay(new Date(b.date), day))
        .sort((a, b) => a.time.localeCompare(b.time)),
    [bookings]
  )

  const monthCount = bookings.filter(
    (b) => b.date && new Date(b.date).getMonth() === month &&
      new Date(b.date).getFullYear() === cursor.getFullYear()
  ).length

  return (
    <div className="card-elevated overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4">
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-base font-semibold tracking-tight">
            {monthFmt.format(cursor)}
          </h3>
          <span className="font-mono text-xs text-muted-foreground">
            {monthCount} {monthCount === 1 ? "meeting" : "meetings"}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="icon-sm"
            aria-label="Previous month"
            onClick={() =>
              setCursor((c) => new Date(c.getFullYear(), c.getMonth() - 1, 1))
            }
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCursor(new Date(today.getFullYear(), today.getMonth(), 1))
            }
          >
            Today
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            aria-label="Next month"
            onClick={() =>
              setCursor((c) => new Date(c.getFullYear(), c.getMonth() + 1, 1))
            }
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[760px]">
          {/* Weekday header */}
          <div className="grid grid-cols-7 border-b border-border">
            {WEEKDAYS.map((d) => (
              <div
                key={d}
                className="px-3 py-2 font-mono text-[0.7rem] tracking-wide text-muted-foreground uppercase"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Day grid */}
          <div className="grid grid-cols-7">
            {cells.map((day, i) => {
              const inMonth = day.getMonth() === month
              const isToday = sameDay(day, today)
              const events = eventsFor(day)
              const shown = events.slice(0, 2)
              const extra = events.length - shown.length
              return (
                <div
                  key={day.toISOString()}
                  className={cn(
                    "flex min-h-28 flex-col gap-1 border-r border-b border-border p-1.5",
                    i % 7 === 6 && "border-r-0",
                    !inMonth && "bg-muted/30"
                  )}
                >
                  <span
                    className={cn(
                      "self-end px-1 font-mono text-xs",
                      !inMonth && "text-muted-foreground/50",
                      isToday &&
                        "flex size-6 items-center justify-center self-end rounded-full bg-brand font-semibold text-brand-foreground"
                    )}
                  >
                    {day.getDate()}
                  </span>
                  <div className="flex flex-col gap-1">
                    {shown.map((b) => (
                      <div
                        key={b.id}
                        title={`${b.time} · ${b.name}\n${b.email}${
                          b.phone ? ` · ${b.phone}` : ""
                        }${
                          b.service
                            ? `\n${serviceNames[b.service] ?? b.service}`
                            : ""
                        }${b.note ? `\n${b.note}` : ""}`}
                        className="flex items-center gap-1 truncate rounded border border-brand/30 bg-brand/10 px-1.5 py-1 text-[0.7rem]"
                      >
                        <span className="font-mono font-medium text-brand">
                          {b.time || "--"}
                        </span>
                        <span className="truncate font-medium text-foreground">
                          {b.name || "—"}
                        </span>
                      </div>
                    ))}
                    {extra > 0 ? (
                      <span className="px-1 text-[0.7rem] text-muted-foreground">
                        +{extra} more
                      </span>
                    ) : null}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
