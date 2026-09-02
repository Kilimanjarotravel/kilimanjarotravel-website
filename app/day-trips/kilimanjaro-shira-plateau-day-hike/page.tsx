"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
en: {
heroTitle: "Kilimanjaro Shira Plateau Day Hike",
heroSubtitle:
"Experience the beauty of Mount Kilimanjaro on a guided high-altitude hike across the spectacular Shira Plateau.",
overviewLabel: "TOUR OVERVIEW",
overviewTitle: "Experience Kilimanjaro in One Day",
overview1:
"The Shira Plateau Day Hike is ideal for travelers who want to experience Mount Kilimanjaro without joining a multi-day climb. The plateau offers dramatic volcanic landscapes, unique vegetation and beautiful mountain views.",
overview2:
"This private guided hike can be arranged from Arusha or Moshi. Weather conditions and park regulations may affect the exact route and timing.",
itineraryTitle: "Full Day Itinerary",

itinerary: [
{
time: "06:30",
title: "Hotel Pickup",
text: "Pickup from your hotel in Arusha or Moshi and drive toward Kilimanjaro National Park.",
},
{
time: "08:30",
title: "Park Registration",
text: "Complete registration at the park gate, meet your mountain guide and receive a short safety briefing.",
},
{
time: "09:30",
title: "Drive to Shira Plateau",
text: "Travel by four-wheel-drive vehicle through the mountain landscape toward the Shira Plateau hiking area.",
},
{
time: "10:30",
title: "Guided Shira Plateau Hike",
text: "Begin a guided hike across the high-altitude plateau while enjoying volcanic scenery, unique vegetation and views of Kilimanjaro when the weather is clear.",
},
{
time: "13:00",
title: "Picnic Lunch",
text: "Enjoy a packed lunch in a scenic mountain location.",
},
{
time: "14:00",
title: "Afternoon Exploration",
text: "Continue exploring the plateau, take photographs and learn about the mountain environment from your guide.",
},
{
time: "15:30",
title: "Return Journey",
text: "Return to the vehicle and begin the drive down from the mountain.",
},
{
time: "18:00",
title: "Hotel Drop-off",
text: "Arrive at your hotel in Moshi or Arusha after an unforgettable Kilimanjaro day hike.",
},
],

tripDetails: "Trip Details",
duration: "Duration",
departure: "Departure",
tourType: "Tour Type",
bestTime: "Best Time",
activityLevel: "Activity Level",
fullDay: "Full Day",
arushaMoshi: "Arusha or Moshi",
privateHike: "Private Guided Mountain Hike",
allYear: "All Year",
moderateChallenging: "Moderate to Challenging",
bookHike: "Book This Hike",

includedTitle: "What Is Included",
included: [
"Hotel pickup and drop-off",
"Private transport",
"Professional mountain guide",
"Kilimanjaro National Park fees",
"Picnic lunch",
"Drinking water",
],

excludedTitle: "What Is Excluded",
excluded: [
"Flights",
"Travel insurance",
"Tips and gratuities",
"Personal hiking equipment",
"Personal expenses",
"Alcoholic drinks",
],

bringLabel: "WHAT TO BRING",
bringTitle: "Prepare for Your Kilimanjaro Hike",
whatToBring: [
"Comfortable hiking boots",
"Warm jacket and layered clothing",
"Rain jacket",
"Sun hat and sunscreen",
"Small backpack",
"Camera",
"Personal medication",
],

imageAlt: "Kilimanjaro Shira Plateau day hike",
ctaTitle: "Ready for Your Kilimanjaro Day Hike?",
ctaText:
"Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private Shira Plateau day hike.",
quote: "Request a Quote",
whatsapp: "Chat on WhatsApp",
},

de: {
heroTitle: "Tageswanderung auf dem Kilimanjaro Shira-Plateau",
heroSubtitle:
"Erleben Sie die Schönheit des Kilimandscharo bei einer geführten Höhenwanderung über das beeindruckende Shira-Plateau.",
overviewLabel: "TOURÜBERSICHT",
overviewTitle: "Kilimandscharo an einem Tag erleben",
overview1:
"Die Tageswanderung auf dem Shira-Plateau ist ideal für Reisende, die den Kilimandscharo erleben möchten, ohne an einer mehrtägigen Besteigung teilzunehmen. Das Plateau bietet beeindruckende Vulkanlandschaften, einzigartige Vegetation und wunderschöne Bergblicke.",
overview2:
"Diese private geführte Wanderung kann ab Arusha oder Moshi organisiert werden. Wetterbedingungen und Parkvorschriften können die genaue Route und den Zeitplan beeinflussen.",
itineraryTitle: "Tagesprogramm",

itinerary: [
{
time: "06:30",
title: "Abholung vom Hotel",
text: "Abholung von Ihrem Hotel in Arusha oder Moshi und Fahrt in Richtung Kilimanjaro-Nationalpark.",
},
{
time: "08:30",
title: "Parkregistrierung",
text: "Registrieren Sie sich am Parkeingang, treffen Sie Ihren Bergführer und erhalten Sie eine kurze Sicherheitseinweisung.",
},
{
time: "09:30",
title: "Fahrt zum Shira-Plateau",
text: "Fahrt mit einem Allradfahrzeug durch die Berglandschaft zum Wandergebiet des Shira-Plateaus.",
},
{
time: "10:30",
title: "Geführte Wanderung auf dem Shira-Plateau",
text: "Beginnen Sie eine geführte Wanderung über das hoch gelegene Plateau und genießen Sie Vulkanlandschaften, einzigartige Vegetation und bei klarem Wetter den Blick auf den Kilimandscharo.",
},
{
time: "13:00",
title: "Picknick-Mittagessen",
text: "Genießen Sie ein Lunchpaket an einem malerischen Ort in den Bergen.",
},
{
time: "14:00",
title: "Nachmittagserkundung",
text: "Erkunden Sie das Plateau weiter, machen Sie Fotos und erfahren Sie von Ihrem Guide mehr über die Bergwelt.",
},
{
time: "15:30",
title: "Rückfahrt",
text: "Kehren Sie zum Fahrzeug zurück und beginnen Sie die Fahrt vom Berg hinunter.",
},
{
time: "18:00",
title: "Rücktransfer zum Hotel",
text: "Nach einer unvergesslichen Kilimandscharo-Tageswanderung erreichen Sie Ihr Hotel in Moshi oder Arusha.",
},
],

tripDetails: "Reisedetails",
duration: "Dauer",
departure: "Abreise",
tourType: "Tourart",
bestTime: "Beste Reisezeit",
activityLevel: "Aktivitätsniveau",
fullDay: "Ganztägig",
arushaMoshi: "Arusha oder Moshi",
privateHike: "Private geführte Bergwanderung",
allYear: "Ganzjährig",
moderateChallenging: "Mittel bis anspruchsvoll",
bookHike: "Diese Wanderung buchen",

includedTitle: "Inklusive Leistungen",
included: [
"Abholung und Rücktransfer zum Hotel",
"Privater Transport",
"Professioneller Bergführer",
"Gebühren des Kilimanjaro-Nationalparks",
"Picknick-Mittagessen",
"Trinkwasser",
],

excludedTitle: "Nicht inklusive",
excluded: [
"Flüge",
"Reiseversicherung",
"Trinkgelder",
"Persönliche Wanderausrüstung",
"Persönliche Ausgaben",
"Alkoholische Getränke",
],

bringLabel: "WAS SIE MITBRINGEN SOLLTEN",
bringTitle: "Bereiten Sie sich auf Ihre Kilimandscharo-Wanderung vor",
whatToBring: [
"Bequeme Wanderschuhe",
"Warme Jacke und Kleidung in mehreren Schichten",
"Regenjacke",
"Sonnenhut und Sonnencreme",
"Kleiner Rucksack",
"Kamera",
"Persönliche Medikamente",
],

imageAlt: "Tageswanderung auf dem Kilimanjaro Shira-Plateau",
ctaTitle: "Bereit für Ihre Kilimandscharo-Tageswanderung?",
ctaText:
"Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihre private Tageswanderung auf dem Shira-Plateau.",
quote: "Angebot anfragen",
whatsapp: "Auf WhatsApp chatten",
},

fr: {
heroTitle: "Randonnée d'une journée sur le plateau de Shira du Kilimandjaro",
heroSubtitle:
"Découvrez la beauté du mont Kilimandjaro lors d'une randonnée guidée en altitude à travers le spectaculaire plateau de Shira.",
overviewLabel: "APERÇU DU CIRCUIT",
overviewTitle: "Découvrez le Kilimandjaro en une journée",
overview1:
"La randonnée d'une journée sur le plateau de Shira est idéale pour les voyageurs qui souhaitent découvrir le mont Kilimandjaro sans participer à une ascension de plusieurs jours. Le plateau offre des paysages volcaniques spectaculaires, une végétation unique et de magnifiques vues sur la montagne.",
overview2:
"Cette randonnée privée avec guide peut être organisée depuis Arusha ou Moshi. Les conditions météorologiques et les réglementations du parc peuvent modifier l'itinéraire et les horaires exacts.",
itineraryTitle: "Itinéraire de la journée",

itinerary: [
{
time: "06:30",
title: "Prise en charge à l'hôtel",
text: "Prise en charge à votre hôtel à Arusha ou Moshi et départ vers le parc national du Kilimandjaro.",
},
{
time: "08:30",
title: "Enregistrement au parc",
text: "Effectuez les formalités à l'entrée du parc, rencontrez votre guide de montagne et recevez un court briefing de sécurité.",
},
{
time: "09:30",
title: "Route vers le plateau de Shira",
text: "Voyagez en véhicule tout-terrain à travers les paysages montagneux jusqu'à la zone de randonnée du plateau de Shira.",
},
{
time: "10:30",
title: "Randonnée guidée sur le plateau de Shira",
text: "Commencez une randonnée guidée sur le plateau d'altitude tout en profitant des paysages volcaniques, de la végétation unique et, par temps clair, des vues sur le Kilimandjaro.",
},
{
time: "13:00",
title: "Déjeuner pique-nique",
text: "Profitez d'un déjeuner préparé à l'avance dans un cadre montagneux pittoresque.",
},
{
time: "14:00",
title: "Exploration de l'après-midi",
text: "Continuez à explorer le plateau, prenez des photos et découvrez l'environnement montagneux avec votre guide.",
},
{
time: "15:30",
title: "Retour",
text: "Retournez au véhicule et commencez la descente de la montagne.",
},
{
time: "18:00",
title: "Retour à l'hôtel",
text: "Arrivée à votre hôtel à Moshi ou Arusha après une journée inoubliable de randonnée sur le Kilimandjaro.",
},
],

tripDetails: "Détails du voyage",
duration: "Durée",
departure: "Départ",
tourType: "Type de circuit",
bestTime: "Meilleure période",
activityLevel: "Niveau d'activité",
fullDay: "Journée complète",
arushaMoshi: "Arusha ou Moshi",
privateHike: "Randonnée privée guidée en montagne",
allYear: "Toute l'année",
moderateChallenging: "Modéré à difficile",
bookHike: "Réserver cette randonnée",

includedTitle: "Ce qui est inclus",
included: [
"Prise en charge et retour à l'hôtel",
"Transport privé",
"Guide de montagne professionnel",
"Frais du parc national du Kilimandjaro",
"Déjeuner pique-nique",
"Eau potable",
],

excludedTitle: "Ce qui n'est pas inclus",
excluded: [
"Vols",
"Assurance voyage",
"Pourboires",
"Équipement personnel de randonnée",
"Dépenses personnelles",
"Boissons alcoolisées",
],

bringLabel: "À EMPORTER",
bringTitle: "Préparez votre randonnée au Kilimandjaro",
whatToBring: [
"Chaussures de randonnée confortables",
"Veste chaude et vêtements en plusieurs couches",
"Veste imperméable",
"Chapeau et crème solaire",
"Petit sac à dos",
"Appareil photo",
"Médicaments personnels",
],

imageAlt: "Randonnée d'une journée sur le plateau de Shira du Kilimandjaro",
ctaTitle: "Prêt pour votre randonnée d'une journée au Kilimandjaro ?",
ctaText:
"Contactez Kilimanjaro Travel dès aujourd'hui et recevez un devis personnalisé pour votre randonnée privée d'une journée sur le plateau de Shira.",
quote: "Demander un devis",
whatsapp: "Discuter sur WhatsApp",
},

es: {
heroTitle: "Excursión de un día por la Meseta de Shira del Kilimanjaro",
heroSubtitle:
"Descubre la belleza del Monte Kilimanjaro en una caminata guiada de gran altitud por la espectacular Meseta de Shira.",
overviewLabel: "DESCRIPCIÓN DEL TOUR",
overviewTitle: "Vive el Kilimanjaro en un día",
overview1:
"La excursión de un día por la Meseta de Shira es ideal para viajeros que quieren conocer el Monte Kilimanjaro sin realizar una ascensión de varios días. La meseta ofrece paisajes volcánicos espectaculares, vegetación única y hermosas vistas de la montaña.",
overview2:
"Esta caminata privada con guía puede organizarse desde Arusha o Moshi. Las condiciones meteorológicas y las normas del parque pueden afectar la ruta y los horarios exactos.",
itineraryTitle: "Itinerario de día completo",

itinerary: [
{
time: "06:30",
title: "Recogida en el hotel",
text: "Recogida en tu hotel de Arusha o Moshi y traslado hacia el Parque Nacional del Kilimanjaro.",
},
{
time: "08:30",
title: "Registro en el parque",
text: "Completa el registro en la entrada del parque, conoce a tu guía de montaña y recibe una breve explicación de seguridad.",
},
{
time: "09:30",
title: "Traslado a la Meseta de Shira",
text: "Viaja en un vehículo todoterreno por el paisaje montañoso hasta la zona de senderismo de la Meseta de Shira.",
},
{
time: "10:30",
title: "Caminata guiada por la Meseta de Shira",
text: "Comienza una caminata guiada por la meseta de gran altitud mientras disfrutas de paisajes volcánicos, vegetación única y vistas del Kilimanjaro cuando el tiempo está despejado.",
},
{
time: "13:00",
title: "Almuerzo tipo picnic",
text: "Disfruta de un almuerzo preparado en un hermoso entorno de montaña.",
},
{
time: "14:00",
title: "Exploración por la tarde",
text: "Continúa explorando la meseta, toma fotografías y aprende sobre el entorno de montaña con tu guía.",
},
{
time: "15:30",
title: "Regreso",
text: "Regresa al vehículo y comienza el descenso de la montaña.",
},
{
time: "18:00",
title: "Regreso al hotel",
text: "Llega a tu hotel en Moshi o Arusha después de una inolvidable caminata de un día por el Kilimanjaro.",
},
],

tripDetails: "Detalles del viaje",
duration: "Duración",
departure: "Salida",
tourType: "Tipo de tour",
bestTime: "Mejor época",
activityLevel: "Nivel de actividad",
fullDay: "Día completo",
arushaMoshi: "Arusha o Moshi",
privateHike: "Caminata privada guiada de montaña",
allYear: "Todo el año",
moderateChallenging: "Moderado a exigente",
bookHike: "Reservar esta caminata",

includedTitle: "Qué está incluido",
included: [
"Recogida y regreso al hotel",
"Transporte privado",
"Guía profesional de montaña",
"Tasas del Parque Nacional del Kilimanjaro",
"Almuerzo tipo picnic",
"Agua potable",
],

excludedTitle: "Qué no está incluido",
excluded: [
"Vuelos",
"Seguro de viaje",
"Propinas",
"Equipo personal de senderismo",
"Gastos personales",
"Bebidas alcohólicas",
],

bringLabel: "QUÉ LLEVAR",
bringTitle: "Prepárate para tu caminata por el Kilimanjaro",
whatToBring: [
"Botas de senderismo cómodas",
"Chaqueta abrigada y ropa en capas",
"Chaqueta impermeable",
"Sombrero y protector solar",
"Mochila pequeña",
"Cámara",
"Medicamentos personales",
],

imageAlt: "Excursión de un día por la Meseta de Shira del Kilimanjaro",
ctaTitle: "¿Listo para tu caminata de un día por el Kilimanjaro?",
ctaText:
"Contacta hoy con Kilimanjaro Travel y recibe un presupuesto personalizado para tu caminata privada de un día por la Meseta de Shira.",
quote: "Solicitar presupuesto",
whatsapp: "Chatear por WhatsApp",
},
};

export default function KilimanjaroShiraPlateauDayHikePage() {
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
image="/images/shira-two.jpg"
/>

<section className="py-20">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-12 md:grid-cols-3">
<div className="md:col-span-2">
<p className="font-bold text-gold">
{t.overviewLabel}
</p>

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
key={`${item.time}-${item.title}`}
className="rounded-3xl bg-cream p-6 shadow-lg"
>
<p className="font-bold text-gold">
{item.time}
</p>

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
<h2 className="text-2xl font-bold">
{t.tripDetails}
</h2>

<div className="mt-6 space-y-4">
<p>
<strong>{t.duration}:</strong> {t.fullDay}
</p>

<p>
<strong>{t.departure}:</strong> {t.arushaMoshi}
</p>

<p>
<strong>{t.tourType}:</strong> {t.privateHike}
</p>

<p>
<strong>{t.bestTime}:</strong> {t.allYear}
</p>

<p>
<strong>{t.activityLevel}:</strong>{" "}
{t.moderateChallenging}
</p>
</div>

<Link
href="/booking"
className="mt-8 inline-block w-full rounded-full bg-gold px-6 py-3 text-center font-bold text-white"
>
{t.bookHike}
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
src="/images/mountain.jpg"
alt={t.imageAlt}
className="h-[420px] w-full object-cover"
/>
</div>

<div>
<p className="font-bold text-gold">
{t.bringLabel}
</p>

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