"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    heroTitle: "Nyerere National Park Fly-in Day Trip",
    heroSubtitle:
      "Fly from Zanzibar for an unforgettable full-day safari in Tanzania's largest national park.",
    overviewLabel: "TOUR OVERVIEW",
    overviewTitle: "Explore Tanzania's Largest National Park",
    overview1:
      "Experience one of Tanzania's most spectacular safari destinations with a convenient fly-in day trip from Zanzibar. Nyerere National Park is famous for its vast wilderness, the Rufiji River and incredible wildlife.",
    overview2:
      "During your adventure you may encounter elephants, lions, buffaloes, giraffes, zebras, hippos, crocodiles and many bird species while enjoying a professionally guided game drive.",
    itineraryTitle: "Day Trip Itinerary",

    itinerary: [
      {
        title: "Hotel Transfer",
        text: "Transfer from your hotel in Zanzibar to the airport for your scheduled flight.",
      },
      {
        title: "Flight to Nyerere National Park",
        text: "Enjoy a scenic flight before meeting your professional safari guide.",
      },
      {
        title: "Game Drive",
        text: "Explore Nyerere National Park searching for elephants, lions, buffaloes, giraffes, hippos and other wildlife.",
      },
      {
        title: "Bush Lunch",
        text: "Enjoy lunch in the park surrounded by the African wilderness.",
      },
      {
        title: "Afternoon Safari",
        text: "Continue your wildlife adventure before returning to the airstrip.",
      },
      {
        title: "Flight Back to Zanzibar",
        text: "Fly back to Zanzibar where your driver will transfer you to your hotel.",
      },
    ],

    tripDetails: "Trip Details",
    duration: "Duration",
    departure: "Departure",
    tourType: "Tour Type",
    bestTime: "Best Time",
    transport: "Transport",
    fullDay: "Full Day",
    zanzibar: "Zanzibar",
    flyInSafari: "Fly-in Safari",
    allYear: "All Year",
    flightSafariVehicle: "Flight & Safari Vehicle",
    bookTour: "Book This Tour",

    includedTitle: "What Is Included",
    included: [
      "Hotel pickup and drop-off",
      "Private transport",
      "Professional driver-guide",
      "Entrance fees",
      "Lunch",
      "Drinking water",
    ],

    excludedTitle: "What Is Excluded",
    excluded: [
      "Flights",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities",
      "Alcoholic drinks",
    ],

    bringLabel: "WHAT TO BRING",
    bringTitle: "Prepare for Your Nyerere Fly-in Safari",
    whatToBring: [
      "Comfortable walking shoes",
      "Sun hat and sunscreen",
      "Camera or binoculars",
      "Light jacket",
      "Passport or travel identification",
      "Personal medication",
    ],

    ctaTitle: "Ready for Your Nyerere Fly-in Adventure?",
    ctaText:
      "Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private Nyerere National Park fly-in day trip from Zanzibar.",
    quote: "Request a Quote",
    whatsapp: "Chat on WhatsApp",
    imageAlt: "Nyerere National Park Fly-in Day Trip",
  },

  de: {
    heroTitle: "Nyerere-Nationalpark Flug-Safari als Tagestour",
    heroSubtitle:
      "Fliegen Sie von Sansibar zu einer unvergesslichen ganztägigen Safari im größten Nationalpark Tansanias.",
    overviewLabel: "TOURÜBERSICHT",
    overviewTitle: "Entdecken Sie Tansanias größten Nationalpark",
    overview1:
      "Erleben Sie eines der spektakulärsten Safari-Ziele Tansanias mit einer bequemen Flug-Tagestour von Sansibar. Der Nyerere-Nationalpark ist bekannt für seine weite Wildnis, den Rufiji-Fluss und seine beeindruckende Tierwelt.",
    overview2:
      "Während Ihres Abenteuers können Sie Elefanten, Löwen, Büffel, Giraffen, Zebras, Flusspferde, Krokodile und zahlreiche Vogelarten beobachten und dabei eine professionell geführte Pirschfahrt genießen.",
    itineraryTitle: "Tagesprogramm",

    itinerary: [
      {
        title: "Transfer vom Hotel",
        text: "Transfer von Ihrem Hotel auf Sansibar zum Flughafen für Ihren geplanten Flug.",
      },
      {
        title: "Flug zum Nyerere-Nationalpark",
        text: "Genießen Sie einen malerischen Flug, bevor Sie Ihren professionellen Safari-Guide treffen.",
      },
      {
        title: "Pirschfahrt",
        text: "Erkunden Sie den Nyerere-Nationalpark auf der Suche nach Elefanten, Löwen, Büffeln, Giraffen, Flusspferden und anderen Wildtieren.",
      },
      {
        title: "Mittagessen im Busch",
        text: "Genießen Sie Ihr Mittagessen im Park, umgeben von der afrikanischen Wildnis.",
      },
      {
        title: "Nachmittagssafari",
        text: "Setzen Sie Ihr Safari-Abenteuer fort, bevor Sie zum Flugplatz zurückkehren.",
      },
      {
        title: "Rückflug nach Sansibar",
        text: "Fliegen Sie zurück nach Sansibar, wo Ihr Fahrer Sie zu Ihrem Hotel bringt.",
      },
    ],

    tripDetails: "Reisedetails",
    duration: "Dauer",
    departure: "Abreise",
    tourType: "Tourart",
    bestTime: "Beste Reisezeit",
    transport: "Transport",
    fullDay: "Ganztägig",
    zanzibar: "Sansibar",
    flyInSafari: "Flug-Safari",
    allYear: "Ganzjährig",
    flightSafariVehicle: "Flug & Safari-Fahrzeug",
    bookTour: "Diese Tour buchen",

    includedTitle: "Inklusive Leistungen",
    included: [
      "Abholung und Rücktransfer zum Hotel",
      "Privater Transport",
      "Professioneller Fahrer-Guide",
      "Eintrittsgebühren",
      "Mittagessen",
      "Trinkwasser",
    ],

    excludedTitle: "Nicht inklusive",
    excluded: [
      "Flüge",
      "Reiseversicherung",
      "Persönliche Ausgaben",
      "Trinkgelder",
      "Alkoholische Getränke",
    ],

    bringLabel: "WAS SIE MITBRINGEN SOLLTEN",
    bringTitle: "Bereiten Sie sich auf Ihre Nyerere-Flug-Safari vor",
    whatToBring: [
      "Bequeme Wanderschuhe",
      "Sonnenhut und Sonnencreme",
      "Kamera oder Fernglas",
      "Leichte Jacke",
      "Reisepass oder Reiseausweis",
      "Persönliche Medikamente",
    ],

    ctaTitle: "Bereit für Ihr Nyerere-Flugabenteuer?",
    ctaText:
      "Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihre private Flug-Tagestour zum Nyerere-Nationalpark ab Sansibar.",
    quote: "Angebot anfragen",
    whatsapp: "Auf WhatsApp chatten",
    imageAlt: "Nyerere-Nationalpark Flug-Safari als Tagestour",
  },

  fr: {
    heroTitle: "Excursion d'une journée au parc national de Nyerere en avion",
    heroSubtitle:
      "Volez depuis Zanzibar pour une safari inoubliable d'une journée complète dans le plus grand parc national de Tanzanie.",
    overviewLabel: "APERÇU DU CIRCUIT",
    overviewTitle: "Découvrez le plus grand parc national de Tanzanie",
    overview1:
      "Découvrez l'une des destinations de safari les plus spectaculaires de Tanzanie grâce à une excursion pratique en avion depuis Zanzibar. Le parc national de Nyerere est célèbre pour son immense nature sauvage, la rivière Rufiji et sa faune exceptionnelle.",
    overview2:
      "Au cours de votre aventure, vous pourrez observer des éléphants, lions, buffles, girafes, zèbres, hippopotames, crocodiles et de nombreuses espèces d'oiseaux lors d'un safari guidé professionnellement.",
    itineraryTitle: "Itinéraire de la journée",

    itinerary: [
      {
        title: "Transfert depuis l'hôtel",
        text: "Transfert depuis votre hôtel à Zanzibar vers l'aéroport pour votre vol prévu.",
      },
      {
        title: "Vol vers le parc national de Nyerere",
        text: "Profitez d'un vol panoramique avant de rencontrer votre guide professionnel de safari.",
      },
      {
        title: "Safari en véhicule",
        text: "Explorez le parc national de Nyerere à la recherche d'éléphants, lions, buffles, girafes, hippopotames et autres animaux sauvages.",
      },
      {
        title: "Déjeuner dans la brousse",
        text: "Profitez d'un déjeuner dans le parc, entouré par la nature sauvage africaine.",
      },
      {
        title: "Safari de l'après-midi",
        text: "Poursuivez votre aventure animalière avant de retourner à la piste d'atterrissage.",
      },
      {
        title: "Vol retour vers Zanzibar",
        text: "Envolez-vous vers Zanzibar où votre chauffeur vous conduira ensuite à votre hôtel.",
      },
    ],

    tripDetails: "Détails du voyage",
    duration: "Durée",
    departure: "Départ",
    tourType: "Type de circuit",
    bestTime: "Meilleure période",
    transport: "Transport",
    fullDay: "Journée complète",
    zanzibar: "Zanzibar",
    flyInSafari: "Safari avec vol",
    allYear: "Toute l'année",
    flightSafariVehicle: "Vol & véhicule de safari",
    bookTour: "Réserver cette excursion",

    includedTitle: "Ce qui est inclus",
    included: [
      "Prise en charge et retour à l'hôtel",
      "Transport privé",
      "Chauffeur-guide professionnel",
      "Frais d'entrée",
      "Déjeuner",
      "Eau potable",
    ],

    excludedTitle: "Ce qui n'est pas inclus",
    excluded: [
      "Vols",
      "Assurance voyage",
      "Dépenses personnelles",
      "Pourboires",
      "Boissons alcoolisées",
    ],

    bringLabel: "À EMPORTER",
    bringTitle: "Préparez votre safari aérien à Nyerere",
    whatToBring: [
      "Chaussures de marche confortables",
      "Chapeau et crème solaire",
      "Appareil photo ou jumelles",
      "Veste légère",
      "Passeport ou pièce d'identité de voyage",
      "Médicaments personnels",
    ],

    ctaTitle: "Prêt pour votre aventure aérienne à Nyerere ?",
    ctaText:
      "Contactez Kilimanjaro Travel dès aujourd'hui et recevez un devis personnalisé pour votre excursion privée d'une journée en avion vers le parc national de Nyerere depuis Zanzibar.",
    quote: "Demander un devis",
    whatsapp: "Discuter sur WhatsApp",
    imageAlt: "Excursion aérienne d'une journée au parc national de Nyerere",
  },

  es: {
    heroTitle: "Excursión de un día al Parque Nacional Nyerere en avión",
    heroSubtitle:
      "Vuela desde Zanzíbar para disfrutar de un safari inolvidable de día completo en el parque nacional más grande de Tanzania.",
    overviewLabel: "DESCRIPCIÓN DEL TOUR",
    overviewTitle: "Explora el parque nacional más grande de Tanzania",
    overview1:
      "Descubre uno de los destinos de safari más espectaculares de Tanzania con una cómoda excursión en avión desde Zanzíbar. El Parque Nacional Nyerere es famoso por su extensa naturaleza salvaje, el río Rufiji y su increíble fauna.",
    overview2:
      "Durante tu aventura podrás encontrar elefantes, leones, búfalos, jirafas, cebras, hipopótamos, cocodrilos y numerosas especies de aves mientras disfrutas de un safari guiado profesionalmente.",
    itineraryTitle: "Itinerario del día",

    itinerary: [
      {
        title: "Traslado desde el hotel",
        text: "Traslado desde tu hotel en Zanzíbar al aeropuerto para tomar el vuelo programado.",
      },
      {
        title: "Vuelo al Parque Nacional Nyerere",
        text: "Disfruta de un vuelo panorámico antes de encontrarte con tu guía profesional de safari.",
      },
      {
        title: "Safari en vehículo",
        text: "Explora el Parque Nacional Nyerere en busca de elefantes, leones, búfalos, jirafas, hipopótamos y otros animales salvajes.",
      },
      {
        title: "Almuerzo en la naturaleza",
        text: "Disfruta del almuerzo en el parque rodeado por la naturaleza salvaje africana.",
      },
      {
        title: "Safari por la tarde",
        text: "Continúa tu aventura de vida silvestre antes de regresar a la pista de aterrizaje.",
      },
      {
        title: "Vuelo de regreso a Zanzíbar",
        text: "Vuela de regreso a Zanzíbar, donde tu conductor te trasladará a tu hotel.",
      },
    ],

    tripDetails: "Detalles del viaje",
    duration: "Duración",
    departure: "Salida",
    tourType: "Tipo de tour",
    bestTime: "Mejor época",
    transport: "Transporte",
    fullDay: "Día completo",
    zanzibar: "Zanzíbar",
    flyInSafari: "Safari con vuelo",
    allYear: "Todo el año",
    flightSafariVehicle: "Vuelo y vehículo de safari",
    bookTour: "Reservar este tour",

    includedTitle: "Qué está incluido",
    included: [
      "Recogida y regreso al hotel",
      "Transporte privado",
      "Conductor-guía profesional",
      "Tasas de entrada",
      "Almuerzo",
      "Agua potable",
    ],

    excludedTitle: "Qué no está incluido",
    excluded: [
      "Vuelos",
      "Seguro de viaje",
      "Gastos personales",
      "Propinas",
      "Bebidas alcohólicas",
    ],

    bringLabel: "QUÉ LLEVAR",
    bringTitle: "Prepárate para tu safari en avión a Nyerere",
    whatToBring: [
      "Calzado cómodo para caminar",
      "Sombrero y protector solar",
      "Cámara o prismáticos",
      "Chaqueta ligera",
      "Pasaporte o documento de viaje",
      "Medicamentos personales",
    ],

    ctaTitle: "¿Listo para tu aventura aérea en Nyerere?",
    ctaText:
      "Contacta hoy con Kilimanjaro Travel y recibe un presupuesto personalizado para tu excursión privada de un día en avión al Parque Nacional Nyerere desde Zanzíbar.",
    quote: "Solicitar presupuesto",
    whatsapp: "Chatear por WhatsApp",
    imageAlt: "Excursión de un día al Parque Nacional Nyerere en avión",
  },
};

export default function NyerereFromZanzibarPage() {
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
        image="/images/nyerere-two.jpg"
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
                    key={item.title}
                    className="rounded-3xl bg-cream p-6 shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-forest">
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
                  <strong>{t.departure}:</strong> {t.zanzibar}
                </p>

                <p>
                  <strong>{t.tourType}:</strong> {t.flyInSafari}
                </p>

                <p>
                  <strong>{t.bestTime}:</strong> {t.allYear}
                </p>

                <p>
                  <strong>{t.transport}:</strong> {t.flightSafariVehicle}
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
                src="/images/nyerere-three.jpg"
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