import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kilimanjaro Treks & Routes | Kilimanjaro Travel',
  description:
    'Climb Mount Kilimanjaro with experienced guides. Explore Machame, Lemosho, Marangu, Rongai, Northern Circuit, Umbwe and Shira routes.',
  alternates: {
    canonical: 'https://www.kilimanjarotravel.com/kilimanjaro-treks',
  },
};

export default function KilimanjaroTreksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}