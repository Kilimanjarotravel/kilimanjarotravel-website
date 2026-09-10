import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '7 Days Northern Circuit Safari Tanzania | Kilimanjaro Travel',
  description:
    'Experience a 7-day private Northern Circuit safari through Tarangire, Lake Manyara, Serengeti and Ngorongoro, with game drives, accommodation and meals included.',
  alternates: {
    canonical:
      'https://www.kilimanjarotravel.com/safari-packages/7-days-northern-circuit',
  },
};

export default function SevenDaysNorthernCircuitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}