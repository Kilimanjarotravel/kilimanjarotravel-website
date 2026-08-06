import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
const highlights = [
  'Steep and challenging ascent',
  'Ideal for experienced climbers',
  'Excellent wilderness scenery',
  'Less crowded than other routes',
  'Experienced mountain guides and support crew',
];
const itinerary = [
  {
    title: 'Day 1: Umbwe Gate to Umbwe Cave Camp',
    text: 'Begin your climb through dense rainforest from Umbwe Gate to Umbwe Cave Camp. This is a steep and scenic introduction to the route.',
  },
  {
    title: 'Day 2: Umbwe Cave Camp to Barranco Camp',
    text: 'Continue through heather and moorland before reaching the spectacular Barranco Valley. This section offers excellent acclimatization opportunities.',
  },
  {
    title: 'Day 3: Barranco Camp to Karanga Camp',
    text: 'Climb the famous Barranco Wall and continue across alpine terrain to Karanga Camp while enjoying breathtaking mountain views.',
  },
  {
    title: 'Day 4: Karanga Camp to Barafu Camp',
    text: 'Reach Barafu Camp, your base for the summit attempt. Rest, prepare your gear, and sleep early before the midnight climb.',
  },
  {
    title: 'Day 5: Summit Day – Uhuru Peak to Mweka Camp',
    text: 'Begin the summit attempt before midnight, reach Uhuru Peak at sunrise, then descend via Barafu Camp to Mweka Camp for your final overnight stay.',
  },
  {
    title: 'Day 6: Mweka Camp to Mweka Gate',
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
export default function UmbweRoutePage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Umbwe Route"
  subtitle="Challenge yourself on Kilimanjaro’s steepest and most adventurous route, offering dramatic scenery and an unforgettable climbing experience."
  image="/images/umbwe-route.jpg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Challenging Kilimanjaro Adventure
</p>

<h2 className="mt-3 text-4xl font-bold text-forest">
  6-Day Umbwe Route Itinerary
</h2>

<p className="mt-6 leading-8 text-black/70">
  The Umbwe Route is Kilimanjaro’s steepest and most direct trail to the summit. It is designed for experienced trekkers looking for a physically demanding adventure with spectacular scenery.
</p>

<p className="mt-4 leading-8 text-black/70">
  The route passes through dense rainforest, moorland, alpine desert, and the crater zone before reaching Uhuru Peak. Due to its rapid ascent, it is recommended for climbers with previous high-altitude trekking experience.
</p>
               <div className="mt-8 grid gap-4 sm:grid-cols-3">

  <div className="rounded-2xl bg-cream p-5">
    <p className="text-sm font-bold uppercase tracking-widest text-gold">
      Duration
    </p>
    <p className="mt-2 text-xl font-bold">
      6–7 Days
    </p>
  </div>

  <div className="rounded-2xl bg-cream p-5">
    <p className="text-sm font-bold uppercase tracking-widest text-gold">
      Difficulty
    </p>
    <p className="mt-2 text-xl font-bold">
      Challenging
    </p>
  </div>

  <div className="rounded-2xl bg-cream p-5">
    <p className="text-sm font-bold uppercase tracking-widest text-gold">
      From
    </p>
    <p className="mt-2 text-xl font-bold text-gold">
      US$1,950
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
  6-Day Umbwe Route Itinerary
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
  Prepare for Your Umbwe Climb
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
  Our mountain specialists will prepare a personalized Umbwe Route itinerary
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