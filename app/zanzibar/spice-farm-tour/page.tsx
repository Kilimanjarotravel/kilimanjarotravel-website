'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Zanzibar Spice Farm Tour',
    heroSubtitle:
      'Discover Zanzibar’s famous spices, tropical fruits, and traditional farming during a guided plantation visit.',
    label: 'Spice and Plantation Experience',
    title: 'Discover Zanzibar’s Famous Spices',
    description:
      'Walk through the plantation with a local guide, smell and taste fresh spices and fruits, learn about their everyday uses, and enjoy an authentic Spice Island experience.',
    durationLabel: 'Duration',
    duration: 'Half Day',
    experienceLabel: 'Experience',
    experience: 'Culture & Nature',
    highlightsTitle: 'Holiday Highlights',
    highlights: [
      'Explore a traditional Zanzibar spice farm',
      'See cloves, cinnamon, vanilla, and nutmeg',
      'Taste fresh tropical fruits and spices',
      'Learn about traditional farming and local uses',
      'Enjoy a guided plantation walk',
    ],
    quote: 'Request a Quote',
  },

  de: {
    heroTitle: 'Zanzibar Gewürzfarm-Tour',
    heroSubtitle:
      'Entdecken Sie bei einem geführten Besuch einer Plantage die berühmten Gewürze, tropischen Früchte und traditionelle Landwirtschaft von Zanzibar.',
    label: 'Gewürz- und Plantagenerlebnis',
    title: 'Entdecken Sie die berühmten Gewürze von Zanzibar',
    description:
      'Spazieren Sie mit einem lokalen Guide durch die Plantage, riechen und probieren Sie frische Gewürze und Früchte, erfahren Sie mehr über ihre traditionelle Verwendung und erleben Sie die Gewürzinsel authentisch.',
    durationLabel: 'Dauer',
    duration: 'Halber Tag',
    experienceLabel: 'Erlebnis',
    experience: 'Kultur & Natur',
    highlightsTitle: 'Highlights der Tour',
    highlights: [
      'Erkunden Sie eine traditionelle Gewürzfarm auf Zanzibar',
      'Sehen Sie Nelken, Zimt, Vanille und Muskatnuss',
      'Probieren Sie frische tropische Früchte und Gewürze',
      'Erfahren Sie mehr über traditionelle Landwirtschaft und lokale Verwendung',
      'Genießen Sie einen geführten Spaziergang durch die Plantage',
    ],
    quote: 'Angebot anfragen',
  },

  fr: {
    heroTitle: 'Visite d’une plantation d’épices à Zanzibar',
    heroSubtitle:
      'Découvrez les célèbres épices de Zanzibar, les fruits tropicaux et l’agriculture traditionnelle lors d’une visite guidée d’une plantation.',
    label: 'Expérience des épices et de la plantation',
    title: 'Découvrez les célèbres épices de Zanzibar',
    description:
      'Promenez-vous dans la plantation avec un guide local, sentez et goûtez des épices et des fruits frais, découvrez leurs utilisations traditionnelles et profitez d’une expérience authentique de l’île aux épices.',
    durationLabel: 'Durée',
    duration: 'Demi-journée',
    experienceLabel: 'Expérience',
    experience: 'Culture & Nature',
    highlightsTitle: 'Points forts de l’excursion',
    highlights: [
      'Explorer une plantation traditionnelle d’épices à Zanzibar',
      'Découvrir les clous de girofle, la cannelle, la vanille et la noix de muscade',
      'Goûter des fruits tropicaux et des épices fraîches',
      'Découvrir l’agriculture traditionnelle et les utilisations locales',
      'Profiter d’une promenade guidée dans la plantation',
    ],
    quote: 'Demander un devis',
  },

  es: {
    heroTitle: 'Tour por una plantación de especias en Zanzíbar',
    heroSubtitle:
      'Descubre las famosas especias de Zanzíbar, las frutas tropicales y la agricultura tradicional durante una visita guiada a una plantación.',
    label: 'Experiencia de especias y plantación',
    title: 'Descubre las famosas especias de Zanzíbar',
    description:
      'Recorre la plantación con un guía local, huele y prueba especias y frutas frescas, aprende sobre sus usos tradicionales y disfruta de una auténtica experiencia en la Isla de las Especias.',
    durationLabel: 'Duración',
    duration: 'Medio día',
    experienceLabel: 'Experiencia',
    experience: 'Cultura y Naturaleza',
    highlightsTitle: 'Aspectos destacados',
    highlights: [
      'Explora una plantación tradicional de especias en Zanzíbar',
      'Descubre clavo, canela, vainilla y nuez moscada',
      'Prueba frutas tropicales y especias frescas',
      'Aprende sobre la agricultura tradicional y sus usos locales',
      'Disfruta de un paseo guiado por la plantación',
    ],
    quote: 'Solicitar presupuesto',
  },
};

export default function SpiceFarmTourPage() {
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
        image="/images/spice-farm.jpg"
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