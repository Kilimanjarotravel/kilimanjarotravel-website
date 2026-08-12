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
['Testimonials', '/testimonials'],
['FAQ', '/faq'],
['Zanzibar', '/zanzibar'],
['Car Hire', '/car-hire'],
['Booking', '/booking'],
['Contact', '/contact'],
];

const languages = [
['EN', 'English'],
['DE', 'Deutsch'],
['FR', 'Français'],
['ES', 'Español'],
];

export default function Header() {
const [menuOpen, setMenuOpen] = useState(false);
const [languageOpen, setLanguageOpen] = useState(false);
const [language, setLanguage] = useState('EN');

const chooseLanguage = (code: string) => {
setLanguage(code);
setLanguageOpen(false);
};

return (
<header className="fixed left-0 top-0 z-50 w-full bg-forest shadow-lg">
<div className="mx-auto flex min-h-[78px] w-full max-w-[1800px] items-center px-4 sm:px-6 lg:px-8">

{/* LOGO */}
<Link
href="/"
className="flex shrink-0 items-center"
aria-label="Kilimanjaro Travel"
>
<img
src="/images/logo.png"
alt="Kilimanjaro Travel"
className="h-12 w-auto object-contain sm:h-14"
/>
</Link>

{/* DESKTOP MENU */}
<nav className="ml-auto hidden items-center lg:flex">

<div className="flex items-center gap-x-4 xl:gap-x-5 2xl:gap-x-6">
{links.map(([label, href]) => (
<Link
key={href}
href={href}
className={`
flex min-h-[42px] items-center justify-center
whitespace-normal text-center
text-[12px] font-semibold leading-[1.15]
text-white transition duration-200
hover:text-gold
xl:text-[13px]
`}
>
<span className="max-w-[105px]">
{label === 'Safari Packages' ? (
<>
Safari
<br />
Packages
</>
) : label === 'Special Safaris' ? (
<>
Special
<br />
Safaris
</>
) : label === 'Kilimanjaro Treks' ? (
<>
Kilimanjaro
<br />
Treks
</>
) : label === 'Mountain Adventures' ? (
<>
Mountain
<br />
Adventures
</>
) : label === 'Cultural Tours' ? (
<>
Cultural
<br />
Tours
</>
) : label === 'Day Trips' ? (
<>
Day
<br />
Trips
</>
) : label === 'Car Hire' ? (
<>
Car
<br />
Hire
</>
) : (
label
)}
</span>
</Link>
))}
</div>

{/* ONE LANGUAGE BUTTON ONLY */}
<div className="relative ml-5 shrink-0">
<button
type="button"
onClick={() => setLanguageOpen(!languageOpen)}
className="
flex items-center gap-1
rounded-md border border-white/30
px-3 py-2
text-xs font-bold text-white
transition
hover:border-gold hover:text-gold
"
aria-haspopup="true"
aria-expanded={languageOpen}
>
🌐 {language}
<span className="ml-1 text-[9px]">▼</span>
</button>

{languageOpen && (
<div className="absolute right-0 top-full z-50 mt-2 min-w-[150px] overflow-hidden rounded-lg bg-white shadow-2xl">

{languages.map(([code, name]) => (
<button
key={code}
type="button"
onClick={() => chooseLanguage(code)}
className={`
flex w-full items-center justify-between
px-4 py-3
text-left text-sm
transition
hover:bg-gray-100
${
language === code
? 'font-bold text-forest'
: 'text-gray-700'
}
`}
>
<span>{name}</span>
<span className="text-xs font-bold">
{code}
</span>
</button>
))}

</div>
)}
</div>
</nav>

{/* MOBILE MENU BUTTON */}
<button
type="button"
onClick={() => setMenuOpen(!menuOpen)}
className="
ml-auto rounded-lg
px-3 py-2
text-2xl text-white
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
<div className="border-t border-white/10 bg-forest shadow-xl lg:hidden">
<div className="mx-auto max-h-[80vh] max-w-[600px] overflow-y-auto px-6 py-5">

<nav className="flex flex-col">
{links.map(([label, href]) => (
<Link
key={href}
href={href}
onClick={() => setMenuOpen(false)}
className="
border-b border-white/10
py-4
text-base font-semibold
text-white
transition
hover:text-gold
"
>
{label}
</Link>
))}
</nav>

{/* MOBILE LANGUAGE SELECTOR */}
<div className="mt-5 border-t border-white/20 pt-5">
<p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
Language
</p>

<div className="grid grid-cols-2 gap-2">
{languages.map(([code, name]) => (
<button
key={code}
type="button"
onClick={() => {
chooseLanguage(code);
setMenuOpen(false);
}}
className={`
rounded-lg border
px-3 py-3
text-sm font-semibold
transition
${
language === code
? 'border-gold bg-gold text-forest'
: 'border-white/20 text-white hover:border-gold hover:text-gold'
}
`}
>
{code} — {name}
</button>
))}
</div>
</div>

</div>
</div>
)}
</header>
);
}

