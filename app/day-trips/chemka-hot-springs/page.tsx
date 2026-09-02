'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
en: {
heroTitle: 'Chemka Hot Springs Day Trip',
heroSubtitle:
'Swim, relax and enjoy the clear turquoise waters of one of northern Tanzania’s most beautiful natural springs.',
overviewLabel: 'TOUR OVERVIEW',
overviewTitle: 'A Peaceful Tropical Escape',
overview1:
'Chemka Hot Springs, also known as Kikuletwa Springs, is a beautiful natural oasis with clear turquoise water, tropical trees and a peaceful atmosphere.',
overview2:
'This private day trip is perfect for travelers who want to relax, swim and enjoy nature away from the busy city. Despite the name, the water is pleasantly warm rather than hot.',
itineraryTitle: 'Full Day Itinerary',

itinerary: [
{
time: '08:00',
title: 'Hotel Pickup',
text: 'Pickup from your hotel in Arusha and begin the drive toward Chemka Hot Springs.',
},
{
time: '10:00',
title: 'Arrival at Chemka Hot Springs',
text: 'Arrive at the beautiful natural springs, surrounded by fig trees and tropical vegetation.',
},
{
time: '10:30',
title: 'Swimming and Relaxation',
text: 'Enjoy swimming in the clear turquoise water, relax beneath the trees and take memorable photos.',
},
{
time: '13:00',
title: 'Picnic Lunch',
text: 'Enjoy a freshly prepared picnic lunch near the springs.',
},
{
time: '14:00',
title: 'Free Time at the Springs',
text: 'Continue swimming, relaxing or exploring the peaceful surroundings at your own pace.',
},
{
time: '16:00',
title: 'Return to Arusha',
text: 'Leave Chemka Hot Springs and drive back to your hotel in Arusha.',
},
],

tripDetails: 'Trip Details',
duration: 'Duration',
durationValue: 'Full Day',
departure: 'Departure',
departureValue: 'Arusha',
tourType: 'Tour Type',
tourTypeValue: 'Private Day Trip',
bestTime: 'Best Time',
bestTimeValue: 'All Year',
activityLevel: 'Activity Level',
activityLevelValue: 'Easy',
book: 'Book This Tour',

includedTitle: 'What Is Included',
included: [
'Hotel pickup and drop-off',
'Private transport',
'Professional English-speaking guide',
'Chemka entrance fees',
'Picnic lunch',
'Drinking water',
],

excludedTitle: 'What Is Excluded',
excluded: [
'Flights',
'Travel insurance',
'Tips and gratuities',
'Personal expenses',
'Alcoholic drinks',
],

bringLabel: 'WHAT TO BRING',
bringTitle: 'Prepare for Your Chemka Day Trip',
whatToBring: [
'Swimwear',
'Towel',
'Water shoes or sandals',
'Sun hat and sunscreen',
'Camera',
'Personal medication',
],

ctaTitle: 'Ready for Your Chemka Experience?',
ctaText:
'Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private Chemka Hot Springs day trip.',
quote: 'Request a Quote',
whatsapp: 'Chat on WhatsApp',
},

de: {
heroTitle: 'Chemka Hot Springs Tagesausflug',
heroSubtitle:
'Schwimmen, entspannen und das klare türkisfarbene Wasser einer der schönsten natürlichen Quellen im Norden Tansanias genießen.',
overviewLabel: 'TOURÜBERSICHT',
overviewTitle: 'Eine friedliche tropische Auszeit',
overview1:
'Die Chemka Hot Springs, auch bekannt als Kikuletwa Springs, sind eine wunderschöne natürliche Oase mit klarem türkisfarbenem Wasser, tropischen Bäumen und einer ruhigen Atmosphäre.',
overview2:
'Dieser private Tagesausflug ist ideal für Reisende, die sich entspannen, schwimmen und die Natur abseits der belebten Stadt genießen möchten. Trotz des Namens ist das Wasser angenehm warm und nicht heiß.',
itineraryTitle: 'Ganztägiger Reiseplan',

itinerary: [
{
time: '08:00',
title: 'Abholung vom Hotel',
text: 'Abholung von Ihrem Hotel in Arusha und Fahrt zu den Chemka Hot Springs.',
},
{
time: '10:00',
title: 'Ankunft an den Chemka Hot Springs',
text: 'Ankunft an den wunderschönen natürlichen Quellen, umgeben von Feigenbäumen und tropischer Vegetation.',
},
{
time: '10:30',
title: 'Schwimmen und Entspannen',
text: 'Genießen Sie das Schwimmen im klaren türkisfarbenen Wasser, entspannen Sie unter den Bäumen und machen Sie schöne Erinnerungsfotos.',
},
{
time: '13:00',
title: 'Picknick-Mittagessen',
text: 'Genießen Sie ein frisch zubereitetes Picknick-Mittagessen in der Nähe der Quellen.',
},
{
time: '14:00',
title: 'Freizeit an den Quellen',
text: 'Schwimmen, entspannen oder die friedliche Umgebung in Ihrem eigenen Tempo erkunden.',
},
{
time: '16:00',
title: 'Rückfahrt nach Arusha',
text: 'Abfahrt von den Chemka Hot Springs und Rückfahrt zu Ihrem Hotel in Arusha.',
},
],

tripDetails: 'Reisedetails',
duration: 'Dauer',
durationValue: 'Ganzer Tag',
departure: 'Abfahrt',
departureValue: 'Arusha',
tourType: 'Tourart',
tourTypeValue: 'Privater Tagesausflug',
bestTime: 'Beste Reisezeit',
bestTimeValue: 'Ganzjährig',
activityLevel: 'Aktivitätslevel',
activityLevelValue: 'Leicht',
book: 'Diese Tour buchen',

includedTitle: 'Im Preis enthalten',
included: [
'Abholung und Rücktransfer zum Hotel',
'Privater Transport',
'Professioneller englischsprachiger Guide',
'Eintrittsgebühren für Chemka',
'Picknick-Mittagessen',
'Trinkwasser',
],

excludedTitle: 'Nicht im Preis enthalten',
excluded: [
'Flüge',
'Reiseversicherung',
'Trinkgelder',
'Persönliche Ausgaben',
'Alkoholische Getränke',
],

bringLabel: 'WAS SIE MITBRINGEN SOLLTEN',
bringTitle: 'Bereiten Sie sich auf Ihren Chemka-Tagesausflug vor',
whatToBring: [
'Badebekleidung',
'Handtuch',
'Wasserschuhe oder Sandalen',
'Sonnenhut und Sonnencreme',
'Kamera',
'Persönliche Medikamente',
],

ctaTitle: 'Bereit für Ihr Chemka-Erlebnis?',
ctaText:
'Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihren privaten Tagesausflug zu den Chemka Hot Springs.',
quote: 'Angebot anfragen',
whatsapp: 'Über WhatsApp chatten',
},

fr: {
heroTitle: 'Excursion d’une journée aux sources chaudes de Chemka',
heroSubtitle:
'Baignez-vous, détendez-vous et profitez des eaux turquoise et cristallines de l’une des plus belles sources naturelles du nord de la Tanzanie.',
overviewLabel: 'APERÇU DU CIRCUIT',
overviewTitle: 'Une escapade tropicale paisible',
overview1:
'Les sources de Chemka, également connues sous le nom de sources de Kikuletwa, sont une magnifique oasis naturelle aux eaux turquoise, entourée d’arbres tropicaux et d’une atmosphère paisible.',
overview2:
'Cette excursion privée est idéale pour les voyageurs qui souhaitent se détendre, nager et profiter de la nature loin de l’agitation de la ville. Malgré leur nom, les eaux sont agréablement chaudes et non brûlantes.',
itineraryTitle: 'Itinéraire d’une journée complète',

itinerary: [
{
time: '08:00',
title: 'Prise en charge à l’hôtel',
text: 'Prise en charge à votre hôtel à Arusha et départ vers les sources de Chemka.',
},
{
time: '10:00',
title: 'Arrivée aux sources de Chemka',
text: 'Arrivée aux magnifiques sources naturelles entourées de figuiers et de végétation tropicale.',
},
{
time: '10:30',
title: 'Baignade et détente',
text: 'Profitez d’une baignade dans les eaux turquoise, détendez-vous sous les arbres et prenez de belles photos souvenirs.',
},
{
time: '13:00',
title: 'Déjeuner pique-nique',
text: 'Savourez un déjeuner pique-nique fraîchement préparé près des sources.',
},
{
time: '14:00',
title: 'Temps libre aux sources',
text: 'Continuez à nager, vous détendre ou explorer les environs paisibles à votre rythme.',
},
{
time: '16:00',
title: 'Retour à Arusha',
text: 'Départ de Chemka Hot Springs et retour à votre hôtel à Arusha.',
},
],

tripDetails: 'Détails du voyage',
duration: 'Durée',
durationValue: 'Journée complète',
departure: 'Départ',
departureValue: 'Arusha',
tourType: 'Type de circuit',
tourTypeValue: 'Excursion privée d’une journée',
bestTime: 'Meilleure période',
bestTimeValue: 'Toute l’année',
activityLevel: 'Niveau d’activité',
activityLevelValue: 'Facile',
book: 'Réserver cette excursion',

includedTitle: 'Ce qui est inclus',
included: [
'Prise en charge et retour à l’hôtel',
'Transport privé',
'Guide professionnel anglophone',
'Frais d’entrée à Chemka',
'Déjeuner pique-nique',
'Eau potable',
],

excludedTitle: 'Ce qui n’est pas inclus',
excluded: [
'Vols',
'Assurance voyage',
'Pourboires',
'Dépenses personnelles',
'Boissons alcoolisées',
],

bringLabel: 'QUE FAUT-IL APPORTER ?',
bringTitle: 'Préparez votre excursion à Chemka',
whatToBring: [
'Maillot de bain',
'Serviette',
'Chaussures d’eau ou sandales',
'Chapeau et crème solaire',
'Appareil photo',
'Médicaments personnels',
],

ctaTitle: 'Prêt pour votre expérience à Chemka ?',
ctaText:
'Contactez Kilimanjaro Travel dès aujourd’hui et recevez un devis personnalisé pour votre excursion privée d’une journée aux sources de Chemka.',
quote: 'Demander un devis',
whatsapp: 'Discuter sur WhatsApp',
},

es: {
heroTitle: 'Excursión de un día a las aguas termales de Chemka',
heroSubtitle:
'Nada, relájate y disfruta de las aguas turquesas y cristalinas de uno de los manantiales naturales más hermosos del norte de Tanzania.',
overviewLabel: 'DESCRIPCIÓN DEL TOUR',
overviewTitle: 'Una escapada tropical y tranquila',
overview1:
'Las aguas termales de Chemka, también conocidas como Kikuletwa Springs, son un hermoso oasis natural de aguas turquesas, árboles tropicales y un ambiente tranquilo.',
overview2:
'Esta excursión privada de un día es perfecta para viajeros que desean relajarse, nadar y disfrutar de la naturaleza lejos del ajetreo de la ciudad. A pesar de su nombre, el agua es agradablemente templada y no caliente.',
itineraryTitle: 'Itinerario de día completo',

itinerary: [
{
time: '08:00',
title: 'Recogida en el hotel',
text: 'Recogida en su hotel en Arusha y comienzo del viaje hacia las aguas termales de Chemka.',
},
{
time: '10:00',
title: 'Llegada a las aguas termales de Chemka',
text: 'Llegada a los hermosos manantiales naturales, rodeados de higueras y vegetación tropical.',
},
{
time: '10:30',
title: 'Natación y relajación',
text: 'Disfrute de un baño en las aguas turquesas, relájese bajo los árboles y tome fotografías inolvidables.',
},
{
time: '13:00',
title: 'Almuerzo tipo picnic',
text: 'Disfrute de un almuerzo tipo picnic recién preparado cerca de los manantiales.',
},
{
time: '14:00',
title: 'Tiempo libre en los manantiales',
text: 'Continúe nadando, relajándose o explorando los tranquilos alrededores a su propio ritmo.',
},
{
time: '16:00',
title: 'Regreso a Arusha',
text: 'Salida de Chemka Hot Springs y regreso a su hotel en Arusha.',
},
],

tripDetails: 'Detalles del viaje',
duration: 'Duración',
durationValue: 'Día completo',
departure: 'Salida',
departureValue: 'Arusha',
tourType: 'Tipo de tour',
tourTypeValue: 'Excursión privada de un día',
bestTime: 'Mejor época',
bestTimeValue: 'Todo el año',
activityLevel: 'Nivel de actividad',
activityLevelValue: 'Fácil',
book: 'Reservar este tour',

includedTitle: 'Qué está incluido',
included: [
'Recogida y regreso al hotel',
'Transporte privado',
'Guía profesional de habla inglesa',
'Entradas a Chemka',
'Almuerzo tipo picnic',
'Agua potable',
],

excludedTitle: 'Qué no está incluido',
excluded: [
'Vuelos',
'Seguro de viaje',
'Propinas',
'Gastos personales',
'Bebidas alcohólicas',
],

bringLabel: 'QUÉ LLEVAR',
bringTitle: 'Prepárate para tu excursión a Chemka',
whatToBring: [
'Traje de baño',
'Toalla',
'Zapatos de agua o sandalias',
'Sombrero y protector solar',
'Cámara',
'Medicamentos personales',
],

ctaTitle: '¿Listo para vivir la experiencia Chemka?',
ctaText:
'Contacta hoy con Kilimanjaro Travel y recibe un presupuesto personalizado para tu excursión privada de un día a las aguas termales de Chemka.',
quote: 'Solicitar presupuesto',
whatsapp: 'Chatear por WhatsApp',
},
};

export default function ChemkaHotSpringsPage() {
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
image="/images/chemka-six.jpg"
/>

<section className="py-20">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-12 md:grid-cols-3">
<div className="md:col-span-2">
<p className="font-bold text-gold">{t.overviewLabel}</p>

<h2 className="section-title mt-3">
{t.overviewTitle}
</h2>

<p className="mt-6 text-lg leading-8 text-black/70">
{t.overview1}
</p>

<p className="mt-4 text-lg leading-8 text-black/70">
{t.overview2}
</p>

<h2 className="mt-12 text-3xl font-bold text-forest">
{t.itineraryTitle}
</h2>

<div className="mt-8 space-y-6">
{t.itinerary.map((item) => (
<div
key={item.time}
className="rounded-3xl bg-cream p-6 shadow-lg"
>
<p className="font-bold text-gold">{item.time}</p>

<h3 className="mt-2 text-xl font-bold text-forest">
{item.title}
</h3>

<p className="mt-3 leading-7 text-black/70">
{item.text}
</p>
</div>
))}
</div>
</div>

<aside className="h-fit rounded-3xl bg-forest p-8 text-white shadow-xl">
<h2 className="text-2xl font-bold">{t.tripDetails}</h2>

<div className="mt-6 space-y-4">
<p>
<strong>{t.duration}:</strong> {t.durationValue}
</p>
<p>
<strong>{t.departure}:</strong> {t.departureValue}
</p>
<p>
<strong>{t.tourType}:</strong> {t.tourTypeValue}
</p>
<p>
<strong>{t.bestTime}:</strong> {t.bestTimeValue}
</p>
<p>
<strong>{t.activityLevel}:</strong> {t.activityLevelValue}
</p>
</div>

<Link
href="/booking"
className="mt-8 inline-block w-full rounded-full bg-gold px-6 py-3 text-center font-bold text-white"
>
{t.book}
</Link>
</aside>
</div>
</div>
</section>

<section className="bg-cream py-20">
<div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
<div className="rounded-3xl bg-white p-8 shadow-xl">
<h2 className="text-3xl font-bold text-forest">
{t.includedTitle}
</h2>

<ul className="mt-6 space-y-3">
{t.included.map((item) => (
<li key={item}>✅ {item}</li>
))}
</ul>
</div>

<div className="rounded-3xl bg-white p-8 shadow-xl">
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

<section className="py-20">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-8 md:grid-cols-2 md:items-center">
<div className="overflow-hidden rounded-3xl shadow-xl">
<img
src="/images/chemka-two.jpg"
alt="Chemka Hot Springs"
className="h-[420px] w-full object-cover"
/>
</div>

<div>
<p className="font-bold text-gold">{t.bringLabel}</p>

<h2 className="section-title mt-3">
{t.bringTitle}
</h2>

<ul className="mt-6 space-y-3 text-lg">
{t.whatToBring.map((item) => (
<li key={item}>• {item}</li>
))}
</ul>
</div>
</div>
</div>
</section>

<section className="bg-forest py-20 text-white">
<div className="mx-auto max-w-4xl px-6 text-center">
<h2 className="font-display text-4xl font-bold md:text-5xl">
{t.ctaTitle}
</h2>

<p className="mt-5 text-lg leading-8 text-white/80">
{t.ctaText}
</p>

<div className="mt-8 flex flex-wrap justify-center gap-4">
<Link
href="/booking"
className="rounded-full bg-gold px-8 py-4 font-bold text-white"
>
{t.quote}
</Link>

<a
href="https://wa.me/255759273339"
target="_blank"
rel="noopener noreferrer"
className="rounded-full border border-white px-8 py-4 font-bold text-white"
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