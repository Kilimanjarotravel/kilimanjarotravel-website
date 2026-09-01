'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
en: {
heroTitle: 'Marangu Route',
heroSubtitle:
'Climb Kilimanjaro via the Marangu Route, the only route offering comfortable mountain hut accommodation and a classic trekking experience.',
label: 'Classic Kilimanjaro Hut Route',
mainTitle: 'Marangu Route Kilimanjaro Climb',

paragraph1:
'The Marangu Route is the oldest and one of the most popular routes on Mount Kilimanjaro. It is the only route that provides overnight accommodation in mountain huts, making it a comfortable choice for many climbers.',

paragraph2:
'The trail passes through lush rainforest, moorland, alpine desert, and finally reaches Uhuru Peak. It is ideal for climbers seeking a classic Kilimanjaro experience with hut accommodation instead of camping.',

duration: 'Duration',
durationValue: '5–6 Days',
difficulty: 'Difficulty',
difficultyValue: 'Moderate',
from: 'From',
price: 'US$1,850',

highlightsTitle: 'Trek Highlights',

highlights: [
'Comfortable mountain hut accommodation',
'Classic and most established Kilimanjaro route',
'Beautiful rainforest and moorland scenery',
'Experienced mountain guides and support crew',
'Summit attempt at Uhuru Peak',
],

book: 'Book This Trek',

itineraryLabel: 'Trek Itinerary',
itineraryTitle: '6-Day Marangu Route Itinerary',

itinerary: [
{
title: 'Day 1: Marangu Gate to Mandara Hut',
text: 'After registration at Marangu Gate, begin your trek through the lush rainforest to Mandara Hut. Enjoy your first night on the mountain surrounded by beautiful forest scenery.',
},
{
title: 'Day 2: Mandara Hut to Horombo Hut',
text: 'Leave the rainforest behind and continue through the moorland zone with spectacular views of Mawenzi Peak before arriving at Horombo Hut for the night.',
},
{
title: 'Day 3: Horombo Hut Acclimatization Day',
text: 'Spend an extra day at Horombo Hut to acclimatize. Take a short hike toward Zebra Rocks before returning to the hut to rest and improve your chances of reaching the summit.',
},
{
title: 'Day 4: Horombo Hut to Kibo Hut',
text: 'Cross the alpine desert to Kibo Hut, the final base camp before the summit. Relax, prepare your equipment, and sleep early before the midnight ascent.',
},
{
title:
'Day 5: Kibo Hut to Uhuru Peak and Descend to Horombo Hut',
text: 'Begin the summit climb shortly after midnight. Reach Gilman’s Point, continue to Uhuru Peak—the highest point in Africa—and then descend to Horombo Hut for overnight rest.',
},
{
title: 'Day 6: Horombo Hut to Marangu Gate',
text: 'Descend through the moorland and rainforest to Marangu Gate, receive your summit certificate, and transfer back to Arusha for a well-deserved celebration.',
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
bringTitle: 'Prepare for Your Marangu Climb',

whatToBring: [
'Warm trekking clothes',
'Waterproof jacket',
'Hiking boots',
'Sleeping bag',
'Headlamp',
'Trekking poles',
'Sun hat and sunscreen',
'Personal medication',
],

readyTitle: 'Ready to Climb Kilimanjaro?',
readyText:
'Tell us your preferred travel dates, group size, and climbing experience. Our mountain specialists will prepare a personalized Marangu Route itinerary and quotation for you.',

quote: 'Request a Quote',
whatsapp: 'Chat on WhatsApp',
},

de: {
heroTitle: 'Marangu-Route',
heroSubtitle:
'Besteigen Sie den Kilimandscharo über die Marangu-Route – die einzige Route mit komfortabler Hüttenunterkunft und einem klassischen Trekking-Erlebnis.',
label: 'Klassische Kilimandscharo-Hüttenroute',
mainTitle: 'Kilimandscharo-Besteigung über die Marangu-Route',

paragraph1:
'Die Marangu-Route ist die älteste und eine der beliebtesten Routen am Kilimandscharo. Sie ist die einzige Route mit Übernachtungen in Berghütten und daher für viele Bergsteiger eine komfortable Wahl.',

paragraph2:
'Der Weg führt durch üppigen Regenwald, Heideland und alpine Wüste bis zum Uhuru Peak. Die Route eignet sich ideal für Reisende, die ein klassisches Kilimandscharo-Erlebnis mit Hüttenunterkunft statt Camping suchen.',

duration: 'Dauer',
durationValue: '5–6 Tage',
difficulty: 'Schwierigkeit',
difficultyValue: 'Mittel',
from: 'Ab',
price: 'US$1.850',

highlightsTitle: 'Höhepunkte der Tour',

highlights: [
'Komfortable Unterkunft in Berghütten',
'Klassische und traditionsreiche Kilimandscharo-Route',
'Wunderschöne Regenwald- und Heidelandschaften',
'Erfahrene Bergführer und unterstützende Crew',
'Gipfelversuch am Uhuru Peak',
],

book: 'Diese Tour buchen',

itineraryLabel: 'Reiseverlauf',
itineraryTitle: '6-Tage-Marangu-Route',

itinerary: [
{
title: 'Tag 1: Marangu Gate – Mandara Hut',
text: 'Nach der Registrierung am Marangu Gate beginnt die Wanderung durch den üppigen Regenwald zur Mandara Hut. Genießen Sie Ihre erste Nacht am Berg inmitten einer wunderschönen Waldlandschaft.',
},
{
title: 'Tag 2: Mandara Hut – Horombo Hut',
text: 'Verlassen Sie den Regenwald und wandern Sie durch das Heideland mit spektakulären Ausblicken auf den Mawenzi Peak, bevor Sie die Horombo Hut erreichen.',
},
{
title: 'Tag 3: Akklimatisierungstag an der Horombo Hut',
text: 'Verbringen Sie einen zusätzlichen Tag an der Horombo Hut zur Akklimatisierung. Unternehmen Sie eine kurze Wanderung in Richtung Zebra Rocks und kehren Sie anschließend zur Hütte zurück.',
},
{
title: 'Tag 4: Horombo Hut – Kibo Hut',
text: 'Überqueren Sie die alpine Wüste bis zur Kibo Hut, dem letzten Basislager vor dem Gipfel. Ruhen Sie sich aus, bereiten Sie Ihre Ausrüstung vor und schlafen Sie früh vor dem Aufstieg um Mitternacht.',
},
{
title:
'Tag 5: Kibo Hut – Uhuru Peak – Horombo Hut',
text: 'Beginnen Sie den Gipfelaufstieg kurz nach Mitternacht. Erreichen Sie den Gilman’s Point und steigen Sie weiter zum Uhuru Peak, dem höchsten Punkt Afrikas. Anschließend geht es zurück zur Horombo Hut.',
},
{
title: 'Tag 6: Horombo Hut – Marangu Gate',
text: 'Steigen Sie durch Heideland und Regenwald zum Marangu Gate ab, erhalten Sie Ihr Gipfelzertifikat und fahren Sie anschließend zurück nach Arusha.',
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
bringTitle: 'Bereiten Sie sich auf Ihre Marangu-Besteigung vor',

whatToBring: [
'Warme Trekkingkleidung',
'Wasserdichte Jacke',
'Wanderschuhe',
'Schlafsack',
'Stirnlampe',
'Trekkingstöcke',
'Sonnenhut und Sonnencreme',
'Persönliche Medikamente',
],

readyTitle: 'Bereit, den Kilimandscharo zu besteigen?',
readyText:
'Teilen Sie uns Ihre bevorzugten Reisedaten, Gruppengröße und Klettererfahrung mit. Unsere Bergspezialisten erstellen für Sie einen persönlichen Reiseverlauf und ein Angebot für die Marangu-Route.',

quote: 'Angebot anfordern',
whatsapp: 'Über WhatsApp chatten',
},

fr: {
heroTitle: 'Route Marangu',
heroSubtitle:
'Gravissez le Kilimandjaro par la route Marangu, la seule route offrant un hébergement confortable en refuges de montagne et une expérience classique.',
label: 'Route classique du Kilimandjaro avec refuges',
mainTitle: 'Ascension du Kilimandjaro par la route Marangu',

paragraph1:
'La route Marangu est la plus ancienne et l’une des plus populaires du mont Kilimandjaro. C’est la seule route offrant un hébergement dans des refuges de montagne, ce qui en fait un choix confortable pour de nombreux randonneurs.',

paragraph2:
'Le sentier traverse une forêt tropicale luxuriante, les landes et le désert alpin avant d’atteindre le pic Uhuru. Cette route est idéale pour ceux qui recherchent une expérience classique du Kilimandjaro avec un hébergement en refuge plutôt que du camping.',

duration: 'Durée',
durationValue: '5–6 jours',
difficulty: 'Difficulté',
difficultyValue: 'Modérée',
from: 'À partir de',
price: '1 850 $US',

highlightsTitle: 'Points forts du trek',

highlights: [
'Hébergement confortable dans des refuges de montagne',
'Route classique et historique du Kilimandjaro',
'Magnifiques paysages de forêt tropicale et de landes',
'Guides de montagne expérimentés et équipe de soutien',
'Ascension du sommet Uhuru Peak',
],

book: 'Réserver ce trek',

itineraryLabel: 'Itinéraire du trek',
itineraryTitle: 'Route Marangu – 6 jours',

itinerary: [
{
title: 'Jour 1 : Marangu Gate – Mandara Hut',
text: 'Après l’enregistrement à Marangu Gate, commencez votre trek à travers la forêt tropicale luxuriante jusqu’au refuge Mandara. Profitez de votre première nuit sur la montagne entouré d’une magnifique forêt.',
},
{
title: 'Jour 2 : Mandara Hut – Horombo Hut',
text: 'Quittez la forêt tropicale et continuez à travers les landes avec de magnifiques vues sur le pic Mawenzi avant d’arriver au refuge Horombo.',
},
{
title: 'Jour 3 : Journée d’acclimatation à Horombo Hut',
text: 'Passez une journée supplémentaire au refuge Horombo pour vous acclimater. Faites une courte randonnée vers Zebra Rocks avant de retourner au refuge pour vous reposer.',
},
{
title: 'Jour 4 : Horombo Hut – Kibo Hut',
text: 'Traversez le désert alpin jusqu’au refuge Kibo, le dernier camp de base avant le sommet. Reposez-vous, préparez votre équipement et dormez tôt avant l’ascension de minuit.',
},
{
title:
'Jour 5 : Kibo Hut – Uhuru Peak – Horombo Hut',
text: 'Commencez l’ascension peu après minuit. Atteignez Gilman’s Point puis continuez jusqu’au pic Uhuru, le point culminant de l’Afrique, avant de redescendre au refuge Horombo.',
},
{
title: 'Jour 6 : Horombo Hut – Marangu Gate',
text: 'Descendez à travers les landes et la forêt tropicale jusqu’à Marangu Gate, recevez votre certificat de sommet puis retournez à Arusha.',
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
bringTitle: 'Préparez votre ascension de Marangu',

whatToBring: [
'Vêtements chauds de trekking',
'Veste imperméable',
'Chaussures de randonnée',
'Sac de couchage',
'Lampe frontale',
'Bâtons de trekking',
'Chapeau et crème solaire',
'Médicaments personnels',
],

readyTitle: 'Prêt à gravir le Kilimandjaro ?',
readyText:
'Indiquez-nous vos dates de voyage, la taille de votre groupe et votre expérience en montagne. Nos spécialistes prépareront un itinéraire personnalisé et un devis pour la route Marangu.',

quote: 'Demander un devis',
whatsapp: 'Discuter sur WhatsApp',
},

es: {
heroTitle: 'Ruta Marangu',
heroSubtitle:
'Sube al Kilimanjaro por la Ruta Marangu, la única ruta que ofrece alojamiento cómodo en refugios de montaña y una experiencia clásica de trekking.',
label: 'Ruta clásica del Kilimanjaro con refugios',
mainTitle: 'Ascenso al Kilimanjaro por la Ruta Marangu',

paragraph1:
'La Ruta Marangu es la más antigua y una de las rutas más populares del Monte Kilimanjaro. Es la única ruta que ofrece alojamiento durante la noche en refugios de montaña, lo que la convierte en una opción cómoda para muchos viajeros.',

paragraph2:
'El sendero atraviesa una exuberante selva tropical, páramos y desierto alpino antes de llegar al Pico Uhuru. Es ideal para quienes buscan una experiencia clásica del Kilimanjaro con alojamiento en refugios en lugar de camping.',

duration: 'Duración',
durationValue: '5–6 días',
difficulty: 'Dificultad',
difficultyValue: 'Moderada',
from: 'Desde',
price: 'US$1.850',

highlightsTitle: 'Aspectos destacados',

highlights: [
'Alojamiento cómodo en refugios de montaña',
'Ruta clásica y tradicional del Kilimanjaro',
'Hermosos paisajes de selva tropical y páramos',
'Guías de montaña experimentados y equipo de apoyo',
'Ascenso al Pico Uhuru',
],

book: 'Reservar este trekking',

itineraryLabel: 'Itinerario del trekking',
itineraryTitle: 'Ruta Marangu de 6 días',

itinerary: [
{
title: 'Día 1: Marangu Gate – Mandara Hut',
text: 'Después del registro en Marangu Gate, comienza el trekking atravesando la exuberante selva tropical hasta Mandara Hut. Disfruta de tu primera noche en la montaña rodeado de hermosos paisajes forestales.',
},
{
title: 'Día 2: Mandara Hut – Horombo Hut',
text: 'Deja atrás la selva tropical y continúa por la zona de páramos disfrutando de espectaculares vistas del Pico Mawenzi antes de llegar a Horombo Hut.',
},
{
title: 'Día 3: Día de aclimatación en Horombo Hut',
text: 'Pasa un día adicional en Horombo Hut para aclimatarte. Realiza una corta caminata hacia Zebra Rocks antes de regresar al refugio para descansar.',
},
{
title: 'Día 4: Horombo Hut – Kibo Hut',
text: 'Cruza el desierto alpino hasta Kibo Hut, el último campamento base antes de la cumbre. Descansa, prepara tu equipo y duerme temprano antes del ascenso de medianoche.',
},
{
title:
'Día 5: Kibo Hut – Pico Uhuru – Horombo Hut',
text: 'Comienza el ascenso poco después de medianoche. Llega a Gilman’s Point y continúa hasta el Pico Uhuru, el punto más alto de África, antes de descender a Horombo Hut.',
},
{
title: 'Día 6: Horombo Hut – Marangu Gate',
text: 'Desciende por los páramos y la selva tropical hasta Marangu Gate, recibe tu certificado de cumbre y regresa a Arusha.',
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
bringTitle: 'Prepárate para tu ascenso por Marangu',

whatToBring: [
'Ropa de trekking abrigada',
'Chaqueta impermeable',
'Botas de senderismo',
'Saco de dormir',
'Linterna frontal',
'Bastones de trekking',
'Sombrero y protector solar',
'Medicamentos personales',
],

readyTitle: '¿Listo para subir al Kilimanjaro?',
readyText:
'Cuéntanos tus fechas preferidas de viaje, tamaño del grupo y experiencia en montaña. Nuestros especialistas prepararán un itinerario personalizado y una cotización para la Ruta Marangu.',

quote: 'Solicitar presupuesto',
whatsapp: 'Chatear por WhatsApp',
},
};

export default function MaranguRoutePage() {
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
image="/images/marangu-route.jpg"
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
<li key={item} className="flex gap-3">
<span className="font-bold text-gold">✓</span>
<span>{item}</span>
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
<li key={item}>✅ {item}</li>
))}
</ul>
</div>

<div className="rounded-3xl bg-cream p-8 shadow-xl">
<h2 className="text-3xl font-bold text-forest">
{t.excludedTitle}
</h2>

<ul className="mt-6 space-y-3">
{t.excluded.map((item) => (
<li key={item}>❌ {item}</li>
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
<li key={item}>• {item}</li>
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