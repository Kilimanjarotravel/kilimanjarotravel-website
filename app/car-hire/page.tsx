'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Car Hire & Airport Transfers',
    heroSubtitle:
      'Travel comfortably across Tanzania with our modern fleet of well-maintained vehicles and professional drivers.',
    fleetTitle: 'Our Fleet',
    vehicleDescription:
      'Perfect for safaris, airport transfers, business trips, family vacations, and private tours across Tanzania.',
    bookVehicle: 'Book This Vehicle',
    vehicles: [
      ['Safari Land Cruiser', '/images/cruiser.jpg'],
      ['Toyota Alphard', '/images/alphard-two.jpg'],
      ['Toyota Hiace', '/images/min-one.jpeg'],
      ['Toyota Coaster Bus', '/images/coaster-one.jpg'],
      ['Luxury SUV', '/images/luxury-two.jpg'],
      ['Airport Transfer', '/images/alphard.jpg'],
    ],
    whyLabel: 'Why Choose Us',
    whyTitle: 'Reliable Transportation Across Tanzania',
    features: [
      ['Professional Drivers', 'Experienced, licensed and friendly local drivers.'],
      ['Well Maintained Fleet', 'Clean, comfortable and regularly serviced vehicles.'],
      ['Airport Transfers', 'Reliable pick-up and drop-off services across Tanzania.'],
      ['24/7 Support', 'Our team is available whenever you need assistance.'],
    ],
    ctaTitle: 'Need a Vehicle for Your Trip?',
    ctaText:
      'Contact us today for a personalized quotation and let us help you choose the perfect vehicle for your journey.',
    quote: 'Request Quote',
    whatsapp: 'Chat on WhatsApp',
  },

  de: {
    heroTitle: 'Autovermietung & Flughafentransfers',
    heroSubtitle:
      'Reisen Sie bequem durch Tansania mit unserer modernen Flotte gut gewarteter Fahrzeuge und professionellen Fahrern.',
    fleetTitle: 'Unsere Fahrzeugflotte',
    vehicleDescription:
      'Ideal für Safaris, Flughafentransfers, Geschäftsreisen, Familienurlaube und private Touren in ganz Tansania.',
    bookVehicle: 'Dieses Fahrzeug buchen',
    vehicles: [
      ['Safari Land Cruiser', '/images/cruiser.jpg'],
      ['Toyota Alphard', '/images/alphard-two.jpg'],
      ['Toyota Hiace', '/images/min-one.jpeg'],
      ['Toyota Coaster Bus', '/images/coaster-one.jpg'],
      ['Luxury SUV', '/images/luxury-two.jpg'],
      ['Flughafentransfer', '/images/alphard.jpg'],
    ],
    whyLabel: 'Warum uns wählen',
    whyTitle: 'Zuverlässiger Transport in ganz Tansania',
    features: [
      ['Professionelle Fahrer', 'Erfahrene, lizenzierte und freundliche lokale Fahrer.'],
      ['Gut gewartete Flotte', 'Saubere, komfortable und regelmäßig gewartete Fahrzeuge.'],
      ['Flughafentransfers', 'Zuverlässige Abhol- und Bringservices in ganz Tansania.'],
      ['24/7 Unterstützung', 'Unser Team steht Ihnen jederzeit zur Verfügung.'],
    ],
    ctaTitle: 'Benötigen Sie ein Fahrzeug für Ihre Reise?',
    ctaText:
      'Kontaktieren Sie uns noch heute für ein individuelles Angebot. Wir helfen Ihnen gerne, das perfekte Fahrzeug für Ihre Reise auszuwählen.',
    quote: 'Angebot anfragen',
    whatsapp: 'Über WhatsApp chatten',
  },

  fr: {
    heroTitle: 'Location de voitures & transferts aéroport',
    heroSubtitle:
      'Voyagez confortablement à travers la Tanzanie avec notre flotte moderne de véhicules bien entretenus et nos chauffeurs professionnels.',
    fleetTitle: 'Notre flotte',
    vehicleDescription:
      'Parfait pour les safaris, les transferts aéroport, les voyages d’affaires, les vacances en famille et les excursions privées à travers la Tanzanie.',
    bookVehicle: 'Réserver ce véhicule',
    vehicles: [
      ['Safari Land Cruiser', '/images/cruiser.jpg'],
      ['Toyota Alphard', '/images/alphard-two.jpg'],
      ['Toyota Hiace', '/images/min-one.jpeg'],
      ['Toyota Coaster Bus', '/images/coaster-one.jpg'],
      ['SUV de luxe', '/images/luxury-two.jpg'],
      ['Transfert aéroport', '/images/alphard.jpg'],
    ],
    whyLabel: 'Pourquoi nous choisir',
    whyTitle: 'Transport fiable à travers la Tanzanie',
    features: [
      ['Chauffeurs professionnels', 'Des chauffeurs locaux expérimentés, agréés et sympathiques.'],
      ['Flotte bien entretenue', 'Des véhicules propres, confortables et régulièrement entretenus.'],
      ['Transferts aéroport', 'Des services fiables de prise en charge et de dépose dans toute la Tanzanie.'],
      ['Assistance 24h/24 et 7j/7', 'Notre équipe est disponible chaque fois que vous avez besoin d’aide.'],
    ],
    ctaTitle: 'Besoin d’un véhicule pour votre voyage ?',
    ctaText:
      'Contactez-nous dès aujourd’hui pour obtenir un devis personnalisé et laissez-nous vous aider à choisir le véhicule idéal pour votre voyage.',
    quote: 'Demander un devis',
    whatsapp: 'Discuter sur WhatsApp',
  },

  es: {
    heroTitle: 'Alquiler de coches y traslados al aeropuerto',
    heroSubtitle:
      'Viaja cómodamente por Tanzania con nuestra moderna flota de vehículos bien mantenidos y conductores profesionales.',
    fleetTitle: 'Nuestra flota',
    vehicleDescription:
      'Perfecto para safaris, traslados al aeropuerto, viajes de negocios, vacaciones familiares y tours privados por Tanzania.',
    bookVehicle: 'Reservar este vehículo',
    vehicles: [
      ['Safari Land Cruiser', '/images/cruiser.jpg'],
      ['Toyota Alphard', '/images/alphard-two.jpg'],
      ['Toyota Hiace', '/images/min-one.jpeg'],
      ['Toyota Coaster Bus', '/images/coaster-one.jpg'],
      ['SUV de lujo', '/images/luxury-two.jpg'],
      ['Traslado al aeropuerto', '/images/alphard.jpg'],
    ],
    whyLabel: 'Por qué elegirnos',
    whyTitle: 'Transporte fiable por toda Tanzania',
    features: [
      ['Conductores profesionales', 'Conductores locales experimentados, con licencia y amables.'],
      ['Flota bien mantenida', 'Vehículos limpios, cómodos y revisados regularmente.'],
      ['Traslados al aeropuerto', 'Servicios fiables de recogida y traslado en toda Tanzania.'],
      ['Asistencia 24/7', 'Nuestro equipo está disponible siempre que necesites ayuda.'],
    ],
    ctaTitle: '¿Necesitas un vehículo para tu viaje?',
    ctaText:
      'Contáctanos hoy para obtener un presupuesto personalizado y permítenos ayudarte a elegir el vehículo perfecto para tu viaje.',
    quote: 'Solicitar presupuesto',
    whatsapp: 'Chatear por WhatsApp',
  },
};

export default function CarHire() {
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
        image="/images/car-one.jpg"
      />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">{t.fleetTitle}</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.vehicles.map(([name, image]) => (
              <div
                key={name}
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <img
                  src={image}
                  alt={name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-forest">
                    {name}
                  </h3>

                  <p className="mt-4 leading-7 text-black/70">
                    {t.vehicleDescription}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
                  >
                    {t.bookVehicle}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="font-bold uppercase tracking-widest text-gold">
            {t.whyLabel}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {t.whyTitle}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {t.features.map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl bg-cream p-6"
              >
                <h3 className="font-bold">{title}</h3>

                <p className="mt-3 text-black/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            {t.ctaTitle}
          </h2>

          <p className="mt-5 text-lg text-white/80">
            {t.ctaText}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gold px-8 py-4 font-bold text-white"
            >
              {t.quote}
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