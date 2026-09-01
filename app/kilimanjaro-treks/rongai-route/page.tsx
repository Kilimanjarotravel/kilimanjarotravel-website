'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
en: {
heroTitle: 'Rongai Route',
heroSubtitle:
'Climb Kilimanjaro via the quiet Rongai Route, approaching the mountain from the north with beautiful scenery and excellent summit success.',
label: 'Quiet Northern Kilimanjaro Route',
mainTitle: 'Rongai Route Kilimanjaro Climb',

paragraph1:
'The Rongai Route approaches Mount Kilimanjaro from the northern side near the Kenyan border. It is quieter than the southern routes and offers beautiful wilderness scenery with excellent wildlife viewing opportunities at lower elevations.',

paragraph2:
'The route crosses moorland, alpine desert, and high mountain terrain before reaching Uhuru Peak. It is ideal for climbers seeking a less crowded trail, peaceful surroundings, and a gradual ascent.',

duration: 'Duration',
durationValue: '6–7 Days',
difficulty: 'Difficulty',
difficultyValue: 'Moderate',
from: 'From',
price: 'US$1,950',

highlightsTitle: 'Trek Highlights',

highlights: [
'Only route approaching Kilimanjaro from the north',
'Less crowded and peaceful trail',
'Excellent wildlife viewing near the mountain',
'Experienced mountain guides and support crew',
'High summit success rate with gradual ascent',
],

book: 'Book This Trek',

itineraryLabel: 'Trek Itinerary',
itineraryTitle: '7-Day Rongai Route Itinerary',

itinerary: [
{
title: 'Day 1: Rongai Gate to Simba Camp',
text: 'After registration at Rongai Gate, begin your trek through beautiful forest where wildlife is occasionally spotted before reaching Simba Camp for your overnight stay.',
},
{
title: 'Day 2: Simba Camp to Second Cave',
text: 'Continue through open moorland with spectacular views of Kibo Peak while gradually gaining altitude to Second Cave Camp.',
},
{
title: 'Day 3: Second Cave to Kikelewa Camp',
text: 'The trail becomes steeper as you hike across alpine scenery toward Kikelewa Camp with excellent views of Mawenzi Peak.',
},
{
title: 'Day 4: Kikelewa Camp to Mawenzi Tarn',
text: 'Enjoy a shorter trekking day to Mawenzi Tarn where you have time to rest and acclimatize beneath the dramatic cliffs of Mawenzi.',
},
{
title: 'Day 5: Mawenzi Tarn to Kibo Hut',
text: 'Cross the saddle between Mawenzi and Kibo to reach Kibo Hut, your base camp before the midnight summit attempt.',
},
{
title:
'Day 6: Kibo Hut to Uhuru Peak and Descend to Horombo Hut',
text: 'Start the summit climb before midnight, reach Uhuru Peak at sunrise, then descend to Horombo Hut for a well-earned overnight rest.',
},
{
title: 'Day 7: Horombo Hut to Marangu Gate',
text: 'Descend through moorland and rainforest to Marangu Gate, receive your summit certificate, and transfer back to Arusha.',
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
bringTitle: 'Prepare for Your Rongai Climb',

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
'Tell us your preferred travel dates, group size, and climbing experience. Our mountain specialists will prepare a personalized Rongai Route itinerary and quotation for you.',

quote: 'Request a Quote',
whatsapp: 'Chat on WhatsApp',
},

de: {
heroTitle: 'Rongai-Route',
heroSubtitle:
'Besteigen Sie den Kilimandscharo über die ruhige Rongai-Route von Norden aus – mit wunderschönen Landschaften und hervorragenden Gipfelchancen.',
label: 'Ruhige nördliche Kilimandscharo-Route',
mainTitle: 'Kilimandscharo-Besteigung über die Rongai-Route',

paragraph1:
'Die Rongai-Route nähert sich dem Kilimandscharo von der Nordseite nahe der kenianischen Grenze. Sie ist ruhiger als die südlichen Routen und bietet wunderschöne Wildnislandschaften sowie gute Möglichkeiten zur Tierbeobachtung in den niedrigeren Höhenlagen.',

paragraph2:
'Die Route führt durch Heideland, alpine Wüste und hochalpines Gelände bis zum Uhuru Peak. Sie eignet sich ideal für Bergsteiger, die einen weniger überfüllten Weg, ruhige Umgebung und einen allmählichen Aufstieg suchen.',

duration: 'Dauer',
durationValue: '6–7 Tage',
difficulty: 'Schwierigkeit',
difficultyValue: 'Mittel',
from: 'Ab',
price: 'US$1.950',

highlightsTitle: 'Höhepunkte der Tour',

highlights: [
'Einzige Route zum Kilimandscharo von Norden',
'Ruhiger und weniger überfüllter Wanderweg',
'Gute Möglichkeiten zur Tierbeobachtung in den unteren Regionen',
'Erfahrene Bergführer und unterstützende Crew',
'Hohe Gipfelerfolgsquote durch einen allmählichen Aufstieg',
],

book: 'Diese Tour buchen',

itineraryLabel: 'Reiseverlauf',
itineraryTitle: '7-Tage-Rongai-Route',

itinerary: [
{
title: 'Tag 1: Rongai Gate – Simba Camp',
text: 'Nach der Registrierung am Rongai Gate beginnt die Wanderung durch einen wunderschönen Wald, in dem gelegentlich Wildtiere beobachtet werden können, bevor Sie das Simba Camp erreichen.',
},
{
title: 'Tag 2: Simba Camp – Second Cave',
text: 'Wandern Sie weiter durch offenes Heideland mit spektakulären Ausblicken auf den Kibo Peak und steigen Sie allmählich zum Second Cave Camp auf.',
},
{
title: 'Tag 3: Second Cave – Kikelewa Camp',
text: 'Der Weg wird steiler, während Sie durch alpine Landschaften zum Kikelewa Camp wandern und dabei schöne Ausblicke auf den Mawenzi Peak genießen.',
},
{
title: 'Tag 4: Kikelewa Camp – Mawenzi Tarn',
text: 'Genießen Sie einen kürzeren Wandertag zum Mawenzi Tarn. Hier haben Sie Zeit zum Ausruhen und zur Akklimatisierung unterhalb der beeindruckenden Mawenzi-Klippen.',
},
{
title: 'Tag 5: Mawenzi Tarn – Kibo Hut',
text: 'Überqueren Sie den Sattel zwischen Mawenzi und Kibo und erreichen Sie die Kibo Hut, Ihr Basislager vor dem Aufstieg zum Gipfel um Mitternacht.',
},
{
title:
'Tag 6: Kibo Hut – Uhuru Peak – Horombo Hut',
text: 'Beginnen Sie den Gipfelaufstieg vor Mitternacht, erreichen Sie den Uhuru Peak bei Sonnenaufgang und steigen Sie anschließend zur Horombo Hut ab.',
},
{
title: 'Tag 7: Horombo Hut – Marangu Gate',
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
bringTitle: 'Bereiten Sie sich auf Ihre Rongai-Besteigung vor',

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
'Teilen Sie uns Ihre bevorzugten Reisedaten, Gruppengröße und Klettererfahrung mit. Unsere Bergspezialisten erstellen für Sie einen persönlichen Reiseverlauf und ein Angebot für die Rongai-Route.',

quote: 'Angebot anfordern',
whatsapp: 'Über WhatsApp chatten',
},

fr: {
heroTitle: 'Route Rongai',
heroSubtitle:
'Gravissez le Kilimandjaro par la paisible route Rongai, en approchant la montagne par le nord avec de magnifiques paysages et d’excellentes chances d’atteindre le sommet.',
label: 'Route nordique paisible du Kilimandjaro',
mainTitle: 'Ascension du Kilimandjaro par la route Rongai',

paragraph1:
'La route Rongai approche le mont Kilimandjaro par le nord, près de la frontière kenyane. Elle est moins fréquentée que les routes du sud et offre de magnifiques paysages sauvages ainsi que de bonnes possibilités d’observer la faune aux altitudes plus basses.',

paragraph2:
'L’itinéraire traverse les landes, le désert alpin et les paysages de haute montagne avant d’atteindre le pic Uhuru. Il est idéal pour les randonneurs recherchant un sentier moins fréquenté, un environnement paisible et une ascension progressive.',

duration: 'Durée',
durationValue: '6–7 jours',
difficulty: 'Difficulté',
difficultyValue: 'Modérée',
from: 'À partir de',
price: '1 950 $US',

highlightsTitle: 'Points forts du trek',

highlights: [
'Seule route approchant le Kilimandjaro par le nord',
'Sentier paisible et moins fréquenté',
'Excellentes possibilités d’observer la faune près de la montagne',
'Guides de montagne expérimentés et équipe de soutien',
'Fort potentiel de réussite grâce à une ascension progressive',
],

book: 'Réserver ce trek',

itineraryLabel: 'Itinéraire du trek',
itineraryTitle: 'Route Rongai – 7 jours',

itinerary: [
{
title: 'Jour 1 : Rongai Gate – Simba Camp',
text: 'Après l’enregistrement à Rongai Gate, commencez votre trek à travers une belle forêt où vous pourrez parfois observer des animaux sauvages avant d’atteindre Simba Camp.',
},
{
title: 'Jour 2 : Simba Camp – Second Cave',
text: 'Continuez à travers les landes ouvertes avec de magnifiques vues sur le pic Kibo tout en gagnant progressivement de l’altitude jusqu’au Second Cave Camp.',
},
{
title: 'Jour 3 : Second Cave – Kikelewa Camp',
text: 'Le sentier devient plus escarpé en traversant les paysages alpins vers Kikelewa Camp, avec de belles vues sur le pic Mawenzi.',
},
{
title: 'Jour 4 : Kikelewa Camp – Mawenzi Tarn',
text: 'Profitez d’une journée de randonnée plus courte jusqu’à Mawenzi Tarn, où vous pourrez vous reposer et vous acclimater sous les impressionnantes falaises de Mawenzi.',
},
{
title: 'Jour 5 : Mawenzi Tarn – Kibo Hut',
text: 'Traversez le col entre Mawenzi et Kibo pour atteindre Kibo Hut, votre camp de base avant l’ascension du sommet à minuit.',
},
{
title:
'Jour 6 : Kibo Hut – Uhuru Peak – Horombo Hut',
text: 'Commencez l’ascension avant minuit, atteignez le pic Uhuru au lever du soleil, puis redescendez jusqu’à Horombo Hut pour une nuit de repos bien méritée.',
},
{
title: 'Jour 7 : Horombo Hut – Marangu Gate',
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
bringTitle: 'Préparez votre ascension de Rongai',

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
'Indiquez-nous vos dates de voyage, la taille de votre groupe et votre expérience en montagne. Nos spécialistes prépareront un itinéraire personnalisé et un devis pour la route Rongai.',

quote: 'Demander un devis',
whatsapp: 'Discuter sur WhatsApp',
},

es: {
heroTitle: 'Ruta Rongai',
heroSubtitle:
'Sube al Kilimanjaro por la tranquila Ruta Rongai, acercándote a la montaña desde el norte con hermosos paisajes y excelentes posibilidades de alcanzar la cumbre.',
label: 'Ruta tranquila del norte del Kilimanjaro',
mainTitle: 'Ascenso al Kilimanjaro por la Ruta Rongai',

paragraph1:
'La Ruta Rongai se acerca al Monte Kilimanjaro desde el lado norte, cerca de la frontera con Kenia. Es más tranquila que las rutas del sur y ofrece hermosos paisajes naturales y buenas oportunidades para observar fauna en las zonas más bajas.',

paragraph2:
'La ruta atraviesa páramos, desierto alpino y terrenos de alta montaña antes de llegar al Pico Uhuru. Es ideal para viajeros que buscan un sendero menos concurrido, un entorno tranquilo y un ascenso gradual.',

duration: 'Duración',
durationValue: '6–7 días',
difficulty: 'Dificultad',
difficultyValue: 'Moderada',
from: 'Desde',
price: 'US$1.950',

highlightsTitle: 'Aspectos destacados',

highlights: [
'Única ruta que se acerca al Kilimanjaro desde el norte',
'Sendero tranquilo y menos concurrido',
'Excelentes oportunidades para observar fauna cerca de la montaña',
'Guías de montaña experimentados y equipo de apoyo',
'Alta posibilidad de alcanzar la cumbre gracias al ascenso gradual',
],

book: 'Reservar este trekking',

itineraryLabel: 'Itinerario del trekking',
itineraryTitle: 'Ruta Rongai de 7 días',

itinerary: [
{
title: 'Día 1: Rongai Gate – Simba Camp',
text: 'Después del registro en Rongai Gate, comienza el trekking atravesando un hermoso bosque donde ocasionalmente se puede observar fauna antes de llegar a Simba Camp.',
},
{
title: 'Día 2: Simba Camp – Second Cave',
text: 'Continúa por páramos abiertos con espectaculares vistas del Pico Kibo mientras ganas altitud gradualmente hasta Second Cave Camp.',
},
{
title: 'Día 3: Second Cave – Kikelewa Camp',
text: 'El sendero se vuelve más empinado mientras atraviesas paisajes alpinos hacia Kikelewa Camp, disfrutando de excelentes vistas del Pico Mawenzi.',
},
{
title: 'Día 4: Kikelewa Camp – Mawenzi Tarn',
text: 'Disfruta de un día de trekking más corto hasta Mawenzi Tarn, donde tendrás tiempo para descansar y aclimatarte bajo los impresionantes acantilados de Mawenzi.',
},
{
title: 'Día 5: Mawenzi Tarn – Kibo Hut',
text: 'Cruza el paso entre Mawenzi y Kibo para llegar a Kibo Hut, tu campamento base antes del ascenso a la cumbre a medianoche.',
},
{
title:
'Día 6: Kibo Hut – Pico Uhuru – Horombo Hut',
text: 'Comienza el ascenso antes de medianoche, llega al Pico Uhuru al amanecer y desciende después hasta Horombo Hut para descansar.',
},
{
title: 'Día 7: Horombo Hut – Marangu Gate',
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
bringTitle: 'Prepárate para tu ascenso por Rongai',

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
'Cuéntanos tus fechas preferidas de viaje, tamaño del grupo y experiencia en montaña. Nuestros especialistas prepararán un itinerario personalizado y una cotización para la Ruta Rongai.',

quote: 'Solicitar presupuesto',
whatsapp: 'Chatear por WhatsApp',
},
};

export default function RongaiRoutePage() {
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
image="/images/rongai-route.jpg"
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