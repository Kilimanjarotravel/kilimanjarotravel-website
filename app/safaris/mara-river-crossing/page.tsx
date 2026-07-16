import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Witness wildebeest and zebras crossing the Mara River',
  'Explore the northern Serengeti',
  'Enjoy private game drives with a professional safari guide',
  'Stay in carefully selected lodges or tented camps',
];

export default function MaraRiverCrossingPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Mara River Crossing Safari"
        subtitle="Experience one of Africa’s most dramatic wildlife spectacles in the northern Serengeti."
        image="/images/lion.jpeg"
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                Seasonal Safari Experience
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Great Migration Mara River Crossing
              </h2>

              <p className="mt-6 leading-8 text-black/70">
                Travel to the northern Serengeti for a chance to witness large
                herds of wildebeest and zebras crossing the Mara River. This
                safari combines exciting wildlife viewing, beautiful scenery
                and comfortable accommodation.
              </p>

              <p className="mt-4 leading-8 text-black/70">
                River crossings are natural events and cannot be guaranteed,
                but our experienced guides will position you in the best areas
                according to current wildlife movements.
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