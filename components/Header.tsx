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
{ code: 'EN', name: 'English', flag: '🇬🇧' },
{ code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
{ code: 'FR', name: 'Français', flag: '🇫🇷' },
{ code: 'ES', name: 'Español', flag: '🇪🇸' },
];

export default function Header() {
const [menuOpen, setMenuOpen] = useState(false);
const [languageOpen, setLanguageOpen] = useState(false);
const [language, setLanguage] = useState('EN');

const selectedLanguage =
languages.find((item) => item.code === language) ?? languages[0];

return (
<header className="fixed left-0 top-0 z-50 w-full bg-forest shadow-lg">
<div className="flex w-full items-center gap-3 px-3 py-2">
{/* Logo */}
<Link href="/" className="shrink-0">
<img
src="/images/logo.png"
alt="Kilimanjaro Travel"
className="h-16 w-auto object-contain"
/>
</Link>

{/* Desktop Navigation */}
<nav className="hidden flex-1 items-center justify-start gap-4 text-sm font-semibold text-white lg:flex">
{links.map(([label, href]) => {
const words = label.split(' ');

return (
<Link
key={href}
href={href}
className="whitespace-nowrap text-center leading-tight text-white transition hover:text-gold"
>
{words.length > 1 ? (
<>
{words[0]}
<br />
{words.slice(1).join(' ')}
</>
) : (
label
)}
</Link>
);
})}
</nav>

{/* Desktop Language Selector */}
<div className="relative hidden shrink-0 lg:block">
<button
type="button"
onClick={() => setLanguageOpen(!languageOpen)}
className="flex items-center gap-1 rounded-lg border border-white/30 px-2 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
aria-label="Select language"
aria-expanded={languageOpen}
>
<span>{selectedLanguage.flag}</span>
<span>{selectedLanguage.code}</span>
<span className="text-xs">▾</span>
</button>

{languageOpen && (
<div className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-lg bg-white shadow-xl">
{languages.map((item) => (
<button
key={item.code}
type="button"
onClick={() => {
setLanguage(item.code);
setLanguageOpen(false);
}}
className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium text-gray-800 transition hover:bg-gray-100"
>
<span>{item.flag}</span>
<span>{item.name}</span>
</button>
))}
</div>
)}
</div>

{/* Mobile Menu Button */}
<button
type="button"
onClick={() => setMenuOpen(!menuOpen)}
className="ml-auto rounded-lg px-3 py-2 text-3xl text-white lg:hidden"
aria-label={menuOpen ? 'Close menu' : 'Open menu'}
aria-expanded={menuOpen}
>
{menuOpen ? '✕' : '☰'}
</button>
</div>

{/* Mobile Navigation */}
{menuOpen && (
<div className="absolute left-0 top-full w-full bg-forest px-6 py-4 shadow-lg lg:hidden">
<div className="flex max-h-[75vh] flex-col gap-4 overflow-y-auto">
{links.map(([label, href]) => (
<Link
key={href}
href={href}
onClick={() => setMenuOpen(false)}
className="text-lg font-semibold text-white transition hover:text-gold"
>
{label}
</Link>
))}

{/* Mobile Languages */}
<div className="border-t border-white/20 pt-4">
<p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
Language
</p>

<div className="grid grid-cols-2 gap-2">
{languages.map((item) => (
<button
key={item.code}
type="button"
onClick={() => {
setLanguage(item.code);
setMenuOpen(false);
}}
className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left font-semibold transition ${
language === item.code
? 'bg-gold text-white'
: 'bg-white/10 text-white hover:bg-white/20'
}`}
>
<span>{item.flag}</span>
<span>{item.name}</span>
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
