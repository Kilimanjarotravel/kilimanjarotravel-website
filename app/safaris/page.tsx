import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const packages = [
  [
  'Luxury Safaris',
  '/images/luxury-safarii.jpg',
  '/safaris/luxury-safaris',
],
  [
  'Mid-range Safaris',
  '/images/mid-range.jpg',
  '/safaris/mid-range-safaris',
],
  [
  'Budget Camping Safaris',
  '/images/budget-safari.jpg',
  '/safaris/budget-camping-safaris',
],
  [
  'Family Safaris',
  '/images/family-safari.jpg',
  '/safaris/family-safaris',
],
  [
  'Honeymoon Safaris',
  '/images/honeymoon-safari.jpg',
  '/safaris/honeymoon'
],
  [
  'Mara River Crossing Safari',
  '/images/mara-safari.jpeg',
  '/safaris/mara-river-crossing',
],
[
  'Ndutu Migration Safari',
  '/images/ndutu-safari.jpg',
  '/safaris/ndutu-migration'
],
[
  'Southern Circuit Safari',
  '/images/southern.jpg',
  '/safaris/southern-circuit'
],
[
  'Mkomazi Rhino Safari',
  '/images/mkomazi-safari.jpg',
  '/safaris/mkomazi-rhino-safari',
],
];

export default function Safaris() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Tanzania Safari Experiences"
  subtitle="Discover unforgettable wildlife safaris, mountain adventures, cultural tours, waterfalls, hot springs, and beach holidays across Tanzania."
  image="/images/lion.jpeg"
/>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Special Safaris</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map(([title, image, href]) => (
              <div
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                key={title}
              >
                <img
  src={image}
  alt={title}
  className="h-64 w-full object-cover object-center"
/>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-forest">{title}</h3>

                  <p className="mt-4 leading-7 text-black/70">
                    Tailor-made Tanzania safari experience with professional
                    guides and comfortable safari vehicles.
                  </p>

                  <Link
                    href={href || '/booking'}
                    className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
                  >
                    Book This Safari
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