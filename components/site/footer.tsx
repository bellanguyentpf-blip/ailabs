import Link from "next/link"

import { Logo } from "@/components/site/logo"
import { BookCallDialog } from "@/components/site/book-call-dialog"
import { localeHref, type Locale } from "@/lib/routes"
import type { Dictionary } from "@/lib/dictionaries/en"

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear()

  const companyLinks: { label: string; path: string }[] = [
    { label: dict.nav.about, path: "/about" },
    { label: dict.nav.caseStudies, path: "/case-studies" },
    { label: dict.nav.pricing, path: "/pricing" },
    { label: dict.nav.blog, path: "/blog" },
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo lang={lang} />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {dict.footer.tagline}
            </p>
          </div>

          <FooterColumn title={dict.footer.servicesTitle}>
            {dict.servicesList.map((s) => (
              <FooterLink
                key={s.slug}
                href={localeHref(lang, `/services/${s.slug}`)}
              >
                {s.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={dict.footer.companyTitle}>
            {companyLinks.map((l) => (
              <FooterLink key={l.path} href={localeHref(lang, l.path)}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={dict.footer.getInTouch}>
            <Link
              href={localeHref(lang, "/contact")}
              className="link-underline inline-flex w-fit items-center text-sm text-foreground"
            >
              {dict.cta.contact}
            </Link>
            <BookCallDialog
              lang={lang}
              triggerLabel={dict.cta.bookCall}
              labels={dict.booking}
              services={dict.servicesList.map((s) => ({
                slug: s.slug,
                name: s.name,
              }))}
            />
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p className="font-mono">
            © {year} {dict.brand.name}. {dict.footer.rights}
          </p>
          <p className="font-mono">{dict.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
      </Link>
    </li>
  )
}
