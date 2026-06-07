"use client"

import * as React from "react"
import { useActionState } from "react"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
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
import { addManualBooking } from "@/app/admin/actions"

const TIME_SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]

export function AdminAddBooking({
  services,
}: {
  services: { slug: string; name: string }[]
}) {
  const [open, setOpen] = React.useState(false)
  const [service, setService] = React.useState("")
  const [time, setTime] = React.useState("")

  const [state, action, pending] = useActionState(
    async (prev: { error?: string }, formData: FormData) => {
      formData.set("service", service)
      formData.set("time", time)
      const result = await addManualBooking(prev, formData)
      if (!result.error) setOpen(false)
      return result
    },
    {}
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="gap-1.5">
          <Plus className="size-3.5" />
          Add booking
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-xl font-medium">
            Add booking manually
          </DialogTitle>
        </DialogHeader>

        <form action={action} className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Date *" id="date">
              <Input id="date" name="date" type="date" required />
            </Field>
            <Field label="Time *" id="time">
              <Select value={time} onValueChange={setTime} required>
                <SelectTrigger id="time" className="w-full">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {TIME_SLOTS.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" id="name">
              <Input id="name" name="name" placeholder="Full name" />
            </Field>
            <Field label="Email" id="email">
              <Input id="email" name="email" type="email" placeholder="email@company.com" />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Phone" id="phone">
              <Input id="phone" name="phone" placeholder="+84 ..." />
            </Field>
            <Field label="Company" id="company">
              <Input id="company" name="company" placeholder="Company name" />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Job title" id="jobTitle">
              <Input id="jobTitle" name="jobTitle" placeholder="e.g. Marketing Director" />
            </Field>
            <Field label="Service" id="service">
              <Select value={service} onValueChange={setService}>
                <SelectTrigger id="service" className="w-full">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s.slug} value={s.slug}>{s.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>

          <Field label="Note" id="note">
            <Textarea id="note" name="note" placeholder="Internal notes..." rows={3} />
          </Field>

          {state.error && (
            <p className="text-sm text-red-600">{state.error}</p>
          )}

          <div className="flex justify-end gap-2 border-t border-border pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={pending || !time}>
              {pending ? "Saving..." : "Save booking"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id} className="font-mono text-[0.7rem] tracking-wide text-muted-foreground uppercase">
        {label}
      </Label>
      {children}
    </div>
  )
}
