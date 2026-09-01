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
heroTitle: '14 Days Tanzania Safari + Zanzibar',
heroSubtitle:
'Experience the best of Tanzania with an unforgettable Northern Circuit safari followed by a relaxing Zanzibar beach escape.',

overviewLabel: 'SAFARI + ZANZIBAR',
overviewTitle: '14 Days Tanzania Safari & Zanzibar',

paragraph1:
'Experience the highlights of Northern Tanzania before relaxing on the beautiful beaches of Zanzibar. This private journey combines Tarangire, Lake Manyara, Serengeti and Ngorongoro with culture, beaches and island experiences in Zanzibar.',

paragraph2:
'Enjoy a comfortable pace, private safari vehicle, professional guide and carefully selected accommodation throughout your Tanzania adventure.',

itineraryTitle: 'Day-by-Day Itinerary',

accommodation: 'Accommodation',
meals: 'Meals',

day1: 'Day 1',
day1Title: 'Arusha to Tarangire National Park',
day1Text:
'Meet your private safari guide in Arusha and drive to Tarangire National Park. Enjoy your first game drive through beautiful landscapes filled with giant baobab trees, elephants, giraffes, zebras, wildebeest, lions and abundant birdlife.',
day1Accommodation: 'Luxury lodge or tented camp near Tarangire',
day1Meals: 'Lunch and Dinner',

day2: 'Day 2',
day2Title: 'Lake Manyara National Park',
day2Text:
'After breakfast, continue to Lake Manyara National Park. Explore the groundwater forest, woodland and lakeshore areas while searching for elephants, buffaloes, giraffes, hippos, monkeys and colourful birdlife.',
day2Accommodation: 'Luxury lodge or tented camp near Lake Manyara',
day2Meals: 'Breakfast, Lunch and Dinner',

day3: 'Day 3',
day3Title: 'Lake Manyara to Serengeti National Park',
day3Text:
'Travel through the beautiful Ngorongoro highlands toward Serengeti National Park. Enter the legendary Serengeti plains and enjoy an afternoon game drive while searching for wildlife across the endless grasslands.',
day3Accommodation: 'Luxury lodge or tented camp in Serengeti',
day3Meals: 'Breakfast, Lunch and Dinner',

day4: 'Day 4',
day4Title: 'Full-Day Serengeti Safari',
day4Text:
'Spend a full day exploring Serengeti National Park. Your private guide will select the best wildlife areas according to the season and recent animal movements. Look for lions, cheetahs, leopards, elephants, giraffes, zebras and wildebeest.',
day4Accommodation: 'Luxury lodge or tented camp in Serengeti',
day4Meals: 'Breakfast, Lunch and Dinner',

day5: 'Day 5',
day5Title: 'Second Full Day in Serengeti',
day5Text:
'Enjoy another full day of wildlife viewing in Serengeti. Take your time exploring different areas of the park and enjoy excellent opportunities for photography and unforgettable wildlife encounters.',
day5Accommodation: 'Luxury lodge or tented camp in Serengeti',
day5Meals: 'Breakfast, Lunch and Dinner',

day6: 'Day 6',
day6Title: 'Serengeti to Ngorongoro Conservation Area',
day6Text:
'Enjoy a morning game drive in Serengeti before travelling toward the Ngorongoro Conservation Area. Continue through spectacular highland scenery and arrive at your lodge for a relaxing evening.',
day6Accommodation: 'Luxury lodge near Ngorongoro or Karatu',
day6Meals: 'Breakfast, Lunch and Dinner',

day7: 'Day 7',
day7Title: 'Ngorongoro Crater Safari & Transfer to Zanzibar',
day7Text:
'Descend into the Ngorongoro Crater for a memorable morning game drive. Search for lions, elephants, buffaloes, zebras, hippos, hyenas and, with luck, black rhinos. After lunch, transfer for your flight to Zanzibar.',
day7Accommodation: 'Luxury beach resort in Zanzibar',
day7Meals: 'Breakfast, Lunch and Dinner',

day8: 'Day 8',
day8Title: 'Zanzibar Beach Relaxation',
day8Text:
'Wake up beside the Indian Ocean and enjoy a relaxed day at your luxury beach resort. Swim in the turquoise waters, enjoy the beach and take time to relax after your safari adventure.',
day8Accommodation: 'Luxury beach resort in Zanzibar',
day8Meals: 'Breakfast and Dinner',

day9: 'Day 9',
day9Title: 'Stone Town Cultural Experience',
day9Text:
'Explore the historic streets of Stone Town with a private guide. Discover Zanzibar’s fascinating history, culture, architecture and local markets before enjoying a relaxing evening by the ocean.',
day9Accommodation: 'Luxury beach resort in Zanzibar',
day9Meals: 'Breakfast and Dinner',

day10: 'Day 10',
day10Title: 'Spice Farm Experience',
day10Text:
'Visit a traditional spice farm and discover why Zanzibar is known as the Spice Island. Learn about cloves, cinnamon, vanilla, cardamom and other tropical spices before returning to your beach resort.',
day10Accommodation: 'Luxury beach resort in Zanzibar',
day10Meals: 'Breakfast and Dinner',

day11: 'Day 11',
day11Title: 'Zanzibar Snorkelling & Beach Day',
day11Text:
'Enjoy a relaxing island day with an optional snorkelling experience in the clear waters of Zanzibar. Discover colourful marine life and enjoy the afternoon relaxing on the beach.',
day11Accommodation: 'Luxury beach resort in Zanzibar',
day11Meals: 'Breakfast and Dinner',

day12: 'Day 12',
day12Title: 'Private Zanzibar Island Experience',
day12Text:
'Enjoy a flexible day in Zanzibar. Choose between a private beach experience, cultural activities, water activities or simply relaxing at your resort and enjoying the Indian Ocean.',
day12Accommodation: 'Luxury beach resort in Zanzibar',
day12Meals: 'Breakfast and Dinner',

day13: 'Day 13',
day13Title: 'Sunset Dhow Cruise & Zanzibar Evening',
day13Text:
'Spend the day relaxing before enjoying a traditional Zanzibar dhow cruise at sunset. Sail along the coast and enjoy beautiful ocean views as the sun goes down.',
day13Accommodation: 'Luxury beach resort in Zanzibar',
day13Meals: 'Breakfast and Dinner',

day14: 'Day 14',
day14Title: 'Zanzibar Departure',
day14Text:
'Enjoy your final breakfast and some free time at the resort before your transfer to Zanzibar Airport for your onward journey. Take home unforgettable memories from your Tanzania safari and Zanzibar holiday.',
day14Accommodation: 'No accommodation included',
day14Meals: 'Breakfast',

detailsTitle: 'Safari Details',
duration: 'Duration',
durationValue: '14 Days / 13 Nights',
departure: 'Departure',
departureValue: 'Arusha',
destinations: 'Destinations',
destinationsValue:
'Tarangire, Lake Manyara, Serengeti, Ngorongoro & Zanzibar',
tourType: 'Tour Type',
tourTypeValue: 'Private Safari',
accommodationLabel: 'Accommodation',
accommodationValue: 'Luxury Lodge / Tented Camp & Beach Resort',
bestTime: 'Best Time',
bestTimeValue: 'All Year',

startingFrom: 'Starting From',
perPerson: 'per person',
priceNote:
'Based on 5–6 people sharing. Final price depends on group size, accommodation level, season and travel dates.',
requestQuote: 'Request a Quote',

pricesLabel: 'SAFARI + ZANZIBAR PRICES',
pricesTitle: 'Price by Group Size',
pricesText:
'Prices are starting estimates and may vary depending on accommodation level, season, travel dates and group size.',
groupSize: 'Group Size',
startingPrice: 'Starting Price',

includedTitle: 'What Is Included',
included: [
'Private 4x4 safari vehicle with pop-up roof',
'Professional English-speaking safari guide',
'Arusha hotel pickup and safari transfers',
'Tarangire National Park entrance fees',
'Lake Manyara National Park entrance fees',
'Serengeti National Park entrance fees',
'Ngorongoro Conservation Area and crater fees',
'Luxury lodge or tented camp accommodation during safari',
'Luxury beach resort accommodation in Zanzibar',
'Meals as listed in the itinerary',
'Drinking water during the safari',
'Domestic flight from Arusha to Zanzibar',
'Zanzibar airport and hotel transfers',
'Stone Town guided experience',
'Spice farm experience',
],

excludedTitle: 'What Is Excluded',
excluded: [
'International flights',
'Tanzania visa fees',
'Travel insurance',
'Tips and gratuities',
'Alcoholic and premium drinks',
'Personal expenses and souvenirs',
'Optional activities not listed in the itinerary',
'Spa treatments',
'Additional Zanzibar excursions',
],

bringLabel: 'WHAT TO BRING',
bringTitle: 'Prepare for Your Journey',
whatToBring: [
'Comfortable safari clothing',
'Light evening clothes',
'Warm jacket for cool mornings',
'Sun hat and sunscreen',
'Comfortable walking shoes',
'Swimwear for Zanzibar',
'Camera or binoculars',
'Personal medication',
'Travel documents and passport',
'Small day bag',
],

readyTitle: 'Ready for Your Tanzania Adventure?',
readyText:
'Experience an unforgettable Tanzania safari followed by beautiful beaches, culture and relaxation in Zanzibar.',
whatsapp: 'Chat on WhatsApp',
},

de: {
heroTitle: '14 Tage Tansania Safari + Sansibar',
heroSubtitle:
'Erleben Sie das Beste von Tansania mit einer unvergesslichen Safari durch den Norden und einer entspannenden Auszeit an den Stränden Sansibars.',

overviewLabel: 'SAFARI + SANSIBAR',
overviewTitle: '14 Tage Tansania Safari & Sansibar',

paragraph1:
'Erleben Sie die Höhepunkte Nordtansanias und entspannen Sie anschließend an den wunderschönen Stränden Sansibars. Diese private Reise kombiniert Tarangire, Lake Manyara, Serengeti und Ngorongoro mit Kultur, Stränden und Inselerlebnissen auf Sansibar.',

paragraph2:
'Genießen Sie ein angenehmes Reisetempo, ein privates Safarifahrzeug, einen professionellen Guide und sorgfältig ausgewählte Unterkünfte während Ihrer gesamten Tansania-Reise.',

itineraryTitle: 'Tagesprogramm',
accommodation: 'Unterkunft',
meals: 'Mahlzeiten',

day1: 'Tag 1',
day1Title: 'Arusha zum Tarangire-Nationalpark',
day1Text:
'Treffen Sie Ihren privaten Safariführer in Arusha und fahren Sie zum Tarangire-Nationalpark. Genießen Sie Ihre erste Pirschfahrt durch wunderschöne Landschaften mit riesigen Baobab-Bäumen, Elefanten, Giraffen, Zebras, Gnus, Löwen und zahlreichen Vogelarten.',
day1Accommodation: 'Luxus-Lodge oder Zeltcamp bei Tarangire',
day1Meals: 'Mittagessen und Abendessen',

day2: 'Tag 2',
day2Title: 'Lake-Manyara-Nationalpark',
day2Text:
'Nach dem Frühstück fahren Sie weiter zum Lake-Manyara-Nationalpark. Erkunden Sie den Grundwasserwald, die Waldgebiete und die Uferregion auf der Suche nach Elefanten, Büffeln, Giraffen, Flusspferden, Affen und farbenprächtigen Vögeln.',
day2Accommodation: 'Luxus-Lodge oder Zeltcamp am Lake Manyara',
day2Meals: 'Frühstück, Mittagessen und Abendessen',

day3: 'Tag 3',
day3Title: 'Lake Manyara zur Serengeti',
day3Text:
'Fahren Sie durch das wunderschöne Ngorongoro-Hochland in Richtung Serengeti-Nationalpark. Betreten Sie die legendären Serengeti-Ebenen und genießen Sie eine nachmittägliche Pirschfahrt auf der Suche nach Wildtieren.',
day3Accommodation: 'Luxus-Lodge oder Zeltcamp in der Serengeti',
day3Meals: 'Frühstück, Mittagessen und Abendessen',

day4: 'Tag 4',
day4Title: 'Ganztägige Serengeti-Safari',
day4Text:
'Verbringen Sie einen ganzen Tag im Serengeti-Nationalpark. Ihr privater Guide wählt abhängig von Jahreszeit und aktuellen Tierbewegungen die besten Gebiete. Halten Sie Ausschau nach Löwen, Geparden, Leoparden, Elefanten, Giraffen, Zebras und Gnus.',
day4Accommodation: 'Luxus-Lodge oder Zeltcamp in der Serengeti',
day4Meals: 'Frühstück, Mittagessen und Abendessen',

day5: 'Tag 5',
day5Title: 'Zweiter voller Tag in der Serengeti',
day5Text:
'Genießen Sie einen weiteren vollständigen Tag zur Tierbeobachtung in der Serengeti. Erkunden Sie verschiedene Gebiete des Parks und nutzen Sie hervorragende Möglichkeiten für Fotografie und unvergessliche Tierbegegnungen.',
day5Accommodation: 'Luxus-Lodge oder Zeltcamp in der Serengeti',
day5Meals: 'Frühstück, Mittagessen und Abendessen',

day6: 'Tag 6',
day6Title: 'Serengeti zum Ngorongoro-Schutzgebiet',
day6Text:
'Genießen Sie eine morgendliche Pirschfahrt in der Serengeti, bevor Sie in Richtung Ngorongoro-Schutzgebiet fahren. Durchqueren Sie die spektakuläre Hochlandlandschaft und erreichen Sie Ihre Lodge für einen entspannten Abend.',
day6Accommodation: 'Luxus-Lodge bei Ngorongoro oder Karatu',
day6Meals: 'Frühstück, Mittagessen und Abendessen',

day7: 'Tag 7',
day7Title: 'Ngorongoro-Krater-Safari & Flug nach Sansibar',
day7Text:
'Fahren Sie in den Ngorongoro-Krater hinab und erleben Sie eine unvergessliche morgendliche Pirschfahrt. Suchen Sie nach Löwen, Elefanten, Büffeln, Zebras, Flusspferden, Hyänen und mit etwas Glück nach Spitzmaulnashörnern. Nach dem Mittagessen erfolgt der Transfer zum Flug nach Sansibar.',
day7Accommodation: 'Luxus-Strandresort auf Sansibar',
day7Meals: 'Frühstück, Mittagessen und Abendessen',

day8: 'Tag 8',
day8Title: 'Entspannung am Strand von Sansibar',
day8Text:
'Wachen Sie am Indischen Ozean auf und genießen Sie einen entspannten Tag in Ihrem Luxus-Strandresort. Schwimmen Sie im türkisfarbenen Wasser, genießen Sie den Strand und erholen Sie sich nach Ihrem Safari-Abenteuer.',
day8Accommodation: 'Luxus-Strandresort auf Sansibar',
day8Meals: 'Frühstück und Abendessen',

day9: 'Tag 9',
day9Title: 'Kulturelles Erlebnis in Stone Town',
day9Text:
'Erkunden Sie mit einem privaten Guide die historischen Straßen von Stone Town. Entdecken Sie Sansibars Geschichte, Kultur, Architektur und lokale Märkte, bevor Sie einen entspannten Abend am Meer genießen.',
day9Accommodation: 'Luxus-Strandresort auf Sansibar',
day9Meals: 'Frühstück und Abendessen',

day10: 'Tag 10',
day10Title: 'Gewürzfarm-Erlebnis',
day10Text:
'Besuchen Sie eine traditionelle Gewürzfarm und erfahren Sie, warum Sansibar als Gewürzinsel bekannt ist. Entdecken Sie Nelken, Zimt, Vanille, Kardamom und andere tropische Gewürze.',
day10Accommodation: 'Luxus-Strandresort auf Sansibar',
day10Meals: 'Frühstück und Abendessen',

day11: 'Tag 11',
day11Title: 'Schnorcheln & Strandtag auf Sansibar',
day11Text:
'Genießen Sie einen entspannten Insel-Tag mit einer optionalen Schnorchelerfahrung in den klaren Gewässern Sansibars. Entdecken Sie farbenprächtiges Meeresleben und entspannen Sie am Nachmittag am Strand.',
day11Accommodation: 'Luxus-Strandresort auf Sansibar',
day11Meals: 'Frühstück und Abendessen',

day12: 'Tag 12',
day12Title: 'Privates Sansibar-Inselerlebnis',
day12Text:
'Genießen Sie einen flexiblen Tag auf Sansibar. Wählen Sie zwischen einem privaten Stranderlebnis, kulturellen Aktivitäten, Wassersport oder entspannen Sie einfach in Ihrem Resort am Indischen Ozean.',
day12Accommodation: 'Luxus-Strandresort auf Sansibar',
day12Meals: 'Frühstück und Abendessen',

day13: 'Tag 13',
day13Title: 'Dhow-Sonnenuntergangsfahrt & Sansibar-Abend',
day13Text:
'Verbringen Sie den Tag entspannt und genießen Sie anschließend eine traditionelle Dhow-Fahrt bei Sonnenuntergang. Segeln Sie entlang der Küste und genießen Sie den wunderschönen Blick auf den Ozean.',
day13Accommodation: 'Luxus-Strandresort auf Sansibar',
day13Meals: 'Frühstück und Abendessen',

day14: 'Tag 14',
day14Title: 'Abreise von Sansibar',
day14Text:
'Genießen Sie Ihr letztes Frühstück und etwas freie Zeit im Resort, bevor Sie zum Flughafen Sansibar gebracht werden. Nehmen Sie unvergessliche Erinnerungen an Ihre Tansania-Safari und Ihren Sansibar-Urlaub mit nach Hause.',
day14Accommodation: 'Keine Unterkunft inklusive',
day14Meals: 'Frühstück',

detailsTitle: 'Safari-Details',
duration: 'Dauer',
durationValue: '14 Tage / 13 Nächte',
departure: 'Abfahrt',
departureValue: 'Arusha',
destinations: 'Reiseziele',
destinationsValue:
'Tarangire, Lake Manyara, Serengeti, Ngorongoro & Sansibar',
tourType: 'Reiseart',
tourTypeValue: 'Private Safari',
accommodationLabel: 'Unterkunft',
accommodationValue:
'Luxus-Lodge / Zeltcamp & Strandresort',
bestTime: 'Beste Reisezeit',
bestTimeValue: 'Ganzjährig',

startingFrom: 'Ab',
perPerson: 'pro Person',
priceNote:
'Basierend auf 5–6 Personen im gemeinsamen Fahrzeug. Der endgültige Preis hängt von Gruppengröße, Unterkunftskategorie, Saison und Reisedaten ab.',
requestQuote: 'Angebot anfordern',

pricesLabel: 'SAFARI + SANSIBAR PREISE',
pricesTitle: 'Preis nach Gruppengröße',
pricesText:
'Die Preise sind Richtwerte und können je nach Unterkunftskategorie, Saison, Reisedaten und Gruppengröße variieren.',
groupSize: 'Gruppengröße',
startingPrice: 'Einstiegspreis',

includedTitle: 'Im Preis enthalten',
included: [
'Privates 4x4-Safarifahrzeug mit Aufstelldach',
'Professioneller englischsprachiger Safariführer',
'Abholung vom Hotel in Arusha und Safaritransfers',
'Eintrittsgebühren für den Tarangire-Nationalpark',
'Eintrittsgebühren für den Lake-Manyara-Nationalpark',
'Eintrittsgebühren für den Serengeti-Nationalpark',
'Gebühren für das Ngorongoro-Schutzgebiet und den Krater',
'Luxus-Lodge oder Zeltcamp während der Safari',
'Luxus-Strandresort auf Sansibar',
'Mahlzeiten gemäß Reiseverlauf',
'Trinkwasser während der Safari',
'Inlandsflug von Arusha nach Sansibar',
'Flughafen- und Hoteltransfers auf Sansibar',
'Geführtes Stone-Town-Erlebnis',
'Gewürzfarm-Erlebnis',
],

excludedTitle: 'Nicht enthalten',
excluded: [
'Internationale Flüge',
'Visagebühren für Tansania',
'Reiseversicherung',
'Trinkgelder',
'Alkoholische und Premium-Getränke',
'Persönliche Ausgaben und Souvenirs',
'Nicht aufgeführte optionale Aktivitäten',
'Spa-Behandlungen',
'Zusätzliche Sansibar-Ausflüge',
],

bringLabel: 'WAS SIE MITBRINGEN SOLLTEN',
bringTitle: 'Bereiten Sie sich auf Ihre Reise vor',
whatToBring: [
'Bequeme Safari-Kleidung',
'Leichte Kleidung für den Abend',
'Warme Jacke für kühle Morgen',
'Sonnenhut und Sonnencreme',
'Bequeme Wanderschuhe',
'Badesachen für Sansibar',
'Kamera oder Fernglas',
'Persönliche Medikamente',
'Reisedokumente und Reisepass',
'Kleine Tagesrucksack',
],

readyTitle: 'Bereit für Ihr Tansania-Abenteuer?',
readyText:
'Erleben Sie eine unvergessliche Tansania-Safari und anschließend wunderschöne Strände, Kultur und Entspannung auf Sansibar.',
whatsapp: 'Über WhatsApp chatten',
},

fr: {
heroTitle: '14 jours Safari en Tanzanie + Zanzibar',
heroSubtitle:
'Découvrez le meilleur de la Tanzanie avec un safari inoubliable dans le nord suivi d’une escapade relaxante sur les plages de Zanzibar.',

overviewLabel: 'SAFARI + ZANZIBAR',
overviewTitle: '14 jours Safari en Tanzanie & Zanzibar',

paragraph1:
'Découvrez les incontournables du nord de la Tanzanie avant de vous détendre sur les magnifiques plages de Zanzibar. Ce voyage privé combine Tarangire, Manyara, Serengeti et Ngorongoro avec culture, plages et expériences insulaires à Zanzibar.',

paragraph2:
'Profitez d’un rythme confortable, d’un véhicule safari privé, d’un guide professionnel et d’hébergements soigneusement sélectionnés pendant toute votre aventure en Tanzanie.',

itineraryTitle: 'Itinéraire jour par jour',
accommodation: 'Hébergement',
meals: 'Repas',

day1: 'Jour 1',
day1Title: 'Arusha au parc national de Tarangire',
day1Text:
'Retrouvez votre guide safari privé à Arusha et partez vers le parc national de Tarangire. Profitez de votre premier safari à travers de magnifiques paysages avec de gigantesques baobabs, des éléphants, girafes, zèbres, gnous, lions et une grande variété d’oiseaux.',
day1Accommodation: 'Lodge de luxe ou camp près de Tarangire',
day1Meals: 'Déjeuner et dîner',

day2: 'Jour 2',
day2Title: 'Parc national du lac Manyara',
day2Text:
'Après le petit-déjeuner, continuez vers le parc national du lac Manyara. Explorez la forêt souterraine, les zones boisées et les rives du lac à la recherche d’éléphants, buffles, girafes, hippopotames, singes et oiseaux colorés.',
day2Accommodation: 'Lodge de luxe ou camp près du lac Manyara',
day2Meals: 'Petit-déjeuner, déjeuner et dîner',

day3: 'Jour 3',
day3Title: 'Du lac Manyara au parc national du Serengeti',
day3Text:
'Traversez les magnifiques hauts plateaux du Ngorongoro en direction du Serengeti. Entrez dans les légendaires plaines du Serengeti et profitez d’un safari l’après-midi à la recherche des animaux sauvages.',
day3Accommodation: 'Lodge de luxe ou camp dans le Serengeti',
day3Meals: 'Petit-déjeuner, déjeuner et dîner',

day4: 'Jour 4',
day4Title: 'Safari d’une journée complète dans le Serengeti',
day4Text:
'Passez une journée complète à explorer le parc national du Serengeti. Votre guide privé choisira les meilleures zones selon la saison et les mouvements récents des animaux. Recherchez lions, guépards, léopards, éléphants, girafes, zèbres et gnous.',
day4Accommodation: 'Lodge de luxe ou camp dans le Serengeti',
day4Meals: 'Petit-déjeuner, déjeuner et dîner',

day5: 'Jour 5',
day5Title: 'Deuxième journée complète dans le Serengeti',
day5Text:
'Profitez d’une nouvelle journée complète d’observation de la faune dans le Serengeti. Explorez différentes zones du parc et profitez d’excellentes possibilités de photographie et de rencontres inoubliables avec les animaux.',
day5Accommodation: 'Lodge de luxe ou camp dans le Serengeti',
day5Meals: 'Petit-déjeuner, déjeuner et dîner',

day6: 'Jour 6',
day6Title: 'Du Serengeti à la zone de conservation du Ngorongoro',
day6Text:
'Profitez d’un safari matinal dans le Serengeti avant de partir vers la zone de conservation du Ngorongoro. Traversez de magnifiques paysages montagneux et rejoignez votre lodge pour une soirée relaxante.',
day6Accommodation: 'Lodge de luxe près de Ngorongoro ou Karatu',
day6Meals: 'Petit-déjeuner, déjeuner et dîner',

day7: 'Jour 7',
day7Title: 'Safari dans le cratère du Ngorongoro & transfert à Zanzibar',
day7Text:
'Descendez dans le cratère du Ngorongoro pour un safari matinal mémorable. Recherchez lions, éléphants, buffles, zèbres, hippopotames, hyènes et, avec un peu de chance, rhinocéros noirs. Après le déjeuner, transfert pour votre vol vers Zanzibar.',
day7Accommodation: 'Complexe hôtelier de luxe à Zanzibar',
day7Meals: 'Petit-déjeuner, déjeuner et dîner',

day8: 'Jour 8',
day8Title: 'Détente sur les plages de Zanzibar',
day8Text:
'Réveillez-vous face à l’océan Indien et profitez d’une journée tranquille dans votre complexe hôtelier de luxe. Baignez-vous dans les eaux turquoise, profitez de la plage et reposez-vous après votre safari.',
day8Accommodation: 'Complexe hôtelier de luxe à Zanzibar',
day8Meals: 'Petit-déjeuner et dîner',

day9: 'Jour 9',
day9Title: 'Expérience culturelle à Stone Town',
day9Text:
'Explorez les rues historiques de Stone Town avec un guide privé. Découvrez l’histoire, la culture, l’architecture et les marchés locaux de Zanzibar avant de profiter d’une soirée relaxante au bord de l’océan.',
day9Accommodation: 'Complexe hôtelier de luxe à Zanzibar',
day9Meals: 'Petit-déjeuner et dîner',

day10: 'Jour 10',
day10Title: 'Expérience dans une ferme d’épices',
day10Text:
'Visitez une ferme traditionnelle d’épices et découvrez pourquoi Zanzibar est surnommée l’île aux épices. Découvrez les clous de girofle, la cannelle, la vanille, la cardamome et d’autres épices tropicales.',
day10Accommodation: 'Complexe hôtelier de luxe à Zanzibar',
day10Meals: 'Petit-déjeuner et dîner',

day11: 'Jour 11',
day11Title: 'Plongée avec tuba & journée plage',
day11Text:
'Profitez d’une journée insulaire relaxante avec une expérience optionnelle de plongée avec tuba dans les eaux claires de Zanzibar. Découvrez la vie marine colorée et détendez-vous sur la plage l’après-midi.',
day11Accommodation: 'Complexe hôtelier de luxe à Zanzibar',
day11Meals: 'Petit-déjeuner et dîner',

day12: 'Jour 12',
day12Title: 'Expérience privée de Zanzibar',
day12Text:
'Profitez d’une journée flexible à Zanzibar. Choisissez une expérience privée sur la plage, des activités culturelles, des activités nautiques ou détendez-vous simplement dans votre complexe au bord de l’océan Indien.',
day12Accommodation: 'Complexe hôtelier de luxe à Zanzibar',
day12Meals: 'Petit-déjeuner et dîner',

day13: 'Jour 13',
day13Title: 'Croisière en dhow au coucher du soleil',
day13Text:
'Passez la journée à vous détendre avant de profiter d’une croisière traditionnelle en dhow au coucher du soleil. Naviguez le long de la côte et admirez les magnifiques vues sur l’océan.',
day13Accommodation: 'Complexe hôtelier de luxe à Zanzibar',
day13Meals: 'Petit-déjeuner et dîner',

day14: 'Jour 14',
day14Title: 'Départ de Zanzibar',
day14Text:
'Profitez de votre dernier petit-déjeuner et de quelques moments libres avant votre transfert vers l’aéroport de Zanzibar. Repartez avec des souvenirs inoubliables de votre safari en Tanzanie et de vos vacances à Zanzibar.',
day14Accommodation: 'Aucun hébergement inclus',
day14Meals: 'Petit-déjeuner',

detailsTitle: 'Détails du safari',
duration: 'Durée',
durationValue: '14 jours / 13 nuits',
departure: 'Départ',
departureValue: 'Arusha',
destinations: 'Destinations',
destinationsValue:
'Tarangire, lac Manyara, Serengeti, Ngorongoro & Zanzibar',
tourType: 'Type de voyage',
tourTypeValue: 'Safari privé',
accommodationLabel: 'Hébergement',
accommodationValue:
'Lodge de luxe / Camp & complexe balnéaire',
bestTime: 'Meilleure période',
bestTimeValue: 'Toute l’année',

startingFrom: 'À partir de',
perPerson: 'par personne',
priceNote:
'Basé sur 5 à 6 personnes partageant le véhicule. Le prix final dépend de la taille du groupe, du niveau d’hébergement, de la saison et des dates.',
requestQuote: 'Demander un devis',

pricesLabel: 'PRIX SAFARI + ZANZIBAR',
pricesTitle: 'Prix selon la taille du groupe',
pricesText:
'Les prix sont des estimations de départ et peuvent varier selon l’hébergement, la saison, les dates de voyage et la taille du groupe.',
groupSize: 'Taille du groupe',
startingPrice: 'Prix de départ',

includedTitle: 'Inclus',
included: [
'Véhicule safari 4x4 privé avec toit ouvrant',
'Guide safari professionnel anglophone',
'Prise en charge à l’hôtel à Arusha et transferts safari',
'Frais d’entrée au parc national de Tarangire',
'Frais d’entrée au parc national du lac Manyara',
'Frais d’entrée au parc national du Serengeti',
'Frais de la zone de conservation et du cratère du Ngorongoro',
'Hébergement en lodge ou camp de luxe pendant le safari',
'Hébergement dans un complexe balnéaire de luxe à Zanzibar',
'Repas indiqués dans l’itinéraire',
'Eau potable pendant le safari',
'Vol intérieur d’Arusha à Zanzibar',
'Transferts aéroport et hôtel à Zanzibar',
'Visite guidée de Stone Town',
'Expérience dans une ferme d’épices',
],

excludedTitle: 'Non inclus',
excluded: [
'Vols internationaux',
'Frais de visa pour la Tanzanie',
'Assurance voyage',
'Pourboires',
'Boissons alcoolisées et premium',
'Dépenses personnelles et souvenirs',
'Activités optionnelles non mentionnées',
'Soins spa',
'Excursions supplémentaires à Zanzibar',
],

bringLabel: 'À EMPORTER',
bringTitle: 'Préparez votre voyage',
whatToBring: [
'Vêtements de safari confortables',
'Vêtements légers pour le soir',
'Veste chaude pour les matinées fraîches',
'Chapeau et crème solaire',
'Chaussures de marche confortables',
'Maillot de bain pour Zanzibar',
'Appareil photo ou jumelles',
'Médicaments personnels',
'Documents de voyage et passeport',
'Petit sac à dos',
],

readyTitle: 'Prêt pour votre aventure en Tanzanie ?',
readyText:
'Vivez un safari inoubliable en Tanzanie suivi de magnifiques plages, de culture et de détente à Zanzibar.',
whatsapp: 'Discuter sur WhatsApp',
},

es: {
heroTitle: '14 Días Safari en Tanzania + Zanzíbar',
heroSubtitle:
'Descubre lo mejor de Tanzania con un safari inolvidable por el norte seguido de una escapada relajante a las playas de Zanzíbar.',

overviewLabel: 'SAFARI + ZANZÍBAR',
overviewTitle: '14 Días Safari en Tanzania & Zanzíbar',

paragraph1:
'Descubre los lugares destacados del norte de Tanzania antes de relajarte en las hermosas playas de Zanzíbar. Este viaje privado combina Tarangire, Lake Manyara, Serengeti y Ngorongoro con cultura, playas y experiencias en la isla de Zanzíbar.',

paragraph2:
'Disfruta de un ritmo cómodo, vehículo safari privado, guía profesional y alojamientos cuidadosamente seleccionados durante toda tu aventura en Tanzania.',

itineraryTitle: 'Itinerario día a día',
accommodation: 'Alojamiento',
meals: 'Comidas',

day1: 'Día 1',
day1Title: 'Arusha al Parque Nacional de Tarangire',
day1Text:
'Encuentra a tu guía privado en Arusha y viaja al Parque Nacional de Tarangire. Disfruta de tu primer safari entre hermosos paisajes con enormes baobabs, elefantes, jirafas, cebras, ñus, leones y una gran variedad de aves.',
day1Accommodation: 'Lodge de lujo o campamento cerca de Tarangire',
day1Meals: 'Almuerzo y cena',

day2: 'Día 2',
day2Title: 'Parque Nacional del Lago Manyara',
day2Text:
'Después del desayuno, continúa hacia el Parque Nacional del Lago Manyara. Explora el bosque, las zonas arboladas y la orilla del lago mientras buscas elefantes, búfalos, jirafas, hipopótamos, monos y coloridas aves.',
day2Accommodation: 'Lodge de lujo o campamento cerca del Lago Manyara',
day2Meals: 'Desayuno, almuerzo y cena',

day3: 'Día 3',
day3Title: 'Del Lago Manyara al Parque Nacional del Serengeti',
day3Text:
'Viaja por las hermosas tierras altas del Ngorongoro hacia el Parque Nacional del Serengeti. Entra en las legendarias llanuras del Serengeti y disfruta de un safari por la tarde buscando animales salvajes.',
day3Accommodation: 'Lodge de lujo o campamento en Serengeti',
day3Meals: 'Desayuno, almuerzo y cena',

day4: 'Día 4',
day4Title: 'Safari de día completo en Serengeti',
day4Text:
'Pasa un día completo explorando el Parque Nacional del Serengeti. Tu guía privado seleccionará las mejores zonas según la temporada y los movimientos recientes de los animales. Busca leones, guepardos, leopardos, elefantes, jirafas, cebras y ñus.',
day4Accommodation: 'Lodge de lujo o campamento en Serengeti',
day4Meals: 'Desayuno, almuerzo y cena',

day5: 'Día 5',
day5Title: 'Segundo día completo en Serengeti',
day5Text:
'Disfruta de otro día completo observando fauna en el Serengeti. Explora diferentes zonas del parque y disfruta de excelentes oportunidades para tomar fotografías y vivir encuentros inolvidables con la vida silvestre.',
day5Accommodation: 'Lodge de lujo o campamento en Serengeti',
day5Meals: 'Desayuno, almuerzo y cena',

day6: 'Día 6',
day6Title: 'Serengeti a la Zona de Conservación del Ngorongoro',
day6Text:
'Disfruta de un safari matutino en Serengeti antes de viajar hacia la Zona de Conservación del Ngorongoro. Atraviesa paisajes espectaculares de las tierras altas y llega a tu lodge para una tarde relajante.',
day6Accommodation: 'Lodge de lujo cerca de Ngorongoro o Karatu',
day6Meals: 'Desayuno, almuerzo y cena',

day7: 'Día 7',
day7Title: 'Safari en el Cráter del Ngorongoro y traslado a Zanzíbar',
day7Text:
'Desciende al Cráter del Ngorongoro para realizar un safari matutino inolvidable. Busca leones, elefantes, búfalos, cebras, hipopótamos, hienas y, con suerte, rinocerontes negros. Después del almuerzo, traslado para tomar tu vuelo a Zanzíbar.',
day7Accommodation: 'Resort de playa de lujo en Zanzíbar',
day7Meals: 'Desayuno, almuerzo y cena',

day8: 'Día 8',
day8Title: 'Relajación en la playa de Zanzíbar',
day8Text:
'Despierta junto al Océano Índico y disfruta de un día relajado en tu resort de lujo. Nada en las aguas turquesas, disfruta de la playa y descansa después de tu aventura de safari.',
day8Accommodation: 'Resort de playa de lujo en Zanzíbar',
day8Meals: 'Desayuno y cena',

day9: 'Día 9',
day9Title: 'Experiencia cultural en Stone Town',
day9Text:
'Explora las calles históricas de Stone Town con un guía privado. Descubre la historia, cultura, arquitectura y mercados locales de Zanzíbar antes de disfrutar de una tarde relajante junto al océano.',
day9Accommodation: 'Resort de playa de lujo en Zanzíbar',
day9Meals: 'Desayuno y cena',

day10: 'Día 10',
day10Title: 'Experiencia en una granja de especias',
day10Text:
'Visita una granja tradicional de especias y descubre por qué Zanzíbar es conocida como la Isla de las Especias. Aprende sobre clavo, canela, vainilla, cardamomo y otras especias tropicales.',
day10Accommodation: 'Resort de playa de lujo en Zanzíbar',
day10Meals: 'Desayuno y cena',

day11: 'Día 11',
day11Title: 'Snorkel y día de playa en Zanzíbar',
day11Text:
'Disfruta de un día relajado en la isla con una experiencia opcional de snorkel en las aguas cristalinas de Zanzíbar. Descubre la colorida vida marina y relájate en la playa por la tarde.',
day11Accommodation: 'Resort de playa de lujo en Zanzíbar',
day11Meals: 'Desayuno y cena',

day12: 'Día 12',
day12Title: 'Experiencia privada en Zanzíbar',
day12Text:
'Disfruta de un día flexible en Zanzíbar. Elige entre una experiencia privada en la playa, actividades culturales, actividades acuáticas o simplemente relájate en tu resort junto al Océano Índico.',
day12Accommodation: 'Resort de playa de lujo en Zanzíbar',
day12Meals: 'Desayuno y cena',

day13: 'Día 13',
day13Title: 'Crucero en dhow al atardecer',
day13Text:
'Pasa el día relajándote antes de disfrutar de un tradicional crucero en dhow al atardecer. Navega por la costa y disfruta de las hermosas vistas del océano mientras se pone el sol.',
day13Accommodation: 'Resort de playa de lujo en Zanzíbar',
day13Meals: 'Desayuno y cena',

day14: 'Día 14',
day14Title: 'Salida de Zanzíbar',
day14Text:
'Disfruta de tu último desayuno y de algo de tiempo libre en el resort antes del traslado al aeropuerto de Zanzíbar. Llévate recuerdos inolvidables de tu safari por Tanzania y tus vacaciones en Zanzíbar.',
day14Accommodation: 'No incluye alojamiento',
day14Meals: 'Desayuno',

detailsTitle: 'Detalles del safari',
duration: 'Duración',
durationValue: '14 días / 13 noches',
departure: 'Salida',
departureValue: 'Arusha',
destinations: 'Destinos',
destinationsValue:
'Tarangire, Lake Manyara, Serengeti, Ngorongoro y Zanzíbar',
tourType: 'Tipo de viaje',
tourTypeValue: 'Safari privado',
accommodationLabel: 'Alojamiento',
accommodationValue:
'Lodge de lujo / Campamento y Resort de playa',
bestTime: 'Mejor época',
bestTimeValue: 'Todo el año',

startingFrom: 'Desde',
perPerson: 'por persona',
priceNote:
'Basado en 5–6 personas compartiendo el vehículo. El precio final depende del tamaño del grupo, categoría del alojamiento, temporada y fechas del viaje.',
requestQuote: 'Solicitar presupuesto',

pricesLabel: 'PRECIOS SAFARI + ZANZÍBAR',
pricesTitle: 'Precio según el tamaño del grupo',
pricesText:
'Los precios son estimaciones iniciales y pueden variar según el alojamiento, la temporada, las fechas del viaje y el tamaño del grupo.',
groupSize: 'Tamaño del grupo',
startingPrice: 'Precio inicial',

includedTitle: 'Qué está incluido',
included: [
'Vehículo safari privado 4x4 con techo elevable',
'Guía profesional de safari de habla inglesa',
'Recogida en el hotel de Arusha y traslados de safari',
'Tasas de entrada al Parque Nacional de Tarangire',
'Tasas de entrada al Parque Nacional del Lago Manyara',
'Tasas de entrada al Parque Nacional del Serengeti',
'Tasas de la Zona de Conservación y del Cráter del Ngorongoro',
'Alojamiento en lodge o campamento de lujo durante el safari',
'Alojamiento en resort de playa de lujo en Zanzíbar',
'Comidas indicadas en el itinerario',
'Agua potable durante el safari',
'Vuelo doméstico de Arusha a Zanzíbar',
'Traslados de aeropuerto y hotel en Zanzíbar',
'Experiencia guiada en Stone Town',
'Experiencia en una granja de especias',
],

excludedTitle: 'Qué no está incluido',
excluded: [
'Vuelos internacionales',
'Tasas de visado de Tanzania',
'Seguro de viaje',
'Propinas',
'Bebidas alcohólicas y premium',
'Gastos personales y recuerdos',
'Actividades opcionales no indicadas',
'Tratamientos de spa',
'Excursiones adicionales en Zanzíbar',
],

bringLabel: 'QUÉ LLEVAR',
bringTitle: 'Prepárate para tu viaje',
whatToBring: [
'Ropa cómoda para safari',
'Ropa ligera para la noche',
'Chaqueta abrigada para las mañanas frescas',
'Sombrero y protector solar',
'Calzado cómodo para caminar',
'Bañador para Zanzíbar',
'Cámara o prismáticos',
'Medicamentos personales',
'Documentos de viaje y pasaporte',
'Bolsa pequeña para el día',
],

readyTitle: '¿Listo para tu aventura en Tanzania?',
readyText:
'Vive un safari inolvidable en Tanzania seguido de hermosas playas, cultura y relajación en Zanzíbar.',
whatsapp: 'Chatear por WhatsApp',
},
};

const priceRows = {
en: [
{ people: '1 person', price: 'US$4,650' },
{ people: '2 people', price: 'US$3,250 per person' },
{ people: '3 people', price: 'US$2,850 per person' },
{ people: '4 people', price: 'US$2,650 per person' },
{ people: '5–6 people', price: 'US$2,450 per person' },
],
de: [
{ people: '1 Person', price: 'US$4,650' },
{ people: '2 Personen', price: 'US$3,250 pro Person' },
{ people: '3 Personen', price: 'US$2,850 pro Person' },
{ people: '4 Personen', price: 'US$2,650 pro Person' },
{ people: '5–6 Personen', price: 'US$2,450 pro Person' },
],
fr: [
{ people: '1 personne', price: 'US$4,650' },
{ people: '2 personnes', price: 'US$3,250 par personne' },
{ people: '3 personnes', price: 'US$2,850 par personne' },
{ people: '4 personnes', price: 'US$2,650 par personne' },
{ people: '5–6 personnes', price: 'US$2,450 par personne' },
],
es: [
{ people: '1 persona', price: 'US$4,650' },
{ people: '2 personas', price: 'US$3,250 por persona' },
{ people: '3 personas', price: 'US$2,850 por persona' },
{ people: '4 personas', price: 'US$2,650 por persona' },
{ people: '5–6 personas', price: 'US$2,450 por persona' },
],
};

const itineraryKeys = [
'day1',
'day2',
'day3',
'day4',
'day5',
'day6',
'day7',
'day8',
'day9',
'day10',
'day11',
'day12',
'day13',
'day14',
] as const;

export default function FourteenDaysSafariZanzibarPage() {
const { language } = useLanguage();

const lang: LanguageCode =
language === 'de' ||
language === 'fr' ||
language === 'es'
? language
: 'en';

const t = translations[lang];

const prices = priceRows[lang];

return (
<main>
<Header />
<WhatsApp />

<PageHero
title={t.heroTitle}
subtitle={t.heroSubtitle}
image="/images/fleet.jpeg"
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

{itineraryKeys.map((key) => {
const number = key.replace('day', '');

const title =
t[
`${key}Title` as keyof typeof t
] as string;

const text =
t[
`${key}Text` as keyof typeof t
] as string;

const accommodation =
t[
`${key}Accommodation` as keyof typeof t
] as string;

const meals =
t[
`${key}Meals` as keyof typeof t
] as string;

return (
<article
key={key}
className="rounded-3xl bg-cream p-7 shadow-lg"
>

<p className="font-bold text-gold">
{t[`day${number}` as keyof typeof t] as string}
</p>

<h3 className="mt-2 text-2xl font-bold text-forest">
{title}
</h3>

<p className="mt-4 leading-7 text-black/70">
{text}
</p>

<div className="mt-5 space-y-2 border-t border-black/10 pt-5 text-black/70">

<p>
<strong className="text-forest">
{t.accommodation}:
</strong>{' '}
{accommodation}
</p>

<p>
<strong className="text-forest">
{t.meals}:
</strong>{' '}
{meals}
</p>

</div>

</article>
);
})}

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
US$2,450
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

{prices.map((row) => (
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