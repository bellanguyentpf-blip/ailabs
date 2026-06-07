import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="container-editorial flex min-h-[60svh] flex-col items-center justify-center gap-6 py-24 text-center">
      <span className="font-display text-[clamp(5rem,18vw,12rem)] leading-none font-medium text-brand">
        404
      </span>
      <p className="max-w-md text-lg text-muted-foreground text-pretty">
        The page you’re looking for has moved or never existed.
      </p>
      <Button asChild size="lg" className="h-11 px-5">
        <Link href="/">
          <ArrowLeft />
          Back to home
        </Link>
      </Button>
    </section>
  )
}
