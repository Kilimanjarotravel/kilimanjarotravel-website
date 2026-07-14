import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    time: 'Early Morning',
    title: 'Hotel Pickup in Zanzibar',
    text: 'Pickup from your hotel in Zanzibar and private transfer to the airport for your morning flight to Mikumi National Park.',
  },
  {
    time: 'Morning',
    title: 'Flight to Mikumi',
    text: 'Board your scheduled or charter flight from Zanzibar to the Mikumi area. Flight times are confirmed according to availability.',
  },
  {
    time: 'After Arrival',
    title: 'Meet Your Safari Guide',
    text: 'Meet your professional safari guide at the airstrip and begin your wildlife adventure in a comfortable 4x4 safari vehicle.',
  },
  {
    time: 'Morning to Afternoon',
    title: 'Mikumi National Park Game Drive',
    text: 'Explore Mikumi National Park in search of elephants, lions, giraffes, zebras, buffaloes, wildebeest, hippos, antelopes and rich birdlife.',
  },
  {
    time: 'Midday',
    title: 'Bush or Picnic Lunch',
    text: 'Enjoy lunch at a designated location inside or near the park while taking in the beautiful Mikumi landscape.',
  },
  {
    time: 'Afternoon',
    title: 'Continue the Game Drive',
    text: 'Continue exploring the park with your guide and visit different wildlife areas before returning to the airstrip.',
  },
  {
    time: 'Late Afternoon',
    title: 'Flight Back to Zanzibar',
    text: 'Board your return flight to Zanzibar. The exact departure time depends on the confirmed flight schedule.',
  },
  {
    time: 'Evening',
    title: 'Hotel Drop-off',
    text: 'Meet your driver after landing in Zanzibar and transfer back to your hotel.',
  },
];

const included = [
  'Hotel pickup and drop-off in Zanzibar',
  'Return domestic flights',
  'Airport transfers',
  'Professional safari guide',
  'Private or shared 4x4 safari vehicle',
  'Mikumi National Park fees',
  'Bush or picnic lunch',
  'Drinking water',
];

const excluded = [
  'International flights',
  'Travel insurance',
  'Visa fees',
  'Tips and gratuities',
  'Personal expenses',
  'Alcoholic drinks',
];

const whatToBring = [
  'Passport or ID',
  'Comfortable safari clothing',
  'Sun hat',
  'Sunscreen',
  'Camera or binoculars',
  'Light jacket',
  'Personal medication',
];

export default function MikumiFromZanzibarPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Mikumi Safari from Zanzibar"
        subtitle="Fly from Zanzibar for an unforgettable one-day wildlife safari in Mikumi National Park."
        image="/images/lion.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">

              <p className="font-bold text-gold">
                TOUR OVERVIEW
              </p>

              <h2 className="section-title mt-3">
                From Zanzibar Beach to African Safari
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                Enjoy a same-day fly-in safari from Zanzibar to Mikumi National Park.
                Experience Tanzania's incredible wildlife with professional guides,
                comfortable transport and spectacular landscapes.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-forest">
                Full Day Itinerary
              </h2>

              <div className="mt-8 space-y-6">

                {itinerary.map((item) => (
  <div
    key={`${item.time}-${item.title}`}
    className="rounded-3xl bg-cream p-6 shadow-lg"
  >
    <p className="font-bold text-gold">
      {item.time}
    </p>

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

              <h2 className="text-2xl font-bold">
                Trip Details
              </h2>
              <div className="mt-6 space-y-4">
                <p>
                  <strong>Duration:</strong> Full Day
                </p>

                <p>
                  <strong>Departure:</strong> Zanzibar
                </p>

                <p>
                  <strong>Tour Type:</strong> Fly-in Wildlife Safari
                </p>

                <p>
                  <strong>Transport:</strong> Return Flight + 4x4 Safari Vehicle
                </p>

                <p>
                  <strong>Availability:</strong> Subject to Flight Schedule
                </p>

                <p>
                  <strong>Best Time:</strong> All Year
                </p>
              </div>

              <Link
                href="/booking"
                className="mt-8 inline-block w-full rounded-full bg-gold px-6 py-3 text-center font-bold text-white"
              >
                Book This Safari
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
                alt="Mikumi safari from Zanzibar"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold text-gold">WHAT TO BRING</p>

              <h2 className="section-title mt-3">
                Prepare for Your Fly-in Safari
              </h2>

              <ul className="mt-6 space-y-3 text-lg">
                {whatToBring.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-cream p-5 text-black/70">
                <strong className="text-forest">Important:</strong> Carry the
                identification requested by the airline. Final pickup and flight
                times will be confirmed before departure.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Ready for Your Mikumi Fly-in Safari?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Contact Kilimanjaro Travel for flight availability and a
            tailor-made quotation from your Zanzibar hotel.
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
              Check Flight Availability
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}