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
    heroTitle: '7 Days Northern Circuit Safari',
    heroSubtitle:
      'Experience Tarangire, Lake Manyara, Serengeti and Ngorongoro on an unforgettable seven-day safari.',

    overviewLabel: 'SAFARI OVERVIEW',
    overviewTitle: 'A Complete Northern Tanzania Safari',

    paragraph1:
      "This private seven-day safari gives you more time to explore Tanzania's famous Northern Circuit at a relaxed pace.",

    paragraph2:
      'Visit Tarangire, Lake Manyara, Serengeti and Ngorongoro while enjoying varied landscapes, extensive wildlife viewing and additional time on the Serengeti plains.',

    itineraryTitle: 'Day-by-Day Itinerary',

    accommodation: 'Accommodation',
    meals: 'Meals',

    day1: 'Day 1',
    day1Title: 'Arusha to Tarangire National Park',
    day1Text:
      'Pickup from your hotel in Arusha and drive to Tarangire National Park. Enjoy a full-day game drive among giant baobab trees while searching for elephants, lions, giraffes, zebras, wildebeest and abundant birdlife. Enjoy a picnic lunch inside the park before continuing to your lodge or tented camp.',
    day1Accommodation:
      'Lodge or tented camp near Karatu or Lake Manyara',
    day1Meals: 'Lunch and Dinner',

    day2: 'Day 2',
    day2Title: 'Lake Manyara National Park Safari',
    day2Text:
      'After breakfast, explore Lake Manyara National Park. Drive through groundwater forest, woodland and lakeshore habitats while looking for elephants, giraffes, buffaloes, hippos, monkeys, antelopes and rich birdlife.',
    day2Accommodation:
      'Lodge or tented camp near Karatu or Lake Manyara',
    day2Meals: 'Breakfast, Lunch and Dinner',

    day3: 'Day 3',
    day3Title: 'Lake Manyara Area to Serengeti National Park',
    day3Text:
      'Travel through the Ngorongoro highlands toward Serengeti National Park. Enter the park and enjoy an afternoon game drive across the famous plains while searching for predators, large herds and other wildlife.',
    day3Accommodation: 'Lodge or tented camp in Serengeti',
    day3Meals: 'Breakfast, Lunch and Dinner',

    day4: 'Day 4',
    day4Title: 'Full-Day Serengeti Safari',
    day4Text:
      'Spend the full day exploring Serengeti National Park. Your guide will choose the best wildlife areas according to the season and recent animal movements. Enjoy morning and afternoon game drives with a picnic lunch inside the park.',
    day4Accommodation: 'Lodge or tented camp in Serengeti',
    day4Meals: 'Breakfast, Lunch and Dinner',

    day5: 'Day 5',
    day5Title: 'Second Full Day in Serengeti',
    day5Text:
      'Enjoy another full day in Serengeti, giving you more time for wildlife viewing and photography. Search for lions, cheetahs, leopards, elephants, giraffes, zebras, wildebeest and many other species.',
    day5Accommodation: 'Lodge or tented camp in Serengeti',
    day5Meals: 'Breakfast, Lunch and Dinner',

    day6: 'Day 6',
    day6Title: 'Serengeti to Ngorongoro Conservation Area',
    day6Text:
      'Enjoy a morning game drive in Serengeti before traveling toward the Ngorongoro Conservation Area. Continue wildlife viewing along the way and arrive near the crater rim or Karatu for dinner and overnight.',
    day6Accommodation:
      'Lodge or tented camp near Ngorongoro or Karatu',
    day6Meals: 'Breakfast, Lunch and Dinner',

    day7: 'Day 7',
    day7Title: 'Ngorongoro Crater Safari and Return to Arusha',
    day7Text:
      'After breakfast, descend into the Ngorongoro Crater for a game drive. Search for lions, elephants, buffaloes, zebras, wildebeest, hippos, hyenas and, with luck, black rhinos. Enjoy a picnic lunch before ascending the crater and returning to Arusha.',
    day7Accommodation:
      'No accommodation included after the safari',
    day7Meals: 'Breakfast and Lunch',

    detailsTitle: 'Safari Details',

    duration: 'Duration',
    durationValue: '7 Days / 6 Nights',

    departure: 'Departure',
    departureValue: 'Arusha',

    destinations: 'Destinations',
    destinationsValue: 'Tarangire, Lake Manyara, Serengeti & Ngorongoro',

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
      'Lake Manyara National Park entrance fees',
      'Serengeti National Park entrance fees',
      'Ngorongoro Conservation Area and crater service fees',
      'Six nights lodge or tented camp accommodation',
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

    readyTitle: 'Ready for Your Seven-Day Safari?',

    readyText:
      'Contact Kilimanjaro Travel for availability, accommodation options and a tailor-made quotation based on your group size and travel dates.',

    whatsapp: 'Chat on WhatsApp',

    priceRows: [
      {
        people: '1 person',
        price: 'US$4,850',
      },
      {
        people: '2 people',
        price: 'US$3,080 per person',
      },
      {
        people: '3 people',
        price: 'US$2,580 per person',
      },
      {
        people: '4 people',
        price: 'US$2,300 per person',
      },
      {
        people: '5–6 people',
        price: 'US$2,040 per person',
      },
    ],
  },

  de: {
    heroTitle: '7 Tage Northern Circuit Safari',
    heroSubtitle:
      'Erleben Sie Tarangire, den Lake Manyara, die Serengeti und den Ngorongoro auf einer unvergesslichen siebentägigen Safari.',

    overviewLabel: 'SAFARI-ÜBERSICHT',
    overviewTitle: 'Eine umfassende Safari durch Nordtansania',

    paragraph1:
      'Diese private siebentägige Safari bietet Ihnen mehr Zeit, Tansanias berühmten Northern Circuit in einem entspannten Tempo zu erkunden.',

    paragraph2:
      'Besuchen Sie Tarangire, Lake Manyara, die Serengeti und Ngorongoro und genießen Sie abwechslungsreiche Landschaften, intensive Tierbeobachtungen und zusätzliche Zeit in den Ebenen der Serengeti.',

    itineraryTitle: 'Tagesprogramm',

    accommodation: 'Unterkunft',
    meals: 'Mahlzeiten',

    day1: 'Tag 1',
    day1Title: 'Arusha zum Tarangire-Nationalpark',
    day1Text:
      'Abholung von Ihrem Hotel in Arusha und Fahrt zum Tarangire-Nationalpark. Genießen Sie eine ganztägige Pirschfahrt zwischen riesigen Baobab-Bäumen und halten Sie Ausschau nach Elefanten, Löwen, Giraffen, Zebras, Gnus und zahlreichen Vogelarten. Genießen Sie ein Picknick im Park, bevor Sie zu Ihrer Lodge oder Ihrem Zeltcamp weiterfahren.',
    day1Accommodation:
      'Lodge oder Zeltcamp bei Karatu oder Lake Manyara',
    day1Meals: 'Mittagessen und Abendessen',

    day2: 'Tag 2',
    day2Title: 'Safari im Lake-Manyara-Nationalpark',
    day2Text:
      'Nach dem Frühstück erkunden Sie den Lake-Manyara-Nationalpark. Fahren Sie durch Grundwasserwald, Waldgebiete und Uferlandschaften und halten Sie Ausschau nach Elefanten, Giraffen, Büffeln, Flusspferden, Affen, Antilopen und zahlreichen Vogelarten.',
    day2Accommodation:
      'Lodge oder Zeltcamp bei Karatu oder Lake Manyara',
    day2Meals: 'Frühstück, Mittagessen und Abendessen',

    day3: 'Tag 3',
    day3Title: 'Lake-Manyara-Gebiet zum Serengeti-Nationalpark',
    day3Text:
      'Fahren Sie durch das Ngorongoro-Hochland in Richtung Serengeti-Nationalpark. Nach der Einfahrt in den Park genießen Sie eine Pirschfahrt am Nachmittag über die berühmten Ebenen und halten Ausschau nach Raubtieren, großen Herden und anderen Wildtieren.',
    day3Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day3Meals: 'Frühstück, Mittagessen und Abendessen',

    day4: 'Tag 4',
    day4Title: 'Ganztägige Serengeti-Safari',
    day4Text:
      'Verbringen Sie den gesamten Tag mit der Erkundung des Serengeti-Nationalparks. Ihr Guide wählt entsprechend der Jahreszeit und der aktuellen Tierbewegungen die besten Gebiete aus. Genießen Sie morgendliche und nachmittägliche Pirschfahrten mit einem Picknick im Park.',
    day4Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day4Meals: 'Frühstück, Mittagessen und Abendessen',

    day5: 'Tag 5',
    day5Title: 'Zweiter ganzer Tag in der Serengeti',
    day5Text:
      'Genießen Sie einen weiteren vollständigen Tag in der Serengeti und haben Sie dadurch mehr Zeit für Tierbeobachtungen und Fotografie. Halten Sie Ausschau nach Löwen, Geparden, Leoparden, Elefanten, Giraffen, Zebras, Gnus und vielen weiteren Tierarten.',
    day5Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day5Meals: 'Frühstück, Mittagessen und Abendessen',

    day6: 'Tag 6',
    day6Title: 'Serengeti zum Ngorongoro-Schutzgebiet',
    day6Text:
      'Genießen Sie am Morgen eine Pirschfahrt in der Serengeti, bevor Sie zum Ngorongoro-Schutzgebiet weiterreisen. Beobachten Sie unterwegs weiterhin Wildtiere und erreichen Sie Ihre Unterkunft nahe dem Kraterrand oder in Karatu zum Abendessen und zur Übernachtung.',
    day6Accommodation:
      'Lodge oder Zeltcamp nahe Ngorongoro oder Karatu',
    day6Meals: 'Frühstück, Mittagessen und Abendessen',

    day7: 'Tag 7',
    day7Title:
      'Safari im Ngorongoro-Krater und Rückkehr nach Arusha',
    day7Text:
      'Nach dem Frühstück steigen Sie für eine Pirschfahrt in den Ngorongoro-Krater hinab. Halten Sie Ausschau nach Löwen, Elefanten, Büffeln, Zebras, Gnus, Flusspferden, Hyänen und mit etwas Glück nach Spitzmaulnashörnern. Genießen Sie ein Picknick, bevor Sie den Krater verlassen und nach Arusha zurückkehren.',
    day7Accommodation:
      'Nach der Safari keine Unterkunft inklusive',
    day7Meals: 'Frühstück und Mittagessen',

    detailsTitle: 'Safari-Details',

    duration: 'Dauer',
    durationValue: '7 Tage / 6 Nächte',

    departure: 'Abfahrt',
    departureValue: 'Arusha',

    destinations: 'Reiseziele',
    destinationsValue:
      'Tarangire, Lake Manyara, Serengeti & Ngorongoro',

    tourType: 'Reiseart',
    tourTypeValue: 'Private Safari',

    accommodationLabel: 'Unterkunft',
    accommodationValue: 'Lodge / Zeltcamp',

    bestTime: 'Beste Reisezeit',
    bestTimeValue: 'Ganzjährig',

    startingFrom: 'Ab',
    perPerson: 'pro Person',

    priceNote:
      'Basierend auf 5–6 Personen. Der endgültige Preis hängt von Gruppengröße, Unterkunftskategorie, Saison und Reisedaten ab.',

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
      'Eintrittsgebühren für den Lake-Manyara-Nationalpark',
      'Eintrittsgebühren für den Serengeti-Nationalpark',
      'Gebühren für das Ngorongoro-Schutzgebiet und den Krater',
      'Sechs Übernachtungen in Lodge oder Zeltcamp',
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
      'Kleine Tagesrucksack',
    ],

    readyTitle: 'Bereit für Ihre siebentägige Safari?',

    readyText:
      'Kontaktieren Sie Kilimanjaro Travel für Verfügbarkeit, Unterkunftsmöglichkeiten und ein maßgeschneidertes Angebot basierend auf Ihrer Gruppengröße und Ihren Reisedaten.',

    whatsapp: 'Über WhatsApp chatten',

    priceRows: [
      {
        people: '1 Person',
        price: 'US$4.850',
      },
      {
        people: '2 Personen',
        price: 'US$3.080 pro Person',
      },
      {
        people: '3 Personen',
        price: 'US$2.580 pro Person',
      },
      {
        people: '4 Personen',
        price: 'US$2.300 pro Person',
      },
      {
        people: '5–6 Personen',
        price: 'US$2.040 pro Person',
      },
    ],
  },

  fr: {
    heroTitle: 'Safari de 7 jours – Northern Circuit',
    heroSubtitle:
      'Découvrez Tarangire, le lac Manyara, le Serengeti et le Ngorongoro lors d’un safari inoubliable de sept jours.',

    overviewLabel: 'APERÇU DU SAFARI',
    overviewTitle: 'Un safari complet dans le nord de la Tanzanie',

    paragraph1:
      'Ce safari privé de sept jours vous offre davantage de temps pour explorer le célèbre circuit nord de la Tanzanie à un rythme confortable.',

    paragraph2:
      'Découvrez Tarangire, le lac Manyara, le Serengeti et le Ngorongoro tout en profitant de paysages variés, d’une observation intensive de la faune et de temps supplémentaire dans les plaines du Serengeti.',

    itineraryTitle: 'Itinéraire jour par jour',

    accommodation: 'Hébergement',
    meals: 'Repas',

    day1: 'Jour 1',
    day1Title: 'Arusha – Parc national de Tarangire',
    day1Text:
      'Prise en charge à votre hôtel à Arusha et départ vers le parc national de Tarangire. Profitez d’une journée complète de safari au milieu des grands baobabs à la recherche d’éléphants, lions, girafes, zèbres, gnous et nombreuses espèces d’oiseaux. Déjeuner pique-nique dans le parc avant de rejoindre votre lodge ou camp.',
    day1Accommodation:
      'Lodge ou camp près de Karatu ou du lac Manyara',
    day1Meals: 'Déjeuner et dîner',

    day2: 'Jour 2',
    day2Title: 'Safari dans le parc national du lac Manyara',
    day2Text:
      'Après le petit-déjeuner, explorez le parc national du lac Manyara. Traversez les forêts souterraines, les zones boisées et les paysages du bord du lac à la recherche d’éléphants, girafes, buffles, hippopotames, singes, antilopes et nombreuses espèces d’oiseaux.',
    day2Accommodation:
      'Lodge ou camp près de Karatu ou du lac Manyara',
    day2Meals: 'Petit-déjeuner, déjeuner et dîner',

    day3: 'Jour 3',
    day3Title:
      'Région du lac Manyara – Parc national du Serengeti',
    day3Text:
      'Traversez les hauts plateaux du Ngorongoro en direction du parc national du Serengeti. Entrez dans le parc et profitez d’un safari l’après-midi à travers les célèbres plaines à la recherche de prédateurs, de grands troupeaux et d’autres animaux.',
    day3Accommodation: 'Lodge ou camp dans le Serengeti',
    day3Meals: 'Petit-déjeuner, déjeuner et dîner',

    day4: 'Jour 4',
    day4Title: 'Safari d’une journée complète au Serengeti',
    day4Text:
      'Passez toute la journée à explorer le parc national du Serengeti. Votre guide choisira les meilleures zones d’observation selon la saison et les déplacements récents des animaux. Profitez de safaris le matin et l’après-midi avec un déjeuner pique-nique dans le parc.',
    day4Accommodation: 'Lodge ou camp dans le Serengeti',
    day4Meals: 'Petit-déjeuner, déjeuner et dîner',

    day5: 'Jour 5',
    day5Title: 'Deuxième journée complète au Serengeti',
    day5Text:
      'Profitez d’une deuxième journée complète dans le Serengeti pour avoir davantage de temps pour l’observation et la photographie de la faune. Recherchez lions, guépards, léopards, éléphants, girafes, zèbres, gnous et de nombreuses autres espèces.',
    day5Accommodation: 'Lodge ou camp dans le Serengeti',
    day5Meals: 'Petit-déjeuner, déjeuner et dîner',

    day6: 'Jour 6',
    day6Title:
      'Serengeti – Zone de conservation du Ngorongoro',
    day6Text:
      'Profitez d’un safari matinal dans le Serengeti avant de partir vers la zone de conservation du Ngorongoro. Continuez l’observation de la faune en chemin et rejoignez votre hébergement près du bord du cratère ou à Karatu pour le dîner et la nuit.',
    day6Accommodation:
      'Lodge ou camp près du Ngorongoro ou de Karatu',
    day6Meals: 'Petit-déjeuner, déjeuner et dîner',

    day7: 'Jour 7',
    day7Title:
      'Safari dans le cratère du Ngorongoro et retour à Arusha',
    day7Text:
      'Après le petit-déjeuner, descendez dans le cratère du Ngorongoro pour un safari. Recherchez lions, éléphants, buffles, zèbres, gnous, hippopotames, hyènes et, avec un peu de chance, rhinocéros noirs. Profitez d’un déjeuner pique-nique avant de remonter du cratère et de retourner à Arusha.',
    day7Accommodation:
      'Aucun hébergement inclus après le safari',
    day7Meals: 'Petit-déjeuner et déjeuner',

    detailsTitle: 'Détails du safari',

    duration: 'Durée',
    durationValue: '7 jours / 6 nuits',

    departure: 'Départ',
    departureValue: 'Arusha',

    destinations: 'Destinations',
    destinationsValue:
      'Tarangire, lac Manyara, Serengeti & Ngorongoro',

    tourType: 'Type de safari',
    tourTypeValue: 'Safari privé',

    accommodationLabel: 'Hébergement',
    accommodationValue: 'Lodge / Camp de tentes',

    bestTime: 'Meilleure période',
    bestTimeValue: 'Toute l’année',

    startingFrom: 'À partir de',
    perPerson: 'par personne',

    priceNote:
      'Basé sur 5–6 personnes partageant. Le prix final dépend de la taille du groupe, du niveau d’hébergement, de la saison et des dates de voyage.',

    requestQuote: 'Demander un devis',

    pricesLabel: 'PRIX DU SAFARI PRIVÉ',
    pricesTitle: 'Prix selon la taille du groupe',

    pricesText:
      'Ces prix sont des tarifs indicatifs de départ. Le devis final peut varier selon l’hébergement, la saison, les frais de parc et la disponibilité.',

    groupSize: 'Taille du groupe',
    startingPrice: 'Prix de départ',

    includedTitle: 'Inclus',

    included: [
      'Prise en charge et retour à l’hôtel à Arusha',
      'Véhicule safari privé 4x4 avec toit ouvrant',
      'Guide safari professionnel anglophone',
      'Frais d’entrée au parc national de Tarangire',
      'Frais d’entrée au parc national du lac Manyara',
      'Frais d’entrée au parc national du Serengeti',
      'Frais de la zone de conservation et du cratère du Ngorongoro',
      'Six nuits en lodge ou camp de tentes',
      'Repas selon l’itinéraire',
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

    readyTitle: 'Prêt pour votre safari de sept jours ?',

    readyText:
      'Contactez Kilimanjaro Travel pour connaître les disponibilités, les options d’hébergement et obtenir un devis personnalisé selon la taille de votre groupe et vos dates de voyage.',

    whatsapp: 'Discuter sur WhatsApp',

    priceRows: [
      {
        people: '1 personne',
        price: '4 850 $US',
      },
      {
        people: '2 personnes',
        price: '3 080 $US par personne',
      },
      {
        people: '3 personnes',
        price: '2 580 $US par personne',
      },
      {
        people: '4 personnes',
        price: '2 300 $US par personne',
      },
      {
        people: '5–6 personnes',
        price: '2 040 $US par personne',
      },
    ],
  },

  es: {
    heroTitle: 'Safari de 7 días por el Circuito Norte',
    heroSubtitle:
      'Descubre Tarangire, el lago Manyara, el Serengeti y Ngorongoro en un inolvidable safari de siete días.',

    overviewLabel: 'RESUMEN DEL SAFARI',
    overviewTitle: 'Un safari completo por el norte de Tanzania',

    paragraph1:
      'Este safari privado de siete días te ofrece más tiempo para explorar el famoso Circuito Norte de Tanzania a un ritmo relajado.',

    paragraph2:
      'Visita Tarangire, el lago Manyara, el Serengeti y Ngorongoro mientras disfrutas de paisajes variados, una excelente observación de fauna y tiempo adicional en las llanuras del Serengeti.',

    itineraryTitle: 'Itinerario día a día',

    accommodation: 'Alojamiento',
    meals: 'Comidas',

    day1: 'Día 1',
    day1Title: 'Arusha al Parque Nacional de Tarangire',
    day1Text:
      'Recogida en tu hotel de Arusha y traslado al Parque Nacional de Tarangire. Disfruta de un safari de día completo entre enormes baobabs buscando elefantes, leones, jirafas, cebras, ñus y una gran variedad de aves. Disfruta de un almuerzo tipo picnic dentro del parque antes de continuar hacia tu lodge o campamento.',
    day1Accommodation:
      'Lodge o campamento cerca de Karatu o el lago Manyara',
    day1Meals: 'Almuerzo y cena',

    day2: 'Día 2',
    day2Title: 'Safari en el Parque Nacional del Lago Manyara',
    day2Text:
      'Después del desayuno, explora el Parque Nacional del Lago Manyara. Recorre bosques de aguas subterráneas, zonas boscosas y hábitats junto al lago mientras buscas elefantes, jirafas, búfalos, hipopótamos, monos, antílopes y numerosas especies de aves.',
    day2Accommodation:
      'Lodge o campamento cerca de Karatu o el lago Manyara',
    day2Meals: 'Desayuno, almuerzo y cena',

    day3: 'Día 3',
    day3Title:
      'Zona del lago Manyara al Parque Nacional del Serengeti',
    day3Text:
      'Viaja a través de las tierras altas de Ngorongoro hacia el Parque Nacional del Serengeti. Entra en el parque y disfruta de un safari por la tarde a través de las famosas llanuras buscando depredadores, grandes manadas y otros animales.',
    day3Accommodation: 'Lodge o campamento en el Serengeti',
    day3Meals: 'Desayuno, almuerzo y cena',

    day4: 'Día 4',
    day4Title: 'Safari de día completo en el Serengeti',
    day4Text:
      'Pasa todo el día explorando el Parque Nacional del Serengeti. Tu guía elegirá las mejores zonas según la temporada y los movimientos recientes de los animales. Disfruta de safaris por la mañana y por la tarde con almuerzo tipo picnic dentro del parque.',
    day4Accommodation: 'Lodge o campamento en el Serengeti',
    day4Meals: 'Desayuno, almuerzo y cena',

    day5: 'Día 5',
    day5Title: 'Segundo día completo en el Serengeti',
    day5Text:
      'Disfruta de otro día completo en el Serengeti, con más tiempo para observar la fauna y tomar fotografías. Busca leones, guepardos, leopardos, elefantes, jirafas, cebras, ñus y muchas otras especies.',
    day5Accommodation: 'Lodge o campamento en el Serengeti',
    day5Meals: 'Desayuno, almuerzo y cena',

    day6: 'Día 6',
    day6Title:
      'Serengeti al Área de Conservación de Ngorongoro',
    day6Text:
      'Disfruta de un safari por la mañana en el Serengeti antes de viajar hacia el Área de Conservación de Ngorongoro. Continúa observando fauna durante el trayecto y llega a tu alojamiento cerca del borde del cráter o en Karatu para cenar y pasar la noche.',
    day6Accommodation:
      'Lodge o campamento cerca de Ngorongoro o Karatu',
    day6Meals: 'Desayuno, almuerzo y cena',

    day7: 'Día 7',
    day7Title:
      'Safari en el Cráter del Ngorongoro y regreso a Arusha',
    day7Text:
      'Después del desayuno, desciende al Cráter del Ngorongoro para realizar un safari. Busca leones, elefantes, búfalos, cebras, ñus, hipopótamos, hienas y, con suerte, rinocerontes negros. Disfruta de un almuerzo tipo picnic antes de ascender y regresar a Arusha.',
    day7Accommodation:
      'No se incluye alojamiento después del safari',
    day7Meals: 'Desayuno y almuerzo',

    detailsTitle: 'Detalles del safari',

    duration: 'Duración',
    durationValue: '7 días / 6 noches',

    departure: 'Salida',
    departureValue: 'Arusha',

    destinations: 'Destinos',
    destinationsValue:
      'Tarangire, lago Manyara, Serengeti y Ngorongoro',

    tourType: 'Tipo de safari',
    tourTypeValue: 'Safari privado',

    accommodationLabel: 'Alojamiento',
    accommodationValue: 'Lodge / Campamento de tiendas',

    bestTime: 'Mejor época',
    bestTimeValue: 'Todo el año',

    startingFrom: 'Desde',
    perPerson: 'por persona',

    priceNote:
      'Basado en 5–6 personas compartiendo. El precio final depende del tamaño del grupo, nivel de alojamiento, temporada y fechas de viaje.',

    requestQuote: 'Solicitar presupuesto',

    pricesLabel: 'PRECIOS DEL SAFARI PRIVADO',
    pricesTitle: 'Precio según el tamaño del grupo',

    pricesText:
      'Estos son precios iniciales orientativos. El presupuesto final puede variar según el alojamiento, temporada, tasas del parque y disponibilidad.',

    groupSize: 'Tamaño del grupo',
    startingPrice: 'Precio inicial',

    includedTitle: 'Qué está incluido',

    included: [
      'Recogida y regreso al hotel en Arusha',
      'Vehículo safari privado 4x4 con techo elevable',
      'Guía profesional de safari de habla inglesa',
      'Tasas de entrada al Parque Nacional de Tarangire',
      'Tasas de entrada al Parque Nacional del Lago Manyara',
      'Tasas de entrada al Parque Nacional del Serengeti',
      'Tasas del Área de Conservación y Cráter de Ngorongoro',
      'Seis noches de alojamiento en lodge o campamento',
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

    readyTitle: '¿Listo para tu safari de siete días?',

    readyText:
      'Contacta con Kilimanjaro Travel para consultar disponibilidad, opciones de alojamiento y recibir un presupuesto personalizado según el tamaño de tu grupo y tus fechas de viaje.',

    whatsapp: 'Chatear por WhatsApp',

    priceRows: [
      {
        people: '1 persona',
        price: 'US$4.850',
      },
      {
        people: '2 personas',
        price: 'US$3.080 por persona',
      },
      {
        people: '3 personas',
        price: 'US$2.580 por persona',
      },
      {
        people: '4 personas',
        price: 'US$2.300 por persona',
      },
      {
        people: '5–6 personas',
        price: 'US$2.040 por persona',
      },
    ],
  },
};

export default function SevenDaysNorthernCircuitPage() {
  const { language } = useLanguage();

  const currentLanguage: LanguageCode =
    language === 'de' ||
    language === 'fr' ||
    language === 'es'
      ? language
      : 'en';

  const t = translations[currentLanguage];

  return (
    <main>
      <Header />
      <WhatsApp />

      {/* HERO */}
      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/7days-one.jpg"
      />

      {/* OVERVIEW + ITINERARY */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">

            {/* MAIN CONTENT */}
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

                {/* DAY 5 */}
                <article className="rounded-3xl bg-cream p-7 shadow-lg">
                  <p className="font-bold text-gold">
                    {t.day5}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-forest">
                    {t.day5Title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/70">
                    {t.day5Text}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-black/10 pt-5 text-black/70">
                    <p>
                      <strong className="text-forest">
                        {t.accommodation}:
                      </strong>{' '}
                      {t.day5Accommodation}
                    </p>

                    <p>
                      <strong className="text-forest">
                        {t.meals}:
                      </strong>{' '}
                      {t.day5Meals}
                    </p>
                  </div>
                </article>

                {/* DAY 6 */}
                <article className="rounded-3xl bg-cream p-7 shadow-lg">
                  <p className="font-bold text-gold">
                    {t.day6}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-forest">
                    {t.day6Title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/70">
                    {t.day6Text}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-black/10 pt-5 text-black/70">
                    <p>
                      <strong className="text-forest">
                        {t.accommodation}:
                      </strong>{' '}
                      {t.day6Accommodation}
                    </p>

                    <p>
                      <strong className="text-forest">
                        {t.meals}:
                      </strong>{' '}
                      {t.day6Meals}
                    </p>
                  </div>
                </article>

                {/* DAY 7 */}
                <article className="rounded-3xl bg-cream p-7 shadow-lg">
                  <p className="font-bold text-gold">
                    {t.day7}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-forest">
                    {t.day7Title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/70">
                    {t.day7Text}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-black/10 pt-5 text-black/70">
                    <p>
                      <strong className="text-forest">
                        {t.accommodation}:
                      </strong>{' '}
                      {t.day7Accommodation}
                    </p>

                    <p>
                      <strong className="text-forest">
                        {t.meals}:
                      </strong>{' '}
                      {t.day7Meals}
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

              {/* PRICE CARD */}
              <div className="mt-8 rounded-2xl bg-gold p-5 text-center">

                <p className="text-sm font-bold uppercase tracking-wide">
                  {t.startingFrom}
                </p>

                <p className="mt-2 text-4xl font-bold">
                  {currentLanguage === 'fr'
                    ? '2 040 $US'
                    : currentLanguage === 'de'
                    ? 'US$2.040'
                    : currentLanguage === 'es'
                    ? 'US$2.040'
                    : 'US$2,040'}
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

            {t.priceRows.map((row) => (
              <div
                key={row.people}
                className="grid grid-cols-2 border-b border-black/10 px-6 py-4 last:border-b-0"
              >
                <span className="font-medium text-forest">
                  {row.people}
                </span>

                <span className="text-right text-black/70">
                  {row.price}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* INCLUDED / EXCLUDED */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">

          {/* INCLUDED */}
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

          {/* EXCLUDED */}
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
                src="/images/7days-two.jpg"
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