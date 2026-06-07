import "server-only"
import { cookies } from "next/headers"

const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET || "ailabs-admin-7f3a9c1e2b6d4f80-secret"

const ACCOUNTS: { user: string; pass: string }[] = [
  {
    user: process.env.ADMIN_USERNAME || "Trang",
    pass: process.env.ADMIN_PASSWORD || "#Bella0421",
  },
  {
    user: process.env.ADMIN_USERNAME_2 || "jason",
    pass: process.env.ADMIN_PASSWORD_2 || "1234",
  },
]

export const SESSION_COOKIE = "ailabs_admin"

export function checkCredentials(user: string, pass: string): boolean {
  return ACCOUNTS.some((a) => a.user === user && a.pass === pass)
}

export function sessionToken(): string {
  return SESSION_SECRET
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies()
  return store.get(SESSION_COOKIE)?.value === SESSION_SECRET
}
