import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const dayTrips = [
  {
    title: 'Arusha National Park Day Trip',
    image: '/images/lion.jpeg',
    text: 'Enjoy wildlife, Mount Meru views, scenic lakes and a beautiful day in Arusha National Park.',
    href: '/day-trips/arusha-national-park',
    itineraryReady: true,
  },
  {
    title: 'Tarangire National Park Day Trip',
    image: '/images/landcruiser.jpeg',
    text: 'See elephants, baobab trees and classic northern Tanzania wildlife in Tarangire.',
    href: '/day-trips/tarangire-national-park',
    itineraryReady: true,
  },
  {
    title: 'Ngorongoro Crater Day Trip',
    image: '/images/safari-vehicle.jpeg',
    text: 'Descend into the famous Ngorongoro Crater for an unforgettable wildlife experience.',
    href: '/day-trips/ngorongoro-crater',
    itineraryReady: true,
  },
  {
    title: 'Lake Manyara National Park Day Trip',
    image: '/images/zanzibar.jpeg',
    text: 'Discover forest scenery, rich birdlife, wildlife and the beautiful Lake Manyara landscape.',
    href: '/day-trips/lake-manyara-national-park',
    itineraryReady: true,
  },
  {
    title: 'Materuni Waterfalls & Coffee Tour',
    image: '/images/fleet.jpeg',
    text: 'Hike to Materuni Waterfalls and learn how local Tanzanian coffee is grown and prepared.',
    href: '/day-trips/materuni-waterfalls-coffee-tour',
    itineraryReady: true,
  },
  {
    title: 'Chemka Hot Springs',
    image: '/images/zanzibar.jpeg',
    text: 'Relax and swim in clear natural spring water surrounded by beautiful tropical scenery.',
    href: '/day-trips/chemka-hot-springs',
itineraryReady: true,
  },
  {
    title: 'Napuru Waterfalls & Hiking',
    image: '/images/lion.jpeg',
    text: 'Enjoy a guided hike, panoramic views of Arusha and Mount Meru, and a visit to Napuru Waterfalls.',
    href: '/day-trips/napuru-waterfalls-hiking',
itineraryReady: true,
  },
  {
    title: 'Lake Duluti Canoeing',
    image: '/images/safari-vehicle.jpeg',
    text: 'Explore the peaceful lake by canoe and enjoy birds, nature and views of the surrounding forest.',
    href: '/day-trips/lake-duluti-canoeing',
itineraryReady: true,
  },
  {
    title: 'Arusha Cultural & History Tour',
    image: '/images/logo.jpeg',
    text: 'Visit museums and cultural centers while learning about Tanzania’s heritage and local history.',
    href: '/booking',
    itineraryReady: false,
  },
  {
    title: 'Coffee Plantation Tour',
    image: '/images/fleet.jpeg',
    text: 'Visit a local coffee farm, learn the production process and taste fresh Tanzanian coffee.',
    href: '/booking',
    itineraryReady: false,
  },
  {
    title: 'Maasai Market & Local Handicrafts',
    image: '/images/logo.jpeg',
    text: 'Browse colorful crafts, paintings, souvenirs and handmade items from local artisans.',
    href: '/booking',
    itineraryReady: false,
  },
  {
    title: 'Arusha Bicycle Tour',
    image: '/images/landcruiser.jpeg',
    text: 'Explore scenic neighborhoods, villages and local life around Arusha by bicycle.',
    href: '/booking',
    itineraryReady: false,
  },
];

export default function DayTripsPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Tanzania Day Trips"
        subtitle="Discover wildlife, waterfalls, culture, coffee, hiking and unforgettable local experiences from Arusha."
        image="/images/safari-vehicle.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold text-gold">EXPLORE MORE</p>

            <h2 className="section-title mt-3">
              Choose Your Perfect Day Trip
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/70">
              Explore Tanzania with private day trips designed for wildlife,
              nature, culture, adventure and authentic local experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dayTrips.map((trip) => (
              <article
                key={trip.title}
                className="overflow-hidden rounded-3xl bg-white shadow-xl"
              >
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-7">
                  <h2 className="text-2xl font-bold text-forest">
                    {trip.title}
                  </h2>

                  <p className="mt-4 leading-7 text-black/70">
                    {trip.text}
                  </p>

                  <Link
                    href={trip.href}
                    className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
                  >
                    {trip.itineraryReady
                      ? 'View Itinerary'
                      : 'Book This Day Trip'}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Need a Custom Day Trip?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Tell us what you would like to experience and our team will create
            a private day trip based on your interests, schedule and budget.
          </p>

          <Link
            href="/booking"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}