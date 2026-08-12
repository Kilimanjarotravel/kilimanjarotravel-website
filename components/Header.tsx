'use client';

import * as React from 'react';
import Link from 'next/link';

const links = [
{ label: 'About', href: '/about' },
{ label: 'Safari Packages', href: '/safari-packages' },
{ label: 'Special Safaris', href: '/safaris' },
{ label: 'Kilimanjaro Treks', href: '/kilimanjaro-treks' },
{ label: 'Mountain Adventures', href: '/mountain-adventures' },
{ label: 'Cultural Tours', href: '/cultural-tours' },
{ label: 'Day Trips', href: '/day-trips' },
{ label: 'Testimonials', href: '/testimonials' },
{ label: 'FAQ', href: '/faq' },
{ label: 'Zanzibar', href: '/zanzibar' },
{ label: 'Car Hire', href: '/car-hire' },
{ label: 'Booking', href: '/booking' },
{ label: 'Contact', href: '/contact' },
];

export default function Header() {
const [menuOpen, setMenuOpen] = React.useState(false);

return (
<header className="fixed left-0 top-0 z-50 w-full bg-forest shadow-lg">
<div className="mx-auto flex min-h-[76px] w-full max-w-[1600px] items-center px-4 sm:px-6 lg:px-8">

{/* LOGO */}
<Link
href="/"
onClick={() => setMenuOpen(false)}
className="mr-6 flex shrink-0 items-center lg:mr-8"
>
<img
src="/images/logo.png"
alt="Kilimanjaro Travel"
className="h-14 w-auto object-contain sm:h-16"
/>
</Link>

{/* DESKTOP NAVIGATION */}
<nav className="hidden min-w-0 flex-1 items-center justify-between gap-2 lg:flex">
{links.map((link) => (
<Link
key={link.href}
href={link.href}
className="
px-1
text-center
text-[11px]
font-semibold
leading-tight
text-white
transition-colors
duration-200
hover:text-gold
xl:text-xs
2xl:text-[13px]
"
>
{link.label}
</Link>
))}
</nav>

{/* GERMAN LANGUAGE */}
<div className="ml-4 hidden shrink-0 lg:block">
<button
type="button"
className="
flex
items-center
gap-1
rounded-md
border
border-white/30
bg-white/5
px-3
py-2
text-xs
font-semibold
text-white
transition
hover:bg-white/10
"
>
<span>🇩🇪</span>
<span>DE</span>
<span className="text-[10px]">▾</span>
</button>
</div>

{/* MOBILE MENU BUTTON */}
<button
type="button"
onClick={() => setMenuOpen((current) => !current)}
className="
ml-auto
flex
h-11
w-11
items-center
justify-center
rounded-lg
text-2xl
text-white
hover:bg-white/10
lg:hidden
"
aria-label={menuOpen ? 'Close menu' : 'Open menu'}
aria-expanded={menuOpen}
>
{menuOpen ? '✕' : '☰'}
</button>
</div>

{/* MOBILE NAVIGATION */}
{menuOpen && (
<div className="border-t border-white/10 bg-forest shadow-xl lg:hidden">
<div className="max-h-[75vh] overflow-y-auto px-5 py-4">

<nav className="flex flex-col">
{links.map((link) => (
<Link
key={link.href}
href={link.href}
onClick={() => setMenuOpen(false)}
className="
border-b
border-white/10
px-3
py-3
text-sm
font-semibold
text-white
transition
hover:bg-white/10
hover:text-gold
"
>
{link.label}
</Link>
))}
</nav>

{/* MOBILE GERMAN LANGUAGE */}
<div className="mt-4">
<button
type="button"
className="
flex
items-center
gap-2
rounded-md
border
border-white/30
px-4
py-2
text-sm
font-semibold
text-white
"
>
<span>🇩🇪</span>
<span>DE</span>
<span className="text-xs">▾</span>
</button>
</div>

</div>
</div>
)}
</header>
);
}
