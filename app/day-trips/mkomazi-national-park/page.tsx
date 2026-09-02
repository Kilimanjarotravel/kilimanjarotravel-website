"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    heroTitle: "Mkomazi National Park Day Trip",
    heroSubtitle:
      "Discover dramatic dry-country landscapes, rich birdlife and one of Tanzania’s most important wildlife conservation areas.",
    overviewLabel: "TOUR OVERVIEW",
    overviewTitle: "A Wild and Peaceful Safari Experience",
    overview1:
      "Mkomazi National Park is a beautiful and less-crowded safari destination in northern Tanzania. The park forms part of the wider Mkomazi–Tsavo ecosystem and features dry savannah, acacia woodland, ancient baobab trees and isolated rocky hills.",
    overview2:
      "The park supports giraffes, zebras, elephants, buffaloes, antelopes and many bird species. It is also well known for its important conservation work involving black rhinos and African wild dogs.",
    overview3:
      "This private day trip is best arranged from Moshi, Same or the Kilimanjaro area. Exact departure time and activities may vary depending on your pickup location, road conditions and current park arrangements.",
    itineraryTitle: "Full Day Itinerary",

    itinerary: [
      {
        time: "06:30",
        title: "Hotel Pickup",
        text: "Pickup from your hotel in Moshi, Same or the Kilimanjaro area and begin the scenic drive toward Mkomazi National Park.",
      },
      {
        time: "08:30",
        title: "Arrival and Park Registration",
        text: "Complete the park registration, meet your safari guide and receive a short introduction to Mkomazi National Park.",
      },
      {
        time: "09:00",
        title: "Morning Game Drive",
        text: "Begin your game drive through the park’s dry savannah, acacia woodland, rocky hills and baobab landscapes.",
      },
      {
        time: "11:30",
        title: "Wildlife and Birdwatching",
        text: "Continue searching for giraffes, zebras, elephants, antelopes, buffaloes and the park’s diverse birdlife.",
      },
      {
        time: "13:00",
        title: "Picnic Lunch",
        text: "Enjoy a packed picnic lunch at a designated site inside the park.",
      },
      {
        time: "14:00",
        title: "Afternoon Game Drive",
        text: "Continue exploring the park and learn about its important black rhino and African wild dog conservation programs.",
      },
      {
        time: "16:00",
        title: "Leave Mkomazi National Park",
        text: "Exit the park and begin your return journey through the beautiful northern Tanzanian landscape.",
      },
      {
        time: "18:00",
        title: "Hotel Drop-off",
        text: "Arrive at your hotel in Moshi, Same or the Kilimanjaro area after a memorable Mkomazi safari.",
      },
    ],

    tripDetails: "Trip Details",
    duration: "Duration",
    departure: "Departure",
    tourType: "Tour Type",
    bestTime: "Best Time",
    transport: "Transport",
    activityLevel: "Activity Level",
    fullDay: "Full Day",
    departureArea: "Moshi, Same or Kilimanjaro Area",
    privateSafari: "Private Wildlife Safari",
    allYear: "All Year",
    safariVehicle: "Private 4x4 Safari Vehicle",
    easy: "Easy",
    bookTour: "Book This Tour",

    includedTitle: "What Is Included",
    included: [
      "Hotel pickup and drop-off",
      "Private 4x4 safari vehicle",
      "Professional English-speaking safari guide",
      "Mkomazi National Park entrance fees",
      "Picnic lunch",
      "Drinking water",
    ],

    excludedTitle: "What Is Excluded",
    excluded: [
      "Flights",
      "Travel insurance",
      "Tips and gratuities",
      "Personal expenses",
      "Alcoholic drinks",
      "Special conservation activities not included in the standard itinerary",
    ],

    bringLabel: "WHAT TO BRING",
    bringTitle: "Prepare for Your Mkomazi Safari",
    whatToBring: [
      "Comfortable clothing and closed shoes",
      "Sun hat and sunscreen",
      "Camera or binoculars",
      "Light jacket",
      "Small backpack",
      "Personal medication",
    ],

    imageAlt: "Mkomazi National Park safari",
    ctaTitle: "Ready for Your Mkomazi Adventure?",
    ctaText:
      "Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private Mkomazi National Park day trip.",
    quote: "Request a Quote",
    whatsapp: "Chat on WhatsApp",
  },

  de: {
    heroTitle: "Tagestour im Mkomazi-Nationalpark",
    heroSubtitle:
      "Entdecken Sie eindrucksvolle Trockensavannen, eine vielfältige Vogelwelt und eines der wichtigsten Naturschutzgebiete Tansanias.",
    overviewLabel: "TOURÜBERSICHT",
    overviewTitle: "Ein wildes und entspanntes Safari-Erlebnis",
    overview1:
      "Der Mkomazi-Nationalpark ist ein wunderschönes und weniger überlaufenes Safari-Ziel im Norden Tansanias. Der Park ist Teil des größeren Mkomazi-Tsavo-Ökosystems und bietet trockene Savannen, Akazienwälder, uralte Baobab-Bäume und abgelegene felsige Hügel.",
    overview2:
      "Im Park leben Giraffen, Zebras, Elefanten, Büffel, Antilopen und zahlreiche Vogelarten. Außerdem ist Mkomazi für wichtige Schutzprogramme für Spitzmaulnashörner und Afrikanische Wildhunde bekannt.",
    overview3:
      "Diese private Tagestour lässt sich am besten ab Moshi, Same oder aus der Kilimandscharo-Region organisieren. Die genaue Abfahrtszeit und die Aktivitäten können je nach Abholort, Straßenbedingungen und aktuellen Parkregelungen variieren.",
    itineraryTitle: "Tagesprogramm",

    itinerary: [
      {
        time: "06:30",
        title: "Abholung vom Hotel",
        text: "Abholung von Ihrem Hotel in Moshi, Same oder der Kilimandscharo-Region und Beginn der landschaftlich reizvollen Fahrt zum Mkomazi-Nationalpark.",
      },
      {
        time: "08:30",
        title: "Ankunft und Parkregistrierung",
        text: "Durchführung der Parkregistrierung, Treffen mit Ihrem Safari-Guide und kurze Einführung in den Mkomazi-Nationalpark.",
      },
      {
        time: "09:00",
        title: "Morgen-Pirschfahrt",
        text: "Beginnen Sie Ihre Pirschfahrt durch die trockene Savanne, Akazienwälder, felsigen Hügel und Baobab-Landschaften des Parks.",
      },
      {
        time: "11:30",
        title: "Wildbeobachtung und Vogelbeobachtung",
        text: "Halten Sie Ausschau nach Giraffen, Zebras, Elefanten, Antilopen, Büffeln und der vielfältigen Vogelwelt des Parks.",
      },
      {
        time: "13:00",
        title: "Picknick-Mittagessen",
        text: "Genießen Sie ein Lunchpaket an einem ausgewiesenen Picknickplatz im Park.",
      },
      {
        time: "14:00",
        title: "Nachmittags-Pirschfahrt",
        text: "Erkunden Sie den Park weiter und erfahren Sie mehr über die wichtigen Schutzprogramme für Spitzmaulnashörner und Afrikanische Wildhunde.",
      },
      {
        time: "16:00",
        title: "Abfahrt aus dem Mkomazi-Nationalpark",
        text: "Verlassen Sie den Park und beginnen Sie die Rückfahrt durch die wunderschöne Landschaft Nordtansanias.",
      },
      {
        time: "18:00",
        title: "Rücktransfer zum Hotel",
        text: "Nach einer unvergesslichen Mkomazi-Safari erreichen Sie Ihr Hotel in Moshi, Same oder der Kilimandscharo-Region.",
      },
    ],

    tripDetails: "Reisedetails",
    duration: "Dauer",
    departure: "Abreise",
    tourType: "Tourart",
    bestTime: "Beste Reisezeit",
    transport: "Transport",
    activityLevel: "Aktivitätsniveau",
    fullDay: "Ganztägig",
    departureArea: "Moshi, Same oder Kilimandscharo-Region",
    privateSafari: "Private Wildtiersafari",
    allYear: "Ganzjährig",
    safariVehicle: "Privates 4x4-Safari-Fahrzeug",
    easy: "Leicht",
    bookTour: "Diese Tour buchen",

    includedTitle: "Inklusive Leistungen",
    included: [
      "Abholung und Rücktransfer zum Hotel",
      "Privates 4x4-Safari-Fahrzeug",
      "Professioneller englischsprachiger Safari-Guide",
      "Eintrittsgebühren für den Mkomazi-Nationalpark",
      "Picknick-Mittagessen",
      "Trinkwasser",
    ],

    excludedTitle: "Nicht inklusive",
    excluded: [
      "Flüge",
      "Reiseversicherung",
      "Trinkgelder",
      "Persönliche Ausgaben",
      "Alkoholische Getränke",
      "Spezielle Naturschutzaktivitäten, die nicht im Standardprogramm enthalten sind",
    ],

    bringLabel: "WAS SIE MITBRINGEN SOLLTEN",
    bringTitle: "Bereiten Sie sich auf Ihre Mkomazi-Safari vor",
    whatToBring: [
      "Bequeme Kleidung und geschlossene Schuhe",
      "Sonnenhut und Sonnencreme",
      "Kamera oder Fernglas",
      "Leichte Jacke",
      "Kleiner Rucksack",
      "Persönliche Medikamente",
    ],

    imageAlt: "Safari im Mkomazi-Nationalpark",
    ctaTitle: "Bereit für Ihr Mkomazi-Abenteuer?",
    ctaText:
      "Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihre private Tagestour im Mkomazi-Nationalpark.",
    quote: "Angebot anfragen",
    whatsapp: "Auf WhatsApp chatten",
  },

  fr: {
    heroTitle: "Excursion d'une journée au parc national de Mkomazi",
    heroSubtitle:
      "Découvrez des paysages spectaculaires de savane sèche, une riche avifaune et l'une des principales zones de conservation de la faune en Tanzanie.",
    overviewLabel: "APERÇU DU CIRCUIT",
    overviewTitle: "Une expérience de safari sauvage et paisible",
    overview1:
      "Le parc national de Mkomazi est une magnifique destination de safari moins fréquentée dans le nord de la Tanzanie. Le parc fait partie du vaste écosystème Mkomazi-Tsavo et présente des savanes sèches, des forêts d'acacias, d'anciens baobabs et des collines rocheuses isolées.",
    overview2:
      "Le parc abrite des girafes, zèbres, éléphants, buffles, antilopes et de nombreuses espèces d'oiseaux. Il est également reconnu pour ses importants programmes de conservation des rhinocéros noirs et des lycaons africains.",
    overview3:
      "Cette excursion privée d'une journée est idéale au départ de Moshi, Same ou de la région du Kilimandjaro. L'heure exacte de départ et les activités peuvent varier selon votre lieu de prise en charge, l'état des routes et les dispositions actuelles du parc.",
    itineraryTitle: "Itinéraire de la journée",

    itinerary: [
      {
        time: "06:30",
        title: "Prise en charge à l'hôtel",
        text: "Prise en charge à votre hôtel à Moshi, Same ou dans la région du Kilimandjaro et départ vers le parc national de Mkomazi.",
      },
      {
        time: "08:30",
        title: "Arrivée et enregistrement au parc",
        text: "Effectuez les formalités d'entrée, rencontrez votre guide de safari et recevez une courte présentation du parc national de Mkomazi.",
      },
      {
        time: "09:00",
        title: "Safari du matin",
        text: "Commencez votre safari à travers les savanes sèches, les forêts d'acacias, les collines rocheuses et les paysages de baobabs du parc.",
      },
      {
        time: "11:30",
        title: "Observation de la faune et des oiseaux",
        text: "Continuez à rechercher des girafes, zèbres, éléphants, antilopes, buffles et les nombreuses espèces d'oiseaux du parc.",
      },
      {
        time: "13:00",
        title: "Déjeuner pique-nique",
        text: "Profitez d'un déjeuner pique-nique dans un site désigné à l'intérieur du parc.",
      },
      {
        time: "14:00",
        title: "Safari de l'après-midi",
        text: "Continuez à explorer le parc et découvrez les importants programmes de conservation des rhinocéros noirs et des lycaons africains.",
      },
      {
        time: "16:00",
        title: "Départ du parc national de Mkomazi",
        text: "Quittez le parc et commencez votre retour à travers les magnifiques paysages du nord de la Tanzanie.",
      },
      {
        time: "18:00",
        title: "Retour à l'hôtel",
        text: "Arrivée à votre hôtel à Moshi, Same ou dans la région du Kilimandjaro après un safari mémorable à Mkomazi.",
      },
    ],

    tripDetails: "Détails du voyage",
    duration: "Durée",
    departure: "Départ",
    tourType: "Type de circuit",
    bestTime: "Meilleure période",
    transport: "Transport",
    activityLevel: "Niveau d'activité",
    fullDay: "Journée complète",
    departureArea: "Moshi, Same ou région du Kilimandjaro",
    privateSafari: "Safari privé de découverte de la faune",
    allYear: "Toute l'année",
    safariVehicle: "Véhicule safari 4x4 privé",
    easy: "Facile",
    bookTour: "Réserver cette excursion",

    includedTitle: "Ce qui est inclus",
    included: [
      "Prise en charge et retour à l'hôtel",
      "Véhicule safari 4x4 privé",
      "Guide safari professionnel anglophone",
      "Frais d'entrée au parc national de Mkomazi",
      "Déjeuner pique-nique",
      "Eau potable",
    ],

    excludedTitle: "Ce qui n'est pas inclus",
    excluded: [
      "Vols",
      "Assurance voyage",
      "Pourboires",
      "Dépenses personnelles",
      "Boissons alcoolisées",
      "Activités spéciales de conservation non incluses dans l'itinéraire standard",
    ],

    bringLabel: "À EMPORTER",
    bringTitle: "Préparez votre safari à Mkomazi",
    whatToBring: [
      "Vêtements confortables et chaussures fermées",
      "Chapeau et crème solaire",
      "Appareil photo ou jumelles",
      "Veste légère",
      "Petit sac à dos",
      "Médicaments personnels",
    ],

    imageAlt: "Safari dans le parc national de Mkomazi",
    ctaTitle: "Prêt pour votre aventure à Mkomazi ?",
    ctaText:
      "Contactez Kilimanjaro Travel dès aujourd'hui et recevez un devis personnalisé pour votre excursion privée d'une journée au parc national de Mkomazi.",
    quote: "Demander un devis",
    whatsapp: "Discuter sur WhatsApp",
  },

  es: {
    heroTitle: "Excursión de un día al Parque Nacional Mkomazi",
    heroSubtitle:
      "Descubre paisajes espectaculares de sabana seca, una rica vida de aves y una de las áreas de conservación de fauna más importantes de Tanzania.",
    overviewLabel: "DESCRIPCIÓN DEL TOUR",
    overviewTitle: "Una experiencia de safari salvaje y tranquila",
    overview1:
      "El Parque Nacional Mkomazi es un hermoso destino de safari menos concurrido en el norte de Tanzania. El parque forma parte del amplio ecosistema Mkomazi-Tsavo y cuenta con sabanas secas, bosques de acacias, antiguos baobabs y colinas rocosas aisladas.",
    overview2:
      "El parque alberga jirafas, cebras, elefantes, búfalos, antílopes y muchas especies de aves. También es conocido por sus importantes programas de conservación del rinoceronte negro y del licaón africano.",
    overview3:
      "Esta excursión privada de un día es ideal desde Moshi, Same o la zona del Kilimanjaro. La hora exacta de salida y las actividades pueden variar según el lugar de recogida, las condiciones de la carretera y las disposiciones actuales del parque.",
    itineraryTitle: "Itinerario de día completo",

    itinerary: [
      {
        time: "06:30",
        title: "Recogida en el hotel",
        text: "Recogida en tu hotel en Moshi, Same o la zona del Kilimanjaro y comienzo del recorrido panorámico hacia el Parque Nacional Mkomazi.",
      },
      {
        time: "08:30",
        title: "Llegada y registro en el parque",
        text: "Completa el registro de entrada, conoce a tu guía de safari y recibe una breve introducción al Parque Nacional Mkomazi.",
      },
      {
        time: "09:00",
        title: "Safari de la mañana",
        text: "Comienza el safari por las sabanas secas, bosques de acacias, colinas rocosas y paisajes de baobabs del parque.",
      },
      {
        time: "11:30",
        title: "Observación de fauna y aves",
        text: "Continúa buscando jirafas, cebras, elefantes, antílopes, búfalos y la diversa vida de aves del parque.",
      },
      {
        time: "13:00",
        title: "Almuerzo tipo picnic",
        text: "Disfruta de un almuerzo tipo picnic en un lugar designado dentro del parque.",
      },
      {
        time: "14:00",
        title: "Safari de la tarde",
        text: "Continúa explorando el parque y aprende sobre sus importantes programas de conservación del rinoceronte negro y del licaón africano.",
      },
      {
        time: "16:00",
        title: "Salida del Parque Nacional Mkomazi",
        text: "Sal del parque y comienza el viaje de regreso a través de los hermosos paisajes del norte de Tanzania.",
      },
      {
        time: "18:00",
        title: "Regreso al hotel",
        text: "Llega a tu hotel en Moshi, Same o la zona del Kilimanjaro después de un memorable safari por Mkomazi.",
      },
    ],

    tripDetails: "Detalles del viaje",
    duration: "Duración",
    departure: "Salida",
    tourType: "Tipo de tour",
    bestTime: "Mejor época",
    transport: "Transporte",
    activityLevel: "Nivel de actividad",
    fullDay: "Día completo",
    departureArea: "Moshi, Same o zona del Kilimanjaro",
    privateSafari: "Safari privado de fauna",
    allYear: "Todo el año",
    safariVehicle: "Vehículo safari 4x4 privado",
    easy: "Fácil",
    bookTour: "Reservar este tour",

    includedTitle: "Qué está incluido",
    included: [
      "Recogida y regreso al hotel",
      "Vehículo safari 4x4 privado",
      "Guía profesional de safari de habla inglesa",
      "Tasas de entrada al Parque Nacional Mkomazi",
      "Almuerzo tipo picnic",
      "Agua potable",
    ],

    excludedTitle: "Qué no está incluido",
    excluded: [
      "Vuelos",
      "Seguro de viaje",
      "Propinas",
      "Gastos personales",
      "Bebidas alcohólicas",
      "Actividades especiales de conservación no incluidas en el itinerario estándar",
    ],

    bringLabel: "QUÉ LLEVAR",
    bringTitle: "Prepárate para tu safari en Mkomazi",
    whatToBring: [
      "Ropa cómoda y calzado cerrado",
      "Sombrero y protector solar",
      "Cámara o prismáticos",
      "Chaqueta ligera",
      "Mochila pequeña",
      "Medicamentos personales",
    ],

    imageAlt: "Safari en el Parque Nacional Mkomazi",
    ctaTitle: "¿Listo para tu aventura en Mkomazi?",
    ctaText:
      "Contacta hoy con Kilimanjaro Travel y recibe un presupuesto personalizado para tu excursión privada de un día al Parque Nacional Mkomazi.",
    quote: "Solicitar presupuesto",
    whatsapp: "Chatear por WhatsApp",
  },
};

export default function MkomaziNationalParkPage() {
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
        image="/images/tembo-mkomazi.jpg"
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

              <p className="mt-4 text-lg leading-8 text-black/70">
                {t.overview3}
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
                  <strong>{t.departure}:</strong> {t.departureArea}
                </p>

                <p>
                  <strong>{t.tourType}:</strong> {t.privateSafari}
                </p>

                <p>
                  <strong>{t.bestTime}:</strong> {t.allYear}
                </p>

                <p>
                  <strong>{t.transport}:</strong> {t.safariVehicle}
                </p>

                <p>
                  <strong>{t.activityLevel}:</strong> {t.easy}
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
                src="/images/punda.jpg"
                alt={t.imageAlt}
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