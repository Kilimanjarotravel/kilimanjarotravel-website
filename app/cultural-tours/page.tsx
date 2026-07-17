import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const packages = [
  [
    'Maasai Village Experience',
    '/images/lion.jpeg',
    '/cultural-tours/maasai-village',
  ],
  [
    'Chagga Cultural Tour',
    '/images/fleet.jpeg',
    '/cultural-tours/chagga-cultural-tour',
  ],
  [
  'Pare Cultural Tour',
  '/images/fleet.jpeg',
  '/cultural-tours/pare-cultural-tour',
],
[
  'Sambaa Cultural Tour',
  '/images/lion.jpeg',
  '/cultural-tours/sambaa-cultural-tour',
],
 [
    'Hadzabe & Datoga Cultural Tour',
    '/images/landcruiser.jpeg',
    '/cultural-tours/hadzabe-datoga',
  ],
  [
  'Mto wa Mbu Cultural Tour',
  '/images/zanzibar.jpeg',
  '/cultural-tours/mto-wa-mbu',
],
];
export default function CulturalTours() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Tanzania Cultural Tours"
  subtitle="Meet local communities, discover traditional lifestyles, explore villages, and experience the rich cultures of Tanzania."
  image="/images/lion.jpeg"
/>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Cultural Tour Experiences</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map(([title, image, href], index) => (
              <div
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                key={`${title}-${index}`}
              >
                <img
                  src={image}
                  alt={title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-forest">{title}</h3>

                  <p className="mt-4 leading-7 text-black/70">
                    Authentic cultural experiences with local communities, traditional lifestyles, village visits, and unforgettable Tanzanian hospitality.
                  </p>

                  <Link
                    href={href || '/booking'}
                    className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
                  >
                    View Cultural Tour
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