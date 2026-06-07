import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["en", "vi"] as const
const defaultLocale = "en"

function getLocale(request: NextRequest): string {
  const accept = request.headers.get("accept-language")
  if (accept?.toLowerCase().includes("vi")) return "vi"
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )
  if (hasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // Skip Next internals, API routes, the admin area, and any file with an extension
  matcher: ["/((?!_next|api|admin|.*\\..*).*)"],
}
