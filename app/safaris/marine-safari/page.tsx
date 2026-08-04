import PageHero from '@/components/PageHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import Link from 'next/link';

export default function MarineSafariPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

     <PageHero
  title="Marine Safari, Snorkeling & Diving"
  subtitle="Discover coral reefs, tropical fish, sandbanks, boat trips, scuba diving, and relaxing beach experiences along Tanzania’s beautiful coastline."
  image="/images/marine-two.jpg"
/>

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
              Request a Marine Safari
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-forest py-20 text-white">
  <div className="mx-auto max-w-4xl px-6 text-center">
    <h2 className="text-4xl font-bold">
      Ready for Your Marine Adventure?
    </h2>

    <p className="mt-6 text-lg leading-8 text-white/80">
      Share your travel dates, preferred coastal destination, group size,
      snorkeling or diving experience, and whether you prefer a private or
      shared trip. Our team will create a personalized marine safari and
      quotation for you.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link
        href="/booking"
        className="rounded-full bg-gold px-8 py-4 font-bold text-white"
      >
        Request Your Marine Safari
      </Link>

      <a
        href="https://wa.me/255759273339"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white px-8 py-4 font-bold text-white"
      >
        Chat on WhatsApp
      </a>
    </div>
  </div>
</section>
      <Footer />
    </main>
  );
}