'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Mto wa Mbu Cultural Tour',
    heroSubtitle:
      'Explore local markets, farms, art, food, and the diverse communities of Mto wa Mbu near Lake Manyara.',
    label: 'Village, Market and Local Food Experience',
    heading: 'Discover the Diverse Culture of Mto wa Mbu',
    paragraph1:
      'Explore the lively village of Mto wa Mbu near Lake Manyara and discover its colorful markets, farms, local art, traditional food, and diverse communities from across Tanzania.',
    paragraph2:
      'Walk with a local guide, visit banana farms and workshops, taste local dishes, meet artists and farmers, and experience everyday village life in one of northern Tanzania’s most culturally diverse towns.',
    highlightsTitle: 'Cultural Highlights',
    book: 'Book This Cultural Tour',
    highlights: [
      'Explore the colorful local market',
      'Visit banana farms and village workshops',
      'Taste traditional Tanzanian food',
      'Meet local artists, farmers, and families',
      'Learn about the diverse communities of Mto wa Mbu',
    ],
  },

  de: {
    heroTitle: 'Mto-wa-Mbu-Kulturreise',
    heroSubtitle:
      'Entdecken Sie lokale Märkte, Bauernhöfe, Kunst, Küche und die vielfältigen Gemeinschaften von Mto wa Mbu nahe dem Manyara-See.',
    label: 'Dorf-, Markt- und kulinarisches Erlebnis',
    heading: 'Entdecken Sie die vielfältige Kultur von Mto wa Mbu',
    paragraph1:
      'Erkunden Sie das lebendige Dorf Mto wa Mbu nahe dem Manyara-See und entdecken Sie seine farbenfrohen Märkte, Bauernhöfe, lokale Kunst, traditionelle Küche und vielfältigen Gemeinschaften aus ganz Tansania.',
    paragraph2:
      'Spazieren Sie mit einem lokalen Reiseleiter, besuchen Sie Bananenplantagen und Werkstätten, probieren Sie lokale Gerichte, treffen Sie Künstler und Bauern und erleben Sie den Alltag in einer der kulturell vielfältigsten Städte Nordtansanias.',
    highlightsTitle: 'Kulturelle Höhepunkte',
    book: 'Diese Kulturreise buchen',
    highlights: [
      'Den farbenfrohen lokalen Markt erkunden',
      'Bananenplantagen und Dorfwerkstätten besuchen',
      'Traditionelle tansanische Speisen probieren',
      'Lokale Künstler, Bauern und Familien treffen',
      'Die vielfältigen Gemeinschaften von Mto wa Mbu kennenlernen',
    ],
  },

  fr: {
    heroTitle: 'Circuit culturel de Mto wa Mbu',
    heroSubtitle:
      'Découvrez les marchés locaux, les fermes, l’art, la cuisine et les communautés diverses de Mto wa Mbu près du lac Manyara.',
    label: 'Expérience villageoise, marché et cuisine locale',
    heading: 'Découvrez la diversité culturelle de Mto wa Mbu',
    paragraph1:
      'Explorez le village animé de Mto wa Mbu près du lac Manyara et découvrez ses marchés colorés, ses fermes, son artisanat local, sa cuisine traditionnelle et ses communautés venues de différentes régions de Tanzanie.',
    paragraph2:
      'Promenez-vous avec un guide local, visitez les plantations de bananes et les ateliers, goûtez aux plats locaux, rencontrez des artistes et des agriculteurs et découvrez la vie quotidienne dans l’une des villes les plus culturellement diversifiées du nord de la Tanzanie.',
    highlightsTitle: 'Points forts culturels',
    book: 'Réserver ce circuit culturel',
    highlights: [
      'Explorer le marché local coloré',
      'Visiter les plantations de bananes et les ateliers du village',
      'Goûter à la cuisine traditionnelle tanzanienne',
      'Rencontrer des artistes, agriculteurs et familles locales',
      'Découvrir les diverses communautés de Mto wa Mbu',
    ],
  },

  es: {
    heroTitle: 'Tour cultural de Mto wa Mbu',
    heroSubtitle:
      'Explore los mercados locales, las granjas, el arte, la gastronomía y las diversas comunidades de Mto wa Mbu cerca del lago Manyara.',
    label: 'Experiencia de pueblo, mercado y comida local',
    heading: 'Descubra la diversa cultura de Mto wa Mbu',
    paragraph1:
      'Explore el animado pueblo de Mto wa Mbu cerca del lago Manyara y descubra sus coloridos mercados, granjas, arte local, comida tradicional y diversas comunidades de toda Tanzania.',
    paragraph2:
      'Camine con un guía local, visite plantaciones de plátanos y talleres, pruebe platos locales, conozca a artistas y agricultores y experimente la vida cotidiana en una de las localidades culturalmente más diversas del norte de Tanzania.',
    highlightsTitle: 'Aspectos culturales destacados',
    book: 'Reservar este tour cultural',
    highlights: [
      'Explorar el colorido mercado local',
      'Visitar plantaciones de plátanos y talleres del pueblo',
      'Probar comida tradicional de Tanzania',
      'Conocer a artistas, agricultores y familias locales',
      'Aprender sobre las diversas comunidades de Mto wa Mbu',
    ],
  },
};

export default function MtoWaMbuCulturalTourPage() {
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
        image="/images/mtowambu-one.jpg"
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