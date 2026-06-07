import { Reveal } from "@/components/site/reveal"
import { cn } from "@/lib/utils"

export function PageHero({
  title,
  desc,
  className,
}: {
  title: React.ReactNode
  desc?: string
  className?: string
}) {
  return (
    <section className={cn("relative border-b border-border", className)}>
      <div className="container-editorial py-16 md:py-24">
        <Reveal className="flex max-w-3xl flex-col gap-5">
          <h1 className="font-display text-4xl leading-[1.04] font-medium text-balance sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {desc ? (
            <p className="max-w-2xl text-lg text-muted-foreground text-pretty">
              {desc}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}
