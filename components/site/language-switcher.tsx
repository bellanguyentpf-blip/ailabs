"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  locales,
  localeLabels,
  switchLocaleInPath,
  type Locale,
} from "@/lib/routes"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname() ?? `/${lang}`

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="font-mono text-xs">
          {localeLabels[lang].short}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        {locales.map((loc) => (
          <DropdownMenuItem key={loc} asChild>
            <Link
              href={switchLocaleInPath(pathname, loc)}
              className="flex items-center justify-between"
            >
              {localeLabels[loc].name}
              <Check
                className={cn(
                  "size-3.5 text-brand",
                  loc === lang ? "opacity-100" : "opacity-0"
                )}
              />
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
