'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const routeData = [
{
image: '/images/machame-five.jpg',
href: '/kilimanjaro-treks/machame-route',
},
{
image: '/images/lemosho-five.JPG',
href: '/kilimanjaro-treks/lemosho-route',
},
{
image: '/images/marangu-five.jpg',
href: '/kilimanjaro-treks/marangu-route',
},
{
image: '/images/rongai-five.JPG',
href: '/kilimanjaro-treks/rongai-route',
},
{
image: '/images/northern-five.jpg',
href: '/kilimanjaro-treks/northern-circuit-route',
},
{
image: '/images/umbwe-five.JPG',
href: '/kilimanjaro-treks/umbwe-route',
},
{
image: '/images/shira-five.jpg',
href: '/kilimanjaro-treks/shira-route',
},
];

const translations = {
en: {
heroTitle: 'Kilimanjaro Treks',
heroSubtitle:
'Climb Africa’s highest mountain with experienced mountain guides.',
sectionTitle: 'Popular Routes',
viewRoute: 'View Route',
support:
'Guided trek including guides, porters, meals, park fees, transfers and full mountain support team.',

routes: [
{
title: 'Machame Route',
days: '6–7 Days',
difficulty: 'Moderate to challenging',
},
{
title: 'Lemosho Route',
days: '7–8 Days',
difficulty: 'Scenic and highly recommended',
},
{
title: 'Marangu Route',
days: '5–6 Days',
difficulty: 'Hut accommodation route',
},
{
title: 'Rongai Route',
days: '6–7 Days',
difficulty: 'Quiet northern approach',
},
{
title: 'Northern Circuit',
days: '8–9 Days',
difficulty: 'Longest and most scenic route',
},
{
title: 'Umbwe Route',
days: '6–7 Days',
difficulty: 'Steep and challenging route',
},
{
title: 'Shira Route',
days: '7–8 Days',
difficulty: 'Scenic western approach',
},
],
},

de: {
heroTitle: 'Kilimanjaro-Treks',
heroSubtitle:
'Besteigen Sie Afrikas höchsten Berg mit erfahrenen Bergführern.',
sectionTitle: 'Beliebte Routen',
viewRoute: 'Route ansehen',
support:
'Geführte Trekkingtour inklusive Bergführer, Träger, Mahlzeiten, Parkgebühren, Transfers und vollständigem Bergunterstützungsteam.',

routes: [
{
title: 'Machame-Route',
days: '6–7 Tage',
difficulty: 'Mittelschwer bis anspruchsvoll',
},
{
title: 'Lemosho-Route',
days: '7–8 Tage',
difficulty: 'Landschaftlich reizvoll und sehr empfehlenswert',
},
{
title: 'Marangu-Route',
days: '5–6 Tage',
difficulty: 'Route mit Hüttenunterkunft',
},
{
title: 'Rongai-Route',
days: '6–7 Tage',
difficulty: 'Ruhiger Zugang von Norden',
},
{
title: 'Northern Circuit',
days: '8–9 Tage',
difficulty: 'Längste und landschaftlich reizvollste Route',
},
{
title: 'Umbwe-Route',
days: '6–7 Tage',
difficulty: 'Steile und anspruchsvolle Route',
},
{
title: 'Shira-Route',
days: '7–8 Tage',
difficulty: 'Landschaftlich reizvoller Zugang von Westen',
},
],
},

fr: {
heroTitle: 'Trek du Kilimandjaro',
heroSubtitle:
'Gravissez la plus haute montagne d’Afrique avec des guides de montagne expérimentés.',
sectionTitle: 'Itinéraires populaires',
viewRoute: 'Voir l’itinéraire',
support:
'Trek guidé comprenant guides, porteurs, repas, frais de parc, transferts et équipe complète de soutien en montagne.',

routes: [
{
title: 'Route Machame',
days: '6–7 jours',
difficulty: 'Modérée à difficile',
},
{
title: 'Route Lemosho',
days: '7–8 jours',
difficulty: 'Panoramique et fortement recommandée',
},
{
title: 'Route Marangu',
days: '5–6 jours',
difficulty: 'Itinéraire avec hébergement en refuge',
},
{
title: 'Route Rongai',
days: '6–7 jours',
difficulty: 'Accès tranquille par le nord',
},
{
title: 'Northern Circuit',
days: '8–9 jours',
difficulty: 'Itinéraire le plus long et le plus panoramique',
},
{
title: 'Route Umbwe',
days: '6–7 jours',
difficulty: 'Itinéraire escarpé et difficile',
},
{
title: 'Route Shira',
days: '7–8 jours',
difficulty: 'Accès panoramique par l’ouest',
},
],
},

es: {
heroTitle: 'Trekking del Kilimanjaro',
heroSubtitle:
'Sube la montaña más alta de África con guías de montaña experimentados.',
sectionTitle: 'Rutas populares',
viewRoute: 'Ver ruta',
support:
'Trekking guiado que incluye guías, porteadores, comidas, tasas del parque, traslados y un equipo completo de apoyo en la montaña.',

routes: [
{
title: 'Ruta Machame',
days: '6–7 días',
difficulty: 'Moderada a exigente',
},
{
title: 'Ruta Lemosho',
days: '7–8 días',
difficulty: 'Panorámica y muy recomendada',
},
{
title: 'Ruta Marangu',
days: '5–6 días',
difficulty: 'Ruta con alojamiento en refugios',
},
{
title: 'Ruta Rongai',
days: '6–7 días',
difficulty: 'Acceso tranquilo por el norte',
},
{
title: 'Northern Circuit',
days: '8–9 días',
difficulty: 'La ruta más larga y panorámica',
},
{
title: 'Ruta Umbwe',
days: '6–7 días',
difficulty: 'Ruta empinada y exigente',
},
{
title: 'Ruta Shira',
days: '7–8 días',
difficulty: 'Acceso panorámico por el oeste',
},
],
},
};

export default function Treks() {
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
image="/images/mountain.jpg"
/>

<section className="bg-cream py-20">
<div className="mx-auto max-w-7xl px-6">
<h2 className="section-title">{t.sectionTitle}</h2>

<div className="mt-10 grid gap-6 md:grid-cols-3">
{t.routes.map((route, index) => {
const data = routeData[index];

return (
<div
key={route.title}
className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
>
<img
src={data.image}
alt={route.title}
className="h-56 w-full object-cover"
/>

<div className="p-8">
<h3 className="text-2xl font-bold text-forest">
{route.title}
</h3>

<p className="mt-3 font-semibold text-gold">
{route.days}
</p>

<p className="mt-3 leading-7 text-black/70">
{route.difficulty}. {t.support}
</p>

<Link
href={data.href}
className="mt-6 inline-block rounded-full bg-yellow-500 px-6 py-3 font-bold text-white transition hover:bg-yellow-600"
>
{t.viewRoute}
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