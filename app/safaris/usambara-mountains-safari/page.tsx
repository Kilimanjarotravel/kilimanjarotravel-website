'use client';

import PageHero from '@/components/PageHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Usambara Mountains & Cultural Safari',
    heroSubtitle:
      'Explore scenic trails, waterfalls, local villages, farms, viewpoints, and the rich culture of Tanzania’s Usambara Mountains.',

    label: 'Usambara Mountains',
    heading: 'Nature, Hiking and Local Culture',

    paragraph1:
      'The Usambara Mountains are known for cool weather, green forests, scenic hiking trails, waterfalls, farms, and welcoming local communities.',

    paragraph2:
      'This experience can include village walks, local food, forest hiking, cultural visits, viewpoints, photography, and overnight stays in the mountains.',

    highlightsTitle: 'Safari Highlights',

    highlights: [
      'Usambara mountain hiking',
      'Waterfalls and forest trails',
      'Village and cultural experiences',
      'Local farms and traditional food',
      'Scenic viewpoints and photography',
      'Day trip or overnight options',
    ],

    requestButton: 'Request an Usambara Safari',

    ctaTitle: 'Ready for Your Usambara Adventure?',

    ctaText:
      'Share your travel dates, preferred activities, number of days, group size, and accommodation preferences. Our team will create a personalized Usambara Mountains and cultural experience for you.',

    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Usambara-Berge & Kultursafari',
    heroSubtitle:
      'Entdecken Sie malerische Wanderwege, Wasserfälle, lokale Dörfer, Bauernhöfe, Aussichtspunkte und die reiche Kultur der Usambara-Berge in Tansania.',

    label: 'Usambara-Berge',
    heading: 'Natur, Wandern und lokale Kultur',

    paragraph1:
      'Die Usambara-Berge sind bekannt für ihr angenehmes Klima, grüne Wälder, malerische Wanderwege, Wasserfälle, Bauernhöfe und gastfreundliche lokale Gemeinschaften.',

    paragraph2:
      'Dieses Erlebnis kann Dorfwanderungen, lokale Küche, Wanderungen durch den Wald, kulturelle Besuche, Aussichtspunkte, Fotografie und Übernachtungen in den Bergen umfassen.',

    highlightsTitle: 'Safari-Highlights',

    highlights: [
      'Wandern in den Usambara-Bergen',
      'Wasserfälle und Waldwege',
      'Dorf- und Kulturerlebnisse',
      'Lokale Bauernhöfe und traditionelle Küche',
      'Aussichtspunkte und Fotografie',
      'Tagesausflug oder Übernachtung',
    ],

    requestButton: 'Usambara-Safari anfragen',

    ctaTitle: 'Bereit für Ihr Usambara-Abenteuer?',

    ctaText:
      'Teilen Sie uns Ihre Reisedaten, bevorzugten Aktivitäten, gewünschte Reisedauer, Gruppengröße und Unterkunftswünsche mit. Unser Team erstellt für Sie ein individuelles Erlebnis in den Usambara-Bergen mit kulturellen Aktivitäten.',

    whatsappButton: 'Auf WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Montagnes Usambara & Safari Culturel',
    heroSubtitle:
      'Explorez les sentiers panoramiques, les cascades, les villages locaux, les fermes, les points de vue et la riche culture des montagnes Usambara en Tanzanie.',

    label: 'Montagnes Usambara',
    heading: 'Nature, Randonnée et Culture Locale',

    paragraph1:
      'Les montagnes Usambara sont connues pour leur climat agréable, leurs forêts verdoyantes, leurs sentiers de randonnée panoramiques, leurs cascades, leurs fermes et leurs communautés locales accueillantes.',

    paragraph2:
      'Cette expérience peut inclure des promenades dans les villages, la découverte de la cuisine locale, des randonnées en forêt, des visites culturelles, des points de vue, de la photographie et des nuitées dans les montagnes.',

    highlightsTitle: 'Points forts du safari',

    highlights: [
      'Randonnée dans les montagnes Usambara',
      'Cascades et sentiers forestiers',
      'Expériences villageoises et culturelles',
      'Fermes locales et cuisine traditionnelle',
      'Points de vue panoramiques et photographie',
      'Excursion d’une journée ou séjour avec nuitée',
    ],

    requestButton: 'Demander un safari à Usambara',

    ctaTitle: 'Prêt pour votre aventure à Usambara ?',

    ctaText:
      'Indiquez-nous vos dates de voyage, vos activités préférées, le nombre de jours, la taille de votre groupe et vos préférences d’hébergement. Notre équipe créera pour vous une expérience personnalisée dans les montagnes Usambara et autour de leur culture.',

    whatsappButton: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Montañas Usambara y Safari Cultural',
    heroSubtitle:
      'Explore senderos panorámicos, cascadas, pueblos locales, granjas, miradores y la rica cultura de las montañas Usambara de Tanzania.',

    label: 'Montañas Usambara',
    heading: 'Naturaleza, Senderismo y Cultura Local',

    paragraph1:
      'Las montañas Usambara son conocidas por su clima fresco, bosques verdes, senderos panorámicos, cascadas, granjas y comunidades locales acogedoras.',

    paragraph2:
      'Esta experiencia puede incluir caminatas por pueblos, comida local, senderismo por el bosque, visitas culturales, miradores, fotografía y estancias nocturnas en las montañas.',

    highlightsTitle: 'Aspectos destacados del safari',

    highlights: [
      'Senderismo en las montañas Usambara',
      'Cascadas y senderos forestales',
      'Experiencias en pueblos y culturales',
      'Granjas locales y comida tradicional',
      'Miradores panorámicos y fotografía',
      'Excursión de un día o con alojamiento',
    ],

    requestButton: 'Solicitar un safari en Usambara',

    ctaTitle: '¿Listo para su aventura en Usambara?',

    ctaText:
      'Comparta sus fechas de viaje, actividades preferidas, número de días, tamaño del grupo y preferencias de alojamiento. Nuestro equipo creará una experiencia personalizada en las montañas Usambara y su cultura local.',

    whatsappButton: 'Chatear por WhatsApp',
  },
};

export default function UsambaraMountainsSafariPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/usambara-safari.jpg"
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-gold">
              {t.label}
            </p>

            <h2 className="mt-3 text-4xl font-bold text-forest">
              {t.heading}
            </h2>

            <p className="mt-6 leading-8 text-gray-700">
              {t.paragraph1}
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              {t.paragraph2}
            </p>
          </div>

          <div className="rounded-3xl bg-cream p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-forest">
              {t.highlightsTitle}
            </h3>

            <ul className="mt-6 space-y-4 text-gray-700">
              {t.highlights.map((highlight) => (
                <li key={highlight}>✓ {highlight}</li>
              ))}
            </ul>

            <Link
              href="/booking"
              className="mt-8 inline-block rounded-full bg-forest px-8 py-4 font-bold text-white"
            >
              {t.requestButton}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            {t.ctaTitle}
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80">
            {t.ctaText}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-gold px-8 py-4 font-bold text-white"
            >
              {t.requestButton}
            </Link>

            <a
              href="https://wa.me/255759273339"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-8 py-4 font-bold text-white"
            >
              {t.whatsappButton}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}