'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
en: {
heroTitle: 'Shira Route',
heroSubtitle:
'Explore Mount Kilimanjaro via the scenic Shira Route, featuring breathtaking landscapes, excellent acclimatization, and an unforgettable summit adventure.',
smallTitle: 'Scenic Western Kilimanjaro Trek',
mainTitle: 'Shira Route Kilimanjaro Climb',
intro1:
'The Shira Route begins on the western side of Mount Kilimanjaro and crosses the spectacular Shira Plateau before joining the Machame Route. It offers breathtaking scenery and excellent opportunities for acclimatization.',
intro2:
'Climbers experience rainforest, moorland, alpine desert, and high mountain landscapes before reaching Uhuru Peak. The Shira Route is ideal for those seeking a quieter and highly scenic Kilimanjaro adventure.',
duration: 'Duration',
durationValue: '7–8 Days',
difficulty: 'Difficulty',
difficultyValue: 'Moderate',
from: 'From',
highlightsTitle: 'Trek Highlights',
book: 'Book This Trek',
itinerarySmall: 'Trek Itinerary',
itineraryTitle: '7-Day Shira Route Itinerary',
includedTitle: 'What Is Included',
excludedTitle: 'What Is Excluded',
bringSmall: 'What To Bring',
bringTitle: 'Prepare for Your Shira Climb',
finalTitle: 'Ready to Climb Kilimanjaro?',
finalText:
'Tell us your preferred travel dates, group size, and climbing experience. Our mountain specialists will prepare a personalized Shira Route itinerary and quotation for you.',
quote: 'Request a Quote',
whatsapp: 'Chat on WhatsApp',
highlights: [
'Beautiful Shira Plateau scenery',
'Excellent acclimatization profile',
'Less crowded western approach',
'Experienced mountain guides and support crew',
'High summit success rate',
],
itinerary: [
{
title: 'Day 1: Londorossi Gate to Shira 1 Camp',
text: 'After registration at Londorossi Gate, drive to the Shira trailhead and begin your trek across the beautiful Shira Plateau to Shira 1 Camp.',
},
{
title: 'Day 2: Shira 1 Camp to Shira 2 Camp',
text: 'Cross the scenic Shira Plateau while enjoying breathtaking mountain views and allowing your body to acclimatize.',
},
{
title: 'Day 3: Shira 2 Camp to Barranco Camp via Lava Tower',
text: 'Climb toward Lava Tower for acclimatization before descending to Barranco Camp, following the climb-high, sleep-low principle.',
},
{
title: 'Day 4: Barranco Camp to Karanga Camp',
text: 'Climb the famous Barranco Wall and continue across alpine terrain to Karanga Camp.',
},
{
title: 'Day 5: Karanga Camp to Barafu Camp',
text: 'Reach Barafu Camp, your base for the summit attempt. Rest, prepare your equipment, and sleep early.',
},
{
title: 'Day 6: Summit Day – Uhuru Peak to Mweka Camp',
text: 'Begin your summit climb before midnight, reach Uhuru Peak at sunrise, then descend to Mweka Camp.',
},
{
title: 'Day 7: Mweka Camp to Mweka Gate',
text: 'Descend through the rainforest to Mweka Gate, receive your summit certificate, and transfer back to Arusha.',
},
],
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
excluded: [
'Flights',
'Travel insurance',
'Personal trekking equipment',
'Tips for the mountain crew',
'Personal expenses',
'Alcoholic drinks',
],
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
},

de: {
heroTitle: 'Shira-Route',
heroSubtitle:
'Erleben Sie den Kilimandscharo über die landschaftlich reizvolle Shira-Route mit atemberaubenden Landschaften, hervorragender Akklimatisierung und einem unvergesslichen Gipfelerlebnis.',
smallTitle: 'Landschaftlich reizvolle Kilimandscharo-Tour',
mainTitle: 'Kilimandscharo-Besteigung über die Shira-Route',
intro1:
'Die Shira-Route beginnt an der Westseite des Kilimandscharo und führt über das spektakuläre Shira-Plateau, bevor sie auf die Machame-Route trifft. Sie bietet atemberaubende Landschaften und hervorragende Möglichkeiten zur Akklimatisierung.',
intro2:
'Die Wanderung führt durch Regenwald, Heide- und Moorlandschaften, alpine Wüste und hochalpine Landschaften bis zum Uhuru Peak. Die Shira-Route ist ideal für Reisende, die ein ruhigeres und landschaftlich beeindruckendes Kilimandscharo-Abenteuer suchen.',
duration: 'Dauer',
durationValue: '7–8 Tage',
difficulty: 'Schwierigkeit',
difficultyValue: 'Mittel',
from: 'Ab',
highlightsTitle: 'Höhepunkte der Tour',
book: 'Diese Tour buchen',
itinerarySmall: 'Reiseverlauf',
itineraryTitle: '7-Tage Shira-Route Reiseverlauf',
includedTitle: 'Im Preis enthalten',
excludedTitle: 'Nicht enthalten',
bringSmall: 'Was Sie mitbringen sollten',
bringTitle: 'Bereiten Sie sich auf Ihre Shira-Besteigung vor',
finalTitle: 'Bereit, den Kilimandscharo zu besteigen?',
finalText:
'Teilen Sie uns Ihre bevorzugten Reisedaten, Gruppengröße und Klettererfahrung mit. Unsere Bergspezialisten erstellen für Sie einen individuellen Reiseverlauf und ein Angebot für die Shira-Route.',
quote: 'Angebot anfordern',
whatsapp: 'Über WhatsApp chatten',
highlights: [
'Beeindruckende Landschaften des Shira-Plateaus',
'Hervorragendes Akklimatisierungsprofil',
'Ruhigerer westlicher Zugang',
'Erfahrene Bergführer und Unterstützungsteam',
'Hohe Gipfelerfolgsrate',
],
itinerary: [
{
title: 'Tag 1: Londorossi Gate zum Shira 1 Camp',
text: 'Nach der Registrierung am Londorossi Gate fahren Sie zum Ausgangspunkt der Shira-Route und beginnen Ihre Wanderung über das wunderschöne Shira-Plateau zum Shira 1 Camp.',
},
{
title: 'Tag 2: Shira 1 Camp zum Shira 2 Camp',
text: 'Überqueren Sie das landschaftlich reizvolle Shira-Plateau und genießen Sie atemberaubende Bergblicke, während sich Ihr Körper langsam akklimatisiert.',
},
{
title: 'Tag 3: Shira 2 Camp zum Barranco Camp über Lava Tower',
text: 'Steigen Sie zur Akklimatisierung in Richtung Lava Tower auf und steigen Sie anschließend zum Barranco Camp ab. Dabei folgen Sie dem Prinzip „hoch steigen, niedrig schlafen“.',
},
{
title: 'Tag 4: Barranco Camp zum Karanga Camp',
text: 'Überwinden Sie die berühmte Barranco Wall und wandern Sie durch alpines Gelände weiter zum Karanga Camp.',
},
{
title: 'Tag 5: Karanga Camp zum Barafu Camp',
text: 'Erreichen Sie das Barafu Camp, den Ausgangspunkt für den Gipfelversuch. Ruhen Sie sich aus, bereiten Sie Ihre Ausrüstung vor und schlafen Sie früh.',
},
{
title: 'Tag 6: Gipfeltag – Uhuru Peak zum Mweka Camp',
text: 'Beginnen Sie den Gipfelaufstieg vor Mitternacht, erreichen Sie bei Sonnenaufgang den Uhuru Peak und steigen Sie anschließend zum Mweka Camp ab.',
},
{
title: 'Tag 7: Mweka Camp zum Mweka Gate',
text: 'Steigen Sie durch den Regenwald zum Mweka Gate ab, erhalten Sie Ihre Gipfelurkunde und fahren Sie anschließend zurück nach Arusha.',
},
],
included: [
'Nationalparkgebühren',
'Campinggebühren',
'Professioneller Bergführer',
'Zusätzliche Bergführer',
'Träger und Koch',
'Bergzelte',
'Mahlzeiten während der Tour',
'Trinkwasser',
'Transfers zum und vom Berg',
],
excluded: [
'Flüge',
'Reiseversicherung',
'Persönliche Trekkingausrüstung',
'Trinkgelder für das Bergteam',
'Persönliche Ausgaben',
'Alkoholische Getränke',
],
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
},

fr: {
heroTitle: 'Route Shira',
heroSubtitle:
'Découvrez le Kilimandjaro par la magnifique route Shira, avec des paysages spectaculaires, une excellente acclimatation et une aventure inoubliable jusqu’au sommet.',
smallTitle: 'Trek panoramique du Kilimandjaro',
mainTitle: 'Ascension du Kilimandjaro par la route Shira',
intro1:
'La route Shira commence sur le versant ouest du Kilimandjaro et traverse le spectaculaire plateau de Shira avant de rejoindre la route Machame. Elle offre des paysages magnifiques et d’excellentes possibilités d’acclimatation.',
intro2:
'Le trek traverse la forêt tropicale, les landes, le désert alpin et les paysages de haute montagne avant d’atteindre le pic Uhuru. La route Shira est idéale pour ceux qui recherchent une aventure plus calme et très panoramique.',
duration: 'Durée',
durationValue: '7–8 jours',
difficulty: 'Difficulté',
difficultyValue: 'Modérée',
from: 'À partir de',
highlightsTitle: 'Points forts du trek',
book: 'Réserver ce trek',
itinerarySmall: 'Itinéraire du trek',
itineraryTitle: 'Itinéraire de 7 jours – Route Shira',
includedTitle: 'Ce qui est inclus',
excludedTitle: 'Ce qui n’est pas inclus',
bringSmall: 'À emporter',
bringTitle: 'Préparez votre ascension de la route Shira',
finalTitle: 'Prêt à gravir le Kilimandjaro ?',
finalText:
'Indiquez-nous vos dates de voyage, la taille de votre groupe et votre expérience en montagne. Nos spécialistes prépareront un itinéraire personnalisé et un devis pour la route Shira.',
quote: 'Demander un devis',
whatsapp: 'Discuter sur WhatsApp',
highlights: [
'Magnifiques paysages du plateau de Shira',
'Excellent profil d’acclimatation',
'Approche occidentale moins fréquentée',
'Guides de montagne expérimentés et équipe de soutien',
'Taux élevé de réussite au sommet',
],
itinerary: [
{
title: 'Jour 1 : Porte de Londorossi – Camp Shira 1',
text: 'Après l’enregistrement à la porte de Londorossi, transfert vers le départ du sentier Shira et début de la randonnée à travers le magnifique plateau de Shira jusqu’au camp Shira 1.',
},
{
title: 'Jour 2 : Camp Shira 1 – Camp Shira 2',
text: 'Traversez le plateau de Shira en profitant de vues magnifiques sur la montagne tout en permettant à votre corps de s’acclimater progressivement.',
},
{
title: 'Jour 3 : Camp Shira 2 – Camp Barranco via Lava Tower',
text: 'Montez vers Lava Tower pour l’acclimatation avant de descendre vers le camp Barranco, selon le principe « monter haut, dormir bas ».',
},
{
title: 'Jour 4 : Camp Barranco – Camp Karanga',
text: 'Gravissez le célèbre Barranco Wall puis continuez à travers le terrain alpin jusqu’au camp Karanga.',
},
{
title: 'Jour 5 : Camp Karanga – Camp Barafu',
text: 'Atteignez le camp Barafu, votre base pour l’ascension finale. Reposez-vous, préparez votre équipement et couchez-vous tôt.',
},
{
title: 'Jour 6 : Jour du sommet – Uhuru Peak – Camp Mweka',
text: 'Commencez l’ascension avant minuit, atteignez Uhuru Peak au lever du soleil, puis descendez jusqu’au camp Mweka.',
},
{
title: 'Jour 7 : Camp Mweka – Porte de Mweka',
text: 'Descendez à travers la forêt tropicale jusqu’à la porte de Mweka, recevez votre certificat de sommet et retournez ensuite à Arusha.',
},
],
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
excluded: [
'Vols',
'Assurance voyage',
'Équipement personnel de trekking',
'Pourboires pour l’équipe de montagne',
'Dépenses personnelles',
'Boissons alcoolisées',
],
whatToBring: [
'Vêtements chauds de trekking',
'Veste imperméable',
'Chaussures de randonnée confortables',
'Sac de couchage',
'Lampe frontale',
'Bâtons de randonnée',
'Chapeau et crème solaire',
'Médicaments personnels',
],
},

es: {
heroTitle: 'Ruta Shira',
heroSubtitle:
'Explora el Kilimanjaro por la pintoresca Ruta Shira, con paisajes impresionantes, excelente aclimatación y una aventura inolvidable hasta la cima.',
smallTitle: 'Trekking panorámico del Kilimanjaro',
mainTitle: 'Ascenso al Kilimanjaro por la Ruta Shira',
intro1:
'La Ruta Shira comienza en el lado occidental del Kilimanjaro y atraviesa la espectacular Meseta de Shira antes de unirse a la Ruta Machame. Ofrece paisajes impresionantes y excelentes oportunidades de aclimatación.',
intro2:
'El trekking atraviesa selva tropical, páramos, desierto alpino y paisajes de alta montaña antes de llegar al Pico Uhuru. La Ruta Shira es ideal para quienes buscan una aventura tranquila y muy escénica en el Kilimanjaro.',
duration: 'Duración',
durationValue: '7–8 días',
difficulty: 'Dificultad',
difficultyValue: 'Moderada',
from: 'Desde',
highlightsTitle: 'Aspectos destacados',
book: 'Reservar este trekking',
itinerarySmall: 'Itinerario',
itineraryTitle: 'Itinerario de 7 días – Ruta Shira',
includedTitle: 'Qué está incluido',
excludedTitle: 'Qué no está incluido',
bringSmall: 'Qué llevar',
bringTitle: 'Prepárate para tu ascenso por Shira',
finalTitle: '¿Listo para subir el Kilimanjaro?',
finalText:
'Indícanos tus fechas de viaje, tamaño del grupo y experiencia de montaña. Nuestros especialistas prepararán un itinerario personalizado y una cotización para la Ruta Shira.',
quote: 'Solicitar presupuesto',
whatsapp: 'Chatear por WhatsApp',
highlights: [
'Hermosos paisajes de la Meseta de Shira',
'Excelente perfil de aclimatación',
'Acceso occidental menos concurrido',
'Guías de montaña experimentados y equipo de apoyo',
'Alta tasa de éxito en la cumbre',
],
itinerary: [
{
title: 'Día 1: Puerta de Londorossi – Campamento Shira 1',
text: 'Después del registro en la Puerta de Londorossi, traslado al inicio del sendero Shira y comienzo del trekking por la hermosa Meseta de Shira hasta el Campamento Shira 1.',
},
{
title: 'Día 2: Campamento Shira 1 – Campamento Shira 2',
text: 'Cruza la pintoresca Meseta de Shira disfrutando de impresionantes vistas de la montaña mientras tu cuerpo se aclimata gradualmente.',
},
{
title: 'Día 3: Campamento Shira 2 – Campamento Barranco vía Lava Tower',
text: 'Sube hacia Lava Tower para aclimatarte antes de descender al Campamento Barranco, siguiendo el principio de subir alto y dormir bajo.',
},
{
title: 'Día 4: Campamento Barranco – Campamento Karanga',
text: 'Sube por la famosa Barranco Wall y continúa por terreno alpino hasta el Campamento Karanga.',
},
{
title: 'Día 5: Campamento Karanga – Campamento Barafu',
text: 'Llega al Campamento Barafu, tu base para el intento de cumbre. Descansa, prepara tu equipo y duerme temprano.',
},
{
title: 'Día 6: Día de cumbre – Pico Uhuru – Campamento Mweka',
text: 'Comienza el ascenso antes de medianoche, llega al Pico Uhuru al amanecer y después desciende al Campamento Mweka.',
},
{
title: 'Día 7: Campamento Mweka – Puerta de Mweka',
text: 'Desciende por la selva tropical hasta la Puerta de Mweka, recibe tu certificado de cumbre y regresa a Arusha.',
},
],
included: [
'Tasas de entrada al parque',
'Tasas de camping',
'Guía de montaña profesional',
'Guías asistentes',
'Porteadores y cocinero',
'Tiendas de montaña',
'Comidas durante el trekking',
'Agua potable',
'Traslados de ida y vuelta a la montaña',
],
excluded: [
'Vuelos',
'Seguro de viaje',
'Equipo personal de trekking',
'Propinas para el equipo de montaña',
'Gastos personales',
'Bebidas alcohólicas',
],
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
},
};

export default function ShiraRoutePage() {
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
image="/images/shira-route.jpg"
/>

{/* INTRO */}
<section className="py-16">
<div className="mx-auto max-w-6xl px-6">
<div className="grid gap-10 md:grid-cols-2">

<div>
<p className="font-bold uppercase tracking-widest text-gold">
{t.smallTitle}
</p>

<h2 className="mt-3 text-4xl font-bold text-forest">
{t.mainTitle}
</h2>

<p className="mt-6 leading-8 text-black/70">
{t.intro1}
</p>

<p className="mt-4 leading-8 text-black/70">
{t.intro2}
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
US$2,150
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
className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white transition hover:bg-yellow-600"
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
{t.itinerarySmall}
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
{t.bringSmall}
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

{/* FINAL CTA */}
<section className="bg-forest py-20 text-white">

<div className="mx-auto max-w-4xl px-6 text-center">

<h2 className="font-display text-4xl font-bold md:text-5xl">
{t.finalTitle}
</h2>

<p className="mt-5 text-lg leading-8 text-white/80">
{t.finalText}
</p>

<div className="mt-8 flex flex-wrap justify-center gap-4">

<Link
href="/booking"
className="rounded-full bg-gold px-8 py-4 font-bold text-white transition hover:bg-yellow-600"
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
