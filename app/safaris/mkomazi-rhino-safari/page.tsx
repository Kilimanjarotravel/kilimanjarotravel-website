import PageHero from '@/components/PageHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import Link from 'next/link';

export default function MkomaziRhinoSafariPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Mkomazi Rhino Safari"
  subtitle="Discover rare black rhinos, African wild dogs, elephants, birdlife, and the peaceful wilderness of Mkomazi National Park."
  image="/images/rhino.jpg"
/>

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
              Request a Rhino Safari
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-forest py-20 text-white">
  <div className="mx-auto max-w-4xl px-6 text-center">
    <h2 className="text-4xl font-bold">
      Ready for Your Mkomazi Rhino Safari?
    </h2>

    <p className="mt-6 text-lg leading-8 text-white/80">
      Tell us your travel dates, whether you prefer a day trip or overnight safari,
      your group size, and accommodation preferences. Our safari specialists will
      prepare a personalized Mkomazi Rhino Safari itinerary and quotation.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link
        href="/booking"
        className="rounded-full bg-gold px-8 py-4 font-bold text-white"
      >
        Request Your Rhino Safari
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