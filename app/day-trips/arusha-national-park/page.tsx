'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Arusha National Park Day Trip',
    heroSubtitle:
      'Discover wildlife, Momella Lakes, Mount Meru views and beautiful landscapes in one unforgettable day.',

    overviewLabel: 'TOUR OVERVIEW',
    overviewTitle: 'A Perfect Day Near Arusha',
    overview1:
      "Arusha National Park is one of Tanzania's most beautiful and accessible parks. It is famous for giraffes, buffaloes, monkeys, Momella Lakes, green forests and spectacular views of Mount Meru.",
    overview2:
      'This private day trip is ideal for travelers with limited time who still want to enjoy wildlife, beautiful scenery and a relaxed safari experience close to Arusha. Optional activities such as a guided walking safari can be arranged upon request for guests who would like an even more immersive experience.',

    itineraryTitle: 'Full Day Itinerary',

    itinerary: [
      {
        time: '07:30',
        title: 'Hotel Pickup',
        text: 'Pickup from your hotel in Arusha and drive to Arusha National Park.',
      },
      {
        time: '09:00',
        title: 'Morning Game Drive',
        text: 'Enjoy a morning game drive through the park in search of giraffes, buffaloes, zebras, monkeys and a variety of bird species.',
      },
      {
        time: '11:00',
        title: 'Optional Guided Walking Safari',
        text: 'Guests who wish can enjoy an optional guided walking safari accompanied by an armed park ranger. This unique experience offers a closer connection with nature and an opportunity to learn about animal tracks, plants and the park’s ecosystem.',
      },
      {
        time: '13:00',
        title: 'Picnic Lunch',
        text: 'Enjoy a delicious picnic lunch at a scenic picnic site inside the park.',
      },
      {
        time: '14:00',
        title: 'Momella Lakes Scenic Drive',
        text: 'Continue exploring the beautiful Momella Lakes and enjoy spectacular views of Mount Meru before returning to Arusha.',
      },
      {
        time: '16:30',
        title: 'Return to Arusha',
        text: 'Drive back to your hotel after an unforgettable day in the park.',
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
    ],

    bringLabel: 'WHAT TO BRING',
    bringTitle: 'Prepare for Your Day Trip',
    whatToBring: [
      'Comfortable walking shoes',
      'Sun hat and sunscreen',
      'Camera or binoculars',
      'Light jacket',
      'Personal medication',
    ],

    imageAlt: 'Safari vehicle in Tanzania',

    ctaTitle: 'Ready for Your Arusha National Park Adventure?',
    ctaText:
      'Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private day trip.',
    quoteButton: 'Request a Quote',
    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Tagesausflug zum Arusha-Nationalpark',
    heroSubtitle:
      'Entdecken Sie Wildtiere, die Momella-Seen, den Blick auf den Mount Meru und wunderschöne Landschaften an einem unvergesslichen Tag.',

    overviewLabel: 'TOURÜBERSICHT',
    overviewTitle: 'Ein perfekter Tag bei Arusha',
    overview1:
      'Der Arusha-Nationalpark ist einer der schönsten und am leichtesten erreichbaren Nationalparks Tansanias. Er ist bekannt für Giraffen, Büffel, Affen, die Momella-Seen, grüne Wälder und spektakuläre Ausblicke auf den Mount Meru.',
    overview2:
      'Dieser private Tagesausflug ist ideal für Reisende mit wenig Zeit, die dennoch Wildtiere, wunderschöne Landschaften und ein entspanntes Safari-Erlebnis in der Nähe von Arusha genießen möchten. Auf Wunsch können optionale Aktivitäten wie eine geführte Wandersafari organisiert werden.',

    itineraryTitle: 'Ganztägiger Reiseplan',

    itinerary: [
      {
        time: '07:30',
        title: 'Abholung vom Hotel',
        text: 'Abholung von Ihrem Hotel in Arusha und Fahrt zum Arusha-Nationalpark.',
      },
      {
        time: '09:00',
        title: 'Morgendliche Pirschfahrt',
        text: 'Genießen Sie eine morgendliche Pirschfahrt durch den Park auf der Suche nach Giraffen, Büffeln, Zebras, Affen und verschiedenen Vogelarten.',
      },
      {
        time: '11:00',
        title: 'Optionale geführte Wandersafari',
        text: 'Gäste können auf Wunsch an einer geführten Wandersafari in Begleitung eines bewaffneten Parkrangers teilnehmen. Dieses besondere Erlebnis ermöglicht eine intensivere Verbindung zur Natur und vermittelt Kenntnisse über Tierspuren, Pflanzen und das Ökosystem des Parks.',
      },
      {
        time: '13:00',
        title: 'Picknick-Mittagessen',
        text: 'Genießen Sie ein köstliches Picknick an einem malerischen Picknickplatz im Park.',
      },
      {
        time: '14:00',
        title: 'Panoramafahrt an den Momella-Seen',
        text: 'Erkunden Sie weiter die wunderschönen Momella-Seen und genießen Sie spektakuläre Ausblicke auf den Mount Meru, bevor Sie nach Arusha zurückkehren.',
      },
      {
        time: '16:30',
        title: 'Rückkehr nach Arusha',
        text: 'Fahrt zurück zu Ihrem Hotel nach einem unvergesslichen Tag im Nationalpark.',
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
    ],

    bringLabel: 'WAS SIE MITBRINGEN SOLLTEN',
    bringTitle: 'Bereiten Sie sich auf Ihren Tagesausflug vor',
    whatToBring: [
      'Bequeme Wanderschuhe',
      'Sonnenhut und Sonnencreme',
      'Kamera oder Fernglas',
      'Leichte Jacke',
      'Persönliche Medikamente',
    ],

    imageAlt: 'Safari-Fahrzeug in Tansania',

    ctaTitle: 'Bereit für Ihr Abenteuer im Arusha-Nationalpark?',
    ctaText:
      'Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihren privaten Tagesausflug.',
    quoteButton: 'Angebot anfragen',
    whatsappButton: 'Über WhatsApp kontaktieren',
  },

  fr: {
    heroTitle: 'Excursion d’une journée au parc national d’Arusha',
    heroSubtitle:
      'Découvrez la faune, les lacs Momella, les vues sur le mont Meru et de magnifiques paysages en une journée inoubliable.',

    overviewLabel: 'APERÇU DE LA VISITE',
    overviewTitle: 'Une journée parfaite près d’Arusha',
    overview1:
      'Le parc national d’Arusha est l’un des parcs les plus beaux et les plus accessibles de Tanzanie. Il est réputé pour ses girafes, buffles, singes, les lacs Momella, ses forêts verdoyantes et ses vues spectaculaires sur le mont Meru.',
    overview2:
      'Cette excursion privée d’une journée est idéale pour les voyageurs disposant de peu de temps mais souhaitant profiter de la faune, de magnifiques paysages et d’une expérience safari relaxante près d’Arusha. Des activités optionnelles, comme un safari pédestre guidé, peuvent être organisées sur demande.',

    itineraryTitle: 'Itinéraire d’une journée complète',

    itinerary: [
      {
        time: '07:30',
        title: 'Prise en charge à l’hôtel',
        text: 'Prise en charge à votre hôtel à Arusha et départ vers le parc national d’Arusha.',
      },
      {
        time: '09:00',
        title: 'Safari du matin',
        text: 'Profitez d’un safari matinal à travers le parc à la recherche de girafes, buffles, zèbres, singes et de nombreuses espèces d’oiseaux.',
      },
      {
        time: '11:00',
        title: 'Safari pédestre guidé optionnel',
        text: 'Les visiteurs qui le souhaitent peuvent participer à un safari pédestre guidé accompagné d’un ranger armé du parc. Cette expérience unique permet de se rapprocher de la nature et d’en apprendre davantage sur les traces d’animaux, les plantes et l’écosystème du parc.',
      },
      {
        time: '13:00',
        title: 'Déjeuner pique-nique',
        text: 'Profitez d’un délicieux déjeuner pique-nique dans un cadre panoramique à l’intérieur du parc.',
      },
      {
        time: '14:00',
        title: 'Route panoramique des lacs Momella',
        text: 'Continuez à explorer les magnifiques lacs Momella et profitez de vues spectaculaires sur le mont Meru avant de retourner à Arusha.',
      },
      {
        time: '16:30',
        title: 'Retour à Arusha',
        text: 'Retour à votre hôtel après une journée inoubliable dans le parc.',
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
    ],

    bringLabel: 'À EMPORTER',
    bringTitle: 'Préparez votre excursion d’une journée',
    whatToBring: [
      'Chaussures de marche confortables',
      'Chapeau et crème solaire',
      'Appareil photo ou jumelles',
      'Veste légère',
      'Médicaments personnels',
    ],

    imageAlt: 'Véhicule safari en Tanzanie',

    ctaTitle: 'Prêt pour votre aventure au parc national d’Arusha ?',
    ctaText:
      'Contactez Kilimanjaro Travel dès aujourd’hui et recevez un devis personnalisé pour votre excursion privée d’une journée.',
    quoteButton: 'Demander un devis',
    whatsappButton: 'Nous contacter sur WhatsApp',
  },

  es: {
    heroTitle: 'Excursión de un día al Parque Nacional de Arusha',
    heroSubtitle:
      'Descubre la fauna, los lagos Momella, las vistas del monte Meru y hermosos paisajes en un día inolvidable.',

    overviewLabel: 'DESCRIPCIÓN DEL TOUR',
    overviewTitle: 'Un día perfecto cerca de Arusha',
    overview1:
      'El Parque Nacional de Arusha es uno de los parques más bonitos y accesibles de Tanzania. Es famoso por sus jirafas, búfalos, monos, los lagos Momella, sus bosques verdes y las espectaculares vistas del monte Meru.',
    overview2:
      'Esta excursión privada de un día es ideal para viajeros con poco tiempo que aún desean disfrutar de la fauna, hermosos paisajes y una experiencia de safari relajada cerca de Arusha. También se pueden organizar actividades opcionales, como un safari a pie guiado, bajo petición.',

    itineraryTitle: 'Itinerario de día completo',

    itinerary: [
      {
        time: '07:30',
        title: 'Recogida en el hotel',
        text: 'Recogida en tu hotel en Arusha y traslado al Parque Nacional de Arusha.',
      },
      {
        time: '09:00',
        title: 'Safari de la mañana',
        text: 'Disfruta de un safari matutino por el parque en busca de jirafas, búfalos, cebras, monos y una gran variedad de especies de aves.',
      },
      {
        time: '11:00',
        title: 'Safari a pie guiado opcional',
        text: 'Los huéspedes que lo deseen pueden disfrutar de un safari a pie guiado acompañado por un guardabosques armado. Esta experiencia ofrece una conexión más cercana con la naturaleza y la oportunidad de aprender sobre huellas de animales, plantas y el ecosistema del parque.',
      },
      {
        time: '13:00',
        title: 'Almuerzo tipo picnic',
        text: 'Disfruta de un delicioso almuerzo tipo picnic en un lugar panorámico dentro del parque.',
      },
      {
        time: '14:00',
        title: 'Ruta panorámica por los lagos Momella',
        text: 'Continúa explorando los hermosos lagos Momella y disfruta de espectaculares vistas del monte Meru antes de regresar a Arusha.',
      },
      {
        time: '16:30',
        title: 'Regreso a Arusha',
        text: 'Regresa a tu hotel después de un día inolvidable en el parque.',
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
    ],

    bringLabel: 'QUÉ LLEVAR',
    bringTitle: 'Prepárate para tu excursión de un día',
    whatToBring: [
      'Calzado cómodo para caminar',
      'Sombrero y protector solar',
      'Cámara o prismáticos',
      'Chaqueta ligera',
      'Medicamentos personales',
    ],

    imageAlt: 'Vehículo safari en Tanzania',

    ctaTitle: '¿Listo para tu aventura en el Parque Nacional de Arusha?',
    ctaText:
      'Contacta hoy con Kilimanjaro Travel y recibe un presupuesto personalizado para tu excursión privada de un día.',
    quoteButton: 'Solicitar presupuesto',
    whatsappButton: 'Contactarnos por WhatsApp',
  },
};

export default function ArushaNationalParkPage() {
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
        image="/images/arusha-np-five.jpg"
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
                  <strong>{t.duration}:</strong> {t.durationValue}
                </p>

                <p>
                  <strong>{t.departure}:</strong> {t.departureValue}
                </p>

                <p>
                  <strong>{t.tourType}:</strong> {t.tourTypeValue}
                </p>

                <p>
                  <strong>{t.bestTime}:</strong> {t.bestTimeValue}
                </p>

                <p>
                  <strong>{t.transport}:</strong> {t.transportValue}
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
                src="/images/arusha-np-two.jpg"
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