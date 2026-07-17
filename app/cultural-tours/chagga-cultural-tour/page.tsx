import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Visit a traditional Chagga village',
  'Learn about local customs and family life',
  'Explore banana and coffee farms',
  'Taste local food and fresh coffee',
  'Discover Chagga history around Kilimanjaro',
];

export default function ChaggaCulturalTourPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Chagga Cultural Tour"
  subtitle="Discover Chagga traditions, village life, local food, coffee culture, and the heritage of communities living around Mount Kilimanjaro."
  image="/images/fleet.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Village, Heritage and Coffee Experience
</p>

              <h2 className="mt-3 text-4xl font-bold">
  Discover Chagga Culture Around Kilimanjaro
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Visit a Chagga village on the slopes of Mount Kilimanjaro and learn about traditional homes, farming, local food, family life, and the history of the Chagga people.
              </p>

               <p className="mt-4 leading-8 text-black/70">
               Meet local families, explore banana and coffee farms, discover traditional customs, and enjoy an authentic cultural experience in the fertile highlands around Kilimanjaro.
              </p>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h3 className="text-2xl font-bold">Cultural Highlights</h3>

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
                Book This Cultural Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}