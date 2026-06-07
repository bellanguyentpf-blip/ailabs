"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { localeHref, type Locale } from "@/lib/routes"
import type { BlogPost } from "@/lib/dictionaries/en"

type Category = { slug: string; name: string }

export function BlogList({
  lang,
  posts,
  categories,
  allLabel,
  readTimeSuffix,
}: {
  lang: Locale
  posts: BlogPost[]
  categories: Category[]
  allLabel: string
  readTimeSuffix: string
}) {
  const [active, setActive] = React.useState<string>("all")

  const filtered =
    active === "all" ? posts : posts.filter((p) => p.category === active)

  const categoryName = (slug: string) =>
    categories.find((c) => c.slug === slug)?.name ?? slug

  const formatDate = (iso: string) =>
    new Intl.DateTimeFormat(lang === "vi" ? "vi-VN" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(iso))

  const chips = [{ slug: "all", name: allLabel }, ...categories]

  return (
    <div className="flex flex-col gap-10">
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setActive(c.slug)}
            aria-pressed={active === c.slug}
            className={cn(
              "rounded-full border px-4 py-1.5 font-mono text-xs tracking-wide uppercase transition-colors",
              active === c.slug
                ? "border-brand bg-brand text-brand-foreground"
                : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
            )}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={localeHref(lang, `/blog/${post.slug}`)}
            className="card-elevated card-interactive group flex h-full flex-col gap-4 p-6"
          >
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="font-mono text-[0.7rem] uppercase">
                {categoryName(post.category)}
              </Badge>
              <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-brand" />
            </div>
            <h3 className="font-display text-xl leading-snug font-medium text-balance">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground text-pretty">
              {post.excerpt}
            </p>
            <div className="mt-auto flex items-center gap-2 border-t border-border pt-4 font-mono text-xs text-muted-foreground">
              <span>{formatDate(post.date)}</span>
              <span className="opacity-50">·</span>
              <span>
                {post.readTime} {readTimeSuffix}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
