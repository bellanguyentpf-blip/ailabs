import type { Metadata } from "next"
import Image from "next/image"
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
  const next = dict.caseStudiesList[(index + 1) % dict.caseStudiesList.length]

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        {/* Ghost monogram watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 top-0 select-none font-display font-bold leading-none text-[32vw] text-foreground/[0.035] md:text-[22vw]"
        >
          {cs.monogram}
        </span>

        <div className="container-editorial relative py-20 md:py-32">
          <Reveal className="flex flex-col gap-8">
            {/* Meta row */}
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary font-mono text-[10px] font-bold tracking-wider text-primary-foreground">
                {cs.monogram}
              </span>
              <span className="h-px w-6 bg-border" />
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {cs.sector}
              </span>
              <span className="font-mono text-xs text-muted-foreground/40">{cs.year}</span>
            </div>

            {/* Client name */}
            <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.02] text-balance md:text-7xl lg:text-[5.5rem]">
              {cs.client}
            </h1>

            {/* Summary */}
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
              {cs.summary}
            </p>

            {/* Service tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {cs.services.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-full px-4 py-1 font-mono text-xs tracking-wide font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Results — inverted black band ────────────────────── */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-editorial py-16 md:py-24">
          <Reveal>
            <p className="mb-10 font-mono text-[10px] tracking-widest text-primary-foreground/30 uppercase">
              {dict.caseStudies.resultsTitle}
            </p>
            <dl className={`grid grid-cols-2 gap-x-6 gap-y-0 ${cs.results.length === 4 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
              {cs.results.map((r) => (
                <div
                  key={r.label}
                  className="flex flex-col gap-2 border-t border-primary-foreground/[0.08] py-8"
                >
                  <dt className="font-display text-4xl font-medium leading-none text-brand md:text-5xl">
                    {r.metric}
                  </dt>
                  <dd className="text-xs text-primary-foreground/45 leading-relaxed">{r.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Challenge + Solution — editorial row layout ──────── */}
      <section className="border-b border-border bg-background">
        <div className="container-editorial py-20 md:py-28">
          <div className="divide-y divide-border">
            {[
              { no: "01", title: dict.caseStudies.challengeTitle, body: cs.challenge, delay: 0 },
              { no: "02", title: dict.caseStudies.solutionTitle, body: cs.solution, delay: 80 },
            ].map(({ no, title, body, delay }) => (
              <Reveal key={no} delay={delay}>
                <div className="grid gap-4 py-12 md:grid-cols-[5rem_1fr_2fr] md:gap-16 md:py-16 md:items-start">
                  <span className="font-mono text-5xl font-bold leading-none text-brand/[0.18] md:text-6xl">
                    {no}
                  </span>
                  <h2 className="font-display text-2xl font-medium md:text-3xl md:pt-1">
                    {title}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image gallery ────────────────────────────────────── */}
      {cs.images && cs.images.length > 0 && (
        <section className="border-b border-border bg-card">
          <div className="container-editorial py-16 md:py-20">
            <div className={`grid gap-5 ${cs.images.length === 1 ? "" : "md:grid-cols-2"}`}>
              {cs.images.map((img) => (
                <Reveal key={img.src}>
                  <div className="overflow-hidden rounded-xl border border-border">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={1200}
                      height={800}
                      className="w-full object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Next case study — full-bleed teaser ──────────────── */}
      <section className="bg-background">
        <Link
          href={localeHref(lang, `/case-studies/${next.slug}`)}
          className="group relative block overflow-hidden"
        >
          {/* Ghost monogram for next client */}
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -right-4 select-none font-display font-bold leading-none text-[22vw] text-foreground/[0.03]"
          >
            {next.monogram}
          </span>

          <div className="container-editorial relative flex items-center justify-between gap-8 border-t border-border py-16 md:py-24">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground/50 uppercase">
                {dict.caseStudies.nextLabel}
              </span>
              <h2 className="font-display text-4xl font-medium leading-tight transition-colors duration-300 group-hover:text-brand md:text-6xl">
                {next.client}
              </h2>
              <p className="max-w-sm text-sm text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                {next.summary}
              </p>
            </div>
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-primary-foreground md:size-16">
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>
      </section>
    </>
  )
}
