import type { Metadata } from "next";
import { Bounded } from "@/components/Bounded";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quotation",
  description:
    "Request a freight forwarding, customs clearing, or container logistics quotation from Organizingfair Logistics Limited.",
};

export default function QuotationPage() {
  return (
    <>
      <PageHero
        kicker="Get a Quotation"
        title="Tell us what you need to move"
        description="Share the cargo, service type, and any timing constraints. A coordinator will review your request and follow up with next steps."
      />
      <Bounded y="lg" innerClassName="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="min-w-0 md:col-span-4">
          <h2 className="text-2xl font-extrabold text-navy">What to include</h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
            <li>Commodity and estimated quantity or container size</li>
            <li>Whether the job is import, export, or inland coordination</li>
            <li>Origin, destination, and preferred timeline if known</li>
            <li>Any special handling, permits, or examination notes</li>
          </ul>
          <p className="mt-6 text-sm text-muted">
            A quotation is an invitation to proceed. Service begins only after
            written confirmation.
          </p>
        </div>
        <div className="min-w-0 border border-line bg-white p-5 shadow-[0_8px_30px_rgba(11,31,58,0.04)] sm:p-6 md:col-span-8 md:p-8">
          <QuoteForm />
        </div>
      </Bounded>
    </>
  );
}
