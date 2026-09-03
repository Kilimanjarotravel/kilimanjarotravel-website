'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Stone Town & Spice Tour',
    heroSubtitle:
      "Explore historic Stone Town, vibrant local markets, and Zanzibar's famous spice farms.",
    label: 'History, Culture and Spice Experience',
    title: 'Discover Stone Town and Zanzibar’s Spices',
    description:
      'Continue to a spice farm to see, smell, and taste tropical spices, fruits, and plants while learning why Zanzibar is known as the Spice Island.',
    durationLabel: 'Duration',
    duration: '1 Day',
    experienceLabel: 'Experience',
    experience: 'Cultural',
    highlightsTitle: 'Holiday Highlights',
    highlights: [
      'Explore the historic streets of Stone Town',
      'Visit colorful markets and local shops',
      'Discover Zanzibar’s cultural heritage',
      'Tour a working spice farm',
      'Taste tropical spices and seasonal fruits',
    ],
    quote: 'Request a Quote',
  },

  de: {
    heroTitle: 'Stone Town & Gewürztour',
    heroSubtitle:
      'Entdecken Sie das historische Stone Town, lebhafte lokale Märkte und die berühmten Gewürzfarmen von Zanzibar.',
    label: 'Geschichte, Kultur und Gewürzerlebnis',
    title: 'Entdecken Sie Stone Town und die Gewürze von Zanzibar',
    description:
      'Besuchen Sie anschließend eine Gewürzfarm, um tropische Gewürze, Früchte und Pflanzen zu sehen, zu riechen und zu probieren und mehr darüber zu erfahren, warum Zanzibar als Gewürzinsel bekannt ist.',
    durationLabel: 'Dauer',
    duration: '1 Tag',
    experienceLabel: 'Erlebnis',
    experience: 'Kulturell',
    highlightsTitle: 'Highlights der Tour',
    highlights: [
      'Erkunden Sie die historischen Straßen von Stone Town',
      'Besuchen Sie farbenfrohe Märkte und lokale Geschäfte',
      'Entdecken Sie das kulturelle Erbe von Zanzibar',
      'Besuchen Sie eine aktive Gewürzfarm',
      'Probieren Sie tropische Gewürze und saisonale Früchte',
    ],
    quote: 'Angebot anfragen',
  },

  fr: {
    heroTitle: 'Stone Town & visite des épices',
    heroSubtitle:
      'Explorez le quartier historique de Stone Town, les marchés locaux animés et les célèbres plantations d’épices de Zanzibar.',
    label: 'Expérience historique, culturelle et épicée',
    title: 'Découvrez Stone Town et les épices de Zanzibar',
    description:
      'Poursuivez votre visite dans une plantation d’épices pour voir, sentir et goûter les épices, fruits et plantes tropicales tout en découvrant pourquoi Zanzibar est connue comme l’île aux épices.',
    durationLabel: 'Durée',
    duration: '1 jour',
    experienceLabel: 'Expérience',
    experience: 'Culturelle',
    highlightsTitle: 'Points forts de l’excursion',
    highlights: [
      'Explorer les rues historiques de Stone Town',
      'Visiter les marchés colorés et les boutiques locales',
      'Découvrir le patrimoine culturel de Zanzibar',
      'Visiter une plantation d’épices en activité',
      'Goûter des épices tropicales et des fruits de saison',
    ],
    quote: 'Demander un devis',
  },

  es: {
    heroTitle: 'Stone Town y tour de especias',
    heroSubtitle:
      'Explora la histórica Stone Town, los animados mercados locales y las famosas plantaciones de especias de Zanzíbar.',
    label: 'Experiencia de historia, cultura y especias',
    title: 'Descubre Stone Town y las especias de Zanzíbar',
    description:
      'Continúa hacia una plantación de especias para ver, oler y probar especias, frutas y plantas tropicales mientras descubres por qué Zanzíbar es conocida como la Isla de las Especias.',
    durationLabel: 'Duración',
    duration: '1 día',
    experienceLabel: 'Experiencia',
    experience: 'Cultural',
    highlightsTitle: 'Aspectos destacados',
    highlights: [
      'Explora las calles históricas de Stone Town',
      'Visita mercados coloridos y tiendas locales',
      'Descubre el patrimonio cultural de Zanzíbar',
      'Visita una plantación de especias en funcionamiento',
      'Prueba especias tropicales y frutas de temporada',
    ],
    quote: 'Solicitar presupuesto',
  },
};

export default function StoneTownSpiceTourPage() {
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
        image="/images/stone-town.jpg"
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                {t.label}
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {t.title}
              </h2>

              <p className="mt-4 leading-8 text-black/70">
                {t.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-cream p-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-gold">
                    {t.durationLabel}
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    {t.duration}
                  </p>
                </div>

                <div className="rounded-2xl bg-cream p-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-gold">
                    {t.experienceLabel}
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    {t.experience}
                  </p>
                </div>
              </div>
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
                {t.quote}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}