'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
en: {
heroTitle: 'Tanzania Safari Packages',
heroSubtitle:
'Choose from our carefully designed safari packages across Northern Tanzania.',
sectionTitle: 'Special Safaris',
explore: 'Explore Adventure',

packages: [
{
title: 'Luxury Safaris',
description:
'Premium lodges, private guides, fine dining, and tailor-made wildlife experiences across Tanzania.',
},
{
title: 'Mid-range Safaris',
description:
'Comfortable lodges, professional guides, and excellent value for an unforgettable Tanzania safari.',
},
{
title: 'Budget Camping Safaris',
description:
'Affordable camping adventures that bring you close to nature and Tanzania’s famous wildlife.',
},
{
title: 'Family Safaris',
description:
'Family-friendly itineraries with comfortable travel, flexible schedules, and activities for all ages.',
},
{
title: 'Honeymoon Safaris',
description:
'Romantic safari moments, private lodges, beautiful sunsets, and unforgettable experiences for couples.',
},
{
title: 'Mara River Crossing Safari',
description:
'Witness the dramatic Great Migration river crossings in the northern Serengeti and Maasai Mara.',
},
{
title: 'Ndutu Migration Safari',
description:
'Experience the calving season, large herds, predators, and migration action in the Ndutu plains.',
},
{
title: 'Southern Circuit Safari',
description:
'Explore quieter parks, remote wilderness, rivers, and abundant wildlife in southern Tanzania.',
},
{
title: 'Kenya & Tanzania Combined Safari',
description:
'Combine Maasai Mara, Serengeti, Ngorongoro, Amboseli, and other iconic East African destinations.',
},
{
title: 'Mkomazi Rhino Safari',
description:
'Discover rare black rhinos, African wild dogs, birdlife, and peaceful savannah landscapes.',
},
{
  title: 'Usambara-Berge & Kultur-Safari',
  description:
    'Genießen Sie Bergwanderungen, Wasserfälle, Waldwege, Dorfbesuche, lokale Farmen und authentische kulturelle Erlebnisse.',
},
{
title: 'Marine Safari, Snorkeling & Diving',
description:
'Explore coral reefs, tropical fish, diving sites, sandbanks, beaches, and the Indian Ocean.',
},
],
},

de: {
heroTitle: 'Tansania Safari-Pakete',
heroSubtitle:
'Wählen Sie aus unseren sorgfältig zusammengestellten Safari-Angeboten im Norden Tansanias.',
sectionTitle: 'Besondere Safaris',
explore: 'Abenteuer entdecken',

packages: [
{
title: 'Luxus-Safaris',
description:
'Premium-Lodges, private Guides, erstklassige Küche und maßgeschneiderte Tierbeobachtungen in ganz Tansania.',
},
{
title: 'Mittelklasse-Safaris',
description:
'Komfortable Lodges, professionelle Guides und ein hervorragendes Preis-Leistungs-Verhältnis für eine unvergessliche Tansania-Safari.',
},
{
title: 'Budget-Camping-Safaris',
description:
'Preiswerte Camping-Abenteuer, die Sie der Natur und der berühmten Tierwelt Tansanias ganz nahebringen.',
},
{
title: 'Familien-Safaris',
description:
'Familienfreundliche Reiserouten mit komfortabler Fahrt, flexiblen Zeitplänen und Aktivitäten für jedes Alter.',
},
{
title: 'Honeymoon-Safaris',
description:
'Romantische Safari-Momente, private Lodges, wunderschöne Sonnenuntergänge und unvergessliche Erlebnisse für Paare.',
},
{
title: 'Mara River Crossing Safari',
description:
'Erleben Sie die dramatischen Flussüberquerungen der Großen Migration im nördlichen Serengeti und in der Maasai Mara.',
},
{
title: 'Ndutu-Migrations-Safari',
description:
'Erleben Sie die Kalbungszeit, große Tierherden, Raubtiere und die beeindruckende Migration in den Ndutu-Ebenen.',
},
{
title: 'Safari im Südlichen Tansania',
description:
'Entdecken Sie ruhigere Nationalparks, abgelegene Wildnis, Flüsse und eine vielfältige Tierwelt im Süden Tansanias.',
},
{
title: 'Kenia & Tansania Kombi-Safari',
description:
'Kombinieren Sie Maasai Mara, Serengeti, Ngorongoro, Amboseli und weitere bekannte Reiseziele in Ostafrika.',
},
{
title: 'Mkomazi Nashorn-Safari',
description:
'Entdecken Sie seltene Spitzmaulnashörner, Afrikanische Wildhunde, eine vielfältige Vogelwelt und ruhige Savannenlandschaften.',
},
{
title: 'Usambara-Berge & Kultur-Safari',
description:
'Genießen Sie Bergwanderungen, Wasserfälle, Waldwege, Dorfbesuche, lokale Farmen und authentische kulturelle Erlebnisse.',
},
{
title: 'Meeres-Safari, Schnorcheln & Tauchen',
description:
'Entdecken Sie Korallenriffe, tropische Fische, Tauchplätze, Sandbänke, Strände und den Indischen Ozean.',
},
],
},

fr: {
heroTitle: 'Forfaits Safari en Tanzanie',
heroSubtitle:
'Choisissez parmi nos safaris soigneusement conçus dans le nord de la Tanzanie.',
sectionTitle: 'Safaris spéciaux',
explore: 'Découvrir l’aventure',

packages: [
{
title: 'Safaris de luxe',
description:
'Lodges haut de gamme, guides privés, gastronomie raffinée et expériences animalières sur mesure à travers la Tanzanie.',
},
{
title: 'Safaris milieu de gamme',
description:
'Lodges confortables, guides professionnels et excellent rapport qualité-prix pour un safari inoubliable en Tanzanie.',
},
{
title: 'Safaris camping économiques',
description:
'Des aventures en camping abordables qui vous rapprochent de la nature et de la célèbre faune de Tanzanie.',
},
{
title: 'Safaris en famille',
description:
'Des itinéraires adaptés aux familles avec des déplacements confortables, des horaires flexibles et des activités pour tous les âges.',
},
{
title: 'Safaris lune de miel',
description:
'Moments romantiques, lodges privés, magnifiques couchers de soleil et expériences inoubliables pour les couples.',
},
{
title: 'Safari traversée de la rivière Mara',
description:
'Assistez aux impressionnantes traversées de la rivière lors de la Grande Migration dans le nord du Serengeti et le Maasai Mara.',
},
{
title: 'Safari migration de Ndutu',
description:
'Découvrez la saison des naissances, les grands troupeaux, les prédateurs et l’action de la migration dans les plaines de Ndutu.',
},
{
title: 'Safari dans le circuit sud',
description:
'Explorez des parcs plus tranquilles, une nature sauvage préservée, des rivières et une faune abondante dans le sud de la Tanzanie.',
},
{
title: 'Safari combiné Kenya & Tanzanie',
description:
'Combinez le Maasai Mara, le Serengeti, Ngorongoro, Amboseli et d’autres destinations emblématiques d’Afrique de l’Est.',
},
{
title: 'Safari rhinocéros de Mkomazi',
description:
'Découvrez les rares rhinocéros noirs, les lycaons, les oiseaux et les paysages paisibles de savane.',
},
{
title: 'Montagnes Usambara & Safari culturel',
description:
'Profitez de randonnées en montagne, de cascades, de sentiers forestiers, de visites de villages, de fermes locales et d’expériences culturelles.',
},
{
title: 'Safari marin, snorkeling & plongée',
description:
'Explorez les récifs coralliens, les poissons tropicaux, les sites de plongée, les bancs de sable, les plages et l’océan Indien.',
},
],
},

es: {
heroTitle: 'Paquetes de Safari por Tanzania',
heroSubtitle:
'Elige entre nuestros safaris cuidadosamente diseñados por el norte de Tanzania.',
sectionTitle: 'Safaris especiales',
explore: 'Explorar aventura',

packages: [
{
title: 'Safaris de lujo',
description:
'Lodges premium, guías privados, gastronomía de calidad y experiencias de vida silvestre diseñadas a medida por Tanzania.',
},
{
title: 'Safaris de gama media',
description:
'Lodges cómodos, guías profesionales y una excelente relación calidad-precio para un safari inolvidable por Tanzania.',
},
{
title: 'Safaris económicos de camping',
description:
'Aventuras de camping asequibles que te acercan a la naturaleza y a la famosa fauna de Tanzania.',
},
{
title: 'Safaris familiares',
description:
'Itinerarios ideales para familias, con viajes cómodos, horarios flexibles y actividades para todas las edades.',
},
{
title: 'Safaris de luna de miel',
description:
'Momentos románticos, lodges privados, hermosos atardeceres y experiencias inolvidables para parejas.',
},
{
title: 'Safari de cruce del río Mara',
description:
'Contempla los espectaculares cruces del río durante la Gran Migración en el norte del Serengeti y Maasai Mara.',
},
{
title: 'Safari de migración de Ndutu',
description:
'Vive la temporada de nacimientos, grandes manadas, depredadores y la acción de la migración en las llanuras de Ndutu.',
},
{
title: 'Safari por el Circuito Sur',
description:
'Explora parques más tranquilos, naturaleza remota, ríos y abundante fauna en el sur de Tanzania.',
},
{
title: 'Safari combinado Kenia y Tanzania',
description:
'Combina Maasai Mara, Serengeti, Ngorongoro, Amboseli y otros destinos emblemáticos de África Oriental.',
},
{
title: 'Safari de rinocerontes de Mkomazi',
description:
'Descubre rinocerontes negros, perros salvajes africanos, aves y tranquilos paisajes de sabana.',
},
{
title: 'Montañas Usambara y Safari Cultural',
description:
'Disfruta de senderismo de montaña, cascadas, senderos forestales, visitas a pueblos, granjas locales y experiencias culturales.',
},
{
title: 'Safari marino, snorkel y buceo',
description:
'Explora arrecifes de coral, peces tropicales, lugares de buceo, bancos de arena, playas y el océano Índico.',
},
],
},
};

const safariData = [
{
image: '/images/luxury-safari.jpg',
href: '/safaris/luxury-safaris',
},
{
image: '/images/mid-range.jpg',
href: '/safaris/mid-range-safaris',
},
{
image: '/images/budget-safari.jpg',
href: '/safaris/budget-camping-safaris',
},
{
image: '/images/family-safari.jpg',
href: '/safaris/family-safaris',
},
{
image: '/images/honeymoon-safari.jpg',
href: '/safaris/honeymoon',
},
{
image: '/images/mara-safari.jpeg',
href: '/safaris/mara-river-crossing',
},
{
image: '/images/ndutu-safari.jpg',
href: '/safaris/ndutu-migration',
},
{
image: '/images/southern.jpg',
href: '/safaris/southern-circuit',
},
{
image: '/images/kenya-tanzania.jpg',
href: '/safaris/kenya-tanzania-safari',
},
{
image: '/images/mkomazi-safari.jpg',
href: '/safaris/mkomazi-rhino-safari',
},
{
image: '/images/usambara-safari.jpg',
href: '/safaris/usambara-mountains-safari',
},
{
image: '/images/marine-safari.jpg',
href: '/safaris/marine-safari',
},
];

export default function Safaris() {
const { language } = useLanguage();

const t =
translations[language as keyof typeof translations] ||
translations.en;

return (
<main>
<Header />
<WhatsApp />

<PageHero
title={t.heroTitle}
subtitle={t.heroSubtitle}
image="/images/safari-one.jpeg"
position="65% center"
/>

<section className="py-20">
<div className="mx-auto max-w-7xl px-6">
<h2 className="section-title">{t.sectionTitle}</h2>

<div className="mt-10 grid gap-6 md:grid-cols-3">
{safariData.map((safari, index) => {
const item = t.packages[index];

return (
<div
className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
key={safari.href}
>
<img
src={safari.image}
alt={item.title}
className="h-64 w-full object-cover object-center"
/>

<div className="p-8">
<h3 className="text-2xl font-bold text-forest">
{item.title}
</h3>

<p className="mt-4 leading-7 text-black/70">
{item.description}
</p>

<Link
href={safari.href}
className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white transition hover:scale-105"
>
{t.explore}
</Link>
</div>
</div>
);
})}
</div>
</div>
</section>

<Footer />
</main>
);
}
