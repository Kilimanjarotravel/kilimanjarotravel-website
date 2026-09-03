'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Zanzibar Holidays',
    heroSubtitle:
      'White-sand beaches, turquoise waters, Stone Town, ocean adventures and romantic island escapes.',
    sectionTitle: 'Beach & Island Experiences',
    explore: 'Explore Experience',
    trips: [
      {
        title: 'Zanzibar Beach Holiday',
        image: '/images/zanzibar-beach.jpg',
        href: '/zanzibar/beach-holiday',
        description:
          'Relax on white-sand beaches, swim in turquoise waters, and enjoy a peaceful tropical island escape.',
      },
      {
        title: 'Stone Town & Spice Tour',
        image: '/images/stone-town.jpg',
        href: '/zanzibar/stone-town-spice-tour',
        description:
          'Discover historic Stone Town and experience the aromas, traditions, and flavors of Zanzibar’s famous spice farms.',
      },
      {
        title: 'Dolphin Tour',
        image: '/images/dolphin-tour.jpg',
        href: '/zanzibar/dolphin-tour',
        description:
          'Enjoy a memorable ocean adventure with the chance to see dolphins and explore the beautiful waters around Zanzibar.',
      },
      {
        title: 'Mnemba Snorkeling',
        image: '/images/mnemba-snorkeling.jpg',
        href: '/zanzibar/mnemba-snorkeling',
        description:
          'Explore crystal-clear waters, colorful coral reefs, and tropical marine life around Mnemba Island.',
      },
      {
        title: 'Spice Farm Tour',
        image: '/images/spice-farm.jpg',
        href: '/zanzibar/spice-farm-tour',
        description:
          'Walk through a traditional spice farm and discover the plants, flavors, and cultural heritage that make Zanzibar famous.',
      },
      {
        title: 'Honeymoon Package',
        image: '/images/zanzibar-honeymoon.jpg',
        href: '/zanzibar/honeymoon-package',
        description:
          'Enjoy a romantic Zanzibar escape with beautiful beaches, private experiences, and unforgettable moments for couples.',
      },
    ],
    ctaLabel: 'Plan Your Zanzibar Escape',
    ctaTitle: 'Ready to Experience Zanzibar?',
    ctaText:
      'Tell us your preferred travel dates, number of travelers, and the experiences you would like to enjoy. Our team will help you plan a personalized Zanzibar holiday.',
    quote: 'Request a Quote',
    whatsapp: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Zanzibar Urlaub',
    heroSubtitle:
      'Weiße Sandstrände, türkisfarbenes Wasser, Stone Town, Meeresabenteuer und romantische Inselerlebnisse.',
    sectionTitle: 'Strand- & Inselerlebnisse',
    explore: 'Erlebnis entdecken',
    trips: [
      {
        title: 'Zanzibar Strandurlaub',
        image: '/images/zanzibar-beach.jpg',
        href: '/zanzibar/beach-holiday',
        description:
          'Entspannen Sie an weißen Sandstränden, schwimmen Sie im türkisfarbenen Wasser und genießen Sie eine ruhige tropische Insel-Auszeit.',
      },
      {
        title: 'Stone Town & Gewürztour',
        image: '/images/stone-town.jpg',
        href: '/zanzibar/stone-town-spice-tour',
        description:
          'Entdecken Sie das historische Stone Town und erleben Sie die Düfte, Traditionen und Aromen der berühmten Gewürzfarmen von Zanzibar.',
      },
      {
        title: 'Delfin-Tour',
        image: '/images/dolphin-tour.jpg',
        href: '/zanzibar/dolphin-tour',
        description:
          'Erleben Sie ein unvergessliches Meeresabenteuer mit der Möglichkeit, Delfine zu beobachten und die wunderschönen Gewässer rund um Zanzibar zu erkunden.',
      },
      {
        title: 'Mnemba Schnorcheln',
        image: '/images/mnemba-snorkeling.jpg',
        href: '/zanzibar/mnemba-snorkeling',
        description:
          'Erkunden Sie kristallklares Wasser, farbenfrohe Korallenriffe und tropische Meeresbewohner rund um Mnemba Island.',
      },
      {
        title: 'Gewürzfarm-Tour',
        image: '/images/spice-farm.jpg',
        href: '/zanzibar/spice-farm-tour',
        description:
          'Spazieren Sie durch eine traditionelle Gewürzfarm und entdecken Sie die Pflanzen, Aromen und das kulturelle Erbe, für das Zanzibar bekannt ist.',
      },
      {
        title: 'Flitterwochen-Paket',
        image: '/images/zanzibar-honeymoon.jpg',
        href: '/zanzibar/honeymoon-package',
        description:
          'Genießen Sie eine romantische Auszeit auf Zanzibar mit wunderschönen Stränden, privaten Erlebnissen und unvergesslichen Momenten für Paare.',
      },
    ],
    ctaLabel: 'Planen Sie Ihren Zanzibar-Urlaub',
    ctaTitle: 'Bereit, Zanzibar zu erleben?',
    ctaText:
      'Teilen Sie uns Ihre bevorzugten Reisedaten, die Anzahl der Reisenden und die gewünschten Erlebnisse mit. Unser Team hilft Ihnen bei der Planung eines individuellen Zanzibar-Urlaubs.',
    quote: 'Angebot anfragen',
    whatsapp: 'Über WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Vacances à Zanzibar',
    heroSubtitle:
      'Plages de sable blanc, eaux turquoise, Stone Town, aventures en mer et escapades romantiques sur l’île.',
    sectionTitle: 'Expériences de plage et de l’île',
    explore: 'Découvrir l’expérience',
    trips: [
      {
        title: 'Vacances balnéaires à Zanzibar',
        image: '/images/zanzibar-beach.jpg',
        href: '/zanzibar/beach-holiday',
        description:
          'Détendez-vous sur des plages de sable blanc, nagez dans des eaux turquoise et profitez d’une escapade tropicale paisible.',
      },
      {
        title: 'Stone Town & visite des épices',
        image: '/images/stone-town.jpg',
        href: '/zanzibar/stone-town-spice-tour',
        description:
          'Découvrez la ville historique de Stone Town et explorez les parfums, traditions et saveurs des célèbres plantations d’épices de Zanzibar.',
      },
      {
        title: 'Excursion aux dauphins',
        image: '/images/dolphin-tour.jpg',
        href: '/zanzibar/dolphin-tour',
        description:
          'Profitez d’une aventure maritime mémorable avec la possibilité d’observer les dauphins et d’explorer les magnifiques eaux autour de Zanzibar.',
      },
      {
        title: 'Snorkeling à Mnemba',
        image: '/images/mnemba-snorkeling.jpg',
        href: '/zanzibar/mnemba-snorkeling',
        description:
          'Explorez des eaux cristallines, des récifs coralliens colorés et la vie marine tropicale autour de l’île de Mnemba.',
      },
      {
        title: 'Visite d’une plantation d’épices',
        image: '/images/spice-farm.jpg',
        href: '/zanzibar/spice-farm-tour',
        description:
          'Promenez-vous dans une plantation d’épices traditionnelle et découvrez les plantes, les saveurs et le patrimoine culturel qui rendent Zanzibar célèbre.',
      },
      {
        title: 'Forfait lune de miel',
        image: '/images/zanzibar-honeymoon.jpg',
        href: '/zanzibar/honeymoon-package',
        description:
          'Profitez d’une escapade romantique à Zanzibar avec de belles plages, des expériences privées et des moments inoubliables pour les couples.',
      },
    ],
    ctaLabel: 'Planifiez votre escapade à Zanzibar',
    ctaTitle: 'Prêt à découvrir Zanzibar ?',
    ctaText:
      'Indiquez-nous vos dates de voyage préférées, le nombre de voyageurs et les expériences que vous souhaitez vivre. Notre équipe vous aidera à organiser des vacances personnalisées à Zanzibar.',
    quote: 'Demander un devis',
    whatsapp: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Vacaciones en Zanzíbar',
    heroSubtitle:
      'Playas de arena blanca, aguas turquesas, Stone Town, aventuras en el océano y escapadas románticas por la isla.',
    sectionTitle: 'Experiencias de playa e isla',
    explore: 'Explorar experiencia',
    trips: [
      {
        title: 'Vacaciones de playa en Zanzíbar',
        image: '/images/zanzibar-beach.jpg',
        href: '/zanzibar/beach-holiday',
        description:
          'Relájate en playas de arena blanca, nada en aguas turquesas y disfruta de una tranquila escapada tropical.',
      },
      {
        title: 'Stone Town y tour de especias',
        image: '/images/stone-town.jpg',
        href: '/zanzibar/stone-town-spice-tour',
        description:
          'Descubre la histórica Stone Town y disfruta de los aromas, tradiciones y sabores de las famosas plantaciones de especias de Zanzíbar.',
      },
      {
        title: 'Tour de delfines',
        image: '/images/dolphin-tour.jpg',
        href: '/zanzibar/dolphin-tour',
        description:
          'Disfruta de una memorable aventura en el océano con la posibilidad de observar delfines y explorar las hermosas aguas de Zanzíbar.',
      },
      {
        title: 'Snorkeling en Mnemba',
        image: '/images/mnemba-snorkeling.jpg',
        href: '/zanzibar/mnemba-snorkeling',
        description:
          'Explora aguas cristalinas, coloridos arrecifes de coral y vida marina tropical alrededor de la isla de Mnemba.',
      },
      {
        title: 'Tour por una plantación de especias',
        image: '/images/spice-farm.jpg',
        href: '/zanzibar/spice-farm-tour',
        description:
          'Recorre una plantación tradicional de especias y descubre las plantas, sabores y patrimonio cultural que hacen famoso a Zanzíbar.',
      },
      {
        title: 'Paquete de luna de miel',
        image: '/images/zanzibar-honeymoon.jpg',
        href: '/zanzibar/honeymoon-package',
        description:
          'Disfruta de una escapada romántica a Zanzíbar con hermosas playas, experiencias privadas y momentos inolvidables para parejas.',
      },
    ],
    ctaLabel: 'Planifica tu escapada a Zanzíbar',
    ctaTitle: '¿Listo para vivir Zanzíbar?',
    ctaText:
      'Cuéntanos tus fechas de viaje preferidas, el número de viajeros y las experiencias que deseas disfrutar. Nuestro equipo te ayudará a planificar unas vacaciones personalizadas en Zanzíbar.',
    quote: 'Solicitar presupuesto',
    whatsapp: 'Chatear por WhatsApp',
  },
};

export default function ZanzibarPage() {
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
        image="/images/zanzibar-hero.jpg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">{t.sectionTitle}</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.trips.map((trip) => (
              <div
                key={trip.title}
                className="overflow-hidden rounded-3xl bg-white"
              >
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-forest">
                    {trip.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/70">
                    {trip.description}
                  </p>

                  <Link
                    href={trip.href}
                    className="mt-6 inline-block rounded-full bg-yellow-500 px-6 py-3 font-bold text-white transition hover:bg-yellow-600"
                  >
                    {t.explore}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-bold uppercase tracking-widest text-gold">
            {t.ctaLabel}
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            {t.ctaTitle}
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            {t.ctaText}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gold px-8 py-4 font-bold text-white"
            >
              {t.quote}
            </Link>

            <a
              href="https://wa.me/255759273339"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-8 py-4 font-bold text-white"
            >
              {t.whatsapp}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}