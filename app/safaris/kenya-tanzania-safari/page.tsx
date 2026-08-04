import PageHero from '@/components/PageHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import Link from 'next/link';

export default function KenyaTanzaniaSafariPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Kenya & Tanzania Combined Safari"
  subtitle="Explore Maasai Mara, Serengeti, Ngorongoro Crater, Amboseli, and other iconic East African destinations in one unforgettable journey."
  image="/images/kenya-tanzania.jpeg"
/>

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
      <section className="bg-forest py-20 text-white">
  <div className="mx-auto max-w-4xl px-6 text-center">
    <h2 className="text-4xl font-bold">
      Ready for Your Kenya & Tanzania Safari?
    </h2>

    <p className="mt-6 text-lg leading-8 text-white/80">
      Share your travel dates, preferred parks, number of days, accommodation
      style, group size, and budget. Our safari specialists will create a
      personalized Kenya and Tanzania itinerary and quotation for you.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link
        href="/booking"
        className="rounded-full bg-gold px-8 py-4 font-bold text-white"
      >
        Request Your Custom Itinerary
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