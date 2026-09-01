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
heroTitle: '12 Days Honeymoon Safari + Zanzibar',
heroSubtitle:
'A romantic Tanzania honeymoon combining unforgettable wildlife, luxury safari experiences and the beautiful beaches of Zanzibar.',

overviewLabel: 'HONEYMOON SAFARI & ZANZIBAR',
overviewTitle: 'A Romantic Tanzania Honeymoon',

paragraph1:
'Begin your honeymoon with an unforgettable private safari through Tarangire, Lake Manyara, Serengeti and Ngorongoro before flying to Zanzibar for a relaxing beach escape.',

paragraph2:
'This carefully designed journey combines wildlife adventure, comfortable accommodation, private experiences and time to relax together on the Indian Ocean.',

itineraryTitle: 'Day-by-Day Itinerary',

accommodation: 'Accommodation',
meals: 'Meals',

day1: 'Day 1',
day1Title: 'Arusha to Tarangire National Park',
day1Text:
'Meet your private safari guide in Arusha and drive to Tarangire National Park. Enjoy a romantic first safari with beautiful landscapes, giant baobab trees and excellent wildlife viewing. Look for elephants, giraffes, zebras, wildebeest, lions and abundant birdlife.',
day1Accommodation: 'Lodge or luxury tented camp',
day1Meals: 'Lunch and Dinner',

day2: 'Day 2',
day2Title: 'Lake Manyara National Park',
day2Text:
'After breakfast, continue to Lake Manyara National Park for a scenic game drive. Explore the forest, woodland and lakeshore areas while looking for elephants, buffaloes, giraffes, hippos, monkeys and colourful birdlife.',
day2Accommodation: 'Lodge or luxury tented camp',
day2Meals: 'Breakfast, Lunch and Dinner',

day3: 'Day 3',
day3Title: 'Lake Manyara to Serengeti National Park',
day3Text:
'Travel through the beautiful Ngorongoro highlands toward Serengeti. Enter the legendary Serengeti plains and enjoy an afternoon game drive. Watch the sunset together in the heart of Tanzania’s most famous wildlife destination.',
day3Accommodation: 'Luxury lodge or tented camp in Serengeti',
day3Meals: 'Breakfast, Lunch and Dinner',

day4: 'Day 4',
day4Title: 'Full-Day Serengeti Safari',
day4Text:
'Enjoy a full private game-drive day in Serengeti. Your guide will select the best wildlife areas according to the season and animal movements. Spend the day searching for lions, cheetahs, leopards, elephants, giraffes and large herds.',
day4Accommodation: 'Luxury lodge or tented camp in Serengeti',
day4Meals: 'Breakfast, Lunch and Dinner',

day5: 'Day 5',
day5Title: 'Romantic Serengeti Experience',
day5Text:
'Enjoy another unforgettable day in Serengeti with morning and afternoon game drives. Take time to relax together, enjoy the scenery and experience the peaceful beauty of the endless plains.',
day5Accommodation: 'Luxury lodge or tented camp in Serengeti',
day5Meals: 'Breakfast, Lunch and Dinner',

day6: 'Day 6',
day6Title: 'Serengeti to Ngorongoro Conservation Area',
day6Text:
'Enjoy a final morning game drive in Serengeti before travelling toward the Ngorongoro Conservation Area. Take in spectacular highland scenery and enjoy a relaxing evening at your lodge.',
day6Accommodation: 'Luxury lodge near Ngorongoro or Karatu',
day6Meals: 'Breakfast, Lunch and Dinner',

day7: 'Day 7',
day7Title: 'Ngorongoro Crater Safari & Flight to Zanzibar',
day7Text:
'Descend into the Ngorongoro Crater for an unforgettable morning game drive. Search for elephants, lions, buffaloes, zebras, hippos, hyenas and, with luck, black rhinos. After the safari, transfer for your flight to Zanzibar and begin your romantic island escape.',
day7Accommodation: 'Luxury beach resort in Zanzibar',
day7Meals: 'Breakfast, Lunch and Dinner',

day8: 'Day 8',
day8Title: 'Zanzibar Beach Relaxation',
day8Text:
'Wake up beside the Indian Ocean and enjoy a relaxed honeymoon day. Spend time on the beach, swim in the warm turquoise water and enjoy your resort at your own pace. This is your day to slow down and enjoy Zanzibar together.',
day8Accommodation: 'Luxury beach resort in Zanzibar',
day8Meals: 'Breakfast and Dinner',

day9: 'Day 9',
day9Title: 'Stone Town & Romantic Zanzibar Experience',
day9Text:
'Explore the historic streets of Stone Town with your private guide. Discover Zanzibar’s rich history, local culture and beautiful architecture before enjoying a romantic evening together.',
day9Accommodation: 'Luxury beach resort in Zanzibar',
day9Meals: 'Breakfast and Dinner',

day10: 'Day 10',
day10Title: 'Spice Farm & Beach Experience',
day10Text:
'Visit a traditional spice farm and discover why Zanzibar is known as the Spice Island. Enjoy a private cultural experience before returning to the coast for a relaxed afternoon on the beach.',
day10Accommodation: 'Luxury beach resort in Zanzibar',
day10Meals: 'Breakfast and Dinner',

day11: 'Day 11',
day11Title: 'Private Romantic Zanzibar Day',
day11Text:
'Enjoy a special honeymoon day designed for relaxation and romance. Choose from a private beach experience, sunset dhow cruise, snorkelling or simply relaxing together at your luxury resort.',
day11Accommodation: 'Luxury beach resort in Zanzibar',
day11Meals: 'Breakfast and Dinner',

day12: 'Day 12',
day12Title: 'Zanzibar Departure',
day12Text:
'Enjoy your final breakfast in Zanzibar and some free time before your transfer to Zanzibar Airport for your onward journey. Take home unforgettable memories from your Tanzania honeymoon safari and Zanzibar escape.',
day12Accommodation: 'No accommodation included',
day12Meals: 'Breakfast',

detailsTitle: 'Honeymoon Details',

duration: 'Duration',
durationValue: '12 Days / 11 Nights',

departure: 'Departure',
departureValue: 'Arusha',

destinations: 'Destinations',
destinationsValue:
'Tarangire, Lake Manyara, Serengeti, Ngorongoro & Zanzibar',

tourType: 'Tour Type',
tourTypeValue: 'Private Honeymoon Safari',

accommodationLabel: 'Accommodation',
accommodationValue:
'Luxury Lodge / Tented Camp & Beach Resort',

bestTime: 'Best Time',
bestTimeValue: 'All Year',

planHoneymoon: 'Plan Your Honeymoon',

priceLabel: 'HONEYMOON PRICE',
priceTitle: 'Honeymoon Price',

priceText:
'This honeymoon package is designed for two people sharing. Final pricing may vary depending on accommodation level, season and travel dates.',

honeymoonPrice: 'Honeymoon Price',
perPerson: 'per person',
forTwo: 'US$8,500 for two people',
basedOnTwo: 'Based on two people sharing.',

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
'Spa treatments and private romantic experiences',
'Additional Zanzibar excursions',
],

bringLabel: 'WHAT TO BRING',
bringTitle: 'Prepare for Your Honeymoon',

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

readyTitle: 'Ready for Your Honeymoon Adventure?',

readyText:
'Let Kilimanjaro Travel help you create a romantic safari and Zanzibar experience tailored to your travel dates and preferences.',

requestQuote: 'Request a Quote',
whatsapp: 'Chat on WhatsApp',
},

de: {
heroTitle: '12 Tage Flitterwochen-Safari + Sansibar',
heroSubtitle:
'Eine romantische Tansania-Flitterwochenreise mit unvergesslicher Tierwelt, luxuriösen Safari-Erlebnissen und den wunderschönen Stränden Sansibars.',

overviewLabel: 'FLITTERWOCHEN-SAFARI & SANSIBAR',
overviewTitle: 'Romantische Flitterwochen in Tansania',

paragraph1:
'Beginnen Sie Ihre Flitterwochen mit einer unvergesslichen privaten Safari durch Tarangire, Lake Manyara, Serengeti und Ngorongoro, bevor Sie nach Sansibar zu einem entspannten Strandaufenthalt fliegen.',

paragraph2:
'Diese sorgfältig geplante Reise verbindet Wildnisabenteuer, komfortable Unterkünfte, private Erlebnisse und Zeit zum gemeinsamen Entspannen am Indischen Ozean.',

itineraryTitle: 'Tagesprogramm',

accommodation: 'Unterkunft',
meals: 'Mahlzeiten',

day1: 'Tag 1',
day1Title: 'Arusha zum Tarangire-Nationalpark',
day1Text:
'Treffen Sie Ihren privaten Safariführer in Arusha und fahren Sie zum Tarangire-Nationalpark. Genießen Sie Ihre erste romantische Safari mit wunderschönen Landschaften, riesigen Baobab-Bäumen und hervorragender Tierbeobachtung. Halten Sie Ausschau nach Elefanten, Giraffen, Zebras, Gnus, Löwen und zahlreichen Vogelarten.',
day1Accommodation: 'Lodge oder luxuriöses Zeltcamp',
day1Meals: 'Mittagessen und Abendessen',

day2: 'Tag 2',
day2Title: 'Lake-Manyara-Nationalpark',
day2Text:
'Nach dem Frühstück fahren Sie zum Lake-Manyara-Nationalpark für eine landschaftlich reizvolle Pirschfahrt. Erkunden Sie Wald, Buschland und Uferbereiche und halten Sie Ausschau nach Elefanten, Büffeln, Giraffen, Flusspferden, Affen und farbenprächtigen Vögeln.',
day2Accommodation: 'Lodge oder luxuriöses Zeltcamp',
day2Meals: 'Frühstück, Mittagessen und Abendessen',

day3: 'Tag 3',
day3Title: 'Lake Manyara zur Serengeti',
day3Text:
'Fahren Sie durch das wunderschöne Ngorongoro-Hochland in Richtung Serengeti. Betreten Sie die legendären Serengeti-Ebenen und genießen Sie eine Pirschfahrt am Nachmittag. Erleben Sie gemeinsam den Sonnenuntergang im Herzen von Tansanias berühmtestem Wildtiergebiet.',
day3Accommodation: 'Luxus-Lodge oder Zeltcamp in der Serengeti',
day3Meals: 'Frühstück, Mittagessen und Abendessen',

day4: 'Tag 4',
day4Title: 'Ganztägige Serengeti-Safari',
day4Text:
'Genießen Sie einen ganzen privaten Safaritag in der Serengeti. Ihr Guide wählt je nach Jahreszeit und Tierbewegungen die besten Gebiete aus. Halten Sie Ausschau nach Löwen, Geparden, Leoparden, Elefanten, Giraffen und großen Herden.',
day4Accommodation: 'Luxus-Lodge oder Zeltcamp in der Serengeti',
day4Meals: 'Frühstück, Mittagessen und Abendessen',

day5: 'Tag 5',
day5Title: 'Romantisches Serengeti-Erlebnis',
day5Text:
'Genießen Sie einen weiteren unvergesslichen Tag in der Serengeti mit morgendlichen und nachmittäglichen Pirschfahrten. Nehmen Sie sich Zeit zum Entspannen, genießen Sie die Landschaft und erleben Sie gemeinsam die ruhige Schönheit der endlosen Ebenen.',
day5Accommodation: 'Luxus-Lodge oder Zeltcamp in der Serengeti',
day5Meals: 'Frühstück, Mittagessen und Abendessen',

day6: 'Tag 6',
day6Title: 'Serengeti zum Ngorongoro-Schutzgebiet',
day6Text:
'Genießen Sie eine letzte morgendliche Pirschfahrt in der Serengeti, bevor Sie zum Ngorongoro-Schutzgebiet weiterfahren. Bewundern Sie die spektakuläre Hochlandlandschaft und verbringen Sie einen entspannten Abend in Ihrer Lodge.',
day6Accommodation: 'Luxus-Lodge bei Ngorongoro oder Karatu',
day6Meals: 'Frühstück, Mittagessen und Abendessen',

day7: 'Tag 7',
day7Title: 'Ngorongoro-Krater-Safari & Flug nach Sansibar',
day7Text:
'Fahren Sie in den Ngorongoro-Krater hinab und genießen Sie eine unvergessliche morgendliche Pirschfahrt. Suchen Sie nach Elefanten, Löwen, Büffeln, Zebras, Flusspferden, Hyänen und mit etwas Glück Spitzmaulnashörnern. Nach der Safari Transfer zum Flug nach Sansibar und Beginn Ihres romantischen Inselaufenthalts.',
day7Accommodation: 'Luxuriöses Strandresort in Sansibar',
day7Meals: 'Frühstück, Mittagessen und Abendessen',

day8: 'Tag 8',
day8Title: 'Entspannung am Strand von Sansibar',
day8Text:
'Wachen Sie am Indischen Ozean auf und genießen Sie einen entspannten Flitterwochentag. Verbringen Sie Zeit am Strand, schwimmen Sie im warmen türkisfarbenen Wasser und genießen Sie Ihr Resort in Ihrem eigenen Tempo.',
day8Accommodation: 'Luxuriöses Strandresort in Sansibar',
day8Meals: 'Frühstück und Abendessen',

day9: 'Tag 9',
day9Title: 'Stone Town & romantisches Sansibar-Erlebnis',
day9Text:
'Erkunden Sie mit Ihrem privaten Guide die historischen Straßen von Stone Town. Entdecken Sie Sansibars Geschichte, lokale Kultur und wunderschöne Architektur, bevor Sie einen romantischen Abend gemeinsam genießen.',
day9Accommodation: 'Luxuriöses Strandresort in Sansibar',
day9Meals: 'Frühstück und Abendessen',

day10: 'Tag 10',
day10Title: 'Gewürzfarm & Stranderlebnis',
day10Text:
'Besuchen Sie eine traditionelle Gewürzfarm und entdecken Sie, warum Sansibar als Gewürzinsel bekannt ist. Genießen Sie ein privates kulturelles Erlebnis, bevor Sie für einen entspannten Nachmittag an die Küste zurückkehren.',
day10Accommodation: 'Luxuriöses Strandresort in Sansibar',
day10Meals: 'Frühstück und Abendessen',

day11: 'Tag 11',
day11Title: 'Privater romantischer Sansibar-Tag',
day11Text:
'Genießen Sie einen besonderen Flitterwochentag voller Entspannung und Romantik. Wählen Sie zwischen einem privaten Stranderlebnis, einer Sonnenuntergangs-Dhau-Fahrt, Schnorcheln oder entspannen Sie einfach gemeinsam in Ihrem Luxusresort.',
day11Accommodation: 'Luxuriöses Strandresort in Sansibar',
day11Meals: 'Frühstück und Abendessen',

day12: 'Tag 12',
day12Title: 'Abreise aus Sansibar',
day12Text:
'Genießen Sie Ihr letztes Frühstück in Sansibar und etwas freie Zeit, bevor Sie zum Flughafen Sansibar gebracht werden. Nehmen Sie unvergessliche Erinnerungen an Ihre Tansania-Flitterwochen und Ihren Sansibar-Aufenthalt mit nach Hause.',
day12Accommodation: 'Keine Unterkunft inklusive',
day12Meals: 'Frühstück',

detailsTitle: 'Flitterwochen-Details',

duration: 'Dauer',
durationValue: '12 Tage / 11 Nächte',

departure: 'Abfahrt',
departureValue: 'Arusha',

destinations: 'Reiseziele',
destinationsValue:
'Tarangire, Lake Manyara, Serengeti, Ngorongoro & Sansibar',

tourType: 'Reiseart',
tourTypeValue: 'Private Flitterwochen-Safari',

accommodationLabel: 'Unterkunft',
accommodationValue:
'Luxus-Lodge / Zeltcamp & Strandresort',

bestTime: 'Beste Reisezeit',
bestTimeValue: 'Ganzjährig',

planHoneymoon: 'Flitterwochen planen',

priceLabel: 'FLITTERWOCHEN-PREIS',
priceTitle: 'Preis für Flitterwochen',

priceText:
'Dieses Flitterwochenpaket ist für zwei Personen ausgelegt. Der endgültige Preis kann je nach Unterkunftskategorie, Saison und Reisedaten variieren.',

honeymoonPrice: 'Flitterwochen-Preis',
perPerson: 'pro Person',
forTwo: 'US$8.500 für zwei Personen',
basedOnTwo: 'Basierend auf zwei gemeinsam reisenden Personen.',

includedTitle: 'Im Preis enthalten',

included: [
'Privates 4x4-Safarifahrzeug mit Aufstelldach',
'Professioneller englischsprachiger Safariführer',
'Abholung vom Hotel in Arusha und Safari-Transfers',
'Eintrittsgebühren für den Tarangire-Nationalpark',
'Eintrittsgebühren für den Lake-Manyara-Nationalpark',
'Eintrittsgebühren für den Serengeti-Nationalpark',
'Gebühren für das Ngorongoro-Schutzgebiet und den Krater',
'Luxus-Lodge oder Zeltcamp während der Safari',
'Luxuriöses Strandresort auf Sansibar',
'Mahlzeiten gemäß Reiseverlauf',
'Trinkwasser während der Safari',
'Inlandsflug von Arusha nach Sansibar',
'Flughafen- und Hoteltransfers auf Sansibar',
'Geführte Stone-Town-Erfahrung',
'Gewürzfarm-Erlebnis',
],

excludedTitle: 'Nicht enthalten',

excluded: [
'Internationale Flüge',
'Tansania-Visagebühren',
'Reiseversicherung',
'Trinkgelder',
'Alkoholische und Premium-Getränke',
'Persönliche Ausgaben und Souvenirs',
'Nicht aufgeführte optionale Aktivitäten',
'Spa-Behandlungen und private romantische Erlebnisse',
'Zusätzliche Sansibar-Ausflüge',
],

bringLabel: 'WAS SIE MITBRINGEN SOLLTEN',
bringTitle: 'Bereiten Sie sich auf Ihre Flitterwochen vor',

whatToBring: [
'Bequeme Safari-Kleidung',
'Leichte Kleidung für den Abend',
'Warme Jacke für kühle Morgen',
'Sonnenhut und Sonnencreme',
'Bequeme Wanderschuhe',
'Badebekleidung für Sansibar',
'Kamera oder Fernglas',
'Persönliche Medikamente',
'Reisedokumente und Reisepass',
'Kleine Tagestasche',
],

readyTitle: 'Bereit für Ihre Flitterwochen?',

readyText:
'Lassen Sie Kilimanjaro Travel eine romantische Safari- und Sansibar-Reise gestalten, die auf Ihre Reisedaten und Wünsche zugeschnitten ist.',

requestQuote: 'Angebot anfordern',
whatsapp: 'Über WhatsApp chatten',
},

fr: {
heroTitle: '12 jours Safari de noces + Zanzibar',
heroSubtitle:
'Une lune de miel romantique en Tanzanie combinant une faune exceptionnelle, des safaris de luxe et les magnifiques plages de Zanzibar.',

overviewLabel: 'SAFARI DE NOCES & ZANZIBAR',
overviewTitle: 'Une lune de miel romantique en Tanzanie',

paragraph1:
'Commencez votre lune de miel par un safari privé inoubliable à travers Tarangire, le lac Manyara, le Serengeti et le Ngorongoro avant de prendre un vol pour Zanzibar pour une escapade relaxante à la plage.',

paragraph2:
'Ce voyage soigneusement conçu combine aventure animalière, hébergement confortable, expériences privées et moments de détente à deux au bord de l’océan Indien.',

itineraryTitle: 'Itinéraire jour par jour',

accommodation: 'Hébergement',
meals: 'Repas',

day1: 'Jour 1',
day1Title: 'Arusha au parc national de Tarangire',
day1Text:
'Rencontrez votre guide safari privé à Arusha et partez vers le parc national de Tarangire. Profitez d’un premier safari romantique avec de magnifiques paysages, de grands baobabs et une excellente observation de la faune. Recherchez les éléphants, girafes, zèbres, gnous, lions et de nombreuses espèces d’oiseaux.',
day1Accommodation: 'Lodge ou camp de tentes de luxe',
day1Meals: 'Déjeuner et dîner',

day2: 'Jour 2',
day2Title: 'Parc national du lac Manyara',
day2Text:
'Après le petit-déjeuner, continuez vers le parc national du lac Manyara pour un safari panoramique. Explorez la forêt, les zones boisées et les rives du lac à la recherche d’éléphants, buffles, girafes, hippopotames, singes et oiseaux colorés.',
day2Accommodation: 'Lodge ou camp de tentes de luxe',
day2Meals: 'Petit-déjeuner, déjeuner et dîner',

day3: 'Jour 3',
day3Title: 'Du lac Manyara au parc national du Serengeti',
day3Text:
'Traversez les magnifiques hauts plateaux du Ngorongoro en direction du Serengeti. Entrez dans les légendaires plaines du Serengeti et profitez d’un safari l’après-midi. Admirez ensemble le coucher du soleil au cœur de la destination animalière la plus célèbre de Tanzanie.',
day3Accommodation: 'Lodge ou camp de luxe dans le Serengeti',
day3Meals: 'Petit-déjeuner, déjeuner et dîner',

day4: 'Jour 4',
day4Title: 'Safari d’une journée complète dans le Serengeti',
day4Text:
'Profitez d’une journée complète de safari privé dans le Serengeti. Votre guide choisira les meilleures zones d’observation selon la saison et les déplacements des animaux. Recherchez les lions, guépards, léopards, éléphants, girafes et grands troupeaux.',
day4Accommodation: 'Lodge ou camp de luxe dans le Serengeti',
day4Meals: 'Petit-déjeuner, déjeuner et dîner',

day5: 'Jour 5',
day5Title: 'Expérience romantique dans le Serengeti',
day5Text:
'Profitez d’une autre journée inoubliable dans le Serengeti avec des safaris matin et après-midi. Prenez le temps de vous détendre ensemble, d’admirer les paysages et de profiter de la beauté paisible des plaines infinies.',
day5Accommodation: 'Lodge ou camp de luxe dans le Serengeti',
day5Meals: 'Petit-déjeuner, déjeuner et dîner',

day6: 'Jour 6',
day6Title: 'Du Serengeti à la zone de conservation du Ngorongoro',
day6Text:
'Profitez d’un dernier safari matinal dans le Serengeti avant de rejoindre la zone de conservation du Ngorongoro. Admirez les paysages spectaculaires des hauts plateaux et profitez d’une soirée relaxante dans votre lodge.',
day6Accommodation: 'Lodge de luxe près du Ngorongoro ou Karatu',
day6Meals: 'Petit-déjeuner, déjeuner et dîner',

day7: 'Jour 7',
day7Title: 'Safari dans le cratère du Ngorongoro & vol vers Zanzibar',
day7Text:
'Descendez dans le cratère du Ngorongoro pour un safari matinal inoubliable. Recherchez les éléphants, lions, buffles, zèbres, hippopotames, hyènes et, avec un peu de chance, les rhinocéros noirs. Après le safari, transfert pour votre vol vers Zanzibar et début de votre escapade romantique sur l’île.',
day7Accommodation: 'Resort de luxe en bord de mer à Zanzibar',
day7Meals: 'Petit-déjeuner, déjeuner et dîner',

day8: 'Jour 8',
day8Title: 'Détente sur la plage de Zanzibar',
day8Text:
'Réveillez-vous face à l’océan Indien et profitez d’une journée de lune de miel relaxante. Passez du temps sur la plage, nagez dans les eaux turquoise et profitez de votre resort à votre rythme.',
day8Accommodation: 'Resort de luxe en bord de mer à Zanzibar',
day8Meals: 'Petit-déjeuner et dîner',

day9: 'Jour 9',
day9Title: 'Stone Town & expérience romantique à Zanzibar',
day9Text:
'Explorez les rues historiques de Stone Town avec votre guide privé. Découvrez l’histoire, la culture locale et la magnifique architecture de Zanzibar avant de profiter d’une soirée romantique à deux.',
day9Accommodation: 'Resort de luxe en bord de mer à Zanzibar',
day9Meals: 'Petit-déjeuner et dîner',

day10: 'Jour 10',
day10Title: 'Ferme aux épices & expérience balnéaire',
day10Text:
'Visitez une ferme traditionnelle d’épices et découvrez pourquoi Zanzibar est connue comme l’île aux épices. Profitez d’une expérience culturelle privée avant de retourner sur la côte pour un après-midi relaxant à la plage.',
day10Accommodation: 'Resort de luxe en bord de mer à Zanzibar',
day10Meals: 'Petit-déjeuner et dîner',

day11: 'Jour 11',
day11Title: 'Journée romantique privée à Zanzibar',
day11Text:
'Profitez d’une journée spéciale de lune de miel dédiée à la détente et à la romance. Choisissez une expérience privée sur la plage, une croisière en dhow au coucher du soleil, du snorkeling ou profitez simplement de votre resort de luxe.',
day11Accommodation: 'Resort de luxe en bord de mer à Zanzibar',
day11Meals: 'Petit-déjeuner et dîner',

day12: 'Jour 12',
day12Title: 'Départ de Zanzibar',
day12Text:
'Profitez de votre dernier petit-déjeuner à Zanzibar et d’un peu de temps libre avant votre transfert vers l’aéroport de Zanzibar. Emportez des souvenirs inoubliables de votre lune de miel en Tanzanie et de votre escapade à Zanzibar.',
day12Accommodation: 'Aucun hébergement inclus',
day12Meals: 'Petit-déjeuner',

detailsTitle: 'Détails de la lune de miel',

duration: 'Durée',
durationValue: '12 jours / 11 nuits',

departure: 'Départ',
departureValue: 'Arusha',

destinations: 'Destinations',
destinationsValue:
'Tarangire, lac Manyara, Serengeti, Ngorongoro & Zanzibar',

tourType: 'Type de voyage',
tourTypeValue: 'Safari privé de lune de miel',

accommodationLabel: 'Hébergement',
accommodationValue:
'Lodge / camp de luxe & resort balnéaire',

bestTime: 'Meilleure période',
bestTimeValue: 'Toute l’année',

planHoneymoon: 'Planifier votre lune de miel',

priceLabel: 'PRIX DE LA LUNE DE MIEL',
priceTitle: 'Prix de la lune de miel',

priceText:
'Ce forfait est conçu pour deux personnes partageant la même chambre. Le prix final peut varier selon le niveau d’hébergement, la saison et les dates de voyage.',

honeymoonPrice: 'Prix de la lune de miel',
perPerson: 'par personne',
forTwo: '8 500 USD pour deux personnes',
basedOnTwo: 'Basé sur deux personnes partageant.',

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
'Hébergement dans un resort de luxe à Zanzibar',
'Repas indiqués dans l’itinéraire',
'Eau potable pendant le safari',
'Vol intérieur d’Arusha à Zanzibar',
'Transferts aéroport et hôtel à Zanzibar',
'Visite guidée de Stone Town',
'Expérience dans une ferme aux épices',
],

excludedTitle: 'Non inclus',

excluded: [
'Vols internationaux',
'Frais de visa pour la Tanzanie',
'Assurance voyage',
'Pourboires',
'Boissons alcoolisées et premium',
'Dépenses personnelles et souvenirs',
'Activités optionnelles non mentionnées dans l’itinéraire',
'Soins spa et expériences romantiques privées',
'Excursions supplémentaires à Zanzibar',
],

bringLabel: 'À EMPORTER',
bringTitle: 'Préparez votre lune de miel',

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

readyTitle: 'Prêt pour votre aventure de lune de miel ?',

readyText:
'Laissez Kilimanjaro Travel créer une expérience romantique de safari et Zanzibar adaptée à vos dates de voyage et à vos préférences.',

requestQuote: 'Demander un devis',
whatsapp: 'Discuter sur WhatsApp',
},

es: {
heroTitle: '12 Días de Safari de Luna de Miel + Zanzíbar',
heroSubtitle:
'Una luna de miel romántica en Tanzania que combina una fauna inolvidable, experiencias de safari de lujo y las hermosas playas de Zanzíbar.',

overviewLabel: 'SAFARI DE LUNA DE MIEL & ZANZÍBAR',
overviewTitle: 'Una Luna de Miel Romántica en Tanzania',

paragraph1:
'Comienza tu luna de miel con un safari privado inolvidable por Tarangire, Lake Manyara, Serengeti y Ngorongoro antes de volar a Zanzíbar para disfrutar de una escapada relajante en la playa.',

paragraph2:
'Este viaje cuidadosamente diseñado combina aventura, alojamiento confortable, experiencias privadas y tiempo para relajarse juntos junto al océano Índico.',

itineraryTitle: 'Itinerario día a día',

accommodation: 'Alojamiento',
meals: 'Comidas',

day1: 'Día 1',
day1Title: 'Arusha al Parque Nacional de Tarangire',
day1Text:
'Conoce a tu guía privado de safari en Arusha y dirígete al Parque Nacional de Tarangire. Disfruta de tu primer safari romántico con hermosos paisajes, enormes baobabs y excelentes oportunidades para observar fauna. Busca elefantes, jirafas, cebras, ñus, leones y una gran variedad de aves.',
day1Accommodation: 'Lodge o campamento de lujo',
day1Meals: 'Almuerzo y cena',

day2: 'Día 2',
day2Title: 'Parque Nacional del Lago Manyara',
day2Text:
'Después del desayuno, continúa hacia el Parque Nacional del Lago Manyara para realizar un safari panorámico. Explora el bosque, las zonas arboladas y las orillas del lago buscando elefantes, búfalos, jirafas, hipopótamos, monos y coloridas aves.',
day2Accommodation: 'Lodge o campamento de lujo',
day2Meals: 'Desayuno, almuerzo y cena',

day3: 'Día 3',
day3Title: 'Del Lago Manyara al Parque Nacional del Serengeti',
day3Text:
'Viaja por las hermosas tierras altas del Ngorongoro hacia el Serengeti. Entra en las legendarias llanuras del Serengeti y disfruta de un safari por la tarde. Contempla juntos la puesta de sol en el corazón del destino de fauna más famoso de Tanzania.',
day3Accommodation: 'Lodge o campamento de lujo en Serengeti',
day3Meals: 'Desayuno, almuerzo y cena',

day4: 'Día 4',
day4Title: 'Safari de día completo en Serengeti',
day4Text:
'Disfruta de un día completo de safari privado en el Serengeti. Tu guía seleccionará las mejores zonas según la temporada y los movimientos de los animales. Busca leones, guepardos, leopardos, elefantes, jirafas y grandes manadas.',
day4Accommodation: 'Lodge o campamento de lujo en Serengeti',
day4Meals: 'Desayuno, almuerzo y cena',

day5: 'Día 5',
day5Title: 'Experiencia romántica en Serengeti',
day5Text:
'Disfruta de otro día inolvidable en Serengeti con safaris por la mañana y por la tarde. Tómate tiempo para relajarte juntos, disfrutar del paisaje y experimentar la tranquilidad de las interminables llanuras.',
day5Accommodation: 'Lodge o campamento de lujo en Serengeti',
day5Meals: 'Desayuno, almuerzo y cena',

day6: 'Día 6',
day6Title: 'Del Serengeti al Área de Conservación del Ngorongoro',
day6Text:
'Disfruta de un último safari matutino en Serengeti antes de viajar hacia el Área de Conservación del Ngorongoro. Admira los espectaculares paisajes de las tierras altas y disfruta de una noche relajante en tu lodge.',
day6Accommodation: 'Lodge de lujo cerca de Ngorongoro o Karatu',
day6Meals: 'Desayuno, almuerzo y cena',

day7: 'Día 7',
day7Title: 'Safari en el Cráter del Ngorongoro y vuelo a Zanzíbar',
day7Text:
'Desciende al Cráter del Ngorongoro para disfrutar de un inolvidable safari matutino. Busca elefantes, leones, búfalos, cebras, hipopótamos, hienas y, con suerte, rinocerontes negros. Después del safari, traslado para tomar tu vuelo a Zanzíbar y comenzar tu escapada romántica a la isla.',
day7Accommodation: 'Resort de lujo frente a la playa en Zanzíbar',
day7Meals: 'Desayuno, almuerzo y cena',

day8: 'Día 8',
day8Title: 'Relajación en la playa de Zanzíbar',
day8Text:
'Despierta junto al océano Índico y disfruta de un relajante día de luna de miel. Pasa tiempo en la playa, nada en las cálidas aguas turquesas y disfruta de tu resort a tu propio ritmo.',
day8Accommodation: 'Resort de lujo frente a la playa en Zanzíbar',
day8Meals: 'Desayuno y cena',

day9: 'Día 9',
day9Title: 'Stone Town y experiencia romántica en Zanzíbar',
day9Text:
'Explora las calles históricas de Stone Town con tu guía privado. Descubre la historia, la cultura local y la hermosa arquitectura de Zanzíbar antes de disfrutar de una noche romántica juntos.',
day9Accommodation: 'Resort de lujo frente a la playa en Zanzíbar',
day9Meals: 'Desayuno y cena',

day10: 'Día 10',
day10Title: 'Granja de especias y experiencia de playa',
day10Text:
'Visita una granja tradicional de especias y descubre por qué Zanzíbar es conocida como la Isla de las Especias. Disfruta de una experiencia cultural privada antes de regresar a la costa para una tarde relajada en la playa.',
day10Accommodation: 'Resort de lujo frente a la playa en Zanzíbar',
day10Meals: 'Desayuno y cena',

day11: 'Día 11',
day11Title: 'Día romántico privado en Zanzíbar',
day11Text:
'Disfruta de un día especial de luna de miel diseñado para la relajación y el romance. Elige entre una experiencia privada en la playa, un crucero en dhow al atardecer, snorkel o simplemente relájate juntos en tu resort de lujo.',
day11Accommodation: 'Resort de lujo frente a la playa en Zanzíbar',
day11Meals: 'Desayuno y cena',

day12: 'Día 12',
day12Title: 'Salida de Zanzíbar',
day12Text:
'Disfruta de tu último desayuno en Zanzíbar y de algo de tiempo libre antes del traslado al aeropuerto de Zanzíbar. Llévate recuerdos inolvidables de tu luna de miel en Tanzania y de tu escapada a Zanzíbar.',
day12Accommodation: 'No incluye alojamiento',
day12Meals: 'Desayuno',

detailsTitle: 'Detalles de la Luna de Miel',

duration: 'Duración',
durationValue: '12 días / 11 noches',

departure: 'Salida',
departureValue: 'Arusha',

destinations: 'Destinos',
destinationsValue:
'Tarangire, Lake Manyara, Serengeti, Ngorongoro y Zanzíbar',

tourType: 'Tipo de viaje',
tourTypeValue: 'Safari privado de luna de miel',

accommodationLabel: 'Alojamiento',
accommodationValue:
'Lodge / Campamento de lujo y Resort de playa',

bestTime: 'Mejor época',
bestTimeValue: 'Todo el año',

planHoneymoon: 'Planifica tu luna de miel',

priceLabel: 'PRECIO DE LUNA DE MIEL',
priceTitle: 'Precio de Luna de Miel',

priceText:
'Este paquete de luna de miel está diseñado para dos personas compartiendo. El precio final puede variar según el nivel de alojamiento, la temporada y las fechas del viaje.',

honeymoonPrice: 'Precio de luna de miel',
perPerson: 'por persona',
forTwo: 'US$8,500 para dos personas',
basedOnTwo: 'Basado en dos personas compartiendo.',

includedTitle: 'Qué está incluido',

included: [
'Vehículo safari privado 4x4 con techo elevable',
'Guía profesional de safari de habla inglesa',
'Recogida en hotel de Arusha y traslados de safari',
'Tasas de entrada al Parque Nacional de Tarangire',
'Tasas de entrada al Parque Nacional del Lago Manyara',
'Tasas de entrada al Parque Nacional del Serengeti',
'Tasas del Área de Conservación y del Cráter del Ngorongoro',
'Alojamiento en lodge o campamento de lujo durante el safari',
'Alojamiento en resort de lujo en Zanzíbar',
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
'Actividades opcionales no indicadas en el itinerario',
'Tratamientos de spa y experiencias románticas privadas',
'Excursiones adicionales en Zanzíbar',
],

bringLabel: 'QUÉ LLEVAR',
bringTitle: 'Prepárate para tu luna de miel',

whatToBring: [
'Ropa cómoda para safari',
'Ropa ligera para la noche',
'Chaqueta abrigada para las mañanas frescas',
'Sombrero y protector solar',
'Calzado cómodo para caminar',
'Traje de baño para Zanzíbar',
'Cámara o prismáticos',
'Medicamentos personales',
'Documentos de viaje y pasaporte',
'Bolsa pequeña para el día',
],

readyTitle: '¿Listo para tu aventura de luna de miel?',

readyText:
'Deja que Kilimanjaro Travel cree una experiencia romántica de safari y Zanzíbar adaptada a tus fechas de viaje y preferencias.',

requestQuote: 'Solicitar presupuesto',
whatsapp: 'Chatear por WhatsApp',
},
} as const;

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
] as const;

export default function HoneymoonSafariZanzibarPage() {
const { language } = useLanguage();

const lang: LanguageCode =
language === 'de' ||
language === 'fr' ||
language === 'es'
? language
: 'en';

const t: TranslationSet = translations[lang];

return (
<main>
<Header />

<WhatsApp />

<PageHero
title={t.heroTitle}
subtitle={t.heroSubtitle}
image="/images/honeymoon-two.jpg"
/>

{/* OVERVIEW */}
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

{itineraryKeys.map((item) => (
<article
key={item.day}
className="rounded-3xl bg-cream p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
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

{/* SIDEBAR */}
<aside className="h-fit rounded-3xl bg-forest p-8 text-white shadow-xl md:sticky md:top-24">

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

<Link
href="/booking"
className="mt-8 inline-block w-full rounded-full bg-gold px-6 py-3 text-center font-bold text-white transition hover:scale-105"
>
{t.planHoneymoon}
</Link>

</aside>

</div>
</div>
</section>

{/* PRICE */}
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

<div className="mx-auto mt-10 max-w-xl rounded-3xl bg-white p-8 text-center shadow-xl">

<p className="text-sm font-bold uppercase tracking-wide text-gold">
{t.honeymoonPrice}
</p>

<p className="mt-3 text-4xl font-bold text-forest md:text-5xl">
US$4,250
</p>

<p className="mt-1 text-black/70">
{t.perPerson}
</p>

<div className="mt-5 border-t border-black/10 pt-5">

<p className="text-2xl font-bold text-gold">
{t.forTwo}
</p>

<p className="mt-2 text-sm text-black/60">
{t.basedOnTwo}
</p>

</div>

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
<li
key={item}
className="leading-7 text-black/70"
>
<span className="mr-2">✅</span>
{item}
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
<li
key={item}
className="leading-7 text-black/70"
>
<span className="mr-2">❌</span>
{item}
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

{/* IMAGE */}
<div className="overflow-hidden rounded-3xl shadow-xl">

<img
src="/images/safari-zanzibar.jpg"
alt={t.heroTitle}
className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
/>

</div>

{/* CONTENT */}
<div>

<p className="font-bold text-gold">
{t.bringLabel}
</p>

<h2 className="section-title mt-3">
{t.bringTitle}
</h2>

<ul className="mt-6 space-y-3 text-lg">

{t.whatToBring.map((item) => (
<li
key={item}
className="text-black/70"
>
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