'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';

import {
Car,
Mountain,
Palmtree,
PawPrint,
ShieldCheck,
Star,
Users,
} from 'lucide-react';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
en: {
heroSmall: 'TANZANIA SAFARI SPECIALISTS',
heroTitle1: 'See More.',
heroTitle2: 'Feel More.',
heroText:
'Authentic safaris, Kilimanjaro treks, Zanzibar holidays, cultural tours and professional car hire from Arusha, Tanzania.',
requestQuote: 'Request a Quote',
exploreSafaris: 'Explore Safaris',

aboutSmall: 'ABOUT US',
aboutTitle: 'Welcome to Kilimanjaro Travel',
aboutText1:
'Kilimanjaro Travel is the travel brand of Kilimanjaro Travel Car Hire Limited, a TALA licensed tour operator based in Arusha, Tanzania.',
aboutText2:
'With more than 10 years of experience, we create tailor-made adventures for travelers from around the world.',

servicesSmall: 'OUR SERVICES',
servicesTitle: 'One Brand. Four Exceptional Experiences.',
explore: 'Explore →',

safariTitle: 'Kilimanjaro Travel Safaris',
safariText:
'Serengeti, Ngorongoro, Tarangire, Lake Manyara and unforgettable Big Five experiences.',

trekTitle: 'Kilimanjaro Travel Treks',
trekText:
'Climb Mount Kilimanjaro with experienced guides, porters, cooks and full mountain support.',

zanzibarTitle: 'Kilimanjaro Travel Zanzibar',
zanzibarText:
'Beach holidays, Stone Town, spice tours, snorkeling, dolphin tours and honeymoon escapes.',

carTitle: 'Kilimanjaro Travel Car Hire',
carText:
'Safari Land Cruisers, Hiace, Coaster, airport transfers and professional private drivers.',

whySmall: 'WHY CHOOSE US',
whyTitle: 'Travel with Confidence',
whyText:
'We combine local knowledge, experienced professionals and carefully planned itineraries to create memorable Tanzania adventures.',

experience1: '10+ Years Experience',
experience2: 'TALA Licensed Tour Operator',
experience3: 'Professional Guides & Safari Vehicles',
experience4: 'Tailor-made Itineraries',

discover: 'DISCOVER TANZANIA',
popular: 'Popular Experiences',
exploreExperience: 'Explore Experience →',

exp1: '3 Days Serengeti & Ngorongoro',
exp2: '5 Days Northern Tanzania Safari',
exp3: '7 Days Great Migration Safari',
exp4: '6 Days Machame Route',
exp5: '8 Days Lemosho Route',
exp6: '5 Days Zanzibar Holiday',

travelConfidence: 'TRAVEL WITH CONFIDENCE',
trustedTitle: 'Trusted by Travelers Worldwide',
trustedText:
'Discover what our guests say about their safaris, Kilimanjaro climbs, Zanzibar holidays and Tanzania travel experiences.',
years: 'Years Experience',
guestExperience: 'Guest Experience',

guestsTitle: 'Our Guests Love Their Journey',
guestsText:
'Read genuine reviews from travelers who have experienced Tanzania with Kilimanjaro Travel.',
reviews: 'Read Our Reviews →',

finalSmall: 'YOUR TANZANIA ADVENTURE STARTS HERE',
finalTitle: 'Ready to Explore Tanzania?',
finalText:
'From unforgettable safaris and Kilimanjaro climbs to Zanzibar beaches and cultural experiences, let us create a journey made for you.',
plan: 'Plan Your Safari →',
contact: 'Contact Us',
},

de: {
heroSmall: 'TANSANIA SAFARI SPEZIALISTEN',
heroTitle1: 'Mehr sehen.',
heroTitle2: 'Mehr fühlen.',
heroText:
'Authentische Safaris, Kilimandscharo-Treks, Sansibar-Urlaub, Kulturreisen und professionelle Autovermietung ab Arusha, Tansania.',
requestQuote: 'Angebot anfordern',
exploreSafaris: 'Safaris entdecken',

aboutSmall: 'ÜBER UNS',
aboutTitle: 'Willkommen bei Kilimanjaro Travel',
aboutText1:
'Kilimanjaro Travel ist die Reisemarke von Kilimanjaro Travel Car Hire Limited, einem TALA-lizenzierten Reiseveranstalter mit Sitz in Arusha, Tansania.',
aboutText2:
'Mit mehr als 10 Jahren Erfahrung gestalten wir maßgeschneiderte Abenteuer für Reisende aus aller Welt.',

servicesSmall: 'UNSERE LEISTUNGEN',
servicesTitle: 'Eine Marke. Vier außergewöhnliche Erlebnisse.',
explore: 'Entdecken →',

safariTitle: 'Kilimanjaro Travel Safaris',
safariText:
'Serengeti, Ngorongoro, Tarangire, Lake Manyara und unvergessliche Big-Five-Erlebnisse.',

trekTitle: 'Kilimanjaro Travel Treks',
trekText:
'Besteigen Sie den Kilimandscharo mit erfahrenen Guides, Trägern, Köchen und umfassender Unterstützung am Berg.',

zanzibarTitle: 'Kilimanjaro Travel Sansibar',
zanzibarText:
'Strandurlaub, Stone Town, Gewürztouren, Schnorcheln, Delfintouren und romantische Flitterwochen.',

carTitle: 'Kilimanjaro Travel Autovermietung',
carText:
'Safari-Land Cruiser, Hiace, Coaster, Flughafentransfers und professionelle private Fahrer.',

whySmall: 'WARUM UNS WÄHLEN',
whyTitle: 'Reisen Sie mit Vertrauen',
whyText:
'Wir verbinden lokales Wissen, erfahrene Fachleute und sorgfältig geplante Reiserouten, um unvergessliche Tansania-Abenteuer zu schaffen.',

experience1: 'Über 10 Jahre Erfahrung',
experience2: 'TALA-lizenzierter Reiseveranstalter',
experience3: 'Professionelle Guides & Safari-Fahrzeuge',
experience4: 'Maßgeschneiderte Reiserouten',

discover: 'TANSANIA ENTDECKEN',
popular: 'Beliebte Erlebnisse',
exploreExperience: 'Erlebnis entdecken →',

exp1: '3 Tage Serengeti & Ngorongoro',
exp2: '5 Tage Safari im Norden Tansanias',
exp3: '7 Tage Große-Migration-Safari',
exp4: '6 Tage Machame-Route',
exp5: '8 Tage Lemosho-Route',
exp6: '5 Tage Sansibar-Urlaub',

travelConfidence: 'REISEN MIT VERTRAUEN',
trustedTitle: 'Vertraut von Reisenden weltweit',
trustedText:
'Entdecken Sie, was unsere Gäste über ihre Safaris, Kilimandscharo-Besteigungen, Sansibar-Urlaube und Tansania-Reiseerlebnisse sagen.',
years: 'Jahre Erfahrung',
guestExperience: 'Gästeerlebnis',

guestsTitle: 'Unsere Gäste lieben ihre Reise',
guestsText:
'Lesen Sie echte Bewertungen von Reisenden, die Tansania mit Kilimanjaro Travel erlebt haben.',
reviews: 'Unsere Bewertungen lesen →',

finalSmall: 'IHR TANSANIA-ABENTEUER BEGINNT HIER',
finalTitle: 'Bereit, Tansania zu entdecken?',
finalText:
'Von unvergesslichen Safaris und Kilimandscharo-Besteigungen bis zu Sansibar-Stränden und kulturellen Erlebnissen – wir gestalten eine Reise ganz nach Ihren Wünschen.',
plan: 'Safari planen →',
contact: 'Kontakt',
},

fr: {
heroSmall: 'SPÉCIALISTES DES SAFARIS EN TANZANIE',
heroTitle1: 'Voir plus.',
heroTitle2: 'Ressentir plus.',
heroText:
'Safaris authentiques, treks du Kilimandjaro, vacances à Zanzibar, circuits culturels et location de voitures professionnelle depuis Arusha, Tanzanie.',
requestQuote: 'Demander un devis',
exploreSafaris: 'Découvrir les safaris',

aboutSmall: 'À PROPOS DE NOUS',
aboutTitle: 'Bienvenue chez Kilimanjaro Travel',
aboutText1:
'Kilimanjaro Travel est la marque touristique de Kilimanjaro Travel Car Hire Limited, un tour-opérateur agréé TALA basé à Arusha, en Tanzanie.',
aboutText2:
'Avec plus de 10 ans d’expérience, nous créons des aventures sur mesure pour les voyageurs du monde entier.',

servicesSmall: 'NOS SERVICES',
servicesTitle: 'Une marque. Quatre expériences exceptionnelles.',
explore: 'Découvrir →',

safariTitle: 'Kilimanjaro Travel Safaris',
safariText:
'Serengeti, Ngorongoro, Tarangire, lac Manyara et expériences inoubliables avec les Big Five.',

trekTitle: 'Kilimanjaro Travel Treks',
trekText:
'Grimpez le Kilimandjaro avec des guides, porteurs, cuisiniers expérimentés et un accompagnement complet en montagne.',

zanzibarTitle: 'Kilimanjaro Travel Zanzibar',
zanzibarText:
'Vacances à la plage, Stone Town, visites des épices, snorkeling, excursions avec les dauphins et voyages de noces.',

carTitle: 'Kilimanjaro Travel Location de voitures',
carText:
'Land Cruiser de safari, Hiace, Coaster, transferts aéroport et chauffeurs privés professionnels.',

whySmall: 'POURQUOI NOUS CHOISIR',
whyTitle: 'Voyagez en toute confiance',
whyText:
'Nous combinons connaissance locale, professionnels expérimentés et itinéraires soigneusement planifiés pour créer des aventures mémorables en Tanzanie.',

experience1: 'Plus de 10 ans d’expérience',
experience2: 'Tour-opérateur agréé TALA',
experience3: 'Guides professionnels & véhicules de safari',
experience4: 'Itinéraires sur mesure',

discover: 'DÉCOUVREZ LA TANZANIE',
popular: 'Expériences populaires',
exploreExperience: 'Découvrir l’expérience →',

exp1: '3 jours Serengeti & Ngorongoro',
exp2: '5 jours de safari dans le nord de la Tanzanie',
exp3: '7 jours de safari Grande Migration',
exp4: '6 jours – Route Machame',
exp5: '8 jours – Route Lemosho',
exp6: '5 jours de vacances à Zanzibar',

travelConfidence: 'VOYAGEZ EN TOUTE CONFIANCE',
trustedTitle: 'Approuvé par des voyageurs du monde entier',
trustedText:
'Découvrez ce que nos clients disent de leurs safaris, ascensions du Kilimandjaro, vacances à Zanzibar et expériences de voyage en Tanzanie.',
years: 'Années d’expérience',
guestExperience: 'Expérience client',

guestsTitle: 'Nos clients adorent leur voyage',
guestsText:
'Lisez les avis authentiques de voyageurs qui ont découvert la Tanzanie avec Kilimanjaro Travel.',
reviews: 'Lire nos avis →',

finalSmall: 'VOTRE AVENTURE EN TANZANIE COMMENCE ICI',
finalTitle: 'Prêt à découvrir la Tanzanie ?',
finalText:
'Des safaris inoubliables et ascensions du Kilimandjaro aux plages de Zanzibar et expériences culturelles, créons un voyage fait pour vous.',
plan: 'Planifier votre safari →',
contact: 'Nous contacter',
},

es: {
heroSmall: 'ESPECIALISTAS EN SAFARIS DE TANZANIA',
heroTitle1: 'Ver más.',
heroTitle2: 'Sentir más.',
heroText:
'Safaris auténticos, trekkings del Kilimanjaro, vacaciones en Zanzíbar, circuitos culturales y alquiler profesional de vehículos desde Arusha, Tanzania.',
requestQuote: 'Solicitar presupuesto',
exploreSafaris: 'Explorar safaris',

aboutSmall: 'SOBRE NOSOTROS',
aboutTitle: 'Bienvenido a Kilimanjaro Travel',
aboutText1:
'Kilimanjaro Travel es la marca turística de Kilimanjaro Travel Car Hire Limited, un operador turístico con licencia TALA con sede en Arusha, Tanzania.',
aboutText2:
'Con más de 10 años de experiencia, creamos aventuras a medida para viajeros de todo el mundo.',

servicesSmall: 'NUESTROS SERVICIOS',
servicesTitle: 'Una marca. Cuatro experiencias excepcionales.',
explore: 'Explorar →',

safariTitle: 'Kilimanjaro Travel Safaris',
safariText:
'Serengeti, Ngorongoro, Tarangire, lago Manyara y experiencias inolvidables con los Big Five.',

trekTitle: 'Kilimanjaro Travel Treks',
trekText:
'Sube al Kilimanjaro con guías, porteadores y cocineros experimentados y todo el apoyo necesario en la montaña.',

zanzibarTitle: 'Kilimanjaro Travel Zanzíbar',
zanzibarText:
'Vacaciones de playa, Stone Town, tours de especias, snorkel, excursiones con delfines y escapadas de luna de miel.',

carTitle: 'Kilimanjaro Travel Alquiler de coches',
carText:
'Land Cruiser para safaris, Hiace, Coaster, traslados al aeropuerto y conductores privados profesionales.',

whySmall: 'POR QUÉ ELEGIRNOS',
whyTitle: 'Viaja con confianza',
whyText:
'Combinamos conocimiento local, profesionales experimentados e itinerarios cuidadosamente planificados para crear aventuras inolvidables en Tanzania.',

experience1: 'Más de 10 años de experiencia',
experience2: 'Operador turístico con licencia TALA',
experience3: 'Guías profesionales y vehículos de safari',
experience4: 'Itinerarios a medida',

discover: 'DESCUBRE TANZANIA',
popular: 'Experiencias populares',
exploreExperience: 'Explorar experiencia →',

exp1: '3 días Serengeti y Ngorongoro',
exp2: '5 días de safari por el norte de Tanzania',
exp3: '7 días de safari de la Gran Migración',
exp4: '6 días – Ruta Machame',
exp5: '8 días – Ruta Lemosho',
exp6: '5 días de vacaciones en Zanzíbar',

travelConfidence: 'VIAJA CON CONFIANZA',
trustedTitle: 'De confianza para viajeros de todo el mundo',
trustedText:
'Descubre lo que nuestros huéspedes dicen sobre sus safaris, ascensiones al Kilimanjaro, vacaciones en Zanzíbar y experiencias de viaje por Tanzania.',
years: 'Años de experiencia',
guestExperience: 'Experiencia de los huéspedes',

guestsTitle: 'A nuestros huéspedes les encanta su viaje',
guestsText:
'Lee opiniones reales de viajeros que han vivido Tanzania con Kilimanjaro Travel.',
reviews: 'Leer nuestras opiniones →',

finalSmall: 'TU AVENTURA EN TANZANIA COMIENZA AQUÍ',
finalTitle: '¿Listo para explorar Tanzania?',
finalText:
'Desde safaris inolvidables y ascensiones al Kilimanjaro hasta las playas de Zanzíbar y experiencias culturales, creemos un viaje hecho para ti.',
plan: 'Planifica tu safari →',
contact: 'Contáctanos',
},
};

const experiences = [
{
key: 'exp1',
image: '/images/fleet.jpeg',
href: '/safari-packages/3-days-serengeti-ngorongoro',
},
{
key: 'exp2',
image: '/images/northern-five.jpeg',
href: '/safari-packages/5-days-northern-circuit',
},
{
key: 'exp3',
image: '/images/mara-safari.jpeg',
href: '/safari-packages/7-days-northern-circuit',
},
{
key: 'exp4',
image: '/images/machame-two.jpeg',
href: '/kilimanjaro-treks',
},
{
key: 'exp5',
image: '/images/lemosho-two.jpeg',
href: '/kilimanjaro-treks',
},
{
key: 'exp6',
image: '/images/zanzibar-two.jpeg',
href: '/zanzibar',
},
];

export default function Home() {
const { language } = useLanguage();

const t =
translations[language as keyof typeof translations] ||
translations.en;

const services = [
{
title: t.safariTitle,
text: t.safariText,
icon: PawPrint,
href: '/safaris',
},
{
title: t.trekTitle,
text: t.trekText,
icon: Mountain,
href: '/kilimanjaro-treks',
},
{
title: t.zanzibarTitle,
text: t.zanzibarText,
icon: Palmtree,
href: '/zanzibar',
},
{
title: t.carTitle,
text: t.carText,
icon: Car,
href: '/car-hire',
},
];

const reasons = [
{
text: t.experience1,
icon: Users,
},
{
text: t.experience2,
icon: ShieldCheck,
},
{
text: t.experience3,
icon: Car,
},
{
text: t.experience4,
icon: Star,
},
];

return (
<main className="min-h-screen overflow-x-hidden">
<Header />

<WhatsApp />

{/* HERO */}
<section
className="
relative
min-h-[720px]
overflow-hidden
bg-[url('/images/home-main.jpg')]
bg-cover
bg-center
bg-no-repeat
sm:min-h-[760px]
md:min-h-screen
"
>
<div className="absolute inset-0 bg-black/45" />

<div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />

<div
className="
relative
mx-auto
flex
min-h-[720px]
max-w-7xl
flex-col
justify-center
px-5
pb-16
pt-28
text-white
sm:min-h-[760px]
sm:px-6
md:min-h-screen
md:pb-20
md:pt-32
"
>
<p
className="
max-w-full
font-bold
text-sm
tracking-[0.18em]
text-gold
sm:text-base
sm:tracking-[0.25em]
md:text-lg
"
>
{t.heroSmall}
</p>

<h1
className="
mt-5
max-w-4xl
font-display
text-5xl
font-bold
leading-[0.95]
tracking-tight
sm:text-6xl
md:text-8xl
"
>
{t.heroTitle1}
<br />
{t.heroTitle2}
</h1>

<p
className="
mt-6
max-w-xl
text-base
leading-7
text-white/90
sm:text-lg
sm:leading-8
md:max-w-2xl
md:text-xl
"
>
{t.heroText}
</p>

<div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
<Link
href="/contact"
className="
inline-flex
w-full
items-center
justify-center
rounded-full
bg-gold
px-7
py-3.5
font-bold
text-white
shadow-lg
transition
hover:bg-forest
sm:w-auto
"
>
{t.requestQuote}
</Link>

<Link
href="/safaris"
className="
inline-flex
w-full
items-center
justify-center
rounded-full
border
border-white/80
px-7
py-3.5
font-bold
text-white
transition
hover:bg-white
hover:text-forest
sm:w-auto
"
>
{t.exploreSafaris}
</Link>
</div>
</div>
</section>

{/* ABOUT */}
<section className="bg-cream py-16 sm:py-20">
<div
className="
mx-auto
grid
max-w-7xl
gap-10
px-5
sm:px-6
md:grid-cols-2
md:items-center
"
>
<div>
<p className="font-bold tracking-wider text-gold">
{t.aboutSmall}
</p>

<h2
className="
mt-3
font-display
text-4xl
font-bold
tracking-tight
text-forest
sm:text-5xl
"
>
{t.aboutTitle}
</h2>

<p className="mt-6 text-base leading-7 text-black/80 sm:text-lg sm:leading-8">
{t.aboutText1}
</p>

<p className="mt-4 text-base leading-7 text-black/80 sm:text-lg sm:leading-8">
{t.aboutText2}
</p>
</div>

<div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-xl">
<img
src="/images/home-hero.jpeg"
className="
h-[280px]
w-full
object-cover
sm:h-[360px]
md:h-[430px]
"
alt="Kilimanjaro Travel safari vehicle"
/>
</div>
</div>
</section>

{/* SERVICES */}
<section className="py-16 sm:py-20">
<div className="mx-auto max-w-7xl px-5 sm:px-6">
<p className="text-center font-bold tracking-wider text-gold">
{t.servicesSmall}
</p>

<h2
className="
mt-3
text-center
font-display
text-4xl
font-bold
tracking-tight
text-forest
sm:text-5xl
"
>
{t.servicesTitle}
</h2>

<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
{services.map((service) => {
const Icon = service.icon;

return (
<Link
href={service.href}
key={service.title}
className="
group
overflow-hidden
rounded-3xl
border
border-black/5
bg-white
p-6
shadow-lg
transition
duration-300
hover:-translate-y-1
hover:shadow-2xl
sm:p-7
"
>
<Icon
className="
h-10
w-10
text-gold
transition
group-hover:scale-110
"
/>

<h3 className="mt-5 text-xl font-bold text-forest">
{service.title}
</h3>

<p className="mt-3 leading-7 text-black/70">
{service.text}
</p>

<span className="mt-5 inline-block font-semibold text-gold">
{t.explore}
</span>
</Link>
);
})}
</div>
</div>
</section>

{/* WHY CHOOSE US */}
<section className="bg-forest py-16 text-white sm:py-20">
<div
className="
mx-auto
grid
max-w-7xl
gap-10
px-5
sm:px-6
md:grid-cols-2
md:items-center
"
>
<div className="overflow-hidden rounded-3xl bg-white/5 shadow-2xl">
<img
src="/images/why-choose-us.jpg"
className="
h-[320px]
w-full
object-cover
sm:h-[420px]
md:h-[520px]
"
alt="Kilimanjaro Travel safari team and vehicle"
/>
</div>

<div>
<p className="font-bold tracking-wider text-gold">
{t.whySmall}
</p>

<h2
className="
mt-3
font-display
text-4xl
font-bold
sm:text-5xl
"
>
{t.whyTitle}
</h2>

<p className="mt-5 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
{t.whyText}
</p>

<div className="mt-8 grid gap-4">
{reasons.map((reason) => {
const Icon = reason.icon;

return (
<div
key={reason.text}
className="
flex
items-center
gap-4
rounded-2xl
bg-white/10
p-4
"
>
<Icon className="h-6 w-6 shrink-0 text-gold" />

<span className="font-semibold">
{reason.text}
</span>
</div>
);
})}
</div>
</div>
</div>
</section>

{/* POPULAR EXPERIENCES */}
<section className="py-16 sm:py-20">
<div className="mx-auto max-w-7xl px-5 sm:px-6">
<p className="text-center font-bold tracking-wider text-gold">
{t.discover}
</p>

<h2
className="
mt-3
text-center
font-display
text-4xl
font-bold
tracking-tight
text-forest
sm:text-5xl
"
>
{t.popular}
</h2>

<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{experiences.map((experience) => (
<Link
href={experience.href}
key={experience.key}
className="
group
overflow-hidden
rounded-3xl
bg-cream
shadow-lg
transition
duration-300
hover:-translate-y-1
hover:shadow-2xl
"
>
<div className="overflow-hidden">
<img
src={experience.image}
alt={
t[
experience.key as keyof typeof t
] as string
}
className="
h-52
w-full
object-cover
transition
duration-500
group-hover:scale-105
sm:h-56
"
/>
</div>

<div className="p-5">
<h3 className="text-lg font-bold leading-snug text-forest">
{
t[
experience.key as keyof typeof t
] as string
}
</h3>

<p className="mt-3 text-sm font-semibold text-gold">
{t.exploreExperience}
</p>
</div>
</Link>
))}
</div>
</div>
</section>

{/* TESTIMONIAL / TRUST */}
<section className="bg-cream py-16 sm:py-20">
<div className="mx-auto max-w-6xl px-5 sm:px-6">
<div className="overflow-hidden rounded-3xl bg-forest shadow-2xl">
<div className="grid md:grid-cols-2">

{/* LEFT */}
<div className="p-7 text-white sm:p-10 md:p-12">
<p className="font-bold tracking-[0.2em] text-gold">
{t.travelConfidence}
</p>

<h2
className="
mt-3
font-display
text-4xl
font-bold
sm:text-5xl
"
>
{t.trustedTitle}
</h2>

<p className="mt-5 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
{t.trustedText}
</p>

<div className="mt-7 grid grid-cols-2 gap-3">
<div className="rounded-2xl bg-white/10 px-4 py-4 sm:px-5">
<div className="text-2xl font-bold text-gold">
10+
</div>

<div className="text-sm text-white/70">
{t.years}
</div>
</div>

<div className="rounded-2xl bg-white/10 px-4 py-4 sm:px-5">
<div className="text-2xl font-bold text-gold">
5★
</div>

<div className="text-sm text-white/70">
{t.guestExperience}
</div>
</div>
</div>
</div>

{/* RIGHT */}
<div className="flex items-center justify-center bg-white p-7 sm:p-10 md:p-12">
<div className="w-full max-w-md text-center">
<div className="text-3xl sm:text-4xl">
⭐️⭐️⭐️⭐️⭐️
</div>

<h3 className="mt-5 text-2xl font-bold text-forest">
{t.guestsTitle}
</h3>

<p className="mt-4 leading-7 text-black/60">
{t.guestsText}
</p>

<Link
href="/testimonials"
className="
mt-7
inline-flex
w-full
items-center
justify-center
rounded-full
bg-gold
px-7
py-3
font-semibold
text-white
transition
hover:scale-105
sm:w-auto
"
>
{t.reviews}
</Link>
</div>
</div>
</div>
</div>
</div>
</section>

{/* FINAL CTA */}
<section className="relative overflow-hidden bg-forest py-20 text-white sm:py-24">
<div
className="
absolute
inset-0
bg-[url('/images/home-main.jpg')]
bg-cover
bg-center
opacity-20
"
/>

<div className="absolute inset-0 bg-forest/75" />

<div
className="
relative
mx-auto
max-w-5xl
px-5
text-center
sm:px-6
"
>
<p className="font-bold tracking-[0.2em] text-gold sm:tracking-[0.25em]">
{t.finalSmall}
</p>

<h2
className="
mt-4
font-display
text-4xl
font-bold
sm:text-5xl
md:text-6xl
"
>
{t.finalTitle}
</h2>

<p
className="
mx-auto
mt-5
max-w-2xl
text-base
leading-7
text-white/85
sm:text-lg
sm:leading-8
"
>
{t.finalText}
</p>

<div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
<Link
href="/booking"
className="
inline-flex
w-full
items-center
justify-center
rounded-full
bg-gold
px-7
py-3.5
font-semibold
text-white
transition
hover:scale-105
sm:w-auto
"
>
{t.plan}
</Link>

<Link
href="/contact"
className="
inline-flex
w-full
items-center
justify-center
rounded-full
border
border-white/70
px-7
py-3.5
font-semibold
text-white
transition
hover:bg-white
hover:text-forest
sm:w-auto
"
>
{t.contact}
</Link>
</div>
</div>
</section>

<Footer />
</main>
);
}