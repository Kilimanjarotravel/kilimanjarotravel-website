'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
en: {
heroTitle: 'Machame Route',
heroSubtitle:
'Climb Kilimanjaro via the scenic Machame Route, known for beautiful landscapes, strong acclimatization, and rewarding summit views.',
label: 'Scenic Kilimanjaro Trek',
mainTitle: 'Machame Route Kilimanjaro Climb',

paragraph1:
"The Machame Route is one of Kilimanjaro's most popular climbing routes, offering beautiful scenery, varied landscapes, and a good acclimatization profile.",

paragraph2:
'The trek passes through rainforest, moorland, alpine desert, and high mountain terrain before reaching Uhuru Peak. It is ideal for climbers looking for a scenic and challenging adventure.',

duration: 'Duration',
durationValue: '6–7 Days',
difficulty: 'Difficulty',
difficultyValue: 'Moderate to Challenging',
from: 'From',
price: 'US$1,650',

highlightsTitle: 'Trek Highlights',

highlights: [
'Scenic route with varied landscapes',
'Good acclimatization profile',
'Rainforest, moorland and alpine desert',
'Experienced mountain guides and support crew',
'Rewarding summit attempt at Uhuru Peak',
],

book: 'Book This Trek',

itineraryLabel: 'Trek Itinerary',
itineraryTitle: '7-Day Machame Route',

itinerary: [
{
title: 'Day 1: Machame Gate to Machame Camp',
text: 'Begin your trek through lush rainforest to Machame Camp. Enjoy beautiful scenery while gradually gaining altitude.',
},
{
title: 'Day 2: Machame Camp to Shira Camp',
text: 'Leave the rainforest behind and enter the moorland zone with spectacular views of Mount Meru and the Shira Plateau.',
},
{
title: 'Day 3: Shira Camp to Barranco Camp',
text: 'Hike via Lava Tower for acclimatization before descending to Barranco Camp, following the climb high, sleep low principle.',
},
{
title: 'Day 4: Barranco Camp to Karanga Camp',
text: 'Climb the famous Barranco Wall and continue across alpine terrain to Karanga Camp.',
},
{
title: 'Day 5: Karanga Camp to Barafu Camp',
text: 'Reach Barafu Camp, your base for the summit attempt. Rest, prepare your gear, and sleep early.',
},
{
title: 'Day 6: Summit Day – Uhuru Peak to Mweka Camp',
text: 'Start before midnight, reach Uhuru Peak at sunrise, then descend to Mweka Camp for your final overnight stay.',
},
{
title: 'Day 7: Mweka Camp to Mweka Gate',
text: 'Descend through the rainforest to Mweka Gate where you receive your certificate before returning to Arusha.',
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
bringTitle: 'Prepare for Your Machame Climb',

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
'Tell us your preferred travel dates, group size, and climbing experience. Our mountain specialists will prepare a personalized Machame Route itinerary and quotation for you.',

quote: 'Request a Quote',
whatsapp: 'Chat on WhatsApp',
},

de: {
heroTitle: 'Machame-Route',
heroSubtitle:
'Besteigen Sie den Kilimandscharo über die landschaftlich reizvolle Machame-Route, die für wunderschöne Landschaften, gute Akklimatisierung und beeindruckende Gipfelblicke bekannt ist.',
label: 'Landschaftlich reizvolle Kilimandscharo-Tour',
mainTitle: 'Kilimandscharo-Besteigung über die Machame-Route',

paragraph1:
'Die Machame-Route ist eine der beliebtesten Routen am Kilimandscharo und bietet wunderschöne Landschaften, abwechslungsreiche Vegetation und gute Möglichkeiten zur Akklimatisierung.',

paragraph2:
'Die Wanderung führt durch Regenwald, Heideland, alpine Wüste und hochalpines Gelände bis zum Uhuru Peak. Sie ist ideal für Reisende, die ein landschaftlich reizvolles und anspruchsvolles Abenteuer suchen.',

duration: 'Dauer',
durationValue: '6–7 Tage',
difficulty: 'Schwierigkeit',
difficultyValue: 'Mittel bis anspruchsvoll',
from: 'Ab',
price: 'US$1.650',

highlightsTitle: 'Höhepunkte der Tour',

highlights: [
'Landschaftlich reizvolle Route mit abwechslungsreichen Landschaften',
'Gutes Akklimatisierungsprofil',
'Regenwald, Heideland und alpine Wüste',
'Erfahrene Bergführer und unterstützende Crew',
'Aussichtsreicher Gipfelversuch am Uhuru Peak',
],

book: 'Diese Tour buchen',

itineraryLabel: 'Reiseverlauf',
itineraryTitle: '7-Tage-Machame-Route',

itinerary: [
{
title: 'Tag 1: Machame Gate – Machame Camp',
text: 'Beginnen Sie Ihre Wanderung durch den üppigen Regenwald zum Machame Camp. Genießen Sie die wunderschöne Landschaft und gewinnen Sie langsam an Höhe.',
},
{
title: 'Tag 2: Machame Camp – Shira Camp',
text: 'Sie verlassen den Regenwald und erreichen die Heidelandzone mit spektakulären Ausblicken auf den Mount Meru und das Shira-Plateau.',
},
{
title: 'Tag 3: Shira Camp – Barranco Camp',
text: 'Wandern Sie über den Lava Tower zur Akklimatisierung und steigen Sie anschließend zum Barranco Camp ab.',
},
{
title: 'Tag 4: Barranco Camp – Karanga Camp',
text: 'Überwinden Sie die berühmte Barranco Wall und wandern Sie durch alpine Landschaften zum Karanga Camp.',
},
{
title: 'Tag 5: Karanga Camp – Barafu Camp',
text: 'Erreichen Sie das Barafu Camp, den Ausgangspunkt für den Gipfelversuch. Ruhen Sie sich aus, bereiten Sie Ihre Ausrüstung vor und schlafen Sie früh.',
},
{
title: 'Tag 6: Gipfeltag – Uhuru Peak – Mweka Camp',
text: 'Starten Sie vor Mitternacht, erreichen Sie den Uhuru Peak bei Sonnenaufgang und steigen Sie anschließend zum Mweka Camp ab.',
},
{
title: 'Tag 7: Mweka Camp – Mweka Gate',
text: 'Steigen Sie durch den Regenwald zum Mweka Gate ab. Dort erhalten Sie Ihr Zertifikat, bevor Sie nach Arusha zurückkehren.',
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
bringTitle: 'Bereiten Sie sich auf Ihre Machame-Besteigung vor',

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
'Teilen Sie uns Ihre bevorzugten Reisedaten, Gruppengröße und Klettererfahrung mit. Unsere Bergspezialisten erstellen für Sie einen persönlichen Reiseverlauf und ein Angebot für die Machame-Route.',

quote: 'Angebot anfordern',
whatsapp: 'Über WhatsApp chatten',
},

fr: {
heroTitle: 'Route Machame',
heroSubtitle:
'Gravissez le Kilimandjaro par la route panoramique de Machame, connue pour ses paysages magnifiques, sa bonne acclimatation et ses vues spectaculaires au sommet.',
label: 'Trek panoramique du Kilimandjaro',
mainTitle: 'Ascension du Kilimandjaro par la route Machame',

paragraph1:
'La route Machame est l’une des routes les plus populaires du Kilimandjaro. Elle offre de magnifiques paysages, une végétation variée et un bon profil d’acclimatation.',

paragraph2:
'Le trek traverse la forêt tropicale, les landes, le désert alpin et les hautes terres avant d’atteindre le pic Uhuru. Il est idéal pour les voyageurs recherchant une aventure panoramique et exigeante.',

duration: 'Durée',
durationValue: '6–7 jours',
difficulty: 'Difficulté',
difficultyValue: 'Modérée à difficile',
from: 'À partir de',
price: '1 650 $US',

highlightsTitle: 'Points forts du trek',

highlights: [
'Route panoramique avec des paysages variés',
'Bon profil d’acclimatation',
'Forêt tropicale, landes et désert alpin',
'Guides de montagne expérimentés et équipe de soutien',
'Ascension finale vers le pic Uhuru',
],

book: 'Réserver ce trek',

itineraryLabel: 'Itinéraire du trek',
itineraryTitle: 'Route Machame – 7 jours',

itinerary: [
{
title: 'Jour 1 : Machame Gate – Machame Camp',
text: 'Commencez votre trek à travers la forêt tropicale luxuriante jusqu’au camp Machame. Profitez des paysages tout en gagnant progressivement de l’altitude.',
},
{
title: 'Jour 2 : Machame Camp – Shira Camp',
text: 'Quittez la forêt tropicale pour entrer dans la zone des landes avec de magnifiques vues sur le mont Meru et le plateau de Shira.',
},
{
title: 'Jour 3 : Shira Camp – Barranco Camp',
text: 'Marchez via Lava Tower pour favoriser l’acclimatation avant de descendre vers Barranco Camp.',
},
{
title: 'Jour 4 : Barranco Camp – Karanga Camp',
text: 'Gravissez la célèbre Barranco Wall et continuez à travers les paysages alpins jusqu’au camp Karanga.',
},
{
title: 'Jour 5 : Karanga Camp – Barafu Camp',
text: 'Atteignez Barafu Camp, votre base pour l’ascension finale. Reposez-vous, préparez votre équipement et dormez tôt.',
},
{
title: 'Jour 6 : Jour du sommet – Uhuru Peak – Mweka Camp',
text: 'Commencez avant minuit, atteignez Uhuru Peak au lever du soleil puis descendez vers Mweka Camp.',
},
{
title: 'Jour 7 : Mweka Camp – Mweka Gate',
text: 'Descendez à travers la forêt tropicale jusqu’à Mweka Gate où vous recevrez votre certificat avant de retourner à Arusha.',
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
bringTitle: 'Préparez votre ascension de Machame',

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
'Indiquez-nous vos dates de voyage, la taille de votre groupe et votre expérience en montagne. Nos spécialistes prépareront un itinéraire personnalisé et un devis pour la route Machame.',

quote: 'Demander un devis',
whatsapp: 'Discuter sur WhatsApp',
},

es: {
heroTitle: 'Ruta Machame',
heroSubtitle:
'Sube al Kilimanjaro por la espectacular Ruta Machame, conocida por sus hermosos paisajes, buena aclimatación y magníficas vistas de la cumbre.',
label: 'Trekking panorámico del Kilimanjaro',
mainTitle: 'Ascenso al Kilimanjaro por la Ruta Machame',

paragraph1:
'La Ruta Machame es una de las rutas de ascenso más populares del Kilimanjaro y ofrece paisajes espectaculares, diferentes ecosistemas y buenas condiciones de aclimatación.',

paragraph2:
'El trekking atraviesa selva tropical, páramos, desierto alpino y terreno de alta montaña antes de llegar al Pico Uhuru. Es ideal para quienes buscan una aventura escénica y desafiante.',

duration: 'Duración',
durationValue: '6–7 días',
difficulty: 'Dificultad',
difficultyValue: 'Moderada a desafiante',
from: 'Desde',
price: 'US$1.650',

highlightsTitle: 'Aspectos destacados',

highlights: [
'Ruta panorámica con paisajes variados',
'Buen perfil de aclimatación',
'Selva tropical, páramos y desierto alpino',
'Guías de montaña experimentados y equipo de apoyo',
'Ascenso final al Pico Uhuru',
],

book: 'Reservar este trekking',

itineraryLabel: 'Itinerario del trekking',
itineraryTitle: 'Ruta Machame de 7 días',

itinerary: [
{
title: 'Día 1: Machame Gate – Machame Camp',
text: 'Comienza el trekking atravesando la exuberante selva tropical hasta Machame Camp. Disfruta del paisaje mientras ganas altitud gradualmente.',
},
{
title: 'Día 2: Machame Camp – Shira Camp',
text: 'Deja atrás la selva tropical y entra en la zona de páramos con magníficas vistas del Monte Meru y la Meseta de Shira.',
},
{
title: 'Día 3: Shira Camp – Barranco Camp',
text: 'Camina por Lava Tower para favorecer la aclimatación antes de descender hasta Barranco Camp.',
},
{
title: 'Día 4: Barranco Camp – Karanga Camp',
text: 'Sube por la famosa Barranco Wall y continúa por el terreno alpino hasta Karanga Camp.',
},
{
title: 'Día 5: Karanga Camp – Barafu Camp',
text: 'Llega a Barafu Camp, la base para el intento de cumbre. Descansa, prepara tu equipo y duerme temprano.',
},
{
title: 'Día 6: Día de cumbre – Uhuru Peak – Mweka Camp',
text: 'Comienza antes de medianoche, llega al Pico Uhuru al amanecer y después desciende hasta Mweka Camp.',
},
{
title: 'Día 7: Mweka Camp – Mweka Gate',
text: 'Desciende por la selva tropical hasta Mweka Gate, donde recibirás tu certificado antes de regresar a Arusha.',
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
bringTitle: 'Prepárate para tu ascenso por Machame',

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
'Cuéntanos tus fechas preferidas de viaje, tamaño del grupo y experiencia en montaña. Nuestros especialistas prepararán un itinerario personalizado y una cotización para la Ruta Machame.',

quote: 'Solicitar presupuesto',
whatsapp: 'Chatear por WhatsApp',
},
};

export default function MachameRoutePage() {
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
image="/images/machame-route.jpg"
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