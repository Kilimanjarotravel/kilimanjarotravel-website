'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
en: {
heroTitle: 'Tanzania Day Trips',
heroSubtitle:
'Discover wildlife, waterfalls, culture, coffee, hiking and unforgettable local experiences from Arusha.',
exploreMore: 'EXPLORE MORE',
sectionTitle: 'Choose Your Perfect Day Trip',
intro:
'Explore Tanzania with private day trips designed for wildlife, nature, culture, adventure and authentic local experiences.',
viewItinerary: 'View Itinerary',
bookTrip: 'Book This Day Trip',
customTitle: 'Need a Custom Day Trip?',
customText:
'Tell us what you would like to experience and our team will create a private day trip based on your interests, schedule and budget.',
quote: 'Request a Quote',

trips: [
{
title: 'Arusha National Park Day Trip',
text: 'Enjoy wildlife, Mount Meru views, scenic lakes and a beautiful day in Arusha National Park.',
},
{
title: 'Tarangire National Park Day Trip',
text: 'See elephants, baobab trees and classic northern Tanzania wildlife in Tarangire.',
},
{
title: 'Ngorongoro Crater Day Trip',
text: 'Descend into the famous Ngorongoro Crater for an unforgettable wildlife experience.',
},
{
title: 'Lake Manyara National Park Day Trip',
text: 'Discover forest scenery, rich birdlife, wildlife and the beautiful Lake Manyara landscape.',
},
{
title: 'Serval Wildlife Day Trip',
text: 'Enjoy a close-up wildlife experience with giraffes, zebras, lions, monkeys, and other animals in a beautiful natural setting.',
},
{
title: 'Makuyuni Wildlife Day Trip',
text: 'Discover wildlife, beautiful landscapes, and the natural surroundings of Makuyuni on an exciting full-day adventure.',
},
{
title: 'Nyerere National Park Fly-in Day Trip From Zanzibar',
text: 'Fly from Zanzibar to Nyerere National Park for a full-day safari featuring elephants, lions, giraffes, buffaloes, hippos, and the Rufiji River.',
},
{
title: 'Mkomazi National Park Day Trip',
text: 'Explore dramatic landscapes, rich birdlife and important black rhino and wild dog conservation areas.',
},
{
title: 'Mikumi Safari from Zanzibar',
text: 'Fly from Zanzibar for a full-day wildlife safari, 4x4 game drive and lunch in Mikumi National Park.',
},
{
title: 'Kilimanjaro Shira Plateau Day Hike',
text: 'Experience Mount Kilimanjaro on a guided high-altitude hike across the spectacular Shira Plateau.',
},
{
title: 'Materuni Waterfalls & Coffee Tour',
text: 'Hike to Materuni Waterfalls and learn how local Tanzanian coffee is grown and prepared.',
},
{
title: 'Chemka Hot Springs',
text: 'Relax and swim in clear natural spring water surrounded by beautiful tropical scenery.',
},
{
title: 'Napuru Waterfalls & Hiking',
text: 'Enjoy a guided hike, panoramic views of Arusha and Mount Meru, and a visit to Napuru Waterfalls.',
},
{
title: 'Lake Duluti Canoeing',
text: 'Explore the peaceful lake by canoe and enjoy birds, nature and views of the surrounding forest.',
},
{
title: 'Arusha Cultural & History Tour',
text: 'Visit museums and cultural centers while learning about Tanzania’s heritage and local history.',
},
{
title: 'Coffee Plantation Tour',
text: 'Visit a local coffee farm, learn the production process and taste fresh Tanzanian coffee.',
},
{
title: 'Maasai Market & Local Handicrafts',
text: 'Browse colorful crafts, paintings, souvenirs and handmade items from local artisans.',
},
{
title: 'Tanzania Bicycle Tours',
text: 'Explore scenic neighborhoods, villages and local life around Arusha by bicycle.',
},
],
},

de: {
heroTitle: 'Tagesausflüge in Tansania',
heroSubtitle:
'Entdecken Sie Wildtiere, Wasserfälle, Kultur, Kaffee, Wanderungen und unvergessliche lokale Erlebnisse ab Arusha.',
exploreMore: 'MEHR ENTDECKEN',
sectionTitle: 'Wählen Sie Ihren perfekten Tagesausflug',
intro:
'Entdecken Sie Tansania auf privaten Tagesausflügen, die auf Wildtiere, Natur, Kultur, Abenteuer und authentische lokale Erlebnisse ausgerichtet sind.',
viewItinerary: 'Reiseplan ansehen',
bookTrip: 'Diesen Tagesausflug buchen',
customTitle: 'Sie wünschen einen individuellen Tagesausflug?',
customText:
'Teilen Sie uns mit, was Sie erleben möchten. Unser Team erstellt einen privaten Tagesausflug passend zu Ihren Interessen, Ihrem Zeitplan und Ihrem Budget.',
quote: 'Angebot anfragen',

trips: [
{
title: 'Tagesausflug zum Arusha-Nationalpark',
text: 'Erleben Sie Wildtiere, Ausblicke auf den Mount Meru, malerische Seen und einen wunderschönen Tag im Arusha-Nationalpark.',
},
{
title: 'Tagesausflug zum Tarangire-Nationalpark',
text: 'Sehen Sie Elefanten, Baobab-Bäume und die typische Tierwelt Nordtansanias im Tarangire-Nationalpark.',
},
{
title: 'Tagesausflug zum Ngorongoro-Krater',
text: 'Fahren Sie in den berühmten Ngorongoro-Krater hinab und erleben Sie eine unvergessliche Safari.',
},
{
title: 'Tagesausflug zum Lake-Manyara-Nationalpark',
text: 'Entdecken Sie Waldlandschaften, eine vielfältige Vogelwelt, Wildtiere und die wunderschöne Landschaft des Manyara-Sees.',
},
{
title: 'Serval Wildlife Tagesausflug',
text: 'Erleben Sie Giraffen, Zebras, Löwen, Affen und andere Tiere aus nächster Nähe in einer wunderschönen natürlichen Umgebung.',
},
{
title: 'Makuyuni Wildlife Tagesausflug',
text: 'Entdecken Sie Wildtiere, wunderschöne Landschaften und die natürliche Umgebung von Makuyuni bei einem spannenden Tagesausflug.',
},
{
title: 'Tagesausflug zum Nyerere-Nationalpark ab Sansibar',
text: 'Fliegen Sie von Sansibar zum Nyerere-Nationalpark und erleben Sie Elefanten, Löwen, Giraffen, Büffel, Flusspferde und den Rufiji-Fluss.',
},
{
title: 'Tagesausflug zum Mkomazi-Nationalpark',
text: 'Entdecken Sie beeindruckende Landschaften, eine reiche Vogelwelt und wichtige Schutzgebiete für Spitzmaulnashörner und Wildhunde.',
},
{
title: 'Mikumi-Safari ab Sansibar',
text: 'Fliegen Sie von Sansibar zu einer ganztägigen Safari mit 4x4-Pirschfahrt und Mittagessen im Mikumi-Nationalpark.',
},
{
title: 'Kilimanjaro Shira-Plateau Tageswanderung',
text: 'Erleben Sie den Kilimandscharo bei einer geführten Höhenwanderung über das spektakuläre Shira-Plateau.',
},
{
title: 'Materuni-Wasserfälle & Kaffeetour',
text: 'Wandern Sie zu den Materuni-Wasserfällen und erfahren Sie, wie tansanischer Kaffee angebaut und zubereitet wird.',
},
{
title: 'Chemka Hot Springs',
text: 'Entspannen Sie sich und schwimmen Sie in klarem Quellwasser, umgeben von wunderschöner tropischer Landschaft.',
},
{
title: 'Napuru-Wasserfälle & Wanderung',
text: 'Genießen Sie eine geführte Wanderung, Panoramablicke auf Arusha und den Mount Meru sowie einen Besuch der Napuru-Wasserfälle.',
},
{
title: 'Kanufahren auf dem Lake Duluti',
text: 'Erkunden Sie den ruhigen See mit dem Kanu und genießen Sie Vögel, Natur und den Blick auf den umliegenden Wald.',
},
{
title: 'Arusha Kultur- & Geschichtstour',
text: 'Besuchen Sie Museen und Kulturzentren und erfahren Sie mehr über das Erbe und die Geschichte Tansanias.',
},
{
title: 'Kaffeeplantagen-Tour',
text: 'Besuchen Sie eine lokale Kaffeefarm, lernen Sie den Produktionsprozess kennen und probieren Sie frischen tansanischen Kaffee.',
},
{
title: 'Maasai-Markt & lokales Kunsthandwerk',
text: 'Entdecken Sie farbenfrohes Kunsthandwerk, Gemälde, Souvenirs und handgefertigte Produkte lokaler Künstler.',
},
{
title: 'Fahrradtouren in Tansania',
text: 'Erkunden Sie malerische Stadtviertel, Dörfer und das lokale Leben rund um Arusha mit dem Fahrrad.',
},
],
},

fr: {
heroTitle: 'Excursions d’une journée en Tanzanie',
heroSubtitle:
'Découvrez la faune, les cascades, la culture, le café, la randonnée et des expériences locales inoubliables au départ d’Arusha.',
exploreMore: 'EXPLOREZ DAVANTAGE',
sectionTitle: 'Choisissez votre excursion idéale',
intro:
'Découvrez la Tanzanie grâce à des excursions privées conçues autour de la faune, de la nature, de la culture, de l’aventure et d’expériences locales authentiques.',
viewItinerary: 'Voir l’itinéraire',
bookTrip: 'Réserver cette excursion',
customTitle: 'Vous souhaitez une excursion personnalisée ?',
customText:
'Dites-nous ce que vous souhaitez découvrir et notre équipe créera une excursion privée adaptée à vos intérêts, votre emploi du temps et votre budget.',
quote: 'Demander un devis',

trips: [
{
title: 'Excursion au parc national d’Arusha',
text: 'Profitez de la faune, des vues sur le mont Meru, des lacs pittoresques et d’une magnifique journée dans le parc national d’Arusha.',
},
{
title: 'Excursion au parc national de Tarangire',
text: 'Observez les éléphants, les baobabs et la faune typique du nord de la Tanzanie à Tarangire.',
},
{
title: 'Excursion au cratère du Ngorongoro',
text: 'Descendez dans le célèbre cratère du Ngorongoro pour une expérience inoubliable avec la faune sauvage.',
},
{
title: 'Excursion au parc national du lac Manyara',
text: 'Découvrez les paysages forestiers, la richesse des oiseaux, la faune et les magnifiques paysages du lac Manyara.',
},
{
title: 'Excursion Wildlife à Serval',
text: 'Profitez d’une expérience rapprochée avec les girafes, zèbres, lions, singes et autres animaux dans un magnifique environnement naturel.',
},
{
title: 'Excursion Wildlife à Makuyuni',
text: 'Découvrez la faune, les magnifiques paysages et l’environnement naturel de Makuyuni lors d’une aventure passionnante d’une journée.',
},
{
title: 'Excursion au parc national de Nyerere depuis Zanzibar',
text: 'Prenez un vol depuis Zanzibar vers le parc national de Nyerere et observez éléphants, lions, girafes, buffles, hippopotames et le fleuve Rufiji.',
},
{
title: 'Excursion au parc national de Mkomazi',
text: 'Découvrez des paysages spectaculaires, une riche avifaune et d’importantes zones de conservation des rhinocéros noirs et des lycaons.',
},
{
title: 'Safari à Mikumi depuis Zanzibar',
text: 'Prenez un vol depuis Zanzibar pour une journée complète de safari avec sortie en 4x4 et déjeuner au parc national de Mikumi.',
},
{
title: 'Randonnée d’une journée sur le plateau de Shira',
text: 'Découvrez le Kilimandjaro lors d’une randonnée guidée en altitude à travers le spectaculaire plateau de Shira.',
},
{
title: 'Cascades de Materuni & visite d’une plantation de café',
text: 'Randonnez jusqu’aux cascades de Materuni et découvrez comment le café tanzanien est cultivé et préparé.',
},
{
title: 'Sources chaudes de Chemka',
text: 'Détendez-vous et nagez dans une eau de source naturelle et claire entourée d’un magnifique paysage tropical.',
},
{
title: 'Cascades de Napuru & randonnée',
text: 'Profitez d’une randonnée guidée, de vues panoramiques sur Arusha et le mont Meru et d’une visite des cascades de Napuru.',
},
{
title: 'Canoë sur le lac Duluti',
text: 'Explorez le lac paisible en canoë et profitez des oiseaux, de la nature et des vues sur la forêt environnante.',
},
{
title: 'Visite culturelle et historique d’Arusha',
text: 'Visitez des musées et des centres culturels tout en découvrant le patrimoine et l’histoire locale de la Tanzanie.',
},
{
title: 'Visite d’une plantation de café',
text: 'Visitez une ferme de café locale, découvrez le processus de production et dégustez du café tanzanien frais.',
},
{
title: 'Marché Massaï & artisanat local',
text: 'Découvrez des objets artisanaux colorés, des peintures, des souvenirs et des produits faits main par des artisans locaux.',
},
{
title: 'Circuits à vélo en Tanzanie',
text: 'Explorez à vélo les quartiers pittoresques, les villages et la vie locale autour d’Arusha.',
},
],
},

es: {
heroTitle: 'Excursiones de un día en Tanzania',
heroSubtitle:
'Descubra fauna, cascadas, cultura, café, senderismo y experiencias locales inolvidables desde Arusha.',
exploreMore: 'EXPLORAR MÁS',
sectionTitle: 'Elija su excursión perfecta',
intro:
'Explore Tanzania con excursiones privadas diseñadas para disfrutar de la fauna, la naturaleza, la cultura, la aventura y experiencias locales auténticas.',
viewItinerary: 'Ver itinerario',
bookTrip: 'Reservar esta excursión',
customTitle: '¿Necesita una excursión personalizada?',
customText:
'Cuéntenos qué le gustaría experimentar y nuestro equipo creará una excursión privada basada en sus intereses, horario y presupuesto.',
quote: 'Solicitar presupuesto',

trips: [
{
title: 'Excursión al Parque Nacional de Arusha',
text: 'Disfrute de la fauna, las vistas del monte Meru, los lagos pintorescos y un hermoso día en el Parque Nacional de Arusha.',
},
{
title: 'Excursión al Parque Nacional de Tarangire',
text: 'Observe elefantes, baobabs y la fauna típica del norte de Tanzania en Tarangire.',
},
{
title: 'Excursión al cráter del Ngorongoro',
text: 'Descienda al famoso cráter del Ngorongoro para vivir una experiencia inolvidable con la fauna salvaje.',
},
{
title: 'Excursión al Parque Nacional del Lago Manyara',
text: 'Descubra paisajes forestales, abundante avifauna, fauna y los hermosos paisajes del lago Manyara.',
},
{
title: 'Excursión de vida silvestre en Serval',
text: 'Disfrute de una experiencia cercana con jirafas, cebras, leones, monos y otros animales en un hermoso entorno natural.',
},
{
title: 'Excursión de vida silvestre en Makuyuni',
text: 'Descubra la fauna, los hermosos paisajes y el entorno natural de Makuyuni durante una emocionante aventura de un día completo.',
},
{
title: 'Excursión al Parque Nacional de Nyerere desde Zanzíbar',
text: 'Vuele desde Zanzíbar al Parque Nacional de Nyerere para disfrutar de un safari de día completo con elefantes, leones, jirafas, búfalos, hipopótamos y el río Rufiji.',
},
{
title: 'Excursión al Parque Nacional de Mkomazi',
text: 'Explore paisajes espectaculares, una rica avifauna y áreas importantes de conservación del rinoceronte negro y el licaón.',
},
{
title: 'Safari en Mikumi desde Zanzíbar',
text: 'Vuele desde Zanzíbar para disfrutar de un safari de día completo, un recorrido en 4x4 y almuerzo en el Parque Nacional de Mikumi.',
},
{
title: 'Senderismo de un día por la meseta de Shira',
text: 'Viva el Kilimanjaro en una caminata guiada de gran altitud por la espectacular meseta de Shira.',
},
{
title: 'Cascadas de Materuni y tour del café',
text: 'Camine hasta las cascadas de Materuni y descubra cómo se cultiva y prepara el café de Tanzania.',
},
{
title: 'Aguas termales de Chemka',
text: 'Relájese y nade en aguas naturales cristalinas rodeadas de un hermoso paisaje tropical.',
},
{
title: 'Cascadas de Napuru y senderismo',
text: 'Disfrute de una caminata guiada, vistas panorámicas de Arusha y el monte Meru y una visita a las cascadas de Napuru.',
},
{
title: 'Piragüismo en el lago Duluti',
text: 'Explore el tranquilo lago en canoa y disfrute de aves, naturaleza y vistas del bosque circundante.',
},
{
title: 'Tour cultural e histórico de Arusha',
text: 'Visite museos y centros culturales mientras conoce el patrimonio y la historia local de Tanzania.',
},
{
title: 'Tour por una plantación de café',
text: 'Visite una finca de café local, conozca el proceso de producción y pruebe café fresco de Tanzania.',
},
{
title: 'Mercado Maasai y artesanía local',
text: 'Explore coloridas artesanías, pinturas, recuerdos y productos hechos a mano por artesanos locales.',
},
{
title: 'Tours en bicicleta por Tanzania',
text: 'Explore en bicicleta barrios pintorescos, pueblos y la vida local alrededor de Arusha.',
},
],
},
};

const dayTrips = [
{
image: '/images/arusha-np-one.jpg',
href: '/day-trips/arusha-national-park',
itineraryReady: true,
},
{
image: '/images/tarangire-one.jpg',
href: '/day-trips/tarangire-national-park',
itineraryReady: true,
},
{
image: '/images/ngorongoro-one.jpg',
href: '/day-trips/ngorongoro-crater',
itineraryReady: true,
},
{
image: '/images/manyara-one.jpg',
href: '/day-trips/lake-manyara-national-park',
itineraryReady: true,
},
{
image: '/images/serval-one.jpg',
href: '/day-trips/serval-wildlife',
itineraryReady: true,
},
{
image: '/images/makuyuni-one.jpg',
href: '/day-trips/makuyuni-wildlife',
itineraryReady: true,
},
{
image: '/images/nyerere-one.jpg',
href: '/day-trips/nyerere-from-zanzibar',
itineraryReady: true,
},
{
image: '/images/mkomazi-day-one.jpg',
href: '/day-trips/mkomazi-national-park',
itineraryReady: true,
},
{
image: '/images/mikumi-day.jpg',
href: '/day-trips/mikumi-from-zanzibar',
itineraryReady: true,
},
{
image: '/images/shira-one.jpg',
href: '/day-trips/kilimanjaro-shira-plateau-day-hike',
itineraryReady: true,
},
{
image: '/images/materuni-two.jpg',
href: '/day-trips/materuni-waterfalls-coffee-tour',
itineraryReady: true,
},
{
image: '/images/chemka-one.jpg',
href: '/day-trips/chemka-hot-springs',
itineraryReady: true,
},
{
image: '/images/napuru-one.jpg',
href: '/day-trips/napuru-waterfalls-hiking',
itineraryReady: true,
},
{
image: '/images/duluti-four.jpg',
href: '/day-trips/lake-duluti-canoeing',
itineraryReady: true,
},
{
image: '/images/town-three.jpg',
href: '/day-trips/arusha-cultural-history-tour',
itineraryReady: true,
},
{
image: '/images/coffee-one.jpg',
href: '/day-trips/coffee-plantation-tour',
itineraryReady: true,
},
{
image: '/images/maasai-shop.jpg',
href: '/day-trips/maasai-market-local-handicrafts',
itineraryReady: true,
},
{
image: '/images/bicycle.one.jpg',
href: '/day-trips/tanzania-bicycle-tours',
itineraryReady: true,
},
];

export default function DayTripsPage() {
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
image="/images/tarangire-one.jpg"
/>

<section className="py-20">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<p className="font-bold text-gold">{t.exploreMore}</p>

<h2 className="section-title mt-3">
{t.sectionTitle}
</h2>

<p className="mt-5 text-lg leading-8 text-black/70">
{t.intro}
</p>
</div>

<div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
{dayTrips.map((trip, index) => {
const item = t.trips[index];

return (
<article
key={`${item.title}-${index}`}
className="overflow-hidden rounded-3xl bg-white shadow-xl"
>
<img
src={trip.image}
alt={item.title}
className="h-64 w-full object-cover"
/>

<div className="p-7">
<h2 className="text-2xl font-bold text-forest">
{item.title}
</h2>

<p className="mt-4 leading-7 text-black/70">
{item.text}
</p>

<Link
href={trip.href}
className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
>
{trip.itineraryReady
? t.viewItinerary
: t.bookTrip}
</Link>
</div>
</article>
);
})}
</div>
</div>
</section>

<section className="bg-forest py-20 text-white">
<div className="mx-auto max-w-4xl px-6 text-center">
<h2 className="font-display text-4xl font-bold md:text-5xl">
{t.customTitle}
</h2>

<p className="mt-5 text-lg leading-8 text-white/80">
{t.customText}
</p>

<Link
href="/booking"
className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white"
>
{t.quote}
</Link>
</div>
</section>

<Footer />
</main>
);
}