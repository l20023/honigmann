"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#about", label: "Über mich" },
  { href: "/#prices", label: "Produkte & Preise" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-[4.5rem] border-b border-line bg-ivory/95 text-ink backdrop-blur-md">
      <div className="flex h-full items-center justify-between gap-3 pl-3 pr-2 sm:pr-6">
        <Link
          href="/"
          aria-label="Imkerei Kustermann, Startseite"
          className="shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/honeycomb.png"
            alt=""
            width={44}
            height={44}
            priority
            className="h-10 w-10 brightness-0 opacity-60 sm:h-11 sm:w-11"
          />
        </Link>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
        <nav className="hidden sm:block" aria-label="Hauptnavigation">
          <NavList onNavigate={() => setOpen(false)} />
        </nav>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Hauptnavigation"
          className="absolute inset-x-0 top-full border-b border-line bg-ivory px-3 py-2 shadow-sm sm:hidden"
        >
          <NavList stacked onNavigate={() => setOpen(false)} />
        </nav>
      )}
    </header>
  );
}

function NavList({
  stacked = false,
  onNavigate,
}: {
  stacked?: boolean;
  onNavigate: () => void;
}) {
  return (
    <ul className={stacked ? "flex flex-col" : "flex flex-wrap justify-end gap-x-4 text-sm lg:gap-x-6 lg:text-base"}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onNavigate}
            className={
              stacked
                ? "block py-3 text-lg text-ink"
                : "text-ink transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honey"
            }
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
