import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    time: '08:30',
    title: 'Hotel Pickup',
    text: 'Pickup from your hotel in Arusha and drive to a local coffee plantation.',
  },
  {
    time: '09:30',
    title: 'Coffee Farm Introduction',
    text: 'Meet your local guide and learn about the history of coffee farming in northern Tanzania.',
  },
  {
    time: '10:00',
    title: 'Coffee Plantation Walk',
    text: 'Walk through the plantation and learn how coffee is planted, grown, harvested and cared for.',
  },
  {
    time: '11:30',
    title: 'Traditional Coffee Processing',
    text: 'Take part in the traditional process of removing the husks, roasting and grinding fresh coffee beans.',
  },
  {
    time: '13:00',
    title: 'Local Lunch',
    text: 'Enjoy a freshly prepared Tanzanian lunch in a peaceful local setting.',
  },
  {
    time: '14:00',
    title: 'Coffee Tasting',
    text: 'Prepare and taste a fresh cup of Tanzanian coffee while learning about flavor, quality and local traditions.',
  },
  {
    time: '15:30',
    title: 'Return to Arusha',
    text: 'Drive back to your hotel in Arusha after an authentic coffee and cultural experience.',
  },
];

const included = [
  'Hotel pickup and drop-off',
  'Private transport',
  'Professional local guide',
  'Coffee plantation entrance fees',
  'Traditional coffee experience',
  'Local lunch',
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
  'Sun hat and sunscreen',
  'Camera',
  'Light jacket',
  'Small backpack',
  'Personal medication',
];

export default function CoffeePlantationTourPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Coffee Plantation Tour"
        subtitle="Discover how Tanzanian coffee is grown, processed, roasted and prepared during an authentic local experience."
        image="/images/fleet.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="font-bold text-gold">TOUR OVERVIEW</p>

              <h2 className="section-title mt-3">
                From Coffee Bean to Cup
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                This private coffee plantation tour gives you an opportunity
                to experience one of Tanzania&apos;s most important crops and
                learn about the people who grow it.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                You will walk through a local plantation, learn the complete
                coffee-making process, participate in traditional preparation
                and enjoy a freshly brewed cup of Tanzanian coffee.
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
                src="/images/safari-vehicle.jpeg"
                alt="Coffee plantation tour in Tanzania"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold text-gold">WHAT TO BRING</p>

              <h2 className="section-title mt-3">
                Prepare for Your Coffee Tour
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
            Ready for Your Coffee Experience?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Contact Kilimanjaro Travel today and receive a tailor-made quotation
            for your private Coffee Plantation Tour.
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