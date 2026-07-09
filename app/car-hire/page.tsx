import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const vehicles = [
  ['Safari Land Cruiser', '/images/landcruiser.jpeg'],
  ['Toyota Alphard', '/images/fleet.jpeg'],
  ['Toyota Hiace', '/images/safari-vehicle.jpeg'],
  ['Toyota Coaster Bus', '/images/fleet.jpeg'],
  ['Luxury SUV', '/images/landcruiser.jpeg'],
  ['Airport Transfer', '/images/logo.jpeg'],
];

export default function CarHire() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Car Hire & Airport Transfers"
        subtitle="Reliable vehicles with professional drivers for every journey across Tanzania."
        image="/images/fleet.jpeg"
      />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Our Fleet</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {vehicles.map(([name, image]) => (
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
                    Comfortable, clean and well-maintained vehicles with
                    experienced professional drivers for safaris, airport
                    transfers and private tours across Tanzania.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
                  >
                    Book This Vehicle
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}