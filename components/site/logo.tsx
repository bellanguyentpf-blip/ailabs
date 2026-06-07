import Link from "next/link"
import { cn } from "@/lib/utils"
import { localeHref, type Locale } from "@/lib/routes"

export function Logo({
  lang,
  className,
}: {
  lang: Locale
  className?: string
}) {
  return (
    <Link
      href={localeHref(lang, "/")}
      className={cn(
        "group inline-flex items-baseline font-display text-xl font-semibold tracking-tight",
        className
      )}
      aria-label="AILABS home"
    >
      <span>AILABS</span>
      <span className="ml-0.5 text-brand transition-transform duration-300 group-hover:scale-125">
        .
      </span>
    </Link>
  )
}
