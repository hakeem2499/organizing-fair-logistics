import { redirect } from "next/navigation";
import { logoutAdmin } from "@/app/actions/admin";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { serviceLabel } from "@/lib/services";

function formatDate(value: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(value);
}

export default async function AdminInboxPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  let quotes: Awaited<ReturnType<typeof prisma.quoteRequest.findMany>> = [];
  let loadError: string | null = null;

  if (!process.env.DATABASE_URL) {
    loadError = "DATABASE_URL is not set. Add your Neon connection string to .env.";
  } else {
    try {
      quotes = await prisma.quoteRequest.findMany({
        orderBy: { createdAt: "desc" },
      });
    } catch {
      loadError =
        "Could not load quote requests. Check the Neon connection and run prisma migrate deploy.";
    }
  }

  return (
    <main className="min-h-screen bg-neutral-100">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              OrganizingFair Logistics
            </p>
            <h1 className="text-xl font-extrabold text-brand-navy">Quote inbox</h1>
          </div>
          <form action={logoutAdmin}>
            <button
              type="submit"
              className="rounded border border-neutral-300 px-3 py-2 text-sm font-semibold"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        {loadError ? (
          <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-800">
            {loadError}
          </p>
        ) : quotes.length === 0 ? (
          <p className="rounded-md bg-white px-4 py-8 text-center text-sm text-neutral-600 shadow-sm">
            No quote requests yet.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-neutral-200 bg-neutral-50 text-xs uppercase tracking-wide text-neutral-500">
                <tr>
                  <th className="px-4 py-3">Received</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Service</th>
                  <th className="px-4 py-3">Route</th>
                  <th className="px-4 py-3">Cargo / message</th>
                </tr>
              </thead>
              <tbody>
                {quotes.map((quote) => (
                  <tr key={quote.id} className="border-b border-neutral-100 align-top">
                    <td className="whitespace-nowrap px-4 py-3 text-neutral-600">
                      {formatDate(quote.createdAt)}
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-brand-navy">{quote.name}</p>
                      {quote.company ? (
                        <p className="text-neutral-500">{quote.company}</p>
                      ) : null}
                      <p>
                        <a className="text-brand-red hover:underline" href={`mailto:${quote.email}`}>
                          {quote.email}
                        </a>
                      </p>
                      <p className="text-neutral-600">{quote.phone}</p>
                    </td>
                    <td className="px-4 py-3">{serviceLabel(quote.service)}</td>
                    <td className="px-4 py-3 text-neutral-600">
                      {quote.origin || quote.destination
                        ? `${quote.origin || "—"} → ${quote.destination || "—"}`
                        : "—"}
                    </td>
                    <td className="max-w-sm px-4 py-3 text-neutral-600">
                      {quote.cargoDetails ? <p>{quote.cargoDetails}</p> : null}
                      {quote.message ? (
                        <p className="mt-1 text-neutral-500">{quote.message}</p>
                      ) : null}
                      {!quote.cargoDetails && !quote.message ? "—" : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
