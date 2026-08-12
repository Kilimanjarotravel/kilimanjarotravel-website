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

const selectLanguage = (code: string) => {
setLanguage(code);
setLanguageOpen(false);
};

return (
<header className="fixed left-0 top-0 z-50 w-full bg-forest shadow-lg">
<div className="mx-auto flex w-full max-w-[1600px] items-center px-4 py-3 sm:px-6 lg:px-8">

{/* LOGO */}
<Link
href="/"
className="flex shrink-0 items-center"
aria-label="Kilimanjaro Travel home"
>
<img
src="/images/logo.png"
alt="Kilimanjaro Travel"
className="h-12 w-auto object-contain sm:h-14"
/>
</Link>

{/* DESKTOP NAVIGATION */}
<nav className="ml-auto hidden items-center gap-x-5 lg:flex xl:gap-x-6">
{links.map(([label, href]) => (
<Link
key={href}
href={href}
className="whitespace-nowrap text-[13px] font-semibold text-white transition-colors duration-200 hover:text-gold"
>
{label}
</Link>
))}

{/* LANGUAGE SELECTOR */}
<div className="relative ml-2">
<button
type="button"
onClick={() => setLanguageOpen(!languageOpen)}
className="flex items-center gap-1 rounded-md border border-white/30 px-3 py-2 text-xs font-semibold text-white transition hover:border-gold hover:text-gold"
aria-expanded={languageOpen}
aria-haspopup="true"
>
🌐 {language}
<span className="text-[10px]">▼</span>
</button>

{languageOpen && (
<div className="absolute right-0 top-full mt-2 min-w-[130px] overflow-hidden rounded-lg bg-white shadow-xl">
{languages.map(([code, name]) => (
<button
key={code}
type="button"
onClick={() => selectLanguage(code)}
className={`block w-full px-4 py-3 text-left text-sm transition hover:bg-gray-100 ${
language === code
? 'font-bold text-forest'
: 'text-gray-700'
}`}
>
{code} — {name}
</button>
))}
</div>
)}
</div>
</nav>

{/* MOBILE BUTTON */}
<button
type="button"
onClick={() => setMenuOpen(!menuOpen)}
className="ml-auto rounded-lg px-3 py-2 text-2xl text-white lg:hidden"
aria-label={menuOpen ? 'Close menu' : 'Open menu'}
aria-expanded={menuOpen}
>
{menuOpen ? '✕' : '☰'}
</button>
</div>

{/* MOBILE MENU */}
{menuOpen && (
<div className="border-t border-white/10 bg-forest shadow-xl lg:hidden">
<div className="mx-auto flex max-h-[80vh] max-w-[1600px] flex-col overflow-y-auto px-6 py-5">

{/* MOBILE NAVIGATION */}
<nav className="flex flex-col">
{links.map(([label, href]) => (
<Link
key={href}
href={href}
onClick={() => setMenuOpen(false)}
className="border-b border-white/10 py-4 text-base font-semibold text-white transition hover:text-gold"
>
{label}
</Link>
))}
</nav>

{/* MOBILE LANGUAGES */}
<div className="mt-5 border-t border-white/20 pt-5">
<p className="mb-3 text-xs font-bold uppercase tracking-wider text-gold">
Language
</p>

<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
{languages.map(([code, name]) => (
<button
key={code}
type="button"
onClick={() => {
selectLanguage(code);
setMenuOpen(false);
}}
className={`rounded-lg border px-3 py-3 text-sm font-semibold transition ${
language === code
? 'border-gold bg-gold text-forest'
: 'border-white/20 text-white hover:border-gold hover:text-gold'
}`}
>
{code}
<span className="ml-1 text-xs opacity-80">
{name}
</span>
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
