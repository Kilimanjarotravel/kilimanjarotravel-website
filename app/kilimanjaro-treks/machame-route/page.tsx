import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Scenic route with varied landscapes',
  'Good acclimatization profile',
  'Rainforest, moorland and alpine desert',
  'Experienced mountain guides and support crew',
  'Rewarding summit attempt at Uhuru Peak',
];

export default function MachameRoutePage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Machame Route"
        subtitle="Climb Kilimanjaro via the scenic Machame Route, known for beautiful landscapes, strong acclimatization, and rewarding summit views."
        image="/images/landcruiser.jpeg"
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                Scenic Kilimanjaro Trek
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Machame Route Kilimanjaro Climb
              </h2>

              <p className="mt-6 leading-8 text-black/70">
                The Machame Route is one of Kilimanjaro&apos;s most popular
                climbing routes, offering beautiful scenery, varied landscapes,
                and a good acclimatization profile.
              </p>

              <p className="mt-4 leading-8 text-black/70">
                The trek passes through rainforest, moorland, alpine desert,
                and high mountain terrain before reaching Uhuru Peak. It is
                ideal for climbers looking for a scenic and challenging
                adventure.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-cream p-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-gold">
                    Duration
                  </p>
                  <p className="mt-2 text-xl font-bold">6–7 Days</p>
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