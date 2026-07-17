import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Visit the dramatic shores of Lake Natron',
  'See flamingos and unique birdlife',
  'Explore Maasai culture and local villages',
  'Hike near Ol Doinyo Lengai volcano',
  'Enjoy remote landscapes and scenic views',
];

export default function LakeNatronOlDoinyoLengaiPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Lake Natron & Ol Doinyo Lengai Adventure"
  subtitle="Discover the dramatic landscapes of Lake Natron, flamingo habitats, Maasai culture, and the active volcanic slopes of Ol Doinyo Lengai."
  image="/images/landcruiser.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Volcano, Lake and Cultural Adventure
</p>

              <h2 className="mt-3 text-4xl font-bold">
  Lake Natron & Ol Doinyo Lengai Adventure
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Explore the striking landscapes of Lake Natron, famous for its flamingos, dramatic escarpments, and remote natural beauty. Continue toward Ol Doinyo Lengai, the sacred active volcano of the Maasai people.
              </p>

               <p className="mt-4 leading-8 text-black/70">
                This adventure combines hiking, wildlife, culture, and volcanic scenery. It is ideal for travelers looking for a remote and unforgettable experience away from the busiest safari routes.
              </p>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h3 className="text-2xl font-bold">Trek Highlights</h3>

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
                Book This Trek
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}