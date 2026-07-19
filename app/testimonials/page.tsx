import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TestimonialsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-24 pb-16">
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="font-bold uppercase tracking-widest text-gold">
              Genuine Guest Experiences
            </p>

            <h1 className="mt-3 text-4xl font-bold text-forest md:text-5xl">
              Guest Reviews
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Read genuine guest reviews and travel experiences from customers
              who explored Tanzania with Kilimanjaro Travel.
            </p>

            <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-cream p-8 shadow-xl">
              <div className="text-3xl text-gold">★★★★★</div>

              <h2 className="mt-5 text-2xl font-bold text-forest">
                Read Our TripAdvisor Reviews
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Visit our official TripAdvisor page to read verified reviews
                and see what travelers say about their safari, Kilimanjaro, and
                Tanzania experiences.
              </p>

              <a
                href="https://www.tripadvisor.com/Attraction_Review-g297913-d27540848-Reviews-Kilimanjaro_Travel-Arusha_Arusha_Region.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white transition hover:opacity-90"
              >
                View Reviews on TripAdvisor
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}