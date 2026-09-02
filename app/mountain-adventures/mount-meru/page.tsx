'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Mount Meru Trek',
    heroSubtitle:
      "Climb Tanzania's second-highest mountain through beautiful forests, wildlife-rich landscapes, and dramatic summit views.",

    label: 'Trekking and Wildlife Adventure',
    heading: 'Mount Meru Trekking Adventure',

    paragraph1:
      "Climb Mount Meru, Tanzania's second-highest mountain, on a scenic trek through forests, open moorlands, and dramatic volcanic landscapes. The route offers excellent views of Mount Kilimanjaro and opportunities to see wildlife along the lower slopes.",

    paragraph2:
      'Mount Meru is ideal for trekkers looking for a quieter mountain experience or preparing for a Kilimanjaro climb. The trek combines natural beauty, adventure, and rewarding summit views.',

    highlightsTitle: 'Trek Highlights',

    highlights: [
      "Trek Tanzania's second-highest mountain",
      'Enjoy views of Mount Kilimanjaro',
      'Walk through forests and volcanic landscapes',
      'See wildlife on the lower slopes',
      'Excellent preparation for Kilimanjaro',
    ],

    bookTrek: 'Book This Trek',

    itineraryLabel: 'Trek Itinerary',
    itineraryTitle: '4-Day Mount Meru Trek',

    itinerary: [
      {
        title: 'Day 1: Momella Gate to Miriakamba Hut',
        text: 'Begin the trek through montane forest, open grassland, and wildlife-rich lower slopes before reaching Miriakamba Hut.',
      },
      {
        title: 'Day 2: Miriakamba Hut to Saddle Hut',
        text: 'Climb through beautiful forest and heather zones toward Saddle Hut, with excellent views of the crater and surrounding landscapes.',
      },
      {
        title: 'Day 3: Summit Attempt and Descent',
        text: 'Start before sunrise for Socialist Peak, enjoy dramatic summit views, then descend toward Miriakamba Hut.',
      },
      {
        title: 'Day 4: Return to Momella Gate',
        text: 'Descend through the forest to Momella Gate, where your driver will transfer you back to Arusha.',
      },
    ],

    includedTitle: 'What Is Included',
    included: [
      'Park entrance fees',
      'Mountain huts',
      'Professional mountain guide',
      'Armed ranger',
      'Porters and cook',
      'Meals during the trek',
      'Drinking water',
      'Transfers from Arusha',
    ],

    excludedTitle: 'What Is Excluded',
    excluded: [
      'Flights',
      'Travel insurance',
      'Personal trekking equipment',
      'Tips and gratuities',
      'Personal expenses',
      'Alcoholic drinks',
    ],

    bringLabel: 'What To Bring',
    bringTitle: 'Prepare for Your Mount Meru Trek',

    whatToBring: [
      'Warm trekking clothes',
      'Waterproof jacket',
      'Comfortable hiking boots',
      'Daypack',
      'Sun hat and sunscreen',
      'Personal medication',
    ],

    ctaTitle: 'Ready for Your Mount Meru Adventure?',
    ctaText:
      'Contact Kilimanjaro Travel today and receive a tailor-made quotation for your Mount Meru trekking adventure.',

    quoteButton: 'Request a Quote',
    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Mount-Meru-Trekking',
    heroSubtitle:
      'Besteigen Sie Tansanias zweithöchsten Berg durch wunderschöne Wälder, wildtierreiche Landschaften und beeindruckende Gipfelpanoramen.',

    label: 'Trekking- und Wildnisabenteuer',
    heading: 'Mount-Meru-Trekking-Abenteuer',

    paragraph1:
      'Besteigen Sie den Mount Meru, Tansanias zweithöchsten Berg, auf einer malerischen Trekkingroute durch Wälder, offene Berglandschaften und beeindruckende Vulkanlandschaften. Die Route bietet hervorragende Ausblicke auf den Kilimandscharo und Möglichkeiten, Wildtiere an den unteren Hängen zu beobachten.',

    paragraph2:
      'Der Mount Meru ist ideal für Trekkingreisende, die ein ruhigeres Bergerlebnis suchen oder sich auf eine Kilimandscharo-Besteigung vorbereiten möchten. Die Tour verbindet Natur, Abenteuer und beeindruckende Gipfelblicke.',

    highlightsTitle: 'Höhepunkte der Tour',

    highlights: [
      'Trekking auf Tansanias zweithöchstem Berg',
      'Ausblicke auf den Kilimandscharo',
      'Wanderungen durch Wälder und Vulkanlandschaften',
      'Wildtierbeobachtungen an den unteren Hängen',
      'Hervorragende Vorbereitung auf den Kilimandscharo',
    ],

    bookTrek: 'Diese Trekkingtour buchen',

    itineraryLabel: 'Trekking-Reiseroute',
    itineraryTitle: '4-Tage Mount-Meru-Trekking',

    itinerary: [
      {
        title: 'Tag 1: Momella Gate zur Miriakamba Hütte',
        text: 'Beginnen Sie die Trekkingtour durch Bergwald, offene Graslandschaften und wildtierreiche Hänge, bevor Sie die Miriakamba Hütte erreichen.',
      },
      {
        title: 'Tag 2: Miriakamba Hütte zur Saddle Hütte',
        text: 'Steigen Sie durch wunderschöne Wälder und Heidegebiete zur Saddle Hütte auf und genießen Sie herrliche Ausblicke auf den Krater und die umliegende Landschaft.',
      },
      {
        title: 'Tag 3: Gipfelversuch und Abstieg',
        text: 'Starten Sie vor Sonnenaufgang zum Socialist Peak, genießen Sie die beeindruckende Aussicht vom Gipfel und steigen Sie anschließend zur Miriakamba Hütte ab.',
      },
      {
        title: 'Tag 4: Rückkehr zum Momella Gate',
        text: 'Steigen Sie durch den Wald zum Momella Gate ab, wo Ihr Fahrer Sie zurück nach Arusha bringt.',
      },
    ],

    includedTitle: 'Im Preis enthalten',
    included: [
      'Parkeintrittsgebühren',
      'Übernachtungen in Berghütten',
      'Professioneller Bergführer',
      'Bewaffneter Ranger',
      'Träger und Koch',
      'Mahlzeiten während der Trekkingtour',
      'Trinkwasser',
      'Transfers ab Arusha',
    ],

    excludedTitle: 'Nicht enthalten',
    excluded: [
      'Flüge',
      'Reiseversicherung',
      'Persönliche Trekkingausrüstung',
      'Trinkgelder',
      'Persönliche Ausgaben',
      'Alkoholische Getränke',
    ],

    bringLabel: 'Was Sie mitbringen sollten',
    bringTitle: 'Bereiten Sie sich auf Ihr Mount-Meru-Trekking vor',

    whatToBring: [
      'Warme Trekkingkleidung',
      'Wasserdichte Jacke',
      'Bequeme Wanderschuhe',
      'Tagesrucksack',
      'Sonnenhut und Sonnencreme',
      'Persönliche Medikamente',
    ],

    ctaTitle: 'Bereit für Ihr Mount-Meru-Abenteuer?',
    ctaText:
      'Kontaktieren Sie Kilimanjaro Travel noch heute und erhalten Sie ein maßgeschneidertes Angebot für Ihr Mount-Meru-Trekking-Abenteuer.',

    quoteButton: 'Angebot anfragen',
    whatsappButton: 'Auf WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Trek du Mont Meru',
    heroSubtitle:
      'Gravissez la deuxième plus haute montagne de Tanzanie à travers de magnifiques forêts, des paysages riches en faune et des panoramas spectaculaires au sommet.',

    label: 'Aventure de Trekking et de Faune',
    heading: 'Aventure de Trekking au Mont Meru',

    paragraph1:
      'Gravissez le mont Meru, la deuxième plus haute montagne de Tanzanie, lors d’un trek panoramique à travers les forêts, les landes ouvertes et les paysages volcaniques spectaculaires. L’itinéraire offre de magnifiques vues sur le Kilimandjaro et des possibilités d’observer la faune sur les pentes inférieures.',

    paragraph2:
      'Le mont Meru est idéal pour les randonneurs à la recherche d’une expérience plus calme en montagne ou souhaitant se préparer à l’ascension du Kilimandjaro. Le trek combine beauté naturelle, aventure et vues impressionnantes au sommet.',

    highlightsTitle: 'Points forts du trek',

    highlights: [
      'Trek sur la deuxième plus haute montagne de Tanzanie',
      'Profitez des vues sur le Kilimandjaro',
      'Marchez à travers les forêts et les paysages volcaniques',
      'Observez la faune sur les pentes inférieures',
      'Excellente préparation pour le Kilimandjaro',
    ],

    bookTrek: 'Réserver ce trek',

    itineraryLabel: 'Itinéraire du trek',
    itineraryTitle: 'Trek de 4 jours au Mont Meru',

    itinerary: [
      {
        title: 'Jour 1 : Momella Gate à Miriakamba Hut',
        text: 'Commencez le trek à travers la forêt de montagne, les prairies ouvertes et les pentes riches en faune avant d’atteindre Miriakamba Hut.',
      },
      {
        title: 'Jour 2 : Miriakamba Hut à Saddle Hut',
        text: 'Montez à travers de magnifiques forêts et zones de bruyères vers Saddle Hut, avec de superbes vues sur le cratère et les paysages environnants.',
      },
      {
        title: 'Jour 3 : Tentative de sommet et descente',
        text: 'Partez avant le lever du soleil vers Socialist Peak, profitez des vues spectaculaires depuis le sommet, puis descendez vers Miriakamba Hut.',
      },
      {
        title: 'Jour 4 : Retour à Momella Gate',
        text: 'Descendez à travers la forêt jusqu’à Momella Gate, où votre chauffeur vous transférera vers Arusha.',
      },
    ],

    includedTitle: 'Ce qui est inclus',
    included: [
      'Frais d’entrée au parc',
      'Hébergement dans les refuges de montagne',
      'Guide de montagne professionnel',
      'Ranger armé',
      'Porteurs et cuisinier',
      'Repas pendant le trek',
      'Eau potable',
      'Transferts depuis Arusha',
    ],

    excludedTitle: 'Ce qui n’est pas inclus',
    excluded: [
      'Vols',
      'Assurance voyage',
      'Équipement personnel de trekking',
      'Pourboires',
      'Dépenses personnelles',
      'Boissons alcoolisées',
    ],

    bringLabel: 'À emporter',
    bringTitle: 'Préparez votre trek au Mont Meru',

    whatToBring: [
      'Vêtements chauds de trekking',
      'Veste imperméable',
      'Chaussures de randonnée confortables',
      'Sac à dos léger',
      'Chapeau et crème solaire',
      'Médicaments personnels',
    ],

    ctaTitle: 'Prêt pour votre aventure au Mont Meru ?',
    ctaText:
      'Contactez Kilimanjaro Travel dès aujourd’hui et recevez un devis personnalisé pour votre aventure de trekking au Mont Meru.',

    quoteButton: 'Demander un devis',
    whatsappButton: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Trekking del Monte Meru',
    heroSubtitle:
      'Suba la segunda montaña más alta de Tanzania a través de hermosos bosques, paisajes ricos en fauna y espectaculares vistas desde la cima.',

    label: 'Aventura de Trekking y Vida Silvestre',
    heading: 'Aventura de Trekking en el Monte Meru',

    paragraph1:
      'Suba el Monte Meru, la segunda montaña más alta de Tanzania, en una ruta panorámica a través de bosques, zonas abiertas de montaña y espectaculares paisajes volcánicos. La ruta ofrece excelentes vistas del Kilimanjaro y oportunidades para observar fauna en las laderas inferiores.',

    paragraph2:
      'El Monte Meru es ideal para viajeros que buscan una experiencia de montaña más tranquila o que desean prepararse para una ascensión al Kilimanjaro. El trekking combina belleza natural, aventura y magníficas vistas desde la cima.',

    highlightsTitle: 'Aspectos destacados del trekking',

    highlights: [
      'Trekking en la segunda montaña más alta de Tanzania',
      'Disfrute de las vistas del Kilimanjaro',
      'Camine por bosques y paisajes volcánicos',
      'Observe fauna en las laderas inferiores',
      'Excelente preparación para el Kilimanjaro',
    ],

    bookTrek: 'Reservar este trekking',

    itineraryLabel: 'Itinerario del trekking',
    itineraryTitle: 'Trekking de 4 días por el Monte Meru',

    itinerary: [
      {
        title: 'Día 1: Momella Gate a Miriakamba Hut',
        text: 'Comience el trekking atravesando bosques de montaña, praderas abiertas y laderas con abundante fauna antes de llegar a Miriakamba Hut.',
      },
      {
        title: 'Día 2: Miriakamba Hut a Saddle Hut',
        text: 'Suba a través de hermosos bosques y zonas de brezos hacia Saddle Hut, disfrutando de excelentes vistas del cráter y los paisajes circundantes.',
      },
      {
        title: 'Día 3: Intento de cumbre y descenso',
        text: 'Comience antes del amanecer hacia Socialist Peak, disfrute de las espectaculares vistas desde la cima y después descienda hacia Miriakamba Hut.',
      },
      {
        title: 'Día 4: Regreso a Momella Gate',
        text: 'Descienda a través del bosque hasta Momella Gate, donde su conductor le trasladará de regreso a Arusha.',
      },
    ],

    includedTitle: 'Qué está incluido',
    included: [
      'Tasas de entrada al parque',
      'Alojamiento en refugios de montaña',
      'Guía profesional de montaña',
      'Guardabosques armado',
      'Porteadores y cocinero',
      'Comidas durante el trekking',
      'Agua potable',
      'Traslados desde Arusha',
    ],

    excludedTitle: 'Qué no está incluido',
    excluded: [
      'Vuelos',
      'Seguro de viaje',
      'Equipo personal de trekking',
      'Propinas',
      'Gastos personales',
      'Bebidas alcohólicas',
    ],

    bringLabel: 'Qué llevar',
    bringTitle: 'Prepárese para su trekking del Monte Meru',

    whatToBring: [
      'Ropa abrigada para trekking',
      'Chaqueta impermeable',
      'Botas de senderismo cómodas',
      'Mochila de día',
      'Sombrero y protector solar',
      'Medicamentos personales',
    ],

    ctaTitle: '¿Listo para su aventura en el Monte Meru?',
    ctaText:
      'Contacte hoy con Kilimanjaro Travel y reciba una cotización personalizada para su aventura de trekking en el Monte Meru.',

    quoteButton: 'Solicitar una cotización',
    whatsappButton: 'Chatear por WhatsApp',
  },
};

export default function MountMeruPage() {
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
        image="/images/mount-meru.jpg"
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                {t.label}
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {t.heading}
              </h2>

              <p className="mt-6 leading-8 text-black/70">
                {t.paragraph1}
              </p>

              <p className="mt-4 leading-8 text-black/70">
                {t.paragraph2}
              </p>
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
                {t.bookTrek}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-bold uppercase tracking-widest text-gold">
            {t.itineraryLabel}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-forest">
            {t.itineraryTitle}
          </h2>

          <div className="mt-10 space-y-6">
            {t.itinerary.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-forest">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-black/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-cream p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-forest">
              {t.includedTitle}
            </h2>

            <ul className="mt-6 space-y-3">
              {t.included.map((item) => (
                <li key={item}>✅ {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-cream p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-forest">
              {t.excludedTitle}
            </h2>

            <ul className="mt-6 space-y-3">
              {t.excluded.map((item) => (
                <li key={item}>❌ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-bold uppercase tracking-widest text-gold">
            {t.bringLabel}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-forest">
            {t.bringTitle}
          </h2>

          <ul className="mt-8 space-y-4 text-lg">
            {t.whatToBring.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            {t.ctaTitle}
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            {t.ctaText}
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
              {t.whatsappButton}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}