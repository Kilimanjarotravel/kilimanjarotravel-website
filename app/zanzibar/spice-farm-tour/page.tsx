import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Explore a traditional Zanzibar spice farm',
  'See cloves, cinnamon, vanilla, and nutmeg',
  'Taste fresh tropical fruits and spices',
  'Learn about traditional farming and local uses',
  'Enjoy a guided plantation walk',
];

export default function SpiceFarmTourPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Zanzibar Spice Farm Tour"
  subtitle="Discover Zanzibar’s famous spices, tropical fruits, and traditional farming during a guided plantation visit."
  image="/images/zanzibar.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Spice and Plantation Experience
</p>

                        <h2 className="mt-3 text-4xl font-bold">
  Discover Zanzibar’s Famous Spices
</h2>

              <p className="mt-6 leading-8 text-black/70">
               Visit a traditional spice farm and discover how cloves, cinnamon, vanilla, nutmeg, cardamom, and tropical fruits are grown across Zanzibar.
              </p>

               <p className="mt-4 leading-8 text-black/70">
               Walk through the plantation with a local guide, smell and taste fresh spices and fruits, learn about their everyday uses, and enjoy an authentic Spice Island experience.
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