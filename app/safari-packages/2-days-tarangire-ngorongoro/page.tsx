import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    day: 'Day 1',
    title: 'Arusha to Tarangire National Park',
    text: 'Pickup from your hotel in Arusha and drive to Tarangire National Park for a full-day game drive. Explore the park’s famous baobab landscapes and search for elephants, giraffes, zebras, lions, wildebeest and rich birdlife. Enjoy a picnic lunch inside the park before continuing your safari. In the late afternoon, drive to your lodge or tented camp for dinner and overnight.',
    accommodation: 'Lodge or tented camp near Karatu or Lake Manyara',
    meals: 'Lunch and Dinner',
  },
  {
    day: 'Day 2',
    title: 'Ngorongoro Crater Safari and Return to Arusha',
    text: 'After breakfast, drive to the Ngorongoro Conservation Area and descend into the crater for a game drive. Search for lions, elephants, buffaloes, hippos, zebras, wildebeest, hyenas and, with luck, black rhinos. Enjoy a picnic lunch near the hippo pool before ascending the crater and returning to Arusha in the late afternoon.',
    accommodation: 'No accommodation included after the safari',
    meals: 'Breakfast and Lunch',
  },
];

const included = [
  'Hotel pickup and drop-off in Arusha',
  'Private 4x4 safari vehicle with pop-up roof',
  'Professional English-speaking safari guide',
  'Tarangire National Park entrance fees',
  'Ngorongoro Conservation Area and crater service fees',
  'One night lodge or tented camp accommodation',
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
  'Light jacket for cool mornings',
  'Personal medication',
  'Small day bag',
];

const priceRows = [
  { people: '1 person', price: 'US$1,450' },
  { people: '2 people', price: 'US$980 per person' },
  { people: '3 people', price: 'US$850 per person' },
  { people: '4 people', price: 'US$760 per person' },
  { people: '5–6 people', price: 'US$650 per person' },
];

export default function TwoDaysTarangireNgorongoroPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="2 Days Tarangire & Ngorongoro Safari"
        subtitle="Discover Tarangire’s elephants and baobabs, then descend into the spectacular Ngorongoro Crater."
        image="/images/lion.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="font-bold text-gold">SAFARI OVERVIEW</p>

              <h2 className="section-title mt-3">
                Two Unforgettable Days in Northern Tanzania
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                This private two-day safari combines Tarangire National Park
                with the world-famous Ngorongoro Crater. It is ideal for
                travelers with limited time who still want to experience
                dramatic landscapes and excellent wildlife viewing.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                Tarangire is known for large elephant herds, ancient baobab
                trees and classic savannah scenery. Ngorongoro Crater offers
                one of Africa&apos;s best opportunities to see a wide variety
                of wildlife within a compact area.
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
                  <strong>Duration:</strong> 2 Days / 1 Night
                </p>

                <p>
                  <strong>Departure:</strong> Arusha
                </p>

                <p>
                  <strong>Destinations:</strong> Tarangire & Ngorongoro
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

                <p className="mt-2 text-4xl font-bold">
                  US$650
                </p>

                <p className="mt-1 text-sm">per person</p>

                <p className="mt-3 text-xs leading-5">
                  Based on 5–6 people sharing. Final price depends on group
                  size, accommodation level and travel dates.
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
                alt="Two-day Tarangire and Ngorongoro safari"
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
            Ready for Your Two-Day Safari?
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