import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Longest Kilimanjaro route with gradual ascent',
  'Excellent acclimatization profile',
  'Remote northern trails with fewer trekkers',
  'Beautiful views across the Shira Plateau',
  'High summit success potential',
];

export default function NorthernCircuitRoutePage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Northern Circuit Route"
  subtitle="Climb Kilimanjaro on the longest and most scenic route, with excellent acclimatization and remote northern mountain landscapes."
  image="/images/zanzibar.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                Longest and Most Scenic Kilimanjaro Route
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Northern Circuit Kilimanjaro Climb
              </h2>

              <p className="mt-6 leading-8 text-black/70">
  The Northern Circuit Route is Kilimanjaro&apos;s longest route, offering excellent acclimatization, remote trails, and wide views across the mountain&apos;s northern slopes.
</p>

              <p className="mt-4 leading-8 text-black/70">
  The route crosses rainforest, the Shira Plateau, quiet northern terrain, alpine desert, and high mountain landscapes before the summit attempt at Uhuru Peak. It is ideal for climbers who prefer a gradual ascent and fewer crowds.
</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-cream p-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-gold">
                    Duration
                  </p>
                  <p className="mt-2 text-xl font-bold">8–9 Days</p>
                </div>

                <div className="rounded-2xl bg-cream p-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-gold">
                    Difficulty
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    Moderate to Challenging
                  </p>
                </div>
              </div>
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
                className="mt-8 inline-block rounded-full bg-yellow-500 px-8 py-4 font-bold text-white transition hover:bg-yellow-600"
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