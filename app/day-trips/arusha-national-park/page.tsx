import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    time: '07:30',
    title: 'Hotel Pickup',
    text: 'Pickup from your hotel in Arusha and drive to Arusha National Park.',
  },
  {
    time: '09:00',
    title: 'Morning Game Drive',
    text: 'Explore the park and look for giraffes, zebras, buffaloes, monkeys and many bird species.',
  },
  {
    time: '12:30',
    title: 'Picnic Lunch',
    text: 'Enjoy a packed lunch at a scenic picnic site inside the park.',
  },
  {
    time: '14:00',
    title: 'Afternoon Exploration',
    text: 'Continue around Momella Lakes and enjoy beautiful views of Mount Meru.',
  },
  {
    time: '16:30',
    title: 'Return to Arusha',
    text: 'Drive back to your hotel after an unforgettable day in the park.',
  },
];

const included = [
  'Hotel pickup and drop-off',
  'Private safari vehicle',
  'Professional English-speaking guide',
  'Park entrance fees',
  'Picnic lunch',
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
  'Camera or binoculars',
  'Light jacket',
  'Personal medication',
];

export default function ArushaNationalParkPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Arusha National Park Day Trip"
        subtitle="Discover wildlife, Momella Lakes, Mount Meru views and beautiful landscapes in one unforgettable day."
        image="/images/lion.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="font-bold text-gold">TOUR OVERVIEW</p>

              <h2 className="section-title mt-3">
                A Perfect Day Near Arusha
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                Arusha National Park is one of Tanzania&apos;s most beautiful
                and accessible parks. It is famous for giraffes, buffaloes,
                monkeys, Momella Lakes, green forests and spectacular views of
                Mount Meru.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                This private day trip is ideal for travelers with limited time
                who still want to enjoy wildlife, beautiful scenery and a
                relaxed safari experience close to Arusha.
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
                  <strong>Transport:</strong> Private Safari Vehicle
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
                alt="Safari vehicle in Tanzania"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold text-gold">WHAT TO BRING</p>

              <h2 className="section-title mt-3">
                Prepare for Your Day Trip
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
            Ready for Your Arusha National Park Adventure?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Contact Kilimanjaro Travel today and receive a tailor-made
            quotation for your private day trip.
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