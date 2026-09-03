'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Zanzibar Beach Holiday',
    heroSubtitle:
      'Relax on white-sand beaches, swim in turquoise waters, and enjoy a peaceful tropical escape in Zanzibar.',
    label: 'Beach and Island Experience',
    title: 'Relax on the Beautiful Beaches of Zanzibar',
    paragraph1:
      'Enjoy a relaxing Zanzibar beach holiday with white-sand beaches, warm turquoise waters, tropical sunshine, and carefully selected beachfront accommodation.',
    paragraph2:
      'Spend your days swimming, relaxing, enjoying fresh seafood, and exploring the island at your own pace. This beach holiday is perfect after a safari, for couples, families, and honeymoon travelers.',
    durationLabel: 'Duration',
    duration: '4–7 Days',
    experienceLabel: 'Experience',
    experience: 'Relaxing',
    highlightsTitle: 'Holiday Highlights',
    highlights: [
      'Relax on white-sand beaches',
      'Swim in warm turquoise waters',
      'Stay in carefully selected beach accommodation',
      'Enjoy fresh seafood and island hospitality',
      'Perfect after a safari or for a honeymoon',
    ],
    quote: 'Request a Quote',
  },

  de: {
    heroTitle: 'Zanzibar Strandurlaub',
    heroSubtitle:
      'Entspannen Sie an weißen Sandstränden, schwimmen Sie im türkisfarbenen Wasser und genießen Sie eine ruhige tropische Auszeit auf Zanzibar.',
    label: 'Strand- und Inselerlebnis',
    title: 'Entspannen Sie an den wunderschönen Stränden von Zanzibar',
    paragraph1:
      'Genießen Sie einen erholsamen Strandurlaub auf Zanzibar mit weißen Sandstränden, warmem türkisfarbenem Wasser, tropischem Sonnenschein und sorgfältig ausgewählten Unterkünften direkt am Strand.',
    paragraph2:
      'Verbringen Sie Ihre Tage mit Schwimmen, Entspannen, frischen Meeresfrüchten und der Erkundung der Insel in Ihrem eigenen Tempo. Dieser Strandurlaub eignet sich perfekt nach einer Safari sowie für Paare, Familien und Hochzeitsreisende.',
    durationLabel: 'Dauer',
    duration: '4–7 Tage',
    experienceLabel: 'Erlebnis',
    experience: 'Entspannend',
    highlightsTitle: 'Highlights des Urlaubs',
    highlights: [
      'Entspannen Sie an weißen Sandstränden',
      'Schwimmen Sie im warmen türkisfarbenen Wasser',
      'Übernachten Sie in sorgfältig ausgewählten Strandunterkünften',
      'Genießen Sie frische Meeresfrüchte und die Gastfreundschaft der Insel',
      'Perfekt nach einer Safari oder für die Flitterwochen',
    ],
    quote: 'Angebot anfragen',
  },

  fr: {
    heroTitle: 'Vacances balnéaires à Zanzibar',
    heroSubtitle:
      'Détendez-vous sur des plages de sable blanc, nagez dans des eaux turquoise et profitez d’une escapade tropicale paisible à Zanzibar.',
    label: 'Expérience plage et île',
    title: 'Détendez-vous sur les magnifiques plages de Zanzibar',
    paragraph1:
      'Profitez de vacances balnéaires relaxantes à Zanzibar avec des plages de sable blanc, des eaux turquoise chaudes, du soleil tropical et un hébergement soigneusement sélectionné en bord de mer.',
    paragraph2:
      'Passez vos journées à nager, vous détendre, déguster des fruits de mer frais et explorer l’île à votre rythme. Ces vacances sont parfaites après un safari, pour les couples, les familles et les voyageurs en lune de miel.',
    durationLabel: 'Durée',
    duration: '4–7 jours',
    experienceLabel: 'Expérience',
    experience: 'Relaxante',
    highlightsTitle: 'Points forts du séjour',
    highlights: [
      'Se détendre sur des plages de sable blanc',
      'Nager dans des eaux turquoise et chaudes',
      'Séjourner dans un hébergement soigneusement sélectionné en bord de mer',
      'Profiter de fruits de mer frais et de l’hospitalité de l’île',
      'Parfait après un safari ou pour une lune de miel',
    ],
    quote: 'Demander un devis',
  },

  es: {
    heroTitle: 'Vacaciones de playa en Zanzíbar',
    heroSubtitle:
      'Relájate en playas de arena blanca, nada en aguas turquesas y disfruta de una tranquila escapada tropical en Zanzíbar.',
    label: 'Experiencia de playa e isla',
    title: 'Relájate en las hermosas playas de Zanzíbar',
    paragraph1:
      'Disfruta de unas relajantes vacaciones de playa en Zanzíbar con playas de arena blanca, aguas turquesas y cálidas, sol tropical y alojamiento cuidadosamente seleccionado frente al mar.',
    paragraph2:
      'Pasa tus días nadando, relajándote, disfrutando de mariscos frescos y explorando la isla a tu propio ritmo. Estas vacaciones de playa son perfectas después de un safari, para parejas, familias y viajeros de luna de miel.',
    durationLabel: 'Duración',
    duration: '4–7 días',
    experienceLabel: 'Experiencia',
    experience: 'Relajante',
    highlightsTitle: 'Lo más destacado',
    highlights: [
      'Relajarse en playas de arena blanca',
      'Nadar en aguas turquesas y cálidas',
      'Alojarse en un alojamiento de playa cuidadosamente seleccionado',
      'Disfrutar de mariscos frescos y de la hospitalidad de la isla',
      'Perfecto después de un safari o para una luna de miel',
    ],
    quote: 'Solicitar presupuesto',
  },
};

export default function ZanzibarBeachHolidayPage() {
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
        image="/images/zanzibar-beach.jpg"
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Left Column */}
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                {t.label}
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {t.title}
              </h2>

              <p className="mt-6 leading-8 text-black/70">
                {t.paragraph1}
              </p>

              <p className="mt-4 leading-8 text-black/70">
                {t.paragraph2}
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

            {/* Right Column */}
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