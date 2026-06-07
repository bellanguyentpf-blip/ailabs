import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

import "../globals.css"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Admin · AILABS",
  robots: { index: false, follow: false },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(montserrat.className, "antialiased")}
      style={
        {
          "--font-display": montserrat.style.fontFamily,
          "--font-sans": montserrat.style.fontFamily,
          "--font-mono": montserrat.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <body className="min-h-svh bg-background font-sans text-foreground">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
