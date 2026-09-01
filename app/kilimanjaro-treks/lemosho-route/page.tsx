'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
en: {
heroTitle: 'Lemosho Route',
heroSubtitle:
'Climb Kilimanjaro through rainforest, the scenic Shira Plateau, alpine desert and rewarding summit landscapes.',
label: 'Scenic and Well-Acclimatized Trek',
mainTitle: 'Lemosho Route Kilimanjaro Climb',

paragraph1:
"The Lemosho Route is one of Kilimanjaro's most scenic climbing routes. Beginning on the quiet western side of the mountain, it provides excellent acclimatization and outstanding success rates.",

paragraph2:
"The trek passes through rainforest, heath, the beautiful Shira Plateau, alpine desert and finally reaches Uhuru Peak, Africa's highest point.",

duration: 'Duration',
durationValue: '7–8 Days',
difficulty: 'Difficulty',
difficultyValue: 'Moderate',
from: 'From',
price: 'US$2,050',

highlightsTitle: 'Trek Highlights',

highlights: [
'Scenic and less-crowded starting section',
'Excellent acclimatization profile',
'Cross the beautiful Shira Plateau',
'Experienced mountain guides and support crew',
'High summit success potential',
],

book: 'Book This Trek',

itineraryLabel: 'Trek Itinerary',
itineraryTitle: '8-Day Lemosho Route Itinerary',

itinerary: [
{
title: 'Day 1: Londorossi Gate to Mti Mkubwa Camp',
text: 'Begin the trek through the western rainforest after registration at Londorossi Gate. Continue to Mti Mkubwa Camp for your first overnight stay.',
},
{
title: 'Day 2: Mti Mkubwa Camp to Shira 1 Camp',
text: 'Leave the rainforest and enter the heath and moorland zone while enjoying views across the Shira Plateau.',
},
{
title: 'Day 3: Shira 1 Camp to Shira 2 Camp',
text: 'Cross the scenic Shira Plateau at a relaxed pace, allowing time for acclimatization and beautiful mountain views.',
},
{
title: 'Day 4: Shira 2 Camp to Barranco Camp via Lava Tower',
text: 'Climb toward Lava Tower for acclimatization before descending to Barranco Camp following the climb high, sleep low principle.',
},
{
title: 'Day 5: Barranco Camp to Karanga Camp',
text: 'Climb the famous Barranco Wall before continuing to Karanga Camp.',
},
{
title: 'Day 6: Karanga Camp to Barafu Camp',
text: 'Reach Barafu Camp and prepare for the summit attempt.',
},
{
title: 'Day 7: Summit Day – Uhuru Peak to Mweka Camp',
text: 'Summit Uhuru Peak before descending to Mweka Camp.',
},
{
title: 'Day 8: Mweka Camp to Mweka Gate',
text: 'Descend through the rainforest to Mweka Gate before returning to Arusha.',
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
bringTitle: 'Prepare for Your Lemosho Climb',

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
'Tell us your preferred travel dates, group size and climbing experience. Our mountain specialists will prepare a personalized Lemosho Route itinerary and quotation for you.',

quote: 'Request a Quote',
whatsapp: 'Chat on WhatsApp',
},

de: {
heroTitle: 'Lemosho-Route',
heroSubtitle:
'Besteigen Sie den Kilimandscharo durch Regenwald, über das beeindruckende Shira-Plateau, die alpine Wüste und bis zum Gipfel.',
label: 'Landschaftlich reizvolle Route mit guter Akklimatisierung',
mainTitle: 'Kilimandscharo-Besteigung über die Lemosho-Route',

paragraph1:
'Die Lemosho-Route ist eine der landschaftlich schönsten Routen am Kilimandscharo. Sie beginnt auf der ruhigen Westseite des Berges und bietet hervorragende Möglichkeiten zur Akklimatisierung sowie sehr gute Gipfelerfolgschancen.',

paragraph2:
'Die Wanderung führt durch Regenwald, Heideland, über das wunderschöne Shira-Plateau und durch die alpine Wüste bis zum Uhuru Peak, dem höchsten Punkt Afrikas.',

duration: 'Dauer',
durationValue: '7–8 Tage',
difficulty: 'Schwierigkeit',
difficultyValue: 'Mittel',
from: 'Ab',
price: 'US$2.050',

highlightsTitle: 'Höhepunkte der Tour',

highlights: [
'Landschaftlich reizvoller und weniger überfüllter Start',
'Hervorragendes Akklimatisierungsprofil',
'Überquerung des wunderschönen Shira-Plateaus',
'Erfahrene Bergführer und unterstützende Crew',
'Hohe Erfolgschancen am Gipfel',
],

book: 'Diese Tour buchen',

itineraryLabel: 'Reiseverlauf',
itineraryTitle: '8-Tage-Lemosho-Route',

itinerary: [
{
title: 'Tag 1: Londorossi Gate – Mti Mkubwa Camp',
text: 'Beginnen Sie nach der Registrierung am Londorossi Gate Ihre Wanderung durch den westlichen Regenwald und erreichen Sie das Mti Mkubwa Camp für die erste Übernachtung.',
},
{
title: 'Tag 2: Mti Mkubwa Camp – Shira 1 Camp',
text: 'Verlassen Sie den Regenwald und erreichen Sie die Heidelandzone mit schönen Ausblicken auf das Shira-Plateau.',
},
{
title: 'Tag 3: Shira 1 Camp – Shira 2 Camp',
text: 'Überqueren Sie das landschaftlich beeindruckende Shira-Plateau in einem entspannten Tempo und nutzen Sie die Zeit zur Akklimatisierung.',
},
{
title: 'Tag 4: Shira 2 Camp – Barranco Camp über Lava Tower',
text: 'Steigen Sie zur Akklimatisierung in Richtung Lava Tower auf und steigen Sie anschließend nach Barranco Camp ab.',
},
{
title: 'Tag 5: Barranco Camp – Karanga Camp',
text: 'Überwinden Sie die berühmte Barranco Wall und wandern Sie weiter zum Karanga Camp.',
},
{
title: 'Tag 6: Karanga Camp – Barafu Camp',
text: 'Erreichen Sie das Barafu Camp und bereiten Sie sich auf den Gipfelversuch vor.',
},
{
title: 'Tag 7: Gipfeltag – Uhuru Peak – Mweka Camp',
text: 'Besteigen Sie den Uhuru Peak und steigen Sie anschließend zum Mweka Camp ab.',
},
{
title: 'Tag 8: Mweka Camp – Mweka Gate',
text: 'Steigen Sie durch den Regenwald zum Mweka Gate ab, bevor Sie nach Arusha zurückkehren.',
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
bringTitle: 'Bereiten Sie sich auf Ihre Lemosho-Besteigung vor',

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
'Teilen Sie uns Ihre bevorzugten Reisedaten, Gruppengröße und Klettererfahrung mit. Unsere Bergspezialisten erstellen für Sie einen persönlichen Reiseverlauf und ein Angebot für die Lemosho-Route.',

quote: 'Angebot anfordern',
whatsapp: 'Über WhatsApp chatten',
},

fr: {
heroTitle: 'Route Lemosho',
heroSubtitle:
'Gravissez le Kilimandjaro à travers la forêt tropicale, le magnifique plateau de Shira, le désert alpin et jusqu’au sommet.',
label: 'Trek panoramique avec excellente acclimatation',
mainTitle: 'Ascension du Kilimandjaro par la route Lemosho',

paragraph1:
'La route Lemosho est l’une des routes les plus panoramiques du Kilimandjaro. Elle commence sur le versant ouest, plus calme, et offre une excellente acclimatation ainsi que de très bonnes chances de réussite au sommet.',

paragraph2:
'Le trek traverse la forêt tropicale, les landes, le magnifique plateau de Shira et le désert alpin avant d’atteindre le pic Uhuru, le point culminant de l’Afrique.',

duration: 'Durée',
durationValue: '7–8 jours',
difficulty: 'Difficulté',
difficultyValue: 'Modérée',
from: 'À partir de',
price: '2 050 $US',

highlightsTitle: 'Points forts du trek',

highlights: [
'Départ panoramique et moins fréquenté',
'Excellent profil d’acclimatation',
'Traversée du magnifique plateau de Shira',
'Guides de montagne expérimentés et équipe de soutien',
'Fort potentiel de réussite au sommet',
],

book: 'Réserver ce trek',

itineraryLabel: 'Itinéraire du trek',
itineraryTitle: 'Route Lemosho – 8 jours',

itinerary: [
{
title: 'Jour 1 : Londorossi Gate – Mti Mkubwa Camp',
text: 'Commencez le trek à travers la forêt tropicale occidentale après l’enregistrement à Londorossi Gate. Continuez jusqu’au camp Mti Mkubwa pour votre première nuit.',
},
{
title: 'Jour 2 : Mti Mkubwa Camp – Shira 1 Camp',
text: 'Quittez la forêt tropicale et entrez dans la zone des landes tout en profitant des vues sur le plateau de Shira.',
},
{
title: 'Jour 3 : Shira 1 Camp – Shira 2 Camp',
text: 'Traversez le magnifique plateau de Shira à un rythme détendu, en laissant du temps pour l’acclimatation et les vues sur la montagne.',
},
{
title: 'Jour 4 : Shira 2 Camp – Barranco Camp via Lava Tower',
text: 'Montez vers Lava Tower pour favoriser l’acclimatation avant de descendre vers Barranco Camp.',
},
{
title: 'Jour 5 : Barranco Camp – Karanga Camp',
text: 'Gravissez la célèbre Barranco Wall avant de continuer jusqu’au camp Karanga.',
},
{
title: 'Jour 6 : Karanga Camp – Barafu Camp',
text: 'Atteignez Barafu Camp et préparez-vous pour l’ascension finale.',
},
{
title: 'Jour 7 : Jour du sommet – Uhuru Peak – Mweka Camp',
text: 'Atteignez le sommet Uhuru Peak avant de descendre jusqu’au camp Mweka.',
},
{
title: 'Jour 8 : Mweka Camp – Mweka Gate',
text: 'Descendez à travers la forêt tropicale jusqu’à Mweka Gate avant de retourner à Arusha.',
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
bringTitle: 'Préparez votre ascension de Lemosho',

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
'Indiquez-nous vos dates de voyage, la taille de votre groupe et votre expérience en montagne. Nos spécialistes prépareront un itinéraire personnalisé et un devis pour la route Lemosho.',

quote: 'Demander un devis',
whatsapp: 'Discuter sur WhatsApp',
},

es: {
heroTitle: 'Ruta Lemosho',
heroSubtitle:
'Sube al Kilimanjaro atravesando la selva tropical, la espectacular Meseta de Shira, el desierto alpino y los paisajes de la cumbre.',
label: 'Trekking panorámico con excelente aclimatación',
mainTitle: 'Ascenso al Kilimanjaro por la Ruta Lemosho',

paragraph1:
'La Ruta Lemosho es una de las rutas más espectaculares del Kilimanjaro. Comienza en el tranquilo lado occidental de la montaña y ofrece una excelente aclimatación y altas posibilidades de éxito en la cumbre.',

paragraph2:
'El trekking atraviesa selva tropical, páramos, la hermosa Meseta de Shira y el desierto alpino antes de llegar al Pico Uhuru, el punto más alto de África.',

duration: 'Duración',
durationValue: '7–8 días',
difficulty: 'Dificultad',
difficultyValue: 'Moderada',
from: 'Desde',
price: 'US$2.050',

highlightsTitle: 'Aspectos destacados',

highlights: [
'Inicio panorámico y menos concurrido',
'Excelente perfil de aclimatación',
'Cruce de la hermosa Meseta de Shira',
'Guías de montaña experimentados y equipo de apoyo',
'Alto potencial de éxito en la cumbre',
],

book: 'Reservar este trekking',

itineraryLabel: 'Itinerario del trekking',
itineraryTitle: 'Ruta Lemosho de 8 días',

itinerary: [
{
title: 'Día 1: Londorossi Gate – Mti Mkubwa Camp',
text: 'Comienza el trekking atravesando la selva tropical occidental después del registro en Londorossi Gate. Continúa hasta Mti Mkubwa Camp para pasar la primera noche.',
},
{
title: 'Día 2: Mti Mkubwa Camp – Shira 1 Camp',
text: 'Deja atrás la selva tropical y entra en la zona de páramos disfrutando de las vistas sobre la Meseta de Shira.',
},
{
title: 'Día 3: Shira 1 Camp – Shira 2 Camp',
text: 'Cruza la espectacular Meseta de Shira a un ritmo relajado, dejando tiempo para la aclimatación y las vistas de la montaña.',
},
{
title: 'Día 4: Shira 2 Camp – Barranco Camp vía Lava Tower',
text: 'Sube hacia Lava Tower para favorecer la aclimatación antes de descender hasta Barranco Camp.',
},
{
title: 'Día 5: Barranco Camp – Karanga Camp',
text: 'Sube por la famosa Barranco Wall antes de continuar hasta Karanga Camp.',
},
{
title: 'Día 6: Karanga Camp – Barafu Camp',
text: 'Llega a Barafu Camp y prepárate para el intento de cumbre.',
},
{
title: 'Día 7: Día de cumbre – Uhuru Peak – Mweka Camp',
text: 'Alcanza el Pico Uhuru antes de descender hasta Mweka Camp.',
},
{
title: 'Día 8: Mweka Camp – Mweka Gate',
text: 'Desciende por la selva tropical hasta Mweka Gate antes de regresar a Arusha.',
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
bringTitle: 'Prepárate para tu ascenso por Lemosho',

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
'Cuéntanos tus fechas preferidas de viaje, tamaño del grupo y experiencia en montaña. Nuestros especialistas prepararán un itinerario personalizado y una cotización para la Ruta Lemosho.',

quote: 'Solicitar presupuesto',
whatsapp: 'Chatear por WhatsApp',
},
};

export default function LemoshoRoutePage() {
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
image="/images/lemosho-route.jpg"
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