"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    heroTitle: "Materuni Waterfalls & Coffee Tour",
    heroSubtitle:
      "Discover a beautiful waterfall, Chagga culture and the complete journey of Tanzanian coffee in one unforgettable day.",
    overviewLabel: "TOUR OVERVIEW",
    overviewTitle: "Nature, Culture and Coffee",
    overview1:
      "Materuni Village lies on the green slopes of Mount Kilimanjaro and is home to the Chagga people. This day trip combines beautiful scenery, local culture and one of Tanzania's most enjoyable coffee experiences.",
    overview2:
      "You will hike to the impressive Materuni Waterfalls, enjoy a traditional local lunch and take part in the full coffee-making process, from the bean to the final cup.",
    itineraryTitle: "Full Day Itinerary",

    itinerary: [
      {
        time: "08:00",
        title: "Hotel Pickup",
        text: "Pickup from your hotel in Arusha and drive toward Materuni Village near Mount Kilimanjaro.",
      },
      {
        time: "10:00",
        title: "Materuni Village Arrival",
        text: "Meet your local guide and learn about the Chagga community, village life and the history of the area.",
      },
      {
        time: "10:30",
        title: "Hike to Materuni Waterfalls",
        text: "Enjoy a guided walk through green farms and beautiful countryside before reaching the impressive Materuni Waterfalls.",
      },
      {
        time: "12:30",
        title: "Waterfall Experience",
        text: "Relax near the waterfall, take photos and enjoy the fresh mountain scenery. Swimming is possible when conditions are safe.",
      },
      {
        time: "13:30",
        title: "Traditional Chagga Lunch",
        text: "Return to the village and enjoy a freshly prepared local lunch featuring traditional Tanzanian dishes.",
      },
      {
        time: "14:30",
        title: "Coffee Plantation Experience",
        text: "Learn how coffee is grown, harvested, roasted and prepared using traditional methods, then enjoy a cup of fresh Tanzanian coffee.",
      },
      {
        time: "16:00",
        title: "Return to Arusha",
        text: "Begin the drive back to your hotel in Arusha after a memorable cultural and nature experience.",
      },
    ],

    tripDetails: "Trip Details",
    duration: "Duration",
    departure: "Departure",
    tourType: "Tour Type",
    bestTime: "Best Time",
    activityLevel: "Activity Level",
    fullDay: "Full Day",
    arusha: "Arusha",
    privateDayTrip: "Private Day Trip",
    allYear: "All Year",
    moderateWalking: "Moderate Walking",
    bookTour: "Book This Tour",

    includedTitle: "What Is Included",
    included: [
      "Hotel pickup and drop-off",
      "Private transport",
      "Professional local guide",
      "Waterfall entrance fees",
      "Coffee plantation experience",
      "Traditional Chagga lunch",
      "Drinking water",
    ],

    excludedTitle: "What Is Excluded",
    excluded: [
      "Flights",
      "Travel insurance",
      "Tips and gratuities",
      "Personal expenses",
      "Alcoholic drinks",
    ],

    bringLabel: "WHAT TO BRING",
    bringTitle: "Prepare for Your Materuni Adventure",
    whatToBring: [
      "Comfortable walking shoes",
      "Light rain jacket",
      "Sun hat and sunscreen",
      "Camera",
      "Swimwear and towel if you plan to swim",
      "Personal medication",
    ],

    imageAlt: "Materuni Waterfalls and coffee tour",
    ctaTitle: "Ready for Your Materuni Experience?",
    ctaText:
      "Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private Materuni Waterfalls and Coffee Tour.",
    quote: "Request a Quote",
    whatsapp: "Chat on WhatsApp",
  },

  de: {
    heroTitle: "Materuni-Wasserfälle & Kaffeetour",
    heroSubtitle:
      "Entdecken Sie einen wunderschönen Wasserfall, die Chagga-Kultur und den gesamten Weg des tansanischen Kaffees an einem unvergesslichen Tag.",
    overviewLabel: "TOURÜBERSICHT",
    overviewTitle: "Natur, Kultur und Kaffee",
    overview1:
      "Das Dorf Materuni liegt an den grünen Hängen des Kilimandscharo und ist die Heimat der Chagga. Diese Tagestour verbindet wunderschöne Landschaften, lokale Kultur und eines der schönsten Kaffeeerlebnisse Tansanias.",
    overview2:
      "Sie wandern zu den beeindruckenden Materuni-Wasserfällen, genießen ein traditionelles lokales Mittagessen und erleben den gesamten Prozess der Kaffeeherstellung – von der Bohne bis zur fertigen Tasse.",
    itineraryTitle: "Tagesprogramm",

    itinerary: [
      {
        time: "08:00",
        title: "Abholung vom Hotel",
        text: "Abholung von Ihrem Hotel in Arusha und Fahrt zum Dorf Materuni am Kilimandscharo.",
      },
      {
        time: "10:00",
        title: "Ankunft in Materuni",
        text: "Treffen Sie Ihren lokalen Guide und erfahren Sie mehr über die Chagga-Gemeinschaft, das Dorfleben und die Geschichte der Region.",
      },
      {
        time: "10:30",
        title: "Wanderung zu den Materuni-Wasserfällen",
        text: "Genießen Sie eine geführte Wanderung durch grüne Farmen und die wunderschöne Landschaft bis zu den beeindruckenden Materuni-Wasserfällen.",
      },
      {
        time: "12:30",
        title: "Wasserfall-Erlebnis",
        text: "Entspannen Sie am Wasserfall, machen Sie Fotos und genießen Sie die frische Berglandschaft. Schwimmen ist möglich, wenn die Bedingungen sicher sind.",
      },
      {
        time: "13:30",
        title: "Traditionelles Chagga-Mittagessen",
        text: "Kehren Sie ins Dorf zurück und genießen Sie ein frisch zubereitetes lokales Mittagessen mit traditionellen tansanischen Gerichten.",
      },
      {
        time: "14:30",
        title: "Kaffeeplantagen-Erlebnis",
        text: "Erfahren Sie, wie Kaffee angebaut, geerntet, geröstet und nach traditionellen Methoden zubereitet wird. Anschließend genießen Sie eine Tasse frischen tansanischen Kaffee.",
      },
      {
        time: "16:00",
        title: "Rückkehr nach Arusha",
        text: "Nach einem unvergesslichen Kultur- und Naturerlebnis fahren Sie zurück zu Ihrem Hotel in Arusha.",
      },
    ],

    tripDetails: "Reisedetails",
    duration: "Dauer",
    departure: "Abreise",
    tourType: "Tourart",
    bestTime: "Beste Reisezeit",
    activityLevel: "Aktivitätsniveau",
    fullDay: "Ganztägig",
    arusha: "Arusha",
    privateDayTrip: "Private Tagestour",
    allYear: "Ganzjährig",
    moderateWalking: "Moderates Wandern",
    bookTour: "Diese Tour buchen",

    includedTitle: "Inklusive Leistungen",
    included: [
      "Abholung und Rücktransfer zum Hotel",
      "Privater Transport",
      "Professioneller lokaler Guide",
      "Eintrittsgebühren für die Wasserfälle",
      "Kaffeeplantagen-Erlebnis",
      "Traditionelles Chagga-Mittagessen",
      "Trinkwasser",
    ],

    excludedTitle: "Nicht inklusive",
    excluded: [
      "Flüge",
      "Reiseversicherung",
      "Trinkgelder",
      "Persönliche Ausgaben",
      "Alkoholische Getränke",
    ],

    bringLabel: "WAS SIE MITBRINGEN SOLLTEN",
    bringTitle: "Bereiten Sie sich auf Ihr Materuni-Abenteuer vor",
    whatToBring: [
      "Bequeme Wanderschuhe",
      "Leichte Regenjacke",
      "Sonnenhut und Sonnencreme",
      "Kamera",
      "Badebekleidung und Handtuch, wenn Sie schwimmen möchten",
      "Persönliche Medikamente",
    ],

    imageAlt: "Materuni-Wasserfälle und Kaffeetour",
    ctaTitle: "Bereit für Ihr Materuni-Erlebnis?",
    ctaText:
      "Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihre private Materuni-Wasserfälle- und Kaffeetour.",
    quote: "Angebot anfragen",
    whatsapp: "Auf WhatsApp chatten",
  },

  fr: {
    heroTitle: "Excursion aux cascades de Materuni et découverte du café",
    heroSubtitle:
      "Découvrez une magnifique cascade, la culture Chagga et tout le processus du café tanzanien lors d'une journée inoubliable.",
    overviewLabel: "APERÇU DU CIRCUIT",
    overviewTitle: "Nature, Culture et Café",
    overview1:
      "Le village de Materuni se trouve sur les pentes verdoyantes du Kilimandjaro et abrite le peuple Chagga. Cette excursion d'une journée combine de magnifiques paysages, la culture locale et l'une des meilleures expériences autour du café en Tanzanie.",
    overview2:
      "Vous marcherez jusqu'aux impressionnantes cascades de Materuni, dégusterez un déjeuner local traditionnel et découvrirez tout le processus de fabrication du café, du grain à la tasse.",
    itineraryTitle: "Itinéraire de la journée",

    itinerary: [
      {
        time: "08:00",
        title: "Prise en charge à l'hôtel",
        text: "Prise en charge à votre hôtel à Arusha et départ vers le village de Materuni, près du Kilimandjaro.",
      },
      {
        time: "10:00",
        title: "Arrivée au village de Materuni",
        text: "Rencontrez votre guide local et découvrez la communauté Chagga, la vie du village et l'histoire de la région.",
      },
      {
        time: "10:30",
        title: "Randonnée vers les cascades de Materuni",
        text: "Profitez d'une promenade guidée à travers les fermes verdoyantes et la magnifique campagne avant d'atteindre les impressionnantes cascades de Materuni.",
      },
      {
        time: "12:30",
        title: "Expérience aux cascades",
        text: "Détendez-vous près de la cascade, prenez des photos et profitez des paysages montagneux. La baignade est possible lorsque les conditions sont sûres.",
      },
      {
        time: "13:30",
        title: "Déjeuner traditionnel Chagga",
        text: "Retour au village pour déguster un déjeuner local fraîchement préparé avec des plats traditionnels tanzaniens.",
      },
      {
        time: "14:30",
        title: "Expérience dans une plantation de café",
        text: "Découvrez comment le café est cultivé, récolté, torréfié et préparé selon les méthodes traditionnelles, puis dégustez une tasse de café tanzanien frais.",
      },
      {
        time: "16:00",
        title: "Retour à Arusha",
        text: "Commencez le trajet retour vers votre hôtel à Arusha après une expérience culturelle et naturelle mémorable.",
      },
    ],

    tripDetails: "Détails du voyage",
    duration: "Durée",
    departure: "Départ",
    tourType: "Type de circuit",
    bestTime: "Meilleure période",
    activityLevel: "Niveau d'activité",
    fullDay: "Journée complète",
    arusha: "Arusha",
    privateDayTrip: "Excursion privée d'une journée",
    allYear: "Toute l'année",
    moderateWalking: "Marche modérée",
    bookTour: "Réserver cette excursion",

    includedTitle: "Ce qui est inclus",
    included: [
      "Prise en charge et retour à l'hôtel",
      "Transport privé",
      "Guide local professionnel",
      "Frais d'entrée aux cascades",
      "Expérience dans une plantation de café",
      "Déjeuner traditionnel Chagga",
      "Eau potable",
    ],

    excludedTitle: "Ce qui n'est pas inclus",
    excluded: [
      "Vols",
      "Assurance voyage",
      "Pourboires",
      "Dépenses personnelles",
      "Boissons alcoolisées",
    ],

    bringLabel: "À EMPORTER",
    bringTitle: "Préparez votre aventure à Materuni",
    whatToBring: [
      "Chaussures de marche confortables",
      "Veste légère imperméable",
      "Chapeau et crème solaire",
      "Appareil photo",
      "Maillot de bain et serviette si vous souhaitez vous baigner",
      "Médicaments personnels",
    ],

    imageAlt: "Cascades de Materuni et excursion café",
    ctaTitle: "Prêt pour votre expérience à Materuni ?",
    ctaText:
      "Contactez Kilimanjaro Travel dès aujourd'hui et recevez un devis personnalisé pour votre excursion privée aux cascades de Materuni et votre découverte du café.",
    quote: "Demander un devis",
    whatsapp: "Discuter sur WhatsApp",
  },

  es: {
    heroTitle: "Excursión a las Cascadas de Materuni y Tour del Café",
    heroSubtitle:
      "Descubre una hermosa cascada, la cultura Chagga y todo el proceso del café tanzano en un día inolvidable.",
    overviewLabel: "DESCRIPCIÓN DEL TOUR",
    overviewTitle: "Naturaleza, Cultura y Café",
    overview1:
      "El pueblo de Materuni se encuentra en las verdes laderas del Kilimanjaro y es hogar del pueblo Chagga. Esta excursión combina hermosos paisajes, cultura local y una de las experiencias de café más interesantes de Tanzania.",
    overview2:
      "Caminarás hasta las impresionantes Cascadas de Materuni, disfrutarás de un almuerzo local tradicional y participarás en todo el proceso de elaboración del café, desde el grano hasta la taza final.",
    itineraryTitle: "Itinerario de día completo",

    itinerary: [
      {
        time: "08:00",
        title: "Recogida en el hotel",
        text: "Recogida en tu hotel de Arusha y traslado hacia el pueblo de Materuni, cerca del Monte Kilimanjaro.",
      },
      {
        time: "10:00",
        title: "Llegada al pueblo de Materuni",
        text: "Conoce a tu guía local y aprende sobre la comunidad Chagga, la vida del pueblo y la historia de la zona.",
      },
      {
        time: "10:30",
        title: "Caminata hacia las Cascadas de Materuni",
        text: "Disfruta de una caminata guiada entre verdes plantaciones y hermosos paisajes rurales hasta llegar a las impresionantes Cascadas de Materuni.",
      },
      {
        time: "12:30",
        title: "Experiencia en la cascada",
        text: "Relájate junto a la cascada, toma fotografías y disfruta del paisaje montañoso. Es posible nadar cuando las condiciones son seguras.",
      },
      {
        time: "13:30",
        title: "Almuerzo tradicional Chagga",
        text: "Regresa al pueblo y disfruta de un almuerzo local recién preparado con platos tradicionales de Tanzania.",
      },
      {
        time: "14:30",
        title: "Experiencia en la plantación de café",
        text: "Aprende cómo se cultiva, cosecha, tuesta y prepara el café utilizando métodos tradicionales, y después disfruta de una taza de café tanzano fresco.",
      },
      {
        time: "16:00",
        title: "Regreso a Arusha",
        text: "Comienza el viaje de regreso a tu hotel en Arusha después de una memorable experiencia cultural y natural.",
      },
    ],

    tripDetails: "Detalles del viaje",
    duration: "Duración",
    departure: "Salida",
    tourType: "Tipo de tour",
    bestTime: "Mejor época",
    activityLevel: "Nivel de actividad",
    fullDay: "Día completo",
    arusha: "Arusha",
    privateDayTrip: "Excursión privada de un día",
    allYear: "Todo el año",
    moderateWalking: "Caminata moderada",
    bookTour: "Reservar este tour",

    includedTitle: "Qué está incluido",
    included: [
      "Recogida y regreso al hotel",
      "Transporte privado",
      "Guía local profesional",
      "Tasas de entrada a las cascadas",
      "Experiencia en una plantación de café",
      "Almuerzo tradicional Chagga",
      "Agua potable",
    ],

    excludedTitle: "Qué no está incluido",
    excluded: [
      "Vuelos",
      "Seguro de viaje",
      "Propinas",
      "Gastos personales",
      "Bebidas alcohólicas",
    ],

    bringLabel: "QUÉ LLEVAR",
    bringTitle: "Prepárate para tu aventura en Materuni",
    whatToBring: [
      "Calzado cómodo para caminar",
      "Chaqueta ligera para la lluvia",
      "Sombrero y protector solar",
      "Cámara",
      "Traje de baño y toalla si planeas nadar",
      "Medicamentos personales",
    ],

    imageAlt: "Cascadas de Materuni y tour del café",
    ctaTitle: "¿Listo para tu experiencia en Materuni?",
    ctaText:
      "Contacta hoy con Kilimanjaro Travel y recibe un presupuesto personalizado para tu excursión privada a las Cascadas de Materuni y tour del café.",
    quote: "Solicitar presupuesto",
    whatsapp: "Chatear por WhatsApp",
  },
};

export default function MateruniWaterfallsCoffeeTourPage() {
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
        image="/images/materuni-four.jpg"
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
                  <strong>{t.activityLevel}:</strong> {t.moderateWalking}
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
                src="/images/materuni-five.jpg"
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