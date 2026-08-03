import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Visit the dramatic shores of Lake Natron',
  'See flamingos and unique birdlife',
  'Explore Maasai culture and local villages',
  'Hike near Ol Doinyo Lengai volcano',
  'Enjoy remote landscapes and scenic views',
];

const itinerary = [
  {
    title: 'Day 1: Arusha to Lake Natron',
    text: 'Travel from Arusha through dramatic Rift Valley landscapes toward Lake Natron. Arrive, settle in, and enjoy views of the surrounding escarpments and volcanic scenery.',
  },
  {
  title: 'Day 2: Lake Natron, Waterfalls and Maasai Experience',
  text: 'Explore the shores of Lake Natron, observe flamingos and birdlife, visit nearby waterfalls, and learn about Maasai culture before preparing for the nighttime climb.',
},
  {
  title: 'Day 3: Night Climb to Ol Doinyo Lengai',
  text: 'Begin the climb late at night with an experienced local mountain guide. Reach the summit area around sunrise, enjoy dramatic views across Lake Natron and the Rift Valley, then descend carefully and return to your accommodation for rest.',
},
  {
    title: 'Day 4: Return to Arusha',
    text: 'After breakfast, begin the scenic drive back to Arusha, completing your Lake Natron and Ol Doinyo Lengai adventure.',
  },
];

const included = [
  'Private transport from Arusha',
  'Professional driver-guide',
  'Local guide at Lake Natron',
  'Entrance and conservation fees',
  'Accommodation during the tour',
  'Meals during the adventure',
  'Drinking water',
];

const excluded = [
  'Flights',
  'Travel insurance',
  'Personal hiking equipment',
  'Tips and gratuities',
  'Personal expenses',
  'Alcoholic drinks',
];

const whatToBring = [
  'Comfortable hiking shoes',
  'Light jacket or warm clothing',
  'Sun hat and sunscreen',
  'Camera or binoculars',
  'Reusable water bottle',
  'Personal medication',
];

export default function LakeNatronOlDoinyoLengaiPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Lake Natron & Ol Doinyo Lengai Adventure"
        subtitle="Discover the dramatic landscapes of Lake Natron, flamingo habitats, Maasai culture, and the active volcanic slopes of Ol Doinyo Lengai."
        image="/images/oldoinyo-lengai.jpg"
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                Volcano, Lake and Cultural Adventure
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Lake Natron & Ol Doinyo Lengai Adventure
              </h2>

              <p className="mt-6 leading-8 text-black/70">
                Explore the striking landscapes of Lake Natron, famous for its
                flamingos, dramatic escarpments, and remote natural beauty.
                Continue toward Ol Doinyo Lengai, the sacred active volcano of
                the Maasai people.
              </p>

              <p className="mt-4 leading-8 text-black/70">
                This adventure combines hiking, wildlife, culture, and volcanic
                scenery. It is ideal for travelers looking for a remote and
                unforgettable experience away from the busiest safari routes.
              </p>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h3 className="text-2xl font-bold">Trek Highlights</h3>

              <ul className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-bold text-gold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/booking"
                className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white"
              >
                Book This Trek
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-bold uppercase tracking-widest text-gold">
            Adventure Itinerary
          </p>

          <h2 className="mt-3 text-4xl font-bold text-forest">
            4-Day Lake Natron & Ol Doinyo Lengai Adventure
          </h2>

          <div className="mt-10 space-y-6">
            {itinerary.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-forest">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-black/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-cream p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-forest">
              What Is Included
            </h2>

            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item}>✅ {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-cream p-8 shadow-xl">
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
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-bold uppercase tracking-widest text-gold">
            What To Bring
          </p>

          <h2 className="mt-3 text-4xl font-bold text-forest">
            Prepare for Your Adventure
          </h2>

          <ul className="mt-8 space-y-4 text-lg">
            {whatToBring.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Ready for Your Lake Natron Adventure?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Contact Kilimanjaro Travel today and let us plan your unforgettable
            Lake Natron & Ol Doinyo Lengai adventure.
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