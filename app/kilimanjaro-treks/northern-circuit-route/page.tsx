'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
en: {
heroTitle: 'Northern Circuit Route',
heroSubtitle:
'Experience Kilimanjaro’s longest and most scenic route with exceptional acclimatization, breathtaking landscapes, and one of the highest summit success rates.',

label: 'Ultimate Kilimanjaro Adventure',
mainTitle: 'Northern Circuit Route Kilimanjaro Climb',

paragraph1:
'The Northern Circuit Route is Kilimanjaro’s longest route, offering outstanding acclimatization and some of the most spectacular scenery on the mountain. It circles the quieter northern slopes, providing panoramic views rarely seen on other routes.',

paragraph2:
'The trek passes through rainforest, moorland, alpine desert, and high mountain terrain before reaching Uhuru Peak. It is ideal for climbers seeking a high chance of reaching the summit while enjoying a peaceful and scenic adventure.',

duration: 'Duration',
durationValue: '9–10 Days',

difficulty: 'Difficulty',
difficultyValue: 'Moderate',

from: 'From',
price: 'US$2,750',

highlightsTitle: 'Trek Highlights',

highlights: [
'Kilimanjaro’s longest and most scenic route',
'Excellent acclimatization profile',
'360° panoramic views around the mountain',
'Very high summit success rate',
'Experienced mountain guides and support crew',
],

book: 'Book This Trek',

itineraryLabel: 'Trek Itinerary',
itineraryTitle: '9-Day Northern Circuit Route Itinerary',

itinerary: [
{
title: 'Day 1: Londorossi Gate to Mti Mkubwa Camp',
text: 'Begin your trek through the lush rainforest after registration at Londorossi Gate. Hike to Mti Mkubwa Camp for your first overnight stay.',
},
{
title: 'Day 2: Mti Mkubwa Camp to Shira 1 Camp',
text: 'Leave the rainforest and enter the heath and moorland zone while enjoying spectacular views across the Shira Plateau.',
},
{
title: 'Day 3: Shira 1 Camp to Shira 2 Camp',
text: 'Cross the scenic Shira Plateau at a relaxed pace, allowing your body to acclimatize while enjoying panoramic mountain views.',
},
{
title: 'Day 4: Shira 2 Camp to Moir Hut',
text: 'Hike through alpine terrain toward Moir Hut with optional acclimatization walks and stunning scenery.',
},
{
title: 'Day 5: Moir Hut to Buffalo Camp',
text: 'Travel along Kilimanjaro’s remote northern slopes with breathtaking views and very few other climbers.',
},
{
title: 'Day 6: Buffalo Camp to Third Cave',
text: 'Continue across the peaceful northern circuit while gradually gaining altitude for better acclimatization.',
},
{
title: 'Day 7: Third Cave to School Hut',
text: 'Reach School Hut, your final base camp before the summit attempt. Rest, prepare your equipment, and sleep early.',
},
{
title: 'Day 8: Summit Day – Uhuru Peak to Mweka Camp',
text: 'Start before midnight, reach Uhuru Peak at sunrise, then descend via Barafu Camp to Mweka Camp for your final overnight stay.',
},
{
title: 'Day 9: Mweka Camp to Mweka Gate',
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
bringTitle: 'Prepare for Your Northern Circuit Climb',

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
'Tell us your preferred travel dates, group size, and climbing experience. Our mountain specialists will prepare a personalized Northern Circuit Route itinerary and quotation for you.',

quote: 'Request a Quote',
whatsapp: 'Chat on WhatsApp',
},

de: {
heroTitle: 'Northern-Circuit-Route',
heroSubtitle:
'Erleben Sie die längste und landschaftlich reizvollste Route des Kilimandscharo mit hervorragender Akklimatisierung, atemberaubenden Landschaften und einer sehr hohen Gipfelerfolgsquote.',

label: 'Ultimatives Kilimandscharo-Abenteuer',
mainTitle: 'Kilimandscharo-Besteigung über die Northern-Circuit-Route',

paragraph1:
'Die Northern-Circuit-Route ist die längste Route am Kilimandscharo und bietet hervorragende Möglichkeiten zur Akklimatisierung sowie einige der spektakulärsten Landschaften des Berges. Sie führt rund um die ruhigeren Nordhänge und bietet Panoramablicke, die auf anderen Routen nur selten zu sehen sind.',

paragraph2:
'Die Wanderung führt durch Regenwald, Heideland, alpine Wüste und hochalpines Gelände bis zum Uhuru Peak. Sie eignet sich ideal für Bergsteiger, die eine hohe Chance auf den Gipfelerfolg mit einer ruhigen und landschaftlich beeindruckenden Tour verbinden möchten.',

duration: 'Dauer',
durationValue: '9–10 Tage',

difficulty: 'Schwierigkeit',
difficultyValue: 'Mittel',

from: 'Ab',
price: 'US$2.750',

highlightsTitle: 'Höhepunkte der Tour',

highlights: [
'Längste und landschaftlich reizvollste Kilimandscharo-Route',
'Hervorragendes Akklimatisierungsprofil',
'360°-Panoramablicke rund um den Berg',
'Sehr hohe Gipfelerfolgsquote',
'Erfahrene Bergführer und unterstützende Crew',
],

book: 'Diese Tour buchen',

itineraryLabel: 'Reiseverlauf',
itineraryTitle: '9-Tage-Northern-Circuit-Route',

itinerary: [
{
title: 'Tag 1: Londorossi Gate – Mti Mkubwa Camp',
text: 'Nach der Registrierung am Londorossi Gate beginnt die Wanderung durch den üppigen Regenwald. Wandern Sie zum Mti Mkubwa Camp für Ihre erste Übernachtung.',
},
{
title: 'Tag 2: Mti Mkubwa Camp – Shira 1 Camp',
text: 'Verlassen Sie den Regenwald und erreichen Sie die Heide- und Moorlandzone mit spektakulären Ausblicken über das Shira-Plateau.',
},
{
title: 'Tag 3: Shira 1 Camp – Shira 2 Camp',
text: 'Überqueren Sie das landschaftlich reizvolle Shira-Plateau in einem entspannten Tempo, damit sich Ihr Körper an die Höhe gewöhnen kann.',
},
{
title: 'Tag 4: Shira 2 Camp – Moir Hut',
text: 'Wandern Sie durch alpine Landschaften zur Moir Hut. Je nach Kondition sind zusätzliche Akklimatisierungswanderungen möglich.',
},
{
title: 'Tag 5: Moir Hut – Buffalo Camp',
text: 'Folgen Sie den abgelegenen Nordhängen des Kilimandscharo und genießen Sie beeindruckende Aussichten mit nur wenigen anderen Bergsteigern.',
},
{
title: 'Tag 6: Buffalo Camp – Third Cave',
text: 'Setzen Sie Ihre Wanderung entlang der ruhigen Northern Circuit Route fort und gewinnen Sie allmählich an Höhe für eine bessere Akklimatisierung.',
},
{
title: 'Tag 7: Third Cave – School Hut',
text: 'Erreichen Sie die School Hut, Ihr letztes Basislager vor dem Gipfelaufstieg. Ruhen Sie sich aus, bereiten Sie Ihre Ausrüstung vor und schlafen Sie früh.',
},
{
title: 'Tag 8: Gipfeltag – Uhuru Peak – Mweka Camp',
text: 'Starten Sie vor Mitternacht, erreichen Sie den Uhuru Peak bei Sonnenaufgang und steigen Sie anschließend über das Barafu Camp zum Mweka Camp ab.',
},
{
title: 'Tag 9: Mweka Camp – Mweka Gate',
text: 'Steigen Sie durch den Regenwald zum Mweka Gate ab, erhalten Sie Ihr Gipfelzertifikat und fahren Sie anschließend zurück nach Arusha.',
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
bringTitle: 'Bereiten Sie sich auf Ihre Northern-Circuit-Besteigung vor',

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
'Teilen Sie uns Ihre bevorzugten Reisedaten, Gruppengröße und Klettererfahrung mit. Unsere Bergspezialisten erstellen für Sie einen persönlichen Reiseverlauf und ein Angebot für die Northern-Circuit-Route.',

quote: 'Angebot anfordern',
whatsapp: 'Über WhatsApp chatten',
},

fr: {
heroTitle: 'Route Northern Circuit',
heroSubtitle:
'Découvrez la route la plus longue et la plus spectaculaire du Kilimandjaro, avec une excellente acclimatation, des paysages magnifiques et un très fort potentiel de réussite au sommet.',

label: 'L’ultime aventure au Kilimandjaro',
mainTitle: 'Ascension du Kilimandjaro par la route Northern Circuit',

paragraph1:
'La route Northern Circuit est la plus longue route du Kilimandjaro. Elle offre une excellente acclimatation et certains des paysages les plus spectaculaires de la montagne. Elle fait le tour des versants nord plus tranquilles et offre des vues panoramiques rarement visibles sur les autres itinéraires.',

paragraph2:
'Le trek traverse la forêt tropicale, les landes, le désert alpin et les paysages de haute montagne avant d’atteindre le pic Uhuru. Il est idéal pour les randonneurs qui recherchent de grandes chances de réussite au sommet tout en profitant d’une aventure paisible et panoramique.',

duration: 'Durée',
durationValue: '9–10 jours',

difficulty: 'Difficulté',
difficultyValue: 'Modérée',

from: 'À partir de',
price: '2 750 $US',

highlightsTitle: 'Points forts du trek',

highlights: [
'Route la plus longue et la plus panoramique du Kilimandjaro',
'Excellent profil d’acclimatation',
'Vues panoramiques à 360° autour de la montagne',
'Très fort taux de réussite au sommet',
'Guides expérimentés et équipe de soutien',
],

book: 'Réserver ce trek',

itineraryLabel: 'Itinéraire du trek',
itineraryTitle: 'Route Northern Circuit – 9 jours',

itinerary: [
{
title: 'Jour 1 : Londorossi Gate – Mti Mkubwa Camp',
text: 'Après l’enregistrement à Londorossi Gate, commencez votre trek à travers la forêt tropicale luxuriante jusqu’à Mti Mkubwa Camp pour votre première nuit.',
},
{
title: 'Jour 2 : Mti Mkubwa Camp – Shira 1 Camp',
text: 'Quittez la forêt tropicale et entrez dans la zone des landes avec de magnifiques vues sur le plateau de Shira.',
},
{
title: 'Jour 3 : Shira 1 Camp – Shira 2 Camp',
text: 'Traversez le magnifique plateau de Shira à un rythme tranquille afin de favoriser votre acclimatation tout en profitant des vues panoramiques.',
},
{
title: 'Jour 4 : Shira 2 Camp – Moir Hut',
text: 'Traversez les paysages alpins jusqu’à Moir Hut avec la possibilité de faire des randonnées supplémentaires pour améliorer l’acclimatation.',
},
{
title: 'Jour 5 : Moir Hut – Buffalo Camp',
text: 'Continuez le long des versants nord isolés du Kilimandjaro avec des vues magnifiques et très peu d’autres randonneurs.',
},
{
title: 'Jour 6 : Buffalo Camp – Third Cave',
text: 'Poursuivez votre traversée du Northern Circuit en gagnant progressivement de l’altitude pour une meilleure acclimatation.',
},
{
title: 'Jour 7 : Third Cave – School Hut',
text: 'Atteignez School Hut, votre dernier camp de base avant l’ascension. Reposez-vous, préparez votre équipement et couchez-vous tôt.',
},
{
title: 'Jour 8 : Jour du sommet – Uhuru Peak – Mweka Camp',
text: 'Commencez avant minuit, atteignez le pic Uhuru au lever du soleil puis redescendez par Barafu Camp jusqu’à Mweka Camp.',
},
{
title: 'Jour 9 : Mweka Camp – Mweka Gate',
text: 'Descendez à travers la forêt tropicale jusqu’à Mweka Gate, recevez votre certificat de sommet puis retournez à Arusha.',
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
bringTitle: 'Préparez votre ascension du Northern Circuit',

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
'Indiquez-nous vos dates de voyage, la taille de votre groupe et votre expérience en montagne. Nos spécialistes prépareront un itinéraire personnalisé et un devis pour la route Northern Circuit.',

quote: 'Demander un devis',
whatsapp: 'Discuter sur WhatsApp',
},

es: {
heroTitle: 'Ruta Northern Circuit',
heroSubtitle:
'Vive la ruta más larga y espectacular del Kilimanjaro, con una excelente aclimatación, paisajes impresionantes y una de las tasas de éxito en la cumbre más altas.',

label: 'La aventura definitiva del Kilimanjaro',
mainTitle: 'Ascenso al Kilimanjaro por la Ruta Northern Circuit',

paragraph1:
'La Ruta Northern Circuit es la ruta más larga del Kilimanjaro y ofrece una excelente aclimatación y algunos de los paisajes más espectaculares de la montaña. Rodea las tranquilas laderas del norte y ofrece vistas panorámicas que rara vez se encuentran en otras rutas.',

paragraph2:
'El trekking atraviesa selva tropical, páramos, desierto alpino y terrenos de alta montaña antes de llegar al Pico Uhuru. Es ideal para quienes buscan una alta posibilidad de alcanzar la cumbre mientras disfrutan de una aventura tranquila y panorámica.',

duration: 'Duración',
durationValue: '9–10 días',

difficulty: 'Dificultad',
difficultyValue: 'Moderada',

from: 'Desde',
price: 'US$2.750',

highlightsTitle: 'Aspectos destacados',

highlights: [
'Ruta más larga y espectacular del Kilimanjaro',
'Excelente perfil de aclimatación',
'Vistas panorámicas de 360° alrededor de la montaña',
'Muy alta tasa de éxito en la cumbre',
'Guías de montaña experimentados y equipo de apoyo',
],

book: 'Reservar este trekking',

itineraryLabel: 'Itinerario del trekking',
itineraryTitle: 'Ruta Northern Circuit de 9 días',

itinerary: [
{
title: 'Día 1: Londorossi Gate – Mti Mkubwa Camp',
text: 'Después del registro en Londorossi Gate, comienza el trekking por la exuberante selva tropical hasta Mti Mkubwa Camp para pasar la primera noche.',
},
{
title: 'Día 2: Mti Mkubwa Camp – Shira 1 Camp',
text: 'Deja atrás la selva tropical y entra en la zona de páramos disfrutando de espectaculares vistas sobre la Meseta de Shira.',
},
{
title: 'Día 3: Shira 1 Camp – Shira 2 Camp',
text: 'Cruza la hermosa Meseta de Shira a un ritmo tranquilo para favorecer la aclimatación mientras disfrutas de vistas panorámicas de la montaña.',
},
{
title: 'Día 4: Shira 2 Camp – Moir Hut',
text: 'Camina por terrenos alpinos hacia Moir Hut con posibles caminatas adicionales de aclimatación y paisajes impresionantes.',
},
{
title: 'Día 5: Moir Hut – Buffalo Camp',
text: 'Continúa por las remotas laderas del norte del Kilimanjaro con vistas espectaculares y muy pocos excursionistas.',
},
{
title: 'Día 6: Buffalo Camp – Third Cave',
text: 'Continúa por el tranquilo Northern Circuit mientras ganas altitud gradualmente para mejorar la aclimatación.',
},
{
title: 'Día 7: Third Cave – School Hut',
text: 'Llega a School Hut, tu último campamento base antes del ascenso a la cumbre. Descansa, prepara tu equipo y duerme temprano.',
},
{
title: 'Día 8: Día de cumbre – Pico Uhuru – Mweka Camp',
text: 'Comienza antes de medianoche, llega al Pico Uhuru al amanecer y después desciende por Barafu Camp hasta Mweka Camp.',
},
{
title: 'Día 9: Mweka Camp – Mweka Gate',
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
bringTitle: 'Prepárate para tu ascenso por Northern Circuit',

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
'Cuéntanos tus fechas preferidas de viaje, tamaño del grupo y experiencia en montaña. Nuestros especialistas prepararán un itinerario personalizado y una cotización para la Ruta Northern Circuit.',

quote: 'Solicitar presupuesto',
whatsapp: 'Chatear por WhatsApp',
},
};

export default function NorthernRoutePage() {
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
image="/images/northern-circuit-route.jpg"
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

{/* FINAL CTA */}
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