'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
useLanguage,
type LanguageCode,
} from './LanguageProvider';

const links = [
{
href: '/about',
en: 'About',
de: 'Über uns',
fr: 'À propos',
es: 'Sobre nosotros',
},
{
href: '/safari-packages',
en: 'Safari Packages',
de: 'Safari-Pakete',
fr: 'Forfaits Safari',
es: 'Paquetes de Safari',
},
{
href: '/safaris',
en: 'Special Safaris',
de: 'Besondere Safaris',
fr: 'Safaris spéciaux',
es: 'Safaris especiales',
},
{
href: '/kilimanjaro-treks',
en: 'Kilimanjaro Treks',
de: 'Kilimandscharo-Touren',
fr: 'Trek du Kilimandjaro',
es: 'Trekking del Kilimanjaro',
},
{
href: '/mountain-adventures',
en: 'Mountain Adventures',
de: 'Bergabenteuer',
fr: 'Aventures en montagne',
es: 'Aventuras de montaña',
},
{
href: '/cultural-tours',
en: 'Cultural Tours',
de: 'Kulturreisen',
fr: 'Circuits culturels',
es: 'Tours culturales',
},
{
href: '/day-trips',
en: 'Day Trips',
de: 'Tagesausflüge',
fr: 'Excursions à la journée',
es: 'Excursiones de un día',
},
{
href: '/testimonials',
en: 'Testimonials',
de: 'Kundenstimmen',
fr: 'Témoignages',
es: 'Testimonios',
},
{
href: '/faq',
en: 'FAQ',
de: 'FAQ',
fr: 'FAQ',
es: 'Preguntas frecuentes',
},
{
href: '/zanzibar',
en: 'Zanzibar',
de: 'Sansibar',
fr: 'Zanzibar',
es: 'Zanzíbar',
},
{
href: '/car-hire',
en: 'Car Hire',
de: 'Autovermietung',
fr: 'Location de voitures',
es: 'Alquiler de coches',
},
{
href: '/booking',
en: 'Booking',
de: 'Buchung',
fr: 'Réservation',
es: 'Reserva',
},
{
href: '/contact',
en: 'Contact',
de: 'Kontakt',
fr: 'Contact',
es: 'Contacto',
},
];

const languages: {
code: LanguageCode;
name: string;
flag: string;
}[] = [
{
code: 'en',
name: 'English',
flag: '🇬🇧',
},
{
code: 'de',
name: 'Deutsch',
flag: '🇩🇪',
},
{
code: 'fr',
name: 'Français',
flag: '🇫🇷',
},
{
code: 'es',
name: 'Español',
flag: '🇪🇸',
},
];

const languageText: Record<LanguageCode, string> = {
en: 'Language',
de: 'Sprache',
fr: 'Langue',
es: 'Idioma',
};

export default function Header() {
const [menuOpen, setMenuOpen] = useState(false);
const [languageOpen, setLanguageOpen] = useState(false);

const { language, setLanguage } = useLanguage();

const currentLanguage =
languages.find((item) => item.code === language) ||
languages[0];

const changeLanguage = (code: LanguageCode) => {
setLanguage(code);
setLanguageOpen(false);
setMenuOpen(false);
};

return (
<header className="fixed left-0 top-0 z-50 w-full bg-forest shadow-lg">
<div className="mx-auto flex min-h-[82px] w-full max-w-[1700px] items-center px-4 sm:px-6 lg:px-8">

{/* LOGO */}
<Link
href="/"
className="flex h-14 w-32 shrink-0 items-center"
aria-label="Kilimanjaro Travel"
>
<img
src="/images/logo.png"
alt="Kilimanjaro Travel"
className="h-14 w-full object-contain"
/>
</Link>

{/* DESKTOP NAVIGATION */}
<nav className="ml-auto hidden min-w-0 items-center justify-end gap-x-2 xl:flex 2xl:gap-x-4">

{links.map((item) => (
<Link
key={item.href}
href={item.href}
className="
flex
min-h-[48px]
max-w-[105px]
items-center
justify-center
px-1
text-center
text-[11px]
font-semibold
leading-[1.15]
text-white
transition
duration-200
hover:text-gold
2xl:max-w-[120px]
2xl:text-[12px]
"
>
<span>
{item[language]}
</span>
</Link>
))}

{/* LANGUAGE BUTTON */}
<div className="relative ml-2 shrink-0">

<button
type="button"
onClick={() => {
setLanguageOpen(!languageOpen);
setMenuOpen(false);
}}
className="
flex
items-center
gap-1.5
rounded-md
border
border-white/30
px-2.5
py-2
text-[11px]
font-semibold
text-white
transition
hover:bg-white/10
hover:text-gold
"
aria-haspopup="true"
aria-expanded={languageOpen}
>
<span className="text-sm">
{currentLanguage.flag}
</span>

<span>
{currentLanguage.code.toUpperCase()}
</span>

<span className="text-[8px]">
▼
</span>
</button>

{/* LANGUAGE DROPDOWN */}
{languageOpen && (
<div
className="
absolute
right-0
top-full
z-[9999]
mt-2
w-44
overflow-hidden
rounded-xl
bg-white
shadow-2xl
ring-1
ring-black/10
"
>
{languages.map((item) => (
<button
key={item.code}
type="button"
onClick={() =>
changeLanguage(item.code)
}
className="
flex
w-full
items-center
gap-3
px-4
py-3
text-left
text-sm
text-gray-800
transition
hover:bg-gray-100
"
>
<span className="text-base">
{item.flag}
</span>

<span className="flex-1">
{item.name}
</span>

<span className="text-xs text-gray-400">
{item.code.toUpperCase()}
</span>
</button>
))}
</div>
)}
</div>

</nav>

{/* MOBILE / TABLET MENU BUTTON */}
<button
type="button"
onClick={() => {
setMenuOpen(!menuOpen);
setLanguageOpen(false);
}}
className="
ml-auto
rounded-lg
px-3
py-2
text-2xl
text-white
transition
hover:bg-white/10
xl:hidden
"
aria-label={
menuOpen
? 'Close menu'
: 'Open menu'
}
aria-expanded={menuOpen}
>
{menuOpen ? '✕' : '☰'}
</button>

</div>

{/* MOBILE / TABLET MENU */}
{menuOpen && (
<div
className="
absolute
left-0
top-full
z-[9998]
w-full
border-t
border-white/10
bg-forest
px-5
py-5
shadow-2xl
xl:hidden
"
>
<div className="mx-auto max-h-[75vh] max-w-2xl overflow-y-auto">

{/* MOBILE LINKS */}
<nav className="flex flex-col gap-1">

{links.map((item) => (
<Link
key={item.href}
href={item.href}
onClick={() =>
setMenuOpen(false)
}
className="
rounded-lg
px-3
py-3
text-base
font-semibold
text-white
transition
hover:bg-white/10
hover:text-gold
"
>
{item[language]}
</Link>
))}

</nav>

{/* MOBILE LANGUAGES */}
<div className="mt-4 border-t border-white/20 pt-5">

<p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/60">
{languageText[language]}
</p>

<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">

{languages.map((item) => (
<button
key={item.code}
type="button"
onClick={() =>
changeLanguage(item.code)
}
className="
flex
items-center
gap-2
rounded-lg
border
border-white/20
px-3
py-2.5
text-sm
font-medium
text-white
transition
hover:bg-white/10
hover:text-gold
"
>
<span>
{item.flag}
</span>

<span>
{item.name}
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
