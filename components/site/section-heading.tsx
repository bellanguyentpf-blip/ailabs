import { cn } from "@/lib/utils"
import { Reveal } from "@/components/site/reveal"

export function SectionHeading({
  title,
  desc,
  align = "left",
  className,
}: {
  title: React.ReactNode
  desc?: string
  align?: "left" | "center"
  className?: string
}) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      <h2 className="font-display text-3xl leading-[1.08] font-medium text-balance sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {desc ? (
        <p className="text-base text-muted-foreground text-pretty md:text-lg">
          {desc}
        </p>
      ) : null}
    </Reveal>
  )
}
