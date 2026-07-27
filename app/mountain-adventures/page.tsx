import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const packages = [
  {
    title: "Mount Meru Trek",
    image: "/images/meru-trek.jpg",
    href: "/mountain-adventures/mount-meru",
    description:
      "Climb Tanzania’s second-highest mountain through forests, wildlife-rich trails, and dramatic summit landscapes.",
  },
  {
    title: "Usambara Mountains",
    image: "/images/usambara.jpg",
    href: "/mountain-adventures/usambara-mountains",
    description:
      "Explore lush forests, scenic viewpoints, waterfalls, local villages, and authentic cultural experiences.",
  },
  {
    title: "Lake Natron & Ol Doinyo Lengai",
    image: "/images/andrew-legai.jpeg",
    href: "/mountain-adventures/lake-natron-ol-doinyo-lengai",
    description:
      "Discover Lake Natron’s unique landscapes and experience an adventurous trek around the sacred Ol Doinyo Lengai.",
  },
];

export default function MountainAdventures() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Mountain Adventures"
  subtitle="Explore Mount Meru, the Usambara Mountains, and the dramatic landscapes of Lake Natron and Ol Doinyo Lengai."
  image="/images/mountain.jpg"
/>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Mountain Adventure Packages</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map(({ title, image, href, description }) => (
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
  {description}
</p>

                  <Link
                    href={href || '/booking'}
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