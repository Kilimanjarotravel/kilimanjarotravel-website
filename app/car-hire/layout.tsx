import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Hire & Airport Transfers Tanzania | Kilimanjaro Travel',
  description:
    'Book reliable car hire and airport transfers in Tanzania. Comfortable vehicles, professional drivers and transport for safaris, business trips and private tours.',
  alternates: {
    canonical: 'https://www.kilimanjarotravel.com/car-hire',
  },
};

export default function CarHireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}