import Link from 'next/link';

const links = [
  ['About', '/about'],
  ['Safaris', '/safaris'],
  ['Kilimanjaro Treks', '/kilimanjaro-treks'],
  ['Gallery', '/gallery'],
  ['Testimonials', '/testimonials'],
  ['FAQ', '/faq'],
  ['Zanzibar', '/zanzibar'],
  ['Car Hire', '/car-hire'],
  ['Contact', '/contact'],
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-black/45 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-xl font-bold tracking-wide">
          KILIMANJARO <span className="text-gold">TRAVEL</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-gold">
              {label}
            </Link>
          ))}
        </nav>

        <a
          className="rounded-full bg-gold px-5 py-2 text-sm font-bold"
          href="https://wa.me/255759273339"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}