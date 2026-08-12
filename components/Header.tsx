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
<div className="mx-auto flex min-h-[76px] w-full max-w-[1600px] items-center px-5 sm:px-6 lg:px-8">

{/* LOGO */}
<Link
href="/"
className="mr-8 flex shrink-0 items-center lg:mr-10"
>
<img
src="/images/logo.png"
alt="Kilimanjaro Travel"
className="h-14 w-auto object-contain sm:h-16"
/>
</Link>

{/* DESKTOP NAV */}
<nav className="hidden min-w-0 flex-1 items-center justify-between gap-3 lg:flex">
{links.map(([label, href]) => (
<Link
key={href}
href={href}
className="
whitespace-normal
text-center
text-[12px]
font-semibold
leading-[1.15]
text-white
transition-colors
duration-200
hover:text-gold
xl:text-[13px]
"
>
{label}
</Link>
))}
</nav>

{/* LANGUAGE */}
<div className="ml-6 hidden shrink-0 lg:block">
<button
type="button"
className="
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
🇬🇧 EN
<span className="ml-1">▾</span>
</button>
</div>

{/* MOBILE BUTTON */}
<button
type="button"
onClick={() => setMenuOpen(!menuOpen)}
className="
ml-auto
rounded-lg
px-3
py-2
text-2xl
text-white
lg:hidden
"
aria-label={menuOpen ? 'Close menu' : 'Open menu'}
aria-expanded={menuOpen}
>
{menuOpen ? '✕' : '☰'}
</button>
</div>

{/* MOBILE MENU */}
{menuOpen && (
<div className="border-t border-white/10 bg-forest px-6 py-5 shadow-lg lg:hidden">
<div className="flex max-h-[75vh] flex-col gap-1 overflow-y-auto">
{links.map(([label, href]) => (
<Link
key={href}
href={href}
onClick={() => setMenuOpen(false)}
className="
rounded-md
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
{label}
</Link>
))}

{/* MOBILE LANGUAGE */}
<div className="mt-3 border-t border-white/10 pt-4">
<button
type="button"
className="
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
🇬🇧 EN ▾
</button>
</div>
</div>
</div>
)}
</header>
);
}
