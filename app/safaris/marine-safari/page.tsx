import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import Link from 'next/link';

export default function MarineSafariPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <section className="relative min-h-[340px] bg-[url('/images/marine-safari.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto flex min-h-[340px] max-w-7xl items-center px-6 pt-24 text-white">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.3em] text-gold">
              Special Safari
            </p>

            <h1 className="mt-4 text-3xl font-bold md:text-5xl">
              Marine Safari, Snorkeling & Diving
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/90">
  Discover the Indian Ocean through snorkeling, scuba diving, coral reefs,
  tropical fish, sandbanks, boat trips, and relaxing beach experiences along
  Tanzania’s beautiful coastline.
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
              Indian Ocean Adventure
            </p>

            <h2 className="mt-3 text-4xl font-bold text-forest">
              Coral Reefs, Tropical Fish and Island Life
            </h2>

            <p className="mt-6 leading-8 text-gray-700">
              This marine experience is perfect for travelers who want to enjoy
              the ocean, explore coral reefs, see colorful tropical fish, and
              relax on beautiful beaches and sandbanks.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              The trip can include snorkeling equipment, a local boat, an
              experienced guide, seafood lunch, fresh fruit, beach time, and
              visits to nearby islands or coastal villages.
            </p>
          </div>

          <div className="rounded-3xl bg-cream p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-forest">
              Safari Highlights
            </h3>

            <ul className="mt-6 space-y-4 text-gray-700">
              <li>✓ Snorkeling among tropical fish</li>
              <li>✓ Coral reef exploration</li>
              <li>✓ Sandbank and beach relaxation</li>
              <li>✓ Traditional boat experience</li>
              <li>✓ Seafood lunch and fresh fruit</li>
              <li>✓ Private or shared trip options</li>
              <li>✓ Scuba diving with professional instructors</li>
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