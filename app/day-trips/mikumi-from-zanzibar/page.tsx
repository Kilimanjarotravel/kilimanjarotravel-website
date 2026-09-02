"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
en: {
heroTitle: "Mikumi Safari from Zanzibar",
heroSubtitle:
"Fly from Zanzibar for an unforgettable one-day wildlife safari in Mikumi National Park.",
overviewLabel: "TOUR OVERVIEW",
overviewTitle: "From Zanzibar Beach to African Safari",
overviewText:
"Enjoy a same-day fly-in safari from Zanzibar to Mikumi National Park. Experience Tanzania's incredible wildlife with professional guides, comfortable transport and spectacular landscapes.",
itineraryTitle: "Full Day Itinerary",

itinerary: [
{
time: "Early Morning",
title: "Hotel Pickup in Zanzibar",
text: "Pickup from your hotel in Zanzibar and private transfer to the airport for your morning flight to Mikumi National Park.",
},
{
time: "Morning",
title: "Flight to Mikumi",
text: "Board your scheduled or charter flight from Zanzibar to the Mikumi area. Flight times are confirmed according to availability.",
},
{
time: "After Arrival",
title: "Meet Your Safari Guide",
text: "Meet your professional safari guide at the airstrip and begin your wildlife adventure in a comfortable 4x4 safari vehicle.",
},
{
time: "Morning to Afternoon",
title: "Mikumi National Park Game Drive",
text: "Explore Mikumi National Park in search of elephants, lions, giraffes, zebras, buffaloes, wildebeest, hippos, antelopes and rich birdlife.",
},
{
time: "Midday",
title: "Bush or Picnic Lunch",
text: "Enjoy lunch at a designated location inside or near the park while taking in the beautiful Mikumi landscape.",
},
{
time: "Afternoon",
title: "Continue the Game Drive",
text: "Continue exploring the park with your guide and visit different wildlife areas before returning to the airstrip.",
},
{
time: "Late Afternoon",
title: "Flight Back to Zanzibar",
text: "Board your return flight to Zanzibar. The exact departure time depends on the confirmed flight schedule.",
},
{
time: "Evening",
title: "Hotel Drop-off",
text: "Meet your driver after landing in Zanzibar and transfer back to your hotel.",
},
],

tripDetails: "Trip Details",
duration: "Duration",
departure: "Departure",
tourType: "Tour Type",
transport: "Transport",
availability: "Availability",
bestTime: "Best Time",
fullDay: "Full Day",
zanzibar: "Zanzibar",
flyInSafari: "Fly-in Wildlife Safari",
flightVehicle: "Return Flight + 4x4 Safari Vehicle",
flightSchedule: "Subject to Flight Schedule",
allYear: "All Year",
bookSafari: "Book This Safari",

includedTitle: "What Is Included",
included: [
"Hotel pickup and drop-off in Zanzibar",
"Return domestic flights",
"Airport transfers",
"Professional safari guide",
"Private or shared 4x4 safari vehicle",
"Mikumi National Park fees",
"Bush or picnic lunch",
"Drinking water",
],

excludedTitle: "What Is Excluded",
excluded: [
"International flights",
"Travel insurance",
"Visa fees",
"Tips and gratuities",
"Personal expenses",
"Alcoholic drinks",
],

bringLabel: "WHAT TO BRING",
bringTitle: "Prepare for Your Fly-in Safari",
whatToBring: [
"Passport or ID",
"Comfortable safari clothing",
"Sun hat",
"Sunscreen",
"Camera or binoculars",
"Light jacket",
"Personal medication",
],

important: "Important:",
importantText:
"Carry the identification requested by the airline. Final pickup and flight times will be confirmed before departure.",
imageAlt: "Mikumi safari from Zanzibar",

ctaTitle: "Ready for Your Mikumi Fly-in Safari?",
ctaText:
"Contact Kilimanjaro Travel for flight availability and a tailor-made quotation from your Zanzibar hotel.",
quote: "Request a Quote",
checkFlights: "Check Flight Availability",
},

de: {
heroTitle: "Mikumi-Safari ab Sansibar",
heroSubtitle:
"Fliegen Sie von Sansibar zu einer unvergesslichen eintägigen Wildtiersafari im Mikumi-Nationalpark.",
overviewLabel: "TOURÜBERSICHT",
overviewTitle: "Vom Strand Sansibars auf Safari in Afrika",
overviewText:
"Erleben Sie eine Flug-Safari am selben Tag von Sansibar zum Mikumi-Nationalpark. Entdecken Sie Tansanias beeindruckende Tierwelt mit professionellen Guides, komfortablem Transport und spektakulären Landschaften.",
itineraryTitle: "Tagesprogramm",

itinerary: [
{
time: "Früher Morgen",
title: "Abholung vom Hotel in Sansibar",
text: "Abholung von Ihrem Hotel auf Sansibar und privater Transfer zum Flughafen für Ihren Morgenflug zum Mikumi-Nationalpark.",
},
{
time: "Morgen",
title: "Flug nach Mikumi",
text: "Nehmen Sie Ihren Linien- oder Charterflug von Sansibar in die Region Mikumi. Die Flugzeiten werden je nach Verfügbarkeit bestätigt.",
},
{
time: "Nach der Ankunft",
title: "Treffen mit Ihrem Safari-Guide",
text: "Treffen Sie Ihren professionellen Safari-Guide am Flugplatz und beginnen Sie Ihr Wildtierabenteuer in einem komfortablen 4x4-Safari-Fahrzeug.",
},
{
time: "Vormittag bis Nachmittag",
title: "Pirschfahrt im Mikumi-Nationalpark",
text: "Erkunden Sie den Mikumi-Nationalpark auf der Suche nach Elefanten, Löwen, Giraffen, Zebras, Büffeln, Gnus, Flusspferden, Antilopen und einer vielfältigen Vogelwelt.",
},
{
time: "Mittagszeit",
title: "Mittagessen im Busch oder Picknick",
text: "Genießen Sie Ihr Mittagessen an einem ausgewiesenen Ort im oder nahe dem Park und bewundern Sie die wunderschöne Landschaft von Mikumi.",
},
{
time: "Nachmittag",
title: "Fortsetzung der Pirschfahrt",
text: "Erkunden Sie den Park weiter mit Ihrem Guide und besuchen Sie verschiedene Wildtiergebiete, bevor Sie zum Flugplatz zurückkehren.",
},
{
time: "Später Nachmittag",
title: "Rückflug nach Sansibar",
text: "Nehmen Sie Ihren Rückflug nach Sansibar. Die genaue Abflugzeit hängt vom bestätigten Flugplan ab.",
},
{
time: "Abend",
title: "Rücktransfer zum Hotel",
text: "Treffen Sie nach der Landung in Sansibar Ihren Fahrer und fahren Sie zurück zu Ihrem Hotel.",
},
],

tripDetails: "Reisedetails",
duration: "Dauer",
departure: "Abreise",
tourType: "Tourart",
transport: "Transport",
availability: "Verfügbarkeit",
bestTime: "Beste Reisezeit",
fullDay: "Ganztägig",
zanzibar: "Sansibar",
flyInSafari: "Flug-Wildtiersafari",
flightVehicle: "Hin- und Rückflug + 4x4-Safari-Fahrzeug",
flightSchedule: "Abhängig vom Flugplan",
allYear: "Ganzjährig",
bookSafari: "Diese Safari buchen",

includedTitle: "Inklusive Leistungen",
included: [
"Abholung und Rücktransfer zum Hotel auf Sansibar",
"Inlands-Hin- und Rückflüge",
"Flughafentransfers",
"Professioneller Safari-Guide",
"Privates oder gemeinsames 4x4-Safari-Fahrzeug",
"Gebühren für den Mikumi-Nationalpark",
"Mittagessen im Busch oder Picknick",
"Trinkwasser",
],

excludedTitle: "Nicht inklusive",
excluded: [
"Internationale Flüge",
"Reiseversicherung",
"Visagebühren",
"Trinkgelder",
"Persönliche Ausgaben",
"Alkoholische Getränke",
],

bringLabel: "WAS SIE MITBRINGEN SOLLTEN",
bringTitle: "Bereiten Sie sich auf Ihre Flug-Safari vor",
whatToBring: [
"Reisepass oder Ausweis",
"Bequeme Safari-Kleidung",
"Sonnenhut",
"Sonnencreme",
"Kamera oder Fernglas",
"Leichte Jacke",
"Persönliche Medikamente",
],

important: "Wichtig:",
importantText:
"Bringen Sie den von der Fluggesellschaft geforderten Ausweis mit. Die endgültigen Abhol- und Flugzeiten werden vor der Abreise bestätigt.",
imageAlt: "Mikumi-Safari ab Sansibar",

ctaTitle: "Bereit für Ihre Mikumi-Flug-Safari?",
ctaText:
"Kontaktieren Sie Kilimanjaro Travel für Informationen zur Flugverfügbarkeit und ein maßgeschneidertes Angebot ab Ihrem Hotel auf Sansibar.",
quote: "Angebot anfragen",
checkFlights: "Flugverfügbarkeit prüfen",
},

fr: {
heroTitle: "Safari à Mikumi depuis Zanzibar",
heroSubtitle:
"Volez depuis Zanzibar pour un safari inoubliable d'une journée au parc national de Mikumi.",
overviewLabel: "APERÇU DU CIRCUIT",
overviewTitle: "Des plages de Zanzibar au safari africain",
overviewText:
"Profitez d'un safari aérien aller-retour dans la même journée entre Zanzibar et le parc national de Mikumi. Découvrez la faune exceptionnelle de Tanzanie avec des guides professionnels, un transport confortable et des paysages spectaculaires.",
itineraryTitle: "Itinéraire de la journée",

itinerary: [
{
time: "Tôt le matin",
title: "Prise en charge à l'hôtel à Zanzibar",
text: "Prise en charge à votre hôtel à Zanzibar et transfert privé vers l'aéroport pour votre vol matinal vers le parc national de Mikumi.",
},
{
time: "Matin",
title: "Vol vers Mikumi",
text: "Embarquez sur votre vol régulier ou charter de Zanzibar vers la région de Mikumi. Les horaires de vol sont confirmés selon les disponibilités.",
},
{
time: "Après l'arrivée",
title: "Rencontre avec votre guide de safari",
text: "Retrouvez votre guide professionnel à la piste d'atterrissage et commencez votre aventure animalière dans un véhicule safari 4x4 confortable.",
},
{
time: "Du matin à l'après-midi",
title: "Safari dans le parc national de Mikumi",
text: "Explorez le parc national de Mikumi à la recherche d'éléphants, lions, girafes, zèbres, buffles, gnous, hippopotames, antilopes et d'une riche avifaune.",
},
{
time: "Midi",
title: "Déjeuner dans la brousse ou pique-nique",
text: "Profitez d'un déjeuner dans un endroit désigné à l'intérieur ou à proximité du parc tout en admirant les magnifiques paysages de Mikumi.",
},
{
time: "Après-midi",
title: "Continuation du safari",
text: "Continuez à explorer le parc avec votre guide et découvrez différentes zones animalières avant de retourner à la piste d'atterrissage.",
},
{
time: "Fin d'après-midi",
title: "Vol retour vers Zanzibar",
text: "Embarquez pour votre vol retour vers Zanzibar. L'heure exacte du départ dépend de l'horaire de vol confirmé.",
},
{
time: "Soir",
title: "Retour à l'hôtel",
text: "Retrouvez votre chauffeur après l'atterrissage à Zanzibar et retournez à votre hôtel.",
},
],

tripDetails: "Détails du voyage",
duration: "Durée",
departure: "Départ",
tourType: "Type de circuit",
transport: "Transport",
availability: "Disponibilité",
bestTime: "Meilleure période",
fullDay: "Journée complète",
zanzibar: "Zanzibar",
flyInSafari: "Safari aérien",
flightVehicle: "Vol aller-retour + véhicule safari 4x4",
flightSchedule: "Selon l'horaire des vols",
allYear: "Toute l'année",
bookSafari: "Réserver ce safari",

includedTitle: "Ce qui est inclus",
included: [
"Prise en charge et retour à l'hôtel à Zanzibar",
"Vols domestiques aller-retour",
"Transferts aéroport",
"Guide professionnel de safari",
"Véhicule safari 4x4 privé ou partagé",
"Frais du parc national de Mikumi",
"Déjeuner dans la brousse ou pique-nique",
"Eau potable",
],

excludedTitle: "Ce qui n'est pas inclus",
excluded: [
"Vols internationaux",
"Assurance voyage",
"Frais de visa",
"Pourboires",
"Dépenses personnelles",
"Boissons alcoolisées",
],

bringLabel: "À EMPORTER",
bringTitle: "Préparez votre safari aérien",
whatToBring: [
"Passeport ou pièce d'identité",
"Vêtements de safari confortables",
"Chapeau",
"Crème solaire",
"Appareil photo ou jumelles",
"Veste légère",
"Médicaments personnels",
],

important: "Important :",
importantText:
"Munissez-vous de la pièce d'identité demandée par la compagnie aérienne. Les horaires définitifs de prise en charge et de vol seront confirmés avant le départ.",
imageAlt: "Safari à Mikumi depuis Zanzibar",

ctaTitle: "Prêt pour votre safari aérien à Mikumi ?",
ctaText:
"Contactez Kilimanjaro Travel pour connaître les disponibilités des vols et recevoir un devis personnalisé depuis votre hôtel à Zanzibar.",
quote: "Demander un devis",
checkFlights: "Vérifier la disponibilité des vols",
},

es: {
heroTitle: "Safari en Mikumi desde Zanzíbar",
heroSubtitle:
"Vuela desde Zanzíbar para disfrutar de un inolvidable safari de un día en el Parque Nacional Mikumi.",
overviewLabel: "DESCRIPCIÓN DEL TOUR",
overviewTitle: "De las playas de Zanzíbar al safari africano",
overviewText:
"Disfruta de un safari aéreo de ida y vuelta en el mismo día desde Zanzíbar hasta el Parque Nacional Mikumi. Descubre la increíble fauna de Tanzania con guías profesionales, transporte cómodo y paisajes espectaculares.",
itineraryTitle: "Itinerario de día completo",

itinerary: [
{
time: "Temprano por la mañana",
title: "Recogida en el hotel de Zanzíbar",
text: "Recogida en tu hotel de Zanzíbar y traslado privado al aeropuerto para tomar el vuelo de la mañana hacia el Parque Nacional Mikumi.",
},
{
time: "Mañana",
title: "Vuelo a Mikumi",
text: "Toma tu vuelo regular o chárter desde Zanzíbar hasta la zona de Mikumi. Los horarios se confirman según disponibilidad.",
},
{
time: "Después de la llegada",
title: "Encuentro con tu guía de safari",
text: "Conoce a tu guía profesional de safari en la pista de aterrizaje y comienza tu aventura en un cómodo vehículo safari 4x4.",
},
{
time: "De la mañana a la tarde",
title: "Safari en el Parque Nacional Mikumi",
text: "Explora el Parque Nacional Mikumi en busca de elefantes, leones, jirafas, cebras, búfalos, ñus, hipopótamos, antílopes y una rica variedad de aves.",
},
{
time: "Mediodía",
title: "Almuerzo en la naturaleza o picnic",
text: "Disfruta del almuerzo en un lugar designado dentro o cerca del parque mientras contemplas los hermosos paisajes de Mikumi.",
},
{
time: "Tarde",
title: "Continuación del safari",
text: "Continúa explorando el parque con tu guía y visita diferentes zonas de fauna antes de regresar a la pista de aterrizaje.",
},
{
time: "Final de la tarde",
title: "Vuelo de regreso a Zanzíbar",
text: "Toma el vuelo de regreso a Zanzíbar. La hora exacta de salida depende del horario de vuelo confirmado.",
},
{
time: "Noche",
title: "Regreso al hotel",
text: "Encuentra a tu conductor después de aterrizar en Zanzíbar y regresa a tu hotel.",
},
],

tripDetails: "Detalles del viaje",
duration: "Duración",
departure: "Salida",
tourType: "Tipo de tour",
transport: "Transporte",
availability: "Disponibilidad",
bestTime: "Mejor época",
fullDay: "Día completo",
zanzibar: "Zanzíbar",
flyInSafari: "Safari de fauna con vuelo",
flightVehicle: "Vuelo de ida y vuelta + vehículo safari 4x4",
flightSchedule: "Sujeto al horario de vuelos",
allYear: "Todo el año",
bookSafari: "Reservar este safari",

includedTitle: "Qué está incluido",
included: [
"Recogida y regreso al hotel en Zanzíbar",
"Vuelos domésticos de ida y vuelta",
"Traslados al aeropuerto",
"Guía profesional de safari",
"Vehículo safari 4x4 privado o compartido",
"Tasas del Parque Nacional Mikumi",
"Almuerzo en la naturaleza o picnic",
"Agua potable",
],

excludedTitle: "Qué no está incluido",
excluded: [
"Vuelos internacionales",
"Seguro de viaje",
"Tasas de visado",
"Propinas",
"Gastos personales",
"Bebidas alcohólicas",
],

bringLabel: "QUÉ LLEVAR",
bringTitle: "Prepárate para tu safari aéreo",
whatToBring: [
"Pasaporte o documento de identidad",
"Ropa cómoda para safari",
"Sombrero",
"Protector solar",
"Cámara o prismáticos",
"Chaqueta ligera",
"Medicamentos personales",
],

important: "Importante:",
importantText:
"Lleva el documento de identidad solicitado por la aerolínea. Los horarios definitivos de recogida y vuelo se confirmarán antes de la salida.",
imageAlt: "Safari en Mikumi desde Zanzíbar",

ctaTitle: "¿Listo para tu safari aéreo en Mikumi?",
ctaText:
"Contacta con Kilimanjaro Travel para conocer la disponibilidad de vuelos y recibir un presupuesto personalizado desde tu hotel en Zanzíbar.",
quote: "Solicitar presupuesto",
checkFlights: "Consultar disponibilidad de vuelos",
},
};

export default function MikumiFromZanzibarPage() {
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
image="/images/mikumi-three.jpg"
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
{t.overviewText}
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
<strong>{t.departure}:</strong> {t.zanzibar}
</p>

<p>
<strong>{t.tourType}:</strong> {t.flyInSafari}
</p>

<p>
<strong>{t.transport}:</strong> {t.flightVehicle}
</p>

<p>
<strong>{t.availability}:</strong> {t.flightSchedule}
</p>

<p>
<strong>{t.bestTime}:</strong> {t.allYear}
</p>
</div>

<Link
href="/booking"
className="mt-8 inline-block w-full rounded-full bg-gold px-6 py-3 text-center font-bold text-white"
>
{t.bookSafari}
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
src="/images/mikumi-day-two.jpg"
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

<div className="mt-8 rounded-2xl bg-cream p-5 text-black/70">
<strong className="text-forest">
{t.important}
</strong>{" "}
{t.importantText}
</div>
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
{t.checkFlights}
</a>
</div>
</div>
</section>

<Footer />
</main>
);
}