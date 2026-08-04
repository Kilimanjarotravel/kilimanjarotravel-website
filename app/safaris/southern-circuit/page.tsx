import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Explore Nyerere National Park (Selous)',
  'Visit Ruaha National Park',
  'Game drives in Mikumi National Park',
  'Boat safari on the Rufiji River',
  'Walking safaris with experienced guides',
];
const itinerary = [
  {
    title: 'Day 1: Arrival in Dar es Salaam',
    text: 'Meet our representative and transfer to your hotel before receiving a safari briefing.',
  },
  {
    title: 'Day 2: Nyerere National Park',
    text: 'Travel to Nyerere National Park and enjoy your first afternoon game drive in one of Africa’s largest protected wildlife areas.',
  },
  {
    title: 'Day 3: Boat Safari & Walking Safari',
    text: 'Experience a boat safari on the Rufiji River followed by a guided walking safari for a unique perspective of the wilderness.',
  },
  {
    title: 'Day 4: Mikumi National Park',
    text: 'Drive to Mikumi National Park and enjoy afternoon game drives while searching for elephants, lions, zebras, giraffes, and buffaloes.',
  },
  {
    title: 'Day 5: Ruaha National Park',
    text: 'Continue to Ruaha National Park for spectacular game drives in one of Tanzania’s most remote and wildlife-rich destinations.',
  },
  {
    title: 'Day 6: Return',
    text: 'After breakfast, transfer back to Dar es Salaam or fly to your next destination.',
  },
];

const included = [
  'Airport transfers',
  'Private safari vehicle',
  'Professional safari guide',
  'Park entrance fees',
  'Accommodation',
  'Meals during the safari',
  'Drinking water',
];

const excluded = [
  'Flights unless specified',
  'Travel insurance',
  'Visa fees',
  'Tips and gratuities',
  'Personal expenses',
  'Alcoholic drinks',
];

const whatToBring = [
  'Comfortable safari clothing',
  'Sun hat and sunscreen',
  'Camera or binoculars',
  'Light jacket',
  'Travel documents',
  'Personal medication',
];

export default function SouthernCircuitPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Southern Circuit Safari"
  subtitle="Explore Tanzania's wild and less-crowded southern parks, including Nyerere National Park, Mikumi, Ruaha, and Udzungwa Mountains."
  image="/images/nouthern-two.jpg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                Wild & Untouched Tanzania
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Southern Tanzania Safari Adventure
              </h2>

              <p className="mt-6 leading-8 text-black/70">
                Explore Tanzania’s spectacular Southern Circuit, home to vast wilderness areas, fewer crowds, and exceptional wildlife. Visit iconic destinations such as Nyerere National Park, Ruaha National Park, Mikumi National Park, and the Udzungwa Mountains for an unforgettable safari experience.
              </p>

              <p className="mt-4 leading-8 text-black/70">
                The Southern Circuit offers authentic safari experiences with boat safaris, walking safaris, game drives, and incredible biodiversity. It is perfect for travelers seeking a more remote and exclusive adventure.
              </p>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h3 className="text-2xl font-bold">Safari Highlights</h3>

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
                Book This Safari
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-cream py-20">
  <div className="mx-auto max-w-6xl px-6">
    <p className="font-bold uppercase tracking-widest text-gold">
      Safari Itinerary
    </p>

    <h2 className="mt-3 text-4xl font-bold text-forest">
      6-Day Southern Circuit Safari
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
      Prepare for Your Southern Circuit Safari
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
      Ready for Your Southern Circuit Safari?
    </h2>

    <p className="mt-5 text-lg leading-8 text-white/80">
      Share your travel dates, preferred parks, accommodation style, group
      size, and budget. Our safari specialists will create a personalized
      Southern Circuit itinerary and quotation for you.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link
        href="/booking"
        className="rounded-full bg-gold px-8 py-4 font-bold text-white"
      >
        Request a Southern Safari
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