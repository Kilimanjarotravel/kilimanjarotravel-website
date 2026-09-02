'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Hadzabe & Datoga Cultural Tour',
    heroSubtitle:
      'Meet the Hadzabe hunter-gatherers and Datoga artisans near Lake Eyasi, and discover their traditional lifestyles and skills.',
    label: 'Lake Eyasi Cultural Experience',
    heading: 'Meet the Hadzabe and Datoga Communities',
    paragraph1:
      "Visit the Lake Eyasi region and meet the Hadzabe hunter-gatherers, one of Tanzania's oldest indigenous communities. Learn about their traditional survival skills, hunting methods, language, and close relationship with nature.",
    paragraph2:
      'Continue to a Datoga community to discover traditional metalworking, crafts, livestock keeping, and family life. This respectful cultural tour offers a deeper understanding of two unique communities.',
    highlightsTitle: 'Cultural Highlights',
    book: 'Book This Cultural Tour',
    highlights: [
      'Meet Hadzabe hunter-gatherer families',
      'Learn about traditional survival and hunting skills',
      'Visit a Datoga community and local artisans',
      'Discover traditional metalworking and crafts',
      'Experience the culture and landscapes of Lake Eyasi',
    ],
  },

  de: {
    heroTitle: 'Hadzabe- & Datoga-Kulturreise',
    heroSubtitle:
      'Treffen Sie die Hadzabe-Jäger und Sammler sowie Datoga-Handwerker am Eyasi-See und entdecken Sie ihre traditionellen Lebensweisen und Fähigkeiten.',
    label: 'Kulturerlebnis am Eyasi-See',
    heading: 'Lernen Sie die Gemeinschaften der Hadzabe und Datoga kennen',
    paragraph1:
      'Besuchen Sie die Region um den Eyasi-See und treffen Sie die Hadzabe-Jäger und Sammler, eine der ältesten indigenen Gemeinschaften Tansanias. Erfahren Sie mehr über traditionelle Überlebensfähigkeiten, Jagdmethoden, Sprache und die enge Verbindung zur Natur.',
    paragraph2:
      'Besuchen Sie anschließend eine Datoga-Gemeinschaft und entdecken Sie traditionelle Metallverarbeitung, Handwerk, Viehzucht und Familienleben. Diese respektvolle Kulturreise vermittelt einen tieferen Einblick in zwei einzigartige Gemeinschaften.',
    highlightsTitle: 'Kulturelle Höhepunkte',
    book: 'Diese Kulturreise buchen',
    highlights: [
      'Hadzabe-Jäger- und Sammlerfamilien treffen',
      'Traditionelle Überlebens- und Jagdfähigkeiten kennenlernen',
      'Eine Datoga-Gemeinschaft und lokale Handwerker besuchen',
      'Traditionelle Metallverarbeitung und Handwerk entdecken',
      'Die Kultur und Landschaften rund um den Eyasi-See erleben',
    ],
  },

  fr: {
    heroTitle: 'Circuit culturel Hadzabe & Datoga',
    heroSubtitle:
      'Rencontrez les chasseurs-cueilleurs Hadzabe et les artisans Datoga près du lac Eyasi et découvrez leurs modes de vie et savoir-faire traditionnels.',
    label: 'Expérience culturelle du lac Eyasi',
    heading: 'Rencontrez les communautés Hadzabe et Datoga',
    paragraph1:
      "Visitez la région du lac Eyasi et rencontrez les chasseurs-cueilleurs Hadzabe, l'une des plus anciennes communautés autochtones de Tanzanie. Découvrez leurs techniques traditionnelles de survie, leurs méthodes de chasse, leur langue et leur relation étroite avec la nature.",
    paragraph2:
      'Continuez vers une communauté Datoga pour découvrir le travail traditionnel des métaux, l’artisanat, l’élevage et la vie familiale. Ce circuit culturel respectueux permet de mieux comprendre deux communautés uniques.',
    highlightsTitle: 'Points forts culturels',
    book: 'Réserver ce circuit culturel',
    highlights: [
      'Rencontrer les familles Hadzabe de chasseurs-cueilleurs',
      'Découvrir les techniques traditionnelles de survie et de chasse',
      'Visiter une communauté Datoga et des artisans locaux',
      'Découvrir le travail traditionnel des métaux et l’artisanat',
      'Découvrir la culture et les paysages du lac Eyasi',
    ],
  },

  es: {
    heroTitle: 'Tour cultural Hadzabe & Datoga',
    heroSubtitle:
      'Conozca a los cazadores-recolectores Hadzabe y a los artesanos Datoga cerca del lago Eyasi y descubra sus formas de vida y habilidades tradicionales.',
    label: 'Experiencia cultural en el lago Eyasi',
    heading: 'Conozca a las comunidades Hadzabe y Datoga',
    paragraph1:
      'Visite la región del lago Eyasi y conozca a los cazadores-recolectores Hadzabe, una de las comunidades indígenas más antiguas de Tanzania. Descubra sus técnicas tradicionales de supervivencia, métodos de caza, idioma y estrecha relación con la naturaleza.',
    paragraph2:
      'Continúe hacia una comunidad Datoga para descubrir la metalurgia tradicional, la artesanía, la cría de ganado y la vida familiar. Este tour cultural respetuoso ofrece una comprensión más profunda de dos comunidades únicas.',
    highlightsTitle: 'Aspectos culturales destacados',
    book: 'Reservar este tour cultural',
    highlights: [
      'Conocer a familias Hadzabe de cazadores-recolectores',
      'Aprender sobre técnicas tradicionales de supervivencia y caza',
      'Visitar una comunidad Datoga y artesanos locales',
      'Descubrir la metalurgia tradicional y la artesanía',
      'Experimentar la cultura y los paisajes del lago Eyasi',
    ],
  },
};

export default function HadzabeDatogaCulturalTourPage() {
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
        image="/images/hadzabe-two.jpg"
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