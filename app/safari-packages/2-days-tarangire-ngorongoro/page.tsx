'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: '2 Days Tarangire & Ngorongoro Safari',
    heroSubtitle:
      'Discover Tarangire’s elephants and baobabs, then descend into the spectacular Ngorongoro Crater.',

    overviewLabel: 'SAFARI OVERVIEW',
    overviewTitle: 'Two Unforgettable Days in Northern Tanzania',

    paragraph1:
      'This private two-day safari combines Tarangire National Park with the world-famous Ngorongoro Crater. It is ideal for travelers with limited time who still want to experience dramatic landscapes and excellent wildlife viewing.',

    paragraph2:
      'Tarangire is known for large elephant herds, ancient baobab trees and classic savannah scenery. Ngorongoro Crater offers one of Africa’s best opportunities to see a wide variety of wildlife within a compact area.',

    itineraryTitle: 'Day-by-Day Itinerary',

    accommodation: 'Accommodation',
    meals: 'Meals',

    day1: 'Day 1',
    day1Title: 'Arusha to Tarangire National Park',
    day1Text:
      'Pickup from your hotel in Arusha and drive to Tarangire National Park for a full-day game drive. Explore the park’s famous baobab landscapes and search for elephants, giraffes, zebras, lions, wildebeest and rich birdlife. Enjoy a picnic lunch inside the park before continuing your safari. In the late afternoon, drive to your lodge or tented camp for dinner and overnight.',
    day1Accommodation:
      'Lodge or tented camp near Karatu or Lake Manyara',
    day1Meals: 'Lunch and Dinner',

    day2: 'Day 2',
    day2Title: 'Ngorongoro Crater Safari and Return to Arusha',
    day2Text:
      'After breakfast, drive to the Ngorongoro Conservation Area and descend into the crater for a game drive. Search for lions, elephants, buffaloes, hippos, zebras, wildebeest, hyenas and, with luck, black rhinos. Enjoy a picnic lunch near the hippo pool before ascending the crater and returning to Arusha in the late afternoon.',
    day2Accommodation:
      'No accommodation included after the safari',
    day2Meals: 'Breakfast and Lunch',

    detailsTitle: 'Safari Details',
    duration: 'Duration',
    durationValue: '2 Days / 1 Night',
    departure: 'Departure',
    departureValue: 'Arusha',
    destinations: 'Destinations',
    destinationsValue: 'Tarangire & Ngorongoro',
    tourType: 'Tour Type',
    tourTypeValue: 'Private Safari',
    accommodationLabel: 'Accommodation',
    accommodationValue: 'Lodge / Tented Camp',
    bestTime: 'Best Time',
    bestTimeValue: 'All Year',

    startingFrom: 'Starting From',
    perPerson: 'per person',
    priceNote:
      'Based on 5–6 people sharing. Final price depends on group size, accommodation level and travel dates.',

    requestQuote: 'Request a Quote',

    pricesLabel: 'PRIVATE SAFARI PRICES',
    pricesTitle: 'Price by Group Size',
    pricesText:
      'These are sample starting prices. Final quotations may vary depending on accommodation, season, park fees and availability.',
    groupSize: 'Group Size',
    startingPrice: 'Starting Price',

    includedTitle: 'What Is Included',
    included: [
      'Hotel pickup and drop-off in Arusha',
      'Private 4x4 safari vehicle with pop-up roof',
      'Professional English-speaking safari guide',
      'Tarangire National Park entrance fees',
      'Ngorongoro Conservation Area and crater service fees',
      'One night lodge or tented camp accommodation',
      'Meals as listed in the itinerary',
      'Drinking water during the safari',
    ],

    excludedTitle: 'What Is Excluded',
    excluded: [
      'International and domestic flights',
      'Travel insurance',
      'Visa fees',
      'Tips and gratuities',
      'Alcoholic and soft drinks',
      'Personal expenses',
      'Optional activities not listed in the itinerary',
    ],

    bringLabel: 'WHAT TO BRING',
    bringTitle: 'Prepare for Your Safari',
    whatToBring: [
      'Comfortable safari clothing',
      'Sun hat and sunscreen',
      'Camera or binoculars',
      'Light jacket for cool mornings',
      'Personal medication',
      'Small day bag',
    ],

    readyTitle: 'Ready for Your Two-Day Safari?',
    readyText:
      'Contact Kilimanjaro Travel for availability, accommodation options and a tailor-made quotation based on your group size and travel dates.',

    whatsapp: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: '2 Tage Tarangire & Ngorongoro Safari',
    heroSubtitle:
      'Entdecken Sie Tarangires Elefanten und Baobabs und steigen Sie anschließend in den spektakulären Ngorongoro-Krater hinab.',

    overviewLabel: 'SAFARI-ÜBERSICHT',
    overviewTitle: 'Zwei unvergessliche Tage im Norden Tansanias',

    paragraph1:
      'Diese private zweitägige Safari kombiniert den Tarangire-Nationalpark mit dem weltberühmten Ngorongoro-Krater. Sie ist ideal für Reisende mit wenig Zeit, die dennoch beeindruckende Landschaften und eine hervorragende Tierbeobachtung erleben möchten.',

    paragraph2:
      'Tarangire ist bekannt für große Elefantenherden, alte Baobab-Bäume und klassische Savannenlandschaften. Der Ngorongoro-Krater bietet eine der besten Möglichkeiten Afrikas, eine große Vielfalt an Wildtieren auf engem Raum zu beobachten.',

    itineraryTitle: 'Tagesprogramm',

    accommodation: 'Unterkunft',
    meals: 'Mahlzeiten',

    day1: 'Tag 1',
    day1Title: 'Arusha zum Tarangire-Nationalpark',
    day1Text:
      'Abholung von Ihrem Hotel in Arusha und Fahrt zum Tarangire-Nationalpark für eine ganztägige Pirschfahrt. Erkunden Sie die berühmten Baobab-Landschaften und halten Sie Ausschau nach Elefanten, Giraffen, Zebras, Löwen, Gnus und zahlreichen Vogelarten. Genießen Sie ein Picknick im Park, bevor Sie Ihre Safari fortsetzen. Am späten Nachmittag fahren Sie zu Ihrer Lodge oder Ihrem Zeltcamp zum Abendessen und zur Übernachtung.',
    day1Accommodation:
      'Lodge oder Zeltcamp bei Karatu oder dem Lake Manyara',
    day1Meals: 'Mittagessen und Abendessen',

    day2: 'Tag 2',
    day2Title: 'Safari im Ngorongoro-Krater und Rückkehr nach Arusha',
    day2Text:
      'Nach dem Frühstück fahren Sie zum Ngorongoro-Schutzgebiet und steigen für eine Pirschfahrt in den Krater hinab. Halten Sie Ausschau nach Löwen, Elefanten, Büffeln, Flusspferden, Zebras, Gnus, Hyänen und mit etwas Glück auch Spitzmaulnashörnern. Genießen Sie ein Picknick in der Nähe des Nilpferdbeckens, bevor Sie den Krater verlassen und am späten Nachmittag nach Arusha zurückkehren.',
    day2Accommodation:
      'Nach der Safari keine Unterkunft inklusive',
    day2Meals: 'Frühstück und Mittagessen',

    detailsTitle: 'Safari-Details',
    duration: 'Dauer',
    durationValue: '2 Tage / 1 Nacht',
    departure: 'Abfahrt',
    departureValue: 'Arusha',
    destinations: 'Reiseziele',
    destinationsValue: 'Tarangire & Ngorongoro',
    tourType: 'Reiseart',
    tourTypeValue: 'Private Safari',
    accommodationLabel: 'Unterkunft',
    accommodationValue: 'Lodge / Zeltcamp',
    bestTime: 'Beste Reisezeit',
    bestTimeValue: 'Ganzjährig',

    startingFrom: 'Ab',
    perPerson: 'pro Person',
    priceNote:
      'Basierend auf 5–6 Personen im gemeinsamen Fahrzeug. Der endgültige Preis hängt von Gruppengröße, Unterkunftskategorie und Reisedaten ab.',

    requestQuote: 'Angebot anfordern',

    pricesLabel: 'PREISE FÜR PRIVATE SAFARIS',
    pricesTitle: 'Preis nach Gruppengröße',
    pricesText:
      'Dies sind beispielhafte Einstiegspreise. Das endgültige Angebot kann je nach Unterkunft, Saison, Parkgebühren und Verfügbarkeit variieren.',
    groupSize: 'Gruppengröße',
    startingPrice: 'Einstiegspreis',

    includedTitle: 'Im Preis enthalten',
    included: [
      'Abholung und Rücktransfer zum Hotel in Arusha',
      'Privates 4x4-Safarifahrzeug mit Aufstelldach',
      'Professioneller englischsprachiger Safariführer',
      'Eintrittsgebühren für den Tarangire-Nationalpark',
      'Gebühren für das Ngorongoro-Schutzgebiet und den Krater',
      'Eine Übernachtung in einer Lodge oder einem Zeltcamp',
      'Mahlzeiten gemäß Reiseverlauf',
      'Trinkwasser während der Safari',
    ],

    excludedTitle: 'Nicht enthalten',
    excluded: [
      'Internationale und Inlandsflüge',
      'Reiseversicherung',
      'Visagebühren',
      'Trinkgelder',
      'Alkoholische und alkoholfreie Getränke',
      'Persönliche Ausgaben',
      'Nicht im Reiseverlauf aufgeführte optionale Aktivitäten',
    ],

    bringLabel: 'WAS SIE MITBRINGEN SOLLTEN',
    bringTitle: 'Bereiten Sie sich auf Ihre Safari vor',
    whatToBring: [
      'Bequeme Safari-Kleidung',
      'Sonnenhut und Sonnencreme',
      'Kamera oder Fernglas',
      'Leichte Jacke für kühle Morgen',
      'Persönliche Medikamente',
      'Kleine Tagesrucksack',
    ],

    readyTitle: 'Bereit für Ihre zweitägige Safari?',
    readyText:
      'Kontaktieren Sie Kilimanjaro Travel für Verfügbarkeit, Unterkunftsmöglichkeiten und ein individuelles Angebot auf Grundlage Ihrer Gruppengröße und Reisedaten.',

    whatsapp: 'Über WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Safari de 2 jours Tarangire & Ngorongoro',
    heroSubtitle:
      'Découvrez les éléphants et les baobabs de Tarangire, puis descendez dans le spectaculaire cratère du Ngorongoro.',

    overviewLabel: 'APERÇU DU SAFARI',
    overviewTitle: 'Deux jours inoubliables dans le nord de la Tanzanie',

    paragraph1:
      'Ce safari privé de deux jours combine le parc national de Tarangire et le célèbre cratère du Ngorongoro. Il est idéal pour les voyageurs disposant de peu de temps mais souhaitant découvrir des paysages spectaculaires et une faune exceptionnelle.',

    paragraph2:
      'Tarangire est connu pour ses grands troupeaux d’éléphants, ses anciens baobabs et ses paysages classiques de savane. Le cratère du Ngorongoro offre l’une des meilleures occasions d’Afrique d’observer une grande variété d’animaux dans une zone compacte.',

    itineraryTitle: 'Itinéraire jour par jour',

    accommodation: 'Hébergement',
    meals: 'Repas',

    day1: 'Jour 1',
    day1Title: 'Arusha au parc national de Tarangire',
    day1Text:
      'Prise en charge à votre hôtel à Arusha et départ pour le parc national de Tarangire pour une journée complète de safari. Découvrez les célèbres paysages de baobabs et recherchez les éléphants, girafes, zèbres, lions, gnous et nombreuses espèces d’oiseaux. Profitez d’un déjeuner pique-nique dans le parc avant de poursuivre le safari. En fin d’après-midi, rejoignez votre lodge ou camp pour le dîner et la nuit.',
    day1Accommodation:
      'Lodge ou camp près de Karatu ou du lac Manyara',
    day1Meals: 'Déjeuner et dîner',

    day2: 'Jour 2',
    day2Title: 'Safari dans le cratère du Ngorongoro et retour à Arusha',
    day2Text:
      'Après le petit-déjeuner, départ vers la zone de conservation du Ngorongoro et descente dans le cratère pour un safari. Recherchez les lions, éléphants, buffles, hippopotames, zèbres, gnous, hyènes et, avec un peu de chance, les rhinocéros noirs. Profitez d’un déjeuner pique-nique près du bassin des hippopotames avant de remonter du cratère et de retourner à Arusha en fin d’après-midi.',
    day2Accommodation:
      'Aucun hébergement inclus après le safari',
    day2Meals: 'Petit-déjeuner et déjeuner',

    detailsTitle: 'Détails du safari',
    duration: 'Durée',
    durationValue: '2 jours / 1 nuit',
    departure: 'Départ',
    departureValue: 'Arusha',
    destinations: 'Destinations',
    destinationsValue: 'Tarangire & Ngorongoro',
    tourType: 'Type de voyage',
    tourTypeValue: 'Safari privé',
    accommodationLabel: 'Hébergement',
    accommodationValue: 'Lodge / Camp',
    bestTime: 'Meilleure période',
    bestTimeValue: 'Toute l’année',

    startingFrom: 'À partir de',
    perPerson: 'par personne',
    priceNote:
      'Basé sur 5 à 6 personnes partageant le véhicule. Le prix final dépend de la taille du groupe, du niveau d’hébergement et des dates de voyage.',

    requestQuote: 'Demander un devis',

    pricesLabel: 'PRIX DU SAFARI PRIVÉ',
    pricesTitle: 'Prix selon la taille du groupe',
    pricesText:
      'Ces prix sont des tarifs de départ indicatifs. Le devis final peut varier selon l’hébergement, la saison, les frais de parc et la disponibilité.',
    groupSize: 'Taille du groupe',
    startingPrice: 'Prix de départ',

    includedTitle: 'Inclus',
    included: [
      'Prise en charge et retour à l’hôtel à Arusha',
      'Véhicule safari 4x4 privé avec toit ouvrant',
      'Guide safari professionnel anglophone',
      'Frais d’entrée au parc national de Tarangire',
      'Frais de la zone de conservation et du cratère du Ngorongoro',
      'Une nuit en lodge ou camp',
      'Repas indiqués dans l’itinéraire',
      'Eau potable pendant le safari',
    ],

    excludedTitle: 'Non inclus',
    excluded: [
      'Vols internationaux et domestiques',
      'Assurance voyage',
      'Frais de visa',
      'Pourboires',
      'Boissons alcoolisées et rafraîchissements',
      'Dépenses personnelles',
      'Activités optionnelles non mentionnées dans l’itinéraire',
    ],

    bringLabel: 'À EMPORTER',
    bringTitle: 'Préparez votre safari',
    whatToBring: [
      'Vêtements de safari confortables',
      'Chapeau et crème solaire',
      'Appareil photo ou jumelles',
      'Veste légère pour les matinées fraîches',
      'Médicaments personnels',
      'Petit sac à dos',
    ],

    readyTitle: 'Prêt pour votre safari de deux jours ?',
    readyText:
      'Contactez Kilimanjaro Travel pour connaître les disponibilités, les options d’hébergement et obtenir un devis personnalisé selon la taille de votre groupe et vos dates de voyage.',

    whatsapp: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Safari de 2 días Tarangire y Ngorongoro',
    heroSubtitle:
      'Descubre los elefantes y baobabs de Tarangire y después desciende al espectacular cráter del Ngorongoro.',

    overviewLabel: 'RESUMEN DEL SAFARI',
    overviewTitle: 'Dos días inolvidables en el norte de Tanzania',

    paragraph1:
      'Este safari privado de dos días combina el Parque Nacional de Tarangire con el famoso Cráter del Ngorongoro. Es ideal para viajeros con poco tiempo que desean disfrutar de paisajes impresionantes y excelentes oportunidades para observar fauna.',

    paragraph2:
      'Tarangire es conocido por sus grandes manadas de elefantes, antiguos baobabs y paisajes clásicos de sabana. El Cráter del Ngorongoro ofrece una de las mejores oportunidades de África para observar una gran variedad de animales en un área compacta.',

    itineraryTitle: 'Itinerario día a día',

    accommodation: 'Alojamiento',
    meals: 'Comidas',

    day1: 'Día 1',
    day1Title: 'Arusha al Parque Nacional de Tarangire',
    day1Text:
      'Recogida en su hotel de Arusha y traslado al Parque Nacional de Tarangire para realizar un safari de día completo. Explore los famosos paisajes de baobabs y busque elefantes, jirafas, cebras, leones, ñus y numerosas especies de aves. Disfrute de un almuerzo tipo picnic dentro del parque antes de continuar el safari. Por la tarde, traslado a su lodge o campamento para cenar y pasar la noche.',
    day1Accommodation:
      'Lodge o campamento cerca de Karatu o el lago Manyara',
    day1Meals: 'Almuerzo y cena',

    day2: 'Día 2',
    day2Title: 'Safari en el Cráter del Ngorongoro y regreso a Arusha',
    day2Text:
      'Después del desayuno, traslado a la Zona de Conservación del Ngorongoro y descenso al cráter para realizar un safari. Busque leones, elefantes, búfalos, hipopótamos, cebras, ñus, hienas y, con suerte, rinocerontes negros. Disfrute de un almuerzo tipo picnic cerca de la piscina de hipopótamos antes de salir del cráter y regresar a Arusha por la tarde.',
    day2Accommodation:
      'No incluye alojamiento después del safari',
    day2Meals: 'Desayuno y almuerzo',

    detailsTitle: 'Detalles del safari',
    duration: 'Duración',
    durationValue: '2 días / 1 noche',
    departure: 'Salida',
    departureValue: 'Arusha',
    destinations: 'Destinos',
    destinationsValue: 'Tarangire y Ngorongoro',
    tourType: 'Tipo de viaje',
    tourTypeValue: 'Safari privado',
    accommodationLabel: 'Alojamiento',
    accommodationValue: 'Lodge / Campamento',
    bestTime: 'Mejor época',
    bestTimeValue: 'Todo el año',

    startingFrom: 'Desde',
    perPerson: 'por persona',
    priceNote:
      'Basado en 5–6 personas compartiendo el vehículo. El precio final depende del tamaño del grupo, categoría del alojamiento y fechas del viaje.',

    requestQuote: 'Solicitar presupuesto',

    pricesLabel: 'PRECIOS DEL SAFARI PRIVADO',
    pricesTitle: 'Precio según el tamaño del grupo',
    pricesText:
      'Estos son precios iniciales orientativos. El presupuesto final puede variar según el alojamiento, la temporada, las tasas del parque y la disponibilidad.',
    groupSize: 'Tamaño del grupo',
    startingPrice: 'Precio inicial',

    includedTitle: 'Qué está incluido',
    included: [
      'Recogida y regreso al hotel en Arusha',
      'Vehículo safari privado 4x4 con techo elevable',
      'Guía profesional de safari de habla inglesa',
      'Tasas de entrada al Parque Nacional de Tarangire',
      'Tasas de la Zona de Conservación y del Cráter del Ngorongoro',
      'Una noche de alojamiento en lodge o campamento',
      'Comidas indicadas en el itinerario',
      'Agua potable durante el safari',
    ],

    excludedTitle: 'Qué no está incluido',
    excluded: [
      'Vuelos internacionales y nacionales',
      'Seguro de viaje',
      'Tasas de visado',
      'Propinas',
      'Bebidas alcohólicas y refrescos',
      'Gastos personales',
      'Actividades opcionales no indicadas en el itinerario',
    ],

    bringLabel: 'QUÉ LLEVAR',
    bringTitle: 'Prepárate para tu safari',
    whatToBring: [
      'Ropa cómoda para safari',
      'Sombrero y protector solar',
      'Cámara o prismáticos',
      'Chaqueta ligera para las mañanas frescas',
      'Medicamentos personales',
      'Bolsa pequeña para el día',
    ],

    readyTitle: '¿Listo para tu safari de dos días?',
    readyText:
      'Contacta con Kilimanjaro Travel para consultar disponibilidad, opciones de alojamiento y recibir un presupuesto personalizado según el tamaño de tu grupo y tus fechas de viaje.',

    whatsapp: 'Chatear por WhatsApp',
  },
};

const priceRows = [
  {
    people: {
      en: '1 person',
      de: '1 Person',
      fr: '1 personne',
      es: '1 persona',
    },
    price: 'US$1,450',
  },
  {
    people: {
      en: '2 people',
      de: '2 Personen',
      fr: '2 personnes',
      es: '2 personas',
    },
    price: 'US$980 per person',
  },
  {
    people: {
      en: '3 people',
      de: '3 Personen',
      fr: '3 personnes',
      es: '3 personas',
    },
    price: 'US$850 per person',
  },
  {
    people: {
      en: '4 people',
      de: '4 Personen',
      fr: '4 personnes',
      es: '4 personas',
    },
    price: 'US$760 per person',
  },
  {
    people: {
      en: '5–6 people',
      de: '5–6 Personen',
      fr: '5–6 personnes',
      es: '5–6 personas',
    },
    price: 'US$650 per person',
  },
];

const priceText = {
  en: {
    perPerson: 'per person',
  },
  de: {
    perPerson: 'pro Person',
  },
  fr: {
    perPerson: 'par personne',
  },
  es: {
    perPerson: 'por persona',
  },
};

export default function TwoDaysTarangireNgorongoroPage() {
  const { language } = useLanguage();

  const t =
    translations[language as keyof typeof translations] ||
    translations.en;

  const currentPriceText =
    priceText[language as keyof typeof priceText] ||
    priceText.en;

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/2days-hero.jpg"
      />

      {/* SAFARI OVERVIEW */}
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
                {t.paragraph1}
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                {t.paragraph2}
              </p>

              <h2 className="mt-12 text-3xl font-bold text-forest">
                {t.itineraryTitle}
              </h2>

              <div className="mt-8 space-y-6">

                {/* DAY 1 */}
                <article className="rounded-3xl bg-cream p-7 shadow-lg">
                  <p className="font-bold text-gold">
                    {t.day1}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-forest">
                    {t.day1Title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/70">
                    {t.day1Text}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-black/10 pt-5 text-black/70">
                    <p>
                      <strong className="text-forest">
                        {t.accommodation}:
                      </strong>{' '}
                      {t.day1Accommodation}
                    </p>

                    <p>
                      <strong className="text-forest">
                        {t.meals}:
                      </strong>{' '}
                      {t.day1Meals}
                    </p>
                  </div>
                </article>

                {/* DAY 2 */}
                <article className="rounded-3xl bg-cream p-7 shadow-lg">
                  <p className="font-bold text-gold">
                    {t.day2}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-forest">
                    {t.day2Title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/70">
                    {t.day2Text}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-black/10 pt-5 text-black/70">
                    <p>
                      <strong className="text-forest">
                        {t.accommodation}:
                      </strong>{' '}
                      {t.day2Accommodation}
                    </p>

                    <p>
                      <strong className="text-forest">
                        {t.meals}:
                      </strong>{' '}
                      {t.day2Meals}
                    </p>
                  </div>
                </article>

              </div>
            </div>

            {/* SIDEBAR */}
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
                  <strong>{t.destinations}:</strong>{' '}
                  {t.destinationsValue}
                </p>

                <p>
                  <strong>{t.tourType}:</strong>{' '}
                  {t.tourTypeValue}
                </p>

                <p>
                  <strong>{t.accommodationLabel}:</strong>{' '}
                  {t.accommodationValue}
                </p>

                <p>
                  <strong>{t.bestTime}:</strong>{' '}
                  {t.bestTimeValue}
                </p>
              </div>

              <div className="mt-8 rounded-2xl bg-gold p-5 text-center">
                <p className="text-sm font-bold uppercase tracking-wide">
                  {t.startingFrom}
                </p>

                <p className="mt-2 text-4xl font-bold">
                  US$650
                </p>

                <p className="mt-1 text-sm">
                  {t.perPerson}
                </p>

                <p className="mt-3 text-xs leading-5">
                  {t.priceNote}
                </p>
              </div>

              <Link
                href="/booking"
                className="mt-8 inline-block w-full rounded-full bg-gold px-6 py-3 text-center font-bold text-white transition hover:scale-105"
              >
                {t.requestQuote}
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold text-gold">
              {t.pricesLabel}
            </p>

            <h2 className="section-title mt-3">
              {t.pricesTitle}
            </h2>

            <p className="mt-5 leading-7 text-black/70">
              {t.pricesText}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl bg-white shadow-xl">

            <div className="grid grid-cols-2 bg-forest px-6 py-4 font-bold text-white">
              <span>{t.groupSize}</span>

              <span className="text-right">
                {t.startingPrice}
              </span>
            </div>

            {priceRows.map((row) => (
              <div
                key={row.price}
                className="grid grid-cols-2 border-b border-black/10 px-6 py-4 last:border-b-0"
              >
                <span className="font-medium text-forest">
                  {row.people[
                    language as keyof typeof row.people
                  ] || row.people.en}
                </span>

                <span className="text-right text-black/70">
                  {row.price.replace(
                    'per person',
                    currentPriceText.perPerson
                  )}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* INCLUDED / EXCLUDED */}
      <section className="py-20">
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

      {/* WHAT TO BRING */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 md:items-center">

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/2days-two.jpg"
                alt={t.heroTitle}
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
                  <li key={item}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="font-display text-4xl font-bold md:text-5xl">
            {t.readyTitle}
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            {t.readyText}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/booking"
              className="rounded-full bg-gold px-8 py-4 font-bold text-white transition hover:scale-105"
            >
              {t.requestQuote}
            </Link>

            <a
              href="https://wa.me/255759273339"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-forest"
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