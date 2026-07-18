import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Stay at comfortable public or private campsites',
  'Travel with professional safari guides',
  'Enjoy excellent wildlife viewing at good value',
  'Experience Tanzania close to nature',
  'Ideal for adventurous and budget-conscious travelers',
];

export default function BudgetCampingSafarisPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Budget Camping Safaris"
  subtitle="Explore Tanzania’s national parks on an affordable camping safari with professional guides, reliable vehicles, and unforgettable wildlife experiences."
  image="/images/safari-vehicle.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                Affordable Camping Safari Experience
              </p>

              <h2 className="mt-3 text-4xl font-bold">
  Budget Camping Tanzania Safari
</h2>

              <p className="mt-6 leading-8 text-black/70">
  Enjoy an affordable Tanzania camping safari with professional guides, reliable safari vehicles, and comfortable campsites close to nature.
</p>

              <p className="mt-4 leading-8 text-black/70">
  This safari style is ideal for adventurous travelers who want excellent wildlife viewing, authentic outdoor experiences, and good value.
</p>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h3 className="text-2xl font-bold">Budget Camping Highlights</h3>

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
                Book This Camping Safari
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}