import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight, Check } from "lucide-react"

import { PageHero } from "@/components/site/page-hero"
import { Reveal } from "@/components/site/reveal"
import { CtaBand } from "@/components/site/cta-band"
import { Badge } from "@/components/ui/badge"
import { getDictionary } from "@/lib/i18n"
import { isLocale, locales, localeHref } from "@/lib/routes"

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return { title: dict.nav.services, description: dict.services.desc }
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <PageHero title={dict.services.title} desc={dict.services.desc} />

      <section className="container-editorial py-16 md:py-24">
        <div className="flex flex-col gap-6">
          {dict.servicesList.map((s, i) => (
            <Reveal key={s.slug} delay={i * 50}>
              <Link
                href={localeHref(lang, `/services/${s.slug}`)}
                className="card-elevated card-interactive group grid gap-6 p-7 md:grid-cols-[auto_1fr] md:p-9"
              >
                <span className="font-mono text-sm text-muted-foreground">
                  {s.no}
                </span>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1.5">
                      <h2 className="font-display text-2xl font-medium md:text-3xl">
                        {s.name}
                      </h2>
                      <p className="text-brand">{s.tagline}</p>
                    </div>
                    <span className="hidden size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground sm:flex">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="max-w-2xl text-muted-foreground text-pretty">
                    {s.summary}
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {s.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  {s.pricing ? (
                    <Badge variant="secondary" className="w-fit font-mono">
                      {s.pricing.price} · {s.pricing.unit} · {s.pricing.duration}
                    </Badge>
                  ) : null}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        lang={lang}
        title={dict.home.ctaBand.title}
        desc={dict.home.ctaBand.desc}
        buttonLabel={dict.cta.contact}
      />
    </>
  )
}
