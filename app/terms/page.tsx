import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Terms of Service | OrganizingFair Logistics Ltd",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl flex-1 px-4 py-16 md:px-6">
        <h1 className="text-3xl font-extrabold text-brand-navy">Terms of Service</h1>
        <p className="mt-4 text-neutral-700">
          Quote requests are invitations to treat and do not create a carriage
          contract until OrganizingFair Logistics Ltd issues and you accept a
          written quotation. Freight, customs, and haulage services remain
          subject to applicable regulations and our operating conditions.
        </p>
        <p className="mt-4 text-neutral-700">
          This page is a placeholder until full terms are published.
        </p>
        <Link href="/" className="mt-8 inline-block font-semibold text-brand-red">
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
