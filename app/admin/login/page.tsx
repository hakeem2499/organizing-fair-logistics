"use client";

import { useActionState } from "react";
import { loginAdmin, type AdminLoginState } from "@/app/actions/admin";

const initialState: AdminLoginState = { status: "idle", message: "" };

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(loginAdmin, initialState);

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-100 px-4">
      <form
        action={formAction}
        className="w-full max-w-sm rounded-xl bg-white p-6 shadow-sm"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
          OrganizingFair Logistics
        </p>
        <h1 className="mt-2 text-2xl font-extrabold text-brand-navy">
          Staff login
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          Enter the admin password to view quote requests.
        </p>
        <label className="mt-6 grid gap-1 text-sm font-medium">
          Password
          <input
            className="rounded-md border border-neutral-300 px-3 py-2.5"
            type="password"
            name="password"
            required
            autoComplete="current-password"
          />
        </label>
        {state.message ? (
          <p className="mt-3 text-sm text-red-700">{state.message}</p>
        ) : null}
        <button
          type="submit"
          disabled={pending}
          className="mt-5 w-full rounded bg-brand-red py-2.5 text-sm font-bold text-white disabled:opacity-70"
        >
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}
