'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
en: {
heroTitle: 'Tarangire National Park Day Trip',
heroSubtitle:
'Discover large elephant herds, ancient baobab trees and unforgettable wildlife in one remarkable day.',

overviewLabel: 'TOUR OVERVIEW',
overviewTitle: 'The Home of Elephants and Baobabs',
overview1:
'Tarangire National Park is famous for its large elephant population, impressive baobab trees and beautiful landscapes. The Tarangire River attracts many wildlife species, especially during the dry season.',
overview2:
'This private day trip gives you the opportunity to see elephants, lions, giraffes, zebras, wildebeest, antelopes and many bird species. An optional guided walking safari may be arranged upon request, subject to availability and park regulations.',

itineraryTitle: 'Full Day Itinerary',

tripDetails: 'Trip Details',
duration: 'Duration',
departure: 'Departure',
tourType: 'Tour Type',
bestTime: 'Best Time',
transport: 'Transport',
fullDay: 'Full Day',
arusha: 'Arusha',
privateDayTrip: 'Private Day Trip',
allYear: 'All Year',
privateVehicle: 'Private Safari Vehicle',
bookTour: 'Book This Tour',

includedTitle: 'What Is Included',
excludedTitle: 'What Is Excluded',

whatToBringLabel: 'WHAT TO BRING',
whatToBringTitle: 'Prepare for Your Tarangire Safari',

readyTitle: 'Ready for Your Tarangire Adventure?',
readyText:
'Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private Tarangire day trip.',
quote: 'Request a Quote',
whatsapp: 'Chat on WhatsApp',

itinerary: [
{
time: '06:30',
title: 'Hotel Pickup',
text: 'Pickup from your hotel in Arusha and begin the scenic drive to Tarangire National Park.',
},
{
time: '09:00',
title: 'Morning Game Drive',
text: 'Begin your game drive through Tarangire National Park, famous for large elephant herds, majestic baobab trees and diverse wildlife.',
},
{
time: '11:00',
title: 'Optional Guided Walking Safari',
text: 'Guests may request an optional guided walking safari with an armed park ranger in designated areas. This activity is subject to availability and park arrangements.',
},
{
time: '13:00',
title: 'Picnic Lunch',
text: 'Enjoy a picnic lunch at a scenic site inside the park while surrounded by the beautiful Tarangire landscape.',
},
{
time: '14:00',
title: 'Afternoon Game Drive',
text: 'Continue exploring the park in search of elephants, lions, giraffes, zebras, wildebeest, antelopes and abundant birdlife.',
},
{
time: '16:30',
title: 'Return to Arusha',
text: 'Leave Tarangire National Park and drive back to your hotel in Arusha after an unforgettable safari.',
},
],

included: [
'Hotel pickup and drop-off',
'Private safari vehicle',
'Professional English-speaking guide',
'Park entrance fees',
'Picnic lunch',
'Drinking water',
],

excluded: [
'Optional walking safari fees',
'Flights',
'Travel insurance',
'Tips and gratuities',
'Personal expenses',
'Alcoholic drinks',
],

whatToBring: [
'Comfortable shoes',
'Sun hat and sunscreen',
'Camera or binoculars',
'Light jacket',
'Personal medication',
],
},

de: {
heroTitle: 'Tagesausflug zum Tarangire-Nationalpark',
heroSubtitle:
'Entdecken Sie große Elefantenherden, uralte Baobab-Bäume und unvergessliche Wildtiere an einem beeindruckenden Tag.',

overviewLabel: 'TOURÜBERSICHT',
overviewTitle: 'Die Heimat der Elefanten und Baobabs',
overview1:
'Der Tarangire-Nationalpark ist bekannt für seine große Elefantenpopulation, beeindruckende Baobab-Bäume und wunderschöne Landschaften. Der Tarangire-Fluss zieht viele Wildtierarten an, besonders während der Trockenzeit.',
overview2:
'Dieser private Tagesausflug bietet die Möglichkeit, Elefanten, Löwen, Giraffen, Zebras, Gnus, Antilopen und zahlreiche Vogelarten zu beobachten. Auf Anfrage kann eine geführte Wandersafari organisiert werden, vorbehaltlich Verfügbarkeit und der Parkbestimmungen.',

itineraryTitle: 'Ganztägiger Reiseplan',

tripDetails: 'Reisedetails',
duration: 'Dauer',
departure: 'Abfahrt',
tourType: 'Tourart',
bestTime: 'Beste Reisezeit',
transport: 'Transport',
fullDay: 'Ganztägig',
arusha: 'Arusha',
privateDayTrip: 'Privater Tagesausflug',
allYear: 'Ganzjährig',
privateVehicle: 'Privates Safari-Fahrzeug',
bookTour: 'Diese Tour buchen',

includedTitle: 'Im Preis enthalten',
excludedTitle: 'Nicht im Preis enthalten',

whatToBringLabel: 'WAS SIE MITBRINGEN SOLLTEN',
whatToBringTitle: 'Bereiten Sie sich auf Ihre Tarangire-Safari vor',

readyTitle: 'Bereit für Ihr Tarangire-Abenteuer?',
readyText:
'Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihren privaten Tagesausflug nach Tarangire.',
quote: 'Angebot anfragen',
whatsapp: 'Auf WhatsApp chatten',

itinerary: [
{
time: '06:30',
title: 'Abholung vom Hotel',
text: 'Abholung von Ihrem Hotel in Arusha und Beginn der landschaftlich reizvollen Fahrt zum Tarangire-Nationalpark.',
},
{
time: '09:00',
title: 'Pirschfahrt am Morgen',
text: 'Beginnen Sie Ihre Pirschfahrt durch den Tarangire-Nationalpark, der für große Elefantenherden, majestätische Baobab-Bäume und eine vielfältige Tierwelt bekannt ist.',
},
{
time: '11:00',
title: 'Optionale geführte Wandersafari',
text: 'Gäste können eine optionale geführte Wandersafari mit einem bewaffneten Parkranger in ausgewiesenen Gebieten anfragen. Diese Aktivität hängt von der Verfügbarkeit und den Parkregelungen ab.',
},
{
time: '13:00',
title: 'Picknick-Mittagessen',
text: 'Genießen Sie ein Picknick an einem malerischen Ort im Park, umgeben von der wunderschönen Landschaft von Tarangire.',
},
{
time: '14:00',
title: 'Pirschfahrt am Nachmittag',
text: 'Erkunden Sie den Park weiter auf der Suche nach Elefanten, Löwen, Giraffen, Zebras, Gnus, Antilopen und einer vielfältigen Vogelwelt.',
},
{
time: '16:30',
title: 'Rückkehr nach Arusha',
text: 'Verlassen Sie den Tarangire-Nationalpark und fahren Sie nach einer unvergesslichen Safari zurück zu Ihrem Hotel in Arusha.',
},
],

included: [
'Abholung und Rückfahrt zum Hotel',
'Privates Safari-Fahrzeug',
'Professioneller englischsprachiger Reiseleiter',
'Parkeintrittsgebühren',
'Picknick-Mittagessen',
'Trinkwasser',
],

excluded: [
'Gebühren für optionale Wandersafari',
'Flüge',
'Reiseversicherung',
'Trinkgelder',
'Persönliche Ausgaben',
'Alkoholische Getränke',
],

whatToBring: [
'Bequeme Schuhe',
'Sonnenhut und Sonnenschutz',
'Kamera oder Fernglas',
'Leichte Jacke',
'Persönliche Medikamente',
],
},

fr: {
heroTitle: 'Excursion au parc national de Tarangire',
heroSubtitle:
'Découvrez de grands troupeaux d’éléphants, d’anciens baobabs et une faune exceptionnelle en une seule journée.',

overviewLabel: 'APERÇU DU CIRCUIT',
overviewTitle: 'Le royaume des éléphants et des baobabs',
overview1:
'Le parc national de Tarangire est célèbre pour sa grande population d’éléphants, ses impressionnants baobabs et ses magnifiques paysages. La rivière Tarangire attire de nombreuses espèces animales, surtout pendant la saison sèche.',
overview2:
'Cette excursion privée d’une journée vous permet d’observer des éléphants, lions, girafes, zèbres, gnous, antilopes et de nombreuses espèces d’oiseaux. Un safari pédestre guidé peut être organisé sur demande, sous réserve de disponibilité et des règles du parc.',

itineraryTitle: 'Itinéraire d’une journée complète',

tripDetails: 'Détails du voyage',
duration: 'Durée',
departure: 'Départ',
tourType: 'Type de circuit',
bestTime: 'Meilleure période',
transport: 'Transport',
fullDay: 'Journée complète',
arusha: 'Arusha',
privateDayTrip: 'Excursion privée d’une journée',
allYear: 'Toute l’année',
privateVehicle: 'Véhicule safari privé',
bookTour: 'Réserver ce circuit',

includedTitle: 'Ce qui est inclus',
excludedTitle: 'Ce qui n’est pas inclus',

whatToBringLabel: 'À EMPORTER',
whatToBringTitle: 'Préparez votre safari à Tarangire',

readyTitle: 'Prêt pour votre aventure à Tarangire ?',
readyText:
'Contactez Kilimanjaro Travel dès aujourd’hui et recevez un devis personnalisé pour votre excursion privée à Tarangire.',
quote: 'Demander un devis',
whatsapp: 'Discuter sur WhatsApp',

itinerary: [
{
time: '06:30',
title: 'Prise en charge à l’hôtel',
text: 'Prise en charge à votre hôtel à Arusha et départ pour une route panoramique vers le parc national de Tarangire.',
},
{
time: '09:00',
title: 'Safari du matin',
text: 'Commencez votre safari à travers le parc national de Tarangire, célèbre pour ses grands troupeaux d’éléphants, ses majestueux baobabs et sa faune diversifiée.',
},
{
time: '11:00',
title: 'Safari pédestre guidé en option',
text: 'Les voyageurs peuvent demander un safari pédestre guidé avec un ranger armé dans les zones désignées. Cette activité dépend des disponibilités et des arrangements du parc.',
},
{
time: '13:00',
title: 'Déjeuner pique-nique',
text: 'Profitez d’un déjeuner pique-nique dans un endroit pittoresque du parc, entouré par les magnifiques paysages de Tarangire.',
},
{
time: '14:00',
title: 'Safari de l’après-midi',
text: 'Continuez à explorer le parc à la recherche d’éléphants, de lions, de girafes, de zèbres, de gnous, d’antilopes et de nombreuses espèces d’oiseaux.',
},
{
time: '16:30',
title: 'Retour à Arusha',
text: 'Quittez le parc national de Tarangire et retournez à votre hôtel à Arusha après un safari inoubliable.',
},
],

included: [
'Prise en charge et retour à l’hôtel',
'Véhicule safari privé',
'Guide professionnel anglophone',
'Frais d’entrée au parc',
'Déjeuner pique-nique',
'Eau potable',
],

excluded: [
'Frais du safari pédestre en option',
'Vols',
'Assurance voyage',
'Pourboires',
'Dépenses personnelles',
'Boissons alcoolisées',
],

whatToBring: [
'Chaussures confortables',
'Chapeau et crème solaire',
'Appareil photo ou jumelles',
'Veste légère',
'Médicaments personnels',
],
},

es: {
heroTitle: 'Excursión al Parque Nacional de Tarangire',
heroSubtitle:
'Descubra grandes manadas de elefantes, antiguos baobabs y una fauna inolvidable en un día extraordinario.',

overviewLabel: 'DESCRIPCIÓN DEL TOUR',
overviewTitle: 'El hogar de los elefantes y los baobabs',
overview1:
'El Parque Nacional de Tarangire es famoso por su gran población de elefantes, sus impresionantes baobabs y sus hermosos paisajes. El río Tarangire atrae a muchas especies de fauna, especialmente durante la estación seca.',
overview2:
'Esta excursión privada de un día le brinda la oportunidad de observar elefantes, leones, jirafas, cebras, ñus, antílopes y numerosas especies de aves. También se puede organizar un safari a pie guiado bajo petición, sujeto a disponibilidad y a las normas del parque.',

itineraryTitle: 'Itinerario de día completo',

tripDetails: 'Detalles del viaje',
duration: 'Duración',
departure: 'Salida',
tourType: 'Tipo de tour',
bestTime: 'Mejor época',
transport: 'Transporte',
fullDay: 'Día completo',
arusha: 'Arusha',
privateDayTrip: 'Excursión privada de un día',
allYear: 'Todo el año',
privateVehicle: 'Vehículo privado de safari',
bookTour: 'Reservar este tour',

includedTitle: 'Qué está incluido',
excludedTitle: 'Qué no está incluido',

whatToBringLabel: 'QUÉ LLEVAR',
whatToBringTitle: 'Prepárese para su safari en Tarangire',

readyTitle: '¿Listo para su aventura en Tarangire?',
readyText:
'Contacte hoy con Kilimanjaro Travel y reciba un presupuesto personalizado para su excursión privada de un día a Tarangire.',
quote: 'Solicitar presupuesto',
whatsapp: 'Chatear por WhatsApp',

itinerary: [
{
time: '06:30',
title: 'Recogida en el hotel',
text: 'Recogida en su hotel de Arusha y comienzo del recorrido panorámico hacia el Parque Nacional de Tarangire.',
},
{
time: '09:00',
title: 'Safari de la mañana',
text: 'Comience su safari por el Parque Nacional de Tarangire, famoso por sus grandes manadas de elefantes, majestuosos baobabs y diversa fauna.',
},
{
time: '11:00',
title: 'Safari a pie guiado opcional',
text: 'Los huéspedes pueden solicitar un safari a pie guiado con un guardaparque armado en zonas designadas. Esta actividad está sujeta a disponibilidad y a las disposiciones del parque.',
},
{
time: '13:00',
title: 'Almuerzo tipo picnic',
text: 'Disfrute de un almuerzo tipo picnic en un lugar pintoresco dentro del parque, rodeado por los hermosos paisajes de Tarangire.',
},
{
time: '14:00',
title: 'Safari de la tarde',
text: 'Continúe explorando el parque en busca de elefantes, leones, jirafas, cebras, ñus, antílopes y abundante avifauna.',
},
{
time: '16:30',
title: 'Regreso a Arusha',
text: 'Salga del Parque Nacional de Tarangire y regrese a su hotel en Arusha después de un safari inolvidable.',
},
],

included: [
'Recogida y regreso al hotel',
'Vehículo privado de safari',
'Guía profesional de habla inglesa',
'Entradas al parque',
'Almuerzo tipo picnic',
'Agua potable',
],

excluded: [
'Tarifas del safari a pie opcional',
'Vuelos',
'Seguro de viaje',
'Propinas',
'Gastos personales',
'Bebidas alcohólicas',
],

whatToBring: [
'Calzado cómodo',
'Sombrero y protector solar',
'Cámara o prismáticos',
'Chaqueta ligera',
'Medicamentos personales',
],
},
};

export default function TarangireNationalParkPage() {
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
image="/images/water-bottle.jpg"
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
<strong>{t.duration}:</strong> {t.fullDay}
</p>

<p>
<strong>{t.departure}:</strong> {t.arusha}
</p>

<p>
<strong>{t.tourType}:</strong> {t.privateDayTrip}
</p>

<p>
<strong>{t.bestTime}:</strong> {t.allYear}
</p>

<p>
<strong>{t.transport}:</strong> {t.privateVehicle}
</p>
</div>

<Link
href="/booking"
className="mt-8 inline-block w-full rounded-full bg-gold px-6 py-3 text-center font-bold text-white"
>
{t.bookTour}
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
src="/images/warthdog .jpg"
alt="Safari vehicle in Tarangire National Park"
className="h-[420px] w-full object-cover"
/>
</div>

<div>
<p className="font-bold text-gold">
{t.whatToBringLabel}
</p>

<h2 className="section-title mt-3">
{t.whatToBringTitle}
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
{t.readyTitle}
</h2>

<p className="mt-5 text-lg leading-8 text-white/80">
{t.readyText}
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