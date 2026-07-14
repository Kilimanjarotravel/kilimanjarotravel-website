import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    time: '06:30',
    title: 'Hotel Pickup',
    text: 'Pickup from your hotel in Moshi, Same or the Kilimanjaro area and begin the scenic drive toward Mkomazi National Park.',
  },
  {
    time: '08:30',
    title: 'Arrival and Park Registration',
    text: 'Complete the park registration, meet your safari guide and receive a short introduction to Mkomazi National Park.',
  },
  {
    time: '09:00',
    title: 'Morning Game Drive',
    text: 'Begin your game drive through the park’s dry savannah, acacia woodland, rocky hills and baobab landscapes.',
  },
  {
    time: '11:30',
    title: 'Wildlife and Birdwatching',
    text: 'Continue searching for giraffes, zebras, elephants, antelopes, buffaloes and the park’s diverse birdlife.',
  },
  {
    time: '13:00',
    title: 'Picnic Lunch',
    text: 'Enjoy a packed picnic lunch at a designated site inside the park.',
  },
  {
    time: '14:00',
    title: 'Afternoon Game Drive',
    text: 'Continue exploring the park and learn about its important black rhino and African wild dog conservation programs.',
  },
  {
    time: '16:00',
    title: 'Leave Mkomazi National Park',
    text: 'Exit the park and begin your return journey through the beautiful northern Tanzanian landscape.',
  },
  {
    time: '18:00',
    title: 'Hotel Drop-off',
    text: 'Arrive at your hotel in Moshi, Same or the Kilimanjaro area after a memorable Mkomazi safari.',
  },
];

const included = [
  'Hotel pickup and drop-off',
  'Private 4x4 safari vehicle',
  'Professional English-speaking safari guide',
  'Mkomazi National Park entrance fees',
  'Picnic lunch',
  'Drinking water',
];

const excluded = [
  'Flights',
  'Travel insurance',
  'Tips and gratuities',
  'Personal expenses',
  'Alcoholic drinks',
  'Special conservation activities not included in the standard itinerary',
];

const whatToBring = [
  'Comfortable clothing and closed shoes',
  'Sun hat and sunscreen',
  'Camera or binoculars',
  'Light jacket',
  'Small backpack',
  'Personal medication',
];

export default function MkomaziNationalParkPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Mkomazi National Park Day Trip"
        subtitle="Discover dramatic dry-country landscapes, rich birdlife and one of Tanzania’s most important wildlife conservation areas."
        image="/images/landcruiser.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="font-bold text-gold">TOUR OVERVIEW</p>

              <h2 className="section-title mt-3">
                A Wild and Peaceful Safari Experience
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                Mkomazi National Park is a beautiful and less-crowded safari
                destination in northern Tanzania. The park forms part of the
                wider Mkomazi–Tsavo ecosystem and features dry savannah,
                acacia woodland, ancient baobab trees and isolated rocky hills.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                The park supports giraffes, zebras, elephants, buffaloes,
                antelopes and many bird species. It is also well known for its
                important conservation work involving black rhinos and African
                wild dogs.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                This private day trip is best arranged from Moshi, Same or the
                Kilimanjaro area. Exact departure time and activities may vary
                depending on your pickup location, road conditions and current
                park arrangements.
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
                  <strong>Departure:</strong> Moshi, Same or Kilimanjaro Area
                </p>

                <p>
                  <strong>Tour Type:</strong> Private Wildlife Safari
                </p>

                <p>
                  <strong>Best Time:</strong> All Year
                </p>

                <p>
                  <strong>Transport:</strong> Private 4x4 Safari Vehicle
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
                alt="Mkomazi National Park safari"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold text-gold">WHAT TO BRING</p>

              <h2 className="section-title mt-3">
                Prepare for Your Mkomazi Safari
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
            Ready for Your Mkomazi Adventure?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Contact Kilimanjaro Travel today and receive a tailor-made
            quotation for your private Mkomazi National Park day trip.
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