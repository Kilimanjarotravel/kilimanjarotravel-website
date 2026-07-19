'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  ['About', '/about'],
  ['Safari Packages', '/safari-packages'],
  ['Special Safaris', '/safaris'],
  ['Kilimanjaro Treks', '/kilimanjaro-treks'],
  ['Mountain Adventures', '/mountain-adventures'],
  ['Cultural Tours', '/cultural-tours'],
  ['Day Trips', '/day-trips'],
  ['Gallery', '/gallery'],
  ['Testimonials', '/testimonials'],
  ['FAQ', '/faq'],
  ['Zanzibar', '/zanzibar'],
  ['Car Hire', '/car-hire'],
  ['Booking', '/booking'],
  ['Contact', '/contact'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-forest shadow-lg">
      <div className="flex w-full items-center gap-3 px-4 py-2">
        <Link href="/" className="shrink-0">
          <img
            src="/images/logo.png"
            alt="Kilimanjaro Travel"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto rounded-lg px-3 py-2 text-2xl text-white lg:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

        <nav className="hidden flex-1 items-center justify-end gap-4 text-xs font-semibold text-white lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-white transition hover:text-gold"
            >
              {label}
            </Link>
          ))}

          <a
            href="https://wa.me/255759273339"
            className="rounded-full bg-gold px-3 py-2 font-bold text-white"
          >
            WhatsApp
          </a>
        </nav>
      </div>

      {menuOpen && (
        <div className="absolute left-0 top-full w-full bg-forest px-6 py-4 shadow-lg lg:hidden">
          <div className="flex max-h-[75vh] flex-col gap-4 overflow-y-auto">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-white transition hover:text-gold"
              >
                {label}
              </Link>
            ))}

            <a
              href="https://wa.me/255759273339"
              className="mt-2 rounded-full bg-gold px-4 py-3 text-center font-bold text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}