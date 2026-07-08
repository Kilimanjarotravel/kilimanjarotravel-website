import Header from "@/components/Header";
import Footer from "@/components/Footer";

const testimonials = [
  {
    name: "John & Sarah",
    country: "USA",
    text: "Our Tanzania safari was unforgettable. The guide was professional, the vehicle was comfortable, and everything was well organized.",
  },
  {
    name: "Michael",
    country: "UK",
    text: "Climbing Mount Kilimanjaro with Kilimanjaro Travel was one of the best experiences of my life.",
  },
  {
    name: "Emma",
    country: "Australia",
    text: "From safari to Zanzibar, everything was perfectly planned. We felt safe, welcomed and well cared for.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-center text-5xl font-bold text-forest">
          Guest Reviews
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
          Read what travelers say about their Tanzania safaris, Kilimanjaro treks
          and Zanzibar holidays with Kilimanjaro Travel.
        </p>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {testimonials.map((review) => (
            <div key={review.name} className="rounded-3xl bg-white p-8 shadow-xl">
              <div className="text-2xl text-gold">★★★★★</div>
              <p className="mt-5 text-gray-700">“{review.text}”</p>
              <h2 className="mt-6 text-xl font-bold text-forest">
                {review.name}
              </h2>
              <p className="text-gray-500">{review.country}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}