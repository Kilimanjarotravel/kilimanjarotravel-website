import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const packages = [
{
title: '2 Days Tarangire & Ngorongoro',
image: '/images/packages-tarangire.jpg',
description:
'Discover Tarangire National Park and the famous Ngorongoro Crater on this unforgettable 2-day safari.',
href: '/safari-packages/2-days-tarangire-ngorongoro',
ready: true,
badge: 'Best for Short Trips',
badgeColor: 'bg-blue-600',
price: '$650',
},
{
title: '3 Days Serengeti & Ngorongoro',
image: '/images/packages-sere.jpg',
description:
'Experience the endless plains of Serengeti and the spectacular Ngorongoro Crater.',
href: '/safari-packages/3-days-serengeti-ngorongoro',
ready: true,
badge: 'Most Popular',
badgeColor: 'bg-red-600',
price: '$950',
},
{
title: '4 Days Tarangire, Serengeti & Ngorongoro',
image: '/images/twiga-tano.jpg',
description:
'Explore Tanzania’s most famous northern parks on a 4-day safari adventure.',
href: '/safari-packages/4-days-tarangire-serengeti-ngorongoro',
ready: true,
badge: 'Best Value',
badgeColor: 'bg-green-600',
price: '$1,250',
},
{
title: '5 Days Northern Circuit Safari',
image: '/images/viboko-ngoro.jpg',
description:
'Explore Tarangire, Serengeti and Ngorongoro on a rewarding five-day private safari.',
href: '/safari-packages/5-days-northern-circuit',
ready: true,
badge: 'Recommended',
badgeColor: 'bg-purple-600',
price: '$1,520',
},
{
  title: '6 Days Northern Circuit Safari',
  image: '/images/mid-range.jpg',
  description:
    'Discover Tarangire, Lake Manyara, Serengeti and Ngorongoro on a complete six-day private safari.',
  href: '/safari-packages/6-days-northern-circuit',
  ready: true,
  badge: 'Premium Choice',
  badgeColor: 'bg-forest',
  price: '$1,780',
},
{
  title: '7 Days Northern Circuit Safari',
  image: '/images/fleet.jpeg',
  description:
    'Enjoy Tarangire, Lake Manyara, Serengeti and Ngorongoro on a complete seven-day private safari.',
  href: '/safari-packages/7-days-northern-circuit',
  ready: true,
  badge: 'Top Seller',
  badgeColor: 'bg-gold',
  price: '$2,040',
},
{
  title: '8 Days Northern Circuit Safari',
  image: '/images/mbwa-ngoro.jpg',
  description:
    'Experience the ultimate Northern Circuit adventure through Tarangire, Lake Manyara, Serengeti and Ngorongoro with an extra day for wildlife viewing.',
  href: '/safari-packages/8-days-northern-circuit',
  ready: true,
  badge: 'Ultimate Safari',
  badgeColor: 'bg-purple-600',
  price: '$2,320',
},
{
  title: '9 Days Northern Circuit Safari',
  image: '/images/lion-manyara.jpg',
  description:
    'Enjoy an extended Northern Circuit safari through Tarangire, Lake Manyara, Serengeti and Ngorongoro.',
  href: '/safari-packages/9-days-northern-circuit',
  ready: true,
  badge: 'Extended Adventure',
  badgeColor: 'bg-orange-600',
  price: '$2,580',
},
{
  title: '10 Days Northern Circuit Safari',
  image: '/images/punda-ngoro.jpg',
  description:
    'Explore Tarangire, Lake Manyara, Serengeti and Ngorongoro on a complete ten-day private safari.',
  href: '/safari-packages/10-days-northern-circuit',
  ready: true,
  badge: 'Ultimate Journey',
  badgeColor: 'bg-indigo-600',
  price: '$2,850',
},
{
  title: '12 Days Honeymoon Safari & Zanzibar',
  image: '/images/honeymoon-safari.jpg',
  description:
    'Enjoy a romantic Tanzania honeymoon combining an unforgettable safari through Tarangire, Lake Manyara, Serengeti and Ngorongoro with a relaxing Zanzibar beach escape.',
  href: '/safari-packages/12-days-honeymoon-safari-zanzibar',
  ready: true,
  badge: 'Honeymoon',
  badgeColor: 'bg-pink-600',
  price: '$4,250',
},
{
  title: '14 Days Safari + Zanzibar',
  image: '/images/safari-zanzibar.jpg',
  description:
    'Experience the best of Tanzania with a Northern Circuit safari followed by a relaxing Zanzibar beach escape.',
  href: '/safari-packages/14-days-safari-zanzibar',
  ready: true,
  badge: 'Ultimate Experience',
  badgeColor: 'bg-gold',
  price: '$5,250',
},
{
  title: '16 Days Kenya + Tanzania Safari',
  image: '/images/pumba.jpg',
  description:
    'Discover the highlights of Kenya and Tanzania on an unforgettable private safari through Amboseli, Lake Naivasha, Maasai Mara, Serengeti, Ngorongoro and Tarangire.',
  href: '/safari-packages/16-days-kenya-tanzania',
  ready: true,
  badge: 'East Africa',
  badgeColor: 'bg-forest',
  price: '$5,050',
},
]
export default function SafariPackagesPage() {
return (
<main>
<Header />
<WhatsApp />

<PageHero
title="Tanzania Safari Packages"
subtitle="Choose from our carefully designed safari packages across Northern Tanzania."
image="/images/honeymoon-two.jpg"
/>

<section className="py-20">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
{packages.map((pkg) => (
<div
key={pkg.title}
className="relative overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
<div
className={`absolute left-4 top-4 z-10 ${pkg.badgeColor} rounded-full px-4 py-2 text-sm font-bold text-white shadow-lg`}
>
{pkg.badge}
</div>

<Link
href={pkg.href}
className="absolute right-4 top-4 z-10 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-bold text-forest shadow-lg transition hover:bg-gold hover:text-white"
>
View Details
</Link>

<img
  src={pkg.image}
  alt={pkg.title}
  className="h-64 w-full object-cover"
/>

<div className="p-6">
<h2 className="text-2xl font-bold text-forest">
{pkg.title}
</h2>
<p className="mt-2 text-xl font-bold text-gold">
  From {pkg.price} / person
</p>

<p className="mt-4 text-black/70">
{pkg.description}
</p>

{pkg.ready ? (
<Link
href={pkg.href}
className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-white"
>
View Itinerary
</Link>
) : (
<span className="mt-6 inline-block rounded-full bg-gray-300 px-6 py-3 font-bold text-gray-700">
Coming Soon
</span>
)}
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