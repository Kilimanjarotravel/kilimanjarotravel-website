import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import Link from 'next/link';

export default function UsambaraMountainsSafariPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <section className="relative min-h-[340px] bg-[url('/images/usambara-safari.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto flex min-h-[340px] max-w-7xl items-center px-6 pt-24 text-white">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.3em] text-gold">
              Special Safari
            </p>

            <h1 className="mt-4 text-3xl font-bold md:text-5xl">
              Usambara Mountains & Cultural Safari
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/90">
              Explore the beautiful Usambara Mountains, local villages,
              waterfalls, forest trails, viewpoints, farms, and the rich
              culture of northeastern Tanzania.
            </p>

            <Link
              href="/booking"
              className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-white"
            >
              Book This Safari
            </Link>
          </div>
        </div>
      </section>

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
              Book This Safari
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}