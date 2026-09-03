'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    title: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'When is the best time to visit Tanzania?',
        answer:
          'Tanzania is great year-round, but June to October is excellent for safaris, while January to March is good for calving season in Serengeti.',
      },
      {
        question: 'Do you arrange Kilimanjaro treks?',
        answer:
          'Yes. We organize Kilimanjaro climbs with professional mountain guides, porters, meals, camping equipment and safety support.',
      },
      {
        question: 'Can you customize a safari package?',
        answer:
          'Yes. We can customize safaris based on your budget, travel dates, group size and preferred destinations.',
      },
      {
        question: 'Do you offer Zanzibar holidays?',
        answer:
          'Yes. We arrange Zanzibar beach holidays, Stone Town tours, spice tours, airport transfers and honeymoon packages.',
      },
    ],
  },

  de: {
    title: 'Häufig gestellte Fragen',
    faqs: [
      {
        question: 'Wann ist die beste Reisezeit für Tansania?',
        answer:
          'Tansania ist das ganze Jahr über ein großartiges Reiseziel. Juni bis Oktober eignet sich besonders gut für Safaris, während Januar bis März eine gute Zeit für die Kalbungszeit in der Serengeti ist.',
      },
      {
        question: 'Organisieren Sie Kilimandscharo-Trekkingtouren?',
        answer:
          'Ja. Wir organisieren Besteigungen des Kilimandscharo mit professionellen Bergführern, Trägern, Mahlzeiten, Campingausrüstung und Sicherheitsbetreuung.',
      },
      {
        question: 'Können Sie ein Safari-Paket individuell gestalten?',
        answer:
          'Ja. Wir können Safaris entsprechend Ihrem Budget, Ihren Reisedaten, der Gruppengröße und Ihren bevorzugten Reisezielen individuell gestalten.',
      },
      {
        question: 'Bieten Sie Zanzibar-Urlaube an?',
        answer:
          'Ja. Wir organisieren Strandurlaube auf Zanzibar, Stone-Town-Touren, Gewürztouren, Flughafentransfers und Honeymoon-Pakete.',
      },
    ],
  },

  fr: {
    title: 'Questions fréquemment posées',
    faqs: [
      {
        question: 'Quelle est la meilleure période pour visiter la Tanzanie ?',
        answer:
          'La Tanzanie est une excellente destination toute l’année. De juin à octobre, les conditions sont particulièrement favorables aux safaris, tandis que janvier à mars est une bonne période pour la saison des naissances dans le Serengeti.',
      },
      {
        question: 'Organisez-vous des treks au Kilimandjaro ?',
        answer:
          'Oui. Nous organisons des ascensions du Kilimandjaro avec des guides de montagne professionnels, des porteurs, les repas, le matériel de camping et un accompagnement pour la sécurité.',
      },
      {
        question: 'Pouvez-vous personnaliser un safari ?',
        answer:
          'Oui. Nous pouvons personnaliser les safaris selon votre budget, vos dates de voyage, la taille de votre groupe et vos destinations préférées.',
      },
      {
        question: 'Proposez-vous des vacances à Zanzibar ?',
        answer:
          'Oui. Nous organisons des vacances balnéaires à Zanzibar, des visites de Stone Town, des excursions dans les plantations d’épices, des transferts aéroport et des forfaits lune de miel.',
      },
    ],
  },

  es: {
    title: 'Preguntas frecuentes',
    faqs: [
      {
        question: '¿Cuál es la mejor época para visitar Tanzania?',
        answer:
          'Tanzania es un destino excelente durante todo el año. De junio a octubre es una época ideal para los safaris, mientras que de enero a marzo es una buena temporada para observar los nacimientos en el Serengeti.',
      },
      {
        question: '¿Organizan trekkings al Kilimanjaro?',
        answer:
          'Sí. Organizamos ascensos al Kilimanjaro con guías de montaña profesionales, porteadores, comidas, equipo de camping y apoyo de seguridad.',
      },
      {
        question: '¿Pueden personalizar un paquete de safari?',
        answer:
          'Sí. Podemos personalizar los safaris según su presupuesto, fechas de viaje, tamaño del grupo y destinos preferidos.',
      },
      {
        question: '¿Ofrecen vacaciones en Zanzíbar?',
        answer:
          'Sí. Organizamos vacaciones de playa en Zanzíbar, excursiones por Stone Town, tours de especias, traslados al aeropuerto y paquetes para lunas de miel.',
      },
    ],
  },
};

export default function FAQPage() {
  const { language } = useLanguage();

  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <>
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-center text-5xl font-bold text-forest">
          {t.title}
        </h1>

        <div className="mt-12 space-y-6">
          {t.faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl bg-white p-7 shadow-xl"
            >
              <h2 className="text-xl font-bold text-forest">
                {faq.question}
              </h2>

              <p className="mt-3 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}