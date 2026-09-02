'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Lake Natron & Ol Doinyo Lengai Adventure',
    heroSubtitle:
      'Discover the dramatic landscapes of Lake Natron, flamingo habitats, Maasai culture, and the active volcanic slopes of Ol Doinyo Lengai.',

    label: 'Volcano, Lake and Cultural Adventure',
    heading: 'Lake Natron & Ol Doinyo Lengai Adventure',

    paragraph1:
      'Explore the striking landscapes of Lake Natron, famous for its flamingos, dramatic escarpments, and remote natural beauty. Continue toward Ol Doinyo Lengai, the sacred active volcano of the Maasai people.',

    paragraph2:
      'This adventure combines hiking, wildlife, culture, and volcanic scenery. It is ideal for travelers looking for a remote and unforgettable experience away from the busiest safari routes.',

    highlightsTitle: 'Trek Highlights',

    highlights: [
      'Visit the dramatic shores of Lake Natron',
      'See flamingos and unique birdlife',
      'Explore Maasai culture and local villages',
      'Hike near Ol Doinyo Lengai volcano',
      'Enjoy remote landscapes and scenic views',
    ],

    bookButton: 'Book This Trek',

    itineraryLabel: 'Adventure Itinerary',
    itineraryTitle: '4-Day Lake Natron & Ol Doinyo Lengai Adventure',

    itinerary: [
      {
        title: 'Day 1: Arusha to Lake Natron',
        text: 'Travel from Arusha through dramatic Rift Valley landscapes toward Lake Natron. Arrive, settle in, and enjoy views of the surrounding escarpments and volcanic scenery.',
      },
      {
        title: 'Day 2: Lake Natron, Waterfalls and Maasai Experience',
        text: 'Explore the shores of Lake Natron, observe flamingos and birdlife, visit nearby waterfalls, and learn about Maasai culture before preparing for the nighttime climb.',
      },
      {
        title: 'Day 3: Night Climb to Ol Doinyo Lengai',
        text: 'Begin the climb late at night with an experienced local mountain guide. Reach the summit area around sunrise, enjoy dramatic views across Lake Natron and the Rift Valley, then descend carefully and return to your accommodation for rest.',
      },
      {
        title: 'Day 4: Return to Arusha',
        text: 'After breakfast, begin the scenic drive back to Arusha, completing your Lake Natron and Ol Doinyo Lengai adventure.',
      },
    ],

    includedTitle: 'What Is Included',
    included: [
      'Private transport from Arusha',
      'Professional driver-guide',
      'Local guide at Lake Natron',
      'Entrance and conservation fees',
      'Accommodation during the tour',
      'Meals during the adventure',
      'Drinking water',
    ],

    excludedTitle: 'What Is Excluded',
    excluded: [
      'Flights',
      'Travel insurance',
      'Personal hiking equipment',
      'Tips and gratuities',
      'Personal expenses',
      'Alcoholic drinks',
    ],

    bringLabel: 'What To Bring',
    bringTitle: 'Prepare for Your Adventure',

    whatToBring: [
      'Comfortable hiking shoes',
      'Light jacket or warm clothing',
      'Sun hat and sunscreen',
      'Camera or binoculars',
      'Reusable water bottle',
      'Personal medication',
    ],

    ctaTitle: 'Ready for Your Lake Natron Adventure?',
    ctaText:
      'Contact Kilimanjaro Travel today and let us plan your unforgettable Lake Natron & Ol Doinyo Lengai adventure.',

    quoteButton: 'Request a Quote',
    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Lake Natron & Ol Doinyo Lengai Abenteuer',
    heroSubtitle:
      'Entdecken Sie die beeindruckende Landschaft des Lake Natron, Flamingo-Lebensräume, die Maasai-Kultur und die aktiven Vulkanhänge des Ol Doinyo Lengai.',

    label: 'Vulkan-, See- und Kulturerlebnis',
    heading: 'Lake Natron & Ol Doinyo Lengai Abenteuer',

    paragraph1:
      'Erkunden Sie die beeindruckende Landschaft des Lake Natron, der für seine Flamingos, dramatischen Steilhänge und seine abgelegene natürliche Schönheit bekannt ist. Weiter geht es zum Ol Doinyo Lengai, dem heiligen aktiven Vulkan der Maasai.',

    paragraph2:
      'Dieses Abenteuer verbindet Wandern, Tierwelt, Kultur und Vulkanlandschaften. Es ist ideal für Reisende, die ein abgelegenes und unvergessliches Erlebnis abseits der meistbesuchten Safarirouten suchen.',

    highlightsTitle: 'Höhepunkte der Tour',

    highlights: [
      'Die beeindruckenden Ufer des Lake Natron besuchen',
      'Flamingos und besondere Vogelarten beobachten',
      'Maasai-Kultur und lokale Dörfer erleben',
      'In der Nähe des Vulkans Ol Doinyo Lengai wandern',
      'Abgelegene Landschaften und Panoramablicke genießen',
    ],

    bookButton: 'Diese Tour buchen',

    itineraryLabel: 'Reiseverlauf',
    itineraryTitle: '4-Tage Lake Natron & Ol Doinyo Lengai Abenteuer',

    itinerary: [
      {
        title: 'Tag 1: Arusha zum Lake Natron',
        text: 'Fahren Sie von Arusha durch die beeindruckende Landschaft des Rift Valley zum Lake Natron. Ankunft, Einchecken und genießen Sie die Aussicht auf die umliegenden Steilhänge und Vulkanlandschaften.',
      },
      {
        title: 'Tag 2: Lake Natron, Wasserfälle und Maasai-Erlebnis',
        text: 'Erkunden Sie die Ufer des Lake Natron, beobachten Sie Flamingos und Vögel, besuchen Sie nahegelegene Wasserfälle und erfahren Sie mehr über die Maasai-Kultur, bevor Sie sich auf den nächtlichen Aufstieg vorbereiten.',
      },
      {
        title: 'Tag 3: Nachtaufstieg zum Ol Doinyo Lengai',
        text: 'Beginnen Sie den Aufstieg spät in der Nacht mit einem erfahrenen lokalen Bergführer. Erreichen Sie den Gipfelbereich bei Sonnenaufgang, genießen Sie die beeindruckende Aussicht über den Lake Natron und das Rift Valley und steigen Sie anschließend vorsichtig ab, bevor Sie zur Unterkunft zurückkehren.',
      },
      {
        title: 'Tag 4: Rückkehr nach Arusha',
        text: 'Nach dem Frühstück beginnen Sie die malerische Fahrt zurück nach Arusha und beenden Ihr Lake-Natron- und Ol-Doinyo-Lengai-Abenteuer.',
      },
    ],

    includedTitle: 'Im Preis enthalten',
    included: [
      'Privater Transport ab Arusha',
      'Professioneller Fahrer-Guide',
      'Lokaler Guide am Lake Natron',
      'Eintritts- und Naturschutzgebühren',
      'Unterkunft während der Tour',
      'Mahlzeiten während des Abenteuers',
      'Trinkwasser',
    ],

    excludedTitle: 'Nicht enthalten',
    excluded: [
      'Flüge',
      'Reiseversicherung',
      'Persönliche Wanderausrüstung',
      'Trinkgelder',
      'Persönliche Ausgaben',
      'Alkoholische Getränke',
    ],

    bringLabel: 'Was Sie mitbringen sollten',
    bringTitle: 'Bereiten Sie sich auf Ihr Abenteuer vor',

    whatToBring: [
      'Bequeme Wanderschuhe',
      'Leichte Jacke oder warme Kleidung',
      'Sonnenhut und Sonnencreme',
      'Kamera oder Fernglas',
      'Wiederverwendbare Wasserflasche',
      'Persönliche Medikamente',
    ],

    ctaTitle: 'Bereit für Ihr Lake-Natron-Abenteuer?',
    ctaText:
      'Kontaktieren Sie Kilimanjaro Travel noch heute und lassen Sie uns Ihr unvergessliches Lake-Natron- und Ol-Doinyo-Lengai-Abenteuer planen.',

    quoteButton: 'Angebot anfragen',
    whatsappButton: 'Auf WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Aventure au Lac Natron & Ol Doinyo Lengai',
    heroSubtitle:
      'Découvrez les paysages spectaculaires du lac Natron, les habitats des flamants roses, la culture masaï et les pentes volcaniques actives d’Ol Doinyo Lengai.',

    label: 'Aventure Volcan, Lac et Culture',
    heading: 'Aventure au Lac Natron & Ol Doinyo Lengai',

    paragraph1:
      'Explorez les paysages remarquables du lac Natron, célèbre pour ses flamants roses, ses escarpements spectaculaires et sa beauté naturelle préservée. Continuez vers Ol Doinyo Lengai, le volcan actif sacré du peuple masaï.',

    paragraph2:
      'Cette aventure combine randonnée, faune, culture et paysages volcaniques. Elle est idéale pour les voyageurs à la recherche d’une expérience isolée et inoubliable, loin des itinéraires de safari les plus fréquentés.',

    highlightsTitle: 'Points forts du trek',

    highlights: [
      'Visiter les rives spectaculaires du lac Natron',
      'Observer les flamants roses et les oiseaux',
      'Découvrir la culture masaï et les villages locaux',
      'Randonnée près du volcan Ol Doinyo Lengai',
      'Profiter de paysages isolés et de vues panoramiques',
    ],

    bookButton: 'Réserver ce trek',

    itineraryLabel: 'Itinéraire de l’aventure',
    itineraryTitle: 'Aventure de 4 jours au Lac Natron & Ol Doinyo Lengai',

    itinerary: [
      {
        title: 'Jour 1 : Arusha au lac Natron',
        text: 'Voyagez depuis Arusha à travers les paysages spectaculaires de la vallée du Rift jusqu’au lac Natron. Arrivée, installation et découverte des vues sur les escarpements et les paysages volcaniques environnants.',
      },
      {
        title: 'Jour 2 : Lac Natron, cascades et expérience masaï',
        text: 'Explorez les rives du lac Natron, observez les flamants roses et les oiseaux, visitez les cascades voisines et découvrez la culture masaï avant de vous préparer pour l’ascension nocturne.',
      },
      {
        title: 'Jour 3 : Ascension nocturne d’Ol Doinyo Lengai',
        text: 'Commencez l’ascension tard dans la nuit avec un guide de montagne local expérimenté. Atteignez la zone du sommet au lever du soleil, profitez des vues spectaculaires sur le lac Natron et la vallée du Rift, puis redescendez prudemment avant de retourner à votre hébergement pour vous reposer.',
      },
      {
        title: 'Jour 4 : Retour à Arusha',
        text: 'Après le petit-déjeuner, commencez le trajet panoramique de retour vers Arusha, terminant ainsi votre aventure au lac Natron et à Ol Doinyo Lengai.',
      },
    ],

    includedTitle: 'Ce qui est inclus',
    included: [
      'Transport privé depuis Arusha',
      'Chauffeur-guide professionnel',
      'Guide local au lac Natron',
      'Frais d’entrée et de conservation',
      'Hébergement pendant le circuit',
      'Repas pendant l’aventure',
      'Eau potable',
    ],

    excludedTitle: 'Ce qui n’est pas inclus',
    excluded: [
      'Vols',
      'Assurance voyage',
      'Équipement personnel de randonnée',
      'Pourboires',
      'Dépenses personnelles',
      'Boissons alcoolisées',
    ],

    bringLabel: 'À emporter',
    bringTitle: 'Préparez votre aventure',

    whatToBring: [
      'Chaussures de randonnée confortables',
      'Veste légère ou vêtements chauds',
      'Chapeau et crème solaire',
      'Appareil photo ou jumelles',
      'Gourde réutilisable',
      'Médicaments personnels',
    ],

    ctaTitle: 'Prêt pour votre aventure au lac Natron ?',
    ctaText:
      'Contactez Kilimanjaro Travel dès aujourd’hui et laissez-nous organiser votre aventure inoubliable au lac Natron et à Ol Doinyo Lengai.',

    quoteButton: 'Demander un devis',
    whatsappButton: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Aventura en el Lago Natron y Ol Doinyo Lengai',
    heroSubtitle:
      'Descubra los espectaculares paisajes del lago Natron, los hábitats de flamencos, la cultura masái y las laderas volcánicas activas de Ol Doinyo Lengai.',

    label: 'Aventura de Volcán, Lago y Cultura',
    heading: 'Aventura en el Lago Natron y Ol Doinyo Lengai',

    paragraph1:
      'Explore los impresionantes paisajes del lago Natron, famoso por sus flamencos, sus espectaculares escarpes y su belleza natural remota. Continúe hacia Ol Doinyo Lengai, el volcán activo sagrado del pueblo masái.',

    paragraph2:
      'Esta aventura combina senderismo, fauna, cultura y paisajes volcánicos. Es ideal para viajeros que buscan una experiencia remota e inolvidable lejos de las rutas de safari más concurridas.',

    highlightsTitle: 'Aspectos destacados del trekking',

    highlights: [
      'Visitar las espectaculares orillas del lago Natron',
      'Observar flamencos y aves únicas',
      'Explorar la cultura masái y los pueblos locales',
      'Caminar cerca del volcán Ol Doinyo Lengai',
      'Disfrutar de paisajes remotos y vistas panorámicas',
    ],

    bookButton: 'Reservar este trekking',

    itineraryLabel: 'Itinerario de la aventura',
    itineraryTitle: 'Aventura de 4 días en el Lago Natron y Ol Doinyo Lengai',

    itinerary: [
      {
        title: 'Día 1: Arusha al Lago Natron',
        text: 'Viaje desde Arusha a través de los impresionantes paisajes del Valle del Rift hacia el lago Natron. Llegue, acomódese y disfrute de las vistas de los escarpes y paisajes volcánicos circundantes.',
      },
      {
        title: 'Día 2: Lago Natron, cascadas y experiencia masái',
        text: 'Explore las orillas del lago Natron, observe flamencos y aves, visite cascadas cercanas y conozca la cultura masái antes de prepararse para el ascenso nocturno.',
      },
      {
        title: 'Día 3: Ascenso nocturno a Ol Doinyo Lengai',
        text: 'Comience el ascenso a altas horas de la noche con un experimentado guía local de montaña. Llegue a la zona de la cumbre alrededor del amanecer, disfrute de las espectaculares vistas del lago Natron y del Valle del Rift, y después descienda con cuidado para regresar a su alojamiento y descansar.',
      },
      {
        title: 'Día 4: Regreso a Arusha',
        text: 'Después del desayuno, comience el recorrido panorámico de regreso a Arusha, completando su aventura por el lago Natron y Ol Doinyo Lengai.',
      },
    ],

    includedTitle: 'Qué está incluido',
    included: [
      'Transporte privado desde Arusha',
      'Conductor-guía profesional',
      'Guía local en el lago Natron',
      'Tasas de entrada y conservación',
      'Alojamiento durante el tour',
      'Comidas durante la aventura',
      'Agua potable',
    ],

    excludedTitle: 'Qué no está incluido',
    excluded: [
      'Vuelos',
      'Seguro de viaje',
      'Equipo personal de senderismo',
      'Propinas',
      'Gastos personales',
      'Bebidas alcohólicas',
    ],

    bringLabel: 'Qué llevar',
    bringTitle: 'Prepárese para su aventura',

    whatToBring: [
      'Calzado cómodo para caminar',
      'Chaqueta ligera o ropa abrigada',
      'Sombrero y protector solar',
      'Cámara o prismáticos',
      'Botella de agua reutilizable',
      'Medicamentos personales',
    ],

    ctaTitle: '¿Listo para su aventura en el Lago Natron?',
    ctaText:
      'Contacte hoy con Kilimanjaro Travel y permítanos planificar su inolvidable aventura en el lago Natron y Ol Doinyo Lengai.',

    quoteButton: 'Solicitar una cotización',
    whatsappButton: 'Chatear por WhatsApp',
  },
};

export default function LakeNatronOlDoinyoLengaiPage() {
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
        image="/images/oldoinyo-lengai.jpg"
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