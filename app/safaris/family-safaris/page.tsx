'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Family Safaris',
    heroSubtitle:
      'Enjoy a comfortable Tanzania safari designed for families, with flexible pacing, child-friendly accommodation, and unforgettable wildlife experiences.',

    label: 'Comfortable Family Safari Experience',

    mainTitle: 'Family Tanzania Safari Experience',

    paragraph1:
      'Enjoy a private Tanzania safari designed around the needs of your family, with flexible schedules, comfortable accommodation, and child-friendly wildlife experiences.',

    paragraph2:
      'Our family safaris are suitable for parents, children, and multigenerational groups. We can customize the pace, destinations, activities, accommodation, and travel dates to suit your family.',

    highlightsTitle: 'Family Safari Highlights',

    highlights: [
      'Flexible safari schedules for families',
      'Comfortable and child-friendly accommodation',
      'Professional guides experienced with families',
      'Fun and educational wildlife experiences',
      'Ideal for parents, children, and multigenerational groups',
    ],

    requestButton: 'Request a Family Safari',

    readyTitle: 'Ready for Your Family Safari?',

    readyText:
      'Share your travel dates, number and ages of children, preferred parks, accommodation style, and budget. Our safari specialists will create a comfortable and personalized family safari itinerary for you.',

    quoteButton: 'Request Your Family Safari',

    whatsapp: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Familiensafaris',

    heroSubtitle:
      'Genießen Sie eine komfortable Tansania-Safari, die speziell für Familien entwickelt wurde – mit flexiblem Tempo, kinderfreundlichen Unterkünften und unvergesslichen Wildtiererlebnissen.',

    label: 'Komfortables Safari-Erlebnis für Familien',

    mainTitle: 'Familien-Safari in Tansania',

    paragraph1:
      'Genießen Sie eine private Tansania-Safari, die auf die Bedürfnisse Ihrer Familie zugeschnitten ist – mit flexiblen Zeitplänen, komfortablen Unterkünften und kinderfreundlichen Wildtiererlebnissen.',

    paragraph2:
      'Unsere Familiensafaris eignen sich für Eltern, Kinder und mehrgenerationale Gruppen. Wir können Tempo, Reiseziele, Aktivitäten, Unterkünfte und Reisedaten individuell an Ihre Familie anpassen.',

    highlightsTitle: 'Höhepunkte der Familiensafari',

    highlights: [
      'Flexible Safari-Zeitpläne für Familien',
      'Komfortable und kinderfreundliche Unterkünfte',
      'Professionelle und familienerfahrene Guides',
      'Unterhaltsame und lehrreiche Wildtiererlebnisse',
      'Ideal für Eltern, Kinder und mehrgenerationale Gruppen',
    ],

    requestButton: 'Familiensafari anfragen',

    readyTitle: 'Bereit für Ihre Familiensafari?',

    readyText:
      'Teilen Sie uns Ihre Reisedaten, die Anzahl und das Alter der Kinder, bevorzugte Nationalparks, Ihren bevorzugten Unterkunftsstil und Ihr Budget mit. Unsere Safarispezialisten erstellen eine komfortable und persönliche Familiensafari für Sie.',

    quoteButton: 'Ihre Familiensafari anfragen',

    whatsapp: 'Über WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Safaris en famille',

    heroSubtitle:
      'Profitez d’un safari confortable en Tanzanie conçu pour les familles, avec un rythme flexible, des hébergements adaptés aux enfants et des expériences animalières inoubliables.',

    label: 'Expérience safari confortable en famille',

    mainTitle: 'Safari en famille en Tanzanie',

    paragraph1:
      'Profitez d’un safari privé en Tanzanie conçu autour des besoins de votre famille, avec des horaires flexibles, des hébergements confortables et des expériences animalières adaptées aux enfants.',

    paragraph2:
      'Nos safaris en famille conviennent aux parents, aux enfants et aux groupes multigénérationnels. Nous pouvons personnaliser le rythme, les destinations, les activités, les hébergements et les dates de voyage selon les besoins de votre famille.',

    highlightsTitle: 'Points forts du safari en famille',

    highlights: [
      'Programmes de safari flexibles pour les familles',
      'Hébergements confortables et adaptés aux enfants',
      'Guides professionnels expérimentés avec les familles',
      'Expériences animalières amusantes et éducatives',
      'Idéal pour les parents, les enfants et les groupes multigénérationnels',
    ],

    requestButton: 'Demander un safari en famille',

    readyTitle: 'Prêt pour votre safari en famille ?',

    readyText:
      'Indiquez-nous vos dates de voyage, le nombre et l’âge des enfants, les parcs souhaités, votre style d’hébergement et votre budget. Nos spécialistes créeront un itinéraire de safari en famille confortable et personnalisé.',

    quoteButton: 'Demander votre safari en famille',

    whatsapp: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Safaris en familia',

    heroSubtitle:
      'Disfruta de un safari cómodo en Tanzania diseñado para familias, con un ritmo flexible, alojamiento adaptado a los niños y experiencias inolvidables de vida silvestre.',

    label: 'Experiencia de safari familiar y confortable',

    mainTitle: 'Safari familiar en Tanzania',

    paragraph1:
      'Disfruta de un safari privado en Tanzania diseñado según las necesidades de tu familia, con horarios flexibles, alojamiento confortable y experiencias de fauna adaptadas a los niños.',

    paragraph2:
      'Nuestros safaris familiares son ideales para padres, niños y grupos multigeneracionales. Podemos personalizar el ritmo, los destinos, las actividades, el alojamiento y las fechas de viaje según las necesidades de tu familia.',

    highlightsTitle: 'Aspectos destacados del safari familiar',

    highlights: [
      'Horarios de safari flexibles para familias',
      'Alojamiento cómodo y adaptado a los niños',
      'Guías profesionales con experiencia trabajando con familias',
      'Experiencias de vida silvestre divertidas y educativas',
      'Ideal para padres, niños y grupos multigeneracionales',
    ],

    requestButton: 'Solicitar un safari familiar',

    readyTitle: '¿Listo para tu safari familiar?',

    readyText:
      'Compártenos tus fechas de viaje, el número y las edades de los niños, los parques preferidos, el estilo de alojamiento y tu presupuesto. Nuestros especialistas crearán un itinerario de safari familiar cómodo y personalizado para ti.',

    quoteButton: 'Solicitar tu safari familiar',

    whatsapp: 'Chatear por WhatsApp',
  },
};

export default function FamilySafarisPage() {
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
        image="/images/family-two.jpg"
      />

      {/* INTRO */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">

            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                {t.label}
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {t.mainTitle}
              </h2>

              <p className="mt-6 leading-8 text-black/70">
                {t.paragraph1}
              </p>

              <p className="mt-4 leading-8 text-black/70">
                {t.paragraph2}
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="rounded-3xl bg-cream p-8 shadow-lg">

              <h3 className="text-2xl font-bold">
                {t.highlightsTitle}
              </h3>

              <ul className="mt-6 space-y-4">
                {t.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3"
                  >
                    <span className="font-bold text-gold">
                      ✓
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/booking"
                className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white"
              >
                {t.requestButton}
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            {t.readyTitle}
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80">
            {t.readyText}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/booking"
              className="rounded-full bg-gold px-8 py-4 font-bold text-white"
            >
              {t.quoteButton}
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