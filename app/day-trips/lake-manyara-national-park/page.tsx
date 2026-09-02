'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Lake Manyara National Park Day Trip',
    heroSubtitle:
      'Discover lush forests, Rift Valley scenery, rich birdlife and diverse wildlife in one unforgettable day.',

    overviewLabel: 'TOUR OVERVIEW',
    overviewTitle: 'Forest, Lake and Wildlife',
    overview1:
      'Lake Manyara National Park is famous for its groundwater forest, beautiful Rift Valley setting, diverse wildlife and excellent birdwatching opportunities.',
    overview2:
      'During this private day trip, you may see elephants, giraffes, buffaloes, zebras, monkeys, hippos, antelopes and many bird species. The park is also known for its tree-climbing lions, although sightings are never guaranteed.',

    itineraryTitle: 'Full Day Itinerary',

    itinerary: [
      {
        time: '07:00',
        title: 'Hotel Pickup',
        text: 'Pickup from your hotel in Arusha and begin the scenic drive to Lake Manyara National Park.',
      },
      {
        time: '09:00',
        title: 'Morning Game Drive',
        text: 'Explore the groundwater forest and search for elephants, giraffes, zebras, buffaloes, monkeys and many bird species.',
      },
      {
        time: '11:30',
        title: 'Lake and Wildlife Exploration',
        text: 'Continue toward the lakeshore and enjoy views of the Rift Valley, flamingos when present and the beautiful park landscape.',
      },
      {
        time: '13:00',
        title: 'Picnic Lunch',
        text: 'Enjoy a picnic lunch at a scenic site inside the park.',
      },
      {
        time: '14:00',
        title: 'Afternoon Game Drive',
        text: 'Continue exploring the park in search of tree-climbing lions, hippos, antelopes and more wildlife.',
      },
      {
        time: '16:00',
        title: 'Return to Arusha',
        text: 'Leave Lake Manyara National Park and drive back to your hotel in Arusha.',
      },
    ],

    detailsTitle: 'Trip Details',
    duration: 'Duration',
    durationValue: 'Full Day',
    departure: 'Departure',
    departureValue: 'Arusha',
    tourType: 'Tour Type',
    tourTypeValue: 'Private Day Trip',
    bestTime: 'Best Time',
    bestTimeValue: 'All Year',
    transport: 'Transport',
    transportValue: 'Private Safari Vehicle',
    bookButton: 'Book This Tour',

    includedTitle: 'What Is Included',
    included: [
      'Hotel pickup and drop-off',
      'Private safari vehicle',
      'Professional English-speaking guide',
      'Park entrance fees',
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
      'Optional activities',
    ],

    bringLabel: 'WHAT TO BRING',
    bringTitle: 'Prepare for Your Lake Manyara Safari',
    whatToBring: [
      'Comfortable clothing and shoes',
      'Sun hat and sunscreen',
      'Camera or binoculars',
      'Light jacket',
      'Personal medication',
    ],

    imageAlt: 'Lake Manyara safari',

    ctaTitle: 'Ready for Your Lake Manyara Adventure?',
    ctaText:
      'Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private Lake Manyara day trip.',
    quoteButton: 'Request a Quote',
    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Tagesausflug zum Lake-Manyara-Nationalpark',
    heroSubtitle:
      'Entdecken Sie üppige Wälder, die Landschaft des Rift Valley, eine vielfältige Vogelwelt und zahlreiche Wildtiere an einem unvergesslichen Tag.',

    overviewLabel: 'TOURÜBERSICHT',
    overviewTitle: 'Wald, See und Wildtiere',
    overview1:
      'Der Lake-Manyara-Nationalpark ist bekannt für seinen Grundwasserwald, seine wunderschöne Lage im Rift Valley, seine vielfältige Tierwelt und hervorragende Möglichkeiten zur Vogelbeobachtung.',
    overview2:
      'Während dieses privaten Tagesausflugs können Sie Elefanten, Giraffen, Büffel, Zebras, Affen, Flusspferde, Antilopen und zahlreiche Vogelarten beobachten. Der Park ist außerdem für seine baumkletternden Löwen bekannt, wobei Sichtungen nicht garantiert werden können.',

    itineraryTitle: 'Ganztägiger Reiseplan',

    itinerary: [
      {
        time: '07:00',
        title: 'Abholung vom Hotel',
        text: 'Abholung von Ihrem Hotel in Arusha und Beginn der landschaftlich reizvollen Fahrt zum Lake-Manyara-Nationalpark.',
      },
      {
        time: '09:00',
        title: 'Morgendliche Pirschfahrt',
        text: 'Erkunden Sie den Grundwasserwald und halten Sie Ausschau nach Elefanten, Giraffen, Zebras, Büffeln, Affen und zahlreichen Vogelarten.',
      },
      {
        time: '11:30',
        title: 'See- und Wildtiererkundung',
        text: 'Fahren Sie weiter zum Seeufer und genießen Sie den Blick auf das Rift Valley, Flamingos, sofern vorhanden, und die wunderschöne Landschaft des Parks.',
      },
      {
        time: '13:00',
        title: 'Picknick-Mittagessen',
        text: 'Genießen Sie ein Picknick an einem malerischen Ort im Park.',
      },
      {
        time: '14:00',
        title: 'Nachmittägliche Pirschfahrt',
        text: 'Erkunden Sie den Park weiter auf der Suche nach baumkletternden Löwen, Flusspferden, Antilopen und weiteren Wildtieren.',
      },
      {
        time: '16:00',
        title: 'Rückkehr nach Arusha',
        text: 'Verlassen Sie den Lake-Manyara-Nationalpark und fahren Sie zurück zu Ihrem Hotel in Arusha.',
      },
    ],

    detailsTitle: 'Reisedetails',
    duration: 'Dauer',
    durationValue: 'Ganzer Tag',
    departure: 'Abfahrt',
    departureValue: 'Arusha',
    tourType: 'Tourtyp',
    tourTypeValue: 'Privater Tagesausflug',
    bestTime: 'Beste Reisezeit',
    bestTimeValue: 'Ganzjährig',
    transport: 'Transport',
    transportValue: 'Privates Safari-Fahrzeug',
    bookButton: 'Diese Tour buchen',

    includedTitle: 'Im Preis enthalten',
    included: [
      'Abholung und Rücktransfer zum Hotel',
      'Privates Safari-Fahrzeug',
      'Professioneller englischsprachiger Guide',
      'Parkeintrittsgebühren',
      'Picknick-Mittagessen',
      'Trinkwasser',
    ],

    excludedTitle: 'Nicht im Preis enthalten',
    excluded: [
      'Flüge',
      'Reiseversicherung',
      'Trinkgelder und Gratifikationen',
      'Persönliche Ausgaben',
      'Alkoholische Getränke',
      'Optionale Aktivitäten',
    ],

    bringLabel: 'WAS SIE MITBRINGEN SOLLTEN',
    bringTitle: 'Bereiten Sie sich auf Ihre Lake-Manyara-Safari vor',
    whatToBring: [
      'Bequeme Kleidung und Schuhe',
      'Sonnenhut und Sonnencreme',
      'Kamera oder Fernglas',
      'Leichte Jacke',
      'Persönliche Medikamente',
    ],

    imageAlt: 'Safari am Lake Manyara',

    ctaTitle: 'Bereit für Ihr Lake-Manyara-Abenteuer?',
    ctaText:
      'Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihren privaten Tagesausflug zum Lake Manyara.',
    quoteButton: 'Angebot anfragen',
    whatsappButton: 'Über WhatsApp kontaktieren',
  },

  fr: {
    heroTitle: 'Excursion d’une journée au parc national du lac Manyara',
    heroSubtitle:
      'Découvrez des forêts luxuriantes, les paysages de la vallée du Rift, une riche avifaune et une faune diversifiée en une journée inoubliable.',

    overviewLabel: 'APERÇU DE LA VISITE',
    overviewTitle: 'Forêt, lac et faune',
    overview1:
      'Le parc national du lac Manyara est célèbre pour sa forêt souterraine, son magnifique cadre dans la vallée du Rift, sa faune diversifiée et ses excellentes possibilités d’observation des oiseaux.',
    overview2:
      'Au cours de cette excursion privée d’une journée, vous pourrez observer des éléphants, girafes, buffles, zèbres, singes, hippopotames, antilopes et de nombreuses espèces d’oiseaux. Le parc est également connu pour ses lions grimpeurs d’arbres, bien que les observations ne soient jamais garanties.',

    itineraryTitle: 'Itinéraire d’une journée complète',

    itinerary: [
      {
        time: '07:00',
        title: 'Prise en charge à l’hôtel',
        text: 'Prise en charge à votre hôtel à Arusha et départ pour une route panoramique vers le parc national du lac Manyara.',
      },
      {
        time: '09:00',
        title: 'Safari du matin',
        text: 'Explorez la forêt souterraine et recherchez des éléphants, girafes, zèbres, buffles, singes et de nombreuses espèces d’oiseaux.',
      },
      {
        time: '11:30',
        title: 'Exploration du lac et de la faune',
        text: 'Continuez vers les rives du lac et profitez des vues sur la vallée du Rift, des flamants roses lorsqu’ils sont présents et des magnifiques paysages du parc.',
      },
      {
        time: '13:00',
        title: 'Déjeuner pique-nique',
        text: 'Profitez d’un déjeuner pique-nique dans un cadre panoramique à l’intérieur du parc.',
      },
      {
        time: '14:00',
        title: 'Safari de l’après-midi',
        text: 'Continuez à explorer le parc à la recherche de lions grimpeurs d’arbres, d’hippopotames, d’antilopes et d’autres animaux sauvages.',
      },
      {
        time: '16:00',
        title: 'Retour à Arusha',
        text: 'Quittez le parc national du lac Manyara et retournez à votre hôtel à Arusha.',
      },
    ],

    detailsTitle: 'Détails du voyage',
    duration: 'Durée',
    durationValue: 'Journée complète',
    departure: 'Départ',
    departureValue: 'Arusha',
    tourType: 'Type de visite',
    tourTypeValue: 'Excursion privée d’une journée',
    bestTime: 'Meilleure période',
    bestTimeValue: 'Toute l’année',
    transport: 'Transport',
    transportValue: 'Véhicule safari privé',
    bookButton: 'Réserver cette visite',

    includedTitle: 'Ce qui est inclus',
    included: [
      'Prise en charge et retour à l’hôtel',
      'Véhicule safari privé',
      'Guide professionnel anglophone',
      'Frais d’entrée au parc',
      'Déjeuner pique-nique',
      'Eau potable',
    ],

    excludedTitle: 'Ce qui n’est pas inclus',
    excluded: [
      'Vols',
      'Assurance voyage',
      'Pourboires et gratifications',
      'Dépenses personnelles',
      'Boissons alcoolisées',
      'Activités optionnelles',
    ],

    bringLabel: 'À EMPORTER',
    bringTitle: 'Préparez votre safari au lac Manyara',
    whatToBring: [
      'Vêtements et chaussures confortables',
      'Chapeau et crème solaire',
      'Appareil photo ou jumelles',
      'Veste légère',
      'Médicaments personnels',
    ],

    imageAlt: 'Safari au lac Manyara',

    ctaTitle: 'Prêt pour votre aventure au lac Manyara ?',
    ctaText:
      'Contactez Kilimanjaro Travel dès aujourd’hui et recevez un devis personnalisé pour votre excursion privée d’une journée au lac Manyara.',
    quoteButton: 'Demander un devis',
    whatsappButton: 'Nous contacter sur WhatsApp',
  },

  es: {
    heroTitle: 'Excursión de un día al Parque Nacional del Lago Manyara',
    heroSubtitle:
      'Descubre bosques exuberantes, paisajes del Valle del Rift, una rica variedad de aves y una fauna diversa en un día inolvidable.',

    overviewLabel: 'DESCRIPCIÓN DEL TOUR',
    overviewTitle: 'Bosque, lago y vida silvestre',
    overview1:
      'El Parque Nacional del Lago Manyara es famoso por su bosque de aguas subterráneas, su hermoso entorno en el Valle del Rift, su diversa fauna y sus excelentes oportunidades para observar aves.',
    overview2:
      'Durante esta excursión privada de un día podrás ver elefantes, jirafas, búfalos, cebras, monos, hipopótamos, antílopes y muchas especies de aves. El parque también es conocido por sus leones trepadores de árboles, aunque los avistamientos nunca están garantizados.',

    itineraryTitle: 'Itinerario de día completo',

    itinerary: [
      {
        time: '07:00',
        title: 'Recogida en el hotel',
        text: 'Recogida en tu hotel en Arusha y comienzo del recorrido panorámico hacia el Parque Nacional del Lago Manyara.',
      },
      {
        time: '09:00',
        title: 'Safari de la mañana',
        text: 'Explora el bosque de aguas subterráneas y busca elefantes, jirafas, cebras, búfalos, monos y muchas especies de aves.',
      },
      {
        time: '11:30',
        title: 'Exploración del lago y la fauna',
        text: 'Continúa hacia la orilla del lago y disfruta de las vistas del Valle del Rift, de los flamencos cuando están presentes y del hermoso paisaje del parque.',
      },
      {
        time: '13:00',
        title: 'Almuerzo tipo picnic',
        text: 'Disfruta de un almuerzo tipo picnic en un lugar panorámico dentro del parque.',
      },
      {
        time: '14:00',
        title: 'Safari de la tarde',
        text: 'Continúa explorando el parque en busca de leones trepadores de árboles, hipopótamos, antílopes y más animales salvajes.',
      },
      {
        time: '16:00',
        title: 'Regreso a Arusha',
        text: 'Sal del Parque Nacional del Lago Manyara y regresa a tu hotel en Arusha.',
      },
    ],

    detailsTitle: 'Detalles del viaje',
    duration: 'Duración',
    durationValue: 'Día completo',
    departure: 'Salida',
    departureValue: 'Arusha',
    tourType: 'Tipo de tour',
    tourTypeValue: 'Excursión privada de un día',
    bestTime: 'Mejor época',
    bestTimeValue: 'Todo el año',
    transport: 'Transporte',
    transportValue: 'Vehículo safari privado',
    bookButton: 'Reservar este tour',

    includedTitle: 'Qué incluye',
    included: [
      'Recogida y regreso al hotel',
      'Vehículo safari privado',
      'Guía profesional de habla inglesa',
      'Entradas al parque',
      'Almuerzo tipo picnic',
      'Agua potable',
    ],

    excludedTitle: 'Qué no incluye',
    excluded: [
      'Vuelos',
      'Seguro de viaje',
      'Propinas y gratificaciones',
      'Gastos personales',
      'Bebidas alcohólicas',
      'Actividades opcionales',
    ],

    bringLabel: 'QUÉ LLEVAR',
    bringTitle: 'Prepárate para tu safari por el Lago Manyara',
    whatToBring: [
      'Ropa y calzado cómodos',
      'Sombrero y protector solar',
      'Cámara o prismáticos',
      'Chaqueta ligera',
      'Medicamentos personales',
    ],

    imageAlt: 'Safari en el Lago Manyara',

    ctaTitle: '¿Listo para tu aventura en el Lago Manyara?',
    ctaText:
      'Contacta hoy con Kilimanjaro Travel y recibe un presupuesto personalizado para tu excursión privada de un día al Lago Manyara.',
    quoteButton: 'Solicitar presupuesto',
    whatsappButton: 'Contactarnos por WhatsApp',
  },
};

export default function LakeManyaraNationalParkPage() {
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
        image="/images/manyara-six.jpg"
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
                  <strong>{t.transport}:</strong>{' '}
                  {t.transportValue}
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
                src="/images/manyara-five.jpeg"
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