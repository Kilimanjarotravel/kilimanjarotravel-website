import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Visit traditional Sambaa villages',
  'Learn about local customs and family life',
  'Explore farms, forests, and mountain landscapes',
  'Discover traditional medicine and local history',
  'Enjoy scenic views of the Usambara Mountains',
];

export default function SambaaCulturalTourPage() {

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Sambaa Cultural Tour"
  subtitle="Discover the traditions, village life, farming, forests, and scenic landscapes of the Usambara Mountains."
  image="/images/lion.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Usambara Village and Cultural Experience
</p>

              <h2 className="mt-3 text-4xl font-bold">
  Discover Sambaa Culture in the Usambara Mountains
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Visit Sambaa villages in the Usambara Mountains and learn about local traditions, farming, family life, traditional medicine, and the history of the Sambaa people.
              </p>

               <p className="mt-4 leading-8 text-black/70">
               Meet local communities, explore farms and forests, enjoy scenic mountain views, and experience the peaceful lifestyle and warm hospitality of the Usambara region.
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