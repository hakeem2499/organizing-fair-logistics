import { redirect } from "next/navigation";
import { logoutAdmin } from "@/app/actions/admin";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { serviceTypeLabel } from "@/lib/site";

export const dynamic = "force-dynamic";

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

  let quotes: Awaited<ReturnType<typeof prisma.quotationRequest.findMany>> = [];
  let messages: Awaited<ReturnType<typeof prisma.contactMessage.findMany>> = [];
  let loadError: string | null = null;

  if (!process.env.DATABASE_URL) {
    loadError = "DATABASE_URL is not set. Add your Neon connection string to .env.";
  } else {
    try {
      [quotes, messages] = await Promise.all([
        prisma.quotationRequest.findMany({ orderBy: { createdAt: "desc" } }),
        prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" } }),
      ]);
    } catch {
      loadError =
        "Could not load inbox records. Check the Neon connection and run prisma migrate deploy.";
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">
              Organizingfair Logistics
            </p>
            <h1 className="text-xl font-extrabold text-navy">Inbox</h1>
          </div>
          <form action={logoutAdmin}>
            <button
              type="submit"
              className="rounded-sm border border-line px-3 py-2 text-sm font-semibold text-navy"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      <section className="mx-auto max-w-6xl space-y-10 px-4 py-8 md:px-6">
        {loadError ? (
          <p className="rounded-sm bg-red-50 px-4 py-3 text-sm text-red-800">
            {loadError}
          </p>
        ) : (
          <>
            <div>
              <h2 className="mb-4 text-lg font-extrabold text-navy">
                Quotation requests
              </h2>
              {quotes.length === 0 ? (
                <p className="rounded-sm bg-white px-4 py-8 text-center text-sm text-muted shadow-sm">
                  No quotation requests yet.
                </p>
              ) : (
                <div className="overflow-x-auto bg-white shadow-sm">
                  <table className="min-w-full text-left text-sm">
                    <thead className="border-b border-line bg-slate-50 text-xs uppercase tracking-wide text-muted">
                      <tr>
                        <th className="px-4 py-3">Received</th>
                        <th className="px-4 py-3">Contact</th>
                        <th className="px-4 py-3">Service</th>
                        <th className="px-4 py-3">Goods / notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quotes.map((quote) => (
                        <tr
                          key={quote.id}
                          className="border-b border-line align-top"
                        >
                          <td className="whitespace-nowrap px-4 py-3 text-muted">
                            {formatDate(quote.createdAt)}
                          </td>
                          <td className="px-4 py-3">
                            <p className="font-semibold text-navy">
                              {quote.fullName}
                            </p>
                            <p className="text-muted">{quote.companyName}</p>
                            <p>
                              <a
                                className="text-navy hover:underline"
                                href={`mailto:${quote.email}`}
                              >
                                {quote.email}
                              </a>
                            </p>
                            <p className="text-muted">{quote.phone}</p>
                          </td>
                          <td className="px-4 py-3">
                            <p>{serviceTypeLabel(quote.serviceType)}</p>
                            <p className="text-muted">
                              {quote.containerSize || "—"}
                            </p>
                          </td>
                          <td className="max-w-sm px-4 py-3 text-muted">
                            <p>{quote.goodsDescription}</p>
                            {quote.additionalNotes ? (
                              <p className="mt-1">{quote.additionalNotes}</p>
                            ) : null}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div>
              <h2 className="mb-4 text-lg font-extrabold text-navy">
                Contact messages
              </h2>
              {messages.length === 0 ? (
                <p className="rounded-sm bg-white px-4 py-8 text-center text-sm text-muted shadow-sm">
                  No contact messages yet.
                </p>
              ) : (
                <div className="overflow-x-auto bg-white shadow-sm">
                  <table className="min-w-full text-left text-sm">
                    <thead className="border-b border-line bg-slate-50 text-xs uppercase tracking-wide text-muted">
                      <tr>
                        <th className="px-4 py-3">Received</th>
                        <th className="px-4 py-3">Contact</th>
                        <th className="px-4 py-3">Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {messages.map((item) => (
                        <tr
                          key={item.id}
                          className="border-b border-line align-top"
                        >
                          <td className="whitespace-nowrap px-4 py-3 text-muted">
                            {formatDate(item.createdAt)}
                          </td>
                          <td className="px-4 py-3">
                            <p className="font-semibold text-navy">{item.name}</p>
                            <p>
                              <a
                                className="text-navy hover:underline"
                                href={`mailto:${item.email}`}
                              >
                                {item.email}
                              </a>
                            </p>
                            <p className="text-muted">{item.phone}</p>
                          </td>
                          <td className="max-w-lg px-4 py-3 text-muted">
                            {item.message}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
