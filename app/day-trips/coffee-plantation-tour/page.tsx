'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Coffee Plantation Tour',
    heroSubtitle:
      'Discover how Tanzanian coffee is grown, processed, roasted and prepared during an authentic local experience.',

    overviewLabel: 'TOUR OVERVIEW',
    overviewTitle: 'From Coffee Bean to Cup',
    overview1:
      "This private coffee plantation tour gives you an opportunity to experience one of Tanzania's most important crops and learn about the people who grow it.",
    overview2:
      'You will walk through a local plantation, learn the complete coffee-making process, participate in traditional preparation and enjoy a freshly brewed cup of Tanzanian coffee.',

    itineraryTitle: 'Full Day Itinerary',

    itinerary: [
      {
        time: '08:30',
        title: 'Hotel Pickup',
        text: 'Pickup from your hotel in Arusha and drive to a local coffee plantation.',
      },
      {
        time: '09:30',
        title: 'Coffee Farm Introduction',
        text: 'Meet your local guide and learn about the history of coffee farming in northern Tanzania.',
      },
      {
        time: '10:00',
        title: 'Coffee Plantation Walk',
        text: 'Walk through the plantation and learn how coffee is planted, grown, harvested and cared for.',
      },
      {
        time: '11:30',
        title: 'Traditional Coffee Processing',
        text: 'Take part in the traditional process of removing the husks, roasting and grinding fresh coffee beans.',
      },
      {
        time: '13:00',
        title: 'Local Lunch',
        text: 'Enjoy a freshly prepared Tanzanian lunch in a peaceful local setting.',
      },
      {
        time: '14:00',
        title: 'Coffee Tasting',
        text: 'Prepare and taste a fresh cup of Tanzanian coffee while learning about flavor, quality and local traditions.',
      },
      {
        time: '15:30',
        title: 'Return to Arusha',
        text: 'Drive back to your hotel in Arusha after an authentic coffee and cultural experience.',
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
      'Professional local guide',
      'Coffee plantation entrance fees',
      'Traditional coffee experience',
      'Local lunch',
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

    imageAlt: 'Coffee plantation tour in Tanzania',

    bringLabel: 'WHAT TO BRING',
    bringTitle: 'Prepare for Your Coffee Tour',
    bring: [
      'Comfortable walking shoes',
      'Sun hat and sunscreen',
      'Camera',
      'Light jacket',
      'Small backpack',
      'Personal medication',
    ],

    ctaTitle: 'Ready for Your Coffee Experience?',
    ctaText:
      'Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private Coffee Plantation Tour.',
    quoteButton: 'Request a Quote',
    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Kaffeeplantagen-Tour',
    heroSubtitle:
      'Entdecken Sie bei einem authentischen lokalen Erlebnis, wie tansanischer Kaffee angebaut, verarbeitet, geröstet und zubereitet wird.',

    overviewLabel: 'TOURÜBERSICHT',
    overviewTitle: 'Von der Kaffeebohne bis zur Tasse',
    overview1:
      'Diese private Kaffeeplantagen-Tour bietet Ihnen die Möglichkeit, eine der wichtigsten Nutzpflanzen Tansanias kennenzulernen und mehr über die Menschen zu erfahren, die sie anbauen.',
    overview2:
      'Sie spazieren durch eine lokale Plantage, lernen den gesamten Prozess der Kaffeeherstellung kennen, nehmen an der traditionellen Zubereitung teil und genießen eine frisch gebrühte Tasse tansanischen Kaffee.',

    itineraryTitle: 'Ganztägiger Reiseplan',

    itinerary: [
      {
        time: '08:30',
        title: 'Abholung vom Hotel',
        text: 'Abholung von Ihrem Hotel in Arusha und Fahrt zu einer lokalen Kaffeeplantage.',
      },
      {
        time: '09:30',
        title: 'Einführung in die Kaffeefarm',
        text: 'Treffen Sie Ihren lokalen Guide und erfahren Sie mehr über die Geschichte des Kaffeeanbaus im Norden Tansanias.',
      },
      {
        time: '10:00',
        title: 'Spaziergang durch die Kaffeeplantage',
        text: 'Spazieren Sie durch die Plantage und erfahren Sie, wie Kaffee gepflanzt, angebaut, geerntet und gepflegt wird.',
      },
      {
        time: '11:30',
        title: 'Traditionelle Kaffeeverarbeitung',
        text: 'Nehmen Sie am traditionellen Prozess des Entfernen der Schalen, Röstens und Mahlens frischer Kaffeebohnen teil.',
      },
      {
        time: '13:00',
        title: 'Lokales Mittagessen',
        text: 'Genießen Sie ein frisch zubereitetes tansanisches Mittagessen in einer ruhigen lokalen Umgebung.',
      },
      {
        time: '14:00',
        title: 'Kaffeeverkostung',
        text: 'Bereiten Sie eine frische Tasse tansanischen Kaffee zu und probieren Sie ihn, während Sie mehr über Geschmack, Qualität und lokale Traditionen erfahren.',
      },
      {
        time: '15:30',
        title: 'Rückfahrt nach Arusha',
        text: 'Fahrt zurück zu Ihrem Hotel in Arusha nach einem authentischen Kaffee- und Kulturerlebnis.',
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
      'Professioneller lokaler Guide',
      'Eintrittsgebühren für die Kaffeeplantage',
      'Traditionelles Kaffeeerlebnis',
      'Lokales Mittagessen',
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

    imageAlt: 'Kaffeeplantagen-Tour in Tansania',

    bringLabel: 'WAS SIE MITBRINGEN SOLLTEN',
    bringTitle: 'Bereiten Sie sich auf Ihre Kaffeetour vor',
    bring: [
      'Bequeme Wanderschuhe',
      'Sonnenhut und Sonnencreme',
      'Kamera',
      'Leichte Jacke',
      'Kleiner Rucksack',
      'Persönliche Medikamente',
    ],

    ctaTitle: 'Bereit für Ihr Kaffeeerlebnis?',
    ctaText:
      'Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihre private Kaffeeplantagen-Tour.',
    quoteButton: 'Angebot anfragen',
    whatsappButton: 'Über WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Visite d’une plantation de café',
    heroSubtitle:
      'Découvrez comment le café tanzanien est cultivé, transformé, torréfié et préparé lors d’une expérience locale authentique.',

    overviewLabel: 'APERÇU DU CIRCUIT',
    overviewTitle: 'Du grain de café à la tasse',
    overview1:
      'Cette visite privée d’une plantation de café vous permet de découvrir l’une des cultures les plus importantes de Tanzanie et d’en apprendre davantage sur les personnes qui la cultivent.',
    overview2:
      'Vous vous promènerez dans une plantation locale, découvrirez toutes les étapes de la production du café, participerez à sa préparation traditionnelle et dégusterez une tasse de café tanzanien fraîchement préparé.',

    itineraryTitle: 'Itinéraire d’une journée complète',

    itinerary: [
      {
        time: '08:30',
        title: 'Prise en charge à l’hôtel',
        text: 'Prise en charge à votre hôtel à Arusha et départ vers une plantation de café locale.',
      },
      {
        time: '09:30',
        title: 'Introduction à la plantation de café',
        text: 'Rencontrez votre guide local et découvrez l’histoire de la culture du café dans le nord de la Tanzanie.',
      },
      {
        time: '10:00',
        title: 'Promenade dans la plantation',
        text: 'Promenez-vous dans la plantation et découvrez comment le café est planté, cultivé, récolté et entretenu.',
      },
      {
        time: '11:30',
        title: 'Transformation traditionnelle du café',
        text: 'Participez au processus traditionnel de décorticage, de torréfaction et de mouture des grains de café frais.',
      },
      {
        time: '13:00',
        title: 'Déjeuner local',
        text: 'Profitez d’un déjeuner tanzanien fraîchement préparé dans un cadre local paisible.',
      },
      {
        time: '14:00',
        title: 'Dégustation de café',
        text: 'Préparez et dégustez une tasse de café tanzanien frais tout en découvrant les saveurs, la qualité et les traditions locales.',
      },
      {
        time: '15:30',
        title: 'Retour à Arusha',
        text: 'Retour à votre hôtel à Arusha après une expérience authentique autour du café et de la culture locale.',
      },
    ],

    detailsTitle: 'Détails du voyage',
    duration: 'Durée',
    durationValue: 'Journée complète',
    departure: 'Départ',
    departureValue: 'Arusha',
    tourType: 'Type de circuit',
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
      'Guide local professionnel',
      'Frais d’entrée à la plantation de café',
      'Expérience traditionnelle autour du café',
      'Déjeuner local',
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

    imageAlt: 'Visite d’une plantation de café en Tanzanie',

    bringLabel: 'À EMPORTER',
    bringTitle: 'Préparez votre visite de plantation de café',
    bring: [
      'Chaussures de marche confortables',
      'Chapeau et crème solaire',
      'Appareil photo',
      'Veste légère',
      'Petit sac à dos',
      'Médicaments personnels',
    ],

    ctaTitle: 'Prêt pour votre expérience autour du café ?',
    ctaText:
      'Contactez Kilimanjaro Travel dès aujourd’hui et recevez un devis personnalisé pour votre visite privée d’une plantation de café.',
    quoteButton: 'Demander un devis',
    whatsappButton: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Tour por una Plantación de Café',
    heroSubtitle:
      'Descubre cómo se cultiva, procesa, tuesta y prepara el café de Tanzania durante una auténtica experiencia local.',

    overviewLabel: 'DESCRIPCIÓN DEL TOUR',
    overviewTitle: 'Del grano de café a la taza',
    overview1:
      'Este tour privado por una plantación de café te ofrece la oportunidad de conocer uno de los cultivos más importantes de Tanzania y aprender sobre las personas que lo cultivan.',
    overview2:
      'Caminarás por una plantación local, conocerás todo el proceso de elaboración del café, participarás en su preparación tradicional y disfrutarás de una taza de café tanzano recién preparado.',

    itineraryTitle: 'Itinerario de día completo',

    itinerary: [
      {
        time: '08:30',
        title: 'Recogida en el hotel',
        text: 'Recogida en tu hotel en Arusha y salida hacia una plantación de café local.',
      },
      {
        time: '09:30',
        title: 'Introducción a la plantación de café',
        text: 'Conoce a tu guía local y descubre la historia del cultivo del café en el norte de Tanzania.',
      },
      {
        time: '10:00',
        title: 'Caminata por la plantación',
        text: 'Recorre la plantación y aprende cómo se planta, cultiva, cosecha y cuida el café.',
      },
      {
        time: '11:30',
        title: 'Procesamiento tradicional del café',
        text: 'Participa en el proceso tradicional de quitar la cáscara, tostar y moler los granos de café frescos.',
      },
      {
        time: '13:00',
        title: 'Almuerzo local',
        text: 'Disfruta de un almuerzo tanzano recién preparado en un entorno local tranquilo.',
      },
      {
        time: '14:00',
        title: 'Degustación de café',
        text: 'Prepara y prueba una taza de café tanzano fresco mientras aprendes sobre el sabor, la calidad y las tradiciones locales.',
      },
      {
        time: '15:30',
        title: 'Regreso a Arusha',
        text: 'Regresa a tu hotel en Arusha después de una auténtica experiencia de café y cultura local.',
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
      'Guía local profesional',
      'Entradas a la plantación de café',
      'Experiencia tradicional del café',
      'Almuerzo local',
      'Agua potable',
    ],

    excludedTitle: 'Qué no incluye',
    excluded: [
      'Vuelos',
      'Seguro de viaje',
      'Propinas',
      'Gastos personales',
      'Bebidas alcohólicas',
    ],

    imageAlt: 'Tour por una plantación de café en Tanzania',

    bringLabel: 'QUÉ LLEVAR',
    bringTitle: 'Prepárate para tu tour de café',
    bring: [
      'Calzado cómodo para caminar',
      'Sombrero y protector solar',
      'Cámara',
      'Chaqueta ligera',
      'Mochila pequeña',
      'Medicamentos personales',
    ],

    ctaTitle: '¿Listo para vivir una experiencia con el café?',
    ctaText:
      'Contacta hoy con Kilimanjaro Travel y recibe un presupuesto personalizado para tu tour privado por una plantación de café.',
    quoteButton: 'Solicitar presupuesto',
    whatsappButton: 'Chatear por WhatsApp',
  },
};

export default function CoffeePlantationTourPage() {
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
        image="/images/coffee-b.jpg"
      />

      {/* OVERVIEW + ITINERARY */}
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
                src="/images/cofee-n.jpg"
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