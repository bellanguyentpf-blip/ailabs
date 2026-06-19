import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/site/reveal"
import { ServiceSectionsAccordion } from "@/components/site/service-sections-accordion"
import { getDictionary } from "@/lib/i18n"
import { isLocale, locales, localeHref } from "@/lib/routes"
import { en } from "@/lib/dictionaries/en"

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    en.servicesList.map((s) => ({ lang, slug: s.slug }))
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
  const service = dict.servicesList.find((s) => s.slug === slug)
  if (!service) return {}
  return { title: service.name, description: service.summary }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const service = dict.servicesList.find((s) => s.slug === slug)
  if (!service) notFound()

  const proofTags: Record<string, string[]> = {
    "ai-website-development": ["Delivered in 7 days", "AI-powered workflow", "SEO & GEO ready", "Clients worldwide"],
    "seo-ai-search": ["AI-powered workflow", "SEO & GEO ready", "AEO & GEO ready", "Clients worldwide"],
    "ai-content-marketing": ["AI-powered workflow", "On-brand & consistent", "Clients worldwide"],
    "shopify-development": ["AI-powered workflow", "Conversion-first", "Clients worldwide"],
    "ai-training": ["Live sessions", "Hands-on & practical", "Vietnam only"],
  }
  const tags = proofTags[slug] ?? ["AI-powered workflow", "SEO & GEO ready", "Clients worldwide"]

  const others = dict.servicesList.filter((s) => s.slug !== slug)

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-editorial py-16 md:py-20">
          <Reveal className="flex flex-col gap-6">
            <h1 className="max-w-3xl font-display text-4xl leading-[1.05] font-medium text-balance md:text-6xl">
              {service.name}
            </h1>
            <p className="text-lg font-medium text-brand">{service.tagline}</p>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              {service.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild size="lg" className="group h-11 px-5">
                <Link href={localeHref(lang, "/contact")}>
                  {dict.cta.getProposal}
                                  </Link>
              </Button>
              <Link href={localeHref(lang, "/pricing")} className="flex items-center text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                {dict.nav.pricing}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* "Why" pull-quote */}
      <section className="border-b border-border bg-card">
        <div className="container-editorial py-12 md:py-16">
          <p className="border-l-[3px] border-brand pl-6 font-display text-xl font-medium leading-snug md:text-2xl lg:text-3xl">
            {service.why}
          </p>
        </div>
      </section>

      {/* Deliverables + Highlights */}
      <section className="container-editorial py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Deliverables */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-medium">
              {dict.services.deliverablesTitle}
            </h2>
            <ul className="flex flex-col gap-3">
              {service.deliverables.map((d) => (
                <li key={d} className="text-foreground">
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-medium">
              {"How we do it"}
            </h2>
            <ul className="flex flex-col gap-4">
              {service.highlights.map((h) => (
                <li key={h} className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Shopify flows */}
      {service.flows ? (
        <section className="border-t border-border">
          <div className="container-editorial py-10 md:py-14">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-medium">
                {dict.services.flowsTitle}
              </h2>
              <div className="overflow-hidden rounded-lg border border-border">
                {service.flows.map((f, i) => (
                  <div
                    key={f.name}
                    className={`grid items-center gap-3 px-5 py-3.5 sm:grid-cols-[1.2fr_2fr] ${
                      i > 0 ? "border-t border-border" : ""
                    }`}
                  >
                    <h3 className="font-display text-base font-medium">{f.name}</h3>
                    <p className="text-sm text-muted-foreground">{f.scope}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Training pricing */}
      {service.pricing ? (
        <section className="border-t border-border">
          <div className="container-editorial py-16 md:py-20">
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-medium md:text-5xl">
                    {service.pricing.price}
                  </span>
                  <span className="text-muted-foreground">
                    {service.pricing.unit} · {service.pricing.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {service.pricing.note}
                </p>
              </div>
              <Button asChild size="lg" className="group h-11 px-5">
                <Link href={localeHref(lang, "/contact")}>
                  {dict.cta.bookCall}
                                  </Link>
              </Button>
            </div>
          </div>
        </section>
      ) : null}

      {/* Testimonial */}
      <section className="border-t border-border bg-card">
        <div className="container-editorial py-12 md:py-16">
          <blockquote className="border-l-[3px] border-brand pl-6">
            <p className="font-display text-lg italic font-medium leading-snug md:text-xl">
              {service.testimonial
                ? <>&ldquo;{service.testimonial.quote}&rdquo;</>
                : <>&ldquo;AILABS rebuilt our site and content engine. Organic traffic more than doubled and we finally publish on schedule, every week.&rdquo;</>
              }
            </p>
            <footer className="mt-3">
              <span className="text-sm text-muted-foreground">
                {service.testimonial ? service.testimonial.author : "Linh Tran"}
              </span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Mid-page CTA */}
      {service.midCta ? (
        <section className="border-y border-border bg-foreground text-background">
          <div className="container-editorial flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1">
              <p className="font-display text-xl font-medium md:text-2xl">
                {service.midCta.headline}
              </p>
              <p className="text-sm text-background/60">{service.midCta.sub}</p>
            </div>
            <Button asChild size="lg" variant="outline" className="h-11 shrink-0 border-background/30 bg-transparent px-6 text-background hover:bg-background hover:text-foreground">
              <Link href={localeHref(lang, "/contact")}>
                {dict.cta.getProposal}
              </Link>
            </Button>
          </div>
        </section>
      ) : null}

      {/* Long-form sections — accordion */}
      {service.sections ? (
        <section className="bg-card">
          <div className="container-editorial py-16 md:py-20">
            <div className="mb-8">
              <h2 className="font-display text-2xl font-medium">{service.sectionsTitle ?? "In depth"}</h2>
            </div>
            <ServiceSectionsAccordion sections={service.sections} />
            <div className="mt-14 flex flex-col items-start gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-lg font-medium">
                Ready to see this applied to your business?
              </p>
              <Button asChild size="lg" className="group h-11 shrink-0 px-6">
                <Link href={localeHref(lang, service.sectionsCta?.href ?? "/contact")}>
                  {service.sectionsCta?.label ?? "Get a free audit"}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      {service.faq ? (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: service.faq.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: { "@type": "Answer", text: item.a },
                })),
              }),
            }}
          />
          <section className="border-t border-border">
            <div className="container-editorial py-16 md:py-20">
              <h2 className="font-display text-2xl font-medium mb-10">
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col divide-y divide-border">
                {service.faq.map((item) => (
                  <details key={item.q} className="group py-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <span className="font-display text-base font-medium leading-snug">
                        {item.q}
                      </span>
                      <span className="mt-0.5 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : null}

      {/* Related services */}
      <section className="border-t border-border bg-card">
        <div className="container-editorial py-16 md:py-20">
          <h2 className="font-display text-2xl font-medium">
            {dict.services.relatedTitle}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={localeHref(lang, `/services/${s.slug}`)}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-background p-5 transition-colors hover:border-brand/40"
              >
                <div className="flex justify-end">
                  <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-brand" />
                </div>
                <h3 className="font-display text-base font-medium">{s.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
