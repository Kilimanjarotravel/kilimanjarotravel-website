import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const trips = [
  ['Zanzibar Beach Holiday', '/images/zanzibar.jpeg'],
  ['Stone Town & Spice Tour', '/images/zanzibar.jpeg'],
  ['Dolphin Tour', '/images/zanzibar.jpeg'],
  ['Mnemba Snorkeling', '/images/zanzibar.jpeg'],
  ['Spice Farm Tour', '/images/zanzibar.jpeg'],
  ['Honeymoon Package', '/images/zanzibar.jpeg'],
];

export default function Zanzibar() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Zanzibar Holidays"
        subtitle="White-sand beaches, turquoise waters, Stone Town and romantic island escapes."
        image="/images/zanzibar.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Beach & Island Experiences</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {trips.map(([title, image]) => (
              <div
                key={title}
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <img src={image} alt={title} className="h-56 w-full object-cover" />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-forest">{title}</h3>

                  <p className="mt-4 leading-7 text-black/70">
                    Enjoy Zanzibar beaches, culture, ocean adventures and romantic island experiences.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
                  >
                    Book This Tour
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}