import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    day: 'Day 1',
    title: 'Arusha to Tarangire National Park',
    text: 'Meet your private safari guide in Arusha and drive to Tarangire National Park. Enjoy your first game drive through beautiful landscapes filled with giant baobab trees, elephants, giraffes, zebras, wildebeest, lions and abundant birdlife.',
    accommodation: 'Luxury lodge or tented camp near Tarangire',
    meals: 'Lunch and Dinner',
  },
  {
    day: 'Day 2',
    title: 'Lake Manyara National Park',
    text: 'After breakfast, continue to Lake Manyara National Park. Explore the groundwater forest, woodland and lakeshore areas while searching for elephants, buffaloes, giraffes, hippos, monkeys and colourful birdlife.',
    accommodation: 'Luxury lodge or tented camp near Lake Manyara',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 3',
    title: 'Lake Manyara to Serengeti National Park',
    text: 'Travel through the beautiful Ngorongoro highlands toward Serengeti National Park. Enter the legendary Serengeti plains and enjoy an afternoon game drive while searching for wildlife across the endless grasslands.',
    accommodation: 'Luxury lodge or tented camp in Serengeti',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 4',
    title: 'Full-Day Serengeti Safari',
    text: 'Spend a full day exploring Serengeti National Park. Your private guide will select the best wildlife areas according to the season and recent animal movements. Look for lions, cheetahs, leopards, elephants, giraffes, zebras and wildebeest.',
    accommodation: 'Luxury lodge or tented camp in Serengeti',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 5',
    title: 'Second Full Day in Serengeti',
    text: 'Enjoy another full day of wildlife viewing in Serengeti. Take your time exploring different areas of the park and enjoy excellent opportunities for photography and unforgettable wildlife encounters.',
    accommodation: 'Luxury lodge or tented camp in Serengeti',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 6',
    title: 'Serengeti to Ngorongoro Conservation Area',
    text: 'Enjoy a morning game drive in Serengeti before travelling toward the Ngorongoro Conservation Area. Continue through spectacular highland scenery and arrive at your lodge for a relaxing evening.',
    accommodation: 'Luxury lodge near Ngorongoro or Karatu',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 7',
    title: 'Ngorongoro Crater Safari & Transfer to Zanzibar',
    text: 'Descend into the Ngorongoro Crater for a memorable morning game drive. Search for lions, elephants, buffaloes, zebras, hippos, hyenas and, with luck, black rhinos. After lunch, transfer for your flight to Zanzibar.',
    accommodation: 'Luxury beach resort in Zanzibar',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 8',
    title: 'Zanzibar Beach Relaxation',
    text: 'Wake up beside the Indian Ocean and enjoy a relaxed day at your luxury beach resort. Swim in the turquoise waters, enjoy the beach and take time to relax after your safari adventure.',
    accommodation: 'Luxury beach resort in Zanzibar',
    meals: 'Breakfast and Dinner',
  },
  {
    day: 'Day 9',
    title: 'Stone Town Cultural Experience',
    text: 'Explore the historic streets of Stone Town with a private guide. Discover Zanzibar’s fascinating history, culture, architecture and local markets before enjoying a relaxing evening by the ocean.',
    accommodation: 'Luxury beach resort in Zanzibar',
    meals: 'Breakfast and Dinner',
  },
  {
    day: 'Day 10',
    title: 'Spice Farm Experience',
    text: 'Visit a traditional spice farm and discover why Zanzibar is known as the Spice Island. Learn about cloves, cinnamon, vanilla, cardamom and other tropical spices before returning to your beach resort.',
    accommodation: 'Luxury beach resort in Zanzibar',
    meals: 'Breakfast and Dinner',
  },
  {
    day: 'Day 11',
    title: 'Zanzibar Snorkelling & Beach Day',
    text: 'Enjoy a relaxing island day with an optional snorkelling experience in the clear waters of Zanzibar. Discover colourful marine life and enjoy the afternoon relaxing on the beach.',
    accommodation: 'Luxury beach resort in Zanzibar',
    meals: 'Breakfast and Dinner',
  },
  {
    day: 'Day 12',
    title: 'Private Zanzibar Island Experience',
    text: 'Enjoy a flexible day in Zanzibar. Choose between a private beach experience, cultural activities, water activities or simply relaxing at your resort and enjoying the Indian Ocean.',
    accommodation: 'Luxury beach resort in Zanzibar',
    meals: 'Breakfast and Dinner',
  },
  {
    day: 'Day 13',
    title: 'Sunset Dhow Cruise & Zanzibar Evening',
    text: 'Spend the day relaxing before enjoying a traditional Zanzibar dhow cruise at sunset. Sail along the coast and enjoy beautiful ocean views as the sun goes down.',
    accommodation: 'Luxury beach resort in Zanzibar',
    meals: 'Breakfast and Dinner',
  },
  {
    day: 'Day 14',
    title: 'Zanzibar Departure',
    text: 'Enjoy your final breakfast and some free time at the resort before your transfer to Zanzibar Airport for your onward journey. Take home unforgettable memories from your Tanzania safari and Zanzibar holiday.',
    accommodation: 'No accommodation included',
    meals: 'Breakfast',
  },
];

const included = [
  'Private 4x4 safari vehicle with pop-up roof',
  'Professional English-speaking safari guide',
  'Arusha hotel pickup and safari transfers',
  'Tarangire National Park entrance fees',
  'Lake Manyara National Park entrance fees',
  'Serengeti National Park entrance fees',
  'Ngorongoro Conservation Area and crater fees',
  'Luxury lodge or tented camp accommodation during safari',
  'Luxury beach resort accommodation in Zanzibar',
  'Meals as listed in the itinerary',
  'Drinking water during the safari',
  'Domestic flight from Arusha to Zanzibar',
  'Zanzibar airport and hotel transfers',
  'Stone Town guided experience',
  'Spice farm experience',
];

const excluded = [
  'International flights',
  'Tanzania visa fees',
  'Travel insurance',
  'Tips and gratuities',
  'Alcoholic and premium drinks',
  'Personal expenses and souvenirs',
  'Optional activities not listed in the itinerary',
  'Spa treatments',
  'Additional Zanzibar excursions',
];

const whatToBring = [
  'Comfortable safari clothing',
  'Light evening clothes',
  'Warm jacket for cool mornings',
  'Sun hat and sunscreen',
  'Comfortable walking shoes',
  'Swimwear for Zanzibar',
  'Camera or binoculars',
  'Personal medication',
  'Travel documents and passport',
  'Small day bag',
];

const priceRows = [
  { people: '1 person', price: 'US$4,650' },
  { people: '2 people', price: 'US$3,250 per person' },
  { people: '3 people', price: 'US$2,850 per person' },
  { people: '4 people', price: 'US$2,650 per person' },
  { people: '5–6 people', price: 'US$2,450 per person' },
];

export default function FourteenDaysSafariZanzibarPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="14 Days Tanzania Safari + Zanzibar"
        subtitle="Experience the best of Tanzania with an unforgettable Northern Circuit safari followed by a relaxing Zanzibar beach escape."
        image="/images/fleet.jpeg"
      />

      {/* OVERVIEW + ITINERARY + DETAILS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">

            {/* LEFT SIDE */}
            <div className="md:col-span-2">

              <p className="font-bold text-gold">
                SAFARI + ZANZIBAR
              </p>

              <h2 className="section-title mt-3">
                14 Days Tanzania Safari & Zanzibar
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                Experience the highlights of Northern Tanzania before
                relaxing on the beautiful beaches of Zanzibar. This private
                journey combines Tarangire, Lake Manyara, Serengeti and
                Ngorongoro with culture, beaches and island experiences in
                Zanzibar.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                Enjoy a comfortable pace, private safari vehicle,
                professional guide and carefully selected accommodation
                throughout your Tanzania adventure.
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
                    <p className="font-bold text-gold">
                      {item.day}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-forest">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-black/70">
                      {item.text}
                    </p>

                    <div className="mt-5 space-y-2 border-t border-black/10 pt-5 text-black/70">

                      <p>
                        <strong className="text-forest">
                          Accommodation:
                        </strong>{' '}
                        {item.accommodation}
                      </p>

                      <p>
                        <strong className="text-forest">
                          Meals:
                        </strong>{' '}
                        {item.meals}
                      </p>

                    </div>
                  </article>
                ))}
              </div>

            </div>

            {/* RIGHT SIDE */}
            <aside className="h-fit rounded-3xl bg-forest p-8 text-white shadow-xl">

              <h2 className="text-2xl font-bold">
                Safari Details
              </h2>

              <div className="mt-6 space-y-4">

                <p>
                  <strong>Duration:</strong> 14 Days / 13 Nights
                </p>

                <p>
                  <strong>Departure:</strong> Arusha
                </p>

                <p>
                  <strong>Destinations:</strong> Tarangire, Lake Manyara,
                  Serengeti, Ngorongoro & Zanzibar
                </p>

                <p>
                  <strong>Tour Type:</strong> Private Safari
                </p>

                <p>
                  <strong>Accommodation:</strong> Luxury Lodge / Tented Camp
                  & Beach Resort
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
                  US$2,450
                </p>

                <p className="mt-1 text-sm">
                  per person
                </p>

                <p className="mt-3 text-xs leading-5">
                  Based on 5–6 people sharing. Final price depends on
                  group size, accommodation level, season and travel dates.
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

      {/* PRICES */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-bold text-gold">
              SAFARI + ZANZIBAR PRICES
            </p>

            <h2 className="section-title mt-3">
              Price by Group Size
            </h2>

            <p className="mt-5 leading-7 text-black/70">
              Prices are starting estimates and may vary depending on
              accommodation level, season, travel dates and group size.
            </p>

          </div>

          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl bg-white shadow-xl">

            <div className="grid grid-cols-2 bg-forest px-6 py-4 font-bold text-white">

              <span>
                Group Size
              </span>

              <span className="text-right">
                Starting Price
              </span>

            </div>

            {priceRows.map((row) => (
              <div
                key={row.people}
                className="grid grid-cols-2 border-b border-black/10 px-6 py-5 last:border-b-0"
              >

                <span className="font-medium text-forest">
                  {row.people}
                </span>

                <span className="text-right text-black/70">
                  {row.price}
                </span>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* INCLUDED / EXCLUDED */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="text-3xl font-bold text-forest">
              What Is Included
            </h2>

            <ul className="mt-6 space-y-3">

              {included.map((item) => (
                <li key={item}>
                  ✅ {item}
                </li>
              ))}

            </ul>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="text-3xl font-bold text-forest">
              What Is Excluded
            </h2>

            <ul className="mt-6 space-y-3">

              {excluded.map((item) => (
                <li key={item}>
                  ❌ {item}
                </li>
              ))}

            </ul>

          </div>

        </div>
      </section>

      {/* WHAT TO BRING */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 md:items-center">

            <div className="overflow-hidden rounded-3xl shadow-xl">

              <img
                src="/images/safari-ten.jpg"
                alt="Tanzania safari and Zanzibar"
                className="h-[420px] w-full object-cover"
              />

            </div>

            <div>

              <p className="font-bold text-gold">
                WHAT TO BRING
              </p>

              <h2 className="section-title mt-3">
                Prepare for Your Journey
              </h2>

              <ul className="mt-6 space-y-3 text-lg">

                {whatToBring.map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}

              </ul>

            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-forest py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Ready for Your Tanzania Adventure?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Experience an unforgettable Tanzania safari followed by
            beautiful beaches, culture and relaxation in Zanzibar.
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