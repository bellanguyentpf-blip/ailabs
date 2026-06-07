import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import { CtaBand } from "@/components/site/cta-band"
import { AuditDialog } from "@/components/site/audit-dialog"
import { getDictionary } from "@/lib/i18n"
import { isLocale, localeHref } from "@/lib/routes"
import { notFound } from "next/navigation"

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const { home } = dict

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <Image
          src="/aiwebsite.png"
          alt=""
          fill
          priority
          className="object-cover object-center -z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div className="container-editorial pt-16 pb-12 md:pt-24 md:pb-16 relative z-10">
          <Reveal>
            <h1 className="max-w-[16ch] font-display text-[clamp(2.6rem,8vw,6rem)] leading-[0.95] font-medium tracking-[-0.02em] text-balance">
              {home.hero.titleLead}{" "}
              <span className="relative inline-block text-brand italic">
                {home.hero.titleEmphasis}
              </span>{" "}
              {home.hero.titleTail}
            </h1>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-end">
            <Reveal delay={160}>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                {home.hero.subtitle}
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground/70">
                <span className="text-base">🌏</span>
                {home.hero.markets}
              </p>
            </Reveal>
            <Reveal delay={220} className="flex flex-wrap gap-3 md:justify-end">
              <AuditDialog
                labels={dict.audit}
                services={dict.servicesList.map((s) => ({
                  slug: s.slug,
                  name: s.name,
                }))}
                trigger={
                  <Button size="lg" className="group h-11 px-5">
                    {dict.cta.audit}
                    <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                  </Button>
                }
              />
              <Button asChild size="lg" variant="outline" className="h-11 px-5">
                <Link href={localeHref(lang, "/contact")}>{dict.cta.contact}</Link>
              </Button>
            </Reveal>
          </div>
        </div>

        {/* stats strip */}
        <Reveal delay={280} className="container-editorial pb-12 md:pb-16 relative z-10">
          <dl className="grid grid-cols-2 divide-x divide-y divide-border border-t border-l border-border md:grid-cols-4 md:divide-y-0">
            {home.stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1 p-5 md:p-6">
                <dt className="font-display text-3xl font-medium md:text-4xl">
                  {s.value}
                </dt>
                <dd className="text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* ── Trusted by ───────────────────────────────────────── */}
      <section className="border-y border-border bg-card">
        <div className="container-editorial flex flex-col items-center gap-7 py-12">
          <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            {home.trustedBy}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12">
            {[
              { name: "Precio Fishbone", src: "/IMG_0522.JPG", h: 36, href: "https://www.preciofishbone.com/" },
              { name: "G8tewayy", src: "/G8WayyMainLogo-1.png", h: 56, href: "https://www.g8wayy.com/" },
              { name: "Beauty by Hien", src: "/beautybyhienlogo.png", h: 38, href: "https://www.beautystudiobyhien.se/" },
              { name: "Couture Bridal Lace", src: "/couturebridalla.avif", h: 38, href: "https://www.couturebridallace.com/" },
              { name: "Laban", src: "/laban.png", h: 40, href: "https://labancapital.vn/" },
              { name: "Macv", src: "/macv-logo-removebg.png", h: 34, href: "https://www.macv.com.vn/" },
              { name: "Miracle Meals", src: "/MIRACLE-MEALS-favicon.png", h: 56, href: "https://www.miraclemeals.org/" },
              { name: "An Scent", src: "/an-scent.png", h: 64, href: undefined },
            ].map((client) => (
              <li key={client.name} className="flex items-center">
                {client.src ? (
                  <a href={client.href ?? undefined} target="_blank" rel="noopener noreferrer" aria-label={client.name}>
                    <Image
                      src={client.src}
                      alt={client.name}
                      height={client.h}
                      width={client.h * 4}
                      className="object-contain grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100"
                      style={{ height: client.h, width: "auto" }}
                    />
                  </a>
                ) : (
                  <span className="font-display text-lg font-semibold tracking-tight text-foreground/40 sm:text-xl">
                    {client.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="container-editorial py-20 md:py-28">
        <SectionHeading
          title={home.servicesSection.title}
          desc={home.servicesSection.desc}
        />
        <div className="mt-12 border-t border-border">
          {dict.servicesList.map((s, i) => (
            <Reveal key={s.slug} delay={i * 40}>
              <Link
                href={localeHref(lang, `/services/${s.slug}`)}
                className="group grid items-center gap-4 border-b border-border py-7 md:grid-cols-[1.4fr_2fr_auto] md:gap-8"
              >
                <h3 className="font-display text-xl font-medium md:text-2xl">
                  {s.name}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty md:text-base">
                  {s.summary}
                </p>
                <span className="hidden size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground md:flex">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="border-y border-border bg-card">
        <div className="container-editorial py-20 md:py-28">
          <SectionHeading title={home.process.title} />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {home.process.steps.map((step, i) => (
              <Reveal
                key={step.no}
                delay={i * 60}
                className="flex flex-col gap-3 bg-background p-7"
              >
                <span className="font-mono text-xs text-brand">{step.no}</span>
                <h3 className="font-display text-xl font-medium">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case studies ─────────────────────────────────────── */}
      <section className="container-editorial py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            title={home.caseStudiesSection.title}
            desc={home.caseStudiesSection.desc}
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href={localeHref(lang, "/case-studies")}>
              {dict.cta.viewAll}
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dict.caseStudiesList.slice(0, 3).map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 60}>
              <Link
                href={localeHref(lang, `/case-studies/${cs.slug}`)}
                className="card-elevated card-interactive group flex h-full flex-col gap-5 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-lg bg-primary font-display text-base font-semibold text-primary-foreground">
                    {cs.monogram}
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-brand" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-xl font-medium">
                    {cs.client}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {cs.sector} · {cs.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground text-pretty">
                  {cs.summary}
                </p>
                <div className="mt-auto flex gap-5 border-t border-border pt-4">
                  {cs.results.slice(0, 2).map((r) => (
                    <div key={r.label} className="flex flex-col">
                      <span className="font-display text-2xl font-medium text-brand">
                        {r.metric}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {r.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="border-t border-border bg-card">
        <div className="container-editorial py-20 md:py-28">
          <SectionHeading
            title={home.testimonials.title}
            desc={home.testimonials.desc}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {home.testimonials.items.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 60}
                className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-background p-7"
              >
                <p className="text-lg leading-relaxed text-foreground text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto border-t border-border pt-5">
                  <span className="text-sm font-semibold text-foreground">
                    {t.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        lang={lang}
        title={home.ctaBand.title}
        desc={home.ctaBand.desc}
        buttonLabel={dict.cta.audit}
        audit={{
          labels: dict.audit,
          services: dict.servicesList.map((s) => ({
            slug: s.slug,
            name: s.name,
          })),
        }}
      />
    </>
  )
}
