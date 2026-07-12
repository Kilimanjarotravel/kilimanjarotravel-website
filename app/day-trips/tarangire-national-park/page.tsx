import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    time: '06:30',
    title: 'Hotel Pickup',
    text: 'Pickup from your hotel in Arusha and begin the scenic drive to Tarangire National Park.',
  },
  {
    time: '09:00',
    title: 'Morning Game Drive',
    text: 'Begin your game drive through Tarangire National Park, famous for large elephant herds, majestic baobab trees and diverse wildlife.',
  },
  {
    time: '11:00',
    title: 'Optional Guided Walking Safari',
    text: 'Guests may request an optional guided walking safari with an armed park ranger in designated areas. This activity is subject to availability and park arrangements.',
  },
  {
    time: '13:00',
    title: 'Picnic Lunch',
    text: 'Enjoy a picnic lunch at a scenic site inside the park while surrounded by the beautiful Tarangire landscape.',
  },
  {
    time: '14:00',
    title: 'Afternoon Game Drive',
    text: 'Continue exploring the park in search of elephants, lions, giraffes, zebras, wildebeest, antelopes and abundant birdlife.',
  },
  {
    time: '16:30',
    title: 'Return to Arusha',
    text: 'Leave Tarangire National Park and drive back to your hotel in Arusha after an unforgettable safari.',
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
  'Optional walking safari fees',
  'Flights',
  'Travel insurance',
  'Tips and gratuities',
  'Personal expenses',
  'Alcoholic drinks',
];

const whatToBring = [
  'Comfortable shoes',
  'Sun hat and sunscreen',
  'Camera or binoculars',
  'Light jacket',
  'Personal medication',
];

export default function TarangireNationalParkPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Tarangire National Park Day Trip"
        subtitle="Discover large elephant herds, ancient baobab trees and unforgettable wildlife in one remarkable day."
        image="/images/landcruiser.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="font-bold text-gold">TOUR OVERVIEW</p>

              <h2 className="section-title mt-3">
                The Home of Elephants and Baobabs
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                Tarangire National Park is famous for its large elephant
                population, impressive baobab trees and beautiful landscapes.
                The Tarangire River attracts many wildlife species, especially
                during the dry season.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                This private day trip gives you the opportunity to see
                elephants, lions, giraffes, zebras, wildebeest, antelopes and
                many bird species. An optional guided walking safari may be
                arranged upon request, subject to availability and park
                regulations.
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
                alt="Safari vehicle in Tarangire National Park"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold text-gold">WHAT TO BRING</p>

              <h2 className="section-title mt-3">
                Prepare for Your Tarangire Safari
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
            Ready for Your Tarangire Adventure?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Contact Kilimanjaro Travel today and receive a tailor-made
            quotation for your private Tarangire day trip.
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