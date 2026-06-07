"use client"

import * as React from "react"
import { Send } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export type AuditLabels = {
  title: string
  desc: string
  name: string
  namePlaceholder: string
  phone: string
  phonePlaceholder: string
  email: string
  emailPlaceholder: string
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
  note: string
  notePlaceholder: string
  submit: string
  success: string
}

export function AuditDialog({
  trigger,
  labels,
  services,
}: {
  trigger: React.ReactNode
  labels: AuditLabels
  services: { slug: string; name: string }[]
}) {
  const [open, setOpen] = React.useState(false)
  const [service, setService] = React.useState("")
  const [submitting, setSubmitting] = React.useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries())
    setSubmitting(true)
    try {
      await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "audit", payload }),
      })
      toast.success(labels.success)
      setOpen(false)
      setService("")
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-medium">
            {labels.title}
          </DialogTitle>
          <DialogDescription>{labels.desc}</DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="mt-2 flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="audit-name" label={labels.name} required>
              <Input
                id="audit-name"
                name="name"
                required
                placeholder={labels.namePlaceholder}
                autoComplete="name"
              />
            </Field>
            <Field id="audit-email" label={labels.email} required>
              <Input
                id="audit-email"
                name="email"
                type="email"
                required
                placeholder={labels.emailPlaceholder}
                autoComplete="email"
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="audit-phone" label={labels.phone}>
              <Input
                id="audit-phone"
                name="phone"
                type="tel"
                placeholder={labels.phonePlaceholder}
                autoComplete="tel"
              />
            </Field>
            <Field id="audit-company" label={labels.company} required>
              <Input
                id="audit-company"
                name="company"
                required
                placeholder={labels.companyPlaceholder}
                autoComplete="organization"
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="audit-title" label={labels.jobTitle}>
              <Input
                id="audit-title"
                name="jobTitle"
                placeholder={labels.jobTitlePlaceholder}
                autoComplete="organization-title"
              />
            </Field>
            <Field id="audit-linkedin" label={labels.linkedin} required>
              <Input
                id="audit-linkedin"
                name="linkedin"
                type="url"
                required
                placeholder={labels.linkedinPlaceholder}
              />
            </Field>
          </div>

          <Field id="audit-url" label={labels.url} required>
            <Input
              id="audit-url"
              name="url"
              type="url"
              required
              placeholder={labels.urlPlaceholder}
              autoComplete="url"
            />
          </Field>

          <Field id="audit-service" label={labels.service}>
            <input type="hidden" name="service" value={service} />
            <Select value={service} onValueChange={setService}>
              <SelectTrigger id="audit-service" className="w-full">
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

          <Field id="audit-note" label={labels.note} required>
            <Textarea
              id="audit-note"
              name="note"
              required
              rows={3}
              placeholder={labels.notePlaceholder}
            />
          </Field>

          <Button
            type="submit"
            size="lg"
            className="group mt-1 h-11"
            disabled={submitting}
          >
            {labels.submit}
            <Send className="transition-transform group-hover:translate-x-0.5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
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
