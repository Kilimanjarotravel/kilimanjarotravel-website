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
const itinerary = [
  {
    title: 'Day 1: Arrival in Arusha',
    text: 'Meet our representative at the airport and transfer to your luxury lodge in Arusha for relaxation and safari briefing.',
  },
  {
    title: 'Day 2: Tarangire National Park',
    text: 'Travel to Tarangire for a private game drive among large elephant herds, ancient baobab trees, and diverse wildlife.',
  },
  {
    title: 'Day 3: Serengeti National Park',
    text: 'Fly or drive to the Serengeti and enjoy an afternoon game drive before settling into a premium lodge or luxury tented camp.',
  },
  {
    title: 'Day 4: Full Day in the Serengeti',
    text: 'Spend the day exploring the Serengeti with a private guide, flexible game-drive times, and a picnic or lodge lunch.',
  },
  {
    title: 'Day 5: Ngorongoro Crater',
    text: 'Descend into the Ngorongoro Crater for exceptional wildlife viewing, then continue to a luxury lodge on the crater highlands.',
  },
  {
    title: 'Day 6: Return to Arusha',
    text: 'Enjoy a relaxed breakfast before returning to Arusha or transferring to the airport for your onward journey.',
  },
];

const included = [
  'Airport pickup and drop-off',
  'Private luxury safari vehicle',
  'Professional English-speaking guide',
  'Premium lodge and tented-camp accommodation',
  'Park and conservation fees',
  'Meals during the safari',
  'Drinking water',
];

const excluded = [
  'International and domestic flights unless specified',
  'Travel insurance',
  'Visa fees',
  'Tips and gratuities',
  'Personal expenses',
  'Alcoholic and premium drinks',
];

const whatToBring = [
  'Comfortable safari clothing',
  'Sun hat and sunscreen',
  'Camera or binoculars',
  'Light jacket',
  'Travel documents',
  'Personal medication',
];

export default function LuxurySafarisPage() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Luxury Safaris"
  subtitle="Experience Tanzania in comfort with premium lodges, private safari vehicles, expert guides, and personalized service."
  image="/images/luxury-two.jpg"
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
                Request a Tailor-Made Itinerary
              </Link>
            </div>
          </div>
        </div>
      </section>
<section className="bg-forest py-20 text-white">
  <div className="mx-auto max-w-4xl px-6 text-center">
    <h2 className="text-4xl font-bold">
      Ready for Your Luxury Safari?
    </h2>

    <p className="mt-6 text-lg leading-8 text-white/80">
      Tell us your travel dates, preferred destinations, number of travelers,
      and accommodation preferences. Our safari experts will create a
      personalized luxury itinerary and quotation for you.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link
        href="/booking"
        className="rounded-full bg-gold px-8 py-4 font-bold text-white"
      >
        Request a Tailor-Made Itinerary
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