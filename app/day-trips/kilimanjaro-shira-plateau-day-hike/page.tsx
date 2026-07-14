import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    time: '06:30',
    title: 'Hotel Pickup',
    text: 'Pickup from your hotel in Arusha or Moshi and drive toward Kilimanjaro National Park.',
  },
  {
    time: '08:30',
    title: 'Park Registration',
    text: 'Complete registration at the park gate, meet your mountain guide and receive a short safety briefing.',
  },
  {
    time: '09:30',
    title: 'Drive to Shira Plateau',
    text: 'Travel by four-wheel-drive vehicle through the mountain landscape toward the Shira Plateau hiking area.',
  },
  {
    time: '10:30',
    title: 'Guided Shira Plateau Hike',
    text: 'Begin a guided hike across the high-altitude plateau while enjoying volcanic scenery, unique vegetation and views of Kilimanjaro when the weather is clear.',
  },
  {
    time: '13:00',
    title: 'Picnic Lunch',
    text: 'Enjoy a packed lunch in a scenic mountain location.',
  },
  {
    time: '14:00',
    title: 'Afternoon Exploration',
    text: 'Continue exploring the plateau, take photographs and learn about the mountain environment from your guide.',
  },
  {
    time: '15:30',
    title: 'Return Journey',
    text: 'Return to the vehicle and begin the drive down from the mountain.',
  },
  {
    time: '18:00',
    title: 'Hotel Drop-off',
    text: 'Arrive at your hotel in Moshi or Arusha after an unforgettable Kilimanjaro day hike.',
  },
];

const included = [
  'Hotel pickup and drop-off',
  'Private transport',
  'Professional mountain guide',
  'Kilimanjaro National Park fees',
  'Picnic lunch',
  'Drinking water',
];

const excluded = [
  'Flights',
  'Travel insurance',
  'Tips and gratuities',
  'Personal hiking equipment',
  'Personal expenses',
  'Alcoholic drinks',
];

const whatToBring = [
  'Comfortable hiking boots',
  'Warm jacket and layered clothing',
  'Rain jacket',
  'Sun hat and sunscreen',
  'Small backpack',
  'Camera',
  'Personal medication',
];

export default function KilimanjaroShiraPlateauDayHikePage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Kilimanjaro Shira Plateau Day Hike"
        subtitle="Experience the beauty of Mount Kilimanjaro on a guided high-altitude hike across the spectacular Shira Plateau."
        image="/images/landcruiser.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="font-bold text-gold">TOUR OVERVIEW</p>

              <h2 className="section-title mt-3">
                Experience Kilimanjaro in One Day
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                The Shira Plateau Day Hike is ideal for travelers who want to
                experience Mount Kilimanjaro without joining a multi-day climb.
                The plateau offers dramatic volcanic landscapes, unique
                vegetation and beautiful mountain views.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                This private guided hike can be arranged from Arusha or Moshi.
                Weather conditions and park regulations may affect the exact
                route and timing.
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
                  <strong>Departure:</strong> Arusha or Moshi
                </p>
                <p>
                  <strong>Tour Type:</strong> Private Guided Mountain Hike
                </p>
                <p>
                  <strong>Best Time:</strong> All Year
                </p>
                <p>
                  <strong>Activity Level:</strong> Moderate to Challenging
                </p>
              </div>

              <Link
                href="/booking"
                className="mt-8 inline-block w-full rounded-full bg-gold px-6 py-3 text-center font-bold text-white"
              >
                Book This Hike
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
                alt="Kilimanjaro Shira Plateau day hike"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold text-gold">WHAT TO BRING</p>

              <h2 className="section-title mt-3">
                Prepare for Your Kilimanjaro Hike
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
            Ready for Your Kilimanjaro Day Hike?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Contact Kilimanjaro Travel today and receive a tailor-made quotation
            for your private Shira Plateau day hike.
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