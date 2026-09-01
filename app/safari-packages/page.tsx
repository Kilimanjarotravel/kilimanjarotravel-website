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
viewDetails: 'View Details',
from: 'From',
perPerson: '/ person',
viewItinerary: 'View Itinerary',
comingSoon: 'Coming Soon',

packages: [
{
title: '2 Days Tarangire & Ngorongoro',
description:
'Discover Tarangire National Park and the famous Ngorongoro Crater on this unforgettable 2-day safari.',
badge: 'Best for Short Trips',
},
{
title: '3 Days Serengeti & Ngorongoro',
description:
'Experience the endless plains of Serengeti and the spectacular Ngorongoro Crater.',
badge: 'Most Popular',
},
{
title: '4 Days Tarangire, Serengeti & Ngorongoro',
description:
'Explore Tanzania’s most famous northern parks on a 4-day safari adventure.',
badge: 'Best Value',
},
{
title: '5 Days Northern Circuit Safari',
description:
'Explore Tarangire, Serengeti and Ngorongoro on a rewarding five-day private safari.',
badge: 'Recommended',
},
{
title: '6 Days Northern Circuit Safari',
description:
'Discover Tarangire, Lake Manyara, Serengeti and Ngorongoro on a complete six-day private safari.',
badge: 'Premium Choice',
},
{
title: '7 Days Northern Circuit Safari',
description:
'Enjoy Tarangire, Lake Manyara, Serengeti and Ngorongoro on a complete seven-day private safari.',
badge: 'Top Seller',
},
{
title: '8 Days Northern Circuit Safari',
description:
'Experience the ultimate Northern Circuit adventure through Tarangire, Lake Manyara, Serengeti and Ngorongoro with an extra day for wildlife viewing.',
badge: 'Ultimate Safari',
},
{
title: '9 Days Northern Circuit Safari',
description:
'Enjoy an extended Northern Circuit safari through Tarangire, Lake Manyara, Serengeti and Ngorongoro.',
badge: 'Extended Adventure',
},
{
title: '10 Days Northern Circuit Safari',
description:
'Explore Tarangire, Lake Manyara, Serengeti and Ngorongoro on a complete ten-day private safari.',
badge: 'Ultimate Journey',
},
{
title: '12 Days Honeymoon Safari & Zanzibar',
description:
'Enjoy a romantic Tanzania honeymoon combining an unforgettable safari through Tarangire, Lake Manyara, Serengeti and Ngorongoro with a relaxing Zanzibar beach escape.',
badge: 'Honeymoon',
},
{
title: '14 Days Safari + Zanzibar',
description:
'Experience the best of Tanzania with a Northern Circuit safari followed by a relaxing Zanzibar beach escape.',
badge: 'Ultimate Experience',
},
{
title: '16 Days Kenya + Tanzania Safari',
description:
'Discover the highlights of Kenya and Tanzania on an unforgettable private safari through Amboseli, Lake Naivasha, Maasai Mara, Serengeti, Ngorongoro and Tarangire.',
badge: 'East Africa',
},
],
},

de: {
heroTitle: 'Tansania Safari-Pakete',
heroSubtitle:
'Wählen Sie aus unseren sorgfältig zusammengestellten Safari-Paketen im Norden Tansanias.',
viewDetails: 'Details ansehen',
from: 'Ab',
perPerson: '/ Person',
viewItinerary: 'Reiseverlauf ansehen',
comingSoon: 'Demnächst verfügbar',

packages: [
{
title: '2 Tage Tarangire & Ngorongoro',
description:
'Entdecken Sie den Tarangire-Nationalpark und den berühmten Ngorongoro-Krater auf dieser unvergesslichen 2-tägigen Safari.',
badge: 'Ideal für Kurzreisen',
},
{
title: '3 Tage Serengeti & Ngorongoro',
description:
'Erleben Sie die endlosen Ebenen der Serengeti und den beeindruckenden Ngorongoro-Krater.',
badge: 'Am beliebtesten',
},
{
title: '4 Tage Tarangire, Serengeti & Ngorongoro',
description:
'Erkunden Sie die berühmtesten Nationalparks im Norden Tansanias auf einem 4-tägigen Safari-Abenteuer.',
badge: 'Bestes Preis-Leistungs-Verhältnis',
},
{
title: '5 Tage Safari im Norden Tansanias',
description:
'Erkunden Sie Tarangire, Serengeti und Ngorongoro auf einer erlebnisreichen privaten fünftägigen Safari.',
badge: 'Empfohlen',
},
{
title: '6 Tage Safari im Norden Tansanias',
description:
'Entdecken Sie Tarangire, Lake Manyara, Serengeti und Ngorongoro auf einer umfassenden privaten sechstägigen Safari.',
badge: 'Premium-Auswahl',
},
{
title: '7 Tage Safari im Norden Tansanias',
description:
'Genießen Sie Tarangire, Lake Manyara, Serengeti und Ngorongoro auf einer umfassenden privaten siebentägigen Safari.',
badge: 'Top-Angebot',
},
{
title: '8 Tage Safari im Norden Tansanias',
description:
'Erleben Sie das ultimative Safari-Abenteuer durch Tarangire, Lake Manyara, Serengeti und Ngorongoro mit einem zusätzlichen Tag für Tierbeobachtungen.',
badge: 'Ultimative Safari',
},
{
title: '9 Tage Safari im Norden Tansanias',
description:
'Genießen Sie eine verlängerte Safari durch Tarangire, Lake Manyara, Serengeti und Ngorongoro.',
badge: 'Verlängertes Abenteuer',
},
{
title: '10 Tage Safari im Norden Tansanias',
description:
'Erkunden Sie Tarangire, Lake Manyara, Serengeti und Ngorongoro auf einer umfassenden privaten zehntägigen Safari.',
badge: 'Ultimative Reise',
},
{
title: '12 Tage Honeymoon-Safari & Sansibar',
description:
'Genießen Sie eine romantische Hochzeitsreise durch Tansania mit einer unvergesslichen Safari durch Tarangire, Lake Manyara, Serengeti und Ngorongoro sowie einer erholsamen Auszeit an den Stränden von Sansibar.',
badge: 'Hochzeitsreise',
},
{
title: '14 Tage Safari + Sansibar',
description:
'Erleben Sie das Beste von Tansania mit einer Safari im Norden und anschließend einer erholsamen Auszeit an den Stränden von Sansibar.',
badge: 'Ultimatives Erlebnis',
},
{
title: '16 Tage Kenia + Tansania Safari',
description:
'Entdecken Sie die Höhepunkte Kenias und Tansanias auf einer unvergesslichen privaten Safari durch Amboseli, Lake Naivasha, Maasai Mara, Serengeti, Ngorongoro und Tarangire.',
badge: 'Ostafrika',
},
],
},

fr: {
heroTitle: 'Forfaits Safari en Tanzanie',
heroSubtitle:
'Choisissez parmi nos forfaits safari soigneusement conçus dans le nord de la Tanzanie.',
viewDetails: 'Voir les détails',
from: 'À partir de',
perPerson: '/ personne',
viewItinerary: 'Voir l’itinéraire',
comingSoon: 'Bientôt disponible',

packages: [
{
title: '2 jours Tarangire & Ngorongoro',
description:
'Découvrez le parc national de Tarangire et le célèbre cratère du Ngorongoro lors de ce safari inoubliable de 2 jours.',
badge: 'Idéal pour les courts séjours',
},
{
title: '3 jours Serengeti & Ngorongoro',
description:
'Découvrez les vastes plaines du Serengeti et le spectaculaire cratère du Ngorongoro.',
badge: 'Le plus populaire',
},
{
title: '4 jours Tarangire, Serengeti & Ngorongoro',
description:
'Explorez les parcs nationaux les plus célèbres du nord de la Tanzanie lors d’un safari de 4 jours.',
badge: 'Meilleur rapport qualité-prix',
},
{
title: '5 jours de safari dans le nord de la Tanzanie',
description:
'Explorez Tarangire, Serengeti et Ngorongoro lors d’un safari privé de cinq jours riche en découvertes.',
badge: 'Recommandé',
},
{
title: '6 jours de safari dans le nord de la Tanzanie',
description:
'Découvrez Tarangire, le lac Manyara, le Serengeti et Ngorongoro lors d’un safari privé complet de six jours.',
badge: 'Choix Premium',
},
{
title: '7 jours de safari dans le nord de la Tanzanie',
description:
'Profitez de Tarangire, du lac Manyara, du Serengeti et de Ngorongoro lors d’un safari privé complet de sept jours.',
badge: 'Meilleure vente',
},
{
title: '8 jours de safari dans le nord de la Tanzanie',
description:
'Vivez l’aventure ultime du circuit nord à travers Tarangire, le lac Manyara, le Serengeti et Ngorongoro avec une journée supplémentaire pour observer la faune.',
badge: 'Safari ultime',
},
{
title: '9 jours de safari dans le nord de la Tanzanie',
description:
'Profitez d’un safari prolongé à travers Tarangire, le lac Manyara, le Serengeti et Ngorongoro.',
badge: 'Aventure prolongée',
},
{
title: '10 jours de safari dans le nord de la Tanzanie',
description:
'Explorez Tarangire, le lac Manyara, le Serengeti et Ngorongoro lors d’un safari privé complet de dix jours.',
badge: 'Voyage ultime',
},
{
title: '12 jours Safari Lune de Miel & Zanzibar',
description:
'Profitez d’une lune de miel romantique en Tanzanie combinant un safari inoubliable à Tarangire, au lac Manyara, au Serengeti et à Ngorongoro avec une escapade relaxante sur les plages de Zanzibar.',
badge: 'Lune de miel',
},
{
title: '14 jours Safari + Zanzibar',
description:
'Découvrez le meilleur de la Tanzanie avec un safari dans le nord suivi d’une escapade relaxante sur les plages de Zanzibar.',
badge: 'Expérience ultime',
},
{
title: '16 jours Safari Kenya + Tanzanie',
description:
'Découvrez les incontournables du Kenya et de la Tanzanie lors d’un safari privé inoubliable à travers Amboseli, le lac Naivasha, le Maasai Mara, le Serengeti, Ngorongoro et Tarangire.',
badge: 'Afrique de l’Est',
},
],
},

es: {
heroTitle: 'Paquetes de Safari por Tanzania',
heroSubtitle:
'Elige entre nuestros paquetes de safari cuidadosamente diseñados por el norte de Tanzania.',
viewDetails: 'Ver detalles',
from: 'Desde',
perPerson: '/ persona',
viewItinerary: 'Ver itinerario',
comingSoon: 'Próximamente',

packages: [
{
title: '2 días Tarangire y Ngorongoro',
description:
'Descubre el Parque Nacional de Tarangire y el famoso cráter del Ngorongoro en este inolvidable safari de 2 días.',
badge: 'Ideal para viajes cortos',
},
{
title: '3 días Serengeti y Ngorongoro',
description:
'Vive las interminables llanuras del Serengeti y el espectacular cráter del Ngorongoro.',
badge: 'Más popular',
},
{
title: '4 días Tarangire, Serengeti y Ngorongoro',
description:
'Explora los parques más famosos del norte de Tanzania en una aventura de safari de 4 días.',
badge: 'Mejor relación calidad-precio',
},
{
title: '5 días de safari por el norte de Tanzania',
description:
'Explora Tarangire, Serengeti y Ngorongoro en un completo safari privado de cinco días.',
badge: 'Recomendado',
},
{
title: '6 días de safari por el norte de Tanzania',
description:
'Descubre Tarangire, el lago Manyara, Serengeti y Ngorongoro en un safari privado completo de seis días.',
badge: 'Opción Premium',
},
{
title: '7 días de safari por el norte de Tanzania',
description:
'Disfruta de Tarangire, el lago Manyara, Serengeti y Ngorongoro en un safari privado completo de siete días.',
badge: 'Más vendido',
},
{
title: '8 días de safari por el norte de Tanzania',
description:
'Vive la aventura definitiva por el Circuito Norte a través de Tarangire, el lago Manyara, Serengeti y Ngorongoro, con un día adicional para observar la fauna.',
badge: 'Safari definitivo',
},
{
title: '9 días de safari por el norte de Tanzania',
description:
'Disfruta de un safari extendido por Tarangire, el lago Manyara, Serengeti y Ngorongoro.',
badge: 'Aventura extendida',
},
{
title: '10 días de safari por el norte de Tanzania',
description:
'Explora Tarangire, el lago Manyara, Serengeti y Ngorongoro en un safari privado completo de diez días.',
badge: 'Viaje definitivo',
},
{
title: '12 días Safari de Luna de Miel y Zanzíbar',
description:
'Disfruta de una romántica luna de miel en Tanzania combinando un safari inolvidable por Tarangire, el lago Manyara, Serengeti y Ngorongoro con una escapada relajante a las playas de Zanzíbar.',
badge: 'Luna de miel',
},
{
title: '14 días Safari + Zanzíbar',
description:
'Vive lo mejor de Tanzania con un safari por el Circuito Norte seguido de una relajante escapada a las playas de Zanzíbar.',
badge: 'Experiencia definitiva',
},
{
title: '16 días Safari Kenia + Tanzania',
description:
'Descubre lo mejor de Kenia y Tanzania en un inolvidable safari privado por Amboseli, el lago Naivasha, Maasai Mara, Serengeti, Ngorongoro y Tarangire.',
badge: 'África Oriental',
},
],
},
};

const packageData = [
{
image: '/images/packages-tarangire.jpg',
href: '/safari-packages/2-days-tarangire-ngorongoro',
price: '$650',
ready: true,
badgeColor: 'bg-blue-600',
},
{
image: '/images/packages-sere.jpg',
href: '/safari-packages/3-days-serengeti-ngorongoro',
price: '$950',
ready: true,
badgeColor: 'bg-red-600',
},
{
image: '/images/twiga-tano.jpg',
href: '/safari-packages/4-days-tarangire-serengeti-ngorongoro',
price: '$1,250',
ready: true,
badgeColor: 'bg-green-600',
},
{
image: '/images/viboko-ngoro.jpg',
href: '/safari-packages/5-days-northern-circuit',
price: '$1,520',
ready: true,
badgeColor: 'bg-purple-600',
},
{
image: '/images/mid-range.jpg',
href: '/safari-packages/6-days-northern-circuit',
price: '$1,780',
ready: true,
badgeColor: 'bg-forest',
},
{
image: '/images/fleet.jpeg',
href: '/safari-packages/7-days-northern-circuit',
price: '$2,040',
ready: true,
badgeColor: 'bg-gold',
},
{
image: '/images/mbwa-ngoro.jpg',
href: '/safari-packages/8-days-northern-circuit',
price: '$2,320',
ready: true,
badgeColor: 'bg-purple-600',
},
{
image: '/images/lion-manyara.jpg',
href: '/safari-packages/9-days-northern-circuit',
price: '$2,580',
ready: true,
badgeColor: 'bg-orange-600',
},
{
image: '/images/punda-ngoro.jpg',
href: '/safari-packages/10-days-northern-circuit',
price: '$2,850',
ready: true,
badgeColor: 'bg-indigo-600',
},
{
image: '/images/honeymoon-safari.jpg',
href: '/safari-packages/12-days-honeymoon-safari-zanzibar',
price: '$4,250',
ready: true,
badgeColor: 'bg-pink-600',
},
{
image: '/images/safari-zanzibar.jpg',
href: '/safari-packages/14-days-safari-zanzibar',
price: '$5,250',
ready: true,
badgeColor: 'bg-gold',
},
{
image: '/images/pumba.jpg',
href: '/safari-packages/16-days-kenya-tanzania',
price: '$5,050',
ready: true,
badgeColor: 'bg-forest',
},
];

export default function SafariPackagesPage() {
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
image="/images/honeymoon-two.jpg"
/>

<section className="py-20">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
{packageData.map((pkg, index) => {
const translation = t.packages[index];

return (
<div
key={pkg.href}
className="relative overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
{/* BADGE */}
<div
className={`absolute left-4 top-4 z-10 ${pkg.badgeColor} rounded-full px-4 py-2 text-sm font-bold text-white shadow-lg`}
>
{translation.badge}
</div>

{/* VIEW DETAILS */}
<Link
href={pkg.href}
className="absolute right-4 top-4 z-10 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-forest shadow-lg backdrop-blur-sm transition hover:bg-gold hover:text-white"
>
{t.viewDetails}
</Link>

{/* IMAGE */}
<img
src={pkg.image}
alt={translation.title}
className="h-64 w-full object-cover"
/>

{/* CONTENT */}
<div className="p-6">
<h2 className="text-2xl font-bold text-forest">
{translation.title}
</h2>

<p className="mt-2 text-xl font-bold text-gold">
{t.from} {pkg.price} {t.perPerson}
</p>

<p className="mt-4 text-black/70">
{translation.description}
</p>

{pkg.ready ? (
<Link
href={pkg.href}
className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white transition hover:scale-105"
>
{t.viewItinerary}
</Link>
) : (
<span className="mt-6 inline-block rounded-full bg-gray-300 px-6 py-3 font-bold text-gray-700">
{t.comingSoon}
</span>
)}
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
