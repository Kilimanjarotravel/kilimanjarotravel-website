import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Enjoy a scenic boat trip along Zanzibar’s coast',
  'Search for dolphins in their natural environment',
  'Learn from experienced local guides',
  'Enjoy beautiful ocean and coastal views',
  'Combine the tour with swimming or snorkeling',
];

export default function DolphinTourPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Zanzibar Dolphin Tour"
  subtitle="Enjoy a boat trip along Zanzibar’s coast and search for dolphins in their natural environment."
  image="/images/zanzibar.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Ocean and Wildlife Experience
</p>

                        <h2 className="mt-3 text-4xl font-bold">
  Search for Dolphins Along Zanzibar’s Coast
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Take a scenic boat trip along Zanzibar’s coast and search for dolphins in their natural environment while enjoying beautiful ocean views.
              </p>

               <p className="mt-4 leading-8 text-black/70">
                The tour is led by experienced local guides and focuses on respectful wildlife viewing. Dolphin sightings depend on natural conditions and cannot be guaranteed.
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