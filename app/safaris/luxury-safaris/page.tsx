import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Stay in premium lodges and luxury tented camps',
  'Travel in a private comfortable safari vehicle',
  'Enjoy personalized service and flexible itineraries',
  'Explore Tanzania with professional safari guides',
  'Experience excellent wildlife viewing in comfort',
];

export default function LuxurySafarisPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Luxury Safaris"
  subtitle="Experience Tanzania in comfort with premium lodges, private safari vehicles, expert guides, and personalized service."
  image="/images/lion.jpeg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                Premium Safari Experience
              </p>

              <h2 className="mt-3 text-4xl font-bold">
  Luxury Tanzania Safari Experience
</h2>

              <p className="mt-6 leading-8 text-black/70">
                Enjoy a private luxury safari across Tanzania’s famous national parks with premium lodges, comfortable safari vehicles, and professional guides.
              </p>

              <p className="mt-4 leading-8 text-black/70">
                This experience is designed for travelers who want excellent wildlife viewing, personalized service, fine accommodation, and a relaxed safari itinerary.
              </p>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h3 className="text-2xl font-bold">Luxury Safari Highlights</h3>

              <ul className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-bold text-gold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/booking"
                className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white"
              >
                Book This Luxury Safari
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}