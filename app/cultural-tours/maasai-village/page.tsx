import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Meet members of the Maasai community',
  'Learn about traditional customs and daily life',
  'Experience Maasai songs and dances',
  'Visit traditional homes and livestock areas',
  'Support a community-based cultural experience',
];

export default function MaasaiVillagePage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Maasai Village Experience"
  subtitle="Meet the Maasai community, learn about traditional life, customs, dances, and their deep connection with nature."
  image="/images/lion.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Culture and Community Experience
</p>

              <h2 className="mt-3 text-4xl font-bold">
  Discover Maasai Culture and Traditions
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Visit a traditional Maasai village and learn about the community’s daily life, customs, clothing, livestock, and strong relationship with the surrounding environment.
              </p>

               <p className="mt-4 leading-8 text-black/70">
              Meet local families, enjoy traditional songs and dances, explore Maasai homes, and gain a respectful understanding of one of Tanzania’s best-known cultures.
              </p>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h3 className="text-2xl font-bold">Cultural Highlights</h3>

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
                Book This Cultural Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}