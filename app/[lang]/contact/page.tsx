import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Clock, Mail } from "lucide-react"

import { PageHero } from "@/components/site/page-hero"
import { Reveal } from "@/components/site/reveal"
import { ContactForm } from "@/components/site/contact-form"
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
  return { title: dict.nav.contact, description: dict.contact.desc }
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ intent?: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const { contact } = dict
  const { intent } = await searchParams
  const defaultService =
    intent === "audit" ? "ai-website-development" : undefined

  return (
    <>
      <PageHero title={contact.title} desc={contact.desc} />

      <section className="container-editorial py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* Form */}
          <Reveal className="rounded-2xl border border-border bg-card p-7 md:p-10">
            <ContactForm
              labels={contact.form}
              defaultService={defaultService}
              services={dict.servicesList.map((s) => ({
                slug: s.slug,
                name: s.name,
              }))}
            />
          </Reveal>

          {/* Info */}
          <Reveal delay={80} className="flex flex-col gap-6">
            <div className="card-elevated flex flex-col gap-3 p-6">
              <span className="text-sm font-semibold text-foreground">
                {contact.emailLabel}
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="link-underline inline-flex w-fit items-center gap-2 font-display text-xl font-medium"
              >
                <Mail className="size-5 text-brand" />
                {contact.email}
              </a>
            </div>

            <div className="card-elevated flex flex-col gap-3 p-6">
              <span className="text-sm font-semibold text-foreground">
                {contact.infoTitle}
              </span>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand" />
                {contact.responseNote}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground">
              <p className="font-display text-xl leading-snug font-medium text-balance">
                {dict.brand.name}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/70 text-pretty">
                {dict.footer.tagline}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
