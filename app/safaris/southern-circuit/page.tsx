import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Explore Nyerere National Park (Selous)',
  'Visit Ruaha National Park',
  'Game drives in Mikumi National Park',
  'Boat safari on the Rufiji River',
  'Walking safaris with experienced guides',
];

export default function SouthernCircuitPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Southern Circuit Safari"
  subtitle="Explore Tanzania's wild and less-crowded southern parks, including Nyerere National Park, Mikumi, Ruaha, and Udzungwa Mountains."
  image="/images/safari-vehicle.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                Wild & Untouched Tanzania
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Southern Tanzania Safari Adventure
              </h2>

              <p className="mt-6 leading-8 text-black/70">
                Explore Tanzania’s spectacular Southern Circuit, home to vast wilderness areas, fewer crowds, and exceptional wildlife. Visit iconic destinations such as Nyerere National Park, Ruaha National Park, Mikumi National Park, and the Udzungwa Mountains for an unforgettable safari experience.
              </p>

              <p className="mt-4 leading-8 text-black/70">
                The Southern Circuit offers authentic safari experiences with boat safaris, walking safaris, game drives, and incredible biodiversity. It is perfect for travelers seeking a more remote and exclusive adventure.
              </p>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h3 className="text-2xl font-bold">Safari Highlights</h3>

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
                Book This Safari
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}