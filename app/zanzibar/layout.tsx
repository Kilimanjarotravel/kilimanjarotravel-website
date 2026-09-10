import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zanzibar Holidays & Tours | Kilimanjaro Travel',
  description:
    'Discover Zanzibar holidays, beach escapes, Stone Town, spice tours, dolphin tours, Mnemba snorkeling and romantic honeymoon experiences.',
  alternates: {
    canonical: 'https://www.kilimanjarotravel.com/zanzibar',
  },
};

export default function ZanzibarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}