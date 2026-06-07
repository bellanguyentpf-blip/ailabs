"use client"

import * as React from "react"
import { ArrowLeft, ArrowUpRight, CalendarCheck, Send } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import type { Locale } from "@/lib/routes"

export type BookingLabels = {
  title: string
  desc: string
  dateLabel: string
  timeLabel: string
  selectedLabel: string
  confirm: string
  noDate: string
  detailsDesc: string
  name: string
  namePlaceholder: string
  email: string
  emailPlaceholder: string
  phone: string
  phonePlaceholder: string
  company: string
  companyPlaceholder: string
  jobTitle: string
  jobTitlePlaceholder: string
  linkedin: string
  linkedinPlaceholder: string
  url: string
  urlPlaceholder: string
  service: string
  servicePlaceholder: string
  note: string
  notePlaceholder: string
  back: string
  book: string
  success: string
}

const TIME_SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]

export function BookCallDialog({
  lang,
  triggerLabel,
  trigger,
  labels,
  services,
}: {
  lang: Locale
  triggerLabel?: string
  trigger?: React.ReactNode
  labels: BookingLabels
  services: { slug: string; name: string }[]
}) {
  const [open, setOpen] = React.useState(false)
  const [step, setStep] = React.useState<1 | 2>(1)
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  const [time, setTime] = React.useState<string>("")
  const [service, setService] = React.useState<string>("")
  const [submitting, setSubmitting] = React.useState(false)
  const [blockedSlots, setBlockedSlots] = React.useState<{ date: string; time: string }[]>([])

  const today = React.useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  React.useEffect(() => {
    if (!open) return
    fetch("/api/availability")
      .then((r) => r.json())
      .then(setBlockedSlots)
      .catch(() => {})
  }, [open])

  const selectedDateKey = date ? date.toISOString().slice(0, 10) : null

  const bookedTimesForDate = React.useMemo(() => {
    if (!selectedDateKey) return new Set<string>()
    return new Set(
      blockedSlots.filter((s) => s.date === selectedDateKey).map((s) => s.time)
    )
  }, [blockedSlots, selectedDateKey])

  function isDateFullyBooked(d: Date) {
    const key = d.toISOString().slice(0, 10)
    const booked = blockedSlots.filter((s) => s.date === key).map((s) => s.time)
    return TIME_SLOTS.every((slot) => booked.includes(slot))
  }

  const formattedDate = date
    ? new Intl.DateTimeFormat(lang === "vi" ? "vi-VN" : "en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
      }).format(date)
    : null

  function reset() {
    setStep(1)
    setDate(undefined)
    setTime("")
    setService("")
    setSubmitting(false)
  }

  function onOpenChange(next: boolean) {
    setOpen(next)
    if (!next) reset()
  }

  function goToDetails() {
    if (!date) {
      toast.error(labels.noDate)
      return
    }
    setStep(2)
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries())
    payload.date = date ? date.toISOString() : ""
    payload.time = time
    setSubmitting(true)
    try {
      await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "booking", payload }),
      })
      toast.success(labels.success)
      onOpenChange(false)
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const slotSummary =
    formattedDate && `${formattedDate}${time ? `, ${time}` : ""}`

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {trigger ?? (
          <button
            type="button"
            className="inline-flex w-fit items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {triggerLabel}
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-medium">
            {labels.title}
          </DialogTitle>
          <DialogDescription>
            {step === 1 ? labels.desc : labels.detailsDesc}
          </DialogDescription>
        </DialogHeader>

        {step === 1 ? (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                {labels.dateLabel}
              </span>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) =>
                  d < today ||
                  d.getDay() === 0 ||
                  d.getDay() === 6 ||
                  isDateFullyBooked(d)
                }
                className="w-full rounded-xl border border-border bg-card p-3 [&>*]:w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                {labels.timeLabel}
              </span>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.map((slot) => {
                  const isBooked = bookedTimesForDate.has(slot)
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => !isBooked && setTime(slot)}
                      disabled={isBooked}
                      aria-pressed={time === slot}
                      className={cn(
                        "rounded-lg border py-2 font-mono text-sm transition-colors",
                        isBooked
                          ? "cursor-not-allowed border-border bg-muted text-muted-foreground line-through opacity-50"
                          : time === slot
                            ? "border-brand bg-brand text-brand-foreground"
                            : "border-border text-foreground hover:border-foreground/30"
                      )}
                    >
                      {slot}
                    </button>
                  )
                })}
              </div>
            </div>

            <Button size="lg" className="h-11" onClick={goToDetails}>
              {labels.confirm}
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            {slotSummary ? (
              <p className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2.5 text-sm">
                <CalendarCheck className="size-4 shrink-0 text-brand" />
                <span className="text-muted-foreground">
                  {labels.selectedLabel}:
                </span>
                <span className="font-medium text-foreground">
                  {slotSummary}
                </span>
              </p>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="book-name" label={labels.name} required>
                <Input
                  id="book-name"
                  name="name"
                  required
                  placeholder={labels.namePlaceholder}
                  autoComplete="name"
                />
              </Field>
              <Field id="book-email" label={labels.email} required>
                <Input
                  id="book-email"
                  name="email"
                  type="email"
                  required
                  placeholder={labels.emailPlaceholder}
                  autoComplete="email"
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="book-phone" label={labels.phone}>
                <Input
                  id="book-phone"
                  name="phone"
                  type="tel"
                  placeholder={labels.phonePlaceholder}
                  autoComplete="tel"
                />
              </Field>
              <Field id="book-company" label={labels.company} required>
                <Input
                  id="book-company"
                  name="company"
                  required
                  placeholder={labels.companyPlaceholder}
                  autoComplete="organization"
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="book-title" label={labels.jobTitle}>
                <Input
                  id="book-title"
                  name="jobTitle"
                  placeholder={labels.jobTitlePlaceholder}
                  autoComplete="organization-title"
                />
              </Field>
              <Field id="book-linkedin" label={labels.linkedin} required>
                <Input
                  id="book-linkedin"
                  name="linkedin"
                  type="url"
                  required
                  placeholder={labels.linkedinPlaceholder}
                />
              </Field>
            </div>

            <Field id="book-url" label={labels.url} required>
              <Input
                id="book-url"
                name="url"
                type="url"
                required
                placeholder={labels.urlPlaceholder}
                autoComplete="url"
              />
            </Field>

            <Field id="book-service" label={labels.service}>
              <input type="hidden" name="service" value={service} />
              <Select value={service} onValueChange={setService}>
                <SelectTrigger id="book-service" className="w-full">
                  <SelectValue placeholder={labels.servicePlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s.slug} value={s.slug}>
                      {s.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field id="book-note" label={labels.note} required>
              <Textarea
                id="book-note"
                name="note"
                required
                rows={3}
                placeholder={labels.notePlaceholder}
              />
            </Field>

            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="h-11"
                onClick={() => setStep(1)}
              >
                <ArrowLeft />
                {labels.back}
              </Button>
              <Button
                type="submit"
                size="lg"
                className="group h-11 flex-1"
                disabled={submitting}
              >
                {labels.book}
                <Send className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="font-mono text-xs tracking-wide uppercase">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </Label>
      {children}
    </div>
  )
}
