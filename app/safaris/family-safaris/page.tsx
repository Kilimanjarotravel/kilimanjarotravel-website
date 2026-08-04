import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const highlights = [
  'Flexible safari schedules for families',
  'Comfortable and child-friendly accommodation',
  'Professional guides experienced with families',
  'Fun and educational wildlife experiences',
  'Ideal for parents, children, and multigenerational groups',
];

export default function FamilySafarisPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Family Safaris"
  subtitle="Enjoy a comfortable Tanzania safari designed for families, with flexible pacing, child-friendly accommodation, and unforgettable wildlife experiences."
  image="/images/family-two.jpg"
/>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-gold">
                Comfortable Family Safari Experience
              </p>

              <h2 className="mt-3 text-4xl font-bold">
  Family Tanzania Safari Experience
</h2>

              <p className="mt-6 leading-8 text-black/70">
  Enjoy a private Tanzania safari designed around the needs of your family,
  with flexible schedules, comfortable accommodation, and child-friendly
  wildlife experiences.
</p>

<p className="mt-4 leading-8 text-black/70">
  Our family safaris are suitable for parents, children, and
  multigenerational groups. We can customize the pace, destinations,
  activities, accommodation, and travel dates to suit your family.
</p>
            </div>

            <div className="rounded-3xl bg-cream p-8 shadow-lg">
              <h3 className="text-2xl font-bold">Family Safari Highlights</h3>

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
                Request a Family Safari
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-forest py-20 text-white">
  <div className="mx-auto max-w-4xl px-6 text-center">
    <h2 className="text-4xl font-bold">
      Ready for Your Family Safari?
    </h2>

    <p className="mt-6 text-lg leading-8 text-white/80">
      Share your travel dates, number and ages of children, preferred parks,
      accommodation style, and budget. Our safari specialists will create a
      comfortable and personalized family safari itinerary for you.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link
        href="/booking"
        className="rounded-full bg-gold px-8 py-4 font-bold text-white"
      >
        Request Your Family Safari
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