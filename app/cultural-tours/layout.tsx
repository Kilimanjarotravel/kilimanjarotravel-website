import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tanzania Cultural Tours | Kilimanjaro Travel',
  description:
    'Experience authentic Tanzania cultural tours with Maasai, Chagga, Pare, Sambaa, Hadzabe, Datoga and Mto wa Mbu communities, villages and local traditions.',
  alternates: {
    canonical: 'https://www.kilimanjarotravel.com/cultural-tours',
  },
};

export default function CulturalToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}