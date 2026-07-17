import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Trek Tanzania’s second-highest mountain',
  'Enjoy views of Mount Kilimanjaro',
  'Walk through forests and volcanic landscapes',
  'See wildlife on the lower slopes',
  'Excellent preparation for Kilimanjaro',
];

export default function MountMeruPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Mount Meru Trek"
  subtitle="Climb Tanzania's second-highest mountain through beautiful forests, wildlife-rich landscapes, and dramatic summit views."
  image="/images/fleet.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Trekking and Wildlife Adventure
</p>

              <h2 className="mt-3 text-4xl font-bold">
  Mount Meru Trekking Adventure
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Climb Mount Meru, Tanzania's second-highest mountain, on a scenic trek through forests, open moorlands, and dramatic volcanic landscapes. The route offers excellent views of Mount Kilimanjaro and opportunities to see wildlife along the lower slopes.
              </p>

               <p className="mt-4 leading-8 text-black/70">
              Mount Meru is ideal for trekkers looking for a quieter mountain experience or preparing for a Kilimanjaro climb. The trek combines natural beauty, adventure, and rewarding summit views.
              </p>
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
                className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white"
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