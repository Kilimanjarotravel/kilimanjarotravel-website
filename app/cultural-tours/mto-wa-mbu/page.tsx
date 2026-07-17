import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Explore the colorful local market',
  'Visit banana farms and village workshops',
  'Taste traditional Tanzanian food',
  'Meet local artists, farmers, and families',
  'Learn about the diverse communities of Mto wa Mbu',
];

export default function MtoWaMbuCulturalTourPage() {

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Mto wa Mbu Cultural Tour"
  subtitle="Explore local markets, farms, art, food, and the diverse communities of Mto wa Mbu near Lake Manyara."
  image="/images/zanzibar.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Village, Market and Local Food Experience
</p>

              <h2 className="mt-3 text-4xl font-bold">
  Discover the Diverse Culture of Mto wa Mbu
</h2>

              <p className="mt-6 leading-8 text-black/70">
               Explore the lively village of Mto wa Mbu near Lake Manyara and discover its colorful markets, farms, local art, traditional food, and diverse communities from across Tanzania.
              </p>

               <p className="mt-4 leading-8 text-black/70">
  Walk with a local guide, visit banana farms and workshops, taste local dishes, meet artists and farmers, and experience everyday village life in one of northern Tanzania’s most culturally diverse towns.
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