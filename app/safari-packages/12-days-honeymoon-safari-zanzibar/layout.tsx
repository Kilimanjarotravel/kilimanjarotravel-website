import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '12 Days Honeymoon Safari & Zanzibar | Kilimanjaro Travel',
  description:
    'Enjoy a romantic 12-day Tanzania honeymoon combining private safaris in Tarangire, Lake Manyara, Serengeti and Ngorongoro with a relaxing Zanzibar beach escape.',
  alternates: {
    canonical:
      'https://www.kilimanjarotravel.com/safari-packages/12-days-honeymoon-safari-zanzibar',
  },
};

export default function HoneymoonSafariZanzibarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}