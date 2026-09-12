import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mara River Crossing Safari Tanzania | Kilimanjaro Travel',
  description:
    'Experience the Great Migration Mara River Crossing in northern Serengeti with a private 6-day safari, professional guide, game drives and carefully selected accommodation.',
  alternates: {
    canonical:
      'https://www.kilimanjarotravel.com/safaris/mara-river-crossing',
  },
};

export default function MaraRiverCrossingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}