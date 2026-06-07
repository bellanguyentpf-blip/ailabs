import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/site/reveal"
import { AuditDialog, type AuditLabels } from "@/components/site/audit-dialog"
import { localeHref, type Locale } from "@/lib/routes"

export function CtaBand({
  lang,
  title,
  desc,
  buttonLabel,
  href = "/contact",
  audit,
}: {
  lang: Locale
  title: string
  desc: string
  buttonLabel: string
  href?: string
  audit?: { labels: AuditLabels; services: { slug: string; name: string }[] }
}) {
  const button = (
    <Button size="lg" variant="secondary" className="group h-11 px-5 text-sm">
      {buttonLabel}
          </Button>
  )
  return (
    <section className="container-editorial py-20 md:py-28">
      <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-primary px-8 py-16 text-primary-foreground md:px-16 md:py-20">
        {/* decorative glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-brand/30 blur-3xl"
        />
        <div className="relative flex max-w-3xl flex-col gap-6">
          <h2 className="font-display text-3xl leading-[1.05] font-medium text-balance md:text-5xl">
            {title}
          </h2>
          <p className="max-w-xl text-base text-primary-foreground/70 text-pretty md:text-lg">
            {desc}
          </p>
          <div>
            {audit ? (
              <AuditDialog
                labels={audit.labels}
                services={audit.services}
                trigger={button}
              />
            ) : (
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="group h-11 px-5 text-sm"
              >
                <Link href={localeHref(lang, href)}>
                  {buttonLabel}
                                  </Link>
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
