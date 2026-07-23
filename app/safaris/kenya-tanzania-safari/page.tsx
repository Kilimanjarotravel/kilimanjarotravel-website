import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import Link from 'next/link';

export default function KenyaTanzaniaSafariPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <section className="relative min-h-[340px] bg-[url('/images/kenya-tanzania.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto flex min-h-[340px] max-w-7xl items-center px-6 pt-24 text-white">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.3em] text-gold">
              East Africa Safari
            </p>

            <h1 className="mt-4 text-3xl font-bold md:text-5xl">
              Kenya & Tanzania Combined Safari
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/90">
              Explore the best wildlife destinations in Kenya and Tanzania in
              one unforgettable journey, including the Maasai Mara, Serengeti,
              Ngorongoro Crater, Amboseli, and other iconic parks.
            </p>

            <Link
              href="/booking"
              className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white"
            >
              Book This Safari
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-gold">
              Two Countries, One Adventure
            </p>

            <h2 className="mt-3 text-4xl font-bold text-forest">
              The Best of Kenya and Tanzania
            </h2>

            <p className="mt-6 leading-8 text-gray-700">
              This combined safari connects the famous wildlife areas of Kenya
              and Tanzania, giving travelers the chance to experience different
              landscapes, cultures, wildlife, and national parks in one trip.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              The itinerary can be customized according to your travel dates,
              budget, preferred accommodation, and number of safari days.
            </p>
          </div>

          <div className="rounded-3xl bg-cream p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-forest">
              Safari Highlights
            </h3>

            <ul className="mt-6 space-y-4 text-gray-700">
              <li>✓ Maasai Mara National Reserve</li>
              <li>✓ Serengeti National Park</li>
              <li>✓ Ngorongoro Crater</li>
              <li>✓ Amboseli National Park</li>
              <li>✓ Great Migration opportunities</li>
              <li>✓ Private guide and safari vehicle</li>
              <li>✓ Lodge, luxury or camping options</li>
              <li>✓ Airport and border transfers</li>
            </ul>

            <Link
              href="/booking"
              className="mt-8 inline-block rounded-full bg-forest px-8 py-4 font-bold text-white"
            >
              Request a Custom Itinerary
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}