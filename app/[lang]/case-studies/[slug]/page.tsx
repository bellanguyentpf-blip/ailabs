import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/site/reveal"
import { getDictionary } from "@/lib/i18n"
import { isLocale, locales, localeHref } from "@/lib/routes"
import { en } from "@/lib/dictionaries/en"

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    en.caseStudiesList.map((cs) => ({ lang, slug: cs.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)
  const cs = dict.caseStudiesList.find((c) => c.slug === slug)
  if (!cs) return {}
  return { title: `${cs.client} · ${dict.nav.caseStudies}`, description: cs.summary }
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const index = dict.caseStudiesList.findIndex((c) => c.slug === slug)
  if (index === -1) notFound()
  const cs = dict.caseStudiesList[index]
  const next =
    dict.caseStudiesList[(index + 1) % dict.caseStudiesList.length]

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-editorial py-16 md:py-24">
          <Reveal className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="flex size-16 items-center justify-center rounded-2xl bg-primary font-display text-2xl font-semibold text-primary-foreground">
                {cs.monogram}
              </span>
              <span className="font-mono text-sm text-muted-foreground">
                {cs.sector} · {cs.year}
              </span>
            </div>
            <h1 className="max-w-3xl font-display text-4xl leading-[1.05] font-medium text-balance md:text-6xl">
              {cs.client}
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground text-pretty md:text-xl">
              {cs.summary}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {cs.services.map((tag) => (
                <Badge key={tag} variant="outline" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results band */}
      <section className="border-b border-border bg-card">
        <div className="container-editorial py-12 md:py-16">
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {cs.results.map((r) => (
              <div key={r.label} className="flex flex-col gap-1 bg-background p-7">
                <dt className="font-display text-5xl font-medium text-brand">
                  {r.metric}
                </dt>
                <dd className="text-sm text-muted-foreground">{r.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="container-editorial py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-medium">
              {dict.caseStudies.challengeTitle}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              {cs.challenge}
            </p>
          </Reveal>
          <Reveal delay={80} className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-medium">
              {dict.caseStudies.solutionTitle}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              {cs.solution}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Next case study */}
      <section className="border-t border-border">
        <Link
          href={localeHref(lang, `/case-studies/${next.slug}`)}
          className="group block"
        >
          <div className="container-editorial flex items-center justify-between gap-6 py-12 md:py-16">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">
                {dict.caseStudies.nextLabel}
              </span>
              <h2 className="font-display text-3xl font-medium transition-colors group-hover:text-brand md:text-5xl">
                {next.client}
              </h2>
            </div>
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground md:size-14">
              <ArrowRight className="size-5" />
            </span>
          </div>
        </Link>
      </section>
    </>
  )
}
