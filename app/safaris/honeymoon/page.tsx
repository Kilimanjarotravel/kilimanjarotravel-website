import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Luxury accommodation in romantic lodges',
  'Private game drives for couples',
  'Romantic bush breakfasts and candlelight dinners',
  'Sunset champagne experience',
  'Optional Zanzibar beach extension',
];

export default function HoneymoonSafariPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Luxury Honeymoon Safari in Tanzania"
  subtitle="Experience Tanzania's most romantic safari with luxury lodges, private game drives, candlelight dinners, and unforgettable wildlife adventures."
  image="/images/honeymoon-two.jpg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                Romantic Luxury Experience
              </p>

              <h2 className="mt-3 text-4xl font-bold">
  Luxury Honeymoon Safari in Tanzania
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Celebrate your honeymoon with an unforgettable luxury safari through Tanzania's most spectacular national parks. Stay in romantic lodges, enjoy private game drives, candlelight dinners under the stars, and create memories that will last a lifetime.
              </p>

              <p className="mt-4 leading-8 text-black/70">
                Our honeymoon safaris are carefully designed for couples seeking privacy, comfort, and adventure. You can also combine your safari with a relaxing beach holiday in Zanzibar for the perfect romantic escape.
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
  Request a Honeymoon Safari
</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-forest py-20 text-white">
  <div className="mx-auto max-w-4xl px-6 text-center">
    <h2 className="text-4xl font-bold">
      Ready for Your Honeymoon Safari?
    </h2>

    <p className="mt-6 text-lg leading-8 text-white/80">
      Share your travel dates, preferred national parks, accommodation style,
      special romantic experiences, and whether you would like to add a
      Zanzibar beach extension. Our safari specialists will create a private
      honeymoon itinerary and quotation for you.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link
        href="/booking"
        className="rounded-full bg-gold px-8 py-4 font-bold text-white"
      >
        Request Your Honeymoon Safari
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