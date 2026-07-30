import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const itinerary = [
  {
    title: "Hotel Pickup",
    text: "Your driver-guide will pick you up from your hotel in Arusha or Moshi and drive to Serval Wildlife.",
  },
  {
    title: "Arrival at Serval Wildlife",
    text: "Meet giraffes, zebras, lions, monkeys and other rescued animals while learning about wildlife conservation.",
  },
  {
    title: "Lunch",
    text: "Enjoy a delicious lunch in a peaceful natural environment.",
  },
  {
    title: "Photography & Leisure",
    text: "Take memorable photographs and enjoy close-up wildlife encounters.",
  },
  {
    title: "Return to Your Hotel",
    text: "Drive back to your hotel in Arusha or Moshi after an unforgettable day.",
  },
];

const included = [
  "Hotel pickup and drop-off",
  "Private transport",
  "Professional driver-guide",
  "Entrance fees",
  "Lunch",
  "Drinking water",
];

const excluded = [
  "Flights",
  "Travel insurance",
  "Personal expenses",
  "Tips and gratuities",
  "Alcoholic drinks",
];

const whatToBring = [
  "Comfortable walking shoes",
  "Camera",
  "Hat and sunscreen",
  "Light jacket",
  "Personal medication",
];

export default function ServalWildlifePage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Serval Wildlife Day Trip"
        subtitle="Enjoy a unique close-up wildlife experience near Mount Kilimanjaro."
        image="/images/serval-two.jpg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="font-bold text-gold">
                TOUR OVERVIEW
              </p>

              <h2 className="section-title mt-3">
                Meet Wildlife Up Close
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
                Serval Wildlife offers visitors a unique opportunity to
                interact with giraffes, zebras, lions, monkeys and other
                beautiful animals in a peaceful natural environment.
              </p>

              <p className="mt-4 text-lg leading-8 text-black/70">
                This day trip is perfect for families, photographers,
                couples and anyone looking for a relaxed wildlife
                experience close to Arusha and Moshi.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-forest">
                Day Trip Itinerary
              </h2>

              <div className="mt-8 space-y-6">
                {itinerary.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-cream p-6 shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-forest">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-black/70">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="h-fit rounded-3xl bg-forest p-8 text-white shadow-xl">
              <h2 className="text-2xl font-bold">Trip Details</h2>

              <div className="mt-6 space-y-4">
                <p><strong>Duration:</strong> Full Day</p>
                <p><strong>Departure:</strong> Arusha / Moshi</p>
                <p><strong>Tour Type:</strong> Private Day Trip</p>
                <p><strong>Best Time:</strong> All Year</p>
                <p><strong>Transport:</strong> Private Vehicle</p>
              </div>

              <Link
                href="/booking"
                className="mt-8 inline-block w-full rounded-full bg-gold px-6 py-3 text-center font-bold text-white"
              >
                Book This Tour
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
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
      <section className="bg-forest py-20 text-white">
  <div className="mx-auto max-w-4xl px-6 text-center">
    <h2 className="font-display text-4xl font-bold md:text-5xl">
      Ready for Your Serval Wildlife Adventure?
    </h2>

    <p className="mt-5 text-lg leading-8 text-white/80">
      Contact Kilimanjaro Travel today and receive a tailor-made quotation for
      your private Serval Wildlife day trip.
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
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </section>
      
            <Footer />
          </main>
        );
      }