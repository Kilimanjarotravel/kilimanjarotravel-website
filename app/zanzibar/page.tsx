import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const trips = [
  [
    'Zanzibar Beach Holiday',
    '/images/zanzibar-beach.jpg',
    '/zanzibar/beach-holiday',
    'Relax on white-sand beaches, swim in turquoise waters, and enjoy a peaceful tropical island escape.',
  ],
  [
    'Stone Town & Spice Tour',
    '/images/stone-town.jpg',
    '/zanzibar/stone-town-spice-tour',
    'Discover historic Stone Town and experience the aromas, traditions, and flavors of Zanzibar’s famous spice farms.',
  ],
  [
    'Dolphin Tour',
    '/images/dolphin-tour.jpg',
    '/zanzibar/dolphin-tour',
    'Enjoy a memorable ocean adventure with the chance to see dolphins and explore the beautiful waters around Zanzibar.',
  ],
  [
    'Mnemba Snorkeling',
    '/images/mnemba-snorkeling.jpg',
    '/zanzibar/mnemba-snorkeling',
    'Explore crystal-clear waters, colorful coral reefs, and tropical marine life around Mnemba Island.',
  ],
  [
    'Spice Farm Tour',
    '/images/spice-farm.jpg',
    '/zanzibar/spice-farm-tour',
    'Walk through a traditional spice farm and discover the plants, flavors, and cultural heritage that make Zanzibar famous.',
  ],
  [
    'Honeymoon Package',
    '/images/zanzibar-honeymoon.jpg',
    '/zanzibar/honeymoon-package',
    'Enjoy a romantic Zanzibar escape with beautiful beaches, private experiences, and unforgettable moments for couples.',
  ],
];
export default function ZanzibarPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Zanzibar Holidays"
  subtitle="White-sand beaches, turquoise waters, Stone Town, ocean adventures and romantic island escapes."
  image="/images/zanzibar-hero.jpg"
/>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Beach & Island Experiences</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
  {trips.map(([title, image, href, description]) => (
    <div
      key={title}
      className="overflow-hidden rounded-3xl bg-white"
    >
                <img src={image} alt={title} className="h-56 w-full object-cover" />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-forest">{title}</h3>

                  <p className="mt-4 leading-7 text-black/70">
  {description}
</p>
                  <Link
  href={href}
  className="mt-6 inline-block rounded-full bg-yellow-500 px-6 py-3 font-bold text-white transition hover:bg-yellow-600"
>
  Explore Experience
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-forest py-20 text-white">
  <div className="mx-auto max-w-4xl px-6 text-center">
    <p className="font-bold uppercase tracking-widest text-gold">
      Plan Your Zanzibar Escape
    </p>

    <h2 className="mt-3 text-4xl font-bold md:text-5xl">
      Ready to Experience Zanzibar?
    </h2>

    <p className="mt-5 text-lg leading-8 text-white/80">
      Tell us your preferred travel dates, number of travelers, and the
      experiences you would like to enjoy. Our team will help you plan a
      personalized Zanzibar holiday.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link
        href="/contact"
        className="rounded-full bg-gold px-8 py-4 font-bold text-white"
      >
        Request a Quote
      </Link>

      <a
        href="https://wa.me/255759273339"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white px-8 py-4 font-bold text-white"
      >
        Chat on WhatsApp
      </a>
    </div>
  </div>
</section>

      <Footer />
    </main>
  );
}