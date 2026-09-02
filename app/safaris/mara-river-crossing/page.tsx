'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Mara River Crossing Safari',
    heroSubtitle:
      'Experience one of Africa’s most dramatic wildlife spectacles in the northern Serengeti.',

    label: 'Seasonal Safari Experience',
    mainTitle: 'Great Migration Mara River Crossing',

    paragraph1:
      'Travel to the northern Serengeti for a chance to witness large herds of wildebeest and zebras crossing the Mara River. This safari combines exciting wildlife viewing, beautiful scenery and comfortable accommodation.',

    paragraph2:
      'River crossings are natural events and cannot be guaranteed, but our experienced guides will position you in the best areas according to current wildlife movements.',

    highlightsTitle: 'Safari Highlights',

    highlights: [
      'Witness wildebeest and zebras crossing the Mara River',
      'Explore the northern Serengeti',
      'Enjoy private game drives with a professional safari guide',
      'Stay in carefully selected lodges or tented camps',
    ],

    book: 'Book This Safari',

    itineraryLabel: 'Safari Itinerary',
    itineraryTitle: '6-Day Mara River Crossing Safari',

    itinerary: [
      {
        title: 'Day 1: Arrival in Arusha',
        text: 'Meet our representative at the airport and transfer to your hotel in Arusha for relaxation and safari briefing.',
      },
      {
        title: 'Day 2: Arusha to Central Serengeti',
        text: 'Travel to the Serengeti and enjoy an afternoon game drive while searching for lions, elephants, giraffes, and other wildlife.',
      },
      {
        title: 'Day 3: Central Serengeti to Northern Serengeti',
        text: 'Continue toward the northern Serengeti, following the movement of the Great Migration herds toward the Mara River.',
      },
      {
        title: 'Day 4: Mara River Crossing Experience',
        text: 'Spend the day near the Mara River with your guide, searching for crossing points and observing wildebeest, zebras, crocodiles, and predators.',
      },
      {
        title: 'Day 5: Northern Serengeti Game Drives',
        text: 'Enjoy another full day of wildlife viewing in the northern Serengeti, allowing more opportunities to witness migration activity.',
      },
      {
        title: 'Day 6: Return to Arusha',
        text: 'Fly or drive back to Arusha, depending on your selected itinerary, and transfer to your hotel or the airport.',
      },
    ],

    includedTitle: 'What Is Included',

    included: [
      'Airport pickup and drop-off',
      'Private safari vehicle',
      'Professional English-speaking guide',
      'Safari accommodation',
      'Park and conservation fees',
      'Meals during the safari',
      'Drinking water',
    ],

    excludedTitle: 'What Is Excluded',

    excluded: [
      'International flights',
      'Domestic flights unless specified',
      'Travel insurance',
      'Visa fees',
      'Tips and gratuities',
      'Personal expenses',
      'Alcoholic drinks',
    ],

    bringLabel: 'What To Bring',
    bringTitle: 'Prepare for Your Migration Safari',

    whatToBring: [
      'Comfortable safari clothing',
      'Sun hat and sunscreen',
      'Camera and binoculars',
      'Light jacket',
      'Travel documents',
      'Personal medication',
    ],

    readyTitle: 'Ready for Your Mara River Crossing Safari?',

    readyText:
      'Share your travel dates, preferred accommodation, group size, and budget. Our safari specialists will create a personalized migration itinerary based on current wildlife movements.',

    quote: 'Request a Migration Safari',
    whatsapp: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Mara-Flussüberquerungs-Safari',

    heroSubtitle:
      'Erleben Sie eines der spektakulärsten Wildtierereignisse Afrikas im nördlichen Serengeti.',

    label: 'Saisonales Safari-Erlebnis',

    mainTitle: 'Große Migration – Mara-Flussüberquerung',

    paragraph1:
      'Reisen Sie in die nördliche Serengeti und erleben Sie mit etwas Glück große Herden von Gnus und Zebras bei der Überquerung des Mara-Flusses. Diese Safari verbindet aufregende Tierbeobachtungen, wunderschöne Landschaften und komfortable Unterkünfte.',

    paragraph2:
      'Flussüberquerungen sind natürliche Ereignisse und können nicht garantiert werden. Unsere erfahrenen Guides bringen Sie jedoch entsprechend den aktuellen Bewegungen der Wildtiere in die bestmöglichen Gebiete.',

    highlightsTitle: 'Höhepunkte der Safari',

    highlights: [
      'Gnus und Zebras bei der Überquerung des Mara-Flusses erleben',
      'Die nördliche Serengeti erkunden',
      'Private Pirschfahrten mit professionellem Safari-Guide',
      'Übernachtung in sorgfältig ausgewählten Lodges oder Zeltcamps',
    ],

    book: 'Diese Safari buchen',

    itineraryLabel: 'Safari-Reiseverlauf',

    itineraryTitle: '6-Tage-Mara-Flussüberquerungs-Safari',

    itinerary: [
      {
        title: 'Tag 1: Ankunft in Arusha',
        text: 'Treffen Sie unseren Vertreter am Flughafen und fahren Sie zu Ihrem Hotel in Arusha. Dort können Sie sich entspannen und erhalten eine Safari-Einweisung.',
      },
      {
        title: 'Tag 2: Arusha – Zentrale Serengeti',
        text: 'Fahren Sie in die Serengeti und unternehmen Sie am Nachmittag eine Pirschfahrt auf der Suche nach Löwen, Elefanten, Giraffen und anderen Wildtieren.',
      },
      {
        title: 'Tag 3: Zentrale Serengeti – Nördliche Serengeti',
        text: 'Weiterfahrt in Richtung nördliche Serengeti, wobei Sie der Bewegung der Herden der Großen Migration in Richtung Mara-Fluss folgen.',
      },
      {
        title: 'Tag 4: Erlebnis der Mara-Flussüberquerung',
        text: 'Verbringen Sie den Tag in der Nähe des Mara-Flusses. Gemeinsam mit Ihrem Guide suchen Sie nach geeigneten Überquerungsstellen und beobachten Gnus, Zebras, Krokodile und Raubtiere.',
      },
      {
        title: 'Tag 5: Pirschfahrten in der nördlichen Serengeti',
        text: 'Genießen Sie einen weiteren ganzen Tag zur Tierbeobachtung in der nördlichen Serengeti und erhöhen Sie Ihre Chancen, Aktivitäten der Migration zu erleben.',
      },
      {
        title: 'Tag 6: Rückkehr nach Arusha',
        text: 'Fliegen oder fahren Sie je nach gewähltem Reiseverlauf zurück nach Arusha und werden Sie zu Ihrem Hotel oder zum Flughafen gebracht.',
      },
    ],

    includedTitle: 'Im Preis enthalten',

    included: [
      'Flughafentransfer bei Ankunft und Abreise',
      'Privates Safari-Fahrzeug',
      'Professioneller englischsprachiger Guide',
      'Safari-Unterkunft',
      'Park- und Naturschutzgebühren',
      'Mahlzeiten während der Safari',
      'Trinkwasser',
    ],

    excludedTitle: 'Nicht enthalten',

    excluded: [
      'Internationale Flüge',
      'Inlandsflüge, sofern nicht angegeben',
      'Reiseversicherung',
      'Visagebühren',
      'Trinkgelder',
      'Persönliche Ausgaben',
      'Alkoholische Getränke',
    ],

    bringLabel: 'Was Sie mitbringen sollten',

    bringTitle: 'Bereiten Sie sich auf Ihre Migrations-Safari vor',

    whatToBring: [
      'Bequeme Safari-Kleidung',
      'Sonnenhut und Sonnencreme',
      'Kamera und Fernglas',
      'Leichte Jacke',
      'Reisedokumente',
      'Persönliche Medikamente',
    ],

    readyTitle: 'Bereit für Ihre Mara-Flussüberquerungs-Safari?',

    readyText:
      'Teilen Sie uns Ihre Reisedaten, bevorzugte Unterkunft, Gruppengröße und Ihr Budget mit. Unsere Safarispezialisten erstellen anhand der aktuellen Bewegungen der Wildtiere einen persönlichen Reiseverlauf für die Große Migration.',

    quote: 'Migrations-Safari anfragen',

    whatsapp: 'Über WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Safari de la traversée de la rivière Mara',

    heroSubtitle:
      'Découvrez l’un des spectacles animaliers les plus impressionnants d’Afrique dans le nord du Serengeti.',

    label: 'Expérience safari saisonnière',

    mainTitle: 'Grande Migration – Traversée de la rivière Mara',

    paragraph1:
      'Partez dans le nord du Serengeti avec la possibilité d’observer de grands troupeaux de gnous et de zèbres traversant la rivière Mara. Ce safari combine observation de la faune, paysages magnifiques et hébergement confortable.',

    paragraph2:
      'Les traversées de rivière sont des événements naturels et ne peuvent pas être garanties. Cependant, nos guides expérimentés vous positionneront dans les meilleures zones selon les déplacements actuels de la faune.',

    highlightsTitle: 'Points forts du safari',

    highlights: [
      'Observer les gnous et les zèbres traverser la rivière Mara',
      'Explorer le nord du Serengeti',
      'Profiter de safaris privés avec un guide professionnel',
      'Séjourner dans des lodges ou camps de tentes soigneusement sélectionnés',
    ],

    book: 'Réserver ce safari',

    itineraryLabel: 'Itinéraire du safari',

    itineraryTitle: 'Safari de 6 jours – Traversée de la rivière Mara',

    itinerary: [
      {
        title: 'Jour 1 : Arrivée à Arusha',
        text: 'Accueil par notre représentant à l’aéroport et transfert vers votre hôtel à Arusha pour vous détendre et recevoir un briefing sur le safari.',
      },
      {
        title: 'Jour 2 : Arusha – Serengeti central',
        text: 'Route vers le Serengeti et safari l’après-midi à la recherche de lions, éléphants, girafes et autres animaux sauvages.',
      },
      {
        title: 'Jour 3 : Serengeti central – Serengeti nord',
        text: 'Continuez vers le nord du Serengeti en suivant les déplacements des troupeaux de la Grande Migration vers la rivière Mara.',
      },
      {
        title: 'Jour 4 : Expérience de la traversée de la rivière Mara',
        text: 'Passez la journée près de la rivière Mara avec votre guide à la recherche des points de traversée et observez gnous, zèbres, crocodiles et prédateurs.',
      },
      {
        title: 'Jour 5 : Safaris dans le nord du Serengeti',
        text: 'Profitez d’une journée complète d’observation de la faune dans le nord du Serengeti pour augmenter vos chances d’assister aux activités de migration.',
      },
      {
        title: 'Jour 6 : Retour à Arusha',
        text: 'Retour à Arusha en avion ou en voiture selon votre itinéraire, puis transfert vers votre hôtel ou l’aéroport.',
      },
    ],

    includedTitle: 'Inclus',

    included: [
      'Transfert depuis et vers l’aéroport',
      'Véhicule de safari privé',
      'Guide professionnel anglophone',
      'Hébergement safari',
      'Frais de parc et de conservation',
      'Repas pendant le safari',
      'Eau potable',
    ],

    excludedTitle: 'Non inclus',

    excluded: [
      'Vols internationaux',
      'Vols domestiques sauf indication contraire',
      'Assurance voyage',
      'Frais de visa',
      'Pourboires',
      'Dépenses personnelles',
      'Boissons alcoolisées',
    ],

    bringLabel: 'À emporter',

    bringTitle: 'Préparez votre safari de la Grande Migration',

    whatToBring: [
      'Vêtements de safari confortables',
      'Chapeau et crème solaire',
      'Appareil photo et jumelles',
      'Veste légère',
      'Documents de voyage',
      'Médicaments personnels',
    ],

    readyTitle:
      'Prêt pour votre safari de traversée de la rivière Mara ?',

    readyText:
      'Indiquez-nous vos dates de voyage, votre hébergement préféré, la taille de votre groupe et votre budget. Nos spécialistes créeront un itinéraire personnalisé de la Grande Migration en fonction des déplacements actuels de la faune.',

    quote: 'Demander un safari de migration',

    whatsapp: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Safari de la Gran Migración y cruce del río Mara',

    heroSubtitle:
      'Vive uno de los espectáculos de fauna más impresionantes de África en el norte del Serengeti.',

    label: 'Experiencia de safari estacional',

    mainTitle: 'Gran Migración – Cruce del río Mara',

    paragraph1:
      'Viaja al norte del Serengeti con la oportunidad de presenciar grandes manadas de ñus y cebras cruzando el río Mara. Este safari combina emocionantes avistamientos de fauna, paisajes espectaculares y alojamiento confortable.',

    paragraph2:
      'Los cruces del río son acontecimientos naturales y no pueden garantizarse. Sin embargo, nuestros guías experimentados te llevarán a las mejores zonas según los movimientos actuales de la fauna.',

    highlightsTitle: 'Aspectos destacados del safari',

    highlights: [
      'Presenciar el cruce del río Mara por ñus y cebras',
      'Explorar el norte del Serengeti',
      'Disfrutar de safaris privados con un guía profesional',
      'Alojamiento en lodges o campamentos de tiendas cuidadosamente seleccionados',
    ],

    book: 'Reservar este safari',

    itineraryLabel: 'Itinerario del safari',

    itineraryTitle: 'Safari de 6 días – Cruce del río Mara',

    itinerary: [
      {
        title: 'Día 1: Llegada a Arusha',
        text: 'Nuestro representante te recibirá en el aeropuerto y te trasladará a tu hotel en Arusha para descansar y recibir una sesión informativa sobre el safari.',
      },
      {
        title: 'Día 2: Arusha – Serengeti Central',
        text: 'Viaja al Serengeti y disfruta de un safari por la tarde buscando leones, elefantes, jirafas y otros animales salvajes.',
      },
      {
        title: 'Día 3: Serengeti Central – Serengeti Norte',
        text: 'Continúa hacia el norte del Serengeti siguiendo el movimiento de las manadas de la Gran Migración hacia el río Mara.',
      },
      {
        title: 'Día 4: Experiencia del cruce del río Mara',
        text: 'Pasa el día cerca del río Mara con tu guía, buscando zonas de cruce y observando ñus, cebras, cocodrilos y depredadores.',
      },
      {
        title: 'Día 5: Safaris en el norte del Serengeti',
        text: 'Disfruta de otro día completo de observación de fauna en el norte del Serengeti, con más oportunidades de presenciar la actividad de la migración.',
      },
      {
        title: 'Día 6: Regreso a Arusha',
        text: 'Regresa a Arusha en avión o vehículo según el itinerario seleccionado y traslado a tu hotel o al aeropuerto.',
      },
    ],

    includedTitle: 'Qué está incluido',

    included: [
      'Recogida y traslado al aeropuerto',
      'Vehículo de safari privado',
      'Guía profesional de habla inglesa',
      'Alojamiento durante el safari',
      'Tasas del parque y conservación',
      'Comidas durante el safari',
      'Agua potable',
    ],

    excludedTitle: 'Qué no está incluido',

    excluded: [
      'Vuelos internacionales',
      'Vuelos nacionales salvo que se especifique',
      'Seguro de viaje',
      'Tasas de visado',
      'Propinas',
      'Gastos personales',
      'Bebidas alcohólicas',
    ],

    bringLabel: 'Qué llevar',

    bringTitle: 'Prepárate para tu safari de la Gran Migración',

    whatToBring: [
      'Ropa cómoda para safari',
      'Sombrero y protector solar',
      'Cámara y prismáticos',
      'Chaqueta ligera',
      'Documentos de viaje',
      'Medicamentos personales',
    ],

    readyTitle:
      '¿Listo para tu safari del cruce del río Mara?',

    readyText:
      'Compártenos tus fechas de viaje, alojamiento preferido, tamaño del grupo y presupuesto. Nuestros especialistas crearán un itinerario personalizado de la Gran Migración basado en los movimientos actuales de la fauna.',

    quote: 'Solicitar safari de migración',

    whatsapp: 'Chatear por WhatsApp',
  },
};

export default function MaraRiverCrossingPage() {
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
        image="/images/mara-two.jpg"
      />

      {/* INTRO */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">

            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                {t.label}
              </p>

              <h2 className="mt-3 text-4xl font-bold text-forest">
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

              <h3 className="text-2xl font-bold text-forest">
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
                {t.book}
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* ITINERARY */}
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

      {/* INCLUDED / EXCLUDED */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">

          <div className="rounded-3xl bg-cream p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-forest">
              {t.includedTitle}
            </h2>

            <ul className="mt-6 space-y-3">
              {t.included.map((item) => (
                <li key={item}>
                  ✅ {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-cream p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-forest">
              {t.excludedTitle}
            </h2>

            <ul className="mt-6 space-y-3">
              {t.excluded.map((item) => (
                <li key={item}>
                  ❌ {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* WHAT TO BRING */}
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
              <li key={item}>
                • {item}
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="font-display text-4xl font-bold md:text-5xl">
            {t.readyTitle}
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            {t.readyText}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/booking"
              className="rounded-full bg-gold px-8 py-4 font-bold text-white"
            >
              {t.quote}
            </Link>

            <a
              href="https://wa.me/255759273339"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-forest"
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