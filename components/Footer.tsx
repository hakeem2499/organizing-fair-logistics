import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <BrandMark invert />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
            {SITE.tagline}. Freight forwarding, customs clearing, and container
            logistics from Tin Can Island and Apapa Port.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
            Quick links
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>{SITE.address}</li>
            <li>
              <a href={SITE.phoneHref} className="hover:text-gold">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-white/55 md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/admin/login" className="hover:text-white">
              Staff login
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
