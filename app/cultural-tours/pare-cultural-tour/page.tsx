'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Pare Cultural Tour',
    heroSubtitle:
      'Explore the traditions, village life, farming, forests, and scenic landscapes of the Pare Mountains.',
    label: 'Mountain Village and Cultural Experience',
    heading: 'Discover Pare Culture and Mountain Life',
    paragraph1:
      'Visit traditional villages in the Pare Mountains and learn about local farming, family life, customs, and the history of the Pare people.',
    paragraph2:
      'Enjoy scenic mountain landscapes, meet local communities, explore forests and farms, and experience the peaceful culture of northern Tanzania.',
    highlightsTitle: 'Cultural Highlights',
    book: 'Book This Cultural Tour',
    highlights: [
      'Visit traditional Pare villages',
      'Learn about local customs and family life',
      'Explore farms, forests, and mountain landscapes',
      'Meet local communities and guides',
      'Enjoy scenic views of the Pare Mountains',
    ],
  },

  de: {
    heroTitle: 'Pare-Kulturreise',
    heroSubtitle:
      'Entdecken Sie die Traditionen, das Dorfleben, die Landwirtschaft, Wälder und die beeindruckenden Landschaften der Pare-Berge.',
    label: 'Bergdorf- und Kulturerlebnis',
    heading: 'Entdecken Sie die Pare-Kultur und das Leben in den Bergen',
    paragraph1:
      'Besuchen Sie traditionelle Dörfer in den Pare-Bergen und erfahren Sie mehr über die lokale Landwirtschaft, das Familienleben, Bräuche und die Geschichte der Pare.',
    paragraph2:
      'Genießen Sie die malerischen Berglandschaften, treffen Sie lokale Gemeinschaften, erkunden Sie Wälder und Bauernhöfe und erleben Sie die ruhige Kultur Nordtansanias.',
    highlightsTitle: 'Kulturelle Höhepunkte',
    book: 'Diese Kulturreise buchen',
    highlights: [
      'Traditionelle Pare-Dörfer besuchen',
      'Lokale Bräuche und das Familienleben kennenlernen',
      'Bauernhöfe, Wälder und Berglandschaften erkunden',
      'Lokale Gemeinschaften und Reiseleiter treffen',
      'Malerische Ausblicke auf die Pare-Berge genießen',
    ],
  },

  fr: {
    heroTitle: 'Circuit culturel Pare',
    heroSubtitle:
      'Découvrez les traditions, la vie villageoise, l’agriculture, les forêts et les magnifiques paysages des montagnes Pare.',
    label: 'Expérience culturelle et villageoise en montagne',
    heading: 'Découvrez la culture Pare et la vie en montagne',
    paragraph1:
      'Visitez les villages traditionnels des montagnes Pare et découvrez l’agriculture locale, la vie familiale, les coutumes et l’histoire du peuple Pare.',
    paragraph2:
      'Profitez des paysages montagneux, rencontrez les communautés locales, explorez les forêts et les fermes et découvrez la culture paisible du nord de la Tanzanie.',
    highlightsTitle: 'Points forts culturels',
    book: 'Réserver ce circuit culturel',
    highlights: [
      'Visiter les villages traditionnels Pare',
      'Découvrir les coutumes locales et la vie familiale',
      'Explorer les fermes, les forêts et les paysages montagneux',
      'Rencontrer les communautés locales et les guides',
      'Profiter des magnifiques vues sur les montagnes Pare',
    ],
  },

  es: {
    heroTitle: 'Tour cultural Pare',
    heroSubtitle:
      'Explore las tradiciones, la vida de los pueblos, la agricultura, los bosques y los hermosos paisajes de las montañas Pare.',
    label: 'Experiencia cultural y de pueblo de montaña',
    heading: 'Descubra la cultura Pare y la vida en las montañas',
    paragraph1:
      'Visite pueblos tradicionales de las montañas Pare y conozca la agricultura local, la vida familiar, las costumbres y la historia del pueblo Pare.',
    paragraph2:
      'Disfrute de los paisajes montañosos, conozca a las comunidades locales, explore bosques y granjas y experimente la tranquila cultura del norte de Tanzania.',
    highlightsTitle: 'Aspectos culturales destacados',
    book: 'Reservar este tour cultural',
    highlights: [
      'Visitar pueblos tradicionales Pare',
      'Aprender sobre las costumbres locales y la vida familiar',
      'Explorar granjas, bosques y paisajes de montaña',
      'Conocer comunidades locales y guías',
      'Disfrutar de vistas panorámicas de las montañas Pare',
    ],
  },
};

export default function PareCulturalTourPage() {
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
        image="/images/pare-two.jpg"
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