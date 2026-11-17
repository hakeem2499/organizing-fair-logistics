import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Terms of Service"
        description="Website use and quotation requests for Organizingfair Logistics Limited."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <p className="leading-relaxed text-muted">
          Quotation requests are invitations to treat and do not create a
          carriage contract until Organizingfair Logistics Limited issues and
          you accept a written quotation. Freight, customs, and container
          services remain subject to applicable regulations and our operating
          conditions.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          This page is a placeholder until full terms are published.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm font-bold text-navy underline decoration-gold decoration-2 underline-offset-4"
        >
          Back to home
        </Link>
      </section>
    </>
  );
}
