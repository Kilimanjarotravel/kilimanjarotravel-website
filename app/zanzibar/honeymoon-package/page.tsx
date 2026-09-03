'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Zanzibar Honeymoon Package',
    heroSubtitle:
      'Celebrate your honeymoon with romantic beaches, private experiences, tropical sunsets, and unforgettable island moments.',
    label: 'Romantic Island Experience',
    title: 'Celebrate Your Honeymoon in Zanzibar',
    description:
      'Enjoy private moments, relaxing beach days, romantic dinners, island excursions, and personalized experiences designed to create unforgettable memories together.',
    durationLabel: 'Duration',
    duration: '5–7 Days',
    experienceLabel: 'Experience',
    experience: 'Romantic',
    highlightsTitle: 'Honeymoon Highlights',
    highlights: [
      'Stay in romantic beachfront accommodation',
      'Relax on white-sand beaches',
      'Enjoy tropical sunsets and private moments',
      'Experience romantic dinners and island excursions',
      'Perfect for newlyweds and couples',
    ],
    quote: 'Request a Quote',
  },

  de: {
    heroTitle: 'Zanzibar Flitterwochen-Paket',
    heroSubtitle:
      'Feiern Sie Ihre Flitterwochen mit romantischen Stränden, privaten Erlebnissen, tropischen Sonnenuntergängen und unvergesslichen Inselmomenten.',
    label: 'Romantisches Inselerlebnis',
    title: 'Feiern Sie Ihre Flitterwochen auf Zanzibar',
    description:
      'Genießen Sie private Momente, entspannte Strandtage, romantische Abendessen, Inselausflüge und individuell gestaltete Erlebnisse, die unvergessliche gemeinsame Erinnerungen schaffen.',
    durationLabel: 'Dauer',
    duration: '5–7 Tage',
    experienceLabel: 'Erlebnis',
    experience: 'Romantisch',
    highlightsTitle: 'Highlights der Flitterwochen',
    highlights: [
      'Übernachten Sie in einer romantischen Unterkunft direkt am Strand',
      'Entspannen Sie an weißen Sandstränden',
      'Genießen Sie tropische Sonnenuntergänge und private Momente',
      'Erleben Sie romantische Abendessen und Inselausflüge',
      'Perfekt für frisch verheiratete Paare und Paare',
    ],
    quote: 'Angebot anfragen',
  },

  fr: {
    heroTitle: 'Forfait lune de miel à Zanzibar',
    heroSubtitle:
      'Célébrez votre lune de miel avec des plages romantiques, des expériences privées, des couchers de soleil tropicaux et des moments inoubliables sur l’île.',
    label: 'Expérience romantique sur l’île',
    title: 'Célébrez votre lune de miel à Zanzibar',
    description:
      'Profitez de moments privés, de journées relaxantes à la plage, de dîners romantiques, d’excursions sur l’île et d’expériences personnalisées conçues pour créer des souvenirs inoubliables à deux.',
    durationLabel: 'Durée',
    duration: '5–7 jours',
    experienceLabel: 'Expérience',
    experience: 'Romantique',
    highlightsTitle: 'Points forts de la lune de miel',
    highlights: [
      'Séjourner dans un hébergement romantique en bord de mer',
      'Se détendre sur des plages de sable blanc',
      'Profiter de couchers de soleil tropicaux et de moments privés',
      'Vivre des dîners romantiques et des excursions sur l’île',
      'Parfait pour les jeunes mariés et les couples',
    ],
    quote: 'Demander un devis',
  },

  es: {
    heroTitle: 'Paquete de luna de miel en Zanzíbar',
    heroSubtitle:
      'Celebra tu luna de miel con playas románticas, experiencias privadas, atardeceres tropicales y momentos inolvidables en la isla.',
    label: 'Experiencia romántica en la isla',
    title: 'Celebra tu luna de miel en Zanzíbar',
    description:
      'Disfruta de momentos privados, días relajantes en la playa, cenas románticas, excursiones por la isla y experiencias personalizadas diseñadas para crear recuerdos inolvidables juntos.',
    durationLabel: 'Duración',
    duration: '5–7 días',
    experienceLabel: 'Experiencia',
    experience: 'Romántica',
    highlightsTitle: 'Lo más destacado de la luna de miel',
    highlights: [
      'Alojarse en un alojamiento romántico frente al mar',
      'Relajarse en playas de arena blanca',
      'Disfrutar de atardeceres tropicales y momentos privados',
      'Vivir cenas románticas y excursiones por la isla',
      'Perfecto para recién casados y parejas',
    ],
    quote: 'Solicitar presupuesto',
  },
};

export default function ZanzibarHoneymoonPackagePage() {
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
        image="/images/zanzibar-honeymoon.jpg"
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