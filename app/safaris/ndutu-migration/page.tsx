import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Witness the Great Migration across the Ndutu plains',
  'See wildebeest calves during the calving season',
  'Enjoy excellent predator sightings',
  'Explore southern Serengeti and the Ngorongoro Conservation Area',
];

export default function NdutuMigrationPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Ndutu Migration Safari"
  subtitle="Experience the Great Migration and calving season across the Ndutu plains of southern Serengeti."
  image="/images/lion.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                Seasonal Safari Experience
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Ndutu Great Migration and Calving Season
              </h2>

              <p className="mt-6 leading-8 text-black/70">
                Travel to the Ndutu plains in the southern Serengeti to witness the Great Migration during the calving season. Thousands of wildebeest gather in this area, creating excellent opportunities to see newborn calves and predators.
              </p>

              <p className="mt-4 leading-8 text-black/70">
                The Ndutu season is seasonal and wildlife movements depend on rainfall, but our experienced guides follow current migration patterns to give you the best possible safari experience.
              </p>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h3 className="text-2xl font-bold">Safari Highlights</h3>

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
                Book This Safari
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}