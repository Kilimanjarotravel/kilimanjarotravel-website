import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    day: 'Day 1',
    title: 'Arusha to Tarangire National Park',
    text: 'Meet your private safari guide in Arusha and drive to Tarangire National Park. Enjoy a romantic first safari with beautiful landscapes, giant baobab trees and excellent wildlife viewing. Look for elephants, giraffes, zebras, wildebeest, lions and abundant birdlife.',
    accommodation: 'Lodge or luxury tented camp',
    meals: 'Lunch and Dinner',
  },
  {
    day: 'Day 2',
    title: 'Lake Manyara National Park',
    text: 'After breakfast, continue to Lake Manyara National Park for a scenic game drive. Explore the forest, woodland and lakeshore areas while looking for elephants, buffaloes, giraffes, hippos, monkeys and colourful birdlife.',
    accommodation: 'Lodge or luxury tented camp',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 3',
    title: 'Lake Manyara to Serengeti National Park',
    text: 'Travel through the beautiful Ngorongoro highlands toward Serengeti. Enter the legendary Serengeti plains and enjoy an afternoon game drive. Watch the sunset together in the heart of Tanzania’s most famous wildlife destination.',
    accommodation: 'Luxury lodge or tented camp in Serengeti',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 4',
    title: 'Full-Day Serengeti Safari',
    text: 'Enjoy a full private game-drive day in Serengeti. Your guide will select the best wildlife areas according to the season and animal movements. Spend the day searching for lions, cheetahs, leopards, elephants, giraffes and large herds.',
    accommodation: 'Luxury lodge or tented camp in Serengeti',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 5',
    title: 'Romantic Serengeti Experience',
    text: 'Enjoy another unforgettable day in Serengeti with morning and afternoon game drives. Take time to relax together, enjoy the scenery and experience the peaceful beauty of the endless plains.',
    accommodation: 'Luxury lodge or tented camp in Serengeti',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 6',
    title: 'Serengeti to Ngorongoro Conservation Area',
    text: 'Enjoy a final morning game drive in Serengeti before travelling toward the Ngorongoro Conservation Area. Take in spectacular highland scenery and enjoy a relaxing evening at your lodge.',
    accommodation: 'Luxury lodge near Ngorongoro or Karatu',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 7',
    title: 'Ngorongoro Crater Safari & Flight to Zanzibar',
    text: 'Descend into the Ngorongoro Crater for an unforgettable morning game drive. Search for elephants, lions, buffaloes, zebras, hippos, hyenas and, with luck, black rhinos. After the safari, transfer for your flight to Zanzibar and begin your romantic island escape.',
    accommodation: 'Luxury beach resort in Zanzibar',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 8',
    title: 'Zanzibar Beach Relaxation',
    text: 'Wake up beside the Indian Ocean and enjoy a relaxed honeymoon day. Spend time on the beach, swim in the warm turquoise water and enjoy your resort at your own pace. This is your day to slow down and enjoy Zanzibar together.',
    accommodation: 'Luxury beach resort in Zanzibar',
    meals: 'Breakfast and Dinner',
  },
  {
    day: 'Day 9',
    title: 'Stone Town & Romantic Zanzibar Experience',
    text: 'Explore the historic streets of Stone Town with your private guide. Discover Zanzibar’s rich history, local culture and beautiful architecture before enjoying a romantic evening together.',
    accommodation: 'Luxury beach resort in Zanzibar',
    meals: 'Breakfast and Dinner',
  },
  {
    day: 'Day 10',
    title: 'Spice Farm & Beach Experience',
    text: 'Visit a traditional spice farm and discover why Zanzibar is known as the Spice Island. Enjoy a private cultural experience before returning to the coast for a relaxed afternoon on the beach.',
    accommodation: 'Luxury beach resort in Zanzibar',
    meals: 'Breakfast and Dinner',
  },
  {
    day: 'Day 11',
    title: 'Private Romantic Zanzibar Day',
    text: 'Enjoy a special honeymoon day designed for relaxation and romance. Choose from a private beach experience, sunset dhow cruise, snorkelling or simply relaxing together at your luxury resort.',
    accommodation: 'Luxury beach resort in Zanzibar',
    meals: 'Breakfast and Dinner',
  },
  {
    day: 'Day 12',
    title: 'Zanzibar Departure',
    text: 'Enjoy your final breakfast in Zanzibar and some free time before your transfer to Zanzibar Airport for your onward journey. Take home unforgettable memories from your Tanzania honeymoon safari and Zanzibar escape.',
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
  'Spa treatments and private romantic experiences',
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

export default function HoneymoonSafariZanzibarPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="12 Days Honeymoon Safari + Zanzibar"
        subtitle="A romantic Tanzania honeymoon combining unforgettable wildlife, luxury safari experiences and the beautiful beaches of Zanzibar."
        image="/images/honeymoon-two.jpg"
      />

      {/* SAFARI OVERVIEW & DETAILS */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">

            <div className="md:col-span-2">

              <p className="font-bold text-gold">
                HONEYMOON SAFARI & ZANZIBAR
              </p>

              <h2 className="section-title mt-3">
                A Romantic Tanzania Honeymoon
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                Begin your honeymoon with an unforgettable private safari
                through Tarangire, Lake Manyara, Serengeti and Ngorongoro
                before flying to Zanzibar for a relaxing beach escape.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                This carefully designed journey combines wildlife adventure,
                comfortable accommodation, private experiences and time to
                relax together on the Indian Ocean.
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

            <aside className="h-fit rounded-3xl bg-forest p-8 text-white shadow-xl">

              <h2 className="text-2xl font-bold">
                Honeymoon Details
              </h2>

              <div className="mt-6 space-y-4">

                <p>
                  <strong>Duration:</strong> 12 Days / 11 Nights
                </p>

                <p>
                  <strong>Departure:</strong> Arusha
                </p>

                <p>
                  <strong>Destinations:</strong> Tarangire, Lake Manyara,
                  Serengeti, Ngorongoro & Zanzibar
                </p>

                <p>
                  <strong>Tour Type:</strong> Private Honeymoon Safari
                </p>

                <p>
                  <strong>Accommodation:</strong> Luxury Lodge / Tented Camp
                  & Beach Resort
                </p>

                <p>
                  <strong>Best Time:</strong> All Year
                </p>

              </div>

              <Link
                href="/booking"
                className="mt-8 inline-block w-full rounded-full bg-gold px-6 py-3 text-center font-bold text-white"
              >
                Plan Your Honeymoon
              </Link>

            </aside>

          </div>
        </div>
      </section>

      {/* HONEYMOON PRICE */}

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-bold text-gold">
              HONEYMOON PRICE
            </p>

            <h2 className="section-title mt-3">
              Honeymoon Price
            </h2>

            <p className="mt-5 leading-7 text-black/70">
              This honeymoon package is designed for two people sharing.
              Final pricing may vary depending on accommodation level,
              season and travel dates.
            </p>

          </div>

          <div className="mx-auto mt-10 max-w-xl rounded-3xl bg-white p-8 text-center shadow-xl">

            <p className="text-sm font-bold uppercase tracking-wide text-gold">
              Honeymoon Price
            </p>

            <p className="mt-3 text-4xl font-bold text-forest">
              US$4,250
            </p>

            <p className="mt-1 text-black/70">
              per person
            </p>

            <div className="mt-5 border-t border-black/10 pt-5">

              <p className="text-2xl font-bold text-gold">
                US$8,500 for two people
              </p>

              <p className="mt-2 text-sm text-black/60">
                Based on two people sharing.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* INCLUDED & EXCLUDED */}

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
                src="/images/safari-zanzibar.jpg"
                alt="Honeymoon safari and Zanzibar"
                className="h-[420px] w-full object-cover"
              />

            </div>

            <div>

              <p className="font-bold text-gold">
                WHAT TO BRING
              </p>

              <h2 className="section-title mt-3">
                Prepare for Your Honeymoon
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

      {/* FINAL CALL TO ACTION */}

      <section className="bg-forest py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Ready for Your Honeymoon Adventure?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Let Kilimanjaro Travel help you create a romantic safari and
            Zanzibar experience tailored to your travel dates and preferences.
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