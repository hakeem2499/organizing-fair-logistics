import Link from "next/link";
import { Bounded } from "@/components/Bounded";
import { BrandMark } from "@/components/BrandMark";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full min-w-0 overflow-x-clip bg-navy-deep text-white">
      <Bounded
        as="div"
        y="md"
        innerClassName="grid gap-10 md:grid-cols-4"
      >
        <div className="min-w-0 md:col-span-2">
          <BrandMark invert />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
            {SITE.tagline}. Freight forwarding, customs clearing, and container
            logistics from Tin Can Island and Apapa Port.
          </p>
        </div>

        <div className="min-w-0">
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

        <div className="min-w-0">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 break-words text-sm text-white/85">
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
      </Bounded>

      <div className="border-t border-white/10">
        <Bounded
          as="div"
          y="none"
          className="py-4"
          innerClassName="flex flex-col gap-2 text-xs text-white/55 md:flex-row md:items-center md:justify-between"
        >
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-4">
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
        </Bounded>
      </div>
    </footer>
  );
}
