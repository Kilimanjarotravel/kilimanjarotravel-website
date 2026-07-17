import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const packages = [
  [
    'Mount Meru Trek',
    '/images/fleet.jpeg',
    '/mountain-adventures/mount-meru',
  ],
  [
    'Usambara Mountains',
    '/images/lion.jpeg',
    '/mountain-adventures/usambara-mountains',
  ],
  [
    'Lake Natron & Ol Doinyo Lengai',
    '/images/landcruiser.jpeg',
    '/mountain-adventures/lake-natron-ol-doinyo-lengai',
  ],
];

export default function MountainAdventures() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Mountain Adventures"
  subtitle="Explore Mount Meru, the Usambara Mountains, and the dramatic landscapes of Lake Natron and Ol Doinyo Lengai."
  image="/images/landcruiser.jpeg"
/>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Mountain Adventure Packages</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map(([title, image, href]) => (
              <div
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                key={title}
              >
                <img
                  src={image}
                  alt={title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-forest">{title}</h3>

                  <p className="mt-4 leading-7 text-black/70">
                    Tailor-made mountain adventures with professional guides, scenic trails, cultural experiences, and unforgettable landscapes.
                  </p>

                  <Link
                    href={href || '/booking'}
                    className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
                  >
                    View Adventure
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