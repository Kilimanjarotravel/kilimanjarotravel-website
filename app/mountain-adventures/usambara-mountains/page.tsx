import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  "Explore the beautiful Usambara Mountains",
"Visit traditional villages",
"Hike through lush forests and waterfalls",
"Enjoy breathtaking panoramic viewpoints",
];
const itinerary = [
  {
    title: 'Day 1: Arrival and Village Walk',
    text: 'Arrive in the Usambara Mountains, meet your local guide, and enjoy a gentle village walk while learning about local life, farms, and traditions.',
  },
  {
    title: 'Day 2: Forest Hike and Waterfalls',
    text: 'Hike through lush forest trails, visit waterfalls, enjoy birdwatching, and discover the rich plant life of the Usambara Mountains.',
  },
  {
    title: 'Day 3: Scenic Viewpoints and Cultural Experience',
    text: 'Visit panoramic viewpoints, local markets, and cultural sites before returning to your accommodation or continuing your journey.',
  },
];

const included = [
  'Professional local guide',
  'Village and cultural visits',
  'Entrance fees',
  'Drinking water',
  'Local transfers during the tour',
];

const excluded = [
  'Flights',
  'Travel insurance',
  'Accommodation unless requested',
  'Tips and gratuities',
  'Personal expenses',
  'Alcoholic drinks',
];

const whatToBring = [
  'Comfortable hiking shoes',
  'Light jacket or raincoat',
  'Sun hat and sunscreen',
  'Camera or binoculars',
  'Reusable water bottle',
  'Personal medication',
];
<section className="bg-cream py-20">
  <div className="mx-auto max-w-6xl px-6">
    <p className="font-bold uppercase tracking-widest text-gold">
      Experience Itinerary
    </p>

    <h2 className="mt-3 text-4xl font-bold text-forest">
      Explore the Usambara Mountains
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

export default function UsambaraMountainsPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Usambara Mountains Experience"
  subtitle="Discover lush forests, scenic viewpoints, local villages, waterfalls, and the peaceful beauty of Tanzania's Usambara Mountains."
  image="/images/usambara-safari.jpg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Mountain and Cultural Experience
</p>

              <h2 className="mt-3 text-4xl font-bold">
  Explore the Usambara Mountains
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Explore the lush forests, scenic viewpoints, waterfalls, and rich cultural heritage of the Usambara Mountains. This tour is perfect for nature lovers and hikers.
              </p>

              <p className="mt-4 leading-8 text-black/70">
                Enjoy guided hikes, village visits, bird watching, and breathtaking landscapes while experiencing one of Tanzania's most beautiful mountain regions.
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
      Experience Itinerary
    </p>

    <h2 className="mt-3 text-4xl font-bold text-forest">
      Explore the Usambara Mountains
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
      Prepare for Your Usambara Experience
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
      Ready for Your Usambara Adventure?
    </h2>

    <p className="mt-5 text-lg leading-8 text-white/80">
      Contact Kilimanjaro Travel today and let us create a memorable Usambara Mountains adventure tailored to your interests.
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