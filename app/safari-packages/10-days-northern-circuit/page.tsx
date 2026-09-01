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
    heroTitle: '10 Days Northern Circuit Safari',
    heroSubtitle:
      'Explore Tarangire, Lake Manyara, Serengeti and Ngorongoro on a complete ten-day safari adventure.',

    overviewLabel: 'SAFARI OVERVIEW',
    overviewTitle: 'An Extended Northern Tanzania Safari',

    paragraph1:
      "This private ten-day safari gives you plenty of time to explore Tanzania's famous Northern Circuit at a relaxed and comfortable pace.",

    paragraph2:
      'Visit Tarangire, Lake Manyara, Serengeti and Ngorongoro while enjoying varied landscapes, excellent wildlife viewing and several full days in the Serengeti.',

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
    day6Title: 'Third Full Day in Serengeti',
    day6Text:
      'Explore another part of Serengeti National Park with your experienced safari guide. Follow recent wildlife activity and enjoy more opportunities to see predators, large herbivore herds and beautiful landscapes.',
    day6Accommodation: 'Lodge or tented camp in Serengeti',
    day6Meals: 'Breakfast, Lunch and Dinner',

    day7: 'Day 7',
    day7Title: 'Fourth Full Day in Serengeti',
    day7Text:
      'Enjoy another full day of wildlife viewing in Serengeti. Your guide will select the best areas depending on animal movements and seasonal conditions. This extra time allows for relaxed game drives and excellent photography opportunities.',
    day7Accommodation: 'Lodge or tented camp in Serengeti',
    day7Meals: 'Breakfast, Lunch and Dinner',

    day8: 'Day 8',
    day8Title: 'Serengeti to Ngorongoro Conservation Area',
    day8Text:
      'Enjoy a morning game drive in Serengeti before traveling toward the Ngorongoro Conservation Area. Continue wildlife viewing along the way and arrive at your lodge or camp near the crater rim or Karatu.',
    day8Accommodation:
      'Lodge or tented camp near Ngorongoro or Karatu',
    day8Meals: 'Breakfast, Lunch and Dinner',

    day9: 'Day 9',
    day9Title: 'Ngorongoro Conservation Area Exploration',
    day9Text:
      'Enjoy a relaxed morning around the Ngorongoro Conservation Area. Depending on your interests and conditions, you may explore nearby areas, enjoy cultural experiences or relax at your lodge before the final crater safari.',
    day9Accommodation:
      'Lodge or tented camp near Ngorongoro or Karatu',
    day9Meals: 'Breakfast, Lunch and Dinner',

    day10: 'Day 10',
    day10Title: 'Ngorongoro Crater Safari and Return to Arusha',
    day10Text:
      'After an early breakfast, descend into the Ngorongoro Crater for a final game drive. Search for lions, elephants, buffaloes, zebras, wildebeest, hippos, hyenas and, with luck, black rhinos. Enjoy a picnic lunch before ascending the crater and returning to Arusha.',
    day10Accommodation:
      'No accommodation included after the safari',
    day10Meals: 'Breakfast and Lunch',

    detailsTitle: 'Safari Details',

    duration: 'Duration',
    durationValue: '10 Days / 9 Nights',

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
      'Nine nights lodge or tented camp accommodation',
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

    readyTitle: 'Ready for Your Ten-Day Safari?',

    readyText:
      'Contact Kilimanjaro Travel for availability, accommodation options and a tailor-made quotation based on your group size and travel dates.',

    whatsapp: 'Chat on WhatsApp',

    priceRows: [
      { people: '1 person', price: 'US$6,450' },
      { people: '2 people', price: 'US$4,080 per person' },
      { people: '3 people', price: 'US$3,420 per person' },
      { people: '4 people', price: 'US$3,050 per person' },
      { people: '5–6 people', price: 'US$2,680 per person' },
    ],
  },

  de: {
    heroTitle: '10 Tage Northern Circuit Safari',
    heroSubtitle:
      'Erleben Sie Tarangire, Lake Manyara, die Serengeti und Ngorongoro auf einer kompletten zehntägigen Safari.',

    overviewLabel: 'SAFARI-ÜBERSICHT',
    overviewTitle: 'Eine ausgedehnte Safari durch Nordtansania',

    paragraph1:
      'Diese private zehntägige Safari bietet Ihnen viel Zeit, den berühmten Northern Circuit Tansanias in einem entspannten und komfortablen Tempo zu erkunden.',

    paragraph2:
      'Besuchen Sie Tarangire, Lake Manyara, die Serengeti und Ngorongoro und genießen Sie abwechslungsreiche Landschaften, hervorragende Tierbeobachtungen und mehrere volle Tage in der Serengeti.',

    itineraryTitle: 'Tagesprogramm',

    accommodation: 'Unterkunft',
    meals: 'Mahlzeiten',

    day1: 'Tag 1',
    day1Title: 'Arusha zum Tarangire-Nationalpark',
    day1Text:
      'Abholung von Ihrem Hotel in Arusha und Fahrt zum Tarangire-Nationalpark. Genießen Sie eine ganztägige Pirschfahrt zwischen riesigen Baobab-Bäumen und halten Sie Ausschau nach Elefanten, Löwen, Giraffen, Zebras, Gnus und zahlreichen Vogelarten.',
    day1Accommodation:
      'Lodge oder Zeltcamp bei Karatu oder Lake Manyara',
    day1Meals: 'Mittagessen und Abendessen',

    day2: 'Tag 2',
    day2Title: 'Safari im Lake-Manyara-Nationalpark',
    day2Text:
      'Nach dem Frühstück erkunden Sie den Lake-Manyara-Nationalpark. Fahren Sie durch Wald- und Seeuferlandschaften und halten Sie Ausschau nach Elefanten, Giraffen, Büffeln, Flusspferden, Affen, Antilopen und zahlreichen Vogelarten.',
    day2Accommodation:
      'Lodge oder Zeltcamp bei Karatu oder Lake Manyara',
    day2Meals: 'Frühstück, Mittagessen und Abendessen',

    day3: 'Tag 3',
    day3Title: 'Lake-Manyara-Gebiet zur Serengeti',
    day3Text:
      'Fahren Sie durch das Ngorongoro-Hochland in Richtung Serengeti-Nationalpark. Nach der Einfahrt in den Park genießen Sie am Nachmittag eine Pirschfahrt über die berühmten Ebenen.',
    day3Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day3Meals: 'Frühstück, Mittagessen und Abendessen',

    day4: 'Tag 4',
    day4Title: 'Ganztägige Serengeti-Safari',
    day4Text:
      'Verbringen Sie den gesamten Tag mit der Erkundung der Serengeti. Ihr Guide wählt die besten Wildtiergebiete entsprechend der Jahreszeit und der aktuellen Tierbewegungen aus.',
    day4Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day4Meals: 'Frühstück, Mittagessen und Abendessen',

    day5: 'Tag 5',
    day5Title: 'Zweiter ganzer Tag in der Serengeti',
    day5Text:
      'Genießen Sie einen weiteren vollständigen Tag in der Serengeti mit mehr Zeit für Tierbeobachtungen und Fotografie.',
    day5Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day5Meals: 'Frühstück, Mittagessen und Abendessen',

    day6: 'Tag 6',
    day6Title: 'Dritter ganzer Tag in der Serengeti',
    day6Text:
      'Erkunden Sie einen weiteren Teil der Serengeti mit Ihrem erfahrenen Safariführer und folgen Sie den aktuellen Tierbewegungen.',
    day6Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day6Meals: 'Frühstück, Mittagessen und Abendessen',

    day7: 'Tag 7',
    day7Title: 'Vierter ganzer Tag in der Serengeti',
    day7Text:
      'Genießen Sie einen weiteren Tag voller Tierbeobachtungen. Ihr Guide wählt die besten Gebiete entsprechend der Tierbewegungen und der saisonalen Bedingungen.',
    day7Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day7Meals: 'Frühstück, Mittagessen und Abendessen',

    day8: 'Tag 8',
    day8Title: 'Serengeti zum Ngorongoro-Schutzgebiet',
    day8Text:
      'Genießen Sie am Morgen eine Pirschfahrt in der Serengeti und fahren Sie anschließend zum Ngorongoro-Schutzgebiet. Beobachten Sie unterwegs weiterhin Wildtiere.',
    day8Accommodation:
      'Lodge oder Zeltcamp nahe Ngorongoro oder Karatu',
    day8Meals: 'Frühstück, Mittagessen und Abendessen',

    day9: 'Tag 9',
    day9Title: 'Erkundung des Ngorongoro-Schutzgebiets',
    day9Text:
      'Genießen Sie einen entspannten Morgen im Ngorongoro-Schutzgebiet. Je nach Interessen und Bedingungen können Sie nahegelegene Gebiete erkunden, kulturelle Erlebnisse genießen oder sich in Ihrer Lodge entspannen.',
    day9Accommodation:
      'Lodge oder Zeltcamp nahe Ngorongoro oder Karatu',
    day9Meals: 'Frühstück, Mittagessen und Abendessen',

    day10: 'Tag 10',
    day10Title:
      'Ngorongoro-Krater-Safari und Rückkehr nach Arusha',
    day10Text:
      'Nach einem frühen Frühstück steigen Sie für eine letzte Pirschfahrt in den Ngorongoro-Krater hinab. Halten Sie Ausschau nach Löwen, Elefanten, Büffeln, Zebras, Gnus, Flusspferden, Hyänen und mit etwas Glück nach Spitzmaulnashörnern.',
    day10Accommodation:
      'Nach der Safari keine Unterkunft inklusive',
    day10Meals: 'Frühstück und Mittagessen',

    detailsTitle: 'Safari-Details',

    duration: 'Dauer',
    durationValue: '10 Tage / 9 Nächte',

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
      'Neun Übernachtungen in Lodge oder Zeltcamp',
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
      'Nicht aufgeführte optionale Aktivitäten',
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

    readyTitle: 'Bereit für Ihre zehntägige Safari?',

    readyText:
      'Kontaktieren Sie Kilimanjaro Travel für Verfügbarkeit, Unterkunftsmöglichkeiten und ein maßgeschneidertes Angebot.',

    whatsapp: 'Über WhatsApp chatten',

    priceRows: [
      { people: '1 Person', price: 'US$6.450' },
      { people: '2 Personen', price: 'US$4.080 pro Person' },
      { people: '3 Personen', price: 'US$3.420 pro Person' },
      { people: '4 Personen', price: 'US$3.050 pro Person' },
      { people: '5–6 Personen', price: 'US$2.680 pro Person' },
    ],
  },

  fr: {
    heroTitle: 'Safari de 10 jours – Northern Circuit',
    heroSubtitle:
      'Découvrez Tarangire, le lac Manyara, le Serengeti et le Ngorongoro lors d’une aventure safari complète de dix jours.',

    overviewLabel: 'APERÇU DU SAFARI',
    overviewTitle: 'Un safari prolongé dans le nord de la Tanzanie',

    paragraph1:
      'Ce safari privé de dix jours vous offre beaucoup de temps pour explorer le célèbre circuit nord de la Tanzanie à un rythme confortable.',

    paragraph2:
      'Découvrez Tarangire, le lac Manyara, le Serengeti et le Ngorongoro avec plusieurs journées complètes consacrées à l’observation de la faune.',

    itineraryTitle: 'Itinéraire jour par jour',

    accommodation: 'Hébergement',
    meals: 'Repas',

    day1: 'Jour 1',
    day1Title: 'Arusha – Parc national de Tarangire',
    day1Text:
      'Prise en charge à votre hôtel à Arusha et départ vers le parc national de Tarangire. Profitez d’un safari d’une journée entre les grands baobabs à la recherche d’éléphants, lions, girafes, zèbres, gnous et nombreuses espèces d’oiseaux.',
    day1Accommodation:
      'Lodge ou camp près de Karatu ou du lac Manyara',
    day1Meals: 'Déjeuner et dîner',

    day2: 'Jour 2',
    day2Title: 'Safari dans le parc national du lac Manyara',
    day2Text:
      'Après le petit-déjeuner, explorez le parc national du lac Manyara à la recherche d’éléphants, girafes, buffles, hippopotames, singes, antilopes et nombreuses espèces d’oiseaux.',
    day2Accommodation:
      'Lodge ou camp près de Karatu ou du lac Manyara',
    day2Meals: 'Petit-déjeuner, déjeuner et dîner',

    day3: 'Jour 3',
    day3Title: 'Région du lac Manyara – Serengeti',
    day3Text:
      'Traversez les hauts plateaux du Ngorongoro vers le Serengeti. Après l’entrée dans le parc, profitez d’un safari l’après-midi à travers les célèbres plaines.',
    day3Accommodation: 'Lodge ou camp dans le Serengeti',
    day3Meals: 'Petit-déjeuner, déjeuner et dîner',

    day4: 'Jour 4',
    day4Title: 'Safari d’une journée complète au Serengeti',
    day4Text:
      'Passez toute la journée à explorer le Serengeti. Votre guide choisira les meilleures zones selon la saison et les mouvements récents des animaux.',
    day4Accommodation: 'Lodge ou camp dans le Serengeti',
    day4Meals: 'Petit-déjeuner, déjeuner et dîner',

    day5: 'Jour 5',
    day5Title: 'Deuxième journée complète au Serengeti',
    day5Text:
      'Profitez d’une deuxième journée complète pour observer et photographier la faune du Serengeti.',
    day5Accommodation: 'Lodge ou camp dans le Serengeti',
    day5Meals: 'Petit-déjeuner, déjeuner et dîner',

    day6: 'Jour 6',
    day6Title: 'Troisième journée complète au Serengeti',
    day6Text:
      'Explorez une autre partie du Serengeti avec votre guide expérimenté et suivez l’activité récente de la faune.',
    day6Accommodation: 'Lodge ou camp dans le Serengeti',
    day6Meals: 'Petit-déjeuner, déjeuner et dîner',

    day7: 'Jour 7',
    day7Title: 'Quatrième journée complète au Serengeti',
    day7Text:
      'Profitez d’une nouvelle journée d’observation de la faune. Votre guide choisira les meilleures zones selon les mouvements des animaux.',
    day7Accommodation: 'Lodge ou camp dans le Serengeti',
    day7Meals: 'Petit-déjeuner, déjeuner et dîner',

    day8: 'Jour 8',
    day8Title:
      'Serengeti – Zone de conservation du Ngorongoro',
    day8Text:
      'Profitez d’un safari matinal dans le Serengeti avant de partir vers la zone de conservation du Ngorongoro.',
    day8Accommodation:
      'Lodge ou camp près du Ngorongoro ou de Karatu',
    day8Meals: 'Petit-déjeuner, déjeuner et dîner',

    day9: 'Jour 9',
    day9Title:
      'Exploration de la zone de conservation du Ngorongoro',
    day9Text:
      'Profitez d’une matinée tranquille dans la zone de conservation du Ngorongoro. Selon vos intérêts, explorez les environs ou profitez de votre lodge avant le safari final.',
    day9Accommodation:
      'Lodge ou camp près du Ngorongoro ou de Karatu',
    day9Meals: 'Petit-déjeuner, déjeuner et dîner',

    day10: 'Jour 10',
    day10Title:
      'Safari dans le cratère du Ngorongoro et retour à Arusha',
    day10Text:
      'Après un petit-déjeuner matinal, descendez dans le cratère du Ngorongoro pour un dernier safari. Recherchez lions, éléphants, buffles, zèbres, gnous, hippopotames, hyènes et, avec de la chance, rhinocéros noirs.',
    day10Accommodation:
      'Aucun hébergement inclus après le safari',
    day10Meals: 'Petit-déjeuner et déjeuner',

    detailsTitle: 'Détails du safari',

    duration: 'Durée',
    durationValue: '10 jours / 9 nuits',

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
      'Basé sur 5 à 6 personnes. Le prix final dépend de la taille du groupe, du niveau d’hébergement, de la saison et des dates de voyage.',

    requestQuote: 'Demander un devis',

    pricesLabel: 'PRIX DU SAFARI PRIVÉ',
    pricesTitle: 'Prix selon la taille du groupe',

    pricesText:
      'Ces prix sont indicatifs. Le devis final peut varier selon l’hébergement, la saison, les frais de parc et la disponibilité.',

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
      'Neuf nuits en lodge ou camp de tentes',
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
      'Activités optionnelles non mentionnées',
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

    readyTitle: 'Prêt pour votre safari de dix jours ?',

    readyText:
      'Contactez Kilimanjaro Travel pour connaître les disponibilités, les options d’hébergement et obtenir un devis personnalisé.',

    whatsapp: 'Discuter sur WhatsApp',

    priceRows: [
      { people: '1 personne', price: '6 450 $US' },
      { people: '2 personnes', price: '4 080 $US par personne' },
      { people: '3 personnes', price: '3 420 $US par personne' },
      { people: '4 personnes', price: '3 050 $US par personne' },
      { people: '5–6 personnes', price: '2 680 $US par personne' },
    ],
  },

  es: {
    heroTitle: 'Safari de 10 días por el Circuito Norte',
    heroSubtitle:
      'Explora Tarangire, el lago Manyara, el Serengeti y Ngorongoro en una completa aventura de safari de diez días.',

    overviewLabel: 'RESUMEN DEL SAFARI',
    overviewTitle: 'Un safari extendido por el norte de Tanzania',

    paragraph1:
      'Este safari privado de diez días te ofrece mucho tiempo para explorar el famoso Circuito Norte de Tanzania a un ritmo relajado y cómodo.',

    paragraph2:
      'Visita Tarangire, el lago Manyara, el Serengeti y Ngorongoro mientras disfrutas de paisajes variados y varios días completos de observación de fauna.',

    itineraryTitle: 'Itinerario día a día',

    accommodation: 'Alojamiento',
    meals: 'Comidas',

    day1: 'Día 1',
    day1Title: 'Arusha al Parque Nacional de Tarangire',
    day1Text:
      'Recogida en tu hotel de Arusha y traslado al Parque Nacional de Tarangire. Disfruta de un safari de día completo entre enormes baobabs buscando elefantes, leones, jirafas, cebras, ñus y numerosas especies de aves.',
    day1Accommodation:
      'Lodge o campamento cerca de Karatu o el lago Manyara',
    day1Meals: 'Almuerzo y cena',

    day2: 'Día 2',
    day2Title: 'Safari en el Parque Nacional del Lago Manyara',
    day2Text:
      'Después del desayuno, explora el Parque Nacional del Lago Manyara buscando elefantes, jirafas, búfalos, hipopótamos, monos, antílopes y numerosas especies de aves.',
    day2Accommodation:
      'Lodge o campamento cerca de Karatu o el lago Manyara',
    day2Meals: 'Desayuno, almuerzo y cena',

    day3: 'Día 3',
    day3Title:
      'Zona del lago Manyara al Parque Nacional del Serengeti',
    day3Text:
      'Viaja a través de las tierras altas de Ngorongoro hacia el Serengeti. Entra en el parque y disfruta de un safari por la tarde a través de las famosas llanuras.',
    day3Accommodation: 'Lodge o campamento en el Serengeti',
    day3Meals: 'Desayuno, almuerzo y cena',

    day4: 'Día 4',
    day4Title: 'Safari de día completo en el Serengeti',
    day4Text:
      'Pasa todo el día explorando el Serengeti. Tu guía elegirá las mejores zonas según la temporada y los movimientos recientes de los animales.',
    day4Accommodation: 'Lodge o campamento en el Serengeti',
    day4Meals: 'Desayuno, almuerzo y cena',

    day5: 'Día 5',
    day5Title: 'Segundo día completo en el Serengeti',
    day5Text:
      'Disfruta de otro día completo para observar y fotografiar la fauna del Serengeti.',
    day5Accommodation: 'Lodge o campamento en el Serengeti',
    day5Meals: 'Desayuno, almuerzo y cena',

    day6: 'Día 6',
    day6Title: 'Tercer día completo en el Serengeti',
    day6Text:
      'Explora otra parte del Serengeti con tu guía experimentado y sigue la actividad reciente de la fauna.',
    day6Accommodation: 'Lodge o campamento en el Serengeti',
    day6Meals: 'Desayuno, almuerzo y cena',

    day7: 'Día 7',
    day7Title: 'Cuarto día completo en el Serengeti',
    day7Text:
      'Disfruta de otro día de observación de fauna. Tu guía seleccionará las mejores zonas según los movimientos de los animales.',
    day7Accommodation: 'Lodge o campamento en el Serengeti',
    day7Meals: 'Desayuno, almuerzo y cena',

    day8: 'Día 8',
    day8Title:
      'Serengeti al Área de Conservación de Ngorongoro',
    day8Text:
      'Disfruta de un safari por la mañana en el Serengeti antes de viajar hacia el Área de Conservación de Ngorongoro.',
    day8Accommodation:
      'Lodge o campamento cerca de Ngorongoro o Karatu',
    day8Meals: 'Desayuno, almuerzo y cena',

    day9: 'Día 9',
    day9Title:
      'Exploración del Área de Conservación de Ngorongoro',
    day9Text:
      'Disfruta de una mañana tranquila en el Área de Conservación de Ngorongoro. Según tus intereses, explora los alrededores o relájate en tu lodge antes del safari final.',
    day9Accommodation:
      'Lodge o campamento cerca de Ngorongoro o Karatu',
    day9Meals: 'Desayuno, almuerzo y cena',

    day10: 'Día 10',
    day10Title:
      'Safari en el Cráter del Ngorongoro y regreso a Arusha',
    day10Text:
      'Después de un desayuno temprano, desciende al Cráter del Ngorongoro para realizar un safari final. Busca leones, elefantes, búfalos, cebras, ñus, hipopótamos, hienas y, con suerte, rinocerontes negros.',
    day10Accommodation:
      'No se incluye alojamiento después del safari',
    day10Meals: 'Desayuno y almuerzo',

    detailsTitle: 'Detalles del safari',

    duration: 'Duración',
    durationValue: '10 días / 9 noches',

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
      'Nueve noches de alojamiento en lodge o campamento',
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
      'Actividades opcionales no indicadas',
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

    readyTitle: '¿Listo para tu safari de diez días?',

    readyText:
      'Contacta con Kilimanjaro Travel para consultar disponibilidad, opciones de alojamiento y recibir un presupuesto personalizado.',

    whatsapp: 'Chatear por WhatsApp',

    priceRows: [
      { people: '1 persona', price: 'US$6.450' },
      { people: '2 personas', price: 'US$4.080 por persona' },
      { people: '3 personas', price: 'US$3.420 por persona' },
      { people: '4 personas', price: 'US$3.050 por persona' },
      { people: '5–6 personas', price: 'US$2.680 por persona' },
    ],
  },
};

export default function TenDaysNorthernCircuitPage() {
  const { language } = useLanguage();

  const currentLanguage: LanguageCode =
    language === 'de' ||
    language === 'fr' ||
    language === 'es'
      ? language
      : 'en';

  const t = translations[currentLanguage];

  const itinerary = [
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
    {
      day: t.day7,
      title: t.day7Title,
      text: t.day7Text,
      accommodation: t.day7Accommodation,
      meals: t.day7Meals,
    },
    {
      day: t.day8,
      title: t.day8Title,
      text: t.day8Text,
      accommodation: t.day8Accommodation,
      meals: t.day8Meals,
    },
    {
      day: t.day9,
      title: t.day9Title,
      text: t.day9Text,
      accommodation: t.day9Accommodation,
      meals: t.day9Meals,
    },
    {
      day: t.day10,
      title: t.day10Title,
      text: t.day10Text,
      accommodation: t.day10Accommodation,
      meals: t.day10Meals,
    },
  ];

  return (
    <main>
      <Header />

      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/10days-five.jpg"
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
                {t.paragraph1}
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                {t.paragraph2}
              </p>

              <h2 className="mt-12 text-3xl font-bold text-forest">
                {t.itineraryTitle}
              </h2>

              <div className="mt-8 space-y-6">

                {itinerary.map((item) => (
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
                  {currentLanguage === 'fr'
                    ? '2 680 $US'
                    : currentLanguage === 'de'
                    ? 'US$2.680'
                    : 'US$2,680'}
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
                src="/images/10days-two.jpg"
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

      {/* FINAL CTA */}
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