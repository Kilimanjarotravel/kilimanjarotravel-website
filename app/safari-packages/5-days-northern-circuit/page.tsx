'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: '5 Days Northern Circuit Safari',
    heroSubtitle:
      'Experience Tarangire, the legendary Serengeti plains and the wildlife-rich Ngorongoro Crater.',

    overviewLabel: 'SAFARI OVERVIEW',
    overviewTitle: 'Five Days of Wildlife and Adventure',

    paragraph1:
      "This private five-day safari offers more time to explore Tanzania's famous Northern Circuit. Travel through Tarangire National Park, Serengeti National Park and the Ngorongoro Conservation Area.",

    paragraph2:
      'The itinerary combines elephant-filled landscapes, classic Serengeti plains, predator sightings and the remarkable wildlife concentration of the Ngorongoro Crater.',

    itineraryTitle: 'Day-by-Day Itinerary',
    accommodation: 'Accommodation:',
    meals: 'Meals:',

    safariDetails: 'Safari Details',
    duration: 'Duration:',
    durationValue: '5 Days / 4 Nights',
    departure: 'Departure:',
    departureValue: 'Arusha',
    destinations: 'Destinations:',
    destinationsValue: 'Tarangire, Serengeti & Ngorongoro',
    tourType: 'Tour Type:',
    tourTypeValue: 'Private Safari',
    accommodationDetails: 'Accommodation:',
    accommodationValue: 'Lodge / Tented Camp',
    bestTime: 'Best Time:',
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
    excludedTitle: 'What Is Excluded',

    bringLabel: 'WHAT TO BRING',
    bringTitle: 'Prepare for Your Safari',

    readyTitle: 'Ready for Your Five-Day Safari?',
    readyText:
      'Contact Kilimanjaro Travel for availability, accommodation options and a tailor-made quotation based on your group size and travel dates.',

    whatsapp: 'Chat on WhatsApp',

    itinerary: [
      {
        day: 'Day 1',
        title: 'Arusha to Tarangire National Park',
        text: 'Pickup from your hotel in Arusha and drive to Tarangire National Park. Enjoy a full-day game drive among ancient baobab trees while searching for elephants, lions, giraffes, zebras, wildebeest and rich birdlife. Enjoy a picnic lunch inside the park before continuing to your lodge or tented camp.',
        accommodation:
          'Lodge or tented camp near Karatu or Lake Manyara',
        meals: 'Lunch and Dinner',
      },
      {
        day: 'Day 2',
        title: 'Tarangire Area to Serengeti National Park',
        text: 'After breakfast, travel through the beautiful Ngorongoro highlands toward Serengeti National Park. Enter the park and enjoy an afternoon game drive across the famous plains while searching for predators, large herbivore herds and other wildlife.',
        accommodation: 'Lodge or tented camp in Serengeti',
        meals: 'Breakfast, Lunch and Dinner',
      },
      {
        day: 'Day 3',
        title: 'Full-Day Serengeti Safari',
        text: 'Spend the full day exploring Serengeti National Park. Your guide will choose the best wildlife areas according to the season and recent animal movements. Enjoy morning and afternoon game drives with a picnic lunch inside the park.',
        accommodation: 'Lodge or tented camp in Serengeti',
        meals: 'Breakfast, Lunch and Dinner',
      },
      {
        day: 'Day 4',
        title: 'Serengeti to Ngorongoro Conservation Area',
        text: 'Enjoy an early morning game drive in Serengeti before traveling toward the Ngorongoro Conservation Area. Continue wildlife viewing along the way and arrive at your lodge or camp near the crater rim or Karatu for dinner and overnight.',
        accommodation:
          'Lodge or tented camp near Ngorongoro or Karatu',
        meals: 'Breakfast, Lunch and Dinner',
      },
      {
        day: 'Day 5',
        title: 'Ngorongoro Crater Safari and Return to Arusha',
        text: 'After breakfast, descend into the Ngorongoro Crater for a game drive. Search for lions, elephants, buffaloes, zebras, wildebeest, hippos, hyenas and, with luck, black rhinos. Enjoy a picnic lunch near the hippo pool before ascending the crater and returning to Arusha.',
        accommodation:
          'No accommodation included after the safari',
        meals: 'Breakfast and Lunch',
      },
    ],

    included: [
      'Hotel pickup and drop-off in Arusha',
      'Private 4x4 safari vehicle with pop-up roof',
      'Professional English-speaking safari guide',
      'Tarangire National Park entrance fees',
      'Serengeti National Park entrance fees',
      'Ngorongoro Conservation Area and crater service fees',
      'Four nights lodge or tented camp accommodation',
      'Meals as listed in the itinerary',
      'Drinking water during the safari',
    ],

    excluded: [
      'International and domestic flights',
      'Travel insurance',
      'Visa fees',
      'Tips and gratuities',
      'Alcoholic and soft drinks',
      'Personal expenses',
      'Optional activities not listed in the itinerary',
    ],

    whatToBring: [
      'Comfortable safari clothing',
      'Sun hat and sunscreen',
      'Camera or binoculars',
      'Warm jacket for cool mornings',
      'Personal medication',
      'Small day bag',
    ],

    priceRows: [
      { people: '1 person', price: 'US$3,550' },
      { people: '2 people', price: 'US$2,280 per person' },
      { people: '3 people', price: 'US$1,920 per person' },
      { people: '4 people', price: 'US$1,710 per person' },
      { people: '5–6 people', price: 'US$1,520 per person' },
    ],
  },

  de: {
    heroTitle: '5 Tage Northern Circuit Safari',
    heroSubtitle:
      'Erleben Sie Tarangire, die legendären Serengeti-Ebenen und den wildreichen Ngorongoro-Krater.',

    overviewLabel: 'SAFARI-ÜBERSICHT',
    overviewTitle: 'Fünf Tage voller Wildtiere und Abenteuer',

    paragraph1:
      'Diese private fünftägige Safari bietet mehr Zeit, um Tansanias berühmten Northern Circuit zu erkunden. Reisen Sie durch den Tarangire-Nationalpark, den Serengeti-Nationalpark und das Ngorongoro-Schutzgebiet.',

    paragraph2:
      'Die Route verbindet von Elefanten geprägte Landschaften, die klassischen Ebenen der Serengeti, Raubtiersichtungen und die außergewöhnliche Tierkonzentration des Ngorongoro-Kraters.',

    itineraryTitle: 'Tagesprogramm',
    accommodation: 'Unterkunft:',
    meals: 'Mahlzeiten:',

    safariDetails: 'Safari-Details',
    duration: 'Dauer:',
    durationValue: '5 Tage / 4 Nächte',
    departure: 'Abfahrt:',
    departureValue: 'Arusha',
    destinations: 'Reiseziele:',
    destinationsValue: 'Tarangire, Serengeti & Ngorongoro',
    tourType: 'Tourart:',
    tourTypeValue: 'Private Safari',
    accommodationDetails: 'Unterkunft:',
    accommodationValue: 'Lodge / Zeltcamp',
    bestTime: 'Beste Reisezeit:',
    bestTimeValue: 'Ganzjährig',

    startingFrom: 'Ab',
    perPerson: 'pro Person',
    priceNote:
      'Basierend auf 5–6 Personen. Der endgültige Preis hängt von Gruppengröße, Unterkunft, Saison und Reisedaten ab.',

    requestQuote: 'Angebot anfordern',

    pricesLabel: 'PRIVATE SAFARI-PREISE',
    pricesTitle: 'Preis nach Gruppengröße',
    pricesText:
      'Dies sind beispielhafte Einstiegspreise. Das endgültige Angebot kann je nach Unterkunft, Saison, Parkgebühren und Verfügbarkeit variieren.',
    groupSize: 'Gruppengröße',
    startingPrice: 'Startpreis',

    includedTitle: 'Im Preis enthalten',
    excludedTitle: 'Nicht enthalten',

    bringLabel: 'WAS SIE MITBRINGEN SOLLTEN',
    bringTitle: 'Bereiten Sie sich auf Ihre Safari vor',

    readyTitle: 'Bereit für Ihre fünftägige Safari?',
    readyText:
      'Kontaktieren Sie Kilimanjaro Travel für Verfügbarkeit, Unterkunftsmöglichkeiten und ein maßgeschneidertes Angebot basierend auf Ihrer Gruppengröße und Ihren Reisedaten.',

    whatsapp: 'Über WhatsApp chatten',

    itinerary: [
      {
        day: 'Tag 1',
        title: 'Arusha zum Tarangire-Nationalpark',
        text: 'Abholung von Ihrem Hotel in Arusha und Fahrt zum Tarangire-Nationalpark. Unternehmen Sie eine ganztägige Pirschfahrt zwischen alten Affenbrotbäumen und halten Sie Ausschau nach Elefanten, Löwen, Giraffen, Zebras, Gnus und zahlreichen Vogelarten. Genießen Sie ein Picknick im Park, bevor Sie zu Ihrer Lodge oder Ihrem Zeltcamp weiterfahren.',
        accommodation:
          'Lodge oder Zeltcamp bei Karatu oder Lake Manyara',
        meals: 'Mittagessen und Abendessen',
      },
      {
        day: 'Tag 2',
        title: 'Tarangire-Gebiet zum Serengeti-Nationalpark',
        text: 'Nach dem Frühstück fahren Sie durch das wunderschöne Ngorongoro-Hochland in Richtung Serengeti-Nationalpark. Nach der Einfahrt in den Park unternehmen Sie eine Pirschfahrt über die berühmten Ebenen und suchen nach Raubtieren, großen Pflanzenfresserherden und anderen Wildtieren.',
        accommodation: 'Lodge oder Zeltcamp in der Serengeti',
        meals: 'Frühstück, Mittagessen und Abendessen',
      },
      {
        day: 'Tag 3',
        title: 'Ganztägige Serengeti-Safari',
        text: 'Verbringen Sie den gesamten Tag mit der Erkundung des Serengeti-Nationalparks. Ihr Guide wählt je nach Jahreszeit und aktuellen Tierbewegungen die besten Gebiete aus. Genießen Sie Pirschfahrten am Morgen und Nachmittag sowie ein Picknick im Park.',
        accommodation: 'Lodge oder Zeltcamp in der Serengeti',
        meals: 'Frühstück, Mittagessen und Abendessen',
      },
      {
        day: 'Tag 4',
        title: 'Serengeti zum Ngorongoro-Schutzgebiet',
        text: 'Unternehmen Sie am frühen Morgen eine Pirschfahrt in der Serengeti, bevor Sie zum Ngorongoro-Schutzgebiet weiterreisen. Beobachten Sie unterwegs weiterhin Wildtiere und erreichen Sie Ihre Lodge oder Ihr Camp nahe dem Kraterrand oder in Karatu.',
        accommodation:
          'Lodge oder Zeltcamp nahe Ngorongoro oder Karatu',
        meals: 'Frühstück, Mittagessen und Abendessen',
      },
      {
        day: 'Tag 5',
        title: 'Ngorongoro-Krater-Safari und Rückkehr nach Arusha',
        text: 'Nach dem Frühstück fahren Sie in den Ngorongoro-Krater hinab und unternehmen eine Pirschfahrt. Halten Sie Ausschau nach Löwen, Elefanten, Büffeln, Zebras, Gnus, Flusspferden, Hyänen und mit etwas Glück nach Spitzmaulnashörnern. Nach einem Picknick am Nilpferd-Pool verlassen Sie den Krater und fahren zurück nach Arusha.',
        accommodation:
          'Keine Unterkunft nach Ende der Safari enthalten',
        meals: 'Frühstück und Mittagessen',
      },
    ],

    included: [
      'Abholung und Rücktransfer in Arusha',
      'Privates 4x4-Safarifahrzeug mit Aufstelldach',
      'Professioneller englischsprachiger Safari-Guide',
      'Eintrittsgebühren für den Tarangire-Nationalpark',
      'Eintrittsgebühren für den Serengeti-Nationalpark',
      'Gebühren für das Ngorongoro-Schutzgebiet und den Krater',
      'Vier Übernachtungen in Lodge oder Zeltcamp',
      'Mahlzeiten gemäß Reiseverlauf',
      'Trinkwasser während der Safari',
    ],

    excluded: [
      'Internationale und nationale Flüge',
      'Reiseversicherung',
      'Visagebühren',
      'Trinkgelder',
      'Alkoholische und alkoholfreie Getränke',
      'Persönliche Ausgaben',
      'Optionale Aktivitäten, die nicht aufgeführt sind',
    ],

    whatToBring: [
      'Bequeme Safari-Kleidung',
      'Sonnenhut und Sonnencreme',
      'Kamera oder Fernglas',
      'Warme Jacke für kühle Morgenstunden',
      'Persönliche Medikamente',
      'Kleine Tagestasche',
    ],

    priceRows: [
      { people: '1 Person', price: 'US$3.550' },
      { people: '2 Personen', price: 'US$2.280 pro Person' },
      { people: '3 Personen', price: 'US$1.920 pro Person' },
      { people: '4 Personen', price: 'US$1.710 pro Person' },
      { people: '5–6 Personen', price: 'US$1.520 pro Person' },
    ],
  },

  fr: {
    heroTitle: 'Safari de 5 jours – Northern Circuit',
    heroSubtitle:
      'Découvrez Tarangire, les légendaires plaines du Serengeti et le riche cratère du Ngorongoro.',

    overviewLabel: 'APERÇU DU SAFARI',
    overviewTitle: 'Cinq jours de nature et d’aventure',

    paragraph1:
      'Ce safari privé de cinq jours vous permet d’explorer davantage le célèbre circuit nord de la Tanzanie. Découvrez le parc national de Tarangire, le parc national du Serengeti et la zone de conservation du Ngorongoro.',

    paragraph2:
      'L’itinéraire combine les paysages peuplés d’éléphants, les plaines classiques du Serengeti, l’observation des prédateurs et l’extraordinaire concentration d’animaux du cratère du Ngorongoro.',

    itineraryTitle: 'Itinéraire jour par jour',
    accommodation: 'Hébergement :',
    meals: 'Repas :',

    safariDetails: 'Détails du safari',
    duration: 'Durée :',
    durationValue: '5 jours / 4 nuits',
    departure: 'Départ :',
    departureValue: 'Arusha',
    destinations: 'Destinations :',
    destinationsValue: 'Tarangire, Serengeti & Ngorongoro',
    tourType: 'Type de safari :',
    tourTypeValue: 'Safari privé',
    accommodationDetails: 'Hébergement :',
    accommodationValue: 'Lodge / camp de tentes',
    bestTime: 'Meilleure période :',
    bestTimeValue: 'Toute l’année',

    startingFrom: 'À partir de',
    perPerson: 'par personne',
    priceNote:
      'Basé sur 5–6 personnes partageant. Le prix final dépend de la taille du groupe, du niveau d’hébergement, de la saison et des dates de voyage.',

    requestQuote: 'Demander un devis',

    pricesLabel: 'PRIX DU SAFARI PRIVÉ',
    pricesTitle: 'Prix selon la taille du groupe',
    pricesText:
      'Ces prix sont des tarifs indicatifs de départ. Le devis final peut varier selon l’hébergement, la saison, les frais de parc et les disponibilités.',
    groupSize: 'Taille du groupe',
    startingPrice: 'Prix de départ',

    includedTitle: 'Inclus',
    excludedTitle: 'Non inclus',

    bringLabel: 'À EMPORTER',
    bringTitle: 'Préparez votre safari',

    readyTitle: 'Prêt pour votre safari de cinq jours ?',
    readyText:
      'Contactez Kilimanjaro Travel pour connaître les disponibilités, les options d’hébergement et obtenir un devis personnalisé selon la taille de votre groupe et vos dates de voyage.',

    whatsapp: 'Discuter sur WhatsApp',

    itinerary: [
      {
        day: 'Jour 1',
        title: 'Arusha – Parc national de Tarangire',
        text: 'Prise en charge à votre hôtel à Arusha et départ vers le parc national de Tarangire. Profitez d’une journée complète de safari au milieu des anciens baobabs à la recherche d’éléphants, lions, girafes, zèbres, gnous et de nombreuses espèces d’oiseaux. Déjeuner pique-nique dans le parc avant de rejoindre votre lodge ou camp.',
        accommodation:
          'Lodge ou camp de tentes près de Karatu ou du lac Manyara',
        meals: 'Déjeuner et dîner',
      },
      {
        day: 'Jour 2',
        title: 'Région de Tarangire – Parc national du Serengeti',
        text: 'Après le petit-déjeuner, traversez les magnifiques hauts plateaux du Ngorongoro en direction du Serengeti. Entrez dans le parc et profitez d’un safari l’après-midi à travers les célèbres plaines à la recherche de prédateurs, de grands troupeaux et d’autres animaux.',
        accommodation: 'Lodge ou camp de tentes au Serengeti',
        meals: 'Petit-déjeuner, déjeuner et dîner',
      },
      {
        day: 'Jour 3',
        title: 'Safari d’une journée complète au Serengeti',
        text: 'Passez la journée à explorer le parc national du Serengeti. Votre guide choisira les meilleures zones d’observation selon la saison et les mouvements récents des animaux. Profitez de safaris le matin et l’après-midi avec déjeuner pique-nique dans le parc.',
        accommodation: 'Lodge ou camp de tentes au Serengeti',
        meals: 'Petit-déjeuner, déjeuner et dîner',
      },
      {
        day: 'Jour 4',
        title: 'Serengeti – Zone de conservation du Ngorongoro',
        text: 'Profitez d’un safari matinal dans le Serengeti avant de vous diriger vers la zone de conservation du Ngorongoro. Continuez l’observation de la faune en chemin et rejoignez votre lodge ou camp près du bord du cratère ou à Karatu.',
        accommodation:
          'Lodge ou camp près du Ngorongoro ou de Karatu',
        meals: 'Petit-déjeuner, déjeuner et dîner',
      },
      {
        day: 'Jour 5',
        title: 'Safari dans le cratère du Ngorongoro et retour à Arusha',
        text: 'Après le petit-déjeuner, descendez dans le cratère du Ngorongoro pour un safari. Recherchez lions, éléphants, buffles, zèbres, gnous, hippopotames, hyènes et, avec de la chance, rhinocéros noirs. Déjeuner pique-nique près de la mare aux hippopotames avant de remonter et de retourner à Arusha.',
        accommodation:
          'Aucun hébergement inclus après le safari',
        meals: 'Petit-déjeuner et déjeuner',
      },
    ],

    included: [
      'Prise en charge et retour à l’hôtel à Arusha',
      'Véhicule safari privé 4x4 avec toit ouvrant',
      'Guide safari professionnel anglophone',
      'Frais d’entrée du parc national de Tarangire',
      'Frais d’entrée du parc national du Serengeti',
      'Frais de la zone de conservation et du cratère du Ngorongoro',
      'Quatre nuits en lodge ou camp de tentes',
      'Repas selon l’itinéraire',
      'Eau potable pendant le safari',
    ],

    excluded: [
      'Vols internationaux et domestiques',
      'Assurance voyage',
      'Frais de visa',
      'Pourboires',
      'Boissons alcoolisées et boissons gazeuses',
      'Dépenses personnelles',
      'Activités optionnelles non mentionnées',
    ],

    whatToBring: [
      'Vêtements de safari confortables',
      'Chapeau et crème solaire',
      'Appareil photo ou jumelles',
      'Veste chaude pour les matinées fraîches',
      'Médicaments personnels',
      'Petit sac à dos',
    ],

    priceRows: [
      { people: '1 personne', price: '3 550 $US' },
      { people: '2 personnes', price: '2 280 $US par personne' },
      { people: '3 personnes', price: '1 920 $US par personne' },
      { people: '4 personnes', price: '1 710 $US par personne' },
      { people: '5–6 personnes', price: '1 520 $US par personne' },
    ],
  },

  es: {
    heroTitle: 'Safari de 5 días por el Circuito Norte',
    heroSubtitle:
      'Descubre Tarangire, las legendarias llanuras del Serengeti y el espectacular cráter del Ngorongoro.',

    overviewLabel: 'RESUMEN DEL SAFARI',
    overviewTitle: 'Cinco días de naturaleza y aventura',

    paragraph1:
      'Este safari privado de cinco días ofrece más tiempo para explorar el famoso Circuito Norte de Tanzania. Recorre el Parque Nacional de Tarangire, el Parque Nacional del Serengeti y el Área de Conservación de Ngorongoro.',

    paragraph2:
      'El itinerario combina paisajes llenos de elefantes, las clásicas llanuras del Serengeti, avistamientos de depredadores y la extraordinaria concentración de fauna del cráter del Ngorongoro.',

    itineraryTitle: 'Itinerario día a día',
    accommodation: 'Alojamiento:',
    meals: 'Comidas:',

    safariDetails: 'Detalles del safari',
    duration: 'Duración:',
    durationValue: '5 días / 4 noches',
    departure: 'Salida:',
    departureValue: 'Arusha',
    destinations: 'Destinos:',
    destinationsValue: 'Tarangire, Serengeti y Ngorongoro',
    tourType: 'Tipo de safari:',
    tourTypeValue: 'Safari privado',
    accommodationDetails: 'Alojamiento:',
    accommodationValue: 'Lodge / Campamento de tiendas',
    bestTime: 'Mejor época:',
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
    excludedTitle: 'Qué no está incluido',

    bringLabel: 'QUÉ LLEVAR',
    bringTitle: 'Prepárate para tu safari',

    readyTitle: '¿Listo para tu safari de cinco días?',
    readyText:
      'Contacta con Kilimanjaro Travel para consultar disponibilidad, opciones de alojamiento y recibir un presupuesto personalizado según el tamaño de tu grupo y tus fechas de viaje.',

    whatsapp: 'Chatear por WhatsApp',

    itinerary: [
      {
        day: 'Día 1',
        title: 'Arusha al Parque Nacional de Tarangire',
        text: 'Recogida en tu hotel de Arusha y traslado al Parque Nacional de Tarangire. Disfruta de un safari de día completo entre antiguos baobabs mientras buscas elefantes, leones, jirafas, cebras, ñus y numerosas especies de aves. Almuerzo tipo picnic dentro del parque antes de continuar hacia tu lodge o campamento.',
        accommodation:
          'Lodge o campamento cerca de Karatu o el lago Manyara',
        meals: 'Almuerzo y cena',
      },
      {
        day: 'Día 2',
        title: 'Zona de Tarangire al Parque Nacional del Serengeti',
        text: 'Después del desayuno, atraviesa las hermosas tierras altas de Ngorongoro hacia el Parque Nacional del Serengeti. Entra en el parque y disfruta de un safari por la tarde a través de las famosas llanuras buscando depredadores, grandes manadas de herbívoros y otros animales.',
        accommodation: 'Lodge o campamento en el Serengeti',
        meals: 'Desayuno, almuerzo y cena',
      },
      {
        day: 'Día 3',
        title: 'Safari de día completo en el Serengeti',
        text: 'Pasa todo el día explorando el Parque Nacional del Serengeti. Tu guía seleccionará las mejores zonas según la temporada y los movimientos recientes de los animales. Disfruta de safaris por la mañana y por la tarde con almuerzo tipo picnic dentro del parque.',
        accommodation: 'Lodge o campamento en el Serengeti',
        meals: 'Desayuno, almuerzo y cena',
      },
      {
        day: 'Día 4',
        title: 'Serengeti al Área de Conservación de Ngorongoro',
        text: 'Disfruta de un safari temprano por la mañana en el Serengeti antes de viajar hacia el Área de Conservación de Ngorongoro. Continúa observando fauna durante el trayecto y llega a tu lodge o campamento cerca del borde del cráter o en Karatu.',
        accommodation:
          'Lodge o campamento cerca de Ngorongoro o Karatu',
        meals: 'Desayuno, almuerzo y cena',
      },
      {
        day: 'Día 5',
        title: 'Safari en el cráter de Ngorongoro y regreso a Arusha',
        text: 'Después del desayuno, desciende al cráter de Ngorongoro para realizar un safari. Busca leones, elefantes, búfalos, cebras, ñus, hipopótamos, hienas y, con suerte, rinocerontes negros. Disfruta de un almuerzo tipo picnic cerca de la zona de hipopótamos antes de ascender y regresar a Arusha.',
        accommodation:
          'No se incluye alojamiento después del safari',
        meals: 'Desayuno y almuerzo',
      },
    ],

    included: [
      'Recogida y regreso al hotel en Arusha',
      'Vehículo safari privado 4x4 con techo elevable',
      'Guía profesional de safari de habla inglesa',
      'Tasas de entrada al Parque Nacional de Tarangire',
      'Tasas de entrada al Parque Nacional del Serengeti',
      'Tasas del Área de Conservación y cráter de Ngorongoro',
      'Cuatro noches en lodge o campamento de tiendas',
      'Comidas según el itinerario',
      'Agua potable durante el safari',
    ],

    excluded: [
      'Vuelos internacionales y domésticos',
      'Seguro de viaje',
      'Tasas de visado',
      'Propinas',
      'Bebidas alcohólicas y refrescos',
      'Gastos personales',
      'Actividades opcionales no indicadas en el itinerario',
    ],

    whatToBring: [
      'Ropa cómoda para safari',
      'Sombrero y protector solar',
      'Cámara o prismáticos',
      'Chaqueta abrigada para las mañanas frescas',
      'Medicamentos personales',
      'Bolsa pequeña para el día',
    ],

    priceRows: [
      { people: '1 persona', price: 'US$3.550' },
      { people: '2 personas', price: 'US$2.280 por persona' },
      { people: '3 personas', price: 'US$1.920 por persona' },
      { people: '4 personas', price: 'US$1.710 por persona' },
      { people: '5–6 personas', price: 'US$1.520 por persona' },
    ],
  },
};

export default function FiveDaysNorthernCircuitPage() {
  const { language } = useLanguage();

  const t =
    translations[language as keyof typeof translations] ??
    translations.en;

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/5days-two.jpg"
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
                {t.itinerary.map((item) => (
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
                          {t.accommodation}
                        </strong>{' '}
                        {item.accommodation}
                      </p>

                      <p>
                        <strong className="text-forest">
                          {t.meals}
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
                {t.safariDetails}
              </h2>

              <div className="mt-6 space-y-4">
                <p>
                  <strong>{t.duration}</strong>{' '}
                  {t.durationValue}
                </p>

                <p>
                  <strong>{t.departure}</strong>{' '}
                  {t.departureValue}
                </p>

                <p>
                  <strong>{t.destinations}</strong>{' '}
                  {t.destinationsValue}
                </p>

                <p>
                  <strong>{t.tourType}</strong>{' '}
                  {t.tourTypeValue}
                </p>

                <p>
                  <strong>{t.accommodationDetails}</strong>{' '}
                  {t.accommodationValue}
                </p>

                <p>
                  <strong>{t.bestTime}</strong>{' '}
                  {t.bestTimeValue}
                </p>
              </div>

              <div className="mt-8 rounded-2xl bg-gold p-5 text-center">
                <p className="text-sm font-bold uppercase tracking-wide">
                  {t.startingFrom}
                </p>

                <p className="mt-2 text-4xl font-bold">
                  {language === 'de'
                    ? 'US$1.520'
                    : language === 'fr'
                    ? '1 520 $US'
                    : language === 'es'
                    ? 'US$1.520'
                    : 'US$1,520'}
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
                className="mt-8 inline-block w-full rounded-full bg-gold px-6 py-3 text-center font-bold text-white transition hover:opacity-90"
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
                src="/images/5days-one.jpg"
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