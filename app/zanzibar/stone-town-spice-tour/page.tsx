import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Explore the historic streets of Stone Town',
  'Visit colorful markets and local shops',
  'Discover Zanzibar’s cultural heritage',
  'Tour a working spice farm',
  'Taste tropical spices and seasonal fruits',
];

export default function StoneTownSpiceTourPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Stone Town & Spice Tour"
  subtitle="Explore historic Stone Town, vibrant local markets, and Zanzibar's famous spice farms."
  image="/images/zanzibar.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  History, Culture and Spice Experience
</p>

              <h2 className="mt-3 text-4xl font-bold">
  Discover Stone Town and Zanzibar’s Spices
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Walk through the narrow streets of historic Stone Town and discover old buildings, colorful markets, local shops, and the rich cultural heritage of Zanzibar.
              </p>

               <p className="mt-4 leading-8 text-black/70">
                Continue to a spice farm to see, smell, and taste tropical spices, fruits, and plants while learning why Zanzibar is known as the Spice Island.
              </p>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h3 className="text-2xl font-bold">Holiday Highlights</h3>

              <ul className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-bold text-gold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/booking"
                className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white"
              >
                Book This Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}