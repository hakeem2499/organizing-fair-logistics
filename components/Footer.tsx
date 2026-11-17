import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#5b0a21] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <p className="text-lg font-extrabold">OrganizingFair Logistics Ltd</p>
          <p className="mt-3 text-sm text-white/80">
            Freight forwarding, customs clearing, and container haulage for
            businesses moving cargo through Nigeria and beyond.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Services
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/#services" className="hover:underline">
                Freight Forwarding
              </a>
            </li>
            <li>
              <a href="/#services" className="hover:underline">
                Customs Clearing
              </a>
            </li>
            <li>
              <a href="/#services" className="hover:underline">
                Container Haulage
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Company
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/#quote" className="hover:underline">
                Get a Quote
              </a>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/admin/login" className="hover:underline">
                Staff login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Contact
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-white/90">
            <li>Lagos, Nigeria</li>
            <li>
              <a href="tel:+2348000000000" className="hover:underline">
                +234 800 000 0000
              </a>
            </li>
            <li>
              <a
                href="mailto:quotes@organizingfairlogistics.com"
                className="hover:underline"
              >
                quotes@organizingfairlogistics.com
              </a>
            </li>
            <li>Mon–Fri, 8:00–17:00 WAT</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 px-4 py-4 text-center text-xs text-white/70">
        © 2026 OrganizingFair Logistics Ltd. All rights
        reserved.
      </div>
    </footer>
  );
}
