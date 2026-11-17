import type { Metadata } from "next";
import Link from "next/link";
import { Bounded } from "@/components/Bounded";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        description="How Organizingfair Logistics Limited handles information submitted through this website."
      />
      <Bounded y="lg" innerClassName="max-w-3xl">
        <p className="leading-relaxed text-muted">
          Quotation and contact forms collect your name, email, phone, company,
          and shipment details so we can respond to your request. We store that
          information in our database and do not sell it to third parties.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          This page is a placeholder until a full legal policy is published.
          Contact us if you need a copy of your submitted information removed.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm font-bold text-navy underline decoration-gold decoration-2 underline-offset-4"
        >
          Back to home
        </Link>
      </Bounded>
    </>
  );
}
