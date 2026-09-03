'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Zanzibar Dolphin Tour',
    heroSubtitle:
      'Enjoy a boat trip along Zanzibar’s coast and search for dolphins in their natural environment.',
    label: 'Ocean and Wildlife Experience',
    title: 'Search for Dolphins Along Zanzibar’s Coast',
    description:
      'The tour is led by experienced local guides and focuses on respectful wildlife viewing. Dolphin sightings depend on natural conditions and cannot be guaranteed.',
    durationLabel: 'Duration',
    duration: 'Half Day',
    experienceLabel: 'Experience',
    experience: 'Ocean & Wildlife',
    highlightsTitle: 'Holiday Highlights',
    highlights: [
      'Enjoy a scenic boat trip along Zanzibar’s coast',
      'Search for dolphins in their natural environment',
      'Learn from experienced local guides',
      'Enjoy beautiful ocean and coastal views',
      'Combine the tour with swimming or snorkeling',
    ],
    quote: 'Request a Quote',
  },

  de: {
    heroTitle: 'Zanzibar Delfin-Tour',
    heroSubtitle:
      'Genießen Sie eine Bootsfahrt entlang der Küste von Zanzibar und beobachten Sie Delfine in ihrer natürlichen Umgebung.',
    label: 'Meeres- und Wildtiererlebnis',
    title: 'Delfine entlang der Küste von Zanzibar beobachten',
    description:
      'Die Tour wird von erfahrenen lokalen Guides begleitet und konzentriert sich auf eine respektvolle Beobachtung der Wildtiere. Delfinsichtungen hängen von den natürlichen Bedingungen ab und können nicht garantiert werden.',
    durationLabel: 'Dauer',
    duration: 'Halber Tag',
    experienceLabel: 'Erlebnis',
    experience: 'Meer & Wildtiere',
    highlightsTitle: 'Highlights der Tour',
    highlights: [
      'Genießen Sie eine malerische Bootsfahrt entlang der Küste von Zanzibar',
      'Beobachten Sie Delfine in ihrer natürlichen Umgebung',
      'Lernen Sie von erfahrenen lokalen Guides',
      'Genießen Sie wunderschöne Ausblicke auf Meer und Küste',
      'Kombinieren Sie die Tour mit Schwimmen oder Schnorcheln',
    ],
    quote: 'Angebot anfragen',
  },

  fr: {
    heroTitle: 'Excursion aux dauphins de Zanzibar',
    heroSubtitle:
      'Profitez d’une excursion en bateau le long de la côte de Zanzibar et recherchez les dauphins dans leur environnement naturel.',
    label: 'Expérience marine et animalière',
    title: 'À la recherche des dauphins le long de la côte de Zanzibar',
    description:
      'L’excursion est accompagnée par des guides locaux expérimentés et privilégie une observation respectueuse de la faune. L’observation des dauphins dépend des conditions naturelles et ne peut pas être garantie.',
    durationLabel: 'Durée',
    duration: 'Demi-journée',
    experienceLabel: 'Expérience',
    experience: 'Océan & Faune',
    highlightsTitle: 'Points forts de l’excursion',
    highlights: [
      'Profiter d’une excursion en bateau le long de la côte de Zanzibar',
      'Rechercher les dauphins dans leur environnement naturel',
      'Apprendre auprès de guides locaux expérimentés',
      'Profiter de magnifiques paysages marins et côtiers',
      'Combiner l’excursion avec la baignade ou le snorkeling',
    ],
    quote: 'Demander un devis',
  },

  es: {
    heroTitle: 'Tour de delfines en Zanzíbar',
    heroSubtitle:
      'Disfruta de un paseo en barco por la costa de Zanzíbar y busca delfines en su entorno natural.',
    label: 'Experiencia de océano y vida silvestre',
    title: 'Busca delfines a lo largo de la costa de Zanzíbar',
    description:
      'El tour está dirigido por guías locales experimentados y se centra en la observación respetuosa de la fauna. Los avistamientos de delfines dependen de las condiciones naturales y no pueden garantizarse.',
    durationLabel: 'Duración',
    duration: 'Medio día',
    experienceLabel: 'Experiencia',
    experience: 'Océano y vida silvestre',
    highlightsTitle: 'Aspectos destacados',
    highlights: [
      'Disfruta de un paseo panorámico en barco por la costa de Zanzíbar',
      'Busca delfines en su entorno natural',
      'Aprende de guías locales experimentados',
      'Disfruta de hermosas vistas del océano y la costa',
      'Combina el tour con natación o snorkeling',
    ],
    quote: 'Solicitar presupuesto',
  },
};

export default function DolphinTourPage() {
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
        image="/images/dolphin-tour.jpg"
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