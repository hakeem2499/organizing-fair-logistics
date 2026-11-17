"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bounded } from "@/components/Bounded";
import { BrandMark } from "@/components/BrandMark";
import { NAV_LINKS, SITE } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full min-w-0 overflow-x-clip">
      <Bounded
        as="div"
        y="none"
        className="bg-navy py-1.5 text-white"
        innerClassName="flex items-center justify-between gap-3"
      >
        <p className="min-w-0 truncate text-white/80">{SITE.location}</p>
        <a
          href={SITE.phoneHref}
          className="hidden shrink-0 font-medium text-gold-bright hover:text-white sm:inline"
        >
          {SITE.phoneDisplay}
        </a>
      </Bounded>

      <div className="border-b border-line bg-white/95 backdrop-blur">
        <Bounded
          as="div"
          y="none"
          className="py-3"
          innerClassName="flex items-center justify-between gap-3"
        >
          <Link
            href="/"
            className="min-w-0"
            onClick={() => setOpen(false)}
            aria-label={SITE.legalName}
          >
            <BrandMark compact priority />
          </Link>

          <nav className="hidden items-center gap-7 text-[15px] font-semibold text-navy lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-colors hover:text-gold ${
                  isActive(pathname, link.href)
                    ? "text-navy after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-gold"
                    : "text-navy/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/quotation"
              className="hidden rounded-sm bg-navy px-4 py-2.5 text-sm font-bold text-white hover:bg-navy-soft sm:inline-flex"
            >
              Get a Quotation
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-navy lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 bg-navy transition ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </Bounded>

        {open ? (
          <Bounded as="nav" y="none" className="border-t border-line py-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-sm px-2 py-2.5 text-sm font-semibold ${
                    isActive(pathname, link.href)
                      ? "bg-navy text-white"
                      : "text-navy hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Bounded>
        ) : null}
      </div>
      <div className="h-0.5 bg-gold" />
    </header>
  );
}
