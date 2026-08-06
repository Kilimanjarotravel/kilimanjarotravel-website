import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Scenic and less-crowded starting section',
  'Excellent acclimatization profile',
  'Cross the beautiful Shira Plateau',
  'Experienced mountain guides and support crew',
  'High summit success potential',
];

const itinerary = [
  {
    title: 'Day 1: Londorossi Gate to Mti Mkubwa Camp',
    text: 'Begin the trek through the western rainforest after registration at Londorossi Gate. Continue to Mti Mkubwa Camp for your first overnight stay.',
  },
  {
    title: 'Day 2: Mti Mkubwa Camp to Shira 1 Camp',
    text: 'Leave the rainforest and enter the heath and moorland zone while enjoying views across the Shira Plateau.',
  },
  {
    title: 'Day 3: Shira 1 Camp to Shira 2 Camp',
    text: 'Cross the scenic Shira Plateau at a relaxed pace, allowing time for acclimatization and beautiful mountain views.',
  },
  {
    title: 'Day 4: Shira 2 Camp to Barranco Camp via Lava Tower',
    text: 'Climb toward Lava Tower for acclimatization before descending to Barranco Camp following the climb high, sleep low principle.',
  },
  {
    title: 'Day 5: Barranco Camp to Karanga Camp',
    text: 'Climb the famous Barranco Wall before continuing to Karanga Camp.',
  },
  {
    title: 'Day 6: Karanga Camp to Barafu Camp',
    text: 'Reach Barafu Camp and prepare for the summit attempt.',
  },
  {
    title: 'Day 7: Summit Day – Uhuru Peak to Mweka Camp',
    text: 'Summit Uhuru Peak before descending to Mweka Camp.',
  },
  {
    title: 'Day 8: Mweka Camp to Mweka Gate',
    text: 'Descend through the rainforest to Mweka Gate before returning to Arusha.',
  },
];

const included = [
  'Park entrance fees',
  'Camping fees',
  'Professional mountain guide',
  'Assistant guides',
  'Porters and cook',
  'Mountain tents',
  'Meals during the trek',
  'Drinking water',
  'Transfers to and from the mountain',
];

const excluded = [
  'Flights',
  'Travel insurance',
  'Personal trekking equipment',
  'Tips for the mountain crew',
  'Personal expenses',
  'Alcoholic drinks',
];

const whatToBring = [
  'Warm trekking clothes',
  'Waterproof jacket',
  'Comfortable hiking boots',
  'Sleeping bag',
  'Headlamp',
  'Trekking poles',
  'Sun hat and sunscreen',
  'Personal medication',
];

export default function LemoshoRoutePage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Lemosho Route"
        subtitle="Climb Kilimanjaro through rainforest, the scenic Shira Plateau, alpine desert and rewarding summit landscapes."
        image="/images/lemosho-route.jpg"
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>

              <p className="font-bold uppercase tracking-widest text-gold">
                Scenic and Well-Acclimatized Trek
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Lemosho Route Kilimanjaro Climb
              </h2>

              <p className="mt-6 leading-8 text-black/70">
                The Lemosho Route is one of Kilimanjaro's most scenic climbing routes. Beginning on the quiet western side of the mountain, it provides excellent acclimatization and outstanding success rates.
              </p>

              <p className="mt-4 leading-8 text-black/70">
                The trek passes through rainforest, heath, the beautiful Shira Plateau, alpine desert and finally reaches Uhuru Peak, Africa's highest point.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-cream p-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-gold">
                    Duration
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    7–8 Days
                  </p>
                </div>

                <div className="rounded-2xl bg-cream p-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-gold">
                    Difficulty
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    Moderate
                  </p>
                </div>

                <div className="rounded-2xl bg-cream p-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-gold">
                    From
                  </p>
                  <p className="mt-2 text-xl font-bold text-gold">
                    US$2,050
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">

              <h3 className="text-2xl font-bold">
                Trek Highlights
              </h3>

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
                className="mt-8 inline-block rounded-full bg-yellow-500 px-8 py-4 font-bold text-white hover:bg-yellow-600"
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
            8-Day Lemosho Route Itinerary
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
            Prepare for Your Lemosho Climb
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
            Ready to Climb Kilimanjaro?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Tell us your preferred travel dates, group size and climbing
            experience. Our mountain specialists will prepare a personalized
            Lemosho Route itinerary and quotation for you.
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