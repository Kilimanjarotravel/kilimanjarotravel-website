import PageHero from '@/components/PageHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import Link from 'next/link';

export default function UsambaraMountainsSafariPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Usambara Mountains & Cultural Safari"
  subtitle="Explore scenic trails, waterfalls, local villages, farms, viewpoints, and the rich culture of Tanzania’s Usambara Mountains."
  image="/images/usambara-safari.jpg"
/>
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-gold">
              Usambara Mountains
            </p>

            <h2 className="mt-3 text-4xl font-bold text-forest">
              Nature, Hiking and Local Culture
            </h2>

            <p className="mt-6 leading-8 text-gray-700">
              The Usambara Mountains are known for cool weather, green forests,
              scenic hiking trails, waterfalls, farms, and welcoming local
              communities.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              This experience can include village walks, local food, forest
              hiking, cultural visits, viewpoints, photography, and overnight
              stays in the mountains.
            </p>
          </div>

          <div className="rounded-3xl bg-cream p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-forest">
              Safari Highlights
            </h3>

            <ul className="mt-6 space-y-4 text-gray-700">
              <li>✓ Usambara mountain hiking</li>
              <li>✓ Waterfalls and forest trails</li>
              <li>✓ Village and cultural experiences</li>
              <li>✓ Local farms and traditional food</li>
              <li>✓ Scenic viewpoints and photography</li>
              <li>✓ Day trip or overnight options</li>
            </ul>

            <Link
              href="/booking"
              className="mt-8 inline-block rounded-full bg-forest px-8 py-4 font-bold text-white"
            >
              Request an Usambara Safari
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-forest py-20 text-white">
  <div className="mx-auto max-w-4xl px-6 text-center">
    <h2 className="text-4xl font-bold">
      Ready for Your Usambara Adventure?
    </h2>

    <p className="mt-6 text-lg leading-8 text-white/80">
      Share your travel dates, preferred activities, number of days, group
      size, and accommodation preferences. Our team will create a personalized
      Usambara Mountains and cultural experience for you.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link
        href="/booking"
        className="rounded-full bg-gold px-8 py-4 font-bold text-white"
      >
        Request Your Usambara Safari
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