import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const destinations = [
  'Arusha City',
  'Arusha Villages',
  'Moshi',
  'Kilimanjaro Foothills',
  'Sanya Juu',
  'West Kilimanjaro',
  'Lake Duluti',
  'Mto wa Mbu',
  'Other destinations upon request',
];

const experiences = [
  'Village Bicycle Tours',
  'Coffee Farm Cycling',
  'Nature & Forest Trails',
  'Cultural Bicycle Experiences',
  'Wildlife Cycling (where permitted)',
  'Photography Rides',
  'Family Friendly Tours',
  'Half-Day, Full-Day & Multi-Day Tours',
];

const included = [
  'Hotel pickup and drop-off',
  'Professional cycling guide',
  'Mountain bike',
  'Helmet and safety equipment',
  'Drinking water',
];

const excluded = [
  'Travel insurance',
  'Personal expenses',
  'Alcoholic drinks',
  'Tips and gratuities',
];

export default function TanzaniaBicycleToursPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Tanzania Bicycle Tours"
        subtitle="Explore Tanzania on two wheels through villages, coffee farms, forests, mountain foothills and beautiful landscapes."
        image="/images/landcruiser.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <p className="font-bold text-gold">
            PRIVATE GUIDED EXPERIENCE
          </p>

          <h2 className="section-title mt-3">
            Discover Tanzania by Bicycle
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/70">
            Our guided bicycle tours are designed for travelers who want to
            experience Tanzania beyond the safari vehicle. Ride through local
            villages, coffee farms, mountain foothills and beautiful natural
            landscapes while meeting local communities and enjoying authentic
            experiences.
          </p>

          <p className="mt-4 text-lg leading-8 text-black/70">
            Every tour is private and can be customized according to your
            interests, fitness level, available time and preferred destination.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-2">

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-forest">
                Available Destinations
              </h2>

              <ul className="mt-6 space-y-3">
                {destinations.map((item) => (
                  <li key={item}>🚴 {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-forest">
                Available Experiences
              </h2>

              <ul className="mt-6 space-y-3">
                {experiences.map((item) => (
                  <li key={item}>✅ {item}</li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-14 rounded-3xl bg-forest p-10 text-white">

            <h2 className="text-3xl font-bold">
              Trip Details
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <p><strong>Duration:</strong> Half Day • Full Day • Multi-Day</p>
              <p><strong>Tour Type:</strong> Private Guided Bicycle Tour</p>
              <p><strong>Difficulty:</strong> Easy to Advanced</p>
              <p><strong>Departure:</strong> Available from Arusha, Moshi, Kilimanjaro and surrounding areas.</p>
            </div>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-forest">
                Included
              </h2>

              <ul className="mt-6 space-y-3">
                {included.map((item) => (
                  <li key={item}>✅ {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-forest">
                Excluded
              </h2>

              <ul className="mt-6 space-y-3">
                {excluded.map((item) => (
                  <li key={item}>❌ {item}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-forest py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Plan Your Bicycle Adventure
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80">
            Tell us where you would like to ride and we will create a private
            cycling experience specially designed for you.
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