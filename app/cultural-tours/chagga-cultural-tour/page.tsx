'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Chagga Cultural Tour',
    heroSubtitle:
      'Discover Chagga traditions, village life, local food, coffee culture, and the heritage of communities living around Mount Kilimanjaro.',
    label: 'Village, Heritage and Coffee Experience',
    heading: 'Discover Chagga Culture Around Kilimanjaro',
    paragraph1:
      'Visit a Chagga village on the slopes of Mount Kilimanjaro and learn about traditional homes, farming, local food, family life, and the history of the Chagga people.',
    paragraph2:
      'Meet local families, explore banana and coffee farms, discover traditional customs, and enjoy an authentic cultural experience in the fertile highlands around Kilimanjaro.',
    highlightsTitle: 'Cultural Highlights',
    book: 'Book This Cultural Tour',
    highlights: [
      'Visit a traditional Chagga village',
      'Learn about local customs and family life',
      'Explore banana and coffee farms',
      'Taste local food and fresh coffee',
      'Discover Chagga history around Kilimanjaro',
    ],
  },

  de: {
    heroTitle: 'Chagga-Kulturreise',
    heroSubtitle:
      'Entdecken Sie Chagga-Traditionen, das Dorfleben, lokale Küche, Kaffeekultur und das kulturelle Erbe der Gemeinschaften rund um den Kilimandscharo.',
    label: 'Dorf-, Kultur- und Kaffeeerlebnis',
    heading: 'Entdecken Sie die Chagga-Kultur rund um den Kilimandscharo',
    paragraph1:
      'Besuchen Sie ein Chagga-Dorf an den Hängen des Kilimandscharo und erfahren Sie mehr über traditionelle Häuser, Landwirtschaft, lokale Küche, Familienleben und die Geschichte der Chagga.',
    paragraph2:
      'Treffen Sie lokale Familien, erkunden Sie Bananen- und Kaffeeplantagen, entdecken Sie traditionelle Bräuche und genießen Sie ein authentisches Kulturerlebnis im fruchtbaren Hochland rund um den Kilimandscharo.',
    highlightsTitle: 'Kulturelle Höhepunkte',
    book: 'Diese Kulturreise buchen',
    highlights: [
      'Ein traditionelles Chagga-Dorf besuchen',
      'Lokale Bräuche und das Familienleben kennenlernen',
      'Bananen- und Kaffeeplantagen erkunden',
      'Lokale Speisen und frischen Kaffee probieren',
      'Die Geschichte der Chagga rund um den Kilimandscharo entdecken',
    ],
  },

  fr: {
    heroTitle: 'Circuit culturel Chagga',
    heroSubtitle:
      'Découvrez les traditions Chagga, la vie villageoise, la cuisine locale, la culture du café et le patrimoine des communautés vivant autour du Kilimandjaro.',
    label: 'Expérience villageoise, patrimoine et café',
    heading: 'Découvrez la culture Chagga autour du Kilimandjaro',
    paragraph1:
      'Visitez un village Chagga sur les pentes du Kilimandjaro et découvrez les maisons traditionnelles, l’agriculture, la cuisine locale, la vie familiale et l’histoire du peuple Chagga.',
    paragraph2:
      'Rencontrez des familles locales, explorez les plantations de bananes et de café, découvrez les coutumes traditionnelles et profitez d’une expérience culturelle authentique dans les hauts plateaux fertiles autour du Kilimandjaro.',
    highlightsTitle: 'Points forts culturels',
    book: 'Réserver ce circuit culturel',
    highlights: [
      'Visiter un village Chagga traditionnel',
      'Découvrir les coutumes locales et la vie familiale',
      'Explorer les plantations de bananes et de café',
      'Goûter à la cuisine locale et au café frais',
      'Découvrir l’histoire des Chagga autour du Kilimandjaro',
    ],
  },

  es: {
    heroTitle: 'Tour cultural Chagga',
    heroSubtitle:
      'Descubra las tradiciones Chagga, la vida del pueblo, la gastronomía local, la cultura del café y el patrimonio de las comunidades que viven alrededor del Kilimanjaro.',
    label: 'Experiencia de pueblo, patrimonio y café',
    heading: 'Descubra la cultura Chagga alrededor del Kilimanjaro',
    paragraph1:
      'Visite una aldea Chagga en las laderas del Kilimanjaro y conozca las casas tradicionales, la agricultura, la comida local, la vida familiar y la historia del pueblo Chagga.',
    paragraph2:
      'Conozca a familias locales, explore plantaciones de plátano y café, descubra las costumbres tradicionales y disfrute de una auténtica experiencia cultural en las fértiles tierras altas alrededor del Kilimanjaro.',
    highlightsTitle: 'Aspectos culturales destacados',
    book: 'Reservar este tour cultural',
    highlights: [
      'Visitar una aldea Chagga tradicional',
      'Aprender sobre las costumbres locales y la vida familiar',
      'Explorar plantaciones de plátano y café',
      'Probar comida local y café fresco',
      'Descubrir la historia Chagga alrededor del Kilimanjaro',
    ],
  },
};

export default function ChaggaCulturalTourPage() {
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
        image="/images/chaga-mbili.jpg"
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