import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    time: '08:00',
    title: 'Hotel Pickup',
    text: 'Pickup from your hotel in Arusha and drive toward Materuni Village near Mount Kilimanjaro.',
  },
  {
    time: '10:00',
    title: 'Materuni Village Arrival',
    text: 'Meet your local guide and learn about the Chagga community, village life and the history of the area.',
  },
  {
    time: '10:30',
    title: 'Hike to Materuni Waterfalls',
    text: 'Enjoy a guided walk through green farms and beautiful countryside before reaching the impressive Materuni Waterfalls.',
  },
  {
    time: '12:30',
    title: 'Waterfall Experience',
    text: 'Relax near the waterfall, take photos and enjoy the fresh mountain scenery. Swimming is possible when conditions are safe.',
  },
  {
    time: '13:30',
    title: 'Traditional Chagga Lunch',
    text: 'Return to the village and enjoy a freshly prepared local lunch featuring traditional Tanzanian dishes.',
  },
  {
    time: '14:30',
    title: 'Coffee Plantation Experience',
    text: 'Learn how coffee is grown, harvested, roasted and prepared using traditional methods, then enjoy a cup of fresh Tanzanian coffee.',
  },
  {
    time: '16:00',
    title: 'Return to Arusha',
    text: 'Begin the drive back to your hotel in Arusha after a memorable cultural and nature experience.',
  },
];

const included = [
  'Hotel pickup and drop-off',
  'Private transport',
  'Professional local guide',
  'Waterfall entrance fees',
  'Coffee plantation experience',
  'Traditional Chagga lunch',
  'Drinking water',
];

const excluded = [
  'Flights',
  'Travel insurance',
  'Tips and gratuities',
  'Personal expenses',
  'Alcoholic drinks',
];

const whatToBring = [
  'Comfortable walking shoes',
  'Light rain jacket',
  'Sun hat and sunscreen',
  'Camera',
  'Swimwear and towel if you plan to swim',
  'Personal medication',
];

export default function MateruniWaterfallsCoffeeTourPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Materuni Waterfalls & Coffee Tour"
        subtitle="Discover a beautiful waterfall, Chagga culture and the complete journey of Tanzanian coffee in one unforgettable day."
        image="/images/zanzibar.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="font-bold text-gold">TOUR OVERVIEW</p>

              <h2 className="section-title mt-3">
                Nature, Culture and Coffee
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                Materuni Village lies on the green slopes of Mount Kilimanjaro
                and is home to the Chagga people. This day trip combines
                beautiful scenery, local culture and one of Tanzania&apos;s
                most enjoyable coffee experiences.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                You will hike to the impressive Materuni Waterfalls, enjoy a
                traditional local lunch and take part in the full coffee-making
                process, from the bean to the final cup.
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
                  <strong>Tour Type:</strong> Private Day Trip
                </p>
                <p>
                  <strong>Best Time:</strong> All Year
                </p>
                <p>
                  <strong>Activity Level:</strong> Moderate Walking
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
                src="/images/safari-vehicle.jpeg"
                alt="Materuni Waterfalls and coffee tour"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold text-gold">WHAT TO BRING</p>

              <h2 className="section-title mt-3">
                Prepare for Your Materuni Adventure
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
            Ready for Your Materuni Experience?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Contact Kilimanjaro Travel today and receive a tailor-made quotation
            for your private Materuni Waterfalls and Coffee Tour.
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