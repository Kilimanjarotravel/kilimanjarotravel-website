import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    time: '08:30',
    title: 'Hotel Pickup',
    text: 'Pickup from your hotel in Arusha and drive to Lake Duluti.',
  },
  {
    time: '09:00',
    title: 'Arrival and Safety Briefing',
    text: 'Meet your local guide, receive a short safety briefing and prepare for the canoeing experience.',
  },
  {
    time: '09:30',
    title: 'Guided Canoeing Experience',
    text: 'Paddle across the peaceful lake while enjoying forest scenery, birdlife and views of Mount Meru when the weather is clear.',
  },
  {
    time: '11:30',
    title: 'Nature Walk',
    text: 'Enjoy a guided walk around the lake and learn about local plants, birds and the surrounding ecosystem.',
  },
  {
    time: '13:00',
    title: 'Picnic Lunch',
    text: 'Relax near the lake and enjoy a freshly prepared picnic lunch.',
  },
  {
    time: '14:00',
    title: 'Free Time and Photography',
    text: 'Spend time relaxing, taking photos and enjoying the peaceful natural surroundings.',
  },
  {
    time: '15:30',
    title: 'Return to Arusha',
    text: 'Drive back to your hotel in Arusha after a relaxing lake experience.',
  },
];

const included = [
  'Hotel pickup and drop-off',
  'Private transport',
  'Professional local guide',
  'Canoe and safety equipment',
  'Lake entrance fees',
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
  'Light jacket',
  'Camera or binoculars',
  'Small backpack',
  'Personal medication',
];

export default function LakeDulutiCanoeingPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Lake Duluti Canoeing & Nature Walk"
        subtitle="Paddle across a peaceful crater lake, enjoy rich birdlife and explore beautiful forest scenery near Arusha."
        image="/images/safari-vehicle.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="font-bold text-gold">TOUR OVERVIEW</p>

              <h2 className="section-title mt-3">
                A Peaceful Lake Adventure Near Arusha
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                Lake Duluti is a beautiful crater lake surrounded by forest
                and located a short drive from Arusha. It is an ideal place for
                travelers who enjoy peaceful nature, birdwatching and outdoor
                activities.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                This private day trip combines guided canoeing with a relaxing
                nature walk. You may see kingfishers, herons, eagles and other
                bird species while enjoying views of Mount Meru when the
                weather is clear.
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
                  <strong>Tour Type:</strong> Private Nature Tour
                </p>
                <p>
                  <strong>Best Time:</strong> All Year
                </p>
                <p>
                  <strong>Activity Level:</strong> Easy to Moderate
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
                src="/images/landcruiser.jpeg"
                alt="Lake Duluti canoeing experience"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold text-gold">WHAT TO BRING</p>

              <h2 className="section-title mt-3">
                Prepare for Your Lake Duluti Adventure
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
            Ready for Your Lake Duluti Experience?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Contact Kilimanjaro Travel today and receive a tailor-made quotation
            for your private Lake Duluti canoeing and nature walk.
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