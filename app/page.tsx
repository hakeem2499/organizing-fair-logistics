import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { QuoteForm } from "@/components/QuoteForm";
import { SERVICES } from "@/lib/services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[520px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
            alt="Shipping containers at a logistics terminal"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative mx-auto flex min-h-[520px] max-w-6xl flex-col justify-center px-4 py-20 text-white md:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-yellow">
              OrganizingFair Logistics Ltd
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
              Freight forwarding, customs clearing, and container haulage
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              We move business cargo with clear documentation, reliable inland
              haulage, and practical advice from origin to destination.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="rounded bg-brand-red px-5 py-3 text-sm font-bold hover:bg-red-800"
              >
                Get a Quote
              </a>
              <a
                href="#services"
                className="rounded bg-white px-5 py-3 text-sm font-bold text-brand-navy hover:bg-neutral-100"
              >
                View services
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-brand-navy">
              Cargo shipping for business
            </h2>
            <p className="mt-3 text-neutral-600">
              Discover forwarding and logistics options built around three core
              services.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SERVICES.map((service) => (
              <article
                key={service.slug}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded bg-brand-yellow font-black text-brand-navy">
                  {service.title.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-brand-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{service.summary}</p>
                <p className="mt-3 text-sm text-neutral-500">{service.details}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-neutral-100 p-6">
            <h3 className="font-bold text-brand-navy">Forwarding modes</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Air freight · Ocean freight · Road freight · Rail freight
            </p>
          </div>
        </section>

        <section id="quote" className="bg-white py-16">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 md:grid-cols-2 md:px-6">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-navy">
                Get a quote or contact us
              </h2>
              <p className="mt-3 text-neutral-600">
                Tell us what you are shipping and where it needs to go. A
                coordinator will follow up with rates and next steps.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                <li>Business freight only</li>
                <li>Import and export support</li>
                <li>Port, airport, and inland destinations</li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 p-6 shadow-sm">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
