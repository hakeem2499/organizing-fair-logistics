import type { Metadata } from "next";
import Link from "next/link";
import { Bounded } from "@/components/Bounded";
import { PageHero } from "@/components/PageHero";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Freight forwarding, customs clearing, container coordination, and import-export support from Organizingfair Logistics Limited.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Logistics support from port to warehouse"
        description="Four core services covering the full commercial path of cargo through Tin Can Island, Apapa Port, and connecting inland destinations."
      />

      <Bounded y="lg" innerClassName="space-y-16">
        {SERVICES.map((service, index) => (
          <article
            key={service.slug}
            id={service.slug}
            className="grid gap-8 border-b border-line pb-16 last:border-0 last:pb-0 md:grid-cols-12"
          >
            <div className="min-w-0 md:col-span-4">
              <span className="text-xs font-bold tracking-[0.16em] text-gold">
                0{index + 1}
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy">
                {service.title}
              </h2>
            </div>
            <div className="min-w-0 md:col-span-8">
              <p className="text-base leading-relaxed text-muted">{service.details}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-navy">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </Bounded>

      <Bounded
        y="sm"
        className="bg-slate-50"
        innerClassName="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
      >
        <p className="text-xl font-bold text-navy">
          Tell us what you are moving. We will recommend the right service mix.
        </p>
        <Link
          href="/quotation"
          className="shrink-0 rounded-sm bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy-soft"
        >
          Get a Quotation
        </Link>
      </Bounded>
    </>
  );
}
