import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Stay in romantic beachfront accommodation',
  'Relax on white-sand beaches',
  'Enjoy tropical sunsets and private moments',
  'Experience romantic dinners and island excursions',
  'Perfect for newlyweds and couples',
];

export default function ZanzibarHoneymoonPackagePage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Zanzibar Honeymoon Package"
  subtitle="Celebrate your honeymoon with romantic beaches, private experiences, tropical sunsets, and unforgettable island moments."
  image="/images/zanzibar.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Romantic Island Experience
</p>

                        <h2 className="mt-3 text-4xl font-bold">
  Celebrate Your Honeymoon in Zanzibar
</h2>

              <p className="mt-6 leading-8 text-black/70">
               Celebrate your honeymoon on the beautiful island of Zanzibar with white-sand beaches, turquoise waters, romantic sunsets, and carefully selected beachfront accommodation.
              </p>

               <p className="mt-4 leading-8 text-black/70">
               Enjoy private moments, relaxing beach days, romantic dinners, island excursions, and personalized experiences designed to create unforgettable memories together.
              </p>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h3 className="text-2xl font-bold">Honeymoon Highlights</h3>

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
                Book This Honeymoon
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}