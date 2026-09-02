'use client';

import PageHero from '@/components/PageHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Kenya & Tanzania Combined Safari',
    heroSubtitle:
      'Explore Maasai Mara, Serengeti, Ngorongoro Crater, Amboseli, and other iconic East African destinations in one unforgettable journey.',

    label: 'Two Countries, One Adventure',
    heading: 'The Best of Kenya and Tanzania',

    paragraph1:
      'This combined safari connects the famous wildlife areas of Kenya and Tanzania, giving travelers the chance to experience different landscapes, cultures, wildlife, and national parks in one trip.',

    paragraph2:
      'The itinerary can be customized according to your travel dates, budget, preferred accommodation, and number of safari days.',

    highlightsTitle: 'Safari Highlights',

    highlights: [
      'Maasai Mara National Reserve',
      'Serengeti National Park',
      'Ngorongoro Crater',
      'Amboseli National Park',
      'Great Migration opportunities',
      'Private guide and safari vehicle',
      'Lodge, luxury or camping options',
      'Airport and border transfers',
    ],

    customButton: 'Request a Custom Itinerary',

    ctaTitle: 'Ready for Your Kenya & Tanzania Safari?',

    ctaText:
      'Share your travel dates, preferred parks, number of days, accommodation style, group size, and budget. Our safari specialists will create a personalized Kenya and Tanzania itinerary and quotation for you.',

    requestButton: 'Request Your Custom Itinerary',
    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Kombinierte Safari in Kenia & Tansania',
    heroSubtitle:
      'Entdecken Sie die Maasai Mara, die Serengeti, den Ngorongoro-Krater, den Amboseli-Nationalpark und weitere berühmte Reiseziele Ostafrikas auf einer unvergesslichen Reise.',

    label: 'Zwei Länder, ein Abenteuer',
    heading: 'Das Beste aus Kenia und Tansania',

    paragraph1:
      'Diese kombinierte Safari verbindet die berühmtesten Wildtiergebiete Kenias und Tansanias und bietet Ihnen die Möglichkeit, verschiedene Landschaften, Kulturen, Wildtiere und Nationalparks auf einer Reise zu erleben.',

    paragraph2:
      'Die Reiseroute kann individuell an Ihre Reisedaten, Ihr Budget, Ihre bevorzugte Unterkunft und die Anzahl der Safaritage angepasst werden.',

    highlightsTitle: 'Safari-Highlights',

    highlights: [
      'Maasai Mara National Reserve',
      'Serengeti-Nationalpark',
      'Ngorongoro-Krater',
      'Amboseli-Nationalpark',
      'Möglichkeiten zur Großen Migration',
      'Privater Guide und Safari-Fahrzeug',
      'Lodge-, Luxus- oder Campingoptionen',
      'Flughafen- und Grenztransfers',
    ],

    customButton: 'Individuelle Reiseroute anfragen',

    ctaTitle: 'Bereit für Ihre Kenia & Tansania Safari?',

    ctaText:
      'Teilen Sie uns Ihre Reisedaten, bevorzugten Nationalparks, gewünschte Reisedauer, Unterkunftsart, Gruppengröße und Ihr Budget mit. Unsere Safari-Spezialisten erstellen für Sie eine individuelle Kenia- und Tansania-Reiseroute inklusive Angebot.',

    requestButton: 'Individuelle Reiseroute anfragen',
    whatsappButton: 'Auf WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Safari Combiné Kenya & Tanzanie',
    heroSubtitle:
      'Découvrez le Maasai Mara, le Serengeti, le cratère du Ngorongoro, le parc national d’Amboseli et d’autres destinations emblématiques d’Afrique de l’Est lors d’un voyage inoubliable.',

    label: 'Deux pays, une aventure',
    heading: 'Le meilleur du Kenya et de la Tanzanie',

    paragraph1:
      'Ce safari combiné relie les célèbres régions sauvages du Kenya et de la Tanzanie, permettant aux voyageurs de découvrir différentes paysages, cultures, espèces sauvages et parcs nationaux au cours d’un même voyage.',

    paragraph2:
      'L’itinéraire peut être personnalisé selon vos dates de voyage, votre budget, votre hébergement préféré et le nombre de jours de safari.',

    highlightsTitle: 'Points forts du safari',

    highlights: [
      'Réserve nationale du Maasai Mara',
      'Parc national du Serengeti',
      'Cratère du Ngorongoro',
      'Parc national d’Amboseli',
      'Possibilités d’observer la Grande Migration',
      'Guide privé et véhicule de safari',
      'Options lodge, luxe ou camping',
      'Transferts aéroport et frontières',
    ],

    customButton: 'Demander un itinéraire personnalisé',

    ctaTitle: 'Prêt pour votre safari Kenya & Tanzanie ?',

    ctaText:
      'Partagez vos dates de voyage, les parcs que vous souhaitez visiter, le nombre de jours, votre style d’hébergement, la taille du groupe et votre budget. Nos spécialistes du safari créeront pour vous un itinéraire personnalisé au Kenya et en Tanzanie avec un devis.',

    requestButton: 'Demander votre itinéraire personnalisé',
    whatsappButton: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Safari Combinado Kenia y Tanzania',
    heroSubtitle:
      'Explore Maasai Mara, Serengeti, el Cráter del Ngorongoro, Amboseli y otros destinos emblemáticos de África Oriental en un viaje inolvidable.',

    label: 'Dos países, una aventura',
    heading: 'Lo mejor de Kenia y Tanzania',

    paragraph1:
      'Este safari combinado conecta las famosas zonas de vida silvestre de Kenia y Tanzania, ofreciendo a los viajeros la oportunidad de experimentar diferentes paisajes, culturas, fauna y parques nacionales en un solo viaje.',

    paragraph2:
      'El itinerario puede personalizarse según sus fechas de viaje, presupuesto, alojamiento preferido y número de días de safari.',

    highlightsTitle: 'Aspectos destacados del safari',

    highlights: [
      'Reserva Nacional Maasai Mara',
      'Parque Nacional del Serengeti',
      'Cráter del Ngorongoro',
      'Parque Nacional de Amboseli',
      'Oportunidades para ver la Gran Migración',
      'Guía privado y vehículo de safari',
      'Opciones de lodge, lujo o camping',
      'Traslados desde el aeropuerto y fronteras',
    ],

    customButton: 'Solicitar un itinerario personalizado',

    ctaTitle: '¿Listo para su safari por Kenia y Tanzania?',

    ctaText:
      'Comparta sus fechas de viaje, parques preferidos, número de días, estilo de alojamiento, tamaño del grupo y presupuesto. Nuestros especialistas en safaris crearán un itinerario personalizado por Kenia y Tanzania y una cotización para usted.',

    requestButton: 'Solicitar su itinerario personalizado',
    whatsappButton: 'Chatear por WhatsApp',
  },
};

export default function KenyaTanzaniaSafariPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/kenya-tanzania.jpeg"
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
              {t.customButton}
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