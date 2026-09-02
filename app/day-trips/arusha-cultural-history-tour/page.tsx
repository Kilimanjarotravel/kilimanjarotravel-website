'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Arusha Cultural & History Tour',
    heroSubtitle:
      'Discover Tanzania’s history, local culture, African art, handicrafts and everyday life in Arusha.',
    heroImage: '/images/town-three.jpg',

    overviewLabel: 'TOUR OVERVIEW',
    overviewTitle: 'Discover the Heart of Arusha',
    overview1:
      "This private city tour introduces you to the history, culture, art and daily life of Arusha, one of Tanzania's most important tourism cities.",
    overview2:
      'Visit historical sites, cultural centres, local markets and city landmarks while enjoying authentic Tanzanian food and meeting local artisans.',

    itineraryTitle: 'Full Day Itinerary',

    itinerary: [
      {
        time: '08:30',
        title: 'Hotel Pickup',
        text: 'Pickup from your hotel in Arusha and begin your private cultural and historical tour of the city.',
      },
      {
        time: '09:00',
        title: 'Arusha Declaration Museum',
        text: 'Visit the museum and learn about Tanzania’s political history, independence and the Arusha Declaration.',
      },
      {
        time: '10:30',
        title: 'Cultural Heritage Centre',
        text: 'Explore African art, sculptures, paintings, gemstones and cultural exhibits from Tanzania and across the continent.',
      },
      {
        time: '12:30',
        title: 'Local Tanzanian Lunch',
        text: 'Enjoy a freshly prepared lunch featuring traditional Tanzanian dishes.',
      },
      {
        time: '13:30',
        title: 'Maasai Market and Handicrafts',
        text: 'Browse colorful handmade crafts, paintings, jewelry, fabrics and souvenirs from local artisans.',
      },
      {
        time: '15:00',
        title: 'Arusha Clock Tower and City Highlights',
        text: 'Visit the famous Clock Tower and explore selected city landmarks while learning about daily life in Arusha.',
      },
      {
        time: '16:00',
        title: 'Return to Hotel',
        text: 'Drive back to your hotel after a memorable day of history, culture, art and local experiences.',
      },
    ],

    detailsTitle: 'Trip Details',
    duration: 'Duration',
    durationValue: 'Full Day',
    departure: 'Departure',
    departureValue: 'Arusha',
    tourType: 'Tour Type',
    tourTypeValue: 'Private Cultural Tour',
    bestTime: 'Best Time',
    bestTimeValue: 'All Year',
    activityLevel: 'Activity Level',
    activityLevelValue: 'Easy',

    bookButton: 'Book This Tour',

    includedTitle: 'What Is Included',
    included: [
      'Hotel pickup and drop-off',
      'Private transport',
      'Professional English-speaking guide',
      'Museum and cultural centre entrance fees',
      'Local Tanzanian lunch',
      'Drinking water',
    ],

    excludedTitle: 'What Is Excluded',
    excluded: [
      'Flights',
      'Travel insurance',
      'Tips and gratuities',
      'Personal shopping and souvenirs',
      'Alcoholic drinks',
    ],

    image: '/images/town-three.jpg',
    imageAlt: 'Arusha cultural and history tour',

    bringLabel: 'WHAT TO BRING',
    bringTitle: 'Prepare for Your Arusha City Tour',
    bring: [
      'Comfortable walking shoes',
      'Sun hat and sunscreen',
      'Camera',
      'Small amount of cash for shopping',
      'Light jacket',
      'Personal medication',
    ],

    ctaTitle: 'Ready for Your Arusha Cultural Experience?',
    ctaText:
      'Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private Arusha Cultural & History Tour.',
    quoteButton: 'Request a Quote',
    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Arusha Kultur- & Geschichtstour',
    heroSubtitle:
      'Entdecken Sie Tansanias Geschichte, lokale Kultur, afrikanische Kunst, Handwerkskunst und den Alltag in Arusha.',
    heroImage: '/images/town-three.jpg',

    overviewLabel: 'TOURÜBERSICHT',
    overviewTitle: 'Entdecken Sie das Herz von Arusha',
    overview1:
      'Diese private Stadttour führt Sie in die Geschichte, Kultur, Kunst und das tägliche Leben von Arusha ein, einer der wichtigsten Tourismusstädte Tansanias.',
    overview2:
      'Besuchen Sie historische Stätten, Kulturzentren, lokale Märkte und wichtige Sehenswürdigkeiten der Stadt. Genießen Sie authentisches tansanisches Essen und lernen Sie lokale Kunsthandwerker kennen.',

    itineraryTitle: 'Ganztägiger Reiseplan',

    itinerary: [
      {
        time: '08:30',
        title: 'Abholung vom Hotel',
        text: 'Abholung von Ihrem Hotel in Arusha und Beginn Ihrer privaten Kultur- und Geschichtstour durch die Stadt.',
      },
      {
        time: '09:00',
        title: 'Arusha Declaration Museum',
        text: 'Besuchen Sie das Museum und erfahren Sie mehr über Tansanias politische Geschichte, die Unabhängigkeit und die Arusha-Deklaration.',
      },
      {
        time: '10:30',
        title: 'Cultural Heritage Centre',
        text: 'Entdecken Sie afrikanische Kunst, Skulpturen, Gemälde, Edelsteine und kulturelle Ausstellungen aus Tansania und ganz Afrika.',
      },
      {
        time: '12:30',
        title: 'Lokales tansanisches Mittagessen',
        text: 'Genießen Sie ein frisch zubereitetes Mittagessen mit traditionellen tansanischen Gerichten.',
      },
      {
        time: '13:30',
        title: 'Maasai-Markt und Handwerkskunst',
        text: 'Stöbern Sie durch farbenfrohes Kunsthandwerk, Gemälde, Schmuck, Stoffe und Souvenirs lokaler Kunsthandwerker.',
      },
      {
        time: '15:00',
        title: 'Arusha Clock Tower und Sehenswürdigkeiten',
        text: 'Besuchen Sie den berühmten Uhrturm und erkunden Sie ausgewählte Sehenswürdigkeiten, während Sie mehr über das tägliche Leben in Arusha erfahren.',
      },
      {
        time: '16:00',
        title: 'Rückkehr zum Hotel',
        text: 'Fahrt zurück zu Ihrem Hotel nach einem unvergesslichen Tag voller Geschichte, Kultur, Kunst und lokaler Erlebnisse.',
      },
    ],

    detailsTitle: 'Reisedetails',
    duration: 'Dauer',
    durationValue: 'Ganzer Tag',
    departure: 'Abfahrt',
    departureValue: 'Arusha',
    tourType: 'Tourtyp',
    tourTypeValue: 'Private Kulturtour',
    bestTime: 'Beste Reisezeit',
    bestTimeValue: 'Ganzjährig',
    activityLevel: 'Aktivitätsniveau',
    activityLevelValue: 'Leicht',

    bookButton: 'Diese Tour buchen',

    includedTitle: 'Im Preis enthalten',
    included: [
      'Abholung und Rücktransfer zum Hotel',
      'Privater Transport',
      'Professioneller englischsprachiger Guide',
      'Eintrittsgebühren für Museum und Kulturzentrum',
      'Lokales tansanisches Mittagessen',
      'Trinkwasser',
    ],

    excludedTitle: 'Nicht im Preis enthalten',
    excluded: [
      'Flüge',
      'Reiseversicherung',
      'Trinkgelder',
      'Persönliche Einkäufe und Souvenirs',
      'Alkoholische Getränke',
    ],

    image: '/images/town-three.jpg',
    imageAlt: 'Arusha Kultur- und Geschichtstour',

    bringLabel: 'WAS SIE MITBRINGEN SOLLTEN',
    bringTitle: 'Bereiten Sie sich auf Ihre Stadttour durch Arusha vor',
    bring: [
      'Bequeme Wanderschuhe',
      'Sonnenhut und Sonnencreme',
      'Kamera',
      'Etwas Bargeld für Einkäufe',
      'Leichte Jacke',
      'Persönliche Medikamente',
    ],

    ctaTitle: 'Bereit für Ihr kulturelles Arusha-Erlebnis?',
    ctaText:
      'Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihre private Kultur- und Geschichtstour durch Arusha.',
    quoteButton: 'Angebot anfragen',
    whatsappButton: 'Über WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Visite Culturelle et Historique d’Arusha',
    heroSubtitle:
      'Découvrez l’histoire de la Tanzanie, la culture locale, l’art africain, l’artisanat et la vie quotidienne à Arusha.',
    heroImage: '/images/town-three.jpg',

    overviewLabel: 'APERÇU DE LA VISITE',
    overviewTitle: 'Découvrez le cœur d’Arusha',
    overview1:
      'Cette visite privée de la ville vous fait découvrir l’histoire, la culture, l’art et la vie quotidienne d’Arusha, l’une des principales villes touristiques de Tanzanie.',
    overview2:
      'Visitez des sites historiques, des centres culturels, des marchés locaux et les principaux monuments de la ville tout en dégustant une cuisine tanzanienne authentique et en rencontrant des artisans locaux.',

    itineraryTitle: 'Itinéraire d’une journée complète',

    itinerary: [
      {
        time: '08:30',
        title: 'Prise en charge à l’hôtel',
        text: 'Prise en charge à votre hôtel à Arusha et début de votre visite culturelle et historique privée de la ville.',
      },
      {
        time: '09:00',
        title: 'Musée de la Déclaration d’Arusha',
        text: 'Visitez le musée et découvrez l’histoire politique de la Tanzanie, son indépendance et la Déclaration d’Arusha.',
      },
      {
        time: '10:30',
        title: 'Cultural Heritage Centre',
        text: 'Explorez l’art africain, les sculptures, les peintures, les pierres précieuses et les expositions culturelles de Tanzanie et de tout le continent.',
      },
      {
        time: '12:30',
        title: 'Déjeuner tanzanien local',
        text: 'Profitez d’un déjeuner fraîchement préparé composé de plats traditionnels tanzaniens.',
      },
      {
        time: '13:30',
        title: 'Marché Maasai et artisanat',
        text: 'Découvrez des objets artisanaux colorés, des peintures, des bijoux, des tissus et des souvenirs réalisés par des artisans locaux.',
      },
      {
        time: '15:00',
        title: 'Arusha Clock Tower et sites de la ville',
        text: 'Visitez la célèbre Clock Tower et découvrez plusieurs sites importants tout en apprenant davantage sur la vie quotidienne à Arusha.',
      },
      {
        time: '16:00',
        title: 'Retour à l’hôtel',
        text: 'Retour à votre hôtel après une journée mémorable consacrée à l’histoire, la culture, l’art et les expériences locales.',
      },
    ],

    detailsTitle: 'Détails du voyage',
    duration: 'Durée',
    durationValue: 'Journée complète',
    departure: 'Départ',
    departureValue: 'Arusha',
    tourType: 'Type de visite',
    tourTypeValue: 'Visite culturelle privée',
    bestTime: 'Meilleure période',
    bestTimeValue: 'Toute l’année',
    activityLevel: 'Niveau d’activité',
    activityLevelValue: 'Facile',

    bookButton: 'Réserver cette visite',

    includedTitle: 'Ce qui est inclus',
    included: [
      'Prise en charge et retour à l’hôtel',
      'Transport privé',
      'Guide professionnel anglophone',
      'Frais d’entrée au musée et au centre culturel',
      'Déjeuner tanzanien local',
      'Eau potable',
    ],

    excludedTitle: 'Ce qui n’est pas inclus',
    excluded: [
      'Vols',
      'Assurance voyage',
      'Pourboires',
      'Achats personnels et souvenirs',
      'Boissons alcoolisées',
    ],

    image: '/images/town-three.jpg',
    imageAlt: 'Visite culturelle et historique d’Arusha',

    bringLabel: 'À EMPORTER',
    bringTitle: 'Préparez votre visite de la ville d’Arusha',
    bring: [
      'Chaussures de marche confortables',
      'Chapeau et crème solaire',
      'Appareil photo',
      'Un peu d’argent liquide pour les achats',
      'Veste légère',
      'Médicaments personnels',
    ],

    ctaTitle: 'Prêt pour votre expérience culturelle à Arusha ?',
    ctaText:
      'Contactez Kilimanjaro Travel dès aujourd’hui et recevez un devis personnalisé pour votre visite culturelle et historique privée d’Arusha.',
    quoteButton: 'Demander un devis',
    whatsappButton: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Tour Cultural e Histórico de Arusha',
    heroSubtitle:
      'Descubre la historia de Tanzania, la cultura local, el arte africano, la artesanía y la vida cotidiana de Arusha.',
    heroImage: '/images/town-three.jpg',

    overviewLabel: 'DESCRIPCIÓN DEL TOUR',
    overviewTitle: 'Descubre el corazón de Arusha',
    overview1:
      'Este tour privado por la ciudad te permite conocer la historia, la cultura, el arte y la vida cotidiana de Arusha, una de las ciudades turísticas más importantes de Tanzania.',
    overview2:
      'Visita lugares históricos, centros culturales, mercados locales y monumentos de la ciudad mientras disfrutas de auténtica comida tanzana y conoces a artesanos locales.',

    itineraryTitle: 'Itinerario de día completo',

    itinerary: [
      {
        time: '08:30',
        title: 'Recogida en el hotel',
        text: 'Recogida en tu hotel en Arusha y comienzo de tu tour privado cultural e histórico por la ciudad.',
      },
      {
        time: '09:00',
        title: 'Museo de la Declaración de Arusha',
        text: 'Visita el museo y conoce la historia política de Tanzania, su independencia y la Declaración de Arusha.',
      },
      {
        time: '10:30',
        title: 'Cultural Heritage Centre',
        text: 'Explora arte africano, esculturas, pinturas, piedras preciosas y exposiciones culturales de Tanzania y de todo el continente.',
      },
      {
        time: '12:30',
        title: 'Almuerzo tanzano local',
        text: 'Disfruta de un almuerzo recién preparado con platos tradicionales de Tanzania.',
      },
      {
        time: '13:30',
        title: 'Mercado Maasai y artesanías',
        text: 'Descubre coloridas artesanías, pinturas, joyas, telas y recuerdos elaborados por artesanos locales.',
      },
      {
        time: '15:00',
        title: 'Clock Tower de Arusha y lugares destacados',
        text: 'Visita la famosa Clock Tower y explora algunos de los principales lugares de la ciudad mientras conoces más sobre la vida cotidiana de Arusha.',
      },
      {
        time: '16:00',
        title: 'Regreso al hotel',
        text: 'Regresa a tu hotel después de un día memorable de historia, cultura, arte y experiencias locales.',
      },
    ],

    detailsTitle: 'Detalles del viaje',
    duration: 'Duración',
    durationValue: 'Día completo',
    departure: 'Salida',
    departureValue: 'Arusha',
    tourType: 'Tipo de tour',
    tourTypeValue: 'Tour cultural privado',
    bestTime: 'Mejor época',
    bestTimeValue: 'Todo el año',
    activityLevel: 'Nivel de actividad',
    activityLevelValue: 'Fácil',

    bookButton: 'Reservar este tour',

    includedTitle: 'Qué incluye',
    included: [
      'Recogida y regreso al hotel',
      'Transporte privado',
      'Guía profesional de habla inglesa',
      'Entradas al museo y centro cultural',
      'Almuerzo tanzano local',
      'Agua potable',
    ],

    excludedTitle: 'Qué no incluye',
    excluded: [
      'Vuelos',
      'Seguro de viaje',
      'Propinas',
      'Compras personales y recuerdos',
      'Bebidas alcohólicas',
    ],

    image: '/images/town-three.jpg',
    imageAlt: 'Tour cultural e histórico de Arusha',

    bringLabel: 'QUÉ LLEVAR',
    bringTitle: 'Prepárate para tu tour por la ciudad de Arusha',
    bring: [
      'Calzado cómodo para caminar',
      'Sombrero y protector solar',
      'Cámara',
      'Una pequeña cantidad de dinero en efectivo para compras',
      'Chaqueta ligera',
      'Medicamentos personales',
    ],

    ctaTitle: '¿Listo para tu experiencia cultural en Arusha?',
    ctaText:
      'Contacta hoy con Kilimanjaro Travel y recibe un presupuesto personalizado para tu tour cultural e histórico privado por Arusha.',
    quoteButton: 'Solicitar presupuesto',
    whatsappButton: 'Chatear por WhatsApp',
  },
};

export default function ArushaCulturalHistoryTourPage() {
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
        image={t.heroImage}
      />

      {/* OVERVIEW + TRIP DETAILS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {/* OVERVIEW */}
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

              {/* ITINERARY */}
              <h2 className="mt-12 text-3xl font-bold text-forest">
                {t.itineraryTitle}
              </h2>

              <div className="mt-8 space-y-6">
                {t.itinerary.map((item) => (
                  <div
                    key={item.time}
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

            {/* TRIP DETAILS */}
            <aside className="h-fit rounded-3xl bg-forest p-8 text-white shadow-xl">
              <h2 className="text-2xl font-bold">
                {t.detailsTitle}
              </h2>

              <div className="mt-6 space-y-4">
                <p>
                  <strong>{t.duration}:</strong>{' '}
                  {t.durationValue}
                </p>

                <p>
                  <strong>{t.departure}:</strong>{' '}
                  {t.departureValue}
                </p>

                <p>
                  <strong>{t.tourType}:</strong>{' '}
                  {t.tourTypeValue}
                </p>

                <p>
                  <strong>{t.bestTime}:</strong>{' '}
                  {t.bestTimeValue}
                </p>

                <p>
                  <strong>{t.activityLevel}:</strong>{' '}
                  {t.activityLevelValue}
                </p>
              </div>

              <Link
                href="/booking"
                className="mt-8 inline-block w-full rounded-full bg-gold px-6 py-3 text-center font-bold text-white"
              >
                {t.bookButton}
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* INCLUDED / EXCLUDED */}
      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-forest">
              {t.includedTitle}
            </h2>

            <ul className="mt-6 space-y-3">
              {t.included.map((item) => (
                <li key={item}>
                  ✅ {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-forest">
              {t.excludedTitle}
            </h2>

            <ul className="mt-6 space-y-3">
              {t.excluded.map((item) => (
                <li key={item}>
                  ❌ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* IMAGE + WHAT TO BRING */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={t.image}
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
                {t.bring.map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
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
              {t.quoteButton}
            </Link>

            <a
              href="https://wa.me/255759273339"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-8 py-4 font-bold text-white"
            >
              {t.whatsappButton}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}