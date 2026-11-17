import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Privacy Policy | OrganizingFair Logistics Ltd",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl flex-1 px-4 py-16 md:px-6">
        <h1 className="text-3xl font-extrabold text-brand-navy">Privacy Policy</h1>
        <p className="mt-4 text-neutral-700">
          Quote and contact forms collect your name, email, phone, company, and
          shipment details so we can respond to your request. We store that
          information in our database and do not sell it to third parties.
        </p>
        <p className="mt-4 text-neutral-700">
          This page is a placeholder until a full legal policy is published.
          Contact us if you need a copy of your submitted information removed.
        </p>
        <Link href="/" className="mt-8 inline-block font-semibold text-brand-red">
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
