import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '16 Days Kenya & Tanzania Safari | Kilimanjaro Travel',
  description:
    'Experience a 16-day private Kenya and Tanzania safari through Amboseli, Lake Naivasha, Maasai Mara, Serengeti, Ngorongoro and Tarangire.',
  alternates: {
    canonical:
      'https://www.kilimanjarotravel.com/safari-packages/16-days-kenya-tanzania',
  },
};

export default function SixteenDaysKenyaTanzaniaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}