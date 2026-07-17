import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Meet Hadzabe hunter-gatherer families',
  'Learn about traditional survival and hunting skills',
  'Visit a Datoga community and local artisans',
  'Discover traditional metalworking and crafts',
  'Experience the culture and landscapes of Lake Eyasi',
];

export default function HadzabeDatogaCulturalTourPage() {

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Hadzabe & Datoga Cultural Tour"
  subtitle="Meet the Hadzabe hunter-gatherers and Datoga artisans near Lake Eyasi, and discover their traditional lifestyles and skills."
  image="/images/landcruiser.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Lake Eyasi Cultural Experience
</p>

              <h2 className="mt-3 text-4xl font-bold">
  Meet the Hadzabe and Datoga Communities
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Visit the Lake Eyasi region and meet the Hadzabe hunter-gatherers, one of Tanzania's oldest indigenous communities. Learn about their traditional survival skills, hunting methods, language, and close relationship with nature.
              </p>

               <p className="mt-4 leading-8 text-black/70">
               Continue to a Datoga community to discover traditional metalworking, crafts, livestock keeping, and family life. This respectful cultural tour offers a deeper understanding of two unique communities.
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