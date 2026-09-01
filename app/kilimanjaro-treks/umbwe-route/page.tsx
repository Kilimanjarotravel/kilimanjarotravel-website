'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
en: {
heroTitle: 'Umbwe Route',
heroSubtitle:
'Challenge yourself on Kilimanjaro’s steepest and most adventurous route, offering dramatic scenery and an unforgettable climbing experience.',
label: 'Challenging Kilimanjaro Adventure',
mainTitle: 'Umbwe Route Kilimanjaro Climb',

paragraph1:
'The Umbwe Route is Kilimanjaro’s steepest and most direct trail to the summit. It is designed for experienced trekkers looking for a physically demanding adventure with spectacular scenery.',

paragraph2:
'The route passes through dense rainforest, moorland, alpine desert, and high mountain terrain before reaching Uhuru Peak. Due to its rapid ascent, it is recommended for climbers with previous high-altitude trekking experience.',

duration: 'Duration',
durationValue: '6–7 Days',
difficulty: 'Difficulty',
difficultyValue: 'Challenging',
from: 'From',
price: 'US$1,950',

highlightsTitle: 'Trek Highlights',

highlights: [
'Steep and challenging ascent',
'Ideal for experienced climbers',
'Excellent wilderness scenery',
'Less crowded than other routes',
'Experienced mountain guides and support crew',
],

book: 'Book This Trek',

itineraryLabel: 'Trek Itinerary',
itineraryTitle: '6-Day Umbwe Route Itinerary',

itinerary: [
{
title: 'Day 1: Umbwe Gate to Umbwe Cave Camp',
text: 'Begin your climb through dense rainforest from Umbwe Gate to Umbwe Cave Camp. This is a steep and scenic introduction to the route.',
},
{
title: 'Day 2: Umbwe Cave Camp to Barranco Camp',
text: 'Continue through heather and moorland before reaching the spectacular Barranco Valley. This section offers excellent mountain scenery.',
},
{
title: 'Day 3: Barranco Camp to Karanga Camp',
text: 'Climb the famous Barranco Wall and continue across alpine terrain to Karanga Camp while enjoying breathtaking mountain views.',
},
{
title: 'Day 4: Karanga Camp to Barafu Camp',
text: 'Reach Barafu Camp, your base for the summit attempt. Rest, prepare your gear, and sleep early before the midnight climb.',
},
{
title: 'Day 5: Summit Day – Uhuru Peak to Mweka Camp',
text: 'Begin the summit attempt before midnight, reach Uhuru Peak at sunrise, then descend via Barafu Camp to Mweka Camp for your final overnight stay.',
},
{
title: 'Day 6: Mweka Camp to Mweka Gate',
text: 'Descend through the rainforest to Mweka Gate, receive your summit certificate, and transfer back to Arusha.',
},
],

includedTitle: 'What Is Included',

included: [
'Park entrance fees',
'Camping fees',
'Professional mountain guide',
'Assistant guides',
'Porters and cook',
'Mountain tents',
'Meals during the trek',
'Drinking water',
'Transfers to and from the mountain',
],

excludedTitle: 'What Is Excluded',

excluded: [
'Flights',
'Travel insurance',
'Personal trekking equipment',
'Tips for the mountain crew',
'Personal expenses',
'Alcoholic drinks',
],

bringLabel: 'What To Bring',
bringTitle: 'Prepare for Your Umbwe Climb',

whatToBring: [
'Warm trekking clothes',
'Waterproof jacket',
'Comfortable hiking boots',
'Sleeping bag',
'Headlamp',
'Trekking poles',
'Sun hat and sunscreen',
'Personal medication',
],

readyTitle: 'Ready to Climb Kilimanjaro?',

readyText:
'Tell us your preferred travel dates, group size, and climbing experience. Our mountain specialists will prepare a personalized Umbwe Route itinerary and quotation for you.',

quote: 'Request a Quote',
whatsapp: 'Chat on WhatsApp',
},

de: {
heroTitle: 'Umbwe-Route',
heroSubtitle:
'Fordern Sie sich auf der steilsten und abenteuerlichsten Route des Kilimandscharo heraus – mit dramatischen Landschaften und einem unvergesslichen Bergerlebnis.',
label: 'Anspruchsvolles Kilimandscharo-Abenteuer',
mainTitle: 'Kilimandscharo-Besteigung über die Umbwe-Route',

paragraph1:
'Die Umbwe-Route ist der steilste und direkteste Weg zum Gipfel des Kilimandscharo. Sie eignet sich für erfahrene Trekker, die ein körperlich anspruchsvolles Abenteuer mit spektakulären Landschaften suchen.',

paragraph2:
'Die Route führt durch dichten Regenwald, Heideland, alpine Wüste und hochalpines Gelände bis zum Uhuru Peak. Aufgrund des schnellen Höhenanstiegs wird sie für Bergsteiger mit Erfahrung im Hochgebirge empfohlen.',

duration: 'Dauer',
durationValue: '6–7 Tage',
difficulty: 'Schwierigkeit',
difficultyValue: 'Anspruchsvoll',
from: 'Ab',
price: 'US$1.950',

highlightsTitle: 'Höhepunkte der Tour',

highlights: [
'Steiler und anspruchsvoller Aufstieg',
'Ideal für erfahrene Bergsteiger',
'Spektakuläre Wildnis und Berglandschaften',
'Weniger frequentiert als andere Routen',
'Erfahrene Bergführer und unterstützende Crew',
],

book: 'Diese Tour buchen',

itineraryLabel: 'Reiseverlauf',
itineraryTitle: '6-Tage-Umbwe-Route',

itinerary: [
{
title: 'Tag 1: Umbwe Gate – Umbwe Cave Camp',
text: 'Beginnen Sie Ihren Aufstieg durch den dichten Regenwald vom Umbwe Gate zum Umbwe Cave Camp. Dies ist ein steiler und landschaftlich reizvoller Einstieg in die Route.',
},
{
title: 'Tag 2: Umbwe Cave Camp – Barranco Camp',
text: 'Wandern Sie weiter durch Heide- und Moorlandschaften, bevor Sie das spektakuläre Barranco Valley erreichen. Dieser Abschnitt bietet beeindruckende Berglandschaften.',
},
{
title: 'Tag 3: Barranco Camp – Karanga Camp',
text: 'Überwinden Sie die berühmte Barranco Wall und wandern Sie durch alpines Gelände zum Karanga Camp.',
},
{
title: 'Tag 4: Karanga Camp – Barafu Camp',
text: 'Erreichen Sie das Barafu Camp, Ihre Basis für den Gipfelversuch. Ruhen Sie sich aus, bereiten Sie Ihre Ausrüstung vor und schlafen Sie früh.',
},
{
title: 'Tag 5: Gipfeltag – Uhuru Peak – Mweka Camp',
text: 'Beginnen Sie den Gipfelaufstieg vor Mitternacht, erreichen Sie den Uhuru Peak bei Sonnenaufgang und steigen Sie anschließend über das Barafu Camp zum Mweka Camp ab.',
},
{
title: 'Tag 6: Mweka Camp – Mweka Gate',
text: 'Steigen Sie durch den Regenwald zum Mweka Gate ab. Dort erhalten Sie Ihr Gipfelzertifikat, bevor Sie nach Arusha zurückkehren.',
},
],

includedTitle: 'Im Preis enthalten',

included: [
'Nationalparkgebühren',
'Campinggebühren',
'Professioneller Bergführer',
'Assistenzführer',
'Träger und Koch',
'Bergzelte',
'Mahlzeiten während der Tour',
'Trinkwasser',
'Transfers zum und vom Berg',
],

excludedTitle: 'Nicht enthalten',

excluded: [
'Flüge',
'Reiseversicherung',
'Persönliche Trekkingausrüstung',
'Trinkgelder für die Bergcrew',
'Persönliche Ausgaben',
'Alkoholische Getränke',
],

bringLabel: 'Was Sie mitbringen sollten',
bringTitle: 'Bereiten Sie sich auf Ihre Umbwe-Besteigung vor',

whatToBring: [
'Warme Trekkingkleidung',
'Wasserdichte Jacke',
'Bequeme Wanderschuhe',
'Schlafsack',
'Stirnlampe',
'Trekkingstöcke',
'Sonnenhut und Sonnencreme',
'Persönliche Medikamente',
],

readyTitle: 'Bereit, den Kilimandscharo zu besteigen?',

readyText:
'Teilen Sie uns Ihre bevorzugten Reisedaten, Gruppengröße und Bergerfahrung mit. Unsere Bergspezialisten erstellen für Sie einen persönlichen Reiseverlauf und ein Angebot für die Umbwe-Route.',

quote: 'Angebot anfordern',
whatsapp: 'Über WhatsApp chatten',
},

fr: {
heroTitle: 'Route Umbwe',
heroSubtitle:
'Relevez le défi du Kilimandjaro par sa route la plus escarpée et aventureuse, offrant des paysages spectaculaires et une expérience inoubliable.',
label: 'Aventure exigeante au Kilimandjaro',
mainTitle: 'Ascension du Kilimandjaro par la route Umbwe',

paragraph1:
'La route Umbwe est le sentier le plus escarpé et le plus direct vers le sommet du Kilimandjaro. Elle est destinée aux trekkeurs expérimentés à la recherche d’une aventure physiquement exigeante et de paysages spectaculaires.',

paragraph2:
'La route traverse une forêt tropicale dense, les landes, le désert alpin et les hautes terres avant d’atteindre le pic Uhuru. En raison de sa montée rapide, elle est recommandée aux voyageurs ayant déjà une expérience du trekking en haute altitude.',

duration: 'Durée',
durationValue: '6–7 jours',
difficulty: 'Difficulté',
difficultyValue: 'Difficile',
from: 'À partir de',
price: '1 950 $US',

highlightsTitle: 'Points forts du trek',

highlights: [
'Ascension escarpée et exigeante',
'Idéale pour les grimpeurs expérimentés',
'Magnifiques paysages sauvages',
'Moins fréquentée que les autres routes',
'Guides de montagne expérimentés et équipe de soutien',
],

book: 'Réserver ce trek',

itineraryLabel: 'Itinéraire du trek',
itineraryTitle: 'Route Umbwe – 6 jours',

itinerary: [
{
title: 'Jour 1 : Umbwe Gate – Umbwe Cave Camp',
text: 'Commencez votre ascension à travers la forêt tropicale dense depuis Umbwe Gate jusqu’au camp Umbwe Cave. Cette étape constitue une introduction escarpée et panoramique à la route.',
},
{
title: 'Jour 2 : Umbwe Cave Camp – Barranco Camp',
text: 'Continuez à travers les landes avant d’atteindre la spectaculaire vallée de Barranco. Cette étape offre de magnifiques paysages de montagne.',
},
{
title: 'Jour 3 : Barranco Camp – Karanga Camp',
text: 'Gravissez la célèbre Barranco Wall puis continuez à travers le terrain alpin jusqu’au camp Karanga.',
},
{
title: 'Jour 4 : Karanga Camp – Barafu Camp',
text: 'Atteignez Barafu Camp, votre base pour l’ascension finale. Reposez-vous, préparez votre équipement et dormez tôt.',
},
{
title: 'Jour 5 : Jour du sommet – Uhuru Peak – Mweka Camp',
text: 'Commencez l’ascension avant minuit, atteignez Uhuru Peak au lever du soleil puis descendez via Barafu Camp jusqu’à Mweka Camp.',
},
{
title: 'Jour 6 : Mweka Camp – Mweka Gate',
text: 'Descendez à travers la forêt tropicale jusqu’à Mweka Gate. Vous recevrez votre certificat avant de retourner à Arusha.',
},
],

includedTitle: 'Inclus',

included: [
'Frais d’entrée au parc',
'Frais de camping',
'Guide de montagne professionnel',
'Guides assistants',
'Porteurs et cuisinier',
'Tentes de montagne',
'Repas pendant le trek',
'Eau potable',
'Transferts vers et depuis la montagne',
],

excludedTitle: 'Non inclus',

excluded: [
'Vols',
'Assurance voyage',
'Équipement personnel de trekking',
'Pourboires pour l’équipe de montagne',
'Dépenses personnelles',
'Boissons alcoolisées',
],

bringLabel: 'À emporter',
bringTitle: 'Préparez votre ascension d’Umbwe',

whatToBring: [
'Vêtements chauds de trekking',
'Veste imperméable',
'Chaussures de randonnée confortables',
'Sac de couchage',
'Lampe frontale',
'Bâtons de trekking',
'Chapeau et crème solaire',
'Médicaments personnels',
],

readyTitle: 'Prêt à gravir le Kilimandjaro ?',

readyText:
'Indiquez-nous vos dates de voyage, la taille de votre groupe et votre expérience en montagne. Nos spécialistes prépareront un itinéraire personnalisé et un devis pour la route Umbwe.',

quote: 'Demander un devis',
whatsapp: 'Discuter sur WhatsApp',
},

es: {
heroTitle: 'Ruta Umbwe',
heroSubtitle:
'Desafíate en la ruta más empinada y aventurera del Kilimanjaro, con paisajes espectaculares y una experiencia de ascenso inolvidable.',
label: 'Aventura desafiante en el Kilimanjaro',
mainTitle: 'Ascenso al Kilimanjaro por la Ruta Umbwe',

paragraph1:
'La Ruta Umbwe es el sendero más empinado y directo hacia la cumbre del Kilimanjaro. Está diseñada para excursionistas experimentados que buscan una aventura físicamente exigente con paisajes espectaculares.',

paragraph2:
'La ruta atraviesa una densa selva tropical, páramos, desierto alpino y terreno de alta montaña antes de llegar al Pico Uhuru. Debido a su rápido ascenso, se recomienda para viajeros con experiencia previa en trekking de gran altitud.',

duration: 'Duración',
durationValue: '6–7 días',
difficulty: 'Dificultad',
difficultyValue: 'Desafiante',
from: 'Desde',
price: 'US$1.950',

highlightsTitle: 'Aspectos destacados',

highlights: [
'Ascenso empinado y desafiante',
'Ideal para montañistas experimentados',
'Espectaculares paisajes naturales',
'Menos concurrida que otras rutas',
'Guías de montaña experimentados y equipo de apoyo',
],

book: 'Reservar este trekking',

itineraryLabel: 'Itinerario del trekking',
itineraryTitle: 'Ruta Umbwe de 6 días',

itinerary: [
{
title: 'Día 1: Umbwe Gate – Umbwe Cave Camp',
text: 'Comienza el ascenso a través de la densa selva tropical desde Umbwe Gate hasta Umbwe Cave Camp. Es una introducción empinada y espectacular a la ruta.',
},
{
title: 'Día 2: Umbwe Cave Camp – Barranco Camp',
text: 'Continúa a través de páramos antes de llegar al espectacular Valle de Barranco. Esta etapa ofrece magníficos paisajes de montaña.',
},
{
title: 'Día 3: Barranco Camp – Karanga Camp',
text: 'Sube por la famosa Barranco Wall y continúa por terreno alpino hasta Karanga Camp mientras disfrutas de impresionantes vistas.',
},
{
title: 'Día 4: Karanga Camp – Barafu Camp',
text: 'Llega a Barafu Camp, la base para el intento de cumbre. Descansa, prepara tu equipo y duerme temprano antes del ascenso nocturno.',
},
{
title: 'Día 5: Día de cumbre – Pico Uhuru – Mweka Camp',
text: 'Comienza el ascenso antes de medianoche, llega al Pico Uhuru al amanecer y después desciende por Barafu Camp hasta Mweka Camp.',
},
{
title: 'Día 6: Mweka Camp – Mweka Gate',
text: 'Desciende por la selva tropical hasta Mweka Gate, recibe tu certificado de cumbre y regresa a Arusha.',
},
],

includedTitle: 'Qué está incluido',

included: [
'Tasas de entrada al parque',
'Tasas de camping',
'Guía profesional de montaña',
'Guías asistentes',
'Porteadores y cocinero',
'Tiendas de montaña',
'Comidas durante el trekking',
'Agua potable',
'Traslados hacia y desde la montaña',
],

excludedTitle: 'Qué no está incluido',

excluded: [
'Vuelos',
'Seguro de viaje',
'Equipo personal de trekking',
'Propinas para el equipo de montaña',
'Gastos personales',
'Bebidas alcohólicas',
],

bringLabel: 'Qué llevar',
bringTitle: 'Prepárate para tu ascenso por Umbwe',

whatToBring: [
'Ropa de trekking abrigada',
'Chaqueta impermeable',
'Botas de senderismo cómodas',
'Saco de dormir',
'Linterna frontal',
'Bastones de trekking',
'Sombrero y protector solar',
'Medicamentos personales',
],

readyTitle: '¿Listo para subir al Kilimanjaro?',

readyText:
'Cuéntanos tus fechas preferidas de viaje, tamaño del grupo y experiencia en montaña. Nuestros especialistas prepararán un itinerario personalizado y una cotización para la Ruta Umbwe.',

quote: 'Solicitar presupuesto',
whatsapp: 'Chatear por WhatsApp',
},
};

export default function UmbweRoutePage() {
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
image="/images/umbwe-route.jpg"
/>

{/* INTRO */}
<section className="py-16">
<div className="mx-auto max-w-6xl px-6">
<div className="grid gap-10 md:grid-cols-2">

<div>
<p className="font-bold uppercase tracking-widest text-gold">
{t.label}
</p>

<h2 className="mt-3 text-4xl font-bold text-forest">
{t.mainTitle}
</h2>

<p className="mt-6 leading-8 text-black/70">
{t.paragraph1}
</p>

<p className="mt-4 leading-8 text-black/70">
{t.paragraph2}
</p>

{/* QUICK INFO */}
<div className="mt-8 grid gap-4 sm:grid-cols-3">

<div className="rounded-2xl bg-cream p-5">
<p className="text-sm font-bold uppercase tracking-widest text-gold">
{t.duration}
</p>

<p className="mt-2 text-xl font-bold">
{t.durationValue}
</p>
</div>

<div className="rounded-2xl bg-cream p-5">
<p className="text-sm font-bold uppercase tracking-widest text-gold">
{t.difficulty}
</p>

<p className="mt-2 text-xl font-bold">
{t.difficultyValue}
</p>
</div>

<div className="rounded-2xl bg-cream p-5">
<p className="text-sm font-bold uppercase tracking-widest text-gold">
{t.from}
</p>

<p className="mt-2 text-xl font-bold text-gold">
{t.price}
</p>
</div>

</div>
</div>

{/* HIGHLIGHTS */}
<div className="rounded-3xl bg-cream p-8 shadow-lg">

<h3 className="text-2xl font-bold text-forest">
{t.highlightsTitle}
</h3>

<ul className="mt-6 space-y-4">
{t.highlights.map((item) => (
<li
key={item}
className="flex gap-3"
>
<span className="font-bold text-gold">
✓
</span>

<span>
{item}
</span>
</li>
))}
</ul>

<Link
href="/booking"
className="mt-8 inline-block rounded-full bg-yellow-500 px-8 py-4 font-bold text-white transition hover:bg-yellow-600"
>
{t.book}
</Link>

</div>

</div>
</div>
</section>

{/* ITINERARY */}
<section className="bg-cream py-20">
<div className="mx-auto max-w-6xl px-6">

<p className="font-bold uppercase tracking-widest text-gold">
{t.itineraryLabel}
</p>

<h2 className="mt-3 text-4xl font-bold text-forest">
{t.itineraryTitle}
</h2>

<div className="mt-10 space-y-6">

{t.itinerary.map((item) => (
<div
key={item.title}
className="rounded-3xl bg-white p-8 shadow-lg"
>

<h3 className="text-2xl font-bold text-forest">
{item.title}
</h3>

<p className="mt-4 leading-8 text-black/70">
{item.text}
</p>

</div>
))}

</div>
</div>
</section>

{/* INCLUDED / EXCLUDED */}
<section className="py-20">
<div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">

<div className="rounded-3xl bg-cream p-8 shadow-xl">

<h2 className="text-3xl font-bold text-forest">
{t.includedTitle}
</h2>

<ul className="mt-6 space-y-3">
{t.included.map((item) => (
<li key={item}>
✅ {item}
</li>
))}
</ul>

</div>

<div className="rounded-3xl bg-cream p-8 shadow-xl">

<h2 className="text-3xl font-bold text-forest">
{t.excludedTitle}
</h2>

<ul className="mt-6 space-y-3">
{t.excluded.map((item) => (
<li key={item}>
❌ {item}
</li>
))}
</ul>

</div>

</div>
</section>

{/* WHAT TO BRING */}
<section className="bg-cream py-20">
<div className="mx-auto max-w-4xl px-6 text-center">

<p className="font-bold uppercase tracking-widest text-gold">
{t.bringLabel}
</p>

<h2 className="mt-3 text-4xl font-bold text-forest">
{t.bringTitle}
</h2>

<ul className="mt-8 space-y-4 text-lg">

{t.whatToBring.map((item) => (
<li key={item}>
• {item}
</li>
))}

</ul>

</div>
</section>

{/* CTA */}
<section className="bg-forest py-20 text-white">
<div className="mx-auto max-w-4xl px-6 text-center">

<h2 className="font-display text-4xl font-bold md:text-5xl">
{t.readyTitle}
</h2>

<p className="mt-5 text-lg leading-8 text-white/80">
{t.readyText}
</p>

<div className="mt-8 flex flex-wrap justify-center gap-4">

<Link
href="/booking"
className="rounded-full bg-gold px-8 py-4 font-bold text-white transition hover:scale-105"
>
{t.quote}
</Link>

<a
href="https://wa.me/255759273339"
target="_blank"
rel="noopener noreferrer"
className="rounded-full border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-forest"
>
{t.whatsapp}
</a>

</div>

</div>
</section>

<Footer />
</main>
);
}