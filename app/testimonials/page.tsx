'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    label: 'Genuine Guest Experiences',
    title: 'Guest Reviews',
    intro:
      'Read genuine guest reviews and travel experiences from customers who explored Tanzania with Kilimanjaro Travel.',
    reviewTitle: 'Read Our TripAdvisor Reviews',
    reviewText:
      'Visit our official TripAdvisor page to read verified reviews and see what travelers say about their safari, Kilimanjaro, and Tanzania experiences.',
    button: 'View Reviews on TripAdvisor',
  },

  de: {
    label: 'Echte Gästeerfahrungen',
    title: 'Gästebewertungen',
    intro:
      'Lesen Sie echte Gästebewertungen und Reiseerfahrungen von Kunden, die Tansania mit Kilimanjaro Travel erkundet haben.',
    reviewTitle: 'Unsere TripAdvisor-Bewertungen ansehen',
    reviewText:
      'Besuchen Sie unsere offizielle TripAdvisor-Seite, um verifizierte Bewertungen zu lesen und zu erfahren, was Reisende über ihre Safari-, Kilimandscharo- und Tansania-Erlebnisse sagen.',
    button: 'Bewertungen auf TripAdvisor ansehen',
  },

  fr: {
    label: 'Expériences authentiques de nos clients',
    title: 'Avis des clients',
    intro:
      'Découvrez les avis authentiques et les expériences de voyage de nos clients qui ont exploré la Tanzanie avec Kilimanjaro Travel.',
    reviewTitle: 'Découvrez nos avis sur TripAdvisor',
    reviewText:
      'Visitez notre page officielle TripAdvisor pour lire les avis vérifiés et découvrir ce que les voyageurs pensent de leurs expériences de safari, du Kilimandjaro et de la Tanzanie.',
    button: 'Voir les avis sur TripAdvisor',
  },

  es: {
    label: 'Experiencias auténticas de nuestros huéspedes',
    title: 'Opiniones de los huéspedes',
    intro:
      'Lee opiniones auténticas y experiencias de viaje de clientes que exploraron Tanzania con Kilimanjaro Travel.',
    reviewTitle: 'Lee nuestras opiniones en TripAdvisor',
    reviewText:
      'Visita nuestra página oficial de TripAdvisor para leer opiniones verificadas y descubrir lo que los viajeros dicen sobre sus experiencias de safari, Kilimanjaro y Tanzania.',
    button: 'Ver opiniones en TripAdvisor',
  },
};

export default function TestimonialsPage() {
  const { language } = useLanguage();

  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-24 pb-16">
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="font-bold uppercase tracking-widest text-gold">
              {t.label}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-forest md:text-5xl">
              {t.title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              {t.intro}
            </p>

            <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-cream p-8 shadow-xl">
              <div className="text-3xl text-gold">★★★★★</div>

              <h2 className="mt-5 text-2xl font-bold text-forest">
                {t.reviewTitle}
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                {t.reviewText}
              </p>

              <a
                href="https://www.tripadvisor.com/Attraction_Review-g297913-d27540848-Reviews-Kilimanjaro_Travel-Arusha_Arusha_Region.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white transition hover:opacity-90"
              >
                {t.button}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}