import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import Link from 'next/link';

export default function MkomaziRhinoSafariPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <section className="relative min-h-[340px] bg-[url('/images/rhino.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto flex min-h-[340px] max-w-7xl items-center px-6 pt-24 text-white">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.3em] text-gold">
              Special Safari
            </p>

            <h1 className="mt-4 text-3xl font-bold md:text-5xl">
              Mkomazi Rhino Safari
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/90">
              Discover Mkomazi National Park, home to rare black rhinos,
              African wild dogs, elephants, giraffes, zebras, and beautiful
              savannah landscapes near the Pare and Usambara Mountains.
            </p>

            <Link
              href="/booking"
              className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white"
            >
              Book This Safari
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-gold">
              Mkomazi National Park
            </p>

            <h2 className="mt-3 text-4xl font-bold text-forest">
              A Quiet Wildlife Experience
            </h2>

            <p className="mt-6 leading-8 text-gray-700">
              Mkomazi offers a peaceful safari away from the busiest northern
              parks. It is an excellent destination for travelers interested
              in conservation, wildlife photography, birdwatching, and
              beautiful mountain scenery.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              The safari can include a full-day game drive, a visit near the
              rhino sanctuary area, picnic lunch, professional guide, and a
              private safari vehicle.
            </p>
          </div>

          <div className="rounded-3xl bg-cream p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-forest">
              Safari Highlights
            </h3>

            <ul className="mt-6 space-y-4 text-gray-700">
              <li>✓ Black rhino conservation experience</li>
              <li>✓ African wild dogs</li>
              <li>✓ Elephants, giraffes and zebras</li>
              <li>✓ Birdwatching and photography</li>
              <li>✓ Private safari vehicle and guide</li>
              <li>✓ Day trip or overnight safari options</li>
            </ul>

            <Link
              href="/booking"
              className="mt-8 inline-block rounded-full bg-forest px-8 py-4 font-bold text-white"
            >
              Book This Safari
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}