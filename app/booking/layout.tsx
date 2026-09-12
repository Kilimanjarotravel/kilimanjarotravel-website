import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Tanzania Safari Quote | Kilimanjaro Travel',
  description:
    'Request a personalized quote for Tanzania safaris, Kilimanjaro treks, Zanzibar holidays, mountain adventures, day trips, car hire and airport transfers.',
  alternates: {
    canonical: 'https://www.kilimanjarotravel.com/booking',
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}