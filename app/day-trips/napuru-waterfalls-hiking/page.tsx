'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
en: {
heroTitle: 'Napuru Waterfalls & Hiking',
heroSubtitle:
'Enjoy a guided hike, beautiful waterfalls and panoramic views of Arusha and Mount Meru.',
overviewLabel: 'TOUR OVERVIEW',
overviewTitle: 'A Scenic Hiking Experience Near Arusha',
overview1:
'The Napuru Waterfalls and Hiking Tour is a rewarding day trip for travelers who enjoy nature, walking and local scenery near Arusha.',
overview2:
'The guided hike takes you through peaceful landscapes and local areas before reaching the waterfall and scenic viewpoints. Clear weather may provide excellent views of Mount Meru and Arusha town.',
itineraryTitle: 'Full Day Itinerary',

itinerary: [
{
time: '08:00',
title: 'Hotel Pickup',
text: 'Pickup from your hotel in Arusha and drive toward the Napuru hiking area.',
},
{
time: '09:00',
title: 'Meet Your Local Guide',
text: 'Meet your guide, receive a short safety briefing and begin the guided hike.',
},
{
time: '09:30',
title: 'Napuru Nature Hike',
text: 'Walk through local landscapes, farms and natural trails while enjoying fresh air and beautiful scenery.',
},
{
time: '11:30',
title: 'Waterfall and Scenic Viewpoints',
text: 'Visit Napuru Waterfalls and enjoy panoramic views of Arusha town and Mount Meru when the weather is clear.',
},
{
time: '13:00',
title: 'Picnic Lunch',
text: 'Enjoy a picnic lunch in a peaceful natural setting.',
},
{
time: '14:00',
title: 'Photography and Nature Walk',
text: 'Continue exploring the area, take photos and learn more about local plants, landscapes and village life.',
},
{
time: '16:00',
title: 'Return to Arusha',
text: 'Finish the hike and drive back to your hotel in Arusha.',
},
],

tripDetails: 'Trip Details',
duration: 'Duration',
durationValue: 'Full Day',
departure: 'Departure',
departureValue: 'Arusha',
tourType: 'Tour Type',
tourTypeValue: 'Private Hiking Tour',
bestTime: 'Best Time',
bestTimeValue: 'All Year',
activityLevel: 'Activity Level',
activityLevelValue: 'Moderate',
book: 'Book This Tour',

includedTitle: 'What Is Included',
included: [
'Hotel pickup and drop-off',
'Private transport',
'Professional local hiking guide',
'Entrance fees',
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
bringTitle: 'Prepare for Your Napuru Hike',
whatToBring: [
'Comfortable hiking shoes',
'Light rain jacket',
'Sun hat and sunscreen',
'Camera',
'Small backpack',
'Personal medication',
],

ctaTitle: 'Ready for Your Napuru Hiking Adventure?',
ctaText:
'Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private Napuru Waterfalls and Hiking tour.',
quote: 'Request a Quote',
whatsapp: 'Chat on WhatsApp',
},

de: {
heroTitle: 'Napuru Wasserfälle & Wandern',
heroSubtitle:
'Genießen Sie eine geführte Wanderung, wunderschöne Wasserfälle und Panoramablicke auf Arusha und den Mount Meru.',
overviewLabel: 'TOURÜBERSICHT',
overviewTitle: 'Ein beeindruckendes Wandererlebnis bei Arusha',
overview1:
'Die Napuru-Wasserfälle- und Wandertour ist ein lohnender Tagesausflug für Reisende, die Natur, Wandern und die lokale Landschaft rund um Arusha genießen möchten.',
overview2:
'Die geführte Wanderung führt durch ruhige Landschaften und lokale Gebiete, bevor Sie den Wasserfall und schöne Aussichtspunkte erreichen. Bei klarem Wetter können Sie den Mount Meru und die Stadt Arusha sehen.',
itineraryTitle: 'Ganztägiger Reiseplan',

itinerary: [
{
time: '08:00',
title: 'Abholung vom Hotel',
text: 'Abholung von Ihrem Hotel in Arusha und Fahrt zum Wandergebiet von Napuru.',
},
{
time: '09:00',
title: 'Treffen mit dem lokalen Guide',
text: 'Treffen Sie Ihren Guide, erhalten Sie eine kurze Sicherheitseinweisung und beginnen Sie die geführte Wanderung.',
},
{
time: '09:30',
title: 'Napuru-Naturwanderung',
text: 'Wandern Sie durch lokale Landschaften, Farmen und Naturwege und genießen Sie die frische Luft und die schöne Umgebung.',
},
{
time: '11:30',
title: 'Wasserfall und Aussichtspunkte',
text: 'Besuchen Sie die Napuru-Wasserfälle und genießen Sie bei klarem Wetter den Panoramablick auf Arusha und den Mount Meru.',
},
{
time: '13:00',
title: 'Picknick-Mittagessen',
text: 'Genießen Sie ein Picknick-Mittagessen in einer ruhigen natürlichen Umgebung.',
},
{
time: '14:00',
title: 'Fotografie und Naturwanderung',
text: 'Erkunden Sie die Gegend weiter, machen Sie Fotos und erfahren Sie mehr über lokale Pflanzen, Landschaften und das Dorfleben.',
},
{
time: '16:00',
title: 'Rückfahrt nach Arusha',
text: 'Beenden Sie die Wanderung und fahren Sie zurück zu Ihrem Hotel in Arusha.',
},
],

tripDetails: 'Reisedetails',
duration: 'Dauer',
durationValue: 'Ganzer Tag',
departure: 'Abfahrt',
departureValue: 'Arusha',
tourType: 'Tourart',
tourTypeValue: 'Private Wandertour',
bestTime: 'Beste Reisezeit',
bestTimeValue: 'Ganzjährig',
activityLevel: 'Aktivitätslevel',
activityLevelValue: 'Mittel',
book: 'Diese Tour buchen',

includedTitle: 'Im Preis enthalten',
included: [
'Abholung und Rücktransfer zum Hotel',
'Privater Transport',
'Professioneller lokaler Wanderführer',
'Eintrittsgebühren',
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
bringTitle: 'Bereiten Sie sich auf Ihre Napuru-Wanderung vor',
whatToBring: [
'Bequeme Wanderschuhe',
'Leichte Regenjacke',
'Sonnenhut und Sonnencreme',
'Kamera',
'Kleiner Rucksack',
'Persönliche Medikamente',
],

ctaTitle: 'Bereit für Ihr Napuru-Wanderabenteuer?',
ctaText:
'Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihre private Napuru-Wasserfälle- und Wandertour.',
quote: 'Angebot anfragen',
whatsapp: 'Über WhatsApp chatten',
},

fr: {
heroTitle: 'Cascades de Napuru & Randonnée',
heroSubtitle:
'Profitez d’une randonnée guidée, de magnifiques cascades et de vues panoramiques sur Arusha et le mont Meru.',
overviewLabel: 'APERÇU DU CIRCUIT',
overviewTitle: 'Une belle expérience de randonnée près d’Arusha',
overview1:
'La randonnée des cascades de Napuru est une excursion d’une journée idéale pour les voyageurs qui aiment la nature, la marche et les paysages locaux autour d’Arusha.',
overview2:
'La randonnée guidée traverse des paysages paisibles et des zones locales avant d’atteindre la cascade et les points de vue. Par temps clair, vous pourrez profiter de magnifiques vues sur le mont Meru et la ville d’Arusha.',
itineraryTitle: 'Itinéraire d’une journée complète',

itinerary: [
{
time: '08:00',
title: 'Prise en charge à l’hôtel',
text: 'Prise en charge à votre hôtel à Arusha et départ vers la zone de randonnée de Napuru.',
},
{
time: '09:00',
title: 'Rencontre avec votre guide local',
text: 'Rencontrez votre guide, recevez un bref briefing de sécurité et commencez la randonnée guidée.',
},
{
time: '09:30',
title: 'Randonnée nature à Napuru',
text: 'Marchez à travers les paysages locaux, les fermes et les sentiers naturels tout en profitant de l’air frais et des beaux paysages.',
},
{
time: '11:30',
title: 'Cascade et points de vue',
text: 'Visitez les cascades de Napuru et profitez des vues panoramiques sur Arusha et le mont Meru lorsque le temps est dégagé.',
},
{
time: '13:00',
title: 'Déjeuner pique-nique',
text: 'Profitez d’un déjeuner pique-nique dans un cadre naturel paisible.',
},
{
time: '14:00',
title: 'Photographie et promenade nature',
text: 'Continuez à explorer la région, prenez des photos et découvrez les plantes locales, les paysages et la vie des villages.',
},
{
time: '16:00',
title: 'Retour à Arusha',
text: 'Terminez la randonnée et retournez à votre hôtel à Arusha.',
},
],

tripDetails: 'Détails du voyage',
duration: 'Durée',
durationValue: 'Journée complète',
departure: 'Départ',
departureValue: 'Arusha',
tourType: 'Type de circuit',
tourTypeValue: 'Randonnée privée',
bestTime: 'Meilleure période',
bestTimeValue: 'Toute l’année',
activityLevel: 'Niveau d’activité',
activityLevelValue: 'Modéré',
book: 'Réserver cette excursion',

includedTitle: 'Ce qui est inclus',
included: [
'Prise en charge et retour à l’hôtel',
'Transport privé',
'Guide local professionnel de randonnée',
'Frais d’entrée',
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
bringTitle: 'Préparez votre randonnée à Napuru',
whatToBring: [
'Chaussures de randonnée confortables',
'Veste légère imperméable',
'Chapeau et crème solaire',
'Appareil photo',
'Petit sac à dos',
'Médicaments personnels',
],

ctaTitle: 'Prêt pour votre aventure de randonnée à Napuru ?',
ctaText:
'Contactez Kilimanjaro Travel dès aujourd’hui et recevez un devis personnalisé pour votre randonnée privée aux cascades de Napuru.',
quote: 'Demander un devis',
whatsapp: 'Discuter sur WhatsApp',
},

es: {
heroTitle: 'Cascadas de Napuru y Senderismo',
heroSubtitle:
'Disfruta de una caminata guiada, hermosas cascadas y vistas panorámicas de Arusha y el monte Meru.',
overviewLabel: 'DESCRIPCIÓN DEL TOUR',
overviewTitle: 'Una experiencia de senderismo cerca de Arusha',
overview1:
'El tour de las cascadas de Napuru es una excursión de un día ideal para viajeros que disfrutan de la naturaleza, caminar y los paisajes locales cerca de Arusha.',
overview2:
'La caminata guiada atraviesa paisajes tranquilos y zonas locales antes de llegar a la cascada y a los miradores. Con buen tiempo, podrás disfrutar de excelentes vistas del monte Meru y de la ciudad de Arusha.',
itineraryTitle: 'Itinerario de día completo',

itinerary: [
{
time: '08:00',
title: 'Recogida en el hotel',
text: 'Recogida en tu hotel en Arusha y salida hacia la zona de senderismo de Napuru.',
},
{
time: '09:00',
title: 'Encuentro con el guía local',
text: 'Conoce a tu guía, recibe una breve explicación de seguridad y comienza la caminata guiada.',
},
{
time: '09:30',
title: 'Caminata por la naturaleza de Napuru',
text: 'Camina por paisajes locales, granjas y senderos naturales mientras disfrutas del aire fresco y de hermosos paisajes.',
},
{
time: '11:30',
title: 'Cascada y miradores panorámicos',
text: 'Visita las cascadas de Napuru y disfruta de vistas panorámicas de Arusha y del monte Meru cuando el tiempo esté despejado.',
},
{
time: '13:00',
title: 'Almuerzo tipo picnic',
text: 'Disfruta de un almuerzo tipo picnic en un entorno natural y tranquilo.',
},
{
time: '14:00',
title: 'Fotografía y caminata por la naturaleza',
text: 'Continúa explorando la zona, toma fotografías y aprende más sobre las plantas locales, los paisajes y la vida de los pueblos.',
},
{
time: '16:00',
title: 'Regreso a Arusha',
text: 'Finaliza la caminata y regresa a tu hotel en Arusha.',
},
],

tripDetails: 'Detalles del viaje',
duration: 'Duración',
durationValue: 'Día completo',
departure: 'Salida',
departureValue: 'Arusha',
tourType: 'Tipo de tour',
tourTypeValue: 'Tour privado de senderismo',
bestTime: 'Mejor época',
bestTimeValue: 'Todo el año',
activityLevel: 'Nivel de actividad',
activityLevelValue: 'Moderado',
book: 'Reservar este tour',

includedTitle: 'Qué está incluido',
included: [
'Recogida y regreso al hotel',
'Transporte privado',
'Guía local profesional de senderismo',
'Entradas',
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
bringTitle: 'Prepárate para tu caminata en Napuru',
whatToBring: [
'Calzado cómodo para senderismo',
'Chaqueta ligera para la lluvia',
'Sombrero y protector solar',
'Cámara',
'Mochila pequeña',
'Medicamentos personales',
],

ctaTitle: '¿Listo para tu aventura de senderismo en Napuru?',
ctaText:
'Contacta hoy con Kilimanjaro Travel y recibe un presupuesto personalizado para tu tour privado de las cascadas y senderismo de Napuru.',
quote: 'Solicitar presupuesto',
whatsapp: 'Chatear por WhatsApp',
},
};

export default function NapuruWaterfallsHikingPage() {
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
image="/images/napuru-four.jpg"
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
src="/images/napuru-three.jpg"
alt="Napuru hiking experience"
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