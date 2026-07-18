import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Stay in comfortable lodges and tented camps',
  'Travel in a reliable safari vehicle',
  'Enjoy professional guiding and wildlife viewing',
  'Receive good comfort at excellent value',
  'Ideal for couples, families, and small groups',
];

export default function MidRangeSafarisPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Mid-range Safaris"
  subtitle="Enjoy excellent wildlife experiences with comfortable lodges, reliable safari vehicles, professional guides, and good value."
  image="/images/landcruiser.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                Comfortable Safari Experience
              </p>

              <h2 className="mt-3 text-4xl font-bold">
  Mid-range Tanzania Safari Experience
</h2>

              <p className="mt-6 leading-8 text-black/70">
  Enjoy a well-planned Tanzania safari with comfortable lodges, reliable safari vehicles, professional guides, and excellent wildlife viewing.
</p>

              <p className="mt-4 leading-8 text-black/70">
  This safari style offers a strong balance between comfort, quality, and value, making it ideal for couples, families, and small groups.
</p>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h3 className="text-2xl font-bold">Mid-range Safari Highlights</h3>

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
                Book This Mid-range Safari
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}