import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tanzania Safari Packages | Kilimanjaro Travel',
  description:
    'Explore Tanzania safari packages from 2 to 16 days, including Serengeti, Ngorongoro, Tarangire, Northern Circuit, honeymoon safaris and Kenya-Tanzania adventures.',
  alternates: {
    canonical: 'https://www.kilimanjarotravel.com/safari-packages',
  },
};

export default function SafariPackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}