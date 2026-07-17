import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Snorkel in clear turquoise waters',
  'See colorful tropical fish and coral reefs',
  'Enjoy a scenic boat trip near Mnemba Island',
  'Use provided snorkeling equipment',
  'Relax and swim in beautiful ocean surroundings',
];

export default function MnembaSnorkelingPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Mnemba Island Snorkeling"
  subtitle="Explore clear turquoise waters, colorful coral reefs, and tropical marine life near Mnemba Island."
  image="/images/zanzibar.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Snorkeling and Marine Adventure
</p>

                        <h2 className="mt-3 text-4xl font-bold">
  Explore the Waters Around Mnemba Island
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Take a boat trip to the waters near Mnemba Island and enjoy snorkeling in clear turquoise water filled with colorful fish, coral reefs, and tropical marine life.
              </p>

               <p className="mt-4 leading-8 text-black/70">
                The tour is suitable for beginners and experienced swimmers, with local guides providing snorkeling equipment and safety support throughout the experience.
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