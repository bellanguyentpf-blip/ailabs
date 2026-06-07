"use client"

import * as React from "react"
import { Send } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type FormLabels = {
  name: string
  namePlaceholder: string
  email: string
  emailPlaceholder: string
  company: string
  companyPlaceholder: string
  service: string
  servicePlaceholder: string
  message: string
  messagePlaceholder: string
  submit: string
  success: string
}

export function ContactForm({
  labels,
  services,
  defaultService = "",
}: {
  labels: FormLabels
  services: { slug: string; name: string }[]
  defaultService?: string
}) {
  const [service, setService] = React.useState(defaultService)
  const [submitting, setSubmitting] = React.useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    // Demo-only: no backend wired up.
    setTimeout(() => {
      setSubmitting(false)
      toast.success(labels.success)
      e.currentTarget?.reset?.()
      setService("")
    }, 700)
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label={labels.name}>
          <Input
            id="name"
            name="name"
            required
            placeholder={labels.namePlaceholder}
            autoComplete="name"
          />
        </Field>
        <Field id="email" label={labels.email}>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder={labels.emailPlaceholder}
            autoComplete="email"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="company" label={labels.company}>
          <Input
            id="company"
            name="company"
            placeholder={labels.companyPlaceholder}
            autoComplete="organization"
          />
        </Field>
        <Field id="service" label={labels.service}>
          <input type="hidden" name="service" value={service} />
          <Select value={service} onValueChange={setService}>
            <SelectTrigger id="service" className="w-full">
              <SelectValue placeholder={labels.servicePlaceholder} />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field id="message" label={labels.message}>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={labels.messagePlaceholder}
        />
      </Field>

      <Button type="submit" size="lg" className="group h-11 self-start px-5" disabled={submitting}>
        {labels.submit}
        <Send className="transition-transform group-hover:translate-x-0.5" />
      </Button>
    </form>
  )
}

function Field({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="font-mono text-xs tracking-wide uppercase">
        {label}
      </Label>
      {children}
    </div>
  )
}
