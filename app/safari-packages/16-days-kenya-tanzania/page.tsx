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
    heroTitle: '16 Days Kenya & Tanzania Safari',
    heroSubtitle:
      'Discover the best of East Africa with an unforgettable private safari through Kenya and Tanzania, from Amboseli and Maasai Mara to Serengeti, Ngorongoro and Tarangire.',

    overviewLabel: 'KENYA & TANZANIA SAFARI',
    overviewTitle: 'The Ultimate East Africa Safari',

    paragraph1:
      "Experience two of Africa's most famous safari destinations on one unforgettable journey. Explore Amboseli and Maasai Mara in Kenya before continuing to Tanzania's legendary Serengeti, Ngorongoro and Tarangire.",

    paragraph2:
      'This private sixteen-day safari gives you enough time to enjoy the major wildlife areas without rushing from one destination to another. Enjoy full game-drive days, comfortable accommodation and professional local guides throughout your journey.',

    itineraryTitle: 'Day-by-Day Itinerary',

    accommodation: 'Accommodation',
    meals: 'Meals',

    day1: 'Day 1',
    day1Title: 'Arrival in Nairobi, Kenya',
    day1Text:
      'Arrive in Nairobi and meet your safari representative. Transfer to your hotel and enjoy a relaxed evening before beginning your Kenya and Tanzania safari adventure.',
    day1Accommodation: 'Hotel in Nairobi',
    day1Meals: 'Dinner',

    day2: 'Day 2',
    day2Title: 'Nairobi to Amboseli National Park',
    day2Text:
      'After breakfast, drive to Amboseli National Park. Enjoy an afternoon game drive with spectacular views of Mount Kilimanjaro. Amboseli is famous for its large elephant herds and beautiful open landscapes.',
    day2Accommodation: 'Lodge or tented camp in Amboseli',
    day2Meals: 'Breakfast, Lunch and Dinner',

    day3: 'Day 3',
    day3Title: 'Full-Day Amboseli National Park Safari',
    day3Text:
      'Spend the full day exploring Amboseli. Search for elephants, lions, giraffes, zebras, buffaloes, hippos and many species of birds while enjoying views of Mount Kilimanjaro when weather conditions are clear.',
    day3Accommodation: 'Lodge or tented camp in Amboseli',
    day3Meals: 'Breakfast, Lunch and Dinner',

    day4: 'Day 4',
    day4Title: 'Amboseli to Lake Naivasha',
    day4Text:
      'After breakfast, travel toward the Great Rift Valley and Lake Naivasha. Enjoy the changing landscapes of Kenya and relax at your lodge after the journey.',
    day4Accommodation: 'Lodge near Lake Naivasha',
    day4Meals: 'Breakfast, Lunch and Dinner',

    day5: 'Day 5',
    day5Title: 'Lake Naivasha to Maasai Mara',
    day5Text:
      'Continue to the famous Maasai Mara National Reserve. Arrive in time for an afternoon game drive across the rolling grasslands, searching for lions, cheetahs, elephants, giraffes, zebras and wildebeest.',
    day5Accommodation: 'Lodge or tented camp in Maasai Mara',
    day5Meals: 'Breakfast, Lunch and Dinner',

    day6: 'Day 6',
    day6Title: 'Full-Day Maasai Mara Safari',
    day6Text:
      'Enjoy a full day exploring Maasai Mara. Your guide will follow current wildlife activity and choose the best areas for game viewing. Look for the Big Five and large herds of plains animals.',
    day6Accommodation: 'Lodge or tented camp in Maasai Mara',
    day6Meals: 'Breakfast, Lunch and Dinner',

    day7: 'Day 7',
    day7Title: 'Second Full Day in Maasai Mara',
    day7Text:
      'Spend another full day in the Mara with morning and afternoon game drives. This extra time allows you to explore different areas of the reserve and enjoy excellent wildlife photography opportunities.',
    day7Accommodation: 'Lodge or tented camp in Maasai Mara',
    day7Meals: 'Breakfast, Lunch and Dinner',

    day8: 'Day 8',
    day8Title: 'Maasai Mara to Serengeti, Tanzania',
    day8Text:
      'After breakfast, transfer to the airstrip for your scheduled flight connection toward Tanzania. Continue to the Serengeti area and enjoy an afternoon game drive depending on your arrival time.',
    day8Accommodation: 'Lodge or tented camp in Serengeti',
    day8Meals: 'Breakfast, Lunch and Dinner',

    day9: 'Day 9',
    day9Title: 'Full-Day Serengeti National Park Safari',
    day9Text:
      'Spend the full day exploring the Serengeti plains. Search for lions, cheetahs, leopards, elephants, giraffes, zebras, wildebeest and other wildlife while your guide follows the latest animal movements.',
    day9Accommodation: 'Lodge or tented camp in Serengeti',
    day9Meals: 'Breakfast, Lunch and Dinner',

    day10: 'Day 10',
    day10Title: 'Second Full Day in Serengeti',
    day10Text:
      'Enjoy another full day of game viewing in Serengeti. Explore different wildlife areas and take advantage of the extra time to experience the huge variety of landscapes and animals found throughout the park.',
    day10Accommodation: 'Lodge or tented camp in Serengeti',
    day10Meals: 'Breakfast, Lunch and Dinner',

    day11: 'Day 11',
    day11Title: 'Third Serengeti Safari Day',
    day11Text:
      'Enjoy another memorable safari day in Serengeti. Depending on the season, your guide may focus on areas known for predators, large herbivore herds or other recent wildlife activity.',
    day11Accommodation: 'Lodge or tented camp in Serengeti',
    day11Meals: 'Breakfast, Lunch and Dinner',

    day12: 'Day 12',
    day12Title: 'Serengeti to Ngorongoro Conservation Area',
    day12Text:
      'Enjoy a morning game drive before travelling toward the Ngorongoro Conservation Area. Continue through the scenic highlands and arrive at your lodge near the crater rim or Karatu.',
    day12Accommodation: 'Lodge or tented camp near Ngorongoro or Karatu',
    day12Meals: 'Breakfast, Lunch and Dinner',

    day13: 'Day 13',
    day13Title: 'Ngorongoro Crater Safari',
    day13Text:
      'Descend into the Ngorongoro Crater for a full or extended morning game drive. Search for lions, elephants, buffaloes, zebras, wildebeest, hippos, hyenas and, with luck, black rhinos.',
    day13Accommodation: 'Lodge or tented camp near Karatu',
    day13Meals: 'Breakfast, Lunch and Dinner',

    day14: 'Day 14',
    day14Title: 'Ngorongoro to Tarangire National Park',
    day14Text:
      'After breakfast, travel toward Tarangire National Park. Enjoy an afternoon game drive through landscapes famous for giant baobab trees, elephants and large herds of wildlife.',
    day14Accommodation: 'Lodge or tented camp near Tarangire',
    day14Meals: 'Breakfast, Lunch and Dinner',

    day15: 'Day 15',
    day15Title: 'Full-Day Tarangire National Park Safari',
    day15Text:
      'Spend a full day exploring Tarangire. Follow the Tarangire River and surrounding habitats while searching for elephants, lions, giraffes, zebras, wildebeest, buffaloes and abundant birdlife.',
    day15Accommodation: 'Lodge or tented camp near Tarangire',
    day15Meals: 'Breakfast, Lunch and Dinner',

    day16: 'Day 16',
    day16Title: 'Tarangire to Arusha',
    day16Text:
      'Enjoy breakfast and a relaxed morning before your transfer to Arusha. Depending on your onward flight schedule, there may be time for a short activity or lunch before the safari officially ends.',
    day16Accommodation: 'No accommodation included after the safari',
    day16Meals: 'Breakfast and Lunch',

    detailsTitle: 'Safari Details',

    duration: 'Duration',
    durationValue: '16 Days / 15 Nights',

    start: 'Start',
    startValue: 'Nairobi, Kenya',

    end: 'End',
    endValue: 'Arusha, Tanzania',

    countries: 'Countries',
    countriesValue: 'Kenya & Tanzania',

    destinations: 'Destinations',
    destinationsValue:
      'Amboseli, Lake Naivasha, Maasai Mara, Serengeti, Ngorongoro & Tarangire',

    tourType: 'Tour Type',
    tourTypeValue: 'Private Safari',

    accommodationLabel: 'Accommodation',
    accommodationValue: 'Lodge / Tented Camp',

    bestTime: 'Best Time',
    bestTimeValue: 'All Year',

    priceLabel: 'KENYA & TANZANIA SAFARI PRICES',
    priceTitle: 'Price by Group Size',

    priceText:
      'Prices are starting estimates and may vary depending on accommodation level, season, travel dates, flights and group size.',

    groupSize: 'Group Size',
    startingPrice: 'Starting Price',

    startingFrom: 'Starting From',
    perPerson: 'per person',
    priceNote:
      'Based on 5–6 people sharing. Final price depends on group size, accommodation level, season and travel dates.',

    includedTitle: 'What Is Included',

    included: [
      'Private 4x4 safari vehicle with pop-up roof',
      'Professional English-speaking safari guide',
      'Airport and hotel transfers in Nairobi',
      'Arusha arrival and departure transfers',
      'Accommodation in lodges or tented camps',
      'Meals as listed in the itinerary',
      'Amboseli National Park entrance fees',
      'Maasai Mara National Reserve fees',
      'Serengeti National Park entrance fees',
      'Ngorongoro Conservation Area and crater fees',
      'Tarangire National Park entrance fees',
      'Drinking water during safari game drives',
      'Flight connection from Maasai Mara toward Tanzania',
      'Assistance with Kenya and Tanzania border and travel arrangements',
    ],

    excludedTitle: 'What Is Excluded',

    excluded: [
      'International flights',
      'Kenya and Tanzania visa fees',
      'Travel insurance',
      'Tips and gratuities',
      'Alcoholic and premium drinks',
      'Personal expenses and souvenirs',
      'Laundry services',
      'Optional activities not listed in the itinerary',
      'Additional hotel nights before or after the safari',
    ],

    bringLabel: 'WHAT TO BRING',
    bringTitle: 'Prepare for Your Safari',

    whatToBring: [
      'Comfortable safari clothing',
      'Lightweight long-sleeved shirts',
      'Warm jacket for cool mornings',
      'Sun hat and sunscreen',
      'Comfortable walking shoes',
      'Camera or binoculars',
      'Personal medication',
      'Travel documents and passport',
      'Small day bag',
      'Soft-sided luggage for domestic safari flights',
    ],

    readyLabel: 'KENYA + TANZANIA',
    readyTitle: 'Ready for Your East Africa Safari?',

    readyText:
      'Experience the incredible wildlife of Kenya and Tanzania on one unforgettable private safari. Contact Kilimanjaro Travel for availability, accommodation options and a tailor-made quotation.',

    requestQuote: 'Request a Quote',
    whatsapp: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: '16 Tage Kenia & Tansania Safari',
    heroSubtitle:
      'Entdecken Sie das Beste Ostafrikas auf einer unvergesslichen privaten Safari durch Kenia und Tansania – von Amboseli und Maasai Mara bis Serengeti, Ngorongoro und Tarangire.',

    overviewLabel: 'KENIA & TANSANIA SAFARI',
    overviewTitle: 'Die ultimative Safari durch Ostafrika',

    paragraph1:
      'Erleben Sie zwei der berühmtesten Safarigebiete Afrikas auf einer unvergesslichen Reise. Erkunden Sie Amboseli und Maasai Mara in Kenia, bevor Sie zu Tansanias legendärer Serengeti, dem Ngorongoro und Tarangire weiterreisen.',

    paragraph2:
      'Diese private 16-tägige Safari bietet ausreichend Zeit, die wichtigsten Wildtiergebiete ohne Hektik zu erkunden. Genießen Sie ganze Pirschfahrttage, komfortable Unterkünfte und professionelle lokale Guides während der gesamten Reise.',

    itineraryTitle: 'Tagesprogramm',

    accommodation: 'Unterkunft',
    meals: 'Mahlzeiten',

    day1: 'Tag 1',
    day1Title: 'Ankunft in Nairobi, Kenia',
    day1Text:
      'Ankunft in Nairobi und Treffen mit Ihrem Safarivertreter. Transfer zu Ihrem Hotel und ein entspannter Abend, bevor Ihr Safari-Abenteuer in Kenia und Tansania beginnt.',
    day1Accommodation: 'Hotel in Nairobi',
    day1Meals: 'Abendessen',

    day2: 'Tag 2',
    day2Title: 'Nairobi zum Amboseli-Nationalpark',
    day2Text:
      'Nach dem Frühstück fahren Sie zum Amboseli-Nationalpark. Genießen Sie am Nachmittag eine Pirschfahrt mit spektakulären Ausblicken auf den Kilimandscharo. Amboseli ist für seine großen Elefantenherden und offenen Landschaften bekannt.',
    day2Accommodation: 'Lodge oder Zeltcamp in Amboseli',
    day2Meals: 'Frühstück, Mittagessen und Abendessen',

    day3: 'Tag 3',
    day3Title: 'Ganztägige Safari im Amboseli-Nationalpark',
    day3Text:
      'Verbringen Sie den ganzen Tag mit der Erkundung von Amboseli. Halten Sie Ausschau nach Elefanten, Löwen, Giraffen, Zebras, Büffeln, Flusspferden und zahlreichen Vogelarten. Bei klarem Wetter genießen Sie den Blick auf den Kilimandscharo.',
    day3Accommodation: 'Lodge oder Zeltcamp in Amboseli',
    day3Meals: 'Frühstück, Mittagessen und Abendessen',

    day4: 'Tag 4',
    day4Title: 'Amboseli zum Lake Naivasha',
    day4Text:
      'Nach dem Frühstück reisen Sie in Richtung Great Rift Valley und Lake Naivasha. Genießen Sie die wechselnden Landschaften Kenias und entspannen Sie nach der Fahrt in Ihrer Lodge.',
    day4Accommodation: 'Lodge am Lake Naivasha',
    day4Meals: 'Frühstück, Mittagessen und Abendessen',

    day5: 'Tag 5',
    day5Title: 'Lake Naivasha zur Maasai Mara',
    day5Text:
      'Weiterfahrt zum berühmten Maasai-Mara-Nationalreservat. Ankunft rechtzeitig für eine Pirschfahrt am Nachmittag durch die sanften Graslandschaften auf der Suche nach Löwen, Geparden, Elefanten, Giraffen, Zebras und Gnus.',
    day5Accommodation: 'Lodge oder Zeltcamp in der Maasai Mara',
    day5Meals: 'Frühstück, Mittagessen und Abendessen',

    day6: 'Tag 6',
    day6Title: 'Ganztägige Safari in der Maasai Mara',
    day6Text:
      'Genießen Sie einen ganzen Tag in der Maasai Mara. Ihr Guide verfolgt die aktuellen Tierbewegungen und wählt die besten Gebiete zur Wildbeobachtung. Halten Sie Ausschau nach den Big Five und großen Herden.',
    day6Accommodation: 'Lodge oder Zeltcamp in der Maasai Mara',
    day6Meals: 'Frühstück, Mittagessen und Abendessen',

    day7: 'Tag 7',
    day7Title: 'Zweiter ganzer Tag in der Maasai Mara',
    day7Text:
      'Verbringen Sie einen weiteren ganzen Tag in der Mara mit morgendlichen und nachmittäglichen Pirschfahrten. Die zusätzliche Zeit ermöglicht es Ihnen, verschiedene Bereiche des Reservats zu erkunden und hervorragende Möglichkeiten für Tierfotografie zu genießen.',
    day7Accommodation: 'Lodge oder Zeltcamp in der Maasai Mara',
    day7Meals: 'Frühstück, Mittagessen und Abendessen',

    day8: 'Tag 8',
    day8Title: 'Maasai Mara zur Serengeti, Tansania',
    day8Text:
      'Nach dem Frühstück Transfer zum Flugplatz für Ihre geplante Flugverbindung nach Tansania. Weiterreise in das Serengeti-Gebiet und je nach Ankunftszeit eine Pirschfahrt am Nachmittag.',
    day8Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day8Meals: 'Frühstück, Mittagessen und Abendessen',

    day9: 'Tag 9',
    day9Title: 'Ganztägige Safari im Serengeti-Nationalpark',
    day9Text:
      'Verbringen Sie den ganzen Tag auf den Serengeti-Ebenen. Suchen Sie nach Löwen, Geparden, Leoparden, Elefanten, Giraffen, Zebras, Gnus und anderen Wildtieren, während Ihr Guide die aktuellen Tierbewegungen verfolgt.',
    day9Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day9Meals: 'Frühstück, Mittagessen und Abendessen',

    day10: 'Tag 10',
    day10Title: 'Zweiter ganzer Tag in der Serengeti',
    day10Text:
      'Genießen Sie einen weiteren ganzen Tag zur Wildbeobachtung in der Serengeti. Erkunden Sie verschiedene Wildtiergebiete und nutzen Sie die zusätzliche Zeit, um die große Vielfalt an Landschaften und Tieren zu erleben.',
    day10Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day10Meals: 'Frühstück, Mittagessen und Abendessen',

    day11: 'Tag 11',
    day11Title: 'Dritter Serengeti-Safari-Tag',
    day11Text:
      'Genießen Sie einen weiteren unvergesslichen Safaritag in der Serengeti. Je nach Saison kann sich Ihr Guide auf Gebiete mit Raubtieren, großen Pflanzenfresserherden oder aktueller Tieraktivität konzentrieren.',
    day11Accommodation: 'Lodge oder Zeltcamp in der Serengeti',
    day11Meals: 'Frühstück, Mittagessen und Abendessen',

    day12: 'Tag 12',
    day12Title: 'Serengeti zum Ngorongoro-Schutzgebiet',
    day12Text:
      'Genießen Sie eine morgendliche Pirschfahrt, bevor Sie zum Ngorongoro-Schutzgebiet weiterreisen. Fahren Sie durch die malerische Hochlandlandschaft und erreichen Sie Ihre Lodge am Kraterrand oder in Karatu.',
    day12Accommodation: 'Lodge oder Zeltcamp bei Ngorongoro oder Karatu',
    day12Meals: 'Frühstück, Mittagessen und Abendessen',

    day13: 'Tag 13',
    day13Title: 'Safari im Ngorongoro-Krater',
    day13Text:
      'Fahren Sie in den Ngorongoro-Krater hinab und genießen Sie eine ausgedehnte morgendliche Pirschfahrt. Suchen Sie nach Löwen, Elefanten, Büffeln, Zebras, Gnus, Flusspferden, Hyänen und mit etwas Glück Spitzmaulnashörnern.',
    day13Accommodation: 'Lodge oder Zeltcamp bei Karatu',
    day13Meals: 'Frühstück, Mittagessen und Abendessen',

    day14: 'Tag 14',
    day14Title: 'Ngorongoro zum Tarangire-Nationalpark',
    day14Text:
      'Nach dem Frühstück reisen Sie zum Tarangire-Nationalpark. Genießen Sie am Nachmittag eine Pirschfahrt durch Landschaften, die für riesige Baobab-Bäume, Elefanten und große Tierherden bekannt sind.',
    day14Accommodation: 'Lodge oder Zeltcamp bei Tarangire',
    day14Meals: 'Frühstück, Mittagessen und Abendessen',

    day15: 'Tag 15',
    day15Title: 'Ganztägige Safari im Tarangire-Nationalpark',
    day15Text:
      'Verbringen Sie einen ganzen Tag in Tarangire. Folgen Sie dem Tarangire-Fluss und den umliegenden Lebensräumen auf der Suche nach Elefanten, Löwen, Giraffen, Zebras, Gnus, Büffeln und zahlreichen Vogelarten.',
    day15Accommodation: 'Lodge oder Zeltcamp bei Tarangire',
    day15Meals: 'Frühstück, Mittagessen und Abendessen',

    day16: 'Tag 16',
    day16Title: 'Tarangire nach Arusha',
    day16Text:
      'Genießen Sie Ihr Frühstück und einen entspannten Vormittag vor dem Transfer nach Arusha. Je nach Flugplan bleibt möglicherweise Zeit für eine kurze Aktivität oder ein Mittagessen, bevor die Safari endet.',
    day16Accommodation: 'Keine Unterkunft nach der Safari inklusive',
    day16Meals: 'Frühstück und Mittagessen',

    detailsTitle: 'Safari-Details',

    duration: 'Dauer',
    durationValue: '16 Tage / 15 Nächte',

    start: 'Start',
    startValue: 'Nairobi, Kenia',

    end: 'Ende',
    endValue: 'Arusha, Tansania',

    countries: 'Länder',
    countriesValue: 'Kenia & Tansania',

    destinations: 'Reiseziele',
    destinationsValue:
      'Amboseli, Lake Naivasha, Maasai Mara, Serengeti, Ngorongoro & Tarangire',

    tourType: 'Reiseart',
    tourTypeValue: 'Private Safari',

    accommodationLabel: 'Unterkunft',
    accommodationValue: 'Lodge / Zeltcamp',

    bestTime: 'Beste Reisezeit',
    bestTimeValue: 'Ganzjährig',

    priceLabel: 'KENIA & TANSANIA SAFARI-PREISE',
    priceTitle: 'Preis nach Gruppengröße',

    priceText:
      'Die Preise sind Richtwerte und können je nach Unterkunftskategorie, Saison, Reisedaten, Flügen und Gruppengröße variieren.',

    groupSize: 'Gruppengröße',
    startingPrice: 'Startpreis',

    startingFrom: 'Ab',
    perPerson: 'pro Person',
    priceNote:
      'Basierend auf 5–6 gemeinsam reisenden Personen. Der endgültige Preis hängt von Gruppengröße, Unterkunft, Saison und Reisedaten ab.',

    includedTitle: 'Im Preis enthalten',

    included: [
      'Privates 4x4-Safarifahrzeug mit Aufstelldach',
      'Professioneller englischsprachiger Safariführer',
      'Flughafen- und Hoteltransfers in Nairobi',
      'Transfers bei Ankunft und Abreise in Arusha',
      'Unterkunft in Lodges oder Zeltcamps',
      'Mahlzeiten gemäß Reiseverlauf',
      'Eintrittsgebühren für den Amboseli-Nationalpark',
      'Gebühren für das Maasai-Mara-Nationalreservat',
      'Eintrittsgebühren für den Serengeti-Nationalpark',
      'Gebühren für das Ngorongoro-Schutzgebiet und den Krater',
      'Eintrittsgebühren für den Tarangire-Nationalpark',
      'Trinkwasser während der Pirschfahrten',
      'Flugverbindung von Maasai Mara nach Tansania',
      'Unterstützung bei Grenz- und Reiseformalitäten zwischen Kenia und Tansania',
    ],

    excludedTitle: 'Nicht enthalten',

    excluded: [
      'Internationale Flüge',
      'Visa für Kenia und Tansania',
      'Reiseversicherung',
      'Trinkgelder',
      'Alkoholische und Premium-Getränke',
      'Persönliche Ausgaben und Souvenirs',
      'Wäscheservice',
      'Nicht aufgeführte optionale Aktivitäten',
      'Zusätzliche Hotelnächte vor oder nach der Safari',
    ],

    bringLabel: 'WAS SIE MITBRINGEN SOLLTEN',
    bringTitle: 'Bereiten Sie sich auf Ihre Safari vor',

    whatToBring: [
      'Bequeme Safari-Kleidung',
      'Leichte langärmlige Hemden',
      'Warme Jacke für kühle Morgen',
      'Sonnenhut und Sonnencreme',
      'Bequeme Wanderschuhe',
      'Kamera oder Fernglas',
      'Persönliche Medikamente',
      'Reisedokumente und Reisepass',
      'Kleine Tagesrucksack',
      'Weiches Gepäck für Inlands-Safariauflüge',
    ],

    readyLabel: 'KENIA + TANSANIA',
    readyTitle: 'Bereit für Ihre Ostafrika-Safari?',

    readyText:
      'Erleben Sie die beeindruckende Tierwelt Kenias und Tansanias auf einer unvergesslichen privaten Safari. Kontaktieren Sie Kilimanjaro Travel für Verfügbarkeit, Unterkunftsmöglichkeiten und ein individuelles Angebot.',

    requestQuote: 'Angebot anfordern',
    whatsapp: 'Über WhatsApp chatten',
  },

  fr: {
    heroTitle: '16 jours Safari Kenya & Tanzanie',
    heroSubtitle:
      'Découvrez le meilleur de l’Afrique de l’Est avec un safari privé inoubliable à travers le Kenya et la Tanzanie, d’Amboseli et du Maasai Mara au Serengeti, Ngorongoro et Tarangire.',

    overviewLabel: 'SAFARI KENYA & TANZANIE',
    overviewTitle: 'Le safari ultime en Afrique de l’Est',

    paragraph1:
      'Découvrez deux des destinations de safari les plus célèbres d’Afrique lors d’un voyage inoubliable. Explorez Amboseli et le Maasai Mara au Kenya avant de poursuivre vers le légendaire Serengeti, le Ngorongoro et Tarangire en Tanzanie.',

    paragraph2:
      'Ce safari privé de seize jours vous permet de profiter des principales zones animalières sans vous presser. Profitez de journées complètes de safari, d’hébergements confortables et de guides locaux professionnels tout au long du voyage.',

    itineraryTitle: 'Itinéraire jour par jour',

    accommodation: 'Hébergement',
    meals: 'Repas',

    day1: 'Jour 1',
    day1Title: 'Arrivée à Nairobi, Kenya',
    day1Text:
      'Arrivée à Nairobi et rencontre avec votre représentant safari. Transfert vers votre hôtel et soirée relaxante avant de commencer votre aventure safari au Kenya et en Tanzanie.',
    day1Accommodation: 'Hôtel à Nairobi',
    day1Meals: 'Dîner',

    day2: 'Jour 2',
    day2Title: 'Nairobi au parc national d’Amboseli',
    day2Text:
      'Après le petit-déjeuner, route vers le parc national d’Amboseli. Profitez d’un safari l’après-midi avec des vues spectaculaires sur le mont Kilimandjaro. Amboseli est célèbre pour ses grands troupeaux d’éléphants et ses paysages ouverts.',
    day2Accommodation: 'Lodge ou camp de tentes à Amboseli',
    day2Meals: 'Petit-déjeuner, déjeuner et dîner',

    day3: 'Jour 3',
    day3Title: 'Safari d’une journée complète à Amboseli',
    day3Text:
      'Passez la journée à explorer Amboseli. Recherchez les éléphants, lions, girafes, zèbres, buffles, hippopotames et de nombreuses espèces d’oiseaux tout en profitant des vues sur le Kilimandjaro lorsque les conditions météorologiques sont favorables.',
    day3Accommodation: 'Lodge ou camp de tentes à Amboseli',
    day3Meals: 'Petit-déjeuner, déjeuner et dîner',

    day4: 'Jour 4',
    day4Title: 'Amboseli au lac Naivasha',
    day4Text:
      'Après le petit-déjeuner, voyagez vers la vallée du Grand Rift et le lac Naivasha. Profitez des paysages changeants du Kenya et détendez-vous dans votre lodge après le trajet.',
    day4Accommodation: 'Lodge près du lac Naivasha',
    day4Meals: 'Petit-déjeuner, déjeuner et dîner',

    day5: 'Jour 5',
    day5Title: 'Du lac Naivasha au Maasai Mara',
    day5Text:
      'Continuez vers la célèbre réserve nationale du Maasai Mara. Arrivez à temps pour un safari l’après-midi à travers les prairies vallonnées à la recherche de lions, guépards, éléphants, girafes, zèbres et gnous.',
    day5Accommodation: 'Lodge ou camp de tentes au Maasai Mara',
    day5Meals: 'Petit-déjeuner, déjeuner et dîner',

    day6: 'Jour 6',
    day6Title: 'Safari d’une journée complète au Maasai Mara',
    day6Text:
      'Profitez d’une journée complète d’exploration du Maasai Mara. Votre guide suivra l’activité actuelle de la faune et choisira les meilleures zones pour l’observation. Recherchez les Big Five et les grands troupeaux.',
    day6Accommodation: 'Lodge ou camp de tentes au Maasai Mara',
    day6Meals: 'Petit-déjeuner, déjeuner et dîner',

    day7: 'Jour 7',
    day7Title: 'Deuxième journée complète au Maasai Mara',
    day7Text:
      'Passez une autre journée complète dans le Mara avec des safaris matin et après-midi. Ce temps supplémentaire vous permet d’explorer différentes zones de la réserve et de profiter d’excellentes occasions de photographie animalière.',
    day7Accommodation: 'Lodge ou camp de tentes au Maasai Mara',
    day7Meals: 'Petit-déjeuner, déjeuner et dîner',

    day8: 'Jour 8',
    day8Title: 'Du Maasai Mara au Serengeti, Tanzanie',
    day8Text:
      'Après le petit-déjeuner, transfert vers la piste d’atterrissage pour votre correspondance aérienne vers la Tanzanie. Continuez vers la région du Serengeti et profitez d’un safari l’après-midi selon votre heure d’arrivée.',
    day8Accommodation: 'Lodge ou camp de tentes dans le Serengeti',
    day8Meals: 'Petit-déjeuner, déjeuner et dîner',

    day9: 'Jour 9',
    day9Title: 'Safari d’une journée complète au Serengeti',
    day9Text:
      'Passez la journée à explorer les plaines du Serengeti. Recherchez lions, guépards, léopards, éléphants, girafes, zèbres, gnous et autres animaux pendant que votre guide suit les déplacements récents de la faune.',
    day9Accommodation: 'Lodge ou camp de tentes dans le Serengeti',
    day9Meals: 'Petit-déjeuner, déjeuner et dîner',

    day10: 'Jour 10',
    day10Title: 'Deuxième journée complète au Serengeti',
    day10Text:
      'Profitez d’une autre journée complète d’observation de la faune dans le Serengeti. Explorez différentes zones et profitez du temps supplémentaire pour découvrir la grande diversité de paysages et d’animaux du parc.',
    day10Accommodation: 'Lodge ou camp de tentes dans le Serengeti',
    day10Meals: 'Petit-déjeuner, déjeuner et dîner',

    day11: 'Jour 11',
    day11Title: 'Troisième journée de safari au Serengeti',
    day11Text:
      'Profitez d’une nouvelle journée mémorable de safari au Serengeti. Selon la saison, votre guide pourra se concentrer sur les zones connues pour les prédateurs, les grands troupeaux d’herbivores ou l’activité récente de la faune.',
    day11Accommodation: 'Lodge ou camp de tentes dans le Serengeti',
    day11Meals: 'Petit-déjeuner, déjeuner et dîner',

    day12: 'Jour 12',
    day12Title: 'Du Serengeti à la zone de conservation du Ngorongoro',
    day12Text:
      'Profitez d’un safari matinal avant de rejoindre la zone de conservation du Ngorongoro. Traversez les magnifiques hauts plateaux et arrivez à votre lodge près du bord du cratère ou à Karatu.',
    day12Accommodation: 'Lodge ou camp de tentes près du Ngorongoro ou Karatu',
    day12Meals: 'Petit-déjeuner, déjeuner et dîner',

    day13: 'Jour 13',
    day13Title: 'Safari dans le cratère du Ngorongoro',
    day13Text:
      'Descendez dans le cratère du Ngorongoro pour un safari matinal prolongé. Recherchez les lions, éléphants, buffles, zèbres, gnous, hippopotames, hyènes et, avec un peu de chance, les rhinocéros noirs.',
    day13Accommodation: 'Lodge ou camp de tentes près de Karatu',
    day13Meals: 'Petit-déjeuner, déjeuner et dîner',

    day14: 'Jour 14',
    day14Title: 'Du Ngorongoro au parc national de Tarangire',
    day14Text:
      'Après le petit-déjeuner, voyagez vers le parc national de Tarangire. Profitez d’un safari l’après-midi dans des paysages célèbres pour leurs baobabs géants, leurs éléphants et leurs grands troupeaux.',
    day14Accommodation: 'Lodge ou camp de tentes près de Tarangire',
    day14Meals: 'Petit-déjeuner, déjeuner et dîner',

    day15: 'Jour 15',
    day15Title: 'Safari d’une journée complète à Tarangire',
    day15Text:
      'Passez une journée complète à explorer Tarangire. Suivez la rivière Tarangire et les habitats environnants à la recherche d’éléphants, lions, girafes, zèbres, gnous, buffles et de nombreux oiseaux.',
    day15Accommodation: 'Lodge ou camp de tentes près de Tarangire',
    day15Meals: 'Petit-déjeuner, déjeuner et dîner',

    day16: 'Jour 16',
    day16Title: 'Tarangire à Arusha',
    day16Text:
      'Profitez du petit-déjeuner et d’une matinée tranquille avant votre transfert vers Arusha. Selon votre horaire de vol, vous pourrez avoir le temps pour une courte activité ou un déjeuner avant la fin officielle du safari.',
    day16Accommodation: 'Aucun hébergement inclus après le safari',
    day16Meals: 'Petit-déjeuner et déjeuner',

    detailsTitle: 'Détails du safari',

    duration: 'Durée',
    durationValue: '16 jours / 15 nuits',

    start: 'Départ',
    startValue: 'Nairobi, Kenya',

    end: 'Fin',
    endValue: 'Arusha, Tanzanie',

    countries: 'Pays',
    countriesValue: 'Kenya & Tanzanie',

    destinations: 'Destinations',
    destinationsValue:
      'Amboseli, lac Naivasha, Maasai Mara, Serengeti, Ngorongoro & Tarangire',

    tourType: 'Type de voyage',
    tourTypeValue: 'Safari privé',

    accommodationLabel: 'Hébergement',
    accommodationValue: 'Lodge / Camp de tentes',

    bestTime: 'Meilleure période',
    bestTimeValue: 'Toute l’année',

    priceLabel: 'PRIX DU SAFARI KENYA & TANZANIE',
    priceTitle: 'Prix selon la taille du groupe',

    priceText:
      'Les prix sont des estimations de départ et peuvent varier selon le niveau d’hébergement, la saison, les dates de voyage, les vols et la taille du groupe.',

    groupSize: 'Taille du groupe',
    startingPrice: 'Prix de départ',

    startingFrom: 'À partir de',
    perPerson: 'par personne',
    priceNote:
      'Basé sur 5 à 6 personnes partageant. Le prix final dépend de la taille du groupe, de l’hébergement, de la saison et des dates de voyage.',

    includedTitle: 'Inclus',

    included: [
      'Véhicule safari 4x4 privé avec toit ouvrant',
      'Guide safari professionnel anglophone',
      'Transferts aéroport et hôtel à Nairobi',
      'Transferts d’arrivée et de départ à Arusha',
      'Hébergement en lodges ou camps de tentes',
      'Repas indiqués dans l’itinéraire',
      'Frais d’entrée au parc national d’Amboseli',
      'Frais de la réserve nationale du Maasai Mara',
      'Frais d’entrée au parc national du Serengeti',
      'Frais de la zone de conservation et du cratère du Ngorongoro',
      'Frais d’entrée au parc national de Tarangire',
      'Eau potable pendant les safaris',
      'Correspondance aérienne du Maasai Mara vers la Tanzanie',
      'Assistance pour les formalités frontalières et de voyage entre le Kenya et la Tanzanie',
    ],

    excludedTitle: 'Non inclus',

    excluded: [
      'Vols internationaux',
      'Frais de visa pour le Kenya et la Tanzanie',
      'Assurance voyage',
      'Pourboires',
      'Boissons alcoolisées et premium',
      'Dépenses personnelles et souvenirs',
      'Services de blanchisserie',
      'Activités optionnelles non mentionnées dans l’itinéraire',
      'Nuits d’hôtel supplémentaires avant ou après le safari',
    ],

    bringLabel: 'À EMPORTER',
    bringTitle: 'Préparez votre safari',

    whatToBring: [
      'Vêtements de safari confortables',
      'Chemises légères à manches longues',
      'Veste chaude pour les matinées fraîches',
      'Chapeau et crème solaire',
      'Chaussures de marche confortables',
      'Appareil photo ou jumelles',
      'Médicaments personnels',
      'Documents de voyage et passeport',
      'Petit sac à dos',
      'Bagage souple pour les vols safari intérieurs',
    ],

    readyLabel: 'KENYA + TANZANIE',
    readyTitle: 'Prêt pour votre safari en Afrique de l’Est ?',

    readyText:
      'Découvrez la faune incroyable du Kenya et de la Tanzanie lors d’un safari privé inoubliable. Contactez Kilimanjaro Travel pour connaître les disponibilités, les options d’hébergement et obtenir un devis personnalisé.',

    requestQuote: 'Demander un devis',
    whatsapp: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: '16 Días Safari por Kenia y Tanzania',
    heroSubtitle:
      'Descubre lo mejor de África Oriental con un safari privado inolvidable por Kenia y Tanzania, desde Amboseli y Maasai Mara hasta Serengeti, Ngorongoro y Tarangire.',

    overviewLabel: 'SAFARI KENIA & TANZANIA',
    overviewTitle: 'El Safari Definitivo por África Oriental',

    paragraph1:
      'Vive dos de los destinos de safari más famosos de África en un viaje inolvidable. Explora Amboseli y Maasai Mara en Kenia antes de continuar hacia el legendario Serengeti, Ngorongoro y Tarangire en Tanzania.',

    paragraph2:
      'Este safari privado de dieciséis días te ofrece suficiente tiempo para disfrutar de las principales zonas de fauna sin prisas. Disfruta de días completos de safari, alojamiento confortable y guías locales profesionales durante todo el viaje.',

    itineraryTitle: 'Itinerario día a día',

    accommodation: 'Alojamiento',
    meals: 'Comidas',

    day1: 'Día 1',
    day1Title: 'Llegada a Nairobi, Kenia',
    day1Text:
      'Llega a Nairobi y conoce a tu representante de safari. Traslado a tu hotel y disfruta de una tarde relajada antes de comenzar tu aventura de safari por Kenia y Tanzania.',
    day1Accommodation: 'Hotel en Nairobi',
    day1Meals: 'Cena',

    day2: 'Día 2',
    day2Title: 'De Nairobi al Parque Nacional de Amboseli',
    day2Text:
      'Después del desayuno, conduce hasta el Parque Nacional de Amboseli. Disfruta de un safari por la tarde con espectaculares vistas del Monte Kilimanjaro. Amboseli es famoso por sus grandes manadas de elefantes y sus hermosos paisajes abiertos.',
    day2Accommodation: 'Lodge o campamento de tiendas en Amboseli',
    day2Meals: 'Desayuno, almuerzo y cena',

    day3: 'Día 3',
    day3Title: 'Safari de día completo en Amboseli',
    day3Text:
      'Pasa el día completo explorando Amboseli. Busca elefantes, leones, jirafas, cebras, búfalos, hipopótamos y numerosas especies de aves mientras disfrutas de las vistas del Kilimanjaro cuando las condiciones meteorológicas sean favorables.',
    day3Accommodation: 'Lodge o campamento de tiendas en Amboseli',
    day3Meals: 'Desayuno, almuerzo y cena',

    day4: 'Día 4',
    day4Title: 'De Amboseli al Lago Naivasha',
    day4Text:
      'Después del desayuno, viaja hacia el Gran Valle del Rift y el Lago Naivasha. Disfruta de los cambiantes paisajes de Kenia y relájate en tu lodge después del viaje.',
    day4Accommodation: 'Lodge cerca del Lago Naivasha',
    day4Meals: 'Desayuno, almuerzo y cena',

    day5: 'Día 5',
    day5Title: 'Del Lago Naivasha a Maasai Mara',
    day5Text:
      'Continúa hacia la famosa Reserva Nacional Maasai Mara. Llega a tiempo para un safari por la tarde a través de las praderas, buscando leones, guepardos, elefantes, jirafas, cebras y ñus.',
    day5Accommodation: 'Lodge o campamento de tiendas en Maasai Mara',
    day5Meals: 'Desayuno, almuerzo y cena',

    day6: 'Día 6',
    day6Title: 'Safari de día completo en Maasai Mara',
    day6Text:
      'Disfruta de un día completo explorando Maasai Mara. Tu guía seguirá la actividad actual de la fauna y elegirá las mejores zonas para observar animales. Busca los Cinco Grandes y grandes manadas de animales de las llanuras.',
    day6Accommodation: 'Lodge o campamento de tiendas en Maasai Mara',
    day6Meals: 'Desayuno, almuerzo y cena',

    day7: 'Día 7',
    day7Title: 'Segundo día completo en Maasai Mara',
    day7Text:
      'Pasa otro día completo en Mara con safaris por la mañana y por la tarde. Este tiempo adicional permite explorar diferentes zonas de la reserva y disfrutar de excelentes oportunidades para fotografiar la fauna.',
    day7Accommodation: 'Lodge o campamento de tiendas en Maasai Mara',
    day7Meals: 'Desayuno, almuerzo y cena',

    day8: 'Día 8',
    day8Title: 'De Maasai Mara al Serengeti, Tanzania',
    day8Text:
      'Después del desayuno, traslado a la pista de aterrizaje para tu conexión aérea hacia Tanzania. Continúa hacia la zona del Serengeti y disfruta de un safari por la tarde dependiendo de tu hora de llegada.',
    day8Accommodation: 'Lodge o campamento de tiendas en Serengeti',
    day8Meals: 'Desayuno, almuerzo y cena',

    day9: 'Día 9',
    day9Title: 'Safari de día completo en el Serengeti',
    day9Text:
      'Pasa el día completo explorando las llanuras del Serengeti. Busca leones, guepardos, leopardos, elefantes, jirafas, cebras, ñus y otros animales mientras tu guía sigue los movimientos recientes de la fauna.',
    day9Accommodation: 'Lodge o campamento de tiendas en Serengeti',
    day9Meals: 'Desayuno, almuerzo y cena',

    day10: 'Día 10',
    day10Title: 'Segundo día completo en Serengeti',
    day10Text:
      'Disfruta de otro día completo de observación de fauna en Serengeti. Explora diferentes zonas y aprovecha el tiempo adicional para descubrir la gran variedad de paisajes y animales del parque.',
    day10Accommodation: 'Lodge o campamento de tiendas en Serengeti',
    day10Meals: 'Desayuno, almuerzo y cena',

    day11: 'Día 11',
    day11Title: 'Tercer día de safari en Serengeti',
    day11Text:
      'Disfruta de otro día memorable de safari en Serengeti. Dependiendo de la temporada, tu guía puede centrarse en zonas conocidas por sus depredadores, grandes manadas de herbívoros u otra actividad reciente de la fauna.',
    day11Accommodation: 'Lodge o campamento de tiendas en Serengeti',
    day11Meals: 'Desayuno, almuerzo y cena',

    day12: 'Día 12',
    day12Title: 'Del Serengeti al Área de Conservación del Ngorongoro',
    day12Text:
      'Disfruta de un safari matutino antes de viajar hacia el Área de Conservación del Ngorongoro. Continúa por las pintorescas tierras altas y llega a tu lodge cerca del borde del cráter o en Karatu.',
    day12Accommodation: 'Lodge o campamento de tiendas cerca de Ngorongoro o Karatu',
    day12Meals: 'Desayuno, almuerzo y cena',

    day13: 'Día 13',
    day13Title: 'Safari en el Cráter del Ngorongoro',
    day13Text:
      'Desciende al Cráter del Ngorongoro para realizar un safari matutino prolongado. Busca leones, elefantes, búfalos, cebras, ñus, hipopótamos, hienas y, con suerte, rinocerontes negros.',
    day13Accommodation: 'Lodge o campamento de tiendas cerca de Karatu',
    day13Meals: 'Desayuno, almuerzo y cena',

    day14: 'Día 14',
    day14Title: 'Del Ngorongoro al Parque Nacional de Tarangire',
    day14Text:
      'Después del desayuno, viaja hacia el Parque Nacional de Tarangire. Disfruta de un safari por la tarde entre paisajes famosos por sus enormes baobabs, elefantes y grandes manadas de animales.',
    day14Accommodation: 'Lodge o campamento de tiendas cerca de Tarangire',
    day14Meals: 'Desayuno, almuerzo y cena',

    day15: 'Día 15',
    day15Title: 'Safari de día completo en Tarangire',
    day15Text:
      'Pasa un día completo explorando Tarangire. Sigue el río Tarangire y los hábitats circundantes buscando elefantes, leones, jirafas, cebras, ñus, búfalos y una gran variedad de aves.',
    day15Accommodation: 'Lodge o campamento de tiendas cerca de Tarangire',
    day15Meals: 'Desayuno, almuerzo y cena',

    day16: 'Día 16',
    day16Title: 'De Tarangire a Arusha',
    day16Text:
      'Disfruta del desayuno y de una mañana relajada antes del traslado a Arusha. Dependiendo de tu horario de vuelo, puede haber tiempo para una actividad corta o almuerzo antes de finalizar oficialmente el safari.',
    day16Accommodation: 'No incluye alojamiento después del safari',
    day16Meals: 'Desayuno y almuerzo',

    detailsTitle: 'Detalles del Safari',

    duration: 'Duración',
    durationValue: '16 días / 15 noches',

    start: 'Inicio',
    startValue: 'Nairobi, Kenia',

    end: 'Final',
    endValue: 'Arusha, Tanzania',

    countries: 'Países',
    countriesValue: 'Kenia y Tanzania',

    destinations: 'Destinos',
    destinationsValue:
      'Amboseli, Lago Naivasha, Maasai Mara, Serengeti, Ngorongoro y Tarangire',

    tourType: 'Tipo de viaje',
    tourTypeValue: 'Safari privado',

    accommodationLabel: 'Alojamiento',
    accommodationValue: 'Lodge / Campamento de tiendas',

    bestTime: 'Mejor época',
    bestTimeValue: 'Todo el año',

    priceLabel: 'PRECIOS SAFARI KENIA & TANZANIA',
    priceTitle: 'Precio según el tamaño del grupo',

    priceText:
      'Los precios son estimaciones iniciales y pueden variar según el nivel de alojamiento, la temporada, las fechas del viaje, los vuelos y el tamaño del grupo.',

    groupSize: 'Tamaño del grupo',
    startingPrice: 'Precio inicial',

    startingFrom: 'Desde',
    perPerson: 'por persona',
    priceNote:
      'Basado en 5–6 personas compartiendo. El precio final depende del tamaño del grupo, alojamiento, temporada y fechas del viaje.',

    includedTitle: 'Qué está incluido',

    included: [
      'Vehículo safari privado 4x4 con techo elevable',
      'Guía profesional de safari de habla inglesa',
      'Traslados de aeropuerto y hotel en Nairobi',
      'Traslados de llegada y salida en Arusha',
      'Alojamiento en lodges o campamentos de tiendas',
      'Comidas indicadas en el itinerario',
      'Tasas de entrada al Parque Nacional de Amboseli',
      'Tasas de la Reserva Nacional Maasai Mara',
      'Tasas de entrada al Parque Nacional del Serengeti',
      'Tasas del Área de Conservación y del Cráter del Ngorongoro',
      'Tasas de entrada al Parque Nacional de Tarangire',
      'Agua potable durante los safaris',
      'Conexión aérea desde Maasai Mara hacia Tanzania',
      'Asistencia con los trámites fronterizos y de viaje entre Kenia y Tanzania',
    ],

    excludedTitle: 'Qué no está incluido',

    excluded: [
      'Vuelos internacionales',
      'Tasas de visado de Kenia y Tanzania',
      'Seguro de viaje',
      'Propinas',
      'Bebidas alcohólicas y premium',
      'Gastos personales y recuerdos',
      'Servicio de lavandería',
      'Actividades opcionales no indicadas en el itinerario',
      'Noches adicionales de hotel antes o después del safari',
    ],

    bringLabel: 'QUÉ LLEVAR',
    bringTitle: 'Prepárate para tu Safari',

    whatToBring: [
      'Ropa cómoda para safari',
      'Camisas ligeras de manga larga',
      'Chaqueta abrigada para las mañanas frescas',
      'Sombrero y protector solar',
      'Calzado cómodo para caminar',
      'Cámara o prismáticos',
      'Medicamentos personales',
      'Documentos de viaje y pasaporte',
      'Bolsa pequeña para el día',
      'Equipaje blando para vuelos domésticos de safari',
    ],

    readyLabel: 'KENIA + TANZANIA',
    readyTitle: '¿Listo para tu Safari por África Oriental?',

    readyText:
      'Descubre la increíble fauna de Kenia y Tanzania en un safari privado inolvidable. Contacta con Kilimanjaro Travel para conocer disponibilidad, opciones de alojamiento y recibir un presupuesto personalizado.',

    requestQuote: 'Solicitar presupuesto',
    whatsapp: 'Chatear por WhatsApp',
  },
};

type TranslationSet = (typeof translations)[LanguageCode];

const itineraryKeys = [
  {
    day: 'day1',
    title: 'day1Title',
    text: 'day1Text',
    accommodation: 'day1Accommodation',
    meals: 'day1Meals',
  },
  {
    day: 'day2',
    title: 'day2Title',
    text: 'day2Text',
    accommodation: 'day2Accommodation',
    meals: 'day2Meals',
  },
  {
    day: 'day3',
    title: 'day3Title',
    text: 'day3Text',
    accommodation: 'day3Accommodation',
    meals: 'day3Meals',
  },
  {
    day: 'day4',
    title: 'day4Title',
    text: 'day4Text',
    accommodation: 'day4Accommodation',
    meals: 'day4Meals',
  },
  {
    day: 'day5',
    title: 'day5Title',
    text: 'day5Text',
    accommodation: 'day5Accommodation',
    meals: 'day5Meals',
  },
  {
    day: 'day6',
    title: 'day6Title',
    text: 'day6Text',
    accommodation: 'day6Accommodation',
    meals: 'day6Meals',
  },
  {
    day: 'day7',
    title: 'day7Title',
    text: 'day7Text',
    accommodation: 'day7Accommodation',
    meals: 'day7Meals',
  },
  {
    day: 'day8',
    title: 'day8Title',
    text: 'day8Text',
    accommodation: 'day8Accommodation',
    meals: 'day8Meals',
  },
  {
    day: 'day9',
    title: 'day9Title',
    text: 'day9Text',
    accommodation: 'day9Accommodation',
    meals: 'day9Meals',
  },
  {
    day: 'day10',
    title: 'day10Title',
    text: 'day10Text',
    accommodation: 'day10Accommodation',
    meals: 'day10Meals',
  },
  {
    day: 'day11',
    title: 'day11Title',
    text: 'day11Text',
    accommodation: 'day11Accommodation',
    meals: 'day11Meals',
  },
  {
    day: 'day12',
    title: 'day12Title',
    text: 'day12Text',
    accommodation: 'day12Accommodation',
    meals: 'day12Meals',
  },
  {
    day: 'day13',
    title: 'day13Title',
    text: 'day13Text',
    accommodation: 'day13Accommodation',
    meals: 'day13Meals',
  },
  {
    day: 'day14',
    title: 'day14Title',
    text: 'day14Text',
    accommodation: 'day14Accommodation',
    meals: 'day14Meals',
  },
  {
    day: 'day15',
    title: 'day15Title',
    text: 'day15Text',
    accommodation: 'day15Accommodation',
    meals: 'day15Meals',
  },
  {
    day: 'day16',
    title: 'day16Title',
    text: 'day16Text',
    accommodation: 'day16Accommodation',
    meals: 'day16Meals',
  },
] as const;

const priceRows = [
  {
    people: '1 person',
    price: 'US$8,950',
  },
  {
    people: '2 people',
    price: 'US$6,750 per person',
  },
  {
    people: '3 people',
    price: 'US$5,950 per person',
  },
  {
    people: '4 people',
    price: 'US$5,450 per person',
  },
  {
    people: '5–6 people',
    price: 'US$5,050 per person',
  },
];

export default function SixteenDaysKenyaTanzaniaPage() {
  const { language } = useLanguage();

  const t: TranslationSet =
    translations[language as LanguageCode] || translations.en;

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/simba-one.jpg"
      />

      {/* OVERVIEW + ITINERARY + DETAILS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">

            {/* LEFT SIDE */}
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

                {itineraryKeys.map((item) => (
                  <article
                    key={item.day}
                    className="rounded-3xl bg-cream p-7 shadow-lg"
                  >

                    <p className="font-bold text-gold">
                      {t[item.day]}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-forest">
                      {t[item.title]}
                    </h3>

                    <p className="mt-4 leading-7 text-black/70">
                      {t[item.text]}
                    </p>

                    <div className="mt-5 space-y-2 border-t border-black/10 pt-5 text-black/70">

                      <p>
                        <strong className="text-forest">
                          {t.accommodation}:
                        </strong>{' '}
                        {t[item.accommodation]}
                      </p>

                      <p>
                        <strong className="text-forest">
                          {t.meals}:
                        </strong>{' '}
                        {t[item.meals]}
                      </p>

                    </div>

                  </article>
                ))}

              </div>

            </div>

            {/* RIGHT SIDE */}
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
                  <strong>{t.start}:</strong>{' '}
                  {t.startValue}
                </p>

                <p>
                  <strong>{t.end}:</strong>{' '}
                  {t.endValue}
                </p>

                <p>
                  <strong>{t.countries}:</strong>{' '}
                  {t.countriesValue}
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
                  US$5,050
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
              {t.priceLabel}
            </p>

            <h2 className="section-title mt-3">
              {t.priceTitle}
            </h2>

            <p className="mt-5 leading-7 text-black/70">
              {t.priceText}
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
                key={row.people}
                className="grid grid-cols-2 border-b border-black/10 px-6 py-5 last:border-b-0"
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
                src="/images/safari-ten.jpg"
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

          <p className="font-bold uppercase tracking-wide text-gold">
            {t.readyLabel}
          </p>

          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
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