import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const packages = [
  {
    title: 'Luxury Safaris',
    image: '/images/luxury-safari.jpg',
    href: '/safaris/luxury-safaris',
    description:
      'Premium lodges, private guides, fine dining, and tailor-made wildlife experiences across Tanzania.',
  },
  {
    title: 'Mid-range Safaris',
    image: '/images/mid-range.jpg',
    href: '/safaris/mid-range-safaris',
    description:
      'Comfortable lodges, professional guides, and excellent value for an unforgettable Tanzania safari.',
  },
  {
    title: 'Budget Camping Safaris',
    image: '/images/budget-safari.jpg',
    href: '/safaris/budget-camping-safaris',
    description:
      'Affordable camping adventures that bring you close to nature and Tanzania’s famous wildlife.',
  },
  {
    title: 'Family Safaris',
    image: '/images/family-safari.jpg',
    href: '/safaris/family-safaris',
    description:
      'Family-friendly itineraries with comfortable travel, flexible schedules, and activities for all ages.',
  },
  {
    title: 'Honeymoon Safaris',
    image: '/images/honeymoon-safari.jpg',
    href: '/safaris/honeymoon',
    description:
      'Romantic safari moments, private lodges, beautiful sunsets, and unforgettable experiences for couples.',
  },
  {
    title: 'Mara River Crossing Safari',
    image: '/images/mara-safari.jpeg',
    href: '/safaris/mara-river-crossing',
    description:
      'Witness the dramatic Great Migration river crossings in the northern Serengeti and Maasai Mara.',
  },
  {
    title: 'Ndutu Migration Safari',
    image: '/images/ndutu-safari.jpg',
    href: '/safaris/ndutu-migration',
    description:
      'Experience the calving season, large herds, predators, and migration action in the Ndutu plains.',
  },
  {
    title: 'Southern Circuit Safari',
    image: '/images/southern.jpg',
    href: '/safaris/southern-circuit',
    description:
      'Explore quieter parks, remote wilderness, rivers, and abundant wildlife in southern Tanzania.',
  },
    {
    title: 'Kenya & Tanzania Combined Safari',
    image: '/images/kenya-tanzania.jpg',
    href: '/safaris/kenya-tanzania-safari',
    description:
      'Combine Maasai Mara, Serengeti, Ngorongoro, Amboseli, and other iconic East African destinations.',
  },
  {
    title: 'Mkomazi Rhino Safari',
    image: '/images/mkomazi-safari.jpg',
    href: '/safaris/mkomazi-rhino-safari',
    description:
      'Discover rare black rhinos, African wild dogs, birdlife, and peaceful savannah landscapes.',
  },
  {
    title: 'Usambara Mountains & Cultural Safari',
    image: '/images/usambara-safari.jpg',
    href: '/safaris/usambara-mountains-safari',
    description:
      'Enjoy mountain hiking, waterfalls, forest trails, village visits, local farms, and cultural experiences.',
  },
  {
    title: 'Marine Safari, Snorkeling & Diving',
    image: '/images/marine-safari.jpg',
    href: '/safaris/marine-safari',
    description:
      'Explore coral reefs, tropical fish, diving sites, sandbanks, beaches, and the Indian Ocean.',
  },
];

export default function Safaris() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Tanzania Safari Experiences"
        subtitle="Discover unforgettable wildlife safaris, mountain adventures, cultural tours, waterfalls, hot springs, and beach holidays across Tanzania."
        image="/images/lion.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Special Safaris</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map(({ title, image, href, description }) => (
              <div
                className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                key={title}
              >
                <img
  src={image}
  alt={title}
  className="h-64 w-full object-cover object-center"
/>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-forest">{title}</h3>

                  <p className="mt-4 leading-7 text-black/70">
                    {description}
                  </p>

                  <Link
                    href={href}
                    className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
                  >
                    Explore Adventure
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