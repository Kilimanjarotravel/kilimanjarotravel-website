import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    time: '06:00',
    title: 'Hotel Pickup',
    text: 'Pickup from your hotel in Arusha and begin the scenic drive toward the Ngorongoro Conservation Area.',
  },
  {
    time: '08:30',
    title: 'Crater Viewpoint',
    text: 'Stop at the famous viewpoint and enjoy spectacular panoramic views across the Ngorongoro Crater.',
  },
  {
    time: '09:00',
    title: 'Descend into the Crater',
    text: 'Descend to the crater floor for a game drive in search of lions, elephants, buffaloes, zebras, wildebeest, hyenas and the rare black rhino.',
  },
  {
    time: '12:30',
    title: 'Picnic Lunch at Hippo Pool',
    text: 'Enjoy a picnic lunch near the Hippo Pool while watching hippos, birds and the beautiful crater scenery.',
  },
  {
    time: '13:30',
    title: 'Afternoon Game Drive',
    text: 'Continue exploring the crater floor and search for more wildlife, including members of the Big Five.',
  },
  {
    time: '16:00',
    title: 'Ascend the Crater',
    text: 'Drive back up the crater wall and begin the return journey to Arusha.',
  },
  {
    time: '18:30',
    title: 'Return to Arusha',
    text: 'Arrive at your hotel in Arusha after an unforgettable Ngorongoro Crater safari.',
  },
];

const included = [
  'Hotel pickup and drop-off',
  'Private 4x4 safari vehicle',
  'Professional English-speaking guide',
  'Ngorongoro entrance and crater service fees',
  'Picnic lunch',
  'Drinking water',
];

const excluded = [
  'Flights',
  'Travel insurance',
  'Tips and gratuities',
  'Personal expenses',
  'Alcoholic drinks',
  'Optional Olduvai Gorge visit',
];

const whatToBring = [
  'Comfortable clothing and shoes',
  'Sun hat and sunscreen',
  'Camera or binoculars',
  'Warm jacket for the crater rim',
  'Personal medication',
];

export default function NgorongoroCraterPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Ngorongoro Crater Day Trip"
        subtitle="Descend into the world-famous crater and discover the Big Five, breathtaking scenery and unforgettable wildlife."
        image="/images/lion.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="font-bold text-gold">TOUR OVERVIEW</p>

              <h2 className="section-title mt-3">
                A Wildlife Wonder of Tanzania
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                Ngorongoro Crater is one of Africa&apos;s most remarkable
                wildlife destinations and a UNESCO World Heritage Site. The
                crater floor supports a dense concentration of animals
                throughout the year.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                This private day trip offers excellent opportunities to see
                lions, elephants, buffaloes, zebras, wildebeest, hippos,
                hyenas and the rare black rhino in a spectacular natural
                setting.
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
                  <strong>Transport:</strong> Private 4x4 Safari Vehicle
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
                alt="Ngorongoro Crater safari"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold text-gold">WHAT TO BRING</p>

              <h2 className="section-title mt-3">
                Prepare for Your Crater Safari
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
            Ready for Your Ngorongoro Crater Adventure?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Contact Kilimanjaro Travel today and receive a tailor-made
            quotation for your private Ngorongoro Crater day trip.
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