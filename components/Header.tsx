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
['🇬🇧', 'EN', 'English'],
['🇩🇪', 'DE', 'Deutsch'],
['🇫🇷', 'FR', 'Français'],
['🇪🇸', 'ES', 'Español'],
];

export default function Header() {
const [menuOpen, setMenuOpen] = useState(false);
const [languageOpen, setLanguageOpen] = useState(false);
const [language, setLanguage] = useState('EN');
const [flag, setFlag] = useState('🇬🇧');

const chooseLanguage = (
selectedFlag: string,
code: string
) => {
setFlag(selectedFlag);
setLanguage(code);
setLanguageOpen(false);
};

const formattedLabel = (label: string) => {
switch (label) {
case 'Safari Packages':
return (
<>
Safari
<br />
Packages
</>
);

case 'Special Safaris':
return (
<>
Special
<br />
Safaris
</>
);

case 'Kilimanjaro Treks':
return (
<>
Kilimanjaro
<br />
Treks
</>
);

case 'Mountain Adventures':
return (
<>
Mountain
<br />
Adventures
</>
);

case 'Cultural Tours':
return (
<>
Cultural
<br />
Tours
</>
);

case 'Day Trips':
return (
<>
Day
<br />
Trips
</>
);

case 'Car Hire':
return (
<>
Car
<br />
Hire
</>
);

default:
return label;
}
};

return (
<header className="fixed left-0 top-0 z-50 w-full bg-forest shadow-lg">
<div className="mx-auto flex min-h-[78px] w-full max-w-[1800px] items-center px-4 sm:px-6 lg:px-7">

{/* LOGO */}
<Link
href="/"
className="mr-5 flex shrink-0 items-center lg:mr-6"
aria-label="Kilimanjaro Travel"
>
<img
src="/images/logo.png"
alt="Kilimanjaro Travel"
className="h-12 w-auto object-contain sm:h-14"
/>
</Link>

{/* DESKTOP NAVIGATION */}
<nav className="hidden min-w-0 flex-1 items-center lg:flex">

{/* MAIN LINKS */}
<div className="flex min-w-0 flex-1 items-center justify-between gap-x-2 xl:gap-x-3">

{links.map(([label, href]) => (
<Link
key={href}
href={href}
className="
flex shrink-0 items-center justify-center
text-center
text-[11px] font-semibold
leading-[1.15]
text-white
transition-colors
duration-200
hover:text-gold
xl:text-[12px]
"
>
<span className="whitespace-nowrap">
{formattedLabel(label)}
</span>
</Link>
))}

</div>

{/* ONE LANGUAGE BUTTON */}
<div className="relative ml-4 shrink-0 xl:ml-5">

<button
type="button"
onClick={() => setLanguageOpen(!languageOpen)}
className="
flex items-center
gap-1
rounded-md
border border-white/30
px-2.5 py-2
text-xs font-bold
text-white
transition
hover:border-gold
hover:text-gold
"
aria-haspopup="true"
aria-expanded={languageOpen}
>
<span className="text-base">{flag}</span>
<span>{language}</span>
<span className="text-[9px]">▼</span>
</button>

{/* LANGUAGE DROPDOWN */}
{languageOpen && (
<div
className="
absolute right-0 top-full
z-[60]
mt-2
w-[155px]
overflow-hidden
rounded-lg
bg-white
shadow-2xl
"
>
{languages.map(([selectedFlag, code, name]) => (
<button
key={code}
type="button"
onClick={() =>
chooseLanguage(selectedFlag, code)
}
className="
flex w-full
items-center
gap-3
px-4 py-3
text-left
text-sm
text-gray-700
transition
hover:bg-gray-100
"
>
<span className="text-lg">
{selectedFlag}
</span>

<span className="flex-1">
{name}
</span>

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
ml-auto
rounded-lg
px-3 py-2
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
<div className="border-t border-white/10 bg-forest shadow-xl lg:hidden">
<div className="mx-auto max-h-[80vh] max-w-[600px] overflow-y-auto px-6 py-5">

{/* MOBILE LINKS */}
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

{/* MOBILE LANGUAGE */}
<div className="mt-5 border-t border-white/20 pt-5">

<p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
Language
</p>

<div className="grid grid-cols-2 gap-2">
{languages.map(([selectedFlag, code, name]) => (
<button
key={code}
type="button"
onClick={() => {
chooseLanguage(selectedFlag, code);
setMenuOpen(false);
}}
className="
rounded-lg
border border-white/20
px-3 py-3
text-sm font-semibold
text-white
transition
hover:border-gold
hover:text-gold
"
>
<span className="mr-1">
{selectedFlag}
</span>

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
