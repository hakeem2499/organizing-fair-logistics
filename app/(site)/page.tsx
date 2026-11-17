import Image from "next/image";
import Link from "next/link";
import { Bounded } from "@/components/Bounded";
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
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
          alt="Shipping containers at a logistics terminal"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/35" />
        <Bounded
          as="div"
          y="none"
          className="relative"
          innerClassName="flex min-h-[70svh] flex-col justify-center py-16 sm:py-20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
            {SITE.legalName}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight break-words text-white sm:text-5xl md:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
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
        </Bounded>
      </section>

      <Bounded y="lg" className="bg-white" innerClassName="grid gap-10 md:grid-cols-12">
        <div className="min-w-0 md:col-span-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Who we are
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            A practical logistics partner at the port
          </h2>
        </div>
        <div className="min-w-0 space-y-4 text-base leading-relaxed text-muted md:col-span-8">
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
      </Bounded>

      <Bounded y="lg" className="bg-slate-50">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Built around how cargo actually moves
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <article
              key={service.slug}
              className="min-w-0 border border-line bg-white p-6 shadow-[0_8px_30px_rgba(11,31,58,0.04)]"
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
      </Bounded>

      <Bounded y="lg" className="bg-white">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Why choose us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Trust is built in the details
          </h2>
        </div>
        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-2">
          {REASONS.map((reason) => (
            <article key={reason.title} className="flex min-w-0 gap-5">
              <span className="mt-1 h-10 w-1 shrink-0 bg-gold" />
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-navy">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {reason.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Bounded>

      <Bounded
        y="md"
        className="bg-navy"
        innerClassName="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
      >
        <div className="min-w-0">
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
          className="shrink-0 rounded-sm bg-gold px-6 py-3 text-sm font-bold text-navy hover:bg-gold-bright"
        >
          Get a Quotation
        </Link>
      </Bounded>
    </>
  );
}
