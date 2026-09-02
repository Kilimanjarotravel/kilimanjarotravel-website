'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: "Maasai Market & Local Handicrafts",
    heroSubtitle:
      'Discover colorful Tanzanian art, handmade souvenirs, traditional jewelry and the creativity of local artisans.',

    overviewLabel: 'TOUR OVERVIEW',
    overviewTitle: 'Culture, Art and Local Shopping',
    overview1:
      "This private tour introduces you to Arusha's colorful markets, local artists and traditional Tanzanian handicrafts.",
    overview2:
      'Browse paintings, carvings, jewelry, fabrics and handmade souvenirs while learning about local culture and supporting Tanzanian artisans and community businesses.',

    itineraryTitle: 'Full Day Itinerary',

    itinerary: [
      {
        time: '09:00',
        title: 'Hotel Pickup',
        text: 'Pickup from your hotel in Arusha and begin your private cultural shopping experience.',
      },
      {
        time: '09:30',
        title: 'Maasai Market Guided Visit',
        text: 'Explore the colorful Maasai Market with your guide and discover paintings, fabrics, jewelry, carvings and handmade souvenirs.',
      },
      {
        time: '11:00',
        title: 'Meet Local Artists and Craftspeople',
        text: 'Meet local artisans, learn how selected products are made and hear the stories behind traditional Tanzanian designs.',
      },
      {
        time: '12:30',
        title: 'Local Tanzanian Lunch',
        text: 'Enjoy a freshly prepared lunch at a local restaurant in Arusha.',
      },
      {
        time: '13:30',
        title: 'Local Handicrafts and Cooperative Visit',
        text: 'Visit a local handicraft centre or community cooperative and explore products made by local women and artists.',
      },
      {
        time: '15:00',
        title: 'Optional Tanzanite and Gemstone Experience',
        text: 'Guests may request an optional visit to a reputable gemstone centre to learn about Tanzanite and other local gemstones.',
      },
      {
        time: '16:00',
        title: 'Return to Hotel',
        text: 'Return to your hotel after an enjoyable day of culture, art and local shopping.',
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
      'Guided market and handicraft visits',
      'Local Tanzanian lunch',
      'Drinking water',
    ],

    excludedTitle: 'What Is Excluded',
    excluded: [
      'Flights',
      'Travel insurance',
      'Tips and gratuities',
      'Souvenirs and personal shopping',
      'Optional gemstone purchases',
      'Alcoholic drinks',
    ],

    imageAlt: 'Maasai Market and local handicrafts',

    bringLabel: 'WHAT TO BRING',
    bringTitle: 'Prepare for Your Market Tour',
    bring: [
      'Comfortable walking shoes',
      'Sun hat and sunscreen',
      'Camera',
      'Cash or payment card for shopping',
      'Reusable shopping bag',
      'Personal medication',
    ],

    ctaTitle: "Ready to Discover Arusha's Local Art?",
    ctaText:
      'Contact Kilimanjaro Travel and receive a tailor-made quotation for your private Maasai Market and Local Handicrafts Tour.',
    quoteButton: 'Request a Quote',
    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Maasai-Markt & lokales Kunsthandwerk',
    heroSubtitle:
      'Entdecken Sie farbenfrohe tansanische Kunst, handgefertigte Souvenirs, traditionellen Schmuck und die Kreativität lokaler Kunsthandwerker.',

    overviewLabel: 'TOURÜBERSICHT',
    overviewTitle: 'Kultur, Kunst und lokales Shopping',
    overview1:
      'Diese private Tour führt Sie zu den farbenfrohen Märkten von Arusha, lokalen Künstlern und traditionellem tansanischem Kunsthandwerk.',
    overview2:
      'Entdecken Sie Gemälde, Schnitzereien, Schmuck, Stoffe und handgefertigte Souvenirs, während Sie mehr über die lokale Kultur erfahren und tansanische Kunsthandwerker und Gemeinschaftsbetriebe unterstützen.',

    itineraryTitle: 'Ganztägiger Reiseplan',

    itinerary: [
      {
        time: '09:00',
        title: 'Abholung vom Hotel',
        text: 'Abholung von Ihrem Hotel in Arusha und Beginn Ihres privaten Kultur- und Einkaufserlebnisses.',
      },
      {
        time: '09:30',
        title: 'Geführter Besuch des Maasai-Marktes',
        text: 'Erkunden Sie mit Ihrem Guide den farbenfrohen Maasai-Markt und entdecken Sie Gemälde, Stoffe, Schmuck, Schnitzereien und handgefertigte Souvenirs.',
      },
      {
        time: '11:00',
        title: 'Treffen mit lokalen Künstlern und Handwerkern',
        text: 'Treffen Sie lokale Kunsthandwerker, erfahren Sie, wie ausgewählte Produkte hergestellt werden, und hören Sie die Geschichten hinter traditionellen tansanischen Designs.',
      },
      {
        time: '12:30',
        title: 'Lokales tansanisches Mittagessen',
        text: 'Genießen Sie ein frisch zubereitetes Mittagessen in einem lokalen Restaurant in Arusha.',
      },
      {
        time: '13:30',
        title: 'Lokales Kunsthandwerk und Besuch einer Kooperative',
        text: 'Besuchen Sie ein lokales Kunsthandwerkszentrum oder eine Gemeinschaftskooperative und entdecken Sie Produkte lokaler Frauen und Künstler.',
      },
      {
        time: '15:00',
        title: 'Optionales Tansanit- und Edelsteinerlebnis',
        text: 'Auf Wunsch können Gäste ein seriöses Edelsteinzentrum besuchen und mehr über Tansanit und andere lokale Edelsteine erfahren.',
      },
      {
        time: '16:00',
        title: 'Rückkehr zum Hotel',
        text: 'Rückkehr zu Ihrem Hotel nach einem schönen Tag voller Kultur, Kunst und lokalem Shopping.',
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
      'Geführte Markt- und Kunsthandwerksbesuche',
      'Lokales tansanisches Mittagessen',
      'Trinkwasser',
    ],

    excludedTitle: 'Nicht im Preis enthalten',
    excluded: [
      'Flüge',
      'Reiseversicherung',
      'Trinkgelder',
      'Souvenirs und persönliche Einkäufe',
      'Optionale Edelsteinkäufe',
      'Alkoholische Getränke',
    ],

    imageAlt: 'Maasai-Markt und lokales Kunsthandwerk',

    bringLabel: 'WAS SIE MITBRINGEN SOLLTEN',
    bringTitle: 'Bereiten Sie sich auf Ihre Markttour vor',
    bring: [
      'Bequeme Wanderschuhe',
      'Sonnenhut und Sonnencreme',
      'Kamera',
      'Bargeld oder Zahlungskarte für Einkäufe',
      'Wiederverwendbare Einkaufstasche',
      'Persönliche Medikamente',
    ],

    ctaTitle: 'Bereit, Arushas lokale Kunst zu entdecken?',
    ctaText:
      'Kontaktieren Sie Kilimanjaro Travel und erhalten Sie ein maßgeschneidertes Angebot für Ihre private Maasai-Markt- und Kunsthandwerkstour.',
    quoteButton: 'Angebot anfragen',
    whatsappButton: 'Über WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Marché Maasai et artisanat local',
    heroSubtitle:
      'Découvrez l’art tanzanien coloré, les souvenirs faits main, les bijoux traditionnels et la créativité des artisans locaux.',

    overviewLabel: 'APERÇU DU CIRCUIT',
    overviewTitle: 'Culture, art et shopping local',
    overview1:
      'Cette visite privée vous fait découvrir les marchés colorés d’Arusha, les artistes locaux et l’artisanat traditionnel tanzanien.',
    overview2:
      'Découvrez des peintures, sculptures, bijoux, tissus et souvenirs artisanaux tout en apprenant davantage sur la culture locale et en soutenant les artisans tanzaniens et les entreprises communautaires.',

    itineraryTitle: 'Itinéraire d’une journée complète',

    itinerary: [
      {
        time: '09:00',
        title: 'Prise en charge à l’hôtel',
        text: 'Prise en charge à votre hôtel à Arusha et début de votre expérience culturelle et shopping privée.',
      },
      {
        time: '09:30',
        title: 'Visite guidée du marché Maasai',
        text: 'Explorez le marché Maasai coloré avec votre guide et découvrez des peintures, tissus, bijoux, sculptures et souvenirs faits main.',
      },
      {
        time: '11:00',
        title: 'Rencontre avec les artistes et artisans locaux',
        text: 'Rencontrez des artisans locaux, découvrez comment certains produits sont fabriqués et écoutez les histoires derrière les designs traditionnels tanzaniens.',
      },
      {
        time: '12:30',
        title: 'Déjeuner tanzanien local',
        text: 'Profitez d’un déjeuner fraîchement préparé dans un restaurant local à Arusha.',
      },
      {
        time: '13:30',
        title: 'Artisanat local et visite d’une coopérative',
        text: 'Visitez un centre d’artisanat local ou une coopérative communautaire et découvrez les produits fabriqués par des femmes et des artistes locaux.',
      },
      {
        time: '15:00',
        title: 'Expérience optionnelle sur la tanzanite et les pierres précieuses',
        text: 'Les visiteurs peuvent demander une visite optionnelle dans un centre de pierres précieuses réputé afin d’en apprendre davantage sur la tanzanite et d’autres pierres locales.',
      },
      {
        time: '16:00',
        title: 'Retour à l’hôtel',
        text: 'Retour à votre hôtel après une agréable journée consacrée à la culture, à l’art et au shopping local.',
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
      'Guide professionnel anglophone',
      'Visites guidées des marchés et de l’artisanat',
      'Déjeuner tanzanien local',
      'Eau potable',
    ],

    excludedTitle: 'Ce qui n’est pas inclus',
    excluded: [
      'Vols',
      'Assurance voyage',
      'Pourboires',
      'Souvenirs et achats personnels',
      'Achats optionnels de pierres précieuses',
      'Boissons alcoolisées',
    ],

    imageAlt: 'Marché Maasai et artisanat local',

    bringLabel: 'À EMPORTER',
    bringTitle: 'Préparez votre visite du marché',
    bring: [
      'Chaussures de marche confortables',
      'Chapeau et crème solaire',
      'Appareil photo',
      'Espèces ou carte bancaire pour les achats',
      'Sac de shopping réutilisable',
      'Médicaments personnels',
    ],

    ctaTitle: 'Prêt à découvrir l’art local d’Arusha ?',
    ctaText:
      'Contactez Kilimanjaro Travel et recevez un devis personnalisé pour votre visite privée du marché Maasai et de l’artisanat local.',
    quoteButton: 'Demander un devis',
    whatsappButton: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Mercado Maasai y Artesanía Local',
    heroSubtitle:
      'Descubre el colorido arte tanzano, los recuerdos hechos a mano, la joyería tradicional y la creatividad de los artesanos locales.',

    overviewLabel: 'DESCRIPCIÓN DEL TOUR',
    overviewTitle: 'Cultura, arte y compras locales',
    overview1:
      'Este tour privado te presenta los coloridos mercados de Arusha, los artistas locales y la artesanía tradicional de Tanzania.',
    overview2:
      'Descubre pinturas, tallas, joyería, telas y recuerdos hechos a mano mientras aprendes sobre la cultura local y apoyas a los artesanos tanzanos y a los negocios comunitarios.',

    itineraryTitle: 'Itinerario de día completo',

    itinerary: [
      {
        time: '09:00',
        title: 'Recogida en el hotel',
        text: 'Recogida en tu hotel en Arusha y comienzo de tu experiencia privada de cultura y compras.',
      },
      {
        time: '09:30',
        title: 'Visita guiada al Mercado Maasai',
        text: 'Explora el colorido Mercado Maasai con tu guía y descubre pinturas, telas, joyas, tallas y recuerdos hechos a mano.',
      },
      {
        time: '11:00',
        title: 'Encuentro con artistas y artesanos locales',
        text: 'Conoce a artesanos locales, descubre cómo se fabrican algunos productos y escucha las historias detrás de los diseños tradicionales de Tanzania.',
      },
      {
        time: '12:30',
        title: 'Almuerzo tanzano local',
        text: 'Disfruta de un almuerzo recién preparado en un restaurante local de Arusha.',
      },
      {
        time: '13:30',
        title: 'Artesanía local y visita a una cooperativa',
        text: 'Visita un centro de artesanía local o una cooperativa comunitaria y descubre productos elaborados por mujeres y artistas locales.',
      },
      {
        time: '15:00',
        title: 'Experiencia opcional de tanzanita y piedras preciosas',
        text: 'Los visitantes pueden solicitar una visita opcional a un centro de piedras preciosas de confianza para conocer la tanzanita y otras piedras locales.',
      },
      {
        time: '16:00',
        title: 'Regreso al hotel',
        text: 'Regresa a tu hotel después de un agradable día de cultura, arte y compras locales.',
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
      'Visitas guiadas al mercado y talleres de artesanía',
      'Almuerzo tanzano local',
      'Agua potable',
    ],

    excludedTitle: 'Qué no incluye',
    excluded: [
      'Vuelos',
      'Seguro de viaje',
      'Propinas',
      'Recuerdos y compras personales',
      'Compras opcionales de piedras preciosas',
      'Bebidas alcohólicas',
    ],

    imageAlt: 'Mercado Maasai y artesanía local',

    bringLabel: 'QUÉ LLEVAR',
    bringTitle: 'Prepárate para tu tour por el mercado',
    bring: [
      'Calzado cómodo para caminar',
      'Sombrero y protector solar',
      'Cámara',
      'Efectivo o tarjeta para las compras',
      'Bolsa de compras reutilizable',
      'Medicamentos personales',
    ],

    ctaTitle: '¿Listo para descubrir el arte local de Arusha?',
    ctaText:
      'Contacta con Kilimanjaro Travel y recibe un presupuesto personalizado para tu tour privado por el Mercado Maasai y la artesanía local.',
    quoteButton: 'Solicitar presupuesto',
    whatsappButton: 'Chatear por WhatsApp',
  },
};

export default function MaasaiMarketLocalHandicraftsPage() {
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
        image="/images/maasai-shop-two.jpg"
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
                src="/images/masai-shop-three.jpg"
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