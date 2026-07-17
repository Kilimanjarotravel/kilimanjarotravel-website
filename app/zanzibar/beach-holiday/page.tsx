import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Relax on white-sand beaches',
  'Swim in warm turquoise waters',
  'Stay in carefully selected beach accommodation',
  'Enjoy fresh seafood and island hospitality',
  'Perfect after a safari or for a honeymoon',
];

export default function ZanzibarBeachHolidayPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Zanzibar Beach Holiday"
  subtitle="Relax on white-sand beaches, swim in turquoise waters, and enjoy a peaceful tropical escape in Zanzibar."
  image="/images/zanzibar.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Beach and Island Experience
</p>

              <h2 className="mt-3 text-4xl font-bold">
  Relax on the Beautiful Beaches of Zanzibar
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Enjoy a relaxing Zanzibar beach holiday with white-sand beaches, warm turquoise waters, tropical sunshine, and carefully selected beachfront accommodation.
              </p>

               <p className="mt-4 leading-8 text-black/70">
                Spend your days swimming, relaxing, enjoying fresh seafood, and exploring the island at your own pace. This beach holiday is perfect after a safari, for couples, families, and honeymoon travelers.
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
                Book This Holiday
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}