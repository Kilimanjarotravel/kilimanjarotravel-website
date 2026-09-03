'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Mnemba Island Snorkeling',
    heroSubtitle:
      'Explore clear turquoise waters, colorful coral reefs, and tropical marine life near Mnemba Island.',
    label: 'Snorkeling and Marine Adventure',
    title: 'Explore the Waters Around Mnemba Island',
    description:
      'The tour is suitable for beginners and experienced swimmers, with local guides providing snorkeling equipment and safety support throughout the experience.',
    durationLabel: 'Duration',
    duration: 'Half Day',
    experienceLabel: 'Experience',
    experience: 'Marine & Snorkeling',
    highlightsTitle: 'Holiday Highlights',
    highlights: [
      'Snorkel in clear turquoise waters',
      'See colorful tropical fish and coral reefs',
      'Enjoy a scenic boat trip near Mnemba Island',
      'Use provided snorkeling equipment',
      'Relax and swim in beautiful ocean surroundings',
    ],
    quote: 'Request a Quote',
  },

  de: {
    heroTitle: 'Schnorcheln auf Mnemba Island',
    heroSubtitle:
      'Erkunden Sie kristallklares türkisfarbenes Wasser, farbenfrohe Korallenriffe und tropische Meereslebewesen rund um Mnemba Island.',
    label: 'Schnorchel- und Meeresabenteuer',
    title: 'Entdecken Sie die Gewässer rund um Mnemba Island',
    description:
      'Die Tour eignet sich sowohl für Anfänger als auch für erfahrene Schwimmer. Lokale Guides stellen die Schnorchelausrüstung bereit und sorgen während des gesamten Erlebnisses für Sicherheit.',
    durationLabel: 'Dauer',
    duration: 'Halber Tag',
    experienceLabel: 'Erlebnis',
    experience: 'Meer & Schnorcheln',
    highlightsTitle: 'Highlights der Tour',
    highlights: [
      'Schnorcheln Sie in kristallklarem türkisfarbenem Wasser',
      'Entdecken Sie farbenfrohe tropische Fische und Korallenriffe',
      'Genießen Sie eine malerische Bootsfahrt bei Mnemba Island',
      'Nutzen Sie die bereitgestellte Schnorchelausrüstung',
      'Entspannen und schwimmen Sie in wunderschöner Meeresumgebung',
    ],
    quote: 'Angebot anfragen',
  },

  fr: {
    heroTitle: 'Snorkeling à Mnemba Island',
    heroSubtitle:
      'Explorez des eaux turquoise cristallines, des récifs coralliens colorés et la vie marine tropicale autour de l’île de Mnemba.',
    label: 'Aventure marine et snorkeling',
    title: 'Explorez les eaux autour de l’île de Mnemba',
    description:
      'L’excursion convient aux débutants comme aux nageurs expérimentés. Des guides locaux fournissent l’équipement de snorkeling et assurent l’accompagnement et la sécurité tout au long de l’expérience.',
    durationLabel: 'Durée',
    duration: 'Demi-journée',
    experienceLabel: 'Expérience',
    experience: 'Mer & Snorkeling',
    highlightsTitle: 'Points forts de l’excursion',
    highlights: [
      'Faire du snorkeling dans des eaux turquoise cristallines',
      'Observer des poissons tropicaux colorés et des récifs coralliens',
      'Profiter d’une belle excursion en bateau près de l’île de Mnemba',
      'Utiliser l’équipement de snorkeling fourni',
      'Se détendre et nager dans un magnifique environnement marin',
    ],
    quote: 'Demander un devis',
  },

  es: {
    heroTitle: 'Snorkeling en la isla de Mnemba',
    heroSubtitle:
      'Explora aguas turquesas cristalinas, coloridos arrecifes de coral y vida marina tropical cerca de la isla de Mnemba.',
    label: 'Aventura marina y snorkeling',
    title: 'Explora las aguas alrededor de la isla de Mnemba',
    description:
      'El tour es adecuado tanto para principiantes como para nadadores experimentados. Los guías locales proporcionan el equipo de snorkeling y apoyo de seguridad durante toda la experiencia.',
    durationLabel: 'Duración',
    duration: 'Medio día',
    experienceLabel: 'Experiencia',
    experience: 'Mar y Snorkeling',
    highlightsTitle: 'Aspectos destacados',
    highlights: [
      'Practica snorkeling en aguas turquesas cristalinas',
      'Observa peces tropicales de colores y arrecifes de coral',
      'Disfruta de un paseo panorámico en barco cerca de la isla de Mnemba',
      'Utiliza el equipo de snorkeling proporcionado',
      'Relájate y nada en un hermoso entorno oceánico',
    ],
    quote: 'Solicitar presupuesto',
  },
};

export default function MnembaSnorkelingPage() {
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
        image="/images/mnemba-snorkeling.jpg"
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