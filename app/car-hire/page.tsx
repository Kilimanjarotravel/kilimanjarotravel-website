import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const vehicles = [
  ['Safari Land Cruiser', '/images/cruiser.jpg'],
  ['Toyota Alphard', '/images/alphard-two.jpg'],
  ['Toyota Hiace', '/images/min-one.jpeg'],
  ['Toyota Coaster Bus', '/images/coaster-one.jpg'],
  ['Luxury SUV', '/images/luxury-two.jpg'],
  ['Airport Transfer', '/images/alphard.jpg'],
];

export default function CarHire() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Car Hire & Airport Transfers"
  subtitle="Travel comfortably across Tanzania with our modern fleet of well-maintained vehicles and professional drivers."
  image="/images/car-one.jpg"
/>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Our Fleet</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {vehicles.map(([name, image]) => (
              <div
                key={name}
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <img
                  src={image}
                  alt={name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-forest">
                    {name}
                  </h3>

                  <p className="mt-4 leading-7 text-black/70">
  Perfect for safaris, airport transfers, business trips, family vacations, and private tours across Tanzania.
</p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
                  >
                    Book This Vehicle
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     <section className="py-20">
  <div className="mx-auto max-w-6xl px-6 text-center">

    <p className="font-bold uppercase tracking-widest text-gold">
      Why Choose Us
    </p>

    <h2 className="mt-3 text-4xl font-bold">
      Reliable Transportation Across Tanzania
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-4">

      <div className="rounded-2xl bg-cream p-6">
        <h3 className="font-bold">Professional Drivers</h3>
        <p className="mt-3 text-black/70">
          Experienced, licensed and friendly local drivers.
        </p>
      </div>

      <div className="rounded-2xl bg-cream p-6">
        <h3 className="font-bold">Well Maintained Fleet</h3>
        <p className="mt-3 text-black/70">
          Clean, comfortable and regularly serviced vehicles.
        </p>
      </div>

      <div className="rounded-2xl bg-cream p-6">
        <h3 className="font-bold">Airport Transfers</h3>
        <p className="mt-3 text-black/70">
          Reliable pick-up and drop-off services across Tanzania.
        </p>
      </div>

      <div className="rounded-2xl bg-cream p-6">
        <h3 className="font-bold">24/7 Support</h3>
        <p className="mt-3 text-black/70">
          Our team is available whenever you need assistance.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="bg-forest py-20 text-white">
  <div className="mx-auto max-w-4xl px-6 text-center">

    <h2 className="text-4xl font-bold">
      Need a Vehicle for Your Trip?
    </h2>

    <p className="mt-5 text-lg text-white/80">
      Contact us today for a personalized quotation and let us help you choose the perfect vehicle for your journey.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">

      <Link
        href="/contact"
        className="rounded-full bg-gold px-8 py-4 font-bold text-white"
      >
        Request Quote
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