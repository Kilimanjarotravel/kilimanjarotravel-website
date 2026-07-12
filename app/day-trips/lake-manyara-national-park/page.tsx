import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    time: '07:00',
    title: 'Hotel Pickup',
    text: 'Pickup from your hotel in Arusha and begin the scenic drive to Lake Manyara National Park.',
  },
  {
    time: '09:00',
    title: 'Morning Game Drive',
    text: 'Explore the groundwater forest and search for elephants, giraffes, zebras, buffaloes, monkeys and many bird species.',
  },
  {
    time: '11:30',
    title: 'Lake and Wildlife Exploration',
    text: 'Continue toward the lakeshore and enjoy views of the Rift Valley, flamingos when present and the beautiful park landscape.',
  },
  {
    time: '13:00',
    title: 'Picnic Lunch',
    text: 'Enjoy a picnic lunch at a scenic site inside the park.',
  },
  {
    time: '14:00',
    title: 'Afternoon Game Drive',
    text: 'Continue exploring the park in search of tree-climbing lions, hippos, antelopes and more wildlife.',
  },
  {
    time: '16:00',
    title: 'Return to Arusha',
    text: 'Leave Lake Manyara National Park and drive back to your hotel in Arusha.',
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
  'Optional activities',
];

const whatToBring = [
  'Comfortable clothing and shoes',
  'Sun hat and sunscreen',
  'Camera or binoculars',
  'Light jacket',
  'Personal medication',
];

export default function LakeManyaraNationalParkPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Lake Manyara National Park Day Trip"
        subtitle="Discover lush forests, Rift Valley scenery, rich birdlife and diverse wildlife in one unforgettable day."
        image="/images/lion.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="font-bold text-gold">TOUR OVERVIEW</p>

              <h2 className="section-title mt-3">
                Forest, Lake and Wildlife
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                Lake Manyara National Park is famous for its groundwater
                forest, beautiful Rift Valley setting, diverse wildlife and
                excellent birdwatching opportunities.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                During this private day trip, you may see elephants, giraffes,
                buffaloes, zebras, monkeys, hippos, antelopes and many bird
                species. The park is also known for its tree-climbing lions,
                although sightings are never guaranteed.
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
                alt="Lake Manyara safari"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold text-gold">WHAT TO BRING</p>

              <h2 className="section-title mt-3">
                Prepare for Your Lake Manyara Safari
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
            Ready for Your Lake Manyara Adventure?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Contact Kilimanjaro Travel today and receive a tailor-made
            quotation for your private Lake Manyara day trip.
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