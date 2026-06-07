"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

import {
  SESSION_COOKIE,
  checkCredentials,
  sessionToken,
} from "@/lib/admin-auth"
import { updateBookingStatus, addBookingRequest, type BookingStatus } from "@/lib/store"

export type LoginState = { error?: string }

export async function login(
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  const username = String(formData.get("username") ?? "")
  const password = String(formData.get("password") ?? "")

  if (!checkCredentials(username, password)) {
    return { error: "Incorrect ID or password." }
  }

  const store = await cookies()
  store.set(SESSION_COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  })

  redirect("/admin")
}

export async function logout(): Promise<void> {
  const store = await cookies()
  store.delete(SESSION_COOKIE)
  redirect("/admin/login")
}

export async function setBookingStatus(
  id: string,
  status: BookingStatus
): Promise<void> {
  await updateBookingStatus(id, status)
  revalidatePath("/admin")
}

export async function addManualBooking(
  _prev: { error?: string },
  formData: FormData
): Promise<{ error?: string }> {
  const date = String(formData.get("date") ?? "")
  const time = String(formData.get("time") ?? "")
  if (!date || !time) return { error: "Date and time are required." }
  await addBookingRequest({
    date: new Date(date).toISOString(),
    time,
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    jobTitle: String(formData.get("jobTitle") ?? ""),
    linkedin: "",
    url: "",
    service: String(formData.get("service") ?? ""),
    note: String(formData.get("note") ?? ""),
    status: "confirmed",
  })
  revalidatePath("/admin")
  return {}
}
