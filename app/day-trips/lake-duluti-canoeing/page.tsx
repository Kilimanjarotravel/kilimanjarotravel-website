'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
en: {
heroTitle: 'Lake Duluti Canoeing & Nature Walk',
heroSubtitle:
'Paddle across a peaceful crater lake, enjoy rich birdlife and explore beautiful forest scenery near Arusha.',
overviewLabel: 'TOUR OVERVIEW',
overviewTitle: 'A Peaceful Lake Adventure Near Arusha',
overview1:
'Lake Duluti is a beautiful crater lake surrounded by forest and located a short drive from Arusha. It is an ideal place for travelers who enjoy peaceful nature, birdwatching and outdoor activities.',
overview2:
'This private day trip combines guided canoeing with a relaxing nature walk. You may see kingfishers, herons, eagles and other bird species while enjoying views of Mount Meru when the weather is clear.',
itineraryTitle: 'Full Day Itinerary',

itinerary: [
{
time: '08:30',
title: 'Hotel Pickup',
text: 'Pickup from your hotel in Arusha and drive to Lake Duluti.',
},
{
time: '09:00',
title: 'Arrival and Safety Briefing',
text: 'Meet your local guide, receive a short safety briefing and prepare for the canoeing experience.',
},
{
time: '09:30',
title: 'Guided Canoeing Experience',
text: 'Paddle across the peaceful lake while enjoying forest scenery, birdlife and views of Mount Meru when the weather is clear.',
},
{
time: '11:30',
title: 'Nature Walk',
text: 'Enjoy a guided walk around the lake and learn about local plants, birds and the surrounding ecosystem.',
},
{
time: '13:00',
title: 'Picnic Lunch',
text: 'Relax near the lake and enjoy a freshly prepared picnic lunch.',
},
{
time: '14:00',
title: 'Free Time and Photography',
text: 'Spend time relaxing, taking photos and enjoying the peaceful natural surroundings.',
},
{
time: '15:30',
title: 'Return to Arusha',
text: 'Drive back to your hotel in Arusha after a relaxing lake experience.',
},
],

tripDetails: 'Trip Details',
duration: 'Duration',
durationValue: 'Full Day',
departure: 'Departure',
departureValue: 'Arusha',
tourType: 'Tour Type',
tourTypeValue: 'Private Nature Tour',
bestTime: 'Best Time',
bestTimeValue: 'All Year',
activityLevel: 'Activity Level',
activityLevelValue: 'Easy to Moderate',
book: 'Book This Tour',

includedTitle: 'What Is Included',
included: [
'Hotel pickup and drop-off',
'Private transport',
'Professional local guide',
'Canoe and safety equipment',
'Lake entrance fees',
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
bringTitle: 'Prepare for Your Lake Duluti Adventure',
whatToBring: [
'Comfortable walking shoes',
'Sun hat and sunscreen',
'Light jacket',
'Camera or binoculars',
'Small backpack',
'Personal medication',
],

ctaTitle: 'Ready for Your Lake Duluti Experience?',
ctaText:
'Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private Lake Duluti canoeing and nature walk.',
quote: 'Request a Quote',
whatsapp: 'Chat on WhatsApp',
},

de: {
heroTitle: 'Kanufahren & Naturwanderung am Lake Duluti',
heroSubtitle:
'Paddeln Sie über einen ruhigen Kratersee, entdecken Sie eine vielfältige Vogelwelt und genießen Sie die wunderschöne Waldlandschaft bei Arusha.',
overviewLabel: 'TOURÜBERSICHT',
overviewTitle: 'Ein friedliches Seeabenteuer bei Arusha',
overview1:
'Der Lake Duluti ist ein wunderschöner, von Wald umgebener Kratersee, der nur eine kurze Fahrt von Arusha entfernt liegt. Er ist ideal für Reisende, die ruhige Natur, Vogelbeobachtung und Aktivitäten im Freien genießen.',
overview2:
'Dieser private Tagesausflug verbindet geführtes Kanufahren mit einer entspannten Naturwanderung. Sie können Eisvögel, Reiher, Adler und andere Vogelarten beobachten und bei klarem Wetter den Blick auf den Mount Meru genießen.',
itineraryTitle: 'Ganztägiger Reiseplan',

itinerary: [
{
time: '08:30',
title: 'Abholung vom Hotel',
text: 'Abholung von Ihrem Hotel in Arusha und Fahrt zum Lake Duluti.',
},
{
time: '09:00',
title: 'Ankunft und Sicherheitseinweisung',
text: 'Treffen Sie Ihren lokalen Guide, erhalten Sie eine kurze Sicherheitseinweisung und bereiten Sie sich auf das Kanufahren vor.',
},
{
time: '09:30',
title: 'Geführtes Kanuerlebnis',
text: 'Paddeln Sie über den ruhigen See und genießen Sie die Waldlandschaft, die Vogelwelt und bei klarem Wetter den Blick auf den Mount Meru.',
},
{
time: '11:30',
title: 'Naturwanderung',
text: 'Unternehmen Sie eine geführte Wanderung rund um den See und erfahren Sie mehr über lokale Pflanzen, Vögel und das Ökosystem.',
},
{
time: '13:00',
title: 'Picknick-Mittagessen',
text: 'Entspannen Sie am See und genießen Sie ein frisch zubereitetes Picknick-Mittagessen.',
},
{
time: '14:00',
title: 'Freizeit und Fotografie',
text: 'Verbringen Sie Zeit mit Entspannen, Fotografieren und Genießen der ruhigen natürlichen Umgebung.',
},
{
time: '15:30',
title: 'Rückfahrt nach Arusha',
text: 'Fahren Sie nach einem entspannten Seeerlebnis zurück zu Ihrem Hotel in Arusha.',
},
],

tripDetails: 'Reisedetails',
duration: 'Dauer',
durationValue: 'Ganzer Tag',
departure: 'Abfahrt',
departureValue: 'Arusha',
tourType: 'Tourart',
tourTypeValue: 'Private Naturtour',
bestTime: 'Beste Reisezeit',
bestTimeValue: 'Ganzjährig',
activityLevel: 'Aktivitätslevel',
activityLevelValue: 'Leicht bis mittel',
book: 'Diese Tour buchen',

includedTitle: 'Im Preis enthalten',
included: [
'Abholung und Rücktransfer zum Hotel',
'Privater Transport',
'Professioneller lokaler Guide',
'Kanu und Sicherheitsausrüstung',
'Eintrittsgebühren für den See',
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
bringTitle: 'Bereiten Sie sich auf Ihr Lake-Duluti-Abenteuer vor',
whatToBring: [
'Bequeme Wanderschuhe',
'Sonnenhut und Sonnencreme',
'Leichte Jacke',
'Kamera oder Fernglas',
'Kleiner Rucksack',
'Persönliche Medikamente',
],

ctaTitle: 'Bereit für Ihr Lake-Duluti-Erlebnis?',
ctaText:
'Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihre private Kanutour und Naturwanderung am Lake Duluti.',
quote: 'Angebot anfragen',
whatsapp: 'Über WhatsApp chatten',
},

fr: {
heroTitle: 'Canoë et randonnée nature au lac Duluti',
heroSubtitle:
'Pagayez sur un paisible lac de cratère, observez une riche avifaune et explorez les magnifiques paysages forestiers près d’Arusha.',
overviewLabel: 'APERÇU DU CIRCUIT',
overviewTitle: 'Une paisible aventure autour du lac près d’Arusha',
overview1:
'Le lac Duluti est un magnifique lac de cratère entouré de forêt, situé à quelques minutes en voiture d’Arusha. C’est un endroit idéal pour les voyageurs qui apprécient la nature paisible, l’observation des oiseaux et les activités en plein air.',
overview2:
'Cette excursion privée combine une expérience guidée en canoë avec une promenade nature relaxante. Vous pourrez observer des martins-pêcheurs, des hérons, des aigles et d’autres oiseaux, tout en profitant de la vue sur le mont Meru lorsque le temps est dégagé.',
itineraryTitle: 'Itinéraire d’une journée complète',

itinerary: [
{
time: '08:30',
title: 'Prise en charge à l’hôtel',
text: 'Prise en charge à votre hôtel à Arusha et départ vers le lac Duluti.',
},
{
time: '09:00',
title: 'Arrivée et briefing de sécurité',
text: 'Rencontrez votre guide local, recevez un bref briefing de sécurité et préparez-vous pour l’expérience en canoë.',
},
{
time: '09:30',
title: 'Expérience guidée en canoë',
text: 'Pagayez sur le lac paisible tout en profitant des paysages forestiers, des oiseaux et de la vue sur le mont Meru lorsque le temps est dégagé.',
},
{
time: '11:30',
title: 'Promenade nature',
text: 'Profitez d’une promenade guidée autour du lac et découvrez les plantes locales, les oiseaux et l’écosystème environnant.',
},
{
time: '13:00',
title: 'Déjeuner pique-nique',
text: 'Détendez-vous près du lac et profitez d’un déjeuner pique-nique fraîchement préparé.',
},
{
time: '14:00',
title: 'Temps libre et photographie',
text: 'Prenez le temps de vous détendre, de prendre des photos et de profiter du cadre naturel paisible.',
},
{
time: '15:30',
title: 'Retour à Arusha',
text: 'Retournez à votre hôtel à Arusha après cette agréable expérience au bord du lac.',
},
],

tripDetails: 'Détails du voyage',
duration: 'Durée',
durationValue: 'Journée complète',
departure: 'Départ',
departureValue: 'Arusha',
tourType: 'Type de circuit',
tourTypeValue: 'Excursion privée nature',
bestTime: 'Meilleure période',
bestTimeValue: 'Toute l’année',
activityLevel: 'Niveau d’activité',
activityLevelValue: 'Facile à modéré',
book: 'Réserver cette excursion',

includedTitle: 'Ce qui est inclus',
included: [
'Prise en charge et retour à l’hôtel',
'Transport privé',
'Guide local professionnel',
'Canoë et équipement de sécurité',
'Frais d’entrée au lac',
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
bringTitle: 'Préparez votre aventure au lac Duluti',
whatToBring: [
'Chaussures de marche confortables',
'Chapeau et crème solaire',
'Veste légère',
'Appareil photo ou jumelles',
'Petit sac à dos',
'Médicaments personnels',
],

ctaTitle: 'Prêt pour votre expérience au lac Duluti ?',
ctaText:
'Contactez Kilimanjaro Travel dès aujourd’hui et recevez un devis personnalisé pour votre excursion privée en canoë et votre promenade nature au lac Duluti.',
quote: 'Demander un devis',
whatsapp: 'Discuter sur WhatsApp',
},

es: {
heroTitle: 'Canotaje y Caminata por la Naturaleza en el Lago Duluti',
heroSubtitle:
'Rema por un tranquilo lago de cráter, disfruta de una rica variedad de aves y explora los hermosos paisajes forestales cerca de Arusha.',
overviewLabel: 'DESCRIPCIÓN DEL TOUR',
overviewTitle: 'Una tranquila aventura en el lago cerca de Arusha',
overview1:
'El lago Duluti es un hermoso lago de cráter rodeado de bosque y situado a poca distancia en coche de Arusha. Es un lugar ideal para viajeros que disfrutan de la naturaleza tranquila, la observación de aves y las actividades al aire libre.',
overview2:
'Esta excursión privada combina una experiencia guiada en canoa con una relajante caminata por la naturaleza. Podrás observar martines pescadores, garzas, águilas y otras especies de aves mientras disfrutas de las vistas del monte Meru cuando el tiempo está despejado.',
itineraryTitle: 'Itinerario de día completo',

itinerary: [
{
time: '08:30',
title: 'Recogida en el hotel',
text: 'Recogida en tu hotel en Arusha y salida hacia el lago Duluti.',
},
{
time: '09:00',
title: 'Llegada y explicación de seguridad',
text: 'Conoce a tu guía local, recibe una breve explicación de seguridad y prepárate para la experiencia en canoa.',
},
{
time: '09:30',
title: 'Experiencia guiada en canoa',
text: 'Rema por el tranquilo lago mientras disfrutas del paisaje forestal, las aves y las vistas del monte Meru cuando el tiempo está despejado.',
},
{
time: '11:30',
title: 'Caminata por la naturaleza',
text: 'Disfruta de una caminata guiada alrededor del lago y aprende sobre las plantas locales, las aves y el ecosistema de la zona.',
},
{
time: '13:00',
title: 'Almuerzo tipo picnic',
text: 'Relájate junto al lago y disfruta de un almuerzo tipo picnic recién preparado.',
},
{
time: '14:00',
title: 'Tiempo libre y fotografía',
text: 'Disfruta de tiempo libre para relajarte, tomar fotografías y disfrutar del tranquilo entorno natural.',
},
{
time: '15:30',
title: 'Regreso a Arusha',
text: 'Regresa a tu hotel en Arusha después de una relajante experiencia junto al lago.',
},
],

tripDetails: 'Detalles del viaje',
duration: 'Duración',
durationValue: 'Día completo',
departure: 'Salida',
departureValue: 'Arusha',
tourType: 'Tipo de tour',
tourTypeValue: 'Tour privado de naturaleza',
bestTime: 'Mejor época',
bestTimeValue: 'Todo el año',
activityLevel: 'Nivel de actividad',
activityLevelValue: 'Fácil a moderado',
book: 'Reservar este tour',

includedTitle: 'Qué está incluido',
included: [
'Recogida y regreso al hotel',
'Transporte privado',
'Guía local profesional',
'Canoa y equipo de seguridad',
'Entradas al lago',
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
bringTitle: 'Prepárate para tu aventura en el lago Duluti',
whatToBring: [
'Calzado cómodo para caminar',
'Sombrero y protector solar',
'Chaqueta ligera',
'Cámara o prismáticos',
'Mochila pequeña',
'Medicamentos personales',
],

ctaTitle: '¿Listo para vivir la experiencia del lago Duluti?',
ctaText:
'Contacta hoy con Kilimanjaro Travel y recibe un presupuesto personalizado para tu excursión privada en canoa y caminata por la naturaleza en el lago Duluti.',
quote: 'Solicitar presupuesto',
whatsapp: 'Chatear por WhatsApp',
},
};

export default function LakeDulutiCanoeingPage() {
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
image="/images/duluti-two.jpg"
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
src="/images/duluti-three.jpg"
alt="Lake Duluti canoeing experience"
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