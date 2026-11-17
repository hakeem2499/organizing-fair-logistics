import type { Metadata } from "next";
import { Bounded } from "@/components/Bounded";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Organizingfair Logistics Limited for freight forwarding, customs clearing, and container logistics in Lagos, Nigeria.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Speak with our team"
        description="Use the form for general enquiries, or request a quotation if you already have shipment details."
      />
      <Bounded y="lg" innerClassName="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="min-w-0 md:col-span-4">
          <h2 className="text-2xl font-extrabold text-navy">Company details</h2>
          <dl className="mt-6 space-y-5 text-sm">
            <div>
              <dt className="font-bold uppercase tracking-[0.14em] text-gold">
                Address
              </dt>
              <dd className="mt-1 break-words text-muted">{SITE.address}</dd>
            </div>
            <div>
              <dt className="font-bold uppercase tracking-[0.14em] text-gold">
                Phone
              </dt>
              <dd className="mt-1">
                <a href={SITE.phoneHref} className="text-navy hover:text-gold">
                  {SITE.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold uppercase tracking-[0.14em] text-gold">
                Email
              </dt>
              <dd className="mt-1 break-all">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-navy hover:text-gold"
                >
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold uppercase tracking-[0.14em] text-gold">
                Hours
              </dt>
              <dd className="mt-1 text-muted">{SITE.hours}</dd>
            </div>
          </dl>
        </div>
        <div className="min-w-0 border border-line bg-white p-5 shadow-[0_8px_30px_rgba(11,31,58,0.04)] sm:p-6 md:col-span-8 md:p-8">
          <ContactForm />
        </div>
      </Bounded>
    </>
  );
}
