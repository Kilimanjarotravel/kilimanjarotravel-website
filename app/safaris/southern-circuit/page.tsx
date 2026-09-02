'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Southern Circuit Safari',
    heroSubtitle:
      "Explore Tanzania's wild and less-crowded southern parks, including Nyerere National Park, Mikumi, Ruaha, and Udzungwa Mountains.",

    label: 'Wild & Untouched Tanzania',
    mainTitle: 'Southern Tanzania Safari Adventure',

    paragraph1:
      'Explore Tanzania’s spectacular Southern Circuit, home to vast wilderness areas, fewer crowds, and exceptional wildlife. Visit iconic destinations such as Nyerere National Park, Ruaha National Park, Mikumi National Park, and the Udzungwa Mountains for an unforgettable safari experience.',

    paragraph2:
      'The Southern Circuit offers authentic safari experiences with boat safaris, walking safaris, game drives, and incredible biodiversity. It is perfect for travelers seeking a more remote and exclusive adventure.',

    highlightsTitle: 'Safari Highlights',

    highlights: [
      'Explore Nyerere National Park (Selous)',
      'Visit Ruaha National Park',
      'Game drives in Mikumi National Park',
      'Boat safari on the Rufiji River',
      'Walking safaris with experienced guides',
    ],

    book: 'Book This Safari',

    itineraryLabel: 'Safari Itinerary',
    itineraryTitle: '6-Day Southern Circuit Safari',

    itinerary: [
      {
        title: 'Day 1: Arrival in Dar es Salaam',
        text: 'Meet our representative and transfer to your hotel before receiving a safari briefing.',
      },
      {
        title: 'Day 2: Nyerere National Park',
        text: 'Travel to Nyerere National Park and enjoy your first afternoon game drive in one of Africa’s largest protected wildlife areas.',
      },
      {
        title: 'Day 3: Boat Safari & Walking Safari',
        text: 'Experience a boat safari on the Rufiji River followed by a guided walking safari for a unique perspective of the wilderness.',
      },
      {
        title: 'Day 4: Mikumi National Park',
        text: 'Drive to Mikumi National Park and enjoy afternoon game drives while searching for elephants, lions, zebras, giraffes, and buffaloes.',
      },
      {
        title: 'Day 5: Ruaha National Park',
        text: 'Continue to Ruaha National Park for spectacular game drives in one of Tanzania’s most remote and wildlife-rich destinations.',
      },
      {
        title: 'Day 6: Return',
        text: 'After breakfast, transfer back to Dar es Salaam or fly to your next destination.',
      },
    ],

    includedTitle: 'What Is Included',

    included: [
      'Airport transfers',
      'Private safari vehicle',
      'Professional safari guide',
      'Park entrance fees',
      'Accommodation',
      'Meals during the safari',
      'Drinking water',
    ],

    excludedTitle: 'What Is Excluded',

    excluded: [
      'Flights unless specified',
      'Travel insurance',
      'Visa fees',
      'Tips and gratuities',
      'Personal expenses',
      'Alcoholic drinks',
    ],

    bringLabel: 'What To Bring',
    bringTitle: 'Prepare for Your Southern Circuit Safari',

    whatToBring: [
      'Comfortable safari clothing',
      'Sun hat and sunscreen',
      'Camera or binoculars',
      'Light jacket',
      'Travel documents',
      'Personal medication',
    ],

    readyTitle: 'Ready for Your Southern Circuit Safari?',

    readyText:
      'Share your travel dates, preferred parks, accommodation style, group size, and budget. Our safari specialists will create a personalized Southern Circuit itinerary and quotation for you.',

    quote: 'Request a Southern Safari',
    whatsapp: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Safari im südlichen Tansania',

    heroSubtitle:
      'Entdecken Sie die wilden und weniger besuchten Nationalparks im Süden Tansanias, darunter Nyerere, Mikumi, Ruaha und die Udzungwa-Berge.',

    label: 'Wildes und unberührtes Tansania',

    mainTitle: 'Safari-Abenteuer im Süden Tansanias',

    paragraph1:
      'Entdecken Sie den spektakulären Southern Circuit Tansanias mit weitläufigen Wildnisgebieten, weniger Besuchern und einer außergewöhnlichen Tierwelt. Besuchen Sie bekannte Ziele wie den Nyerere-Nationalpark, den Ruaha-Nationalpark, den Mikumi-Nationalpark und die Udzungwa-Berge.',

    paragraph2:
      'Der Southern Circuit bietet authentische Safari-Erlebnisse mit Bootsafaris, Wandersafaris, Pirschfahrten und einer beeindruckenden Artenvielfalt. Er ist ideal für Reisende, die ein abgelegeneres und exklusiveres Abenteuer suchen.',

    highlightsTitle: 'Höhepunkte der Safari',

    highlights: [
      'Nyerere-Nationalpark (Selous) erkunden',
      'Ruaha-Nationalpark besuchen',
      'Pirschfahrten im Mikumi-Nationalpark',
      'Bootssafari auf dem Rufiji-Fluss',
      'Wandersafaris mit erfahrenen Guides',
    ],

    book: 'Diese Safari buchen',

    itineraryLabel: 'Safari-Reiseverlauf',

    itineraryTitle: '6-Tage-Safari im Southern Circuit',

    itinerary: [
      {
        title: 'Tag 1: Ankunft in Dar es Salaam',
        text: 'Treffen Sie unseren Vertreter und fahren Sie zu Ihrem Hotel, bevor Sie eine ausführliche Safari-Einweisung erhalten.',
      },
      {
        title: 'Tag 2: Nyerere-Nationalpark',
        text: 'Reisen Sie zum Nyerere-Nationalpark und genießen Sie Ihre erste Pirschfahrt am Nachmittag in einem der größten geschützten Wildnisgebiete Afrikas.',
      },
      {
        title: 'Tag 3: Bootsafari & Wandersafari',
        text: 'Erleben Sie eine Bootsafari auf dem Rufiji-Fluss und anschließend eine geführte Wandersafari, die Ihnen eine einzigartige Perspektive auf die Wildnis bietet.',
      },
      {
        title: 'Tag 4: Mikumi-Nationalpark',
        text: 'Fahren Sie zum Mikumi-Nationalpark und unternehmen Sie am Nachmittag Pirschfahrten auf der Suche nach Elefanten, Löwen, Zebras, Giraffen und Büffeln.',
      },
      {
        title: 'Tag 5: Ruaha-Nationalpark',
        text: 'Weiterfahrt zum Ruaha-Nationalpark für spektakuläre Pirschfahrten in einem der abgelegensten und wildreichsten Gebiete Tansanias.',
      },
      {
        title: 'Tag 6: Rückkehr',
        text: 'Nach dem Frühstück fahren Sie zurück nach Dar es Salaam oder fliegen zu Ihrem nächsten Reiseziel.',
      },
    ],

    includedTitle: 'Im Preis enthalten',

    included: [
      'Flughafentransfers',
      'Privates Safari-Fahrzeug',
      'Professioneller Safari-Guide',
      'Nationalparkgebühren',
      'Unterkunft',
      'Mahlzeiten während der Safari',
      'Trinkwasser',
    ],

    excludedTitle: 'Nicht enthalten',

    excluded: [
      'Flüge, sofern nicht angegeben',
      'Reiseversicherung',
      'Visagebühren',
      'Trinkgelder',
      'Persönliche Ausgaben',
      'Alkoholische Getränke',
    ],

    bringLabel: 'Was Sie mitbringen sollten',

    bringTitle: 'Bereiten Sie sich auf Ihre Southern-Circuit-Safari vor',

    whatToBring: [
      'Bequeme Safari-Kleidung',
      'Sonnenhut und Sonnencreme',
      'Kamera oder Fernglas',
      'Leichte Jacke',
      'Reisedokumente',
      'Persönliche Medikamente',
    ],

    readyTitle: 'Bereit für Ihre Southern-Circuit-Safari?',

    readyText:
      'Teilen Sie uns Ihre Reisedaten, bevorzugten Nationalparks, Unterkunftsart, Gruppengröße und Ihr Budget mit. Unsere Safarispezialisten erstellen einen persönlichen Reiseverlauf und ein Angebot für den Southern Circuit.',

    quote: 'Safari im Süden anfragen',
    whatsapp: 'Über WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Safari dans le sud de la Tanzanie',

    heroSubtitle:
      'Explorez les parcs sauvages et moins fréquentés du sud de la Tanzanie, notamment Nyerere, Mikumi, Ruaha et les montagnes d’Udzungwa.',

    label: 'Tanzanie sauvage et préservée',

    mainTitle: 'Aventure Safari dans le sud de la Tanzanie',

    paragraph1:
      'Découvrez le spectaculaire circuit sud de la Tanzanie, caractérisé par de vastes zones sauvages, moins de visiteurs et une faune exceptionnelle. Visitez des destinations emblématiques telles que le parc national de Nyerere, le parc national de Ruaha, le parc national de Mikumi et les montagnes d’Udzungwa.',

    paragraph2:
      'Le circuit sud offre des expériences authentiques avec des safaris en bateau, des safaris à pied, des safaris en véhicule et une biodiversité exceptionnelle. Il est idéal pour les voyageurs à la recherche d’une aventure plus isolée et exclusive.',

    highlightsTitle: 'Points forts du safari',

    highlights: [
      'Explorer le parc national de Nyerere (Selous)',
      'Visiter le parc national de Ruaha',
      'Safaris en véhicule dans le parc national de Mikumi',
      'Safari en bateau sur la rivière Rufiji',
      'Safaris à pied avec des guides expérimentés',
    ],

    book: 'Réserver ce safari',

    itineraryLabel: 'Itinéraire du safari',

    itineraryTitle: 'Safari de 6 jours dans le circuit sud',

    itinerary: [
      {
        title: 'Jour 1 : Arrivée à Dar es Salaam',
        text: 'Accueil par notre représentant et transfert vers votre hôtel avant votre briefing safari.',
      },
      {
        title: 'Jour 2 : Parc national de Nyerere',
        text: 'Voyagez vers le parc national de Nyerere et profitez de votre premier safari en véhicule dans l’après-midi, dans l’une des plus grandes zones protégées d’Afrique.',
      },
      {
        title: 'Jour 3 : Safari en bateau et safari à pied',
        text: 'Profitez d’un safari en bateau sur la rivière Rufiji, suivi d’un safari à pied accompagné d’un guide pour découvrir la nature sous un autre angle.',
      },
      {
        title: 'Jour 4 : Parc national de Mikumi',
        text: 'Route vers le parc national de Mikumi et safari en véhicule dans l’après-midi à la recherche d’éléphants, de lions, de zèbres, de girafes et de buffles.',
      },
      {
        title: 'Jour 5 : Parc national de Ruaha',
        text: 'Continuez vers le parc national de Ruaha pour des safaris spectaculaires dans l’une des régions les plus sauvages et riches en faune de Tanzanie.',
      },
      {
        title: 'Jour 6 : Retour',
        text: 'Après le petit-déjeuner, transfert vers Dar es Salaam ou vol vers votre prochaine destination.',
      },
    ],

    includedTitle: 'Inclus',

    included: [
      'Transferts depuis et vers l’aéroport',
      'Véhicule de safari privé',
      'Guide professionnel de safari',
      'Frais d’entrée aux parcs',
      'Hébergement',
      'Repas pendant le safari',
      'Eau potable',
    ],

    excludedTitle: 'Non inclus',

    excluded: [
      'Vols sauf indication contraire',
      'Assurance voyage',
      'Frais de visa',
      'Pourboires',
      'Dépenses personnelles',
      'Boissons alcoolisées',
    ],

    bringLabel: 'À emporter',

    bringTitle: 'Préparez votre safari dans le circuit sud',

    whatToBring: [
      'Vêtements de safari confortables',
      'Chapeau et crème solaire',
      'Appareil photo ou jumelles',
      'Veste légère',
      'Documents de voyage',
      'Médicaments personnels',
    ],

    readyTitle: 'Prêt pour votre safari dans le circuit sud ?',

    readyText:
      'Indiquez-nous vos dates de voyage, vos parcs préférés, votre style d’hébergement, la taille de votre groupe et votre budget. Nos spécialistes créeront un itinéraire personnalisé et un devis pour votre safari dans le circuit sud.',

    quote: 'Demander un safari dans le sud',
    whatsapp: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Safari por el Circuito Sur',

    heroSubtitle:
      'Explora los parques salvajes y menos concurridos del sur de Tanzania, incluidos Nyerere, Mikumi, Ruaha y las montañas Udzungwa.',

    label: 'Tanzania salvaje e intacta',

    mainTitle: 'Aventura Safari por el Sur de Tanzania',

    paragraph1:
      'Explora el espectacular Circuito Sur de Tanzania, hogar de grandes áreas naturales, menos visitantes y una fauna excepcional. Visita destinos emblemáticos como el Parque Nacional Nyerere, el Parque Nacional Ruaha, el Parque Nacional Mikumi y las montañas Udzungwa.',

    paragraph2:
      'El Circuito Sur ofrece experiencias auténticas de safari con safaris en barco, safaris a pie, recorridos en vehículo y una increíble biodiversidad. Es perfecto para viajeros que buscan una aventura más remota y exclusiva.',

    highlightsTitle: 'Aspectos destacados del safari',

    highlights: [
      'Explorar el Parque Nacional Nyerere (Selous)',
      'Visitar el Parque Nacional Ruaha',
      'Safaris en vehículo por el Parque Nacional Mikumi',
      'Safari en barco por el río Rufiji',
      'Safaris a pie con guías experimentados',
    ],

    book: 'Reservar este safari',

    itineraryLabel: 'Itinerario del safari',

    itineraryTitle: 'Safari de 6 días por el Circuito Sur',

    itinerary: [
      {
        title: 'Día 1: Llegada a Dar es Salaam',
        text: 'Encuéntrate con nuestro representante y traslado a tu hotel antes de recibir una sesión informativa sobre el safari.',
      },
      {
        title: 'Día 2: Parque Nacional Nyerere',
        text: 'Viaja al Parque Nacional Nyerere y disfruta de tu primer safari en vehículo por la tarde en una de las áreas protegidas de fauna más grandes de África.',
      },
      {
        title: 'Día 3: Safari en barco y safari a pie',
        text: 'Disfruta de un safari en barco por el río Rufiji seguido de un safari a pie acompañado por un guía para descubrir la naturaleza desde una perspectiva diferente.',
      },
      {
        title: 'Día 4: Parque Nacional Mikumi',
        text: 'Viaja al Parque Nacional Mikumi y disfruta de safaris por la tarde buscando elefantes, leones, cebras, jirafas y búfalos.',
      },
      {
        title: 'Día 5: Parque Nacional Ruaha',
        text: 'Continúa hacia el Parque Nacional Ruaha para disfrutar de espectaculares safaris en una de las zonas más remotas y ricas en fauna de Tanzania.',
      },
      {
        title: 'Día 6: Regreso',
        text: 'Después del desayuno, traslado de regreso a Dar es Salaam o vuelo hacia tu próximo destino.',
      },
    ],

    includedTitle: 'Qué está incluido',

    included: [
      'Traslados al aeropuerto',
      'Vehículo de safari privado',
      'Guía profesional de safari',
      'Tasas de entrada a los parques',
      'Alojamiento',
      'Comidas durante el safari',
      'Agua potable',
    ],

    excludedTitle: 'Qué no está incluido',

    excluded: [
      'Vuelos salvo que se especifique',
      'Seguro de viaje',
      'Tasas de visado',
      'Propinas',
      'Gastos personales',
      'Bebidas alcohólicas',
    ],

    bringLabel: 'Qué llevar',

    bringTitle: 'Prepárate para tu safari por el Circuito Sur',

    whatToBring: [
      'Ropa cómoda para safari',
      'Sombrero y protector solar',
      'Cámara o prismáticos',
      'Chaqueta ligera',
      'Documentos de viaje',
      'Medicamentos personales',
    ],

    readyTitle: '¿Listo para tu safari por el Circuito Sur?',

    readyText:
      'Compártenos tus fechas de viaje, parques preferidos, estilo de alojamiento, tamaño del grupo y presupuesto. Nuestros especialistas crearán un itinerario personalizado y una cotización para tu safari por el Circuito Sur.',

    quote: 'Solicitar safari del sur',
    whatsapp: 'Chatear por WhatsApp',
  },
};

export default function SouthernCircuitPage() {
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
        image="/images/nouthern-two.jpg"
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
                className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white transition hover:scale-105"
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
              className="rounded-full bg-gold px-8 py-4 font-bold text-white transition hover:scale-105"
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