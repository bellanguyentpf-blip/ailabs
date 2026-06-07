import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PageHero } from "@/components/site/page-hero"
import { BlogList } from "@/components/site/blog-list"
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
  return { title: dict.nav.blog, description: dict.blog.desc }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <>
      <PageHero title={dict.blog.title} desc={dict.blog.desc} />

      <section className="container-editorial py-16 md:py-24">
        <BlogList
          lang={lang}
          posts={dict.blog.posts}
          categories={dict.blog.categories}
          allLabel={dict.blog.allCategory}
          readTimeSuffix={dict.blog.readTimeSuffix}
        />
      </section>
    </>
  )
}
