import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3 Days Serengeti & Ngorongoro Safari | Kilimanjaro Travel',
  description:
    'Experience a 3-day private Tanzania safari through Serengeti National Park and Ngorongoro Crater, with game drives, accommodation and meals included.',
  alternates: {
    canonical:
      'https://www.kilimanjarotravel.com/safari-packages/3-days-serengeti-ngorongoro',
  },
};

export default function ThreeDaysSafariLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}