"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Logo } from "@/components/site/logo"
import { LanguageSwitcher } from "@/components/site/language-switcher"
import { BookCallDialog, type BookingLabels } from "@/components/site/book-call-dialog"
import { localeHref, navRoutes, type Locale, type NavKey } from "@/lib/routes"

type ServiceLink = { slug: string; name: string }

export function Navbar({
  lang,
  labels,
  services,
  ctaLabel,
  viewAllLabel,
  bookingLabels,
}: {
  lang: Locale
  labels: Record<NavKey, string>
  services: ServiceLink[]
  ctaLabel: string
  viewAllLabel: string
  bookingLabels: BookingLabels
}) {
  const pathname = usePathname() ?? ""
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (path: string) => {
    const full = localeHref(lang, path)
    return pathname === full || pathname.startsWith(`${full}/`)
  }

  const simpleRoutes = navRoutes.filter((r) => r.key !== "services")

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div className="container-editorial flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6 lg:gap-10">
          <Logo lang={lang} />

          {/* Desktop nav */}
          <NavigationMenu className="hidden lg:flex" viewport={false}>
            <NavigationMenuList className="gap-0.5">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent text-sm font-medium",
                    isActive("/services") && "text-foreground"
                  )}
                >
                  {labels.services}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[240px] gap-0.5 p-2">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={localeHref(lang, `/services/${s.slug}`)}
                            className="px-3 py-2.5 text-sm font-medium"
                          >
                            {s.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href={localeHref(lang, "/services")}
                          className="px-3 py-2.5 text-sm text-muted-foreground"
                        >
                          {viewAllLabel}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {simpleRoutes
                .map((r) => (
                  <NavigationMenuItem key={r.key}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={localeHref(lang, r.path)}
                        className={cn(
                          "inline-flex h-8 items-center rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                          isActive(r.path) && "text-foreground"
                        )}
                      >
                        {labels[r.key]}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 sm:flex">
            <LanguageSwitcher lang={lang} />
          </div>
          <div className="hidden lg:block">
            <BookCallDialog
              lang={lang}
              labels={bookingLabels}
              services={services}
              trigger={<Button size="sm">{ctaLabel}</Button>}
            />
          </div>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm p-0">
              <SheetHeader className="border-b border-border">
                <SheetTitle className="text-left">
                  <Logo lang={lang} />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 overflow-y-auto p-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="services" className="border-b-0">
                    <AccordionTrigger className="py-2 text-base font-medium hover:no-underline">
                      {labels.services}
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <div className="flex flex-col gap-1 pl-1">
                        <SheetClose asChild>
                          <Link
                            href={localeHref(lang, "/services")}
                            className="py-1.5 text-sm text-muted-foreground hover:text-foreground"
                          >
                            {viewAllLabel}
                          </Link>
                        </SheetClose>
                        {services.map((s) => (
                          <SheetClose asChild key={s.slug}>
                            <Link
                              href={localeHref(lang, `/services/${s.slug}`)}
                              className="py-1.5 text-sm text-muted-foreground hover:text-foreground"
                            >
                              {s.name}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {simpleRoutes.map((r) => (
                  <SheetClose asChild key={r.key}>
                    <Link
                      href={localeHref(lang, r.path)}
                      className={cn(
                        "border-b border-border/60 py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground",
                        isActive(r.path) && "text-foreground"
                      )}
                    >
                      {labels[r.key]}
                    </Link>
                  </SheetClose>
                ))}

                <div className="mt-4">
                  <LanguageSwitcher lang={lang} />
                </div>
                <BookCallDialog
                  lang={lang}
                  labels={bookingLabels}
                  services={services}
                  trigger={<Button className="mt-2 w-full">{ctaLabel}</Button>}
                />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
