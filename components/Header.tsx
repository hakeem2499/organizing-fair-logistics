"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#quote", label: "Get a Quote" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand-yellow text-lg font-black text-brand-navy">
              OF
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight text-brand-navy">
                OrganizingFair
              </span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Logistics Ltd
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-brand-navy md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-brand-red">
                {link.label}
              </a>
            ))}
            <span className="text-neutral-500">Nigeria</span>
            <a
              href="/#quote"
              className="rounded bg-brand-red px-4 py-2 text-white hover:bg-red-800"
            >
              Get a Quote
            </a>
          </nav>

          <button
            type="button"
            className="rounded border border-neutral-300 px-3 py-2 text-sm font-semibold md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
        {open ? (
          <nav className="flex flex-col gap-3 border-t border-neutral-200 px-4 py-4 text-sm font-semibold md:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
      <div className="h-1.5 bg-brand-yellow" />
    </header>
  );
}
