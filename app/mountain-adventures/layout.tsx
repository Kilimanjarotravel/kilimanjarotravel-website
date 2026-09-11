import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mountain Adventures Tanzania | Kilimanjaro Travel',
  description:
    'Explore mountain adventures in Tanzania including Mount Meru treks, Usambara Mountains hikes, Lake Natron and Ol Doinyo Lengai adventures.',
  alternates: {
    canonical: 'https://www.kilimanjarotravel.com/mountain-adventures',
  },
};

export default function MountainAdventuresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}