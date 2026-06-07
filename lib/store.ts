import "server-only"
import { promises as fs } from "fs"
import path from "path"

export type AuditRequest = {
  id: string
  createdAt: string
  name: string
  phone: string
  email: string
  company: string
  jobTitle: string
  linkedin: string
  url: string
  service: string
  note: string
}

export type BookingRequest = {
  id: string
  createdAt: string
  date: string // ISO date of the requested meeting
  time: string
  name: string
  phone: string
  email: string
  company: string
  jobTitle: string
  linkedin: string
  service: string
  note: string
}

type Store = { audits: AuditRequest[]; bookings: BookingRequest[] }

const FILE = path.join(process.cwd(), ".data", "submissions.json")

async function read(): Promise<Store> {
  try {
    const raw = await fs.readFile(FILE, "utf8")
    const parsed = JSON.parse(raw) as Partial<Store>
    return { audits: parsed.audits ?? [], bookings: parsed.bookings ?? [] }
  } catch {
    return { audits: [], bookings: [] }
  }
}

async function write(store: Store): Promise<void> {
  await fs.mkdir(path.dirname(FILE), { recursive: true })
  await fs.writeFile(FILE, JSON.stringify(store, null, 2), "utf8")
}

function newId(): string {
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`
}

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "")

export async function addAuditRequest(
  payload: Record<string, unknown>
): Promise<void> {
  const store = await read()
  store.audits.unshift({
    id: newId(),
    createdAt: new Date().toISOString(),
    name: str(payload.name),
    phone: str(payload.phone),
    email: str(payload.email),
    company: str(payload.company),
    jobTitle: str(payload.jobTitle),
    linkedin: str(payload.linkedin),
    url: str(payload.url),
    service: str(payload.service),
    note: str(payload.note),
  })
  await write(store)
}

export async function addBookingRequest(
  payload: Record<string, unknown>
): Promise<void> {
  const store = await read()
  store.bookings.unshift({
    id: newId(),
    createdAt: new Date().toISOString(),
    date: str(payload.date),
    time: str(payload.time),
    name: str(payload.name),
    phone: str(payload.phone),
    email: str(payload.email),
    company: str(payload.company),
    jobTitle: str(payload.jobTitle),
    linkedin: str(payload.linkedin),
    service: str(payload.service),
    note: str(payload.note),
  })
  await write(store)
}

export async function getSubmissions(): Promise<Store> {
  return read()
}
