import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import {
  Car,
  Mountain,
  Palmtree,
  PawPrint,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Kilimanjaro Travel Safaris',
    icon: PawPrint,
    href: '/safaris',
    text: 'Serengeti, Ngorongoro, Tarangire, Lake Manyara and unforgettable Big Five experiences.',
  },
  {
    title: 'Kilimanjaro Travel Treks',
    icon: Mountain,
    href: '/kilimanjaro-treks',
    text: 'Climb Mount Kilimanjaro with experienced guides, porters, cooks and full mountain support.',
  },
  {
    title: 'Kilimanjaro Travel Zanzibar',
    icon: Palmtree,
    href: '/zanzibar',
    text: 'Beach holidays, Stone Town, spice tours, snorkeling, dolphin tours and honeymoon escapes.',
  },
  {
    title: 'Kilimanjaro Travel Car Hire',
    icon: Car,
    href: '/car-hire',
    text: 'Safari Land Cruisers, Hiace, Coaster, airport transfers and professional private drivers.',
  },
];

const experiences = [
  [
    '3 Days Serengeti & Ngorongoro',
    '/images/lion.jpeg',
    '/safari-packages/3-days-serengeti-ngorongoro',
  ],
  [
    '5 Days Northern Tanzania Safari',
    '/images/landcruiser.jpeg',
    '/safari-packages/5-days-northern-circuit',
  ],
  [
    '7 Days Great Migration Safari',
    '/images/safari-vehicle.jpeg',
    '/safari-packages/7-days-northern-circuit',
  ],
  [
    '6 Days Machame Route',
    '/images/fleet.jpeg',
    '/kilimanjaro-treks',
  ],
  [
    '8 Days Lemosho Route',
    '/images/landcruiser.jpeg',
    '/kilimanjaro-treks',
  ],
  [
    '5 Days Zanzibar Holiday',
    '/images/zanzibar.jpeg',
    '/zanzibar',
  ],
];

export default function Home() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <section className="relative min-h-screen bg-[url('/images/landcruiser.jpeg')] bg-cover bg-center">
        <div className="hero-gradient absolute inset-0" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 text-white">
          <p className="font-bold tracking-[.35em] text-gold">
            TANZANIA SAFARI SPECIALISTS
          </p>

          <h1 className="mt-5 max-w-4xl font-display text-6xl font-bold leading-tight md:text-8xl">
            See More.
            <br />
            Feel More.
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-white/90">
            Authentic safaris, Kilimanjaro treks, Zanzibar holidays, cultural
            tours and professional car hire from Arusha, Tanzania.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link className="btn-gold" href="/contact">
              Request a Quote
            </Link>
            <Link className="btn-outline" href="/safaris">
              Explore Safaris
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-bold text-gold">ABOUT US</p>
            <h2 className="section-title mt-3">
              Welcome to Kilimanjaro Travel
            </h2>
            <p className="mt-6 text-lg leading-8">
              Kilimanjaro Travel is the travel brand of Kilimanjaro Travel Car
              Hire Limited, a TALA licensed tour operator based in Arusha,
              Tanzania. With more than 10 years of experience, we create
              tailor-made adventures for travelers from around the world.
            </p>
          </div>

          <div className="card overflow-hidden">
            <img
              src="/images/safari-vehicle.jpeg"
              className="h-[430px] w-full object-cover"
              alt="Kilimanjaro Travel safari vehicle"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center font-bold text-gold">OUR SERVICES</p>
          <h2 className="section-title mt-3 text-center">
            One Brand. Four Exceptional Experiences.
          </h2>

          <div className="mt-12 grid gap-7 md:grid-cols-4">
            {services.map((service) => (
              <Link
                href={service.href}
                key={service.title}
                className="card p-7 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <service.icon className="h-11 w-11 text-gold" />
                <h3 className="mt-5 text-xl font-bold text-forest">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-black/70">{service.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div className="card overflow-hidden">
            <img
              src="/images/lion.jpeg"
              className="h-[520px] w-full object-cover"
              alt="Lions in Tanzania"
            />
          </div>

          <div>
            <p className="font-bold text-gold">WHY CHOOSE US</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Travel with Confidence
            </h2>

            <div className="mt-8 grid gap-4">
              {[
                ['10+ Years Experience', Users],
                ['TALA Licensed Tour Operator', ShieldCheck],
                ['Professional Guides & Safari Vehicles', Car],
                ['Tailor-made Itineraries', Star],
              ].map(([text, Icon]: any) => (
                <div
                  key={text}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-4"
                >
                  <Icon className="text-gold" />
                  <span className="font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="section-title">Popular Experiences</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {experiences.map(([title, image, href]) => (
  <Link
    href={href}
    key={title}
    className="block overflow-hidden rounded-3xl bg-cream shadow..."
  >
    <img
      src={image}
      alt={title}
      className="h-56 w-full object-cover"
    />

    <div>
      <h3>{title}</h3>
    </div>
  </Link>
))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
            <h2 className="text-3xl font-bold text-forest">
              ⭐ Trusted by Travelers Worldwide
            </h2>

            <p className="mt-4 text-lg text-gray-700">
              Read genuine reviews from our happy guests on TripAdvisor and
              discover why travelers choose Kilimanjaro Travel.
            </p>

            <a
              href="https://www.tripadvisor.com/Attraction_Review-g297913-d27540848-Reviews-Kilimanjaro_Travel-Arusha_Arusha_Region.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-semibold text-white"
            >
              ⭐ Read Our TripAdvisor Reviews
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}