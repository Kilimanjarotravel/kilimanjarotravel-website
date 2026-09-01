'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'About Kilimanjaro Travel',
    heroSubtitle:
      'A trusted local Tanzanian travel brand based in Arusha.',
    storyTitle: 'Our Story',
    paragraph1:
      'Kilimanjaro Travel is operated by Kilimanjaro Travel Car Hire Limited, a licensed tour operator with over 10 years of experience. We specialize in Tanzania safaris, Mount Kilimanjaro trekking, Zanzibar holidays, cultural tours, day trips and car hire.',
    paragraph2:
      'Our promise is simple: See More. Feel More. We design every journey with care, safety, comfort and authentic local knowledge.',
  },

  de: {
    heroTitle: 'Über Kilimanjaro Travel',
    heroSubtitle:
      'Eine vertrauenswürdige tansanische Reisemarke mit Sitz in Arusha.',
    storyTitle: 'Unsere Geschichte',
    paragraph1:
      'Kilimanjaro Travel wird von Kilimanjaro Travel Car Hire Limited betrieben, einem lizenzierten Reiseveranstalter mit über 10 Jahren Erfahrung. Wir sind auf Tansania-Safaris, Kilimandscharo-Trekking, Sansibar-Urlaub, Kulturreisen, Tagesausflüge und Autovermietung spezialisiert.',
    paragraph2:
      'Unser Versprechen ist einfach: Mehr sehen. Mehr fühlen. Wir gestalten jede Reise mit Sorgfalt, Sicherheit, Komfort und authentischem lokalem Wissen.',
  },

  fr: {
    heroTitle: 'À propos de Kilimanjaro Travel',
    heroSubtitle:
      'Une marque touristique tanzanienne locale de confiance basée à Arusha.',
    storyTitle: 'Notre histoire',
    paragraph1:
      'Kilimanjaro Travel est exploité par Kilimanjaro Travel Car Hire Limited, un tour-opérateur agréé avec plus de 10 ans d’expérience. Nous sommes spécialisés dans les safaris en Tanzanie, le trekking du Kilimandjaro, les vacances à Zanzibar, les circuits culturels, les excursions à la journée et la location de voitures.',
    paragraph2:
      'Notre promesse est simple : Voir plus. Ressentir plus. Nous concevons chaque voyage avec soin, sécurité, confort et une connaissance locale authentique.',
  },

  es: {
    heroTitle: 'Sobre Kilimanjaro Travel',
    heroSubtitle:
      'Una marca turística local de confianza en Tanzania, con sede en Arusha.',
    storyTitle: 'Nuestra historia',
    paragraph1:
      'Kilimanjaro Travel es operado por Kilimanjaro Travel Car Hire Limited, un operador turístico con licencia y más de 10 años de experiencia. Estamos especializados en safaris por Tanzania, trekking del Kilimanjaro, vacaciones en Zanzíbar, tours culturales, excursiones de un día y alquiler de coches.',
    paragraph2:
      'Nuestra promesa es sencilla: Ver más. Sentir más. Diseñamos cada viaje con cuidado, seguridad, comodidad y auténtico conocimiento local.',
  },
};

export default function About() {
  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  return (
    <main>
      <Header />

      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/about.jpg"
      />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-6 text-lg leading-9">

          <h2 className="section-title">
            {t.storyTitle}
          </h2>

          <p className="mt-6">
            {t.paragraph1}
          </p>

          <p className="mt-5">
            {t.paragraph2}
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}