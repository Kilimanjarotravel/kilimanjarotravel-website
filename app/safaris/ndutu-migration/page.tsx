'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Ndutu Migration Safari',
    heroSubtitle:
      'Experience the Great Migration and calving season across the Ndutu plains of southern Serengeti.',

    label: 'Seasonal Safari Experience',
    mainTitle: 'Ndutu Great Migration and Calving Season',

    paragraph1:
      'Travel to the Ndutu plains in the southern Serengeti to witness the Great Migration during the calving season. Thousands of wildebeest gather in this area, creating excellent opportunities to see newborn calves and predators.',

    paragraph2:
      'The Ndutu season is seasonal and wildlife movements depend on rainfall, but our experienced guides follow current migration patterns to give you the best possible safari experience.',

    highlightsTitle: 'Safari Highlights',

    highlights: [
      'Witness the Great Migration across the Ndutu plains',
      'See wildebeest calves during the calving season',
      'Enjoy excellent predator sightings',
      'Explore southern Serengeti and the Ngorongoro Conservation Area',
    ],

    book: 'Book This Safari',

    itineraryLabel: 'Safari Itinerary',
    itineraryTitle: '6-Day Ndutu Migration Safari',

    itinerary: [
      {
        title: 'Day 1: Arrival in Arusha',
        text: 'Meet our representative at the airport and transfer to your hotel in Arusha for relaxation and safari briefing.',
      },
      {
        title: 'Day 2: Arusha to Ngorongoro Highlands',
        text: 'Travel toward the Ngorongoro Conservation Area and enjoy beautiful highland scenery before continuing toward the Ndutu region.',
      },
      {
        title: 'Day 3: Ndutu Migration Game Drives',
        text: 'Explore the Ndutu plains in search of large wildebeest herds, newborn calves, zebras, lions, cheetahs, hyenas, and other predators.',
      },
      {
        title: 'Day 4: Full Day in Ndutu',
        text: 'Spend another full day following current migration movements and enjoying wildlife photography across the southern Serengeti and Ndutu plains.',
      },
      {
        title: 'Day 5: Ngorongoro Crater',
        text: 'Descend into the Ngorongoro Crater for excellent wildlife viewing before continuing to your lodge in the highlands.',
      },
      {
        title: 'Day 6: Return to Arusha',
        text: 'Enjoy breakfast and return to Arusha, where you will be transferred to your hotel or the airport.',
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
      'International and domestic flights unless specified',
      'Travel insurance',
      'Visa fees',
      'Tips and gratuities',
      'Personal expenses',
      'Alcoholic drinks',
    ],

    bringLabel: 'What To Bring',
    bringTitle: 'Prepare for Your Ndutu Migration Safari',

    whatToBring: [
      'Comfortable safari clothing',
      'Sun hat and sunscreen',
      'Camera and binoculars',
      'Light jacket',
      'Travel documents',
      'Personal medication',
    ],

    readyTitle: 'Ready for Your Ndutu Migration Safari?',

    readyText:
      'Share your travel dates, preferred accommodation, group size, and budget. Our safari specialists will create a personalized Ndutu migration itinerary based on current wildlife movements.',

    quote: 'Request a Migration Safari',
    whatsapp: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Ndutu-Migrations-Safari',

    heroSubtitle:
      'Erleben Sie die Große Migration und die Kalbungszeit in den Ndutu-Ebenen der südlichen Serengeti.',

    label: 'Saisonales Safari-Erlebnis',

    mainTitle: 'Große Migration und Kalbungszeit in Ndutu',

    paragraph1:
      'Reisen Sie in die Ndutu-Ebenen im Süden der Serengeti und erleben Sie die Große Migration während der Kalbungszeit. Tausende Gnus versammeln sich in dieser Region und bieten hervorragende Möglichkeiten, neugeborene Kälber und Raubtiere zu beobachten.',

    paragraph2:
      'Die Ndutu-Saison ist saisonabhängig und die Bewegungen der Wildtiere hängen von den Niederschlägen ab. Unsere erfahrenen Guides verfolgen jedoch die aktuellen Migrationsbewegungen, um Ihnen das bestmögliche Safari-Erlebnis zu bieten.',

    highlightsTitle: 'Höhepunkte der Safari',

    highlights: [
      'Die Große Migration in den Ndutu-Ebenen erleben',
      'Gnu-Kälber während der Kalbungszeit beobachten',
      'Hervorragende Möglichkeiten zur Beobachtung von Raubtieren',
      'Die südliche Serengeti und das Ngorongoro-Schutzgebiet erkunden',
    ],

    book: 'Diese Safari buchen',

    itineraryLabel: 'Safari-Reiseverlauf',

    itineraryTitle: '6-Tage-Ndutu-Migrations-Safari',

    itinerary: [
      {
        title: 'Tag 1: Ankunft in Arusha',
        text: 'Treffen Sie unseren Vertreter am Flughafen und fahren Sie zu Ihrem Hotel in Arusha. Dort können Sie sich entspannen und erhalten eine Safari-Einweisung.',
      },
      {
        title: 'Tag 2: Arusha – Ngorongoro-Hochland',
        text: 'Reisen Sie in Richtung Ngorongoro-Schutzgebiet und genießen Sie die wunderschöne Landschaft des Hochlands, bevor Sie weiter in Richtung Ndutu fahren.',
      },
      {
        title: 'Tag 3: Pirschfahrten zur Migration in Ndutu',
        text: 'Erkunden Sie die Ndutu-Ebenen auf der Suche nach großen Gnuherden, neugeborenen Kälbern, Zebras, Löwen, Geparden, Hyänen und anderen Raubtieren.',
      },
      {
        title: 'Tag 4: Ganzer Tag in Ndutu',
        text: 'Verbringen Sie einen weiteren ganzen Tag damit, den aktuellen Bewegungen der Migration zu folgen und die Tierwelt in der südlichen Serengeti und den Ndutu-Ebenen zu fotografieren.',
      },
      {
        title: 'Tag 5: Ngorongoro-Krater',
        text: 'Fahren Sie in den Ngorongoro-Krater hinab und genießen Sie hervorragende Tierbeobachtungen, bevor Sie zu Ihrer Lodge im Hochland weiterfahren.',
      },
      {
        title: 'Tag 6: Rückkehr nach Arusha',
        text: 'Genießen Sie Ihr Frühstück und kehren Sie nach Arusha zurück, wo Sie zu Ihrem Hotel oder zum Flughafen gebracht werden.',
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
      'Internationale und Inlandsflüge, sofern nicht angegeben',
      'Reiseversicherung',
      'Visagebühren',
      'Trinkgelder',
      'Persönliche Ausgaben',
      'Alkoholische Getränke',
    ],

    bringLabel: 'Was Sie mitbringen sollten',

    bringTitle: 'Bereiten Sie sich auf Ihre Ndutu-Migrations-Safari vor',

    whatToBring: [
      'Bequeme Safari-Kleidung',
      'Sonnenhut und Sonnencreme',
      'Kamera und Fernglas',
      'Leichte Jacke',
      'Reisedokumente',
      'Persönliche Medikamente',
    ],

    readyTitle: 'Bereit für Ihre Ndutu-Migrations-Safari?',

    readyText:
      'Teilen Sie uns Ihre Reisedaten, bevorzugte Unterkunft, Gruppengröße und Ihr Budget mit. Unsere Safarispezialisten erstellen anhand der aktuellen Bewegungen der Wildtiere einen persönlichen Reiseverlauf für Ihre Ndutu-Migrations-Safari.',

    quote: 'Migrations-Safari anfragen',

    whatsapp: 'Über WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Safari de la migration à Ndutu',

    heroSubtitle:
      'Découvrez la Grande Migration et la saison des naissances dans les plaines de Ndutu, au sud du Serengeti.',

    label: 'Expérience safari saisonnière',

    mainTitle: 'Grande Migration et saison des naissances à Ndutu',

    paragraph1:
      'Partez dans les plaines de Ndutu, au sud du Serengeti, pour découvrir la Grande Migration pendant la saison des naissances. Des milliers de gnous se rassemblent dans cette région, offrant d’excellentes possibilités d’observer les nouveau-nés et les prédateurs.',

    paragraph2:
      'La saison de Ndutu dépend des conditions saisonnières et les déplacements des animaux sont liés aux précipitations. Nos guides expérimentés suivent cependant les mouvements actuels de la migration afin de vous offrir la meilleure expérience possible.',

    highlightsTitle: 'Points forts du safari',

    highlights: [
      'Observer la Grande Migration dans les plaines de Ndutu',
      'Voir les jeunes gnous pendant la saison des naissances',
      'Profiter d’excellentes possibilités d’observation des prédateurs',
      'Explorer le sud du Serengeti et la zone de conservation de Ngorongoro',
    ],

    book: 'Réserver ce safari',

    itineraryLabel: 'Itinéraire du safari',

    itineraryTitle: 'Safari de 6 jours – Migration à Ndutu',

    itinerary: [
      {
        title: 'Jour 1 : Arrivée à Arusha',
        text: 'Accueil par notre représentant à l’aéroport et transfert vers votre hôtel à Arusha pour vous détendre et recevoir un briefing sur le safari.',
      },
      {
        title: 'Jour 2 : Arusha – Hautes terres de Ngorongoro',
        text: 'Voyagez vers la zone de conservation de Ngorongoro et profitez des magnifiques paysages des hautes terres avant de continuer vers la région de Ndutu.',
      },
      {
        title: 'Jour 3 : Safari de migration à Ndutu',
        text: 'Explorez les plaines de Ndutu à la recherche de grands troupeaux de gnous, de nouveau-nés, de zèbres, de lions, de guépards, de hyènes et d’autres prédateurs.',
      },
      {
        title: 'Jour 4 : Journée complète à Ndutu',
        text: 'Passez une journée complète à suivre les mouvements actuels de la migration et à photographier la faune dans le sud du Serengeti et les plaines de Ndutu.',
      },
      {
        title: 'Jour 5 : Cratère du Ngorongoro',
        text: 'Descendez dans le cratère du Ngorongoro pour profiter d’excellentes observations de la faune avant de rejoindre votre lodge dans les hautes terres.',
      },
      {
        title: 'Jour 6 : Retour à Arusha',
        text: 'Après le petit-déjeuner, retournez à Arusha où vous serez transféré vers votre hôtel ou l’aéroport.',
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
      'Vols internationaux et domestiques sauf indication contraire',
      'Assurance voyage',
      'Frais de visa',
      'Pourboires',
      'Dépenses personnelles',
      'Boissons alcoolisées',
    ],

    bringLabel: 'À emporter',

    bringTitle: 'Préparez votre safari de migration à Ndutu',

    whatToBring: [
      'Vêtements de safari confortables',
      'Chapeau et crème solaire',
      'Appareil photo et jumelles',
      'Veste légère',
      'Documents de voyage',
      'Médicaments personnels',
    ],

    readyTitle: 'Prêt pour votre safari de migration à Ndutu ?',

    readyText:
      'Indiquez-nous vos dates de voyage, votre hébergement préféré, la taille de votre groupe et votre budget. Nos spécialistes créeront un itinéraire personnalisé à Ndutu basé sur les déplacements actuels de la faune.',

    quote: 'Demander un safari de migration',

    whatsapp: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Safari de la Gran Migración en Ndutu',

    heroSubtitle:
      'Vive la Gran Migración y la temporada de nacimientos en las llanuras de Ndutu, al sur del Serengeti.',

    label: 'Experiencia de safari estacional',

    mainTitle: 'Gran Migración y temporada de nacimientos en Ndutu',

    paragraph1:
      'Viaja a las llanuras de Ndutu, en el sur del Serengeti, para vivir la Gran Migración durante la temporada de nacimientos. Miles de ñus se reúnen en esta zona, ofreciendo excelentes oportunidades para observar crías recién nacidas y depredadores.',

    paragraph2:
      'La temporada de Ndutu depende de las condiciones estacionales y los movimientos de los animales están relacionados con las lluvias. Nuestros guías experimentados siguen los movimientos actuales de la migración para ofrecerte la mejor experiencia de safari posible.',

    highlightsTitle: 'Aspectos destacados del safari',

    highlights: [
      'Presenciar la Gran Migración en las llanuras de Ndutu',
      'Ver crías de ñu durante la temporada de nacimientos',
      'Disfrutar de excelentes avistamientos de depredadores',
      'Explorar el sur del Serengeti y el Área de Conservación de Ngorongoro',
    ],

    book: 'Reservar este safari',

    itineraryLabel: 'Itinerario del safari',

    itineraryTitle: 'Safari de 6 días – Migración en Ndutu',

    itinerary: [
      {
        title: 'Día 1: Llegada a Arusha',
        text: 'Nuestro representante te recibirá en el aeropuerto y te trasladará a tu hotel en Arusha para descansar y recibir una sesión informativa sobre el safari.',
      },
      {
        title: 'Día 2: Arusha – Tierras Altas de Ngorongoro',
        text: 'Viaja hacia el Área de Conservación de Ngorongoro y disfruta de los hermosos paisajes de las tierras altas antes de continuar hacia la región de Ndutu.',
      },
      {
        title: 'Día 3: Safari de migración en Ndutu',
        text: 'Explora las llanuras de Ndutu en busca de grandes manadas de ñus, crías recién nacidas, cebras, leones, guepardos, hienas y otros depredadores.',
      },
      {
        title: 'Día 4: Día completo en Ndutu',
        text: 'Pasa otro día completo siguiendo los movimientos actuales de la migración y disfrutando de la fotografía de fauna en el sur del Serengeti y las llanuras de Ndutu.',
      },
      {
        title: 'Día 5: Cráter del Ngorongoro',
        text: 'Desciende al cráter del Ngorongoro para disfrutar de excelentes avistamientos de fauna antes de continuar hacia tu lodge en las tierras altas.',
      },
      {
        title: 'Día 6: Regreso a Arusha',
        text: 'Disfruta del desayuno y regresa a Arusha, donde serás trasladado a tu hotel o al aeropuerto.',
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
      'Vuelos internacionales y nacionales salvo que se especifique',
      'Seguro de viaje',
      'Tasas de visado',
      'Propinas',
      'Gastos personales',
      'Bebidas alcohólicas',
    ],

    bringLabel: 'Qué llevar',

    bringTitle: 'Prepárate para tu safari de migración en Ndutu',

    whatToBring: [
      'Ropa cómoda para safari',
      'Sombrero y protector solar',
      'Cámara y prismáticos',
      'Chaqueta ligera',
      'Documentos de viaje',
      'Medicamentos personales',
    ],

    readyTitle: '¿Listo para tu safari de migración en Ndutu?',

    readyText:
      'Compártenos tus fechas de viaje, alojamiento preferido, tamaño del grupo y presupuesto. Nuestros especialistas crearán un itinerario personalizado de Ndutu basado en los movimientos actuales de la fauna.',

    quote: 'Solicitar safari de migración',

    whatsapp: 'Chatear por WhatsApp',
  },
};

export default function NdutuMigrationPage() {
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
        image="/images/ndutu-two.jpg"
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