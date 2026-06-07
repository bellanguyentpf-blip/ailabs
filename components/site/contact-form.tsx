"use client"

import * as React from "react"

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
  phone: string
  phonePlaceholder: string
  company: string
  companyPlaceholder: string
  jobTitle: string
  jobTitlePlaceholder: string
  linkedin: string
  linkedinPlaceholder: string
  url: string
  urlPlaceholder: string
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

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())
    try {
      await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", payload }),
      })
      toast.success(labels.success)
      form.reset()
      setService("")
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label={labels.name} required>
          <Input
            id="name"
            name="name"
            required
            placeholder={labels.namePlaceholder}
            autoComplete="name"
          />
        </Field>
        <Field id="email" label={labels.email} required>
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
        <Field id="phone" label={labels.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder={labels.phonePlaceholder}
            autoComplete="tel"
          />
        </Field>
        <Field id="company" label={labels.company} required>
          <Input
            id="company"
            name="company"
            required
            placeholder={labels.companyPlaceholder}
            autoComplete="organization"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="jobTitle" label={labels.jobTitle}>
          <Input
            id="jobTitle"
            name="jobTitle"
            placeholder={labels.jobTitlePlaceholder}
            autoComplete="organization-title"
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

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="linkedin" label={labels.linkedin} required>
          <Input
            id="linkedin"
            name="linkedin"
            type="url"
            required
            placeholder={labels.linkedinPlaceholder}
          />
        </Field>
        <Field id="url" label={labels.url} required>
          <Input
            id="url"
            name="url"
            type="url"
            required
            placeholder={labels.urlPlaceholder}
          />
        </Field>
      </div>

      <Field id="message" label={labels.message} required>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={labels.messagePlaceholder}
        />
      </Field>

      <Button type="submit" size="lg" className="h-11 self-start px-5" disabled={submitting}>
        {labels.submit}
      </Button>
    </form>
  )
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="font-mono text-xs tracking-wide uppercase">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </Label>
      {children}
    </div>
  )
}
