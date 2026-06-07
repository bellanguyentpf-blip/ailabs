import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PageHero } from "@/components/site/page-hero"
import { Reveal } from "@/components/site/reveal"
import { CtaBand } from "@/components/site/cta-band"
import { getDictionary } from "@/lib/i18n"
import { isLocale, locales } from "@/lib/routes"

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
  return { title: dict.nav.about, description: dict.about.lead }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const { about } = dict

  return (
    <>
      <PageHero title={about.title} desc={about.lead} />

      {/* Story */}
      <section className="container-editorial py-16 md:py-24">
        <div className="max-w-3xl">
          <Reveal className="flex flex-col gap-6">
            {about.story.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-display text-2xl leading-snug font-medium text-balance md:text-3xl"
                    : "text-lg leading-relaxed text-muted-foreground text-pretty"
                }
              >
                {para}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="container-editorial py-12 md:py-16">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
            {about.stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1 bg-background p-7">
                <dt className="font-display text-4xl font-medium md:text-5xl">
                  {s.value}
                </dt>
                <dd className="text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Values */}
      <section className="container-editorial py-16 md:py-24">
        <h2 className="font-display text-3xl font-medium text-balance md:text-4xl">
          {about.valuesTitle}
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {about.values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 50}
              className="flex flex-col gap-3 bg-card p-8"
            >
              <span className="font-mono text-xs text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-medium">{v.title}</h3>
              <p className="text-muted-foreground text-pretty">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        lang={lang}
        title={about.ctaTitle}
        desc={about.ctaDesc}
        buttonLabel={dict.cta.contact}
      />
    </>
  )
}
