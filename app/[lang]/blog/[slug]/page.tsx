import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/site/reveal"
import { getDictionary } from "@/lib/i18n"
import { isLocale, locales, localeHref, type Locale } from "@/lib/routes"
import { en } from "@/lib/dictionaries/en"

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    en.blog.posts.map((p) => ({ lang, slug: p.slug }))
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
  const post = dict.blog.posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  }
}

function formatDate(iso: string, lang: Locale) {
  return new Intl.DateTimeFormat(lang === "vi" ? "vi-VN" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const post = dict.blog.posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const categoryName =
    dict.blog.categories.find((c) => c.slug === post.category)?.name ??
    post.category

  const related = dict.blog.posts
    .filter((p) => p.slug !== slug)
    .sort((a) => (a.category === post.category ? -1 : 1))
    .slice(0, 2)

  return (
    <>
      <article className="container-editorial py-16 md:py-24">
        <Link
          href={localeHref(lang, "/blog")}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          {dict.cta.allPosts}
        </Link>

        <Reveal className="mx-auto mt-8 flex max-w-2xl flex-col gap-5">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="font-mono text-[0.7rem] uppercase">
              {categoryName}
            </Badge>
            <span className="font-mono text-xs text-muted-foreground">
              {formatDate(post.date, lang)} · {post.readTime}{" "}
              {dict.blog.readTimeSuffix}
            </span>
          </div>
          <h1 className="font-display text-4xl leading-[1.08] font-medium text-balance md:text-5xl">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 border-y border-border py-4">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground">
              A
            </span>
            <span className="text-sm text-muted-foreground">
              {dict.blog.byLabel}{" "}
              <span className="text-foreground">{post.author}</span>
            </span>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-6">
          {post.body.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "font-display text-xl leading-relaxed text-foreground text-pretty first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:font-medium first-letter:text-brand"
                  : "text-lg leading-relaxed text-muted-foreground text-pretty"
              }
            >
              {para}
            </p>
          ))}
        </div>
      </article>

      {/* Related */}
      <section className="border-t border-border bg-card">
        <div className="container-editorial py-16 md:py-20">
          <h2 className="font-display text-2xl font-medium">
            {dict.blog.relatedTitle}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={localeHref(lang, `/blog/${p.slug}`)}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-brand/40"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="font-mono text-[0.7rem] uppercase">
                    {dict.blog.categories.find((c) => c.slug === p.category)
                      ?.name ?? p.category}
                  </Badge>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-brand" />
                </div>
                <h3 className="font-display text-lg font-medium text-balance">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
