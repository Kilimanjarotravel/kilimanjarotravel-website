'use client';

import PageHero from '@/components/PageHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Mkomazi Rhino Safari',
    heroSubtitle:
      'Discover rare black rhinos, African wild dogs, elephants, birdlife, and the peaceful wilderness of Mkomazi National Park.',

    label: 'Mkomazi National Park',
    heading: 'A Quiet Wildlife Experience',

    paragraph1:
      'Mkomazi offers a peaceful safari away from the busiest northern parks. It is an excellent destination for travelers interested in conservation, wildlife photography, birdwatching, and beautiful mountain scenery.',

    paragraph2:
      'The safari can include a full-day game drive, a visit near the rhino sanctuary area, picnic lunch, professional guide, and a private safari vehicle.',

    highlightsTitle: 'Safari Highlights',

    highlights: [
      'Black rhino conservation experience',
      'African wild dogs',
      'Elephants, giraffes and zebras',
      'Birdwatching and photography',
      'Private safari vehicle and guide',
      'Day trip or overnight safari options',
    ],

    requestButton: 'Request a Rhino Safari',

    ctaTitle: 'Ready for Your Mkomazi Rhino Safari?',

    ctaText:
      'Tell us your travel dates, whether you prefer a day trip or overnight safari, your group size, and accommodation preferences. Our safari specialists will prepare a personalized Mkomazi Rhino Safari itinerary and quotation.',

    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Mkomazi Nashorn-Safari',
    heroSubtitle:
      'Entdecken Sie seltene Spitzmaulnashörner, Afrikanische Wildhunde, Elefanten, eine vielfältige Vogelwelt und die ruhige Wildnis des Mkomazi-Nationalparks.',

    label: 'Mkomazi-Nationalpark',
    heading: 'Ein ruhiges Wildniserlebnis',

    paragraph1:
      'Mkomazi bietet eine ruhige Safari abseits der meistbesuchten Parks im Norden Tansanias. Der Park ist ideal für Reisende, die sich für Naturschutz, Tierfotografie, Vogelbeobachtung und beeindruckende Berglandschaften interessieren.',

    paragraph2:
      'Die Safari kann eine ganztägige Pirschfahrt, einen Besuch in der Nähe des Nashorn-Schutzgebiets, ein Picknick-Mittagessen, einen professionellen Guide und ein privates Safari-Fahrzeug beinhalten.',

    highlightsTitle: 'Safari-Highlights',

    highlights: [
      'Erlebnis rund um den Schutz der Spitzmaulnashörner',
      'Afrikanische Wildhunde',
      'Elefanten, Giraffen und Zebras',
      'Vogelbeobachtung und Fotografie',
      'Privates Safari-Fahrzeug und Guide',
      'Tagesausflug oder Safari mit Übernachtung',
    ],

    requestButton: 'Nashorn-Safari anfragen',

    ctaTitle: 'Bereit für Ihre Mkomazi Nashorn-Safari?',

    ctaText:
      'Teilen Sie uns Ihre Reisedaten mit und ob Sie einen Tagesausflug oder eine Safari mit Übernachtung bevorzugen. Teilen Sie uns außerdem Ihre Gruppengröße und Unterkunftswünsche mit. Unsere Safari-Spezialisten erstellen eine individuelle Mkomazi-Nashorn-Safari inklusive Angebot.',

    whatsappButton: 'Auf WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Safari Rhinocéros à Mkomazi',
    heroSubtitle:
      'Découvrez les rares rhinocéros noirs, les lycaons, les éléphants, la richesse des oiseaux et la nature paisible du parc national de Mkomazi.',

    label: 'Parc national de Mkomazi',
    heading: 'Une expérience sauvage paisible',

    paragraph1:
      'Mkomazi offre une expérience de safari paisible, loin des parcs du nord les plus fréquentés. C’est une excellente destination pour les voyageurs intéressés par la conservation, la photographie animalière, l’observation des oiseaux et les magnifiques paysages montagneux.',

    paragraph2:
      'Le safari peut comprendre une journée complète de safari, une visite près de la zone du sanctuaire des rhinocéros, un déjeuner pique-nique, un guide professionnel et un véhicule de safari privé.',

    highlightsTitle: 'Points forts du safari',

    highlights: [
      'Expérience de conservation des rhinocéros noirs',
      'Lycaons africains',
      'Éléphants, girafes et zèbres',
      'Observation des oiseaux et photographie',
      'Véhicule de safari privé et guide',
      'Excursion d’une journée ou safari avec nuitée',
    ],

    requestButton: 'Demander un safari rhinocéros',

    ctaTitle: 'Prêt pour votre safari rhinocéros à Mkomazi ?',

    ctaText:
      'Indiquez-nous vos dates de voyage, si vous préférez une excursion d’une journée ou un safari avec nuitée, la taille de votre groupe et vos préférences d’hébergement. Nos spécialistes prépareront un itinéraire personnalisé et un devis pour votre safari rhinocéros à Mkomazi.',

    whatsappButton: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Safari de Rinocerontes en Mkomazi',
    heroSubtitle:
      'Descubra rinocerontes negros poco comunes, perros salvajes africanos, elefantes, una gran variedad de aves y la tranquila naturaleza del Parque Nacional de Mkomazi.',

    label: 'Parque Nacional de Mkomazi',
    heading: 'Una experiencia tranquila de vida silvestre',

    paragraph1:
      'Mkomazi ofrece un safari tranquilo lejos de los parques del norte más concurridos. Es un excelente destino para viajeros interesados en la conservación, la fotografía de fauna, la observación de aves y los hermosos paisajes montañosos.',

    paragraph2:
      'El safari puede incluir un día completo de safari, una visita cerca de la zona del santuario de rinocerontes, almuerzo tipo picnic, un guía profesional y un vehículo privado de safari.',

    highlightsTitle: 'Aspectos destacados del safari',

    highlights: [
      'Experiencia de conservación del rinoceronte negro',
      'Perros salvajes africanos',
      'Elefantes, jirafas y cebras',
      'Observación de aves y fotografía',
      'Vehículo privado de safari y guía',
      'Excursión de un día o safari con alojamiento',
    ],

    requestButton: 'Solicitar un safari de rinocerontes',

    ctaTitle: '¿Listo para su safari de rinocerontes en Mkomazi?',

    ctaText:
      'Comparta sus fechas de viaje, si prefiere una excursión de un día o un safari con alojamiento, el tamaño de su grupo y sus preferencias de alojamiento. Nuestros especialistas prepararán un itinerario personalizado y una cotización para su safari de rinocerontes en Mkomazi.',

    whatsappButton: 'Chatear por WhatsApp',
  },
};

export default function MkomaziRhinoSafariPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/rhino.jpg"
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