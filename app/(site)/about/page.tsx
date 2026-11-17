import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bounded } from "@/components/Bounded";
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

      <Bounded y="lg" innerClassName="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <div className="relative h-64 w-full min-w-0 overflow-hidden sm:h-80 md:h-[440px]">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
            alt="Container terminal operations"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="min-w-0">
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
      </Bounded>

      <Bounded y="lg" className="bg-slate-50" innerClassName="grid gap-6 md:grid-cols-3 md:gap-10">
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
          <article key={item.title} className="min-w-0 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-bold text-navy">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
          </article>
        ))}
      </Bounded>

      <Bounded y="lg">
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
      </Bounded>
    </>
  );
}
