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
  },
  {
    title: 'Tarangire National Park Day Trip',
    image: '/images/landcruiser.jpeg',
    text: 'See elephants, baobab trees and classic northern Tanzania wildlife in Tarangire.',
  },
  {
    title: 'Ngorongoro Crater Day Trip',
    image: '/images/safari-vehicle.jpeg',
    text: 'Descend into the famous Ngorongoro Crater for an unforgettable wildlife experience.',
  },
  {
    title: 'Lake Manyara Day Trip',
    image: '/images/zanzibar.jpeg',
    text: 'Discover forest scenery, birds, wildlife and the beautiful Lake Manyara landscape.',
  },
  {
    title: 'Materuni Waterfalls & Coffee Tour',
    image: '/images/fleet.jpeg',
    text: 'Hike to Materuni Waterfalls and learn how local Tanzanian coffee is grown and prepared.',
  },
  {
    title: 'Chemka Hot Springs',
    image: '/images/zanzibar.jpeg',
    text: 'Relax and swim in clear natural spring water surrounded by beautiful tropical scenery.',
  },
  {
    title: 'Napuru Waterfalls & Hiking',
    image: '/images/lion.jpeg',
    text: 'Enjoy a guided hike, panoramic views of Arusha and Mount Meru, and a visit to Napuru Waterfalls.',
  },
  {
    title: 'Lake Duluti Canoeing',
    image: '/images/safari-vehicle.jpeg',
    text: 'Explore the peaceful lake by canoe and enjoy birds, nature and views of the surrounding forest.',
  },
  {
    title: 'Arusha Cultural & History Tour',
    image: '/images/logo.jpeg',
    text: 'Visit museums and cultural centers while learning about Tanzania’s heritage and local history.',
  },
  {
    title: 'Coffee Plantation Tour',
    image: '/images/fleet.jpeg',
    text: 'Visit a local coffee farm, learn the production process and taste fresh Tanzanian coffee.',
  },
  {
    title: 'Maasai Market & Local Handicrafts',
    image: '/images/logo.jpeg',
    text: 'Browse colorful crafts, paintings, souvenirs and handmade items from local artisans.',
  },
  {
    title: 'Arusha Bicycle Tour',
    image: '/images/landcruiser.jpeg',
    text: 'Explore scenic neighborhoods, villages and local life around Arusha by bicycle.',
  },
];

export default function DayTripsPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Day Trips & Local Tours"
        subtitle="Discover wildlife, waterfalls, culture, coffee, local villages and unforgettable experiences around Arusha."
        image="/images/landcruiser.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Popular Day Trips</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {dayTrips.map((trip) => (
              <div
                key={trip.title}
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-forest">
                    {trip.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/70">
                    {trip.text}
                  </p>

                  <Link
  href={
    trip.title === "Arusha National Park Day Trip"
      ? "/day-trips/arusha-national-park"
      : trip.title === "Tarangire National Park Day Trip"
      ? "/day-trips/tarangire-national-park"
      : trip.title === "Ngorongoro Crater Day Trip"
      ? "/day-trips/ngorongoro-crater"
      : trip.title === "Lake Manyara National Park Day Trip"
? "/day-trips/lake-manyara-national-park"
      : "/booking"
  }
  className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
>
  {trip.title === "Arusha National Park Day Trip" ||
  trip.title === "Tarangire National Park Day Trip" ||
  trip.title === "Ngorongoro Crater Day Trip"
    ? "View Itinerary"
    : "Book This Day Trip"}
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}