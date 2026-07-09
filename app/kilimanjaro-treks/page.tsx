import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const routes = [
  ['Machame Route', '6–7 Days', 'Moderate to challenging', '/images/landcruiser.jpeg'],
  ['Lemosho Route', '7–8 Days', 'Scenic and highly recommended', '/images/lion.jpeg'],
  ['Marangu Route', '5–6 Days', 'Hut accommodation route', '/images/fleet.jpeg'],
  ['Rongai Route', '6–7 Days', 'Quiet northern approach', '/images/safari-vehicle.jpeg'],
  ['Northern Circuit', '8–9 Days', 'Longest and most scenic route', '/images/zanzibar.jpeg'],
  ['Mount Meru', '3–4 Days', 'Great acclimatization climb', '/images/landcruiser.jpeg'],
];

export default function Treks() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Kilimanjaro Treks"
        subtitle="Climb Africa’s highest mountain with experienced mountain guides."
        image="/images/landcruiser.jpeg"
      />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Popular Routes</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {routes.map(([title, days, difficulty, image]) => (
              <div
                key={title}
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <img
                  src={image}
                  alt={title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-forest">{title}</h3>

                  <p className="mt-3 font-semibold text-gold">{days}</p>

                  <p className="mt-3 leading-7 text-black/70">
                    {difficulty}. Guided trek including guides, porters, meals,
                    park fees, transfers and full mountain support team.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
                  >
                    Book This Trek
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}