import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Montserrat } from "next/font/google"

import "../globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { getDictionary } from "@/lib/i18n"
import { isLocale, locales, type NavKey } from "@/lib/routes"

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

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
  const title = `${dict.brand.name} · ${dict.brand.tagline}`
  return {
    metadataBase: new URL("https://ailabs.example"),
    title: {
      default: title,
      template: `%s · ${dict.brand.name}`,
    },
    description: dict.home.hero.subtitle,
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description: dict.home.hero.subtitle,
      siteName: dict.brand.name,
      locale: lang === "vi" ? "vi_VN" : "en_US",
      type: "website",
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  const navLabels: Record<NavKey, string> = {
    home: dict.nav.home,
    services: dict.nav.services,
    caseStudies: dict.nav.caseStudies,
    pricing: dict.nav.pricing,
    about: dict.nav.about,
    blog: dict.nav.blog,
    contact: dict.nav.contact,
  }

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={cn(montserrat.className, "antialiased")}
      style={
        {
          "--font-display": montserrat.style.fontFamily,
          "--font-sans": montserrat.style.fontFamily,
          "--font-mono": montserrat.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <body className="min-h-svh font-sans">
        <ThemeProvider>
          <TooltipProvider delayDuration={200}>
            <Navbar
              lang={lang}
              labels={navLabels}
              viewAllLabel={dict.cta.viewAll}
              ctaLabel={dict.cta.bookCall}
              bookingLabels={dict.booking}
              services={dict.servicesList.map((s) => ({
                slug: s.slug,
                name: s.name,
              }))}
            />
            <main className="pt-16">{children}</main>
            <Footer lang={lang} dict={dict} />
            <Toaster position="top-center" />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
