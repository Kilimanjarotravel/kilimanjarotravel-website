import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    day: 'Day 1',
    title: 'Arusha to Tarangire National Park',
    text: 'Pickup from your hotel in Arusha and drive to Tarangire National Park. Enjoy a full-day game drive among giant baobab trees while searching for elephants, lions, giraffes, zebras, wildebeest and abundant birdlife.',
    accommodation: 'Lodge or tented camp near Karatu or Lake Manyara',
    meals: 'Lunch and Dinner',
  },
  {
    day: 'Day 2',
    title: 'Lake Manyara National Park Safari',
    text: 'After breakfast, explore Lake Manyara National Park. Drive through groundwater forest, woodland and lakeshore habitats while looking for elephants, giraffes, buffaloes, hippos, monkeys, antelopes and rich birdlife.',
    accommodation: 'Lodge or tented camp near Karatu or Lake Manyara',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 3',
    title: 'Lake Manyara Area to Serengeti National Park',
    text: 'Travel through the Ngorongoro highlands toward Serengeti National Park. Enter the park and enjoy an afternoon game drive across the famous plains while searching for predators, large herds and other wildlife.',
    accommodation: 'Lodge or tented camp in Serengeti',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 4',
    title: 'Full-Day Serengeti Safari',
    text: 'Spend the full day exploring Serengeti National Park. Your guide will choose the best wildlife areas according to the season and recent animal movements. Enjoy morning and afternoon game drives with a picnic lunch inside the park.',
    accommodation: 'Lodge or tented camp in Serengeti',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 5',
    title: 'Second Full Day in Serengeti',
    text: 'Enjoy another full day in Serengeti, giving you more time for wildlife viewing and photography. Search for lions, cheetahs, leopards, elephants, giraffes, zebras, wildebeest and many other species.',
    accommodation: 'Lodge or tented camp in Serengeti',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 6',
    title: 'Serengeti to Ngorongoro Conservation Area',
    text: 'Enjoy a morning game drive in Serengeti before traveling toward the Ngorongoro Conservation Area. Continue wildlife viewing along the way and arrive near the crater rim or Karatu for dinner and overnight.',
    accommodation: 'Lodge or tented camp near Ngorongoro or Karatu',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
  day: 'Day 7',
  title: 'Serengeti to Ngorongoro Conservation Area',
  text: 'Enjoy a morning game drive in Serengeti before traveling toward the Ngorongoro Conservation Area. Continue wildlife viewing along the way and arrive near the crater rim or Karatu for dinner and overnight.',
  accommodation: 'Lodge or tented camp near Ngorongoro or Karatu',
  meals: 'Breakfast, Lunch and Dinner',
},
  {
  day: 'Day 8',
  title: 'Serengeti to Ngorongoro Conservation Area',
  text: 'Enjoy a relaxed morning game drive in Serengeti before traveling toward the Ngorongoro Conservation Area. Continue wildlife viewing along the way and arrive near the crater rim or Karatu for dinner and overnight.',
  accommodation: 'Lodge or tented camp near Ngorongoro or Karatu',
  meals: 'Breakfast, Lunch and Dinner',
},
{
  day: 'Day 9',
  title: 'Ngorongoro Crater Safari and Return to Arusha',
  text: 'After breakfast, descend into the Ngorongoro Crater for a final game drive. Search for lions, elephants, buffaloes, zebras, wildebeest, hippos, hyenas and, with luck, black rhinos before returning to Arusha.',
  accommodation: 'No accommodation included after the safari',
  meals: 'Breakfast and Lunch',
},
];

const included = [
  'Hotel pickup and drop-off in Arusha',
  'Private 4x4 safari vehicle with pop-up roof',
  'Professional English-speaking safari guide',
  'Tarangire National Park entrance fees',
  'Lake Manyara National Park entrance fees',
  'Serengeti National Park entrance fees',
  'Ngorongoro Conservation Area and crater service fees',
  'Six nights lodge or tented camp accommodation',
  'Meals as listed in the itinerary',
  'Drinking water during the safari',
];

const excluded = [
  'International and domestic flights',
  'Travel insurance',
  'Visa fees',
  'Tips and gratuities',
  'Alcoholic and soft drinks',
  'Personal expenses',
  'Optional activities not listed in the itinerary',
];

const whatToBring = [
  'Comfortable safari clothing',
  'Sun hat and sunscreen',
  'Camera or binoculars',
  'Warm jacket for cool mornings',
  'Personal medication',
  'Small day bag',
];

const priceRows = [
  { people: '1 person', price: 'US$4,850' },
  { people: '2 people', price: 'US$3,080 per person' },
  { people: '3 people', price: 'US$2,580 per person' },
  { people: '4 people', price: 'US$2,300 per person' },
  { people: '5–6 people', price: 'US$2,040 per person' },
];

export default function NineDaysNorthernCircuitPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="9 Days Northern Circuit Safari"
        subtitle="Experience Tarangire, Lake Manyara, Serengeti and Ngorongoro on an unforgettable seven-day safari."
        image="/images/lion.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="font-bold text-gold">SAFARI OVERVIEW</p>

              <h2 className="section-title mt-3">
                A Complete Northern Tanzania Safari
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                This private seven-day safari gives you more time to explore
                Tanzania&apos;s famous Northern Circuit at a relaxed pace.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                Visit Tarangire, Lake Manyara, Serengeti and Ngorongoro while
                enjoying varied landscapes, extensive wildlife viewing and
                additional time on the Serengeti plains.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-forest">
                Day-by-Day Itinerary
              </h2>

              <div className="mt-8 space-y-6">
                {itinerary.map((item) => (
                  <article
                    key={item.day}
                    className="rounded-3xl bg-cream p-7 shadow-lg"
                  >
                    <p className="font-bold text-gold">{item.day}</p>

                    <h3 className="mt-2 text-2xl font-bold text-forest">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-black/70">
                      {item.text}
                    </p>

                    <div className="mt-5 space-y-2 border-t border-black/10 pt-5 text-black/70">
                      <p>
                        <strong className="text-forest">Accommodation:</strong>{' '}
                        {item.accommodation}
                      </p>

                      <p>
                        <strong className="text-forest">Meals:</strong>{' '}
                        {item.meals}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="h-fit rounded-3xl bg-forest p-8 text-white shadow-xl">
              <h2 className="text-2xl font-bold">Safari Details</h2>

              <div className="mt-6 space-y-4">
                <p>
                  <strong>Duration:</strong> 9 Days / 8 Nights
                </p>

                <p>
                  <strong>Departure:</strong> Arusha
                </p>

                <p>
                  <strong>Destinations:</strong> Tarangire, Lake Manyara,
                  Serengeti & Ngorongoro
                </p>

                <p>
                  <strong>Tour Type:</strong> Private Safari
                </p>

                <p>
                  <strong>Accommodation:</strong> Lodge / Tented Camp
                </p>

                <p>
                  <strong>Best Time:</strong> All Year
                </p>
              </div>

              <div className="mt-8 rounded-2xl bg-gold p-5 text-center">
                <p className="text-sm font-bold uppercase tracking-wide">
                  Starting From
                </p>

                <p className="mt-2 text-4xl font-bold">US$2,040</p>

                <p className="mt-1 text-sm">per person</p>

                <p className="mt-3 text-xs leading-5">
                  Based on 5–6 people sharing. Final price depends on group
                  size, accommodation level, season and travel dates.
                </p>
              </div>

              <Link
                href="/booking"
                className="mt-8 inline-block w-full rounded-full bg-gold px-6 py-3 text-center font-bold text-white"
              >
                Request a Quote
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold text-gold">PRIVATE SAFARI PRICES</p>

            <h2 className="section-title mt-3">
              Price by Group Size
            </h2>

            <p className="mt-5 leading-7 text-black/70">
              These are sample starting prices. Final quotations may vary
              depending on accommodation, season, park fees and availability.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl bg-white shadow-xl">
            <div className="grid grid-cols-2 bg-forest px-6 py-4 font-bold text-white">
              <span>Group Size</span>
              <span className="text-right">Starting Price</span>
            </div>

            {priceRows.map((row) => (
              <div
                key={row.people}
                className="grid grid-cols-2 border-b border-black/10 px-6 py-4 last:border-b-0"
              >
                <span className="font-medium text-forest">{row.people}</span>
                <span className="text-right text-black/70">{row.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-forest">
              What Is Included
            </h2>

            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item}>✅ {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
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
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/safari-vehicle.jpeg"
                alt="Seven-day Northern Circuit safari"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold text-gold">WHAT TO BRING</p>

              <h2 className="section-title mt-3">
                Prepare for Your Safari
              </h2>

              <ul className="mt-6 space-y-3 text-lg">
                {whatToBring.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Ready for Your Seven-Day Safari?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Contact Kilimanjaro Travel for availability, accommodation options
            and a tailor-made quotation based on your group size and travel
            dates.
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