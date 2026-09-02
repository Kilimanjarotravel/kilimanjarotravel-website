'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Makuyuni Wildlife Day Trip',
    heroSubtitle:
      'Discover wildlife, open landscapes and the natural beauty of Makuyuni on a memorable private day trip.',

    overviewLabel: 'TOUR OVERVIEW',
    overviewTitle: 'Discover the Wild Beauty of Makuyuni',
    overview1:
      'Makuyuni offers a peaceful wildlife experience surrounded by open landscapes, acacia woodland and beautiful views of northern Tanzania. The area provides excellent opportunities to observe wildlife away from the busiest safari routes.',
    overview2:
      'This private day trip is ideal for travellers looking for nature, wildlife photography and a relaxed safari experience. Depending on the season, you may see giraffes, zebras, antelopes, wildebeest, monkeys and a variety of birdlife.',

    itineraryTitle: 'Day Trip Itinerary',

    itinerary: [
      {
        title: 'Hotel Pickup',
        text: 'Your driver-guide will pick you up from your hotel in Arusha and begin the scenic drive toward Makuyuni.',
      },
      {
        title: 'Arrival and Wildlife Exploration',
        text: 'Begin exploring the Makuyuni area while searching for giraffes, zebras, antelopes, monkeys and other wildlife.',
      },
      {
        title: 'Nature and Photography Experience',
        text: 'Enjoy the beautiful landscapes, take photographs and learn about the local ecosystem from your guide.',
      },
      {
        title: 'Picnic Lunch',
        text: 'Relax and enjoy a picnic lunch in a peaceful location surrounded by nature.',
      },
      {
        title: 'Afternoon Wildlife Drive',
        text: 'Continue exploring the area and enjoy more opportunities to observe wildlife and birdlife.',
      },
      {
        title: 'Return to Arusha',
        text: 'After your Makuyuni wildlife experience, drive back to your hotel in Arusha.',
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
      'Private transport',
      'Professional driver-guide',
      'Entrance fees',
      'Lunch',
      'Drinking water',
    ],

    excludedTitle: 'What Is Excluded',
    excluded: [
      'Flights',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities',
      'Alcoholic drinks',
    ],

    bringLabel: 'WHAT TO BRING',
    bringTitle: 'Prepare for Your Makuyuni Wildlife Day Trip',
    whatToBring: [
      'Comfortable walking shoes',
      'Camera',
      'Hat and sunscreen',
      'Light jacket',
      'Personal medication',
    ],

    imageAlt: 'Makuyuni Wildlife Day Trip',

    ctaTitle: 'Ready for Your Makuyuni Wildlife Adventure?',
    ctaText:
      'Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private Makuyuni Wildlife day trip.',
    quoteButton: 'Request a Quote',
    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Makuyuni Wildlife Tagesausflug',
    heroSubtitle:
      'Entdecken Sie Wildtiere, offene Landschaften und die natürliche Schönheit von Makuyuni bei einem unvergesslichen privaten Tagesausflug.',

    overviewLabel: 'TOURÜBERSICHT',
    overviewTitle: 'Entdecken Sie die wilde Schönheit von Makuyuni',
    overview1:
      'Makuyuni bietet ein ruhiges Wildtiererlebnis inmitten offener Landschaften, Akazienwälder und wunderschöner Ausblicke auf Nordtansania. Die Region bietet hervorragende Möglichkeiten, Wildtiere abseits der belebtesten Safarirouten zu beobachten.',
    overview2:
      'Dieser private Tagesausflug ist ideal für Reisende, die Natur, Tierfotografie und ein entspanntes Safari-Erlebnis suchen. Je nach Jahreszeit können Sie Giraffen, Zebras, Antilopen, Gnus, Affen und verschiedene Vogelarten sehen.',

    itineraryTitle: 'Reiseplan für den Tagesausflug',

    itinerary: [
      {
        title: 'Abholung vom Hotel',
        text: 'Ihr Fahrer-Guide holt Sie von Ihrem Hotel in Arusha ab und beginnt die landschaftlich reizvolle Fahrt in Richtung Makuyuni.',
      },
      {
        title: 'Ankunft und Wildtiererkundung',
        text: 'Beginnen Sie mit der Erkundung der Region Makuyuni und halten Sie Ausschau nach Giraffen, Zebras, Antilopen, Affen und anderen Wildtieren.',
      },
      {
        title: 'Natur- und Fotoerlebnis',
        text: 'Genießen Sie die wunderschöne Landschaft, machen Sie Fotos und erfahren Sie von Ihrem Guide mehr über das lokale Ökosystem.',
      },
      {
        title: 'Picknick-Mittagessen',
        text: 'Entspannen Sie sich und genießen Sie ein Picknick in einer ruhigen, von Natur umgebenen Umgebung.',
      },
      {
        title: 'Wildtierfahrt am Nachmittag',
        text: 'Erkunden Sie die Region weiter und nutzen Sie weitere Möglichkeiten, Wildtiere und Vögel zu beobachten.',
      },
      {
        title: 'Rückkehr nach Arusha',
        text: 'Nach Ihrem Makuyuni-Wildtiererlebnis fahren Sie zurück zu Ihrem Hotel in Arusha.',
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
      'Privater Transport',
      'Professioneller Fahrer-Guide',
      'Eintrittsgebühren',
      'Mittagessen',
      'Trinkwasser',
    ],

    excludedTitle: 'Nicht im Preis enthalten',
    excluded: [
      'Flüge',
      'Reiseversicherung',
      'Persönliche Ausgaben',
      'Trinkgelder und Gratifikationen',
      'Alkoholische Getränke',
    ],

    bringLabel: 'WAS SIE MITBRINGEN SOLLTEN',
    bringTitle: 'Bereiten Sie sich auf Ihren Makuyuni-Wildlife-Tagesausflug vor',
    whatToBring: [
      'Bequeme Wanderschuhe',
      'Kamera',
      'Hut und Sonnencreme',
      'Leichte Jacke',
      'Persönliche Medikamente',
    ],

    imageAlt: 'Makuyuni Wildlife Tagesausflug',

    ctaTitle: 'Bereit für Ihr Makuyuni-Wildlife-Abenteuer?',
    ctaText:
      'Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihren privaten Makuyuni-Wildlife-Tagesausflug.',
    quoteButton: 'Angebot anfragen',
    whatsappButton: 'Über WhatsApp kontaktieren',
  },

  fr: {
    heroTitle: 'Excursion d’une journée à Makuyuni Wildlife',
    heroSubtitle:
      'Découvrez la faune, les paysages ouverts et la beauté naturelle de Makuyuni lors d’une excursion privée inoubliable.',

    overviewLabel: 'APERÇU DE LA VISITE',
    overviewTitle: 'Découvrez la beauté sauvage de Makuyuni',
    overview1:
      'Makuyuni offre une expérience paisible d’observation de la faune, entourée de paysages ouverts, de forêts d’acacias et de magnifiques vues sur le nord de la Tanzanie. La région offre d’excellentes possibilités d’observer les animaux loin des itinéraires de safari les plus fréquentés.',
    overview2:
      'Cette excursion privée d’une journée est idéale pour les voyageurs qui recherchent la nature, la photographie animalière et une expérience safari relaxante. Selon la saison, vous pourrez observer des girafes, zèbres, antilopes, gnous, singes et diverses espèces d’oiseaux.',

    itineraryTitle: 'Itinéraire de la journée',

    itinerary: [
      {
        title: 'Prise en charge à l’hôtel',
        text: 'Votre chauffeur-guide viendra vous chercher à votre hôtel à Arusha et commencera la route panoramique vers Makuyuni.',
      },
      {
        title: 'Arrivée et exploration de la faune',
        text: 'Commencez à explorer la région de Makuyuni à la recherche de girafes, zèbres, antilopes, singes et autres animaux sauvages.',
      },
      {
        title: 'Expérience nature et photographie',
        text: 'Profitez des magnifiques paysages, prenez des photos et découvrez l’écosystème local avec votre guide.',
      },
      {
        title: 'Déjeuner pique-nique',
        text: 'Détendez-vous et profitez d’un déjeuner pique-nique dans un endroit paisible entouré par la nature.',
      },
      {
        title: 'Observation de la faune l’après-midi',
        text: 'Continuez à explorer la région et profitez de nouvelles occasions d’observer les animaux sauvages et les oiseaux.',
      },
      {
        title: 'Retour à Arusha',
        text: 'Après votre expérience animalière à Makuyuni, retournez à votre hôtel à Arusha.',
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
      'Transport privé',
      'Chauffeur-guide professionnel',
      'Frais d’entrée',
      'Déjeuner',
      'Eau potable',
    ],

    excludedTitle: 'Ce qui n’est pas inclus',
    excluded: [
      'Vols',
      'Assurance voyage',
      'Dépenses personnelles',
      'Pourboires et gratifications',
      'Boissons alcoolisées',
    ],

    bringLabel: 'À EMPORTER',
    bringTitle: 'Préparez votre excursion à Makuyuni Wildlife',
    whatToBring: [
      'Chaussures de marche confortables',
      'Appareil photo',
      'Chapeau et crème solaire',
      'Veste légère',
      'Médicaments personnels',
    ],

    imageAlt: 'Excursion à Makuyuni Wildlife',

    ctaTitle: 'Prêt pour votre aventure à Makuyuni Wildlife ?',
    ctaText:
      'Contactez Kilimanjaro Travel dès aujourd’hui et recevez un devis personnalisé pour votre excursion privée d’une journée à Makuyuni Wildlife.',
    quoteButton: 'Demander un devis',
    whatsappButton: 'Nous contacter sur WhatsApp',
  },

  es: {
    heroTitle: 'Excursión de un día a Makuyuni Wildlife',
    heroSubtitle:
      'Descubre la fauna, los paisajes abiertos y la belleza natural de Makuyuni en una memorable excursión privada de un día.',

    overviewLabel: 'DESCRIPCIÓN DEL TOUR',
    overviewTitle: 'Descubre la belleza salvaje de Makuyuni',
    overview1:
      'Makuyuni ofrece una tranquila experiencia de observación de fauna rodeada de paisajes abiertos, bosques de acacias y hermosas vistas del norte de Tanzania. La zona ofrece excelentes oportunidades para observar animales lejos de las rutas de safari más concurridas.',
    overview2:
      'Esta excursión privada de un día es ideal para viajeros que buscan naturaleza, fotografía de fauna y una experiencia de safari relajada. Dependiendo de la temporada, podrás ver jirafas, cebras, antílopes, ñus, monos y diversas especies de aves.',

    itineraryTitle: 'Itinerario de la excursión',

    itinerary: [
      {
        title: 'Recogida en el hotel',
        text: 'Tu conductor-guía te recogerá en tu hotel en Arusha y comenzará el recorrido panorámico hacia Makuyuni.',
      },
      {
        title: 'Llegada y exploración de la fauna',
        text: 'Comienza a explorar la zona de Makuyuni buscando jirafas, cebras, antílopes, monos y otros animales salvajes.',
      },
      {
        title: 'Experiencia de naturaleza y fotografía',
        text: 'Disfruta de los hermosos paisajes, toma fotografías y aprende sobre el ecosistema local con tu guía.',
      },
      {
        title: 'Almuerzo tipo picnic',
        text: 'Relájate y disfruta de un almuerzo tipo picnic en un lugar tranquilo rodeado de naturaleza.',
      },
      {
        title: 'Recorrido de fauna por la tarde',
        text: 'Continúa explorando la zona y disfruta de más oportunidades para observar animales y aves.',
      },
      {
        title: 'Regreso a Arusha',
        text: 'Después de tu experiencia de fauna en Makuyuni, regresa a tu hotel en Arusha.',
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
      'Transporte privado',
      'Conductor-guía profesional',
      'Entradas',
      'Almuerzo',
      'Agua potable',
    ],

    excludedTitle: 'Qué no incluye',
    excluded: [
      'Vuelos',
      'Seguro de viaje',
      'Gastos personales',
      'Propinas y gratificaciones',
      'Bebidas alcohólicas',
    ],

    bringLabel: 'QUÉ LLEVAR',
    bringTitle: 'Prepárate para tu excursión a Makuyuni Wildlife',
    whatToBring: [
      'Calzado cómodo para caminar',
      'Cámara',
      'Sombrero y protector solar',
      'Chaqueta ligera',
      'Medicamentos personales',
    ],

    imageAlt: 'Excursión de un día a Makuyuni Wildlife',

    ctaTitle: '¿Listo para tu aventura en Makuyuni Wildlife?',
    ctaText:
      'Contacta hoy con Kilimanjaro Travel y recibe un presupuesto personalizado para tu excursión privada de un día a Makuyuni Wildlife.',
    quoteButton: 'Solicitar presupuesto',
    whatsappButton: 'Contactarnos por WhatsApp',
  },
};

export default function MakuyuniWildlifePage() {
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
        image="/images/makuyunu-five.jpg"
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
                src="/images/makuyuni-two.jpg"
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