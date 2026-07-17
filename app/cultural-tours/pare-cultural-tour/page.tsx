import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Visit traditional Pare villages',
  'Learn about local customs and family life',
  'Explore farms, forests, and mountain landscapes',
  'Meet local communities and guides',
  'Enjoy scenic views of the Pare Mountains',
];

export default function PareCulturalTourPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Pare Cultural Tour"
  subtitle="Explore the traditions, village life, farming, forests, and scenic landscapes of the Pare Mountains."
  image="/images/landcruiser.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Mountain Village and Cultural Experience
</p>

              <h2 className="mt-3 text-4xl font-bold">
  Discover Pare Culture and Mountain Life
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Visit traditional villages in the Pare Mountains and learn about local farming, family life, customs, and the history of the Pare people.
              </p>

               <p className="mt-4 leading-8 text-black/70">
               Enjoy scenic mountain landscapes, meet local communities, explore forests and farms, and experience the peaceful culture of northern Tanzania.
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