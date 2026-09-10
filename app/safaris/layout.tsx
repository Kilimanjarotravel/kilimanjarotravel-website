import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tanzania Safari Packages | Kilimanjaro Travel',
  description:
    'Explore Tanzania safari packages including luxury, family, honeymoon, budget camping, Serengeti, Ndutu, Southern Circuit, Mkomazi and marine safaris.',
  alternates: {
    canonical: 'https://www.kilimanjarotravel.com/safaris',
  },
};

export default function SafarisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}