import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Check, LineChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PageHero } from "@/components/site/page-hero"
import { Reveal } from "@/components/site/reveal"
import { getDictionary } from "@/lib/i18n"
import { isLocale, locales, localeHref } from "@/lib/routes"
import { cn } from "@/lib/utils"

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
  return { title: dict.nav.pricing, description: dict.pricing.desc }
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const { pricing } = dict

  return (
    <>
      <PageHero title={pricing.title} desc={pricing.desc} />

      {/* Tiers */}
      <section className="container-editorial py-16 md:py-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {pricing.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 60}>
              <div
                className={cn(
                  "flex h-full flex-col gap-6 p-8",
                  tier.featured
                    ? "rounded-2xl border-2 border-brand bg-card shadow-[0_10px_30px_-18px_oklch(0_0_0/0.18)]"
                    : "card-elevated"
                )}
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl font-medium">
                    {tier.name}
                  </h2>
                  {tier.featured ? (
                    <Badge className="bg-brand text-brand-foreground">★</Badge>
                  ) : null}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                    {pricing.startingAt}
                  </span>
                  <span className="font-display text-3xl font-medium">
                    {tier.startingAt}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground text-pretty">
                  {tier.forWho}
                </p>
                <ul className="flex flex-col gap-3 border-t border-border pt-5">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-auto w-full"
                  variant={tier.featured ? "default" : "outline"}
                >
                  <Link href={localeHref(lang, "/contact")}>
                    {dict.cta.contact}
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center font-mono text-xs text-muted-foreground">
          {pricing.note}
        </p>
      </section>

      {/* Training */}
      <section className="container-editorial pb-16 md:pb-20">
        <Reveal className="flex flex-col gap-6 rounded-2xl border border-border bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:justify-between md:p-12">
          <div className="flex max-w-xl flex-col gap-3">
            <h2 className="font-display text-2xl font-medium md:text-3xl">
              {pricing.training.title}
            </h2>
            <p className="text-primary-foreground/70 text-pretty">
              {pricing.training.desc}
            </p>
            <p className="text-xs text-primary-foreground/50">
              {pricing.training.note}
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl font-medium md:text-5xl">
                {pricing.training.price}
              </span>
              <span className="text-primary-foreground/60">
                {pricing.training.unit}
              </span>
            </div>
            <span className="font-mono text-xs text-primary-foreground/60">
              {pricing.training.duration}
            </span>
            <Button asChild size="lg" variant="secondary" className="group h-11 px-5">
              <Link href={localeHref(lang, "/contact")}>
                {pricing.training.cta}
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Demo & tracking */}
      <section className="border-y border-border bg-card">
        <div className="container-editorial grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <Reveal className="flex flex-col gap-4">
            <h2 className="font-display text-3xl font-medium text-balance md:text-4xl">
              {pricing.demo.title}
            </h2>
            <p className="max-w-md text-muted-foreground text-pretty">
              {pricing.demo.desc}
            </p>
          </Reveal>
          <Reveal delay={80} className="flex flex-col justify-center gap-3">
            {pricing.demo.points.map((p) => (
              <div
                key={p}
                className="flex items-center gap-3 rounded-xl border border-border bg-background p-4"
              >
                <LineChart className="size-5 shrink-0 text-brand" />
                <span className="text-sm">{p}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-editorial py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-medium text-balance md:text-4xl">
              {pricing.faq.title}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Accordion type="single" collapsible className="w-full">
              {pricing.faq.items.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-display text-lg font-medium">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  )
}
