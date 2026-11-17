import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Organizingfair Logistics Limited is a freight forwarding, customs clearing, and container logistics company based at Tin Can Island and Apapa Port, Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title={SITE.legalName}
        description="A port-focused logistics company helping Nigerian businesses move cargo with clarity, compliance, and control."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-6">
        <div className="relative h-[380px] overflow-hidden md:h-[440px]">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
            alt="Container terminal operations"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Our focus
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy">
            Every move should be a success
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Organizingfair Logistics Limited was built around a simple idea:
            cargo owners should not have to assemble a new team for every
            shipment. We bring freight forwarding, customs clearing, and
            container coordination under one professional operation, based where
            it matters — Tin Can Island and Apapa Port.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            We work with importers, exporters, manufacturers, and project owners
            who need a partner that understands Nigerian port process and still
            speaks in plain commercial terms.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-3 md:px-6">
          {[
            {
              title: "Location",
              text: "Tin Can Island and Apapa Port, Lagos - Nigeria's principal maritime gateway.",
            },
            {
              title: "Discipline",
              text: "Accurate papers, realistic timelines, and follow-through until cargo is released and delivered.",
            },
            {
              title: "Partnership",
              text: "Named coordinators, clear communication, and support that scales with repeat shipments.",
            },
          ].map((item) => (
            <article key={item.title} className="bg-white p-8">
              <h3 className="text-xl font-bold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy">
            Where we work
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Our work is centred on Lagos port operations, with inland
            connections to warehouses, factories, and distribution points across
            Nigeria. If your cargo is coming in or going out through Apapa or
            Tin Can, we are set up to help.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-sm bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy-soft"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
