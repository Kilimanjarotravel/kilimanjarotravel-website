import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Trek Tanzania’s second-highest mountain',
  'Enjoy views of Mount Kilimanjaro',
  'Walk through forests and volcanic landscapes',
  'See wildlife on the lower slopes',
  'Excellent preparation for Kilimanjaro',
];
const itinerary = [
  {
    title: 'Day 1: Momella Gate to Miriakamba Hut',
    text: 'Begin the trek through montane forest, open grassland, and wildlife-rich lower slopes before reaching Miriakamba Hut.',
  },
  {
    title: 'Day 2: Miriakamba Hut to Saddle Hut',
    text: 'Climb through beautiful forest and heather zones toward Saddle Hut, with excellent views of the crater and surrounding landscapes.',
  },
  {
    title: 'Day 3: Summit Attempt and Descent',
    text: 'Start before sunrise for Socialist Peak, enjoy dramatic summit views, then descend toward Miriakamba Hut.',
  },
  {
    title: 'Day 4: Return to Momella Gate',
    text: 'Descend through the forest to Momella Gate, where your driver will transfer you back to Arusha.',
  },
];

const included = [
  'Park entrance fees',
  'Mountain huts',
  'Professional mountain guide',
  'Armed ranger',
  'Porters and cook',
  'Meals during the trek',
  'Drinking water',
  'Transfers from Arusha',
];

const excluded = [
  'Flights',
  'Travel insurance',
  'Personal trekking equipment',
  'Tips and gratuities',
  'Personal expenses',
  'Alcoholic drinks',
];

const whatToBring = [
  'Warm trekking clothes',
  'Waterproof jacket',
  'Comfortable hiking boots',
  'Daypack',
  'Sun hat and sunscreen',
  'Personal medication',
];

export default function MountMeruPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Mount Meru Trek"
  subtitle="Climb Tanzania's second-highest mountain through beautiful forests, wildlife-rich landscapes, and dramatic summit views."
  image="/images/mount-meru.jpg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Trekking and Wildlife Adventure
</p>

              <h2 className="mt-3 text-4xl font-bold">
  Mount Meru Trekking Adventure
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Climb Mount Meru, Tanzania's second-highest mountain, on a scenic trek through forests, open moorlands, and dramatic volcanic landscapes. The route offers excellent views of Mount Kilimanjaro and opportunities to see wildlife along the lower slopes.
              </p>

               <p className="mt-4 leading-8 text-black/70">
              Mount Meru is ideal for trekkers looking for a quieter mountain experience or preparing for a Kilimanjaro climb. The trek combines natural beauty, adventure, and rewarding summit views.
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
            Trek Itinerary
          </p>

          <h2 className="mt-3 text-4xl font-bold text-forest">
            4-Day Mount Meru Trek
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
      Prepare for Your Mount Meru Trek
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
      Ready for Your Mount Meru Adventure?
    </h2>

    <p className="mt-5 text-lg leading-8 text-white/80">
      Contact Kilimanjaro Travel today and receive a tailor-made quotation for
      your Mount Meru trekking adventure.
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