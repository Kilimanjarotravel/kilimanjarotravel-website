import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const packages = [
  {
    title: '2 Days Tarangire & Ngorongoro',
    image: '/images/lion.jpeg',
    description:
      'Discover Tarangire National Park and the famous Ngorongoro Crater on this unforgettable 2-day safari.',
    href: '/safari-packages/2-days-tarangire-ngorongoro',
    ready: true,
  },
  {
    title: '3 Days Serengeti & Ngorongoro',
    image: '/images/safari-vehicle.jpeg',
    description:
      'Experience the endless plains of Serengeti and the spectacular Ngorongoro Crater.',
    href: '/safari-packages/3-days-serengeti-ngorongoro',
    ready: true,
  },
  {
    title: '4 Days Tarangire, Serengeti & Ngorongoro',
    image: '/images/landcruiser.jpeg',
    description:
      'Explore Tanzania’s most famous northern parks on a 4-day safari adventure.',
    href: '/safari-packages/4-days-tarangire-serengeti-ngorongoro',
    ready: false,
  },
];

export default function SafariPackagesPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Tanzania Safari Packages"
        subtitle="Choose from our carefully designed safari packages across Northern Tanzania."
        image="/images/lion.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="overflow-hidden rounded-3xl bg-white shadow-xl"
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-forest">
                    {pkg.title}
                  </h2>

                  <p className="mt-4 text-black/70">
                    {pkg.description}
                  </p>

                  {pkg.ready ? (
                    <Link
                      href={pkg.href}
                      className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
                    >
                      View Itinerary
                    </Link>
                  ) : (
                    <span className="mt-6 inline-block rounded-full bg-gray-300 px-6 py-3 font-bold text-gray-700">
                      Coming Soon
                    </span>
                  )}
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