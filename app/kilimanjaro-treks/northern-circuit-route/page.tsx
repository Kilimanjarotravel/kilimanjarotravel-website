import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
const highlights = [
  'Kilimanjaro’s longest and most scenic route',
  'Excellent acclimatization profile',
  '360° panoramic views around the mountain',
  'Very high summit success rate',
  'Experienced mountain guides and support crew',
];
const itinerary = [
  {
    title: 'Day 1: Londorossi Gate to Mti Mkubwa Camp',
    text: 'Begin your trek through the lush rainforest after registration at Londorossi Gate. Hike to Mti Mkubwa Camp for your first overnight stay.',
  },
  {
    title: 'Day 2: Mti Mkubwa Camp to Shira 1 Camp',
    text: 'Leave the rainforest and enter the heath and moorland zone while enjoying spectacular views across the Shira Plateau.',
  },
  {
    title: 'Day 3: Shira 1 Camp to Shira 2 Camp',
    text: 'Cross the scenic Shira Plateau at a relaxed pace, allowing your body to acclimatize while enjoying panoramic mountain views.',
  },
  {
    title: 'Day 4: Shira 2 Camp to Moir Hut',
    text: 'Hike through alpine terrain toward Moir Hut with optional acclimatization walks and stunning scenery.',
  },
  {
    title: 'Day 5: Moir Hut to Buffalo Camp',
    text: 'Travel along Kilimanjaro’s remote northern slopes with breathtaking views and very few other climbers.',
  },
  {
    title: 'Day 6: Buffalo Camp to Third Cave',
    text: 'Continue across the peaceful northern circuit while gradually gaining altitude for better acclimatization.',
  },
  {
    title: 'Day 7: Third Cave to School Hut',
    text: 'Reach School Hut, your final base camp before the summit attempt. Rest, prepare your equipment, and sleep early.',
  },
  {
    title: 'Day 8: Summit Day – Uhuru Peak to Mweka Camp',
    text: 'Start before midnight, reach Uhuru Peak at sunrise, then descend via Barafu Camp to Mweka Camp for your final overnight stay.',
  },
  {
    title: 'Day 9: Mweka Camp to Mweka Gate',
    text: 'Descend through the rainforest to Mweka Gate, receive your summit certificate, and transfer back to Arusha.',
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
export default function MaranguRoutePage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Northern Circuit Route"
  subtitle="Experience Kilimanjaro’s longest and most scenic route with exceptional acclimatization, breathtaking landscapes, and one of the highest summit success rates."
  image="/images/northern-circuit-route.jpg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Ultimate Kilimanjaro Adventure
</p>

<h2 className="mt-3 text-4xl font-bold">
  Northern Circuit Route Kilimanjaro Climb
</h2>

<p className="mt-6 leading-8 text-black/70">
  The Northern Circuit Route is Kilimanjaro’s longest route, offering outstanding acclimatization and some of the most spectacular scenery on the mountain. It circles the quieter northern slopes, providing panoramic views rarely seen on other routes.
</p>

<p className="mt-4 leading-8 text-black/70">
  The trek passes through rainforest, moorland, alpine desert, and the crater zone before reaching Uhuru Peak. It is ideal for climbers seeking the highest chance of reaching the summit while enjoying a peaceful and scenic adventure.
</p>
               <div className="mt-8 grid gap-4 sm:grid-cols-3">

  <div className="rounded-2xl bg-cream p-5">
    <p className="text-sm font-bold uppercase tracking-widest text-gold">
      Duration
    </p>
    <p className="mt-2 text-xl font-bold">
      9–10 Days
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
      US$2,750
    </p>
  </div>

</div>
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
    className="mt-8 inline-block rounded-full bg-yellow-500 px-8 py-4 font-bold text-white transition hover:bg-yellow-600"
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
  9-Day Northern Circuit Route Itinerary
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
  Prepare for Your Northern Circuit Climb
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
  Tell us your preferred travel dates, group size, and climbing experience.
  Our mountain specialists will prepare a personalized Northern Circuit Route itinerary
  and quotation for you.
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