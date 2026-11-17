"use client";

import { useActionState } from "react";
import { loginAdmin, type AdminLoginState } from "@/app/actions/admin";
import { BrandMark } from "@/components/BrandMark";

const initialState: AdminLoginState = { status: "idle", message: "" };

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(loginAdmin, initialState);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <form
        action={formAction}
        className="w-full max-w-sm border border-line bg-white p-6 shadow-sm"
      >
        <BrandMark compact />
        <h1 className="mt-5 text-2xl font-extrabold text-navy">Staff login</h1>
        <p className="mt-2 text-sm text-muted">
          Enter the admin password to view quotation and contact submissions.
        </p>
        <label className="mt-6 grid gap-1 text-sm font-semibold text-navy">
          Password
          <input
            className="rounded-sm border border-line px-3 py-2.5"
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
          className="mt-5 w-full rounded-sm bg-navy py-2.5 text-sm font-bold text-white disabled:opacity-70"
        >
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}
