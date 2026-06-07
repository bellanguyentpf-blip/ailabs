import "server-only"
import { cookies } from "next/headers"

// Use `||` (not `??`) so an empty/comment-stripped env value falls back safely.
const ADMIN_USER = process.env.ADMIN_USERNAME || "Trang"
const ADMIN_PASS = process.env.ADMIN_PASSWORD || "#Bella0421"
const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET || "ailabs-admin-7f3a9c1e2b6d4f80-secret"

export const SESSION_COOKIE = "ailabs_admin"

export function checkCredentials(user: string, pass: string): boolean {
  return user === ADMIN_USER && pass === ADMIN_PASS
}

export function sessionToken(): string {
  return SESSION_SECRET
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies()
  return store.get(SESSION_COOKIE)?.value === SESSION_SECRET
}
