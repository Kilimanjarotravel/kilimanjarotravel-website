'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

type LanguageCode = 'en' | 'de' | 'fr' | 'es';

const translations = {
  en: {
    heroTitle: '4 Days Tarangire, Serengeti & Ngorongoro Safari',
    heroSubtitle:
      'Explore elephant country, the endless Serengeti plains and the spectacular Ngorongoro Crater.',

    overviewLabel: 'SAFARI OVERVIEW',
    overviewTitle: 'Four Days Across Northern Tanzania',

    paragraph1:
      "This private four-day safari combines three of Northern Tanzania's most famous wildlife destinations: Tarangire National Park, Serengeti National Park and the Ngorongoro Crater.",

    paragraph2:
      "Experience Tarangire's elephant herds and baobab trees, enjoy extensive game drives across the Serengeti plains and finish with a wildlife-rich safari on the floor of the Ngorongoro Crater.",

    itineraryTitle: 'Day-by-Day Itinerary',

    accommodation: 'Accommodation',
    meals: 'Meals',

    day1: 'Day 1',
    day1Title: 'Arusha to Tarangire National Park',
    day1Text:
      'Pickup from your hotel in Arusha and drive to Tarangire National Park for a full-day game drive. Explore landscapes filled with ancient baobab trees and search for elephants, giraffes, zebras, lions, wildebeest and rich birdlife. Enjoy a picnic lunch inside the park before continuing to your lodge or tented camp for dinner and overnight.',
    day1Accommodation:
      'Lodge or tented camp near Karatu or Lake Manyara',
    day1Meals: 'Lunch and Dinner',

    day2: 'Day 2',
    day2Title: 'Tarangire Area to Serengeti National Park',
    day2Text:
      'After breakfast, drive through the beautiful Ngorongoro highlands toward Serengeti National Park. Enter the park and enjoy a game drive across the famous plains while searching for lions, elephants, giraffes, zebras, wildebeest and other wildlife. Continue to your lodge or tented camp for dinner and overnight.',
    day2Accommodation: 'Lodge or tented camp in Serengeti',
    day2Meals: 'Breakfast, Lunch and Dinner',

    day3: 'Day 3',
    day3Title: 'Full-Day Serengeti Safari',
    day3Text:
      'Spend the day exploring Serengeti National Park with morning and afternoon game drives. Your guide will select the best wildlife areas according to the season and recent animal movements. Enjoy a picnic lunch in the park and continue searching for predators, large herds and rich birdlife before returning to your accommodation.',
    day3Accommodation: 'Lodge or tented camp in Serengeti',
    day3Meals: 'Breakfast, Lunch and Dinner',

    day4: 'Day 4',
    day4Title: 'Ngorongoro Crater Safari and Return to Arusha',
    day4Text:
      'After an early breakfast, drive to the Ngorongoro Conservation Area and descend into the crater for a game drive. Search for lions, elephants, buffaloes, zebras, wildebeest, hippos, hyenas and, with luck, black rhinos. Enjoy a picnic lunch near the hippo pool before ascending the crater and returning to Arusha.',
    day4Accommodation:
      'No accommodation included after the safari',
    day4Meals: 'Breakfast and Lunch',

    detailsTitle: 'Safari Details',

    duration: 'Duration',
    durationValue: '4 Days / 3 Nights',

    departure: 'Departure',
    departureValue: 'Arusha',

    destinations: 'Destinations',
    destinationsValue: 'Tarangire, Serengeti & Ngorongoro',

    tourType: 'Tour Type',
    tourTypeValue: 'Private Safari',

    accommodationLabel: 'Accommodation',
    accommodationValue: 'Lodge / Tented Camp',

    bestTime: 'Best Time',
    bestTimeValue: 'All Year',

    startingFrom: 'Starting From',
    perPerson: 'per person',

    priceNote:
      'Based on 5–6 people sharing. Final price depends on group size, accommodation level, season and travel dates.',

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
      'Serengeti National Park entrance fees',
      'Ngorongoro Conservation Area and crater service fees',
      'Three nights lodge or tented camp accommodation',
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
      'Warm jacket for cool mornings',
      'Personal medication',
      'Small day bag',
    ],

    readyTitle: 'Ready for Your Four-Day Safari?',

    readyText:
      'Contact Kilimanjaro Travel for availability, accommodation options and a tailor-made quotation based on your group size and travel dates.',

    whatsapp: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: '4 Tage Tarangire, Serengeti & Ngorongoro Safari',
    heroSubtitle:
      'Erkunden Sie das Land der Elefanten, die endlosen Ebenen der Serengeti und den spektakulären Ngorongoro-Krater.',

    overviewLabel: 'SAFARI-ÜBERSICHT',
    overviewTitle: 'Vier Tage durch Nordtansania',

    paragraph1:
      'Diese private viertägige Safari kombiniert drei der berühmtesten Wildtierziele Nordtansanias: den Tarangire-Nationalpark, den Serengeti-Nationalpark und den Ngorongoro-Krater.',

    paragraph2:
      'Erleben Sie Tarangires Elefantenherden und Baobab-Bäume, genießen Sie ausgedehnte Pirschfahrten durch die Serengeti-Ebenen und beenden Sie Ihre Safari mit einer artenreichen Tierbeobachtung auf dem Boden des Ngorongoro-Kraters.',

    itineraryTitle: 'Tagesprogramm',

    accommodation: 'Unterkunft',
    meals: 'Mahlzeiten',

    day1: 'Tag 1',
    day1Title: 'Arusha zum Tarangire-Nationalpark',
    day1Text:
      'Abholung von Ihrem Hotel in Arusha und Fahrt zum Tarangire-Nationalpark für eine ganztägige Pirschfahrt. Erkunden Sie die Landschaft mit ihren alten Baobab-Bäumen und halten Sie Ausschau nach Elefanten, Giraffen, Zebras, Löwen, Gnus und zahlreichen Vogelarten. Genießen Sie ein Picknick im Park, bevor Sie zu Ihrer Lodge oder Ihrem Zeltcamp zum Abendessen und zur Übernachtung fahren.',
    day1Accommodation:
      'Lodge oder Zeltcamp bei Karatu oder Lake Manyara',
    day1Meals: 'Mittagessen und Abendessen',

    day2: 'Tag 2',
    day2Title: 'Tarangire-Gebiet zum Serengeti-Nationalpark',
    day2Text:
      'Nach dem Frühstück fahren Sie durch das wunderschöne Ngorongoro-Hochland in Richtung Serengeti-Nationalpark. Nach der Einfahrt in den Park genießen Sie eine Pirschfahrt durch die berühmten Ebenen und suchen nach Löwen, Elefanten, Giraffen, Zebras, Gnus und anderen Wildtieren. Anschließend fahren Sie zu Ihrer Lodge oder Ihrem Zeltcamp zum Abendessen und zur Übernachtung.',
    day2Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day2Meals: 'Frühstück, Mittagessen und Abendessen',

    day3: 'Tag 3',
    day3Title: 'Ganztägige Serengeti-Safari',
    day3Text:
      'Verbringen Sie den Tag mit morgendlichen und nachmittäglichen Pirschfahrten im Serengeti-Nationalpark. Ihr Guide wählt je nach Jahreszeit und aktuellen Tierbewegungen die besten Gebiete aus. Genießen Sie ein Picknick im Park und suchen Sie weiter nach Raubtieren, großen Herden und einer vielfältigen Vogelwelt, bevor Sie zu Ihrer Unterkunft zurückkehren.',
    day3Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day3Meals: 'Frühstück, Mittagessen und Abendessen',

    day4: 'Tag 4',
    day4Title:
      'Safari im Ngorongoro-Krater und Rückkehr nach Arusha',
    day4Text:
      'Nach einem frühen Frühstück fahren Sie zum Ngorongoro-Schutzgebiet und steigen für eine Pirschfahrt in den Krater hinab. Halten Sie Ausschau nach Löwen, Elefanten, Büffeln, Zebras, Gnus, Flusspferden, Hyänen und mit etwas Glück auch Spitzmaulnashörnern. Genießen Sie ein Picknick in der Nähe des Nilpferdbeckens, bevor Sie den Krater verlassen und nach Arusha zurückkehren.',
    day4Accommodation:
      'Nach der Safari keine Unterkunft inklusive',
    day4Meals: 'Frühstück und Mittagessen',

    detailsTitle: 'Safari-Details',

    duration: 'Dauer',
    durationValue: '4 Tage / 3 Nächte',

    departure: 'Abfahrt',
    departureValue: 'Arusha',

    destinations: 'Reiseziele',
    destinationsValue: 'Tarangire, Serengeti & Ngorongoro',

    tourType: 'Reiseart',
    tourTypeValue: 'Private Safari',

    accommodationLabel: 'Unterkunft',
    accommodationValue: 'Lodge / Zeltcamp',

    bestTime: 'Beste Reisezeit',
    bestTimeValue: 'Ganzjährig',

    startingFrom: 'Ab',
    perPerson: 'pro Person',

    priceNote:
      'Basierend auf 5–6 Personen im gemeinsamen Fahrzeug. Der endgültige Preis hängt von Gruppengröße, Unterkunftskategorie, Saison und Reisedaten ab.',

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
      'Eintrittsgebühren für den Serengeti-Nationalpark',
      'Gebühren für das Ngorongoro-Schutzgebiet und den Krater',
      'Drei Übernachtungen in einer Lodge oder einem Zeltcamp',
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
      'Warme Jacke für kühle Morgen',
      'Persönliche Medikamente',
      'Kleiner Tagesrucksack',
    ],

    readyTitle: 'Bereit für Ihre viertägige Safari?',

    readyText:
      'Kontaktieren Sie Kilimanjaro Travel für Verfügbarkeit, Unterkunftsmöglichkeiten und ein individuelles Angebot auf Grundlage Ihrer Gruppengröße und Reisedaten.',

    whatsapp: 'Über WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Safari de 4 jours Tarangire, Serengeti & Ngorongoro',
    heroSubtitle:
      'Découvrez le pays des éléphants, les vastes plaines du Serengeti et le spectaculaire cratère du Ngorongoro.',

    overviewLabel: 'APERÇU DU SAFARI',
    overviewTitle: 'Quatre jours dans le nord de la Tanzanie',

    paragraph1:
      'Ce safari privé de quatre jours combine trois des destinations animalières les plus célèbres du nord de la Tanzanie : le parc national de Tarangire, le parc national du Serengeti et le cratère du Ngorongoro.',

    paragraph2:
      'Découvrez les troupeaux d’éléphants et les baobabs de Tarangire, profitez de safaris étendus dans les plaines du Serengeti et terminez par une observation exceptionnelle de la faune au fond du cratère du Ngorongoro.',

    itineraryTitle: 'Itinéraire jour par jour',

    accommodation: 'Hébergement',
    meals: 'Repas',

    day1: 'Jour 1',
    day1Title: 'Arusha au parc national de Tarangire',
    day1Text:
      'Prise en charge à votre hôtel à Arusha et départ vers le parc national de Tarangire pour une journée complète de safari. Explorez les paysages dominés par les anciens baobabs et recherchez les éléphants, girafes, zèbres, lions, gnous et nombreuses espèces d’oiseaux. Profitez d’un déjeuner pique-nique dans le parc avant de rejoindre votre lodge ou camp pour le dîner et la nuit.',
    day1Accommodation:
      'Lodge ou camp près de Karatu ou du lac Manyara',
    day1Meals: 'Déjeuner et dîner',

    day2: 'Jour 2',
    day2Title:
      'Région de Tarangire au parc national du Serengeti',
    day2Text:
      'Après le petit-déjeuner, traversez les magnifiques hauts plateaux du Ngorongoro en direction du parc national du Serengeti. Entrez dans le parc et profitez d’un safari à travers les célèbres plaines à la recherche de lions, éléphants, girafes, zèbres, gnous et autres animaux. Rejoignez ensuite votre lodge ou camp pour le dîner et la nuit.',
    day2Accommodation: 'Lodge ou camp dans le Serengeti',
    day2Meals: 'Petit-déjeuner, déjeuner et dîner',

    day3: 'Jour 3',
    day3Title: 'Safari d’une journée complète dans le Serengeti',
    day3Text:
      'Passez la journée à explorer le parc national du Serengeti avec des safaris le matin et l’après-midi. Votre guide choisira les meilleures zones d’observation selon la saison et les déplacements récents des animaux. Profitez d’un déjeuner pique-nique dans le parc et poursuivez la recherche des prédateurs, grands troupeaux et nombreuses espèces d’oiseaux avant de retourner à votre hébergement.',
    day3Accommodation: 'Lodge ou camp dans le Serengeti',
    day3Meals: 'Petit-déjeuner, déjeuner et dîner',

    day4: 'Jour 4',
    day4Title:
      'Safari dans le cratère du Ngorongoro et retour à Arusha',
    day4Text:
      'Après un petit-déjeuner matinal, départ vers la zone de conservation du Ngorongoro et descente dans le cratère pour un safari. Recherchez les lions, éléphants, buffles, zèbres, gnous, hippopotames, hyènes et, avec un peu de chance, les rhinocéros noirs. Profitez d’un déjeuner pique-nique près du bassin des hippopotames avant de remonter du cratère et de retourner à Arusha.',
    day4Accommodation:
      'Aucun hébergement inclus après le safari',
    day4Meals: 'Petit-déjeuner et déjeuner',

    detailsTitle: 'Détails du safari',

    duration: 'Durée',
    durationValue: '4 jours / 3 nuits',

    departure: 'Départ',
    departureValue: 'Arusha',

    destinations: 'Destinations',
    destinationsValue: 'Tarangire, Serengeti & Ngorongoro',

    tourType: 'Type de voyage',
    tourTypeValue: 'Safari privé',

    accommodationLabel: 'Hébergement',
    accommodationValue: 'Lodge / Camp',

    bestTime: 'Meilleure période',
    bestTimeValue: 'Toute l’année',

    startingFrom: 'À partir de',
    perPerson: 'par personne',

    priceNote:
      'Basé sur 5 à 6 personnes partageant le véhicule. Le prix final dépend de la taille du groupe, du niveau d’hébergement, de la saison et des dates de voyage.',

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
      'Frais d’entrée au parc national du Serengeti',
      'Frais de la zone de conservation et du cratère du Ngorongoro',
      'Trois nuits en lodge ou camp',
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
      'Veste chaude pour les matinées fraîches',
      'Médicaments personnels',
      'Petit sac à dos',
    ],

    readyTitle: 'Prêt pour votre safari de quatre jours ?',

    readyText:
      'Contactez Kilimanjaro Travel pour connaître les disponibilités, les options d’hébergement et obtenir un devis personnalisé selon la taille de votre groupe et vos dates de voyage.',

    whatsapp: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Safari de 4 días Tarangire, Serengeti y Ngorongoro',
    heroSubtitle:
      'Explora el territorio de los elefantes, las interminables llanuras del Serengeti y el espectacular Cráter del Ngorongoro.',

    overviewLabel: 'RESUMEN DEL SAFARI',
    overviewTitle: 'Cuatro días por el norte de Tanzania',

    paragraph1:
      'Este safari privado de cuatro días combina tres de los destinos de vida silvestre más famosos del norte de Tanzania: el Parque Nacional de Tarangire, el Parque Nacional del Serengeti y el Cráter del Ngorongoro.',

    paragraph2:
      'Disfruta de las manadas de elefantes y los baobabs de Tarangire, realiza extensos safaris por las llanuras del Serengeti y termina con una experiencia de fauna excepcional en el fondo del Cráter del Ngorongoro.',

    itineraryTitle: 'Itinerario día a día',

    accommodation: 'Alojamiento',
    meals: 'Comidas',

    day1: 'Día 1',
    day1Title: 'Arusha al Parque Nacional de Tarangire',
    day1Text:
      'Recogida en tu hotel de Arusha y traslado al Parque Nacional de Tarangire para realizar un safari de día completo. Explora paisajes llenos de antiguos baobabs y busca elefantes, jirafas, cebras, leones, ñus y una gran variedad de aves. Disfruta de un almuerzo tipo picnic dentro del parque antes de continuar hacia tu lodge o campamento para cenar y pasar la noche.',
    day1Accommodation:
      'Lodge o campamento cerca de Karatu o del lago Manyara',
    day1Meals: 'Almuerzo y cena',

    day2: 'Día 2',
    day2Title:
      'Zona de Tarangire al Parque Nacional del Serengeti',
    day2Text:
      'Después del desayuno, atraviesa las hermosas tierras altas del Ngorongoro hacia el Parque Nacional del Serengeti. Entra en el parque y disfruta de un safari por las famosas llanuras buscando leones, elefantes, jirafas, cebras, ñus y otros animales. Continúa hasta tu lodge o campamento para cenar y pasar la noche.',
    day2Accommodation: 'Lodge o campamento en el Serengeti',
    day2Meals: 'Desayuno, almuerzo y cena',

    day3: 'Día 3',
    day3Title: 'Safari de día completo en el Serengeti',
    day3Text:
      'Pasa el día explorando el Parque Nacional del Serengeti con safaris por la mañana y por la tarde. Tu guía seleccionará las mejores zonas de fauna según la temporada y los movimientos recientes de los animales. Disfruta de un almuerzo tipo picnic en el parque y continúa buscando depredadores, grandes manadas y una rica variedad de aves antes de regresar a tu alojamiento.',
    day3Accommodation: 'Lodge o campamento en el Serengeti',
    day3Meals: 'Desayuno, almuerzo y cena',

    day4: 'Día 4',
    day4Title:
      'Safari en el Cráter del Ngorongoro y regreso a Arusha',
    day4Text:
      'Después de un desayuno temprano, traslado a la Zona de Conservación del Ngorongoro y descenso al cráter para realizar un safari. Busca leones, elefantes, búfalos, cebras, ñus, hipopótamos, hienas y, con suerte, rinocerontes negros. Disfruta de un almuerzo tipo picnic cerca de la piscina de hipopótamos antes de salir del cráter y regresar a Arusha.',
    day4Accommodation:
      'No incluye alojamiento después del safari',
    day4Meals: 'Desayuno y almuerzo',

    detailsTitle: 'Detalles del safari',

    duration: 'Duración',
    durationValue: '4 días / 3 noches',

    departure: 'Salida',
    departureValue: 'Arusha',

    destinations: 'Destinos',
    destinationsValue: 'Tarangire, Serengeti y Ngorongoro',

    tourType: 'Tipo de viaje',
    tourTypeValue: 'Safari privado',

    accommodationLabel: 'Alojamiento',
    accommodationValue: 'Lodge / Campamento',

    bestTime: 'Mejor época',
    bestTimeValue: 'Todo el año',

    startingFrom: 'Desde',
    perPerson: 'por persona',

    priceNote:
      'Basado en 5–6 personas compartiendo el vehículo. El precio final depende del tamaño del grupo, categoría del alojamiento, temporada y fechas del viaje.',

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
      'Tasas de entrada al Parque Nacional del Serengeti',
      'Tasas de la Zona de Conservación y del Cráter del Ngorongoro',
      'Tres noches de alojamiento en lodge o campamento',
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
      'Chaqueta abrigada para las mañanas frescas',
      'Medicamentos personales',
      'Bolsa pequeña para el día',
    ],

    readyTitle: '¿Listo para tu safari de cuatro días?',

    readyText:
      'Contacta con Kilimanjaro Travel para consultar disponibilidad, opciones de alojamiento y recibir un presupuesto personalizado según el tamaño de tu grupo y tus fechas de viaje.',

    whatsapp: 'Chatear por WhatsApp',
  },
} as const;

const priceRows = [
  {
    people: {
      en: '1 person',
      de: '1 Person',
      fr: '1 personne',
      es: '1 persona',
    },
    price: {
      en: 'US$2,850',
      de: 'US$2.850',
      fr: '2 850 $US',
      es: 'US$2.850',
    },
  },
  {
    people: {
      en: '2 people',
      de: '2 Personen',
      fr: '2 personnes',
      es: '2 personas',
    },
    price: {
      en: 'US$1,850 per person',
      de: 'US$1.850 pro Person',
      fr: '2 850 $US par personne',
      es: 'US$1.850 por persona',
    },
  },
  {
    people: {
      en: '3 people',
      de: '3 Personen',
      fr: '3 personnes',
      es: '3 personas',
    },
    price: {
      en: 'US$1,560 per person',
      de: 'US$1.560 pro Person',
      fr: '1 560 $US par personne',
      es: 'US$1.560 por persona',
    },
  },
  {
    people: {
      en: '4 people',
      de: '4 Personen',
      fr: '4 personnes',
      es: '4 personas',
    },
    price: {
      en: 'US$1,390 per person',
      de: 'US$1.390 pro Person',
      fr: '1 390 $US par personne',
      es: 'US$1.390 por persona',
    },
  },
  {
    people: {
      en: '5–6 people',
      de: '5–6 Personen',
      fr: '5–6 personnes',
      es: '5–6 personas',
    },
    price: {
      en: 'US$1,250 per person',
      de: 'US$1.250 pro Person',
      fr: '1 250 $US par personne',
      es: 'US$1.250 por persona',
    },
  },
];

export default function FourDaysTarangireSerengetiNgorongoroPage() {
  const { language } = useLanguage();

  const currentLanguage: LanguageCode =
    language === 'de' ||
    language === 'fr' ||
    language === 'es'
      ? language
      : 'en';

  const t =
    translations[currentLanguage] || translations.en;

  return (
    <main>
      <Header />

      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/4days-one.jpg"
      />

      {/* OVERVIEW */}
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

                {/* DAY 3 */}
                <article className="rounded-3xl bg-cream p-7 shadow-lg">

                  <p className="font-bold text-gold">
                    {t.day3}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-forest">
                    {t.day3Title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/70">
                    {t.day3Text}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-black/10 pt-5 text-black/70">

                    <p>
                      <strong className="text-forest">
                        {t.accommodation}:
                      </strong>{' '}
                      {t.day3Accommodation}
                    </p>

                    <p>
                      <strong className="text-forest">
                        {t.meals}:
                      </strong>{' '}
                      {t.day3Meals}
                    </p>

                  </div>

                </article>

                {/* DAY 4 */}
                <article className="rounded-3xl bg-cream p-7 shadow-lg">

                  <p className="font-bold text-gold">
                    {t.day4}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-forest">
                    {t.day4Title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/70">
                    {t.day4Text}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-black/10 pt-5 text-black/70">

                    <p>
                      <strong className="text-forest">
                        {t.accommodation}:
                      </strong>{' '}
                      {t.day4Accommodation}
                    </p>

                    <p>
                      <strong className="text-forest">
                        {t.meals}:
                      </strong>{' '}
                      {t.day4Meals}
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
                  US$1,250
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

              <span>
                {t.groupSize}
              </span>

              <span className="text-right">
                {t.startingPrice}
              </span>

            </div>

            {priceRows.map((row) => (

              <div
                key={row.people.en}
                className="grid grid-cols-2 border-b border-black/10 px-6 py-4 last:border-b-0"
              >

                <span className="font-medium text-forest">
                  {row.people[currentLanguage]}
                </span>

                <span className="text-right text-black/70">
                  {row.price[currentLanguage]}
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
                src="/images/4days-two.jpg"
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