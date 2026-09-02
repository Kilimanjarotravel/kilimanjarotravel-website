'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Maasai Village Experience',
    heroSubtitle:
      'Meet the Maasai community, learn about traditional life, customs, dances, and their deep connection with nature.',
    label: 'Culture and Community Experience',
    heading: 'Discover Maasai Culture and Traditions',
    paragraph1:
      'Visit a traditional Maasai village and learn about the community’s daily life, customs, clothing, livestock, and strong relationship with the surrounding environment.',
    paragraph2:
      'Meet local families, enjoy traditional songs and dances, explore Maasai homes, and gain a respectful understanding of one of Tanzania’s best-known cultures.',
    highlightsTitle: 'Cultural Highlights',
    book: 'Book This Cultural Tour',
    highlights: [
      'Meet members of the Maasai community',
      'Learn about traditional customs and daily life',
      'Experience Maasai songs and dances',
      'Visit traditional homes and livestock areas',
      'Support a community-based cultural experience',
    ],
  },

  de: {
    heroTitle: 'Maasai-Dorferlebnis',
    heroSubtitle:
      'Treffen Sie die Maasai-Gemeinschaft, lernen Sie das traditionelle Leben und die Bräuche kennen und erleben Sie Tänze sowie die tiefe Verbindung zur Natur.',
    label: 'Kultur- und Gemeinschaftserlebnis',
    heading: 'Entdecken Sie die Kultur und Traditionen der Maasai',
    paragraph1:
      'Besuchen Sie ein traditionelles Maasai-Dorf und erfahren Sie mehr über den Alltag, die Bräuche, Kleidung, Viehzucht und die enge Beziehung der Gemeinschaft zur umliegenden Natur.',
    paragraph2:
      'Treffen Sie lokale Familien, erleben Sie traditionelle Lieder und Tänze, erkunden Sie Maasai-Häuser und gewinnen Sie einen respektvollen Einblick in eine der bekanntesten Kulturen Tansanias.',
    highlightsTitle: 'Kulturelle Höhepunkte',
    book: 'Diese Kulturreise buchen',
    highlights: [
      'Mitgliedern der Maasai-Gemeinschaft begegnen',
      'Traditionelle Bräuche und den Alltag kennenlernen',
      'Maasai-Lieder und Tänze erleben',
      'Traditionelle Häuser und Viehbereiche besuchen',
      'Ein gemeinschaftsbasiertes Kulturerlebnis unterstützen',
    ],
  },

  fr: {
    heroTitle: 'Expérience dans un village Massaï',
    heroSubtitle:
      'Rencontrez la communauté massaï, découvrez la vie traditionnelle, les coutumes, les danses et leur lien profond avec la nature.',
    label: 'Expérience culturelle et communautaire',
    heading: 'Découvrez la culture et les traditions massaï',
    paragraph1:
      'Visitez un village massaï traditionnel et découvrez la vie quotidienne de la communauté, ses coutumes, ses vêtements, son élevage et sa relation étroite avec l’environnement naturel.',
    paragraph2:
      'Rencontrez des familles locales, profitez des chants et danses traditionnels, explorez les maisons massaï et découvrez avec respect l’une des cultures les plus connues de Tanzanie.',
    highlightsTitle: 'Points forts culturels',
    book: 'Réserver ce circuit culturel',
    highlights: [
      'Rencontrer les membres de la communauté massaï',
      'Découvrir les coutumes traditionnelles et la vie quotidienne',
      'Assister aux chants et danses massaï',
      'Visiter les maisons traditionnelles et les zones d’élevage',
      'Soutenir une expérience culturelle communautaire',
    ],
  },

  es: {
    heroTitle: 'Experiencia en una aldea Maasai',
    heroSubtitle:
      'Conozca a la comunidad Maasai, descubra su vida tradicional, costumbres, danzas y su profunda conexión con la naturaleza.',
    label: 'Experiencia cultural y comunitaria',
    heading: 'Descubra la cultura y las tradiciones Maasai',
    paragraph1:
      'Visite una aldea Maasai tradicional y conozca la vida cotidiana de la comunidad, sus costumbres, vestimenta, ganado y su estrecha relación con el entorno natural.',
    paragraph2:
      'Conozca a familias locales, disfrute de canciones y danzas tradicionales, explore las casas Maasai y obtenga una comprensión respetuosa de una de las culturas más conocidas de Tanzania.',
    highlightsTitle: 'Aspectos culturales destacados',
    book: 'Reservar este tour cultural',
    highlights: [
      'Conocer a miembros de la comunidad Maasai',
      'Aprender sobre las costumbres tradicionales y la vida cotidiana',
      'Disfrutar de canciones y danzas Maasai',
      'Visitar casas tradicionales y zonas de ganado',
      'Apoyar una experiencia cultural basada en la comunidad',
    ],
  },
};

export default function MaasaiVillagePage() {
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
        image="/images/maasai-tatu.jpg"
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                {t.label}
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {t.heading}
              </h2>

              <p className="mt-6 leading-8 text-black/70">
                {t.paragraph1}
              </p>

              <p className="mt-4 leading-8 text-black/70">
                {t.paragraph2}
              </p>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h3 className="text-2xl font-bold">
                {t.highlightsTitle}
              </h3>

              <ul className="mt-6 space-y-4">
                {t.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-bold text-gold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/booking"
                className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white"
              >
                {t.book}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}