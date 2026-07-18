import Link from 'next/link';

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
</header>
  );
}