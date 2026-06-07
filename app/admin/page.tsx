import { redirect } from "next/navigation"
import { CalendarClock, ClipboardList, LogOut, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AdminMonthCalendar } from "@/components/site/admin-month-calendar"
import { MeetingTabs } from "@/components/site/meeting-tabs"
import { BookingStatusSelector } from "@/components/site/booking-status-selector"
import { AdminAddBooking } from "@/components/site/admin-add-booking"
import { isAuthenticated } from "@/lib/admin-auth"
import {
  getSubmissions,
  type AuditRequest,
  type BookingRequest,
  type ContactRequest,
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

  const { audits, bookings, contacts } = await getSubmissions()
  const sortedBookings = [...bookings].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )
  const serviceNames = Object.fromEntries(
    en.servicesList.map((s) => [s.slug, s.name])
  )
  const services = en.servicesList.map((s) => ({ slug: s.slug, name: s.name }))

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

      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 py-10 md:py-14">
        <MeetingTabs
          calendarLabel="Overview"
          detailsLabel="All submissions"
          calendar={
            <div className="flex flex-col gap-8">
              {/* Booking calendar */}
              <div className="flex flex-col gap-4">
                <SectionHead
                  icon={<CalendarClock className="size-5 text-brand" />}
                  title="Meeting requests"
                  subtitle="Booked calls this month."
                  count={bookings.length}
                  action={<AdminAddBooking services={services} />}
                />
                <AdminMonthCalendar
                  bookings={bookings}
                  serviceNames={serviceNames}
                />
              </div>

              {/* Contact requests overview */}
              <div className="flex flex-col gap-4">
                <SectionHead
                  icon={<Mail className="size-5 text-brand" />}
                  title="Contact requests"
                  subtitle="Contact us form submissions."
                  count={contacts.length}
                />
                {contacts.length === 0 ? (
                  <Empty label="No contact requests yet." />
                ) : (
                  <div className="card-elevated overflow-hidden">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <Th>Name</Th>
                          <Th>Email</Th>
                          <Th>Service</Th>
                          <Th>Submitted</Th>
                        </tr>
                      </thead>
                      <tbody>
                        {contacts.slice(0, 10).map((c) => (
                          <tr key={c.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                            <Td>{c.name || "—"}</Td>
                            <Td>
                              {c.email ? (
                                <a href={`mailto:${c.email}`} className="hover:text-brand">{c.email}</a>
                              ) : "—"}
                            </Td>
                            <Td>{serviceName(c.service)}</Td>
                            <Td className="text-muted-foreground">{fmtDateTime(c.createdAt)}</Td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {contacts.length > 10 && (
                      <p className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                        +{contacts.length - 10} more. See all in the All submissions tab.
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Audit requests overview */}
              <div className="flex flex-col gap-4">
                <SectionHead
                  icon={<ClipboardList className="size-5 text-brand" />}
                  title="Website audit requests"
                  subtitle="Free website audit submissions."
                  count={audits.length}
                />
                {audits.length === 0 ? (
                  <Empty label="No audit requests yet." />
                ) : (
                  <div className="card-elevated overflow-hidden">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <Th>Name</Th>
                          <Th>Email</Th>
                          <Th>Service</Th>
                          <Th>Submitted</Th>
                        </tr>
                      </thead>
                      <tbody>
                        {audits.slice(0, 10).map((a) => (
                          <tr key={a.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                            <Td>{a.name || "—"}</Td>
                            <Td>
                              {a.email ? (
                                <a href={`mailto:${a.email}`} className="hover:text-brand">{a.email}</a>
                              ) : "—"}
                            </Td>
                            <Td>{serviceName(a.service)}</Td>
                            <Td className="text-muted-foreground">{fmtDateTime(a.createdAt)}</Td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {audits.length > 10 && (
                      <p className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                        +{audits.length - 10} more. See all in the All submissions tab.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          }
          details={
            <div className="flex flex-col gap-14">
              {/* Meeting requests */}
              <section className="flex flex-col gap-6">
                <SectionHead
                  icon={<CalendarClock className="size-5 text-brand" />}
                  title="Meeting requests"
                  subtitle="Book a call submissions, sorted by requested date."
                  count={bookings.length}
                  action={<AdminAddBooking services={services} />}
                />
                {sortedBookings.length === 0 ? (
                  <Empty label="No meeting requests yet." />
                ) : (
                  <div className="flex flex-col gap-4">
                    {sortedBookings.map((b) => (
                      <BookingCard key={b.id} b={b} />
                    ))}
                  </div>
                )}
              </section>

              {/* Contact requests */}
              <section className="flex flex-col gap-6">
                <SectionHead
                  icon={<Mail className="size-5 text-brand" />}
                  title="Contact requests"
                  subtitle="Contact us form submissions, newest first."
                  count={contacts.length}
                />
                {contacts.length === 0 ? (
                  <Empty label="No contact requests yet." />
                ) : (
                  <div className="flex flex-col gap-4">
                    {contacts.map((c) => (
                      <ContactCard key={c.id} c={c} />
                    ))}
                  </div>
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
            </div>
          }
        />
      </main>
    </div>
  )
}

function SectionHead({
  icon,
  title,
  subtitle,
  count,
  action,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  count: number
  action?: React.ReactNode
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
      <div className="flex items-center gap-2">
        {action}
        <Badge variant="secondary" className="font-mono">
          {count}
        </Badge>
      </div>
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

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-2.5 text-left font-mono text-[0.7rem] tracking-wide text-muted-foreground uppercase">
      {children}
    </th>
  )
}

function Td({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <td className={`px-4 py-2.5 text-sm ${className ?? ""}`}>{children}</td>
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
        <Field label="Website URL" value={b.url} link />
        <Field label="Submitted" value={fmtDateTime(b.createdAt)} />
        <div className="sm:col-span-2">
          <BookingStatusSelector id={b.id} status={b.status} />
        </div>
        {b.note ? (
          <div className="sm:col-span-2">
            <Field label="Note" value={b.note} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

function ContactCard({ c }: { c: ContactRequest }) {
  return (
    <div className="card-elevated grid gap-x-6 gap-y-3 p-6 sm:grid-cols-2 lg:grid-cols-3">
      <Field label="Name" value={c.name} />
      <Field label="Email" value={c.email} email />
      <Field label="Phone" value={c.phone} />
      <Field label="Company" value={c.company} />
      <Field label="Job title" value={c.jobTitle} />
      <Field label="Service" value={serviceName(c.service)} />
      <Field label="LinkedIn" value={c.linkedin} link />
      <Field label="Website URL" value={c.url} link />
      <Field label="Submitted" value={fmtDateTime(c.createdAt)} />
      {c.message ? (
        <div className="sm:col-span-2 lg:col-span-3">
          <Field label="Message" value={c.message} />
        </div>
      ) : null}
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
