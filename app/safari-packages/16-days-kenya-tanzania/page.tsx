import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const itinerary = [
  {
    day: 'Day 1',
    title: 'Arrival in Nairobi, Kenya',
    text: 'Arrive in Nairobi and meet your safari representative. Transfer to your hotel and enjoy a relaxed evening before beginning your Kenya and Tanzania safari adventure.',
    accommodation: 'Hotel in Nairobi',
    meals: 'Dinner',
  },
  {
    day: 'Day 2',
    title: 'Nairobi to Amboseli National Park',
    text: 'After breakfast, drive to Amboseli National Park. Enjoy an afternoon game drive with spectacular views of Mount Kilimanjaro. Amboseli is famous for its large elephant herds and beautiful open landscapes.',
    accommodation: 'Lodge or tented camp in Amboseli',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 3',
    title: 'Full-Day Amboseli National Park Safari',
    text: 'Spend the full day exploring Amboseli. Search for elephants, lions, giraffes, zebras, buffaloes, hippos and many species of birds while enjoying views of Mount Kilimanjaro when weather conditions are clear.',
    accommodation: 'Lodge or tented camp in Amboseli',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 4',
    title: 'Amboseli to Lake Naivasha',
    text: 'After breakfast, travel toward the Great Rift Valley and Lake Naivasha. Enjoy the changing landscapes of Kenya and relax at your lodge after the journey.',
    accommodation: 'Lodge near Lake Naivasha',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 5',
    title: 'Lake Naivasha to Maasai Mara',
    text: 'Continue to the famous Maasai Mara National Reserve. Arrive in time for an afternoon game drive across the rolling grasslands, searching for lions, cheetahs, elephants, giraffes, zebras and wildebeest.',
    accommodation: 'Lodge or tented camp in Maasai Mara',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 6',
    title: 'Full-Day Maasai Mara Safari',
    text: 'Enjoy a full day exploring Maasai Mara. Your guide will follow current wildlife activity and choose the best areas for game viewing. Look for the Big Five and large herds of plains animals.',
    accommodation: 'Lodge or tented camp in Maasai Mara',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 7',
    title: 'Second Full Day in Maasai Mara',
    text: 'Spend another full day in the Mara with morning and afternoon game drives. This extra time allows you to explore different areas of the reserve and enjoy excellent wildlife photography opportunities.',
    accommodation: 'Lodge or tented camp in Maasai Mara',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 8',
    title: 'Maasai Mara to Serengeti, Tanzania',
    text: 'After breakfast, transfer to the airstrip for your scheduled flight connection toward Tanzania. Continue to the Serengeti area and enjoy an afternoon game drive depending on your arrival time.',
    accommodation: 'Lodge or tented camp in Serengeti',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 9',
    title: 'Full-Day Serengeti National Park Safari',
    text: 'Spend the full day exploring the Serengeti plains. Search for lions, cheetahs, leopards, elephants, giraffes, zebras, wildebeest and other wildlife while your guide follows the latest animal movements.',
    accommodation: 'Lodge or tented camp in Serengeti',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 10',
    title: 'Second Full Day in Serengeti',
    text: 'Enjoy another full day of game viewing in Serengeti. Explore different wildlife areas and take advantage of the extra time to experience the huge variety of landscapes and animals found throughout the park.',
    accommodation: 'Lodge or tented camp in Serengeti',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 11',
    title: 'Third Serengeti Safari Day',
    text: 'Enjoy another memorable safari day in Serengeti. Depending on the season, your guide may focus on areas known for predators, large herbivore herds or other recent wildlife activity.',
    accommodation: 'Lodge or tented camp in Serengeti',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 12',
    title: 'Serengeti to Ngorongoro Conservation Area',
    text: 'Enjoy a morning game drive before travelling toward the Ngorongoro Conservation Area. Continue through the scenic highlands and arrive at your lodge near the crater rim or Karatu.',
    accommodation: 'Lodge or tented camp near Ngorongoro or Karatu',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 13',
    title: 'Ngorongoro Crater Safari',
    text: 'Descend into the Ngorongoro Crater for a full or extended morning game drive. Search for lions, elephants, buffaloes, zebras, wildebeest, hippos, hyenas and, with luck, black rhinos.',
    accommodation: 'Lodge or tented camp near Karatu',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 14',
    title: 'Ngorongoro to Tarangire National Park',
    text: 'After breakfast, travel toward Tarangire National Park. Enjoy an afternoon game drive through landscapes famous for giant baobab trees, elephants and large herds of wildlife.',
    accommodation: 'Lodge or tented camp near Tarangire',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 15',
    title: 'Full-Day Tarangire National Park Safari',
    text: 'Spend a full day exploring Tarangire. Follow the Tarangire River and surrounding habitats while searching for elephants, lions, giraffes, zebras, wildebeest, buffaloes and abundant birdlife.',
    accommodation: 'Lodge or tented camp near Tarangire',
    meals: 'Breakfast, Lunch and Dinner',
  },
  {
    day: 'Day 16',
    title: 'Tarangire to Arusha',
    text: 'Enjoy breakfast and a relaxed morning before your transfer to Arusha. Depending on your onward flight schedule, there may be time for a short activity or lunch before the safari officially ends.',
    accommodation: 'No accommodation included after the safari',
    meals: 'Breakfast and Lunch',
  },
];

const included = [
  'Private 4x4 safari vehicle with pop-up roof',
  'Professional English-speaking safari guide',
  'Airport and hotel transfers in Nairobi',
  'Arusha arrival and departure transfers',
  'Accommodation in lodges or tented camps',
  'Meals as listed in the itinerary',
  'Amboseli National Park entrance fees',
  'Maasai Mara National Reserve fees',
  'Serengeti National Park entrance fees',
  'Ngorongoro Conservation Area and crater fees',
  'Tarangire National Park entrance fees',
  'Drinking water during safari game drives',
  'Flight connection from Maasai Mara toward Tanzania',
  'Assistance with Kenya and Tanzania border and travel arrangements',
];

const excluded = [
  'International flights',
  'Kenya and Tanzania visa fees',
  'Travel insurance',
  'Tips and gratuities',
  'Alcoholic and premium drinks',
  'Personal expenses and souvenirs',
  'Laundry services',
  'Optional activities not listed in the itinerary',
  'Additional hotel nights before or after the safari',
];

const whatToBring = [
  'Comfortable safari clothing',
  'Lightweight long-sleeved shirts',
  'Warm jacket for cool mornings',
  'Sun hat and sunscreen',
  'Comfortable walking shoes',
  'Camera or binoculars',
  'Personal medication',
  'Travel documents and passport',
  'Small day bag',
  'Soft-sided luggage for domestic safari flights',
];

const priceRows = [
  { people: '1 person', price: 'US$8,950' },
  { people: '2 people', price: 'US$6,750 per person' },
  { people: '3 people', price: 'US$5,950 per person' },
  { people: '4 people', price: 'US$5,450 per person' },
  { people: '5–6 people', price: 'US$5,050 per person' },
];

export default function SixteenDaysKenyaTanzaniaPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="16 Days Kenya & Tanzania Safari"
        subtitle="Discover the best of East Africa with an unforgettable private safari through Kenya and Tanzania, from Amboseli and Maasai Mara to Serengeti, Ngorongoro and Tarangire."
        image="/images/simba-one.jpg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">

            <div className="md:col-span-2">

              <p className="font-bold text-gold">
                KENYA & TANZANIA SAFARI
              </p>

              <h2 className="section-title mt-3">
                The Ultimate East Africa Safari
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                Experience two of Africa&apos;s most famous safari
                destinations on one unforgettable journey. Explore
                Amboseli and Maasai Mara in Kenya before continuing to
                Tanzania&apos;s legendary Serengeti, Ngorongoro and Tarangire.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                This private sixteen-day safari gives you enough time to
                enjoy the major wildlife areas without rushing from one
                destination to another. Enjoy full game-drive days,
                comfortable accommodation and professional local guides
                throughout your journey.
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
                Safari Details
              </h2>

              <div className="mt-6 space-y-4">

                <p>
                  <strong>Duration:</strong> 16 Days / 15 Nights
                </p>

                <p>
                  <strong>Start:</strong> Nairobi, Kenya
                </p>

                <p>
                  <strong>End:</strong> Arusha, Tanzania
                </p>

                <p>
                  <strong>Countries:</strong> Kenya & Tanzania
                </p>

                <p>
                  <strong>Destinations:</strong> Amboseli, Lake Naivasha,
                  Maasai Mara, Serengeti, Ngorongoro & Tarangire
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
                  US$5,050
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

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-bold text-gold">
              KENYA & TANZANIA SAFARI PRICES
            </p>

            <h2 className="section-title mt-3">
              Price by Group Size
            </h2>

            <p className="mt-5 leading-7 text-black/70">
              Prices are starting estimates and may vary depending on
              accommodation level, season, travel dates, flights and
              group size.
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

      <section className="bg-cream py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 md:items-center">

            <div className="overflow-hidden rounded-3xl shadow-xl">

              <img
                src="/images/safari-ten.jpg"
                alt="Kenya and Tanzania safari"
                className="h-[420px] w-full object-cover"
              />

            </div>

            <div>

              <p className="font-bold text-gold">
                WHAT TO BRING
              </p>

              <h2 className="section-title mt-3">
                Prepare for Your Safari
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

      <section className="bg-forest py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="font-bold uppercase tracking-wide text-gold">
            KENYA + TANZANIA
          </p>

          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Ready for Your East Africa Safari?
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Experience the incredible wildlife of Kenya and Tanzania
            on one unforgettable private safari. Contact Kilimanjaro
            Travel for availability, accommodation options and a
            tailor-made quotation.
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