import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const itinerary = [
  {
    title: "Hotel Pickup",
    text: "Your driver-guide will pick you up from your hotel in Arusha and begin the scenic drive toward Makuyuni.",
  },
  {
    title: "Arrival and Wildlife Exploration",
    text: "Begin exploring the Makuyuni area while searching for giraffes, zebras, antelopes, monkeys and other wildlife.",
  },
  {
    title: "Nature and Photography Experience",
    text: "Enjoy the beautiful landscapes, take photographs and learn about the local ecosystem from your guide.",
  },
  {
    title: "Picnic Lunch",
    text: "Relax and enjoy a picnic lunch in a peaceful location surrounded by nature.",
  },
  {
    title: "Afternoon Wildlife Drive",
    text: "Continue exploring the area and enjoy more opportunities to observe wildlife and birdlife.",
  },
  {
    title: "Return to Arusha",
    text: "After your Makuyuni wildlife experience, drive back to your hotel in Arusha.",
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

export default function MakuyuniWildlifePage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Makuyuni Wildlife Day Trip"
  subtitle="Discover wildlife, open landscapes and the natural beauty of Makuyuni on a memorable private day trip."
  image="/images/makuyunu-five.jpg"
/>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="font-bold text-gold">
                TOUR OVERVIEW
              </p>

              <h2 className="section-title mt-3">
  Discover the Wild Beauty of Makuyuni
</h2>

              <p className="mt-6 text-lg leading-8 text-black/70">
  Makuyuni offers a peaceful wildlife experience surrounded by open landscapes,
  acacia woodland and beautiful views of northern Tanzania. The area provides
  excellent opportunities to observe wildlife away from the busiest safari
  routes.
</p>

<p className="mt-4 text-lg leading-8 text-black/70">
  This private day trip is ideal for travellers looking for nature, wildlife
  photography and a relaxed safari experience. Depending on the season, you may
  see giraffes, zebras, antelopes, wildebeest, monkeys and a variety of birdlife.
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
    <p><strong>Departure:</strong> Arusha</p>
    <p><strong>Tour Type:</strong> Private Day Trip</p>
    <p><strong>Best Time:</strong> All Year</p>
    <p><strong>Transport:</strong> Private Safari Vehicle</p>
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

<section className="py-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid gap-8 md:grid-cols-2 md:items-center">

      <div className="overflow-hidden rounded-3xl shadow-xl">
        <img
          src="/images/makuyuni-two.jpg"
          alt="Makuyuni Wildlife Day Trip"
          className="h-[420px] w-full object-cover"
        />
      </div>

      <div>
        <p className="font-bold text-gold">WHAT TO BRING</p>

        <h2 className="section-title mt-3">
          Prepare for Your Makuyuni Wildlife Day Trip
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
      Ready for Your Makuyuni Wildlife Adventure?
    </h2>

    <p className="mt-5 text-lg leading-8 text-white/80">
      Contact Kilimanjaro Travel today and receive a tailor-made quotation for your private Makuyuni Wildlife day trip.
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