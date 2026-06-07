import "server-only"
import type { Dictionary } from "@/lib/dictionaries/en"
import type { Locale } from "@/lib/routes"

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/lib/dictionaries/en").then((m) => m.en),
  vi: () => import("@/lib/dictionaries/vi").then((m) => m.vi),
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return loaders[locale]()
}

export type { Dictionary }
