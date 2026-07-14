import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    time: '09:00',
    title: 'Hotel Pickup',
    text: 'Pickup from your hotel in Arusha and begin your private cultural shopping experience.',
  },
  {
    time: '09:30',
    title: 'Maasai Market Guided Visit',
    text: 'Explore the colorful Maasai Market with your guide and discover paintings, fabrics, jewelry, carvings and handmade souvenirs.',
  },
  {
    time: '11:00',
    title: 'Meet Local Artists and Craftspeople',
    text: 'Meet local artisans, learn how selected products are made and hear the stories behind traditional Tanzanian designs.',
  },
  {
    time: '12:30',
    title: 'Local Tanzanian Lunch',
    text: 'Enjoy a freshly prepared lunch at a local restaurant in Arusha.',
  },
  {
    time: '13:30',
    title: 'Local Handicrafts and Cooperative Visit',
    text: 'Visit a local handicraft centre or community cooperative and explore products made by local women and artists.',
  },
  {
    time: '15:00',
    title: 'Optional Tanzanite and Gemstone Experience',
    text: 'Guests may request an optional visit to a reputable gemstone centre to learn about Tanzanite and other local gemstones.',
  },
  {
    time: '16:00',
    title: 'Return to Hotel',
    text: 'Return to your hotel after an enjoyable day of culture, art and local shopping.',
  },
];

const included = [
  'Hotel pickup and drop-off',
  'Private transport',
  'Professional English-speaking guide',
  'Guided market and handicraft visits',
  'Local Tanzanian lunch',
  'Drinking water',
];

const excluded = [
  'Flights',
  'Travel insurance',
  'Tips and gratuities',
  'Souvenirs and personal shopping',
  'Optional gemstone purchases',
  'Alcoholic drinks',
];

const whatToBring = [
  'Comfortable walking shoes',
  'Sun hat and sunscreen',
  'Camera',
  'Cash or payment card for shopping',
  'Reusable shopping bag',
  'Personal medication',
];

export default function MaasaiMarketLocalHandicraftsPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Maasai Market & Local Handicrafts"
        subtitle="Discover colorful Tanzanian art, handmade souvenirs, traditional jewelry and the creativity of local artisans."
        image="/images/logo.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="font-bold text-gold">TOUR OVERVIEW</p>

              <h2 className="section-title mt-3">
                Culture, Art and Local Shopping
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                This private tour introduces you to Arusha&apos;s colorful
                markets, local artists and traditional Tanzanian handicrafts.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                Browse paintings, carvings, jewelry, fabrics and handmade
                souvenirs while learning about local culture and supporting
                Tanzanian artisans and community businesses.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-forest">
                Full Day Itinerary
              </h2>

              <div className="mt-8 space-y-6">
                {itinerary.map((item) => (
                  <div
                    key={item.time}
                    className="rounded-3xl bg-cream p-6 shadow-lg"
                  >
                    <p className="font-bold text-gold">{item.time}</p>

                    <h3 className="mt-2 text-xl font-bold text-forest">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-black/70">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="h-fit rounded-3xl bg-forest p-8 text-white shadow-xl">
              <h2 className="text-2xl font-bold">Trip Details</h2>

              <div className="mt-6 space-y-4">
                <p>
                  <strong>Duration:</strong> Full Day
                </p>
                <p>
                  <strong>Departure:</strong> Arusha
                </p>
                <p>
                  <strong>Tour Type:</strong> Private Cultural Tour
                </p>
                <p>
                  <strong>Best Time:</strong> All Year
                </p>
                <p>
                  <strong>Activity Level:</strong> Easy
                </p>
              </div>

              <Link
                href="/booking"
                className="mt-8 inline-block w-full rounded-full bg-gold px-6 py-3 text-center font-bold text-white"
              >
                Book This Tour
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-forest">
              What Is Included
            </h2>

            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item}>✅ {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-forest">
              What Is Excluded
            </h2>

            <ul className="mt-6 space-y-3">
              {excluded.map((item) => (
                <li key={item}>❌ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/fleet.jpeg"
                alt="Maasai Market and local handicrafts"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold text-gold">WHAT TO BRING</p>

              <h2 className="section-title mt-3">
                Prepare for Your Market Tour
              </h2>

              <ul className="mt-6 space-y-3 text-lg">
                {whatToBring.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Ready to Discover Arusha&apos;s Local Art?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Contact Kilimanjaro Travel and receive a tailor-made quotation for
            your private Maasai Market and Local Handicrafts Tour.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
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