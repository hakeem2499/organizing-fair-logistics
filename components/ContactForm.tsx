"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/app/actions/contact";

const initialState: FormState = { status: "idle", message: "" };

const fieldClass =
  "w-full min-w-0 max-w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-sm border border-gold/40 bg-[#fbf8f1] px-6 py-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
          Message received
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-navy">Thank you</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid min-w-0 gap-4">
      <label className="grid gap-1.5 text-sm font-semibold text-navy">
        Name
        <input className={fieldClass} name="name" required autoComplete="name" />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-navy">
        Email
        <input
          className={fieldClass}
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-navy">
        Phone
        <input
          className={fieldClass}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-navy">
        Message
        <textarea
          className={`${fieldClass} min-h-32`}
          name="message"
          required
          rows={5}
        />
      </label>

      {state.message ? (
        <p className="rounded-sm bg-red-50 px-3 py-2 text-sm text-red-800">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="rounded-sm bg-navy px-7 py-3 text-sm font-bold text-white hover:bg-navy-soft disabled:opacity-70"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
