"use client";

import { useActionState } from "react";
import { submitQuotation, type FormState } from "@/app/actions/quotation";
import { CONTAINER_SIZES, SERVICE_TYPES } from "@/lib/site";

const initialState: FormState = { status: "idle", message: "" };

const fieldClass =
  "w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(submitQuotation, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-sm border border-gold/40 bg-[#fbf8f1] px-6 py-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
          Request received
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-navy">Thank you</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-4 md:grid-cols-2">
      <label className="grid gap-1.5 text-sm font-semibold text-navy">
        Full Name
        <input className={fieldClass} name="fullName" required autoComplete="name" />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-navy">
        Company Name
        <input
          className={fieldClass}
          name="companyName"
          required
          autoComplete="organization"
        />
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
        Service Type
        <select className={fieldClass} name="serviceType" required defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_TYPES.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-navy">
        Container Size
        <select className={fieldClass} name="containerSize" defaultValue="">
          <option value="">Select if applicable</option>
          {CONTAINER_SIZES.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-navy md:col-span-2">
        Description of Goods
        <textarea
          className={`${fieldClass} min-h-28`}
          name="goodsDescription"
          required
          rows={4}
          placeholder="Commodity, quantity, weight, and any special handling"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-navy md:col-span-2">
        Additional Notes
        <textarea
          className={`${fieldClass} min-h-24`}
          name="additionalNotes"
          rows={3}
          placeholder="Origin, destination, Incoterms, or preferred timeline"
        />
      </label>

      {state.message ? (
        <p className="rounded-sm bg-red-50 px-3 py-2 text-sm text-red-800 md:col-span-2">
          {state.message}
        </p>
      ) : null}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-sm bg-navy px-7 py-3 text-sm font-bold text-white hover:bg-navy-soft disabled:opacity-70"
        >
          {pending ? "Sending…" : "Submit quotation request"}
        </button>
      </div>
    </form>
  );
}
