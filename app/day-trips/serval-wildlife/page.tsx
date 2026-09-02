'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Serval Wildlife Day Trip',
    heroSubtitle:
      'Enjoy a unique close-up wildlife experience near Mount Kilimanjaro.',

    overviewLabel: 'TOUR OVERVIEW',
    overviewTitle: 'Meet Wildlife Up Close',
    overview1:
      'Serval Wildlife offers visitors a unique opportunity to interact with giraffes, zebras, lions, monkeys and other beautiful animals in a peaceful natural environment.',
    overview2:
      'This day trip is perfect for families, photographers, couples and anyone looking for a relaxed wildlife experience close to Arusha and Moshi.',

    itineraryTitle: 'Day Trip Itinerary',

    itinerary: [
      {
        title: 'Hotel Pickup',
        text: 'Your driver-guide will pick you up from your hotel in Arusha or Moshi and drive to Serval Wildlife.',
      },
      {
        title: 'Arrival at Serval Wildlife',
        text: 'Meet giraffes, zebras, lions, monkeys and other rescued animals while learning about wildlife conservation.',
      },
      {
        title: 'Lunch',
        text: 'Enjoy a delicious lunch in a peaceful natural environment.',
      },
      {
        title: 'Photography & Leisure',
        text: 'Take memorable photographs and enjoy close-up wildlife encounters.',
      },
      {
        title: 'Return to Your Hotel',
        text: 'Drive back to your hotel in Arusha or Moshi after an unforgettable day.',
      },
    ],

    detailsTitle: 'Trip Details',
    duration: 'Duration',
    durationValue: 'Full Day',
    departure: 'Departure',
    departureValue: 'Arusha or Moshi',
    tourType: 'Tour Type',
    tourTypeValue: 'Private Day Trip',
    bestTime: 'Best Time',
    bestTimeValue: 'All Year',
    transport: 'Transport',
    transportValue: 'Private Vehicle',
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
    bringTitle: 'Prepare for Your Serval Wildlife Day Trip',
    whatToBring: [
      'Comfortable walking shoes',
      'Sun hat and sunscreen',
      'Camera or binoculars',
      'Light jacket',
      'Personal medication',
    ],

    imageAlt: 'Serval Wildlife Day Trip',

    ctaTitle: 'Ready for Your Serval Wildlife Adventure?',
    ctaText:
      'Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private Serval Wildlife day trip.',
    quoteButton: 'Request a Quote',
    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Serval Wildlife Tagesausflug',
    heroSubtitle:
      'Erleben Sie eine einzigartige Begegnung mit Wildtieren in der Nähe des Kilimandscharo.',

    overviewLabel: 'TOURÜBERSICHT',
    overviewTitle: 'Wildtiere aus nächster Nähe erleben',
    overview1:
      'Serval Wildlife bietet Besuchern die einzigartige Möglichkeit, Giraffen, Zebras, Löwen, Affen und andere wunderschöne Tiere in einer ruhigen natürlichen Umgebung aus nächster Nähe zu erleben.',
    overview2:
      'Dieser Tagesausflug ist ideal für Familien, Fotografen, Paare und alle, die ein entspanntes Wildtiererlebnis in der Nähe von Arusha und Moshi suchen.',

    itineraryTitle: 'Tagesausflug – Reiseplan',

    itinerary: [
      {
        title: 'Abholung vom Hotel',
        text: 'Ihr Fahrer-Guide holt Sie von Ihrem Hotel in Arusha oder Moshi ab und fährt mit Ihnen zu Serval Wildlife.',
      },
      {
        title: 'Ankunft bei Serval Wildlife',
        text: 'Begegnen Sie Giraffen, Zebras, Löwen, Affen und anderen geretteten Tieren und erfahren Sie mehr über den Schutz der Tierwelt.',
      },
      {
        title: 'Mittagessen',
        text: 'Genießen Sie ein köstliches Mittagessen in einer ruhigen natürlichen Umgebung.',
      },
      {
        title: 'Fotografie & Freizeit',
        text: 'Machen Sie unvergessliche Fotos und genießen Sie Begegnungen mit Wildtieren aus nächster Nähe.',
      },
      {
        title: 'Rückkehr zum Hotel',
        text: 'Fahren Sie nach einem unvergesslichen Tag zurück zu Ihrem Hotel in Arusha oder Moshi.',
      },
    ],

    detailsTitle: 'Reisedetails',
    duration: 'Dauer',
    durationValue: 'Ganzer Tag',
    departure: 'Abfahrt',
    departureValue: 'Arusha oder Moshi',
    tourType: 'Tourtyp',
    tourTypeValue: 'Privater Tagesausflug',
    bestTime: 'Beste Reisezeit',
    bestTimeValue: 'Ganzjährig',
    transport: 'Transport',
    transportValue: 'Privates Fahrzeug',
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
    bringTitle: 'Bereiten Sie sich auf Ihren Serval-Wildlife-Tagesausflug vor',
    whatToBring: [
      'Bequeme Wanderschuhe',
      'Sonnenhut und Sonnencreme',
      'Kamera oder Fernglas',
      'Leichte Jacke',
      'Persönliche Medikamente',
    ],

    imageAlt: 'Serval Wildlife Tagesausflug',

    ctaTitle: 'Bereit für Ihr Serval-Wildlife-Abenteuer?',
    ctaText:
      'Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihren privaten Tagesausflug zu Serval Wildlife.',
    quoteButton: 'Angebot anfragen',
    whatsappButton: 'Über WhatsApp kontaktieren',
  },

  fr: {
    heroTitle: 'Excursion d’une journée à Serval Wildlife',
    heroSubtitle:
      'Profitez d’une expérience unique de rencontre rapprochée avec la faune près du Kilimandjaro.',

    overviewLabel: 'APERÇU DE LA VISITE',
    overviewTitle: 'Découvrez les animaux de près',
    overview1:
      'Serval Wildlife offre aux visiteurs une occasion unique de rencontrer des girafes, des zèbres, des lions, des singes et d’autres magnifiques animaux dans un environnement naturel paisible.',
    overview2:
      'Cette excursion d’une journée est idéale pour les familles, les photographes, les couples et tous ceux qui recherchent une expérience animalière relaxante près d’Arusha et de Moshi.',

    itineraryTitle: 'Itinéraire de la journée',

    itinerary: [
      {
        title: 'Prise en charge à l’hôtel',
        text: 'Votre chauffeur-guide viendra vous chercher à votre hôtel à Arusha ou Moshi et vous conduira à Serval Wildlife.',
      },
      {
        title: 'Arrivée à Serval Wildlife',
        text: 'Découvrez des girafes, zèbres, lions, singes et autres animaux sauvés tout en apprenant davantage sur la conservation de la faune.',
      },
      {
        title: 'Déjeuner',
        text: 'Profitez d’un délicieux déjeuner dans un environnement naturel paisible.',
      },
      {
        title: 'Photographie & détente',
        text: 'Prenez des photos mémorables et profitez de rencontres rapprochées avec les animaux.',
      },
      {
        title: 'Retour à votre hôtel',
        text: 'Retournez à votre hôtel à Arusha ou Moshi après une journée inoubliable.',
      },
    ],

    detailsTitle: 'Détails du voyage',
    duration: 'Durée',
    durationValue: 'Journée complète',
    departure: 'Départ',
    departureValue: 'Arusha ou Moshi',
    tourType: 'Type de visite',
    tourTypeValue: 'Excursion privée d’une journée',
    bestTime: 'Meilleure période',
    bestTimeValue: 'Toute l’année',
    transport: 'Transport',
    transportValue: 'Véhicule privé',
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
    bringTitle: 'Préparez votre excursion à Serval Wildlife',
    whatToBring: [
      'Chaussures de marche confortables',
      'Chapeau et crème solaire',
      'Appareil photo ou jumelles',
      'Veste légère',
      'Médicaments personnels',
    ],

    imageAlt: 'Excursion à Serval Wildlife',

    ctaTitle: 'Prêt pour votre aventure à Serval Wildlife ?',
    ctaText:
      'Contactez Kilimanjaro Travel dès aujourd’hui et recevez un devis personnalisé pour votre excursion privée d’une journée à Serval Wildlife.',
    quoteButton: 'Demander un devis',
    whatsappButton: 'Nous contacter sur WhatsApp',
  },

  es: {
    heroTitle: 'Excursión de un día a Serval Wildlife',
    heroSubtitle:
      'Disfruta de una experiencia única de contacto cercano con la fauna cerca del Kilimanjaro.',

    overviewLabel: 'DESCRIPCIÓN DEL TOUR',
    overviewTitle: 'Conoce a los animales de cerca',
    overview1:
      'Serval Wildlife ofrece a los visitantes una oportunidad única de conocer jirafas, cebras, leones, monos y otros hermosos animales en un entorno natural tranquilo.',
    overview2:
      'Esta excursión de un día es perfecta para familias, fotógrafos, parejas y cualquier persona que busque una experiencia relajada con la fauna cerca de Arusha y Moshi.',

    itineraryTitle: 'Itinerario de la excursión',

    itinerary: [
      {
        title: 'Recogida en el hotel',
        text: 'Tu conductor-guía te recogerá en tu hotel en Arusha o Moshi y te llevará a Serval Wildlife.',
      },
      {
        title: 'Llegada a Serval Wildlife',
        text: 'Conoce jirafas, cebras, leones, monos y otros animales rescatados mientras aprendes sobre la conservación de la fauna.',
      },
      {
        title: 'Almuerzo',
        text: 'Disfruta de un delicioso almuerzo en un tranquilo entorno natural.',
      },
      {
        title: 'Fotografía y tiempo libre',
        text: 'Toma fotografías memorables y disfruta de encuentros cercanos con los animales.',
      },
      {
        title: 'Regreso al hotel',
        text: 'Regresa a tu hotel en Arusha o Moshi después de un día inolvidable.',
      },
    ],

    detailsTitle: 'Detalles del viaje',
    duration: 'Duración',
    durationValue: 'Día completo',
    departure: 'Salida',
    departureValue: 'Arusha o Moshi',
    tourType: 'Tipo de tour',
    tourTypeValue: 'Excursión privada de un día',
    bestTime: 'Mejor época',
    bestTimeValue: 'Todo el año',
    transport: 'Transporte',
    transportValue: 'Vehículo privado',
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
    bringTitle: 'Prepárate para tu excursión a Serval Wildlife',
    whatToBring: [
      'Calzado cómodo para caminar',
      'Sombrero y protector solar',
      'Cámara o prismáticos',
      'Chaqueta ligera',
      'Medicamentos personales',
    ],

    imageAlt: 'Excursión de un día a Serval Wildlife',

    ctaTitle: '¿Listo para tu aventura en Serval Wildlife?',
    ctaText:
      'Contacta hoy con Kilimanjaro Travel y recibe un presupuesto personalizado para tu excursión privada de un día a Serval Wildlife.',
    quoteButton: 'Solicitar presupuesto',
    whatsappButton: 'Contactarnos por WhatsApp',
  },
};

export default function ServalWildlifePage() {
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
        image="/images/serval-two.jpg"
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
                src="/images/serval-four.jpg"
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