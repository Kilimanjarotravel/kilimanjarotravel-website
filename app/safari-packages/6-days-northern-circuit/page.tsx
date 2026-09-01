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
    heroTitle: '6 Days Northern Circuit Safari',
    heroSubtitle:
      'Discover Tarangire, Lake Manyara, Serengeti and Ngorongoro on a complete Northern Tanzania safari.',

    overviewLabel: 'SAFARI OVERVIEW',
    overviewTitle: 'Six Days Across the Northern Circuit',

    paragraph1:
      "This private six-day safari offers a balanced journey through four of Northern Tanzania's best-known wildlife destinations: Tarangire, Lake Manyara, Serengeti and Ngorongoro.",

    paragraph2:
      'Enjoy varied landscapes, large elephant herds, classic Serengeti plains, rich birdlife and a memorable game drive on the floor of the Ngorongoro Crater.',

    itineraryTitle: 'Day-by-Day Itinerary',

    accommodation: 'Accommodation',
    meals: 'Meals',

    day1: 'Day 1',
    day1Title: 'Arusha to Tarangire National Park',
    day1Text:
      'Pickup from your hotel in Arusha and drive to Tarangire National Park. Enjoy a full-day game drive among ancient baobab trees while searching for elephants, lions, giraffes, zebras, wildebeest and rich birdlife. Enjoy a picnic lunch inside the park before continuing to your lodge or tented camp.',
    day1Accommodation:
      'Lodge or tented camp near Karatu or Lake Manyara',
    day1Meals: 'Lunch and Dinner',

    day2: 'Day 2',
    day2Title: 'Lake Manyara National Park Safari',
    day2Text:
      'After breakfast, drive to Lake Manyara National Park for a game drive through groundwater forest, open woodland and lakeshore habitats. Search for elephants, giraffes, zebras, buffaloes, hippos, monkeys and abundant birdlife before continuing to your accommodation.',
    day2Accommodation:
      'Lodge or tented camp near Karatu or Lake Manyara',
    day2Meals: 'Breakfast, Lunch and Dinner',

    day3: 'Day 3',
    day3Title: 'Lake Manyara Area to Serengeti National Park',
    day3Text:
      'Travel through the Ngorongoro highlands toward Serengeti National Park. Enter the park and enjoy an afternoon game drive across the famous plains while searching for predators, large herbivore herds and other wildlife.',
    day3Accommodation: 'Lodge or tented camp in Serengeti',
    day3Meals: 'Breakfast, Lunch and Dinner',

    day4: 'Day 4',
    day4Title: 'Full-Day Serengeti Safari',
    day4Text:
      'Spend the full day exploring Serengeti National Park. Your guide will select the best wildlife areas according to the season and recent animal movements. Enjoy morning and afternoon game drives with a picnic lunch inside the park.',
    day4Accommodation: 'Lodge or tented camp in Serengeti',
    day4Meals: 'Breakfast, Lunch and Dinner',

    day5: 'Day 5',
    day5Title: 'Serengeti to Ngorongoro Conservation Area',
    day5Text:
      'Enjoy an early morning game drive in Serengeti before traveling toward the Ngorongoro Conservation Area. Continue wildlife viewing along the way and arrive at your lodge or camp near the crater rim or Karatu for dinner and overnight.',
    day5Accommodation:
      'Lodge or tented camp near Ngorongoro or Karatu',
    day5Meals: 'Breakfast, Lunch and Dinner',

    day6: 'Day 6',
    day6Title: 'Ngorongoro Crater Safari and Return to Arusha',
    day6Text:
      'After breakfast, descend into the Ngorongoro Crater for a game drive. Search for lions, elephants, buffaloes, zebras, wildebeest, hippos, hyenas and, with luck, black rhinos. Enjoy a picnic lunch near the hippo pool before ascending the crater and returning to Arusha.',
    day6Accommodation:
      'No accommodation included after the safari',
    day6Meals: 'Breakfast and Lunch',

    detailsTitle: 'Safari Details',

    duration: 'Duration',
    durationValue: '6 Days / 5 Nights',

    departure: 'Departure',
    departureValue: 'Arusha',

    destinations: 'Destinations',
    destinationsValue:
      'Tarangire, Lake Manyara, Serengeti & Ngorongoro',

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
      'Five nights lodge or tented camp accommodation',
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

    readyTitle: 'Ready for Your Six-Day Safari?',

    readyText:
      'Contact Kilimanjaro Travel for availability, accommodation options and a tailor-made quotation based on your group size and travel dates.',

    whatsapp: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: '6 Tage Safari durch den Northern Circuit',
    heroSubtitle:
      'Entdecken Sie Tarangire, Lake Manyara, Serengeti und Ngorongoro auf einer umfassenden Safari durch Nordtansania.',

    overviewLabel: 'SAFARI-ÜBERSICHT',
    overviewTitle: 'Sechs Tage durch den Northern Circuit',

    paragraph1:
      'Diese private sechstägige Safari bietet eine ausgewogene Reise durch vier der bekanntesten Wildtiergebiete Nordtansanias: Tarangire, Lake Manyara, Serengeti und Ngorongoro.',

    paragraph2:
      'Erleben Sie abwechslungsreiche Landschaften, große Elefantenherden, die berühmten Ebenen der Serengeti, eine vielfältige Vogelwelt und eine unvergessliche Pirschfahrt auf dem Boden des Ngorongoro-Kraters.',

    itineraryTitle: 'Tagesprogramm',

    accommodation: 'Unterkunft',
    meals: 'Mahlzeiten',

    day1: 'Tag 1',
    day1Title: 'Arusha zum Tarangire-Nationalpark',
    day1Text:
      'Abholung von Ihrem Hotel in Arusha und Fahrt zum Tarangire-Nationalpark. Genießen Sie eine ganztägige Pirschfahrt zwischen alten Baobab-Bäumen und halten Sie Ausschau nach Elefanten, Löwen, Giraffen, Zebras, Gnus und zahlreichen Vogelarten. Genießen Sie ein Picknick im Park, bevor Sie zu Ihrer Lodge oder Ihrem Zeltcamp weiterfahren.',
    day1Accommodation:
      'Lodge oder Zeltcamp bei Karatu oder Lake Manyara',
    day1Meals: 'Mittagessen und Abendessen',

    day2: 'Tag 2',
    day2Title: 'Safari im Lake-Manyara-Nationalpark',
    day2Text:
      'Nach dem Frühstück fahren Sie zum Lake-Manyara-Nationalpark. Erkunden Sie den Grundwasserwald, offene Waldgebiete und die Uferlandschaften des Sees. Halten Sie Ausschau nach Elefanten, Giraffen, Zebras, Büffeln, Flusspferden, Affen und zahlreichen Vogelarten, bevor Sie zu Ihrer Unterkunft weiterfahren.',
    day2Accommodation:
      'Lodge oder Zeltcamp bei Karatu oder Lake Manyara',
    day2Meals: 'Frühstück, Mittagessen und Abendessen',

    day3: 'Tag 3',
    day3Title: 'Lake-Manyara-Gebiet zum Serengeti-Nationalpark',
    day3Text:
      'Fahren Sie durch das Ngorongoro-Hochland in Richtung Serengeti-Nationalpark. Nach der Einfahrt in den Park genießen Sie eine Nachmittags-Pirschfahrt durch die berühmten Ebenen und suchen nach Raubtieren, großen Pflanzenfresserherden und anderen Wildtieren.',
    day3Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day3Meals: 'Frühstück, Mittagessen und Abendessen',

    day4: 'Tag 4',
    day4Title: 'Ganztägige Safari in der Serengeti',
    day4Text:
      'Verbringen Sie den ganzen Tag mit der Erkundung des Serengeti-Nationalparks. Ihr Guide wählt je nach Jahreszeit und aktuellen Tierbewegungen die besten Wildtiergebiete aus. Genießen Sie morgendliche und nachmittägliche Pirschfahrten mit einem Picknick im Park.',
    day4Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day4Meals: 'Frühstück, Mittagessen und Abendessen',

    day5: 'Tag 5',
    day5Title: 'Serengeti zum Ngorongoro-Schutzgebiet',
    day5Text:
      'Genießen Sie am frühen Morgen eine Pirschfahrt in der Serengeti, bevor Sie zum Ngorongoro-Schutzgebiet weiterfahren. Beobachten Sie unterwegs weiterhin Wildtiere und erreichen Sie Ihre Lodge oder Ihr Camp am Kraterrand oder bei Karatu zum Abendessen und zur Übernachtung.',
    day5Accommodation:
      'Lodge oder Zeltcamp bei Ngorongoro oder Karatu',
    day5Meals: 'Frühstück, Mittagessen und Abendessen',

    day6: 'Tag 6',
    day6Title:
      'Safari im Ngorongoro-Krater und Rückkehr nach Arusha',
    day6Text:
      'Nach dem Frühstück steigen Sie in den Ngorongoro-Krater hinab und unternehmen eine Pirschfahrt. Halten Sie Ausschau nach Löwen, Elefanten, Büffeln, Zebras, Gnus, Flusspferden, Hyänen und mit etwas Glück Spitzmaulnashörnern. Genießen Sie ein Picknick in der Nähe des Nilpferdbeckens, bevor Sie den Krater verlassen und nach Arusha zurückkehren.',
    day6Accommodation:
      'Nach der Safari keine Unterkunft inklusive',
    day6Meals: 'Frühstück und Mittagessen',

    detailsTitle: 'Safari-Details',

    duration: 'Dauer',
    durationValue: '6 Tage / 5 Nächte',

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
      'Eintrittsgebühren für den Lake-Manyara-Nationalpark',
      'Eintrittsgebühren für den Serengeti-Nationalpark',
      'Gebühren für das Ngorongoro-Schutzgebiet und den Krater',
      'Fünf Übernachtungen in einer Lodge oder einem Zeltcamp',
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
      'Kleine Tagestasche',
    ],

    readyTitle: 'Bereit für Ihre sechstägige Safari?',

    readyText:
      'Kontaktieren Sie Kilimanjaro Travel für Verfügbarkeit, Unterkunftsmöglichkeiten und ein individuelles Angebot auf Grundlage Ihrer Gruppengröße und Reisedaten.',

    whatsapp: 'Über WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Safari de 6 jours dans le circuit du Nord',
    heroSubtitle:
      'Découvrez Tarangire, le lac Manyara, le Serengeti et le Ngorongoro lors d’un safari complet dans le nord de la Tanzanie.',

    overviewLabel: 'APERÇU DU SAFARI',
    overviewTitle: 'Six jours dans le circuit du Nord',

    paragraph1:
      'Ce safari privé de six jours propose un voyage équilibré à travers quatre des destinations animalières les plus célèbres du nord de la Tanzanie : Tarangire, le lac Manyara, le Serengeti et le Ngorongoro.',

    paragraph2:
      'Découvrez des paysages variés, de grands troupeaux d’éléphants, les célèbres plaines du Serengeti, une riche avifaune et un safari mémorable au fond du cratère du Ngorongoro.',

    itineraryTitle: 'Itinéraire jour par jour',

    accommodation: 'Hébergement',
    meals: 'Repas',

    day1: 'Jour 1',
    day1Title: 'Arusha au parc national de Tarangire',
    day1Text:
      'Prise en charge à votre hôtel à Arusha et départ vers le parc national de Tarangire. Profitez d’une journée complète de safari parmi les anciens baobabs à la recherche d’éléphants, lions, girafes, zèbres, gnous et nombreuses espèces d’oiseaux. Déjeunez en pique-nique dans le parc avant de rejoindre votre lodge ou camp.',
    day1Accommodation:
      'Lodge ou camp près de Karatu ou du lac Manyara',
    day1Meals: 'Déjeuner et dîner',

    day2: 'Jour 2',
    day2Title: 'Safari dans le parc national du lac Manyara',
    day2Text:
      'Après le petit-déjeuner, départ vers le parc national du lac Manyara pour un safari à travers la forêt souterraine, les zones boisées et les paysages autour du lac. Recherchez les éléphants, girafes, zèbres, buffles, hippopotames, singes et nombreuses espèces d’oiseaux avant de rejoindre votre hébergement.',
    day2Accommodation:
      'Lodge ou camp près de Karatu ou du lac Manyara',
    day2Meals: 'Petit-déjeuner, déjeuner et dîner',

    day3: 'Jour 3',
    day3Title: 'Région du lac Manyara au parc national du Serengeti',
    day3Text:
      'Traversez les hauts plateaux du Ngorongoro en direction du parc national du Serengeti. Entrez dans le parc et profitez d’un safari l’après-midi à travers les célèbres plaines à la recherche de prédateurs, de grands troupeaux d’herbivores et d’autres animaux sauvages.',
    day3Accommodation: 'Lodge ou camp dans le Serengeti',
    day3Meals: 'Petit-déjeuner, déjeuner et dîner',

    day4: 'Jour 4',
    day4Title: 'Safari d’une journée complète dans le Serengeti',
    day4Text:
      'Passez toute la journée à explorer le parc national du Serengeti. Votre guide choisira les meilleures zones d’observation selon la saison et les déplacements récents des animaux. Profitez de safaris le matin et l’après-midi avec un déjeuner pique-nique dans le parc.',
    day4Accommodation: 'Lodge ou camp dans le Serengeti',
    day4Meals: 'Petit-déjeuner, déjeuner et dîner',

    day5: 'Jour 5',
    day5Title: 'Serengeti vers la zone de conservation du Ngorongoro',
    day5Text:
      'Profitez d’un safari matinal dans le Serengeti avant de partir vers la zone de conservation du Ngorongoro. Continuez l’observation de la faune en chemin et arrivez à votre lodge ou camp près du bord du cratère ou à Karatu pour le dîner et la nuit.',
    day5Accommodation:
      'Lodge ou camp près du Ngorongoro ou de Karatu',
    day5Meals: 'Petit-déjeuner, déjeuner et dîner',

    day6: 'Jour 6',
    day6Title:
      'Safari dans le cratère du Ngorongoro et retour à Arusha',
    day6Text:
      'Après le petit-déjeuner, descendez dans le cratère du Ngorongoro pour un safari. Recherchez les lions, éléphants, buffles, zèbres, gnous, hippopotames, hyènes et, avec un peu de chance, les rhinocéros noirs. Profitez d’un déjeuner pique-nique près du bassin des hippopotames avant de remonter du cratère et de retourner à Arusha.',
    day6Accommodation:
      'Aucun hébergement inclus après le safari',
    day6Meals: 'Petit-déjeuner et déjeuner',

    detailsTitle: 'Détails du safari',

    duration: 'Durée',
    durationValue: '6 jours / 5 nuits',

    departure: 'Départ',
    departureValue: 'Arusha',

    destinations: 'Destinations',
    destinationsValue:
      'Tarangire, lac Manyara, Serengeti & Ngorongoro',

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
      'Frais d’entrée au parc national du lac Manyara',
      'Frais d’entrée au parc national du Serengeti',
      'Frais de la zone de conservation et du cratère du Ngorongoro',
      'Cinq nuits en lodge ou camp',
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
      'Petit sac pour la journée',
    ],

    readyTitle: 'Prêt pour votre safari de six jours ?',

    readyText:
      'Contactez Kilimanjaro Travel pour connaître les disponibilités, les options d’hébergement et obtenir un devis personnalisé selon la taille de votre groupe et vos dates de voyage.',

    whatsapp: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Safari de 6 días por el Circuito Norte',
    heroSubtitle:
      'Descubre Tarangire, el lago Manyara, Serengeti y Ngorongoro en un safari completo por el norte de Tanzania.',

    overviewLabel: 'RESUMEN DEL SAFARI',
    overviewTitle: 'Seis días por el Circuito Norte',

    paragraph1:
      'Este safari privado de seis días ofrece un viaje equilibrado por cuatro de los destinos de vida silvestre más conocidos del norte de Tanzania: Tarangire, lago Manyara, Serengeti y Ngorongoro.',

    paragraph2:
      'Disfruta de paisajes variados, grandes manadas de elefantes, las famosas llanuras del Serengeti, una rica variedad de aves y un memorable safari en el fondo del Cráter del Ngorongoro.',

    itineraryTitle: 'Itinerario día a día',

    accommodation: 'Alojamiento',
    meals: 'Comidas',

    day1: 'Día 1',
    day1Title: 'Arusha al Parque Nacional de Tarangire',
    day1Text:
      'Recogida en tu hotel de Arusha y traslado al Parque Nacional de Tarangire. Disfruta de un safari de día completo entre antiguos baobabs mientras buscas elefantes, leones, jirafas, cebras, ñus y una gran variedad de aves. Disfruta de un almuerzo tipo picnic dentro del parque antes de continuar hacia tu lodge o campamento.',
    day1Accommodation:
      'Lodge o campamento cerca de Karatu o del lago Manyara',
    day1Meals: 'Almuerzo y cena',

    day2: 'Día 2',
    day2Title: 'Safari en el Parque Nacional del Lago Manyara',
    day2Text:
      'Después del desayuno, traslado al Parque Nacional del Lago Manyara para realizar un safari a través del bosque de aguas subterráneas, zonas boscosas y hábitats junto al lago. Busca elefantes, jirafas, cebras, búfalos, hipopótamos, monos y una gran variedad de aves antes de continuar hacia tu alojamiento.',
    day2Accommodation:
      'Lodge o campamento cerca de Karatu o del lago Manyara',
    day2Meals: 'Desayuno, almuerzo y cena',

    day3: 'Día 3',
    day3Title:
      'Zona del Lago Manyara al Parque Nacional del Serengeti',
    day3Text:
      'Viaja a través de las tierras altas del Ngorongoro hacia el Parque Nacional del Serengeti. Entra en el parque y disfruta de un safari por la tarde a través de las famosas llanuras buscando depredadores, grandes manadas de herbívoros y otros animales salvajes.',
    day3Accommodation: 'Lodge o campamento en el Serengeti',
    day3Meals: 'Desayuno, almuerzo y cena',

    day4: 'Día 4',
    day4Title: 'Safari de día completo en el Serengeti',
    day4Text:
      'Pasa el día completo explorando el Parque Nacional del Serengeti. Tu guía seleccionará las mejores zonas de fauna según la temporada y los movimientos recientes de los animales. Disfruta de safaris por la mañana y por la tarde con un almuerzo tipo picnic dentro del parque.',
    day4Accommodation: 'Lodge o campamento en el Serengeti',
    day4Meals: 'Desayuno, almuerzo y cena',

    day5: 'Día 5',
    day5Title:
      'Serengeti a la Zona de Conservación del Ngorongoro',
    day5Text:
      'Disfruta de un safari temprano por la mañana en el Serengeti antes de viajar hacia la Zona de Conservación del Ngorongoro. Continúa observando la fauna durante el trayecto y llega a tu lodge o campamento cerca del borde del cráter o en Karatu para cenar y pasar la noche.',
    day5Accommodation:
      'Lodge o campamento cerca de Ngorongoro o Karatu',
    day5Meals: 'Desayuno, almuerzo y cena',

    day6: 'Día 6',
    day6Title:
      'Safari en el Cráter del Ngorongoro y regreso a Arusha',
    day6Text:
      'Después del desayuno, desciende al Cráter del Ngorongoro para realizar un safari. Busca leones, elefantes, búfalos, cebras, ñus, hipopótamos, hienas y, con suerte, rinocerontes negros. Disfruta de un almuerzo tipo picnic cerca de la piscina de hipopótamos antes de salir del cráter y regresar a Arusha.',
    day6Accommodation:
      'No incluye alojamiento después del safari',
    day6Meals: 'Desayuno y almuerzo',

    detailsTitle: 'Detalles del safari',

    duration: 'Duración',
    durationValue: '6 días / 5 noches',

    departure: 'Salida',
    departureValue: 'Arusha',

    destinations: 'Destinos',
    destinationsValue:
      'Tarangire, Lago Manyara, Serengeti y Ngorongoro',

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
      'Tasas de entrada al Parque Nacional del Lago Manyara',
      'Tasas de entrada al Parque Nacional del Serengeti',
      'Tasas de la Zona de Conservación y del Cráter del Ngorongoro',
      'Cinco noches de alojamiento en lodge o campamento',
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

    readyTitle: '¿Listo para tu safari de seis días?',

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
      en: 'US$4,150',
      de: 'US$4.150',
      fr: '4 150 $US',
      es: 'US$4.150',
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
      en: 'US$2,680 per person',
      de: 'US$2.680 pro Person',
      fr: '2 680 $US par personne',
      es: 'US$2.680 por persona',
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
      en: 'US$2,250 per person',
      de: 'US$2.250 pro Person',
      fr: '2 250 $US par personne',
      es: 'US$2.250 por persona',
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
      en: 'US$2,010 per person',
      de: 'US$2.010 pro Person',
      fr: '2 010 $US par personne',
      es: 'US$2.010 por persona',
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
      en: 'US$1,780 per person',
      de: 'US$1.780 pro Person',
      fr: '1 780 $US par personne',
      es: 'US$1.780 por persona',
    },
  },
];

export default function SixDaysNorthernCircuitPage() {
  const { language } = useLanguage();

  const currentLanguage: LanguageCode =
    language === 'de' ||
    language === 'fr' ||
    language === 'es'
      ? language
      : 'en';

  const t = translations[currentLanguage];

  const days = [
    {
      day: t.day1,
      title: t.day1Title,
      text: t.day1Text,
      accommodation: t.day1Accommodation,
      meals: t.day1Meals,
    },
    {
      day: t.day2,
      title: t.day2Title,
      text: t.day2Text,
      accommodation: t.day2Accommodation,
      meals: t.day2Meals,
    },
    {
      day: t.day3,
      title: t.day3Title,
      text: t.day3Text,
      accommodation: t.day3Accommodation,
      meals: t.day3Meals,
    },
    {
      day: t.day4,
      title: t.day4Title,
      text: t.day4Text,
      accommodation: t.day4Accommodation,
      meals: t.day4Meals,
    },
    {
      day: t.day5,
      title: t.day5Title,
      text: t.day5Text,
      accommodation: t.day5Accommodation,
      meals: t.day5Meals,
    },
    {
      day: t.day6,
      title: t.day6Title,
      text: t.day6Text,
      accommodation: t.day6Accommodation,
      meals: t.day6Meals,
    },
  ];

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/6days-two.jpeg"
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

                {days.map((item) => (
                  <article
                    key={item.day}
                    className="rounded-3xl bg-cream p-7 shadow-lg"
                  >
                    <p className="font-bold text-gold">
                      {item.day}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-forest">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-black/70">
                      {item.text}
                    </p>

                    <div className="mt-5 space-y-2 border-t border-black/10 pt-5 text-black/70">

                      <p>
                        <strong className="text-forest">
                          {t.accommodation}:
                        </strong>{' '}
                        {item.accommodation}
                      </p>

                      <p>
                        <strong className="text-forest">
                          {t.meals}:
                        </strong>{' '}
                        {item.meals}
                      </p>

                    </div>
                  </article>
                ))}

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
                  US$1,780
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
                src="/images/6days-one.jpg"
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