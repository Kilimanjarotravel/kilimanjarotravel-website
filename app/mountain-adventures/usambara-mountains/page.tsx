'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Usambara Mountains Experience',
    heroSubtitle:
      "Discover lush forests, scenic viewpoints, local villages, waterfalls, and the peaceful beauty of Tanzania's Usambara Mountains.",

    label: 'Mountain and Cultural Experience',
    heading: 'Explore the Usambara Mountains',

    paragraph1:
      'Explore the lush forests, scenic viewpoints, waterfalls, and rich cultural heritage of the Usambara Mountains. This tour is perfect for nature lovers and hikers.',

    paragraph2:
      "Enjoy guided hikes, village visits, bird watching, and breathtaking landscapes while experiencing one of Tanzania's most beautiful mountain regions.",

    highlightsTitle: 'Trek Highlights',

    highlights: [
      'Explore the beautiful Usambara Mountains',
      'Visit traditional villages',
      'Hike through lush forests and waterfalls',
      'Enjoy breathtaking panoramic viewpoints',
    ],

    bookButton: 'Book This Trek',

    itineraryLabel: 'Experience Itinerary',
    itineraryTitle: 'Explore the Usambara Mountains',

    itinerary: [
      {
        title: 'Day 1: Arrival and Village Walk',
        text: 'Arrive in the Usambara Mountains, meet your local guide, and enjoy a gentle village walk while learning about local life, farms, and traditions.',
      },
      {
        title: 'Day 2: Forest Hike and Waterfalls',
        text: 'Hike through lush forest trails, visit waterfalls, enjoy birdwatching, and discover the rich plant life of the Usambara Mountains.',
      },
      {
        title: 'Day 3: Scenic Viewpoints and Cultural Experience',
        text: 'Visit panoramic viewpoints, local markets, and cultural sites before returning to your accommodation or continuing your journey.',
      },
    ],

    includedTitle: 'What Is Included',
    included: [
      'Professional local guide',
      'Village and cultural visits',
      'Entrance fees',
      'Drinking water',
      'Local transfers during the tour',
    ],

    excludedTitle: 'What Is Excluded',
    excluded: [
      'Flights',
      'Travel insurance',
      'Accommodation unless requested',
      'Tips and gratuities',
      'Personal expenses',
      'Alcoholic drinks',
    ],

    bringLabel: 'What To Bring',
    bringTitle: 'Prepare for Your Usambara Experience',

    whatToBring: [
      'Comfortable hiking shoes',
      'Light jacket or raincoat',
      'Sun hat and sunscreen',
      'Camera or binoculars',
      'Reusable water bottle',
      'Personal medication',
    ],

    ctaTitle: 'Ready for Your Usambara Adventure?',
    ctaText:
      'Contact Kilimanjaro Travel today and let us create a memorable Usambara Mountains adventure tailored to your interests.',

    quoteButton: 'Request a Quote',
    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Usambara-Berge Erlebnis',
    heroSubtitle:
      'Entdecken Sie üppige Wälder, malerische Aussichtspunkte, lokale Dörfer, Wasserfälle und die ruhige Schönheit der Usambara-Berge in Tansania.',

    label: 'Berg- und Kulturerlebnis',
    heading: 'Entdecken Sie die Usambara-Berge',

    paragraph1:
      'Erkunden Sie die üppigen Wälder, malerischen Aussichtspunkte, Wasserfälle und das reiche kulturelle Erbe der Usambara-Berge. Diese Tour ist ideal für Naturliebhaber und Wanderfreunde.',

    paragraph2:
      'Genießen Sie geführte Wanderungen, Dorfbesuche, Vogelbeobachtungen und atemberaubende Landschaften und erleben Sie eine der schönsten Bergregionen Tansanias.',

    highlightsTitle: 'Höhepunkte der Tour',

    highlights: [
      'Die wunderschönen Usambara-Berge erkunden',
      'Traditionelle Dörfer besuchen',
      'Durch üppige Wälder und zu Wasserfällen wandern',
      'Atemberaubende Panoramablicke genießen',
    ],

    bookButton: 'Diese Tour buchen',

    itineraryLabel: 'Reiseverlauf',
    itineraryTitle: 'Entdecken Sie die Usambara-Berge',

    itinerary: [
      {
        title: 'Tag 1: Ankunft und Dorfrundgang',
        text: 'Ankunft in den Usambara-Bergen, Treffen mit Ihrem lokalen Guide und ein gemütlicher Dorfrundgang, bei dem Sie mehr über das lokale Leben, Bauernhöfe und Traditionen erfahren.',
      },
      {
        title: 'Tag 2: Waldwanderung und Wasserfälle',
        text: 'Wandern Sie durch üppige Waldwege, besuchen Sie Wasserfälle, beobachten Sie Vögel und entdecken Sie die vielfältige Pflanzenwelt der Usambara-Berge.',
      },
      {
        title: 'Tag 3: Aussichtspunkte und Kulturerlebnis',
        text: 'Besuchen Sie Panoramaaussichtspunkte, lokale Märkte und kulturelle Sehenswürdigkeiten, bevor Sie zu Ihrer Unterkunft zurückkehren oder Ihre Reise fortsetzen.',
      },
    ],

    includedTitle: 'Im Preis enthalten',
    included: [
      'Professioneller lokaler Guide',
      'Dorf- und Kulturbesuche',
      'Eintrittsgebühren',
      'Trinkwasser',
      'Lokale Transfers während der Tour',
    ],

    excludedTitle: 'Nicht enthalten',
    excluded: [
      'Flüge',
      'Reiseversicherung',
      'Unterkunft, sofern nicht angefragt',
      'Trinkgelder',
      'Persönliche Ausgaben',
      'Alkoholische Getränke',
    ],

    bringLabel: 'Was Sie mitbringen sollten',
    bringTitle: 'Bereiten Sie sich auf Ihr Usambara-Erlebnis vor',

    whatToBring: [
      'Bequeme Wanderschuhe',
      'Leichte Jacke oder Regenjacke',
      'Sonnenhut und Sonnencreme',
      'Kamera oder Fernglas',
      'Wiederverwendbare Wasserflasche',
      'Persönliche Medikamente',
    ],

    ctaTitle: 'Bereit für Ihr Usambara-Abenteuer?',
    ctaText:
      'Kontaktieren Sie Kilimanjaro Travel noch heute und lassen Sie uns ein unvergessliches Erlebnis in den Usambara-Bergen ganz nach Ihren Interessen gestalten.',

    quoteButton: 'Angebot anfragen',
    whatsappButton: 'Auf WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Expérience dans les Montagnes Usambara',
    heroSubtitle:
      'Découvrez les forêts luxuriantes, les points de vue panoramiques, les villages locaux, les cascades et la beauté paisible des montagnes Usambara en Tanzanie.',

    label: 'Expérience Montagne et Culture',
    heading: 'Explorez les Montagnes Usambara',

    paragraph1:
      'Explorez les forêts luxuriantes, les points de vue panoramiques, les cascades et le riche patrimoine culturel des montagnes Usambara. Cette excursion est idéale pour les amoureux de la nature et les randonneurs.',

    paragraph2:
      'Profitez de randonnées guidées, de visites de villages, d’observation des oiseaux et de paysages spectaculaires tout en découvrant l’une des plus belles régions montagneuses de Tanzanie.',

    highlightsTitle: 'Points forts du trek',

    highlights: [
      'Explorer les magnifiques montagnes Usambara',
      'Visiter des villages traditionnels',
      'Randonnée à travers les forêts luxuriantes et les cascades',
      'Profiter de magnifiques panoramas',
    ],

    bookButton: 'Réserver ce trek',

    itineraryLabel: 'Itinéraire de l’expérience',
    itineraryTitle: 'Explorez les Montagnes Usambara',

    itinerary: [
      {
        title: 'Jour 1 : Arrivée et promenade dans le village',
        text: 'Arrivez dans les montagnes Usambara, rencontrez votre guide local et profitez d’une promenade tranquille dans le village tout en découvrant la vie locale, les fermes et les traditions.',
      },
      {
        title: 'Jour 2 : Randonnée en forêt et cascades',
        text: 'Randonnez à travers les sentiers forestiers luxuriants, visitez les cascades, observez les oiseaux et découvrez la richesse de la flore des montagnes Usambara.',
      },
      {
        title: 'Jour 3 : Points de vue et expérience culturelle',
        text: 'Visitez des points de vue panoramiques, des marchés locaux et des sites culturels avant de retourner à votre hébergement ou de poursuivre votre voyage.',
      },
    ],

    includedTitle: 'Ce qui est inclus',
    included: [
      'Guide local professionnel',
      'Visites de villages et expériences culturelles',
      'Frais d’entrée',
      'Eau potable',
      'Transferts locaux pendant la visite',
    ],

    excludedTitle: 'Ce qui n’est pas inclus',
    excluded: [
      'Vols',
      'Assurance voyage',
      'Hébergement sauf demande spécifique',
      'Pourboires',
      'Dépenses personnelles',
      'Boissons alcoolisées',
    ],

    bringLabel: 'À emporter',
    bringTitle: 'Préparez votre expérience Usambara',

    whatToBring: [
      'Chaussures de randonnée confortables',
      'Veste légère ou imperméable',
      'Chapeau et crème solaire',
      'Appareil photo ou jumelles',
      'Gourde réutilisable',
      'Médicaments personnels',
    ],

    ctaTitle: 'Prêt pour votre aventure à Usambara ?',
    ctaText:
      'Contactez Kilimanjaro Travel dès aujourd’hui et laissez-nous créer une aventure mémorable dans les montagnes Usambara adaptée à vos centres d’intérêt.',

    quoteButton: 'Demander un devis',
    whatsappButton: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Experiencia en las Montañas Usambara',
    heroSubtitle:
      'Descubra bosques verdes, miradores panorámicos, pueblos locales, cascadas y la tranquila belleza de las montañas Usambara de Tanzania.',

    label: 'Experiencia de Montaña y Cultura',
    heading: 'Explore las Montañas Usambara',

    paragraph1:
      'Explore los bosques verdes, los miradores panorámicos, las cascadas y el rico patrimonio cultural de las montañas Usambara. Este tour es perfecto para los amantes de la naturaleza y el senderismo.',

    paragraph2:
      'Disfrute de caminatas guiadas, visitas a pueblos, observación de aves y paisajes impresionantes mientras descubre una de las regiones montañosas más hermosas de Tanzania.',

    highlightsTitle: 'Aspectos destacados del trekking',

    highlights: [
      'Explorar las hermosas montañas Usambara',
      'Visitar pueblos tradicionales',
      'Caminar por bosques verdes y cascadas',
      'Disfrutar de impresionantes vistas panorámicas',
    ],

    bookButton: 'Reservar este trekking',

    itineraryLabel: 'Itinerario de la experiencia',
    itineraryTitle: 'Explore las Montañas Usambara',

    itinerary: [
      {
        title: 'Día 1: Llegada y paseo por el pueblo',
        text: 'Llegue a las montañas Usambara, conozca a su guía local y disfrute de un tranquilo paseo por el pueblo mientras aprende sobre la vida local, las granjas y las tradiciones.',
      },
      {
        title: 'Día 2: Caminata por el bosque y cascadas',
        text: 'Camine por senderos de bosque verde, visite cascadas, observe aves y descubra la rica flora de las montañas Usambara.',
      },
      {
        title: 'Día 3: Miradores y experiencia cultural',
        text: 'Visite miradores panorámicos, mercados locales y lugares culturales antes de regresar a su alojamiento o continuar su viaje.',
      },
    ],

    includedTitle: 'Qué está incluido',
    included: [
      'Guía local profesional',
      'Visitas a pueblos y experiencias culturales',
      'Tasas de entrada',
      'Agua potable',
      'Traslados locales durante el tour',
    ],

    excludedTitle: 'Qué no está incluido',
    excluded: [
      'Vuelos',
      'Seguro de viaje',
      'Alojamiento salvo que se solicite',
      'Propinas',
      'Gastos personales',
      'Bebidas alcohólicas',
    ],

    bringLabel: 'Qué llevar',
    bringTitle: 'Prepárese para su experiencia en Usambara',

    whatToBring: [
      'Calzado cómodo para caminar',
      'Chaqueta ligera o impermeable',
      'Sombrero y protector solar',
      'Cámara o prismáticos',
      'Botella de agua reutilizable',
      'Medicamentos personales',
    ],

    ctaTitle: '¿Listo para su aventura en Usambara?',
    ctaText:
      'Contacte hoy con Kilimanjaro Travel y permítanos crear una aventura memorable en las montañas Usambara adaptada a sus intereses.',

    quoteButton: 'Solicitar una cotización',
    whatsappButton: 'Chatear por WhatsApp',
  },
};

export default function UsambaraMountainsPage() {
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
        image="/images/usambara-safari.jpg"
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
                {t.bookButton}
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