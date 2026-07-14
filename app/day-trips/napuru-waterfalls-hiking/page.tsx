import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    time: '08:00',
    title: 'Hotel Pickup',
    text: 'Pickup from your hotel in Arusha and drive toward the Napuru hiking area.',
  },
  {
    time: '09:00',
    title: 'Meet Your Local Guide',
    text: 'Meet your guide, receive a short safety briefing and begin the guided hike.',
  },
  {
    time: '09:30',
    title: 'Napuru Nature Hike',
    text: 'Walk through local landscapes, farms and natural trails while enjoying fresh air and beautiful scenery.',
  },
  {
    time: '11:30',
    title: 'Waterfall and Scenic Viewpoints',
    text: 'Visit Napuru Waterfalls and enjoy panoramic views of Arusha town and Mount Meru when the weather is clear.',
  },
  {
    time: '13:00',
    title: 'Picnic Lunch',
    text: 'Enjoy a picnic lunch in a peaceful natural setting.',
  },
  {
    time: '14:00',
    title: 'Photography and Nature Walk',
    text: 'Continue exploring the area, take photos and learn more about local plants, landscapes and village life.',
  },
  {
    time: '16:00',
    title: 'Return to Arusha',
    text: 'Finish the hike and drive back to your hotel in Arusha.',
  },
];

const included = [
  'Hotel pickup and drop-off',
  'Private transport',
  'Professional local hiking guide',
  'Entrance fees',
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
  'Comfortable hiking shoes',
  'Light rain jacket',
  'Sun hat and sunscreen',
  'Camera',
  'Small backpack',
  'Personal medication',
];

export default function NapuruWaterfallsHikingPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Napuru Waterfalls & Hiking"
        subtitle="Enjoy a guided hike, beautiful waterfalls and panoramic views of Arusha and Mount Meru."
        image="/images/lion.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="font-bold text-gold">TOUR OVERVIEW</p>

              <h2 className="section-title mt-3">
                A Scenic Hiking Experience Near Arusha
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                The Napuru Waterfalls and Hiking Tour is a rewarding day trip
                for travelers who enjoy nature, walking and local scenery near
                Arusha.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                The guided hike takes you through peaceful landscapes and local
                areas before reaching the waterfall and scenic viewpoints.
                Clear weather may provide excellent views of Mount Meru and
                Arusha town.
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
                  <strong>Tour Type:</strong> Private Hiking Tour
                </p>
                <p>
                  <strong>Best Time:</strong> All Year
                </p>
                <p>
                  <strong>Activity Level:</strong> Moderate
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
                alt="Napuru hiking experience"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold text-gold">WHAT TO BRING</p>

              <h2 className="section-title mt-3">
                Prepare for Your Napuru Hike
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
            Ready for Your Napuru Hiking Adventure?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Contact Kilimanjaro Travel today and receive a tailor-made quotation
            for your private Napuru Waterfalls and Hiking tour.
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