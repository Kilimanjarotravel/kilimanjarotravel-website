import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const packages = [
  {
    title: "Maasai Village Experience",
    image: "/images/maasai-moja.jpg",
    href: "/cultural-tours/maasai-village",
    description:
      "Visit a traditional Maasai community, learn about local customs, join cultural activities, and experience authentic village life.",
  },
  {
    title: "Chagga Cultural Tour",
    image: "/images/chaga-moja.jpeg",
    href: "/cultural-tours/chagga-cultural-tour",
    description:
      "Explore Chagga history, traditional homes, coffee farms, waterfalls, and the rich culture found around Mount Kilimanjaro.",
  },
  {
    title: "Pare Cultural Tour",
    image: "/images/pare-moja.jpg/",
    href: "/cultural-tours/pare-cultural-tour",
    description:
      "Discover the scenic Pare Mountains, historic villages, local farming traditions, and welcoming community experiences.",
  },
  {
    title: "Sambaa Cultural Tour",
    image: "/images/lion.jpeg",
    href: "/cultural-tours/sambaa-cultural-tour",
    description:
      "Experience Sambaa traditions, mountain villages, local markets, storytelling, and beautiful landscapes in the Usambara region.",
  },
  {
    title: "Hadzabe & Datoga Cultural Tour",
    image: "/images/landcruiser.jpeg",
    href: "/cultural-tours/hadzabe-datoga",
    description:
      "Meet the Hadzabe hunter-gatherers and Datoga artisans near Lake Eyasi while learning about their unique ways of life.",
  },
  {
    title: "Mto wa Mbu Cultural Tour",
    image: "/images/zanzibar.jpeg",
    href: "/cultural-tours/mto-wa-mbu",
    description:
      "Walk through a vibrant multicultural village, visit farms and workshops, taste local food, and meet community members.",
  },
];
export default function CulturalTours() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Tanzania Cultural Tours"
  subtitle="Meet local communities, discover traditional lifestyles, explore villages, and experience the rich cultures of Tanzania."
  image="/images/maasai-mbili.jpg"
/>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title">Cultural Tour Experiences</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map(({ title, image, href, description }, index) => (
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
  {description}
</p>

                  <Link
                    href={href || '/booking'}
                    className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
                  >
                    Explore Culture
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