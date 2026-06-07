"use client"

import { useActionState } from "react"
import { Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login, type LoginState } from "../actions"

const initialState: LoginState = {}

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState)

  return (
    <main className="flex min-h-svh items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-card text-brand">
            <Lock className="size-5" strokeWidth={1.5} />
          </span>
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-tight">
              AILABS Admin
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in to view incoming requests.
            </p>
          </div>
        </div>

        <form
          action={formAction}
          className="card-elevated flex flex-col gap-4 p-6"
        >
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="username"
              className="font-mono text-xs tracking-wide uppercase"
            >
              ID
            </Label>
            <Input id="username" name="username" required autoComplete="username" />
          </div>
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="password"
              className="font-mono text-xs tracking-wide uppercase"
            >
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
            />
          </div>

          {state.error ? (
            <p className="text-sm text-destructive">{state.error}</p>
          ) : null}

          <Button type="submit" size="lg" className="mt-1 h-11" disabled={pending}>
            {pending ? "Signing in…" : "Sign in"}
          </Button>
        </form>
      </div>
    </main>
  )
}
