import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5 Days Northern Circuit Safari Tanzania | Kilimanjaro Travel',
  description:
    'Experience a 5-day private Northern Circuit safari through Tarangire, Serengeti and Ngorongoro, with game drives, accommodation and meals included.',
  alternates: {
    canonical:
      'https://www.kilimanjarotravel.com/safari-packages/5-days-northern-circuit',
  },
};

export default function FiveDaysNorthernCircuitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}