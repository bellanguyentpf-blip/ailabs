import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight } from "lucide-react"

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
  return { title: dict.nav.caseStudies, description: dict.caseStudies.desc }
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <PageHero title={dict.caseStudies.title} desc={dict.caseStudies.desc} />

      <section className="container-editorial py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {dict.caseStudiesList.map((cs, i) => (
            <Reveal
              key={cs.slug}
              delay={i * 50}
              className={i % 3 === 0 ? "md:col-span-2" : ""}
            >
              <Link
                href={localeHref(lang, `/case-studies/${cs.slug}`)}
                className="card-elevated card-interactive group flex h-full flex-col gap-6 p-7 md:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex size-14 items-center justify-center rounded-xl bg-primary font-display text-lg font-semibold text-primary-foreground">
                      {cs.monogram}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <h2 className="font-display text-2xl font-medium">
                        {cs.client}
                      </h2>
                      <span className="font-mono text-xs text-muted-foreground">
                        {cs.sector} · {cs.year}
                      </span>
                    </div>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>

                <p className="max-w-2xl text-muted-foreground text-pretty">
                  {cs.summary}
                </p>

                <div className="mt-auto flex flex-wrap items-end justify-between gap-6 border-t border-border pt-6">
                  <div className="flex flex-wrap gap-8">
                    {cs.results.map((r) => (
                      <div key={r.label} className="flex flex-col">
                        <span className="font-display text-3xl font-medium text-brand">
                          {r.metric}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {r.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.services.map((tag) => (
                      <Badge key={tag} variant="outline" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
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
