'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Luxury Honeymoon Safari in Tanzania',

    heroSubtitle:
      "Experience Tanzania's most romantic safari with luxury lodges, private game drives, candlelight dinners, and unforgettable wildlife adventures.",

    label: 'Romantic Luxury Experience',

    mainTitle: 'Luxury Honeymoon Safari in Tanzania',

    paragraph1:
      "Celebrate your honeymoon with an unforgettable luxury safari through Tanzania's most spectacular national parks. Stay in romantic lodges, enjoy private game drives, candlelight dinners under the stars, and create memories that will last a lifetime.",

    paragraph2:
      'Our honeymoon safaris are carefully designed for couples seeking privacy, comfort, and adventure. You can also combine your safari with a relaxing beach holiday in Zanzibar for the perfect romantic escape.',

    highlightsTitle: 'Safari Highlights',

    highlights: [
      'Luxury accommodation in romantic lodges',
      'Private game drives for couples',
      'Romantic bush breakfasts and candlelight dinners',
      'Sunset champagne experience',
      'Optional Zanzibar beach extension',
    ],

    requestButton: 'Request a Honeymoon Safari',

    readyTitle: 'Ready for Your Honeymoon Safari?',

    readyText:
      'Share your travel dates, preferred national parks, accommodation style, special romantic experiences, and whether you would like to add a Zanzibar beach extension. Our safari specialists will create a private honeymoon itinerary and quotation for you.',

    quoteButton: 'Request Your Honeymoon Safari',

    whatsapp: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Luxus-Honeymoon-Safari in Tansania',

    heroSubtitle:
      'Erleben Sie Tansanias romantischste Safari mit luxuriösen Lodges, privaten Pirschfahrten, Candle-Light-Dinnern und unvergesslichen Wildtiererlebnissen.',

    label: 'Romantisches Luxus-Erlebnis',

    mainTitle: 'Luxus-Honeymoon-Safari in Tansania',

    paragraph1:
      'Feiern Sie Ihre Flitterwochen mit einer unvergesslichen Luxus-Safari durch Tansanias spektakulärste Nationalparks. Übernachten Sie in romantischen Lodges, genießen Sie private Pirschfahrten und Candle-Light-Dinner unter dem Sternenhimmel und schaffen Sie Erinnerungen, die ein Leben lang bleiben.',

    paragraph2:
      'Unsere Honeymoon-Safaris sind speziell für Paare konzipiert, die Privatsphäre, Komfort und Abenteuer suchen. Sie können Ihre Safari auch mit einem erholsamen Strandurlaub auf Sansibar kombinieren – für den perfekten romantischen Urlaub.',

    highlightsTitle: 'Höhepunkte der Safari',

    highlights: [
      'Luxuriöse Unterkünfte in romantischen Lodges',
      'Private Pirschfahrten für Paare',
      'Romantische Buschfrühstücke und Candle-Light-Dinner',
      'Romantisches Sonnenuntergangserlebnis',
      'Optionale Verlängerung mit einem Strandurlaub auf Sansibar',
    ],

    requestButton: 'Honeymoon-Safari anfragen',

    readyTitle: 'Bereit für Ihre Honeymoon-Safari?',

    readyText:
      'Teilen Sie uns Ihre Reisedaten, bevorzugten Nationalparks, Ihren Unterkunftsstil und besondere romantische Erlebnisse mit. Teilen Sie uns auch mit, ob Sie eine Verlängerung auf Sansibar wünschen. Unsere Safarispezialisten erstellen eine private Honeymoon-Reise und ein individuelles Angebot für Sie.',

    quoteButton: 'Ihre Honeymoon-Safari anfragen',

    whatsapp: 'Über WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Safari de luxe pour lune de miel en Tanzanie',

    heroSubtitle:
      'Découvrez le safari le plus romantique de Tanzanie avec des lodges de luxe, des safaris privés, des dîners aux chandelles et des aventures animalières inoubliables.',

    label: 'Expérience romantique de luxe',

    mainTitle: 'Safari de luxe pour lune de miel en Tanzanie',

    paragraph1:
      'Célébrez votre lune de miel avec un safari de luxe inoubliable à travers les plus beaux parcs nationaux de Tanzanie. Séjournez dans des lodges romantiques, profitez de safaris privés, de dîners aux chandelles sous les étoiles et créez des souvenirs qui dureront toute une vie.',

    paragraph2:
      'Nos safaris lune de miel sont soigneusement conçus pour les couples à la recherche d’intimité, de confort et d’aventure. Vous pouvez également combiner votre safari avec des vacances relaxantes à la plage à Zanzibar pour une escapade romantique parfaite.',

    highlightsTitle: 'Points forts du safari',

    highlights: [
      'Hébergement de luxe dans des lodges romantiques',
      'Safaris privés pour les couples',
      'Petits-déjeuners romantiques dans la brousse et dîners aux chandelles',
      'Expérience romantique au coucher du soleil',
      'Extension optionnelle à la plage de Zanzibar',
    ],

    requestButton: 'Demander un safari lune de miel',

    readyTitle: 'Prêt pour votre safari lune de miel ?',

    readyText:
      'Indiquez-nous vos dates de voyage, vos parcs nationaux préférés, votre style d’hébergement et les expériences romantiques souhaitées. Dites-nous également si vous souhaitez ajouter une extension balnéaire à Zanzibar. Nos spécialistes créeront un itinéraire privé et une offre personnalisée pour votre lune de miel.',

    quoteButton: 'Demander votre safari lune de miel',

    whatsapp: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Safari de lujo de luna de miel en Tanzania',

    heroSubtitle:
      'Vive el safari más romántico de Tanzania con lodges de lujo, safaris privados, cenas a la luz de las velas y experiencias inolvidables de vida silvestre.',

    label: 'Experiencia romántica de lujo',

    mainTitle: 'Safari de lujo de luna de miel en Tanzania',

    paragraph1:
      'Celebra tu luna de miel con un safari de lujo inolvidable por los parques nacionales más espectaculares de Tanzania. Alójate en lodges románticos, disfruta de safaris privados, cenas a la luz de las velas bajo las estrellas y crea recuerdos que durarán toda la vida.',

    paragraph2:
      'Nuestros safaris de luna de miel están cuidadosamente diseñados para parejas que buscan privacidad, comodidad y aventura. También puedes combinar tu safari con unas relajantes vacaciones en las playas de Zanzíbar para disfrutar de una escapada romántica perfecta.',

    highlightsTitle: 'Aspectos destacados del safari',

    highlights: [
      'Alojamiento de lujo en lodges románticos',
      'Safaris privados para parejas',
      'Desayunos románticos en la naturaleza y cenas a la luz de las velas',
      'Experiencia romántica al atardecer',
      'Extensión opcional a las playas de Zanzíbar',
    ],

    requestButton: 'Solicitar safari de luna de miel',

    readyTitle: '¿Listo para tu safari de luna de miel?',

    readyText:
      'Compártenos tus fechas de viaje, parques nacionales preferidos, estilo de alojamiento y experiencias románticas especiales. También indícanos si deseas añadir una extensión de playa en Zanzíbar. Nuestros especialistas crearán un itinerario privado de luna de miel y una cotización personalizada para ti.',

    quoteButton: 'Solicitar tu safari de luna de miel',

    whatsapp: 'Chatear por WhatsApp',
  },
};

export default function HoneymoonSafariPage() {
  const { language } = useLanguage();

  const t =
    translations[language as keyof typeof translations] ||
    translations.en;

  return (
    <main>
      <Header />

      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/honeymoon-two.jpg"
      />

      {/* INTRO */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">

            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                {t.label}
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {t.mainTitle}
              </h2>

              <p className="mt-6 leading-8 text-black/70">
                {t.paragraph1}
              </p>

              <p className="mt-4 leading-8 text-black/70">
                {t.paragraph2}
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="rounded-3xl bg-cream p-8 shadow-lg">

              <h3 className="text-2xl font-bold">
                {t.highlightsTitle}
              </h3>

              <ul className="mt-6 space-y-4">
                {t.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3"
                  >
                    <span className="font-bold text-gold">
                      ✓
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/booking"
                className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white"
              >
                {t.requestButton}
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            {t.readyTitle}
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80">
            {t.readyText}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/booking"
              className="rounded-full bg-gold px-8 py-4 font-bold text-white"
            >
              {t.quoteButton}
            </Link>

            <a
              href="https://wa.me/255759273339"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-8 py-4 font-bold text-white"
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