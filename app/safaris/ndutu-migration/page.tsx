import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Witness the Great Migration across the Ndutu plains',
  'See wildebeest calves during the calving season',
  'Enjoy excellent predator sightings',
  'Explore southern Serengeti and the Ngorongoro Conservation Area',
];
const itinerary = [
  {
    title: 'Day 1: Arrival in Arusha',
    text: 'Meet our representative at the airport and transfer to your hotel in Arusha for relaxation and safari briefing.',
  },
  {
    title: 'Day 2: Arusha to Ngorongoro Highlands',
    text: 'Travel toward the Ngorongoro Conservation Area and enjoy beautiful highland scenery before continuing toward the Ndutu region.',
  },
  {
    title: 'Day 3: Ndutu Migration Game Drives',
    text: 'Explore the Ndutu plains in search of large wildebeest herds, newborn calves, zebras, lions, cheetahs, hyenas, and other predators.',
  },
  {
    title: 'Day 4: Full Day in Ndutu',
    text: 'Spend another full day following current migration movements and enjoying wildlife photography across the southern Serengeti and Ndutu plains.',
  },
  {
    title: 'Day 5: Ngorongoro Crater',
    text: 'Descend into the Ngorongoro Crater for excellent wildlife viewing before continuing to your lodge in the highlands.',
  },
  {
    title: 'Day 6: Return to Arusha',
    text: 'Enjoy breakfast and return to Arusha, where you will be transferred to your hotel or the airport.',
  },
];

const included = [
  'Airport pickup and drop-off',
  'Private safari vehicle',
  'Professional English-speaking guide',
  'Safari accommodation',
  'Park and conservation fees',
  'Meals during the safari',
  'Drinking water',
];

const excluded = [
  'International and domestic flights unless specified',
  'Travel insurance',
  'Visa fees',
  'Tips and gratuities',
  'Personal expenses',
  'Alcoholic drinks',
];

const whatToBring = [
  'Comfortable safari clothing',
  'Sun hat and sunscreen',
  'Camera and binoculars',
  'Light jacket',
  'Travel documents',
  'Personal medication',
];

export default function NdutuMigrationPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Ndutu Migration Safari"
  subtitle="Experience the Great Migration and calving season across the Ndutu plains of southern Serengeti."
  image="/images/ndutu-two.jpg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                Seasonal Safari Experience
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Ndutu Great Migration and Calving Season
              </h2>

              <p className="mt-6 leading-8 text-black/70">
                Travel to the Ndutu plains in the southern Serengeti to witness the Great Migration during the calving season. Thousands of wildebeest gather in this area, creating excellent opportunities to see newborn calves and predators.
              </p>

              <p className="mt-4 leading-8 text-black/70">
                The Ndutu season is seasonal and wildlife movements depend on rainfall, but our experienced guides follow current migration patterns to give you the best possible safari experience.
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
      6-Day Ndutu Migration Safari
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
      Prepare for Your Ndutu Migration Safari
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
      Ready for Your Ndutu Migration Safari?
    </h2>

    <p className="mt-5 text-lg leading-8 text-white/80">
      Share your travel dates, preferred accommodation, group size, and budget.
      Our safari specialists will create a personalized Ndutu migration
      itinerary based on current wildlife movements.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link
        href="/booking"
        className="rounded-full bg-gold px-8 py-4 font-bold text-white"
      >
        Request a Migration Safari
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