import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

const REASONS = [
  {
    title: "Port-side presence",
    text: "We operate around Tin Can Island and Apapa Port, where Nigerian import and export cargo actually moves.",
  },
  {
    title: "Clear documentation",
    text: "Entries, bills, and supporting papers are prepared with care so examinations and releases stay on track.",
  },
  {
    title: "Accountable coordination",
    text: "One team owns forwarding, clearing, and container moves — you are not chasing multiple vendors.",
  },
  {
    title: "Business-first service",
    text: "We work with importers, exporters, and project cargo owners who need reliable commercial logistics.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
          alt="Shipping containers at a logistics terminal"
          fill
          priority
            className="object-cover"
            sizes="100vw"
          />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/35" />
        <div className="relative mx-auto flex min-h-[560px] max-w-6xl flex-col justify-center px-4 py-20 md:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
            {SITE.legalName}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Freight forwarding, customs clearing, and container logistics for
            businesses moving cargo through Nigeria's busiest ports.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/quotation"
              className="rounded-sm bg-gold px-6 py-3 text-sm font-bold text-navy hover:bg-gold-bright"
            >
              Get a Quotation
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-navy"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-12 md:px-6">
          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Who we are
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              A practical logistics partner at the port
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Organizingfair Logistics Limited is a Nigerian freight forwarding
              and customs clearing company serving importers and exporters
              through Tin Can Island and Apapa Port.
            </p>
            <p>
              We handle the work that decides whether cargo moves or sits:
              documentation, terminal coordination, customs process, and
              container positioning. The goal is simple — every shipment should
              be a successful move, not an operational surprise.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              Built around how cargo actually moves
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => (
              <article
                key={service.slug}
                className="border border-line bg-white p-6 shadow-[0_8px_30px_rgba(11,31,58,0.04)]"
              >
                <span className="text-xs font-bold tracking-[0.16em] text-gold">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-xl font-bold text-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/services"
              className="text-sm font-bold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Why choose us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              Trust is built in the details
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {REASONS.map((reason) => (
              <article key={reason.title} className="flex gap-5">
                <span className="mt-1 h-10 w-1 shrink-0 bg-gold" />
                <div>
                  <h3 className="text-xl font-bold text-navy">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {reason.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 md:flex-row md:items-center md:px-6">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Ready to move your cargo?
            </h2>
            <p className="mt-2 max-w-xl text-white/75">
              Share your shipment details and we will prepare a clear next step
              for forwarding, clearing, or container coordination.
            </p>
          </div>
          <Link
            href="/quotation"
            className="rounded-sm bg-gold px-6 py-3 text-sm font-bold text-navy hover:bg-gold-bright"
          >
            Get a Quotation
          </Link>
        </div>
      </section>
    </>
  );
}
