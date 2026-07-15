import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const packages = [
  ['Luxury Safaris', '/images/lion.jpeg'],
  ['Mid-range Safaris', '/images/landcruiser.jpeg'],
  ['Budget Camping Safaris', '/images/safari-vehicle.jpeg'],
  ['Family Safaris', '/images/fleet.jpeg'],
  ['Honeymoon Safaris', '/images/zanzibar.jpeg'],
  ['Great Migration Safaris', '/images/lion.jpeg'],
];

export default function Safaris() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Tanzania Wildlife Safaris"
        subtitle="Discover Serengeti, Ngorongoro, Tarangire, Lake Manyara and the Big Five."
        image="/images/lion.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Safari Packages</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map(([title, image]) => (
              <div
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                key={title}
              >
                <img
                  src={image}
                  alt={title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-forest">{title}</h3>

                  <p className="mt-4 leading-7 text-black/70">
                    Tailor-made Tanzania safari experience with professional
                    guides and comfortable safari vehicles.
                  </p>

                  <Link
                    href="/booking"
                    className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
                  >
                    Book This Safari
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