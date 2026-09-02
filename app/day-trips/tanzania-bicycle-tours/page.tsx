'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Tanzania Bicycle Tours',
    heroSubtitle:
      'Explore Tanzania on two wheels through villages, coffee farms, forests, mountain foothills and beautiful landscapes.',

    experienceLabel: 'PRIVATE GUIDED EXPERIENCE',
    introTitle: 'Discover Tanzania by Bicycle',
    intro1:
      'Our guided bicycle tours are designed for individuals, families, groups and local visitors who want to explore Tanzania in a unique and active way. Ride through local villages, mountain foothills and beautiful natural landscapes while meeting local communities and enjoying authentic cultural experiences.',
    intro2:
      'Every bicycle tour is private and can be customized according to your interests, fitness level, available time and preferred destination, making it perfect for both local residents and international visitors.',

    destinationsTitle: 'Popular Cycling Destinations',
    destinations: [
      'Arusha City',
      'Arusha Villages',
      'Moshi',
      'Kilimanjaro Foothills',
      'Sanya Juu',
      'West Kilimanjaro',
      'Lake Duluti',
      'Mto wa Mbu',
      'Other destinations upon request',
    ],

    experiencesTitle: 'Cycling Experiences',
    experiences: [
      'Village Bicycle Tours',
      'Coffee Farm Cycling',
      'Nature & Forest Trails',
      'Cultural Bicycle Experiences',
      'Local Market Visits',
      'Scenic Photography Stops',
      'Family Cycling Adventures',
      'Custom Private Tours',
    ],

    detailsTitle: 'Trip Details',
    duration: 'Duration',
    durationValue: 'Half Day • Full Day • Multi-Day',
    tourType: 'Tour Type',
    tourTypeValue: 'Private Guided Bicycle Tour',
    difficulty: 'Difficulty',
    difficultyValue: 'Easy to Advanced',
    departure: 'Departure',
    departureValue:
      'Available from Arusha, Moshi, Kilimanjaro and surrounding areas.',

    includedTitle: 'Included',
    included: [
      'Hotel pickup and drop-off',
      'Professional cycling guide',
      'Mountain bike',
      'Helmet and safety equipment',
      'Drinking water',
    ],

    excludedTitle: 'Excluded',
    excluded: [
      'Travel insurance',
      'Personal expenses',
      'Alcoholic drinks',
      'Tips and gratuities',
    ],

    bookButton: 'Book Your Bicycle Tour',

    ctaTitle: 'Plan Your Bicycle Adventure',
    ctaText:
      'Tell us where you would like to ride and we will create a private cycling experience specially designed for you.',
    quoteButton: 'Request a Quote',
    whatsappButton: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Fahrradtouren in Tansania',
    heroSubtitle:
      'Erkunden Sie Tansania auf zwei Rädern durch Dörfer, Kaffeeplantagen, Wälder, Berghänge und wunderschöne Landschaften.',

    experienceLabel: 'PRIVATE GEFÜHRTE ERFAHRUNG',
    introTitle: 'Entdecken Sie Tansania mit dem Fahrrad',
    intro1:
      'Unsere geführten Fahrradtouren sind für Einzelreisende, Familien, Gruppen und Einheimische konzipiert, die Tansania auf eine einzigartige und aktive Weise erkunden möchten. Fahren Sie durch lokale Dörfer, entlang der Berghänge und durch wunderschöne Naturlandschaften, während Sie lokale Gemeinschaften kennenlernen und authentische kulturelle Erlebnisse genießen.',
    intro2:
      'Jede Fahrradtour ist privat und kann nach Ihren Interessen, Ihrem Fitnesslevel, Ihrer verfügbaren Zeit und Ihrem gewünschten Reiseziel individuell gestaltet werden. Damit sind unsere Touren sowohl für Einheimische als auch für internationale Besucher ideal.',

    destinationsTitle: 'Beliebte Fahrradtour-Ziele',
    destinations: [
      'Arusha Stadt',
      'Dörfer rund um Arusha',
      'Moshi',
      'Ausläufer des Kilimandscharo',
      'Sanya Juu',
      'West-Kilimandscharo',
      'Lake Duluti',
      'Mto wa Mbu',
      'Weitere Ziele auf Anfrage',
    ],

    experiencesTitle: 'Fahrraderlebnisse',
    experiences: [
      'Dorf-Fahrradtouren',
      'Radfahren durch Kaffeeplantagen',
      'Natur- und Waldwege',
      'Kulturelle Fahrraderlebnisse',
      'Besuche lokaler Märkte',
      'Stopps für Landschaftsfotografie',
      'Fahrradabenteuer für Familien',
      'Individuelle private Touren',
    ],

    detailsTitle: 'Reisedetails',
    duration: 'Dauer',
    durationValue: 'Halber Tag • Ganzer Tag • Mehrtägig',
    tourType: 'Tourtyp',
    tourTypeValue: 'Private geführte Fahrradtour',
    difficulty: 'Schwierigkeitsgrad',
    difficultyValue: 'Leicht bis anspruchsvoll',
    departure: 'Abfahrt',
    departureValue:
      'Verfügbar ab Arusha, Moshi, Kilimandscharo und Umgebung.',

    includedTitle: 'Im Preis enthalten',
    included: [
      'Abholung und Rücktransfer zum Hotel',
      'Professioneller Fahrradguide',
      'Mountainbike',
      'Helm und Sicherheitsausrüstung',
      'Trinkwasser',
    ],

    excludedTitle: 'Nicht im Preis enthalten',
    excluded: [
      'Reiseversicherung',
      'Persönliche Ausgaben',
      'Alkoholische Getränke',
      'Trinkgelder',
    ],

    bookButton: 'Fahrradtour buchen',

    ctaTitle: 'Planen Sie Ihr Fahrradabenteuer',
    ctaText:
      'Teilen Sie uns mit, wo Sie fahren möchten, und wir erstellen ein privates Fahrraderlebnis, das speziell auf Ihre Wünsche zugeschnitten ist.',
    quoteButton: 'Angebot anfragen',
    whatsappButton: 'Über WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Circuits à vélo en Tanzanie',
    heroSubtitle:
      'Explorez la Tanzanie à vélo à travers les villages, les plantations de café, les forêts, les contreforts des montagnes et de magnifiques paysages.',

    experienceLabel: 'EXPÉRIENCE PRIVÉE GUIDÉE',
    introTitle: 'Découvrez la Tanzanie à vélo',
    intro1:
      'Nos circuits guidés à vélo sont conçus pour les voyageurs individuels, les familles, les groupes et les visiteurs locaux qui souhaitent découvrir la Tanzanie d’une manière unique et active. Traversez des villages locaux, les contreforts des montagnes et de magnifiques paysages naturels tout en rencontrant les communautés locales et en profitant d’expériences culturelles authentiques.',
    intro2:
      'Chaque circuit à vélo est privé et peut être personnalisé selon vos intérêts, votre niveau de forme physique, votre temps disponible et votre destination préférée. Nos circuits conviennent donc aussi bien aux résidents locaux qu’aux visiteurs internationaux.',

    destinationsTitle: 'Destinations cyclables populaires',
    destinations: [
      'Ville d’Arusha',
      'Villages d’Arusha',
      'Moshi',
      'Contreforts du Kilimandjaro',
      'Sanya Juu',
      'Kilimandjaro occidental',
      'Lac Duluti',
      'Mto wa Mbu',
      'Autres destinations sur demande',
    ],

    experiencesTitle: 'Expériences à vélo',
    experiences: [
      'Circuits à vélo dans les villages',
      'Cyclisme dans les plantations de café',
      'Sentiers naturels et forestiers',
      'Expériences culturelles à vélo',
      'Visites de marchés locaux',
      'Arrêts pour la photographie des paysages',
      'Aventures à vélo en famille',
      'Circuits privés personnalisés',
    ],

    detailsTitle: 'Détails du voyage',
    duration: 'Durée',
    durationValue: 'Demi-journée • Journée complète • Plusieurs jours',
    tourType: 'Type de circuit',
    tourTypeValue: 'Circuit privé guidé à vélo',
    difficulty: 'Difficulté',
    difficultyValue: 'Facile à avancé',
    departure: 'Départ',
    departureValue:
      'Disponible depuis Arusha, Moshi, le Kilimandjaro et les environs.',

    includedTitle: 'Inclus',
    included: [
      'Prise en charge et retour à l’hôtel',
      'Guide professionnel de cyclisme',
      'Vélo tout-terrain',
      'Casque et équipement de sécurité',
      'Eau potable',
    ],

    excludedTitle: 'Non inclus',
    excluded: [
      'Assurance voyage',
      'Dépenses personnelles',
      'Boissons alcoolisées',
      'Pourboires',
    ],

    bookButton: 'Réserver votre circuit à vélo',

    ctaTitle: 'Planifiez votre aventure à vélo',
    ctaText:
      'Dites-nous où vous souhaitez faire du vélo et nous créerons une expérience privée spécialement conçue pour vous.',
    quoteButton: 'Demander un devis',
    whatsappButton: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Tours en Bicicleta por Tanzania',
    heroSubtitle:
      'Explora Tanzania sobre dos ruedas a través de pueblos, plantaciones de café, bosques, laderas de montaña y hermosos paisajes.',

    experienceLabel: 'EXPERIENCIA PRIVADA GUIADA',
    introTitle: 'Descubre Tanzania en Bicicleta',
    intro1:
      'Nuestros tours guiados en bicicleta están diseñados para viajeros individuales, familias, grupos y visitantes locales que desean explorar Tanzania de una manera única y activa. Recorre pueblos locales, las laderas de las montañas y hermosos paisajes naturales mientras conoces a las comunidades locales y disfrutas de auténticas experiencias culturales.',
    intro2:
      'Cada tour en bicicleta es privado y puede personalizarse según tus intereses, nivel de condición física, tiempo disponible y destino preferido, lo que los hace perfectos tanto para residentes locales como para visitantes internacionales.',

    destinationsTitle: 'Destinos Populares para Ciclismo',
    destinations: [
      'Ciudad de Arusha',
      'Pueblos de Arusha',
      'Moshi',
      'Laderas del Kilimanjaro',
      'Sanya Juu',
      'Kilimanjaro Occidental',
      'Lago Duluti',
      'Mto wa Mbu',
      'Otros destinos bajo petición',
    ],

    experiencesTitle: 'Experiencias en Bicicleta',
    experiences: [
      'Tours en bicicleta por pueblos',
      'Ciclismo en plantaciones de café',
      'Senderos naturales y forestales',
      'Experiencias culturales en bicicleta',
      'Visitas a mercados locales',
      'Paradas para fotografía de paisajes',
      'Aventuras familiares en bicicleta',
      'Tours privados personalizados',
    ],

    detailsTitle: 'Detalles del viaje',
    duration: 'Duración',
    durationValue: 'Medio día • Día completo • Varios días',
    tourType: 'Tipo de tour',
    tourTypeValue: 'Tour privado guiado en bicicleta',
    difficulty: 'Dificultad',
    difficultyValue: 'Fácil a avanzado',
    departure: 'Salida',
    departureValue:
      'Disponible desde Arusha, Moshi, Kilimanjaro y las zonas cercanas.',

    includedTitle: 'Incluye',
    included: [
      'Recogida y regreso al hotel',
      'Guía profesional de ciclismo',
      'Bicicleta de montaña',
      'Casco y equipo de seguridad',
      'Agua potable',
    ],

    excludedTitle: 'No incluye',
    excluded: [
      'Seguro de viaje',
      'Gastos personales',
      'Bebidas alcohólicas',
      'Propinas',
    ],

    bookButton: 'Reservar tu tour en bicicleta',

    ctaTitle: 'Planifica tu aventura en bicicleta',
    ctaText:
      'Dinos dónde te gustaría montar en bicicleta y crearemos una experiencia privada especialmente diseñada para ti.',
    quoteButton: 'Solicitar presupuesto',
    whatsappButton: 'Chatear por WhatsApp',
  },
};

export default function TanzaniaBicycleToursPage() {
  const { language } = useLanguage();

  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <main>
      <Header />

      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/bicycle-four.jpg"
      />

      {/* INTRODUCTION */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <p className="font-bold text-gold">
            {t.experienceLabel}
          </p>

          <h2 className="section-title mt-3">
            {t.introTitle}
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/70">
            {t.intro1}
          </p>

          <p className="mt-4 text-lg leading-8 text-black/70">
            {t.intro2}
          </p>

          {/* DESTINATIONS + EXPERIENCES */}
          <div className="mt-14 grid gap-10 md:grid-cols-2">

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-forest">
                {t.destinationsTitle}
              </h2>

              <ul className="mt-6 space-y-3">
                {t.destinations.map((item) => (
                  <li key={item}>
                    🚴 {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-forest">
                {t.experiencesTitle}
              </h2>

              <ul className="mt-6 space-y-3">
                {t.experiences.map((item) => (
                  <li key={item}>
                    ✅ {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* TRIP DETAILS */}
          <div className="mt-14 rounded-3xl bg-forest p-10 text-white">

            <h2 className="text-3xl font-bold">
              {t.detailsTitle}
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              <p>
                <strong>{t.duration}:</strong>{' '}
                {t.durationValue}
              </p>

              <p>
                <strong>{t.tourType}:</strong>{' '}
                {t.tourTypeValue}
              </p>

              <p>
                <strong>{t.difficulty}:</strong>{' '}
                {t.difficultyValue}
              </p>

              <p>
                <strong>{t.departure}:</strong>{' '}
                {t.departureValue}
              </p>

            </div>

          </div>

          {/* INCLUDED / EXCLUDED */}
          <div className="mt-14 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-lg">

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

            <div className="rounded-3xl bg-white p-8 shadow-lg">

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

          {/* BOOK BUTTON */}
          <div className="mt-16 text-center">

            <Link
              href="/booking"
              className="rounded-full bg-gold px-8 py-4 font-bold text-white"
            >
              {t.bookButton}
            </Link>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-forest py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="font-display text-4xl font-bold md:text-5xl">
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