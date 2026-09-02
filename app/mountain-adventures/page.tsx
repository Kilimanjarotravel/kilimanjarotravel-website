'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Mountain Adventures',
    heroSubtitle:
      'Explore Mount Meru, the Usambara Mountains, and the dramatic landscapes of Lake Natron and Ol Doinyo Lengai.',
    sectionTitle: 'Mountain Adventure Packages',
    explore: 'Explore Adventure',

    packages: [
      {
        title: 'Mount Meru Trek',
        description:
          'Climb Tanzania’s second-highest mountain through forests, wildlife-rich trails, and dramatic summit landscapes.',
      },
      {
        title: 'Usambara Mountains',
        description:
          'Explore lush forests, scenic viewpoints, waterfalls, local villages, and authentic cultural experiences.',
      },
      {
        title: 'Lake Natron & Ol Doinyo Lengai',
        description:
          'Discover Lake Natron’s unique landscapes and experience an adventurous trek around the sacred Ol Doinyo Lengai.',
      },
    ],
  },

  de: {
    heroTitle: 'Bergabenteuer',
    heroSubtitle:
      'Entdecken Sie den Mount Meru, die Usambara-Berge und die beeindruckende Landschaft des Lake Natron und des Ol Doinyo Lengai.',
    sectionTitle: 'Bergabenteuer-Pakete',
    explore: 'Abenteuer entdecken',

    packages: [
      {
        title: 'Mount-Meru-Trekking',
        description:
          'Besteigen Sie Tansanias zweithöchsten Berg durch Wälder, wildtierreiche Wege und beeindruckende Landschaften rund um den Gipfel.',
      },
      {
        title: 'Usambara-Berge',
        description:
          'Erkunden Sie üppige Wälder, malerische Aussichtspunkte, Wasserfälle, lokale Dörfer und authentische kulturelle Erlebnisse.',
      },
      {
        title: 'Lake Natron & Ol Doinyo Lengai',
        description:
          'Entdecken Sie die einzigartige Landschaft des Lake Natron und erleben Sie ein abenteuerliches Trekking rund um den heiligen Ol Doinyo Lengai.',
      },
    ],
  },

  fr: {
    heroTitle: 'Aventures en Montagne',
    heroSubtitle:
      'Explorez le mont Meru, les montagnes Usambara et les paysages spectaculaires du lac Natron et d’Ol Doinyo Lengai.',
    sectionTitle: 'Forfaits Aventures en Montagne',
    explore: 'Découvrir l’aventure',

    packages: [
      {
        title: 'Trek du Mont Meru',
        description:
          'Gravissez la deuxième plus haute montagne de Tanzanie à travers des forêts, des sentiers riches en faune et des paysages spectaculaires au sommet.',
      },
      {
        title: 'Montagnes Usambara',
        description:
          'Explorez des forêts luxuriantes, des points de vue panoramiques, des cascades, des villages locaux et des expériences culturelles authentiques.',
      },
      {
        title: 'Lac Natron & Ol Doinyo Lengai',
        description:
          'Découvrez les paysages uniques du lac Natron et vivez un trek aventureux autour du sacré Ol Doinyo Lengai.',
      },
    ],
  },

  es: {
    heroTitle: 'Aventuras de Montaña',
    heroSubtitle:
      'Explore el Monte Meru, las montañas Usambara y los espectaculares paisajes del lago Natron y Ol Doinyo Lengai.',
    sectionTitle: 'Paquetes de Aventuras de Montaña',
    explore: 'Explorar aventura',

    packages: [
      {
        title: 'Trekking del Monte Meru',
        description:
          'Suba la segunda montaña más alta de Tanzania atravesando bosques, senderos ricos en fauna y espectaculares paisajes de cumbre.',
      },
      {
        title: 'Montañas Usambara',
        description:
          'Explore bosques verdes, miradores panorámicos, cascadas, pueblos locales y auténticas experiencias culturales.',
      },
      {
        title: 'Lago Natron y Ol Doinyo Lengai',
        description:
          'Descubra los paisajes únicos del lago Natron y disfrute de una aventura de trekking alrededor del sagrado Ol Doinyo Lengai.',
      },
    ],
  },
};

const packageData = [
  {
    image: '/images/meru-trek.jpg',
    href: '/mountain-adventures/mount-meru',
  },
  {
    image: '/images/usambara.jpg',
    href: '/mountain-adventures/usambara-mountains',
  },
  {
    image: '/images/andrew-legai.jpeg',
    href: '/mountain-adventures/lake-natron-ol-doinyo-lengai',
  },
];

export default function MountainAdventures() {
  const { language } = useLanguage();

  const t =
    translations[language as keyof typeof translations] ||
    translations.en;

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/mountain.jpg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">{t.sectionTitle}</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packageData.map((item, index) => {
              const adventure = t.packages[index];

              return (
                <div
                  className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                  key={item.href}
                >
                  <img
                    src={item.image}
                    alt={adventure.title}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-forest">
                      {adventure.title}
                    </h3>

                    <p className="mt-4 leading-7 text-black/70">
                      {adventure.description}
                    </p>

                    <Link
                      href={item.href}
                      className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
                    >
                      {t.explore}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}