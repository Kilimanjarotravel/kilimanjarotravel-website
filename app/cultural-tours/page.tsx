'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
en: {
heroTitle: 'Tanzania Cultural Tours',
heroSubtitle:
'Meet local communities, discover traditional lifestyles, explore villages, and experience the rich cultures of Tanzania.',
sectionTitle: 'Cultural Tour Experiences',
explore: 'Explore Culture',

packages: [
{
title: 'Maasai Village Experience',
description:
'Visit a traditional Maasai community, learn about local customs, join cultural activities, and experience authentic village life.',
},
{
title: 'Chagga Cultural Tour',
description:
'Explore Chagga history, traditional homes, coffee farms, waterfalls, and the rich culture found around Mount Kilimanjaro.',
},
{
title: 'Pare Cultural Tour',
description:
'Discover the scenic Pare Mountains, historic villages, local farming traditions, and welcoming community experiences.',
},
{
title: 'Sambaa Cultural Tour',
description:
'Experience Sambaa traditions, mountain villages, local markets, storytelling, and beautiful landscapes in the Usambara region.',
},
{
title: 'Hadzabe & Datoga Cultural Tour',
description:
'Meet the Hadzabe hunter-gatherers and Datoga artisans near Lake Eyasi while learning about their unique ways of life.',
},
{
title: 'Mto wa Mbu Cultural Tour',
description:
'Walk through a vibrant multicultural village, visit farms and workshops, taste local food, and meet community members.',
},
],
},

de: {
heroTitle: 'Kulturreisen in Tansania',
heroSubtitle:
'Treffen Sie lokale Gemeinschaften, entdecken Sie traditionelle Lebensweisen, erkunden Sie Dörfer und erleben Sie die vielfältigen Kulturen Tansanias.',
sectionTitle: 'Kulturelle Reiseerlebnisse',
explore: 'Kultur entdecken',

packages: [
{
title: 'Maasai-Dorferlebnis',
description:
'Besuchen Sie eine traditionelle Maasai-Gemeinschaft, lernen Sie lokale Bräuche kennen, nehmen Sie an kulturellen Aktivitäten teil und erleben Sie das authentische Dorfleben.',
},
{
title: 'Chagga-Kulturreise',
description:
'Entdecken Sie die Geschichte der Chagga, traditionelle Häuser, Kaffeeplantagen, Wasserfälle und die reiche Kultur rund um den Kilimandscharo.',
},
{
title: 'Pare-Kulturreise',
description:
'Entdecken Sie die malerischen Pare-Berge, historische Dörfer, lokale Landwirtschaftstraditionen und herzliche Gemeinschaftserlebnisse.',
},
{
title: 'Sambaa-Kulturreise',
description:
'Erleben Sie Sambaa-Traditionen, Bergdörfer, lokale Märkte, Geschichten und wunderschöne Landschaften in der Usambara-Region.',
},
{
title: 'Hadzabe- & Datoga-Kulturreise',
description:
'Treffen Sie die Hadzabe-Jäger und Sammler sowie Datoga-Handwerker am Eyasi-See und erfahren Sie mehr über ihre einzigartigen Lebensweisen.',
},
{
title: 'Mto-wa-Mbu-Kulturreise',
description:
'Spazieren Sie durch ein lebendiges multikulturelles Dorf, besuchen Sie Bauernhöfe und Werkstätten, probieren Sie lokale Speisen und treffen Sie Mitglieder der Gemeinschaft.',
},
],
},

fr: {
heroTitle: 'Circuits culturels en Tanzanie',
heroSubtitle:
'Rencontrez les communautés locales, découvrez les modes de vie traditionnels, explorez les villages et vivez les riches cultures de la Tanzanie.',
sectionTitle: 'Expériences culturelles',
explore: 'Découvrir la culture',

packages: [
{
title: 'Expérience dans un village Massaï',
description:
'Visitez une communauté massaï traditionnelle, découvrez les coutumes locales, participez à des activités culturelles et vivez une expérience authentique de la vie villageoise.',
},
{
title: 'Circuit culturel Chagga',
description:
'Découvrez l’histoire des Chagga, les maisons traditionnelles, les plantations de café, les cascades et la riche culture autour du Kilimandjaro.',
},
{
title: 'Circuit culturel Pare',
description:
'Découvrez les magnifiques montagnes Pare, les villages historiques, les traditions agricoles locales et l’accueil chaleureux des communautés.',
},
{
title: 'Circuit culturel Sambaa',
description:
'Découvrez les traditions Sambaa, les villages de montagne, les marchés locaux, les récits traditionnels et les magnifiques paysages de la région d’Usambara.',
},
{
title: 'Circuit culturel Hadzabe & Datoga',
description:
'Rencontrez les chasseurs-cueilleurs Hadzabe et les artisans Datoga près du lac Eyasi et découvrez leurs modes de vie uniques.',
},
{
title: 'Circuit culturel de Mto wa Mbu',
description:
'Explorez un village multiculturel animé, visitez des fermes et des ateliers, goûtez à la cuisine locale et rencontrez les habitants.',
},
],
},

es: {
heroTitle: 'Tours culturales por Tanzania',
heroSubtitle:
'Conozca las comunidades locales, descubra estilos de vida tradicionales, explore pueblos y experimente las ricas culturas de Tanzania.',
sectionTitle: 'Experiencias culturales',
explore: 'Explorar cultura',

packages: [
{
title: 'Experiencia en una aldea Maasai',
description:
'Visite una comunidad Maasai tradicional, conozca las costumbres locales, participe en actividades culturales y experimente la auténtica vida del pueblo.',
},
{
title: 'Tour cultural Chagga',
description:
'Explore la historia Chagga, las casas tradicionales, las plantaciones de café, las cascadas y la rica cultura alrededor del Kilimanjaro.',
},
{
title: 'Tour cultural Pare',
description:
'Descubra las hermosas montañas Pare, pueblos históricos, tradiciones agrícolas locales y experiencias acogedoras con las comunidades.',
},
{
title: 'Tour cultural Sambaa',
description:
'Experimente las tradiciones Sambaa, pueblos de montaña, mercados locales, relatos tradicionales y hermosos paisajes de la región de Usambara.',
},
{
title: 'Tour cultural Hadzabe & Datoga',
description:
'Conozca a los cazadores-recolectores Hadzabe y a los artesanos Datoga cerca del lago Eyasi y descubra sus formas de vida únicas.',
},
{
title: 'Tour cultural de Mto wa Mbu',
description:
'Recorra un vibrante pueblo multicultural, visite granjas y talleres, pruebe la comida local y conozca a los miembros de la comunidad.',
},
],
},
};

const packages = [
{
image: '/images/maasai-moja.jpg',
href: '/cultural-tours/maasai-village',
},
{
image: '/images/chaga-moja.jpeg',
href: '/cultural-tours/chagga-cultural-tour',
},
{
image: '/images/pare-one.jpg',
href: '/cultural-tours/pare-cultural-tour',
},
{
image: '/images/sambaa.jpg',
href: '/cultural-tours/sambaa-cultural-tour',
},
{
image: '/images/hadzabe.jpg',
href: '/cultural-tours/hadzabe-datoga',
},
{
image: '/images/mto-wa-mbu.jpg',
href: '/cultural-tours/mto-wa-mbu',
},
];

export default function CulturalTours() {
const { language } = useLanguage();

const t =
translations[language as keyof typeof translations] || translations.en;

return (
<main>
<Header />
<WhatsApp />

<PageHero
title={t.heroTitle}
subtitle={t.heroSubtitle}
image="/images/maasai-mbili.jpg"
/>

<section className="py-20">
<div className="mx-auto max-w-7xl px-6">
<h2 className="section-title">{t.sectionTitle}</h2>

<div className="mt-10 grid gap-6 md:grid-cols-3">
{packages.map(({ image, href }, index) => {
const item = t.packages[index];

return (
<div
className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
key={`${item.title}-${index}`}
>
<img
src={image}
alt={item.title}
className="h-56 w-full object-cover"
/>

<div className="p-8">
<h3 className="text-2xl font-bold text-forest">
{item.title}
</h3>

<p className="mt-4 leading-7 text-black/70">
{item.description}
</p>

<Link
href={href || '/booking'}
className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
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