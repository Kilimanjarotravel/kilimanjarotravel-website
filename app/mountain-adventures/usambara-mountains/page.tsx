import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  "Explore the beautiful Usambara Mountains",
"Visit traditional villages",
"Hike through lush forests and waterfalls",
"Enjoy breathtaking panoramic viewpoints",
];

export default function UsambaraMountainsPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Usambara Mountains Experience"
  subtitle="Discover lush forests, scenic viewpoints, local villages, waterfalls, and the peaceful beauty of Tanzania's Usambara Mountains."
  image="/images/fleet.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Mountain and Cultural Experience
</p>

              <h2 className="mt-3 text-4xl font-bold">
  Explore the Usambara Mountains
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Explore the lush forests, scenic viewpoints, waterfalls, and rich cultural heritage of the Usambara Mountains. This tour is perfect for nature lovers and hikers.
              </p>

              <p className="mt-4 leading-8 text-black/70">
                Enjoy guided hikes, village visits, bird watching, and breathtaking landscapes while experiencing one of Tanzania's most beautiful mountain regions.
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