import { redirect } from "next/navigation"
import { CalendarClock, ClipboardList, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AdminMonthCalendar } from "@/components/site/admin-month-calendar"
import { MeetingTabs } from "@/components/site/meeting-tabs"
import { isAuthenticated } from "@/lib/admin-auth"
import {
  getSubmissions,
  type AuditRequest,
  type BookingRequest,
} from "@/lib/store"
import { en } from "@/lib/dictionaries/en"
import { logout } from "./actions"

export const dynamic = "force-dynamic"

const serviceName = (slug: string) =>
  en.servicesList.find((s) => s.slug === slug)?.name || slug || "—"

const fmtDateTime = (iso: string) => {
  if (!iso) return "—"
  const d = new Date(iso)
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d)
}

const fmtDate = (iso: string) => {
  if (!iso) return "—"
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(iso))
}

export default async function AdminPage() {
  if (!(await isAuthenticated())) redirect("/admin/login")

  const { audits, bookings } = await getSubmissions()
  const sortedBookings = [...bookings].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )
  const serviceNames = Object.fromEntries(
    en.servicesList.map((s) => [s.slug, s.name])
  )

  return (
    <div className="min-h-svh">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold tracking-tight">
              AILABS
            </span>
            <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Admin
            </span>
          </div>
          <form action={logout}>
            <Button type="submit" variant="outline" size="sm">
              <LogOut className="size-3.5" />
              Sign out
            </Button>
          </form>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-14 px-6 py-10 md:py-14">
        {/* Meeting requests */}
        <section className="flex flex-col gap-6">
          <SectionHead
            icon={<CalendarClock className="size-5 text-brand" />}
            title="Meeting requests"
            subtitle="Book a call submissions, sorted by requested date."
            count={bookings.length}
          />
          {sortedBookings.length === 0 ? (
            <Empty label="No meeting requests yet." />
          ) : (
            <MeetingTabs
              calendarLabel="Calendar"
              detailsLabel="Booking details"
              calendar={
                <AdminMonthCalendar
                  bookings={bookings}
                  serviceNames={serviceNames}
                />
              }
              details={sortedBookings.map((b) => (
                <BookingCard key={b.id} b={b} />
              ))}
            />
          )}
        </section>

        {/* Audit requests */}
        <section className="flex flex-col gap-6">
          <SectionHead
            icon={<ClipboardList className="size-5 text-brand" />}
            title="Free website audit requests"
            subtitle="Audit popup submissions, newest first."
            count={audits.length}
          />
          {audits.length === 0 ? (
            <Empty label="No audit requests yet." />
          ) : (
            <div className="flex flex-col gap-4">
              {audits.map((a) => (
                <AuditCard key={a.id} a={a} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

function SectionHead({
  icon,
  title,
  subtitle,
  count,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  count: number
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-card">
          {icon}
        </span>
        <div>
          <h2 className="font-display text-xl font-semibold tracking-tight">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <Badge variant="secondary" className="font-mono">
        {count}
      </Badge>
    </div>
  )
}

function Empty({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-card px-6 py-12 text-center text-sm text-muted-foreground">
      {label}
    </div>
  )
}

function BookingCard({ b }: { b: BookingRequest }) {
  return (
    <div className="card-elevated grid gap-5 p-6 md:grid-cols-[180px_1fr]">
      <div className="flex flex-col gap-1 border-b border-border pb-4 md:border-r md:border-b-0 md:pr-5 md:pb-0">
        <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
          Requested
        </span>
        <span className="font-display text-lg font-medium">
          {fmtDate(b.date)}
        </span>
        {b.time ? (
          <span className="font-mono text-sm text-brand">{b.time}</span>
        ) : null}
      </div>
      <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
        <Field label="Name" value={b.name} />
        <Field label="Email" value={b.email} email />
        <Field label="Phone" value={b.phone} />
        <Field label="Company" value={b.company} />
        <Field label="Job title" value={b.jobTitle} />
        <Field label="Service" value={serviceName(b.service)} />
        <Field label="LinkedIn" value={b.linkedin} link />
        <Field label="Submitted" value={fmtDateTime(b.createdAt)} />
        {b.note ? (
          <div className="sm:col-span-2">
            <Field label="Note" value={b.note} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

function AuditCard({ a }: { a: AuditRequest }) {
  return (
    <div className="card-elevated grid gap-x-6 gap-y-3 p-6 sm:grid-cols-2 lg:grid-cols-3">
      <Field label="Name" value={a.name} />
      <Field label="Email" value={a.email} email />
      <Field label="Phone" value={a.phone} />
      <Field label="Company" value={a.company} />
      <Field label="Job title" value={a.jobTitle} />
      <Field label="Service" value={serviceName(a.service)} />
      <Field label="Website URL" value={a.url} link />
      <Field label="LinkedIn" value={a.linkedin} link />
      <Field label="Submitted" value={fmtDateTime(a.createdAt)} />
      {a.note ? (
        <div className="sm:col-span-2 lg:col-span-3">
          <Field label="Note" value={a.note} />
        </div>
      ) : null}
    </div>
  )
}

function Field({
  label,
  value,
  email,
  link,
}: {
  label: string
  value: string
  email?: boolean
  link?: boolean
}) {
  const v = value && value.trim() ? value : "—"
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-mono text-[0.7rem] tracking-wide text-muted-foreground uppercase">
        {label}
      </span>
      {v !== "—" && email ? (
        <a
          href={`mailto:${v}`}
          className="truncate text-sm font-medium text-foreground hover:text-brand"
        >
          {v}
        </a>
      ) : v !== "—" && link ? (
        <a
          href={v.startsWith("http") ? v : `https://${v}`}
          target="_blank"
          rel="noreferrer"
          className="truncate text-sm font-medium text-foreground hover:text-brand"
        >
          {v}
        </a>
      ) : (
        <span className="text-sm font-medium text-foreground">{v}</span>
      )}
    </div>
  )
}
