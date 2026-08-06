import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
const highlights = [
  'Comfortable mountain hut accommodation',
  'Classic and most established Kilimanjaro route',
  'Beautiful rainforest and moorland scenery',
  'Experienced mountain guides and support crew',
  'Summit attempt at Uhuru Peak',
];
const itinerary = [
  {
    title: 'Day 1: Marangu Gate to Mandara Hut',
    text: 'After registration at Marangu Gate, begin your trek through the lush rainforest to Mandara Hut. Enjoy your first night on the mountain surrounded by beautiful forest scenery.',
  },
  {
    title: 'Day 2: Mandara Hut to Horombo Hut',
    text: 'Leave the rainforest behind and continue through the moorland zone with spectacular views of Mawenzi Peak before arriving at Horombo Hut for the night.',
  },
  {
    title: 'Day 3: Horombo Hut Acclimatization Day',
    text: 'Spend an extra day at Horombo Hut to acclimatize. Take a short hike toward Zebra Rocks before returning to the hut to rest and improve your chances of reaching the summit.',
  },
  {
    title: 'Day 4: Horombo Hut to Kibo Hut',
    text: 'Cross the alpine desert to Kibo Hut, the final base camp before the summit. Relax, prepare your equipment, and sleep early before the midnight ascent.',
  },
  {
    title: 'Day 5: Kibo Hut to Uhuru Peak and Descend to Horombo Hut',
    text: 'Begin the summit climb shortly after midnight. Reach Gilman’s Point, continue to Uhuru Peak—the highest point in Africa—and then descend to Horombo Hut for overnight rest.',
  },
  {
    title: 'Day 6: Horombo Hut to Marangu Gate',
    text: 'Descend through the moorland and rainforest to Marangu Gate, receive your summit certificate, and transfer back to Arusha for a well-deserved celebration.',
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
  'Hiking boots',
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
  title="Marangu Route"
  subtitle="Climb Kilimanjaro via the Marangu Route, the only route offering comfortable mountain hut accommodation and a classic trekking experience."
  image="/images/marangu-route.jpg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
  Classic Kilimanjaro Hut Route
</p>

<h2 className="mt-3 text-4xl font-bold">
  Marangu Route Kilimanjaro Climb
</h2>

<p className="mt-6 leading-8 text-black/70">
  The Marangu Route is the oldest and one of the most popular routes on Mount Kilimanjaro. It is the only route that provides overnight accommodation in mountain huts, making it a comfortable choice for many climbers.
</p>

<p className="mt-4 leading-8 text-black/70">
  The trail passes through lush rainforest, moorland, alpine desert, and finally reaches Uhuru Peak. It is ideal for climbers seeking a classic Kilimanjaro experience with hut accommodation instead of camping.
</p>
               <div className="mt-8 grid gap-4 sm:grid-cols-3">
  <div className="rounded-2xl bg-cream p-5">
    <p className="text-sm font-bold uppercase tracking-widest text-gold">
      Duration
    </p>
    <p className="mt-2 text-xl font-bold">5–6 Days</p>
  </div>

  <div className="rounded-2xl bg-cream p-5">
    <p className="text-sm font-bold uppercase tracking-widest text-gold">
      Difficulty
    </p>
    <p className="mt-2 text-xl font-bold">Moderate</p>
  </div>

  <div className="rounded-2xl bg-cream p-5">
    <p className="text-sm font-bold uppercase tracking-widest text-gold">
      From
    </p>
    <p className="mt-2 text-xl font-bold text-gold">
      US$1,850
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
      6-Day Marangu Route Itinerary
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
      Prepare for Your Marangu Climb
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
      Our mountain specialists will prepare a personalized Marangu Route itinerary
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