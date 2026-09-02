'use client';

import PageHero from '@/components/PageHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Marine Safari, Snorkeling & Diving',
    heroSubtitle:
      'Discover coral reefs, tropical fish, sandbanks, boat trips, scuba diving, and relaxing beach experiences along Tanzania’s beautiful coastline.',

    label: 'Indian Ocean Adventure',
    heading: 'Coral Reefs, Tropical Fish and Island Life',

    paragraph1:
      'This marine experience is perfect for travelers who want to enjoy the ocean, explore coral reefs, see colorful tropical fish, and relax on beautiful beaches and sandbanks.',

    paragraph2:
      'The trip can include snorkeling equipment, a local boat, an experienced guide, seafood lunch, fresh fruit, beach time, and visits to nearby islands or coastal villages.',

    highlightsTitle: 'Safari Highlights',

    highlights: [
      'Snorkeling among tropical fish',
      'Coral reef exploration',
      'Sandbank and beach relaxation',
      'Traditional boat experience',
      'Seafood lunch and fresh fruit',
      'Private or shared trip options',
      'Scuba diving with professional instructors',
    ],

    requestButton: 'Request a Marine Safari',

    ctaTitle: 'Ready for Your Marine Adventure?',

    ctaText:
      'Share your travel dates, preferred coastal destination, group size, snorkeling or diving experience, and whether you prefer a private or shared trip. Our team will create a personalized marine safari and quotation for you.',

    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Meeressafari, Schnorcheln & Tauchen',
    heroSubtitle:
      'Entdecken Sie Korallenriffe, tropische Fische, Sandbänke, Bootsausflüge, Tauchen und entspannte Stranderlebnisse entlang der wunderschönen Küste Tansanias.',

    label: 'Abenteuer am Indischen Ozean',
    heading: 'Korallenriffe, tropische Fische und Inselleben',

    paragraph1:
      'Dieses Meereserlebnis ist ideal für Reisende, die den Ozean genießen, Korallenriffe erkunden, farbenfrohe tropische Fische beobachten und an wunderschönen Stränden und Sandbänken entspannen möchten.',

    paragraph2:
      'Die Tour kann Schnorchelausrüstung, ein lokales Boot, einen erfahrenen Guide, ein Meeresfrüchte-Mittagessen, frisches Obst, Strandzeit und Besuche nahegelegener Inseln oder Küstendörfer umfassen.',

    highlightsTitle: 'Safari-Highlights',

    highlights: [
      'Schnorcheln zwischen tropischen Fischen',
      'Erkundung von Korallenriffen',
      'Entspannung auf Sandbänken und Stränden',
      'Traditionelles Bootserlebnis',
      'Meeresfrüchte-Mittagessen und frisches Obst',
      'Private oder gemeinsame Touren',
      'Gerätetauchen mit professionellen Tauchlehrern',
    ],

    requestButton: 'Meeressafari anfragen',

    ctaTitle: 'Bereit für Ihr Meeresabenteuer?',

    ctaText:
      'Teilen Sie uns Ihre Reisedaten, Ihr bevorzugtes Küstenziel, die Gruppengröße, Ihre Schnorchel- oder Taucherfahrung und mit, ob Sie eine private oder gemeinsame Tour bevorzugen. Unser Team erstellt für Sie eine individuelle Meeressafari inklusive Angebot.',

    whatsappButton: 'Auf WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Safari Marin, Plongée avec Tuba & Plongée Sous-Marine',
    heroSubtitle:
      'Découvrez les récifs coralliens, les poissons tropicaux, les bancs de sable, les excursions en bateau, la plongée sous-marine et les magnifiques plages de la côte tanzanienne.',

    label: 'Aventure dans l’océan Indien',
    heading: 'Récifs coralliens, poissons tropicaux et vie insulaire',

    paragraph1:
      'Cette expérience marine est idéale pour les voyageurs qui souhaitent profiter de l’océan, explorer les récifs coralliens, observer des poissons tropicaux colorés et se détendre sur de magnifiques plages et bancs de sable.',

    paragraph2:
      'L’excursion peut comprendre l’équipement de snorkeling, un bateau local, un guide expérimenté, un déjeuner de fruits de mer, des fruits frais, du temps à la plage et des visites d’îles voisines ou de villages côtiers.',

    highlightsTitle: 'Points forts du safari',

    highlights: [
      'Snorkeling parmi les poissons tropicaux',
      'Exploration des récifs coralliens',
      'Détente sur les bancs de sable et les plages',
      'Expérience en bateau traditionnel',
      'Déjeuner de fruits de mer et fruits frais',
      'Options privées ou partagées',
      'Plongée sous-marine avec des instructeurs professionnels',
    ],

    requestButton: 'Demander un safari marin',

    ctaTitle: 'Prêt pour votre aventure marine ?',

    ctaText:
      'Indiquez-nous vos dates de voyage, votre destination côtière préférée, la taille de votre groupe, votre expérience en snorkeling ou en plongée, et si vous préférez une excursion privée ou partagée. Notre équipe créera pour vous un safari marin personnalisé avec un devis.',

    whatsappButton: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Safari Marino, Snorkel y Buceo',
    heroSubtitle:
      'Descubra arrecifes de coral, peces tropicales, bancos de arena, excursiones en barco, buceo y relajantes experiencias de playa a lo largo de la hermosa costa de Tanzania.',

    label: 'Aventura en el Océano Índico',
    heading: 'Arrecifes de coral, peces tropicales y vida isleña',

    paragraph1:
      'Esta experiencia marina es perfecta para viajeros que desean disfrutar del océano, explorar arrecifes de coral, observar coloridos peces tropicales y relajarse en hermosas playas y bancos de arena.',

    paragraph2:
      'El viaje puede incluir equipo de snorkel, un barco local, un guía experimentado, almuerzo de mariscos, fruta fresca, tiempo en la playa y visitas a islas cercanas o pueblos costeros.',

    highlightsTitle: 'Aspectos destacados del safari',

    highlights: [
      'Snorkel entre peces tropicales',
      'Exploración de arrecifes de coral',
      'Relajación en bancos de arena y playas',
      'Experiencia en barco tradicional',
      'Almuerzo de mariscos y fruta fresca',
      'Opciones de viaje privado o compartido',
      'Buceo con instructores profesionales',
    ],

    requestButton: 'Solicitar un safari marino',

    ctaTitle: '¿Listo para su aventura marina?',

    ctaText:
      'Comparta sus fechas de viaje, destino costero preferido, tamaño del grupo, experiencia en snorkel o buceo y si prefiere un viaje privado o compartido. Nuestro equipo creará un safari marino personalizado y una cotización para usted.',

    whatsappButton: 'Chatear por WhatsApp',
  },
};

export default function MarineSafariPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/marine-two.jpg"
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-gold">
              {t.label}
            </p>

            <h2 className="mt-3 text-4xl font-bold text-forest">
              {t.heading}
            </h2>

            <p className="mt-6 leading-8 text-gray-700">
              {t.paragraph1}
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              {t.paragraph2}
            </p>
          </div>

          <div className="rounded-3xl bg-cream p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-forest">
              {t.highlightsTitle}
            </h3>

            <ul className="mt-6 space-y-4 text-gray-700">
              {t.highlights.map((highlight) => (
                <li key={highlight}>✓ {highlight}</li>
              ))}
            </ul>

            <Link
              href="/booking"
              className="mt-8 inline-block rounded-full bg-forest px-8 py-4 font-bold text-white"
            >
              {t.requestButton}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            {t.ctaTitle}
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80">
            {t.ctaText}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-gold px-8 py-4 font-bold text-white"
            >
              {t.requestButton}
            </Link>

            <a
              href="https://wa.me/255759273339"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-8 py-4 font-bold text-white"
            >
              {t.whatsappButton}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}