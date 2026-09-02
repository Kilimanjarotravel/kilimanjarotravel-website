'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Ngorongoro Crater Day Trip',
    heroSubtitle:
      'Descend into the world-famous crater and discover the Big Five, breathtaking scenery and unforgettable wildlife.',

    overviewLabel: 'TOUR OVERVIEW',
    overviewTitle: 'A Wildlife Wonder of Tanzania',
    overview1:
      "Ngorongoro Crater is one of Africa's most remarkable wildlife destinations and a UNESCO World Heritage Site. The crater floor supports a dense concentration of animals throughout the year.",
    overview2:
      'This private day trip offers excellent opportunities to see lions, elephants, buffaloes, zebras, wildebeest, hippos, hyenas and the rare black rhino in a spectacular natural setting.',

    itineraryTitle: 'Full Day Itinerary',

    itinerary: [
      {
        time: '06:00',
        title: 'Hotel Pickup',
        text: 'Pickup from your hotel in Arusha and begin the scenic drive toward the Ngorongoro Conservation Area.',
      },
      {
        time: '08:30',
        title: 'Crater Viewpoint',
        text: 'Stop at the famous viewpoint and enjoy spectacular panoramic views across the Ngorongoro Crater.',
      },
      {
        time: '09:00',
        title: 'Descend into the Crater',
        text: 'Descend to the crater floor for a game drive in search of lions, elephants, buffaloes, zebras, wildebeest, hyenas and the rare black rhino.',
      },
      {
        time: '12:30',
        title: 'Picnic Lunch at Hippo Pool',
        text: 'Enjoy a picnic lunch near the Hippo Pool while watching hippos, birds and the beautiful crater scenery.',
      },
      {
        time: '13:30',
        title: 'Afternoon Game Drive',
        text: 'Continue exploring the crater floor and search for more wildlife, including members of the Big Five.',
      },
      {
        time: '16:00',
        title: 'Ascend the Crater',
        text: 'Drive back up the crater wall and begin the return journey to Arusha.',
      },
      {
        time: '18:30',
        title: 'Return to Arusha',
        text: 'Arrive at your hotel in Arusha after an unforgettable Ngorongoro Crater safari.',
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
    transportValue: 'Private 4x4 Safari Vehicle',
    bookButton: 'Book This Tour',

    includedTitle: 'What Is Included',
    included: [
      'Hotel pickup and drop-off',
      'Private 4x4 safari vehicle',
      'Professional English-speaking guide',
      'Ngorongoro entrance and crater service fees',
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
      'Optional Olduvai Gorge visit',
    ],

    bringLabel: 'WHAT TO BRING',
    bringTitle: 'Prepare for Your Crater Safari',
    whatToBring: [
      'Comfortable clothing and shoes',
      'Sun hat and sunscreen',
      'Camera or binoculars',
      'Warm jacket for the crater rim',
      'Personal medication',
    ],

    imageAlt: 'Ngorongoro Crater safari',

    ctaTitle: 'Ready for Your Ngorongoro Crater Adventure?',
    ctaText:
      'Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private Ngorongoro Crater day trip.',
    quoteButton: 'Request a Quote',
    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Tagesausflug zum Ngorongoro-Krater',
    heroSubtitle:
      'Fahren Sie in den weltberühmten Krater hinab und entdecken Sie die Big Five, atemberaubende Landschaften und unvergessliche Wildtiererlebnisse.',

    overviewLabel: 'TOURÜBERSICHT',
    overviewTitle: 'Ein Naturwunder Tansanias',
    overview1:
      'Der Ngorongoro-Krater ist eines der beeindruckendsten Wildtiergebiete Afrikas und gehört zum UNESCO-Welterbe. Der Kraterboden beherbergt das ganze Jahr über eine außergewöhnlich hohe Konzentration an Wildtieren.',
    overview2:
      'Dieser private Tagesausflug bietet hervorragende Möglichkeiten, Löwen, Elefanten, Büffel, Zebras, Gnus, Flusspferde, Hyänen und das seltene Spitzmaulnashorn in einer spektakulären natürlichen Umgebung zu beobachten.',

    itineraryTitle: 'Ganztägiger Reiseplan',

    itinerary: [
      {
        time: '06:00',
        title: 'Abholung vom Hotel',
        text: 'Abholung von Ihrem Hotel in Arusha und Beginn der landschaftlich reizvollen Fahrt zum Ngorongoro-Schutzgebiet.',
      },
      {
        time: '08:30',
        title: 'Aussichtspunkt des Kraters',
        text: 'Halten Sie am berühmten Aussichtspunkt und genießen Sie einen spektakulären Panoramablick über den Ngorongoro-Krater.',
      },
      {
        time: '09:00',
        title: 'Abfahrt in den Krater',
        text: 'Fahren Sie auf den Kraterboden hinab und unternehmen Sie eine Pirschfahrt auf der Suche nach Löwen, Elefanten, Büffeln, Zebras, Gnus, Hyänen und dem seltenen Spitzmaulnashorn.',
      },
      {
        time: '12:30',
        title: 'Picknick am Hippo Pool',
        text: 'Genießen Sie ein Picknick in der Nähe des Hippo Pools und beobachten Sie Flusspferde, Vögel und die wunderschöne Landschaft des Kraters.',
      },
      {
        time: '13:30',
        title: 'Nachmittägliche Pirschfahrt',
        text: 'Erkunden Sie weiter den Kraterboden und halten Sie Ausschau nach weiteren Wildtieren, darunter Mitglieder der Big Five.',
      },
      {
        time: '16:00',
        title: 'Aufstieg aus dem Krater',
        text: 'Fahren Sie die Kraterwand hinauf und beginnen Sie die Rückfahrt nach Arusha.',
      },
      {
        time: '18:30',
        title: 'Rückkehr nach Arusha',
        text: 'Ankunft in Ihrem Hotel in Arusha nach einer unvergesslichen Safari im Ngorongoro-Krater.',
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
    transportValue: 'Privates 4x4-Safari-Fahrzeug',
    bookButton: 'Diese Tour buchen',

    includedTitle: 'Im Preis enthalten',
    included: [
      'Abholung und Rücktransfer zum Hotel',
      'Privates 4x4-Safari-Fahrzeug',
      'Professioneller englischsprachiger Guide',
      'Eintritts- und Kratergebühren für Ngorongoro',
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
      'Optionaler Besuch der Olduvai-Schlucht',
    ],

    bringLabel: 'WAS SIE MITBRINGEN SOLLTEN',
    bringTitle: 'Bereiten Sie sich auf Ihre Krater-Safari vor',
    whatToBring: [
      'Bequeme Kleidung und Schuhe',
      'Sonnenhut und Sonnencreme',
      'Kamera oder Fernglas',
      'Warme Jacke für den Kraterrand',
      'Persönliche Medikamente',
    ],

    imageAlt: 'Safari im Ngorongoro-Krater',

    ctaTitle: 'Bereit für Ihr Abenteuer im Ngorongoro-Krater?',
    ctaText:
      'Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihren privaten Tagesausflug zum Ngorongoro-Krater.',
    quoteButton: 'Angebot anfragen',
    whatsappButton: 'Über WhatsApp kontaktieren',
  },

  fr: {
    heroTitle: 'Excursion d’une journée au cratère du Ngorongoro',
    heroSubtitle:
      'Descendez dans le célèbre cratère et découvrez les Big Five, des paysages époustouflants et une faune inoubliable.',

    overviewLabel: 'APERÇU DE LA VISITE',
    overviewTitle: 'Une merveille naturelle de Tanzanie',
    overview1:
      'Le cratère du Ngorongoro est l’une des destinations de safari les plus remarquables d’Afrique et fait partie du patrimoine mondial de l’UNESCO. Le fond du cratère abrite une forte concentration d’animaux toute l’année.',
    overview2:
      'Cette excursion privée d’une journée offre d’excellentes possibilités d’observer des lions, éléphants, buffles, zèbres, gnous, hippopotames, hyènes et le rare rhinocéros noir dans un cadre naturel spectaculaire.',

    itineraryTitle: 'Itinéraire d’une journée complète',

    itinerary: [
      {
        time: '06:00',
        title: 'Prise en charge à l’hôtel',
        text: 'Prise en charge à votre hôtel à Arusha et départ pour une route panoramique vers la zone de conservation du Ngorongoro.',
      },
      {
        time: '08:30',
        title: 'Point de vue sur le cratère',
        text: 'Arrêt au célèbre point de vue pour profiter d’une vue panoramique spectaculaire sur le cratère du Ngorongoro.',
      },
      {
        time: '09:00',
        title: 'Descente dans le cratère',
        text: 'Descendez au fond du cratère pour un safari à la recherche de lions, éléphants, buffles, zèbres, gnous, hyènes et du rare rhinocéros noir.',
      },
      {
        time: '12:30',
        title: 'Déjeuner pique-nique à Hippo Pool',
        text: 'Profitez d’un déjeuner pique-nique près de la piscine aux hippopotames tout en observant les hippopotames, les oiseaux et les magnifiques paysages du cratère.',
      },
      {
        time: '13:30',
        title: 'Safari de l’après-midi',
        text: 'Continuez à explorer le fond du cratère et recherchez d’autres animaux sauvages, notamment des membres des Big Five.',
      },
      {
        time: '16:00',
        title: 'Remontée du cratère',
        text: 'Remontez les parois du cratère et commencez le voyage de retour vers Arusha.',
      },
      {
        time: '18:30',
        title: 'Retour à Arusha',
        text: 'Arrivée à votre hôtel à Arusha après un safari inoubliable dans le cratère du Ngorongoro.',
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
    transportValue: 'Véhicule safari privé 4x4',
    bookButton: 'Réserver cette visite',

    includedTitle: 'Ce qui est inclus',
    included: [
      'Prise en charge et retour à l’hôtel',
      'Véhicule safari privé 4x4',
      'Guide professionnel anglophone',
      'Frais d’entrée et frais de service du cratère du Ngorongoro',
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
      'Visite optionnelle des gorges d’Olduvai',
    ],

    bringLabel: 'À EMPORTER',
    bringTitle: 'Préparez votre safari dans le cratère',
    whatToBring: [
      'Vêtements et chaussures confortables',
      'Chapeau et crème solaire',
      'Appareil photo ou jumelles',
      'Veste chaude pour le bord du cratère',
      'Médicaments personnels',
    ],

    imageAlt: 'Safari dans le cratère du Ngorongoro',

    ctaTitle: 'Prêt pour votre aventure au cratère du Ngorongoro ?',
    ctaText:
      'Contactez Kilimanjaro Travel dès aujourd’hui et recevez un devis personnalisé pour votre excursion privée d’une journée au cratère du Ngorongoro.',
    quoteButton: 'Demander un devis',
    whatsappButton: 'Nous contacter sur WhatsApp',
  },

  es: {
    heroTitle: 'Excursión de un día al Cráter del Ngorongoro',
    heroSubtitle:
      'Desciende al famoso cráter y descubre los Cinco Grandes, paisajes impresionantes y una fauna inolvidable.',

    overviewLabel: 'DESCRIPCIÓN DEL TOUR',
    overviewTitle: 'Una maravilla natural de Tanzania',
    overview1:
      'El Cráter del Ngorongoro es uno de los destinos de fauna más impresionantes de África y forma parte del Patrimonio Mundial de la UNESCO. El fondo del cráter alberga una gran concentración de animales durante todo el año.',
    overview2:
      'Esta excursión privada de un día ofrece excelentes oportunidades para observar leones, elefantes, búfalos, cebras, ñus, hipopótamos, hienas y el raro rinoceronte negro en un entorno natural espectacular.',

    itineraryTitle: 'Itinerario de día completo',

    itinerary: [
      {
        time: '06:00',
        title: 'Recogida en el hotel',
        text: 'Recogida en tu hotel en Arusha y comienzo del recorrido panorámico hacia el Área de Conservación del Ngorongoro.',
      },
      {
        time: '08:30',
        title: 'Mirador del cráter',
        text: 'Haz una parada en el famoso mirador y disfruta de impresionantes vistas panorámicas del Cráter del Ngorongoro.',
      },
      {
        time: '09:00',
        title: 'Descenso al cráter',
        text: 'Desciende hasta el fondo del cráter para realizar un safari en busca de leones, elefantes, búfalos, cebras, ñus, hienas y el raro rinoceronte negro.',
      },
      {
        time: '12:30',
        title: 'Almuerzo tipo picnic en Hippo Pool',
        text: 'Disfruta de un almuerzo tipo picnic cerca de Hippo Pool mientras observas hipopótamos, aves y los hermosos paisajes del cráter.',
      },
      {
        time: '13:30',
        title: 'Safari de la tarde',
        text: 'Continúa explorando el fondo del cráter y busca más animales salvajes, incluidos miembros de los Cinco Grandes.',
      },
      {
        time: '16:00',
        title: 'Ascenso del cráter',
        text: 'Sube por las paredes del cráter y comienza el viaje de regreso hacia Arusha.',
      },
      {
        time: '18:30',
        title: 'Regreso a Arusha',
        text: 'Llegada a tu hotel en Arusha después de un safari inolvidable por el Cráter del Ngorongoro.',
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
    transportValue: 'Vehículo safari privado 4x4',
    bookButton: 'Reservar este tour',

    includedTitle: 'Qué incluye',
    included: [
      'Recogida y regreso al hotel',
      'Vehículo safari privado 4x4',
      'Guía profesional de habla inglesa',
      'Entradas y tarifas de servicio del cráter del Ngorongoro',
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
      'Visita opcional a la Garganta de Olduvai',
    ],

    bringLabel: 'QUÉ LLEVAR',
    bringTitle: 'Prepárate para tu safari por el cráter',
    whatToBring: [
      'Ropa y calzado cómodos',
      'Sombrero y protector solar',
      'Cámara o prismáticos',
      'Chaqueta abrigada para el borde del cráter',
      'Medicamentos personales',
    ],

    imageAlt: 'Safari en el Cráter del Ngorongoro',

    ctaTitle: '¿Listo para tu aventura en el Cráter del Ngorongoro?',
    ctaText:
      'Contacta hoy con Kilimanjaro Travel y recibe un presupuesto personalizado para tu excursión privada de un día al Cráter del Ngorongoro.',
    quoteButton: 'Solicitar presupuesto',
    whatsappButton: 'Contactarnos por WhatsApp',
  },
};

export default function NgorongoroCraterPage() {
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
        image="/images/ngorongoro-five.jpg"
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
                src="/images/ngorongoro-three.jpeg"
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