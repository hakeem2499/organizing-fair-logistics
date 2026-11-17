"use client";

import { useActionState } from "react";
import { submitQuote, type QuoteFormState } from "@/app/actions/quote";
import { SERVICES } from "@/lib/services";

const initialState: QuoteFormState = { status: "idle", message: "" };

const fieldClass =
  "w-full rounded-md border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none ring-brand-yellow focus:ring-2";

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(submitQuote, initialState);

  return (
    <form action={formAction} className="grid gap-4 md:grid-cols-2">
      <label className="grid gap-1 text-sm font-medium">
        Full name
        <input className={fieldClass} name="name" required autoComplete="name" />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Email
        <input
          className={fieldClass}
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Phone
        <input
          className={fieldClass}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Company (optional)
        <input className={fieldClass} name="company" autoComplete="organization" />
      </label>
      <label className="grid gap-1 text-sm font-medium md:col-span-2">
        Service
        <select className={fieldClass} name="service" required defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Origin
        <input className={fieldClass} name="origin" placeholder="City, country, or port" />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Destination
        <input
          className={fieldClass}
          name="destination"
          placeholder="City, country, or warehouse"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium md:col-span-2">
        Cargo / container details
        <input
          className={fieldClass}
          name="cargoDetails"
          placeholder="e.g. 1 x 40ft HC, 18 tonnes general cargo"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium md:col-span-2">
        Message
        <textarea
          className={`${fieldClass} min-h-28`}
          name="message"
          rows={4}
          placeholder="Tell us timelines, Incoterms, or special handling needs"
        />
      </label>

      {state.message ? (
        <p
          className={`md:col-span-2 rounded-md px-3 py-2 text-sm ${
            state.status === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {state.message}
        </p>
      ) : null}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded bg-brand-red px-6 py-3 text-sm font-bold text-white hover:bg-red-800 disabled:opacity-70"
        >
          {pending ? "Sending…" : "Request a quote"}
        </button>
      </div>
    </form>
  );
}
