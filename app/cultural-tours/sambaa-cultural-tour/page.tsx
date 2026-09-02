'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Sambaa Cultural Tour',
    heroSubtitle:
      'Discover the traditions, village life, farming, forests, and scenic landscapes of the Usambara Mountains.',
    label: 'Usambara Village and Cultural Experience',
    heading: 'Discover Sambaa Culture in the Usambara Mountains',
    paragraph1:
      'Visit Sambaa villages in the Usambara Mountains and learn about local traditions, farming, family life, traditional medicine, and the history of the Sambaa people.',
    paragraph2:
      'Meet local communities, explore farms and forests, enjoy scenic mountain views, and experience the peaceful lifestyle and warm hospitality of the Usambara region.',
    highlightsTitle: 'Cultural Highlights',
    book: 'Book This Cultural Tour',
    highlights: [
      'Visit traditional Sambaa villages',
      'Learn about local customs and family life',
      'Explore farms, forests, and mountain landscapes',
      'Discover traditional medicine and local history',
      'Enjoy scenic views of the Usambara Mountains',
    ],
  },

  de: {
    heroTitle: 'Sambaa-Kulturreise',
    heroSubtitle:
      'Entdecken Sie die Traditionen, das Dorfleben, die Landwirtschaft, Wälder und beeindruckenden Landschaften der Usambara-Berge.',
    label: 'Dorf- und Kulturerlebnis in Usambara',
    heading: 'Entdecken Sie die Sambaa-Kultur in den Usambara-Bergen',
    paragraph1:
      'Besuchen Sie Sambaa-Dörfer in den Usambara-Bergen und erfahren Sie mehr über lokale Traditionen, Landwirtschaft, Familienleben, traditionelle Medizin und die Geschichte der Sambaa.',
    paragraph2:
      'Treffen Sie lokale Gemeinschaften, erkunden Sie Bauernhöfe und Wälder, genießen Sie die Berglandschaft und erleben Sie den ruhigen Lebensstil und die herzliche Gastfreundschaft der Usambara-Region.',
    highlightsTitle: 'Kulturelle Höhepunkte',
    book: 'Diese Kulturreise buchen',
    highlights: [
      'Traditionelle Sambaa-Dörfer besuchen',
      'Lokale Bräuche und das Familienleben kennenlernen',
      'Bauernhöfe, Wälder und Berglandschaften erkunden',
      'Traditionelle Medizin und lokale Geschichte entdecken',
      'Malerische Ausblicke auf die Usambara-Berge genießen',
    ],
  },

  fr: {
    heroTitle: 'Circuit culturel Sambaa',
    heroSubtitle:
      'Découvrez les traditions, la vie villageoise, l’agriculture, les forêts et les magnifiques paysages des montagnes Usambara.',
    label: 'Expérience villageoise et culturelle à Usambara',
    heading: 'Découvrez la culture Sambaa dans les montagnes Usambara',
    paragraph1:
      'Visitez les villages Sambaa des montagnes Usambara et découvrez les traditions locales, l’agriculture, la vie familiale, la médecine traditionnelle et l’histoire du peuple Sambaa.',
    paragraph2:
      'Rencontrez les communautés locales, explorez les fermes et les forêts, profitez des paysages montagneux et découvrez le mode de vie paisible ainsi que l’hospitalité chaleureuse de la région d’Usambara.',
    highlightsTitle: 'Points forts culturels',
    book: 'Réserver ce circuit culturel',
    highlights: [
      'Visiter les villages Sambaa traditionnels',
      'Découvrir les coutumes locales et la vie familiale',
      'Explorer les fermes, les forêts et les paysages montagneux',
      'Découvrir la médecine traditionnelle et l’histoire locale',
      'Profiter des magnifiques vues sur les montagnes Usambara',
    ],
  },

  es: {
    heroTitle: 'Tour cultural Sambaa',
    heroSubtitle:
      'Descubra las tradiciones, la vida de los pueblos, la agricultura, los bosques y los hermosos paisajes de las montañas Usambara.',
    label: 'Experiencia cultural y de pueblo en Usambara',
    heading: 'Descubra la cultura Sambaa en las montañas Usambara',
    paragraph1:
      'Visite pueblos Sambaa en las montañas Usambara y conozca las tradiciones locales, la agricultura, la vida familiar, la medicina tradicional y la historia del pueblo Sambaa.',
    paragraph2:
      'Conozca a las comunidades locales, explore granjas y bosques, disfrute de los paisajes montañosos y experimente el estilo de vida tranquilo y la cálida hospitalidad de la región de Usambara.',
    highlightsTitle: 'Aspectos culturales destacados',
    book: 'Reservar este tour cultural',
    highlights: [
      'Visitar pueblos tradicionales Sambaa',
      'Aprender sobre las costumbres locales y la vida familiar',
      'Explorar granjas, bosques y paisajes de montaña',
      'Descubrir la medicina tradicional y la historia local',
      'Disfrutar de vistas panorámicas de las montañas Usambara',
    ],
  },
};

export default function SambaaCulturalTourPage() {
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
        image="/images/Usambara.jpg"
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