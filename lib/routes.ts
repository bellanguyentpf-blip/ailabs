// Client-safe i18n/routing helpers (no "server-only" import).

export const locales = ["en", "vi"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export const localeLabels: Record<Locale, { short: string; name: string }> = {
  en: { short: "EN", name: "English" },
  vi: { short: "VI", name: "Tiếng Việt" },
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Build a localized href, e.g. localeHref("vi", "/services") -> "/vi/services" */
export function localeHref(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`
  return `/${locale}${clean}`
}

/** Swap the locale segment of an existing pathname. */
export function switchLocaleInPath(pathname: string, next: Locale): string {
  const segments = pathname.split("/")
  // segments[0] === "" because of leading slash; segments[1] is the locale
  if (segments.length > 1 && isLocale(segments[1])) {
    segments[1] = next
    return segments.join("/") || `/${next}`
  }
  return `/${next}${pathname}`
}

export type NavKey =
  | "home"
  | "services"
  | "caseStudies"
  | "pricing"
  | "about"
  | "blog"
  | "contact"

export const navRoutes: { key: NavKey; path: string }[] = [
  { key: "services", path: "/services" },
  { key: "caseStudies", path: "/case-studies" },
  { key: "pricing", path: "/pricing" },
  { key: "about", path: "/about" },
  { key: "blog", path: "/blog" },
  { key: "contact", path: "/contact" },
]
